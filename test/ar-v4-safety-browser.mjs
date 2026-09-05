import assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const playwrightPath = process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const { chromium } = await import(pathToFileURL(playwrightPath));
const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'v4-safety-'));
const dataDir = path.join(temp, 'data');
await fs.mkdir(dataDir);
await fs.copyFile(path.join(rootDir, 'ar-data.json'), path.join(dataDir, 'ar-data.json'));
const local = await startLocalServer({ port: 0, rootDir, dataDir });
const browser = await chromium.launch({ executablePath: process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
const report = { passed: false, scenarios: [], errors: [], externalRequests: [] };
const switchTab = async (page, name) => {
  await page.getByRole('tab', { name, exact: true }).click();
  assert.equal(await page.getByRole('tab', { name, exact: true }).getAttribute('aria-selected'), 'true');
  assert.equal(await page.getByRole('tabpanel').count(), 1);
};
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await context.route('**/*', (route) => {
    const url = new URL(route.request().url());
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== local.origin) {
      report.externalRequests.push(url.href);
      return route.abort();
    }
    return route.continue();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20_000);
  page.on('pageerror', (error) => report.errors.push(error.message));
  await page.goto(`${local.origin}/ar-v4-field.html`);
  await page.waitForFunction(() => !!document.querySelector('select[aria-label="目前節點"]')?.value && !document.querySelector('select[aria-label="目前節點"]').disabled);
  await switchTab(page, '相機測試');
  await page.getByRole('button', { name: '開啟相機與方位感測', exact: true }).click();
  await page.locator('.camera-video.visible').waitFor();
  await page.waitForFunction(() => document.querySelector('video').videoWidth > 0);
  await page.getByRole('button', { name: '開始相機辨識', exact: true }).click();
  await page.getByRole('button', { name: '停止辨識', exact: true }).waitFor();
  await switchTab(page, '照片採集');
  await page.waitForFunction(() => {
    const video = document.querySelector('video');
    return video.paused && video.srcObject?.getVideoTracks().every(track => !track.enabled);
  });
  await page.waitForFunction(() => ![...document.querySelectorAll('button')].some(button => button.textContent.trim() === '停止辨識'));
  await switchTab(page, '相機測試');
  await page.waitForFunction(() => {
    const video = document.querySelector('video');
    return !video.paused && video.srcObject?.getVideoTracks().some(track => track.enabled);
  });
  report.scenarios.push('leaving camera tab cancels recognition and pauses stream; returning resumes video');
  await page.evaluate(() => {
    const event = new DeviceOrientationEvent('deviceorientation', { alpha: 50, beta: 88, gamma: 0 });
    Object.defineProperties(event, { webkitCompassHeading: { value: 310 }, webkitCompassAccuracy: { value: -1 } });
    window.dispatchEvent(event);
  });
  await page.getByRole('button', { name: '拍攝此畫面', exact: true }).click();
  assert.equal(await page.getByRole('tab', { name: '照片採集', exact: true }).getAttribute('aria-selected'), 'true');
  await page.getByAltText('待上傳的節點參考照片').waitFor();
  const upload = page.waitForResponse((res) => res.request().method() === 'POST' && res.url().endsWith('/api/save-ar-content'));
  await page.getByRole('button', { name: '上傳到本機後台', exact: true }).click();
  assert.equal((await upload).status(), 200);
  await page.locator('.notice.success').waitFor();
  report.scenarios.push('fake camera capture with uncalibrated compass persists without fabricating heading');

  const projectId = await page.getByLabel('場域', { exact: true }).inputValue();
  const floorKey = await page.getByLabel('樓層', { exact: true }).inputValue();
  const nodeId = await page.getByLabel('目前節點', { exact: true }).inputValue();
  const snapshot = async () => {
    const res = await fetch(`${local.origin}/api/ar-content?projectId=${encodeURIComponent(projectId)}`);
    const project = await res.json();
    const [buildingId, floorId] = floorKey.split('/');
    const floor = project.buildings.find((b) => b.id === buildingId).floors.find((f) => f.id === floorId);
    const node = [...(floor.markers || []), ...(floor.waypoints || [])].find((n) => n.id === nodeId);
    return { project, buildingId, floorId, node, revision: res.headers.get('x-ar-source-blob-sha'), nodeType: (floor.markers || []).some((n) => n.id === nodeId) ? 'marker' : 'waypoint' };
  };
  const saved = await snapshot();
  const observation = saved.node.fieldObservations.at(-1);
  assert.equal(observation.source, 'camera');
  assert.equal(observation.sensor.kind, 'unavailable');
  assert.equal(observation.sensor.accuracy, null);
  assert.equal(observation.mapBearing, null);

  await switchTab(page, '方向校正');
  await page.getByLabel('節點角度數值').fill('90');
  // Another operator changes the same node in the isolated backend.
  const update = await fetch(`${local.origin}/api/save-ar-content`, { method: 'POST', headers: { Origin: local.origin, 'Content-Type': 'application/json', 'X-AR-Save-Contract': 'ar-field-survey-v1' }, body: JSON.stringify({ expectedSourceBlobSha: saved.revision, fieldSurvey: { projectId, buildingId: saved.buildingId, floorId: saved.floorId, nodeId, nodeType: saved.nodeType, calibration: { guideReferenceBearing: 217 } } }) });
  assert.equal(update.status, 200);
  const conflict = page.waitForResponse((res) => res.request().method() === 'POST' && res.url().endsWith('/api/save-ar-content'));
  await page.getByRole('button', { name: '保存節點校正到後台', exact: true }).click();
  assert.equal((await conflict).status(), 409);
  await page.locator('.notice.error').waitFor();
  assert.equal((await snapshot()).node.guideReferenceBearing, 217);
  await page.getByRole('button', { name: '重新讀取後台', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('input[aria-label="節點角度數值"]').value === '217');
  report.scenarios.push('stale update rejected and refresh replaces stale calibration controls with latest server value');

  const hasNext = await page.getByLabel('下一個節點').isEnabled();
  await page.evaluate(() => window.dispatchEvent(new DeviceOrientationEvent('deviceorientationabsolute', { alpha: 90, beta: 85, gamma: 0, absolute: true })));
  await page.getByRole('button', { name: '我已面向這個方向 · 測試轉向', exact: true }).click();
  // If this node has a connected route, the absolute reading enables a temporary HUD arrow.
  if (hasNext) await page.locator('.hud-arrow').waitFor({ state: 'attached' });
  await page.waitForTimeout(1600);
  await page.evaluate(() => window.dispatchEvent(new DeviceOrientationEvent('deviceorientation', { alpha: 90, beta: 85, gamma: 0, absolute: false })));
  await page.waitForFunction(() => !document.querySelector('.hud-arrow'));
  report.scenarios.push('sensor absolute/relative frame switch invalidates temporary direction guidance');
  await switchTab(page, '相機測試');
  await page.getByRole('button', { name: '關閉相機', exact: true }).click();
  assert.equal(await page.evaluate(() => document.querySelector('video').srcObject), null);
  report.scenarios.push('camera shutdown detaches video stream and removes live guidance');

  // Resolve a real synthetic-device permission request after the operator has left camera.
  await page.evaluate(() => {
    const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    window.__restoreFieldCamera = () => { navigator.mediaDevices.getUserMedia = original; };
    navigator.mediaDevices.getUserMedia = async constraints => {
      const stream = await original(constraints);
      await new Promise(resolve => { window.__releaseFieldCamera = resolve; });
      return stream;
    };
  });
  await page.getByRole('button', { name: '開啟相機與方位感測', exact: true }).click();
  await page.waitForFunction(() => typeof window.__releaseFieldCamera === 'function');
  await switchTab(page, '照片採集');
  await page.evaluate(() => window.__releaseFieldCamera());
  await page.waitForFunction(() => {
    const video = document.querySelector('video');
    return video.srcObject?.getVideoTracks().length > 0 && video.paused && video.srcObject.getVideoTracks().every(track => !track.enabled);
  });
  assert.equal(await page.getByRole('tab', { name: '照片採集', exact: true }).getAttribute('aria-selected'), 'true');
  await switchTab(page, '相機測試');
  await page.waitForFunction(() => {
    const video = document.querySelector('video');
    return !video.paused && video.srcObject?.getVideoTracks().some(track => track.enabled && track.readyState === 'live');
  });
  await page.getByRole('button', { name: '關閉相機', exact: true }).click();
  await page.evaluate(() => window.__restoreFieldCamera());
  report.scenarios.push('late camera permission after tab navigation stays paused until returning to camera');
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.externalRequests, []);
  report.passed = true;
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  report.failure = error.stack || String(error);
  console.error(report.failure);
  process.exitCode = 1;
} finally {
  await browser.close();
  await local.close();
  await fs.mkdir(path.join(rootDir, 'test-output'), { recursive: true });
  await fs.writeFile(path.join(rootDir, 'test-output/v4-safety-report.json'), JSON.stringify(report, null, 2));
  await fs.rm(temp, { recursive: true, force: true });
}
