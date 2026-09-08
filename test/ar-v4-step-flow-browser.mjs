import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile, writeFile, mkdir, mkdtemp} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// Authorized, isolated browser regression. No physical camera or sensors,
// unpublished imagery, authenticated endpoint, or real backend is used.
const rootDir = path.resolve(import.meta.dirname, '..');
const output = path.join(rootDir, 'test-output/step-flow');
const {chromium} = await import(pathToFileURL(process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs').href);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const protectedFiles = ['ar-data.json', '.local/ar-v4/ar-data.json', '.local/ar-v4-fishnet/ar-data.json', 'ar-v3.html'];
const fingerprint = file => readFile(path.join(rootDir, file)).then(hash).catch(error => {if (error.code === 'ENOENT') return null; throw error;});
const before = await Promise.all(protectedFiles.map(fingerprint));
const bundleFiles = ['assets/ar-v4-navigation/app.js', 'assets/ar-v4-navigation/app.css', 'assets/ar-v4-navigation/partial-recognition-worker.js'];
const bundleHashes = async () => Object.fromEntries(await Promise.all(bundleFiles.map(async file => [file, await fingerprint(file)])));
const bundleHashesBefore = await bundleHashes();
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'v4-step-flow-browser-'));
const report = {passed: false, bundleHashesBefore, checks: [], states: [], pageErrors: [], consoleErrors: [], rawRequests: [], writes: [], external: [], bounds: [], screenshots: [], limitations: [
  'Synthetic Chromium integration only; not physical Safari/LINE, gait, distance, camera geometry, or field accuracy validation.',
  'Estimated node continuation must remain distinct from actually confirmed location and final arrival.',
  'Cross-floor/final-destination continuation guards are additionally covered by pure-module tests, not this same-floor fixture.',
]};
let browser, local, page;
const pass = label => {report.checks.push(label); console.log('PASS ' + label);};
const main = page => page.locator('.v4-public-guide');
const addStep = page => page.getByRole('button', {name: '手動增加一步', exact: true});
async function state(page) {return main(page).evaluate(n => ({
  heading: n.dataset.heading === '' ? null : Number(n.dataset.heading), progress: Number(n.dataset.progressM),
  confirmed: n.dataset.confirmedNode, estimated: n.dataset.estimatedNode, target: n.dataset.targetNode,
  leg: Number(n.dataset.activeLeg), mode: n.dataset.stepMode, sensitivity: n.dataset.sensitivity,
  calibration: n.dataset.calibrationState, calibrationCount: Number(n.dataset.calibrationCount),
  autoContinue: n.dataset.autoContinue === 'true', source: n.dataset.source, motion: n.dataset.motionState,
}));}
async function synchronized(page, name) {
  const current = await state(page);
  const read = n => ({heading: Number(n.dataset.heading), progress: Number(n.dataset.progressM), route: n.dataset.routeKey});
  const ar = await page.locator('.v4-ar-path').evaluate(read), map = await page.locator('.v4-guidance-map').evaluate(read);
  assert.deepEqual(ar, map, name + ': AR/map share heading, progress, and route');
  assert.ok(Math.abs(ar.progress - current.progress) < .05); assert.ok(Math.abs(ar.heading - current.heading) < .2);
  report.states.push({name, ...current, ar, map}); return current;
}
function mediaMock({queries, references, motionGranted}) {
  const s = window.__stepFlow = {scene: -1, alpha: 270, sensorOn: true, camera: 0, orientation: 0, motion: 0, permissions: [], originalLoads: [], results: [], prepares: [], motionEvents: 0};
  const src = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {...src, set(value) {if (references.includes(value)) s.originalLoads.push(value.slice(0, 40)); return src.set.call(this, value);}});
  const NativeWorker = window.Worker;
  window.Worker = class extends NativeWorker {
    constructor(...args) {super(...args); this.requests = new Map(); this.addEventListener('message', e => {const request = this.requests.get(e.data?.requestId); if (request?.type === 'detect') s.results.push(e.data); else if (request?.type?.startsWith('prepare')) s.prepares.push({type: request.type, ids: request.ids, ...e.data});});}
    postMessage(message, ...args) {this.requests.set(message.requestId, {type: message.type, ids: message.targets?.map(t => t.nodeId)}); return super.postMessage(message, ...args);}
  };
  Object.defineProperty(DeviceOrientationEvent, 'requestPermission', {configurable: true, value: async () => {s.orientation++; s.permissions.push(navigator.userActivation.isActive); return 'granted';}});
  Object.defineProperty(DeviceMotionEvent, 'requestPermission', {configurable: true, value: async () => {s.motion++; s.permissions.push(navigator.userActivation.isActive); return motionGranted ? 'granted' : 'denied';}});
  Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {configurable: true, value: async () => {
    s.camera++; s.permissions.push(navigator.userActivation.isActive);
    const images = await Promise.all(queries.map(url => new Promise(resolve => {const image = new Image(); image.onload = () => resolve(image); image.src = url;})));
    const c = document.createElement('canvas'); c.width = 400; c.height = 360; const x = c.getContext('2d');
    const paint = () => {x.fillStyle = '#f6f4ee'; x.fillRect(0, 0, 400, 360); if (s.scene >= 0) x.drawImage(images[s.scene], 0, 0); requestAnimationFrame(paint);}; paint();
    const stream = c.captureStream(15); window.__stepFlowStream = stream; return stream;
  }});
  window.__emitStepFlowMotion = z => {s.motionEvents++; window.dispatchEvent(new DeviceMotionEvent('devicemotion', {acceleration: {x: 0, y: 0, z}, accelerationIncludingGravity: {x: 0, y: 9.81, z}, rotationRate: {alpha: 0, beta: 0, gamma: 0}, interval: 50}));};
  setInterval(() => {if (s.sensorOn) window.dispatchEvent(new DeviceOrientationEvent('deviceorientation', {alpha: s.alpha, beta: 90, gamma: 0, absolute: false}));}, 75);
}
async function createPage(images, {motionGranted = true} = {}) {
  const p = await browser.newPage({viewport: {width: 390, height: 844}}); p.setDefaultTimeout(18000);
  p.on('pageerror', e => report.pageErrors.push(e.message));
  p.on('console', m => {if (m.type() === 'error') report.consoleErrors.push(m.text());});
  await p.route('**/*', route => {
    const r = route.request(), url = new URL(r.url());
    if (url.origin !== local.origin) {report.external.push(url.href); return route.abort();}
    if (r.method() !== 'GET') {report.writes.push({method: r.method(), path: url.pathname}); return route.abort();}
    if (['/ar-data.json', '/api/ar-content'].includes(url.pathname)) {report.rawRequests.push(url.pathname); return route.abort();}
    return route.continue();
  });
  await p.addInitScript(mediaMock, {...images, motionGranted});
  await p.goto(local.origin + '/ar-v4-navigation.html?projectId=step-flow-test&origin=a');
  await p.getByRole('combobox').selectOption('c');
  await p.getByRole('button', {name: '開啟 AR 導引', exact: true}).click();
  assert.equal(await p.evaluate(() => window.__stepFlow.camera), 0);
  await p.getByRole('button', {name: '開啟相機與方向感測', exact: true}).click();
  await p.waitForFunction(() => window.__stepFlow.prepares.length > 0);
  return p;
}
async function face(page) {
  await page.getByRole('button', {name: '面向下一地標，開始導引', exact: true}).click();
  await page.waitForFunction(() => document.querySelector('.v4-public-guide')?.dataset.source === 'manual');
}
async function setMode(page, mode) {await page.getByLabel('步進方式', {exact: true}).selectOption(mode); assert.equal((await state(page)).mode, mode);}
async function help(page, open) {await page.getByRole('button', {name: open ? '導引說明與校正' : '關閉導引說明', exact: true}).click();}
async function settings(page, summary) {await help(page, true); const details = page.locator('details').filter({has: page.getByText(summary, {exact: true})}); if (await details.getAttribute('open') === null) await details.locator(':scope > summary').click();}
async function optIn(page) {await settings(page, '連續辨識與接續'); await page.getByLabel('自動接續（試用）', {exact: true}).check(); await help(page, false); assert.equal((await state(page)).autoContinue, true);}
async function pulses(page, count, amplitude = 3, highSamples = 3) {
  await page.evaluate(async ({count, amplitude, highSamples}) => {
    const sample = async z => {window.__emitStepFlowMotion(z); await new Promise(resolve => setTimeout(resolve, 50));};
    for (let i = 0; i < 8; i++) await sample(0);
    for (let j = 0; j < count; j++) {for (let i = 0; i < highSamples; i++) await sample(amplitude); for (let i = 0; i < 8; i++) await sample(0);}
  }, {count, amplitude, highSamples});
}
async function manualSteps(page, count) {for (let i = 0; i < count; i++) {await addStep(page).click(); await page.waitForTimeout(420);}}
async function see(page, scene, nodeId, frames = 5) {
  const before = await page.evaluate(scene => {window.__stepFlow.scene = scene; return window.__stepFlow.results.length;}, scene);
  await page.waitForFunction(({before, frames, nodeId}) => window.__stepFlow.results.length >= before + frames && window.__stepFlow.results.slice(-3).every(r => r.result?.detection?.targetId?.includes('"' + nodeId + '"')), {before, frames, nodeId});
}
async function layout(page, name) {
  await page.waitForFunction(() => {const n = document.querySelector('.v4-guidance-map'); return n && Math.abs(n.viewBox.baseVal.width - n.getBoundingClientRect().width) < 1;});
  const boxes = await page.evaluate(() => {
    const rect = element => {const r = element.getBoundingClientRect(); return {left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height};};
    return {viewport: {width: innerWidth, height: innerHeight}, scrollWidth: document.documentElement.scrollWidth, map: rect(document.querySelector('.v4-guidance-map')), user: rect(document.querySelector('.v4-map-user')), footer: rect(document.querySelector('.v4-public-guide footer')), controls: [...document.querySelectorAll('.v4-public-guide footer button,.v4-public-guide footer select')].filter(n => n.getClientRects().length).map(n => ({label: n.getAttribute('aria-label') || n.textContent, ...rect(n)}))};
  });
  assert.ok(boxes.scrollWidth <= boxes.viewport.width, name + ' no horizontal overflow');
  const {map, user, footer, viewport} = boxes;
  assert.ok(user.width > 0 && user.height > 0 && user.left >= map.left - .5 && user.right <= map.right + .5);
  assert.ok(user.top >= map.top - .5 && user.bottom <= Math.min(map.bottom, footer.top, viewport.height) + .5, name + ' user visible above controls');
  for (const c of boxes.controls) assert.ok(c.left >= 0 && c.right <= viewport.width + .5 && c.top >= 0 && c.bottom <= viewport.height + .5, name + ' visible control ' + c.label);
  report.bounds.push({name, ...boxes}); const file = path.join(output, name + '.png'); await page.screenshot({path: file, fullPage: true}); report.screenshots.push(file);
}
async function boundary(page, activations = 1) {
  const s = await page.evaluate(() => ({camera: window.__stepFlow.camera, orientation: window.__stepFlow.orientation, motion: window.__stepFlow.motion, originalLoads: window.__stepFlow.originalLoads, permissions: window.__stepFlow.permissions, prepares: window.__stepFlow.prepares.map(p => ({type: p.type, ids: p.ids}))}));
  assert.equal(s.camera, activations); assert.equal(s.orientation, activations); assert.equal(s.motion, activations); assert.ok(s.permissions.every(Boolean)); assert.deepEqual(s.originalLoads, []); assert.ok(s.prepares.length > 0 && s.prepares.every(p => p.type === 'preparePacked'));
  (report.preparationScopes ||= []).push(s.prepares);
}
try {
  await mkdir(output, {recursive: true});
  browser = await chromium.launch({executablePath: process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true});
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => {
    const refs = [37, 93, 137].map(seed => {
      const c = document.createElement('canvas'); c.width = 640; c.height = 480; const x = c.getContext('2d'); x.fillStyle = '#e9eedc'; x.fillRect(0, 0, 640, 480);
      let s = seed; const rand = () => {s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296;};
      for (let i = 0; i < 400; i++) {x.fillStyle = `hsl(${rand() * 360},70%,${10 + rand() * 45}%)`; x.fillRect(10 + rand() * 610, 10 + rand() * 450, 5 + rand() * 24, 5 + rand() * 24);}
      x.fillStyle = '#101b2a'; x.font = 'bold 34px sans-serif'; x.fillText('HEADING ' + seed, 180, 250); return c;
    });
    const queries = refs.map(ref => {const c = document.createElement('canvas'); c.width = 400; c.height = 360; c.getContext('2d').drawImage(ref, -180, -60); return c.toDataURL('image/png');});
    const m = document.createElement('canvas'); m.width = 400; m.height = 300; const x = m.getContext('2d'); x.fillStyle = '#eef1ef'; x.fillRect(0, 0, 400, 300);
    x.strokeStyle = '#bdc9c6'; x.lineWidth = 28; x.beginPath(); x.moveTo(40, 240); x.lineTo(100, 240); x.lineTo(100, 120); x.stroke();
    return {references: refs.map(c => c.toDataURL('image/png')), queries, map: m.toDataURL('image/png')};
  }); await maker.close();
  const markers = ['a', 'b', 'c'].map((id, i) => ({id, code: id.toUpperCase(), title: ['起點', '轉角', '終點'][i], x: [.1, .25, .25][i], y: [.8, .8, .4][i], enabled: true, navigable: true, fieldObservations: [{id: 'ref-' + id, capturedAt: '2026-09-08T00:00:00Z', source: 'panorama-frame', imageUrl: images.references[i], width: 640, height: 480, mapBearing: i === 2 ? 0 : 90, headingSource: 'manual', panorama: {yaw: 0, pitch: 0, fov: 75, batchId: 'synthetic-' + id}}]}));
  const fixture = {version: '7.1', activeProjectId: 'step-flow-test', projects: [{project: {id: 'step-flow-test', name: '合成步進流程'}, buildings: [{id: 'building', name: '合成館', floors: [{id: 'floor', name: '1F', imageUrl: images.map, navigationImageUrl: images.map, bounds: {blX: 0, blY: 0, trX: 40, trY: 30}, mapUpHeading: 0, markers, waypoints: [], edges: [{id: 'ab', start: 'a', end: 'b'}, {id: 'bc', start: 'b', end: 'c'}]}]}]}]};
  const fixtureText = JSON.stringify(fixture); for (const query of images.queries) assert.ok(!fixtureText.includes(query), 'query not stored in reference data');
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureText); local = await startLocalServer({port: 0, rootDir, dataDir});

  page = await createPage(images); await face(page);
  assert.equal((await state(page)).mode, 'auto'); assert.equal((await state(page)).autoContinue, false); assert.equal(await addStep(page).isVisible(), false);
  await setMode(page, 'manual'); assert.equal(await addStep(page).isVisible(), true);
  const distanceBefore = Number(/剩餘約\s+([\d.]+)/.exec(await page.locator('.v4-public-compass small').innerText())?.[1]); assert.equal(distanceBefore, 6);
  await addStep(page).dblclick({delay: 0});
  await page.waitForFunction(() => Number(document.querySelector('.v4-public-guide').dataset.progressM) > 0);
  const manual = await synchronized(page, 'manual-doubletap'); assert.ok(Math.abs(manual.progress - .65) < .05, 'double tap is only one manual step'); assert.equal(manual.confirmed, 'a');
  const distanceAfter = Number(/剩餘約\s+([\d.]+)/.exec(await page.locator('.v4-public-compass small').innerText())?.[1]); assert.ok(Math.abs(distanceBefore - distanceAfter - .65) < .11, 'visible remaining distance shortens by the same estimated step');
  await pulses(page, 3); assert.equal((await state(page)).progress, manual.progress, 'motion does not also count in manual mode');
  await setMode(page, 'auto'); assert.equal(await addStep(page).isVisible(), false); await pulses(page, 2);
  const automatic = await synchronized(page, 'auto-after-manual'); assert.ok(Math.abs(automatic.progress - manual.progress - 1.3) < .08); assert.equal(automatic.confirmed, 'a');
  pass('manual +1 is explicit and double-tap debounced; manual/automatic modes never count the same source twice and AR/map progress agrees');

  await setMode(page, 'manual');
  for (const viewport of [{width: 360, height: 844}, {width: 390, height: 844}, {width: 1280, height: 844}, {width: 844, height: 390}]) {await page.setViewportSize(viewport); await layout(page, 'manual-' + viewport.width + 'x' + viewport.height);}
  await page.setViewportSize({width: 390, height: 844});
  pass('manual step controls and map user marker remain visible without overflow at 360/390/1280 and landscape 844x390');

  await settings(page, '步伐與投影調整');
  for (const value of ['low', 'standard', 'high', 'standard']) {await page.getByLabel('步伐靈敏度', {exact: true}).selectOption(value); assert.equal((await state(page)).sensitivity, value);}
  const calibrationProgress = (await state(page)).progress;
  await page.getByRole('button', {name: '開始10步校準', exact: true}).click(); assert.equal((await state(page)).calibration, 'running');
  await pulses(page, 10); assert.equal((await state(page)).progress, calibrationProgress, 'calibration observations never advance the route');
  assert.equal((await state(page)).calibrationCount, 10, 'ten standard synthetic steps counted only in calibration');
  await page.getByRole('button', {name: '完成10步校準', exact: true}).click(); assert.equal((await state(page)).calibration, 'done');
  page.once('dialog', dialog => dialog.accept()); await page.getByRole('button', {name: '套用建議靈敏度', exact: true}).click();
  assert.equal((await state(page)).sensitivity, 'standard'); assert.equal((await state(page)).progress, calibrationProgress, 'returning to the calibration starting position preserves prior route progress'); assert.equal((await state(page)).heading, null);
  if (await page.getByRole('button', {name: '關閉導引說明', exact: true}).isVisible()) await help(page, false);
  await face(page); await synchronized(page, 'calibration-applied-explicitly');
  // A lower sustained amplitude is counted only by the high-sensitivity
  // detector; prove the recommendation changes the selected setting, not
  // merely that applying an unchanged default happens to work.
  await settings(page, '步伐與投影調整');
  await page.getByRole('button', {name: '開始10步校準', exact: true}).click(); await pulses(page, 10, 1, 4);
  assert.equal((await state(page)).progress, calibrationProgress); assert.equal((await state(page)).calibrationCount, 0);
  assert.match(await page.locator('.v4-step-calibration output').innerText(), /低\s+0.*標準\s+0.*高\s+10/);
  await page.getByRole('button', {name: '完成10步校準', exact: true}).click();
  assert.match(await page.locator('.v4-step-calibration').innerText(), /最接近\s*10\s*步：高/);
  page.once('dialog', dialog => dialog.dismiss()); await page.getByRole('button', {name: '套用建議靈敏度', exact: true}).click();
  assert.equal((await state(page)).calibration, 'done'); assert.equal((await state(page)).sensitivity, 'standard', 'cancelled return confirmation does not apply the recommendation');
  page.once('dialog', dialog => dialog.accept()); await page.getByRole('button', {name: '套用建議靈敏度', exact: true}).click();
  assert.equal((await state(page)).sensitivity, 'high'); assert.equal((await state(page)).progress, calibrationProgress); assert.equal((await state(page)).heading, null);
  if (await page.getByRole('button', {name: '關閉導引說明', exact: true}).isVisible()) await help(page, false);
  await face(page); await synchronized(page, 'high-sensitivity-recommendation-applied');
  await boundary(page); await page.close();
  pass('low/standard/high settings apply; ten-step calibration does not move navigation, and applying the recommendation preserves its starting progress while requiring explicit return plus fresh facing calibration');

  page = await createPage(images); await face(page); await optIn(page);
  await see(page, 1, 'b'); assert.equal((await state(page)).leg, 0); assert.equal((await state(page)).confirmed, 'a');
  pass('opt-in alone and remote/photo-only next-node recognition cannot advance the estimated or confirmed route');
  await page.evaluate(() => {window.__stepFlow.scene = -1;});
  await pulses(page, 8); assert.equal((await state(page)).leg, 0, 'steps alone lack next-node visual evidence');
  await see(page, 1, 'b');
  await page.waitForFunction(() => Number(document.querySelector('.v4-public-guide').dataset.activeLeg) === 1);
  const continued = await synchronized(page, 'opt-in-estimated-continuation'); assert.equal(continued.estimated, 'b'); assert.equal(continued.confirmed, 'a'); assert.equal(continued.target, 'c');
  assert.equal(await page.getByRole('heading', {name: '已由您確認抵達', exact: true}).count(), 0);
  pass('opt-in plus near-end automatic physical-step evidence and real next-reference matches can continue only the estimated node, never confirmed location or arrival');
  await settings(page, '步伐與投影調整'); await page.getByRole('button', {name: '開始10步校準', exact: true}).click(); await pulses(page, 2); await help(page, false);
  assert.equal(await page.getByRole('button', {name: '接續位置不符？返回上一點', exact: true}).isDisabled(), true, 'undo cannot move the route during calibration');
  assert.equal((await state(page)).leg, 1); assert.equal((await state(page)).progress, 0);
  await settings(page, '辨識／方向需要協助'); await page.getByRole('button', {name: '重新啟用感測', exact: true}).click();
  assert.equal((await state(page)).calibration, 'done', 'stopping cannot erase the return-to-calibration-start obligation');
  await page.getByRole('button', {name: '開啟相機與方向感測', exact: true}).click();
  await page.getByLabel('步進方式', {exact: true}).waitFor();
  assert.equal((await state(page)).calibration, 'done'); assert.equal(await page.getByLabel('步進方式', {exact: true}).isDisabled(), true);
  assert.equal(await page.getByRole('button', {name: '面向下一地標，開始導引', exact: true}).isDisabled(), true);
  await pulses(page, 2); assert.equal((await state(page)).progress, 0); assert.equal((await state(page)).leg, 1); assert.equal((await state(page)).confirmed, 'a');
  await settings(page, '步伐與投影調整'); page.once('dialog', dialog => dialog.accept()); await page.getByRole('button', {name: '取消校準', exact: true}).click(); await help(page, false);
  assert.equal((await state(page)).calibration, 'idle'); assert.equal((await state(page)).heading, null);
  pass('calibration disables estimated undo, and stop/restart cannot bypass its explicit return confirmation or resume route progress');
  await settings(page, '辨識／方向需要協助'); page.once('dialog', dialog => dialog.accept()); await page.getByRole('button', {name: '我已回到本段起點，重新辨識', exact: true}).click(); await help(page, false);
  await page.waitForFunction(() => document.querySelector('.v4-public-guide').dataset.source === 'visual');
  const confirmedB = await synchronized(page, 'explicitly-confirmed-b-reacquires-visual'); assert.equal(confirmedB.confirmed, 'b'); assert.equal(confirmedB.estimated, 'b'); assert.equal(confirmedB.leg, 1); assert.equal(confirmedB.target, 'c');
  await boundary(page, 2); await page.close();
  pass('explicitly confirming estimated B as the current leg start allows fresh visual orientation without a route-index change or stale confirmed-node closure');

  page = await createPage(images); await face(page); await optIn(page); await setMode(page, 'manual'); await manualSteps(page, 9); await see(page, 1, 'b');
  assert.equal((await state(page)).leg, 0); assert.equal((await state(page)).confirmed, 'a'); assert.equal((await state(page)).estimated, 'a');
  await setMode(page, 'auto'); await pulses(page, 2); await see(page, 1, 'b'); assert.equal((await state(page)).leg, 0, 'switching modes cannot launder manual progress into physical auto evidence');
  await boundary(page); await page.close();
  pass('manual-only progress and switching back to automatic cannot qualify the leg for automatic estimated continuation');

  page = await createPage(images, {motionGranted: false}); await face(page); assert.equal((await state(page)).motion, 'denied');
  await setMode(page, 'manual'); await addStep(page).click(); const denied = await synchronized(page, 'motion-denied-manual-step'); assert.ok(Math.abs(denied.progress - .65) < .05); assert.equal(denied.confirmed, 'a');
  await pulses(page, 2); assert.equal((await state(page)).progress, denied.progress); await boundary(page); await page.close();
  pass('denied motion permission still supports explicit manual +1 with a valid heading, without inventing automatic steps');

  assert.deepEqual(report.pageErrors, []); assert.deepEqual(report.consoleErrors, []); assert.deepEqual(report.rawRequests, []); assert.deepEqual(report.writes, []); assert.deepEqual(report.external, []);
  assert.equal(await readFile(path.join(dataDir, 'ar-data.json'), 'utf8'), fixtureText); assert.deepEqual(await Promise.all(protectedFiles.map(fingerprint)), before);
  pass('only precompiled packs and synthetic camera/IMU are used; no raw references, uploads, backend writes, real-data or V3 changes'); report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error); process.exitCode = 1; console.error(report.failure);
  if (page && !page.isClosed()) {report.lastState = await state(page).catch(() => null); report.lastUi = await page.locator('body').innerText().catch(() => ''); report.lastMedia = await page.evaluate(() => ({...window.__stepFlow, results: window.__stepFlow.results.slice(-4), prepares: window.__stepFlow.prepares.map(p => ({type: p.type, ids: p.ids}))})).catch(() => null); await page.screenshot({path: path.join(output, 'FAIL.png'), fullPage: true}).catch(() => {});}
} finally {
  await browser?.close(); await local?.close(); report.bundleHashesAfter = await bundleHashes();
  report.bundleUnchanged = JSON.stringify(report.bundleHashesBefore) === JSON.stringify(report.bundleHashesAfter);
  if (!report.bundleUnchanged) {report.passed = false; report.failure ||= 'Application assets changed during the browser regression; rerun against one stable build.'; process.exitCode = 1;}
  await mkdir(output, {recursive: true}); await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({passed: report.passed, checks: report.checks, failure: report.failure, report: path.join(output, 'report.json')}, null, 2));
}
