import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile, writeFile, mkdtemp, mkdir} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {pathToFileURL} from 'node:url';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// Run only after approval for isolated browser automation. All images, media,
// orientations and acceleration events below are synthetic and remain local.
const rootDir = path.resolve(import.meta.dirname, '..');
const output = path.join(rootDir, 'test-output/guidance');
const {chromium} = await import(pathToFileURL(process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs').href);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fingerprint = file => readFile(path.join(rootDir, file)).then(sha).catch(error => {if (error.code === 'ENOENT') return null; throw error;});
const protectedFiles = ['ar-data.json', '.local/ar-v4/ar-data.json', '.local/ar-v4-fishnet/ar-data.json', 'ar-v3.html'];
const before = await Promise.all(protectedFiles.map(fingerprint));
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'v4-guidance-browser-'));
const report = {passed: false, checks: [], errors: [], rawRequests: [], writes: [], external: [], states: [], limitations: [
  'Synthetic desktop-Chromium integration checks, not iOS/Safari/LINE or physical camera/IMU validation.',
  'Step pulses test deterministic estimated progress; they do not establish real walking-distance accuracy.',
  'Projected route and shared map state are approximate guidance, not world anchors, XYZ localization, or automatic arrival.',
]};
let browser, local, page;
const pass = value => {report.checks.push(value); console.log('PASS ' + value);};
function mockMedia({queries, originals, orientationGranted, motionGranted, initialScene}) {
  const s = window.__guidanceTest = {scene: initialScene, alpha: 270, beta: 90, gamma: 0, screenAngle: 0, orientationGranted, motionGranted, sensorOn: true, cameraCalls: 0, orientationCalls: 0, motionCalls: 0, permissions: [], prepares: [], results: [], originals: [], motionEvents: 0, workersTerminated: 0};
  Object.defineProperty(screen.orientation, 'angle', {configurable: true, get: () => s.screenAngle});
  const descriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {...descriptor, set(value) {if (originals.includes(value)) s.originals.push(value.slice(0, 50)); return descriptor.set.call(this, value);}});
  const NativeWorker = window.Worker;
  window.Worker = class extends NativeWorker {
    constructor(...args) {super(...args); this.kinds = new Map(); this.addEventListener('message', e => {const type = this.kinds.get(e.data?.requestId); if (type === 'detect') s.results.push(e.data); else if (type?.startsWith('prepare')) s.prepares.push({type, ...e.data});});}
    postMessage(message, ...args) {this.kinds.set(message.requestId, message.type); return super.postMessage(message, ...args);}
    terminate() {s.workersTerminated++; super.terminate();}
  };
  Object.defineProperty(DeviceOrientationEvent, 'requestPermission', {configurable: true, value: async () => {s.orientationCalls++; s.permissions.push({type: 'orientation', activated: navigator.userActivation.isActive}); return s.orientationGranted ? 'granted' : 'denied';}});
  Object.defineProperty(DeviceMotionEvent, 'requestPermission', {configurable: true, value: async () => {s.motionCalls++; s.permissions.push({type: 'motion', activated: navigator.userActivation.isActive}); return s.motionGranted ? 'granted' : 'denied';}});
  Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {configurable: true, value: async () => {
    s.cameraCalls++; s.permissions.push({type: 'camera', activated: navigator.userActivation.isActive});
    const images = await Promise.all(queries.map(src => new Promise((resolve, reject) => {const i = new Image(); i.onload = () => resolve(i); i.onerror = reject; i.src = src;})));
    const canvas = document.createElement('canvas'); canvas.width = 400; canvas.height = 360; const c = canvas.getContext('2d');
    const paint = () => {c.fillStyle = '#f6f4ee'; c.fillRect(0, 0, 400, 360); if (s.scene >= 0) c.drawImage(images[s.scene], 0, 0); requestAnimationFrame(paint);}; paint();
    const stream = canvas.captureStream(15); window.__guidanceStream = stream; return stream;
  }});
  window.__emitGuidanceOrientation = () => {if (s.orientationGranted && s.sensorOn) window.dispatchEvent(new DeviceOrientationEvent('deviceorientation', {alpha: s.alpha, beta: s.beta, gamma: s.gamma, absolute: false}));};
  window.__emitGuidanceMotion = z => {s.motionEvents++; window.dispatchEvent(new DeviceMotionEvent('devicemotion', {acceleration: {x: 0, y: 0, z}, accelerationIncludingGravity: {x: 0, y: 9.81, z}, rotationRate: {alpha: 0, beta: 0, gamma: 0}, interval: 50}));};
  setInterval(window.__emitGuidanceOrientation, 75);
}
async function createPage(images, {orientationGranted = true, motionGranted = true, initialScene = -1} = {}) {
  const page = await browser.newPage({viewport: {width: 390, height: 844}}); page.setDefaultTimeout(20000);
  page.on('pageerror', error => report.errors.push(error.message));
  await page.route('**/*', route => {
    const r = route.request(), url = new URL(r.url());
    if (url.origin !== local.origin) {report.external.push(url.href); return route.abort();}
    if (r.method() !== 'GET') {report.writes.push({method: r.method(), path: url.pathname}); return route.abort();}
    if (['/ar-data.json', '/api/ar-content'].includes(url.pathname)) {report.rawRequests.push(url.pathname); return route.abort();}
    return route.continue();
  });
  await page.addInitScript(mockMedia, {queries: images.queries, originals: images.references, orientationGranted, motionGranted, initialScene});
  await page.goto(local.origin + '/ar-v4-navigation.html?projectId=guidance-test&origin=a');
  await page.getByRole('combobox').selectOption('c'); await page.getByRole('button', {name: '開啟 AR 導引', exact: true}).click();
  assert.equal(await page.evaluate(() => window.__guidanceTest.cameraCalls), 0);
  await page.getByRole('button', {name: '開啟相機與方向感測', exact: true}).click();
  await page.waitForFunction(() => window.__guidanceTest.prepares.length > 0);
  return page;
}
const root = page => page.locator('.v4-public-guide');
async function view(page) {return root(page).evaluate(n => ({status: n.dataset.guidanceStatus, heading: n.dataset.heading === '' ? null : Number(n.dataset.heading), progress: Number(n.dataset.progressM), confirmed: n.dataset.confirmedNode, source: n.dataset.source, motion: n.dataset.motionState}));}
async function synchronized(page, name) {
  const current = await view(page);
  const paths = await page.locator('.v4-ar-path').evaluate(n => ({heading: Number(n.dataset.heading), progress: Number(n.dataset.progressM), key: n.dataset.routeKey}));
  const map = await page.locator('.v4-guidance-map').evaluate(n => ({heading: Number(n.dataset.heading), progress: Number(n.dataset.progressM), key: n.dataset.routeKey}));
  assert.equal(paths.heading, map.heading, name + ' heading source'); assert.equal(paths.progress, map.progress, name + ' progress source'); assert.ok(paths.key); assert.equal(paths.key, map.key, name + ' same route geometry');
  assert.ok(Math.abs(paths.heading - current.heading) < .2); assert.ok(Math.abs(paths.progress - current.progress) < .05);
  assert.equal(await page.locator('.v4-ar-path').isVisible(), true); assert.equal(await page.locator('.v4-guidance-map').isVisible(), true);
  report.states.push({name, ...current, path: paths, map}); return current;
}
async function help(page, open) {
  if (open) await page.getByRole('button', {name: '導引說明與校正', exact: true}).click();
  else await page.getByRole('button', {name: '關閉導引說明', exact: true}).click();
}
async function setStride(page, value) {
  await help(page, true); const input = page.getByLabel('估計每步距離（公尺）', {exact: true});
  if (!await input.isVisible()) await page.getByText('步伐與投影調整', {exact: true}).click();
  await input.fill(String(value)); await input.blur(); await help(page, false);
}
async function steps(page, count) {
  await page.evaluate(async count => {
    const sample = async z => {window.__emitGuidanceMotion(z); await new Promise(resolve => setTimeout(resolve, 50));};
    for (let i = 0; i < 8; i++) await sample(0);
    for (let step = 0; step < count; step++) {for (let i = 0; i < 3; i++) await sample(3); for (let i = 0; i < 7; i++) await sample(0);}
  }, count);
}
async function calibrateDuringPulse(page) {
  // Keep the pre-calibration peak and its release within one event sequence,
  // so a sample-gap reset cannot hide a missing explicit calibration reset.
  await page.evaluate(async () => {
    const sample = async z => {window.__emitGuidanceMotion(z); await new Promise(resolve => setTimeout(resolve, 50));};
    for (let i = 0; i < 8; i++) await sample(0);
    for (let i = 0; i < 3; i++) await sample(3);
    const button = [...document.querySelectorAll('button')].find(n => n.textContent === '面向下一地標，開始導引');
    if (!button || button.disabled) throw Error('fresh-sensor manual calibration is unavailable');
    button.click();
    for (let i = 0; i < 7; i++) await sample(0);
  });
}
async function mapUserFits(page, name) {
  // ResizeObserver needs a rendered frame before testing its actual SVG bounds.
  await page.waitForFunction(() => {
    const map = document.querySelector('.v4-guidance-map');
    return map && Math.abs(map.viewBox.baseVal.width - map.getBoundingClientRect().width) < 1 && Math.abs(map.viewBox.baseVal.height - map.getBoundingClientRect().height) < 1;
  });
  const bounds = await page.evaluate(() => {
    const rect = selector => {const r = document.querySelector(selector).getBoundingClientRect(); return {left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height};};
    return {map: rect('.v4-guidance-map'), user: rect('.v4-map-user'), footer: rect('.v4-public-guide footer'), viewport: {width: innerWidth, height: innerHeight}};
  });
  const {map, user, footer, viewport} = bounds;
  assert.ok(user.width > 0 && user.height > 0, name + ' visible user marker');
  assert.ok(user.left >= Math.max(0, map.left) - .5 && user.right <= Math.min(viewport.width, map.right) + .5, name + ' user marker fits map width');
  assert.ok(user.top >= Math.max(0, map.top) - .5 && user.bottom <= Math.min(viewport.height, map.bottom, footer.top) + .5, name + ' user marker fits visible map above footer');
  (report.mapBounds ||= []).push({name, ...bounds});
}
async function shot(page, name) {assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ' horizontal overflow'); await page.screenshot({path: path.join(output, name + '.png'), fullPage: true});}
async function renderedGeometry(page, selector) {return page.locator(selector).evaluate(n => JSON.stringify([n, ...n.querySelectorAll('svg,path,polygon,polyline,line,circle,g')].map(element => ['d','points','transform','style','x','y','cx','cy','x1','x2','y1','y2'].map(attr => element.getAttribute(attr)))));}
async function privateBoundary(page) {
  const s = await page.evaluate(() => ({camera: window.__guidanceTest.cameraCalls, orientation: window.__guidanceTest.orientationCalls, motion: window.__guidanceTest.motionCalls, permissions: window.__guidanceTest.permissions, originals: window.__guidanceTest.originals, prepares: window.__guidanceTest.prepares.map(p => p.type)}));
  assert.equal(s.camera, 1); assert.equal(s.orientation, 1); assert.equal(s.motion, 1); assert.ok(s.permissions.every(p => p.activated), 'permissions begin within the explicit tap');
  assert.deepEqual(s.originals, []); assert.ok(s.prepares.every(type => type === 'preparePacked'));
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
    const map = document.createElement('canvas'); map.width = 400; map.height = 300; const x = map.getContext('2d'); x.fillStyle = '#eff3f1'; x.fillRect(0, 0, 400, 300); x.strokeStyle = '#becac6'; x.lineWidth = 36; x.beginPath(); x.moveTo(40, 240); x.lineTo(100, 240); x.lineTo(100, 120); x.stroke();
    return {references: refs.map(c => c.toDataURL('image/png')), queries, map: map.toDataURL('image/png')};
  }); await maker.close();
  const nodes = ['a', 'b', 'c'].map((id, i) => ({id, code: id.toUpperCase(), title: ['起點', '轉角', '終點'][i], x: [.1, .25, .25][i], y: [.8, .8, .4][i], enabled: true, navigable: true, fieldObservations: [{id: 'ref-' + id, capturedAt: '2026-09-08T00:00:00Z', source: 'panorama-frame', imageUrl: images.references[i], width: 640, height: 480, mapBearing: i ? 0 : 90, headingSource: 'manual', panorama: {yaw: 0, pitch: 0, fov: 75, batchId: 'synthetic-' + id}}]}));
  const fixture = {version: '7.1', activeProjectId: 'guidance-test', projects: [{project: {id: 'guidance-test', name: '合成連續導引'}, buildings: [{id: 'building', name: '合成館', floors: [{id: 'floor', name: '1F', imageUrl: images.map, navigationImageUrl: images.map, bounds: {blX: 0, blY: 0, trX: 40, trY: 30}, mapUpHeading: 0, markers: nodes, waypoints: [], edges: [{id: 'ab', start: 'a', end: 'b'}, {id: 'bc', start: 'b', end: 'c'}]}]}]}]};
  const fixtureText = JSON.stringify(fixture); for (const query of images.queries) assert.ok(!fixtureText.includes(query), 'unstored query');
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureText); local = await startLocalServer({port: 0, rootDir, dataDir});

  page = await createPage(images);
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.dispatchEvent(new DeviceMotionEvent('devicemotion', {acceleration: {x: null, y: null, z: null}, accelerationIncludingGravity: {x: null, y: null, z: null}, interval: 50}));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  });
  assert.notEqual((await view(page)).motion, 'ready', 'all-null acceleration vectors never mark motion as available');
  assert.equal((await view(page)).progress, 0);
  await calibrateDuringPulse(page);
  await page.waitForFunction(() => document.querySelector('.v4-public-guide')?.dataset.source === 'manual');
  const acquired = await synchronized(page, 'manual-acquired'); assert.equal(acquired.confirmed, 'a'); assert.equal(acquired.progress, 0);
  pass('all-null motion data stays unavailable, and releasing a pre-calibration pulse cannot create a post-calibration step');
  // Keep genuine synthetic orientation updates active while recognition sees
  // only blank frames, proving this is not the old 15/20-second heading grace.
  await page.waitForTimeout(21500);
  const retained = await synchronized(page, 'manual-blank-after-21s'); assert.ok(['tracking', 'estimated'].includes(retained.status)); assert.equal(retained.confirmed, 'a');
  assert.ok(await page.evaluate(() => window.__guidanceTest.results.slice(-3).every(r => !r.result?.detection)));
  pass('explicit initial calibration keeps approximate route visible after more than 20 seconds of blank recognition');
  const prepares = await page.evaluate(() => window.__guidanceTest.prepares.length);
  const mapBefore = await renderedGeometry(page, '.v4-guidance-map'), arBefore = await renderedGeometry(page, '.v4-ar-path');
  await page.evaluate(() => {window.__guidanceTest.alpha = 230; window.__emitGuidanceOrientation();});
  await page.waitForFunction(() => Math.abs(Number(document.querySelector('.v4-public-guide')?.dataset.heading) - 130) < 2);
  const turned = await synchronized(page, 'gyro-40deg'); assert.ok(Math.abs(turned.heading - acquired.heading - 40) < 2);
  const mapAfter = await renderedGeometry(page, '.v4-guidance-map'), arAfter = await renderedGeometry(page, '.v4-ar-path');
  assert.notEqual(mapAfter, mapBefore, 'rendered map geometry turns, not just its data attributes');
  assert.notEqual(arAfter, arBefore, 'rendered AR geometry turns, not just its data attributes');
  report.geometryChangedOnTurn = {map: true, ar: true};
  assert.equal(await page.evaluate(() => window.__guidanceTest.prepares.length), prepares);
  await page.evaluate(() => {window.__guidanceTest.alpha = 270; window.__emitGuidanceOrientation();});
  await page.waitForFunction(() => Math.abs(Number(document.querySelector('.v4-public-guide')?.dataset.heading) - 90) < 2);
  pass('40-degree sensor turn updates AR and heading-up map from the same heading/progress/route without rebuilding recognition');
  await setStride(page, .8); await steps(page, 4);
  await page.waitForFunction(() => Number(document.querySelector('.v4-public-guide')?.dataset.progressM) > 2);
  const progressed = await synchronized(page, 'four-estimated-steps'); assert.equal(progressed.confirmed, 'a'); assert.equal(progressed.status, 'estimated');
  assert.ok(Math.abs(progressed.progress - 3.2) < .15, 'four calibrated .8 m synthetic steps');
  assert.equal(await page.getByRole('heading', {name: '已由您確認抵達'}).count(), 0);
  for (const viewport of [{width: 390, height: 844}, {width: 1280, height: 844}, {width: 844, height: 390}]) {
    await page.setViewportSize(viewport);
    const name = viewport.height === 390 ? 'landscape-844x390' : 'estimated-' + viewport.width;
    await mapUserFits(page, name); await shot(page, name);
    await page.getByRole('button', {name: '展開或收合小地圖', exact: true}).click();
    await mapUserFits(page, name + '-expanded'); await shot(page, name + '-expanded');
    await page.getByRole('button', {name: '展開或收合小地圖', exact: true}).click();
    await mapUserFits(page, name + '-collapsed');
  }
  await page.setViewportSize({width: 390, height: 844});
  pass('map user marker remains fully inside the visible map above the footer at 390/1280 widths and 390-high landscape, collapsed and expanded');
  // Re-seeing the original landmark after moving cannot silently snap progress
  // back to its capture point or pretend the visitor is there again.
  await page.evaluate(() => {window.__guidanceTest.scene = 0;});
  await page.waitForFunction(() => window.__guidanceTest.results.slice(-3).every(r => r.result?.detection?.targetId?.includes('"a"')));
  const rematched = await synchronized(page, 'origin-rematch-after-steps'); assert.ok(rematched.progress >= progressed.progress - .05); assert.equal(rematched.confirmed, 'a');
  await page.evaluate(() => {window.__guidanceTest.scene = -1;});
  pass('motion advances only estimated progress using the calibrated stride, and old-origin rematching after 2 m cannot reset that progress');
  await setStride(page, .4); const strideBefore = (await view(page)).progress; await steps(page, 2);
  const strideAfter = await synchronized(page, 'changed-stride'); assert.ok(Math.abs(strideAfter.progress - strideBefore - .8) < .15); assert.equal(strideAfter.confirmed, 'a');
  await privateBoundary(page);
  await page.getByRole('button', {name: '返回路線预覽', exact: true}).click();
  assert.equal(await page.evaluate(() => window.__guidanceStream.getTracks().every(t => t.readyState === 'ended')), true);
  assert.ok(await page.evaluate(() => window.__guidanceTest.workersTerminated > 0));
  await page.close(); pass('stride changes affect only future estimates, never confirm arrival; exiting stops camera tracks and recognition worker');

  page = await createPage(images, {initialScene: 0});
  await page.waitForFunction(() => document.querySelector('.v4-public-guide')?.dataset.source === 'visual');
  const visual = await synchronized(page, 'visual-acquired'); assert.ok(Math.abs(visual.heading - 98.2) < 4); assert.equal(visual.confirmed, 'a');
  await page.evaluate(() => {window.__guidanceTest.scene = -1;});
  await page.waitForFunction(() => window.__guidanceTest.results.slice(-3).every(r => !r.result?.detection));
  await synchronized(page, 'visual-blank-route-retained');
  await page.evaluate(() => {window.__guidanceTest.sensorOn = false;});
  await page.waitForFunction(() => ['unavailable', 'needs-calibration'].includes(document.querySelector('.v4-public-guide')?.dataset.guidanceStatus));
  await page.evaluate(() => {window.__guidanceTest.sensorOn = true; window.__emitGuidanceOrientation();});
  await page.waitForTimeout(250); assert.equal((await view(page)).heading, null, 'fresh sensor alone cannot resurrect invalidated calibration');
  const beforeRematch = await page.evaluate(() => {window.__guidanceTest.scene = 0; return window.__guidanceTest.results.length;});
  await page.waitForFunction(count => window.__guidanceTest.results.length >= count + 5 && window.__guidanceTest.results.slice(-4).every(r => r.result?.detection?.targetId?.includes('"a"')), beforeRematch);
  assert.equal((await view(page)).heading, null, 'fresh matching original views cannot silently re-anchor the expired session');
  assert.equal((await view(page)).source, '');
  assert.equal((await view(page)).confirmed, 'a');
  assert.equal(await page.locator('.v4-ar-path').count(), 0, 'no stale AR route after implicit visual reacquisition');
  report.states.push({name: 'fresh-original-rematches-cannot-reanchor', ...await view(page)});
  await privateBoundary(page); await page.close();
  pass('valid visual acquisition retains blank-scene guidance, but sensor invalidation cannot be undone by fresh sensors or repeated original-photo rematches');

  page = await createPage(images, {motionGranted: false});
  await page.getByRole('button', {name: '面向下一地標，開始導引', exact: true}).click();
  await page.waitForFunction(() => document.querySelector('.v4-public-guide')?.dataset.source === 'manual');
  const deniedBefore = await synchronized(page, 'motion-denied-heading-available'); assert.equal(deniedBefore.motion, 'denied');
  await steps(page, 2); assert.equal((await view(page)).progress, 0, 'denied motion cannot estimate steps even if synthetic events are dispatched');
  await privateBoundary(page); await page.close();
  pass('motion permission denial still permits calibrated direction/map but does not invent walking progress');
  assert.deepEqual(report.errors, []); assert.deepEqual(report.rawRequests, []); assert.deepEqual(report.external, []); assert.deepEqual(report.writes, []);
  assert.equal(await readFile(path.join(dataDir, 'ar-data.json'), 'utf8'), fixtureText); assert.deepEqual(await Promise.all(protectedFiles.map(fingerprint)), before);
  pass('public uses only feature packs and synthetic media, with no original-reference requests, uploads, real-data mutations, or V3 changes');
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error); console.error(report.failure); process.exitCode = 1;
  if (page && !page.isClosed()) {report.lastUi = await page.locator('body').innerText().catch(() => ''); report.lastState = await view(page).catch(() => null); await page.screenshot({path: path.join(output, 'FAIL.png'), fullPage: true}).catch(() => {});}
} finally {
  await browser?.close(); await local?.close(); await mkdir(output, {recursive: true}); await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({passed: report.passed, checks: report.checks, failure: report.failure, report: path.join(output, 'report.json')}, null, 2));
}
