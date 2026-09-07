import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile, writeFile, mkdtemp, mkdir} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// Synthetic fixtures only. The test backend is a fresh temporary directory;
// no real field photographs or backend writes are needed for these scenarios.
const rootDir = path.resolve(import.meta.dirname, '..');
const output = path.join(rootDir, 'test-output/fishnet');
const playwrightPath = process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath).href);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const fingerprint = async file => readFile(file).then(hash).catch(error => {
  if (error.code === 'ENOENT') return null;
  throw error;
});
const protectedFiles = ['ar-data.json', '.local/ar-v4/ar-data.json', 'ar-v3.html'];
const before = await Promise.all(protectedFiles.map(file => fingerprint(path.join(rootDir, file))));
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'v4-fishnet-browser-'));
const report = {passed: false, scenarios: [], errors: [], externalRequests: [], writes: [], rawPublicRequests: [], limitations: [
  'Synthetic images and an isolated loopback backend only; no on-site accuracy measurement.',
  'A/B input is an unstored synthetic crop, not an independent real-world camera viewpoint.',
  'Desktop Chromium checks do not certify Safari, LINE, physical camera permissions, or IMU quality.',
  'Image/direction indexing only; no XYZ pose, automatic arrival, VPS purchase, or production deployment.',
]};
const pass = message => {report.scenarios.push(message); console.log('PASS ' + message);};
let browser, local, page, publicPage;

// Observe the actual worker inputs/results without changing the matcher.
// A small deterministic fingerprint proves that A/B receives identical pixels.
function instrument({cameraFrame, originalImages, fakeCamera}) {
  window.__fishnetTest = {cameraCalls: 0, sensorCalls: 0, inputs: [], results: [], prepares: [], originalImageLoads: []};
  const state = window.__fishnetTest;
  const imageSrc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    ...imageSrc,
    set(value) {if (originalImages.includes(value)) state.originalImageLoads.push(value.slice(0, 40)); return imageSrc.set.call(this, value);},
  });
  const NativeWorker = window.Worker;
  window.Worker = class extends NativeWorker {
    constructor(...args) {
      super(...args);
      this.requests = new Map();
      this.addEventListener('message', event => {
        const request = this.requests.get(event.data?.requestId);
        if (!request) return;
        this.requests.delete(event.data.requestId);
        if (request.type === 'detect') state.results.push({profile: request.profile, ...event.data});
        if (request.type === 'prepareMany' || request.type === 'preparePacked') state.prepares.push({profile: request.profile, type: request.type, ...event.data});
      });
    }
    postMessage(message, ...args) {
      const profile = message.profile || 'legacy';
      this.requests.set(message.requestId, {type: message.type, profile});
      if (message.type === 'detect') {
        const pixels = new Uint8Array(message.pixels);
        let fingerprint = 2166136261;
        for (const byte of pixels) fingerprint = Math.imul(fingerprint ^ byte, 16777619) >>> 0;
        state.inputs.push({profile, width: message.width, height: message.height, fingerprint});
      }
      return super.postMessage(message, ...args);
    }
  };
  for (const type of [window.DeviceOrientationEvent, window.DeviceMotionEvent]) {
    if (type) Object.defineProperty(type, 'requestPermission', {configurable: true, value: async () => {state.sensorCalls++; return 'denied';}});
  }
  Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {configurable: true, value: async () => {
    state.cameraCalls++;
    if (!fakeCamera) throw new DOMException('Static fixture must not open camera', 'NotAllowedError');
    const image = await new Promise((resolve, reject) => {const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = cameraFrame;});
    const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
    const context = canvas.getContext('2d');
    const paint = () => {context.drawImage(image, 0, 0); requestAnimationFrame(paint);}; paint();
    const stream = canvas.captureStream(12); window.__fishnetStream = stream; return stream;
  }});
}

async function guard(page, isPublic = false) {
  page.on('pageerror', error => report.errors.push(error.message));
  page.setDefaultTimeout(30_000);
  await page.route('**/*', route => {
    const request = route.request(), url = new URL(request.url());
    if (url.origin !== local.origin) {report.externalRequests.push(url.href); return route.abort();}
    if (request.method() !== 'GET') {report.writes.push({method: request.method(), path: url.pathname}); return route.abort();}
    if (isPublic && ['/ar-data.json', '/api/ar-content'].includes(url.pathname)) {report.rawPublicRequests.push(url.pathname); return route.abort();}
    return route.continue();
  });
}
async function snapshot(page, name) {
  const overflow = await page.evaluate(() => ({viewport: innerWidth, page: document.documentElement.scrollWidth}));
  assert.ok(overflow.page <= overflow.viewport, `${name}: horizontal overflow ${JSON.stringify(overflow)}`);
  await page.screenshot({path: path.join(output, `${name}.png`), fullPage: true});
}
async function resultCount(page) {return page.evaluate(() => window.__fishnetTest.results.length);}
async function waitForResult(page, previous) {
  await page.waitForFunction(previous => window.__fishnetTest.results.length > previous, previous);
  const result = await page.evaluate(() => window.__fishnetTest.results.at(-1));
  assert.equal(result.ok, true, result.error || 'worker response');
  return result;
}
async function replay(page, profile) {
  const button = page.getByRole('button', {name: profile === 'fishnet' ? 'Fishnet 試驗' : '原版對照', exact: true});
  const previous = await resultCount(page);
  await button.click();
  assert.equal(await button.getAttribute('aria-pressed'), 'true');
  assert.equal(await resultCount(page), previous, 'switching profile does not secretly start a camera or replay');
  await page.getByRole('button', {name: '重跑這張測試照', exact: true}).click();
  return waitForResult(page, previous);
}
async function openInspector(page) {
  const inspector = page.locator('.v4-recognition-inspector');
  await inspector.waitFor();
  if (await inspector.getAttribute('open') === null) await inspector.locator(':scope > summary').click();
  return inspector;
}
function assertDisplaySummary(summary, label, featureCount) {
  assert.ok(summary, `${label}: Fishnet summary exists`);
  assert.ok(summary.features.length <= 96, `${label}: diagnostic display is capped at 96 points`);
  assert.ok(summary.featureTotal >= summary.features.length, `${label}: total retains all feature observations`);
  assert.equal(summary.cells.reduce((total, cell) => total + cell.count, 0), summary.featureTotal, `${label}: view cell counts retain the full total`);
  assert.equal(summary.referenceCells.reduce((total, cell) => total + cell.count, 0), summary.featureTotal, `${label}: reference cell counts retain the full total`);
  assert.equal(summary.featureSampled, summary.featureTotal > summary.features.length, `${label}: sampling flag describes the display`);
  if (featureCount !== undefined) assert.equal(summary.featureTotal, featureCount, `${label}: descriptor feature count is unchanged`);
}

try {
  // No security-disabling arguments: an environment denial must fail visibly.
  browser = await chromium.launch({executablePath: process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true});
  await mkdir(output, {recursive: true});
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => {
    const picture = seed => {
      const canvas = document.createElement('canvas'); canvas.width = 420; canvas.height = 315;
      const context = canvas.getContext('2d'); context.fillStyle = '#efe8d6'; context.fillRect(0, 0, 420, 315);
      let random = seed; const rand = () => {random = (random * 1664525 + 1013904223) >>> 0; return random / 4294967296;};
      for (let i = 0; i < 190; i++) {context.fillStyle = `hsl(${rand() * 360},60%,${15 + rand() * 50}%)`; context.fillRect(rand() * 400, rand() * 295, 4 + rand() * 18, 4 + rand() * 18);}
      context.fillStyle = '#172821'; context.font = 'bold 26px sans-serif'; context.fillText('FISHNET ' + seed, 25, 165); return canvas;
    };
    const reference = picture(37), old = picture(93);
    const crop = document.createElement('canvas'); crop.width = 320; crop.height = 280; crop.getContext('2d').drawImage(reference, -50, -20);
    const map = document.createElement('canvas'); map.width = 400; map.height = 300;
    const context = map.getContext('2d'); context.fillStyle = '#f1f4ed'; context.fillRect(0, 0, 400, 300); context.strokeStyle = '#c4c9c0'; context.lineWidth = 55; context.beginPath(); context.moveTo(50, 240); context.lineTo(330, 240); context.lineTo(330, 70); context.stroke();
    return {reference: reference.toDataURL('image/png'), old: old.toDataURL('image/png'), query: crop.toDataURL('image/png'), map: map.toDataURL('image/png')};
  });
  await maker.close();
  assert.notEqual(images.query, images.reference, 'the query is not the stored reference image');
  const observation = yaw => ({id: `pano-${yaw}`, source: 'panorama-frame', capturedAt: '2026-09-07T00:00:00Z', imageUrl: images.reference, width: 420, height: 315, mapBearing: 0, headingSource: 'manual', panorama: {batchId: 'synthetic-seam', yaw, pitch: 0, fov: 75}});
  const fixture = {version: '7.1', activeProjectId: 'fishnet-test', projects: [{project: {id: 'fishnet-test', name: 'Fishnet 隔離測試'}, systemConfig: {}, buildings: [{id: 'building', name: '合成館', floors: [{id: 'floor', name: '1F', imageUrl: images.map, bounds: {blX: 0, blY: 0, trX: 40, trY: 30}, mapUpHeading: 0, markers: [
    {id: 'a', code: 'A', title: '環景入口', x: .125, y: .8, enabled: true, navigable: true, guideReferenceBearing: 90, fieldObservations: [observation(0), observation(360)]},
    {id: 'b', code: 'B', title: '舊照片服務台', x: .825, y: .8, enabled: true, navigable: true, imageUrl: images.old},
  ], waypoints: [], edges: [{id: 'ab', start: 'a', end: 'b'}]}]}]}]};
  const fixtureText = JSON.stringify(fixture);
  assert.ok(!fixtureText.includes(images.query), 'query must remain absent from the reference catalog');
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureText);
  local = await startLocalServer({port: 0, rootDir, dataDir});
  page = await browser.newPage({viewport: {width: 390, height: 844}});
  await guard(page);
  await page.addInitScript(instrument, {cameraFrame: images.query, originalImages: [images.reference, images.old], fakeCamera: false});
  await page.goto(local.origin + '/ar-v4-field.html');
  await page.locator('.flow-draft-status').filter({hasText: '已暫存'}).waitFor();
  await page.getByRole('button', {name: '功能選單', exact: true}).click();
  await page.getByRole('dialog', {name: '六大功能'}).getByRole('button', {name: '相機測試', exact: true}).click();
  await page.getByRole('button', {name: '照片定位測試', exact: true}).click();
  assert.equal(await page.getByRole('button', {name: 'Fishnet 試驗', exact: true}).getAttribute('aria-pressed'), 'true');
  const chooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('button', {name: '匯入測試照', exact: true}).click();
  await (await chooserPromise).setFiles({name: 'unstored-query.png', mimeType: 'image/png', buffer: Buffer.from(images.query.split(',')[1], 'base64')});
  const fishnetFirst = await waitForResult(page, 0);
  assert.equal(fishnetFirst.profile, 'fishnet');
  assert.ok(fishnetFirst.result.diagnostics.fishnet, 'real worker returns Fishnet diagnostics');
  assert.ok(['a:pano-0', 'a:pano-360'].includes(fishnetFirst.result.detection?.targetId), 'Fishnet accepts the synthetic partial-view positive');
  const prepared = await page.evaluate(() => window.__fishnetTest.prepares.at(-1).result);
  for (const target of prepared.targets) assertDisplaySummary(target.fishnet, `field preparation ${target.id}`, target.featureCount);
  assert.ok(prepared.targets.some(target => target.fishnet.featureTotal > 96), 'fixture exercises capped display metadata');
  assertDisplaySummary(fishnetFirst.result.diagnostics.fishnet, 'field detection');
  assert.equal(fishnetFirst.result.diagnostics.matchCount, 90, 'display sampling leaves known full matcher output unchanged');
  assert.equal(fishnetFirst.result.diagnostics.inliers, 90, 'display sampling leaves full verified matches unchanged');
  report.displayMetadata = prepared.targets.map(target => ({id: target.id, featureTotal: target.fishnet.featureTotal, displayed: target.fishnet.features.length, featureSampled: target.fishnet.featureSampled}));
  pass('diagnostic display is capped at 96 points while descriptor totals, cell counts, and all 90 matches remain intact');
  const zero = prepared.targets.find(target => target.id === 'a:pano-0')?.fishnet;
  const fullTurn = prepared.targets.find(target => target.id === 'a:pano-360')?.fishnet;
  const old = prepared.targets.find(target => target.id === 'b:v3')?.fishnet;
  assert.equal(zero?.mode, 'panorama'); assert.equal(fullTurn?.mode, 'panorama');
  assert.equal(zero.projection.panoramaId, fullTurn.projection.panoramaId);
  assert.deepEqual(zero.referenceCells, fullTurn.referenceCells, '0 and 360 degree views share spherical reference cells');
  const sphericalFeatures = summary => summary.features.map(({u, v, yaw, pitch, mapYaw, referenceCell}) => ({u, v, yaw, pitch, mapYaw, referenceCell}));
  assert.deepEqual(sphericalFeatures(zero), sphericalFeatures(fullTurn), 'overlapping equivalent views produce identical UV and direction data');
  assert.equal(old?.mode, 'image-only'); assert.equal(old.projection, null);
  assert.ok(old.features.length > 0);
  for (const point of old.features) {
    assert.deepEqual(point.referenceCell, point.viewCell);
    for (const field of ['u', 'v', 'yaw', 'pitch', 'mapYaw']) assert.equal(point[field], null, `legacy ${field} must not be invented`);
  }
  pass('real worker preserves 0/360 overlap UV and cell IDs, while metadata-free legacy photos stay image-only');
  const legacy = await replay(page, 'legacy');
  assert.equal(legacy.profile, 'legacy');
  assert.equal(legacy.result.diagnostics.fishnet, undefined);
  assert.ok(['a:pano-0', 'a:pano-360'].includes(legacy.result.detection?.targetId), 'legacy accepts the same synthetic partial-view positive');
  await replay(page, 'fishnet');
  const inputs = await page.evaluate(() => window.__fishnetTest.inputs);
  assert.deepEqual(inputs.map(({profile, ...input}) => input), [inputs[0], inputs[0], inputs[0]].map(({profile, ...input}) => input));
  assert.deepEqual(inputs.map(input => input.profile), ['fishnet', 'legacy', 'fishnet']);
  report.trials = [fishnetFirst, legacy].map(({profile, result}) => ({profile, queryPngSha256: hash(Buffer.from(images.query.split(',')[1], 'base64')), targetId: result.detection?.targetId || null,
    reason: result.diagnostics.reason, frameFeatures: result.diagnostics.frameFeatures, matchCount: result.diagnostics.matchCount, inliers: result.diagnostics.inliers,
    frameWidth: result.diagnostics.frameWidth, frameHeight: result.diagnostics.frameHeight}));
  const permissions = await page.evaluate(() => ({camera: window.__fishnetTest.cameraCalls, sensor: window.__fishnetTest.sensorCalls}));
  assert.deepEqual(permissions, {camera: 0, sensor: 0});
  pass('A/B/A replays the same unstored pixels without camera or sensor permission');

  await openInspector(page);
  const panel = page.locator('.v4-fishnet-panel'); await panel.waitFor();
  const cells = panel.locator('[data-fishnet-cell]'); await cells.first().waitFor();
  const cellId = await cells.first().getAttribute('data-fishnet-cell');
  await cells.first().click();
  const selectedTarget = prepared.targets.find(target => target.id === fishnetFirst.result.diagnostics.targetId);
  const fullCellCount = selectedTarget.fishnet.cells.find(cell => cell.id === cellId)?.count || 0;
  assert.equal(Number(await panel.locator('.v4-fishnet-cell-info dl > div').first().locator('dd').innerText()), fullCellCount, 'selected cell displays the full feature count rather than sampled dots');
  await panel.locator('.v4-fishnet-cell-info').getByText('格 ID 與參考方向', {exact: true}).click();
  assert.ok((await panel.locator('.v4-fishnet-cell-info').innerText()).includes(cellId), 'selecting a cell displays its stable ID');
  const gridToggle = panel.getByLabel('顯示 Fishnet 格線', {exact: true});
  await gridToggle.uncheck(); assert.equal(await gridToggle.isChecked(), false);
  assert.equal(await cells.count(), 0, 'hiding grid removes interactive grid overlay');
  await gridToggle.check();
  await panel.getByLabel('只顯示特徵參數', {exact: true}).check();
  assert.equal(await panel.locator('.v4-fishnet-reference img').count(), 0, 'parameter-only mode omits the photo');
  for (const width of [390, 1280]) {await page.setViewportSize({width, height: 900}); await snapshot(page, `field-${width}`);}
  await panel.getByLabel('查看 Fishnet 參考', {exact: true}).selectOption('b:v3');
  assert.match(await panel.locator('.v4-fishnet-heading').first().innerText(), /image-only/);
  await panel.getByLabel('選取 Fishnet 參考格', {exact: true}).selectOption({index: 2});
  await panel.locator('.v4-fishnet-cell-info').getByText('格 ID 與參考方向', {exact: true}).click();
  assert.match(await panel.locator('.v4-fishnet-cell-info').innerText(), /影像格 · 無環景方位/);
  await page.setViewportSize({width: 390, height: 844}); await snapshot(page, 'field-legacy-image-only');
  pass('Fishnet reference grid supports cell IDs, visibility, parameter-only display, and 390/1280 layouts');

  const seam = await page.evaluate(async source => {
    const image = await new Promise((resolve, reject) => {const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = source;});
    const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0);
    const worker = new Worker('/assets/ar-v4/partial-recognition-worker.js');
    try {
      const result = await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(Error('seam worker timeout')), 20_000);
        worker.onmessage = event => {clearTimeout(timeout); event.data.ok ? resolve(event.data.result) : reject(Error(event.data.error));};
        worker.onerror = error => {clearTimeout(timeout); reject(Error(error.message));};
        worker.postMessage({type: 'prepareMany', requestId: 1, profile: 'fishnet', targets: [180, -180].map(yaw => ({
          id: 'seam-' + yaw, nodeId: 'seam', width: canvas.width, height: canvas.height,
          pixels: canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data.buffer,
          projection: {panoramaId: 'synthetic-uv-seam', yaw, pitch: 0, fov: 75, mapBearing: 0},
        }))});
      });
      return result.targets.map(target => ({cells: target.fishnet.referenceCells, points: target.fishnet.features.map(({u, v, referenceCell}) => ({u, v, referenceCell}))}));
    } finally {worker.terminate();}
  }, images.reference);
  assert.deepEqual(seam[0], seam[1], '+180 and -180 views overlap across the panorama UV seam');
  assert.ok(seam[0].points.some(point => point.u < .03) && seam[0].points.some(point => point.u > .97), 'fixture covers both sides of U=0/1');
  assert.ok(seam[0].points.every(point => point.u >= 0 && point.u < 1 && point.v >= 0 && point.v <= 1), 'panorama UV remains in its valid wrapped range');
  assert.ok(seam[0].cells.some(cell => cell.col === 0) && seam[0].cells.some(cell => cell.col === 35), 'both adjacent seam columns retain features');
  pass('browser worker wraps the U=0/1 seam and preserves overlap across equivalent 360-degree directions');

  // The public UI must use compiled packs even while its diagnostic panel is open.
  publicPage = await browser.newPage({viewport: {width: 390, height: 844}});
  await guard(publicPage, true);
  await publicPage.addInitScript(instrument, {cameraFrame: images.query, originalImages: [images.reference, images.old], fakeCamera: true});
  await publicPage.goto(local.origin + '/ar-v4-navigation.html?projectId=fishnet-test&origin=a');
  await publicPage.getByRole('combobox').selectOption('b');
  await publicPage.getByRole('button', {name: '開啟 AR 導引', exact: true}).click();
  assert.equal(await publicPage.evaluate(() => window.__fishnetTest.cameraCalls), 0);
  await publicPage.getByRole('button', {name: '開啟相機與方向感測', exact: true}).click();
  await waitForResult(publicPage, 0);
  await publicPage.getByText('辨識診斷與搜尋範圍', {exact: true}).click();
  await openInspector(publicPage);
  await publicPage.locator('.v4-fishnet-reference').waitFor();
  const publicPanel = publicPage.locator('.v4-fishnet-panel');
  await publicPanel.locator('.v4-feature-pair > figure').nth(1).waitFor();
  const publicPrepared = await publicPage.evaluate(() => window.__fishnetTest.prepares.at(-1).result);
  for (const target of publicPrepared.targets) assertDisplaySummary(target.fishnet, `public preparation ${target.id}`, target.featureCount);
  assertDisplaySummary(await publicPage.evaluate(() => window.__fishnetTest.results.at(-1).result.diagnostics.fishnet), 'public detection');
  assert.equal(await publicPanel.getByLabel('只顯示特徵參數', {exact: true}).isChecked(), true);
  assert.equal(await publicPanel.getByLabel('只顯示特徵參數', {exact: true}).isDisabled(), true);
  assert.equal(await publicPanel.locator('.v4-fishnet-reference img').count(), 0, 'precompiled reference has no original image');
  assert.ok(await publicPanel.locator('svg circle').count() > 0, 'precompiled reference contains feature points');
  assert.ok(await publicPanel.locator('.v4-fishnet-reference .v4-fishnet-sparse-points circle').count() <= 96, 'public sparse display uses the bounded diagnostic points');
  assert.deepEqual(await publicPage.evaluate(() => window.__fishnetTest.originalImageLoads), []);
  assert.equal(await publicPage.evaluate(() => window.__fishnetTest.prepares.filter(item => item.type === 'prepareMany').length), 0);
  for (const width of [390, 1280]) {
    await publicPage.setViewportSize({width, height: 900});
    await publicPanel.locator('.v4-fishnet-reference').scrollIntoViewIfNeeded();
    await snapshot(publicPage, `public-${width}`);
  }
  assert.equal(await publicPage.locator('.v4-arrival').isDisabled(), true, 'recognizing the origin never triggers destination arrival');
  assert.match(await publicPage.locator('header').innerText(), /最後確認：環景入口/);
  await publicPage.getByRole('button', {name: '原版對照', exact: true}).click();
  await publicPage.waitForFunction(() => window.__fishnetTest.results.at(-1)?.profile === 'legacy');
  const legacyPreparation = await publicPage.evaluate(() => window.__fishnetTest.prepares.at(-1));
  assert.equal(legacyPreparation.type, 'preparePacked'); assert.equal(legacyPreparation.profile, 'legacy');
  assert.equal(await publicPage.evaluate(() => window.__fishnetTest.cameraCalls), 1, 'public A/B keeps the same explicit camera session');
  assert.deepEqual(await publicPage.evaluate(() => window.__fishnetTest.originalImageLoads), []);
  pass('public Fishnet renders reference parameters from packs without original photos or automatic arrival');

  assert.deepEqual(report.rawPublicRequests, []);
  assert.deepEqual(report.writes, []);
  assert.deepEqual(report.externalRequests, []);
  assert.deepEqual(report.errors, []);
  assert.equal(await readFile(path.join(dataDir, 'ar-data.json'), 'utf8'), fixtureText);
  assert.deepEqual(await Promise.all(protectedFiles.map(file => fingerprint(path.join(rootDir, file)))), before);
  pass('isolated fixture, real data, V3 entry, and existing local backend remain unchanged');
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error);
  if (page) {await mkdir(output, {recursive: true}); await page.screenshot({path: path.join(output, 'FAIL-field.png'), fullPage: true}).catch(() => {});}
  if (publicPage) await publicPage.screenshot({path: path.join(output, 'FAIL-public.png'), fullPage: true}).catch(() => {});
  console.error(report.failure); process.exitCode = 1;
} finally {
  await browser?.close(); await local?.close();
  await mkdir(output, {recursive: true});
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}
