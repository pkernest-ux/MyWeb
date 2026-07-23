import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Crosshair,
  Layers3,
  LocateFixed,
  Map,
  MapPin,
  Navigation,
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
};

type FloorData = {
  id: string;
  name: string;
  imageUrl?: string | null;
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

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

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
  onDestination,
  onOrigin,
  compact = false,
}: {
  floor?: FloorData;
  graph: GraphData;
  mode: "destination" | "origin" | "route";
  destinationId?: string | null;
  origin?: ManualOrigin | null;
  routePoints?: Array<any>;
  onDestination?: (id: string) => void;
  onOrigin?: (point: { x: number; y: number }) => void;
  compact?: boolean;
}) {
  const [ratio, setRatio] = useState(1.25);
  const destinations = (Object.values(graph.nodes) as NodeData[]).filter(
    (node) => node.isMarker && node.fId === floor?.id,
  );
  const floorRoute = (routePoints || []).filter((point) => point.fId === floor?.id);
  const polyline = floorRoute.map((point) => `${clamp(point.x) * 100},${clamp(point.y) * 100}`).join(" ");

  const handleMapClick = (event: React.PointerEvent<HTMLDivElement>) => {
    if (mode !== "origin" || !onOrigin) return;
    const rect = event.currentTarget.getBoundingClientRect();
    onOrigin({
      x: clamp((event.clientX - rect.left) / rect.width),
      y: clamp((event.clientY - rect.top) / rect.height),
    });
  };

  return (
    <div className={`v2-map-frame ${compact ? "is-compact" : ""}`}>
      <div
        className={`v2-map-plane ${mode === "origin" ? "is-selecting" : ""}`}
        style={{ aspectRatio: `${ratio}` }}
        onPointerUp={handleMapClick}
      >
        {floor?.imageUrl ? (
          <img
            src={floor.imageUrl}
            alt={`${floor.name} 平面圖`}
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

        {polyline && (
          <svg className="v2-route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline points={polyline} />
          </svg>
        )}

        {mode === "destination" &&
          destinations.map((node) => (
            <button
              type="button"
              key={node.id}
              className={`v2-destination-pin ${destinationId === node.id ? "is-selected" : ""}`}
              style={{ left: `${clamp(node.x) * 100}%`, top: `${clamp(node.y) * 100}%` }}
              onPointerUp={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onDestination?.(node.id);
              }}
              aria-label={`選擇 ${nodeLabel(node)}`}
            >
              <MapPin aria-hidden="true" />
              <span>{nodeLabel(node)}</span>
            </button>
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

        {origin && origin.floorId === floor?.id && (
          <div
            className="v2-static-pin is-origin"
            style={{ left: `${clamp(origin.x) * 100}%`, top: `${clamp(origin.y) * 100}%` }}
          >
            <LocateFixed aria-hidden="true" />
          </div>
        )}

        {mode === "origin" && (
          <div className="v2-map-hint">
            <Crosshair aria-hidden="true" />
            點一下你目前所在的位置
          </div>
        )}
      </div>
    </div>
  );
}

export default function ARNavigationV2() {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [project, setProject] = useState<any>(null);
  const [screen, setScreen] = useState<"destination" | "origin" | "review" | "calibrate" | "navigate">(
    "destination",
  );
  const [destinationId, setDestinationId] = useState<string | null>(null);
  const [selectedFloorId, setSelectedFloorId] = useState<string | null>(null);
  const [origin, setOrigin] = useState<ManualOrigin | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [calibrationHeading, setCalibrationHeading] = useState<number | null>(null);
  const [cameraState, setCameraState] = useState<"idle" | "loading" | "ready" | "denied">("idle");
  const [cameraMessage, setCameraMessage] = useState("");
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [mapExpanded, setMapExpanded] = useState(false);
  const [mapFloorId, setMapFloorId] = useState<string | null>(null);
  const [showAssistMenu, setShowAssistMenu] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        let raw: any = null;
        try {
          const apiResponse = await fetch("./api/ar-content", { cache: "no-store" });
          const contentType = apiResponse.headers.get("content-type") || "";
          if (apiResponse.ok && contentType.includes("application/json")) {
            raw = await apiResponse.json();
          }
        } catch {
          raw = null;
        }
        if (!raw) {
          const fallbackResponse = await fetch("./ar-data.json", { cache: "no-store" });
          if (!fallbackResponse.ok) throw new Error(`讀取失敗 (${fallbackResponse.status})`);
          raw = await fallbackResponse.json();
        }
        const selected =
          (Array.isArray(raw.projects) &&
            (raw.projects.find((item: any) => item?.project?.id === raw.activeProjectId) || raw.projects[0])) ||
          raw;
        if (!Array.isArray(selected?.buildings) || selected.buildings.length === 0) {
          throw new Error("雲端尚未建立可用的 AR 專案");
        }
        if (active) {
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
      if (nextHeading !== null) setHeading(nextHeading);
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
    if (videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [screen, cameraState]);

  const graph = useMemo(() => buildGraph(project?.buildings || []), [project]);
  const destinationFloors = useMemo(
    () =>
      graph.floors.filter((floor) =>
        (Object.values(graph.nodes) as NodeData[]).some((node) => node.isMarker && node.fId === floor.id),
      ),
    [graph],
  );
  const visibleFloors = screen === "destination" ? destinationFloors : graph.floors;

  useEffect(() => {
    if (!visibleFloors.length) return;
    if (!selectedFloorId || !visibleFloors.some((floor) => floor.id === selectedFloorId)) {
      setSelectedFloorId(visibleFloors[0].id);
    }
  }, [selectedFloorId, visibleFloors]);

  const selectedFloor = graph.floors.find((floor) => floor.id === selectedFloorId) || visibleFloors[0];
  const destination = destinationId ? graph.nodes[destinationId] : null;
  const routeIds = useMemo(
    () => (origin?.snapId && destinationId ? shortestPath(graph, origin.snapId, destinationId) : []),
    [destinationId, graph, origin?.snapId],
  );
  const routeNodes = routeIds.map((id) => graph.nodes[id]).filter(Boolean);
  const originPoint = origin
    ? {
        id: "manual-origin",
        x: origin.x,
        y: origin.y,
        physX: origin.physX,
        physY: origin.physY,
        fId: origin.floorId,
        fName: graph.floors.find((floor) => floor.id === origin.floorId)?.name || "",
      }
    : null;
  const navigationPoints = originPoint ? [originPoint, ...routeNodes] : routeNodes;
  const totalDistance = routeLength(navigationPoints);
  const currentSegment = Math.min(segmentIndex, Math.max(0, navigationPoints.length - 2));
  const segmentStart = navigationPoints[currentSegment];
  const segmentEnd = navigationPoints[currentSegment + 1];
  const firstBearing =
    navigationPoints.length > 1 ? segmentBearing(navigationPoints[0], navigationPoints[1]) : 0;
  const currentBearing = segmentStart && segmentEnd ? segmentBearing(segmentStart, segmentEnd) : firstBearing;
  const headingDelta =
    heading !== null && calibrationHeading !== null ? normalizeAngle(heading - calibrationHeading) : 0;
  const arrowRotation = normalizeAngle(currentBearing - firstBearing - headingDelta);
  const remainingDistance = routeLength(navigationPoints.slice(currentSegment));
  const mapFloor = graph.floors.find((floor) => floor.id === mapFloorId) ||
    graph.floors.find((floor) => floor.id === segmentStart?.fId) ||
    selectedFloor;

  useEffect(() => {
    if (segmentStart?.fId) setMapFloorId(segmentStart.fId);
  }, [currentSegment, segmentStart?.fId]);

  const selectDestination = (id: string) => {
    setDestinationId(id);
    setOrigin(null);
    const node = graph.nodes[id];
    const currentFloor = graph.floors.find((floor) => floor.id === node?.fId) || graph.floors[0];
    setSelectedFloorId(currentFloor?.id || node?.fId || null);
    setScreen("origin");
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

  const requestCameraAndMotion = async () => {
    if (cameraState === "loading") return;
    setCameraState("loading");
    setCameraMessage("");
    try {
      const Orientation = window.DeviceOrientationEvent as any;
      const Motion = window.DeviceMotionEvent as any;
      if (Orientation?.requestPermission) {
        const permission = await Orientation.requestPermission();
        if (permission !== "granted") throw new Error("未允許動作與方向權限");
      }
      if (Motion?.requestPermission) {
        const permission = await Motion.requestPermission();
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
      setCameraMessage("相機與方向感測已開啟");
    } catch (error: any) {
      setCameraState("denied");
      setCameraMessage(error?.message || "無法開啟相機或方向感測");
    }
  };

  const beginNavigation = () => {
    setCalibrationHeading(heading ?? 0);
    setSegmentIndex(0);
    setMapExpanded(false);
    setScreen("navigate");
  };

  const restart = () => {
    setDestinationId(null);
    setOrigin(null);
    setCalibrationHeading(null);
    setSegmentIndex(0);
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

  if (screen === "navigate") {
    const isLastSegment = currentSegment >= navigationPoints.length - 2;
    const changedFloor = segmentStart && segmentEnd && segmentStart.fId !== segmentEnd.fId;
    const instruction = changedFloor
      ? `請前往 ${segmentEnd.fName}，到達後按「下一段」`
      : isLastSegment
        ? `沿箭頭前進，即將抵達 ${nodeLabel(destination)}`
        : "沿黃色箭頭前進，到達轉折處後按下一段";

    return (
      <main className="v2-ar-screen">
        <video ref={videoRef} className="v2-camera" playsInline muted />
        <div className="v2-camera-shade" />

        <header className="v2-ar-header">
          <button type="button" onClick={() => setScreen("review")} aria-label="返回路徑預覽">
            <ChevronLeft />
          </button>
          <div>
            <span>AR 方向導引 V2</span>
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

        <div className="v2-ar-arrow-zone" aria-live="polite">
          <div className="v2-ar-anchor" />
          <Navigation
            className="v2-main-arrow"
            style={{ transform: `rotate(${arrowRotation}deg)` }}
            aria-label={`導引方向 ${Math.round(arrowRotation)} 度`}
          />
          <span>{Math.abs(arrowRotation) < 18 ? "直行" : arrowRotation > 0 ? "向右轉" : "向左轉"}</span>
        </div>

        <div className={`v2-nav-map ${mapExpanded ? "is-expanded" : ""}`}>
          <MapPanel
            floor={mapFloor}
            graph={graph}
            mode="route"
            destinationId={destinationId}
            origin={origin}
            routePoints={navigationPoints}
            compact={!mapExpanded}
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

        <section className={`v2-nav-console ${mapExpanded ? "is-map-open" : ""}`}>
          <button
            type="button"
            onClick={() => setSegmentIndex((index) => Math.max(0, index - 1))}
            disabled={currentSegment === 0}
            aria-label="上一段"
          >
            <ChevronLeft />
          </button>
          <div>
            <div className="v2-nav-status">
              <span>{segmentStart?.fName || destination?.fName}</span>
              <span>
                {currentSegment + 1}/{Math.max(1, navigationPoints.length - 1)}
              </span>
            </div>
            <strong>{instruction}</strong>
            <small>剩餘約 {remainingDistance.toFixed(1)} 公尺</small>
          </div>
          <button
            type="button"
            onClick={() =>
              setSegmentIndex((index) => Math.min(Math.max(0, navigationPoints.length - 2), index + 1))
            }
            disabled={isLastSegment}
            aria-label="下一段"
          >
            <ChevronRight />
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
    return (
      <main className="v2-calibration">
        <video ref={videoRef} className="v2-camera" playsInline muted />
        <div className="v2-camera-shade" />
        <button type="button" className="v2-back-float" onClick={() => setScreen("review")} aria-label="返回">
          <ChevronLeft />
        </button>

        <div className="v2-calibration-reticle" aria-hidden="true">
          <span />
          <Navigation />
        </div>

        <section className="v2-calibration-panel">
          <div className="v2-step-label">方向校正</div>
          <h1>面向第一段路徑</h1>
          <p>請站在剛才點選的位置，面向準備前進的走道，再按下定位。</p>
          <div className="v2-sensor-row">
            <Camera />
            <span>{cameraState === "ready" ? "相機已開啟" : "等待相機權限"}</span>
            <Compass />
            <span>{heading === null ? "等待方向感測" : `${Math.round(heading)}°`}</span>
          </div>
          {cameraMessage && <div className={`v2-message ${cameraState === "denied" ? "is-error" : ""}`}>{cameraMessage}</div>}
          {cameraState !== "ready" ? (
            <button type="button" className="v2-primary-button" onClick={requestCameraAndMotion}>
              <Camera />
              {cameraState === "loading" ? "正在開啟..." : "開啟相機與動作方向"}
            </button>
          ) : (
            <button type="button" className="v2-primary-button" onClick={beginNavigation}>
              <LocateFixed />
              定位並開始導引
            </button>
          )}
          <a className="v2-secondary-link" href="./ar.html">
            <ScanLine />
            改用影像辨識定位
          </a>
        </section>
      </main>
    );
  }

  const pageTitle =
    screen === "destination" ? "選擇目的地" : screen === "origin" ? "標示目前位置" : "確認導航路徑";
  const pageDescription =
    screen === "destination"
      ? "直接點擊平面圖上的房間大頭針"
      : screen === "origin"
        ? "切換到你所在樓層，再點擊平面圖位置"
        : "確認後面向第一段路徑進行方向校正";

  return (
    <main className="v2-map-screen">
      <header className="v2-page-header">
        <button
          type="button"
          onClick={() => {
            if (screen === "origin") {
              setDestinationId(null);
              setOrigin(null);
              setScreen("destination");
            } else if (screen === "review") {
              setScreen("origin");
            } else {
              window.location.href = "./ar-v2.html";
            }
          }}
          aria-label="返回"
        >
          <ArrowLeft />
        </button>
        <div className="v2-header-spacer" aria-hidden="true" />
        <div className="v2-version-badge">V2</div>
      </header>

      <section className="v2-intro">
        <div className="v2-step-label">
          {screen === "destination" ? "STEP 1" : screen === "origin" ? "STEP 2" : "STEP 3"}
        </div>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </section>

      <section className="v2-floor-section">
        <div className="v2-section-heading">
          <Layers3 />
          <strong>{screen === "destination" ? "目的地樓層" : "目前所在樓層"}</strong>
        </div>
        <FloorTabs floors={visibleFloors} selectedId={selectedFloor?.id || null} onSelect={(id) => {
          setSelectedFloorId(id);
          if (screen === "origin") setOrigin(null);
        }} />
      </section>

      <section className="v2-map-card">
        <div className="v2-map-card-title">
          <div>
            <Building2 />
            <span>{selectedFloor?.buildingName}</span>
          </div>
          <strong>{selectedFloor?.name}</strong>
        </div>
        <MapPanel
          floor={selectedFloor}
          graph={graph}
          mode={screen === "destination" ? "destination" : screen === "origin" ? "origin" : "route"}
          destinationId={destinationId}
          origin={origin}
          routePoints={navigationPoints}
          onDestination={selectDestination}
          onOrigin={selectOrigin}
        />
      </section>

      {screen === "origin" && destination && (
        <section className="v2-selection-summary">
          <MapPin />
          <div>
            <span>目的地</span>
            <strong>
              {nodeLabel(destination)} · {destination.fName}
            </strong>
          </div>
          {origin && <Check />}
        </section>
      )}

      {screen === "review" && (
        <section className="v2-route-summary">
          <div>
            <Navigation />
            <span>預估路徑</span>
            <strong>{totalDistance.toFixed(1)} 公尺</strong>
          </div>
          <div>
            <Layers3 />
            <span>樓層路段</span>
            <strong>{new Set(navigationPoints.map((point) => point.fId)).size} 個</strong>
          </div>
        </section>
      )}

      <footer className="v2-action-bar">
        {screen === "origin" && (
          <button
            type="button"
            className="v2-primary-button"
            disabled={!origin?.snapId || routeIds.length === 0}
            onClick={() => {
              setScreen("review");
              setSelectedFloorId(origin?.floorId || selectedFloorId);
            }}
          >
            <Navigation />
            {origin ? (routeIds.length ? "確認位置並規劃路徑" : "目前位置找不到可用路徑") : "請先點選目前位置"}
          </button>
        )}
        {screen === "review" && (
          <>
            <button type="button" className="v2-quiet-button" onClick={() => setScreen("origin")}>
              <Crosshair />
              重選位置
            </button>
            <button type="button" className="v2-primary-button" onClick={() => setScreen("calibrate")}>
              <Compass />
              進行方向校正
              <ArrowRight />
            </button>
          </>
        )}
        {screen === "destination" && (
          <div className="v2-footer-tip">
            <MapPin />
            點選紅色大頭針後，系統會帶你設定目前位置
          </div>
        )}
      </footer>
    </main>
  );
}
