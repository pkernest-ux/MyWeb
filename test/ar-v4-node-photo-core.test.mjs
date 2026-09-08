import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../src/ar-v4-node-photo-core.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
const { nodePhotoGroups, firstNodePhoto, nodePhotoCaption } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const picture = (id, changes = {}) => ({ id, source: 'panorama-frame', imageUrl: `/test-${id}.jpg`, capturedAt: '2026-09-08T06:10:13.891Z',
  mapBearing: 9, panorama: { batchId: 'batch-a', yaw: 0, pitch: 0, fov: 75 }, ...changes });
const frame = (yaw, batchId = 'batch-a', changes = {}) => picture(`${batchId}-${yaw}`, {
  mapBearing: (yaw + 9) % 360, panorama: { batchId, yaw, pitch: 0, fov: 75 }, ...changes });

test('latest valid capture timestamp selects the latest batch rather than array order', () => {
  const groups = nodePhotoGroups([frame(0, 'new', { capturedAt: '2026-09-08T07:00:00Z' }), frame(0, 'old'), frame(0, 'unknown', { capturedAt: 'yesterday' })]);
  assert.deepEqual(groups.map(group => JSON.parse(group.key)[1]), ['new', 'old', 'unknown']);
  assert.equal(groups[2].capturedAt, null);
});

test('a newer ordinary photo stays selectable without displacing the panorama zero default', () => {
  const groups = nodePhotoGroups([frame(0), picture('later-camera', { source: 'camera', capturedAt: '2026-09-08T08:00:00Z' }),
    picture('later-upload', { source: 'upload', capturedAt: '2026-09-08T09:00:00Z' })]);
  assert.equal(groups[0].kind, 'panorama');
  assert.equal(firstNodePhoto(groups[0]).yaw, 0);
  assert.deepEqual(groups.slice(1).map(group => group.photos[0].source), ['upload', 'camera']);
});

test('eight reversed frames sort by panorama yaw and default to the actual zero view', () => {
  const groups = nodePhotoGroups([315, 270, 225, 180, 135, 90, 45, 0].map(yaw => frame(yaw)));
  assert.equal(groups.length, 1);
  assert.equal(groups[0].kind, 'panorama');
  assert.deepEqual(groups[0].photos.map(photo => photo.yaw), [0, 45, 90, 135, 180, 225, 270, 315]);
  assert.equal(firstNodePhoto(groups[0]).mapBearing, 9);
  assert.equal(nodePhotoCaption(firstNodePhoto(groups[0])), '環景 0° · 地圖 9°');
});

test('missing map direction stays unknown instead of becoming map north', () => {
  for (const mapBearing of [null, undefined, NaN, Infinity, '0', '']) {
    const photo = firstNodePhoto(nodePhotoGroups([frame(0, 'a', { mapBearing })])[0]);
    assert.equal(photo.mapBearing, null);
    assert.equal(nodePhotoCaption(photo), '環景 0° · 地圖方向待確認');
  }
});

test('valid wrapped yaw sorts without inventing a zero when the batch lacks one', () => {
  const group = nodePhotoGroups([frame(-45), frame(405)])[0];
  assert.deepEqual(group.photos.map(photo => photo.yaw), [45, 315]);
  assert.equal(firstNodePhoto(group).yaw, 45);
  assert.match(nodePhotoCaption(firstNodePhoto(group)), /^環景 45°/);
  assert.equal(firstNodePhoto(nodePhotoGroups([frame(360)])[0]).yaw, 0);
});

test('missing or invalid yaw never joins a batch and is not labelled as zero', () => {
  const records = [undefined, null, NaN, Infinity, '0'].map((yaw, index) => picture(`missing-${index}`, { panorama: { batchId: 'batch-a', yaw } }));
  const groups = nodePhotoGroups([frame(0), ...records]);
  assert.equal(groups.length, 6);
  assert.equal(groups.filter(group => group.kind === 'panorama').length, 1);
  for (const group of groups.filter(group => group.kind === 'photo')) {
    assert.equal(group.photos[0].yaw, null);
    assert.match(nodePhotoCaption(group.photos[0]), /^環景角度未記錄/);
  }
});

test('legacy panorama views without a valid batch id remain independent', () => {
  const records = [undefined, null, '', ' bad ', 'bad\n', 'x'.repeat(129)].map((batchId, index) => picture(`legacy-${index}`, { panorama: { batchId, yaw: 0 } }));
  const groups = nodePhotoGroups(records);
  assert.equal(groups.length, records.length);
  assert.ok(groups.every(group => group.kind === 'photo' && group.photos.length === 1));
  assert.equal(new Set(groups.map(group => group.key)).size, records.length);
});

test('camera and uploaded images remain selectable single photos and ignore stray panorama fields', () => {
  const groups = nodePhotoGroups([picture('camera', { source: 'camera' }), picture('upload', { source: 'upload' }), frame(0)]);
  assert.equal(groups.length, 3);
  for (const group of groups.filter(group => group.kind === 'photo')) {
    assert.equal(group.photos[0].yaw, null);
    assert.doesNotMatch(nodePhotoCaption(group.photos[0]), /環景/);
  }
});

test('invalid sources, missing images and malformed collections are ignored safely', () => {
  for (const value of [null, undefined, {}, 'bad']) assert.deepEqual(nodePhotoGroups(value), []);
  assert.deepEqual(nodePhotoGroups([null, [], {}, picture('bad', { source: 'vps' }), picture('blank', { imageUrl: ' ' }), picture('none', { imageUrl: null })]), []);
});

test('grouping and selection do not mutate observations, angles or legacy image fields', () => {
  const observations = [frame(315), frame(0), frame(-45, 'batch-b')];
  const node = { id: 'node-1', imageUrl: 'legacy-main', guideImageUrl: 'legacy-guide', fieldObservations: observations };
  const before = structuredClone(node);
  for (const observation of observations) { Object.freeze(observation.panorama); Object.freeze(observation); }
  Object.freeze(observations); Object.freeze(node);
  const groups = nodePhotoGroups(node.fieldObservations);
  for (const group of groups) nodePhotoCaption(firstNodePhoto(group));
  assert.deepEqual(node, before);
  assert.notEqual(groups[0].photos, observations);
});
