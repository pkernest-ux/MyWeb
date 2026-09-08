import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';

// Real V4 workbench/editor UI, fictional maps and photos, isolated loopback data.
// All HTTP writes and non-loopback requests are blocked; no camera is opened.
const rootDir = path.resolve(import.meta.dirname, '..');
const outputDir = path.join(rootDir, 'test-output', 'v4-node-photos');
const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'ar-v4-node-photos-'));
const chromePath = process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const playwrightPath = process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const { chromium } = await import(pathToFileURL(playwrightPath).href);
const digest = value => createHash('sha256').update(value).digest('hex');
const protectedPaths = ['ar-data.json', '.local/ar-v4/ar-data.json', '.local/ar-v4-fishnet/ar-data.json'];
const fingerprint = file => fs.readFile(path.join(rootDir, file)).then(digest).catch(error => {
  if (error.code === 'ENOENT') return null;
  throw error;
});
const before = await Promise.all(protectedPaths.map(fingerprint));
const report = { passed: false, scenarios: [], screenshots: [], pageErrors: [], blockedRequests: [], widths: [],
  limitations: ['Synthetic independent data only; not an on-site recognition or positioning accuracy test.', 'HTTP non-GET requests, external requests, and real camera access are blocked.'] };
const ids = { project: 'node-photo-fixture', building: 'photo-building', floor: 'photo-floor' };
const angles = Array.from({ length: 8 }, (_, index) => index * 45);
let local, browser, page, editor;
const passed = (name, details = {}) => { report.scenarios.push({ name, passed: true, ...details }); console.log(`PASS ${name}`); };

async function safeClick(locator) {
  const rect = await locator.boundingBox();
  const viewport = page.viewportSize();
  if (rect && (rect.y < 30 || rect.y + rect.height > viewport.height - 110)) {
    await page.evaluate(dy => scrollBy(0, dy), rect.y - viewport.height * .4);
  }
  await locator.click();
}
async function tab(name) {
  const direct = page.getByRole('tab', { name, exact: true });
  if (await direct.isVisible()) await direct.click();
  else {
    await page.getByRole('button', { name: '功能選單', exact: true }).click();
    await page.getByRole('dialog', { name: '六大功能', exact: true }).getByRole('button', { name: new RegExp(name) }).click();
  }
  await page.evaluate(() => scrollTo(0, 0));
}
async function mode(kind) {
  const group = kind === 'marker' ? 'marker' : 'path';
  await safeClick(editor.locator(`.v4-quick-actions button[aria-controls="v4-panel-${group}"]`));
  const button = editor.getByRole('button', { name: kind === 'marker' ? 'AR 點位' : '路徑節點', exact: true });
  if (await button.getAttribute('aria-pressed') !== 'true') await safeClick(button);
  const close = editor.getByRole('button', { name: '關閉工具選單', exact: true });
  if (await close.isVisible()) await safeClick(close);
}
async function openNode(kind, id) {
  const close = editor.getByRole('button', { name: '關閉點位設定', exact: true });
  if (await close.isVisible()) await safeClick(close);
  await page.evaluate(() => scrollTo(0, 0));
  await mode(kind);
  await safeClick(editor.locator(`[data-node-id="${id}"]`));
  const viewer = editor.locator('.v4-node-photos');
  await viewer.waitFor();
  await viewer.locator('img').waitFor();
  await viewer.locator('img').evaluate(image => image.decode());
  return viewer;
}
async function assertPhoto(viewer, observation) {
  assert.equal(await viewer.locator('img').count(), 1, 'The panorama viewer renders only one selected image.');
  assert.equal(await viewer.locator('img').getAttribute('src'), observation.imageUrl);
  await viewer.locator('img').evaluate(image => image.decode());
  const yaw = observation.panorama.yaw;
  assert.equal(await viewer.getByRole('button', { name: `環景 ${yaw}°`, exact: true }).getAttribute('aria-pressed'), 'true');
  const caption = await viewer.locator('figcaption').innerText();
  assert.match(caption, new RegExp(`環景 ${yaw}°`));
  assert.match(caption, new RegExp(`地圖 ${observation.mapBearing}°`));
}
async function assertNoOverflow(width) {
  const dimensions = await Promise.all([page, editor].map(target => target.evaluate(() => ({
    viewport: innerWidth, html: document.documentElement.scrollWidth, body: document.body.scrollWidth,
  }))));
  for (const measured of dimensions) {
    assert.ok(measured.html <= measured.viewport + 1 && measured.body <= measured.viewport + 1, JSON.stringify(measured));
  }
  const viewerDimensions = await editor.locator('.v4-node-photos').evaluate(el => ({ width: el.clientWidth, content: el.scrollWidth }));
  assert.ok(viewerDimensions.content <= viewerDimensions.width + 1, 'Photo controls must not overflow their panel.');
  report.widths.push({ width, documents: dimensions, viewer: viewerDimensions });
}
async function capture(name) {
  const file = path.join(outputDir, `${name}.png`);
  await editor.locator('.v4-node-photos').scrollIntoViewIfNeeded();
  await page.screenshot({ path: file });
  report.screenshots.push(file);
}

try {
  await fs.mkdir(outputDir, { recursive: true });
  browser = await chromium.launch({ executablePath: chromePath, headless: true, args: ['--disable-background-networking'] });
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => Array.from({ length: 26 }, (_, index) => {
    const canvas = document.createElement('canvas'); canvas.width = 480; canvas.height = 320;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = `hsl(${index * 27}, 45%, 88%)`; ctx.fillRect(0, 0, 480, 320);
    ctx.strokeStyle = '#27604d'; ctx.lineWidth = 12; ctx.strokeRect(40, 45, 400, 230);
    ctx.fillStyle = '#183e37'; ctx.font = 'bold 27px sans-serif'; ctx.fillText(`SYNTHETIC PHOTO ${index}`, 70, 160);
    ctx.font = '20px sans-serif'; ctx.fillText('Not a real venue', 130, 205);
    return canvas.toDataURL('image/png');
  }));
  await maker.close();
  const observation = (batchId, yaw, imageIndex, date) => ({
    id: `${batchId}-${yaw}`, source: 'panorama-frame', imageUrl: images[imageIndex], width: 480, height: 320,
    mapBearing: (yaw + 9) % 360, headingSource: 'manual', capturedAt: date, note: 'Synthetic panorama direction',
    panorama: { batchId, yaw, pitch: 0, fov: 75 },
    sensor: { heading: null, kind: 'unavailable', accuracy: null, capturedAt: null, alpha: null, beta: null, gamma: null, screenAngle: 0 },
    quality: { brightness: 140, sharpness: 100, warnings: [] },
  });
  const newest = angles.map((yaw, index) => observation('marker-new', yaw, index, '2026-09-08T03:00:00.000Z'));
  const older = angles.map((yaw, index) => observation('marker-old', yaw, index + 8, '2026-09-07T03:00:00.000Z'));
  const waypoint = angles.map((yaw, index) => observation('waypoint-batch', yaw, index + 16, '2026-09-08T04:00:00.000Z'));
  const fixture = { version: '7.1', activeProjectId: ids.project, projects: [{
    version: '7.1', project: { id: ids.project, name: '方向照片測試場域', updatedAt: '2026-09-08T04:00:00.000Z' }, systemConfig: {},
    buildings: [{ id: ids.building, name: '合成館', floors: [{
      id: ids.floor, name: '1F', imageUrl: images[24], navigationImageUrl: images[24], bounds: { blX: 0, blY: 0, trX: 48, trY: 32 },
      markers: [{ id: 'marker-a', code: 'A', title: '合成入口', x: .28, y: .55, enabled: true, navigable: true,
        imageUrl: images[25], guideImageUrl: images[25], fieldObservations: [...older, ...newest].reverse() }],
      waypoints: [{ id: 'waypoint-a', guideTitle: '合成轉角', x: .72, y: .55, guideImageUrl: images[25], fieldObservations: [...waypoint].reverse() }],
      edges: [{ id: 'a-to-b', start: 'marker-a', end: 'waypoint-a' }],
    }] }],
  }] };
  const fixtureBytes = Buffer.from(JSON.stringify(fixture));
  await fs.writeFile(path.join(dataDir, 'ar-data.json'), fixtureBytes);
  local = await startLocalServer({ port: 0, rootDir, dataDir });
  report.allowedOrigin = local.origin;
  for (const width of [390, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 1000 }, locale: 'zh-TW' });
    await context.route('**/*', route => {
      const request = route.request(), url = new URL(request.url());
      if (['http:', 'https:'].includes(url.protocol) && (url.origin !== local.origin || request.method() !== 'GET')) {
        report.blockedRequests.push({ url: url.href, method: request.method() });
        return route.abort('blockedbyclient');
      }
      return route.continue();
    });
    await context.addInitScript(() => {
      window.__nodePhotoStatuses = []; window.__nodePhotoCameraCalls = 0;
      addEventListener('message', event => {
        if (event.origin === location.origin && event.data?.type === 'ar-v4-editor-status') window.__nodePhotoStatuses.push(event.data);
      });
      if (navigator.mediaDevices) Object.defineProperty(navigator.mediaDevices, 'getUserMedia', { configurable: true, value: async () => {
        window.__nodePhotoCameraCalls++; throw new Error('Camera forbidden in node photo viewer test');
      } });
    });
    page = await context.newPage(); page.setDefaultTimeout(20000);
    page.on('pageerror', error => report.pageErrors.push(error.message));
    await page.goto(`${local.origin}/ar-v4-field.html?ui=classic&projectId=${ids.project}`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => !!document.querySelector('select[aria-label="目前節點"]')?.value);
    await tab('路網編輯');
    const iframe = page.getByTitle('地圖與路網編輯器', { exact: true });
    await iframe.waitFor(); editor = await (await iframe.elementHandle()).contentFrame();
    await editor.waitForFunction(() => document.querySelector('#current-map-image')?.naturalWidth > 0);
    await editor.locator('.v4-save-state').filter({ hasText: '無未保存變更' }).waitFor();
    let viewer = await openNode('marker', 'marker-a');
    await assertPhoto(viewer, newest[0]);
    assert.equal(await viewer.getByRole('button', { name: /^環景 \d+°$/ }).count(), 8);
    passed(`${width}: marker starts at newest batch panorama 0°, separately labelled map 9°`);
    for (const item of newest) {
      await safeClick(viewer.getByRole('button', { name: `環景 ${item.panorama.yaw}°`, exact: true }));
      await assertPhoto(viewer, item);
    }
    passed(`${width}: all eight marker direction buttons display the matching photo`);
    const batches = viewer.getByLabel('照片／環景批次', { exact: true });
    const options = await batches.locator('option').evaluateAll(items => items.map(item => ({ value: item.value, selected: item.selected })));
    assert.equal(options.length, 2);
    await batches.selectOption(options.find(option => !option.selected).value);
    await assertPhoto(viewer, older[0]);
    await safeClick(viewer.getByRole('button', { name: '環景 225°', exact: true }));
    await assertPhoto(viewer, older[5]);
    passed(`${width}: switching panorama batch resets its view to that batch's 0°`);
    await assertNoOverflow(width); await capture(`marker-${width}`);
    viewer = await openNode('waypoint', 'waypoint-a');
    await assertPhoto(viewer, waypoint[0]);
    for (const item of waypoint) {
      await safeClick(viewer.getByRole('button', { name: `環景 ${item.panorama.yaw}°`, exact: true }));
      await assertPhoto(viewer, item);
    }
    passed(`${width}: route waypoint starts at 0° and switches through all eight actual photos`);
    await assertNoOverflow(width); await capture(`waypoint-${width}`);
    viewer = await openNode('marker', 'marker-a');
    await assertPhoto(viewer, newest[0]);
    passed(`${width}: returning to a node resets to newest panorama 0°, not the previous node's angle`);
    assert.equal(await editor.locator('.v4-save-state').innerText(), '無未保存變更');
    const statuses = await page.evaluate(() => window.__nodePhotoStatuses);
    assert.ok(statuses.length > 0, 'Editor status handshake must be observed.');
    assert.ok(statuses.every(status => !status.dirty), 'Browsing photos must never dirty the route graph.');
    assert.equal(await page.evaluate(() => window.__nodePhotoCameraCalls), 0);
    assert.equal(await editor.evaluate(() => window.__nodePhotoCameraCalls), 0);
    await safeClick(editor.getByRole('button', { name: '關閉點位設定', exact: true }));
    await tab('作業位置');
    assert.equal(await page.getByLabel('場域', { exact: true }).isDisabled(), false);
    assert.equal(await page.locator('.editor-draft-notice').count(), 0);
    passed(`${width}: photo browsing does not dirty the editor, lock workbench context, or start the camera`);
    await context.close(); page = null; editor = null;
  }
  assert.equal(digest(await fs.readFile(path.join(dataDir, 'ar-data.json'))), digest(fixtureBytes));
  assert.deepEqual(await Promise.all(protectedPaths.map(fingerprint)), before);
  assert.equal(report.blockedRequests.filter(request => request.method !== 'GET').length, 0, 'No attempted HTTP mutation.');
  assert.deepEqual(report.pageErrors, []);
  passed('synthetic fixture and all protected real data remain byte-for-byte unchanged; no HTTP mutations');
  report.passed = true;
} catch (error) {
  report.error = error.stack || String(error);
  if (page) {
    await page.screenshot({ path: path.join(outputDir, 'failure.png'), fullPage: true }).catch(() => {});
    report.failureText = await page.locator('body').innerText().catch(() => '');
    if (editor) report.editorFailureText = await editor.locator('body').innerText().catch(() => '');
  }
  throw error;
} finally {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));
  await browser?.close(); await local?.close();
  console.log(`Node photo viewer report: ${path.join(outputDir, 'report.json')}`);
}
