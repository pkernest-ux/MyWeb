import { createServer } from "node:http";
import { createHash, randomUUID } from "node:crypto";
import { constants, promises as fs } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contract = "ar-field-survey-v1";
const label = "本機後台（不會同步 GitHub）";
const bodyLimit = 512 * 1024;
const rootFiles = new Set([
  "index.html", "about.html", "services.html", "works.html", "journal.html", "toolkit.html",
  "expertise.html", "video.html", "admin.html", "admin-dashboard.html", "admin-ar.html",
  "ar.html", "ar-v2.html", "ar-v3.html", "ar-v4.html", "ar-v4-field.html", "admin-ar-v4.html",
  "styles.css", "script.js", "content.js", "content.json", "admin-cms.js", "THIRD_PARTY_NOTICES.md",
]);
const assetDirectories = new Set(["ar", "ar-v2", "ar-v3", "ar-v4", "stitch"]);
const dashboardFiles = new Set([
  "agri-dashboard/index.html", "agri-dashboard/data/cache.json", "agri-dashboard/static/echarts.min.js",
  "agri-dashboard/static/dashboard.js", "agri-dashboard/static/style.css", "agri-dashboard/static/taiwan.json",
]);
const contentTypes = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".woff": "font/woff", ".woff2": "font/woff2",
  ".glb": "model/gltf-binary", ".gltf": "model/gltf+json", ".bin": "application/octet-stream",
  ".wasm": "application/wasm", ".mp4": "video/mp4", ".mp3": "audio/mpeg", ".md": "text/plain; charset=utf-8",
};

function fail(status, code, message) {
  return Object.assign(new Error(message), { status, code });
}

function normalizeCollection(json) {
  if (Array.isArray(json?.projects)) {
    return {
      ...json,
      version: json.version || "7.1",
      activeProjectId: json.activeProjectId || json.projects[0]?.project?.id || null,
      projects: json.projects,
    };
  }
  if (json?.project || Array.isArray(json?.buildings)) {
    return { version: "7.1", activeProjectId: json.project?.id || "published", projects: [json] };
  }
  return { version: "7.1", activeProjectId: null, projects: [] };
}

function summarizeProject(item) {
  const stats = { floorPlans: 0, markers: 0, waypoints: 0, edges: 0 };
  for (const building of item.buildings || []) {
    for (const floor of building.floors || []) {
      if (floor.imageUrl) stats.floorPlans += 1;
      if (floor.navigationImageUrl) stats.floorPlans += 1;
      stats.markers += (floor.markers || []).length;
      stats.waypoints += (floor.waypoints || []).length;
      stats.edges += (floor.edges || []).length;
    }
  }
  return { project: item.project || {}, systemConfig: item.systemConfig || {}, stats };
}

function digest(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function isInside(parent, child) {
  const relative = path.relative(parent, child);
  return relative !== "" && !relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative);
}

function safeRequestPath(requestUrl) {
  // Inspect the raw path before URL parsing can normalize away traversal segments.
  if (typeof requestUrl !== "string" || !requestUrl.startsWith("/") || requestUrl.startsWith("//")) return null;
  const raw = requestUrl.split("?")[0];
  let decoded;
  try { decoded = decodeURIComponent(raw); } catch { return null; }
  if (/[\\\u0000-\u001f\u007f%]/.test(decoded)) return null;
  const segments = decoded.split("/").slice(1);
  if (segments.some(segment => segment.startsWith(".") || segment === "..")) return null;
  return decoded;
}

function staticAllowed(relative) {
  if (rootFiles.has(relative) || dashboardFiles.has(relative)) return true;
  const segments = relative.split("/");
  if (segments[0] !== "assets" || !assetDirectories.has(segments[1]) || segments.length < 3) return false;
  if (segments.some(segment => !segment || segment.startsWith(".") || /^(?:node_modules|scripts|api|secrets?)$/i.test(segment))) return false;
  return Object.hasOwn(contentTypes, path.extname(relative).toLowerCase()) && !relative.endsWith(".md");
}

async function jsonBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > bodyLimit) throw fail(413, "PAYLOAD_TOO_LARGE", "Field survey payload is too large.");
    chunks.push(chunk);
  }
  try {
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    return parsed;
  } catch {
    throw fail(400, "INVALID_PAYLOAD", "Invalid JSON field survey payload.");
  }
}

/** Local simulator only: this loopback identity is not production authentication. */
export async function startLocalServer(options = {}) {
  const host = options.host ?? process.env.AR_V4_HOST ?? "127.0.0.1";
  if (host !== "127.0.0.1") throw new Error("The local field server only allows host 127.0.0.1.");
  const port = Number(options.port ?? process.env.AR_V4_PORT ?? 8080);
  if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error("Invalid AR_V4_PORT.");
  const rootDir = await fs.realpath(path.resolve(options.rootDir ?? repositoryRoot));
  const requestedDataDir = path.resolve(options.dataDir ?? path.join(rootDir, ".local", "ar-v4"));
  const dataDir = await fs.realpath(requestedDataDir).catch(error => {
    if (error.code === "ENOENT") return requestedDataDir;
    throw error;
  });
  const localFile = path.join(dataDir, "ar-data.json");
  const sourceFile = path.join(rootDir, "ar-data.json");
  if (localFile === sourceFile) throw new Error("Local storage must be separate from the original ar-data.json.");
  let initializePromise;
  let writeQueue = Promise.resolve();
  let origin;

  async function initialize() {
    initializePromise ??= (async () => {
      await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
      const realDataDir = await fs.realpath(dataDir);
      if (realDataDir === rootDir) throw new Error("Local storage must not resolve to the repository root.");
      try {
        const stat = await fs.lstat(localFile);
        if (!stat.isFile() || stat.isSymbolicLink()) throw new Error("Local storage must be a regular file.");
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        await fs.copyFile(sourceFile, localFile, constants.COPYFILE_EXCL);
        await fs.chmod(localFile, 0o600);
      }
    })();
    return initializePromise;
  }

  async function readSnapshot() {
    await initialize();
    const stat = await fs.lstat(localFile);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error("Local storage must be a regular file.");
    const bytes = await fs.readFile(localFile);
    const json = JSON.parse(bytes.toString("utf8"));
    return { bytes, json, collection: normalizeCollection(json), sha: digest(bytes) };
  }

  async function writeSnapshot(collection) {
    const bytes = Buffer.from(`${JSON.stringify(collection, null, 2)}\n`, "utf8");
    const temporary = path.join(dataDir, `.ar-data-${randomUUID()}.tmp`);
    let file;
    try {
      file = await fs.open(temporary, "wx", 0o600);
      await file.writeFile(bytes);
      await file.sync();
      await file.close();
      file = null;
      await fs.rename(temporary, localFile);
      return digest(bytes);
    } finally {
      await file?.close();
      await fs.unlink(temporary).catch(error => { if (error.code !== "ENOENT") throw error; });
    }
  }

  function respond(res, status, body, sha = "", extraHeaders = {}) {
    res.writeHead(status, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "X-AR-Storage": "local",
      "X-AR-Source-Blob-Sha": sha,
      "Cross-Origin-Resource-Policy": "same-origin",
      ...extraHeaders,
    });
    res.end(JSON.stringify(body));
  }

  const server = createServer(async (req, res) => {
    let sha = "";
    try {
      if (req.headers.host !== new URL(origin).host ||
          (req.headers.origin && req.headers.origin !== origin) ||
          req.headers["sec-fetch-site"] === "cross-site") {
        respond(res, 403, { error: "Only this loopback origin is allowed.", code: "LOCAL_ORIGIN_REQUIRED" });
        return;
      }
      const pathname = safeRequestPath(req.url);
      // /.auth/me is the single intentional dot-path, never a disk path.
      const isLocalAuth = req.url.split("?")[0] === "/.auth/me";
      if (!pathname && !isLocalAuth) {
        respond(res, 404, { error: "Not found.", code: "NOT_FOUND" });
        return;
      }
      const query = new URL(req.url, origin).searchParams;
      if (req.method === "GET" && isLocalAuth) {
        respond(res, 200, {
          clientPrincipal: {
            identityProvider: "local-simulator", userId: "local-ar-field-admin", userDetails: label,
            userRoles: ["anonymous", "authenticated", "ar_admin"],
          }, storage: "local", localSimulator: true,
        });
        return;
      }
      if (req.method === "GET" && pathname === "/api/field-status") {
        respond(res, 200, { storage: "local", writesEnabled: true, label });
        return;
      }
      if (req.method === "GET" && ["/api/ar-content", "/api/ar-field-export", "/ar-data.json"].includes(pathname)) {
        const snapshot = await readSnapshot();
        sha = snapshot.sha;
        const collection = snapshot.collection;
        let body = snapshot.json;
        const projectId = query.get("projectId");
        if (pathname === "/api/ar-content" && query.get("list") === "1") {
          body = {
            version: collection.version, activeProjectId: collection.activeProjectId,
            revision: sha, projects: collection.projects.map(summarizeProject),
          };
        } else if (pathname !== "/ar-data.json" && projectId) {
          body = collection.projects.find(item => item?.project?.id === projectId);
          if (!body) throw fail(404, "PROJECT_NOT_FOUND", "AR project not found.");
        } else if (pathname === "/api/ar-content" && Array.isArray(snapshot.json?.projects)) {
          body = collection.projects.find(item => item?.project?.id === collection.activeProjectId)
            || collection.projects[0] || snapshot.json;
        } else if (pathname === "/api/ar-field-export") {
          body = collection;
        }
        respond(res, 200, body, sha, pathname === "/api/ar-field-export"
          ? { "Content-Disposition": 'attachment; filename="ar-field-export.json"' } : {});
        return;
      }
      if (req.method === "POST" && pathname === "/api/save-ar-content") {
        if (req.headers.origin !== origin) throw fail(403, "LOCAL_ORIGIN_REQUIRED", "The exact local Origin header is required.");
        if (req.headers["x-ar-save-contract"] !== contract) {
          throw fail(428, "SYNC_CONTRACT_REQUIRED", "Only the ar-field-survey-v1 contract is supported locally.");
        }
        if (!/^application\/json(?:\s*;.*)?$/i.test(req.headers["content-type"] || "")) {
          throw fail(415, "JSON_REQUIRED", "Content-Type application/json is required.");
        }
        const body = await jsonBody(req);
        if (typeof body.expectedSourceBlobSha !== "string" || !body.expectedSourceBlobSha.trim()) {
          throw fail(428, "SYNC_REVISION_REQUIRED", "The source revision is required before saving.");
        }
        const expected = body.expectedSourceBlobSha.trim().toLowerCase();
        if (!/^[a-f0-9]{64}$/.test(expected)) throw fail(400, "INVALID_SOURCE_REVISION", "Invalid local source revision.");
        const transaction = writeQueue.then(async () => {
          const snapshot = await readSnapshot();
          sha = snapshot.sha;
          if (expected !== sha) {
            respond(res, 409, {
              error: "Local AR data changed. Reload before saving.", code: "SYNC_CONFLICT",
              expectedSourceBlobSha: expected, sourceBlobSha: sha, refreshRequired: true,
            }, sha);
            return;
          }
          const { applyFieldSurvey } = require("../api/shared/ar-field-survey.js");
          const result = applyFieldSurvey(snapshot.collection, body.fieldSurvey);
          sha = await writeSnapshot(result.collection);
          respond(res, 200, {
            ok: true, storage: "local", label, sourceBlobSha: sha, revision: sha,
            observationId: result.observationId, calibration: result.calibration,
          }, sha);
        });
        writeQueue = transaction.catch(() => {});
        await transaction;
        return;
      }
      if (pathname?.startsWith("/api/") || isLocalAuth) {
        respond(res, 405, { error: "Unsupported local API method or route.", code: "METHOD_NOT_ALLOWED" });
        return;
      }
      if (!["GET", "HEAD"].includes(req.method)) {
        respond(res, 405, { error: "Method not allowed.", code: "METHOD_NOT_ALLOWED" });
        return;
      }
      const relative = pathname === "/" ? "index.html" : pathname.slice(1);
      if (!staticAllowed(relative)) throw fail(404, "NOT_FOUND", "Not found.");
      const candidate = path.join(rootDir, relative);
      let realFile;
      try { realFile = await fs.realpath(candidate); } catch { throw fail(404, "NOT_FOUND", "Not found."); }
      // Check the resolved path's allowlist too: an assets symlink must not expose server source.
      const realRelative = path.relative(rootDir, realFile).split(path.sep).join("/");
      if (!isInside(rootDir, realFile) || !staticAllowed(realRelative) || !(await fs.stat(realFile)).isFile()) {
        throw fail(404, "NOT_FOUND", "Not found.");
      }
      const bytes = await fs.readFile(realFile);
      res.writeHead(200, {
        "Content-Type": contentTypes[path.extname(realFile).toLowerCase()] || "application/octet-stream",
        "Content-Length": bytes.length, "Cache-Control": "no-store, max-age=0",
        "X-Content-Type-Options": "nosniff", "Cross-Origin-Resource-Policy": "same-origin",
        "X-AR-Storage": "local",
      });
      res.end(req.method === "HEAD" ? undefined : bytes);
    } catch (error) {
      if (res.headersSent) { res.destroy(); return; }
      const status = Number.isInteger(error.status) && error.status >= 400 && error.status < 500 ? error.status : 500;
      respond(res, status, {
        error: status === 500 ? "Local field storage is unavailable." : error.message,
        code: status === 500 ? "LOCAL_STORAGE_ERROR" : error.code || "INVALID_REQUEST",
      }, sha);
    }
  });
  server.requestTimeout = 15_000;
  server.headersTimeout = 10_000;
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      server.off("error", reject);
      origin = `http://${host}:${server.address().port}`;
      resolve();
    });
  });
  return {
    server, origin,
    async close() {
      await writeQueue;
      await new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
        server.closeIdleConnections?.();
      });
    },
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const local = await startLocalServer();
    console.log(`${label}\n${local.origin}/ar-v4-field.html\n${local.origin}/admin-ar-v4.html`);
    for (const signal of ["SIGINT", "SIGTERM"]) process.once(signal, () => { void local.close(); });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
