import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';import os from 'node:os';import sharp from 'sharp';
import {compilePublicCatalog} from '../scripts/ar-v4-feature-publisher.mjs';
import {replayCapture} from '../scripts/ar-v4-replay-capture.mjs';

test('local lossless capture replays against immutable packs without external access',async()=>{
 const w=420,h=315,raw=Buffer.alloc(w*h*3,245);
 for(let i=0;i<180;i++){const x=i*73%380,y=i*47%275;for(let a=x;a<x+7+i%25;a++)for(let b=y;b<y+8+i%23;b++){const j=(b*w+a)*3;raw[j]=i*13%255;raw[j+1]=i*61%255;raw[j+2]=i*37%255;}}
 const png=await sharp(raw,{raw:{width:w,height:h,channels:3}}).png().toBuffer(),imageUrl='data:image/png;base64,'+png.toString('base64');
 const data={projects:[{buildings:[{floors:[{markers:[{id:'a',fieldObservations:[{id:'photo',imageUrl}]}],waypoints:[]}]}]}]};
 const {catalog,assets}=await compilePublicCatalog(data);const ref=catalog.projects[0].buildings[0].floors[0].markers[0].recognitionRefs[0];
 const rootDir=await mkdtemp(path.join(os.tmpdir(),'v4-capture-replay-'));
 for(const [name,bytes]of assets){await mkdir(path.dirname(path.join(rootDir,name)),{recursive:true});await writeFile(path.join(rootDir,name),bytes);}
 const capture={schema:'v4-recognition-capture-1',matcher:'v4-multiscale-20260907',context:{packUrls:[ref.packUrl],referenceIds:[ref.id]},frame:{width:w,height:h,imageUrl}};
 const result=await replayCapture(capture,{rootDir});assert.equal(result.detection.targetId,ref.id);
 const repeated=await replayCapture(capture,{rootDir});assert.deepEqual(result.diagnostics,repeated.diagnostics);
 const fishnetCapture={...capture,matcher:'v4-fishnet-20260907',context:{...capture.context,profile:'fishnet',packUrls:[ref.fishnetPackUrl]}};
 const fishnet=await replayCapture(fishnetCapture,{rootDir});assert.equal(fishnet.profile,'fishnet');assert.equal(fishnet.detection.targetId,ref.id);assert.ok(fishnet.diagnostics.fishnet);
 assert.deepEqual(fishnet.diagnostics,(await replayCapture(fishnetCapture,{rootDir})).diagnostics);
 await assert.rejects(replayCapture({...fishnetCapture,context:{...fishnetCapture.context,profile:'unknown'}},{rootDir}),/辨識模式/);
 await assert.rejects(replayCapture({...fishnetCapture,context:{...fishnetCapture.context,profile:'legacy'}},{rootDir}),/無法重播/);
 await assert.rejects(replayCapture({...capture,context:{...capture.context,profile:'fishnet'}},{rootDir}),/辨識模式/);
 await assert.rejects(replayCapture({...capture,context:{...capture.context,packUrls:['https://example.com/private.bin']}},{rootDir}),/外部網址/);
 await assert.rejects(replayCapture({...capture,frame:{...capture.frame,width:640}},{rootDir}),/尺寸不一致/);
 await assert.rejects(replayCapture({...capture,matcher:'old'},{rootDir}),/版本/);
});
