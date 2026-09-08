import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const compile = source => ts.transpileModule(source, { compilerOptions: {
  module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true,
} }).outputText;
const helperCode = compile(await readFile(new URL('../src/ar-v4-fishnet.ts', import.meta.url), 'utf8'));
const workerCode = compile(await readFile(new URL('../src/ar-v4-image-recognition.worker.ts', import.meta.url), 'utf8'));
const helper = {};
vm.runInNewContext(helperCode, { exports: helper, require });
const plain = value => JSON.parse(JSON.stringify(value));
function engine() {
  const exports = {}; let listener, answer, requestId = 0;
  vm.runInNewContext(workerCode, { exports, TextEncoder, TextDecoder,
    require: name => name === './ar-v4-fishnet' ? helper : require(name),
    self: { addEventListener(_name, fn) { listener = fn; }, postMessage(value) { answer = value; } },
  });
  return { ...exports, send(request) {
    answer = null; listener({ data: { ...request, requestId: ++requestId } });
    assert.equal(answer?.requestId, requestId);
    if (!answer.ok) throw new Error(answer.error);
    return answer.result;
  } };
}
function fixture(id = 'fixture', nodeId = 'node') {
  const width = 420, height = 315, pixels = new Uint8Array(width * height * 4); pixels.fill(245);
  for (let i = 0; i < 180; i++) {
    const x = i * 73 % 380, y = i * 47 % 275;
    for (let a = x; a < x + 7 + i % 25; a++) for (let b = y; b < y + 8 + i % 23; b++) {
      const j = (b * width + a) * 4;
      pixels[j] = i * 13 % 255; pixels[j + 1] = i * 61 % 255; pixels[j + 2] = i * 37 % 255; pixels[j + 3] = 255;
    }
  }
  return { id, nodeId, width, height, pixels: pixels.buffer };
}
const projection = { panoramaId: 'site/floor/node/batch', yaw: 0, pitch: 0, fov: 75, mapBearing: 20 };
const approx = (actual, expected, epsilon = 1e-10) => assert.ok(Math.abs(actual - expected) < epsilon, `${actual} != ${expected}`);
const header = pack => JSON.parse(new TextDecoder().decode(new Uint8Array(pack, 4, new DataView(pack).getUint32(0, true))));
function rewriteHeader(pack, change) {
  const oldLength = new DataView(pack).getUint32(0, true), h = header(pack); change(h);
  const bytes = new TextEncoder().encode(JSON.stringify(h));
  const edited = new ArrayBuffer(4 + bytes.length + pack.byteLength - 4 - oldLength);
  new DataView(edited).setUint32(0, bytes.length, true);
  new Uint8Array(edited).set(bytes, 4);
  new Uint8Array(edited).set(new Uint8Array(pack, 4 + oldLength), 4 + bytes.length);
  return edited;
}

test('image cells are deterministic, bounded and independent of panorama cells', () => {
  const a = helper.imageCell(0, 0, 420, 315, 'a');
  assert.equal(a.row, 0); assert.equal(a.col, 0);
  const last = helper.imageCell(420, 315, 420, 315, 'a');
  assert.equal(last.row, 5); assert.equal(last.col, 7);
  assert.equal(helper.imageCell(52.5, 52.5, 420, 315, 'a').col, 1);
  assert.equal(helper.imageCell(52.5, 52.5, 420, 315, 'a').row, 1);
  assert.notEqual(a.id, helper.imageCell(0, 0, 420, 315, 'b').id);
  assert.throws(() => helper.imageCell(NaN, 0, 420, 315, 'a'));
});

test('sphere cells wrap the 0/1 seam with neighbour halo and clamp both poles', () => {
  const left = helper.sphericalCell(0, .5, 'p'), right = helper.sphericalCell(1 - 1e-8, .5, 'p');
  assert.equal(left.col, 0); assert.equal(right.col, 35);
  assert.equal(helper.sphericalCell(1, .5, 'p').id, left.id);
  assert.equal(helper.sphericalCell(-1e-8, .5, 'p').id, right.id);
  assert.equal(helper.sphericalCell(.5, 0, 'p').row, 0);
  assert.equal(helper.sphericalCell(.5, 1, 'p').row, 17);
  assert.ok(helper.sphericalCellNeighbors(0, .5, 'p').some(c => c.id === right.id));
  assert.equal(helper.sphericalCellNeighbors(.5, 0, 'p').length, 6);
});

test('overlapping 75-degree views share a sphere cell and direction, not an image cell', () => {
  const width = 420, height = 315;
  const xFor = yaw => (1 + Math.tan(yaw * Math.PI / 180) / Math.tan(37.5 * Math.PI / 180)) * width / 2 - .5;
  const a = helper.fishnetPoint(xFor(22.5), (height - 1) / 2, width, height, 'view-0', projection);
  const b = helper.fishnetPoint(xFor(-22.5), (height - 1) / 2, width, height, 'view-45', { ...projection, yaw: 45, mapBearing: 65 });
  assert.equal(a.referenceCell.id, b.referenceCell.id);
  assert.notEqual(a.viewCell.id, b.viewCell.id);
  approx(a.u, b.u); approx(a.v, b.v); approx(a.yaw, 22.5); approx(b.yaw, 22.5);
  approx(a.mapYaw, 42.5); approx(b.mapYaw, 42.5); approx(a.pitch, 0);
  const centre = helper.fishnetPoint((width - 1) / 2, (height - 1) / 2, width, height, 'view', { ...projection, yaw: 180, pitch: 30 });
  approx(centre.pitch, 30); assert.equal(centre.referenceCell.col, 0);
});

test('absent or invalid batch metadata remains image-only and never fabricates a bearing', () => {
  const invalid = [undefined, null, {}, { ...projection, panoramaId: '' }, { ...projection, panoramaId: 'x\u0000y' },
    { ...projection, yaw: NaN }, { ...projection, pitch: 86 }, { ...projection, fov: 111 },
    { ...projection, mapBearing: undefined }, { ...projection, mapBearing: '20' }];
  for (const value of invalid) {
    assert.equal(helper.normalizeProjection(value), null);
    const p = helper.fishnetPoint(100, 100, 420, 315, 'plain', value);
    assert.equal(p.referenceCell.id, p.viewCell.id);
    for (const field of ['u', 'v', 'yaw', 'pitch', 'mapYaw']) assert.equal(p[field], null);
  }
  const unknownMap = helper.fishnetPoint(100, 100, 420, 315, 'view', { ...projection, mapBearing: null });
  assert.equal(unknownMap.mapYaw, null); assert.equal(typeof unknownMap.yaw, 'number');
});

test('overlap stays in the same canonical cell exactly on every ten-degree grid boundary', () => {
  const width=420,height=315;
  const xFor=angle=>(1+Math.tan(angle*Math.PI/180)/Math.tan(37.5*Math.PI/180))*width/2-.5;
  for(let yaw=0;yaw<360;yaw+=10){
    const a=helper.fishnetPoint(xFor(22.5),(height-1)/2,width,height,'a',{...projection,yaw:yaw-22.5,mapBearing:null});
    const b=helper.fishnetPoint(xFor(-22.5),(height-1)/2,width,height,'b',{...projection,yaw:yaw+22.5,mapBearing:null});
    assert.equal(a.referenceCell.id,b.referenceCell.id,`boundary at ${yaw} degrees`);
  }
});

test('balanced sampling redistributes a fixed cap without inventing empty-cell features', () => {
  const points = Array.from({ length: 100 }, (_, i) => ({ x: 20, y: 20, score: 1000 - i }));
  for (let row = 0; row < 6; row++) for (let col = 0; col < 8; col++) {
    if (row || col) points.push({ x: col * 50 + 20, y: row * 50 + 20, score: 1 });
  }
  const selected = helper.selectBalancedIndices(points, 400, 300, 48);
  assert.equal(selected.length, 48);
  assert.equal(new Set(selected.map(i => helper.imageCell(points[i].x, points[i].y, 400, 300, '').id)).size, 48);
  assert.equal(new Set(helper.selectBalancedIndices(points, 400, 300, 120)).size, 120);
  assert.equal(helper.selectBalancedIndices(points.slice(0, 10), 400, 300, 280).length, 10);
  assert.deepEqual(plain(selected), plain(helper.selectBalancedIndices(points, 400, 300, 48)));
});

test('legacy compilation stays byte-identical to the pre-Fishnet golden fixture', () => {
  const e = engine(), target = fixture(), first = e.compileFeatureTarget(target);
  const digest = pack => createHash('sha256').update(Buffer.from(pack)).digest('hex');
  assert.equal(first.byteLength, 33808);
  assert.equal(digest(first), '81c6294bd0b30b9b857ec0b135b896cb55276011ed65d4cbdc53526463d54d83');
  e.compileFeatureTarget({ ...target, projection }, { profile: 'fishnet' });
  assert.equal(digest(e.compileFeatureTarget({ ...target, projection }, { profile: 'legacy' })), digest(first));
  assert.equal(e.PACK_ALGORITHM, 'v4-jsfeat-orb-1');
});

test('Fishnet packs are bounded feature-only data, exact on replay and strictly profile-separated', () => {
  const e = engine(), target = { ...fixture(), projection: { ...projection, pixels: 'must-not-be-stored' } };
  const legacy = e.compileFeatureTarget(target), packed = e.compileFeatureTarget(target, { profile: 'fishnet' });
  const h = header(packed);
  assert.equal(h.algorithm, 'v4-jsfeat-orb-fishnet-1');
  assert.ok(packed.byteLength <= 65536);
  assert.ok(!JSON.stringify(h).includes('pixels'));
  assert.throws(() => e.decodeFeatureTarget(packed, target), /版本/);
  assert.throws(() => e.decodeFeatureTarget(legacy, target, { profile: 'fishnet' }), /版本/);
  const decoded = e.decodeFeatureTarget(packed, target, { profile: 'fishnet' });
  const raw = e.send({ type: 'prepareMany', profile: 'fishnet', targets: [target] }).targets[0];
  assert.deepEqual(plain(decoded.fishnet), plain(raw.fishnet));
  assert.ok(raw.featureCount <= 840);
  assert.equal(raw.featureCount, decoded.levels.reduce((n, l) => n + l.count, 0));
  assert.equal(raw.fishnet.featureTotal, raw.featureCount);
  assert.equal(raw.fishnet.features.length, 96);
  assert.equal(raw.fishnet.featureSampled, true);
  assert.equal(raw.fishnet.cells.reduce((n, c) => n + c.count, 0), raw.featureCount);
  assert.equal(raw.fishnet.referenceCells.reduce((n, c) => n + c.count, 0), raw.featureCount);
  assert.equal(raw.fishnet.occupiedCells, new Set(raw.fishnet.features.map(p => p.viewCell.id)).size);
  assert.equal(raw.fishnet.referenceOccupiedCells, raw.fishnet.referenceCells.length);
  assert.ok(raw.fishnet.referenceOccupiedCells >= new Set(raw.fishnet.features.map(p => p.referenceCell.id)).size);
});

test('display sampling is capped and marked, while full cell counts and descriptor packs remain intact', () => {
  const e=engine(),target={...fixture(),projection};
  const packed=e.compileFeatureTarget(target,{profile:'fishnet'});
  const decoded=e.decodeFeatureTarget(packed,target,{profile:'fishnet'}),summary=decoded.fishnet;
  const legacy=e.decodeFeatureTarget(e.compileFeatureTarget(target),target);
  assert.equal(decoded.levels.reduce((n,l)=>n+l.count,0),840);
  assert.equal(legacy.levels.reduce((n,l)=>n+l.count,0),840);
  assert.equal(summary.featureTotal,840);
  assert.equal(summary.features.length,helper.FISHNET_DISPLAY_FEATURE_LIMIT);
  assert.ok(summary.cells.some(c=>c.count>summary.features.filter(p=>p.viewCell.id===c.id).length));
  for(const l of decoded.levels)assert.equal(l.descriptors.data.subarray(0,l.count*32).length,l.count*32);
  const small=helper.summarizeFishnet('small',420,315,[{x:100,y:100,level:0,index:0}],projection);
  assert.equal(small.featureTotal,1);assert.equal(small.features.length,1);assert.equal(small.featureSampled,false);
  const blank=helper.summarizeFishnet('blank',420,315,[],null);
  assert.equal(blank.featureTotal,0);assert.equal(blank.featureSampled,false);
});

test('malformed Fishnet headers, oversized/truncated packs and nonfinite coordinates are rejected', () => {
  const e = engine(), target = { ...fixture(), projection }, pack = e.compileFeatureTarget(target, { profile: 'fishnet' });
  const decode = p => e.decodeFeatureTarget(p, target, { profile: 'fishnet' });
  for (const bad of [new ArrayBuffer(65537), pack.slice(0, pack.byteLength - 1),
    rewriteHeader(pack, h => { h.fishnet.version = 'old'; }),
    rewriteHeader(pack, h => { h.fishnet.grid.columns = 10; }),
    rewriteHeader(pack, h => { h.fishnet.referenceGrid.rows = 6; }),
    rewriteHeader(pack, h => { h.fishnet.projection.fov = 200; }),
    rewriteHeader(pack, h => { h.levels[0].count = 281; }),
    rewriteHeader(pack, h => { h.extra = 'x'.repeat(4096); }),
  ]) assert.throws(() => decode(bad));
  const nan = pack.slice(0), view = new DataView(nan);
  view.setFloat64(4 + view.getUint32(0, true), NaN, true);
  assert.throws(() => decode(nan), /座標/);
});

test('worker reports matched-cell evidence, keeps modes separate and never sums duplicate node views', () => {
  const e = engine(), target = { ...fixture(), projection };
  e.send({ type: 'prepareMany', profile: 'fishnet', targets: [target] });
  assert.throws(() => e.send({ type: 'detect', ...target }), /模式/);
  const single = e.send({ type: 'detect', profile: 'fishnet', ...target });
  assert.equal(single.diagnostics.reason, 'matched');
  assert.equal(single.diagnostics.profile, 'fishnet');
  assert.equal(single.diagnostics.fishnet.geometryAccepted, true);
  assert.ok(single.diagnostics.fishnet.features.length<=96);
  assert.equal(single.diagnostics.fishnet.featureTotal,840);
  assert.equal(single.diagnostics.fishnet.matches.filter(m => m.verified).length, single.diagnostics.inliers);
  assert.equal(single.diagnostics.fishnet.verifiedCells.reduce((n, c) => n + c.count, 0), single.diagnostics.inliers);
  for (const match of single.diagnostics.fishnet.matches) {
    assert.equal(typeof match.reference.mapYaw, 'number');
    assert.notEqual(match.frameCell.id, match.reference.referenceCell.id);
  }
  e.send({ type: 'prepareMany', profile: 'fishnet', targets: [target, { ...target, id: 'overlap-view' }] });
  const duplicate = e.send({ type: 'detect', profile: 'fishnet', ...target });
  assert.equal(duplicate.detection.inliers, single.detection.inliers);
  assert.equal(duplicate.diagnostics.reason, 'matched');
  const again = e.send({ type: 'detect', profile: 'fishnet', ...target });
  assert.deepEqual(plain(again), plain(duplicate));
});

test('inconsistent panorama batches become image-only; visually identical other nodes stay ambiguous', () => {
  const e = engine(), target = { ...fixture(), projection };
  const p = e.send({ type: 'prepareMany', profile: 'fishnet', targets: [target,
    { ...target, id: 'view-b', projection: { ...projection, mapBearing: 50 } }] });
  assert.ok(p.targets.every(t => t.fishnet.mode === 'image-only'));
  const crossNode = e.send({ type: 'prepareMany', profile: 'fishnet', targets: [target, { ...target, id: 'other', nodeId: 'other-node' }] });
  assert.ok(crossNode.targets.every(t => t.fishnet.mode === 'image-only'));
  const d = e.send({ type: 'detect', profile: 'fishnet', ...target });
  assert.equal(d.detection, null); assert.equal(d.diagnostics.reason, 'ambiguous');
});

test('both profiles reject a blank frame and unrelated noise without relaxing safety thresholds', () => {
  for (const profile of ['legacy', 'fishnet']) {
    const e = engine(), target = fixture();
    e.send({ type: 'prepareMany', profile, targets: [target] });
    const pixels = new Uint8Array(target.width * target.height * 4); pixels.fill(245);
    const blank = e.send({ type: 'detect', profile, ...target, pixels: pixels.buffer });
    assert.equal(blank.detection, null); assert.equal(blank.diagnostics.reason, 'few_features');
    let seed = 97531;
    for (let i = 0; i < pixels.length; i++) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; pixels[i] = seed >>> 24;
    }
    const unrelated = e.send({ type: 'detect', profile, ...target, pixels: pixels.buffer });
    assert.equal(unrelated.detection, null);
  }
});
