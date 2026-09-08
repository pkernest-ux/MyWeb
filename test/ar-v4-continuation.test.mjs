import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

async function load(name,require=()=>{throw new Error('Unexpected dependency');}){
  const exports={};
  const source=await readFile(new URL('../src/'+name,import.meta.url),'utf8');
  vm.runInNewContext(ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS}}).outputText,{exports,require});
  return exports;
}
const core=await load('ar-v4-public-core.ts');
const helper=await load('ar-v4-continuation.ts',name=>{assert.equal(name,'./ar-v4-public-core');return core;});
const {splitRecognitionLegs,rollingRecognitionScope,hasPublishedFishnet,createContinuationState,resetContinuation,advanceContinuation}=helper;
const plain=value=>JSON.parse(JSON.stringify(value));
const node=(id,x=0,y=0,count=8,extra={})=>({id,physX:x,physY:y,x:x/100,y:1-y/100,fId:'1F',fName:'一樓',title:id,
  recognitionRefs:Array.from({length:count},(_,i)=>({id:id+'-ref-'+i,bearing:i*45,packUrl:'/legacy/'+id+'/'+i+'.json',fishnetPackUrl:'/fishnet/'+id+'/'+i+'.json'})),...extra});
const graph=(...nodes)=>({nodes:Object.fromEntries(nodes.map(n=>[n.id,n])),adjacency:{}});
const leg=(points,extra={})=>({index:0,startIndex:0,endIndex:points.length-1,points,start:points[0],end:points.at(-1),
  floorId:points[0]?.fId,floorName:'一樓',distance:points.slice(1).reduce((sum,p,i)=>sum+Math.hypot(p.physX-points[i].physX,p.physY-points[i].physY),0),
  title:'原標題',travelInstruction:'原導引文字',calibrationInstruction:'原校正文字',referenceImageUrl:'',externalUrl:'',...extra});
const refSet=scope=>new Set(scope.references.map(ref=>ref.id));

test('splits at published internal anchors while preserving original turns, geometry and leg metadata',()=>{
  const a=node('a'),corner=node('corner',2,0,0),b=node('b',2,3),c=node('c',5,3),d=node('d',5,7);
  const first=leg([a,corner,b,c],{index:4,startIndex:10,endIndex:13});
  const second=leg([c,d],{index:5,startIndex:13,endIndex:14});
  const g=graph(a,corner,b,c,d),before=JSON.stringify({g,first,second});
  const split=splitRecognitionLegs(g,[first,second]);
  assert.equal(split.length,3);
  assert.deepEqual(plain(split.map(s=>[s.index,s.originalIndex,s.startIndex,s.endIndex,s.distance])),[[0,4,10,12,5],[1,4,12,13,3],[2,5,13,14,4]]);
  assert.deepEqual(plain(split[0].points.map(p=>p.id)),['a','corner','b']);
  for(const s of split){assert.equal(s.title,'原標題');assert.equal(s.calibrationInstruction,'原校正文字');assert.equal(s.travelInstruction,'原導引文字');}
  assert.equal(JSON.stringify({g,first,second}),before);
  split[0].start.physX=999;assert.equal(a.physX,0,'returned point is not the original object');
});
test('raw photos, failed packs and synthetic copies do not create new route boundaries',()=>{
  const a=node('a'),raw=node('raw',1,0,0,{fieldObservations:[{id:'x',imageUrl:'never-loaded.jpg'}]}),bad=node('bad',2,0,1);
  bad.recognitionRefs[0].fishnetError='invalid';
  const fake=node('manual-origin',3,0),b=node('b',4,0),g=graph(a,raw,bad,b);
  assert.equal(hasPublishedFishnet(raw),false);assert.equal(hasPublishedFishnet(bad),false);
  assert.equal(splitRecognitionLegs(g,[leg([a,raw,bad,fake,b])]).length,1);
});
test('cross-floor and malformed geometry are not split, and empty inputs are safe',()=>{
  const a=node('a'),b=node('b',1,0),up=node('up',2,0,8,{fId:'2F'}),g=graph(a,b,up);
  const cross=leg([a,b,up]);assert.equal(splitRecognitionLegs(g,[cross]).length,1);
  const broken=leg([a,{...b,physX:NaN},node('end',3,0)]);assert.equal(splitRecognitionLegs(g,[broken]).length,1);
  assert.deepEqual(plain(splitRecognitionLegs(g,[])),[]);
});
test('existing boundaries remain even when they have no recognition photographs',()=>{
  const a=node('a',0,0,0),b=node('b',2,0,0),c=node('c',2,2,0),g=graph(a,b,c);
  const split=splitRecognitionLegs(g,[leg([a,b]),leg([b,c],{index:1,startIndex:1,endIndex:2})]);
  assert.equal(split.length,2);assert.equal(split[0].end.id,'b');assert.equal(split[1].start.id,'b');
});
test('rolling search includes current/next, interior, next-leg and only one-hop same-floor neighbours',()=>{
  const [a,b,mid,next,near,far,off,up]=['a','b','mid','next','near','far','off','up'].map((id,i)=>node(id,i,0));
  off.enabled=false;up.fId='2F';const g=graph(a,b,mid,next,near,far,off,up);
  g.adjacency={mid:{near:1,off:1,up:1},near:{far:1}};
  const scope=rollingRecognitionScope(g,{leg:leg([a,mid,b]),nextLeg:leg([b,next,up]),current:a,target:b});
  assert.deepEqual(plain(scope.nodes.map(n=>n.id)),['b','a','mid','next','near']);
  assert.equal(scope.references.length,40);assert.equal(scope.references[0].nodeId,'b');assert.equal(scope.references[1].nodeId,'a');
  assert.equal(scope.references.some(r=>['far','off','up'].includes(r.nodeId)),false);
  assert.equal(new Set(scope.references.map(r=>r.id)).size,40);
});
test('over 64 endpoint directions do not starve secondary anchors and every direction is reachable',()=>{
  const a=node('a',0,0,100),b=node('b',8,0,100),mid=node('mid',4,0,10),near=node('near',4,2,20),g=graph(a,b,mid,near);
  g.adjacency={mid:{near:1}};const input={leg:leg([a,mid,b]),current:a,target:b};
  const first=rollingRecognitionScope(g,input),seen=new Set();assert.equal(first.total,230);assert.equal(first.references.length,64);
  for(let page=0;page<first.pageCount;page++){
    const scope=rollingRecognitionScope(g,{...input,page});
    assert.equal(scope.references.length,64);assert.equal(scope.omitted,166);
    for(const id of ['a','b','mid','near'])assert.ok(scope.references.some(r=>r.nodeId===id));
    scope.references.forEach(r=>seen.add(r.id));assert.equal(refSet(scope).size,64);
  }
  assert.equal(seen.size,230);
});
test('more than 64 secondary node directions are fairly paged without losing endpoint references',()=>{
  const a=node('a'),b=node('b',100,0),others=Array.from({length:70},(_,i)=>node('n'+i,i+1,0,2));
  const g=graph(a,b,...others),input={leg:leg([a,...others,b]),current:a,target:b};
  const first=rollingRecognitionScope(g,input),seen=new Set();
  for(let page=0;page<first.pageCount;page++){
    const scope=rollingRecognitionScope(g,{...input,page});assert.ok(scope.references.length<=64);
    assert.equal(scope.references.filter(r=>r.nodeId==='a').length,8);assert.equal(scope.references.filter(r=>r.nodeId==='b').length,8);
    scope.references.forEach(r=>seen.add(r.id));
  }
  assert.equal(seen.size,156);
});
test('scope key is stable for heading/label changes and identical sets; changed pack URLs invalidate it',()=>{
  const a=node('a'),b=node('b',10,0),mid=node('mid',5,0),g=graph(a,b,mid),input={leg:leg([a,mid,b]),current:a,target:b};
  const first=rollingRecognitionScope(g,{...input,progressMeters:.1});
  const second=rollingRecognitionScope(g,{...input,progressMeters:2.9});assert.equal(first.key,second.key);assert.equal(second.bucket,0);
  const moved=rollingRecognitionScope(g,{...input,progressMeters:3.1});assert.equal(moved.bucket,1);assert.equal(first.key,moved.key,'same reference set needs no worker rebuild');
  b.title='different visible title';assert.equal(rollingRecognitionScope(g,input).key,first.key);
  b.recognitionRefs[0].fishnetPackUrl='/fishnet/new-revision.json';assert.notEqual(rollingRecognitionScope(g,input).key,first.key);
});
test('profiles contain only their published packs and missing floor/synthetic origin never adds raw references',()=>{
  const a=node('a'),b=node('b',4,0),g=graph(a,b);
  a.recognitionRefs.forEach(ref=>{ref.fishnetError='not published';});
  const input={leg:leg([{...a,id:'synthetic'},b]),current:a,target:b};
  const fishnet=rollingRecognitionScope(g,input);assert.equal(fishnet.references.length,8);assert.ok(fishnet.references.every(r=>r.nodeId==='b'));
  assert.equal(rollingRecognitionScope(g,{...input,profile:'legacy'}).references.length,16);
  assert.equal(rollingRecognitionScope(g,{...input,current:{id:'a'}}).references.length,0);
  assert.ok(fishnet.references.every(r=>r.imageUrl===''));
});
test('zero, one and oversized limits stay bounded, with a one-slot page still reaching every reference',()=>{
  const a=node('a',0,0,2),b=node('b',3,0,2),mid=node('mid',1,0,2),g=graph(a,b,mid),input={leg:leg([a,mid,b]),current:a,target:b};
  const empty=rollingRecognitionScope(g,{...input,limit:0});assert.equal(empty.references.length,0);assert.equal(empty.omitted,6);
  const seen=new Set(),one=rollingRecognitionScope(g,{...input,limit:1});
  for(let page=0;page<one.pageCount;page++)rollingRecognitionScope(g,{...input,limit:1,page}).references.forEach(r=>seen.add(r.id));
  assert.equal(seen.size,6);assert.ok(rollingRecognitionScope(g,{...input,limit:10000}).references.length<=64);
});

const t=1_000_000,a=node('a'),b=node('b',5,0),c=node('c',10,0);
const observation=(at,extra={})=>({enabled:true,now:at+100,capturedAt:at,scopeKey:'route:0:a:b',sourceKey:'relative:0:anchor1',
  current:a,target:b,destinationId:'c',headingValid:true,initialAnchorVerified:true,stepMode:'auto',manualSteps:0,
  physicalSteps:7,automaticProgressMeters:4.2,legDistanceMeters:5,matchedNodeId:'b',geometryAccepted:true,ambiguous:false,...extra});
function feed(extra={},offset=0,initial=null){let state=initial,result;for(let i=0;i<4;i++){result=advanceContinuation(state,observation(t+offset+i*400,extra));state=result.state;}return result;}

test('four fresh expected-target matches spanning one second produce only a consumed estimate',()=>{
  let state=createContinuationState();
  for(let i=0;i<4;i++){
    const result=advanceContinuation(state,observation(t+i*400));state=result.state;
    assert.equal(result.acceptEstimate,i===3);assert.equal(result.hits,i+1);
  }
  assert.equal(state.reason,'accept-estimate');
  const success=feed();assert.deepEqual(plain(success.estimate),{fromNodeId:'a',toNodeId:'b',capturedAt:t+1200,confirmed:false});
  const again=advanceContinuation(state,observation(t+1600));assert.equal(again.acceptEstimate,false);assert.equal(again.reason,'already-accepted');
  assert.equal('heading' in success,false);assert.equal('position' in success,false);
});
test('fast camera samples wait for the time span instead of remaining stuck at four recent frames',()=>{
  let state=null;
  for(let i=0;i<=10;i++){
    const result=advanceContinuation(state,observation(t+i*100));state=result.state;
    assert.equal(result.acceptEstimate,i===10);
  }
});
test('far-away matching, insufficient physical steps and disabled/unverified guidance never advance',()=>{
  for(const [extra,reason] of [
    [{automaticProgressMeters:1},'not-near-end'],[{physicalSteps:2},'few-physical-steps'],
    [{enabled:false},'disabled'],[{initialAnchorVerified:false},'not-verified'],[{headingValid:false},'heading-unavailable'],
  ]){const result=feed(extra);assert.equal(result.acceptEstimate,false);assert.equal(result.reason,reason);assert.equal(result.hits,0);}
});
test('manual input is never physical evidence; one manual step disqualifies the full leg even after reset/mode switch',()=>{
  assert.equal(feed({stepMode:'manual'}).reason,'manual-mode');
  const manual=feed({manualSteps:1});assert.equal(manual.reason,'manual-progress');
  const switched=feed({stepMode:'auto',manualSteps:0},2000,manual.state);assert.equal(switched.acceptEstimate,false);assert.equal(switched.reason,'manual-progress');
  const reset=resetContinuation(switched.state,t+4000);
  assert.equal(feed({},5000,reset).reason,'manual-progress');
});
test('final destination, floor transfers, shafts and named stairs/lifts never auto-continue',()=>{
  for(const extra of [
    {destinationId:'b'},{target:{...b,fId:'2F'}},{target:{...b,isVerticalShaft:true}},
    {target:{...b,shaftId:'lift1'}},{target:{...b,title:'電梯廳'}},{target:{...b,type:'stairs'}},
    {current:{...a,title:'樓梯'}},{transitionBlocked:true},{destinationId:''},{target:{...b,navigable:false}},
    {nextLeg:{start:{id:'unknown'},end:c}},
    {nextLeg:leg([{...b,fId:'2F'},{...c,fId:'2F'}])},{nextLeg:leg([b,{...c,fId:'2F'}])},
  ]){const result=feed(extra);assert.equal(result.acceptEstimate,false);assert.equal(result.reason,'unsafe-target');}
});
test('misses, conflicting/backward/skipped nodes, ambiguity and rejected geometry discard accumulated evidence',()=>{
  for(const [extra,reason] of [[{matchedNodeId:null},'miss'],[{matchedNodeId:'a'},'miss'],[{matchedNodeId:'c'},'miss'],[{ambiguous:true},'ambiguous'],[{geometryAccepted:false},'geometry-rejected']]){
    let state=null;for(let i=0;i<3;i++)state=advanceContinuation(state,observation(t+i*400)).state;
    const failed=advanceContinuation(state,observation(t+1200,extra));assert.equal(failed.acceptEstimate,false);assert.equal(failed.reason,reason);assert.equal(failed.hits,0);
    const next=advanceContinuation(failed.state,observation(t+1600));assert.equal(next.hits,1);assert.equal(next.acceptEstimate,false);
  }
});
test('stale/future/duplicate or out-of-order captures cannot vote or trigger a continuation',()=>{
  const state=advanceContinuation(null,observation(t)).state;
  for(const [extra,reason] of [
    [{capturedAt:t,now:t+500},'out-of-order'],[{capturedAt:t-100,now:t+500},'out-of-order'],
    [{capturedAt:t+500,now:t+3501},'stale'],[{capturedAt:t+500,now:t+400},'invalid-input'],
  ]){const result=advanceContinuation(state,observation(t+500,extra));assert.equal(result.acceptEstimate,false);assert.equal(result.reason,reason);assert.equal(result.hits,0);}
});
test('scope/source changes fence old async frames and require a fresh evidence sequence',()=>{
  for(const [extra,reason] of [[{scopeKey:'route:1:b:c',current:b,target:c,destinationId:'d',matchedNodeId:'c'},'scope-changed'],[{sourceKey:'relative:90:anchor1'},'source-changed']]){
    let state=null;for(let i=0;i<3;i++)state=advanceContinuation(state,observation(t+i*400)).state;
    const changed=advanceContinuation(state,observation(t+1200,extra));assert.equal(changed.reason,reason);assert.equal(changed.hits,0);
    const late=advanceContinuation(changed.state,observation(t+1201,{...extra,now:t+1400}));assert.equal(late.reason,'out-of-order');assert.equal(late.hits,0);
    const fresh=feed(extra,2000,late.state);assert.equal(fresh.acceptEstimate,true);
  }
});
test('old evidence ages out, explicit reset has a capture barrier, and clock rollback is rejected',()=>{
  let state=null;for(let i=0;i<3;i++)state=advanceContinuation(state,observation(t+i*400)).state;
  const aged=advanceContinuation(state,observation(t+9000));assert.equal(aged.hits,1);assert.equal(aged.acceptEstimate,false);
  const reset=resetContinuation(state,t+1000);
  const late=advanceContinuation(reset,observation(t+950,{now:t+1100}));assert.equal(late.reason,'out-of-order');assert.equal(late.hits,0);
  const backward=advanceContinuation(state,observation(t+200,{now:t+300}));assert.equal(backward.reason,'clock-change');assert.equal(backward.acceptEstimate,false);
});
test('near-end floating point tolerance is bounded and invalid counters cannot qualify',()=>{
  assert.equal(feed({automaticProgressMeters:4.2-1e-8}).acceptEstimate,true);
  assert.equal(feed({automaticProgressMeters:4.19}).acceptEstimate,false);
  for(const extra of [{physicalSteps:2.5},{physicalSteps:NaN},{automaticProgressMeters:NaN},{legDistanceMeters:0},{legDistanceMeters:Infinity},{manualSteps:NaN},{manualSteps:-1}])assert.equal(feed(extra).reason,'invalid-input');
});
test('dense two-metre anchors accept near-end estimates but retain image and physical-step guards',()=>{
  assert.equal(feed({legDistanceMeters:2,automaticProgressMeters:1.6,physicalSteps:3}).acceptEstimate,true);
  assert.equal(feed({legDistanceMeters:2,automaticProgressMeters:1.2,physicalSteps:3}).acceptEstimate,false);
  assert.equal(feed({legDistanceMeters:2,automaticProgressMeters:1.6,physicalSteps:2}).acceptEstimate,false);
  assert.equal(feed({legDistanceMeters:2,automaticProgressMeters:1.6,physicalSteps:3,manualSteps:1}).acceptEstimate,false);
});
test('all planning/gating helpers leave source graph and caller-owned state untouched',()=>{
  const g=graph(a,b,c),input={leg:leg([a,b,c]),current:a,target:c},before=JSON.stringify({g,input});
  rollingRecognitionScope(g,input);splitRecognitionLegs(g,[input.leg]);assert.equal(JSON.stringify({g,input}),before);
  const initial=advanceContinuation(null,observation(t)).state,copy=JSON.stringify(initial);
  advanceContinuation(initial,observation(t+400));resetContinuation(initial,t+1000);assert.equal(JSON.stringify(initial),copy);
});
