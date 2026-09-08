import assert from 'node:assert/strict';
import {readFile, writeFile, mkdtemp, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import os from 'node:os';
import {chromium} from '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';

// All route data, maps and reference photos are synthetic and live in a unique
// temporary directory. This test never reads an authenticated cloud backend.
const rootDir = path.resolve(import.meta.dirname, '..');
const out = path.join(rootDir, 'test-output/venues');
await mkdir(out, {recursive: true});
const dataDir = await mkdtemp(path.join(os.tmpdir(), 'ar-v4-venues-'));
const protectedSource = await readFile(path.join(rootDir, 'ar-data.json'));
const fingerprint = bytes => createHash('sha256').update(bytes).digest('hex');
const bundleBefore = await readFile(path.join(rootDir, 'assets/ar-v4-navigation/app.js'));
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const report = {scenarios: [], widths: [], forbiddenRequests: [], pageErrors: [], cameraCalls: 0};
let local, currentPage;

try {
  const maker = await browser.newPage();
  const images = await maker.evaluate(() => [0, 1].map(k => {
    const c = document.createElement('canvas'); c.width = 640; c.height = 480;
    const x = c.getContext('2d'); x.fillStyle = k ? '#e9efff' : '#e7f6ed';
    x.fillRect(0, 0, 640, 480);
    for (let i = 0; i < 90; i++) {
      x.fillStyle = `hsl(${(i * 71 + k * 47) % 360},60%,30%)`;
      x.fillRect((i * 79 + k * 31) % 590, (i * 53 + k * 71) % 420, 12 + i % 30, 18 + i % 24);
    }
    x.fillStyle = '#123'; x.font = 'bold 38px sans-serif';
    x.fillText(k ? 'CITY TEST MAP' : 'GEOX TEST MAP', 45, 240);
    return c.toDataURL('image/jpeg');
  }));
  await maker.close();
  const project = (id, name, index) => ({
    project: {id, name}, systemConfig: {},
    buildings: [{id: id + '-building', name: name + '測試館', floors: [{
      id: id + '-floor', name: '1F', imageUrl: images[index],
      bounds: {blX: 0, blY: 0, trX: 20, trY: 16}, mapUpHeading: 0,
      markers: [
        {id: 'entrance', code: 'A', title: name + '入口', x: .2, y: .7},
        {id: 'service', code: 'B', title: name + '服務台', x: .7, y: .3},
      ].map(node => ({...node, enabled: true, navigable: true, publicSelectable: true,
        guideReferenceBearing: 45,
        fieldObservations: [{id: id + '-' + node.id, capturedAt: '2026-09-08T00:00:00Z',
          source: 'upload', imageUrl: images[index], width: 640, height: 480,
          mapBearing: 45, headingSource: 'manual'}],
      })),
      waypoints: [], edges: [{id: 'entrance-service', start: 'entrance', end: 'service'}],
    }]}],
  });
  const fixture = {version: '7.1', activeProjectId: 'city-fixture', projects: [
    project('city-fixture', '市民服務中心', 1), project('geox-fixture', 'Geox', 0),
  ]};
  const fixtureBytes = Buffer.from(JSON.stringify(fixture));
  await writeFile(path.join(dataDir, 'ar-data.json'), fixtureBytes);
  local = await startLocalServer({port: 0, rootDir, dataDir});
  const catalog = await (await fetch(local.origin + '/assets/ar-v4-public/catalog.json')).json();
  assert.equal(catalog.projects.length, 2);
  assert.equal(catalog.stats.targetCount, 4);

  const setup = async (width = 390) => {
    const page = await browser.newPage({viewport: {width, height: 844}});
    currentPage = page;
    page.setDefaultTimeout(15000);
    page.on('pageerror', e => report.pageErrors.push(e.message));
    await page.addInitScript(() => {
      window.__venueCameraCalls = 0;
      if (navigator.mediaDevices) Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
        value: async () => {window.__venueCameraCalls++; throw new DOMException('Synthetic permission denial', 'NotAllowedError');},
      });
    });
    await page.route('**/*', route => {
      const request = route.request(), url = new URL(request.url());
      const forbidden = request.method() !== 'GET' || url.origin !== local.origin ||
        url.pathname === '/ar-data.json' || url.pathname.startsWith('/api/') ||
        /(?:reference|observations?|panorama)\/.+\.(?:jpe?g|png|webp)$/i.test(url.pathname);
      if (forbidden) {
        report.forbiddenRequests.push({method: request.method(), path: url.pathname});
        return route.abort();
      }
      return route.continue();
    });
    return page;
  };
  const close = async page => {
    report.cameraCalls += await page.evaluate(() => window.__venueCameraCalls || 0);
    await page.close();
    if (currentPage === page) currentPage = null;
  };
  const chooser = page => page.getByRole('heading', {name: '選擇場域', exact: true});
  const enterGeox = page => page.getByRole('button', {name: '進入 Geox', exact: true});
  const enterCity = page => page.getByRole('button', {name: '進入 市民服務中心', exact: true});
  const switchVenue = page => page.getByRole('button', {name: '切換場域', exact: true});
  const checkNoOverflow = async page => {
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true, 'no horizontal overflow');
  };
  const checkDestination = async (page, name, withQr = false) => {
    await switchVenue(page).waitFor();
    await page.getByRole('combobox').first().waitFor();
    assert.match(await page.locator('header').innerText(), new RegExp(name));
    assert.equal(await page.getByRole('combobox').count(), withQr ? 1 : 2,
      withQr ? 'explicit QR origin remains hidden' : 'ordinary venue selection must not inherit a QR origin');
    const text = await page.getByRole('combobox').last().innerText();
    assert.ok(text.includes(name + '服務台'));
    assert.ok(!text.includes((name === 'Geox' ? '市民服務中心' : 'Geox') + '服務台'), 'destination options belong only to selected venue');
    assert.equal(await page.getByRole('combobox').last().inputValue(), '', 'venue starts without a stale destination');
    await checkNoOverflow(page);
  };

  for (const width of [360, 390, 1280]) {
    const page = await setup(width);
    await page.goto(local.origin + '/ar-v4-navigation.html?v=venue-regression');
    await chooser(page).waitFor();
    await enterCity(page).waitFor(); await enterGeox(page).waitFor();
    assert.equal(await page.getByRole('combobox').count(), 0, 'no route form before selecting venue');
    await checkNoOverflow(page);
    const hit = await enterGeox(page).boundingBox();
    assert.ok(hit.height >= 44 && hit.width >= 44, 'venue touch target is at least 44 CSS pixels');
    await page.screenshot({path: path.join(out, `chooser-${width}.png`), fullPage: true});
    await enterGeox(page).click();
    await checkDestination(page, 'Geox');
    assert.equal(new URL(page.url()).searchParams.get('projectId'), 'geox-fixture');
    await page.screenshot({path: path.join(out, `geox-${width}.png`), fullPage: true});
    await page.getByRole('combobox').first().selectOption('entrance');
    await page.getByRole('combobox').last().selectOption('service');
    const plan = page.locator('.v3-plan-route-button');
    if (await plan.isVisible()) await plan.click();
    await page.getByRole('button', {name: '開啟 AR 導引', exact: true}).waitFor();
    await page.getByRole('img', {name: '皮卡導引示意，非現場照片', exact: true}).waitFor();
    assert.equal(await page.locator('img[src*="hsinchu-city-hall-navigation-clean"]').count(), 0, 'Geox never shows another venue as a landmark photo');
    await page.getByRole('button', {name: '返回地圖', exact: true}).click();
    await switchVenue(page).click(); await chooser(page).waitFor();
    await enterCity(page).click(); await checkDestination(page, '市民服務中心');
    report.widths.push(width);
    await close(page);
  }
  report.scenarios.push('Venue-first entry, both cards, Geox and second venue isolation, 360/390/1280 RWD');

  {
    const page = await setup();
    await page.goto(local.origin + '/ar-v4-navigation.html?projectId=city-fixture&origin=entrance&destination=service&v=qr-test');
    await checkDestination(page, '市民服務中心', true);
    assert.equal(await chooser(page).count(), 0, 'kiosk QR bypasses venue chooser');
    assert.match(await page.locator('.v4-origin-note').innerText(), /市民服務中心入口.*QR Code/);
    await switchVenue(page).click(); await chooser(page).waitFor();
    await enterGeox(page).click(); await checkDestination(page, 'Geox');
    const params = new URL(page.url()).searchParams;
    assert.equal(params.get('projectId'), 'geox-fixture');
    assert.equal(params.has('origin'), false, 'shared node id is not carried to another venue');
    assert.equal(params.has('destination'), false, 'old destination query is cleared');
    assert.match(await page.locator('.v4-origin-note').innerText(), /未取得导覽機位置|未取得導覽機位置/);
    await close(page);
  }
  report.scenarios.push('Explicit project+origin QR shortcut; changing venue clears origin and destination even with identical node ids');

  {
    const page = await setup();
    await page.goto(local.origin + '/ar-v4-navigation.html'); await chooser(page).waitFor();
    await enterGeox(page).click(); await checkDestination(page, 'Geox');
    await page.goBack(); await chooser(page).waitFor();
    assert.equal(new URL(page.url()).searchParams.has('projectId'), false);
    await page.goForward(); await checkDestination(page, 'Geox');
    assert.equal(new URL(page.url()).searchParams.get('projectId'), 'geox-fixture');
    await close(page);
  }
  report.scenarios.push('Browser back/forward restores chooser and selected venue without stale route state');

  {
    const page = await setup();
    await page.goto(local.origin + '/ar-v4-navigation.html?projectId=deleted-venue&origin=entrance');
    const recover = page.getByRole('button', {name: '選擇其他場域', exact: true});
    await recover.waitFor();
    assert.equal(await page.getByRole('combobox').count(), 0, 'invalid project never silently falls back');
    assert.equal(new URL(page.url()).searchParams.get('projectId'), 'deleted-venue');
    await recover.click(); await chooser(page).waitFor();
    await enterGeox(page).click(); await checkDestination(page, 'Geox');
    assert.equal(new URL(page.url()).searchParams.has('origin'), false);
    await close(page);
  }
  report.scenarios.push('Unknown project shows recoverable error and never substitutes another venue');

  {
    const page = await setup();
    await page.route('**/assets/ar-v4-public/catalog.json*', route => route.fulfill({
      status: 200, contentType: 'application/json', body: JSON.stringify({...catalog, projects: [
        ...catalog.projects,
        {project: {id: 'preparing', name: '尚未建立路網'}, buildings: [{id: 'empty-building', floors: [{id: 'empty-floor', name: '1F', markers: [], waypoints: [], edges: []}]}]},
      ]}),
    }));
    await page.goto(local.origin + '/ar-v4-navigation.html'); await chooser(page).waitFor();
    const pending = page.getByRole('button', {name: '進入 尚未建立路網', exact: true});
    await pending.waitFor();
    assert.equal(await pending.isDisabled(), true, 'empty floor is not offered as a navigable venue');
    assert.match(await pending.innerText(), /準備中/);
    await enterGeox(page).click(); await checkDestination(page, 'Geox');
    await close(page);
  }
  report.scenarios.push('Venue with an empty floor is marked as preparing and cannot be selected');

  for (const failure of ['empty', 'unavailable']) {
    const page = await setup(); let failing = true, catalogCalls = 0;
    await page.route('**/assets/ar-v4-public/catalog.json*', route => {
      catalogCalls++;
      if (!failing) return route.continue();
      return failure === 'empty'
        ? route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({...catalog, projects: []})})
        : route.fulfill({status: 503, contentType: 'text/plain', body: 'Synthetic catalog unavailable'});
    });
    await page.goto(local.origin + '/ar-v4-navigation.html');
    const retry = page.getByRole('button', {name: '重新讀取', exact: true});
    await retry.waitFor();
    assert.equal(await enterGeox(page).count(), 0, 'failed/empty catalog does not invent an available venue');
    assert.equal(await page.getByRole('combobox').count(), 0);
    failing = false; await retry.click(); await chooser(page).waitFor(); await enterGeox(page).waitFor();
    assert.ok(catalogCalls >= 2, 'explicit retry refetches the catalog');
    await enterGeox(page).click(); await checkDestination(page, 'Geox');
    await close(page);
    report.scenarios.push(`${failure} catalog has explicit retry and recovers with real published venues`);
  }

  assert.deepEqual(report.forbiddenRequests, [], 'public navigation never requests raw project APIs or reference images, writes or external services');
  assert.deepEqual(report.pageErrors, []);
  assert.equal(report.cameraCalls, 0, 'venue selection and route setup never start the physical camera');
  assert.deepEqual(await readFile(path.join(rootDir, 'ar-data.json')), protectedSource, 'source data unchanged');
  assert.deepEqual(await readFile(path.join(dataDir, 'ar-data.json')), fixtureBytes, 'fixture data unchanged');
  assert.deepEqual(await readFile(path.join(rootDir, 'assets/ar-v4-navigation/app.js')), bundleBefore, 'bundle was not rebuilt during test');
  report.bundleSha256 = fingerprint(bundleBefore);
  report.fixtureOnly = true;
  report.sourceUnchanged = true;
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log('PASS venues: ' + report.scenarios.length + ' scenarios, ' + report.widths.join('/') + 'px, no raw data/API requests, no writes, no camera permission.');
} catch (error) {
  if (currentPage && !currentPage.isClosed()) {
    await currentPage.screenshot({path: path.join(out, 'FAIL.png'), fullPage: true}).catch(() => {});
    console.error(await currentPage.locator('body').innerText().catch(() => 'Page unavailable'));
  }
  throw error;
} finally {
  await browser.close();
  await local?.close();
}
