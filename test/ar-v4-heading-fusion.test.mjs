import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const exports={};
vm.runInNewContext(ts.transpileModule(await readFile(new URL('../src/ar-v4-heading-fusion.ts',import.meta.url),'utf8'),{
  compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS},
}).outputText,{exports});
const {createHeadingState,resetHeadingState,advanceVisualHeading,resolveHeading,HEADING_LIMITS}=exports;
const start=1_000_000;
const sensor=(heading,time,kind='relative',screenAngle=0)=>({heading,kind,screenAngle,accuracy:null,capturedAt:new Date(time).toISOString(),alpha:0,beta:90,gamma:0});
const fix=(bearing,heading,time,options={})=>({bearing,uncertaintyDeg:5,nodeId:'A',referenceId:'view-0',capturedAt:time,sensor:sensor(heading,time),...options});
function lock(options={}){
  let state=createHeadingState();
  for(let i=0;i<3;i++)state=advanceVisualHeading(state,fix(40,10,start+i*1000,options),start+i*1000);
  assert.equal(state.status,'tracking');return state;
}
const near=(actual,expected,tolerance=.00001)=>assert.ok(actual!==null&&Math.abs(((actual-expected+540)%360)-180)<tolerance,`${actual} not near ${expected}`);

test('requires three independent captures of same node; reference directions may alternate',()=>{
  let s=createHeadingState();
  for(let i=0;i<3;i++){
    s=advanceVisualHeading(s,fix(40,10,start+i*2100,{referenceId:'view-'+i}),start+i*2100+900);
    assert.equal(Boolean(s.anchor),i===2);
  }
  near(resolveHeading(s,sensor(10,start+5300),start+5300).bearing,40);
  let other=createHeadingState();
  for(let i=0;i<3;i++)other=advanceVisualHeading(other,fix(40,10,start+i*1000,{nodeId:i===1?'B':'A'}),start+i*1000);
  assert.equal(other.anchor,null);assert.equal(other.pending.length,1);
});

test('uses capture sensor, not completion-time sensor; compensates turning while matching',()=>{
  let s=createHeadingState();
  for(let i=0;i<3;i++){
    const captured=start+i*2200,heading=10+i*50;
    s=advanceVisualHeading(s,fix(heading+30,heading,captured),captured+1700);
  }
  const now=start+6100;
  near(resolveHeading(s,sensor(170,now),now).bearing,200);
  assert.equal(s.anchor.capturedAt,start+4400);
});

test('wraps 359/1 degree observations without averaging through 180 degrees',()=>{
  let s=createHeadingState();
  [359,1,0].forEach((bearing,i)=>s=advanceVisualHeading(s,fix(bearing,0,start+i*1000),start+i*1000));
  near(resolveHeading(s,sensor(0,start+2200),start+2200).bearing,0,.01);
  near(resolveHeading(s,sensor(5,start+2300),start+2300).bearing,5,.01);
});

test('two misses preserve confirmation but never create evidence or refresh anchor age',()=>{
  let s=advanceVisualHeading(null,fix(40,10,start),start);
  s=advanceVisualHeading(s,null,start+1000);
  s=advanceVisualHeading(s,fix(40,10,start+2400),start+2400);
  s=advanceVisualHeading(s,null,start+3500);
  s=advanceVisualHeading(s,fix(40,10,start+6000),start+6100);
  assert.equal(s.status,'tracking');assert.equal(s.anchor.capturedAt,start+6000);
  s=advanceVisualHeading(s,null,start+7000);assert.equal(s.anchor.capturedAt,start+6000);
});

test('rejects stale visual results and future or stale capture sensors',()=>{
  const s=lock();
  const old=advanceVisualHeading(s,fix(40,10,start+3000),start+6001);
  assert.equal(old.lastRejection,'stale-visual');assert.equal(old.anchor.capturedAt,s.anchor.capturedAt);
  for(const sampled of [start+2500,start+4100]){
    const r=advanceVisualHeading(s,fix(40,10,start+4000,{sensor:sensor(10,sampled)}),start+4500);
    assert.equal(r.lastRejection,'stale-sensor');assert.equal(r.anchor.capturedAt,s.anchor.capturedAt);
  }
  assert.equal(advanceVisualHeading(null,fix(40,10,start+1000),start).lastRejection,'invalid-visual');
});

test('out-of-order frames and duplicate capture timestamps cannot add votes or overwrite lock',()=>{
  let s=advanceVisualHeading(null,fix(40,10,start),start);
  s=advanceVisualHeading(s,fix(40,10,start),start+500);
  assert.equal(s.pending.length,1);assert.equal(s.lastRejection,'out-of-order');
  s=lock();const rejected=advanceVisualHeading(s,fix(150,10,start+1000),start+2500);
  assert.equal(rejected.lastRejection,'out-of-order');near(resolveHeading(rejected,sensor(10,start+2500),start+2500).bearing,40);
});

test('screen or sensor-source changes clear a lock and it cannot resurrect when the source returns',()=>{
  for(const changed of [sensor(10,start+2300,'absolute'),sensor(10,start+2300,'relative',90)]){
    const r=resolveHeading(lock(),changed,start+2300);
    assert.equal(r.bearing,null);assert.equal(r.reason,'sensor-source-changed');assert.equal(r.state.anchor,null);
    const back=resolveHeading(r.state,sensor(10,start+2400),start+2400);assert.equal(back.bearing,null);
    const late=advanceVisualHeading(back.state,fix(40,10,start+2200),start+2500);
    assert.equal(late.lastRejection,'out-of-order');assert.equal(late.anchor,null);
  }
});

test('a large correction removes usable heading immediately and needs three new consistent fixes',()=>{
  let s=lock();s=advanceVisualHeading(s,fix(100,10,start+3000),start+3000);
  assert.equal(s.anchor,null);assert.equal(s.reason,'discontinuity');assert.equal(resolveHeading(s,sensor(10,start+3100),start+3100).bearing,null);
  s=advanceVisualHeading(s,fix(101,10,start+4000),start+4000);assert.equal(s.anchor,null);
  s=advanceVisualHeading(s,fix(99,10,start+5000),start+5000);near(resolveHeading(s,sensor(10,start+5100),start+5100).bearing,100,.1);
});

test('expiry uses last visual CAPTURE time, misses do not extend it',()=>{
  let s=lock();const until=s.anchor.capturedAt+HEADING_LIMITS.maxHoldMs;
  s=advanceVisualHeading(s,null,until-1);assert.notEqual(resolveHeading(s,sensor(10,until),until).bearing,null);
  const r=resolveHeading(s,sensor(10,until+1),until+1);assert.equal(r.bearing,null);assert.equal(r.reason,'expired');
  assert.equal(resolveHeading(r.state,sensor(10,until+1000),until+1000).bearing,null);
});

test('missing or stale live IMU loses lock rather than pretending a frozen heading follows motion',()=>{
  for(const reading of [null,{...sensor(10,start+2300),heading:null,kind:'unavailable'},sensor(10,start+1000)]){
    const r=resolveHeading(lock(),reading,start+2300);assert.equal(r.bearing,null);assert.equal(r.state.anchor,null);
    assert.equal(resolveHeading(r.state,sensor(10,start+2400),start+2400).bearing,null);
  }
  const invalid=advanceVisualHeading(null,fix(40,10,start,{sensor:{...sensor(10,start),heading:null,kind:'unavailable'}}),start);
  assert.equal(invalid.anchor,null);assert.equal(invalid.pending.length,0);
});

test('invalid uncertainty and explicit reset cannot silently establish or revive tracking',()=>{
  for(const uncertaintyDeg of [-1,21,NaN,Infinity]){
    const s=advanceVisualHeading(null,fix(40,10,start,{uncertaintyDeg}),start);
    assert.equal(s.pending.length,0);assert.equal(s.anchor,null);
  }
  const reset=resetHeadingState('reset',start+3000);
  assert.equal(advanceVisualHeading(reset,fix(40,10,start+2500),start+3500).lastRejection,'out-of-order');
  assert.equal(resolveHeading(reset,sensor(10,start+3000),start+3000).bearing,null);
});

test('8-second confirmation expires old votes and helper does not mutate caller input',()=>{
  const original=advanceVisualHeading(null,fix(40,10,start),start),before=JSON.stringify(original);
  let s=advanceVisualHeading(original,fix(40,10,start+4500),start+4500);
  s=advanceVisualHeading(s,fix(40,10,start+8500),start+8500);
  assert.equal(s.anchor,null);assert.equal(s.pending.length,2);assert.equal(JSON.stringify(original),before);
  const changed=advanceVisualHeading(lock(),fix(40,10,start+3000,{sensor:sensor(10,start+3000,'absolute')}),start+3000);
  assert.equal(changed.anchor,null);assert.equal(changed.pending.length,1);
});

test('a consistent new node must earn its own three fixes before refreshing the prior anchor',()=>{
  let s=lock();const oldCapturedAt=s.anchor.capturedAt;
  for(let i=0;i<3;i++){
    const time=start+3000+i*1000;
    s=advanceVisualHeading(s,fix(41,10,time,{nodeId:'B',referenceId:'b-view-'+i}),time);
    assert.equal(s.pending.length,i+1);
    assert.equal(s.anchor.nodeId,i===2?'B':'A');
    if(i<2)assert.equal(s.anchor.capturedAt,oldCapturedAt);
  }
  near(resolveHeading(s,sensor(10,start+5100),start+5100).bearing,41);
});
