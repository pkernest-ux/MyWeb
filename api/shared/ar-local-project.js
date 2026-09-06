"use strict";

// This contract is intentionally local. Publishing to GitHub remains a separate
// authenticated deployment action, not a side effect of editing the local map.
const { validateFieldSurvey } = require("./ar-field-survey.js");
const object = value => value !== null && typeof value === "object" && !Array.isArray(value);
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const clone = value => JSON.parse(JSON.stringify(value));
const fail = (message, code = "INVALID_PROJECT_PAYLOAD", status = 400) => {
  throw Object.assign(new Error(message), { status, code });
};
const id = (value, name) => {
  if (typeof value !== "string" || !value.trim() || value !== value.trim() || value.length > 128 || /[\u0000-\u001f\u007f]/.test(value)) {
    fail(`Invalid ${name}.`, "INVALID_PROJECT_ID");
  }
  return value;
};
const assertObject = (value, name) => {
  if (!object(value)) fail(`${name} must be an object.`);
};
const finite = value => typeof value === "number" && Number.isFinite(value);
const assertDepth = (value, depth = 0) => {
  if (depth > 40) fail("Project metadata is nested too deeply.");
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) assertDepth(item, depth + 1);
  }
};

// Omitted object properties are kept, while explicit values and ordinary arrays
// are replaced. fromEntries also treats JSON '__proto__' as data, never a setter.
const mergeMetadata = (previous, incoming) => {
  if (!object(previous) || !object(incoming)) return incoming;
  return Object.fromEntries([...new Set([...Object.keys(previous), ...Object.keys(incoming)])].map(key => [
    key, own(incoming, key) ? mergeMetadata(previous[key], incoming[key]) : previous[key],
  ]));
};
const mergeItems = (previous, incoming, merge, identity = item => item?.id) => incoming.map(item => {
  assertObject(item, "Project item");
  return merge((Array.isArray(previous) ? previous : []).find(old => identity(old) === identity(item)), item);
});

function validateProject(payload) {
  assertObject(payload, "Project payload");
  assertDepth(payload);
  assertObject(payload.project, "Project identity");
  id(payload.project.id, "project id");
  if (own(payload, "systemConfig")) assertObject(payload.systemConfig, "System configuration");
  if (!Array.isArray(payload.buildings)) fail("Project buildings must be an array.");
  const buildingIds = new Set();
  const floorIds = new Set();
  const nodeIds = new Set();
  const allEdges = [];
  const unique = (value, set, name) => {
    id(value, name);
    if (set.has(value)) fail(`Duplicate ${name}.`, "DUPLICATE_PROJECT_ID");
    set.add(value);
  };
  for (const building of payload.buildings) {
    assertObject(building, "Building");
    unique(building.id, buildingIds, "building id");
    if (!Array.isArray(building.floors)) fail("Building floors must be an array.");
    for (const floor of building.floors) {
      assertObject(floor, "Floor");
      unique(floor.id, floorIds, "floor id");
      if (own(floor, "bounds")) {
        assertObject(floor.bounds, "Floor bounds");
        if (!["blX", "blY", "trX", "trY"].every(key => finite(floor.bounds[key]))) fail("Floor bounds must be finite coordinates.");
      }
      for (const key of ["markers", "waypoints", "edges"]) {
        if (own(floor, key) && !Array.isArray(floor[key])) fail(`Floor ${key} must be an array.`);
      }
      for (const key of ["markers", "waypoints"]) {
        for (const node of floor[key] || []) {
          assertObject(node, "Node");
          unique(node.id, nodeIds, "node id");
          // Cross-floor coordinate transforms can legitimately fall outside 0..1.
          if (!finite(node.x) || !finite(node.y)) fail("Node coordinates must be finite numbers.", "INVALID_NODE_COORDINATES");
          if (own(node, "isVerticalShaft") && typeof node.isVerticalShaft !== "boolean") fail("Invalid vertical shaft flag.");
          if (node.shaftId !== undefined && node.shaftId !== null) id(node.shaftId, "shaft id");
          if (own(node, "linkedFloorIds") && (!Array.isArray(node.linkedFloorIds) || node.linkedFloorIds.some(value => typeof value !== "string" || !value.trim()))) fail("Invalid linked floor IDs.");
          if (own(node, "fieldObservations")) {
            if (!Array.isArray(node.fieldObservations) || node.fieldObservations.length > 24) fail("Invalid field observations.");
            const observationIds = new Set();
            for (const observation of node.fieldObservations) {
              validateFieldSurvey({ projectId: payload.project.id, buildingId: building.id, floorId: floor.id, nodeId: node.id, nodeType: key === "markers" ? "marker" : "waypoint", observation });
              if (observationIds.has(observation.id)) fail("Duplicate field observation ID.");
              observationIds.add(observation.id);
            }
          }
        }
      }
      const edgeIds = new Set();
      for (const edge of floor.edges || []) {
        assertObject(edge, "Edge");
        if (own(edge, "id")) unique(edge.id, edgeIds, "edge id");
        const usesCanonical = own(edge, "start") || own(edge, "end");
        const start = usesCanonical ? edge.start : edge.from;
        const end = usesCanonical ? edge.end : edge.to;
        id(start, "edge start");
        id(end, "edge end");
        allEdges.push([start, end]);
      }
    }
  }
  // Check against the complete project, not only the containing floor: shafts
  // and explicit cross-floor edges are both legitimate existing graph data.
  if (allEdges.some(edge => edge.some(nodeId => !nodeIds.has(nodeId)))) fail("An edge refers to a missing node.", "INVALID_EDGE_TARGET");
  return payload;
}

function applyLocalProject(collection, payload) {
  assertObject(payload, "Project payload");
  assertDepth(payload);
  assertObject(payload.project, "Project identity");
  const projectId = id(payload.project.id, "project id");
  if (!Array.isArray(payload.buildings)) fail("Project buildings must be an array.");
  if (!object(collection) || !Array.isArray(collection.projects)) fail("Invalid local project collection.", "INVALID_AR_COLLECTION", 409);
  payload = clone(payload);
  const matches = collection.projects.filter(item => item?.project?.id === projectId);
  if (matches.length > 1) fail("Project identity is ambiguous. Reload before saving.", "SYNC_TARGET_NOT_FOUND", 409);
  const mergeNode = (previous, incoming) => {
    const next = mergeMetadata(previous, incoming);
    // Map editing does not delete or rewrite separately captured field evidence.
    // Explicitly removing the node is the only graph-edit operation that removes it.
    if (own(previous || {}, "fieldObservations")) next.fieldObservations = previous.fieldObservations;
    return next;
  };
  const mergeFloor = (previous, incoming) => {
    assertObject(incoming, "Floor");
    const next = mergeMetadata(previous, incoming);
    for (const key of ["markers", "waypoints"]) {
      if (Array.isArray(incoming[key])) next[key] = mergeItems(previous?.[key], incoming[key], mergeNode);
    }
    if (Array.isArray(incoming.edges)) next.edges = mergeItems(previous?.edges, incoming.edges, mergeMetadata,
      edge => edge?.id ?? JSON.stringify([edge?.start ?? edge?.from, edge?.end ?? edge?.to]));
    return next;
  };
  const mergeBuilding = (previous, incoming) => {
    assertObject(incoming, "Building");
    const next = mergeMetadata(previous, incoming);
    if (Array.isArray(incoming.floors)) next.floors = mergeItems(previous?.floors, incoming.floors, mergeFloor);
    return next;
  };
  const previous = matches[0];
  const nextProject = mergeMetadata(previous, payload);
  nextProject.buildings = mergeItems(previous?.buildings, payload.buildings, mergeBuilding);
  validateProject(nextProject);
  const next = clone(collection);
  const index = next.projects.findIndex(item => item?.project?.id === projectId);
  if (index === -1) next.projects.push(clone(nextProject));
  else next.projects[index] = clone(nextProject);
  if (!next.activeProjectId) next.activeProjectId = projectId;
  return { collection: next, projectId };
}

module.exports = { applyLocalProject, validateProject };
