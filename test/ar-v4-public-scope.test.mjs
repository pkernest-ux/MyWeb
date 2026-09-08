import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
async function load(file){const source=await readFile(new URL('../src/'+file,import.meta.url),'utf8');const {outputText}=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}});return import('data:text/javascript;base64,'+Buffer.from(outputText).toString('base64'));}
const {publicRecognitionScope}=await load('ar-v4-public-core.ts');
const {advanceNodeConfirmation}=await load('ar-v4-recognition-stability.ts');
const node=(id,count=8,props={})=>({id,fId:'1F',...props,fieldObservations:Array.from({length:count},(_,i)=>({id:'p'+i,imageUrl:id+i+'.jpg',mapBearing:i*45}))});
test('search includes interior and one-hop nodes, excludes unrelated, disabled and other-floor nodes',()=>{
 const nodes=Object.fromEntries(['a','b','middle','near','far','off','up'].map(id=>[id,node(id)]));nodes.off.enabled=false;nodes.up.fId='2F';
 const graph={nodes,adjacency:{a:{middle:1},middle:{a:1,b:1,near:1,off:1,up:1},b:{middle:1},near:{far:1}}};
 const scope=publicRecognitionScope(graph,{points:[nodes.a,nodes.middle,nodes.b]},nodes.a,nodes.b);
 assert.deepEqual(scope.nodes.map(n=>n.id),['a','b','middle','near']);assert.equal(scope.references.length,32);assert.equal(scope.omitted,0);
 assert.equal(scope.references.filter(r=>r.nodeId==='middle').length,8);
 assert.equal(scope.references.filter(r=>r.nodeId==='near').length,8);
 assert.equal(new Set(scope.references.map(r=>r.id)).size,32);
});
test('bounded scope keeps endpoint directions and fairly samples extra nodes',()=>{
 const nodes=Object.fromEntries(['a','b','mid','near'].map(id=>[id,node(id,24)]));const graph={nodes,adjacency:{mid:{near:1}}};
 const scope=publicRecognitionScope(graph,{points:[nodes.a,nodes.mid,nodes.b]},nodes.a,nodes.b);
 assert.equal(scope.references.length,64);assert.equal(scope.total,96);assert.equal(scope.omitted,32);
 for(const id of ['a','b'])assert.equal(scope.references.filter(r=>r.nodeId===id).length,24);
 for(const id of ['mid','near'])assert.equal(scope.references.filter(r=>r.nodeId===id).length,8);
});
test('empty/duplicate nodes and absent adjacency lists are safe',()=>{
 const a=node('a',0);assert.equal(publicRecognitionScope({nodes:{a},adjacency:{}},{points:[a,a]},a,a).references.length,0);
});
test('synthetic preview origin does not duplicate the real start photos as another node',()=>{
 const a=node('a'),b=node('b');const graph={nodes:{a,b},adjacency:{a:{b:1}}};
 const scope=publicRecognitionScope(graph,{points:[{...a,id:'manual-origin'},b]},a,b);
 assert.equal(scope.references.length,16);assert.deepEqual(scope.nodes.map(n=>n.id),['a','b']);
 assert.equal(scope.references.some(r=>r.nodeId==='manual-origin'),false);
});
test('different directions accumulate; one miss retains evidence but other node/ambiguity/stale reset',()=>{
 let state=null;
 for(const [i,photo] of ['0','45','90'].entries()){state=advanceNodeConfirmation(state,'node-a',1000+i*400);assert.equal(state.hits,i+1,photo);}
 assert.equal(advanceNodeConfirmation(state,'node-b',2300).hits,1);
 const missed=advanceNodeConfirmation(state,null,2300);assert.equal(missed.hits,3);assert.equal(missed.time,state.time,'miss must not refresh last-match time');
 assert.equal(advanceNodeConfirmation(state,null,2300,true),null);
 assert.equal(advanceNodeConfirmation(state,'node-a',8000).hits,1);
 assert.equal(advanceNodeConfirmation(state,'node-a',1700).hits,1);
 assert.equal(advanceNodeConfirmation(state,'node-a',2200).hits,3);
});
test('three of five accepted samples tolerate brief misses, never confirm from failures alone',()=>{
 let state=null;
 for(const [i,id] of ['a',null,'a',null,'a'].entries())state=advanceNodeConfirmation(state,id,1000+i*400);
 assert.equal(state.hits,3);assert.equal(state.nodeId,'a');
 for(let i=0;i<5;i++)state=advanceNodeConfirmation(state,null,2800+i*100);
 assert.equal(state,null);
 state=advanceNodeConfirmation(null,'a',1000);
 for(const [i,id] of [null,null,null,'a'].entries())state=advanceNodeConfirmation(state,id,1400+i*400);
 assert.equal(state.hits,2);
 state=advanceNodeConfirmation(state,'b',3000);assert.equal(state.hits,1);assert.equal(state.nodeId,'b');
 state=advanceNodeConfirmation(state,null,7500);assert.equal(state,null);
});
