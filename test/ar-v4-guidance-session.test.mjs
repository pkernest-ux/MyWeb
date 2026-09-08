import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const exports={};
vm.runInNewContext(ts.transpileModule(await readFile(new URL('../src/ar-v4-guidance-session.ts',import.meta.url),'utf8'),{
  compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS},
}).outputText,{exports});
const {createGuidanceSession,resetGuidanceSession,establishGuidanceSession,resolveGuidanceSession,
  recordGuidanceStep,GUIDANCE_LIMITS,createStepDetector,resetStepDetector,advanceStepDetector}=exports;
const t=1_000_000;
const sensor=(at,heading=10,kind='relative',screenAngle=0)=>({heading,kind,screenAngle,accuracy:null,capturedAt:new Date(at).toISOString(),alpha:350,beta:90,gamma:0});
const establish=(at=t,extra={})=>establishGuidanceSession(createGuidanceSession(),{bearing:40,sensor:sensor(at),now:at,source:'visual',nodeId:'A',...extra});
const near=(actual,expected)=>assert.ok(actual!==null&&Math.abs(((actual-expected+540)%360)-180)<.00001,`${actual} not near ${expected}`);

test('one validated initial anchor continues with live sensor despite no later visual matches',()=>{
  let state=establish();
  const first=resolveGuidanceSession(state,sensor(t+1000,50),t+1000);
  assert.equal(first.status,'tracking');near(first.bearing,80);state=first.state;
  const held=resolveGuidanceSession(state,sensor(t+60000,100),t+60000);
  assert.equal(held.status,'estimated');near(held.bearing,130);assert.equal(held.remainingMs,30000);
  assert.equal(held.state.anchor.nodeId,'A');assert.equal(held.steps,0);
});
test('delayed initial fix uses capture-time sensor, never completion-time bearing',()=>{
  const state=establish(t,{now:t+1700,observedAt:t,sensor:sensor(t,10)});
  near(resolveGuidanceSession(state,sensor(t+1700,110),t+1700).bearing,140);
  assert.equal(state.startedAt,t);
});
test('manual orientation and wraparound preserve circular headings',()=>{
  const state=establish(t,{bearing:359,source:'manual',sensor:sensor(t,358)});
  assert.equal(state.reason,'manual-anchor');
  near(resolveGuidanceSession(state,sensor(t+100,2),t+100).bearing,3);
});
test('no initial fix cannot manufacture a heading',()=>{
  const empty=resolveGuidanceSession(createGuidanceSession(),sensor(t),t);
  assert.equal(empty.bearing,null);assert.equal(empty.status,'needs-calibration');
  assert.equal(recordGuidanceStep(empty.state,{capturedAt:t+100,strideMeters:.7},t+100).steps,0);
});
test('time budget expires permanently and a rejected old fix cannot refresh it',()=>{
  const expiry=t+GUIDANCE_LIMITS.maxSessionMs;
  const expired=resolveGuidanceSession(establish(),sensor(expiry),expiry);
  assert.equal(expired.status,'needs-calibration');assert.equal(expired.reason,'time-budget');assert.equal(expired.bearing,null);
  assert.equal(resolveGuidanceSession(expired.state,sensor(expiry+100),expiry+100).bearing,null);
  const late=establishGuidanceSession(expired.state,{bearing:40,sensor:sensor(expiry-100),observedAt:expiry-100,now:expiry+100,source:'visual',nodeId:'A'});
  assert.equal(late.anchor,null);assert.equal(late.lastRejection,'out-of-order-fix');
  const fresh=establishGuidanceSession(expired.state,{bearing:40,sensor:sensor(expiry+100),now:expiry+100,source:'manual',nodeId:'A'});
  assert.equal(fresh.status,'tracking');
});
test('step estimate consumes adjustable stride and enters estimated state without moving a node',()=>{
  let state=recordGuidanceStep(establish(),{capturedAt:t+500,strideMeters:.5},t+500);
  state=recordGuidanceStep(state,{capturedAt:t+1000,strideMeters:.8},t+1000);
  const result=resolveGuidanceSession(state,sensor(t+1000),t+1000);
  assert.equal(result.status,'estimated');assert.equal(result.steps,2);assert.equal(result.distanceMeters,1.3);
  assert.equal(result.state.anchor.nodeId,'A');
  assert.equal('arrived' in result,false);assert.equal('position' in result,false);
});
test('30-metre and 60-step bounds independently require calibration',()=>{
  let distance=establish();
  for(let i=1;i<=30;i++)distance=recordGuidanceStep(distance,{capturedAt:t+i*500,strideMeters:1},t+i*500);
  assert.equal(distance.anchor,null);assert.equal(distance.reason,'distance-budget');assert.equal(distance.distanceMeters,30);
  assert.equal(recordGuidanceStep(distance,{capturedAt:t+16000,strideMeters:1},t+16000).steps,30);
  let steps=establish();
  for(let i=1;i<=60;i++)steps=recordGuidanceStep(steps,{capturedAt:t+i*500,strideMeters:.2},t+i*500);
  assert.equal(steps.anchor,null);assert.equal(steps.reason,'step-budget');assert.equal(steps.steps,60);
});
test('duplicate, late, future, oversized or invalid steps cannot advance the budget',()=>{
  const state=recordGuidanceStep(establish(),{capturedAt:t+500,strideMeters:.7},t+500);
  for(const [capturedAt,strideMeters,now,reason] of [
    [t+500,.7,t+500,'out-of-order-step'],[t+400,.7,t+500,'out-of-order-step'],
    [t+600,.7,t+1701,'stale-step'],[t+1800,.7,t+1700,'invalid-step'],
    [t+1800,.1,t+1800,'invalid-step'],[t+1800,1.21,t+1800,'invalid-step'],[t+1800,NaN,t+1800,'invalid-step'],
  ]){
    const invalid=recordGuidanceStep(state,{capturedAt,strideMeters},now);
    assert.equal(invalid.steps,1);assert.equal(invalid.distanceMeters,.7);assert.equal(invalid.lastRejection,reason);
  }
});
test('stale, unavailable, inaccurate or future live sensors clear rather than freeze or resurrect the anchor',()=>{
  for(const reading of [null,{...sensor(t+100),heading:null,kind:'unavailable'},sensor(t),sensor(t+1200),{...sensor(t+1100),accuracy:80}]){
    const lost=resolveGuidanceSession(establish(),reading,t+1100);
    assert.equal(lost.bearing,null);assert.equal(lost.status,'unavailable');assert.equal(lost.state.anchor,null);
    const fresh=resolveGuidanceSession(lost.state,sensor(t+1200),t+1200);
    assert.equal(fresh.bearing,null);assert.equal(fresh.status,'needs-calibration');
  }
});
test('sensor source and screen swaps clear anchors; switching back cannot revive them',()=>{
  for(const reading of [sensor(t+500,10,'absolute'),sensor(t+500,10,'relative',90)]){
    const lost=resolveGuidanceSession(establish(),reading,t+500);
    assert.equal(lost.reason,'sensor-source-changed');assert.equal(lost.bearing,null);
    const back=resolveGuidanceSession(lost.state,sensor(t+600),t+600);
    assert.equal(back.bearing,null);
    const late=establishGuidanceSession(back.state,{bearing:40,sensor:sensor(t+400),observedAt:t+400,now:t+700,source:'visual',nodeId:'A'});
    assert.equal(late.anchor,null);assert.equal(late.lastRejection,'out-of-order-fix');
  }
});
test('explicit reset fences off old captures and supports a fresh synchronous manual fix',()=>{
  const reset=resetGuidanceSession(establish(),t+1000);
  assert.equal(reset.anchor,null);
  const late=establishGuidanceSession(reset,{bearing:40,sensor:sensor(t+900),now:t+1100,observedAt:t+900,source:'visual',nodeId:'A'});
  assert.equal(late.anchor,null);assert.equal(late.lastRejection,'out-of-order-fix');
  const manual=establishGuidanceSession(reset,{bearing:45,sensor:sensor(t+1000),now:t+1000,source:'manual',nodeId:'A'});
  assert.equal(manual.status,'tracking');
});
test('invalid, stale, duplicate, future and capture-sensor-mismatched fixes do not reset budgets',()=>{
  const state=establish();
  const base={bearing:40,sensor:sensor(t+500),now:t+500,source:'visual',nodeId:'A'};
  for(const [override,reason] of [
    [{bearing:NaN},'invalid-fix'],[{nodeId:''},'invalid-fix'],[{observedAt:t+600},'invalid-fix'],
    [{observedAt:t},'out-of-order-fix'],[{now:t+4000,observedAt:t+500},'stale-fix'],
    [{sensor:sensor(t+501)},'stale-sensor'],[{sensor:sensor(t-600)},'stale-sensor'],
  ]){
    const rejected=establishGuidanceSession(state,{...base,...override});
    assert.equal(rejected.lastRejection,reason);assert.equal(rejected.startedAt,t);
  }
});
test('clock rollback removes anchors and does not restore them after clock recovery',()=>{
  let state=resolveGuidanceSession(establish(),sensor(t+1000),t+1000).state;
  let lost=resolveGuidanceSession(state,sensor(t+500),t+500);
  assert.equal(lost.bearing,null);assert.equal(lost.reason,'clock-change');
  lost=resolveGuidanceSession(lost.state,sensor(t+1200),t+1200);assert.equal(lost.bearing,null);
});
test('guidance and step operations leave their caller-owned inputs unchanged',()=>{
  const state=establish(),before=JSON.stringify(state);
  resolveGuidanceSession(state,sensor(t+2000),t+2000);recordGuidanceStep(state,{capturedAt:t+1000,strideMeters:.7},t+1000);
  resetGuidanceSession(state,t+5000);assert.equal(JSON.stringify(state),before);
  const step=createStepDetector(),copy=JSON.stringify(step);advanceStepDetector(step,{capturedAt:t,acceleration:{x:0,y:0,z:0}},t);
  assert.equal(JSON.stringify(step),copy);
});

function runner(source='linear'){
  let state=createStepDetector(),at=t;const events=[],reasons=[];
  const sample=(value,dt=50)=>{
    const capturedAt=at;at+=dt;
    const vector={x:0,y:0,z:source==='gravity'?9.81+value:value};
    const result=advanceStepDetector(state,{capturedAt,...(source==='gravity'?{accelerationIncludingGravity:vector}:{acceleration:vector})},capturedAt);
    state=result.state;reasons.push(result.reason);if(result.event)events.push(result.event);return result;
  };
  const values=(list)=>list.forEach(value=>sample(value));
  const quiet=(n=8)=>values(Array(n).fill(0));
  const pulse=()=>values([3,3,3,0,0,0,0,0,0,0]);
  return {sample,values,quiet,pulse,events,reasons,get state(){return state;},get at(){return at;}};
}
test('linear acceleration warm-up plus peak/release yields approximate events, not raw peaks',()=>{
  const run=runner();run.quiet();run.values([3,3,3]);assert.equal(run.events.length,0);
  run.quiet();assert.equal(run.events.length,1);assert.equal(run.events[0].source,'linear');assert.equal(run.events[0].approximate,true);
  run.pulse();assert.equal(run.events.length,2);
});
test('stationary samples and an unreleased sustained acceleration do not count steps',()=>{
  const run=runner();run.quiet(40);assert.equal(run.events.length,0);
  run.values(Array(30).fill(3));assert.equal(run.events.length,0);
  run.quiet(10);assert.equal(run.events.length,0);
});
test('isolated moderate shakes and large acceleration spikes are not steps',()=>{
  for(const amplitude of [6,20]){
    const run=runner();run.quiet();run.sample(amplitude);run.quiet(20);
    assert.equal(run.events.length,0);
    if(amplitude===20)assert.ok(run.reasons.includes('spike'));
  }
});
test('gravity fallback can detect a controlled pulse while a constant gravity magnitude remains quiet',()=>{
  const run=runner('gravity');run.quiet(20);assert.equal(run.events.length,0);
  run.pulse();run.quiet(2);assert.equal(run.events.length,1);assert.equal(run.events[0].source,'gravity');
});
test('finite linear data is preferred over gravity, with source-change warm-up',()=>{
  const run=runner();run.quiet();
  let result=advanceStepDetector(run.state,{capturedAt:run.at,acceleration:{x:0,y:0,z:0},accelerationIncludingGravity:{x:0,y:0,z:22}},run.at);
  assert.equal(result.state.source,'linear');assert.equal(result.event,null);
  result=advanceStepDetector(result.state,{capturedAt:run.at+50,acceleration:{x:null,y:null,z:null},accelerationIncludingGravity:{x:0,y:0,z:9.81}},run.at+50);
  assert.equal(result.reason,'source-changed');assert.equal(result.state.source,'gravity');assert.equal(result.event,null);
});
test('duplicate, out-of-order, too-frequent and future samples cannot create a step',()=>{
  const run=runner();run.quiet();const last=run.state.lastCapturedAt;
  for(const [capturedAt,now,reason] of [[last,last,'out-of-order'],[last-1,last,'out-of-order'],[last+1,last+1,'too-fast'],[last+100,last+50,'invalid-sample']]){
    const result=advanceStepDetector(run.state,{capturedAt,acceleration:{x:0,y:0,z:3}},now);
    assert.equal(result.event,null);assert.equal(result.reason,reason);
  }
});
test('sample gaps, stale samples, invalid data, and explicit reset discard partial pulses',()=>{
  const run=runner();run.quiet();run.values([3,3]);const at=run.at;
  let gap=advanceStepDetector(run.state,{capturedAt:at+500,acceleration:{x:0,y:0,z:0}},at+500);
  assert.equal(gap.reason,'sample-gap');assert.equal(gap.state.phase,'warming');assert.equal(gap.event,null);
  let stale=advanceStepDetector(run.state,{capturedAt:at,acceleration:{x:0,y:0,z:0}},at+251);
  assert.equal(stale.reason,'stale-sample');assert.equal(stale.event,null);
  const invalid=advanceStepDetector(run.state,{capturedAt:at,acceleration:{x:0,y:0,z:NaN}},at);
  assert.equal(invalid.reason,'invalid-sample');assert.equal(invalid.event,null);
  const reset=resetStepDetector(run.state,at+100);
  const old=advanceStepDetector(reset,{capturedAt:at+50,acceleration:{x:0,y:0,z:0}},at+150);
  assert.equal(old.reason,'out-of-order');assert.equal(old.event,null);
});
test('clock rollback clears a partial step and requires a new warm-up',()=>{
  const run=runner();run.quiet();run.values([3,3]);const at=run.at;
  const result=advanceStepDetector(run.state,{capturedAt:at-100,acceleration:{x:0,y:0,z:0}},at-100);
  assert.equal(result.reason,'clock-change');assert.equal(result.event,null);assert.equal(result.state.phase,'warming');
});
