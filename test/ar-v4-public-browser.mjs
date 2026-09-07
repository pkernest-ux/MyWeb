import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp,mkdir} from 'node:fs/promises';
import path from 'node:path';import os from 'node:os';
import {chromium} from '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';
const rootDir=path.resolve(import.meta.dirname,'..'),out=path.join(rootDir,'test-output/public');await mkdir(out,{recursive:true});
const source=await readFile(path.join(rootDir,'ar-data.json'));const dataDir=await mkdtemp(path.join(os.tmpdir(),'ar-public-'));
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});let local,page;
try{
 const maker=await browser.newPage();const images=await maker.evaluate(()=>[0,1,2,3,4].map(k=>{const c=document.createElement('canvas');c.width=640;c.height=480;const x=c.getContext('2d');x.fillStyle='#edf2df';x.fillRect(0,0,640,480);for(let i=0;i<130;i++){x.fillStyle=`hsl(${(i*71+k*39)%360},70%,30%)`;x.fillRect((i*73+k*37)%600,(i*41+k*87)%440,7+(i*13)%35,9+(i*17)%40);}x.fillStyle='#111';x.font='bold 46px sans-serif';x.fillText(['ENTRANCE A','CORNER B','DESK C','MIDWAY D','NEARBY E'][k],50,200);return c.toDataURL('image/jpeg');}));await maker.close();
 const nodes=['a','b','c','d','e'].map((id,i)=>({id,code:id.toUpperCase(),title:['入口','轉角','服務台','沿途節點','鄰近地標'][i],x:[.15,.65,.65,.4,.85][i],y:[.8,.8,.2,.8,.8][i],enabled:true,navigable:true,guideReferenceBearing:[90,0,0,90,90][i],fieldObservations:[{id:'photo-'+id,capturedAt:'2026-09-06T00:00:00Z',source:'upload',imageUrl:images[i],width:640,height:480,mapBearing:[90,0,0,90,90][i],headingSource:'manual'}]}));
 const fixture={version:'7.1',activeProjectId:'public-demo',projects:[{project:{id:'public-demo',name:'民眾導引測試'},systemConfig:{},buildings:[{id:'building',name:'測試馆',floors:[{id:'floor',name:'1F',imageUrl:images[0],bounds:{blX:0,blY:0,trX:30,trY:20},mapUpHeading:0,markers:nodes,waypoints:[],edges:[{id:'ad',start:'a',end:'d'},{id:'db',start:'d',end:'b'},{id:'be',start:'b',end:'e'},{id:'bc',start:'b',end:'c'}]}]}]}]};
 await writeFile(path.join(dataDir,'ar-data.json'),JSON.stringify(fixture));local=await startLocalServer({port:0,rootDir,dataDir});page=await browser.newPage({viewport:{width:390,height:844}});page.setDefaultTimeout(30000);const errors=[],rawRequests=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>{const p=new URL(r.request().url()).pathname;if(p==='/ar-data.json'||p==='/api/ar-content'){rawRequests.push(p);return r.abort();}return r.request().method()==='GET'&&r.request().url().startsWith(local.origin)?r.continue():r.abort();});
 const cameraInit=({images})=>{window.__prepares=0;window.__photoPrepares=0;window.__moving=false;window.__snapshots=0;
 const originalSnapshot=HTMLCanvasElement.prototype.toDataURL;HTMLCanvasElement.prototype.toDataURL=function(...args){window.__snapshots++;return originalSnapshot.apply(this,args);};
 const NativeWorker=window.Worker;window.Worker=class extends NativeWorker{postMessage(msg,...args){if(msg?.type==='preparePacked')window.__prepares++;if(msg?.type==='prepareMany')window.__photoPrepares++;return super.postMessage(msg,...args);}};window.__cameraCalls=0;window.__scene=0;window.__alpha=270;Object.defineProperty(navigator.mediaDevices,'getUserMedia',{value:async()=>{window.__cameraCalls++;const c=document.createElement('canvas');c.width=640;c.height=480;const x=c.getContext('2d'),loaded=await Promise.all(images.map(src=>new Promise(resolve=>{const i=new Image();i.onload=()=>resolve(i);i.src=src;})));const paint=()=>{x.fillStyle='white';x.fillRect(0,0,640,480);if(window.__scene>=0)x.drawImage(loaded[window.__scene],0,0);requestAnimationFrame(paint);};paint();const stream=c.captureStream(15);window.__testStream=stream;return stream;}});setInterval(()=>{if(window.__moving)window.__alpha+=.1;window.dispatchEvent(new DeviceOrientationEvent('deviceorientation',{alpha:window.__alpha,beta:80,gamma:0,absolute:true}));},100);};await page.addInitScript(cameraInit,{images});
 await page.goto(local.origin+'/ar-v4-navigation.html?projectId=public-demo&origin=a');await page.getByRole('combobox').waitFor();assert.equal(await page.getByRole('combobox').count(),1,'QR provides origin; only destination visible');await page.getByRole('combobox').selectOption('c');await page.getByRole('button',{name:'開啟 AR 導引'}).waitFor();await page.screenshot({path:out+'/01-preview.png'});await page.getByRole('button',{name:'開啟 AR 導引'}).click();await page.getByRole('button',{name:'開啟相機與方向感測'}).click();await page.locator('.v4-public-status').filter({hasText:'目前節點'}).waitFor();assert.match(await page.locator('.v4-public-compass').innerText(),/方向待校正/,'partial match alone does not imply camera heading');await page.getByText('辨識／方向需要協助',{exact:true}).click();await page.getByRole('button',{name:'我已面向下一地標，校正方向'}).click();await page.getByText('辨識／方向需要協助',{exact:true}).click();await page.screenshot({path:out+'/02-camera.png'});assert.equal(await page.locator('.v2-ar-route-projection').count(),0);assert.equal(await page.locator('.v4-arrival').isDisabled(),true);
 const readyCount=await page.evaluate(()=>window.__prepares);
 assert.equal(readyCount,1);assert.equal(await page.evaluate(()=>window.__photoPrepares),0);
 assert.equal(await page.evaluate(()=>window.__snapshots),0,'closed diagnostics do not encode snapshots');
 await page.evaluate(()=>{window.__moving=true;});await page.waitForTimeout(4500);
 assert.equal(await page.evaluate(()=>window.__prepares),readyCount,'continuous heading changes must not rebuild indexes');
 assert.match(await page.locator('.v4-public-status').innerText(),/目前節點/);
 await page.evaluate(()=>{window.__moving=false;window.__alpha=270;});
 const initialArrow=await page.locator('.v4-public-compass svg').getAttribute('style');await page.evaluate(()=>{window.__alpha=230;});await page.waitForFunction(initial=>document.querySelector('.v4-public-compass svg')?.getAttribute('style')!==initial,initialArrow);await page.evaluate(()=>{window.__alpha=270;});
// Real worker recognition of nodes omitted by the old endpoint-only scope.
 for(const [scene,label] of [[3,'沿途節點'],[4,'鄰近地標']]){
  await page.evaluate(scene=>{window.__scene=scene;},scene);
  await page.locator('.v4-public-status').filter({hasText:'已辨識附近地標：'+label}).waitFor();
  assert.equal(await page.locator('.v4-arrival').isDisabled(),true,'nearby match never unlocks endpoint arrival');
  assert.match(await page.locator('header').innerText(),/最後確認：入口/);
 }
 await page.getByText('辨識診斷與搜尋範圍',{exact:true}).click();
 await page.locator('.v4-recognition-inspector>summary').click();
 assert.match(await page.locator('.v4-public-diagnostics').innerText(),/5 個節點 · 5 組照片特徵/);
 await page.waitForFunction(()=>document.querySelectorAll('.v4-feature-image circle').length>=12);
 const captureButton=page.getByRole('button',{name:'匯出這次辨識畫面'});await captureButton.waitFor();
 page.once('dialog',d=>d.accept());const exported=page.waitForEvent('download');await captureButton.click();
 const download=await exported;await download.saveAs(out+'/recognition-capture.json');
 const capture=JSON.parse(await readFile(out+'/recognition-capture.json','utf8'));
 assert.equal(capture.schema,'v4-recognition-capture-1');assert.equal(capture.matcher,'v4-fishnet-20260907');assert.equal(capture.context.profile,'fishnet');
 assert.equal(capture.frame.width,640);assert.equal(capture.frame.height,480);assert.match(capture.frame.imageUrl,/^data:image\/png;base64,/);
 assert.equal(capture.diagnostic.frameWidth,capture.frame.width);assert.equal(capture.context.mode,'public');assert.equal(capture.context.packUrls.length,5);
 assert.ok(!JSON.stringify(capture.context).includes('data:image'),'export must not contain reference photo payloads');
 assert.ok(!JSON.stringify(capture).includes('deviceId'));
 const replay=await page.evaluate(async capture=>{
  const worker=new Worker('/assets/ar-v4-navigation/partial-recognition-worker.js');let seq=0;
  const send=data=>new Promise((resolve,reject)=>{const requestId=++seq,timer=setTimeout(()=>reject(Error('capture replay timeout')),15000);const receive=e=>{if(e.data.requestId!==requestId)return;clearTimeout(timer);worker.removeEventListener('message',receive);e.data.ok?resolve(e.data.result):reject(Error(e.data.error));};worker.addEventListener('message',receive);worker.postMessage({requestId,...data});});
  try{
   const targets=await Promise.all(capture.context.packUrls.map(async url=>{const bytes=await(await fetch(url)).arrayBuffer(),len=new DataView(bytes).getUint32(0,true),h=JSON.parse(new TextDecoder().decode(new Uint8Array(bytes,4,len)));return{id:h.id,nodeId:h.nodeId,bytes};}));
   await send({type:'preparePacked',targets,profile:capture.context.profile});
   const img=await new Promise(resolve=>{const i=new Image();i.onload=()=>resolve(i);i.src=capture.frame.imageUrl;});
   const c=document.createElement('canvas');c.width=capture.frame.width;c.height=capture.frame.height;c.getContext('2d').drawImage(img,0,0);
   return await send({type:'detect',width:c.width,height:c.height,pixels:c.getContext('2d').getImageData(0,0,c.width,c.height).data.buffer,fullScene:true,profile:capture.context.profile});
  }finally{worker.terminate();}
 },capture);
 assert.deepEqual(replay.diagnostics,capture.diagnostic,'lossless exported analysis frame reproduces its exact diagnostics with the same packs');
 for(const width of [360,390,768,1280]){
  await page.setViewportSize({width,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'diagnostics no horizontal overflow');
 }
 await page.setViewportSize({width:390,height:844});
 await page.screenshot({path:out+'/05-nearby-diagnostics-mobile.png'});
 await page.getByText('辨識診斷與搜尋範圍',{exact:true}).click();
 await page.evaluate(()=>{window.__scene=1;});await page.waitForFunction(()=>!document.querySelector('.v4-arrival')?.disabled);assert.match(await page.locator('header').innerText(),/最後確認：入口/,'Seeing next node must not move map');await page.screenshot({path:out+'/03-candidate-not-arrival.png'});
 await page.evaluate(()=>{window.__scene=-1;});await page.waitForFunction(()=>document.querySelector('.v4-arrival')?.disabled);assert.match(await page.locator('header').innerText(),/最後確認：入口/);await page.evaluate(()=>{window.__scene=1;});await page.waitForFunction(()=>!document.querySelector('.v4-arrival')?.disabled);await page.locator('.v4-arrival').click();await page.locator('header').filter({hasText:'最後確認：轉角'}).waitFor();assert.equal(await page.evaluate(()=>window.__cameraCalls),1,'same camera across legs');await page.getByRole('button',{name:'返回路線预覽'}).click();assert.equal(await page.evaluate(()=>window.__testStream.getTracks().every(t=>t.readyState==='ended')),true);await page.getByRole('button',{name:'開啟 AR 導引'}).click();await page.locator('header').filter({hasText:'最後確認：轉角'}).waitFor();await page.getByRole('button',{name:'開啟相機與方向感測'}).click();await page.locator('.v4-public-status').waitFor();await page.evaluate(()=>{window.__scene=2;});await page.waitForFunction(()=>!document.querySelector('.v4-arrival')?.disabled);await page.locator('.v4-arrival').click();await page.getByRole('heading',{name:'已由您確認抵達'}).waitFor();assert.equal(await page.evaluate(()=>window.__testStream.getTracks().every(t=>t.readyState==='ended')),true);await page.screenshot({path:out+'/04-arrival.png'});
 for(const width of [360,768,1280]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);}

 // Reopen in the same browser profile with all pack network access blocked:
 // content-addressed IndexedDB cache must supply the descriptors.
 let packNetworkAttempts=0;
 await page.route('**/assets/ar-v4-public/packs/*.bin',r=>{packNetworkAttempts++;return r.abort();});
 await page.reload();await page.getByRole('combobox').selectOption('c');
 await page.getByRole('button',{name:'開啟 AR 導引'}).click();await page.getByRole('button',{name:'開啟相機與方向感測'}).click();
 await page.locator('.v4-public-status').filter({hasText:'目前節點'}).waitFor();
 assert.equal(packNetworkAttempts,0,'published packs reused from persistent cache');
 // Fresh profile: fail all downloads, stay on the page, then recover explicitly.
 const failed=await browser.newPage({viewport:{width:390,height:844}});await failed.addInitScript(cameraInit,{images});let failMode=true,navigations=0;
 failed.on('framenavigated',f=>{if(f===failed.mainFrame())navigations++;});
 await failed.route('**/*',r=>{const url=new URL(r.request().url());if(url.pathname==='/ar-data.json'||url.pathname==='/api/ar-content'){rawRequests.push(url.pathname);return r.abort();}
  if(url.pathname.endsWith('.bin')&&failMode)return r.fulfill({status:503,body:'test unavailable'});
  return r.request().method()==='GET'&&url.href.startsWith(local.origin)?r.continue():r.abort();});
 await failed.goto(local.origin+'/ar-v4-navigation.html?projectId=public-demo&origin=a');await failed.getByRole('combobox').selectOption('c');await failed.getByRole('button',{name:'開啟 AR 導引'}).click();await failed.getByRole('button',{name:'開啟相機與方向感測'}).click();
 await failed.locator('.v4-public-status').filter({hasText:'特徵包無法載入'}).waitFor();assert.equal(navigations,1);
 await failed.getByText('辨識／方向需要協助',{exact:true}).click();assert.equal(await failed.getByRole('button',{name:'人工確認已到此地標'}).isEnabled(),true);
 assert.equal(await failed.locator('.v4-arrival').isDisabled(),true);
 failMode=false;await failed.getByRole('button',{name:'重新啟用感測'}).click();await failed.getByRole('button',{name:'開啟相機與方向感測'}).click();
 await failed.locator('.v4-public-status').filter({hasText:'目前節點'}).waitFor();assert.equal(navigations,1);await failed.close();
 assert.deepEqual(rawRequests,[],'public never requests raw photo catalogs');assert.equal(await page.evaluate(()=>window.__photoPrepares),0);assert.deepEqual(errors,[]);assert.deepEqual(await readFile(path.join(rootDir,'ar-data.json')),source);assert.deepEqual(JSON.parse(await readFile(path.join(dataDir,'ar-data.json'))),fixture);console.log('PASS public: binary packs only, no photo catalog, heading jitter never reinitializes, closed diagnostics idle, QR origin, destination-only preview, real ORB A/B/C sequence, no auto-arrival, stale candidate expiry, continuous camera, explicit arrival and teardown, RWD, no backend writes.');
}catch(e){if(page){await page.screenshot({path:out+'/FAIL.png',fullPage:true});console.error(await page.locator('body').innerText());}throw e;}finally{await browser.close();await local?.close();}
