const assert = require("node:assert/strict");
const { afterEach, beforeEach, test } = require("node:test");
const { validateFieldSurvey, applyFieldSurvey } = require("../shared/ar-field-survey.js");
const saveArContent = require("../save-ar-content/index.js");

// A real 1 x 1 RGB JPEG encoded by Pillow, not a MIME-only synthetic fixture.
const JPEG = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwAooooA/9k=";
const TIME = "2026-09-05T00:00:00.000Z";
const NEXT_TIME = "2026-09-05T01:00:00.000Z";
const SHA = "a".repeat(40);
const OTHER_SHA = "b".repeat(40);
const COMMIT_SHA = "c".repeat(40);
const UPDATED_SHA = "d".repeat(40);
const clone = value => JSON.parse(JSON.stringify(value));
const observation = () => ({
  id: "obs-1", capturedAt: TIME, source: "upload", imageUrl: JPEG,
  width: 1, height: 1, mapBearing: null, headingSource: "unconfirmed"
});
const survey = () => ({
  projectId: "project-1", buildingId: "building-1", floorId: "floor-1",
  nodeId: "node-1", nodeType: "marker", observation: observation()
});
const collection = () => ({
  version: "7.1", activeProjectId: "project-2", customRoot: { retained: true },
  projects: [{
    version: "7.0", project: { id: "project-1", name: "Keep name", updatedAt: TIME },
    systemConfig: { retained: 42 }, buildings: [{
      id: "building-1", customBuilding: true, floors: [{
        id: "floor-1", mapUpHeading: 33, customFloor: "retain",
        markers: [{ id: "node-1", x: 0.2, y: 0.4, imageUrl: "old-image", guideReferenceBearing: 12, extra: { keep: true } }, { id: "other-node", keep: true }],
        waypoints: [{ id: "wp-1", guideImageUrl: "old-waypoint" }], edges: [{ start: "node-1", end: "wp-1" }]
      }, { id: "other-floor", keep: true }]
    }]
  }, { project: { id: "project-2" }, keep: true }]
});
const floorOf = value => value.projects[0].buildings[0].floors[0];
const nodeOf = value => floorOf(value).markers[0];
const errorCode = (code, status = 400) => error => error.code === code && error.status === status;

test("observation append clones data and preserves all unrelated nodes and metadata", () => {
  const initial = collection();
  const snapshot = clone(initial);
  const result = applyFieldSurvey(initial, survey(), NEXT_TIME);
  assert.deepEqual(initial, snapshot);
  assert.equal(result.observationId, "obs-1");
  assert.equal(result.calibration, null);
  assert.deepEqual(nodeOf(result.collection).fieldObservations, [observation()]);
  assert.equal(nodeOf(result.collection).imageUrl, "old-image");
  assert.equal(nodeOf(result.collection).guideReferenceBearing, 12);
  assert.equal(floorOf(result.collection).mapUpHeading, 33);
  const comparable = clone(result.collection);
  delete nodeOf(comparable).fieldObservations;
  comparable.projects[0].project.updatedAt = TIME;
  assert.deepEqual(comparable, snapshot);
});

test("identical observation ID is idempotent even with changed object property order", () => {
  const first = applyFieldSurvey(collection(), survey(), TIME);
  const secondSurvey = survey();
  secondSurvey.observation = Object.fromEntries(Object.entries(secondSurvey.observation).reverse());
  const second = applyFieldSurvey(first.collection, secondSurvey, NEXT_TIME);
  assert.deepEqual(second.collection, first.collection);
  const changed = survey();
  changed.observation.note = "different";
  assert.throws(() => applyFieldSurvey(first.collection, changed), errorCode("SURVEY_OBSERVATION_CONFLICT", 409));
});

test("the 24-observation limit never deletes old records and still allows identical retry", () => {
  const initial = collection();
  nodeOf(initial).fieldObservations = Array.from({ length: 24 }, (_, index) => ({ ...observation(), id: `obs-${index}` }));
  assert.throws(() => applyFieldSurvey(initial, { ...survey(), observation: { ...observation(), id: "obs-25" } }), errorCode("SURVEY_OBSERVATION_LIMIT", 409));
  assert.equal(nodeOf(initial).fieldObservations.length, 24);
  assert.deepEqual(applyFieldSurvey(initial, survey(), NEXT_TIME).collection, initial);
});

test("calibration updates only explicit fields and repeated same calibration is idempotent", () => {
  const input = survey();
  delete input.observation;
  input.calibration = { guideReferenceBearing: 359.99 };
  const first = applyFieldSurvey(collection(), input, TIME);
  const node = nodeOf(first.collection);
  assert.equal(node.guideDirectionMode, "manual");
  assert.equal(node.guideReferenceBearing, 359.99);
  assert.equal(node.guideAngleCalibrationSource, "v4-field-survey");
  assert.equal(node.guideAngleCalibratedAt, TIME);
  assert.equal(floorOf(first.collection).mapUpHeading, 33);
  assert.equal(node.fieldObservations, undefined);
  assert.deepEqual(applyFieldSurvey(first.collection, input, NEXT_TIME).collection, first.collection);
  input.calibration.mapUpHeading = 0;
  const withMap = applyFieldSurvey(first.collection, input, NEXT_TIME);
  assert.equal(floorOf(withMap.collection).mapUpHeading, 0);
  assert.equal(withMap.calibration.mapUpHeading, 0);
  assert.equal(nodeOf(withMap.collection).guideAngleCalibratedAt, NEXT_TIME);
});

test("guide image changes require explicit promotion and respect marker/waypoint fields", () => {
  assert.equal(nodeOf(applyFieldSurvey(collection(), survey()).collection).imageUrl, "old-image");
  assert.equal(nodeOf(applyFieldSurvey(collection(), { ...survey(), promoteToGuide: true }).collection).imageUrl, JPEG);
  const result = applyFieldSurvey(collection(), { ...survey(), nodeType: "waypoint", nodeId: "wp-1", promoteToGuide: true });
  assert.equal(floorOf(result.collection).waypoints[0].guideImageUrl, JPEG);
  assert.equal(floorOf(result.collection).waypoints[0].imageUrl, undefined);
  assert.equal(nodeOf(result.collection).imageUrl, "old-image");
});

test("all target IDs and node collection must match; duplicate targets are rejected", () => {
  for (const key of ["projectId", "buildingId", "floorId", "nodeId"]) {
    assert.throws(() => applyFieldSurvey(collection(), { ...survey(), [key]: "missing" }), errorCode("SYNC_TARGET_NOT_FOUND", 409));
    assert.throws(() => validateFieldSurvey({ ...survey(), [key]: "  " }), errorCode("INVALID_FIELD_SURVEY_ID"));
    assert.throws(() => validateFieldSurvey({ ...survey(), [key]: "a\nb" }), errorCode("INVALID_FIELD_SURVEY_ID"));
  }
  assert.throws(() => applyFieldSurvey(collection(), { ...survey(), nodeType: "waypoint" }), errorCode("SYNC_TARGET_NOT_FOUND", 409));
  const duplicate = collection();
  floorOf(duplicate).markers.push(clone(nodeOf(duplicate)));
  assert.throws(() => applyFieldSurvey(duplicate, survey()), errorCode("SYNC_TARGET_NOT_FOUND", 409));
});

test("JPEG validation rejects external URLs, mislabeled bytes, truncation and dimension spoofing", () => {
  for (const imageUrl of ["https://example.test/image.jpg", "data:image/svg+xml;base64,PHN2Zz4=", "data:image/jpeg;base64,PHN2Zz4=", JPEG.slice(0, -4), `${JPEG}\n`, JPEG.replace("/9j/", "AAAA")]) {
    assert.throws(() => validateFieldSurvey({ ...survey(), observation: { ...observation(), imageUrl } }), errorCode("INVALID_SURVEY_IMAGE"));
  }
  for (const width of [0, 2, 1601, 1.5, "1"]) {
    assert.throws(() => validateFieldSurvey({ ...survey(), observation: { ...observation(), width } }), errorCode("INVALID_SURVEY_IMAGE"));
  }
});

test("JPEG decoded byte limit allows exactly 256 KiB and rejects one byte more", () => {
  const bytes = Buffer.from(JPEG.split(",")[1], "base64");
  const padded = total => {
    const chunks = [bytes.subarray(0, 2)];
    let remaining = total - bytes.length;
    while (remaining > 0) {
      const size = Math.min(remaining, 65537);
      assert.ok(size >= 4);
      const segment = Buffer.alloc(size);
      segment[0] = 0xff; segment[1] = 0xef;
      segment.writeUInt16BE(size - 2, 2);
      chunks.push(segment);
      remaining -= size;
    }
    chunks.push(bytes.subarray(2));
    return `data:image/jpeg;base64,${Buffer.concat(chunks).toString("base64")}`;
  };
  assert.ok(validateFieldSurvey({ ...survey(), observation: { ...observation(), imageUrl: padded(256 * 1024) } }));
  assert.throws(() => validateFieldSurvey({ ...survey(), observation: { ...observation(), imageUrl: padded(256 * 1024 + 1) } }), errorCode("INVALID_SURVEY_IMAGE"));
});

test("nullable headings are preserved without coercing unknown to zero", () => {
  const unavailable = { heading: null, kind: "unavailable", accuracy: null, capturedAt: null, alpha: null, beta: null, gamma: null, screenAngle: 0 };
  const valid = { ...survey(), observation: { ...observation(), sensor: unavailable } };
  assert.equal(validateFieldSurvey(valid).observation.sensor.heading, null);
  assert.equal(validateFieldSurvey(valid).observation.mapBearing, null);
  valid.observation.sensor = { ...unavailable, kind: "relative", heading: 27, alpha: 27 };
  assert.ok(validateFieldSurvey(valid));
  valid.observation.headingSource = "sensor-map";
  valid.observation.mapBearing = 90;
  assert.throws(() => validateFieldSurvey(valid), errorCode("INVALID_FIELD_SURVEY"));
  valid.observation.sensor = { ...valid.observation.sensor, kind: "absolute", capturedAt: TIME };
  assert.equal(validateFieldSurvey(valid).observation.mapBearing, 90);
});

test("invalid calibration, mixed heading semantics and unbounded diagnostics fail validation", () => {
  const invalid = [
    { ...survey(), calibration: { guideReferenceBearing: null } },
    { ...survey(), calibration: { guideReferenceBearing: "90" } },
    { ...survey(), calibration: { guideReferenceBearing: 360 } },
    { ...survey(), calibration: { guideReferenceBearing: 90, mapUpHeading: null } },
    { ...survey(), observation: { ...observation(), headingSource: "manual" } },
    { ...survey(), observation: { ...observation(), mapBearing: 0 } },
    { ...survey(), observation: { ...observation(), note: "x".repeat(1001) } },
    { ...survey(), observation: { ...observation(), quality: { brightness: 256, sharpness: 2, warnings: [] } } },
    { ...survey(), observation: { ...observation(), panorama: { yaw: 0, pitch: 0, fov: 180 } } },
    { ...survey(), promoteToGuide: "true" },
    { ...survey(), extraPayload: {} }
  ];
  invalid.forEach(input => assert.throws(() => validateFieldSurvey(input), errorCode("INVALID_FIELD_SURVEY")));
});

test("malformed existing observations fail closed and input remains intact", () => {
  const initial = collection();
  nodeOf(initial).fieldObservations = { broken: true };
  const before = clone(initial);
  assert.throws(() => applyFieldSurvey(initial, survey()), errorCode("INVALID_EXISTING_OBSERVATIONS", 409));
  assert.deepEqual(initial, before);
});

const tracked = ["AR_SYNC_WRITE_ENABLED", "GITHUB_REPO", "GITHUB_BRANCH", "GITHUB_CONTENT_TOKEN"];
const originalSettings = new Map(tracked.map(name => [name, process.env[name]]));
const originalFetch = global.fetch;
const response = (status, body) => ({ ok: status >= 200 && status < 300, status, async json() { return body; }, async text() { return JSON.stringify(body); } });
const context = () => ({ res: null, log: { error() {} } });
const request = () => ({
  headers: {
    "x-ms-client-principal": Buffer.from(JSON.stringify({ userRoles: ["authenticated", "ar_admin"] })).toString("base64"),
    "x-ar-save-contract": "ar-field-survey-v1"
  }, body: { expectedSourceBlobSha: SHA, fieldSurvey: survey() }
});
const enable = () => {
  process.env.AR_SYNC_WRITE_ENABLED = "true";
  process.env.GITHUB_REPO = "owner/repo";
  process.env.GITHUB_BRANCH = "codex/ar-navigation-v3";
  process.env.GITHUB_CONTENT_TOKEN = "test-only-token";
};
const queue = responses => {
  const calls = [];
  global.fetch = async (...args) => {
    calls.push(args);
    assert.ok(responses.length, "Unexpected mocked network call");
    return responses.shift();
  };
  return calls;
};
const reads = (data = collection(), sha = SHA) => [
  response(200, { object: { sha: COMMIT_SHA } }),
  response(200, { sha, encoding: "base64", content: Buffer.from(JSON.stringify(data)).toString("base64") })
];
beforeEach(() => {
  for (const name of tracked) delete process.env[name];
  // No test is permitted to fall through to the actual network.
  global.fetch = async () => { throw new Error("Real network is prohibited in survey tests"); };
});
afterEach(() => {
  global.fetch = originalFetch;
  for (const [name, value] of originalSettings) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
});

test("survey endpoint keeps authentication, ar_admin and disabled-write gates before fetch", async () => {
  const calls = queue([]);
  for (const [roles, status, code] of [
    [[], 401, "AUTH_REQUIRED"], [["authenticated"], 403, "ADMIN_ROLE_REQUIRED"],
    [["authenticated", "ar_admin"], 503, "SYNC_WRITE_DISABLED"]
  ]) {
    const req = request();
    req.headers["x-ms-client-principal"] = Buffer.from(JSON.stringify({ userRoles: roles })).toString("base64");
    const ctx = context();
    await saveArContent(ctx, req);
    assert.equal(ctx.res.status, status);
    assert.equal(ctx.res.body.code, code);
  }
  assert.equal(calls.length, 0);
});

test("survey endpoint validates payload and source revision before GitHub fetch", async () => {
  enable();
  const calls = queue([]);
  for (const [edit, status, code] of [
    [req => { req.body.fieldSurvey.observation.imageUrl = "https://example.test/image.jpg"; }, 400, "INVALID_SURVEY_IMAGE"],
    [req => { delete req.body.expectedSourceBlobSha; }, 428, "SYNC_REVISION_REQUIRED"],
    [req => { req.body.expectedSourceBlobSha = "force"; }, 400, "INVALID_SOURCE_REVISION"]
  ]) {
    const req = request(); edit(req);
    const ctx = context(); await saveArContent(ctx, req);
    assert.equal(ctx.res.status, status);
    assert.equal(ctx.res.body.code, code);
  }
  assert.equal(calls.length, 0);
});

test("survey endpoint rejects stale SHA regardless of force-like flags without PUT", async () => {
  enable();
  const calls = queue(reads(collection(), OTHER_SHA));
  const req = request(); req.body.force = true; req.body.overwrite = true;
  const ctx = context(); await saveArContent(ctx, req);
  assert.equal(ctx.res.status, 409);
  assert.equal(ctx.res.body.code, "SYNC_CONFLICT");
  assert.equal(calls.length, 2);
});

test("survey endpoint patches latest collection and sends conditional GitHub PUT", async () => {
  enable();
  const calls = queue([...reads(), response(200, { content: { sha: UPDATED_SHA }, commit: { html_url: "https://example.test/commit" } })]);
  const ctx = context(); await saveArContent(ctx, request());
  assert.equal(ctx.res.status, 200);
  assert.equal(ctx.res.body.observationId, "obs-1");
  assert.equal(ctx.res.body.sourceBlobSha, UPDATED_SHA);
  assert.equal(calls.length, 3);
  const options = calls[2][1];
  const put = JSON.parse(options.body);
  assert.equal(options.method, "PUT");
  assert.equal(put.sha, SHA);
  assert.equal(put.branch, "codex/ar-navigation-v3");
  const saved = JSON.parse(Buffer.from(put.content, "base64").toString("utf8"));
  assert.deepEqual(saved.customRoot, { retained: true });
  assert.equal(saved.activeProjectId, "project-2");
  assert.equal(nodeOf(saved).fieldObservations.length, 1);
  assert.equal(nodeOf(saved).imageUrl, "old-image");
});

test("identical survey retry returns unchanged without another GitHub commit", async () => {
  enable();
  const initial = applyFieldSurvey(collection(), survey(), TIME).collection;
  const calls = queue(reads(initial));
  const ctx = context(); await saveArContent(ctx, request());
  assert.equal(ctx.res.status, 200);
  assert.equal(ctx.res.body.unchanged, true);
  assert.equal(ctx.res.body.sourceBlobSha, SHA);
  assert.equal(calls.length, 2);
});

test("survey data conflicts and missing nodes stay 409 instead of upstream 502", async () => {
  enable();
  const initial = applyFieldSurvey(collection(), survey(), TIME).collection;
  const calls = queue(reads(initial));
  const req = request(); req.body.fieldSurvey.observation.note = "changed duplicate";
  const ctx = context(); await saveArContent(ctx, req);
  assert.equal(ctx.res.status, 409);
  assert.equal(ctx.res.body.code, "SURVEY_OBSERVATION_CONFLICT");
  assert.equal(calls.length, 2);
  queue(reads());
  req.body.fieldSurvey.nodeId = "missing";
  const missingCtx = context(); await saveArContent(missingCtx, req);
  assert.equal(missingCtx.res.status, 409);
  assert.equal(missingCtx.res.body.code, "SYNC_TARGET_NOT_FOUND");
});

test("survey endpoint propagates a concurrent GitHub write conflict without retry", async () => {
  enable();
  const calls = queue([...reads(), response(409, {})]);
  const ctx = context(); await saveArContent(ctx, request());
  assert.equal(ctx.res.status, 409);
  assert.equal(ctx.res.body.code, "SYNC_CONFLICT");
  assert.equal(calls.length, 3);
});
