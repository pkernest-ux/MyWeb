import assert from 'node:assert/strict';
import {mkdtemp,writeFile} from 'node:fs/promises';
import os from 'node:os';import path from 'node:path';
import {startLocalServer} from '../scripts/ar-v4-local-server.mjs';
import {chromium} from '/Users/ernestmac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const rootDir=path.resolve(import.meta.dirname,'..'),dataDir=await mkdtemp(path.join(os.tmpdir(),'v4-local-features-'));
await writeFile(path.join(dataDir,'ar-data.json'),JSON.stringify({projects:[]}));
const local=await startLocalServer({port:0,rootDir,dataDir});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
try{
 const page=await browser.newPage();await page.goto(local.origin+'/ar-v4-field.html');
 const results=await page.evaluate(async()=>{
  const worker=new Worker('/assets/ar-v4/partial-recognition-worker.js');let id=0;
  const send=(data)=>new Promise((resolve,reject)=>{const requestId=++id;const timer=setTimeout(()=>reject(Error('worker timeout')),20000);const receive=e=>{if(e.data.requestId!==requestId)return;clearTimeout(timer);worker.removeEventListener('message',receive);e.data.ok?resolve(e.data.result):reject(Error(e.data.error));};worker.addEventListener('message',receive);worker.postMessage({requestId,...data});});
  const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
  const picture=(seed)=>{const c=canvas(420,315),x=c.getContext('2d');x.fillStyle='#efe8d6';x.fillRect(0,0,420,315);let s=seed;const rand=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};for(let i=0;i<190;i++){x.fillStyle=`hsl(${rand()*360},60%,${15+rand()*50}%)`;x.fillRect(rand()*400,rand()*295,4+rand()*18,4+rand()*18);}x.fillStyle='#172821';x.font='bold 26px sans-serif';x.fillText('FIELD DEMO '+seed,25,165);return c;};
  const image=picture(37),other=picture(93);
  const pixels=(c)=>({width:c.width,height:c.height,pixels:c.getContext('2d').getImageData(0,0,c.width,c.height).data.buffer});
  const prepare=(targets)=>send({type:'prepareMany',targets});const detect=c=>send({type:'detect',...pixels(c),fullScene:true});
  const target=(id,nodeId,c=image)=>({id,nodeId,...pixels(c)});
  const out={};out.preparation=await prepare([target('a','A'),target('b','B',other)]);
  out.self=await detect(image);
  const crop=canvas(236,315);crop.getContext('2d').drawImage(image,-92,0);out.portraitCrop=await detect(crop);
  const shifted=canvas(300,240);const sx=shifted.getContext('2d');sx.fillStyle='#ddd';sx.fillRect(0,0,300,240);sx.translate(150,120);sx.rotate(.08);sx.drawImage(image,-210,-158);out.rotatedCrop=await detect(shifted);
  const occluded=canvas(420,315),oc=occluded.getContext('2d');oc.drawImage(image,0,0);oc.fillStyle='#fff';oc.fillRect(0,0,170,315);out.occluded=await detect(occluded);
  out.unrelated=await detect(picture(479));out.blank=await detect(canvas(420,315));
  await prepare([target('a','A'),target('duplicate','B')]);out.ambiguous=await detect(crop);
  await prepare([target('a','A'),target('a-45','A')]);out.sameNode=await detect(crop);
  out.skipped=await prepare([target('a','A'),target('blank','B',canvas(420,315))]);worker.terminate();
  return Object.fromEntries(Object.entries(out).map(([k,r])=>[k,r.diagnostics?{targetId:r.detection?.targetId||null,reason:r.diagnostics.reason,inliers:r.diagnostics.inliers,matches:r.diagnostics.matchCount,coverage:r.diagnostics.coverage}:r]));
 });console.log(JSON.stringify(results,null,2));
 for(const key of ['self','portraitCrop','rotatedCrop','occluded','sameNode'])assert.equal(results[key].targetId,'a',key);
 for(const key of ['unrelated','blank','ambiguous'])assert.equal(results[key].targetId,null,key);
 assert.equal(results.ambiguous.reason,'ambiguous');assert.equal(results.blank.reason,'few_features');assert.equal(results.skipped.targetCount,1);assert.equal(results.skipped.skippedTargetCount,1);
 console.log('PASS V4 real worker: portrait/rotated partial views and occlusion accepted; negatives/ambiguity rejected; weak reference reported. Synthetic images only, not field accuracy.');
}finally{await browser.close();await local.close();}
