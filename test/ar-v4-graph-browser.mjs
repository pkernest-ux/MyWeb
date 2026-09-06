import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';

// Only synthetic fixtures in an ephemeral loopback server are mutated by this suite.
// The real 8080 service, GitHub, and repository ar-data.json are never write targets.
const rootDir = path.resolve(import.meta.dirname, '..');
const outputDir = path.join(rootDir, 'test-output', 'v4-graph');
// Set AR_V4_MANUAL_DIR to additionally publish the captures into a manual workspace.
// Routine regression runs keep every generated artifact under ignored test-output.
const manualRoot = process.env.AR_V4_MANUAL_DIR ? path.resolve(process.env.AR_V4_MANUAL_DIR) : null;
const manualShots = manualRoot ? path.join(manualRoot, 'work', 'integration-shots') : path.join(outputDir, 'screenshots');
const chromePath = process.env.AR_V4_TEST_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const playwrightPath = process.env.AR_V4_TEST_PLAYWRIGHT || '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const { chromium } = await import(pathToFileURL(playwrightPath).href);
const digest = data => createHash('sha256').update(data).digest('hex');
const report = { passed: false, createdAt: new Date().toISOString(), scenarios: [], screenshots: [], pageErrors: [], externalRequests: [], writes: [], limitations: ['All floor plans, node names, and data are fictional.', 'All POSTs target one ephemeral loopback server; never the user 8080 service or GitHub.', 'Camera/photo fixture is synthetic; no field positioning accuracy is claimed.'] };
const demo = { projectId: 'manual-demo', buildingId: 'demo-building', floorId: 'demo-1f' };
const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'ar-v4-graph-'));
const dataDir = path.join(temporaryRoot, 'data');
const originalHash = digest(await fs.readFile(path.join(rootDir, 'ar-data.json')));
report.testSourceSha256 = digest(await fs.readFile(import.meta.filename));
report.buildHashes = {};
for (const file of ['assets/ar/ar-app.js', 'assets/ar/ar-app.css', 'assets/ar-v4/ar-v4-field.js', 'assets/ar-v4/ar-v4-field.css']) {
  report.buildHashes[file] = digest(await fs.readFile(path.join(rootDir, file)));
}
let local, browser, page, editor, reference;

const passed = (name, details = {}) => { report.scenarios.push({ name, passed: true, ...details }); console.log(`PASS ${name}`); };
async function tab(name) {
  await page.getByRole('tab', { name, exact: true }).click();
  assert.equal(await page.getByRole('tab', { name, exact: true }).getAttribute('aria-selected'), 'true');
  await page.evaluate(() => scrollTo(0, 0));
}
async function ready() {
  await page.locator('.environment-strip').filter({ hasText: '本機後台 · 不會同步 GitHub' }).waitFor();
  await page.waitForFunction(() => !!document.querySelector('select[aria-label="目前節點"]')?.value);
}
async function openEditor() {
  await tab('路網編輯');
  const iframe = page.getByTitle('地圖與路網編輯器', { exact: true });
  await iframe.waitFor();
  editor = await (await iframe.elementHandle()).contentFrame();
  await editor.locator('#current-map-image').waitFor();
  await editor.waitForFunction(() => document.querySelector('#current-map-image')?.naturalWidth > 0);
  await openToolGroup('save');
  await editor.getByRole('button', { name: '保存到本機後台', exact: true }).waitFor();
  await collapseTools();
  return editor;
}
async function shot(name, title, locator = null) {
  const file = path.join(manualShots, `${name}.png`);
  const previous = page.viewportSize();
  // A taller real viewport keeps the parent's fixed tab bar outside panel captures.
  // No CSS, text, or application DOM is altered to manufacture a screenshot.
  if (locator && name !== 'graph-bottom-tabs') {
    await page.setViewportSize({ width: previous.width, height: 2000 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(120);
  }
  if (locator) await locator.screenshot({ path: file });
  else await page.screenshot({ path: file, fullPage: false });
  report.screenshots.push({ name, title, file, simulation: 'Real application UI in an isolated synthetic project', text: await (locator || page.locator('body')).innerText().catch(() => ''), viewport: page.viewportSize() });
  if (locator && name !== 'graph-bottom-tabs') await page.setViewportSize(previous);
  console.log(`CAPTURE ${name}`);
}
async function shotInspectorFields(name, title, heading, height) {
  const previous = page.viewportSize();
  await page.setViewportSize({ width: previous.width, height: 2000 });
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(120);
  await editor.getByRole('heading', { name: heading, exact: true }).waitFor();
  const inspector = editor.getByTestId('v4-node-inspector');
  const rect = await inspector.boundingBox();
  const file = path.join(manualShots, `${name}.png`);
  const clip = { x: rect.x, y: rect.y + 64, width: rect.width, height };
  await page.screenshot({ path: file, clip });
  report.screenshots.push({ name, title, file, clip, simulation: 'Direct screenshot of actual inspector fields; no DOM modifications', text: await inspector.innerText(), viewport: page.viewportSize() });
  await page.setViewportSize(previous);
  console.log(`CAPTURE ${name}`);
}
async function snapshot() {
  const response = await fetch(`${local.origin}/api/ar-content?projectId=${demo.projectId}`);
  assert.equal(response.status, 200);
  const project = await response.json();
  const floor = project.buildings.find(b => b.id === demo.buildingId).floors.find(f => f.id === demo.floorId);
  return { project, floor, revision: response.headers.get('x-ar-source-blob-sha') };
}
async function mapPoint(x, y) {
  const bounds = await editor.locator('#current-map-image').boundingBox();
  assert.ok(bounds && bounds.width > 0, 'Map needs an actual rendered extent.');
  return { x: bounds.x + bounds.width * x, y: bounds.y + bounds.height * y };
}
async function clickMap(x, y) {
  const point = await mapPoint(x, y);
  await page.mouse.click(point.x, point.y);
}
async function clickInEditor(locator) {
  const rect = await locator.boundingBox();
  const viewport = page.viewportSize();
  if (rect && rect.y + rect.height > viewport.height - 120) {
    await page.evaluate(dy => scrollBy(0, dy), rect.y + rect.height - viewport.height + 150);
  } else if (rect && rect.y < 20) {
    await page.evaluate(dy => scrollBy(0, dy), rect.y - 30);
  }
  await locator.click();
}
async function setMode(name) {
  await openToolGroup(name === '路徑節點' ? 'path' : 'marker');
  const button = editor.getByRole('button', { name, exact: true });
  if (await button.getAttribute('aria-pressed') !== 'true') await clickInEditor(button);
  await collapseTools();
}
async function openToolGroup(id) {
  if (!await editor.locator('#v4-editor-tools').isVisible()) {
    await clickInEditor(editor.getByRole('button', { name: '工具選單', exact: true }));
  }
  const toggle = editor.locator(`#v4-tool-${id}`);
  if (await toggle.getAttribute('aria-expanded') !== 'true') await clickInEditor(toggle);
}
async function collapseTools() {
  const toggle = editor.getByRole('button', { name: '收合工具', exact: true });
  if (await toggle.isVisible()) await clickInEditor(toggle);
}
async function saveEditor(expectedStatus = 200) {
  await openToolGroup('save');
  const pending = page.waitForResponse(r => r.request().method() === 'POST' && r.url() === `${local.origin}/api/save-ar-content`).catch(waitError => ({ waitError }));
  await clickInEditor(editor.getByRole('button', { name: '保存到本機後台', exact: true }));
  await editor.getByRole('heading', { name: '確認保存到本機後台', exact: true }).waitFor();
  if (!report.screenshots.some(item => item.name === 'graph-save-confirm')) {
    await shot('graph-save-confirm', '核對專案、樓層和點線數後確認本機保存', editor.getByRole('heading', { name: '確認保存到本機後台', exact: true }).locator('..'));
  }
  await clickInEditor(editor.getByRole('button', { name: '確定執行', exact: true }));
  const response = await pending;
  if (response.waitError) throw response.waitError;
  const body = await response.json();
  assert.equal(response.status(), expectedStatus, JSON.stringify(body));
  return body;
}
async function saveField(name) {
  const pending = page.waitForResponse(r => r.request().method() === 'POST' && r.url() === `${local.origin}/api/save-ar-content`);
  await page.getByRole('button', { name, exact: true }).click();
  const response = await pending;
  assert.equal(response.status(), 200, await response.text());
  await page.locator('.notice.success').waitFor();
  await page.waitForFunction(() => !document.querySelector('.busy-indicator'));
}
async function overflow(target, label) {
  const size = await target.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
  assert.ok(size.document <= size.viewport + 1 && size.body <= size.viewport + 1, `${label}: ${JSON.stringify(size)}`);
  return size;
}
async function closeInspector() {
  const done = editor.getByRole('button', { name: '完成設定', exact: true });
  if (await done.isVisible()) {
    await clickInEditor(done);
    await page.evaluate(() => scrollTo(0, 0));
  }
}
async function setTextField(label, value) {
  const direct = editor.getByLabel(label, { exact: true });
  if (await direct.count()) return direct.fill(value);
  return editor.locator('label').filter({ hasText: new RegExp(`^${label}$`) }).locator('..').locator('input, textarea').fill(value);
}
async function mutateConcurrent(bearing = 217) {
  const before = await snapshot();
  const response = await fetch(`${local.origin}/api/save-ar-content`, {
    method: 'POST', headers: { Origin: local.origin, 'Content-Type': 'application/json', 'X-AR-Save-Contract': 'ar-field-survey-v1' },
    body: JSON.stringify({ expectedSourceBlobSha: before.revision, fieldSurvey: { ...demo, nodeId: 'A01', nodeType: 'marker', calibration: { guideReferenceBearing: bearing } } }),
  });
  assert.equal(response.status, 200, await response.text());
}

try {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(manualShots, { recursive: true });
  browser = await chromium.launch({ executablePath: chromePath, headless: true, args: ['--disable-background-networking'] });
  const context = await browser.newContext({ viewport: { width: 1180, height: 1120 }, deviceScaleFactor: 2, locale: 'zh-TW' });
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (['http:', 'https:'].includes(url.protocol) && (!local || url.origin !== local.origin)) {
      report.externalRequests.push({ url: url.href, method: route.request().method() });
      return route.abort('blockedbyclient');
    }
    if (route.request().method() === 'POST') report.writes.push({ url: url.href, method: 'POST' });
    return route.continue();
  });
  context.on('page', p => {
    p.on('pageerror', error => report.pageErrors.push(error.message));
    p.on('dialog', dialog => dialog.dismiss());
  });
  page = await context.newPage();
  page.setDefaultTimeout(15_000);
  let source;
  if (manualRoot) {
    try { source = `data:image/png;base64,${(await fs.readFile(path.join(manualRoot, 'assets/simulated-indoor-reference.png'))).toString('base64')}`; } catch {}
  }
  const images = await page.evaluate(async source => {
    const canvas = document.createElement('canvas'); canvas.width = 900; canvas.height = 530;
    const c = canvas.getContext('2d'); c.fillStyle = '#f1f3ee'; c.fillRect(0, 0, 900, 530);
    c.fillStyle = '#d5e4dd'; c.fillRect(85, 70, 400, 125); c.fillRect(85, 350, 400, 110); c.fillRect(680, 70, 150, 300);
    c.strokeStyle = '#abc4b7'; c.lineWidth = 3; c.strokeRect(85, 70, 400, 125); c.strokeRect(85, 350, 400, 110); c.strokeRect(680, 70, 150, 300);
    c.fillStyle = '#284a44'; c.font = 'bold 30px sans-serif'; c.fillText('手冊示範樓層・非現場平面圖', 200, 45);
    c.font = '23px sans-serif'; c.fillText('展示區', 240, 142); c.fillText('休憩區', 240, 414); c.fillText('服務櫃台', 695, 135);
    c.fillText('入口 A01', 112, 328); c.fillText('轉角 A02', 535, 328); c.fillText('A03', 510, 136); c.font = '22px sans-serif'; c.fillText('↑ 地圖上方 0°', 625, 491);
    const map = canvas.toDataURL('image/png');
    if (source) { const img = new Image(); img.src = source; await img.decode(); canvas.width = 720; canvas.height = Math.round(img.height * 720 / img.width); c.drawImage(img, 0, 0, canvas.width, canvas.height); }
    return { map, photo: canvas.toDataURL('image/jpeg', .74), width: canvas.width, height: canvas.height };
  }, source);
  reference = images.photo;
  const observation = { id: 'demo-existing-observation', source: 'upload', imageUrl: reference, mapBearing: 90, headingSource: 'manual', note: '既有 V4 觀測，路網編輯不可遺失', capturedAt: '2026-09-05T01:00:00.000Z', width: images.width, height: images.height };
  const collection = { version: '7.1', activeProjectId: demo.projectId, projects: [{ version: '7.1', project: { id: demo.projectId, name: '手冊示範場域（模擬）', description: '完全虛構、隔離資料', updatedAt: '2026-09-05T01:00:00.000Z' }, systemConfig: {}, buildings: [{ id: demo.buildingId, name: '導覽展示館', floors: [{ id: demo.floorId, name: '1F 示範樓層', imageUrl: images.map, bounds: { blX: 0, blY: 0, trX: 90, trY: 53 }, mapUpHeading: 0, markers: [{ id: 'A01', code: 'A01', title: 'A01 入口', x: .2, y: .5, enabled: true, navigable: true, imageUrl: reference, guideReferenceBearing: 90, guideDirectionMode: 'manual', fieldObservations: [observation] }, { id: 'A02', code: 'A02', title: 'A02 轉角', x: .63, y: .5, enabled: true, navigable: true, guideReferenceBearing: 0 }, { id: 'A03', code: 'A03', title: 'A03 服務櫃台', x: .63, y: .22, enabled: true, navigable: true, guideReferenceBearing: 90 }], waypoints: [], edges: [{ id: 'A01-A02', start: 'A01', end: 'A02' }, { id: 'A02-A03', start: 'A02', end: 'A03' }] }] }] }] };
  const secondaryProject = structuredClone(collection.projects[0]);
  secondaryProject.project.id = 'manual-second'; secondaryProject.project.name = '第二教學場域（模擬）';
  secondaryProject.buildings[0].id = 'second-building';
  secondaryProject.buildings[0].name = '第二展示館';
  secondaryProject.buildings[0].floors[0].id = 'second-1f';
  const upperFloor = structuredClone(secondaryProject.buildings[0].floors[0]);
  upperFloor.id = 'second-2f'; upperFloor.name = '2F 非預設示範樓層';
  for (const marker of upperFloor.markers) marker.id = `upper-${marker.id}`;
  for (const edge of upperFloor.edges) { edge.start = `upper-${edge.start}`; edge.end = `upper-${edge.end}`; }
  secondaryProject.buildings[0].floors.push(upperFloor);
  collection.projects.push(secondaryProject);
  await fs.writeFile(path.join(dataDir, 'ar-data.json'), JSON.stringify(collection, null, 2));
  local = await startLocalServer({ port: 0, rootDir, dataDir }); report.allowedOrigin = local.origin;
  assert.notEqual(new URL(local.origin).port, '8080');
  await page.goto(`${local.origin}/ar-v4-field.html`, { waitUntil: 'networkidle' }); await ready();
  assert.equal(await page.getByRole('tab').count(), 6);
  await shot('graph-bottom-tabs', '新增第六個路網頁籤', page.getByRole('tablist'));
  await page.getByLabel('場域', { exact: true }).selectOption('manual-second');
  await page.getByLabel('樓層', { exact: true }).selectOption('second-building/second-2f');
  await openEditor();
  await editor.waitForFunction(() => document.querySelector('select[aria-label="編輯專案"]')?.value === 'manual-second'
    && document.querySelector('select[aria-label="切換目前編輯樓層"]')?.value === 'second-2f');
  passed('first editor open honors a non-default project and non-first floor');
  await tab('作業位置');
  await page.getByLabel('場域', { exact: true }).selectOption(demo.projectId);
  await page.getByLabel('樓層', { exact: true }).selectOption(`${demo.buildingId}/${demo.floorId}`);
  await openEditor();
  await editor.waitForFunction(({ projectId, floorId }) => document.querySelector('select[aria-label="編輯專案"]')?.value === projectId
    && document.querySelector('select[aria-label="切換目前編輯樓層"]')?.value === floorId, demo);
  await shot('graph-editor', '內嵌路網編輯入口與工具', page.getByTitle('地圖與路網編輯器', { exact: true }));
  assert.equal(await editor.getByLabel('切換目前編輯樓層', { exact: true }).inputValue(), demo.floorId);
  passed('six tabs open an embedded editor at the exact selected project and floor');

  await setMode('路徑節點');
  await clickMap(.63, .5); // Existing A02 becomes route origin.
  await closeInspector();
  await clickMap(.43, .5); // New waypoint and A02 link.
  assert.equal(await editor.locator('.waypoint-pin').count(), 1);
  await clickMap(.63, .22); // Connect new waypoint to existing A03.
  await closeInspector();
  const waypoint = editor.locator('.waypoint-pin').first();
  await waypoint.click();
  await editor.getByLabel('轉角名稱', { exact: true }).fill('A04 中央走廊');
  await editor.getByLabel('對位提示文字', { exact: true }).fill('教學示範：站在走廊中央，面向服務櫃台。');
  await shot('graph-route-node', '新增路網轉折點：名稱、位置、對位提示', editor.getByTestId('v4-node-inspector'));
  await shotInspectorFields('graph-route-fields', '路徑節點的座標、名稱與提示欄位', '轉折點 (Waypoint) 設定', 500);
  await closeInspector();
  const beforeDrag = await waypoint.boundingBox();
  await page.mouse.move(beforeDrag.x + beforeDrag.width / 2, beforeDrag.y + beforeDrag.height / 2);
  await page.mouse.down(); await page.mouse.move(beforeDrag.x + beforeDrag.width / 2 + 35, beforeDrag.y + beforeDrag.height / 2 - 20, { steps: 8 }); await page.mouse.up();
  await closeInspector();
  const afterDrag = await waypoint.boundingBox();
  assert.ok(Math.abs(afterDrag.x - beforeDrag.x) > 10, 'Dragging must move waypoint.');
  await shot('03-route-waypoint-links', '新增 A04 轉折點、連線與拖曳後的路網', page.getByTitle('地圖與路網編輯器', { exact: true }));
  await tab('作業位置');
  assert.equal(await page.getByLabel('目前節點', { exact: true }).locator('option').count(), 3, 'Unsaved graph must not leak into the backend-backed node list.');
  assert.equal(await page.getByLabel('場域', { exact: true }).isDisabled(), true, 'A dirty graph must block changing projects.');
  await tab('照片採集');
  await page.locator('input[type="file"]').first().setInputFiles({ name: 'parallel-photo-draft.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(reference.split(',')[1], 'base64') });
  await page.getByAltText('待上傳的節點參考照片').waitFor();
  await page.getByLabel('現場備註', { exact: true }).fill('A01 照片草稿與 A04 路網草稿分開保存');
  await page.getByLabel('照片拍攝朝向', { exact: true }).fill('80');
  assert.equal(await page.getByRole('button', { name: '上傳到本機後台', exact: true }).isDisabled(), true);
  await tab('方向校正');
  assert.equal(await page.getByRole('button', { name: '保存節點校正到後台', exact: true }).isDisabled(), true);
  await openEditor();
  assert.equal(await editor.locator('.waypoint-pin').count(), 1, 'Tab navigation must retain graph draft.');
  passed('route mode creates and links a waypoint, supports drag, and retains unsaved edits across tabs');

  await setMode('AR 點位');
  await clickMap(.45, .68);
  await editor.getByRole('heading', { name: 'AR 點位設定', exact: true }).waitFor();
  await setTextField('代號', 'A05'); await setTextField('標題', 'A05 休憩區');
  await setTextField('描述說明', '教學示範 AR 點位，請再連到可行走路網。');
  await shot('graph-ar-point', 'AR 點位位置、名稱與內容設定', editor.getByTestId('v4-node-inspector'));
  await shotInspectorFields('graph-ar-fields', 'AR 點位代號、標題、描述與相對位置', 'AR 點位設定', 330);
  await closeInspector();
  await setMode('路徑節點');
  await editor.getByLabel('AR 點位 A05', { exact: true }).click();
  await closeInspector();
  await editor.locator('.waypoint-pin').first().click();
  await closeInspector();
  await saveEditor();
  await editor.getByTestId('v4-editor-notice').filter({ hasText: '已保存到本機後台' }).waitFor();
  await shot('graph-save-success', '同一份本機後台保存成功提示；未同步 GitHub', editor.getByTestId('v4-editor-notice'));
  await shot('05-saved-local', '保存成功：同一份本機後台，不是 GitHub 同步');
  const firstSaved = await snapshot();
  const newWp = firstSaved.floor.waypoints.find(n => n.guideTitle === 'A04 中央走廊');
  const newAr = firstSaved.floor.markers.find(n => n.code === 'A05');
  assert.ok(newWp && newAr);
  assert.ok(firstSaved.floor.edges.some(e => [e.start, e.end].includes(newWp.id) && [e.start, e.end].includes('A02')));
  assert.ok(firstSaved.floor.edges.some(e => [e.start, e.end].includes(newWp.id) && [e.start, e.end].includes('A03')));
  assert.ok(firstSaved.floor.edges.some(e => [e.start, e.end].includes(newWp.id) && [e.start, e.end].includes(newAr.id)), 'New AR point must be connected to a route waypoint.');
  assert.deepEqual(firstSaved.floor.markers.find(n => n.id === 'A01').fieldObservations, [observation]);
  await tab('照片採集');
  assert.equal(await page.getByLabel('現場備註', { exact: true }).inputValue(), 'A01 照片草稿與 A04 路網草稿分開保存');
  assert.equal(await page.getByLabel('照片拍攝朝向', { exact: true }).inputValue(), '80');
  assert.equal(await page.getByRole('button', { name: '上傳到本機後台', exact: true }).isDisabled(), false);
  passed('dirty graph blocks project and field writes while a separate photo draft survives graph saving');
  await tab('作業位置');
  await page.getByLabel('目前節點', { exact: true }).selectOption(newWp.id);
  assert.equal(await page.getByLabel('目前節點', { exact: true }).locator('option').count(), 5);
  await shot('graph-location-updated', '保存後 V4 作業位置立即顯示新節點與連線', page.locator('#field-panel-location'));
  passed('graph POST persists links and AR point without losing existing V4 observations; parent refreshes node list');

  await tab('照片採集');
  await page.locator('input[type="file"]').first().setInputFiles({ name: 'synthetic-reference.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(reference.split(',')[1], 'base64') });
  await page.getByAltText('待上傳的節點參考照片').waitFor();
  await page.getByLabel('照片拍攝朝向', { exact: true }).fill('90');
  await page.getByLabel('現場備註', { exact: true }).fill('路網新節點 A04 補拍測試，非現場定位驗收。');
  await saveField('上傳到本機後台');
  await tab('方向校正');
  await page.getByLabel('節點角度數值', { exact: true }).fill('95');
  await saveField('保存節點校正到後台');
  await openEditor();
  await setMode('路徑節點');
  await editor.locator('.waypoint-pin').first().click();
  await editor.getByLabel('轉角名稱', { exact: true }).fill('A04 中央走廊（已補拍）');
  await closeInspector(); await saveEditor();
  const withPhoto = await snapshot();
  const observedWp = withPhoto.floor.waypoints.find(n => n.id === newWp.id);
  assert.equal(observedWp.guideReferenceBearing, 95);
  assert.equal(observedWp.fieldObservations.length, 1);
  assert.equal(observedWp.fieldObservations[0].mapBearing, 90);
  assert.equal(withPhoto.floor.markers.find(n => n.id === 'A01').fieldObservations.length, 1);
  await page.reload({ waitUntil: 'networkidle' }); await ready();
  await page.getByLabel('目前節點', { exact: true }).selectOption(newWp.id);
  await tab('後台紀錄');
  await page.getByText('路網新節點 A04 補拍測試，非現場定位驗收。', { exact: true }).waitFor();
  await shot('07-photo-record-after-graph-save', '新路網節點照片与校正經再次保存仍保留', page.locator('#field-panel-records'));
  passed('new waypoint accepts a photo and calibration; subsequent graph save and page reload retain both');

  await openEditor();
  await setMode('路徑節點');
  await editor.locator('.waypoint-pin').first().click();
  await editor.getByLabel('轉角名稱', { exact: true }).fill('A04 衝突待核對草稿');
  await closeInspector();
  await mutateConcurrent();
  await saveEditor(409);
  await editor.getByTestId('v4-editor-notice').filter({ hasText: '草稿' }).waitFor();
  await shot('graph-conflict-notice', '真實 409 版本衝突提示，草稿保留', editor.getByTestId('v4-editor-notice'));
  await shot('08-conflict-preserves-draft', '另一人先保存時拒絕舊版本；草稿仍保留');
  assert.equal((await snapshot()).floor.waypoints.find(n => n.id === newWp.id).guideTitle, 'A04 中央走廊（已補拍）');
  await tab('照片採集'); await openEditor();
  await editor.locator('.waypoint-pin').first().click();
  assert.equal(await editor.getByLabel('轉角名稱', { exact: true }).inputValue(), 'A04 衝突待核對草稿');
  await closeInspector();
  const downloadEvent = page.waitForEvent('download');
  await openToolGroup('save');
  await editor.getByRole('button', { name: '匯出草稿', exact: true }).click();
  const download = await downloadEvent;
  const exportedPath = path.join(outputDir, 'conflict-draft.json'); await download.saveAs(exportedPath);
  const exported = JSON.parse(await fs.readFile(exportedPath, 'utf8'));
  assert.ok(JSON.stringify(exported).includes('A04 衝突待核對草稿'));
  await clickInEditor(editor.getByRole('button', { name: '我知道了', exact: true }));
  assert.equal((await snapshot()).floor.markers.find(n => n.id === 'A01').guideReferenceBearing, 217);
  passed('real 409 rejects stale graph write, preserves in-memory draft through tab switches, and exports recoverable JSON');

  await page.setViewportSize({ width: 390, height: 844 });
  await tab('作業位置');
  const mobileParent = await overflow(page, 'mobile parent');
  await shot('09-mobile-six-tabs', '手機版：六個底部按鈕');
  await openEditor();
  const mobileEditor = await overflow(editor, 'mobile iframe');
  await setMode('路徑節點');
  const frameTop = await page.getByTitle('地圖與路網編輯器', { exact: true }).boundingBox();
  await page.evaluate(y => scrollBy(0, y - 20), frameTop.y);
  const nodesBeforeMapControls = await editor.locator('[data-node-id]').count();
  await clickInEditor(editor.getByRole('button', { name: '放大平面圖', exact: true }));
  await clickInEditor(editor.getByRole('button', { name: '縮小平面圖', exact: true }));
  await clickInEditor(editor.getByRole('button', { name: '顯示完整平面圖', exact: true }));
  assert.equal(await editor.locator('[data-node-id]').count(), nodesBeforeMapControls, 'Zoom/fit UI pointer events must never create graph nodes.');
  const fittedMap = await editor.locator('#current-map-image').boundingBox();
  assert.ok(fittedMap.width <= mobileEditor.viewport, 'The fit-map action must adapt a desktop viewport to the mobile width.');
  await shot('10-mobile-map-editor', '手機版內嵌編輯與工具');
  const tabs = await page.getByRole('tab').evaluateAll(elements => elements.map(e => { const r = e.getBoundingClientRect(); return { x: r.x, right: r.right, bottom: r.bottom, width: r.width }; }));
  assert.equal(tabs.length, 6); assert.ok(tabs.every(r => r.x >= -1 && r.right <= 391 && r.width >= 40));
  passed('390 x 844 mobile parent and editor have no horizontal document overflow; all six tab buttons fit', { mobileParent, mobileEditor });
  assert.deepEqual(report.pageErrors, []); assert.deepEqual(report.externalRequests, []);
  assert.ok(report.writes.every(r => r.url.startsWith(`${local.origin}/`)));
  assert.equal(digest(await fs.readFile(path.join(rootDir, 'ar-data.json'))), originalHash);
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error); console.error(report.failure); process.exitCode = 1;
  if (page) await page.screenshot({ path: path.join(outputDir, 'failure.png'), fullPage: true }).catch(() => {});
} finally {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));
  if (manualRoot) await fs.writeFile(path.join(manualRoot, 'work', 'integration-report.json'), JSON.stringify(report, null, 2));
  await browser?.close(); await local?.close();
  await fs.rm(temporaryRoot, { recursive: true, force: true });
  console.log(JSON.stringify({ passed: report.passed, scenarioCount: report.scenarios.length, screenshotCount: report.screenshots.length, failure: report.failure }, null, 2));
}
