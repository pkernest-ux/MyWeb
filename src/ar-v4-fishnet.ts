import type {
  FishnetCell, FishnetCellAddress, FishnetFeaturePoint, FishnetProjection, FishnetSummary,
} from './ar-v4-recognition-types';

export const FISHNET_GRID_VERSION = 'v4-fishnet-grid-1' as const;
export const VIEW_GRID = Object.freeze({ columns: 8, rows: 6 });
export const PANORAMA_GRID = Object.freeze({ columns: 36, rows: 18 });
export const FISHNET_DISPLAY_FEATURE_LIMIT = 96;
const radians = Math.PI / 180;
const clamp = (n: number, low: number, high: number) => Math.max(low, Math.min(high, n));
export const wrapDegrees = (n: number) => ((n % 360) + 360) % 360;
const wrapUnit = (n: number) => ((n % 1) + 1) % 1;
const finite = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n);
const cellIndex = (unit: number, divisions: number) => {
  const scaled = unit * divisions, nearest = Math.round(scaled);
  // Equivalent overlapping projections may differ by a few floating-point bits
  // exactly on a grid line. Snap only numerical round-off, not image uncertainty.
  return Math.floor(Math.abs(scaled - nearest) < 1e-10 ? nearest : scaled);
};

/** A missing/invalid batch identity never acquires an invented world direction. */
export function normalizeProjection(value: unknown): FishnetProjection | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const p = value as Partial<FishnetProjection>;
  if (typeof p.panoramaId !== 'string' || !p.panoramaId.trim() || p.panoramaId.length > 512
    || /[\u0000-\u001f\u007f]/.test(p.panoramaId)
    || !finite(p.yaw) || !finite(p.pitch) || !finite(p.fov)
    || p.pitch < -85 || p.pitch > 85 || p.fov < 30 || p.fov > 110
    || !(p.mapBearing === null || finite(p.mapBearing))) return null;
  return { panoramaId: p.panoramaId, yaw: wrapDegrees(p.yaw), pitch: p.pitch, fov: p.fov,
    mapBearing: p.mapBearing === null ? null : wrapDegrees(p.mapBearing) };
}

function checkImage(x: number, y: number, width: number, height: number) {
  if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) {
    throw new Error('格網影像座標無效');
  }
}
function address(kind: 'image' | 'panorama', sourceId: string, row: number, col: number): FishnetCellAddress {
  // A structured ID avoids collisions when source IDs contain delimiters.
  return { id: JSON.stringify([FISHNET_GRID_VERSION, kind, sourceId, row, col]), row, col };
}
export function imageCell(x: number, y: number, width: number, height: number, imageId: string): FishnetCellAddress {
  checkImage(x, y, width, height);
  return address('image', imageId,
    clamp(Math.floor(y / height * VIEW_GRID.rows), 0, VIEW_GRID.rows - 1),
    clamp(Math.floor(x / width * VIEW_GRID.columns), 0, VIEW_GRID.columns - 1));
}
export function sphericalCell(u: number, v: number, panoramaId: string): FishnetCellAddress {
  if (!finite(u) || !finite(v)) throw new Error('球面格網座標無效');
  return address('panorama', panoramaId,
    Math.min(PANORAMA_GRID.rows - 1, cellIndex(clamp(v, 0, 1), PANORAMA_GRID.rows)),
    cellIndex(wrapUnit(u), PANORAMA_GRID.columns) % PANORAMA_GRID.columns);
}

/** Neighbour lookup wraps longitude, never latitude. Matching itself stays cross-cell. */
export function sphericalCellNeighbors(u: number, v: number, panoramaId: string): FishnetCellAddress[] {
  const cell = sphericalCell(u, v, panoramaId), cells: FishnetCellAddress[] = [];
  for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
    const row = cell.row + dr;
    if (row >= 0 && row < PANORAMA_GRID.rows) cells.push(address('panorama', panoramaId, row,
      (cell.col + dc + PANORAMA_GRID.columns) % PANORAMA_GRID.columns));
  }
  return cells;
}

/** Same pixel-centre convention as field-core's panoramaCoordinates/extraction. */
export function fishnetPoint(x: number, y: number, width: number, height: number, imageId: string,
  inputProjection?: FishnetProjection | null): Omit<FishnetFeaturePoint, 'level' | 'index'> {
  const viewCell = imageCell(x, y, width, height, imageId);
  const projection = normalizeProjection(inputProjection);
  if (!projection) return { x, y, viewCell, referenceCell: viewCell,
    u: null, v: null, yaw: null, pitch: null, mapYaw: null };
  const tanFov = Math.tan(projection.fov * radians / 2);
  const rayX = (2 * (x + .5) / width - 1) * tanFov;
  const rayY = (1 - 2 * (y + .5) / height) * tanFov * height / width;
  const pr = projection.pitch * radians, yr = projection.yaw * radians;
  const pitchY = rayY * Math.cos(pr) + Math.sin(pr);
  const pitchZ = Math.cos(pr) - rayY * Math.sin(pr);
  const worldX = rayX * Math.cos(yr) + pitchZ * Math.sin(yr);
  const worldZ = pitchZ * Math.cos(yr) - rayX * Math.sin(yr);
  const longitude = Math.atan2(worldX, worldZ), latitude = Math.atan2(pitchY, Math.hypot(worldX, worldZ));
  const u = wrapUnit(longitude / (2 * Math.PI) + .5), v = clamp(.5 - latitude / Math.PI, 0, 1);
  const yaw = wrapDegrees(longitude / radians), pitch = latitude / radians;
  return { x, y, viewCell, referenceCell: sphericalCell(u, v, projection.panoramaId), u, v, yaw, pitch,
    mapYaw: projection.mapBearing === null ? null : wrapDegrees(projection.mapBearing + yaw - projection.yaw) };
}

/** Round-robin high-score points across occupied cells; spare quotas are redistributed. */
export function selectBalancedIndices(points: readonly { x: number; y: number; score?: number }[],
  width: number, height: number, limit: number): number[] {
  checkImage(0, 0, width, height);
  if (!Number.isInteger(limit) || limit < 0) throw new Error('格網特徵上限無效');
  const buckets: number[][] = Array.from({ length: VIEW_GRID.columns * VIEW_GRID.rows }, () => []);
  points.forEach((p, i) => {
    if (!finite(p.x) || !finite(p.y) || p.x < 0 || p.x >= width || p.y < 0 || p.y >= height) return;
    const cell = imageCell(p.x, p.y, width, height, '');
    buckets[cell.row * VIEW_GRID.columns + cell.col].push(i);
  });
  const score = (i: number) => finite(points[i].score) ? points[i].score! : 0;
  buckets.forEach(bucket => bucket.sort((a, b) => score(b) - score(a)
    || points[a].y - points[b].y || points[a].x - points[b].x || a - b));
  const selected: number[] = [];
  for (let rank = 0; selected.length < limit; rank++) {
    let found = false;
    for (const bucket of buckets) if (rank < bucket.length) {
      selected.push(bucket[rank]); found = true;
      if (selected.length === limit) break;
    }
    if (!found) break;
  }
  return selected;
}

export function countCells(addresses: readonly FishnetCellAddress[]): FishnetCell[] {
  const counts = new Map<string, FishnetCell>();
  for (const cell of addresses) {
    const existing = counts.get(cell.id);
    if (existing) existing.count++;
    else counts.set(cell.id, { ...cell, count: 1 });
  }
  return [...counts.values()].sort((a, b) => a.row - b.row || a.col - b.col || a.id.localeCompare(b.id));
}
export function summarizeFishnet(imageId: string, width: number, height: number,
  points: readonly { x: number; y: number; level: number; index: number }[], inputProjection?: FishnetProjection | null): FishnetSummary {
  const projection = normalizeProjection(inputProjection);
  const features = points.map(p => ({ ...fishnetPoint(p.x, p.y, width, height, imageId, projection), level: p.level, index: p.index }));
  const cells = countCells(features.map(p => p.viewCell)), referenceCells = countCells(features.map(p => p.referenceCell));
  // Keep the ORB index in the worker's levels and the binary pack. Only this
  // per-target UI summary is sampled; no full feature metadata array is retained.
  const displayFeatures = features.length > FISHNET_DISPLAY_FEATURE_LIMIT
    ? selectBalancedIndices(features, width, height, FISHNET_DISPLAY_FEATURE_LIMIT).map(i => features[i])
    : features;
  return { version: FISHNET_GRID_VERSION, mode: projection ? 'panorama' : 'image-only',
    grid: { ...VIEW_GRID }, referenceGrid: { ...(projection ? PANORAMA_GRID : VIEW_GRID) }, projection,
    occupiedCells: cells.length, referenceOccupiedCells: referenceCells.length,
    featureTotal: features.length, featureSampled: displayFeatures.length < features.length,
    cells, referenceCells, features: displayFeatures };
}
