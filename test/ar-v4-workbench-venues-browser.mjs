import assert from 'node:assert/strict';
import {readFile, writeFile, mkdtemp, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import os from 'node:os';
import {chromium} from '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// The entire authenticated backend is the loopback simulator with independent
// fixture data. All HTTP writes and external requests are blocked in the page.
const rootDir = path.resolve(import.meta.dirname, '..');
const out = path.join(rootDir, 'test-output/workbench-venues');
await mkdir(out, {recursive: true});
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'ar-workbench-venues-'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const protectedPaths = ['ar-data.json', '.local/ar-v4/ar-data.json', '.local/ar-v4-fishnet/ar-data.json', 'assets/ar-v4/ar-v4-field.js'];
const fingerprint = file => readFile(path.join(rootDir, file)).then(hash).catch(e => {if (e.code === 'ENOENT') return null; throw e;});
const protectedBefore = await Promise.all(protectedPaths.map(fingerprint));
const report = {checks: [], pageErrors: [], forbiddenRequests: [], widths: []};
const browser = await chromium.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true});
let local, currentPage;

async function store(page, key, value) {
  return page.evaluate(({key, value}) => new Promise((resolve, reject) => {
    let db = null, settled = false;
    const timer = setTimeout(() => finish(new Error('Isolated IndexedDB operation timed out')), 10000);
    const finish = (error, result = null) => {
      if (settled) return;
      settled = true; clearTimeout(timer); db?.close();
      error ? reject(error) : resolve(result);
    };
    try {
      const open = indexedDB.open('ar-v4-field-drafts', 1);
      open.onupgradeneeded = () => {
        try {open.result.createObjectStore('drafts');} catch (error) {finish(error);}
      };
      open.onerror = () => finish(open.error || new Error('IndexedDB open failed'));
      open.onblocked = () => finish(new Error('Isolated IndexedDB upgrade blocked'));
      open.onsuccess = () => {
        db = open.result;
        if (settled) {db.close(); return;}
        try {
          const tx = db.transaction('drafts', value === undefined ? 'readonly' : 'readwrite');
          const operation = value === undefined ? tx.objectStore('drafts').get(key) : tx.objectStore('drafts').put(value, key);
          let result = null;
          operation.onsuccess = () => {result = operation.result ?? null;};
          operation.onerror = () => finish(operation.error || new Error('IndexedDB request failed'));
          tx.oncomplete = () => finish(null, result);
          tx.onerror = () => finish(tx.error || new Error('IndexedDB transaction failed'));
          tx.onabort = () => finish(tx.error || new Error('IndexedDB transaction aborted'));
        } catch (error) {finish(error);}
      };
    } catch (error) {finish(error);}
  }), {key, value});
}

try {
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => [0, 1].map(k => {
    const c = document.createElement('canvas'); c.width = 320; c.height = 240;
    const x = c.getContext('2d'); x.fillStyle = k ? '#d3edf4' : '#dcebd0'; x.fillRect(0, 0, 320, 240);
    x.strokeStyle = '#426463'; x.lineWidth = 18; x.strokeRect(45, 50, 230, 140);
    x.font = '24px sans-serif'; x.fillStyle = '#123'; x.fillText(k ? 'GEOX PHOTO' : 'CITY PHOTO', 65, 125);
    return c.toDataURL('image/png');
  }));
  await maker.close();
  const observation = (id, index) => ({id, capturedAt: '2026-09-07T01:02:03Z', source: 'upload', imageUrl: images[index], width: 320, height: 240, mapBearing: 90, headingSource: 'manual', note: '合成既存照片 ' + id});
  const floor = (name, id, index) => ({id, name, imageUrl: images[index], bounds: {blX: 0, blY: 0, trX: 20, trY: 15}, mapUpHeading: 0,
    markers: [
      {id: 'entrance', code: 'A', title: (index ? 'Geox' : '市民') + name + '入口', x: .2, y: .6},
      {id: 'second', code: 'B', title: (index ? 'Geox' : '市民') + name + '服務台', x: .8, y: .6},
    ].map(node => ({...node, enabled: true, navigable: true, guideReferenceBearing: 90,
      fieldObservations: [observation((index ? 'geox-' : 'city-') + id + '-' + node.id, index)]})),
    waypoints: [], edges: [{id: 'ab', start: 'entrance', end: 'second'}],
  });
  const fixture = {version: '7.1', activeProjectId: 'city-fixture', projects: [
    {project: {id: 'city-fixture', name: '市民服務中心'}, systemConfig: {}, buildings: [{id: 'shared-building', name: '市民館', floors: [floor('1F', 'shared-floor', 0)]}]},
    {project: {id: 'geox-fixture', name: 'Geox'}, systemConfig: {}, buildings: [{id: 'shared-building', name: 'Geox館', floors: [floor('1F', 'shared-floor', 1), floor('2F', 'geox-floor2', 1)]}]},
  ]};
  const fixtureBytes = Buffer.from(JSON.stringify(fixture));
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureBytes);
  const projectRevision = hash(fixtureBytes), listOnlyRevision = 'f'.repeat(64);
  local = await startLocalServer({port: 0, rootDir, dataDir});
  const previous = {projectId: 'city-fixture', floorKey: 'shared-building/shared-floor', nodeId: 'second', tab: 'location'};
  const cityScope = 'city-fixture/shared-building/shared-floor/marker/second';
  const photoDraft = observation('unsaved-city-photo', 0);
  const workDraft = {version: 1, revision: projectRevision, bearing: 123, mapUp: '0', saveMapUp: false, nextNodeId: 'entrance',
    panoFile: null, panoBatch: [], panoSaved: [], panoZero: '', panoYaw: 0, panoPitch: 0,
    steps: {location: 0, graph: 0, camera: 0, capture: 0, calibrate: 1, records: 0}, captureKind: 'photo', calibrationReview: false};
  const setup = async (width = 390, seed = true) => {
    const page = await browser.newPage({viewport: {width, height: 844}}); currentPage = page;
    page.setDefaultTimeout(20000); page.on('pageerror', e => report.pageErrors.push(e.message));
    await page.addInitScript(() => {
      window.__venueStreams = []; window.__venueCameraCalls = 0;
      Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {configurable: true, value: async () => {
        window.__venueCameraCalls++;
        const c = document.createElement('canvas'); c.width = 320; c.height = 240;
        c.getContext('2d').fillRect(0, 0, c.width, c.height);
        const stream = c.captureStream(10); window.__venueStreams.push(stream); return stream;
      }});
    });
    await page.route('**/*', route => {
      const request = route.request(), url = new URL(request.url());
      if (url.origin !== local.origin || request.method() !== 'GET') {
        report.forbiddenRequests.push({method: request.method(), path: url.pathname}); return route.abort();
      }
      if (url.pathname === '/__venue-seed') return route.fulfill({status: 200, contentType: 'text/html', body: '<!doctype html><title>Isolated fixture seed</title>'});
      return route.continue();
    });
    await page.goto(local.origin + '/__venue-seed');
    if (seed) {
      await store(page, 'selection:v4', previous);
      await store(page, cityScope, photoDraft);
      await store(page, 'work:' + cityScope, workDraft);
    }
    return page;
  };
  const settled = async page => {
    await page.locator('.flow-draft-status').filter({hasText: /已暫存|已恢復/}).waitFor();
    await page.waitForFunction(() => !document.querySelector('.flow-context')?.disabled);
  };
  const selectFunction = async (page, name) => {
    // Wizard step screens intentionally hide the bottom tabs on narrow phones.
    // The function menu is the same accessible entry at every breakpoint.
    await page.getByRole('button', {name: '功能選單', exact: true}).click();
    await page.getByRole('dialog', {name: '六大功能', exact: true})
      .getByRole('button', {name, exact: true}).click();
    await settled(page);
  };
  const checkRevision = async page => {
    await page.getByRole('button', {name: '工作台說明', exact: true}).click();
    const dialog = page.getByRole('dialog', {name: '工作台說明', exact: true});
    assert.ok((await dialog.innerText()).includes('資料版本：' + projectRevision));
    assert.ok(!(await dialog.innerText()).includes(listOnlyRevision));
    await dialog.getByRole('button', {name: '關閉說明', exact: true}).click();
  };
  const backToPicker = async page => {
    await settled(page); await page.locator('.flow-context').click();
    await page.getByRole('combobox', {name: '場域', exact: true}).waitFor();
    await settled(page);
  };
  const noOverflow = async page => assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);

  {
    const page = await setup(); let showGeox = false, listCalls = 0, projectReads = 0;
    await page.route('**/api/ar-content?*', async route => {
      const url = new URL(route.request().url());
      if (url.searchParams.get('list') !== '1') {projectReads++; return route.continue();}
      listCalls++;
      const body = {version: '7.1', activeProjectId: 'city-fixture', projects: fixture.projects.filter(p => showGeox || p.project.id === 'city-fixture').map(p => ({project: p.project, stats: {}}))};
      return route.fulfill({status: 200, contentType: 'application/json', headers: {'x-ar-source-blob-sha': showGeox ? listOnlyRevision : projectRevision, 'x-ar-storage': 'local'}, body: JSON.stringify(body)});
    });
    await page.goto(local.origin + '/ar-v4-field.html'); await settled(page);
    const picker = page.getByRole('combobox', {name: '場域', exact: true});
    assert.equal(await picker.inputValue(), 'city-fixture');
    assert.equal(await picker.locator('option').count(), 1);
    assert.match(await page.locator('.flow-context').innerText(), /市民服務中心.*1F.*服務台/s);
    const readsBefore = projectReads;
    showGeox = true; await page.getByRole('button', {name: '重新讀取場域', exact: true}).click();
    await page.waitForFunction(() => document.querySelector('[aria-label="場域"]')?.querySelectorAll('option').length === 2);
    await settled(page);
    assert.equal(projectReads, readsBefore, 'list refresh does not replace loaded project');
    assert.equal(await picker.inputValue(), 'city-fixture');
    await checkRevision(page);
    assert.equal((await store(page, 'work:' + cityScope)).bearing, 123, 'calibration draft survives list refresh');
    assert.deepEqual(await store(page, cityScope), photoDraft, 'photo draft survives list refresh');
    assert.ok(listCalls >= 2);
    await picker.selectOption('geox-fixture'); await settled(page);
    assert.equal(await picker.inputValue(), 'geox-fixture');
    assert.match(await page.locator('.flow-context').innerText(), /Geox.*1F.*入口/s, 'same node id in another venue is not reused as a location');
    assert.equal(await page.getByRole('combobox', {name: '樓層', exact: true}).locator('option').count(), 2);
    assert.equal(new URL(page.url()).searchParams.get('projectId'), 'geox-fixture');
    assert.deepEqual(await store(page, cityScope), photoDraft);
    await selectFunction(page, '後台紀錄');
    const records = page.getByRole('tabpanel', {name: '後台紀錄', exact: true});
    assert.match(await records.innerText(), /1 張照片/);
    await records.getByRole('button').filter({hasText: 'Geox1F入口'}).click();
    const detail = page.getByRole('dialog').filter({hasText: '合成既存照片 geox-shared-floor-entrance'});
    await detail.waitFor();
    assert.equal(await detail.locator('img').evaluate(img => img.complete && img.naturalWidth > 0), true, 'preexisting reference image renders');
    await detail.getByRole('button', {name: '關閉面板', exact: true}).click();
    await backToPicker(page); await picker.selectOption('city-fixture'); await settled(page);
    await page.locator('.flow-footer').getByRole('button', {name: /下一步/}).click();
    await page.getByRole('combobox', {name: '目前節點', exact: true}).selectOption('second'); await settled(page);
    await selectFunction(page, '方向校正');
    assert.equal(await page.getByRole('slider', {name: '節點參考朝向', exact: true}).inputValue(), '123', 'scoped calibration draft restored on returning to its node');
    assert.deepEqual(await store(page, cityScope), photoDraft);
    await page.close(); currentPage = null;
    report.checks.push('Refresh adds Geox, preserves loaded revision/location/drafts; same-id venue switch resets location; existing photo displays; scoped draft restores');
  }

  for (const width of [360, 390, 1280]) {
    const page = await setup(width);
    await page.goto(local.origin + '/ar-v4-field.html?projectId=geox-fixture'); await settled(page);
    assert.equal(await page.getByRole('combobox', {name: '場域', exact: true}).inputValue(), 'geox-fixture', 'URL outranks stored city selection');
    assert.match(await page.locator('.flow-context').innerText(), /Geox.*1F.*入口/s);
    await noOverflow(page);
    await page.screenshot({path: path.join(out, 'geox-' + width + '.png'), fullPage: true});
    await page.getByRole('combobox', {name: '樓層', exact: true}).selectOption('shared-building/geox-floor2'); await settled(page);
    assert.match(await page.locator('.flow-context').innerText(), /Geox.*2F/s);
    await selectFunction(page, '後台紀錄');
    assert.match(await page.getByRole('tabpanel', {name: '後台紀錄', exact: true}).innerText(), /Geox2F入口/);
    await noOverflow(page);
    await page.screenshot({path: path.join(out, 'geox-records-' + width + '.png'), fullPage: true});
    assert.deepEqual(await store(page, cityScope), photoDraft);
    await page.close(); currentPage = null; report.widths.push(width);
  }
  report.checks.push('Explicit Geox deep link outranks stored prior venue; both floors and old records visible at 360/390/1280px');

  {
    const page = await setup(); const selectedRequests = [];
    page.on('request', request => {const u = new URL(request.url()); if (u.pathname === '/api/ar-content' && u.searchParams.has('projectId')) selectedRequests.push(u.searchParams.get('projectId'));});
    await page.goto(local.origin + '/ar-v4-field.html?projectId=missing-fixture');
    await page.getByRole('alert').filter({hasText: '找不到指定場域'}).waitFor();
    assert.equal(await page.getByRole('combobox', {name: '場域', exact: true}).inputValue(), '');
    assert.deepEqual(selectedRequests, [], 'missing URL never loads remembered/default project');
    assert.equal((await store(page, 'selection:v4')).projectId, 'city-fixture', 'bad URL does not overwrite remembered selection');
    await page.getByRole('combobox', {name: '場域', exact: true}).selectOption('geox-fixture'); await settled(page);
    assert.match(await page.locator('.flow-context').innerText(), /Geox/);
    await page.close(); currentPage = null;
    report.checks.push('Invalid deep link reports error without silent fallback or overwriting selection; explicit picker recovers');
  }

  {
    const page = await setup();
    await page.goto(local.origin + '/ar-v4-field.html?projectId=geox-fixture'); await settled(page);
    await selectFunction(page, '相機測試');
    await page.getByRole('button', {name: '照片定位測試', exact: true}).click();
    await page.getByRole('button', {name: '開啟相機', exact: true}).click();
    await page.getByText('相機已啟用', {exact: true}).waitFor();
    assert.equal(await page.evaluate(() => window.__venueCameraCalls), 1);
    assert.equal(await page.evaluate(() => window.__venueStreams[0].getTracks()[0].readyState), 'live');
    await backToPicker(page);
    await page.getByRole('combobox', {name: '場域', exact: true}).selectOption('city-fixture'); await settled(page);
    assert.equal(await page.evaluate(() => window.__venueStreams.every(s => s.getTracks().every(t => t.readyState === 'ended'))), true, 'leaving/switching venue stops camera');
    assert.equal(await page.evaluate(() => window.__venueCameraCalls), 1, 'venue switch does not restart camera');
    await page.getByRole('button', {name: '工作台說明', exact: true}).click();
    const help = page.getByRole('dialog', {name: '工作台說明', exact: true});
    const reads = []; const listener = request => {const u = new URL(request.url()); if (u.pathname === '/api/ar-content') reads.push(u.searchParams.get('list') === '1' ? 'list' : u.searchParams.get('projectId'));};
    page.on('request', listener);
    await help.getByRole('button', {name: '重新讀取後台', exact: true}).click();
    await page.getByRole('status').filter({hasText: '場域清單與目前場域已重新讀取'}).waitFor();
    page.off('request', listener);
    assert.deepEqual(reads, ['list', 'city-fixture'], 'backend refresh gets current list before project');
    assert.ok((await help.innerText()).includes(projectRevision));
    await help.getByRole('button', {name: '關閉說明', exact: true}).click();
    await page.close(); currentPage = null;
    report.checks.push('Synthetic camera stops across context/venue switch; full backend refresh reads list then selected project');
  }

  assert.deepEqual(report.pageErrors, []);
  assert.deepEqual(report.forbiddenRequests, [], 'no cloud requests or HTTP writes');
  assert.deepEqual(await readFile(path.join(dataDir, 'ar-data.json')), fixtureBytes, 'isolated source unchanged');
  assert.deepEqual(await Promise.all(protectedPaths.map(fingerprint)), protectedBefore, 'real datasets and bundled assets unchanged');
  report.fixtureOnly = true; report.projectRevision = projectRevision;
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log('PASS workbench venues: ' + report.checks.length + ' scenarios, isolated fixtures, no HTTP writes.');
} catch (error) {
  if (currentPage && !currentPage.isClosed()) {
    await currentPage.screenshot({path: path.join(out, 'FAIL.png'), fullPage: true}).catch(() => {});
    console.error(await currentPage.locator('body').innerText().catch(() => 'Page unavailable'));
  }
  throw error;
} finally {
  await browser.close(); await local?.close();
}
