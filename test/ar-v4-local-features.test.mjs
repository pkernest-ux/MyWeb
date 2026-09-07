import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
const require=createRequire(import.meta.url);
const source=await readFile(new URL('../src/ar-v4-image-recognition.worker.ts',import.meta.url),'utf8');
const output=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;
const exports={};vm.runInNewContext(output,{exports,require,self:{addEventListener(){},postMessage(){}}});
const grid=(x,y,w,h)=>Array.from({length:16},(_,i)=>({x:x+i%4*w/3,y:y+Math.floor(i/4)*h/3}));
test('local support accepts distributed partial features without requiring full reference borders',()=>{
 assert.equal(exports.hasSpread(grid(100,70,140,110),420,315,.015),true);
 assert.equal(exports.hasSpread(grid(10,20,200,250),236,315,.035),true);
 assert.equal(exports.isUsableQuadrilateral([{x:-90,y:0},{x:330,y:0},{x:330,y:315},{x:-90,y:315}],236,315,true),false,'old whole-photo boundary would reject');
});
test('local support rejects clusters, collinearity, nonfinite points and too few inliers',()=>{
 assert.equal(exports.hasSpread(grid(100,70,9,9),420,315,.015),false);
 assert.equal(exports.hasSpread(grid(100,70,140,110).map(p=>({x:p.x,y:p.x})),420,315,.015),false);
 assert.equal(exports.hasSpread([{x:NaN,y:0},...grid(0,0,200,200)],420,315,.015),false);
 assert.equal(exports.hasSpread(grid(0,0,200,200).slice(0,11),420,315,.015),false);
});
test('near tied different nodes are rejected, overlapping views at one node remain eligible',()=>{
 assert.equal(exports.ambiguousNodes({nodeId:'a',inliers:25},{nodeId:'b',inliers:24}),true);
 assert.equal(exports.ambiguousNodes({nodeId:'a',inliers:25},{nodeId:'a',inliers:24}),false);
 assert.equal(exports.ambiguousNodes({nodeId:'a',inliers:40},{nodeId:'b',inliers:24}),false);
});
test('robust fitting rejects degenerate samples and accepts a distributed plane with outliers',()=>{
 const points=grid(20,20,220,180),target=points.map(p=>({x:p.x*1.3+15,y:p.y*.9+20}));
 target[3]={x:400,y:15};target[7]={x:20,y:300};
 assert.equal(exports.fitLocalHomography(points,target),true);
 const line=points.map((p,i)=>({x:i*10,y:i*10}));assert.equal(exports.fitLocalHomography(line,line),false);
 assert.equal(exports.fitLocalHomography(points.slice(0,3),target.slice(0,3)),false);
});
test('cancelled reference preparation never recreates a worker after leaving camera',async()=>{
 const source=await readFile(new URL('../src/ar-v4-image-recognition.ts',import.meta.url),'utf8');
 const cacheSource=await readFile(new URL('../src/ar-v4-feature-cache.ts',import.meta.url),'utf8');
 const cacheCode=ts.transpileModule(cacheSource,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText;
 const cacheURL=`data:text/javascript;base64,${Buffer.from(cacheCode).toString('base64')}`;
 const compiled=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText.replace('./ar-v4-feature-cache',cacheURL);
 const {OrbImageTracker,recognitionFrameSize}=await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
 assert.deepEqual(recognitionFrameSize(1080,1920),{width:360,height:640});
 assert.deepEqual(recognitionFrameSize(768,576,420),{width:420,height:315},'reference extraction remains pack compatible');
 const oldImage=globalThis.Image,oldWindow=globalThis.window;
 globalThis.window={setTimeout,clearTimeout};
 globalThis.Image=class{set src(value){queueMicrotask(()=>this.onerror?.());}};
 try{const tracker=new OrbImageTracker();const preparing=tracker.prepareMany([{id:'late',imageUrl:'missing.jpg'}]);tracker.dispose();await assert.rejects(preparing,/已停止/);assert.equal(tracker.preparation,null);}
 finally{if(oldImage===undefined)delete globalThis.Image;else globalThis.Image=oldImage;if(oldWindow===undefined)delete globalThis.window;else globalThis.window=oldWindow;}
});
