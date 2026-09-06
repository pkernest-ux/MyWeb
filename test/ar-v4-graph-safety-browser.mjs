import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';

// Synthetic browser safety tests, never a field-accuracy claim. The iframe
// messages and delayed GET responses below deliberately exercise race boundaries.
// Only the empty-collection scenario writes data, to its ephemeral loopback API.
const rootDir = path.resolve(import.meta.dirname, '..');
const outputDir = path.join(rootDir, 'test-output', 'v4-graph-safety');
const runtimeModules = '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const { chromium } = await import(pathToFileURL(path.join(runtimeModules, 'playwright/index.mjs')).href);
const sha256 = value => createHash('sha256').update(value).digest('hex');
const sourceHash = sha256(await fs.readFile(path.join(rootDir, 'ar-data.json')));
const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'ar-v4-graph-safety-'));
const servers = [];
const contexts = [];
const report = { passed: false, createdAt: new Date().toISOString(), scenarios: [], writes: [], errors: [], blockedExternalRequests: [],
  limitations: ['All projects and nodes are fictional and stored in temporary data directories.', 'Saved hints, foreign MessageEvents, delayed GET replies and the transient API failure are synthetic.', 'Read responses come from real ephemeral local APIs; no request is allowed to the user 8080 service or GitHub.'] };
let browser, page;
const pass = (name, details = {}) => { report.scenarios.push({ name, passed: true, ...details }); console.log(`PASS ${name}`); };
const plan = 'data:image/svg+xml;base64,' + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="540"><rect width="900" height="540" fill="#e7eee9"/><path d="M90 270H720" stroke="#779e8b" stroke-width="32"/><text x="90" y="100" font-family="sans-serif" font-size="32">SYNTHETIC SAFETY FIXTURE</text></svg>').toString('base64');
const project = id => ({ project: { id, name: `安全測試 ${id}` }, systemConfig: { projectName: `安全測試 ${id}` }, buildings: [{ id: `${id}-building`, name: '模擬建物', floors: [{ id: `${id}-floor`, name: '模擬一樓', imageUrl: plan, bounds: { blX: 0, blY: 0, trX: 90, trY: 54 }, markers: [{ id: `${id}-node`, code: 'A01', title: `${id} 模擬入口`, x: .2, y: .5, enabled: true }], waypoints: [], edges: [] }] }] });
async function until(predicate, message) {
  const deadline = Date.now() + 12_000;
  while (Date.now() < deadline) { if (await predicate()) return; await new Promise(resolve => setTimeout(resolve, 25)); }
  assert.fail(message);
}
async function environment(name, collection) {
  const dataDir = path.join(temporary, name);
  await fs.mkdir(dataDir);
  await fs.writeFile(path.join(dataDir, 'ar-data.json'), JSON.stringify(collection));
  const local = await startLocalServer({ port: 0, rootDir, dataDir });
  assert.notEqual(new URL(local.origin).port, '8080');
  servers.push(local);
  const context = await browser.newContext({ viewport: { width: 1280, height: 1500 }, locale: 'zh-TW' });
  contexts.push(context);
  await context.route('**/*', route => {
    const request = route.request();
    const url = new URL(request.url());
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== local.origin) {
      report.blockedExternalRequests.push({ url: url.href, method: request.method() });
      return route.abort('blockedbyclient');
    }
    if (request.method() === 'POST') report.writes.push({ origin: local.origin, url: url.href, contract: request.headers()['x-ar-save-contract'] });
    return route.continue();
  });
  const target = await context.newPage();
  target.setDefaultTimeout(12_000);
  target.on('pageerror', error => report.errors.push(error.message));
  target.on('dialog', dialog => dialog.dismiss());
  await target.goto(`${local.origin}/ar-v4-field.html`, { waitUntil: 'networkidle' });
  await target.locator('.environment-strip').filter({ hasText: '本機後台 · 不會同步 GitHub' }).waitFor();
  return { local, context, page: target };
}
async function openEditor(target) {
  await target.getByRole('tab', { name: '路網編輯', exact: true }).click();
  const handle = await target.getByTitle('地圖與路網編輯器', { exact: true }).elementHandle();
  assert.ok(handle);
  const frame = await handle.contentFrame();
  const tools = frame.locator('#v4-editor-tools');
  await tools.waitFor({ state: 'attached' });
  if (!await tools.isVisible()) await frame.getByRole('button', { name: '工具選單', exact: true }).click();
  const saveGroup = frame.locator('#v4-tool-save');
  if (await saveGroup.getAttribute('aria-expanded') !== 'true') await saveGroup.click();
  await until(async () => await frame.getByRole('button', { name: '保存到本機後台', exact: true }).isEnabled().catch(() => false), 'Editor must finish loading.');
  return { handle, frame };
}
async function savedHint(frame, projectId, revision) {
  await frame.evaluate(({ projectId, revision }) => parent.postMessage({ type: 'ar-v4-editor-saved', projectId,
    buildingId: `${projectId}-building`, floorId: `${projectId}-floor`, sourceBlobSha: revision }, location.origin), { projectId, revision });
}

try {
  await fs.mkdir(outputDir, { recursive: true });
  browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--disable-background-networking'] });
  const env = await environment('two-projects', { version: '7.1', activeProjectId: 'P1', projects: [project('P1'), project('P2')] });
  page = env.page;
  const { handle: iframe, frame } = await openEditor(page);
  await until(async () => !await page.getByLabel('場域', { exact: true }).isDisabled(), 'Host must receive clean editor status.');
  const snapshot = await fetch(`${env.local.origin}/api/ar-content?list=1`);
  const revision = snapshot.headers.get('x-ar-source-blob-sha');

  // Count only the host's authoritative list GETs, not the editor's own reads.
  const held = [];
  let reverseLists = false;
  let failHostProject = false;
  let listRequests = 0;
  await page.route('**/api/ar-content?*', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (request.frame() !== page.mainFrame()) return route.fallback();
    if (url.searchParams.get('list') === '1') {
      listRequests += 1;
      if (reverseLists) { const response = await route.fetch(); held.push({ route, response }); return; }
    }
    if (failHostProject && url.searchParams.has('projectId')) {
      return route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'Synthetic transient API read failure', code: 'TEST_TRANSIENT_READ' }) });
    }
    return route.fallback();
  });

  const hint = { type: 'ar-v4-editor-saved', projectId: 'P2', buildingId: 'P2-building', floorId: 'P2-floor', sourceBlobSha: revision };
  await page.evaluate(data => window.postMessage(data, location.origin), hint); // Correct origin, wrong source.
  await frame.evaluate(data => parent.dispatchEvent(new MessageEvent('message', { origin: 'https://foreign.invalid', source: window, data })), hint); // Correct source, wrong origin.
  await page.evaluate(() => window.postMessage({ type: 'ar-v4-editor-status', dirty: true, busy: true }, location.origin));
  await page.waitForTimeout(200);
  assert.equal(listRequests, 0);
  assert.equal(await page.getByLabel('場域', { exact: true }).inputValue(), 'P1');
  assert.equal(await page.getByLabel('場域', { exact: true }).isDisabled(), false);
  pass('foreign-origin and wrong-source messages do not refresh, switch project, or lock the host');

  reverseLists = true;
  await savedHint(frame, 'P1', revision);
  await until(() => held.length === 1, 'First saved hint must request an authoritative list.');
  assert.equal(await page.getByLabel('場域', { exact: true }).isDisabled(), true, 'Host must lock before list GET completes.');
  await savedHint(frame, 'P2', revision);
  await until(() => held.length === 2, 'Second saved hint must request an authoritative list.');
  reverseLists = false;
  await held[1].route.fulfill({ response: held[1].response });
  await until(async () => await page.getByLabel('場域', { exact: true }).inputValue() === 'P2', 'Latest saved hint should select P2.');
  await held[0].route.fulfill({ response: held[0].response });
  await until(async () => !await page.getByLabel('場域', { exact: true }).isDisabled(), 'Latest refresh must unlock after project GET.');
  await page.waitForTimeout(200);
  assert.equal(await page.getByLabel('場域', { exact: true }).inputValue(), 'P2');
  assert.equal(await page.getByLabel('樓層', { exact: true }).inputValue(), 'P2-building/P2-floor');
  assert.equal(await page.getByLabel('目前節點', { exact: true }).inputValue(), 'P2-node');
  assert.equal(report.writes.length, 0, 'Synthetic saved hints are never writes.');
  pass('reversed saved-hint list GETs keep the latest project, floor, and node without any write', { requestedHints: ['P1', 'P2'], releasedReplies: ['P2', 'P1'] });

  await page.getByRole('tab', { name: '作業位置', exact: true }).click();
  failHostProject = true;
  await page.getByRole('button', { name: '重新讀取後台', exact: true }).click();
  await page.locator('.environment-strip').filter({ hasText: '靜態資料 · 唯讀模式' }).waitFor();
  await until(async () => !(await iframe.evaluate(element => element.inert)), 'Iframe must unlock after fallback finishes.');
  assert.equal(await iframe.evaluate(element => element.isConnected && element === document.querySelector('iframe[title="地圖與路網編輯器"]')), true);
  assert.equal(await iframe.contentFrame(), frame);
  assert.equal(await page.getByTitle('地圖與路網編輯器', { exact: true }).count(), 1);
  await page.getByRole('tab', { name: '路網編輯', exact: true }).click();
  assert.equal(await frame.getByRole('button', { name: '匯出草稿', exact: true }).isEnabled(), true);
  assert.equal(await frame.getByRole('button', { name: '讀取本機後台', exact: true }).isEnabled(), true);
  pass('transient read fallback retains the exact iframe element/window and keeps export/reload usable');
  failHostProject = false;
  await page.screenshot({ path: path.join(outputDir, 'readonly-retained-editor.png'), fullPage: false });
  await env.context.close();

  const empty = await environment('empty-collection', { version: '7.1', activeProjectId: null, projects: [] });
  page = empty.page;
  assert.equal(await page.getByLabel('場域', { exact: true }).locator('option').count(), 0);
  const opened = await openEditor(page);
  const newProjectId = await opened.frame.getByLabel('編輯專案', { exact: true }).inputValue();
  assert.ok(newProjectId, 'Empty backend must provide an explicit editable new project.');
  const pendingSave = page.waitForResponse(response => response.request().method() === 'POST' && response.url() === `${empty.local.origin}/api/save-ar-content`);
  await opened.frame.getByRole('button', { name: '保存到本機後台', exact: true }).click();
  await opened.frame.getByRole('heading', { name: '確認保存到本機後台', exact: true }).waitFor();
  await opened.frame.getByRole('button', { name: '確定執行', exact: true }).click();
  const response = await pendingSave;
  const result = await response.json();
  assert.equal(response.status(), 200, JSON.stringify(result));
  assert.equal(result.storage, 'local');
  assert.equal(result.projectId, newProjectId);
  await until(async () => await page.getByLabel('場域', { exact: true }).inputValue() === newProjectId, 'Saved new project must be read back by the host.');
  const exported = await fetch(`${empty.local.origin}/api/ar-field-export`).then(response => response.json());
  assert.equal(exported.projects.length, 1);
  assert.equal(exported.projects[0].project.id, newProjectId);
  assert.equal(exported.activeProjectId, newProjectId);
  assert.equal(await page.getByLabel('場域', { exact: true }).locator('option').count(), 1);
  assert.ok(exported.projects[0].buildings.length > 0);
  assert.equal(report.writes.length, 1);
  assert.equal(report.writes[0].origin, empty.local.origin);
  pass('empty collection opens the editor, creates and saves one new project, and refreshes the parent from the real API');
  await page.screenshot({ path: path.join(outputDir, 'empty-project-saved.png'), fullPage: false });
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.blockedExternalRequests, []);
  assert.equal(sha256(await fs.readFile(path.join(rootDir, 'ar-data.json'))), sourceHash);
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error);
  console.error(report.failure);
  await page?.screenshot({ path: path.join(outputDir, 'failure.png'), fullPage: false }).catch(() => {});
  process.exitCode = 1;
} finally {
  for (const context of contexts) await context.close().catch(() => {});
  await browser?.close();
  for (const server of servers) await server.close();
  await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));
  await fs.rm(temporary, { recursive: true, force: true });
}
console.log(JSON.stringify(report, null, 2));
