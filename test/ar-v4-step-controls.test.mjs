import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {loadV4Source} from '../scripts/ar-v4-worker-runtime.mjs';

const {createStepDetector,resetStepDetector,advanceStepDetector,STEP_PROFILES,STEP_LIMITS}=loadV4Source('ar-v4-guidance-session.ts');
const {createStepSubmissionGate,resetStepSubmissionGate,submitStep,recommendStepSensitivity,estimatedProgressLimit,STEP_SUBMISSION_LIMITS}=loadV4Source('ar-v4-step-controls.ts');
const profiles=['low','standard','high'];
const at=1_000_000;
const plain=value=>JSON.parse(JSON.stringify(value));
const motion=(capturedAt,z=0)=>({capturedAt,acceleration:{x:0,y:0,z}});
function run(raw,sensitivity,source='linear'){
  let state=createStepDetector();const events=[],reasons=[],trace=[];
  raw.forEach((z,index)=>{
    const time=at+index*50;
    const sample=source==='gravity'?{capturedAt:time,accelerationIncludingGravity:{x:0,y:0,z:9.81+z}}:motion(time,z);
    const result=advanceStepDetector(state,sample,time,sensitivity);
    state=result.state;reasons.push(result.reason);trace.push(result);
    if(result.event)events.push(result.event);
  });
  return {state,events,reasons,trace};
}
const waveform=(amplitude,highSamples=4,count=10)=>[
  ...Array(8).fill(0),...Array.from({length:count},()=>[...Array(highSamples).fill(amplitude),...Array(8).fill(0)]).flat(),
];
const countProfiles=raw=>Object.fromEntries(profiles.map(profile=>[profile,run(raw,profile).events.length]));

test('dense short legs retain usable progress without ever counting as endpoint arrival',()=>{
  assert.equal(estimatedProgressLimit(6),5.2);
  assert.equal(estimatedProgressLimit(2),1.6);
  assert.equal(estimatedProgressLimit(.5),.4);
  for(const distance of [.1,.5,2,4,6,100])assert.ok(estimatedProgressLimit(distance)<distance&&estimatedProgressLimit(distance)>=distance*.7);
  for(const invalid of [NaN,Infinity,-1,0])assert.equal(estimatedProgressLimit(invalid),0);
});

test('three profiles only vary sustained peak threshold; standard uses the original limits',()=>{
  assert.ok(STEP_PROFILES.low.peakThreshold>STEP_PROFILES.standard.peakThreshold);
  assert.ok(STEP_PROFILES.standard.peakThreshold>STEP_PROFILES.high.peakThreshold);
  assert.equal(STEP_PROFILES.standard.peakThreshold,STEP_LIMITS.peakThreshold);
  for(const profile of profiles){
    assert.equal(STEP_PROFILES[profile].releaseThreshold,STEP_LIMITS.releaseThreshold);
    assert.ok(Object.isFrozen(STEP_PROFILES[profile]));
  }
  assert.ok(Object.isFrozen(STEP_PROFILES));
});

test('identical raw samples distinguish high/standard/low sensitivity predictably',()=>{
  assert.deepEqual(countProfiles(waveform(1)),{low:0,standard:0,high:10});
  assert.deepEqual(countProfiles(waveform(1.4)),{low:0,standard:10,high:10});
  assert.deepEqual(countProfiles(waveform(3,3)),{low:10,standard:10,high:10});
});

test('omitted sensitivity is identical to explicit standard and the pre-change default trace',()=>{
  const raw=[...Array(8).fill(0),3,3,3,...Array(8).fill(0),1,1,1,1,...Array(8).fill(0),
    1.4,1.4,1.4,1.4,...Array(8).fill(0),20,...Array(20).fill(0),...Array(20).fill(3),...Array(10).fill(0)];
  const omitted=run(raw),standard=run(raw,'standard');
  assert.deepEqual(plain(omitted),plain(standard));
  // Captured from the original HEAD implementation before adding profiles.
  assert.equal(createHash('sha256').update(JSON.stringify(omitted.trace)).digest('hex'),'03df17b6eb2cfec8a0e07751279bcfa767189ad68eb203e2def3e04a3a579c08');
  assert.deepEqual(plain(run(raw,'toString')),plain(standard));
});

test('all sensitivities retain warmup, sustained-pulse release and spike safeguards',()=>{
  for(const profile of profiles){
    assert.equal(run(Array(40).fill(0),profile).events.length,0);
    assert.equal(run([...Array(8).fill(0),...Array(30).fill(3),...Array(10).fill(0)],profile).events.length,0);
    assert.equal(run([...Array(8).fill(0),6,...Array(20).fill(0)],profile).events.length,0);
    const spike=run([...Array(8).fill(0),20,...Array(20).fill(0)],profile);
    assert.equal(spike.events.length,0);assert.ok(spike.reasons.includes('spike'));
    assert.equal(run([3,3,3,...Array(12).fill(0)],profile).events.length,0);
    assert.equal(run([...Array(8).fill(0),3,3,3],profile).events.length,0);
  }
});

test('all profiles preserve cadence and timestamp safety',()=>{
  for(const profile of profiles){
    const result=run(waveform(3,3),profile);
    for(let i=1;i<result.events.length;i++)assert.ok(result.events[i].capturedAt-result.events[i-1].capturedAt>=STEP_LIMITS.minStepIntervalMs);
    const state=result.state,t=state.lastCapturedAt;
    for(const [capturedAt,now,reason] of [
      [t,t,'out-of-order'],[t-1,t,'out-of-order'],[t+1,t+1,'too-fast'],
      [t+100,t+50,'invalid-sample'],[t+50,t+301,'stale-sample'],[t-1,t-1,'clock-change'],
    ]){
      const rejected=advanceStepDetector(state,motion(capturedAt,3),now,profile);
      assert.equal(rejected.event,null);assert.equal(rejected.reason,reason);
    }
    const cooldownState={...state,phase:'ready',lastPeakAt:t};
    assert.equal(advanceStepDetector(cooldownState,motion(t+50,3),t+50,profile).reason,'cooldown');
  }
});

test('gravity fallback remains available at every profile and reset discards partial pulses',()=>{
  for(const profile of profiles){
    assert.ok(run(waveform(3,3),profile,'gravity').events.length>0);
    const partial=run([...Array(8).fill(0),3,3],profile),barrier=partial.state.lastCapturedAt+100;
    const reset=resetStepDetector(partial.state,barrier);
    const old=advanceStepDetector(reset,motion(barrier-50),barrier+50,profile);
    assert.equal(old.event,null);assert.equal(old.reason,'out-of-order');
    const fresh=advanceStepDetector(reset,motion(barrier+50),barrier+50,profile);
    assert.equal(fresh.event,null);assert.equal(fresh.reason,'warming');
  }
});

test('manual and automatic steps are mutually exclusive without implicit mode changes',()=>{
  for(const mode of ['auto','manual']){
    const gate=createStepSubmissionGate(mode,at);
    const wrong=submitStep(gate,{source:mode==='auto'?'manual':'auto',capturedAt:at+500},at+500);
    assert.equal(wrong.accepted,false);assert.equal(wrong.reason,'mode-mismatch');assert.equal(wrong.state.mode,mode);
    const right=submitStep(wrong.state,{source:mode,capturedAt:at+550},at+550);
    assert.equal(right.accepted,true);assert.equal(right.state.lastAcceptedAt,at+550);
    assert.equal('distanceMeters' in right.state,false);assert.equal('arrived' in right,false);
  }
});

test('manual duplicate taps and fast follow-up clicks cannot double-count',()=>{
  const first=submitStep(createStepSubmissionGate('manual',at),{source:'manual',capturedAt:at+500},at+500);
  assert.equal(first.accepted,true);
  for(const [capturedAt,reason] of [[at+500,'out-of-order'],[at+600,'debounce'],[at+849,'debounce']]){
    const result=submitStep(first.state,{source:'manual',capturedAt},capturedAt);
    assert.equal(result.accepted,false);assert.equal(result.reason,reason);assert.equal(result.state.lastAcceptedAt,at+500);
  }
  assert.equal(submitStep(first.state,{source:'manual',capturedAt:at+850},at+850).accepted,true);
  assert.equal(STEP_SUBMISSION_LIMITS.minIntervalMs,350);
});

test('mode-switch barriers reject queued old events and preserve cross-mode debounce',()=>{
  const automatic=submitStep(createStepSubmissionGate('auto',at),{source:'auto',capturedAt:at+500},at+500).state;
  const manual=resetStepSubmissionGate(automatic,at+600,'manual');
  assert.equal(submitStep(manual,{source:'manual',capturedAt:at+550},at+650).reason,'out-of-order');
  assert.equal(submitStep(manual,{source:'auto',capturedAt:at+650},at+650).reason,'mode-mismatch');
  assert.equal(submitStep(manual,{source:'manual',capturedAt:at+650},at+650).reason,'debounce');
  assert.equal(submitStep(manual,{source:'manual',capturedAt:at+850},at+850).accepted,true);
  const autoAgain=resetStepSubmissionGate(manual,at+1000,'auto');
  assert.equal(submitStep(autoAgain,{source:'auto',capturedAt:at+999},at+1001).reason,'out-of-order');
  assert.equal(submitStep(autoAgain,{source:'auto',capturedAt:at+1000},at+1001).reason,'out-of-order');
  assert.equal(submitStep(autoAgain,{source:'auto',capturedAt:at+1001},at+1001).accepted,true);
});

test('calibration consumes the same profile samples without submitting any navigation steps',()=>{
  const raw=waveform(3,3),counts=countProfiles(raw);
  assert.deepEqual(counts,{low:10,standard:10,high:10});
  let gate=createStepSubmissionGate('calibration',at);
  for(const event of run(raw,'standard').events){
    const result=submitStep(gate,{source:'auto',capturedAt:event.capturedAt},event.capturedAt);
    gate=result.state;assert.equal(result.accepted,false);assert.equal(result.reason,'calibrating');
  }
  assert.equal(gate.lastAcceptedAt,null);
  assert.equal(submitStep(gate,{source:'manual',capturedAt:gate.lastNow+10},gate.lastNow+10).reason,'calibrating');
  const finishedAt=gate.lastNow+500,finished=resetStepSubmissionGate(gate,finishedAt,'auto');
  assert.equal(submitStep(finished,{source:'auto',capturedAt:finishedAt-1},finishedAt+1).accepted,false);
  assert.equal(submitStep(finished,{source:'auto',capturedAt:finishedAt+1},finishedAt+1).accepted,true);
});

test('submission rejects stale, future, invalid and old timestamps',()=>{
  const gate=createStepSubmissionGate('manual',at);
  for(const [step,now,reason] of [
    [{source:'manual',capturedAt:at+1},at+1002,'stale-step'],
    [{source:'manual',capturedAt:at+100},at+99,'invalid-step'],
    [{source:'manual',capturedAt:NaN},at+500,'invalid-step'],
    [{source:'manual',capturedAt:-1},at+500,'invalid-step'],
    [{source:'other',capturedAt:at+500},at+500,'invalid-step'],
    [null,at+500,'invalid-step'],
    [{source:'manual',capturedAt:at},at+100,'out-of-order'],
  ]){
    const result=submitStep(gate,step,now);
    assert.equal(result.accepted,false);assert.equal(result.reason,reason);assert.equal(result.state.lastAcceptedAt,null);
  }
});

test('clock rollback and invalid now produce a monotonic reset barrier',()=>{
  const gate=submitStep(createStepSubmissionGate('manual',at),{source:'manual',capturedAt:at+500},at+500).state;
  for(const now of [at+400,NaN,Infinity]){
    const result=submitStep(gate,{source:'manual',capturedAt:now},now);
    assert.equal(result.accepted,false);assert.equal(result.reason,'clock-change');
    assert.equal(result.state.barrierAt,at+500);
    assert.equal(submitStep(result.state,{source:'manual',capturedAt:at+450},at+700).accepted,false);
    assert.equal(submitStep(result.state,{source:'manual',capturedAt:at+1000},at+1000).accepted,true);
  }
});

test('recommendation chooses nearest ten and breaks ties standard, then low, then high',()=>{
  for(const [counts,expected,error] of [
    [{low:0,standard:0,high:10},'high',0],
    [{low:10,standard:10,high:10},'standard',0],
    [{low:8,standard:9,high:11},'standard',1],
    [{low:10,standard:8,high:10},'low',0],
    [{low:9,standard:7,high:11},'low',1],
    [{low:8,standard:9,high:12},'standard',1],
  ]){
    const result=recommendStepSensitivity(counts);
    assert.equal(result.recommended,expected);assert.equal(result.error,error);
    assert.equal(result.expectedSteps,10);assert.equal(result.reason,'closest-count');
  }
});

test('calibration declines invalid or entirely missing counts rather than inventing a setting',()=>{
  const empty=recommendStepSensitivity({low:0,standard:0,high:0});
  assert.equal(empty.recommended,null);assert.equal(empty.reason,'no-steps');
  for(const counts of [null,{}, {low:1,standard:NaN,high:1}, {low:-1,standard:10,high:10},
    {low:1.5,standard:10,high:10}, {low:1001,standard:10,high:10}, {low:1,standard:'10',high:10}]){
    const result=recommendStepSensitivity(counts);
    assert.equal(result.recommended,null);assert.equal(result.error,null);assert.equal(result.reason,'invalid-counts');
  }
});

test('controls and recommendations do not mutate caller state or auto-apply the recommendation',()=>{
  const gate=createStepSubmissionGate('manual',at),counts={low:9,standard:6,high:10},before=plain({gate,counts});
  submitStep(gate,{source:'manual',capturedAt:at+500},at+500);
  resetStepSubmissionGate(gate,at+1000,'auto');recommendStepSensitivity(counts);
  assert.deepEqual(plain({gate,counts}),before);
  assert.equal(createStepSubmissionGate('unexpected',at).mode,'calibration');
});
