import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const outputDir = path.join(rootDir, 'test-output');
const chromePath = process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const playwrightPath = process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const { chromium } = await import(pathToFileURL(playwrightPath).href);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const testNote = '瀏覽器測試專用合成圖：入口節點，面向地圖右方；非現場定位驗收。';
const report = { scenarios: [], consoleErrors: [], pageErrors: [], externalRequests: [], workers: [], workerMessages: [], screenshots: [] };
const passed = (name, detail = {}) => { report.scenarios.push({ name, passed: true, ...detail }); console.log(`PASS ${name}`); };

for (const file of ['ar-v4-field.html', 'admin-ar-v4.html', 'assets/ar-v4/ar-v4-field.js', 'assets/ar-v4/ar-v4-field.css']) {
  await fs.access(path.join(rootDir, file)).catch(() => { throw new Error(`Missing built artifact ${file}; run npm run build:ar-v4 first.`); });
}
const originalBytes = await fs.readFile(path.join(rootDir, 'ar-data.json'));
const originalHash = hash(originalBytes);
const collection = JSON.parse(originalBytes.toString('utf8'));
const project = collection.projects.find(item => item.project.id === collection.activeProjectId) || collection.projects[0];
const building = project.buildings.find(item => item.floors.some(floor => floor.markers?.length));
const floor = building?.floors.find(item => item.markers?.length);
const node = floor?.markers[0];
assert.ok(node, 'The isolated copy needs an existing marker to test field saves.');
const initialObservationCount = node.fieldObservations?.length || 0;
const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'ar-v4-browser-'));
const dataDir = path.join(temporaryRoot, 'data');
await fs.mkdir(dataDir);
await fs.writeFile(path.join(dataDir, 'ar-data.json'), originalBytes);
await fs.mkdir(outputDir, { recursive: true });
let local;
let browser;
let mainPage;

async function switchTab(page, name) {
  const tab = page.getByRole('tab', { name, exact: true });
  await tab.click();
  assert.equal(await tab.getAttribute('aria-selected'), 'true');
  assert.equal(await page.getByRole('tabpanel').count(), 1, `${name}: exactly one panel must be visible`);
  const controls = await tab.getAttribute('aria-controls');
  assert.ok(controls, `${name}: tab must identify its panel`);
  assert.equal(await page.getByRole('tabpanel').getAttribute('id'), controls);
}

async function selectedTarget(page) {
  await switchTab(page, '作業位置');
  await page.getByLabel('場域', { exact: true }).selectOption(project.project.id);
  await page.getByLabel('樓層', { exact: true }).selectOption(`${building.id}/${floor.id}`);
  await page.getByLabel('目前節點', { exact: true }).selectOption(node.id);
  await switchTab(page, '照片採集');
  await page.waitForFunction(() => {
    const button = [...document.querySelectorAll('button')].find(item => item.textContent.trim() === '匯入照片');
    return button && !button.disabled;
  });
}

async function ready(page) {
  await page.locator('.environment-strip').filter({ hasText: '本機後台 · 不會同步 GitHub' }).waitFor();
  await page.waitForFunction(() => {
    const select = document.querySelector('select[aria-label="目前節點"]');
    return select && !select.disabled && select.value;
  });
}

async function snapshot() {
  const response = await fetch(`${local.origin}/api/ar-content?projectId=${encodeURIComponent(project.project.id)}`);
  assert.equal(response.status, 200);
  const body = await response.json();
  const savedFloor = body.buildings.find(item => item.id === building.id).floors.find(item => item.id === floor.id);
  return { project: body, floor: savedFloor, node: savedFloor.markers.find(item => item.id === node.id), revision: response.headers.get('x-ar-source-blob-sha') };
}

async function uploadAndWait(page, index, name, dataUrl) {
  const buffer = Buffer.from(dataUrl.split(',')[1], 'base64');
  await page.locator('input[type="file"]').nth(index).setInputFiles({ name, mimeType: 'image/jpeg', buffer });
}

async function recognizeFile(page, name, dataUrl) {
  await switchTab(page, '相機測試');
  await uploadAndWait(page, 2, name, dataUrl);
  await page.waitForFunction(() => !document.querySelector('.busy-indicator') &&
    !document.querySelector('.recognition-status')?.textContent.includes('正在準備'), undefined, { timeout: 25_000 });
  const status = await page.locator('.recognition-status').innerText();
  console.log(`RECOGNITION ${name}: ${status}`);
  return status;
}

async function saveAndWait(page, buttonName) {
  const responsePromise = page.waitForResponse(response => response.url().endsWith('/api/save-ar-content') && response.request().method() === 'POST');
  await page.getByRole('button', { name: buttonName, exact: true }).click();
  const response = await responsePromise;
  const body = await response.json();
  assert.equal(response.status(), 200, JSON.stringify(body));
  assert.equal(body.ok, true);
  assert.equal(body.storage, 'local');
  await page.locator('.notice.success').waitFor();
  await page.waitForFunction(() => !document.querySelector('.busy-indicator'));
  return body;
}

async function assertNoOverflow(page, description) {
  const dimensions = await page.evaluate(() => ({
    viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth,
    overflows: [...document.querySelectorAll('body *')].filter(element => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1);
    }).slice(0, 10).map(element => ({ tag: element.tagName, className: element.className, text: element.textContent.slice(0, 70) })),
  }));
  assert.ok(dimensions.document <= dimensions.viewport + 1 && dimensions.body <= dimensions.viewport + 1, `${description}: ${JSON.stringify(dimensions)}`);
  return dimensions;
}

try {
  local = await startLocalServer({ port: 0, rootDir, dataDir });
  browser = await chromium.launch({ executablePath: chromePath, headless: true, args: [
    '--disable-background-networking', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
  ] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1, locale: 'zh-TW' });
  await context.addInitScript(() => {
    const originalWorker = window.Worker;
    window.__fieldWorkerMessages = [];
    window.Worker = class extends originalWorker {
      constructor(...args) {
        super(...args);
        this.addEventListener('message', event => window.__fieldWorkerMessages.push({
          type: 'message', url: String(args[0]), data: event.data,
        }));
        this.addEventListener('error', event => window.__fieldWorkerMessages.push({
          type: 'error', url: String(args[0]), message: event.message,
        }));
      }
    };
  });
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== local.origin) {
      report.externalRequests.push({ method: route.request().method(), url: url.href });
      return route.abort('blockedbyclient');
    }
    return route.continue();
  });
  context.on('page', page => {
    page.on('pageerror', error => report.pageErrors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') report.consoleErrors.push(message.text()); });
    page.on('worker', worker => report.workers.push(worker.url()));
    page.on('dialog', dialog => dialog.dismiss());
  });
  const page = await context.newPage();
  mainPage = page;
  page.setDefaultTimeout(20_000);
  await page.goto(`${local.origin}/ar-v4-field.html`, { waitUntil: 'networkidle' });
  await ready(page);
  assert.equal(await page.getByRole('tab', { name: '作業位置', exact: true }).getAttribute('aria-selected'), 'true');
  await selectedTarget(page);
  assert.equal(await page.getByLabel('目前節點', { exact: true }).inputValue(), node.id);
  passed('built field page loads the real copied project and loopback admin session');

  // Deliberately synthetic, deterministic pictures exercise the real file decoding/compression paths.
  const images = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200; canvas.height = 900;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e9e7df'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    let seed = 491763;
    const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    for (let index = 0; index < 700; index++) {
      const x = random() * 1200, y = random() * 900;
      const width = 8 + random() * 70, height = 8 + random() * 60;
      const shade = Math.round(20 + random() * 210);
      ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
      if (index % 3 === 0) { ctx.beginPath(); ctx.arc(x, y, width / 2, 0, Math.PI * 2); ctx.fill(); }
      else ctx.fillRect(x, y, width, height);
      if (index % 7 === 0) {
        ctx.strokeStyle = '#20262b'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + width, y + height); ctx.stroke();
      }
    }
    ctx.fillStyle = '#ffffff'; ctx.fillRect(280, 335, 670, 210);
    ctx.fillStyle = '#143b3a'; ctx.font = 'bold 62px sans-serif'; ctx.fillText('FIELD TEST 4287', 315, 425);
    ctx.font = '31px sans-serif'; ctx.fillText('SYNTHETIC REFERENCE — NOT A SITE', 304, 495);
    const texture = canvas.toDataURL('image/jpeg', 0.92);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    const blank = canvas.toDataURL('image/jpeg', 0.9);
    canvas.width = 2048; canvas.height = 1024;
    const gradient = ctx.createLinearGradient(0, 0, 2048, 0);
    gradient.addColorStop(0, '#a52830'); gradient.addColorStop(0.5, '#387156'); gradient.addColorStop(1, '#33467d');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 2048, 1024);
    for (let index = 0; index < 20; index++) {
      ctx.fillStyle = index % 2 ? '#fcdf87' : '#e9eff8';
      ctx.font = '45px sans-serif'; ctx.fillText(`YAW ${index * 18}`, index * 100, 300 + (index % 4) * 100);
    }
    return { texture, blank, panorama: canvas.toDataURL('image/jpeg', 0.88) };
  });
  await uploadAndWait(page, 0, 'synthetic-field-texture.jpg', images.texture);
  await page.getByAltText('待上傳的節點參考照片', { exact: true }).waitFor();
  await page.getByLabel('照片拍攝朝向', { exact: true }).fill('90');
  await page.getByLabel('現場備註', { exact: true }).fill(testNote);
  await page.locator('.draft-state').filter({ hasText: '草稿已保存在此瀏覽器' }).waitFor();
  const draftImage = await page.getByAltText('待上傳的節點參考照片', { exact: true }).getAttribute('src');
  assert.ok(draftImage.startsWith('data:image/jpeg;base64,'));
  assert.ok(Buffer.from(draftImage.split(',')[1], 'base64').length <= 256 * 1024);
  assert.equal((await snapshot()).node.fieldObservations?.length || 0, initialObservationCount);
  passed('file upload creates a bounded JPEG draft with manual bearing and note without backend writes');

  await switchTab(page, '方向校正');
  await page.getByLabel('節點角度數值', { exact: true }).fill('123');
  for (const name of ['相機測試', '後台紀錄', '作業位置', '照片採集']) await switchTab(page, name);
  assert.equal(await page.getByLabel('照片拍攝朝向', { exact: true }).inputValue(), '90');
  assert.equal(await page.getByLabel('現場備註', { exact: true }).inputValue(), testNote);
  assert.equal(await page.getByAltText('待上傳的節點參考照片', { exact: true }).getAttribute('src'), draftImage);
  await switchTab(page, '方向校正');
  assert.equal(await page.getByLabel('節點角度數值', { exact: true }).inputValue(), '123');
  passed('five bottom tabs preserve the photo draft and unsaved calibration while exposing one panel');

  await page.reload({ waitUntil: 'networkidle' });
  await ready(page);
  await selectedTarget(page);
  await page.getByAltText('待上傳的節點參考照片', { exact: true }).waitFor();
  assert.equal(await page.getByLabel('照片拍攝朝向', { exact: true }).inputValue(), '90');
  assert.equal(await page.getByLabel('現場備註', { exact: true }).inputValue(), testNote);
  assert.equal(await page.getByAltText('待上傳的節點參考照片', { exact: true }).getAttribute('src'), draftImage);
  passed('IndexedDB photo draft, heading and note survive a page reload');

  const savedPhoto = await saveAndWait(page, '上傳到本機後台');
  const persisted = await snapshot();
  const savedObservation = persisted.node.fieldObservations.find(item => item.id === savedPhoto.observationId);
  assert.ok(savedObservation, 'POST must persist the observation on the real target node.');
  assert.equal(persisted.node.fieldObservations.length, initialObservationCount + 1);
  assert.equal(savedObservation.imageUrl, draftImage);
  assert.equal(savedObservation.mapBearing, 90);
  assert.equal(savedObservation.headingSource, 'manual');
  assert.equal(savedObservation.note, testNote);
  assert.equal(persisted.node.imageUrl, node.imageUrl, 'Default save must not promote or replace the V3 guide image.');
  await page.locator('.photo-draft').waitFor({ state: 'detached' });
  passed('real POST persists observation and clears the local pending draft', { observationId: savedObservation.id });

  const recordsPage = await context.newPage();
  await recordsPage.goto(`${local.origin}/admin-ar-v4.html`, { waitUntil: 'networkidle' });
  await ready(recordsPage);
  await recordsPage.getByText(testNote, { exact: true }).waitFor();
  assert.equal(await recordsPage.getByRole('tab', { name: '後台紀錄', exact: true }).getAttribute('aria-selected'), 'true');
  assert.ok((await recordsPage.locator('.record-card').count()) >= 1);
  passed('separate backend records page reads persisted photo, heading and note');
  await recordsPage.close();

  await switchTab(page, '方向校正');
  await page.getByLabel('節點角度數值', { exact: true }).fill('135');
  await page.locator('details.advanced > summary').click();
  await page.getByLabel('樓層地圖北向', { exact: true }).fill('25');
  await page.locator('details.advanced input[type="checkbox"]').check();
  await saveAndWait(page, '保存節點校正到後台');
  const calibrated = await snapshot();
  assert.equal(calibrated.node.guideReferenceBearing, 135);
  assert.equal(calibrated.node.guideDirectionMode, 'manual');
  assert.equal(calibrated.floor.mapUpHeading, 25);
  assert.equal(calibrated.node.fieldObservations.find(item => item.id === savedObservation.id).mapBearing, 90);
  passed('calibration saves node bearing and explicit floor heading without rewriting historical photo direction');

  // This is a reference-image self-match for wiring verification, never independent localization evidence.
  const recognitionText = await recognizeFile(page, 'saved-reference-self-match.jpg', savedObservation.imageUrl);
  if (!recognitionText.includes('候選節點')) {
    // Diagnostic only: determine whether the legacy target-in-frame area gate rejects full-frame matches.
    // The original full-frame assertion below remains mandatory.
    const insetImage = await page.evaluate(async source => {
      const image = new Image(); image.src = source; await image.decode();
      const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 900;
      const context = canvas.getContext('2d'); context.fillStyle = '#8c918c'; context.fillRect(0, 0, 1200, 900);
      context.drawImage(image, 120, 90, 960, 720);
      return canvas.toDataURL('image/jpeg', 0.92);
    }, savedObservation.imageUrl);
    report.selfMatchDiagnostics = {
      fullFrameStatus: recognitionText,
      insetStatus: await recognizeFile(page, 'diagnostic-reference-inset.jpg', insetImage),
    };
  }
  assert.match(recognitionText, /候選節點/);
  assert.match(recognitionText, /單張照片比對/);
  assert.match(recognitionText, /不代表精確座標/);
  assert.ok(report.workers.length > 0, 'ORB must run in an actual browser worker.');
  assert.equal(await page.locator('.candidate img').getAttribute('src'), savedObservation.imageUrl);
  passed('real ORB browser worker matches the saved reference image against itself', { scope: 'integration self-match only; not field localization validation', result: recognitionText });

  const negativeResult = await recognizeFile(page, 'unrelated-blank-negative.jpg', images.blank);
  assert.match(negativeResult, /尚未匹配/);
  assert.equal(await page.locator('.candidate').count(), 0);
  passed('real ORB rejects an unrelated featureless blank image');

  await switchTab(page, '照片採集');
  await uploadAndWait(page, 1, 'synthetic-panorama-2to1.jpg', images.panorama);
  await page.getByLabel('環景透視預覽', { exact: true }).waitFor();
  await page.getByLabel('環景水平取景', { exact: true }).fill('45');
  await page.getByLabel('環景中央對應的地圖方向（可留白）', { exact: true }).fill('90');
  await page.getByRole('button', { name: '擷取這個方向', exact: true }).click();
  await page.getByAltText('待上傳的節點參考照片', { exact: true }).waitFor();
  assert.equal(await page.getByLabel('照片拍攝朝向', { exact: true }).inputValue(), '135');
  assert.equal((await snapshot()).node.fieldObservations.length, initialObservationCount + 1, 'Panorama extraction must remain a draft until uploaded.');
  passed('2:1 panorama is projected to a local perspective draft with mapped yaw and no original upload');

  await switchTab(page, '後台紀錄');
  const desktop = await assertNoOverflow(page, '1440px desktop');
  const desktopPath = path.join(outputDir, 'v4-field-desktop.png');
  await page.screenshot({ path: desktopPath, fullPage: true });
  report.screenshots.push(desktopPath);
  await page.setViewportSize({ width: 390, height: 844 });
  await switchTab(page, '照片採集');
  const mobile = await assertNoOverflow(page, '390px mobile');
  await page.waitForFunction(() => {
    const canvas = document.querySelector('canvas[aria-label="環景透視預覽"]');
    if (!canvas || canvas.width !== 768 || canvas.height !== 576) return false;
    const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
    return pixels.some((value, index) => index % 4 === 3 && value > 0);
  });
  passed('panorama preview redraws after leaving and returning to the capture tab');
  const mobilePath = path.join(outputDir, 'v4-field-mobile.png');
  await page.screenshot({ path: mobilePath, fullPage: true });
  report.screenshots.push(mobilePath);
  passed('desktop and 390px mobile layouts have no document-level horizontal overflow', { desktop, mobile });

  const tabs = [['location', '作業位置'], ['camera', '相機測試'], ['capture', '照片採集'], ['calibrate', '方向校正'], ['records', '後台紀錄']];
  for (const [size, width, height] of [['mobile', 390, 844], ['desktop', 1440, 1100]]) {
    await page.setViewportSize({ width, height });
    for (const [id, name] of tabs) {
      await switchTab(page, name);
      await assertNoOverflow(page, `${size} ${name}`);
      const tablist = page.getByRole('tablist');
      const beforeScroll = await tablist.boundingBox();
      assert.ok(beforeScroll && beforeScroll.y >= 0 && beforeScroll.y + beforeScroll.height <= height + 1, `${size} ${name}: navigation must stay inside viewport`);
      assert.ok(beforeScroll.y + beforeScroll.height >= height - 32, `${size} ${name}: navigation must stay near viewport bottom`);
      await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
      const afterScroll = await tablist.boundingBox();
      assert.ok(Math.abs(afterScroll.y - beforeScroll.y) <= 1, `${size} ${name}: bottom tabs must stay fixed while scrolling`);
      for (const [, label] of tabs) {
        const button = page.getByRole('tab', { name: label, exact: true });
        assert.ok(await button.evaluate(element => {
          const box = element.getBoundingClientRect();
          const hit = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
          return hit && element.contains(hit);
        }), `${size} ${label}: bottom tab is not obscured`);
      }
      await page.evaluate(() => scrollTo(0, 0));
      const screenshot = path.join(outputDir, `v4-tab-${id}-${size}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      report.screenshots.push(screenshot);
    }
  }
  passed('all five panels expose fixed visible unobscured bottom tabs on mobile and desktop');
  await switchTab(page, '作業位置');
  await page.getByRole('tab', { name: '作業位置', exact: true }).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getByRole('tab', { name: '相機測試', exact: true }).getAttribute('aria-selected'), 'true');
  await page.keyboard.press('End');
  assert.equal(await page.getByRole('tab', { name: '後台紀錄', exact: true }).getAttribute('aria-selected'), 'true');
  await page.keyboard.press('Home');
  assert.equal(await page.getByRole('tab', { name: '作業位置', exact: true }).getAttribute('aria-selected'), 'true');
  passed('bottom tabs support ArrowRight, Home, and End keyboard navigation');

  const cameraContext = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['camera'], locale: 'zh-TW' });
  await cameraContext.route('**/*', route => {
    const url = new URL(route.request().url());
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== local.origin) {
      report.externalRequests.push({ method: route.request().method(), url: url.href });
      return route.abort('blockedbyclient');
    }
    return route.continue();
  });
  const cameraPage = await cameraContext.newPage();
  cameraPage.on('pageerror', error => report.pageErrors.push(error.message));
  cameraPage.on('console', message => { if (message.type() === 'error') report.consoleErrors.push(message.text()); });
  await cameraPage.goto(`${local.origin}/ar-v4-field.html`, { waitUntil: 'networkidle' });
  await ready(cameraPage);
  await selectedTarget(cameraPage);
  await cameraPage.getByRole('button', { name: '前往相機拍攝', exact: true }).click();
  assert.equal(await cameraPage.getByRole('tab', { name: '相機測試', exact: true }).getAttribute('aria-selected'), 'true');
  await cameraPage.getByRole('button', { name: '開啟相機與方位感測', exact: true }).click();
  await cameraPage.waitForFunction(() => {
    const video = document.querySelector('video.camera-video.visible');
    return video && video.videoWidth > 0 && video.srcObject?.getVideoTracks().some(track => track.readyState === 'live');
  }, undefined, { timeout: 15_000 });
  await cameraPage.getByRole('button', { name: '拍攝此畫面', exact: true }).click();
  assert.equal(await cameraPage.getByRole('tab', { name: '照片採集', exact: true }).getAttribute('aria-selected'), 'true');
  await cameraPage.getByAltText('待上傳的節點參考照片', { exact: true }).waitFor();
  assert.match(await cameraPage.locator('.photo-meta').innerText(), /現場拍攝/);
  assert.equal(await cameraPage.getByLabel('照片拍攝朝向', { exact: true }).inputValue(), '');
  assert.equal((await snapshot()).node.fieldObservations.length, initialObservationCount + 1);
  await cameraPage.waitForFunction(() => {
    const video = document.querySelector('video');
    return video.paused && video.srcObject?.getVideoTracks().every(track => !track.enabled);
  });
  await switchTab(cameraPage, '相機測試');
  await cameraPage.waitForFunction(() => {
    const video = document.querySelector('video');
    return !video.paused && video.srcObject?.getVideoTracks().some(track => track.enabled && track.readyState === 'live');
  });
  passed('camera shutter switches to draft and pauses stream outside its tab, then resumes on return');
  await cameraPage.getByRole('button', { name: '關閉相機', exact: true }).click();
  await cameraPage.waitForFunction(() => document.querySelector('video').srcObject === null);
  await cameraContext.close();
  passed('browser synthetic camera stream creates an unuploaded photo draft and stops cleanly', { scope: 'Chrome fake-device integration only; no physical camera or phone sensor validation' });

  assert.deepEqual(report.pageErrors, [], 'Browser runtime errors must remain empty.');
  assert.deepEqual(report.consoleErrors, [], 'Browser console errors must remain empty.');
  assert.deepEqual(report.externalRequests, [], 'The application must not request external services during this local test.');
  assert.equal(hash(await fs.readFile(path.join(rootDir, 'ar-data.json'))), originalHash);
  passed('no runtime or console errors, external requests, or changes to original ar-data.json');
  report.passed = true;
} catch (error) {
  report.passed = false;
  report.failure = error.stack || String(error);
  if (mainPage && !mainPage.isClosed()) {
    report.browserState = await mainPage.evaluate(() => ({
      recognition: document.querySelector('.recognition-status')?.textContent,
      alert: document.querySelector('[role="alert"]')?.textContent,
      busy: document.querySelector('.busy-indicator')?.textContent,
      candidate: document.querySelector('.candidate')?.textContent,
    })).catch(error => ({ error: error.message }));
    report.workerMessages = await mainPage.evaluate(() => window.__fieldWorkerMessages || []).catch(() => []);
    for (const [name, width, height] of [['desktop', 1440, 1100], ['mobile', 390, 844]]) {
      const screenshot = path.join(outputDir, `v4-field-${name}-failure.png`);
      await mainPage.setViewportSize({ width, height });
      await mainPage.screenshot({ path: screenshot, fullPage: true }).then(() => report.screenshots.push(screenshot)).catch(() => {});
    }
    console.error(`BROWSER STATE ${JSON.stringify(report.browserState)}`);
    console.error(`WORKER MESSAGES ${JSON.stringify(report.workerMessages)}`);
  }
  console.error(report.failure);
  process.exitCode = 1;
} finally {
  if (mainPage && !mainPage.isClosed()) report.workerMessages = await mainPage.evaluate(() => window.__fieldWorkerMessages || []).catch(() => report.workerMessages);
  await browser?.close();
  await local?.close();
  await fs.writeFile(path.join(outputDir, 'v4-browser-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  await fs.rm(temporaryRoot, { recursive: true, force: true });
}
