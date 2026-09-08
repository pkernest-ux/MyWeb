import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile, writeFile, mkdir, mkdtemp} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// Synthetic views + an isolated temporary backend. The real worker is only
// paced at its request boundary; matcher/estimator responses are never forged.
const rootDir = path.resolve(import.meta.dirname, '..');
const output = path.join(rootDir, 'test-output/visual-heading');
const {chromium} = await import(pathToFileURL(process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs').href);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fingerprint = file => readFile(path.join(rootDir, file)).then(sha).catch(error => {if (error.code === 'ENOENT') return null; throw error;});
const protectedFiles = ['ar-data.json', '.local/ar-v4/ar-data.json', '.local/ar-v4-fishnet/ar-data.json', 'ar-v3.html'];
const before = await Promise.all(protectedFiles.map(fingerprint));
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'v4-heading-browser-'));
const report = {passed: false, checks: [], pageErrors: [], externalRequests: [], writes: [], rawRequests: [], measurements: [], limitations: [
  'Synthetic overlapping image crops test integration, not accuracy after real camera translation or across rooms.',
  'Desktop Chromium with explicit media/orientation mocks; not Safari, LINE, physical sensors, or permission UI validation.',
  'Heading is approximate and relative to a calibrated map; this test does not demonstrate XYZ pose, distance, or automatic arrival.',
]};
const pass = message => {report.checks.push(message); console.log('PASS ' + message);};
let browser, local, page;

function mockMedia({queries, originals, sensorGranted}) {
  const state = window.__headingTest = {cameraCalls: 0, permissionCalls: 0, scene: 0, alpha: 270, beta: 90, gamma: 0, sensorGranted, prepares: [], results: [], originalImageLoads: [], queue: []};
  const descriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {...descriptor, set(value) {if (originals.includes(value)) state.originalImageLoads.push(value.slice(0, 40)); return descriptor.set.call(this, value);}});
  const NativeWorker = window.Worker;
  window.Worker = class extends NativeWorker {
    constructor(...args) {
      super(...args); this.requestTypes = new Map();
      this.addEventListener('message', event => {
        const type = this.requestTypes.get(event.data?.requestId);
        if (type === 'detect') state.results.push(event.data);
        if (type === 'preparePacked' || type === 'prepareMany') state.prepares.push({type, ...event.data});
      });
    }
    postMessage(message, ...args) {
      this.requestTypes.set(message.requestId, message.type);
      if (message.type === 'detect') state.queue.push({worker: this, message, args});
      else super.postMessage(message, ...args);
    }
    release(message, args) {super.postMessage(message, ...args);}
    terminate() {state.queue = state.queue.filter(item => item.worker !== this); super.terminate();}
  };
  window.__releaseHeadingFrame = () => {const item = state.queue.shift(); if (!item) throw Error('No pending frame'); item.worker.release(item.message, item.args);};
  Object.defineProperty(window.DeviceOrientationEvent, 'requestPermission', {configurable: true, value: async () => {state.permissionCalls++; return sensorGranted ? 'granted' : 'denied';}});
  Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {configurable: true, value: async () => {
    state.cameraCalls++;
    const loaded = await Promise.all(queries.map(src => new Promise((resolve, reject) => {const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = src;})));
    const canvas = document.createElement('canvas'); canvas.width = 400; canvas.height = 360;
    const context = canvas.getContext('2d');
    const paint = () => {context.fillStyle = '#fafafa'; context.fillRect(0, 0, 400, 360); if (state.scene >= 0) context.drawImage(loaded[state.scene], 0, 0); requestAnimationFrame(paint);};
    paint(); const stream = canvas.captureStream(15); window.__headingStream = stream; return stream;
  }});
  const emitOrientation = () => {
    if (state.sensorGranted) window.dispatchEvent(new DeviceOrientationEvent('deviceorientation', {alpha: state.alpha, beta: state.beta, gamma: state.gamma, absolute: false}));
  };
  const register = window.addEventListener.bind(window);
  window.addEventListener = (type, listener, ...options) => {register(type, listener, ...options); if (type === 'deviceorientation') queueMicrotask(emitOrientation);};
  setInterval(emitOrientation, 100);
}
async function guardedPage(images, sensorGranted = true, field = false) {
  const page = await browser.newPage({viewport: {width: 390, height: 844}});
  page.setDefaultTimeout(25000); page.on('pageerror', e => report.pageErrors.push(e.message));
  await page.route('**/*', route => {
    const request = route.request(), url = new URL(request.url());
    if (url.origin !== local.origin) {report.externalRequests.push(url.href); return route.abort();}
    if (request.method() !== 'GET') {report.writes.push({method: request.method(), path: url.pathname}); return route.abort();}
    if (!field && ['/ar-data.json', '/api/ar-content'].includes(url.pathname)) {report.rawRequests.push(url.pathname); return route.abort();}
    return route.continue();
  });
  await page.addInitScript(mockMedia, {queries: images.queries, originals: images.references, sensorGranted});
  return page;
}
async function start(page, projectId) {
  await page.goto(local.origin + '/ar-v4-navigation.html?projectId=' + projectId + '&origin=a');
  await page.getByRole('combobox').selectOption('b');
  await page.getByRole('button', {name: '開啟 AR 導引', exact: true}).click();
  assert.equal(await page.evaluate(() => window.__headingTest.cameraCalls), 0);
  await page.getByRole('button', {name: '開啟相機與方向感測', exact: true}).click();
  await page.waitForFunction(() => window.__headingTest.queue.length > 0);
  // Acquisition diagnostics remain mounted inside the optional help dialog.
  await page.locator('.v4-heading-status').waitFor({state: 'attached'});
}
async function deliver(page) {
  await page.waitForFunction(() => window.__headingTest.queue.length > 0);
  const count = await page.evaluate(() => {const count = window.__headingTest.results.length; window.__releaseHeadingFrame(); return count;});
  await page.waitForFunction(count => window.__headingTest.results.length > count, count);
  const result = await page.evaluate(() => window.__headingTest.results.at(-1));
  assert.equal(result.ok, true, result.error); return result.result;
}
async function status(page, value) {await page.waitForFunction(value => document.querySelector('.v4-heading-status')?.getAttribute('data-status') === value, value, {timeout: 5000});}
async function arrow(page) {return page.locator('.v4-public-compass svg').evaluate(node => Number(/rotate\(([-\d.]+)deg\)/.exec(node.getAttribute('style') || '')?.[1]));}
async function snapshot(page, name) {
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ' horizontal overflow');
  await page.screenshot({path: path.join(output, name + '.png'), fullPage: true});
}
async function assertPrivateBoundary(page) {
  const state = await page.evaluate(() => ({cameraCalls: window.__headingTest.cameraCalls, permissions: window.__headingTest.permissionCalls, originals: window.__headingTest.originalImageLoads, prepares: window.__headingTest.prepares.map(p => p.type)}));
  assert.equal(state.cameraCalls, 1); assert.equal(state.permissions, 1); assert.deepEqual(state.originals, []);
  assert.ok(state.prepares.length > 0); assert.ok(state.prepares.every(type => type === 'preparePacked'));
}
try {
  await mkdir(output, {recursive: true});
  browser = await chromium.launch({executablePath: process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true});
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => {
    const reference = seed => {
      const c = document.createElement('canvas'); c.width = 640; c.height = 480; const x = c.getContext('2d'); x.fillStyle = '#e9eedc'; x.fillRect(0, 0, 640, 480);
      let s = seed; const rand = () => {s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296;};
      for (let i = 0; i < 400; i++) {x.fillStyle = `hsl(${rand() * 360},70%,${10 + rand() * 45}%)`; x.fillRect(10 + rand() * 610, 10 + rand() * 450, 5 + rand() * 24, 5 + rand() * 24);}
      x.fillStyle = '#101b2a'; x.font = 'bold 34px sans-serif'; x.fillText('HEADING ' + seed, 180, 250); return c;
    };
    const refs = [reference(37), reference(93)];
    const queries = refs.map(ref => {const c = document.createElement('canvas'); c.width = 400; c.height = 360; c.getContext('2d').drawImage(ref, -180, -60); return c.toDataURL('image/png');});
    const map = document.createElement('canvas'); map.width = 400; map.height = 300; const x = map.getContext('2d'); x.fillStyle = '#e9eff0'; x.fillRect(0, 0, 400, 300); x.strokeStyle = '#a1b1b8'; x.lineWidth = 40; x.beginPath(); x.moveTo(50, 200); x.lineTo(350, 200); x.stroke();
    return {references: refs.map(c => c.toDataURL('image/png')), queries, map: map.toDataURL('image/png')};
  });
  await maker.close();
  const project = calibrated => ({project: {id: calibrated ? 'calibrated' : 'missing-metadata', name: calibrated ? '合成環景定向' : '合成舊照退路'}, buildings: [{id: 'building', name: '測試館', floors: [{id: 'floor', name: '1F', imageUrl: images.map, navigationImageUrl: images.map, bounds: {blX: 0, blY: 0, trX: 40, trY: 30}, mapUpHeading: 0,
    markers: ['a', 'b'].map((id, i) => ({id, code: id.toUpperCase(), title: ['起點', '終點'][i], x: [.15, .85][i], y: .7, enabled: true, navigable: true, fieldObservations: [{id: 'ref-' + id, capturedAt: '2026-09-07T00:00:00Z', source: calibrated ? 'panorama-frame' : 'upload', imageUrl: images.references[i], width: 640, height: 480, mapBearing: 90, headingSource: 'manual', ...(calibrated ? {panorama: {yaw: 0, pitch: 0, fov: 75, batchId: 'synthetic-' + id}} : {})}]})), waypoints: [], edges: [{id: 'ab', start: 'a', end: 'b'}]}]}]});
  const fixture = {version: '7.1', activeProjectId: 'calibrated', projects: [project(true), project(false)]};
  const fixtureText = JSON.stringify(fixture); for (const query of images.queries) assert.ok(!fixtureText.includes(query), 'query must not be stored as reference');
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureText);
  local = await startLocalServer({port: 0, rootDir, dataDir});
  report.querySha256 = images.queries.map(query => sha(Buffer.from(query.split(',')[1], 'base64')));
  page = await guardedPage(images); await start(page, 'calibrated');
  assert.notEqual(await page.locator('.v4-heading-status').getAttribute('data-status'), 'tracking');
  let validMeasurements = 0;
  for (let attempt = 0; attempt < 4 && validMeasurements < 3; attempt++) {
    const result = await deliver(page); assert.ok(result.detection, 'synthetic crop yields a real matched target');
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(resolve)));
    const instant = await page.locator('.v4-heading-status').evaluate(node => ({status: node.dataset.status, heading: node.dataset.heading, hits: node.dataset.hits, detail: node.textContent}));
    report.measurements.push({frame: attempt + 1, targetId: result.detection.targetId, inliers: result.detection.inliers, ...instant});
    // A very fast first image can precede the newly-enabled orientation event.
    // Such a match must not count as visual+sensor evidence; pace onward promptly.
    if (Number(instant.hits) === 0) {assert.equal(attempt, 0, 'only an initial sensor warm-up frame may lack valid evidence'); assert.notEqual(instant.status, 'tracking'); continue;}
    validMeasurements++;
    await status(page, validMeasurements < 3 ? 'confirming' : 'tracking');
    assert.equal(Number(await page.locator('.v4-heading-status').getAttribute('data-hits')), validMeasurements, 'heading counts distinct accepted measurements');
    if (validMeasurements < 3) assert.match(await page.locator('.v4-public-compass').innerText(), /方向待校正/);
  }
  assert.equal(validMeasurements, 3);
  assert.match(await page.locator('.v4-heading-status').textContent(), /視覺定向（近似）/);
  const estimatedHeading = Number(await page.locator('.v4-heading-status').getAttribute('data-heading'));
  const expectedHeading = 90 + Math.atan((380 - 320) / (320 / Math.tan(75 * Math.PI / 360))) * 180 / Math.PI;
  assert.ok(Math.abs(estimatedHeading - expectedHeading) < 4, `off-centre crop optical heading ${estimatedHeading} differs from expected ${expectedHeading}`);
  assert.ok(Math.abs(estimatedHeading - 90) > 4, 'matched reference centre bearing must not substitute for optical centre');
  report.opticalHeading = {estimatedHeading, expectedHeading, referenceMapBearing: 90};
  pass('real Fishnet crop obtains automatic heading only after three consistent measurements, using optical centre rather than photo centre');
  assert.equal(await page.locator('.v4-arrival').isDisabled(), true); assert.match(await page.locator('header').innerText(), /最後確認：起點/);
  for (const width of [390, 1280]) {await page.setViewportSize({width, height: 844}); await snapshot(page, 'tracking-' + width);}
  // The camera view must stop matching before synthetic rotation; a static
  // photo paired with rotating sensors would be a physically inconsistent test.
  await page.evaluate(() => {window.__headingTest.scene = -1;});
  await deliver(page); // Flush any already-captured frame, keeping the same yaw.
  await page.waitForFunction(() => window.__headingTest.queue.length > 0);
  const blank = await deliver(page); assert.equal(blank.detection, null);
  const beforeTurn = await arrow(page);
  await page.evaluate(() => {window.__headingTest.alpha = 230;});
  await page.waitForFunction(before => {const svg = document.querySelector('.v4-public-compass svg'); const angle = Number(/rotate\(([-\d.]+)deg\)/.exec(svg?.getAttribute('style') || '')?.[1]); return Math.abs(angle - before) > 25;}, beforeTurn);
  const afterTurn = await arrow(page); assert.ok(Math.abs((afterTurn - beforeTurn) + 40) < 3, '40-degree sensor yaw remains visible between visual measurements');
  report.gyroTurn = {beforeTurn, afterTurn};
  assert.match(await page.locator('header').innerText(), /最後確認：起點/); assert.equal(await page.locator('.v4-arrival').isDisabled(), true);
  pass('blank scene preserves short-term sensor yaw without replaying an inconsistent visual heading or advancing location');
  await page.evaluate(() => {window.__headingTest.alpha = 270; window.__headingTest.scene = 1;});
  await deliver(page); // Flush a pending blank frame.
  for (let i = 0; i < 3; i++) await deliver(page);
  await page.waitForFunction(() => !document.querySelector('.v4-arrival')?.disabled);
  assert.match(await page.locator('header').innerText(), /最後確認：起點/); assert.equal(await page.getByRole('heading', {name: '已由您確認抵達'}).count(), 0);
  pass('seeing the endpoint enables only explicit arrival confirmation and never advances the confirmed location');
  await assertPrivateBoundary(page); await page.close();

  page = await guardedPage(images); await start(page, 'missing-metadata');
  for (let i = 0; i < 3; i++) await deliver(page);
  assert.notEqual(await page.locator('.v4-heading-status').getAttribute('data-status'), 'tracking'); assert.match(await page.locator('.v4-public-compass').innerText(), /方向待校正/);
  await page.getByRole('button', {name: '導引說明與校正', exact: true}).click();
  await page.getByText('辨識／方向需要協助', {exact: true}).click();
  const manual = page.getByRole('button', {name: '我已面向下一地標，校正方向', exact: true}); assert.equal(await manual.isEnabled(), true); await manual.click(); await status(page, 'manual');
  await page.getByRole('button', {name: '關閉導引說明', exact: true}).click();
  for (const width of [390, 1280]) {await page.setViewportSize({width, height: 844}); await snapshot(page, 'manual-' + width);}
  await assertPrivateBoundary(page); await page.close();
  pass('metadata-free upload references do not auto-orient even with mapBearing; explicit manual orientation remains available');

  page = await guardedPage(images, false); await start(page, 'calibrated');
  for (let i = 0; i < 3; i++) await deliver(page);
  assert.notEqual(await page.locator('.v4-heading-status').getAttribute('data-status'), 'tracking'); assert.match(await page.locator('.v4-public-compass').innerText(), /方向待校正/);
  await page.getByRole('button', {name: '導引說明與校正', exact: true}).click();
  await page.getByText('辨識／方向需要協助', {exact: true}).click();
  assert.equal(await page.getByRole('button', {name: '我已面向下一地標，校正方向', exact: true}).isDisabled(), true);
  await assertPrivateBoundary(page);
  await page.close();
  pass('denied orientation permission keeps visual recognition available but cannot fabricate fused heading');

  // A still import is analysis of that file, never a live orientation update.
  page = await guardedPage(images, false, true);
  await page.goto(local.origin + '/ar-v4-field.html');
  await page.locator('.flow-draft-status').filter({hasText: '已暫存'}).waitFor();
  await page.getByRole('button', {name: '功能選單', exact: true}).click();
  await page.getByRole('dialog', {name: '六大功能'}).getByRole('button', {name: '相機測試', exact: true}).click();
  await page.getByRole('button', {name: '照片定位測試', exact: true}).click();
  const chooser = page.waitForEvent('filechooser'); await page.getByRole('button', {name: '匯入測試照', exact: true}).click();
  await (await chooser).setFiles({name: 'unstored-heading-crop.png', mimeType: 'image/png', buffer: Buffer.from(images.queries[0].split(',')[1], 'base64')});
  const still = await deliver(page); assert.ok(still.detection);
  await page.locator('.v4-heading-status').waitFor();
  assert.notEqual(await page.locator('.v4-heading-status').getAttribute('data-status'), 'tracking');
  assert.match(await page.locator('.v4-heading-status').innerText(), /單張照片試算/);
  await page.locator('.v4-heading-status').getByLabel('查看方向估計說明', {exact: true}).click();
  assert.match(await page.locator('.v4-heading-status').innerText(), /不會套用現在手機的感測器或啟用導航/);
  assert.deepEqual(await page.evaluate(() => ({camera: window.__headingTest.cameraCalls, sensor: window.__headingTest.permissionCalls})), {camera: 0, sensor: 0});
  for (const width of [390, 1280]) {await page.setViewportSize({width, height: 844}); await page.locator('.v4-heading-status').scrollIntoViewIfNeeded(); await snapshot(page, 'field-still-' + width);}
  const inspector = page.locator('.v4-recognition-inspector');
  if (await inspector.getAttribute('open') === null) await inspector.locator(':scope > summary').click();
  page.once('dialog', dialog => dialog.accept());
  const downloadEvent = page.waitForEvent('download'); await page.getByRole('button', {name: '匯出這次辨識畫面', exact: true}).click();
  const capturePath = path.join(output, 'field-still-capture.json'); await (await downloadEvent).saveAs(capturePath);
  const capture = JSON.parse(await readFile(capturePath, 'utf8'));
  assert.equal(capture.context.heading?.version, 'v4-visual-heading-1');
  assert.equal(capture.context.heading.still, true); assert.equal(capture.context.heading.sensor, null);
  assert.equal(capture.context.heading.estimate.accepted, true);
  report.stillCapture = {path: capturePath, heading: capture.context.heading};
  pass('workbench still import shows a single-photo estimate with null capture sensor and zero camera/sensor permissions; 390/1280 layouts fit');
  assert.deepEqual(report.pageErrors, []); assert.deepEqual(report.externalRequests, []); assert.deepEqual(report.writes, []); assert.deepEqual(report.rawRequests, []);
  assert.equal(await readFile(path.join(dataDir, 'ar-data.json'), 'utf8'), fixtureText); assert.deepEqual(await Promise.all(protectedFiles.map(fingerprint)), before);
  pass('public uses compiled packs only; no original references, external uploads, backend writes, or real-data/V3 changes');
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error); console.error(report.failure); process.exitCode = 1;
  if (page) {report.lastUi = await page.locator('body').innerText().catch(() => ''); report.lastWorker = await page.evaluate(() => window.__headingTest?.results.at(-1)).catch(() => null); await page.screenshot({path: path.join(output, 'FAIL.png'), fullPage: true}).catch(() => {});}
} finally {
  await browser?.close(); await local?.close(); await mkdir(output, {recursive: true});
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({passed: report.passed, checks: report.checks, failure: report.failure, report: path.join(output, 'report.json')}, null, 2));
}
