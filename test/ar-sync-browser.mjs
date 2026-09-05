import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sourceRevision = "a".repeat(40);

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const readPublishedCollection = async () => {
  const json = JSON.parse(await readFile(path.join(rootDir, "ar-data.json"), "utf8"));
  assert.ok(Array.isArray(json.projects) && json.projects.length > 0, "ar-data.json needs a project");
  return json;
};

const summarizeProject = (item) => ({
  project: item.project || {},
  systemConfig: item.systemConfig || {},
  stats: (item.buildings || []).reduce((stats, building) => {
    for (const floor of building.floors || []) {
      if (floor.imageUrl) stats.floorPlans += 1;
      if (floor.navigationImageUrl) stats.floorPlans += 1;
      stats.markers += (floor.markers || []).length;
      stats.waypoints += (floor.waypoints || []).length;
      stats.edges += (floor.edges || []).length;
    }
    return stats;
  }, { floorPlans: 0, markers: 0, waypoints: 0, edges: 0 })
});

const startServer = async (collection) => {
  let postCount = 0;
  const server = http.createServer(async (request, response) => {
    const requestUrl = new URL(request.url || "/", "http://127.0.0.1");

    if (request.method === "POST") {
      postCount += 1;
      response.writeHead(405, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Browser sync test forbids writes" }));
      return;
    }

    if (requestUrl.pathname === "/api/ar-content") {
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.setHeader("Cache-Control", "no-store");
      response.setHeader("X-AR-Source-Blob-Sha", sourceRevision);
      if (requestUrl.searchParams.get("list") === "1") {
        response.end(JSON.stringify({
          version: collection.version,
          activeProjectId: collection.activeProjectId,
          revision: sourceRevision,
          projects: collection.projects.map(item => {
            const summary = summarizeProject(item);
            return {
              ...summary,
              project: {
                ...summary.project,
                name: `${summary.project.name}（GitHub 最新）`
              }
            };
          })
        }));
        return;
      }

      const projectId = requestUrl.searchParams.get("projectId");
      const project = projectId
        ? collection.projects.find(item => item?.project?.id === projectId)
        : collection.projects.find(item => item?.project?.id === collection.activeProjectId)
          || collection.projects[0];
      response.writeHead(project ? 200 : 404);
      response.end(JSON.stringify(project || { error: "AR project not found" }));
      return;
    }

    const pathname = requestUrl.pathname === "/" ? "/admin-ar.html" : requestUrl.pathname;
    const filePath = path.resolve(rootDir, `.${decodeURIComponent(pathname)}`);
    if (!filePath.startsWith(`${rootDir}${path.sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    try {
      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) throw new Error("not a file");
      const extension = path.extname(filePath);
      const contentTypes = {
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".png": "image/png",
        ".webp": "image/webp"
      };
      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": contentTypes[extension] || "application/octet-stream"
      });
      response.end(await readFile(filePath));
    } catch {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  assert.ok(address && typeof address === "object");
  return {
    origin: `http://127.0.0.1:${address.port}`,
    getPostCount: () => postCount,
    close: () => new Promise(resolve => server.close(resolve))
  };
};

class DevToolsSession {
  constructor(webSocketUrl) {
    this.socket = new WebSocket(webSocketUrl);
    this.nextId = 1;
    this.pending = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      if (!message.id) return;
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const reply = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true
    });
    if (reply.exceptionDetails) {
      throw new Error(reply.exceptionDetails.exception?.description || "Browser evaluation failed");
    }
    return reply.result.value;
  }

  close() {
    this.socket.close();
  }
}

const waitFor = async (check, description, timeoutMs = 10000) => {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const result = await check();
      if (result) return result;
    } catch (error) {
      lastError = error;
    }
    await sleep(100);
  }
  throw new Error(`Timed out waiting for ${description}${lastError ? `: ${lastError.message}` : ""}`);
};

const readDevToolsPort = async (profileDir) => waitFor(async () => {
  try {
    const [port] = (await readFile(path.join(profileDir, "DevToolsActivePort"), "utf8")).trim().split("\n");
    return Number(port) || null;
  } catch {
    return null;
  }
}, "Chrome DevTools port");

const connectPage = async (port) => {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" });
  assert.ok(response.ok, `Unable to create Chrome page (${response.status})`);
  const target = await response.json();
  const session = new DevToolsSession(target.webSocketDebuggerUrl);
  await session.open();
  await session.send("Page.enable");
  await session.send("Runtime.enable");
  return session;
};

const waitForApp = (session) => waitFor(
  () => session.evaluate(`Boolean(document.querySelector('button[title="新增專案"]'))`),
  "AR admin app"
);

const clickButton = async (session, predicate, description) => {
  const clicked = await session.evaluate(`(() => {
    const button = Array.from(document.querySelectorAll('button')).find(button => ${predicate});
    if (!button) return false;
    button.click();
    return true;
  })()`);
  assert.equal(clicked, true, `Unable to click ${description}`);
};

const readCachedProjects = (session) => session.evaluate(`new Promise((resolve, reject) => {
  const request = indexedDB.open('ar-manager-cache-v1', 1);
  request.onerror = () => reject(request.error);
  request.onsuccess = () => {
    const database = request.result;
    const transaction = database.transaction('projects', 'readonly');
    const readRequest = transaction.objectStore('projects').getAll();
    readRequest.onerror = () => reject(readRequest.error);
    readRequest.onsuccess = () => {
      database.close();
      resolve(readRequest.result);
    };
  };
})`);

const waitForCleanRevision = async (session, projectId) => waitFor(async () => {
  const projects = await readCachedProjects(session);
  const project = projects.find(item => item.id === projectId);
  return project?._sync?.dirty === false && project?._sync?.baseSha === sourceRevision
    ? project
    : null;
}, `clean IndexedDB revision for ${projectId}`);

const dismissAlert = async (session) => {
  await waitFor(
    () => session.evaluate(`Array.from(document.querySelectorAll('button')).some(button => button.textContent.trim() === '我知道了')`),
    "load confirmation"
  );
  await clickButton(session, `button.textContent.trim() === '我知道了'`, "load confirmation");
};

const pullProject = async (session, projectName) => {
  await clickButton(
    session,
    `button.textContent.includes('GitHub 更新本機')`,
    "GitHub pull"
  );
  await waitFor(
    () => session.evaluate(`Array.from(document.querySelectorAll('button')).some(button => button.textContent.includes(${JSON.stringify(projectName)}) && button.closest('.fixed'))`),
    "GitHub project picker"
  );
  await clickButton(
    session,
    `button.textContent.includes(${JSON.stringify(projectName)}) && button.closest('.fixed')`,
    "GitHub project"
  );
  await dismissAlert(session);
};

const run = async () => {
  const collection = await readPublishedCollection();
  const remoteProject = collection.projects[0];
  const remoteProjectId = remoteProject.project.id;
  const remoteProjectName = remoteProject.project.name || remoteProject.systemConfig?.projectName;
  const cloudProjectName = `${remoteProjectName}（GitHub 最新）`;
  const server = await startServer(collection);
  const profileDir = await mkdtemp(path.join(os.tmpdir(), "myweb-ar-sync-test-"));
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=0",
    `--user-data-dir=${profileDir}`,
    "about:blank"
  ], { stdio: "ignore" });
  let session;

  try {
    const port = await readDevToolsPort(profileDir);
    session = await connectPage(port);
    await session.send("Page.navigate", { url: `${server.origin}/admin-ar.html` });
    await waitForApp(session);
    await session.evaluate(`sessionStorage.setItem('ar_permissions_asked', '1')`);
    await session.send("Page.reload", { ignoreCache: true });
    await waitForApp(session);

    await waitFor(async () => {
      const projects = await readCachedProjects(session);
      return projects.some(item => item.id === remoteProjectId);
    }, "packaged project hydration");

    await pullProject(session, cloudProjectName);
    await waitForCleanRevision(session, remoteProjectId);
    await sleep(700);
    const sameIdProject = (await readCachedProjects(session)).find(item => item.id === remoteProjectId);
    assert.equal(sameIdProject._sync.dirty, false, "same-ID pull must remain clean");

    await clickButton(session, `button.title === '新增專案'`, "new project");
    await waitFor(
      () => session.evaluate(`Boolean(document.querySelector('input[placeholder="請輸入場域或導引服務名稱"]'))`),
      "new project prompt"
    );
    await session.evaluate(`(() => {
      const input = document.querySelector('input[placeholder="請輸入場域或導引服務名稱"]');
      input.value = '瀏覽器同步競態測試';
    })()`);
    await clickButton(session, `button.textContent.trim() === '確定'`, "new project confirmation");
    await waitFor(
      () => session.evaluate(`localStorage.getItem('arManager_activeProjectId') !== ${JSON.stringify(remoteProjectId)}`),
      "different active project"
    );

    await pullProject(session, cloudProjectName);
    await waitForCleanRevision(session, remoteProjectId);
    await sleep(700);
    const differentIdProject = (await readCachedProjects(session)).find(item => item.id === remoteProjectId);
    assert.equal(differentIdProject._sync.dirty, false, "different-ID pull must remain clean");

    await session.send("Page.reload", { ignoreCache: true });
    await waitForApp(session);
    await waitForCleanRevision(session, remoteProjectId);
    await sleep(700);
    const hydratedProject = (await readCachedProjects(session)).find(item => item.id === remoteProjectId);
    assert.equal(hydratedProject._sync.dirty, false, "IndexedDB hydration must remain clean");
    assert.equal(server.getPostCount(), 0, "browser test must never issue a write request");

    console.log("AR sync browser assertions passed:");
    console.log("- same project ID pull remains dirty=false");
    console.log("- different project ID pull remains dirty=false");
    console.log("- reload/IndexedDB hydration remains dirty=false");
    console.log("- GitHub summary metadata overrides packaged metadata");
    console.log("- no POST request was issued");
  } finally {
    session?.close();
    chrome.kill("SIGTERM");
    await server.close();
    await rm(profileDir, { recursive: true, force: true });
  }
};

await run();
