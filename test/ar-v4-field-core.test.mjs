import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/ar-v4-field-core.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
const core = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const { normalizeBearing, signedAngle, bearingBetween, sensorFromEvent, mapBearingFromSensor, EMPTY_SENSOR, flattenProject, panoramaCoordinates } = core;
const { applyFieldSurvey } = createRequire(import.meta.url)("../api/shared/ar-field-survey.js");

test("map bearings wrap and preserve absence instead of treating it as north", () => {
  assert.equal(normalizeBearing(-1), 359);
  assert.equal(normalizeBearing(720), 0);
  assert.equal(signedAngle(359), -1);
  assert.equal(signedAngle(181), -179);
  assert.ok(Number.isNaN(normalizeBearing(null)));
  assert.equal(bearingBetween({ x: 0, y: 0 }, { x: 0, y: -1 }), 0);
  assert.equal(bearingBetween({ x: 0, y: 0 }, { x: 1, y: 0 }), 90);
  assert.equal(bearingBetween({ x: 0, y: 0 }, { x: 0, y: 1 }), 180);
  assert.equal(bearingBetween({ x: 0, y: 0 }, { x: -1, y: 0 }), 270);
  assert.equal(bearingBetween({ x: 0, y: 0 }, { x: 0, y: 0 }), null);
  assert.equal(bearingBetween({ x: null, y: 0 }, { x: 1, y: 1 }), null);
  assert.ok(Math.abs(bearingBetween({ x: 0, y: 0 }, { x: 1, y: -1 }, 2, 1) - 63.4349488) < 1e-6);
});

test("orientation classifies absolute, relative, missing, and uncalibrated readings", () => {
  const missing = sensorFromEvent({ alpha: null, beta: null, gamma: null });
  assert.equal(missing.heading, null);
  assert.equal(missing.kind, "unavailable");
  assert.equal(sensorFromEvent({ alpha: 40, absolute: false }).kind, "relative");
  const north = sensorFromEvent({ alpha: 0, absolute: true });
  assert.equal(north.heading, 0);
  assert.equal(north.kind, "absolute");
  assert.equal(sensorFromEvent({ alpha: 90, absolute: true }, 90).heading, 0);
  const ios = sensorFromEvent({ webkitCompassHeading: 24, webkitCompassAccuracy: 10 });
  assert.equal(ios.heading, 24);
  assert.equal(ios.accuracy, 10);
  assert.equal(ios.kind, "absolute");
  const uncalibrated = sensorFromEvent({ webkitCompassHeading: 24, webkitCompassAccuracy: -1, alpha: 24, absolute: true });
  assert.equal(uncalibrated.kind, "unavailable");
  assert.equal(uncalibrated.heading, null);
  assert.equal(uncalibrated.accuracy, null);
  assert.equal(sensorFromEvent({ alpha: 10, type: "deviceorientationabsolute" }).kind, "absolute");
  assert.equal(EMPTY_SENSOR.heading, null);
});

test("sensor-to-map conversion rejects absent map north, relative or stale/future readings", () => {
  const now = Date.parse("2026-09-05T12:00:00Z");
  const absolute = { ...EMPTY_SENSOR, heading: 5, kind: "absolute", capturedAt: new Date(now - 1000).toISOString() };
  assert.equal(mapBearingFromSensor(absolute, 15, now), 350);
  assert.equal(mapBearingFromSensor(absolute, null, now), null);
  assert.equal(mapBearingFromSensor(absolute, undefined, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, heading: null }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, kind: "relative" }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, capturedAt: new Date(now - 10_001).toISOString() }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, capturedAt: new Date(now + 1).toISOString() }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, capturedAt: null }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, capturedAt: "invalid" }, 0, now), null);
  assert.equal(mapBearingFromSensor({ ...absolute, accuracy: -1 }, 0, now), null);
});

test("saved photos retain capture-time direction without accepting a sensor stale when captured", () => {
  const photoCapture = Date.parse("2026-09-05T12:00:00Z");
  const laterReview = photoCapture + 60_000;
  const sensor = { ...EMPTY_SENSOR, heading: 35, kind: "absolute", capturedAt: new Date(photoCapture - 500).toISOString() };
  assert.equal(mapBearingFromSensor(sensor, 5, laterReview), null);
  assert.equal(mapBearingFromSensor(sensor, 5, photoCapture), 30);
  assert.equal(mapBearingFromSensor({ ...sensor, capturedAt: new Date(photoCapture - 10_001).toISOString() }, 5, photoCapture), null);
});

test("uncalibrated browser readings can be persisted through the backend field-survey contract", () => {
  // Real 1 × 1 JPEG, the same image fixture used by backend validation tests.
  const jpeg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwAooooA/9k=";
  const sensor = sensorFromEvent({ webkitCompassHeading: 24, webkitCompassAccuracy: -1, alpha: 24, beta: 90, gamma: 0, absolute: true });
  const observation = { id: "obs-uncalibrated", capturedAt: sensor.capturedAt, source: "camera", imageUrl: jpeg, width: 1, height: 1, mapBearing: null, headingSource: "unconfirmed", sensor, note: "", quality: { brightness: 128, sharpness: 0, warnings: [] } };
  const collection = { projects: [{ project: { id: "p1" }, buildings: [{ id: "b1", floors: [{ id: "f1", markers: [{ id: "m1" }] }] }] }] };
  const result = applyFieldSurvey(collection, { projectId: "p1", buildingId: "b1", floorId: "f1", nodeId: "m1", nodeType: "marker", observation });
  const persisted = result.collection.projects[0].buildings[0].floors[0].markers[0].fieldObservations[0];
  assert.equal(persisted.sensor.kind, "unavailable");
  assert.equal(persisted.sensor.accuracy, null);
  assert.equal(persisted.sensor.heading, null);
  assert.equal(persisted.mapBearing, null);
});

test("project flattening keeps node types and hierarchy without inventing absent positions", () => {
  const floors = flattenProject({ buildings: [{ id: "b1", name: "A", floors: [{ id: "f1", name: "1F", mapUpHeading: 0, markers: [{ id: "m1", title: "新增辨識點", guideTitle: "入口", x: 0.2, y: 0.4 }], waypoints: [{ id: "w1", code: "W01", x: null, y: "0.3" }] }] }] });
  assert.equal(floors[0].buildingId, "b1");
  assert.equal(floors[0].mapUpHeading, 0);
  assert.equal(floors[0].nodes[0].label, "入口");
  assert.equal(floors[0].nodes[0].nodeType, "marker");
  assert.equal(floors[0].nodes[1].nodeType, "waypoint");
  assert.equal(floors[0].nodes[1].floorId, "f1");
  assert.equal(floors[0].nodes[1].y, 0.3);
  assert.ok(Number.isNaN(floors[0].nodes[1].x));
  assert.deepEqual(flattenProject(null), []);
});

test("panorama perspective follows center/right/up and wraps across the panorama seam", () => {
  const center = (yaw, pitch = 0) => panoramaCoordinates(383.5, 287.5, 768, 576, yaw, pitch);
  assert.deepEqual(center(0), { u: 0.5, v: 0.5 });
  assert.ok(Math.abs(center(90).u - 0.75) < 1e-12);
  assert.ok(Math.abs(center(-90).u - 0.25) < 1e-12);
  assert.ok(Math.abs(center(30, 45).v - 0.25) < 1e-12);
  assert.ok(Math.abs(center(390).u - center(30).u) < 1e-12);
  const left = panoramaCoordinates(100, 287.5, 768, 576, 180);
  const right = panoramaCoordinates(600, 287.5, 768, 576, 180);
  assert.ok(left.u > 0.9 && left.u < 1);
  assert.ok(right.u > 0 && right.u < 0.1);
  assert.throws(() => panoramaCoordinates(1, 1, 0, 1, 0), /參數無效/);
});

test("capture input rejects raw panoramas, unsupported images and oversized files before decoding", async () => {
  await assert.rejects(core.prepareImage({ size: 20, type: "image/svg+xml", name: "photo.svg" }), /不支援 SVG/);
  await assert.rejects(core.prepareImage({ size: 20, type: "image/heic", name: "photo.heic" }), /HEIC/);
  await assert.rejects(core.prepareImage({ size: 30 * 1024 * 1024 + 1, type: "image/jpeg", name: "photo.jpg" }), /30 MB/);
  await assert.rejects(core.prepareImage({ size: 0, type: "image/jpeg", name: "photo.jpg" }), /空白檔案/);
  await assert.rejects(core.loadPanorama({ size: 20, type: "", name: "panorama.insp" }), /拼接.*2:1/);
  await assert.rejects(core.loadPanorama({ size: 20, type: "video/mp4", name: "panorama.mp4" }), /環景.*2:1/);
});
