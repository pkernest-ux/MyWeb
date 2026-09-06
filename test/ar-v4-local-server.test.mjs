import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { startLocalServer } from "../scripts/ar-v4-local-server.mjs";

// A real 1 x 1 JPEG also used by the shared field-survey validator's tests.
const jpeg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwAooooA/9k=";
const observation = () => ({
  id: "observation-1", capturedAt: "2026-09-05T00:00:00.000Z", source: "upload",
  imageUrl: jpeg, width: 1, height: 1, mapBearing: null, headingSource: "unconfirmed",
});

const originalCollection = () => ({
  version: "7.1", activeProjectId: "project-1", preservedMetadata: "keep-me",
  projects: [{
    project: { id: "project-1", name: "Fixture", updatedAt: "2026-09-04T00:00:00.000Z" },
    systemConfig: { theme: "original" },
    buildings: [{ id: "building-1", floors: [{
      id: "floor-1", imageUrl: "floor.png", navigationImageUrl: "navigation.png",
      markers: [{ id: "node-1", label: "Kiosk", x: 12, y: 34, guideReferenceBearing: 0 }],
      waypoints: [{ id: "waypoint-1", x: 20, y: 34 }], edges: [{ from: "node-1", to: "waypoint-1" }],
    }] }],
  }, { project: { id: "project-2", name: "Other project" }, buildings: [] }],
});

const calibrationSurvey = (bearing = 90) => ({
  projectId: "project-1", buildingId: "building-1", floorId: "floor-1",
  nodeId: "node-1", nodeType: "marker", calibration: { guideReferenceBearing: bearing, mapUpHeading: 15 },
});

async function fixture(t) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "ar-v4-local-test-"));
  const rootDir = path.join(directory, "repo");
  const dataDir = path.join(directory, "data");
  await fs.mkdir(path.join(rootDir, "assets", "ar-v4"), { recursive: true });
  await fs.mkdir(path.join(rootDir, "assets", "ar-v4-navigation"), { recursive: true });
  await fs.writeFile(path.join(rootDir, "ar-v4-navigation.html"), "<!doctype html><title>V4 navigation</title>");
  await fs.writeFile(path.join(rootDir, "assets", "ar-v4-navigation", "app.js"), "document.title = 'navigation';");
  const originalBytes = `${JSON.stringify(originalCollection())}\n`;
  await fs.writeFile(path.join(rootDir, "ar-data.json"), originalBytes);
  await fs.writeFile(path.join(rootDir, "ar-v4-field.html"), "<!doctype html><title>Local field</title>");
  await fs.writeFile(path.join(rootDir, "admin-ar-v4.html"), "<!doctype html><title>Local records</title>");
  await fs.writeFile(path.join(rootDir, "ar-v3.html"), "<!doctype html><title>V3</title>");
  await fs.writeFile(path.join(rootDir, "admin-ar.html"), "<!doctype html><title>Legacy admin</title>");
  await fs.writeFile(path.join(rootDir, "assets", "ar-v4", "ar-v4-field.js"), "document.title = 'field';");
  const servers = [];
  const start = async () => {
    const local = await startLocalServer({ port: 0, rootDir, dataDir });
    servers.push(local);
    return local;
  };
  t.after(async () => {
    for (const local of servers) if (local.server.listening) await local.close();
    await fs.rm(directory, { recursive: true, force: true });
  });
  const local = await start();
  return { ...local, rootDir, dataDir, directory, originalBytes, start };
}

function request(origin, requestPath, options = {}) {
  return new Promise((resolve, reject) => {
    const address = new URL(origin);
    const req = http.request({
      host: address.hostname, port: address.port, method: options.method || "GET", path: requestPath,
      headers: options.headers || {},
    }, res => {
      const chunks = [];
      res.on("data", chunk => chunks.push(chunk));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        let body;
        try { body = JSON.parse(text); } catch { body = null; }
        resolve({ status: res.statusCode, headers: res.headers, text, body });
      });
    });
    req.on("error", reject);
    req.end(options.body);
  });
}

function save(origin, sha, survey = calibrationSurvey(), overrides = {}) {
  return request(origin, "/api/save-ar-content", {
    method: "POST",
    headers: {
      Origin: origin, "Content-Type": "application/json", "X-AR-Save-Contract": "ar-field-survey-v1",
      ...overrides.headers,
    },
    body: JSON.stringify({ expectedSourceBlobSha: sha, fieldSurvey: survey }),
    ...Object.fromEntries(Object.entries(overrides).filter(([key]) => key !== "headers")),
  });
}

function saveProject(origin, sha, payload, overrides = {}) {
  return save(origin, sha, undefined, {
    ...overrides,
    headers: { "X-AR-Save-Contract": "ar-project-collection-v4", ...overrides.headers },
    body: overrides.body ?? JSON.stringify({ expectedSourceBlobSha: sha, payload }),
  });
}

test("local server reports its simulator identity and creates data only when first read", async t => {
  const local = await fixture(t);
  assert.equal(local.server.address().address, "127.0.0.1");
  const status = await request(local.origin, "/api/field-status");
  assert.equal(status.status, 200);
  assert.deepEqual(status.body, { storage: "local", writesEnabled: true, projectWritesEnabled: true, label: "本機後台（不會同步 GitHub）" });
  const auth = await request(local.origin, "/.auth/me");
  assert.equal(auth.status, 200);
  assert.equal(auth.body.localSimulator, true);
  assert.equal(auth.body.clientPrincipal.identityProvider, "local-simulator");
  assert.ok(auth.body.clientPrincipal.userRoles.includes("ar_admin"));
  await assert.rejects(fs.access(path.join(local.dataDir, "ar-data.json")), { code: "ENOENT" });
  await request(local.origin, "/api/ar-content?list=1");
  assert.equal(await fs.readFile(path.join(local.dataDir, "ar-data.json"), "utf8"), local.originalBytes);
});

test("ar-content preserves list, project, active-project, source revision and local storage contracts", async t => {
  const local = await fixture(t);
  const sha = createHash("sha256").update(local.originalBytes).digest("hex");
  const listed = await request(local.origin, "/api/ar-content?list=1&ts=123");
  assert.equal(listed.status, 200);
  assert.equal(listed.headers["x-ar-source-blob-sha"], sha);
  assert.equal(listed.headers["x-ar-storage"], "local");
  assert.equal(listed.headers["cache-control"], "no-store, max-age=0");
  assert.equal(listed.body.revision, sha);
  assert.equal(listed.body.activeProjectId, "project-1");
  assert.deepEqual(listed.body.projects[0].stats, { floorPlans: 2, markers: 1, waypoints: 1, edges: 1 });
  assert.equal((await request(local.origin, "/api/ar-content")).body.project.id, "project-1");
  assert.equal((await request(local.origin, "/api/ar-content?projectId=project-2")).body.project.id, "project-2");
  const missing = await request(local.origin, "/api/ar-content?projectId=missing");
  assert.equal(missing.status, 404);
  assert.equal(missing.headers["x-ar-source-blob-sha"], sha);
  assert.equal((await request(local.origin, "/ar-data.json")).body.projects.length, 2);
});

test("a field save survives server restart and export while preserving original data and unrelated fields", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const saved = await save(local.origin, before.body.revision, { ...calibrationSurvey(), observation: observation() });
  assert.equal(saved.status, 200, saved.text);
  assert.equal(saved.body.storage, "local");
  assert.equal(saved.body.calibration.guideReferenceBearing, 90);
  assert.match(saved.body.sourceBlobSha, /^[a-f0-9]{64}$/);
  assert.notEqual(saved.body.sourceBlobSha, before.body.revision);
  assert.equal(saved.headers["x-ar-source-blob-sha"], saved.body.sourceBlobSha);
  await local.close();
  const restarted = await local.start();
  const project = await request(restarted.origin, "/api/ar-content?projectId=project-1");
  const floor = project.body.buildings[0].floors[0];
  assert.equal(floor.markers[0].guideReferenceBearing, 90);
  assert.equal(floor.mapUpHeading, 15);
  assert.equal(floor.markers[0].label, "Kiosk");
  assert.equal(floor.markers[0].x, 12);
  assert.deepEqual(floor.markers[0].fieldObservations, [observation()]);
  assert.equal(floor.markers[0].imageUrl, undefined);
  assert.equal(project.body.systemConfig.theme, "original");
  assert.equal(project.headers["x-ar-source-blob-sha"], saved.body.sourceBlobSha);
  const exported = await request(restarted.origin, "/api/ar-field-export");
  assert.equal(exported.body.preservedMetadata, "keep-me");
  assert.deepEqual(exported.body.projects[1], originalCollection().projects[1]);
  assert.match(exported.headers["content-disposition"], /attachment/);
  const exportedProject = await request(restarted.origin, "/api/ar-field-export?projectId=project-1");
  assert.equal(exportedProject.body.project.id, "project-1");
  assert.equal(await fs.readFile(path.join(local.rootDir, "ar-data.json"), "utf8"), local.originalBytes);
  assert.deepEqual((await fs.readdir(local.dataDir)).sort(), ["ar-data.json", "backups"]);
  assert.equal(await fs.readFile(path.join(local.dataDir, "backups", `ar-data-${before.body.revision}.json`), "utf8"), local.originalBytes);
});

test("the local API applies shared observation validation and supports idempotent retries", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const survey = { ...calibrationSurvey(), observation: observation() };
  const invalid = await save(local.origin, before.body.revision, {
    ...survey, observation: { ...observation(), imageUrl: "data:image/jpeg;base64,bm90LWpwZWc=" },
  });
  assert.equal(invalid.status, 400);
  assert.equal(invalid.body.code, "INVALID_SURVEY_IMAGE");
  assert.equal(invalid.headers["x-ar-source-blob-sha"], before.body.revision);
  const saved = await save(local.origin, before.body.revision, survey);
  assert.equal(saved.status, 200, saved.text);
  assert.equal(saved.body.observationId, observation().id);
  const retried = await save(local.origin, saved.body.sourceBlobSha, survey);
  assert.equal(retried.status, 200, retried.text);
  assert.equal(retried.body.sourceBlobSha, saved.body.sourceBlobSha);
  const read = await request(local.origin, "/api/ar-content?projectId=project-1");
  assert.equal(read.body.buildings[0].floors[0].markers[0].fieldObservations.length, 1);
});

test("concurrent stale revisions cannot overwrite a successful local save", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const results = await Promise.all([save(local.origin, before.body.revision, calibrationSurvey(90)), save(local.origin, before.body.revision, calibrationSurvey(180))]);
  assert.deepEqual(results.map(result => result.status).sort(), [200, 409]);
  const winner = results.find(result => result.status === 200);
  const conflict = results.find(result => result.status === 409);
  assert.equal(conflict.body.code, "SYNC_CONFLICT");
  assert.equal(conflict.body.sourceBlobSha, winner.body.sourceBlobSha);
  const current = await request(local.origin, "/api/ar-content?projectId=project-1");
  assert.equal(current.body.buildings[0].floors[0].markers[0].guideReferenceBearing, winner.body.calibration.guideReferenceBearing);
  const retry = await save(local.origin, winner.body.sourceBlobSha, calibrationSurvey(270));
  assert.equal(retry.status, 200, retry.text);
});

test("project saves update the same local collection, preserve metadata and photos, and survive restart", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const initial = originalCollection().projects[0];
  initial.extension = { retain: true, nested: { old: true } };
  initial.project.customIdentity = "keep-project-metadata";
  initial.systemConfig.unknownOption = { preserve: true };
  const building = initial.buildings[0];
  building.extension = "keep-building";
  const floor = building.floors[0];
  floor.extension = "keep-floor";
  floor.markers[0].extension = { retain: true, nested: { old: true } };
  floor.edges[0].extension = "keep-edge";
  const initialized = await saveProject(local.origin, before.body.revision, initial);
  assert.equal(initialized.status, 200, initialized.text);
  const photoSaved = await save(local.origin, initialized.body.sourceBlobSha, { ...calibrationSurvey(123), observation: observation() });
  assert.equal(photoSaved.status, 200, photoSaved.text);
  const snapshotBytes = await fs.readFile(path.join(local.dataDir, "ar-data.json"));
  // Simulate the older map editor: missing V4 fields, fewer identity/metadata keys.
  const payload = originalCollection().projects[0];
  payload.project.name = "Edited route";
  payload.extension = { nested: { added: true } };
  payload.buildings[0].floors[0].markers[0].x = 42;
  payload.buildings[0].floors[0].markers[0].extension = { nested: { added: true } };
  delete payload.buildings[0].floors[0].markers[0].guideReferenceBearing;
  payload.buildings[0].floors[0].markers[0].fieldObservations = [];
  const result = await saveProject(local.origin, photoSaved.body.sourceBlobSha, payload);
  assert.equal(result.status, 200, result.text);
  assert.equal(result.body.storage, "local");
  assert.equal(result.body.projectId, "project-1");
  assert.equal(result.body.revision, result.body.sourceBlobSha);
  assert.equal(result.headers["x-ar-source-blob-sha"], result.body.sourceBlobSha);
  await local.close();
  const restarted = await local.start();
  const exported = await request(restarted.origin, "/api/ar-field-export");
  const current = exported.body.projects[0];
  const currentFloor = current.buildings[0].floors[0];
  const node = currentFloor.markers[0];
  assert.equal(node.x, 42);
  assert.equal(node.guideReferenceBearing, 123);
  assert.deepEqual(node.fieldObservations, [observation()]);
  assert.deepEqual(node.extension, { retain: true, nested: { old: true, added: true } });
  assert.deepEqual(current.extension, { retain: true, nested: { old: true, added: true } });
  assert.equal(current.project.customIdentity, "keep-project-metadata");
  assert.deepEqual(current.systemConfig.unknownOption, { preserve: true });
  assert.equal(current.buildings[0].extension, "keep-building");
  assert.equal(currentFloor.extension, "keep-floor");
  assert.equal(currentFloor.edges[0].extension, "keep-edge");
  assert.equal(currentFloor.mapUpHeading, 15);
  assert.equal(exported.body.activeProjectId, "project-1");
  assert.equal(exported.body.preservedMetadata, "keep-me");
  assert.deepEqual(exported.body.projects[1], originalCollection().projects[1]);
  assert.deepEqual(await fs.readFile(path.join(local.dataDir, "backups", `ar-data-${photoSaved.body.sourceBlobSha}.json`)), snapshotBytes);
  assert.equal(await fs.readFile(path.join(local.rootDir, "ar-data.json"), "utf8"), local.originalBytes);
  assert.ok((await fs.readdir(local.dataDir)).every(name => !name.endsWith(".tmp")));
  assert.ok((await fs.readdir(path.join(local.dataDir, "backups"))).every(name => !name.endsWith(".tmp")));
  const idempotent = await saveProject(restarted.origin, result.body.sourceBlobSha, current);
  assert.equal(idempotent.status, 200, idempotent.text);
  assert.equal(idempotent.body.sourceBlobSha, result.body.sourceBlobSha);
});

test("project saves create only their selected project and explicit node removal removes its observations", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const newProject = { project: { id: "project-3", name: "New project" }, buildings: [] };
  const created = await saveProject(local.origin, before.body.revision, newProject);
  assert.equal(created.status, 200, created.text);
  const exported = await request(local.origin, "/api/ar-field-export");
  assert.equal(exported.body.activeProjectId, "project-1");
  assert.deepEqual(exported.body.projects.slice(0, 2), originalCollection().projects);
  assert.deepEqual(exported.body.projects[2], newProject);
  const photoSaved = await save(local.origin, created.body.sourceBlobSha, { ...calibrationSurvey(), observation: observation() });
  const project = (await request(local.origin, "/api/ar-content?projectId=project-1")).body;
  project.buildings[0].floors[0].markers = [];
  project.buildings[0].floors[0].edges = [];
  const deleted = await saveProject(local.origin, photoSaved.body.sourceBlobSha, project);
  assert.equal(deleted.status, 200, deleted.text);
  const read = await request(local.origin, "/api/ar-content?projectId=project-1");
  assert.deepEqual(read.body.buildings[0].floors[0].markers, []);
  const backup = JSON.parse(await fs.readFile(path.join(local.dataDir, "backups", `ar-data-${photoSaved.body.sourceBlobSha}.json`), "utf8"));
  assert.deepEqual(backup.projects[0].buildings[0].floors[0].markers[0].fieldObservations, [observation()]);
});

test("project graph accepts cross-floor shafts, cross-floor edges, and legacy finite coordinates", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const project = originalCollection().projects[0];
  const floor = project.buildings[0].floors[0];
  Object.assign(floor.markers[0], { isVerticalShaft: true, shaftId: "shaft-1", linkedFloorIds: ["floor-1", "floor-2"] });
  floor.edges = [{ id: "edge-1", start: "node-1", end: "node-2" }];
  project.buildings[0].floors.push({
    id: "floor-2", markers: [{ id: "node-2", x: -0.3, y: 1.5, isVerticalShaft: true, shaftId: "shaft-1", linkedFloorIds: ["floor-1", "floor-2"] }], waypoints: [], edges: [],
  });
  const result = await saveProject(local.origin, before.body.revision, project);
  assert.equal(result.status, 200, result.text);
  const read = await request(local.origin, "/api/ar-content?projectId=project-1");
  assert.deepEqual(read.body.buildings[0].floors[0].edges, floor.edges);
  assert.equal(read.body.buildings[0].floors[1].markers[0].x, -0.3);
});

test("project and field saves share one compare-and-swap queue", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const payload = originalCollection().projects[0];
  payload.project.name = "Changed name";
  const results = await Promise.all([
    saveProject(local.origin, before.body.revision, payload),
    save(local.origin, before.body.revision, { ...calibrationSurvey(), observation: observation() }),
  ]);
  assert.deepEqual(results.map(result => result.status).sort(), [200, 409]);
  const winner = results.find(result => result.status === 200);
  const conflict = results.find(result => result.status === 409);
  assert.equal(conflict.body.code, "SYNC_CONFLICT");
  assert.equal(conflict.body.sourceBlobSha, winner.body.sourceBlobSha);
  assert.equal(conflict.body.refreshRequired, true);
  assert.deepEqual(await fs.readdir(path.join(local.dataDir, "backups")), [`ar-data-${before.body.revision}.json`]);
});

test("malformed project shape and unsafe graph targets are rejected without saving or backups", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const variants = [null, [], {}, { project: { id: "" }, buildings: [] }, { project: { id: "project-1" }, buildings: {} }];
  for (const mutate of [
    payload => { payload.systemConfig = []; },
    payload => { payload.buildings = [null]; },
    payload => { payload.buildings[0].floors = {}; },
    payload => { payload.buildings[0].floors = [null]; },
    payload => { payload.buildings[0].floors[0].markers = {}; },
    payload => { payload.buildings[0].floors[0].markers = [null]; },
    payload => { payload.buildings[0].floors[0].markers[0].x = "0.5"; },
    payload => { payload.buildings[0].floors[0].markers[0].y = null; },
    payload => { payload.buildings[0].floors[0].markers.push({ id: "node-1", x: 1, y: 1 }); },
    payload => { payload.buildings[0].floors[0].edges = [{ start: "node-1" }]; },
    payload => { payload.buildings[0].floors[0].edges = [{ start: "node-1", end: "missing" }]; },
    payload => { payload.buildings[0].floors[0].bounds = { blX: "0", blY: 0, trX: 100, trY: 100 }; },
    payload => { payload.buildings[0].floors[0].markers[0].fieldObservations = [observation(), observation()]; },
  ]) {
    const payload = originalCollection().projects[0];
    mutate(payload);
    variants.push(payload);
  }
  for (const payload of variants) {
    const result = await saveProject(local.origin, before.body.revision, payload);
    assert.equal(result.status, 400, result.text);
    assert.equal(result.headers["x-ar-source-blob-sha"], before.body.revision);
  }
  assert.equal((await request(local.origin, "/api/ar-content?list=1")).body.revision, before.body.revision);
  assert.deepEqual(await fs.readdir(local.dataDir), ["ar-data.json"]);
});

test("project writes enforce exact origin, JSON, revisions, and contract-specific 24 MiB limit", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const payload = originalCollection().projects[0];
  for (const headers of [{ Origin: "https://foreign.example" }, { Origin: "" }, { Host: "foreign.example" }, { "Sec-Fetch-Site": "cross-site" }]) {
    const result = await saveProject(local.origin, before.body.revision, payload, { headers });
    assert.equal(result.status, 403, result.text);
  }
  assert.equal((await saveProject(local.origin, before.body.revision, payload, { headers: { "Content-Type": "text/plain" } })).status, 415);
  assert.equal((await saveProject(local.origin, "", payload)).status, 428);
  assert.equal((await saveProject(local.origin, "a".repeat(40), payload)).status, 400);
  assert.equal((await saveProject(local.origin, before.body.revision, payload, { body: "{" })).status, 400);
  payload.buildings[0].floors[0].imageUrl = `data:image/png;base64,${"a".repeat(600 * 1024)}`;
  const permitted = await saveProject(local.origin, before.body.revision, payload);
  assert.equal(permitted.status, 200, permitted.text);
  const oversized = await saveProject(local.origin, permitted.body.sourceBlobSha, payload, { body: "x".repeat(24 * 1024 * 1024 + 1) });
  assert.equal(oversized.status, 413, oversized.text);
  assert.equal(oversized.body.code, "PAYLOAD_TOO_LARGE");
  assert.equal((await request(local.origin, "/api/ar-content?list=1")).body.revision, permitted.body.sourceBlobSha);
});

test("invalid or symlinked backup storage blocks all writes without replacing the local data", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  const outside = path.join(local.directory, "outside-backup");
  await fs.mkdir(outside);
  await fs.symlink(outside, path.join(local.dataDir, "backups"));
  const result = await saveProject(local.origin, before.body.revision, originalCollection().projects[0]);
  assert.equal(result.status, 500, result.text);
  assert.equal(result.body.code, "LOCAL_STORAGE_ERROR");
  assert.equal((await request(local.origin, "/api/ar-content?list=1")).body.revision, before.body.revision);
  assert.deepEqual(await fs.readdir(outside), []);
});

test("writes reject foreign or missing origins, foreign Host, unsupported contracts, and non-JSON bodies", async t => {
  const local = await fixture(t);
  const before = await request(local.origin, "/api/ar-content?list=1");
  for (const headers of [
    { Origin: "https://foreign.example" }, { Origin: "null" }, { Origin: "" },
    { Host: "foreign.example" }, { "Sec-Fetch-Site": "cross-site" },
  ]) {
    const result = await save(local.origin, before.body.revision, calibrationSurvey(), { headers });
    assert.equal(result.status, 403, JSON.stringify(headers));
    assert.equal(result.body.code, "LOCAL_ORIGIN_REQUIRED");
    assert.equal(result.headers["access-control-allow-origin"], undefined);
  }
  const noOrigin = await request(local.origin, "/api/save-ar-content", {
    method: "POST", headers: { "Content-Type": "application/json", "X-AR-Save-Contract": "ar-field-survey-v1" },
    body: JSON.stringify({ expectedSourceBlobSha: before.body.revision, fieldSurvey: calibrationSurvey() }),
  });
  assert.equal(noOrigin.status, 403);
  assert.equal((await save(local.origin, before.body.revision, calibrationSurvey(), { headers: { "X-AR-Save-Contract": "unsupported-contract" } })).status, 428);
  assert.equal((await save(local.origin, before.body.revision, calibrationSurvey(), { headers: { "Content-Type": "text/plain" } })).status, 415);
  assert.equal((await save(local.origin, "")).status, 428);
  assert.equal((await save(local.origin, "a".repeat(40))).status, 400);
  assert.equal((await save(local.origin, before.body.revision, calibrationSurvey(), { body: "{" })).status, 400);
  assert.equal((await save(local.origin, before.body.revision, calibrationSurvey(), { body: "x".repeat(513 * 1024) })).status, 413);
  assert.equal((await request(local.origin, "/api/ar-content?list=1")).body.revision, before.body.revision);
});

test("unsafe disk paths and symlink escapes never expose source or secrets", async t => {
  const local = await fixture(t);
  await fs.mkdir(path.join(local.rootDir, "scripts"), { recursive: true });
  await fs.mkdir(path.join(local.rootDir, "api"), { recursive: true });
  await fs.writeFile(path.join(local.rootDir, ".env"), "PRIVATE_SECRET=never-serve");
  await fs.writeFile(path.join(local.rootDir, "scripts", "ar-v4-local-server.mjs"), "server-source-never-serve");
  await fs.writeFile(path.join(local.rootDir, "api", "local.settings.json"), '{"secret":"never-serve"}');
  await fs.writeFile(path.join(local.directory, "outside.js"), "outside-secret-never-serve");
  await fs.symlink(path.join(local.directory, "outside.js"), path.join(local.rootDir, "assets", "ar-v4", "external.js"));
  await fs.symlink(path.join(local.rootDir, "scripts", "ar-v4-local-server.mjs"), path.join(local.rootDir, "assets", "ar-v4", "internal-source.js"));
  const forbidden = [
    "/.env", "/.git", "/.local/ar-v4/ar-data.json", "/node_modules/react/index.js", "/src/ar-v3-app.tsx",
    "/api/local.settings.json", "/api/shared/ar-field-survey.js", "/scripts/ar-v4-local-server.mjs",
    "/assets/ar-v4/../../../.env", "/assets/ar-v4/%2e%2e/%2e%2e/.env", "/%2eenv", "/%252eenv",
    "/assets/ar-v4/%2e%2e%2f%2e%2e%2f.env", "/assets/ar-v4/%5c..%5c.env", "/assets/ar-v4/%00.js",
    "/assets/ar-v4/external.js", "/assets/ar-v4/internal-source.js", "/assets/ar-v4/", "/%ZZ",
  ];
  for (const requestPath of forbidden) {
    const response = await request(local.origin, requestPath);
    assert.ok([404, 405].includes(response.status), `${requestPath}: ${response.status}`);
    assert.doesNotMatch(response.text, /never-serve/);
  }
  for (const requestPath of ["/ar-v4-field.html", "/admin-ar-v4.html", "/ar-v3.html", "/admin-ar.html", "/assets/ar-v4/ar-v4-field.js", "/ar-v4-navigation.html", "/assets/ar-v4-navigation/app.js"]) {
    const response = await request(local.origin, requestPath);
    assert.equal(response.status, 200, requestPath);
  }
});

test("binding and data targets cannot broaden local simulation access or overwrite source", async t => {
  const local = await fixture(t);
  for (const host of ["0.0.0.0", "::", "::1", "localhost", "192.168.1.2"]) {
    await assert.rejects(startLocalServer({ port: 0, host, rootDir: local.rootDir }), /only allows host 127\.0\.0\.1/);
  }
  await assert.rejects(startLocalServer({ port: -1, rootDir: local.rootDir }), /Invalid AR_V4_PORT/);
  await assert.rejects(startLocalServer({ port: 0, rootDir: local.rootDir, dataDir: local.rootDir }), /separate from the original/);
});
