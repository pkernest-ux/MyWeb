import test from 'node:test';
import assert from 'node:assert/strict';
import { loadV4Source } from '../scripts/ar-v4-worker-runtime.mjs';

const { sampleRouteProgress, projectGuidanceRoute, projectHeadingUpPoint, floorImageHeadingTransform } = loadV4Source('ar-v4-guidance-geometry.ts');
const plain = value => JSON.parse(JSON.stringify(value));
const point = (physX, physY, extra = {}) => ({ physX, physY, fId: 'floor-1', ...extra });
const camera = { width: 390, height: 720, headingDeg: 0, pitchDownDeg: 10, verticalFovDeg: 60 };
const map = { headingDeg: 0, pixelsPerMeter: 8, anchorX: 195, anchorY: 350 };
const close = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} ~= ${expected}`);
const sample = (points, progress = 0) => {
  const result = sampleRouteProgress(points, progress);
  assert.equal(result.valid, true, result.reason);
  return result;
};
const project = (points, options = {}, progress = 0) => {
  const result = projectGuidanceRoute(sample(points, progress), { ...camera, ...options });
  assert.equal(result.valid, true, result.reason);
  return result;
};
const finiteInViewport = result => {
  for (const path of [...result.paths, ...result.borders, ...result.polygons, ...result.chevrons]) {
    for (const p of path) {
      assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y));
      assert.ok(p.x >= 0 && p.x <= camera.width && p.y >= 0 && p.y <= camera.height);
    }
  }
};

test('samples metric polyline and normalized image position without claiming a node or arrival', () => {
  const route = [point(0, 0, { x: 0, y: 1, id: 'a' }), point(0, 10, { x: 0, y: 0.5, id: 'b' }), point(10, 10, { x: 1, y: 0.5, id: 'c' })];
  const original = JSON.stringify(route), result = sample(route, 4);
  close(result.origin.physY, 4); close(result.origin.y, 0.8);
  assert.equal(result.origin.id, undefined);
  assert.equal(result.origin.fId, 'floor-1');
  assert.equal(result.edgeIndex, 0); close(result.edgeFraction, 0.4);
  assert.equal(result.remaining.length, 3); close(result.remainingDistance, 16); close(result.totalDistance, 20);
  assert.equal(result.estimated, true); assert.equal('arrived' in result, false);
  assert.equal(JSON.stringify(route), original);
  const turned = sample(route, 14);
  close(turned.origin.physX, 4); close(turned.origin.physY, 10); close(turned.origin.x, 0.4);
  close(turned.remainingDistance, 6); assert.equal(turned.edgeIndex, 1);
});

test('exact vertices and duplicate points do not retain an already-travelled edge', () => {
  const route = [point(0, 0), point(0, 0), point(0, 10, { id: 'turn' }), point(0, 10), point(10, 10)];
  const result = sample(route, 10);
  close(result.origin.physY, 10); close(result.origin.physX, 0);
  assert.equal(result.edgeIndex, 3); close(result.edgeFraction, 0);
  assert.equal(result.remaining.length, 2); close(result.remainingDistance, 10);
});

test('clamps progress but never confirms arrival; nonfinite progress cannot move the origin', () => {
  const route = [point(0, 0), point(0, 10)];
  for (const progress of [-100, NaN, Infinity, -Infinity]) close(sample(route, progress).progressMeters, 0);
  const end = sample(route, 1000);
  close(end.progressMeters, 10); close(end.remainingDistance, 0);
  assert.equal(end.remaining.length, 1); assert.equal(end.estimated, true); assert.equal('arrived' in end, false);
  assert.equal(projectGuidanceRoute(end, camera).offscreen, 'near');
});

test('zero-length and one-point routes are finite, empty geometry with no invented bearing', () => {
  for (const route of [[point(3, 4)], [point(3, 4), point(3, 4)]]) {
    const result = project(route);
    assert.equal(result.bearing, null); assert.equal(result.relativeBearing, null);
    assert.equal(result.endpoint, null); assert.equal(result.offscreen, 'near');
    close(result.distance, 0); close(result.remainingDistance, 0);
    assert.equal(result.paths.length + result.borders.length + result.polygons.length + result.chevrons.length, 0);
  }
});

test('rejects malformed physical geometry and cross-floor routes instead of flattening them', () => {
  for (const route of [[], null, new Array(2), [point(0, 0, { fId: 2 })], [point(NaN, 2)], [point(0, Infinity)], [point(1e10, 0)], Array.from({ length: 2049 }, () => point(0, 0))]) {
    assert.equal(sampleRouteProgress(route, 0).valid, false);
  }
  const result = sampleRouteProgress([point(0, 0), point(0, 10, { fId: 'floor-2' })], 0);
  assert.equal(result.reason, 'cross-floor');
  assert.equal(projectGuidanceRoute(result, camera).reason, 'cross-floor');
  assert.equal(projectHeadingUpPoint(point(0, 10, { fId: 'floor-2' }), point(0, 0), map), null);
});

test('optional normalized coordinates are not invented and invalid values are not exported', () => {
  const result = sample([point(0, 0, { x: NaN, y: 2 }), point(0, 10, { x: 0.4, y: -2 })], 5);
  assert.equal(result.origin.x, undefined); close(result.origin.y, 0.5);
  assert.equal(sample([point(0, 0), point(0, 10)], 5).origin.x, undefined);
});

test('all cardinal headings put a forward endpoint in the centre of both camera and map', () => {
  for (const [headingDeg, dx, dy] of [[0, 0, 10], [90, 10, 0], [180, 0, -10], [270, -10, 0]]) {
    const route = [point(0, 0), point(dx, dy)];
    const result = project(route, { headingDeg });
    assert.equal(result.offscreen, 'none'); assert.ok(result.endpoint);
    close(result.endpoint.x, camera.width / 2); close(result.relativeBearing, 0);
    close(result.bearing, headingDeg); close(result.endpoint.forwardDistance, 10);
    const mini = projectHeadingUpPoint(route[1], route[0], { ...map, headingDeg });
    close(mini.x, map.anchorX); close(mini.y, map.anchorY - 80);
  }
});

test('359/1-degree wrap and shared right/left convention agree in both projections', () => {
  const origin = point(0, 0), north = point(0, 10);
  for (const [headingDeg, expected] of [[359, 1], [1, -1], [-1, 1], [721, -1]]) {
    const result = project([origin, north], { headingDeg });
    close(result.relativeBearing, expected);
    const mini = projectHeadingUpPoint(north, origin, { ...map, headingDeg });
    assert.equal(Math.sign(result.endpoint.x - camera.width / 2), Math.sign(expected));
    assert.equal(Math.sign(mini.x - map.anchorX), Math.sign(expected));
  }
});

test('offscreen endpoint is not clamped to a false camera location', () => {
  for (const [endpoint, expected] of [[point(10, 3), 'right'], [point(-10, 3), 'left'], [point(0, -10), 'behind']]) {
    const result = project([point(0, 0), endpoint], { pitchDownDeg: 0 });
    assert.equal(result.endpoint, null); assert.equal(result.offscreen, expected);
    assert.ok(Number.isFinite(result.bearing) && result.distance > 0);
    finiteInViewport(result);
    if (expected === 'behind') assert.equal(result.paths.length + result.borders.length + result.polygons.length + result.chevrons.length, 0);
  }
});

test('near-plane and full-frustum clipping meet the bottom edge and never project behind-camera infinities', () => {
  const forward = project([point(0, 0), point(0, 12)], { pitchDownDeg: 0 });
  assert.ok(forward.paths.length && forward.polygons.length && forward.chevrons.length);
  close(forward.paths[0][0].y, camera.height);
  finiteInViewport(forward);
  for (const endpoint of [point(0, 0.001), point(0, -0.001), point(100, 0.001), point(-100, -0.001)]) {
    const result = project([point(0, 0), endpoint], { pitchDownDeg: 0 });
    finiteInViewport(result);
    assert.equal(result.endpoint, null);
  }
});

test('ribbon borders follow its real sides without introducing subdivision cross-bars', () => {
  const result = project([point(0, 0), point(0, 20)], { pitchDownDeg: 0 });
  assert.ok(result.borders.length > 0);
  for (const [a, b] of result.borders) {
    // A forward, straight ground strip has two sloping side boundaries. An
    // internal cross-bar would instead span the centre with equal screen y.
    assert.equal(Math.sign(a.x - camera.width / 2), Math.sign(b.x - camera.width / 2));
    assert.ok(Math.abs(a.y - b.y) > 0.001);
  }
  finiteInViewport(result);
  const turn = project([point(0, 0), point(0, 10), point(8, 10)], { pitchDownDeg: 0 });
  finiteInViewport(turn);
  assert.ok(turn.borders.length > 0);
});

test('pitch-down sign moves the ground up, and vertical FOV respects viewport aspect', () => {
  const route = [point(0, 0), point(0, 10)];
  const level = project(route, { pitchDownDeg: 0 }), down = project(route, { pitchDownDeg: 20 });
  assert.ok(down.endpoint.y < level.endpoint.y);
  close(level.horizontalFovDeg, 2 * Math.atan(Math.tan(Math.PI / 6) * 390 / 720) * 180 / Math.PI);
  const up = project(route, { pitchDownDeg: -40 });
  assert.equal(up.offscreen, 'below'); assert.equal(up.endpoint, null);
  const steep = project(route, { pitchDownDeg: 70 });
  assert.equal(steep.offscreen, 'above'); assert.equal(steep.endpoint, null);
  for (const verticalFovDeg of [30, 60, 100]) finiteInViewport(project(route, { verticalFovDeg }));
});

test('route turns are projected from the remaining polyline rather than a straight shortcut', () => {
  const route = [point(0, 0), point(0, 10), point(6, 10)];
  const result = project(route);
  close(result.remainingDistance, 16); close(result.distance, Math.hypot(6, 10));
  assert.equal(result.offscreen, 'right');
  const all = result.paths.flat();
  assert.ok(all.some(p => Math.abs(p.x - camera.width / 2) < 1e-6));
  assert.ok(all.some(p => p.x > camera.width / 2 + 30));
  const afterTurn = project(route, { headingDeg: 90 }, 12);
  close(afterTurn.remainingDistance, 4); close(afterTurn.distance, 4);
  close(afterTurn.endpoint.x, camera.width / 2);
});

test('a re-entering route stays finite, and camera options/input reject nonfinite values', () => {
  finiteInViewport(project([point(0, 0), point(0, -5), point(2, 10), point(-2, 10), point(-3, -4)], { pitchDownDeg: 0 }));
  const route = sample([point(0, 0), point(0, 10)]);
  for (const options of [{ width: 0 }, { height: Infinity }, { headingDeg: NaN }, { pitchDownDeg: NaN }, { cameraHeight: Infinity }]) {
    assert.equal(projectGuidanceRoute(route, { ...camera, ...options }).valid, false);
  }
  assert.equal(projectGuidanceRoute(null, camera).valid, false);
  assert.equal(projectGuidanceRoute({ ...route, remaining: [] }, camera).valid, false);
  assert.equal(projectGuidanceRoute({ ...route, remaining: new Array(2) }, camera).valid, false);
  assert.equal(projectGuidanceRoute({ ...route, remaining: [point(1, 1), point(0, 10)] }, camera).reason, 'inconsistent-origin');
  assert.equal(projectGuidanceRoute({ ...route, origin: { physX: 0, physY: 0 }, endpoint: point(0, 10, { fId: 'floor-2' }) }, camera).reason, 'cross-floor');
});

test('floor image affine exactly matches physical map points at all headings and unequal scales', () => {
  const bounds = { blX: -12, blY: 20, trX: 68, trY: 60 }, image = { width: 1000, height: 500 };
  const origin = point(18, 33);
  for (const headingDeg of [0, 90, 180, 270, 359, 37]) {
    const view = { ...map, headingDeg };
    const matrix = floorImageHeadingTransform(bounds, image, origin, view);
    assert.ok(matrix); close(matrix.rotationDeg, -headingDeg);
    for (const [x, y] of [[0, 0], [1, 1], [0.2, 0.7], [0.375, 0.675]]) {
      const physical = point(bounds.blX + x * 80, bounds.trY - y * 40);
      const expected = projectHeadingUpPoint(physical, origin, view);
      close(matrix.a * x * image.width + matrix.c * y * image.height + matrix.e, expected.x);
      close(matrix.b * x * image.width + matrix.d * y * image.height + matrix.f, expected.y);
    }
  }
});

test('floor/map transformations reject invalid scale and do not mutate their input', () => {
  const bounds = { blX: 0, blY: 0, trX: 30, trY: 10 }, image = { width: 1000, height: 1000 }, origin = point(0, 0);
  const before = plain({ bounds, image, origin, map });
  assert.equal(floorImageHeadingTransform({ ...bounds, trX: 0 }, image, origin, map), null);
  assert.equal(floorImageHeadingTransform(bounds, { width: 0, height: 0 }, origin, map), null);
  assert.equal(projectHeadingUpPoint(point(1, 1), origin, { ...map, pixelsPerMeter: NaN }), null);
  assert.equal(projectHeadingUpPoint(point(1, 1), origin, { ...map, headingDeg: Infinity }), null);
  assert.deepEqual(plain({ bounds, image, origin, map }), before);
});

test('long routes are lookahead-bounded while endpoint distance remains honest', () => {
  const result = project([point(0, 0), point(0, 10000)], { maxDistance: 40 });
  close(result.distance, 10000); close(result.remainingDistance, 10000);
  assert.ok(result.polygons.length <= 128 && result.chevrons.length <= 40);
  finiteInViewport(result);
});
