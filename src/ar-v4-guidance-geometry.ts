/**
 * Shared, approximate V4 guidance geometry. Physical X points east/right and Y
 * north/up; headings increase clockwise from north. Physical units must already
 * be metres (the graph's floor.bounds supplies that scale). Normalized image y
 * points down. No function here observes a location or confirms arrival.
 */
export type GuidancePoint = {
  physX: number;
  physY: number;
  x?: number;
  y?: number;
  fId?: string;
  id?: string;
};

export type ScreenPoint = { x: number; y: number };
export type GeometryFailure = { valid: false; reason: string };
export type RouteProgress = {
  valid: true;
  estimated: true;
  origin: GuidancePoint;
  endpoint: GuidancePoint;
  remaining: GuidancePoint[];
  totalDistance: number;
  remainingDistance: number;
  progressMeters: number;
  edgeIndex: number;
  edgeFraction: number;
};
export type RouteProgressResult = RouteProgress | GeometryFailure;

export type CameraViewport = {
  width: number;
  height: number;
  headingDeg: number;
  /** Positive means looking down; zero means a level optical axis. */
  pitchDownDeg?: number;
  /** Effective vertical FOV of the displayed/cropped camera viewport, not the sensor. */
  verticalFovDeg?: number;
  cameraHeight?: number;
  routeWidth?: number;
  maxDistance?: number;
};
export type EndpointProjection = ScreenPoint & { depth: number; forwardDistance: number };
export type RouteProjection = {
  valid: true;
  approximate: true;
  /** Clipped camera-image centre lines, separate across invisible portions. */
  paths: ScreenPoint[][];
  /** Only actual left/right ground-strip edges, never subdivision cross edges. */
  borders: ScreenPoint[][];
  /** Clipped ground strips and physically placed direction arrows. */
  polygons: ScreenPoint[][];
  chevrons: ScreenPoint[][];
  endpoint: EndpointProjection | null;
  /** Bearing and direct distance to the segment endpoint, not remaining path length. */
  bearing: number | null;
  distance: number;
  remainingDistance: number;
  relativeBearing: number | null;
  forwardDistance: number;
  offscreen: 'none' | 'left' | 'right' | 'behind' | 'above' | 'below' | 'near';
  verticalFovDeg: number;
  horizontalFovDeg: number;
};

export type HeadingUpView = {
  headingDeg: number;
  pixelsPerMeter: number;
  anchorX: number;
  anchorY: number;
};
export type FloorBounds = { blX: number; blY: number; trX: number; trY: number };
export type FloorImageTransform = {
  a: number; b: number; c: number; d: number; e: number; f: number;
  rotationDeg: number;
};

const RAD = Math.PI / 180;
const EPS = 1e-8;
const MAX_POINTS = 2048;
const NEAR = 0.15;
const clamp = (n: number, low: number, high: number) => Math.max(low, Math.min(high, n));
const wrap = (n: number) => ((n % 360) + 360) % 360;
const signed = (n: number) => ((n + 180) % 360 + 360) % 360 - 180;
const distance = (a: GuidancePoint, b: GuidancePoint) => Math.hypot(b.physX - a.physX, b.physY - a.physY);
const finitePoint = (p: GuidancePoint) => !!p && Number.isFinite(p.physX) && Number.isFinite(p.physY)
  && Math.abs(p.physX) <= 1e9 && Math.abs(p.physY) <= 1e9
  && (p.fId === undefined || typeof p.fId === 'string');
const floorMismatch = (a: GuidancePoint, b: GuidancePoint) => !!a.fId && !!b.fId && a.fId !== b.fId;
const failure = (reason: string): GeometryFailure => ({ valid: false, reason });

function copyPoint(p: GuidancePoint): GuidancePoint {
  const result: GuidancePoint = { physX: p.physX, physY: p.physY };
  if (Number.isFinite(p.x)) result.x = clamp(p.x!, 0, 1);
  if (Number.isFinite(p.y)) result.y = clamp(p.y!, 0, 1);
  if (typeof p.fId === 'string' && p.fId.length) result.fId = p.fId;
  if (typeof p.id === 'string' && p.id.length) result.id = p.id;
  return result;
}

function interpolate(a: GuidancePoint, b: GuidancePoint, t: number): GuidancePoint {
  if (t <= EPS) return copyPoint(a);
  if (t >= 1 - EPS) return copyPoint(b);
  const point: GuidancePoint = {
    physX: a.physX + (b.physX - a.physX) * t,
    physY: a.physY + (b.physY - a.physY) * t,
  };
  if (Number.isFinite(a.x) && Number.isFinite(b.x)) point.x = a.x! + (b.x! - a.x!) * t;
  if (Number.isFinite(a.y) && Number.isFinite(b.y)) point.y = a.y! + (b.y! - a.y!) * t;
  if (a.fId || b.fId) point.fId = a.fId || b.fId;
  // An interpolated estimate is not an observation of either graph node.
  return point;
}

/**
 * Sample ONLY the current same-floor segment. Negative progress clamps to zero,
 * excess progress to its endpoint; non-finite progress safely resets to zero.
 * Even at the endpoint this remains an estimate, never an arrival signal.
 */
export function sampleRouteProgress(points: readonly GuidancePoint[], progressMeters: number): RouteProgressResult {
  if (!Array.isArray(points) || !points.length || points.length > MAX_POINTS) return failure('invalid-route');
  // Array.from also visits sparse slots; Array.every alone would skip holes.
  if (!Array.from(points).every(finitePoint)) return failure('invalid-point');
  const floors = new Set(points.map(p => p.fId).filter(Boolean));
  if (floors.size > 1) return failure('cross-floor');
  const route = points.map(copyPoint);
  const lengths = route.slice(1).map((point, index) => distance(route[index], point));
  const totalDistance = lengths.reduce((sum, length) => sum + length, 0);
  if (!Number.isFinite(totalDistance) || totalDistance > 1e6) return failure('invalid-distance');
  const progress = Number.isFinite(progressMeters) ? clamp(progressMeters, 0, totalDistance) : 0;
  let edgeIndex = 0, traversed = 0, edgeFraction = 0;
  let origin = copyPoint(route[0]);
  if (progress >= totalDistance - EPS) {
    edgeIndex = Math.max(0, route.length - 2);
    edgeFraction = totalDistance > EPS ? 1 : 0;
    origin = copyPoint(route[route.length - 1]);
  } else {
    for (let i = 0; i < lengths.length; i++) {
      if (lengths[i] > EPS && traversed + lengths[i] > progress + EPS) {
        edgeIndex = i;
        edgeFraction = clamp((progress - traversed) / lengths[i], 0, 1);
        origin = interpolate(route[i], route[i + 1], edgeFraction);
        break;
      }
      traversed += lengths[i];
    }
  }
  const remaining = [origin];
  if (progress < totalDistance - EPS) {
    for (const point of route.slice(edgeIndex + 1)) {
      if (distance(remaining[remaining.length - 1], point) > EPS) remaining.push(point);
    }
  }
  return {
    valid: true, estimated: true, origin, endpoint: copyPoint(route[route.length - 1]), remaining,
    totalDistance, remainingDistance: Math.max(0, totalDistance - progress), progressMeters: progress,
    edgeIndex, edgeFraction,
  };
}

function relative(point: GuidancePoint, origin: GuidancePoint, heading: number) {
  const h = wrap(heading) * RAD, dx = point.physX - origin.physX, dy = point.physY - origin.physY;
  return { right: dx * Math.cos(h) - dy * Math.sin(h), forward: dx * Math.sin(h) + dy * Math.cos(h) };
}

/** Same heading-up basis used by the camera: right is +screen X, forward is -screen Y. */
export function projectHeadingUpPoint(point: GuidancePoint, origin: GuidancePoint, view: HeadingUpView): ScreenPoint | null {
  if (!finitePoint(point) || !finitePoint(origin) || floorMismatch(point, origin) || !validView(view)) return null;
  const { right, forward } = relative(point, origin, view.headingDeg);
  const projected = { x: view.anchorX + right * view.pixelsPerMeter, y: view.anchorY - forward * view.pixelsPerMeter };
  return Number.isFinite(projected.x) && Number.isFinite(projected.y) ? projected : null;
}

function validView(view: HeadingUpView) {
  return !!view && [view.headingDeg, view.pixelsPerMeter, view.anchorX, view.anchorY].every(Number.isFinite)
    && view.pixelsPerMeter > 0 && view.pixelsPerMeter <= 1e6;
}

/**
 * Map actual image pixels through floor.bounds into the same physical heading-up
 * space. Use SVG matrix(a b c d e f), not a second independent rotation. Handles
 * non-square images and unequal physical spans without assuming pixel=metre.
 */
export function floorImageHeadingTransform(
  bounds: FloorBounds,
  image: { width: number; height: number },
  origin: GuidancePoint,
  view: HeadingUpView,
): FloorImageTransform | null {
  if (!bounds || !image || !finitePoint(origin) || !validView(view)
    || ![bounds.blX, bounds.blY, bounds.trX, bounds.trY, image.width, image.height].every(Number.isFinite)
    || !(bounds.trX > bounds.blX && bounds.trY > bounds.blY && image.width > 0 && image.height > 0)) return null;
  const h = wrap(view.headingDeg) * RAD, c = Math.cos(h), s = Math.sin(h), scale = view.pixelsPerMeter;
  const scaleX = (bounds.trX - bounds.blX) / image.width, scaleY = (bounds.trY - bounds.blY) / image.height;
  const dx = bounds.blX - origin.physX, dy = bounds.trY - origin.physY;
  const result = {
    a: scale * c * scaleX, b: -scale * s * scaleX,
    c: scale * s * scaleY, d: scale * c * scaleY,
    e: view.anchorX + scale * (dx * c - dy * s),
    f: view.anchorY - scale * (dx * s + dy * c), rotationDeg: -wrap(view.headingDeg),
  };
  return Object.values(result).every(Number.isFinite) ? result : null;
}

type CameraPoint = { x: number; y: number; z: number };
type Plane = (point: CameraPoint) => number;
const mix = (a: CameraPoint, b: CameraPoint, t: number): CameraPoint => ({
  x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t,
});

function clipLine(a: CameraPoint, b: CameraPoint, planes: Plane[]): [CameraPoint, CameraPoint] | null {
  let from = 0, to = 1;
  for (const plane of planes) {
    const da = plane(a), db = plane(b);
    if (da < 0 && db < 0) return null;
    if (da < 0 || db < 0) {
      const t = da / (da - db);
      if (da < 0) from = Math.max(from, t); else to = Math.min(to, t);
      if (from > to) return null;
    }
  }
  return [mix(a, b, from), mix(a, b, to)];
}

function clipPolygon(input: CameraPoint[], planes: Plane[]) {
  let polygon = input;
  for (const plane of planes) {
    const result: CameraPoint[] = [];
    for (let i = 0; i < polygon.length; i++) {
      const a = polygon[i], b = polygon[(i + 1) % polygon.length], da = plane(a), db = plane(b);
      if (da >= 0) result.push(a);
      if ((da < 0) !== (db < 0)) result.push(mix(a, b, da / (da - db)));
    }
    polygon = result;
    if (!polygon.length) break;
  }
  return polygon;
}

function sampleRemaining(points: GuidancePoint[], limit: number) {
  const result = [points[0]];
  let covered = 0;
  // Bounded path subdivision for stable perspective paths; no invented spline
  // cuts across a corner. Subdivision adds at most ~128 samples to the bounded
  // input vertex count, even for very long routes.
  const step = Math.max(0.5, limit / 128);
  for (let i = 1; i < points.length && covered < limit - EPS; i++) {
    const a = points[i - 1], b = points[i], length = distance(a, b);
    if (length <= EPS) continue;
    const usable = Math.min(length, limit - covered), count = Math.ceil(usable / step);
    for (let j = 1; j <= count; j++) result.push(interpolate(a, b, usable * j / count / length));
    covered += usable;
  }
  return result;
}

/**
 * Project the estimated ground route using a pinhole camera, assumed height and
 * displayed viewport FOV. This is not visual pose, VIO, ground-plane detection,
 * or a calibrated AR anchor. object-fit:cover callers must use its effective
 * viewport FOV; the default is only an approximation. No arrival is inferred.
 */
export function projectGuidanceRoute(sample: RouteProgressResult, viewport: CameraViewport): RouteProjection | GeometryFailure {
  if (!sample) return failure('invalid-progress');
  // Use an explicit discriminant for both strict and non-strict consumers.
  if (sample.valid === false) return failure(sample.reason);
  if (!viewport || ![viewport.width, viewport.height, viewport.headingDeg].every(Number.isFinite)
    || viewport.width <= 0 || viewport.height <= 0 || viewport.width > 16384 || viewport.height > 16384) return failure('invalid-viewport');
  const options = [viewport.pitchDownDeg, viewport.verticalFovDeg, viewport.cameraHeight, viewport.routeWidth, viewport.maxDistance];
  if (options.some(value => value !== undefined && !Number.isFinite(value))) return failure('invalid-camera');
  if (!finitePoint(sample.origin) || !finitePoint(sample.endpoint) || !Array.isArray(sample.remaining)
    || !sample.remaining.length || sample.remaining.length > MAX_POINTS || !Array.from(sample.remaining).every(finitePoint)
    || !Number.isFinite(sample.remainingDistance) || sample.remainingDistance < 0) return failure('invalid-progress');
  if (distance(sample.origin, sample.remaining[0]) > EPS) return failure('inconsistent-origin');
  const floors = new Set([sample.origin, sample.endpoint, ...sample.remaining].map(point => point.fId).filter(Boolean));
  if (floors.size > 1) return failure('cross-floor');
  const width = viewport.width, height = viewport.height;
  const verticalFovDeg = clamp(viewport.verticalFovDeg ?? 60, 20, 120);
  const tanY = Math.tan(verticalFovDeg * RAD / 2), tanX = tanY * width / height;
  const focal = height / (2 * tanY), pitch = clamp(viewport.pitchDownDeg ?? 0, -85, 85) * RAD;
  const cameraHeight = clamp(viewport.cameraHeight ?? 1.5, 0.3, 3);
  const halfWidth = clamp(viewport.routeWidth ?? 0.6, 0.05, 2) / 2;
  const maxDistance = clamp(viewport.maxDistance ?? 40, 1, 100);
  const camera = (point: GuidancePoint): CameraPoint => {
    const { right, forward } = relative(point, sample.origin, viewport.headingDeg);
    // Positive down-pitch rotates a ground point upward in the displayed image.
    return { x: right, y: -cameraHeight * Math.cos(pitch) + forward * Math.sin(pitch),
      z: cameraHeight * Math.sin(pitch) + forward * Math.cos(pitch) };
  };
  const planes: Plane[] = [
    point => point.z - NEAR,
    point => point.x + point.z * tanX, point => point.z * tanX - point.x,
    point => point.y + point.z * tanY, point => point.z * tanY - point.y,
  ];
  const screen = (point: CameraPoint): ScreenPoint => ({
    x: clamp(width / 2 + focal * point.x / point.z, 0, width),
    y: clamp(height / 2 - focal * point.y / point.z, 0, height),
  });
  const visiblePolygon = (points: GuidancePoint[]) => {
    const clipped = clipPolygon(points.map(camera), planes);
    if (clipped.length < 3) return null;
    const polygon = clipped.map(screen);
    const area = Math.abs(polygon.reduce((sum, a, i) => {
      const b = polygon[(i + 1) % polygon.length]; return sum + a.x * b.y - a.y * b.x;
    }, 0)) / 2;
    return area >= 0.1 ? polygon : null;
  };
  const points = sampleRemaining(sample.remaining, maxDistance);
  const paths: ScreenPoint[][] = [], borders: ScreenPoint[][] = [], polygons: ScreenPoint[][] = [], chevrons: ScreenPoint[][] = [];
  let path: ScreenPoint[] | null = null;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1], b = points[i], length = distance(a, b);
    if (length <= EPS) continue;
    const clipped = clipLine(camera(a), camera(b), planes);
    if (clipped) {
      const [start, end] = clipped.map(screen);
      const previous = path?.[path.length - 1];
      if (!previous || Math.hypot(previous.x - start.x, previous.y - start.y) > 0.01) {
        path = [start, end]; paths.push(path);
      } else path!.push(end);
    } else path = null;
    const sideX = -(b.physY - a.physY) / length * halfWidth;
    const sideY = (b.physX - a.physX) / length * halfWidth;
    for (const side of [-1, 1]) {
      const border = clipLine(
        camera({ physX: a.physX + sideX * side, physY: a.physY + sideY * side }),
        camera({ physX: b.physX + sideX * side, physY: b.physY + sideY * side }), planes,
      );
      if (border) {
        const projected = border.map(screen);
        if (Math.hypot(projected[1].x - projected[0].x, projected[1].y - projected[0].y) > 0.01) borders.push(projected);
      }
    }
    const polygon = visiblePolygon([
      { physX: a.physX + sideX, physY: a.physY + sideY }, { physX: b.physX + sideX, physY: b.physY + sideY },
      { physX: b.physX - sideX, physY: b.physY - sideY }, { physX: a.physX - sideX, physY: a.physY - sideY },
    ]);
    if (polygon) polygons.push(polygon);
  }
  // Each arrow is placed on a real straight portion of the polyline. Its tip is
  // limited to that edge; no smoothing can point through a wall at a turn.
  let traversed = 0, nextArrow = 1.5;
  for (let i = 1; i < sample.remaining.length && traversed < maxDistance; i++) {
    const a = sample.remaining[i - 1], b = sample.remaining[i], length = distance(a, b);
    if (length <= EPS) continue;
    const ux = (b.physX - a.physX) / length, uy = (b.physY - a.physY) / length;
    while (nextArrow <= Math.min(traversed + length, maxDistance)) {
      const along = nextArrow - traversed;
      if (along >= 0.25 && along + 0.35 <= length) {
        const center = interpolate(a, b, along / length);
        const arrow = visiblePolygon([
          { physX: center.physX + ux * 0.35, physY: center.physY + uy * 0.35 },
          { physX: center.physX - ux * 0.2 - uy * halfWidth * 0.7, physY: center.physY - uy * 0.2 + ux * halfWidth * 0.7 },
          { physX: center.physX - ux * 0.2 + uy * halfWidth * 0.7, physY: center.physY - uy * 0.2 - ux * halfWidth * 0.7 },
        ]);
        if (arrow) chevrons.push(arrow);
      }
      nextArrow += 2.5;
    }
    traversed += length;
  }
  const endpointCamera = camera(sample.endpoint), endpointBasis = relative(sample.endpoint, sample.origin, viewport.headingDeg);
  const directDistance = distance(sample.origin, sample.endpoint);
  const bearing = directDistance > EPS ? wrap(Math.atan2(sample.endpoint.physX - sample.origin.physX, sample.endpoint.physY - sample.origin.physY) / RAD) : null;
  const relativeBearing = bearing === null ? null : signed(bearing - wrap(viewport.headingDeg));
  let offscreen: RouteProjection['offscreen'] = 'none';
  if (directDistance < NEAR) offscreen = 'near';
  else if (endpointCamera.z < NEAR) offscreen = 'behind';
  else if (endpointCamera.x < -endpointCamera.z * tanX) offscreen = 'left';
  else if (endpointCamera.x > endpointCamera.z * tanX) offscreen = 'right';
  else if (endpointCamera.y > endpointCamera.z * tanY) offscreen = 'above';
  else if (endpointCamera.y < -endpointCamera.z * tanY) offscreen = 'below';
  return {
    valid: true, approximate: true, paths, borders, polygons, chevrons,
    endpoint: offscreen === 'none' ? { ...screen(endpointCamera), depth: endpointCamera.z, forwardDistance: endpointBasis.forward } : null,
    bearing, distance: directDistance, remainingDistance: sample.remainingDistance, relativeBearing,
    forwardDistance: endpointBasis.forward, offscreen, verticalFovDeg,
    horizontalFovDeg: 2 * Math.atan(tanX) / RAD,
  };
}
