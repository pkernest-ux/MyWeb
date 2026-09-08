// Relative to the fully fitted floor plan, not a physical printed map scale.
export const V4_ROUTE_MAX_ZOOM = 3.5;

export function fitRouteSegment(
  points: Array<{ x: number; y: number }>,
  viewport: { width: number; height: number },
  world: { width: number; height: number },
) {
  if (!(viewport.width > 0 && viewport.height > 0 && world.width > 0 && world.height > 0)) return null;
  const valid = points.filter(p => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!valid.length) return null;
  const xs = valid.map(p => p.x * world.width), ys = valid.map(p => p.y * world.height);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  // Keep pins clear of the edges and reserve the right-hand guide/AR controls.
  const left = Math.min(44, viewport.width * .12);
  const right = Math.min(200, viewport.width * .34);
  const vertical = Math.min(56, viewport.height * .18);
  const width = Math.max(1, viewport.width - left - right);
  const height = Math.max(1, viewport.height - vertical * 2);
  const fit = Math.min(width / Math.max(1, maxX - minX), height / Math.max(1, maxY - minY));
  // Long legs occupy at most 85% of the safe frame. Short legs approach the
  // cap gradually instead of zooming tightly to two nearly adjacent points.
  const scale = Math.min(fit * .85, V4_ROUTE_MAX_ZOOM * fit / (fit + V4_ROUTE_MAX_ZOOM * .35));
  return {
    scale,
    x: (left - right) / 2 - ((minX + maxX) / 2 - world.width / 2) * scale,
    y: -((minY + maxY) / 2 - world.height / 2) * scale,
  };
}
