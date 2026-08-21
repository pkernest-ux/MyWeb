import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
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
  X,
} from "lucide-react";

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
  enabled?: boolean;
  navigable?: boolean;
  guideTitle?: string;
  guideInstruction?: string;
  guideImageUrl?: string | null;
  guideExternalUrl?: string;
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

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const DEFAULT_LABEL_SIZE = 15;
const AR_TURN_ANGLE_THRESHOLD = 18;
const AR_SCREEN_UNITS_PER_METER = 2.4;
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

const projectPreview = (data: any) => {
  for (const building of data?.buildings || []) {
    for (const floor of building?.floors || []) {
      if (floor?.imageUrl || floor?.navigationImageUrl) {
        return floor.imageUrl || floor.navigationImageUrl;
      }
    }
  }
  return "";
};

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

const nodeLabel = (node?: NodeData | null) =>
  node?.title && node.title !== "新增辨識點"
    ? node.title
    : node?.code || node?.title || "未命名地點";

const getHeading = (event: DeviceOrientationEvent & { webkitCompassHeading?: number }) => {
  if (typeof event.webkitCompassHeading === "number" && Number.isFinite(event.webkitCompassHeading)) {
    return event.webkitCompassHeading;
  }
  if (typeof event.alpha === "number" && Number.isFinite(event.alpha)) {
    return (360 - event.alpha + 360) % 360;
  }
  return null;
};

const buildGraph = (buildings: any[]): GraphData => {
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

const shortestPath = (graph: GraphData, startId: string, destinationId: string) => {
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

const hasGuideDetails = (point: any) =>
  Boolean(
    point?.guideTitle?.trim?.() ||
      point?.guideInstruction?.trim?.() ||
      point?.guideImageUrl ||
      point?.guideExternalUrl?.trim?.(),
  );

const buildGuideSegments = (points: Array<any>, destinationLabel: string): GuideSegment[] => {
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
      title: start.guideTitle?.trim?.() || (index === 0 ? "起點定位" : `轉角 ${index}`),
      calibrationInstruction:
        start.guideInstruction?.trim?.() || "請站在參考位置，拿起手機面向圖片所示方向",
      travelInstruction,
      referenceImageUrl: start.guideImageUrl || "",
      externalUrl: start.guideExternalUrl?.trim?.() || "",
    };
  });
};

const safeExternalUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : "";
  } catch {
    return "";
  }
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
    (node) => node.isMarker && node.navigable !== false && node.fId === floor?.id,
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
    const pointers = Array.from(pointerMapRef.current.values());
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
    const pointers = Array.from(pointerMapRef.current.values());
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

    const remaining = Array.from(pointerMapRef.current.values());
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

            {origin && origin.floorId === floor?.id && !(mode === "destination" && graph.nodes[origin.snapId]?.isMarker) && (
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

function ProjectPicker({
  options,
  loadingId,
  error,
  onSelect,
  onBack,
}: {
  options: ProjectOption[];
  loadingId: string | null;
  error: string;
  onSelect: (option: ProjectOption) => void;
  onBack?: () => void;
}) {
  return (
    <main className="v2-project-picker">
      {onBack && (
        <button type="button" className="v2-project-back" onClick={onBack} aria-label="返回">
          <ArrowLeft />
        </button>
      )}
      <header>
        <span>AR 室內導引</span>
        <h1>選擇導引場域</h1>
        <p>請選擇這次要瀏覽與測試的場域。</p>
      </header>

      {error && <div className="v2-project-error">{error}</div>}

      <section className="v2-project-grid" aria-label="可用的導引專案">
        {options.map((option) => {
          const preview = projectPreview(option.localData);
          const stats = option.summary?.stats;
          const isLoading = loadingId === option.id;
          return (
            <button
              type="button"
              key={option.id}
              className="v2-project-card"
              onClick={() => onSelect(option)}
              disabled={Boolean(loadingId)}
            >
              <div className="v2-project-preview">
                {preview ? <img src={preview} alt={`${option.name} 平面圖預覽`} /> : <Map aria-hidden="true" />}
                {isLoading && (
                  <span className="v2-project-loading">
                    <RefreshCw className="is-spinning" aria-hidden="true" />
                    載入中
                  </span>
                )}
              </div>
              <div className="v2-project-card-body">
                <span>導引專案</span>
                <strong>{option.name}</strong>
                <small>
                  {stats
                    ? `${stats.floorPlans} 張平面圖 · ${stats.markers} 個導引點`
                    : "點選後載入平面圖與路網"}
                </small>
              </div>
              <ChevronRight aria-hidden="true" />
            </button>
          );
        })}
      </section>
    </main>
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
  const [projectOptions, setProjectOptions] = useState<ProjectOption[]>([]);
  const [projectLoadingId, setProjectLoadingId] = useState<string | null>(null);
  const [projectPickError, setProjectPickError] = useState("");
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
  const [showAssistMenu, setShowAssistMenu] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const headingRef = useRef<number | null>(null);
  const calibrationHeadingRef = useRef<number | null>(null);
  const defaultsAppliedProjectRef = useRef<string | null>(null);

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

        if (active) {
          setProjectOptions(options);
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

  const selectProject = async (option: ProjectOption) => {
    setProjectLoadingId(option.id);
    setProjectPickError("");
    try {
      const selected = await loadProjectOption(option);

      defaultsAppliedProjectRef.current = null;
      setProject(selected);
      setDestinationId(null);
      setOriginSelection("map");
      setOrigin(null);
      setSelectedFloorId(null);
      setReviewStepIndex(0);
      setGuideImageExpanded(false);
      setSegmentIndex(0);
      setCompletedSegmentIndex(0);
      setScreen("destination");
      setShowWelcome(true);
    } catch (error: any) {
      setProjectPickError(error?.message || "無法載入此導引專案");
    } finally {
      setProjectLoadingId(null);
    }
  };

  const returnToProjectPicker = () => {
    defaultsAppliedProjectRef.current = null;
    setProject(null);
    setDestinationId(null);
    setOriginSelection("map");
    setOrigin(null);
    setSelectedFloorId(null);
    setReviewStepIndex(0);
    setGuideImageExpanded(false);
    setSegmentIndex(0);
    setCompletedSegmentIndex(0);
    setScreen("destination");
  };

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
  const navigableMarkers = useMemo(
    () =>
      (Object.values(graph.nodes) as NodeData[])
        .filter((node) => node.isMarker && node.navigable !== false)
        .sort(
          (a, b) =>
            a.bName.localeCompare(b.bName, "zh-Hant") ||
            a.fName.localeCompare(b.fName, "zh-Hant") ||
            nodeLabel(a).localeCompare(nodeLabel(b), "zh-Hant"),
        ),
    [graph],
  );
  const defaultDestination = useMemo(
    () => navigableMarkers.find((node) => nodeLabel(node).trim() === DEFAULT_DESTINATION_LABEL) || null,
    [navigableMarkers],
  );
  const defaultOrigin = useMemo(() => {
    if (!defaultDestination) return null;

    const namedOrigin = navigableMarkers.find((node) =>
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
  }, [defaultDestination, graph, navigableMarkers]);
  const originOptions = useMemo(() => {
    const options = navigableMarkers.map((node) => ({ node, label: nodeLabel(node) }));
    if (defaultOrigin && !options.some((option) => option.node.id === defaultOrigin.id)) {
      options.unshift({ node: defaultOrigin, label: "大門" });
    }
    return options;
  }, [defaultOrigin, navigableMarkers]);
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
  const routeIds = useMemo(() => {
    if (!origin?.snapId || !destinationId) return [];
    return shortestPath(graph, origin.snapId, destinationId);
  }, [destinationId, graph, origin?.snapId]);
  const routeNodes = routeIds.map((id) => graph.nodes[id]).filter(Boolean);
  const snappedOriginNode = origin?.snapId ? graph.nodes[origin.snapId] : null;
  const originPoint = origin
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
  const navigationPoints = originPoint
    ? [
        originPoint,
        ...routeNodes.filter(
          (node, index) =>
            !(
              index === 0 &&
              node.id === origin.snapId &&
              Math.hypot(node.physX - origin.physX, node.physY - origin.physY) < 0.001
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
  const segmentEnd = activeGuideSegment?.end;
  const activeNavigationPoints = activeGuideSegment?.points || navigationPoints;
  const liveMapOrigin: ManualOrigin | null = segmentStart
    ? {
        floorId: segmentStart.fId,
        x: segmentStart.x,
        y: segmentStart.y,
        physX: segmentStart.physX,
        physY: segmentStart.physY,
        snapId: segmentStart.id,
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
  const arProjectionRotation = normalizeAngle(projectionBearing - firstBearing - headingDelta);
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
  const arDirectionLabel = Math.abs(arrowRotation) < 18
    ? "方向已對準"
    : arrowRotation > 0
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
  const guideReferenceImage = activeGuideSegment?.referenceImageUrl || DEFAULT_GUIDE_IMAGE_URL;
  const guideExternalUrl = safeExternalUrl(activeGuideSegment?.externalUrl || "");
  const routeSegmentsForMap = guideSegments;

  useEffect(() => {
    if (segmentStart?.fId) setMapFloorId(segmentStart.fId);
  }, [currentSegment, segmentStart?.fId]);

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
    setCameraMessage("");
    setMapExpanded(false);
    setGuideImageExpanded(false);
    if (openCalibration) setScreen("calibrate");
  };

  const selectOrigin = ({ x, y }: { x: number; y: number }) => {
    if (!selectedFloor) return;
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
      if (Orientation?.requestPermission) {
        const permission = await Orientation.requestPermission();
        if (permission !== "granted") throw new Error("未允許動作與方向權限");
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
      setCameraMessage("");
    } catch (error: any) {
      setCameraState("denied");
      setCameraMessage(error?.message || "無法開啟相機或方向感測");
    }
  };

  const beginNavigation = () => {
    const nextCalibrationHeading = headingRef.current ?? heading;
    if (nextCalibrationHeading === null) {
      setCameraMessage("正在取得手機方向，請保持面向道路並稍候");
      return;
    }
    calibrationHeadingRef.current = nextCalibrationHeading;
    setCalibrationHeading(nextCalibrationHeading);
    setMapExpanded(false);
    setScreen("navigate");
  };

  const restart = () => {
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
    setShowAssistMenu(false);
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

  if (!project && projectOptions.length > 0) {
    return (
      <ProjectPicker
        options={projectOptions}
        loadingId={projectLoadingId}
        error={projectPickError}
        onSelect={selectProject}
      />
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

    return (
      <main className="v2-ar-screen">
        <video ref={videoRef} className="v2-camera" playsInline muted />
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
          <Compass aria-hidden="true" />
          {heading === null ? "等待方向感測" : `${Math.round(heading)}°`}
        </div>

        <div className="v2-ar-route-zone" aria-live="polite">
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
              <span>{activeGuideSegment?.title}</span>
              <span>{currentSegment + 1}/{Math.max(1, guideSegments.length)}</span>
            </div>
            <strong>{activeGuideSegment?.travelInstruction}</strong>
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

        <button
          type="button"
          className="v2-assist-button"
          onClick={() => setShowAssistMenu((value) => !value)}
          aria-label="影像辨識輔助"
        >
          <ScanLine />
        </button>
        {showAssistMenu && (
          <aside className="v2-assist-menu">
            <button type="button" onClick={() => setShowAssistMenu(false)} aria-label="關閉">
              <X />
            </button>
            <ScanLine />
            <strong>需要重新校正？</strong>
            <p>附近若有既有導引圖，可切換原版影像辨識重新定位。</p>
            <a href="./ar.html">開啟影像辨識輔助</a>
          </aside>
        )}
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
              ? "開啟相機與動作方向"
              : activeGuideSegment?.calibrationInstruction || "請面向圖片所示方向"}
          </h1>
          <p className="v3-guide-segment-summary">
            {activeGuideSegment?.title || "起點定位"} · 第 {currentSegment + 1}/{Math.max(1, guideSegments.length)} 段 · 約 {remainingDistance.toFixed(1)} 公尺
          </p>
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
              {cameraState === "loading" ? "正在開啟..." : "開啟相機與動作方向"}
            </button>
          ) : (
            <button
              type="button"
              className="v2-primary-button"
              onClick={beginNavigation}
              disabled={heading === null}
            >
              <Navigation />
              {heading === null ? "等待方向感測..." : "我已面向照片方向，開始 AR 導引"}
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
          onClick={returnToProjectPicker}
          aria-label="返回"
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
              {navigableMarkers
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
        {navigableMarkers.length === 0 && (
          <small className="v3-route-unavailable">後台尚未指定可導航的 AR 點位</small>
        )}
      </section>
    </main>
  );
}
