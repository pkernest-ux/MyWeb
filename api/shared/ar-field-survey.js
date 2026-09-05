"use strict";

const MAX_IMAGE_BYTES = 256 * 1024;
const MAX_OBSERVATIONS = 24;
const fail = (message, code = "INVALID_FIELD_SURVEY", status = 400) => {
  const error = new Error(message);
  error.status = status;
  error.code = code;
  throw error;
};
const object = value => value !== null && typeof value === "object" && !Array.isArray(value);
const finite = value => typeof value === "number" && Number.isFinite(value);
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const clone = value => JSON.parse(JSON.stringify(value));
const same = (left, right) => {
  if (left === right) return true;
  if (Array.isArray(left) && Array.isArray(right)) {
    return left.length === right.length && left.every((item, index) => same(item, right[index]));
  }
  if (!object(left) || !object(right)) return false;
  const keys = Object.keys(left);
  return keys.length === Object.keys(right).length && keys.every(key => own(right, key) && same(left[key], right[key]));
};
const assertKeys = (value, allowed, name) => {
  if (!object(value) || Object.keys(value).some(key => !allowed.includes(key))) {
    fail(`Invalid ${name} fields.`);
  }
};
const id = (value, name) => {
  if (typeof value !== "string" || !value.trim() || value !== value.trim() || value.length > 128 || /[\u0000-\u001f\u007f]/.test(value)) {
    fail(`Invalid ${name}.`, "INVALID_FIELD_SURVEY_ID");
  }
  return value;
};
const timestamp = (value, name, nullable = false) => {
  if (nullable && value === null) return null;
  if (typeof value !== "string" || value.length > 40 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(value) || !Number.isFinite(Date.parse(value))) {
    fail(`Invalid ${name}.`);
  }
  return value;
};
const range = (value, min, max, name, exclusiveMax = false) => {
  if (!finite(value) || value < min || (exclusiveMax ? value >= max : value > max)) fail(`Invalid ${name}.`);
  return value;
};
const nullableRange = (value, min, max, name, exclusiveMax = false) => (
  value === null ? null : range(value, min, max, name, exclusiveMax)
);

// Validate the bounded JPEG container and its encoded dimensions. This does not
// decode pixels or trust a MIME label to establish that the bytes are JPEG.
const validateJpeg = (value, width, height) => {
  const prefix = "data:image/jpeg;base64,";
  if (typeof value !== "string" || !value.startsWith(prefix) || value.length > prefix.length + 4 * Math.ceil(MAX_IMAGE_BYTES / 3)) {
    fail("A JPEG data URL of at most 256 KiB is required.", "INVALID_SURVEY_IMAGE");
  }
  const encoded = value.slice(prefix.length);
  if (!encoded || encoded.length % 4 !== 0 || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(encoded)) {
    fail("Invalid JPEG base64 encoding.", "INVALID_SURVEY_IMAGE");
  }
  const bytes = Buffer.from(encoded, "base64");
  if (bytes.length > MAX_IMAGE_BYTES || bytes.toString("base64") !== encoded || bytes.length < 16 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
    fail("Invalid or oversized JPEG bytes.", "INVALID_SURVEY_IMAGE");
  }
  let offset = 2;
  let foundDimensions = false;
  let foundScan = false;
  const startOfFrame = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  while (offset < bytes.length) {
    if (bytes[offset++] !== 0xff) fail("Invalid JPEG marker.", "INVALID_SURVEY_IMAGE");
    while (bytes[offset] === 0xff) offset += 1;
    const marker = bytes[offset++];
    if (marker === 0xd9) {
      if (offset !== bytes.length || !foundDimensions || !foundScan) fail("Incomplete JPEG image.", "INVALID_SURVEY_IMAGE");
      return value;
    }
    if (marker === 0x00 || marker === 0xd8 || marker === undefined || (marker >= 0xd0 && marker <= 0xd7)) fail("Invalid JPEG segment.", "INVALID_SURVEY_IMAGE");
    if (offset + 2 > bytes.length) fail("Truncated JPEG image.", "INVALID_SURVEY_IMAGE");
    const length = bytes.readUInt16BE(offset);
    if (length < 2 || offset + length > bytes.length - 2) fail("Invalid JPEG segment length.", "INVALID_SURVEY_IMAGE");
    if (startOfFrame.has(marker)) {
      if (length < 11 || foundDimensions) fail("Invalid JPEG frame.", "INVALID_SURVEY_IMAGE");
      const actualHeight = bytes.readUInt16BE(offset + 3);
      const actualWidth = bytes.readUInt16BE(offset + 5);
      const components = bytes[offset + 7];
      if (length !== 8 + 3 * components || components < 1 || components > 4 || actualWidth !== width || actualHeight !== height) {
        fail("JPEG dimensions do not match the observation.", "INVALID_SURVEY_IMAGE");
      }
      foundDimensions = true;
    }
    if (marker === 0xda) {
      if (!foundDimensions || length < 6 || length !== 6 + 2 * bytes[offset + 2]) fail("Invalid JPEG scan.", "INVALID_SURVEY_IMAGE");
      foundScan = true;
      offset += length;
      // Escaped FF bytes and restart markers are part of entropy-coded data.
      while (offset < bytes.length - 1) {
        if (bytes[offset] !== 0xff) { offset += 1; continue; }
        if (bytes[offset + 1] === 0x00 || (bytes[offset + 1] >= 0xd0 && bytes[offset + 1] <= 0xd7)) { offset += 2; continue; }
        break;
      }
    } else offset += length;
  }
  fail("Incomplete JPEG image.", "INVALID_SURVEY_IMAGE");
};

const validateObservation = value => {
  assertKeys(value, ["id", "capturedAt", "source", "imageUrl", "width", "height", "mapBearing", "headingSource", "sensor", "note", "quality", "panorama"], "observation");
  id(value.id, "observation id");
  timestamp(value.capturedAt, "capture time");
  if (!["camera", "upload", "panorama-frame"].includes(value.source)) fail("Invalid observation source.");
  if (!Number.isInteger(value.width) || !Number.isInteger(value.height) || value.width < 1 || value.height < 1 || value.width > 1600 || value.height > 1600) fail("Invalid observation dimensions.", "INVALID_SURVEY_IMAGE");
  validateJpeg(value.imageUrl, value.width, value.height);
  nullableRange(value.mapBearing, 0, 360, "map bearing", true);
  if (!["manual", "sensor-map", "unconfirmed"].includes(value.headingSource)) fail("Invalid heading source.");
  if ((value.headingSource === "unconfirmed") !== (value.mapBearing === null)) fail("Unconfirmed headings must have a null map bearing.");
  if (own(value, "note") && (typeof value.note !== "string" || value.note.length > 1000)) fail("Observation note is too long.");
  if (own(value, "sensor")) {
    const sensor = value.sensor;
    assertKeys(sensor, ["heading", "kind", "accuracy", "capturedAt", "alpha", "beta", "gamma", "screenAngle"], "sensor");
    if (!["absolute", "relative", "unavailable"].includes(sensor.kind)) fail("Invalid sensor heading kind.");
    nullableRange(sensor.heading, 0, 360, "sensor heading", true);
    nullableRange(sensor.accuracy, 0, 360, "sensor accuracy");
    timestamp(sensor.capturedAt, "sensor capture time", true);
    nullableRange(sensor.alpha, 0, 360, "sensor alpha");
    nullableRange(sensor.beta, -180, 180, "sensor beta");
    nullableRange(sensor.gamma, -90, 90, "sensor gamma");
    range(sensor.screenAngle, -360, 360, "screen angle");
    if (sensor.kind === "unavailable" && sensor.heading !== null) fail("Unavailable sensors cannot have a heading.");
  }
  if (value.headingSource === "sensor-map" && (value.sensor?.kind !== "absolute" || value.sensor.heading === null)) fail("Map sensor headings require an absolute sensor heading.");
  if (own(value, "quality")) {
    assertKeys(value.quality, ["brightness", "sharpness", "warnings"], "quality");
    range(value.quality.brightness, 0, 255, "brightness");
    range(value.quality.sharpness, 0, Number.MAX_SAFE_INTEGER, "sharpness");
    if (!Array.isArray(value.quality.warnings) || value.quality.warnings.length > 16 || value.quality.warnings.some(item => typeof item !== "string" || item.length > 200)) fail("Invalid quality warnings.");
  }
  if (own(value, "panorama")) {
    assertKeys(value.panorama, ["yaw", "pitch", "fov"], "panorama");
    range(value.panorama.yaw, -360, 360, "panorama yaw");
    range(value.panorama.pitch, -90, 90, "panorama pitch");
    range(value.panorama.fov, Number.EPSILON, 180, "panorama field of view", true);
  }
  return clone(value);
};

const validateFieldSurvey = value => {
  assertKeys(value, ["projectId", "buildingId", "floorId", "nodeId", "nodeType", "observation", "calibration", "promoteToGuide"], "field survey");
  for (const name of ["projectId", "buildingId", "floorId", "nodeId"]) id(value[name], name);
  if (!["marker", "waypoint"].includes(value.nodeType)) fail("Invalid node type.");
  if (!own(value, "observation") && !own(value, "calibration")) fail("An observation or calibration is required.");
  if (own(value, "promoteToGuide") && typeof value.promoteToGuide !== "boolean") fail("Invalid guide promotion flag.");
  if (value.promoteToGuide && !value.observation) fail("Promoting a guide requires an observation.");
  const result = clone(value);
  if (own(value, "observation")) result.observation = validateObservation(value.observation);
  if (own(value, "calibration")) {
    assertKeys(value.calibration, ["guideReferenceBearing", "mapUpHeading"], "calibration");
    range(value.calibration.guideReferenceBearing, 0, 360, "guide bearing", true);
    if (own(value.calibration, "mapUpHeading")) range(value.calibration.mapUpHeading, 0, 360, "map up heading", true);
  }
  return result;
};

const applyFieldSurvey = (collection, fieldSurvey, now = new Date()) => {
  const survey = validateFieldSurvey(fieldSurvey);
  if (!object(collection) || !Array.isArray(collection.projects)) fail("Invalid AR collection.", "INVALID_AR_COLLECTION", 409);
  const updatedAt = now instanceof Date ? now.toISOString() : timestamp(now, "update time");
  const next = clone(collection);
  const exactlyOne = (items, predicate) => {
    const matches = Array.isArray(items) ? items.filter(predicate) : [];
    if (matches.length !== 1) fail("The survey target is missing or ambiguous. Reload before saving.", "SYNC_TARGET_NOT_FOUND", 409);
    return matches[0];
  };
  const project = exactlyOne(next.projects, item => item?.project?.id === survey.projectId);
  const building = exactlyOne(project.buildings, item => item?.id === survey.buildingId);
  const floor = exactlyOne(building.floors, item => item?.id === survey.floorId);
  const node = exactlyOne(survey.nodeType === "marker" ? floor.markers : floor.waypoints, item => item?.id === survey.nodeId);
  let changed = false;
  if (survey.observation) {
    if (own(node, "fieldObservations") && !Array.isArray(node.fieldObservations)) fail("Existing field observations are invalid.", "INVALID_EXISTING_OBSERVATIONS", 409);
    const observations = node.fieldObservations || [];
    const existing = observations.filter(item => item?.id === survey.observation.id);
    if (existing.length > 1 || (existing.length === 1 && !same(existing[0], survey.observation))) fail("This observation ID already has different content.", "SURVEY_OBSERVATION_CONFLICT", 409);
    if (existing.length === 0) {
      if (observations.length >= MAX_OBSERVATIONS) fail("This node already contains 24 observations.", "SURVEY_OBSERVATION_LIMIT", 409);
      node.fieldObservations = [...observations, survey.observation];
      changed = true;
    }
    if (survey.promoteToGuide) {
      const imageKey = survey.nodeType === "marker" ? "imageUrl" : "guideImageUrl";
      if (node[imageKey] !== survey.observation.imageUrl) {
        node[imageKey] = survey.observation.imageUrl;
        changed = true;
      }
    }
  }
  let calibration = null;
  if (survey.calibration) {
    const { guideReferenceBearing } = survey.calibration;
    const hasMapUp = own(survey.calibration, "mapUpHeading");
    if (node.guideDirectionMode !== "manual" || node.guideReferenceBearing !== guideReferenceBearing || node.guideAngleCalibrationSource !== "v4-field-survey" || (hasMapUp && floor.mapUpHeading !== survey.calibration.mapUpHeading)) {
      node.guideDirectionMode = "manual";
      node.guideReferenceBearing = guideReferenceBearing;
      node.guideAngleCalibratedAt = updatedAt;
      node.guideAngleCalibrationSource = "v4-field-survey";
      if (hasMapUp) floor.mapUpHeading = survey.calibration.mapUpHeading;
      changed = true;
    }
    calibration = {
      projectId: survey.projectId, buildingId: survey.buildingId, floorId: survey.floorId,
      nodeId: survey.nodeId, nodeType: survey.nodeType, guideDirectionMode: "manual",
      guideReferenceBearing, updatedAt: node.guideAngleCalibratedAt,
      ...(hasMapUp ? { mapUpHeading: floor.mapUpHeading } : {})
    };
  }
  if (changed) project.project.updatedAt = updatedAt;
  return { collection: next, observationId: survey.observation?.id || null, calibration };
};

module.exports = { validateFieldSurvey, applyFieldSurvey };
