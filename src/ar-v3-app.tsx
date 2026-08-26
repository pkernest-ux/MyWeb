import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  Compass,
  Crosshair,
  ExternalLink,
  LocateFixed,
  Map,
  MapPin,
  Maximize2,
  Minimize2,
  Minus,
  Navigation,
  Plus,
  RefreshCw,
  ScanLine,
  SlidersHorizontal,
} from "lucide-react";
import {
  OrbImageTracker,
  type RecognitionDetection,
  type RecognitionPoint,
} from "./ar-v3-image-recognition";

type NodeData = {
  id: string;
  x: number;
  y: number;
  physX: number;
  physY: number;
  fId: string;
  fName: string;
  bId: string;
  bName: string;
  isMarker: boolean;
  isVerticalShaft?: boolean;
  shaftId?: string | null;
  title?: string;
  code?: string;
  description?: string;
  enabled?: boolean;
  navigable?: boolean;
  canStop?: boolean;
  publicSelectable?: boolean;
  imageUrl?: string | null;
  recognitionStatus?: string;
  guideTitle?: string;
  guideInstruction?: string;
  guideImageUrl?: string | null;
  guideRecognitionStatus?: string;
  guideExternalUrl?: string;
  guideDirectionMode?: "auto" | "manual" | "sensor";
  guideReferenceBearing?: number | null;
  guideDeviceHeading?: number | null;
  guideHeadingAccuracy?: number | null;
  guideHeadingCapturedAt?: string | null;
};

type FloorData = {
  id: string;
  name: string;
  imageUrl?: string | null;
  navigationImageUrl?: string | null;
  markers?: any[];
  waypoints?: any[];
  edges?: any[];
  bounds?: { blX: number; blY: number; trX: number; trY: number };
  mapUpHeading?: number | null;
  mapUpHeadingAccuracy?: number | null;
  mapUpHeadingCapturedAt?: string | null;
  buildingId: string;
  buildingName: string;
};

type GraphData = {
  nodes: Record<string, NodeData>;
  adjacency: Record<string, Record<string, number>>;
  floors: FloorData[];
};

type ManualOrigin = {
  floorId: string;
  x: number;
  y: number;
  physX: number;
  physY: number;
  snapId: string;
};

type ProjectOption = {
  id: string;
  name: string;
  updatedAt?: string;
  source: "cloud" | "local";
  localData?: any;
  summary?: any;
};

type RecognitionStatus =
  | "disabled"
  | "loading"
  | "searching"
  | "confirming"
  | "locked"
  | "lost"
  | "error";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const DEFAULT_LABEL_SIZE = 15;
const AR_TURN_ANGLE_THRESHOLD = 18;
const AR_SCREEN_UNITS_PER_METER = 2.4;
const RECOGNITION_FRAME_INTERVAL_MS = 120;
const RECOGNITION_CONFIRMATION_FRAMES = 2;
const RECOGNITION_LOST_DELAY_MS = 400;
const DEFAULT_GUIDE_IMAGE_URL = "./assets/ar-v3/hsinchu-city-hall-navigation-clean.png";
const DEFAULT_DESTINATION_LABEL = "產業發展處工商科(工商登記)";
const DEFAULT_ORIGIN_LABELS = ["大門", "入口", "正門"];

const normalizeProjects = (raw: any) => {
  if (Array.isArray(raw?.projects)) return raw.projects;
  if (raw?.project || Array.isArray(raw?.buildings)) return [raw];
  return [];
};

const projectName = (data: any) =>
  data?.project?.name || data?.systemConfig?.projectName || "未命名導引專案";

const updateProjectNodeGuideAngle = (
  currentProject: any,
  target: NodeData,
  angle: number,
  updatedAt: string,
) => ({
  ...currentProject,
  project: {
    ...(currentProject?.project || {}),
    updatedAt,
  },
  buildings: (currentProject?.buildings || []).map((building: any) =>
    building.id !== target.bId
      ? building
      : {
          ...building,
          floors: (building.floors || []).map((floor: any) => {
            if (floor.id !== target.fId) return floor;
            const collectionKey = target.isMarker ? "markers" : "waypoints";
            return {
              ...floor,
              [collectionKey]: (floor[collectionKey] || []).map((node: any) =>
                node.id !== target.id
                  ? node
                  : {
                      ...node,
                      guideDirectionMode: "manual",
                      guideReferenceBearing: angle,
                      guideAngleCalibratedAt: updatedAt,
                      guideAngleCalibrationSource: "v3-field-calibration",
                    },
              ),
            };
          }),
        },
  ),
});

const loadProjectOption = async (option: ProjectOption) => {
  let selected = option.localData;
  if (option.source === "cloud") {
    try {
      const response = await fetch(
        `./api/ar-content?projectId=${encodeURIComponent(option.id)}&ts=${Date.now()}`,
        { cache: "no-store" },
      );
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok || !contentType.includes("application/json")) {
        throw new Error(`雲端專案載入失敗 (${response.status})`);
      }
      selected = await response.json();
    } catch (error) {
      if (!selected) throw error;
    }
  }

  if (!Array.isArray(selected?.buildings) || selected.buildings.length === 0) {
    throw new Error("此場域尚未建立可用的平面圖");
  }
  return selected;
};

const normalizeAngle = (value: number) => {
  let angle = value % 360;
  if (angle > 180) angle -= 360;
  if (angle < -180) angle += 360;
  return angle;
};

const normalizeHeading = (value: number) => ((value % 360) + 360) % 360;

const normalizeOptionalHeading = (value: unknown) =>
  value === null || value === undefined || !Number.isFinite(Number(value))
    ? null
    : normalizeHeading(Number(value));

const nodeLabel = (node?: NodeData | null) =>
  node?.title && node.title !== "新增辨識點"
    ? node.title
    : node?.guideTitle?.trim?.() || node?.code || node?.title || "未命名停駐點";

const getHeading = (event: DeviceOrientationEvent & { webkitCompassHeading?: number }) => {
  if (typeof event.webkitCompassHeading === "number" && Number.isFinite(event.webkitCompassHeading)) {
    return event.webkitCompassHeading;
  }
  if (typeof event.alpha === "number" && Number.isFinite(event.alpha)) {
    return (360 - event.alpha + 360) % 360;
  }
  return null;
};

export const buildGraph = (buildings: any[]): GraphData => {
  const nodes: Record<string, NodeData> = {};
  const adjacency: Record<string, Record<string, number>> = {};
  const floors: FloorData[] = [];

  const connect = (start: string, end: string, weight: number) => {
    adjacency[start] ||= {};
    adjacency[end] ||= {};
    adjacency[start][end] = Math.min(adjacency[start][end] ?? Infinity, weight);
    adjacency[end][start] = Math.min(adjacency[end][start] ?? Infinity, weight);
  };

  buildings.forEach((building) => {
    (building.floors || []).forEach((rawFloor: any) => {
      const floor: FloorData = {
        ...rawFloor,
        buildingId: building.id,
        buildingName: building.name,
      };
      floors.push(floor);
      const bounds = floor.bounds || { blX: 0, blY: 0, trX: 100, trY: 100 };
      const toPhysical = (x: number, y: number) => ({
        physX: bounds.blX + x * (bounds.trX - bounds.blX),
        physY: bounds.trY - y * (bounds.trY - bounds.blY),
      });

      [...(floor.markers || []), ...(floor.waypoints || [])].forEach((rawNode: any) => {
        const isMarker = (floor.markers || []).includes(rawNode);
        if (isMarker && rawNode.enabled === false) return;
        nodes[rawNode.id] = {
          ...rawNode,
          ...toPhysical(Number(rawNode.x) || 0, Number(rawNode.y) || 0),
          fId: floor.id,
          fName: floor.name,
          bId: building.id,
          bName: building.name,
          isMarker,
          canStop: rawNode.canStop !== false,
        };
        adjacency[rawNode.id] ||= {};
      });

      (floor.edges || []).forEach((edge: any) => {
        const start = nodes[edge.start];
        const end = nodes[edge.end];
        if (!start || !end) return;
        connect(edge.start, edge.end, Math.hypot(start.physX - end.physX, start.physY - end.physY));
      });
    });
  });

  const shafts: Record<string, string[]> = {};
  Object.values(nodes).forEach((node) => {
    if (!node.isVerticalShaft || !node.shaftId) return;
    shafts[node.shaftId] ||= [];
    shafts[node.shaftId].push(node.id);
  });
  Object.values(shafts).forEach((group) => {
    group.forEach((start, index) => {
      group.slice(index + 1).forEach((end) => connect(start, end, 5));
    });
  });

  return { nodes, adjacency, floors };
};

export const shortestPath = (graph: GraphData, startId: string, destinationId: string) => {
  const snapNode = (nodeId: string) => {
    const node = graph.nodes[nodeId];
    if (!node) return null;
    if (Object.keys(graph.adjacency[nodeId] || {}).length > 0) return nodeId;
    let nearest: string | null = null;
    let nearestDistance = Infinity;
    Object.values(graph.nodes).forEach((candidate) => {
      if (candidate.fId !== node.fId || Object.keys(graph.adjacency[candidate.id] || {}).length === 0) return;
      const distance = Math.hypot(candidate.physX - node.physX, candidate.physY - node.physY);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = candidate.id;
      }
    });
    return nearest;
  };

  const start = snapNode(startId);
  const end = snapNode(destinationId);
  if (!start || !end) return [];

  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const remaining = new Set(Object.keys(graph.nodes));
  remaining.forEach((id) => {
    distances[id] = Infinity;
    previous[id] = null;
  });
  distances[start] = 0;

  while (remaining.size) {
    let current: string | null = null;
    remaining.forEach((id) => {
      if (current === null || distances[id] < distances[current]) current = id;
    });
    if (!current || distances[current] === Infinity) break;
    remaining.delete(current);
    if (current === end) break;
    Object.entries(graph.adjacency[current] || {}).forEach(([neighbor, weight]) => {
      if (!remaining.has(neighbor)) return;
      const nextDistance = distances[current!] + weight;
      if (nextDistance < distances[neighbor]) {
        distances[neighbor] = nextDistance;
        previous[neighbor] = current;
      }
    });
  }

  const path: string[] = [];
  let cursor: string | null = end;
  while (cursor) {
    path.unshift(cursor);
    cursor = previous[cursor];
  }
  if (path[0] !== start) return [];
  if (end !== destinationId) path.push(destinationId);
  return path;
};

export const shortestPathThroughStops = (graph: GraphData, stopIds: string[]) => {
  const normalizedStops = stopIds.filter(
    (nodeId, index) => Boolean(graph.nodes[nodeId]) && stopIds[index - 1] !== nodeId,
  );
  if (normalizedStops.length < 2) return normalizedStops;

  const route: string[] = [];
  for (let index = 0; index < normalizedStops.length - 1; index += 1) {
    const section = shortestPath(graph, normalizedStops[index], normalizedStops[index + 1]);
    if (section.length < 2) return [];
    route.push(...(route.length ? section.slice(1) : section));
  }
  return route;
};

const segmentBearing = (start: { physX: number; physY: number }, end: { physX: number; physY: number }) =>
  (Math.atan2(end.physX - start.physX, end.physY - start.physY) * 180) / Math.PI;

const routeLength = (points: Array<{ physX: number; physY: number }>) =>
  points.slice(1).reduce(
    (total, point, index) =>
      total + Math.hypot(point.physX - points[index].physX, point.physY - points[index].physY),
    0,
  );

type GuideSegment = {
  index: number;
  startIndex: number;
  endIndex: number;
  points: Array<any>;
  start: any;
  end: any;
  floorId: string;
  floorName: string;
  distance: number;
  title: string;
  calibrationInstruction: string;
  travelInstruction: string;
  referenceImageUrl: string;
  externalUrl: string;
};

type RouteRecognitionCandidate = {
  id: string;
  imageUrl: string;
  nodeId: string;
  label: string;
  floorId: string;
  segmentIndex?: number;
  source: "ar-location" | "waypoint-guide";
  directionMode: "auto" | "manual" | "sensor";
  referenceBearing: number | null;
  capturedDeviceHeading: number | null;
};

type NodeRecognitionImage = {
  id: string;
  imageUrl: string;
  source: RouteRecognitionCandidate["source"];
};

export const nodeRecognitionImages = (point: any): NodeRecognitionImage[] => {
  const images: NodeRecognitionImage[] = [];
  const markerImageUrl = point?.imageUrl?.trim?.() || "";
  const guideImageUrl = point?.guideImageUrl?.trim?.() || "";
  if (markerImageUrl) {
    images.push({
      id: `ar-location-${point.id}`,
      imageUrl: markerImageUrl,
      source: "ar-location",
    });
  }
  if (guideImageUrl && guideImageUrl !== markerImageUrl) {
    images.push({
      id: `waypoint-guide-${point.id}`,
      imageUrl: guideImageUrl,
      source: "waypoint-guide",
    });
  }
  return images;
};

export const isPublicStop = (node: NodeData) =>
  node.canStop !== false &&
  (node.isMarker ? node.navigable !== false : node.publicSelectable === true);

const hasGuideDetails = (point: any) =>
  Boolean(
    point?.guideTitle?.trim?.() ||
      point?.guideInstruction?.trim?.() ||
      nodeRecognitionImages(point).length ||
      point?.guideExternalUrl?.trim?.(),
  );

export const buildGuideSegments = (points: Array<any>, destinationLabel: string): GuideSegment[] => {
  if (points.length < 2) return [];

  const ranges: Array<[number, number]> = [];
  const addFloorRanges = (floorStart: number, floorEnd: number) => {
    if (floorEnd <= floorStart) return;
    let rangeStart = floorStart;
    for (let index = floorStart + 1; index < floorEnd; index += 1) {
      const previous = points[index - 1];
      const current = points[index];
      const next = points[index + 1];
      const turnAngle = Math.abs(
        normalizeAngle(segmentBearing(current, next) - segmentBearing(previous, current)),
      );
      if (turnAngle >= AR_TURN_ANGLE_THRESHOLD || hasGuideDetails(current)) {
        ranges.push([rangeStart, index]);
        rangeStart = index;
      }
    }
    ranges.push([rangeStart, floorEnd]);
  };

  let floorStart = 0;
  for (let index = 0; index < points.length - 1; index += 1) {
    if (points[index]?.fId !== points[index + 1]?.fId) {
      addFloorRanges(floorStart, index);
      floorStart = index + 1;
    }
  }
  addFloorRanges(floorStart, points.length - 1);

  return ranges.map(([startIndex, endIndex], index) => {
    const segmentPoints = points.slice(startIndex, endIndex + 1);
    const start = segmentPoints[0];
    const end = segmentPoints[segmentPoints.length - 1];
    const guideSource = hasGuideDetails(start) ? start : hasGuideDetails(end) ? end : start;
    const nextRange = ranges[index + 1];
    const nextStart = nextRange ? points[nextRange[0]] : null;
    const nextEnd = nextRange ? points[Math.min(nextRange[0] + 1, nextRange[1])] : null;
    const currentPrevious = points[Math.max(startIndex, endIndex - 1)];
    let travelInstruction = `沿路線前進，抵達 ${destinationLabel}`;

    if (nextStart && nextStart.fId !== end.fId) {
      travelInstruction = `前往${end.guideTitle || "樓層轉乘點"}，抵達後切換至 ${nextStart.fName}`;
    } else if (nextStart && nextEnd && currentPrevious && end) {
      const turnAngle = normalizeAngle(
        segmentBearing(nextStart, nextEnd) - segmentBearing(currentPrevious, end),
      );
      const turnText = turnAngle > 18 ? "向右轉" : turnAngle < -18 ? "向左轉" : "繼續直行";
      travelInstruction = `前往${end.guideTitle || `下一個轉角`}，抵達後${turnText}`;
    }

    return {
      index,
      startIndex,
      endIndex,
      points: segmentPoints,
      start,
      end,
      floorId: start.fId,
      floorName: start.fName,
      distance: routeLength(segmentPoints),
      title:
        guideSource.guideTitle?.trim?.() ||
        (guideSource.isMarker ? nodeLabel(guideSource) : index === 0 ? "起點定位" : `轉角 ${index}`),
      calibrationInstruction:
        guideSource.guideInstruction?.trim?.() || "請站在參考位置，讓現場畫面與半透明照片重合",
      travelInstruction,
      referenceImageUrl: nodeRecognitionImages(guideSource)[0]?.imageUrl || "",
      externalUrl: guideSource.guideExternalUrl?.trim?.() || "",
    };
  });
};

const normalizedRecognitionDirection = (point: any) => {
  const directionMode: RouteRecognitionCandidate["directionMode"] =
    point?.guideDirectionMode === "sensor"
      ? "sensor"
      : point?.guideDirectionMode === "manual"
        ? "manual"
        : "auto";
  return {
    directionMode,
    referenceBearing: normalizeOptionalHeading(point?.guideReferenceBearing),
    capturedDeviceHeading: normalizeOptionalHeading(point?.guideDeviceHeading),
  };
};

export const buildRecognitionAnchorCandidates = (
  points: Array<any>,
): RouteRecognitionCandidate[] => {
  const candidatesByImage = new globalThis.Map<string, RouteRecognitionCandidate>();
  points.forEach((point, pointIndex) => {
    const recognitionImages = nodeRecognitionImages(point);
    if (!recognitionImages.length) return;
    const direction = normalizedRecognitionDirection(point);

    recognitionImages.forEach((image) => {
      const candidate: RouteRecognitionCandidate = {
        id: image.id || `route-node-${point.id || pointIndex}`,
        imageUrl: image.imageUrl,
        nodeId: String(point.id || pointIndex),
        label: point.guideTitle?.trim?.() || nodeLabel(point) || `路徑節點 ${pointIndex + 1}`,
        floorId: point.fId || "",
        source: image.source,
        ...direction,
      };
      if (!candidatesByImage.has(image.imageUrl)) candidatesByImage.set(image.imageUrl, candidate);
    });
  });
  return [...candidatesByImage.values()];
};

export const buildRouteRecognitionCandidates = (
  points: Array<any>,
  segments: GuideSegment[],
): RouteRecognitionCandidate[] => {
  const candidatesByImage = new globalThis.Map<string, RouteRecognitionCandidate>();
  points.forEach((point, pointIndex) => {
    const recognitionImages = nodeRecognitionImages(point);
    if (!recognitionImages.length) return;
    const exactSegment = segments.find((segment) => segment.startIndex === pointIndex);
    const containingSegment = segments.find(
      (segment) => pointIndex >= segment.startIndex && pointIndex <= segment.endIndex,
    );
    const targetSegment = exactSegment || containingSegment;
    if (!targetSegment) return;
    const direction = normalizedRecognitionDirection(point);

    recognitionImages.forEach((image) => {
      const candidate: RouteRecognitionCandidate = {
        id: image.id || `route-node-${point.id || pointIndex}`,
        imageUrl: image.imageUrl,
        nodeId: String(point.id || pointIndex),
        label: point.guideTitle?.trim?.() || nodeLabel(point) || `路徑節點 ${pointIndex + 1}`,
        floorId: point.fId || targetSegment.floorId,
        segmentIndex: targetSegment.index,
        source: image.source,
        ...direction,
      };
      const existing = candidatesByImage.get(image.imageUrl);
      if (!existing || targetSegment.startIndex === pointIndex) {
        candidatesByImage.set(image.imageUrl, candidate);
      }
    });
  });
  return [...candidatesByImage.values()];
};

const recognitionSourceKey = (source: string) =>
  source.startsWith("data:")
    ? `${source.length}:${source.slice(0, 32)}:${source.slice(-32)}`
    : source;

const safeExternalUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : "";
  } catch {
    return "";
  }
};

const smoothRecognitionCorners = (
  previous: RecognitionPoint[] | null,
  detection: RecognitionDetection,
) =>
  detection.corners.map((point, index) => {
    const prior = previous?.[index];
    if (!prior) return point;
    return {
      x: prior.x * 0.58 + point.x * 0.42,
      y: prior.y * 0.58 + point.y * 0.42,
    };
  });

const projectRecognitionPoint = (
  corners: RecognitionPoint[],
  horizontalRatio: number,
  verticalRatio: number,
) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = corners;
  const top = {
    x: topLeft.x + (topRight.x - topLeft.x) * horizontalRatio,
    y: topLeft.y + (topRight.y - topLeft.y) * horizontalRatio,
  };
  const bottom = {
    x: bottomLeft.x + (bottomRight.x - bottomLeft.x) * horizontalRatio,
    y: bottomLeft.y + (bottomRight.y - bottomLeft.y) * horizontalRatio,
  };
  return {
    x: top.x + (bottom.x - top.x) * verticalRatio,
    y: top.y + (bottom.y - top.y) * verticalRatio,
  };
};

export const recognitionVectorBearing = (
  corners: RecognitionPoint[] | null,
  mapBearing: number,
) => {
  if (!corners || corners.length !== 4) return null;
  const center = projectRecognitionPoint(corners, 0.5, 0.5);
  const radians = (mapBearing * Math.PI) / 180;
  const target = projectRecognitionPoint(
    corners,
    0.5 + Math.sin(radians) * 0.22,
    0.5 - Math.cos(radians) * 0.22,
  );
  const deltaX = target.x - center.x;
  const deltaY = target.y - center.y;
  if (Math.hypot(deltaX, deltaY) < 1) return null;
  return normalizeAngle((Math.atan2(deltaX, -deltaY) * 180) / Math.PI);
};

export const recognitionImageUpBearing = (corners: RecognitionPoint[] | null) =>
  recognitionVectorBearing(corners, 0);

export const recognitionRouteBearing = (
  corners: RecognitionPoint[] | null,
  routeBearing: number,
  directionMode: "auto" | "manual" | "sensor" = "auto",
  manualReferenceBearing: number | null = null,
) => {
  const parsedReferenceBearing = Number(manualReferenceBearing);
  const hasReferenceBearing =
    directionMode !== "auto" &&
    manualReferenceBearing !== null &&
    Number.isFinite(parsedReferenceBearing);
  const referenceBearing = hasReferenceBearing ? parsedReferenceBearing : routeBearing;
  return recognitionVectorBearing(corners, normalizeAngle(routeBearing - referenceBearing));
};

export const sensorRouteBearing = (
  routeBearing: number,
  mapUpHeading: number | null,
  deviceHeading: number | null,
  headingOffset: number | null,
) => {
  if (
    mapUpHeading === null ||
    deviceHeading === null ||
    headingOffset === null ||
    !Number.isFinite(mapUpHeading) ||
    !Number.isFinite(deviceHeading) ||
    !Number.isFinite(headingOffset)
  ) {
    return null;
  }
  return normalizeAngle(
    normalizeHeading(mapUpHeading) + routeBearing - normalizeHeading(deviceHeading + headingOffset),
  );
};

type MapLabelPlacement = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const placeMapLabels = (
  nodes: NodeData[],
  width: number,
  height: number,
  perspective: boolean,
  zoomScale: number,
  fontSize: number,
) => {
  const placements: Record<string, MapLabelPlacement> = {};
  if (!width || !height) return placements;

  const scale = clamp(zoomScale, 1, 4);

  const projectPoint = (node: NodeData) => {
    const x = clamp(node.x) * width;
    const y = clamp(node.y) * height;
    if (!perspective) return { x, y };
    const originX = width * 0.5;
    const originY = height * 0.58;
    return {
      x: originX + (x - originX) * 0.98,
      y: originY + (y - originY) * 0.98 * Math.SQRT1_2,
    };
  };
  const pins = nodes.map((node) => {
    const point = projectPoint(node);
    return { id: node.id, x: point.x * scale, y: point.y * scale };
  });
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;
  const occupied: Array<{ left: number; top: number; right: number; bottom: number }> = [
    {
      left: Math.max(0, scaledWidth - 54),
      top: Math.max(0, scaledHeight - 136),
      right: scaledWidth - 4,
      bottom: scaledHeight - 4,
    },
  ];
  const intersects = (
    a: { left: number; top: number; right: number; bottom: number },
    b: { left: number; top: number; right: number; bottom: number },
    gap = 3,
  ) =>
    a.left < b.right + gap &&
    a.right > b.left - gap &&
    a.top < b.bottom + gap &&
    a.bottom > b.top - gap;
  const candidateOffsets = [
    { x: 0, y: -1, align: "center" },
    { x: 1, y: -1, align: "edge" },
    { x: -1, y: -1, align: "edge" },
    { x: 1, y: 0, align: "side" },
    { x: -1, y: 0, align: "side" },
    { x: 1, y: 1, align: "edge" },
    { x: -1, y: 1, align: "edge" },
    { x: 0, y: 1, align: "center" },
  ] as const;
  const displacementSteps = [0, 14, 28, 44, 62, 84];

  [...nodes]
    .sort((a, b) => clamp(a.y) - clamp(b.y) || clamp(a.x) - clamp(b.x))
    .forEach((node) => {
      const label = nodeLabel(node);
      const estimatedTextWidth = Array.from(label).reduce(
        (total, character) => total + (/[^\u0000-\u00ff]/.test(character) ? fontSize : fontSize * 0.62),
        0,
      );
      const labelWidth = clamp(estimatedTextWidth + 18, 54, 184);
      const lineCount = Math.max(1, Math.ceil(estimatedTextWidth / Math.max(42, labelWidth - 16)));
      const labelHeight = 10 + lineCount * fontSize * 1.25;
      const projectedAnchor = projectPoint(node);
      const anchor = { x: projectedAnchor.x * scale, y: projectedAnchor.y * scale };
      let best:
        | { box: { left: number; top: number; right: number; bottom: number }; score: number }
        | undefined;

      displacementSteps.forEach((displacement, displacementIndex) => {
        candidateOffsets.forEach((direction, directionIndex) => {
          const verticalGap = 32 + displacement;
          const horizontalGap = 18 + displacement;
          let unclampedLeft = anchor.x - labelWidth / 2;
          let unclampedTop = anchor.y - verticalGap - labelHeight;

          if (direction.align === "edge") {
            unclampedLeft =
              direction.x > 0 ? anchor.x + horizontalGap : anchor.x - horizontalGap - labelWidth;
            unclampedTop =
              direction.y < 0 ? anchor.y - verticalGap - labelHeight : anchor.y + 12 + displacement;
          } else if (direction.align === "side") {
            unclampedLeft =
              direction.x > 0 ? anchor.x + horizontalGap : anchor.x - horizontalGap - labelWidth;
            unclampedTop = anchor.y - labelHeight / 2;
          } else if (direction.y > 0) {
            unclampedTop = anchor.y + 12 + displacement;
          }

          const left = clamp(unclampedLeft, -6, Math.max(-6, scaledWidth - labelWidth + 6));
          const top = clamp(unclampedTop, -40, Math.max(-40, scaledHeight - labelHeight + 6));
          const box = { left, top, right: left + labelWidth, bottom: top + labelHeight };
          const labelCollisions = occupied.filter((item) => intersects(box, item)).length;
          const pinCollisions = pins.filter((pin) => {
            if (pin.id === node.id) return false;
            return intersects(box, {
              left: pin.x - 15,
              top: pin.y - 29,
              right: pin.x + 15,
              bottom: pin.y + 4,
            });
          }).length;
          const edgePenalty = Math.abs(left - unclampedLeft) + Math.abs(top - unclampedTop);
          const score =
            labelCollisions * 100000 +
            pinCollisions * 50000 +
            displacementIndex * 1000 +
            directionIndex * 100 +
            edgePenalty * 4;
          if (!best || score < best.score) best = { box, score };
        });
      });

      if (!best) return;
      placements[node.id] = {
        left: best.box.left / scale,
        top: best.box.top / scale,
        width: labelWidth,
        height: labelHeight,
      };
      occupied.push(best.box);
    });

  return placements;
};

function FloorTabs({
  floors,
  selectedId,
  onSelect,
}: {
  floors: FloorData[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="v2-floor-tabs" aria-label="選擇樓層">
      {floors.map((floor) => (
        <button
          type="button"
          key={floor.id}
          className={floor.id === selectedId ? "is-active" : ""}
          onClick={() => onSelect(floor.id)}
        >
          {floor.name}
        </button>
      ))}
    </div>
  );
}

function MapPanel({
  floor,
  graph,
  mode,
  destinationId,
  origin,
  routePoints,
  routeSegments,
  activeRouteIndex = 0,
  completedRouteIndex = activeRouteIndex,
  onOrigin,
  allowOriginSelection = false,
  compact = false,
  reverseFlow = false,
  allowPerspective = true,
  mapView = "flat",
  imageMode = "overview",
  labelFontSize = DEFAULT_LABEL_SIZE,
  scaleMarkersWithMap = false,
  isFullscreen = false,
  onToggleFullscreen,
}: {
  floor?: FloorData;
  graph: GraphData;
  mode: "destination" | "origin" | "route";
  destinationId?: string | null;
  origin?: ManualOrigin | null;
  routePoints?: Array<any>;
  routeSegments?: GuideSegment[];
  activeRouteIndex?: number;
  completedRouteIndex?: number;
  onOrigin?: (point: { x: number; y: number }) => void;
  allowOriginSelection?: boolean;
  compact?: boolean;
  reverseFlow?: boolean;
  allowPerspective?: boolean;
  mapView?: "flat" | "perspective";
  imageMode?: "overview" | "navigation";
  labelFontSize?: number;
  scaleMarkersWithMap?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}) {
  const [ratio, setRatio] = useState(1.25);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 });
  const floorImageUrl = imageMode === "navigation"
    ? floor?.navigationImageUrl || floor?.imageUrl
    : floor?.imageUrl || floor?.navigationImageUrl;
  const mapPlaneRef = useRef<HTMLDivElement>(null);
  const pointerMapRef = useRef(new globalThis.Map<number, { x: number; y: number }>());
  const gestureRef = useRef({
    startPointerX: 0,
    startPointerY: 0,
    startPanX: 0,
    startPanY: 0,
    startPinchDistance: 0,
    startPinchScale: 1,
    startPinchCenterX: 0,
    startPinchCenterY: 0,
    moved: false,
    multiPointer: false,
  });
  const destinations = (Object.values(graph.nodes) as NodeData[]).filter(
    (node) => isPublicStop(node) && node.fId === floor?.id,
  );
  const floorRoute = (routePoints || []).filter((point) => point.fId === floor?.id);
  const routePath =
    floorRoute.length > 1
      ? floorRoute
          .map((point, index) => `${index === 0 ? "M" : "L"} ${clamp(point.x) * 100} ${clamp(point.y) * 100}`)
          .join(" ")
      : "";
  const safeFloorId = String(floor?.id || "floor").replace(/[^a-zA-Z0-9_-]/g, "-");
  const mapRouteSegments = routeSegments?.length
    ? routeSegments
        .filter((segment) => segment.floorId === floor?.id && segment.points.length > 1)
        .map((segment) => ({
          ...segment,
          path: segment.points
            .map(
              (point, pointIndex) =>
                `${pointIndex === 0 ? "M" : "L"} ${clamp(point.x) * 100} ${clamp(point.y) * 100}`,
            )
            .join(" "),
          pathId: `v3-route-${safeFloorId}-${segment.index}`,
        }))
    : routePath
      ? [
          {
            index: activeRouteIndex,
            path: routePath,
            pathId: `v3-route-${safeFloorId}-fallback`,
          },
        ]
      : [];
  const activeMapRoute = mapRouteSegments.find((segment) => segment.index === activeRouteIndex);
  const supportsPerspective = allowPerspective && mode !== "origin" && !compact;
  const effectiveMapView = supportsPerspective ? mapView : "flat";
  const fittedWorld = useMemo(() => {
    if (!viewportSize.width || !viewportSize.height || !ratio) {
      return { left: 0, top: 0, width: 100, height: 100 };
    }
    const viewportRatio = viewportSize.width / viewportSize.height;
    if (viewportRatio > ratio) {
      const width = (ratio / viewportRatio) * 100;
      return { left: (100 - width) / 2, top: 0, width, height: 100 };
    }
    const height = (viewportRatio / ratio) * 100;
    return { left: 0, top: (100 - height) / 2, width: 100, height };
  }, [ratio, viewportSize.height, viewportSize.width]);
  const labelPlacements = useMemo(
    () =>
      placeMapLabels(
        destinations,
        (viewportSize.width * fittedWorld.width) / 100,
        (viewportSize.height * fittedWorld.height) / 100,
        effectiveMapView === "perspective",
        mapTransform.scale,
        labelFontSize,
      ),
    [
      destinations,
      effectiveMapView,
      fittedWorld.height,
      fittedWorld.width,
      labelFontSize,
      mapTransform.scale,
      viewportSize.height,
      viewportSize.width,
    ],
  );

  useEffect(() => {
    pointerMapRef.current.clear();
    setMapTransform({ scale: 1, x: 0, y: 0 });
  }, [floor?.id, floorImageUrl]);

  useEffect(() => {
    const element = mapPlaneRef.current;
    if (!element) return;
    const updateSize = () => setViewportSize({ width: element.clientWidth, height: element.clientHeight });
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const constrainTransform = (
    transform: { scale: number; x: number; y: number },
    rect: DOMRect,
  ) => {
    const scale = clamp(transform.scale, 1, 4);
    const initialPanRatio = compact ? 0 : 0.18;
    const maxX = (rect.width * (scale - 1)) / 2 + rect.width * initialPanRatio;
    const maxY = (rect.height * (scale - 1)) / 2 + rect.height * initialPanRatio;
    return {
      scale,
      x: clamp(transform.x, -maxX, maxX),
      y: clamp(transform.y, -maxY, maxY),
    };
  };

  const selectOriginAtPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((mode !== "origin" && !allowOriginSelection) || !onOrigin) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const localX = (event.clientX - rect.left - centerX - mapTransform.x) / mapTransform.scale + centerX;
    const localY = (event.clientY - rect.top - centerY - mapTransform.y) / mapTransform.scale + centerY;
    const worldLeft = (fittedWorld.left / 100) * rect.width;
    const worldTop = (fittedWorld.top / 100) * rect.height;
    const worldWidth = (fittedWorld.width / 100) * rect.width;
    const worldHeight = (fittedWorld.height / 100) * rect.height;
    onOrigin({
      x: clamp((localX - worldLeft) / worldWidth),
      y: clamp((localY - worldTop) / worldHeight),
    });
  };

  const startPointerGesture = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerMapRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const pointers = Array.from(pointerMapRef.current.values()) as Array<{ x: number; y: number }>;
    const gesture = gestureRef.current;
    gesture.moved = false;
    gesture.startPanX = mapTransform.x;
    gesture.startPanY = mapTransform.y;

    if (pointers.length === 1) {
      gesture.startPointerX = pointers[0].x;
      gesture.startPointerY = pointers[0].y;
    } else if (pointers.length >= 2) {
      const [first, second] = pointers;
      gesture.multiPointer = true;
      gesture.moved = true;
      gesture.startPinchDistance = Math.hypot(second.x - first.x, second.y - first.y);
      gesture.startPinchScale = mapTransform.scale;
      gesture.startPinchCenterX = (first.x + second.x) / 2;
      gesture.startPinchCenterY = (first.y + second.y) / 2;
    }
  };

  const movePointerGesture = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerMapRef.current.has(event.pointerId)) return;
    pointerMapRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const pointers = Array.from(pointerMapRef.current.values()) as Array<{ x: number; y: number }>;
    const gesture = gestureRef.current;
    const rect = event.currentTarget.getBoundingClientRect();

    if (pointers.length >= 2 && gesture.startPinchDistance > 0) {
      const [first, second] = pointers;
      const distance = Math.hypot(second.x - first.x, second.y - first.y);
      const centerX = (first.x + second.x) / 2;
      const centerY = (first.y + second.y) / 2;
      const nextScale = gesture.startPinchScale * (distance / gesture.startPinchDistance);
      setMapTransform(
        constrainTransform(
          {
            scale: nextScale,
            x: gesture.startPanX + centerX - gesture.startPinchCenterX,
            y: gesture.startPanY + centerY - gesture.startPinchCenterY,
          },
          rect,
        ),
      );
    } else if (pointers.length === 1 && !gesture.multiPointer && !compact) {
      const deltaX = pointers[0].x - gesture.startPointerX;
      const deltaY = pointers[0].y - gesture.startPointerY;
      if (Math.hypot(deltaX, deltaY) > 3) gesture.moved = true;
      setMapTransform(
        constrainTransform(
          {
            scale: mapTransform.scale,
            x: gesture.startPanX + deltaX,
            y: gesture.startPanY + deltaY,
          },
          rect,
        ),
      );
    }
  };

  const endPointerGesture = (event: React.PointerEvent<HTMLDivElement>) => {
    const wasSinglePointer = pointerMapRef.current.size === 1;
    const wasTap =
      wasSinglePointer && !gestureRef.current.moved && !gestureRef.current.multiPointer;
    pointerMapRef.current.delete(event.pointerId);

    if (wasTap) selectOriginAtPointer(event);

    const remaining = Array.from(pointerMapRef.current.values()) as Array<{ x: number; y: number }>;
    if (remaining.length === 0) {
      gestureRef.current.multiPointer = false;
    } else if (remaining.length === 1) {
      gestureRef.current.multiPointer = false;
      gestureRef.current.startPointerX = remaining[0].x;
      gestureRef.current.startPointerY = remaining[0].y;
      gestureRef.current.startPanX = mapTransform.x;
      gestureRef.current.startPanY = mapTransform.y;
      gestureRef.current.moved = true;
    }
  };

  const changeMapZoom = (step: number) => {
    const rect = mapPlaneRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMapTransform((current) =>
      constrainTransform({ ...current, scale: current.scale + step }, rect),
    );
  };

  const zoomMapAtWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (compact) return;
    event.preventDefault();
    changeMapZoom(event.deltaY < 0 ? 0.25 : -0.25);
  };

  return (
    <div className={`v2-map-frame ${compact ? "is-compact" : ""} ${mode === "destination" ? "is-browsing" : ""}`}>
      <div
        ref={mapPlaneRef}
        className={`v2-map-plane ${mode === "origin" || allowOriginSelection ? "is-selecting" : ""} ${!compact ? "is-pannable" : ""}`}
        style={{ aspectRatio: `${ratio}` }}
        onPointerDown={startPointerGesture}
        onPointerMove={movePointerGesture}
        onPointerUp={endPointerGesture}
        onPointerCancel={endPointerGesture}
        onWheel={zoomMapAtWheel}
      >
        <div
          className="v2-map-world"
          style={
            {
              transform: `translate3d(${mapTransform.x}px, ${mapTransform.y}px, 0) scale(${mapTransform.scale})`,
              "--v2-pin-scale": String(scaleMarkersWithMap ? 1 : 1 / mapTransform.scale),
              "--v2-label-scale": String(1 / mapTransform.scale),
              left: `${fittedWorld.left}%`,
              top: `${fittedWorld.top}%`,
              width: `${fittedWorld.width}%`,
              height: `${fittedWorld.height}%`,
              right: "auto",
              bottom: "auto",
            } as React.CSSProperties
          }
        >
          <div className={`v3-map-surface is-${effectiveMapView}`}>
            {floorImageUrl ? (
              <img
                src={floorImageUrl}
                alt={`${floor?.name || "目前樓層"}${imageMode === "navigation" ? "有文字導覽圖" : "無文字平面圖"}`}
                draggable={false}
                onLoad={(event) => {
                  const image = event.currentTarget;
                  if (image.naturalWidth && image.naturalHeight) setRatio(image.naturalWidth / image.naturalHeight);
                }}
              />
            ) : (
              <div className="v2-empty-map">
                <Map aria-hidden="true" />
                <span>此樓層尚未上傳平面圖</span>
              </div>
            )}

            {mapRouteSegments.length > 0 && (
              <svg
                key={`${safeFloorId}-${activeRouteIndex}-${reverseFlow ? "reverse" : "forward"}`}
                className={`v2-route-layer ${reverseFlow ? "is-reversed" : ""}`}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {mapRouteSegments.map((segment) => (
                  <path key={`outline-${segment.index}`} className="v3-route-network-outline" d={segment.path} />
                ))}
                {mapRouteSegments.map((segment) => (
                  <path key={`base-${segment.index}`} className="v3-route-network-base" d={segment.path} />
                ))}
                {mapRouteSegments
                  .filter((segment) => segment.index < completedRouteIndex)
                  .map((segment) => (
                    <path key={`completed-${segment.index}`} className="v3-route-completed" d={segment.path} />
                  ))}
                {activeMapRoute && (
                  <>
                    <path
                      id={activeMapRoute.pathId}
                      className="v3-route-active"
                      d={activeMapRoute.path}
                    />
                    {Array.from({ length: 5 }, (_, index) => (
                      <g className="v2-flow-arrow" key={`flow-arrow-${index}`}>
                        <path d="M -1.6 -1.35 L 1.25 0 L -1.6 1.35 Z" />
                        <animateMotion
                          dur="4.5s"
                          begin={`${(-index * 0.9).toFixed(1)}s`}
                          repeatCount="indefinite"
                          rotate="auto"
                        >
                          <mpath href={`#${activeMapRoute.pathId}`} />
                        </animateMotion>
                      </g>
                    ))}
                    <image
                      className="v2-route-mascot"
                      href="./assets/ar/mascot-walking-small.png"
                      x="-6"
                      y="-11"
                      width="12"
                      height="12"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <animateMotion dur="7s" repeatCount="indefinite" rotate="0">
                        <mpath href={`#${activeMapRoute.pathId}`} />
                      </animateMotion>
                    </image>
                  </>
                )}
              </svg>
            )}

            {mode === "destination" &&
              destinations.map((node) => (
                  <div
                    key={node.id}
                    className={`v2-destination-pin ${destinationId === node.id ? "is-selected" : ""} ${origin?.snapId === node.id ? "is-origin-choice" : ""}`}
                    style={{ left: `${clamp(node.x) * 100}%`, top: `${clamp(node.y) * 100}%` }}
                    aria-label={nodeLabel(node)}
                  >
                    <MapPin aria-hidden="true" />
                  </div>
                ))}

            {destinationId && graph.nodes[destinationId]?.fId === floor?.id && mode !== "destination" && (
              <div
                className="v2-static-pin is-destination"
                style={{
                  left: `${clamp(graph.nodes[destinationId].x) * 100}%`,
                  top: `${clamp(graph.nodes[destinationId].y) * 100}%`,
                }}
              >
                <MapPin aria-hidden="true" />
              </div>
            )}

            {origin &&
              origin.floorId === floor?.id &&
              !(
                mode === "destination" &&
                graph.nodes[origin.snapId] &&
                isPublicStop(graph.nodes[origin.snapId])
              ) && (
              <div
                className="v2-static-pin is-origin"
                style={{ left: `${clamp(origin.x) * 100}%`, top: `${clamp(origin.y) * 100}%` }}
              >
                <LocateFixed aria-hidden="true" />
              </div>
            )}
          </div>
          {mode === "destination" && (
            <div
              className="v3-map-label-layer"
              aria-label="地圖位置標籤"
              style={{ "--v3-label-font-size": `${labelFontSize}px` } as React.CSSProperties}
            >
              {destinations.map((node) => {
                const placement = labelPlacements[node.id];
                if (!placement) return null;
                return (
                  <span
                    key={node.id}
                    style={{
                      left: `${placement.left}px`,
                      top: `${placement.top}px`,
                      width: `${placement.width}px`,
                      height: `${placement.height}px`,
                    }}
                  >
                    {nodeLabel(node)}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {(mode === "origin" || allowOriginSelection) && (
          <div className="v2-map-hint">
            <Crosshair aria-hidden="true" />
            點一下你目前所在的位置
          </div>
        )}

        {!compact && (
          <div
            className="v2-map-zoom-controls"
            onPointerDown={(event) => event.stopPropagation()}
            onPointerUp={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="放大地圖"
              title="放大地圖"
              disabled={mapTransform.scale >= 4}
              onClick={() => changeMapZoom(0.5)}
            >
              <Plus aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="縮小地圖"
              title="縮小地圖"
              disabled={mapTransform.scale <= 1}
              onClick={() => changeMapZoom(-0.5)}
            >
              <Minus aria-hidden="true" />
            </button>
            {onToggleFullscreen && (
              <button
                type="button"
                aria-label={isFullscreen ? "離開全螢幕地圖" : "全螢幕地圖"}
                title={isFullscreen ? "離開全螢幕地圖" : "全螢幕地圖"}
                aria-pressed={isFullscreen}
                onClick={onToggleFullscreen}
              >
                {isFullscreen ? <Minimize2 aria-hidden="true" /> : <Maximize2 aria-hidden="true" />}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function WelcomeScreen({ config, onStart }: { config?: any; onStart: () => void }) {
  const buttonText = String(config?.welcomeButtonText || "開始體驗").trim() || "開始體驗";
  const buttonCharacters = Array.from(buttonText);
  const splitIndex = Math.ceil(buttonCharacters.length / 2);
  const buttonLines = [
    buttonCharacters.slice(0, splitIndex).join(""),
    buttonCharacters.slice(splitIndex).join(""),
  ].filter(Boolean);
  const buttonTop = clamp(Number(config?.welcomeButtonTop) || 60, 42, 76);

  return (
    <main className="v2-welcome">
      <img
        className="v2-welcome-background"
        src={config?.welcomeImageUrl || "./assets/ar-v3/welcome-portal-trial-smart.png"}
        alt=""
        aria-hidden="true"
      />
      <button
        type="button"
        className="v2-welcome-start"
        style={{ top: `${buttonTop}%` }}
        onClick={onStart}
        aria-label={buttonText}
      >
        {buttonLines.map((line, index) => <span key={`${line}-${index}`}>{line}</span>)}
      </button>
    </main>
  );
}

export default function ARNavigationV3() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [project, setProject] = useState<any>(null);
  const [screen, setScreen] = useState<"destination" | "origin" | "review" | "calibrate" | "navigate">(
    "destination",
  );
  const [destinationId, setDestinationId] = useState<string | null>(null);
  const [originSelection, setOriginSelection] = useState("map");
  const [selectedFloorId, setSelectedFloorId] = useState<string | null>(null);
  const [origin, setOrigin] = useState<ManualOrigin | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [calibrationHeading, setCalibrationHeading] = useState<number | null>(null);
  const [cameraState, setCameraState] = useState<"idle" | "loading" | "ready" | "denied">("idle");
  const [cameraMessage, setCameraMessage] = useState("");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [completedSegmentIndex, setCompletedSegmentIndex] = useState(0);
  const [reviewStepIndex, setReviewStepIndex] = useState(0);
  const [guideImageExpanded, setGuideImageExpanded] = useState(false);
  const [mapFullscreen, setMapFullscreen] = useState(false);
  const [mapExpanded, setMapExpanded] = useState(false);
  const [mapFloorId, setMapFloorId] = useState<string | null>(null);
  const [recognitionStatus, setRecognitionStatus] = useState<RecognitionStatus>("disabled");
  const [recognitionMessage, setRecognitionMessage] = useState("");
  const [recognitionCorners, setRecognitionCorners] = useState<RecognitionPoint[] | null>(null);
  const [recognizedCandidateId, setRecognizedCandidateId] = useState("");
  const [runtimeAnchorId, setRuntimeAnchorId] = useState("");
  const [recognitionHeadingOffset, setRecognitionHeadingOffset] = useState<number | null>(null);
  const [fieldCalibrationEnabled] = useState(
    () => new URLSearchParams(window.location.search).get("calibrate") === "1",
  );
  const [fieldCalibrationAuth, setFieldCalibrationAuth] = useState<
    "idle" | "checking" | "ready" | "login-required"
  >(fieldCalibrationEnabled ? "checking" : "idle");
  const [fieldCalibrationNodeId, setFieldCalibrationNodeId] = useState("");
  const [fieldCalibrationAngle, setFieldCalibrationAngle] = useState(0);
  const [fieldCalibrationSavedAngle, setFieldCalibrationSavedAngle] = useState(0);
  const [fieldCalibrationConfirmed, setFieldCalibrationConfirmed] = useState(false);
  const [fieldCalibrationSync, setFieldCalibrationSync] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle");
  const [fieldCalibrationMessage, setFieldCalibrationMessage] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const recognitionCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const headingRef = useRef<number | null>(null);
  const calibrationHeadingRef = useRef<number | null>(null);
  const defaultsAppliedProjectRef = useRef<string | null>(null);
  const recognitionFrameRef = useRef<number | null>(null);
  const recognitionTrackerRef = useRef<OrbImageTracker | null>(null);
  const recognitionStatusRef = useRef<RecognitionStatus>("disabled");
  const recognitionMessageRef = useRef("");
  const recognitionCornersRef = useRef<RecognitionPoint[] | null>(null);

  const updateRecognitionFeedback = (
    status: RecognitionStatus,
    message: string,
    corners: RecognitionPoint[] | null = recognitionCornersRef.current,
  ) => {
    recognitionStatusRef.current = status;
    recognitionMessageRef.current = message;
    recognitionCornersRef.current = corners;
    setRecognitionStatus(status);
    setRecognitionMessage(message);
    setRecognitionCorners(corners);
  };

  useEffect(() => {
    if (!mapFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMapFullscreen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mapFullscreen]);

  useEffect(() => {
    if (!fieldCalibrationEnabled) return;
    let active = true;
    fetch("/.auth/me", { cache: "no-store" })
      .then(async (response) => {
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok || !contentType.includes("application/json")) return null;
        return response.json();
      })
      .then((authData) => {
        if (!active) return;
        setFieldCalibrationAuth(authData?.clientPrincipal ? "ready" : "login-required");
      })
      .catch(() => {
        if (active) setFieldCalibrationAuth("login-required");
      });
    return () => {
      active = false;
    };
  }, [fieldCalibrationEnabled]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        let localRaw: any = null;
        try {
          const fallbackResponse = await fetch("./ar-data.json", { cache: "no-store" });
          if (fallbackResponse.ok) {
            localRaw = await fallbackResponse.json();
          }
        } catch {
          localRaw = null;
        }

        const optionMap = new globalThis.Map<string, ProjectOption>();
        normalizeProjects(localRaw).forEach((item: any) => {
          const id = item?.project?.id;
          if (!id) return;
          optionMap.set(id, {
            id,
            name: projectName(item),
            updatedAt: item?.project?.updatedAt,
            source: "local",
            localData: item,
          });
        });

        try {
          const listResponse = await fetch(`./api/ar-content?list=1&ts=${Date.now()}`, {
            cache: "no-store",
          });
          const contentType = listResponse.headers.get("content-type") || "";
          if (listResponse.ok && contentType.includes("application/json")) {
            const cloudList = await listResponse.json();
            normalizeProjects(cloudList).forEach((item: any) => {
              const id = item?.project?.id;
              if (!id) return;
              const localOption = optionMap.get(id);
              optionMap.set(id, {
                id,
                name: projectName(item),
                updatedAt: item?.project?.updatedAt,
                source: "cloud",
                localData: localOption?.localData,
                summary: item,
              });
            });
          }
        } catch {
          // Keep packaged project data available when the cloud API is unreachable.
        }

        const options = Array.from(optionMap.values()).sort((a, b) =>
          a.name.localeCompare(b.name, "zh-Hant"),
        );
        if (options.length === 0) {
          throw new Error("雲端尚未建立可用的 AR 專案");
        }

        const preferredOption = options.find((option) => option.name.includes("新竹市政府")) || options[0];
        const selected = await loadProjectOption(preferredOption);

        if (active) {
          defaultsAppliedProjectRef.current = null;
          setProject(selected);
          setLoadError("");
        }
      } catch (error: any) {
        if (active) setLoadError(error?.message || "無法載入導引資料");
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const onOrientation = (event: DeviceOrientationEvent) => {
      const nextHeading = getHeading(event as DeviceOrientationEvent & { webkitCompassHeading?: number });
      if (nextHeading !== null) {
        headingRef.current = nextHeading;
        setHeading(nextHeading);
      }
    };
    window.addEventListener("deviceorientation", onOrientation, true);
    if ("ondeviceorientationabsolute" in window) {
      window.addEventListener("deviceorientationabsolute", onOrientation, true);
    }
    return () => {
      window.removeEventListener("deviceorientation", onOrientation, true);
      if ("ondeviceorientationabsolute" in window) {
        window.removeEventListener("deviceorientationabsolute", onOrientation, true);
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    calibrationHeadingRef.current = calibrationHeading;
  }, [calibrationHeading]);

  useEffect(() => {
    if (videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [screen, cameraState]);

  const graph = useMemo(() => buildGraph(project?.buildings || []), [project]);
  const publicStops = useMemo(
    () =>
      (Object.values(graph.nodes) as NodeData[])
        .filter(isPublicStop)
        .sort(
          (a, b) =>
            a.bName.localeCompare(b.bName, "zh-Hant") ||
            a.fName.localeCompare(b.fName, "zh-Hant") ||
            nodeLabel(a).localeCompare(nodeLabel(b), "zh-Hant"),
        ),
    [graph],
  );
  const defaultDestination = useMemo(
    () => publicStops.find((node) => nodeLabel(node).trim() === DEFAULT_DESTINATION_LABEL) || null,
    [publicStops],
  );
  const defaultOrigin = useMemo(() => {
    if (!defaultDestination) return null;

    const namedOrigin = publicStops.find((node) =>
      DEFAULT_ORIGIN_LABELS.some((label) => nodeLabel(node).trim().includes(label)),
    );
    if (namedOrigin) return namedOrigin;

    return (Object.values(graph.nodes) as NodeData[])
      .filter(
        (node) =>
          node.id !== defaultDestination.id &&
          Object.keys(graph.adjacency[node.id] || {}).length === 1,
      )
      .map((node) => {
        const path = shortestPath(graph, node.id, defaultDestination.id);
        return {
          node,
          distance: routeLength(path.map((id) => graph.nodes[id]).filter(Boolean)),
          connected: path.length >= 2,
        };
      })
      .filter((candidate) => candidate.connected)
      .sort((a, b) => b.distance - a.distance)[0]?.node || null;
  }, [defaultDestination, graph, publicStops]);
  const originOptions = useMemo(() => {
    const options = publicStops.map((node) => ({ node, label: nodeLabel(node) }));
    if (defaultOrigin && !options.some((option) => option.node.id === defaultOrigin.id)) {
      options.unshift({ node: defaultOrigin, label: "大門" });
    }
    return options;
  }, [defaultOrigin, publicStops]);
  const visibleFloors = graph.floors;

  useEffect(() => {
    if (!visibleFloors.length) return;
    if (!selectedFloorId || !visibleFloors.some((floor) => floor.id === selectedFloorId)) {
      setSelectedFloorId(visibleFloors[0].id);
    }
  }, [selectedFloorId, visibleFloors]);

  useEffect(() => {
    const projectId = project?.project?.id;
    if (
      !projectId ||
      defaultsAppliedProjectRef.current === projectId ||
      !defaultOrigin ||
      !defaultDestination
    ) return;

    defaultsAppliedProjectRef.current = projectId;
    setDestinationId(defaultDestination.id);
    setOriginSelection(defaultOrigin.id);
    setOrigin({
      floorId: defaultOrigin.fId,
      x: defaultOrigin.x,
      y: defaultOrigin.y,
      physX: defaultOrigin.physX,
      physY: defaultOrigin.physY,
      snapId: defaultOrigin.id,
    });
    setSelectedFloorId(defaultOrigin.fId);
  }, [defaultDestination, defaultOrigin, project]);

  const selectedFloor = graph.floors.find((floor) => floor.id === selectedFloorId) || visibleFloors[0];
  const destination = destinationId ? graph.nodes[destinationId] : null;
  const routeStartId = runtimeAnchorId || origin?.snapId || "";
  const routeIds = useMemo(() => {
    if (!routeStartId || !destinationId) return [];
    return shortestPathThroughStops(graph, [routeStartId, destinationId]);
  }, [destinationId, graph, routeStartId]);
  const routeNodes = routeIds.map((id) => graph.nodes[id]).filter(Boolean);
  const snappedOriginNode = origin?.snapId ? graph.nodes[origin.snapId] : null;
  const manualOriginPoint = origin
    ? {
        ...snappedOriginNode,
        id: "manual-origin",
        x: origin.x,
        y: origin.y,
        physX: origin.physX,
        physY: origin.physY,
        fId: origin.floorId,
        fName: graph.floors.find((floor) => floor.id === origin.floorId)?.name || "",
      }
    : null;
  const routeOriginPoint = runtimeAnchorId ? graph.nodes[runtimeAnchorId] : manualOriginPoint;
  const navigationPoints = routeOriginPoint
    ? [
        routeOriginPoint,
        ...routeNodes.filter(
          (node, index) =>
            !(
              index === 0 &&
              node.fId === routeOriginPoint.fId &&
              Math.hypot(
                node.physX - routeOriginPoint.physX,
                node.physY - routeOriginPoint.physY,
              ) < 0.001
            ),
        ),
      ]
    : routeNodes;
  const totalDistance = routeLength(navigationPoints);
  const guideSegments = buildGuideSegments(navigationPoints, nodeLabel(destination));
  const safeReviewStepIndex = Math.min(reviewStepIndex, Math.max(0, guideSegments.length - 1));
  const activeReviewStep = guideSegments[safeReviewStepIndex];
  const previousReviewStep = guideSegments[safeReviewStepIndex - 1];
  const nextReviewStep = guideSegments[safeReviewStepIndex + 1];
  const reviewStepDistance = activeReviewStep ? routeLength(activeReviewStep.points) : 0;
  const reviewInstruction = activeReviewStep?.travelInstruction || "目前沒有可顯示的路徑資訊";
  const currentSegment = Math.min(segmentIndex, Math.max(0, guideSegments.length - 1));
  const activeGuideSegment = guideSegments[currentSegment];
  const previousGuideSegment = guideSegments[currentSegment - 1];
  const nextGuideSegment = guideSegments[currentSegment + 1];
  const segmentStart = activeGuideSegment?.start;
  const recognitionAnchorPoints = destination
    ? (Object.values(graph.nodes) as NodeData[]).filter((node) => node.bId === destination.bId)
    : [];
  const recognitionCandidates = buildRecognitionAnchorCandidates(recognitionAnchorPoints);
  const recognitionCandidateSignature = recognitionCandidates
    .map(
      (candidate) =>
        `${candidate.id}:${candidate.nodeId}:${candidate.floorId}:${candidate.directionMode}:${candidate.referenceBearing ?? "auto"}:${candidate.capturedDeviceHeading ?? "none"}:${recognitionSourceKey(candidate.imageUrl)}`,
    )
    .join("|");
  const recognitionRequired = recognitionCandidates.length > 0;
  const activeRecognitionNodeId =
    segmentStart?.id === "manual-origin" ? origin?.snapId : segmentStart?.id;
  const activeRecognitionCandidate =
    recognitionCandidates.find((candidate) => candidate.id === recognizedCandidateId) ||
    recognitionCandidates.find((candidate) => candidate.nodeId === activeRecognitionNodeId) ||
    recognitionCandidates.find((candidate) => candidate.floorId === segmentStart?.fId) ||
    recognitionCandidates[0];
  const activeNavigationPoints = activeGuideSegment?.points || navigationPoints;
  const runtimeAnchorNode = runtimeAnchorId ? graph.nodes[runtimeAnchorId] : null;
  const liveMapStart = segmentStart || runtimeAnchorNode;
  const hasArrived = Boolean(destinationId && runtimeAnchorId === destinationId);
  const liveMapOrigin: ManualOrigin | null = liveMapStart
    ? {
        floorId: liveMapStart.fId,
        x: liveMapStart.x,
        y: liveMapStart.y,
        physX: liveMapStart.physX,
        physY: liveMapStart.physY,
        snapId: liveMapStart.id,
      }
    : origin;
  const firstBearing = activeNavigationPoints.length > 1
    ? segmentBearing(activeNavigationPoints[0], activeNavigationPoints[1])
    : 0;
  const currentBearing =
    activeNavigationPoints.length > 1
      ? segmentBearing(activeNavigationPoints[0], activeNavigationPoints[1])
      : firstBearing;
  const headingDelta =
    heading !== null && calibrationHeading !== null ? normalizeAngle(heading - calibrationHeading) : 0;
  const arrowRotation = normalizeAngle(currentBearing - firstBearing - headingDelta);
  const remainingDistance = activeGuideSegment?.distance || 0;
  const projectionNavigationPoints = activeNavigationPoints;
  const projectionBearing =
    projectionNavigationPoints.length > 1
      ? segmentBearing(projectionNavigationPoints[0], projectionNavigationPoints[1])
      : currentBearing;
  const activeReferenceBearing = activeRecognitionCandidate?.referenceBearing ?? null;
  const activeCapturedHeading = activeRecognitionCandidate?.capturedDeviceHeading ?? null;
  const activeRecognitionFloor = graph.floors.find(
    (floor) => floor.id === (activeRecognitionCandidate?.floorId || segmentStart?.fId),
  );
  const configuredMapUpHeading = normalizeOptionalHeading(activeRecognitionFloor?.mapUpHeading);
  const inferredMapUpHeading =
    activeCapturedHeading !== null && activeReferenceBearing !== null
      ? normalizeHeading(activeCapturedHeading - activeReferenceBearing)
      : null;
  const effectiveMapUpHeading = configuredMapUpHeading ?? inferredMapUpHeading;
  const effectiveReferenceBearing =
    activeReferenceBearing ??
    (activeCapturedHeading !== null && effectiveMapUpHeading !== null
      ? normalizeHeading(activeCapturedHeading - effectiveMapUpHeading)
      : null);
  const fieldCalibrationTargetNode =
    fieldCalibrationEnabled && recognitionStatus === "locked" && activeRecognitionCandidate
      ? graph.nodes[activeRecognitionCandidate.nodeId] || null
      : null;

  useEffect(() => {
    if (!fieldCalibrationTargetNode || fieldCalibrationNodeId === fieldCalibrationTargetNode.id) return;
    const initialAngle = normalizeHeading(effectiveReferenceBearing ?? 0);
    setFieldCalibrationNodeId(fieldCalibrationTargetNode.id);
    setFieldCalibrationAngle(initialAngle);
    setFieldCalibrationSavedAngle(initialAngle);
    setFieldCalibrationConfirmed(false);
    setFieldCalibrationSync("idle");
    setFieldCalibrationMessage("調整數值時，AR 路線會立即旋轉預覽。");
  }, [effectiveReferenceBearing, fieldCalibrationNodeId, fieldCalibrationTargetNode]);

  const fieldCalibrationPreviewActive = Boolean(
    fieldCalibrationTargetNode && fieldCalibrationNodeId === fieldCalibrationTargetNode.id,
  );
  const projectionReferenceBearing = fieldCalibrationPreviewActive
    ? fieldCalibrationAngle
    : effectiveReferenceBearing;
  const projectionDirectionMode = fieldCalibrationPreviewActive
    ? "manual"
    : activeRecognitionCandidate?.directionMode || "auto";
  const imageProjectedRouteBearing = recognitionRouteBearing(
    recognitionCorners,
    projectionBearing,
    projectionDirectionMode,
    projectionReferenceBearing,
  );
  const sensorProjectedRouteBearing =
    !fieldCalibrationPreviewActive &&
    recognitionRequired &&
    recognitionStatus === "locked" &&
    activeRecognitionCandidate?.directionMode === "sensor"
      ? sensorRouteBearing(
          projectionBearing,
          effectiveMapUpHeading,
          heading,
          recognitionHeadingOffset,
        )
      : null;
  const arProjectionRotation =
    sensorProjectedRouteBearing ??
    (recognitionRequired && recognitionStatus === "locked" && imageProjectedRouteBearing !== null
      ? imageProjectedRouteBearing
      : normalizeAngle(projectionBearing - firstBearing - headingDelta));
  const toArRawPoint = (point: any) => {
    if (!segmentStart || !point) return { x: 0, y: 0 };
    const distance = Math.hypot(point.physX - segmentStart.physX, point.physY - segmentStart.physY);
    if (distance < 0.01) return { x: 0, y: 0 };
    const relativeBearing = normalizeAngle(segmentBearing(segmentStart, point) - projectionBearing);
    const radians = (relativeBearing * Math.PI) / 180;
    return {
      x: Math.sin(radians) * distance,
      y: -Math.cos(radians) * distance,
    };
  };
  const arSourceSegments = [activeGuideSegment, nextGuideSegment].filter(
    (segment): segment is GuideSegment =>
      Boolean(
        segment &&
          segment.floorId === segmentStart?.fId &&
          segment.points.length > 1,
      ),
  );
  const arRawSegments = (arSourceSegments.length
    ? arSourceSegments
    : [
        {
          index: currentSegment,
          points: projectionNavigationPoints,
        },
      ]
  ).map((segment) => ({
    index: segment.index,
    points: segment.points.map(toArRawPoint),
  }));
  const arRawPoints = arRawSegments.flatMap((segment) => segment.points);
  const arBounds = arRawPoints.reduce(
    (bounds, point) => ({
      minX: Math.min(bounds.minX, point.x),
      maxX: Math.max(bounds.maxX, point.x),
      minY: Math.min(bounds.minY, point.y),
      maxY: Math.max(bounds.maxY, point.y),
    }),
    { minX: 0, maxX: 0, minY: 0, maxY: 0 },
  );
  const arMaxHorizontalDistance = Math.max(Math.abs(arBounds.minX), Math.abs(arBounds.maxX));
  const arFitScale = Math.min(
    arMaxHorizontalDistance > 0.01
      ? 42 / arMaxHorizontalDistance
      : Number.POSITIVE_INFINITY,
    arBounds.minY < -0.01
      ? 87 / Math.abs(arBounds.minY)
      : Number.POSITIVE_INFINITY,
    arBounds.maxY > 0.01
      ? 5 / arBounds.maxY
      : Number.POSITIVE_INFINITY,
  );
  const arProjectionScale = Math.min(AR_SCREEN_UNITS_PER_METER, arFitScale);
  const arOriginX = 50;
  const arOriginY = 94;
  const arProjectedSegments = arRawSegments.map((segment) => ({
    index: segment.index,
    pathId: `v3-ar-camera-route-${segment.index}`,
    path: segment.points
      .map(
        (point, index) =>
          `${index === 0 ? "M" : "L"} ${(arOriginX + point.x * arProjectionScale).toFixed(2)} ${(arOriginY + point.y * arProjectionScale).toFixed(2)}`,
      )
      .join(" "),
  }));
  const activeArRoute = arProjectedSegments.find((segment) => segment.index === currentSegment);
  const nextArRoute = arProjectedSegments.find((segment) => segment.index === currentSegment + 1);
  const directionRotation = recognitionRequired ? arProjectionRotation : arrowRotation;
  const arDirectionLabel = Math.abs(directionRotation) < 18
    ? "方向已對準"
    : directionRotation > 0
      ? "請向右轉動手機"
      : "請向左轉動手機";
  const mapFloor = graph.floors.find((floor) => floor.id === mapFloorId) ||
    graph.floors.find((floor) => floor.id === segmentStart?.fId) ||
    selectedFloor;
  const mapFloorBounds = mapFloor?.bounds;
  const isScaleUncalibrated =
    !mapFloorBounds ||
    (
      Math.abs((mapFloorBounds.trX ?? 100) - (mapFloorBounds.blX ?? 0) - 100) < 0.01 &&
      Math.abs((mapFloorBounds.trY ?? 100) - (mapFloorBounds.blY ?? 0) - 100) < 0.01
    );
  const guideReferenceImage =
    activeRecognitionCandidate?.imageUrl ||
    activeGuideSegment?.referenceImageUrl ||
    DEFAULT_GUIDE_IMAGE_URL;
  const guideExternalUrl = safeExternalUrl(activeGuideSegment?.externalUrl || "");
  const activeDirectionConfigured =
    fieldCalibrationPreviewActive ||
    !activeRecognitionCandidate ||
    activeRecognitionCandidate.directionMode === "auto" ||
    (activeRecognitionCandidate.directionMode === "manual" && effectiveReferenceBearing !== null) ||
    (
      activeRecognitionCandidate.directionMode === "sensor" &&
      activeCapturedHeading !== null &&
      effectiveMapUpHeading !== null
    );
  const isArRouteVisible =
    !recognitionRequired || (recognitionStatus === "locked" && activeDirectionConfigured);
  const routeSegmentsForMap = guideSegments;
  const fieldCalibrationHasChanges = Boolean(
    fieldCalibrationTargetNode &&
      (
        fieldCalibrationTargetNode.guideDirectionMode !== "manual" ||
        normalizeOptionalHeading(fieldCalibrationTargetNode.guideReferenceBearing) === null ||
        Math.abs(normalizeAngle(fieldCalibrationAngle - fieldCalibrationSavedAngle)) >= 0.05
      ),
  );
  const fieldCalibrationLoginUrl = `/.auth/login/github?post_login_redirect_uri=${encodeURIComponent(
    `${window.location.pathname}${window.location.search}`,
  )}`;

  const updateFieldCalibrationAngle = (value: number) => {
    if (!Number.isFinite(value)) return;
    setFieldCalibrationAngle(normalizeHeading(value));
    setFieldCalibrationConfirmed(false);
    setFieldCalibrationSync("idle");
    setFieldCalibrationMessage("AR 路線已套用此角度預覽，請確認畫面方向。");
  };

  const syncFieldCalibrationAngle = async () => {
    if (!fieldCalibrationTargetNode || !project?.project?.id) return;
    if (fieldCalibrationAuth !== "ready") {
      setFieldCalibrationAuth("login-required");
      setFieldCalibrationSync("error");
      setFieldCalibrationMessage("同步需要先登入後台帳號。");
      return;
    }

    const angle = Math.round(normalizeHeading(fieldCalibrationAngle) * 10) / 10;
    setFieldCalibrationSync("saving");
    setFieldCalibrationMessage("正在同步目前節點角度...");

    try {
      const response = await fetch("./api/save-ar-content", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-AR-Save-Contract": "ar-angle-calibration-v1",
        },
        body: JSON.stringify({
          calibration: {
            projectId: project.project.id,
            buildingId: fieldCalibrationTargetNode.bId,
            floorId: fieldCalibrationTargetNode.fId,
            nodeId: fieldCalibrationTargetNode.id,
            nodeType: fieldCalibrationTargetNode.isMarker ? "marker" : "waypoint",
            guideReferenceBearing: angle,
          },
        }),
      });
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        setFieldCalibrationAuth("login-required");
        throw new Error("登入狀態已失效，請重新登入後再同步。");
      }
      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || `同步失敗 (${response.status})`);

      const savedAngle = normalizeHeading(Number(result?.calibration?.guideReferenceBearing ?? angle));
      const updatedAt = result?.calibration?.updatedAt || new Date().toISOString();
      setProject((current: any) =>
        updateProjectNodeGuideAngle(current, fieldCalibrationTargetNode, savedAngle, updatedAt),
      );
      setFieldCalibrationAngle(savedAngle);
      setFieldCalibrationSavedAngle(savedAngle);
      setFieldCalibrationSync("success");
      setFieldCalibrationMessage(`已同步 ${nodeLabel(fieldCalibrationTargetNode)}：${savedAngle.toFixed(0)}°`);
    } catch (error: any) {
      setFieldCalibrationSync("error");
      setFieldCalibrationMessage(error?.message || "角度同步失敗，請稍後再試。");
    }
  };

  useEffect(() => {
    if (segmentStart?.fId) setMapFloorId(segmentStart.fId);
  }, [currentSegment, segmentStart?.fId]);

  useEffect(() => {
    if (recognitionFrameRef.current !== null) {
      cancelAnimationFrame(recognitionFrameRef.current);
      recognitionFrameRef.current = null;
    }
    recognitionTrackerRef.current?.dispose();
    recognitionTrackerRef.current = null;
    recognitionCornersRef.current = null;
    setRecognitionCorners(null);
    setRecognizedCandidateId("");
    setRecognitionHeadingOffset(null);

    if (screen !== "navigate") return;
    if (!recognitionCandidates.length) {
      updateRecognitionFeedback("disabled", "此節點未設定辨識照片，沿用人工方向校正", null);
      return;
    }
    if (cameraState !== "ready") {
      updateRecognitionFeedback("loading", "等待相機就緒", null);
      return;
    }

    let cancelled = false;
    let tracker: OrbImageTracker | null = null;
    let lastProcessedAt = 0;
    let lastDetectedAt = 0;
    let consecutiveDetections = 0;
    let detectionInFlight = false;
    let pendingTargetId = "";
    let lockedTargetId = "";
    const candidateById = new globalThis.Map(
      recognitionCandidates.map((candidate) => [candidate.id, candidate]),
    );

    const updateStatus = (
      status: RecognitionStatus,
      message: string,
      corners: RecognitionPoint[] | null = recognitionCornersRef.current,
    ) => {
      if (cancelled) return;
      if (
        recognitionStatusRef.current === status &&
        recognitionMessageRef.current === message &&
        corners === recognitionCornersRef.current
      ) return;
      updateRecognitionFeedback(status, message, corners);
    };

    const reanchorToRecognizedNode = (candidate: RouteRecognitionCandidate) => {
      const recognizedNode = graph.nodes[candidate.nodeId];
      if (!recognizedNode || !destinationId) {
        return { ok: false, message: "辨識到節點，但找不到目前目的地資料" };
      }

      const reroutedIds = shortestPathThroughStops(graph, [candidate.nodeId, destinationId]);
      if (candidate.nodeId !== destinationId && reroutedIds.length < 2) {
        return {
          ok: false,
          message: `已辨識「${candidate.label}」，但此節點與目的地之間沒有可用路徑`,
        };
      }

      setRuntimeAnchorId(candidate.nodeId);
      setSegmentIndex(0);
      setCompletedSegmentIndex(0);
      setReviewStepIndex(0);
      setSelectedFloorId(recognizedNode.fId);
      setMapFloorId(recognizedNode.fId);
      setGuideImageExpanded(false);

      const liveHeading = normalizeOptionalHeading(headingRef.current);
      const referenceBearing = normalizeOptionalHeading(candidate.referenceBearing);
      const capturedHeading = normalizeOptionalHeading(candidate.capturedDeviceHeading);
      const candidateFloor = graph.floors.find((floor) => floor.id === recognizedNode.fId);
      const configuredMapUp = normalizeOptionalHeading(candidateFloor?.mapUpHeading);
      const inferredMapUp =
        capturedHeading !== null && referenceBearing !== null
          ? normalizeHeading(capturedHeading - referenceBearing)
          : null;
      const mapUpHeading = configuredMapUp ?? inferredMapUp;
      const expectedReferenceHeading =
        capturedHeading ??
        (mapUpHeading !== null && referenceBearing !== null
          ? normalizeHeading(mapUpHeading + referenceBearing)
          : null);
      const headingOffset =
        candidate.directionMode === "sensor" &&
        liveHeading !== null &&
        expectedReferenceHeading !== null
          ? normalizeAngle(expectedReferenceHeading - liveHeading)
          : null;

      setRecognitionHeadingOffset(headingOffset);
      calibrationHeadingRef.current = liveHeading;
      setCalibrationHeading(liveHeading);

      if (candidate.nodeId === destinationId) {
        return { ok: true, message: `已辨識「${candidate.label}」，目前已抵達目的地` };
      }
      if (
        candidate.directionMode === "sensor" &&
        (capturedHeading === null || mapUpHeading === null)
      ) {
        return {
          ok: true,
          message: `已定位「${candidate.label}」並重算路徑，但此照片尚未記錄現場方位`,
        };
      }
      if (candidate.directionMode === "sensor" && headingOffset === null) {
        return {
          ok: true,
          message: `已定位「${candidate.label}」並重算路徑；方向感測尚未就緒，暫依影像方位顯示`,
        };
      }
      return {
        ok: true,
        message:
          candidate.directionMode === "sensor"
            ? `已定位「${candidate.label}」並校正方位，剩餘路徑已重新計算`
            : candidate.directionMode === "manual"
              ? `已定位「${candidate.label}」，已依照片方位重算剩餘路徑`
              : `已定位「${candidate.label}」，已依路網向量重算剩餘路徑`,
      };
    };

    const lockToRecognizedDirection = (
      detection: RecognitionDetection,
      candidate: RouteRecognitionCandidate,
    ) => {
      const smoothedCorners = smoothRecognitionCorners(recognitionCornersRef.current, detection);
      if (lockedTargetId === candidate.id) {
        updateStatus("locked", recognitionMessageRef.current, smoothedCorners);
        return;
      }

      const reanchorResult = reanchorToRecognizedNode(candidate);
      if (!reanchorResult.ok) {
        lockedTargetId = "";
        setRecognizedCandidateId("");
        setRecognitionHeadingOffset(null);
        updateStatus("error", reanchorResult.message, null);
        return;
      }

      lockedTargetId = candidate.id;
      setRecognizedCandidateId(candidate.id);
      updateStatus("locked", reanchorResult.message, smoothedCorners);
    };

    const processFrame = (timestamp: number) => {
      recognitionFrameRef.current = requestAnimationFrame(processFrame);
      if (timestamp - lastProcessedAt < RECOGNITION_FRAME_INTERVAL_MS) return;

      const video = videoRef.current;
      const canvas = recognitionCanvasRef.current;
      if (!tracker || !video || !canvas || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context || !video.videoWidth || !video.videoHeight) return;

      lastProcessedAt = timestamp;
      const processingWidth = 360;
      const processingHeight = Math.max(
        240,
        Math.round(processingWidth * (video.videoHeight / video.videoWidth)),
      );
      if (canvas.width !== processingWidth || canvas.height !== processingHeight) {
        canvas.width = processingWidth;
        canvas.height = processingHeight;
      }
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (detectionInFlight) return;
      detectionInFlight = true;
      tracker.detect(canvas).then((detection) => {
        if (cancelled) return;
        const detectedAt = performance.now();
        if (detection) {
          const targetId = detection.targetId || recognitionCandidates[0]?.id || "";
          const candidate = candidateById.get(targetId);
          if (!candidate) {
            consecutiveDetections = 0;
            pendingTargetId = "";
            return;
          }
          if (pendingTargetId === targetId) {
            consecutiveDetections += 1;
          } else {
            pendingTargetId = targetId;
            consecutiveDetections = 1;
          }
          lastDetectedAt = detectedAt;
          if (consecutiveDetections >= RECOGNITION_CONFIRMATION_FRAMES) {
            lockToRecognizedDirection(detection, candidate);
          } else if (recognitionStatusRef.current !== "locked") {
            updateStatus("confirming", `正在確認「${candidate.label}」節點照片`);
          }
          return;
        }

        consecutiveDetections = 0;
        pendingTargetId = "";
        if (
          recognitionStatusRef.current === "locked" &&
          detectedAt - lastDetectedAt <= RECOGNITION_LOST_DELAY_MS
        ) {
          return;
        }

        if (recognitionStatusRef.current === "locked" || recognitionStatusRef.current === "confirming") {
          lockedTargetId = "";
          setRecognizedCandidateId("");
          setRecognitionHeadingOffset(null);
          updateStatus("lost", "已離開辨識圖，路線已隱藏，請重新對準", null);
        } else if (recognitionStatusRef.current !== "lost") {
          updateStatus("searching", "請讓現場畫面與半透明參考圖重合", null);
        }
      }).catch((error: any) => {
        if (cancelled) return;
        if (recognitionFrameRef.current !== null) {
          cancelAnimationFrame(recognitionFrameRef.current);
          recognitionFrameRef.current = null;
        }
        updateStatus("error", error?.message || "圖像辨識處理失敗", null);
      }).finally(() => {
        detectionInFlight = false;
      });
    };

    const startRecognition = async () => {
      updateRecognitionFeedback("loading", "正在準備圖像辨識", null);
      try {
        tracker = new OrbImageTracker();
        await tracker.prepareMany(
          recognitionCandidates.map((candidate) => ({
            id: candidate.id,
            imageUrl: candidate.imageUrl,
          })),
        );
        if (cancelled) {
          tracker.dispose();
          return;
        }
        recognitionTrackerRef.current = tracker;
        updateRecognitionFeedback("searching", "請讓現場畫面與半透明參考圖重合", null);
        recognitionFrameRef.current = requestAnimationFrame(processFrame);
      } catch (error: any) {
        tracker?.dispose();
        tracker = null;
        updateRecognitionFeedback(
          "error",
          error?.message || "路徑節點辨識照片無法使用，請回後台驗證或更換照片",
          null,
        );
      }
    };

    startRecognition();

    return () => {
      cancelled = true;
      if (recognitionFrameRef.current !== null) {
        cancelAnimationFrame(recognitionFrameRef.current);
        recognitionFrameRef.current = null;
      }
      tracker?.dispose();
      if (recognitionTrackerRef.current === tracker) recognitionTrackerRef.current = null;
    };
  }, [cameraState, destinationId, recognitionCandidateSignature, screen]);

  const resetRuntimeLocalization = () => {
    setRuntimeAnchorId("");
    setRecognizedCandidateId("");
    setRecognitionHeadingOffset(null);
  };

  const goToGuideSegment = (index: number, openCalibration = true) => {
    const nextIndex = clamp(index, 0, Math.max(0, guideSegments.length - 1));
    const target = guideSegments[nextIndex];
    if (!target) return;
    setSegmentIndex(nextIndex);
    setCompletedSegmentIndex((current) => Math.max(current, nextIndex));
    setReviewStepIndex(nextIndex);
    setSelectedFloorId(target.floorId);
    setMapFloorId(target.floorId);
    calibrationHeadingRef.current = null;
    setCalibrationHeading(null);
    setRecognizedCandidateId("");
    setRecognitionHeadingOffset(null);
    setCameraMessage("");
    setMapExpanded(false);
    setGuideImageExpanded(false);
    updateRecognitionFeedback("disabled", "", null);
    if (openCalibration) setScreen("calibrate");
  };

  const selectOrigin = ({ x, y }: { x: number; y: number }) => {
    if (!selectedFloor) return;
    resetRuntimeLocalization();
    const bounds = selectedFloor.bounds || { blX: 0, blY: 0, trX: 100, trY: 100 };
    const physX = bounds.blX + x * (bounds.trX - bounds.blX);
    const physY = bounds.trY - y * (bounds.trY - bounds.blY);
    let snapId = "";
    let snapDistance = Infinity;
    (Object.values(graph.nodes) as NodeData[]).forEach((node) => {
      if (node.fId !== selectedFloor.id || Object.keys(graph.adjacency[node.id] || {}).length === 0) return;
      const distance = Math.hypot(node.physX - physX, node.physY - physY);
      if (distance < snapDistance) {
        snapDistance = distance;
        snapId = node.id;
      }
    });
    setOrigin({ floorId: selectedFloor.id, x, y, physX, physY, snapId });
  };

  const selectOriginMarker = (markerId: string) => {
    resetRuntimeLocalization();
    setOriginSelection(markerId);
    if (!markerId || markerId === "map") {
      setOrigin(null);
      return;
    }
    const marker = graph.nodes[markerId];
    if (!marker) return;
    if (destinationId === markerId) setDestinationId(null);
    setSelectedFloorId(marker.fId);
    setOrigin({
      floorId: marker.fId,
      x: marker.x,
      y: marker.y,
      physX: marker.physX,
      physY: marker.physY,
      snapId: marker.id,
    });
  };

  const selectDestinationMarker = (markerId: string) => {
    resetRuntimeLocalization();
    setDestinationId(markerId || null);
    const marker = graph.nodes[markerId];
    if (marker) setSelectedFloorId(marker.fId);
  };

  const openRouteReview = () => {
    if (!origin?.snapId || !destinationId || routeIds.length < 2) return;
    setReviewStepIndex(0);
    setGuideImageExpanded(false);
    setSegmentIndex(0);
    setCompletedSegmentIndex(0);
    setSelectedFloorId(origin.floorId || selectedFloorId);
    setScreen("review");
  };

  const requestCameraAndOrientation = async () => {
    if (cameraState === "loading") return;
    setCameraState("loading");
    setCameraMessage("");
    try {
      const Orientation = window.DeviceOrientationEvent as any;
      let orientationWarning = "";
      if (Orientation?.requestPermission) {
        const permission = await Orientation.requestPermission();
        if (permission !== "granted") {
          if (!recognitionRequired) throw new Error("未允許動作與方向權限");
          orientationWarning = "未開啟方向感測，將以節點照片與路網向量進行導引";
        }
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraState("ready");
      setPermissionGranted(true);
      setCameraMessage(orientationWarning);
      if (recognitionRequired) {
        calibrationHeadingRef.current = null;
        setCalibrationHeading(null);
        updateRecognitionFeedback("loading", "正在準備圖像辨識", null);
        setMapExpanded(false);
        setScreen("navigate");
      }
    } catch (error: any) {
      setCameraState("denied");
      setCameraMessage(error?.message || "無法開啟相機或方向感測");
    }
  };

  const beginNavigation = () => {
    if (recognitionRequired) {
      calibrationHeadingRef.current = null;
      setCalibrationHeading(null);
      updateRecognitionFeedback("loading", "正在準備圖像辨識", null);
      setMapExpanded(false);
      setScreen("navigate");
      return;
    }

    const nextCalibrationHeading = headingRef.current ?? heading;
    if (nextCalibrationHeading === null) {
      setCameraMessage("正在取得手機方向，請保持面向道路並稍候");
      return;
    }

    calibrationHeadingRef.current = nextCalibrationHeading;
    setCalibrationHeading(nextCalibrationHeading);
    updateRecognitionFeedback("disabled", "此節點未設定辨識照片，沿用人工方向校正", null);
    setMapExpanded(false);
    setScreen("navigate");
  };

  const restart = () => {
    resetRuntimeLocalization();
    setDestinationId(null);
    setOriginSelection("map");
    setOrigin(null);
    calibrationHeadingRef.current = null;
    setCalibrationHeading(null);
    setSegmentIndex(0);
    setCompletedSegmentIndex(0);
    setReviewStepIndex(0);
    setGuideImageExpanded(false);
    setMapExpanded(false);
    updateRecognitionFeedback("disabled", "", null);
    setScreen("destination");
  };

  if (loading) {
    return (
      <main className="v2-loading">
        <RefreshCw className="is-spinning" aria-hidden="true" />
        <strong>正在載入雲端導引資料</strong>
      </main>
    );
  }

  if (loadError || !project) {
    return (
      <main className="v2-loading is-error">
        <Map aria-hidden="true" />
        <strong>無法開啟導引資料</strong>
        <span>{loadError}</span>
        <button type="button" onClick={() => window.location.reload()}>
          重新載入
        </button>
      </main>
    );
  }

  if (showWelcome) {
    return <WelcomeScreen config={project?.systemConfig} onStart={() => setShowWelcome(false)} />;
  }

  if (screen === "navigate") {
    const isLastGuideSegment = !nextGuideSegment;
    const recognitionCanvasWidth = recognitionCanvasRef.current?.width || 360;
    const recognitionCanvasHeight = recognitionCanvasRef.current?.height || 480;
    const recognitionPolygon = recognitionCorners
      ?.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
      .join(" ");

    return (
      <main className="v2-ar-screen">
        <video ref={videoRef} className="v2-camera" playsInline muted />
        <canvas ref={recognitionCanvasRef} className="v3-recognition-canvas" aria-hidden="true" />
        <div className="v2-camera-shade" />

        <header className="v2-ar-header">
          <button type="button" onClick={() => setScreen("review")} aria-label="返回路徑預覽">
            <ChevronLeft />
          </button>
          <div>
            <span>AR 方向導引</span>
            <strong>{nodeLabel(destination)}</strong>
          </div>
          <button type="button" onClick={restart} aria-label="重新選擇">
            <RefreshCw />
          </button>
        </header>

        <div className="v2-heading-chip">
          {recognitionRequired ? <ScanLine aria-hidden="true" /> : <Compass aria-hidden="true" />}
          {recognitionRequired
            ? recognitionStatus === "locked"
              ? !activeDirectionConfigured
                ? "方位尚未設定"
                : sensorProjectedRouteBearing !== null
                  ? "位置與方位已校正"
                  : "影像已定位"
              : "等待影像對位"
            : heading === null
              ? "等待方向感測"
              : `${Math.round(heading)}°`}
        </div>

        {fieldCalibrationEnabled &&
          !mapExpanded &&
          fieldCalibrationTargetNode &&
          fieldCalibrationNodeId === fieldCalibrationTargetNode.id && (
            <aside className="v3-field-calibration" aria-label="V3 AR 現場角度校正">
              <div className="v3-field-calibration-title">
                <SlidersHorizontal aria-hidden="true" />
                <div>
                  <span>現場角度校正</span>
                  <strong>{nodeLabel(fieldCalibrationTargetNode)}</strong>
                </div>
                <output>{fieldCalibrationAngle.toFixed(0)}°</output>
              </div>

              <div className="v3-field-calibration-metrics">
                <span>照片基準 <strong>{fieldCalibrationAngle.toFixed(0)}°</strong></span>
                <span>手機方位 <strong>{heading === null ? "--" : `${Math.round(heading)}°`}</strong></span>
                <span>
                  畫面旋轉 <strong>{arProjectionRotation > 0 ? "+" : ""}{Math.round(arProjectionRotation)}°</strong>
                </span>
              </div>

              <div className="v3-field-calibration-input">
                <button
                  type="button"
                  onClick={() => updateFieldCalibrationAngle(fieldCalibrationAngle - 1)}
                  aria-label="角度減少一度"
                >
                  <Minus />
                </button>
                <label>
                  <span>角度</span>
                  <input
                    type="number"
                    min="0"
                    max="359"
                    step="1"
                    inputMode="numeric"
                    value={Math.round(fieldCalibrationAngle)}
                    onChange={(event) => updateFieldCalibrationAngle(Number(event.target.value))}
                  />
                  <em>°</em>
                </label>
                <button
                  type="button"
                  onClick={() => updateFieldCalibrationAngle(fieldCalibrationAngle + 1)}
                  aria-label="角度增加一度"
                >
                  <Plus />
                </button>
              </div>
              <input
                className="v3-field-calibration-range"
                type="range"
                min="0"
                max="359"
                step="1"
                value={fieldCalibrationAngle}
                onChange={(event) => updateFieldCalibrationAngle(Number(event.target.value))}
                aria-label="調整 AR 起始角度"
              />

              <div className="v3-field-calibration-actions">
                <button
                  type="button"
                  className={fieldCalibrationConfirmed ? "is-confirmed" : ""}
                  onClick={() => {
                    setFieldCalibrationConfirmed(true);
                    setFieldCalibrationMessage("效果已確認，可以同步此節點角度。");
                  }}
                  disabled={fieldCalibrationSync === "saving"}
                >
                  <Check />
                  {fieldCalibrationConfirmed ? "已確認" : "確認效果"}
                </button>
                <button
                  type="button"
                  className="is-sync"
                  onClick={syncFieldCalibrationAngle}
                  disabled={
                    !fieldCalibrationConfirmed ||
                    !fieldCalibrationHasChanges ||
                    fieldCalibrationSync === "saving" ||
                    fieldCalibrationAuth !== "ready"
                  }
                >
                  <CloudUpload />
                  {fieldCalibrationSync === "saving"
                    ? "同步中"
                    : fieldCalibrationHasChanges
                      ? "同步角度"
                      : "已同步"}
                </button>
              </div>

              {fieldCalibrationAuth === "checking" ? (
                <p className="v3-field-calibration-message">正在確認後台登入狀態...</p>
              ) : fieldCalibrationAuth === "login-required" ? (
                <a className="v3-field-calibration-login" href={fieldCalibrationLoginUrl}>
                  登入後台以同步
                </a>
              ) : (
                <p className={`v3-field-calibration-message is-${fieldCalibrationSync}`}>
                  {fieldCalibrationMessage}
                </p>
              )}
            </aside>
          )}

        {recognitionRequired && (
          <section
            className={`v3-recognition-overlay is-${recognitionStatus}`}
            aria-live="polite"
            aria-label={recognitionMessage}
          >
            <svg
              viewBox={`0 0 ${recognitionCanvasWidth} ${recognitionCanvasHeight}`}
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              {recognitionPolygon && <polygon points={recognitionPolygon} />}
            </svg>
            <div className="v3-recognition-frame" aria-hidden="true">
              <img
                className="v3-recognition-reference"
                src={guideReferenceImage}
                alt=""
                draggable={false}
              />
              <i /><i /><i /><i />
            </div>
            <div className="v3-recognition-status">
              <ScanLine aria-hidden="true" />
              <strong>{recognitionMessage}</strong>
            </div>
          </section>
        )}

        <div className="v2-ar-route-zone" aria-live="polite">
          {isArRouteVisible && (
            <>
              <svg
                key={`ar-guide-segment-${currentSegment}`}
                className="v2-ar-route-projection"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                aria-label={`第 ${currentSegment + 1} 段 AR 導引路線，方向 ${Math.round(arProjectionRotation)} 度`}
              >
                <defs>
                  <filter id="v2-ar-route-glow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="1.4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g
                  className="v2-ar-route-rotation"
                  style={
                    {
                      "--v2-route-rotation": `${arProjectionRotation}deg`,
                      "--v2-route-origin-x": `${arOriginX}%`,
                      "--v2-route-origin-y": `${arOriginY}%`,
                    } as React.CSSProperties
                  }
                >
                  {nextArRoute && (
                    <>
                      <path className="v3-ar-route-network-outline" d={nextArRoute.path} />
                      <path className="v3-ar-route-network-base" d={nextArRoute.path} />
                    </>
                  )}
                  {activeArRoute && (
                    <>
                      <path className="v3-ar-route-network-outline" d={activeArRoute.path} />
                      <path id={activeArRoute.pathId} className="v2-ar-route-line" d={activeArRoute.path} />
                      {Array.from({ length: 7 }, (_, index) => (
                        <g className="v2-ar-flow-arrow" key={`ar-flow-arrow-${index}`}>
                          <path d="M -2.4 -2 L 0 0 L -2.4 2" />
                          <animateMotion
                            dur="4.2s"
                            begin={`${(-index * 0.6).toFixed(1)}s`}
                            repeatCount="indefinite"
                            rotate="auto"
                          >
                            <mpath href={`#${activeArRoute.pathId}`} />
                          </animateMotion>
                        </g>
                      ))}
                      <image
                        className="v2-ar-route-mascot"
                        href="./assets/ar/mascot-walking-small.png"
                        x="-6.5"
                        y="-12"
                        width="13"
                        height="13"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <animateMotion dur="6.4s" repeatCount="indefinite" rotate="0">
                          <mpath href={`#${activeArRoute.pathId}`} />
                        </animateMotion>
                      </image>
                    </>
                  )}
                </g>
              </svg>
              <span className="v2-ar-route-direction">{arDirectionLabel}</span>
            </>
          )}
        </div>

        <div className={`v2-nav-map ${mapExpanded ? "is-expanded" : ""}`}>
          <MapPanel
            floor={mapFloor}
            graph={graph}
            mode="route"
            destinationId={destinationId}
            origin={liveMapOrigin}
            routePoints={navigationPoints}
            routeSegments={routeSegmentsForMap}
            activeRouteIndex={currentSegment}
            completedRouteIndex={completedSegmentIndex}
            compact={!mapExpanded}
            allowPerspective={false}
            imageMode="navigation"
          />
          <span className="v2-map-floor-label">{mapFloor?.name}</span>
          <span className="v2-map-toggle-label">{mapExpanded ? "縮小" : "地圖"}</span>
          <button
            type="button"
            className="v2-map-toggle-hit"
            onClick={() => setMapExpanded((value) => !value)}
            aria-label={mapExpanded ? "縮小平面圖" : "展開平面圖"}
          />
        </div>

        <section
          className={`v2-nav-console v3-corner-console ${mapExpanded ? "is-map-open" : ""}`}
        >
          <button
            type="button"
            className="v3-corner-control"
            onClick={() => goToGuideSegment(currentSegment - 1)}
            disabled={!previousGuideSegment}
            aria-label="返回上一個轉角重新定位"
          >
            <ChevronLeft />
            <span>上一轉角</span>
          </button>
          <div className="v2-nav-console-info">
            <div className="v2-nav-status">
              <span>{activeGuideSegment?.title || (hasArrived ? "已抵達目的地" : "等待定位")}</span>
              <span>{currentSegment + 1}/{Math.max(1, guideSegments.length)}</span>
            </div>
            <strong>
              {activeGuideSegment?.travelInstruction ||
                (hasArrived ? `您已抵達 ${nodeLabel(destination)}` : "請掃描節點照片以取得目前路徑")}
            </strong>
            <small className="v3-segment-distance">本段約 {remainingDistance.toFixed(1)} m</small>
            {isScaleUncalibrated && (
              <small className="v2-scale-warning">比例尺仍為預設 100×100 公尺，距離僅供估算</small>
            )}
          </div>
          <button
            type="button"
            className="v3-corner-control is-next-floor"
            onClick={() => (isLastGuideSegment ? restart() : goToGuideSegment(currentSegment + 1))}
            aria-label={isLastGuideSegment ? "完成導引" : "前往下一個轉角重新定位"}
          >
            {isLastGuideSegment ? <Check /> : <ChevronRight />}
            <span>{isLastGuideSegment ? "完成" : "下一轉角"}</span>
          </button>
        </section>

      </main>
    );
  }

  if (screen === "calibrate") {
    const showPermissionStep = !permissionGranted || cameraState !== "ready";
    return (
      <main className="v3-permission-screen">
        <button type="button" className="v2-back-float" onClick={() => setScreen("review")} aria-label="返回">
          <ChevronLeft />
        </button>
        <img
          className="v3-permission-hero"
          src={guideReferenceImage}
          alt={`${activeGuideSegment?.title || "目前位置"}方向參考照片`}
        />
        <section className="v3-permission-panel">
          <div className="v2-step-label">AR 導引</div>
          <h1>
            {showPermissionStep
              ? recognitionRequired
                ? "開啟相機並掃描節點照片"
                : "開啟相機與動作方向"
              : activeGuideSegment?.calibrationInstruction || "請讓現場畫面與半透明照片重合"}
          </h1>
          <p className="v3-guide-segment-summary">
            {activeGuideSegment?.title || "起點定位"} · 第 {currentSegment + 1}/{Math.max(1, guideSegments.length)} 段 · 約 {remainingDistance.toFixed(1)} 公尺
          </p>
          {!showPermissionStep && (
            <p className={`v3-recognition-note ${recognitionRequired ? "" : "is-warning"}`}>
              {recognitionRequired
                ? "下一步請讓現場畫面與半透明參考圖重合；辨識任一已設定節點後，系統會自動定位並重算剩餘路徑，鏡頭離開後路線會自動隱藏。"
                : "此節點尚未設定辨識照片，這一段會沿用人工面向校正。可由後台的路徑節點補上照片。"}
            </p>
          )}
          {guideExternalUrl && (
            <a className="v3-guide-external-link" href={guideExternalUrl} target="_blank" rel="noreferrer">
              <ExternalLink aria-hidden="true" />
              開啟 Google 街景參考
            </a>
          )}
          {showPermissionStep && (
            <div className="v3-permission-list">
              <div>
                <Camera aria-hidden="true" />
                <span>相機</span>
                <strong>{cameraState === "ready" ? "已開啟" : "等待允許"}</strong>
              </div>
              <div>
                <Compass aria-hidden="true" />
                <span>動作與方向</span>
                <strong>{heading === null ? "等待允許" : `${Math.round(heading)}°`}</strong>
              </div>
            </div>
          )}
          {cameraMessage && <div className={`v2-message ${cameraState === "denied" ? "is-error" : ""}`}>{cameraMessage}</div>}
          {showPermissionStep ? (
            <button type="button" className="v2-primary-button" onClick={requestCameraAndOrientation}>
              <Camera />
              {cameraState === "loading"
                ? "正在開啟..."
                : recognitionRequired
                  ? "開啟相機並開始辨識"
                  : "開啟相機與動作方向"}
            </button>
          ) : (
            <button
              type="button"
              className="v2-primary-button"
              onClick={beginNavigation}
              disabled={!recognitionRequired && heading === null}
            >
              {recognitionRequired ? <ScanLine /> : <Navigation />}
              {recognitionRequired
                ? "開始掃描節點照片"
                : heading === null
                  ? "等待方向感測..."
                  : "我已面向照片方向，開始 AR 導引"}
            </button>
          )}
        </section>
      </main>
    );
  }

  if (screen === "review") {
    const goToReviewStep = (index: number) => {
      const nextIndex = clamp(index, 0, Math.max(0, guideSegments.length - 1));
      setReviewStepIndex(nextIndex);
      setGuideImageExpanded(false);
      setSelectedFloorId(guideSegments[nextIndex]?.floorId || selectedFloorId);
    };
    const reviewFloor =
      graph.floors.find((floor) => floor.id === activeReviewStep?.floorId) || selectedFloor;
    const reviewOrigin = activeReviewStep?.start
      ? {
          floorId: activeReviewStep.start.fId,
          x: activeReviewStep.start.x,
          y: activeReviewStep.start.y,
          physX: activeReviewStep.start.physX,
          physY: activeReviewStep.start.physY,
          snapId: activeReviewStep.start.id,
        }
      : origin;
    const reviewGuideImageUrl = activeReviewStep?.referenceImageUrl || DEFAULT_GUIDE_IMAGE_URL;

    return (
      <main className="v2-review-app">
        <header className="v2-review-header">
          <button type="button" onClick={restart} aria-label="返回導覽地圖">
            <ArrowLeft />
          </button>
          <div>
            <img src="./assets/ar/mascot-walking-small.png" alt="皮卡" />
            <strong>室內導引</strong>
          </div>
        </header>

        <section className="v2-review-map-area">
          <div className="v2-review-toolbar">
            <strong className="v2-review-floor-badge">
              {activeReviewStep?.floorName || selectedFloor?.name || "樓層"}
            </strong>
            <span>{reviewFloor?.buildingName || "導引平面圖"}</span>
            <button type="button" onClick={restart}>
              <ArrowLeft />
              返回地圖
            </button>
          </div>

          <div className="v2-review-map-stage">
            <MapPanel
              floor={reviewFloor}
              graph={graph}
              mode="route"
              destinationId={destinationId}
              origin={reviewOrigin}
              routePoints={navigationPoints}
              routeSegments={routeSegmentsForMap}
              activeRouteIndex={safeReviewStepIndex}
              completedRouteIndex={completedSegmentIndex}
              compact
              imageMode="navigation"
            />
            <button
              type="button"
              className={`v3-review-guide-image ${guideImageExpanded ? "is-expanded" : ""}`}
              onClick={() => setGuideImageExpanded((current) => !current)}
              aria-label={guideImageExpanded ? "縮小方向提示圖片" : "放大方向提示圖片"}
              aria-expanded={guideImageExpanded}
            >
              <img
                src={reviewGuideImageUrl}
                alt={`${activeReviewStep?.title || "目前轉角"}方向提示`}
              />
              <span>{guideImageExpanded ? "點一下縮小" : "方向提示"}</span>
            </button>
            <button
              type="button"
              className="v2-review-ar-button"
              onClick={() => goToGuideSegment(safeReviewStepIndex)}
              aria-label="開啟 AR 導引"
            >
              <span>AR</span>
              <span>導引</span>
            </button>
          </div>
        </section>

        <section
          className={`v2-review-dock ${guideSegments.length > 1 ? "has-floor-switches" : "is-single-floor"}`}
          aria-label="轉角路徑資訊"
        >
          {guideSegments.length > 1 &&
            (previousReviewStep ? (
              <button
                type="button"
                onClick={() => goToReviewStep(safeReviewStepIndex - 1)}
                aria-label={`查看上一個轉角 ${previousReviewStep.title}`}
              >
                <ChevronLeft />
                <span>上一轉角</span>
              </button>
            ) : (
              <span className="v2-floor-control-space" aria-hidden="true" />
            ))}
          <div className="v2-review-dock-info">
            <div>
              <span>{activeReviewStep?.title || "路線起點"}</span>
              <span>
                {safeReviewStepIndex + 1}/{Math.max(1, guideSegments.length)}
              </span>
            </div>
            <strong>{reviewInstruction}</strong>
            <div className="v2-review-dock-meta">
              <span>本段約 {reviewStepDistance.toFixed(1)} 公尺</span>
              <span>全程 {totalDistance.toFixed(1)} 公尺</span>
            </div>
          </div>
          {guideSegments.length > 1 &&
            (nextReviewStep ? (
              <button
                type="button"
                className="is-next-floor"
                onClick={() => goToReviewStep(safeReviewStepIndex + 1)}
                aria-label={`查看下一個轉角 ${nextReviewStep.title}`}
              >
                <span>下一轉角</span>
                <ChevronRight />
              </button>
            ) : (
              <span className="v2-floor-control-space" aria-hidden="true" />
            ))}
        </section>
      </main>
    );
  }

  const selectedProjectName = projectName(project);
  const hasRouteSelection = Boolean(origin?.snapId && destinationId);
  const canPlanRoute = hasRouteSelection && routeIds.length >= 2;

  return (
    <main className="v2-map-screen is-destination v3-route-setup-screen">
      <header className="v2-page-header">
        <button
          type="button"
          onClick={() => setShowWelcome(true)}
          aria-label="返回歡迎頁"
        >
          <ArrowLeft />
        </button>
        <div>
          <span>目前場景</span>
          <strong>{selectedProjectName}</strong>
        </div>
        <span aria-hidden="true" />
      </header>

      <section
        className={`v2-map-card v3-route-setup-map ${mapFullscreen ? "is-fullscreen" : ""}`}
        role={mapFullscreen ? "dialog" : undefined}
        aria-label={mapFullscreen ? "全螢幕導引地圖" : undefined}
        aria-modal={mapFullscreen ? true : undefined}
      >
        <div className="v2-map-card-title">
          <FloorTabs
            floors={visibleFloors}
            selectedId={selectedFloor?.id || null}
            onSelect={(id) => {
              setSelectedFloorId(id);
              if (originSelection === "map") setOrigin(null);
            }}
          />
          <strong>{selectedFloor?.name}</strong>
        </div>
        <MapPanel
          floor={selectedFloor}
          graph={graph}
          mode="destination"
          destinationId={destinationId}
          origin={origin}
          routePoints={navigationPoints}
          onOrigin={selectOrigin}
          allowOriginSelection={originSelection === "map"}
          mapView="flat"
          labelFontSize={DEFAULT_LABEL_SIZE}
          scaleMarkersWithMap
          isFullscreen={mapFullscreen}
          onToggleFullscreen={() => setMapFullscreen((current) => !current)}
        />
      </section>

      <section className="v3-route-form" aria-label="設定導航起點與終點">
        <div className="v3-route-fields">
          <label>
            <span><LocateFixed aria-hidden="true" />起點</span>
            <select value={originSelection} onChange={(event) => selectOriginMarker(event.target.value)}>
              <option value="map">直接點擊地圖位置</option>
              {originOptions.map(({ node, label }) => (
                <option key={`origin-${node.id}`} value={node.id}>
                  {node.fName} · {label}
                </option>
              ))}
            </select>
            {originSelection === "map" && (
              <small>{origin ? `已定位於 ${selectedFloor?.name}` : "請在上方地圖點選目前位置"}</small>
            )}
          </label>
          <label>
            <span><MapPin aria-hidden="true" />終點</span>
            <select value={destinationId || ""} onChange={(event) => selectDestinationMarker(event.target.value)}>
              <option value="">請選擇導航終點</option>
              {publicStops
                .filter((marker) => marker.id !== origin?.snapId)
                .map((marker) => (
                  <option key={`destination-${marker.id}`} value={marker.id}>
                    {marker.fName} · {nodeLabel(marker)}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <button
          type="button"
          className="v3-plan-route-button"
          disabled={!canPlanRoute}
          onClick={openRouteReview}
        >
          <Navigation aria-hidden="true" />
          <span>路徑<br />規劃</span>
        </button>
        {hasRouteSelection && !canPlanRoute && (
          <small className="v3-route-unavailable">目前選擇的起點與終點之間尚未建立完整路網</small>
        )}
        {publicStops.length === 0 && (
          <small className="v3-route-unavailable">後台尚未指定可公開選擇的停駐點</small>
        )}
      </section>
    </main>
  );
}
