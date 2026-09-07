import assert from 'node:assert/strict';
import { readFile, writeFile, mkdtemp, mkdir } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startLocalServer } from '../scripts/ar-v4-local-server.mjs';
import { chromium } from '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const rootDir = path.resolve(import.meta.dirname, '..');
const original = await readFile(path.join(rootDir, 'ar-data.json'));
const collection = JSON.parse(original);
const project = collection.projects[0];
const building = project.buildings.find(b => b.floors.some(f => f.markers?.length));
const floor = building.floors.find(f => f.markers?.length);
const node = floor.markers[0];
node.fieldObservations = []; // isolated test fixture only
const oldGuide = node.imageUrl;
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'ar-pano-test-'));
await writeFile(path.join(dataDir, 'ar-data.json'), JSON.stringify(collection));
const local = await startLocalServer({ port: 0, rootDir, dataDir });
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  let writes = 0, interrupted = false;
  await page.route('**/*', async route => {
    if (!route.request().url().startsWith(local.origin)) return route.abort();
    if (route.request().method() === 'POST' && route.request().url().endsWith('/api/save-ar-content')) {
      writes++;
      if (writes === 4 && !interrupted) { interrupted = true; return route.abort(); }
    }
    return route.continue();
  });
  await page.goto(local.origin + '/ar-v4-field.html?ui=classic');
  await page.getByLabel('場域', { exact: true }).selectOption(project.project.id);
  await page.getByLabel('樓層', { exact: true }).selectOption(`${building.id}/${floor.id}`);
  await page.getByLabel('目前節點', { exact: true }).selectOption(node.id);
  await page.getByRole('tab', { name: '照片採集', exact: true }).click();
  await page.getByRole('button', { name: '360 環景取景' }).waitFor();
  await page.locator('input[type=file]').nth(1).setInputFiles(path.join(rootDir, 'assets/ar-v4/demo-library/panorama-generated.png'));
  await page.getByLabel('環景中央地圖方向').waitFor();
  assert.equal(await page.getByRole('button', { name: '自動拆解 8 個方向' }).isDisabled(), true);
  await page.getByLabel('環景水平取景', { exact: true }).fill('90');
  await page.getByRole('button', { name: '目前預覽面向地圖上方（0°）' }).click();
  assert.equal(await page.getByLabel('環景中央地圖方向').inputValue(), '270');
  await page.getByRole('button', { name: '自動拆解 8 個方向' }).click();
  await page.locator('.panorama-batch-grid img').nth(7).waitFor();
  await mkdir(path.join(rootDir, 'test-output'), { recursive: true });
  await page.screenshot({ path: path.join(rootDir, 'test-output/panorama-batch-mobile.png'), fullPage: true });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  await page.getByRole('button', { name: '確認方向，保存 8 張到此節點' }).click();
  await page.locator('.notice.error').filter({ hasText: '已確認 3／8' }).waitFor();
  await page.getByRole('button', { name: '重試保存剩餘照片' }).click();
  await page.locator('.notice.success').filter({ hasText: '8 張環景參考照' }).waitFor();
  const saved = JSON.parse(await readFile(path.join(dataDir, 'ar-data.json')));
  const n = saved.projects[0].buildings.find(b => b.id === building.id).floors.find(f => f.id === floor.id).markers.find(n => n.id === node.id);
  assert.equal(n.fieldObservations.length, 8);
  assert.equal(new Set(n.fieldObservations.map(o => o.id)).size, 8);
  assert.deepEqual(n.fieldObservations.map(o => o.mapBearing), [270,315,0,45,90,135,180,225]);
  assert.equal(n.imageUrl, oldGuide);
  assert.deepEqual(await readFile(path.join(rootDir, 'ar-data.json')), original);
  assert.deepEqual(errors, []);
  console.log('PASS panorama: calibration required, yaw offset, 8 previews, mobile width, interrupted upload retry, 8 unique persisted observations, V3 guide and source data unchanged.');
} finally { await browser.close(); await local.close(); }
