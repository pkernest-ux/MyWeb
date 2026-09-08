import type {FieldSensor} from './ar-v4-field-core';

/** Approximate, local-only guidance. No map position, node transition, route
 * selection, arrival decision, camera access, or persistent writes occur here.
 * All timestamps use the same epoch-millisecond clock (normally Date.now()). */
export type GuidanceStatus = 'tracking'|'estimated'|'needs-calibration'|'unavailable';
export type GuidanceReason = 'awaiting-anchor'|'visual-anchor'|'manual-anchor'|'imu-estimate'|
  'reset'|'clock-change'|'sensor-unavailable'|'stale-sensor'|'sensor-source-changed'|
  'time-budget'|'distance-budget'|'step-budget'|'invalid-fix'|'stale-fix'|'out-of-order-fix'|
  'invalid-step'|'stale-step'|'out-of-order-step';
export type GuidanceAnchor = {
  bearing:number; sensorHeading:number; kind:'absolute'|'relative'; screenAngle:number;
  source:'visual'|'manual'; nodeId:string; observedAt:number;
};
export type GuidanceSession = {
  anchor:GuidanceAnchor|null; status:GuidanceStatus; reason:GuidanceReason;
  startedAt:number|null; lastNow:number|null; invalidatedAt:number|null;
  lastObservedAt:number|null; lastStepAt:number|null; steps:number; distanceMeters:number;
  lastRejection:GuidanceReason|null;
};
export type GuidanceFix = {
  bearing:number; sensor:FieldSensor; now:number; source:'visual'|'manual'; nodeId:string;
  /** Bearing AND sensor must describe this instant, not async completion time. */
  observedAt?:number;
};
export type GuidanceResolution = {
  state:GuidanceSession; bearing:number|null; status:GuidanceStatus; reason:GuidanceReason;
  ageMs:number|null; steps:number; distanceMeters:number; remainingMs:number; remainingMeters:number;
};
export const GUIDANCE_LIMITS = Object.freeze({
  maxSessionMs:90000, freshAnchorMs:15000, maxDistanceMeters:30, maxSteps:60,
  sensorFreshnessMs:1000, maxFixAgeMs:3000, maxStepAgeMs:1000,
  maxSensorAccuracyDeg:45, minStrideMeters:.2, maxStrideMeters:1.2,
});
const finite=(n:unknown):n is number=>typeof n==='number'&&Number.isFinite(n);
const time=(n:unknown):n is number=>finite(n)&&n>=0;
const wrap=(n:number)=>((n%360)+360)%360;
type SensorReading={heading:number;kind:'absolute'|'relative';screenAngle:number};
function readSensor(sensor:FieldSensor|null|undefined,at:number):SensorReading|'sensor-unavailable'|'stale-sensor' {
  if(!sensor||!finite(sensor.heading)||!finite(sensor.screenAngle)||!['absolute','relative'].includes(sensor.kind)||
    sensor.accuracy!==null&&(!finite(sensor.accuracy)||sensor.accuracy<0||sensor.accuracy>GUIDANCE_LIMITS.maxSensorAccuracyDeg))return 'sensor-unavailable';
  const captured=typeof sensor.capturedAt==='string'?Date.parse(sensor.capturedAt):NaN;
  if(!time(captured)||captured>at||at-captured>GUIDANCE_LIMITS.sensorFreshnessMs)return 'stale-sensor';
  return {heading:wrap(sensor.heading),kind:sensor.kind as 'absolute'|'relative',screenAngle:wrap(sensor.screenAngle)};
}
export function createGuidanceSession(now=0):GuidanceSession {
  return {anchor:null,status:'needs-calibration',reason:'awaiting-anchor',startedAt:null,
    lastNow:time(now)?now:null,invalidatedAt:null,lastObservedAt:null,lastStepAt:null,
    steps:0,distanceMeters:0,lastRejection:null};
}
function invalidate(state:GuidanceSession,now:number,reason:GuidanceReason,status:GuidanceStatus='needs-calibration'):GuidanceSession {
  const barrier=Math.max(state.invalidatedAt??0,state.lastNow??0,time(now)?now:0);
  return {...state,anchor:null,status,reason,invalidatedAt:barrier,lastNow:barrier,lastRejection:reason};
}
/** Reset is a capture-time barrier. Cancel the prior async recognition loop as
 * well when replacing an entire session; never reuse captured fixes afterward. */
export function resetGuidanceSession(previous:GuidanceSession|null|undefined,now:number,reason:GuidanceReason='reset'):GuidanceSession {
  const old=previous||createGuidanceSession();
  const state=invalidate(old,now,reason);
  return {...state,startedAt:null,steps:0,distanceMeters:0};
}
function budget(state:GuidanceSession,now:number):GuidanceSession {
  if(!time(now)||(state.lastNow!==null&&now<state.lastNow))return invalidate(state,now,'clock-change');
  let next=state.lastNow===now?state:{...state,lastNow:now};
  if(!next.anchor)return next;
  const reason:GuidanceReason|null=now-next.anchor.observedAt>=GUIDANCE_LIMITS.maxSessionMs?'time-budget':
    next.distanceMeters>=GUIDANCE_LIMITS.maxDistanceMeters?'distance-budget':next.steps>=GUIDANCE_LIMITS.maxSteps?'step-budget':null;
  if(reason)return invalidate(next,now,reason);
  const estimated=next.steps>0||now-next.anchor.observedAt>GUIDANCE_LIMITS.freshAnchorMs;
  return {...next,status:estimated?'estimated':'tracking',reason:estimated?'imu-estimate':next.anchor.source==='visual'?'visual-anchor':'manual-anchor'};
}
const reject=(state:GuidanceSession,reason:GuidanceReason)=>({...state,lastRejection:reason});

/** Establish ONLY from an independently validated initial visual fix or an
 * explicit manual orientation confirmation. Callers gate visual fixes to the
 * last confirmed anchor, and must not repeatedly re-anchor after walking. */
export function establishGuidanceSession(previous:GuidanceSession|null|undefined,fix:GuidanceFix):GuidanceSession {
  let state=budget(previous||createGuidanceSession(),fix.now);
  if(!time(fix.now)||state.lastNow!==null&&fix.now<state.lastNow)return state;
  const observed=fix.observedAt??fix.now;
  if(!finite(fix.bearing)||!time(observed)||observed>fix.now||!['visual','manual'].includes(fix.source)||
    typeof fix.nodeId!=='string'||!fix.nodeId.trim())return reject(state,'invalid-fix');
  if(state.invalidatedAt!==null&&observed<state.invalidatedAt||state.lastObservedAt!==null&&observed<=state.lastObservedAt)return reject(state,'out-of-order-fix');
  if(fix.now-observed>GUIDANCE_LIMITS.maxFixAgeMs)return reject(state,'stale-fix');
  const sensor=readSensor(fix.sensor,observed);
  if(typeof sensor==='string')return reject(state,sensor);
  return {...state,anchor:{bearing:wrap(fix.bearing),sensorHeading:sensor.heading,kind:sensor.kind,
    screenAngle:sensor.screenAngle,source:fix.source,nodeId:fix.nodeId,observedAt:observed},
    startedAt:observed,lastObservedAt:observed,steps:0,distanceMeters:0,
    status:'tracking',reason:fix.source==='visual'?'visual-anchor':'manual-anchor',lastRejection:null};
}

/** Save the returned .state even when bearing is null: source/screen/freshness
 * failures permanently clear the old anchor, so it cannot reappear afterward. */
export function resolveGuidanceSession(previous:GuidanceSession|null|undefined,sensor:FieldSensor|null|undefined,now:number):GuidanceResolution {
  let state=budget(previous||createGuidanceSession(),now),bearing:number|null=null;
  if(time(now)&&state.lastNow!==null&&now>=state.lastNow){
    const reading=readSensor(sensor,now);
    if(typeof reading==='string')state=invalidate(state,now,reading,'unavailable');
    else if(state.anchor&&(state.anchor.kind!==reading.kind||state.anchor.screenAngle!==reading.screenAngle))state=invalidate(state,now,'sensor-source-changed');
    else if(state.anchor)bearing=wrap(state.anchor.bearing+reading.heading-state.anchor.sensorHeading);
    else if(state.status==='unavailable')state={...state,status:'needs-calibration'};
  }
  const ageMs=state.startedAt===null||!time(now)?null:Math.max(0,now-state.startedAt);
  return {state,bearing,status:state.status,reason:state.reason,ageMs,steps:state.steps,distanceMeters:state.distanceMeters,
    remainingMs:state.anchor?Math.max(0,GUIDANCE_LIMITS.maxSessionMs-(ageMs??0)):0,
    remainingMeters:state.anchor?Math.max(0,GUIDANCE_LIMITS.maxDistanceMeters-state.distanceMeters):0};
}

/** A detected or explicitly user-entered approximate step consumes budget.
 * The caller separately advances its route estimate; this never moves a node. */
export function recordGuidanceStep(previous:GuidanceSession|null|undefined,step:{capturedAt:number;strideMeters:number},now:number):GuidanceSession {
  let state=budget(previous||createGuidanceSession(),now);
  if(!state.anchor)return state;
  if(!time(step.capturedAt)||step.capturedAt>now||!finite(step.strideMeters)||step.strideMeters<GUIDANCE_LIMITS.minStrideMeters||step.strideMeters>GUIDANCE_LIMITS.maxStrideMeters)return reject(state,'invalid-step');
  if(step.capturedAt<=state.anchor.observedAt||state.lastStepAt!==null&&step.capturedAt<=state.lastStepAt)return reject(state,'out-of-order-step');
  if(now-step.capturedAt>GUIDANCE_LIMITS.maxStepAgeMs)return reject(state,'stale-step');
  state={...state,lastStepAt:step.capturedAt,steps:state.steps+1,distanceMeters:state.distanceMeters+step.strideMeters,lastRejection:null};
  return budget(state,now);
}

export type AccelerationVector={x:number|null;y:number|null;z:number|null};
export type StepSample={capturedAt:number;acceleration?:AccelerationVector|null;accelerationIncludingGravity?:AccelerationVector|null};
export type StepSource='linear'|'gravity';
export type ApproximateStep={capturedAt:number;source:StepSource;approximate:true;peak:number};
export type StepReason='warming'|'quiet'|'rising'|'released'|'step'|'cooldown'|'spike'|'source-changed'|
  'sample-gap'|'invalid-sample'|'stale-sample'|'out-of-order'|'too-fast'|'clock-change'|'reset';
export type StepDetectorState={
  source:StepSource|null;lastCapturedAt:number|null;lastNow:number|null;invalidatedAt:number|null;
  warmedAt:number|null;phase:'warming'|'ready'|'peak';smoothed:number;gravity:number|null;
  quietSamples:number;highSamples:number;pulseAt:number|null;peak:number;lastStepAt:number|null;lastPeakAt:number|null;
};
export type StepDetection={state:StepDetectorState;event:ApproximateStep|null;reason:StepReason};
export const STEP_LIMITS=Object.freeze({
  warmupMs:250,minSampleIntervalMs:8,maxSampleGapMs:300,maxSampleAgeMs:250,
  smoothingMs:70,gravitySmoothingMs:600,peakThreshold:1.15,releaseThreshold:.45,
  minPulseMs:80,maxPulseMs:700,minStepIntervalMs:350,maxLinearMagnitude:12,
  minGravityMagnitude:3,maxGravityMagnitude:24,
});
export function createStepDetector():StepDetectorState {
  return {source:null,lastCapturedAt:null,lastNow:null,invalidatedAt:null,warmedAt:null,
    phase:'warming',smoothed:0,gravity:null,quietSamples:0,highSamples:0,pulseAt:null,peak:0,lastStepAt:null,lastPeakAt:null};
}
export function resetStepDetector(previous:StepDetectorState|null|undefined,now:number):StepDetectorState {
  const state=previous||createStepDetector();
  const barrier=Math.max(state.invalidatedAt??0,state.lastNow??0,time(now)?now:0);
  return {...createStepDetector(),lastNow:barrier,invalidatedAt:barrier,lastStepAt:state.lastStepAt,lastPeakAt:state.lastPeakAt};
}
function magnitude(vector:AccelerationVector|null|undefined):number|null {
  return vector&&[vector.x,vector.y,vector.z].every(finite)?Math.hypot(vector.x!,vector.y!,vector.z!):null;
}
function warm(state:StepDetectorState,capturedAt:number):StepDetectorState {
  return {...state,phase:'warming',warmedAt:capturedAt,smoothed:0,quietSamples:0,highSamples:0,pulseAt:null,peak:0};
}
/** Heuristic peak/release detection, NOT proof of walking. Linear acceleration
 * is preferred; gravity fallback removes a slow magnitude baseline. Warm-up,
 * pulse duration, release, cadence and spike guards reduce (not eliminate)
 * shake counts. Smooth rhythmic hand motion can still resemble walking. */
export function advanceStepDetector(previous:StepDetectorState|null|undefined,sample:StepSample,now:number):StepDetection {
  let state=previous||createStepDetector();
  const result=(reason:StepReason,event:ApproximateStep|null=null):StepDetection=>({state,event,reason});
  if(!time(now)||state.lastNow!==null&&now<state.lastNow){state=resetStepDetector(state,now);return result('clock-change');}
  const captured=sample.capturedAt;
  if(!time(captured)||captured>now)return result('invalid-sample');
  if(state.invalidatedAt!==null&&captured<=state.invalidatedAt||state.lastCapturedAt!==null&&captured<=state.lastCapturedAt)return result('out-of-order');
  if(now-captured>STEP_LIMITS.maxSampleAgeMs){state=resetStepDetector(state,now);return result('stale-sample');}
  let value=magnitude(sample.acceleration),source:StepSource='linear';
  if(value===null){value=magnitude(sample.accelerationIncludingGravity);source='gravity';}
  if(value===null){state=resetStepDetector(state,now);return result('invalid-sample');}
  const elapsed=state.lastCapturedAt===null?0:captured-state.lastCapturedAt;
  if(state.lastCapturedAt!==null&&elapsed<STEP_LIMITS.minSampleIntervalMs)return result('too-fast');
  const changed=state.source!==null&&state.source!==source;
  const gap=elapsed>STEP_LIMITS.maxSampleGapMs;
  state={...state,lastNow:now,lastCapturedAt:captured};
  if(state.source===null||changed||gap){state={...warm(state,captured),source,gravity:source==='gravity'?value:null};return result(changed?'source-changed':gap?'sample-gap':'warming');}
  if(source==='linear'&&value>STEP_LIMITS.maxLinearMagnitude||source==='gravity'&&(value<STEP_LIMITS.minGravityMagnitude||value>STEP_LIMITS.maxGravityMagnitude)){
    state={...warm(state,captured),gravity:source==='gravity'?null:state.gravity};return result('spike');
  }
  let signal=value;
  if(source==='gravity'){
    const baseline=state.gravity??value;
    signal=Math.abs(value-baseline);
    state={...state,gravity:baseline+(value-baseline)*(1-Math.exp(-elapsed/STEP_LIMITS.gravitySmoothingMs))};
  }
  const smoothed=state.smoothed+(signal-state.smoothed)*(1-Math.exp(-elapsed/STEP_LIMITS.smoothingMs));
  const quiet=smoothed<=STEP_LIMITS.releaseThreshold;
  state={...state,smoothed,quietSamples:quiet?state.quietSamples+1:0};
  if(state.phase==='warming'){
    if(state.warmedAt!==null&&captured-state.warmedAt>=STEP_LIMITS.warmupMs&&state.quietSamples>=3)state={...state,phase:'ready'};
    return result('warming');
  }
  if(state.phase==='ready'){
    if(state.lastPeakAt!==null&&captured-state.lastPeakAt<STEP_LIMITS.minStepIntervalMs)return result('cooldown');
    if(smoothed>=STEP_LIMITS.peakThreshold)state={...state,phase:'peak',pulseAt:captured,peak:signal,highSamples:signal>=STEP_LIMITS.peakThreshold?1:0};
    return result(state.phase==='peak'?'rising':'quiet');
  }
  const duration=captured-state.pulseAt!;
  state={...state,peak:Math.max(state.peak,signal),highSamples:state.highSamples+(signal>=STEP_LIMITS.peakThreshold?1:0)};
  if(duration>STEP_LIMITS.maxPulseMs){state=warm(state,captured);return result('spike');}
  if(quiet&&state.quietSamples>=2){
    const valid=duration>=STEP_LIMITS.minPulseMs&&state.highSamples>=2;
    const peak=state.peak,peakAt=state.pulseAt!;
    state={...state,phase:'ready',pulseAt:null,highSamples:0,peak:0};
    if(valid){state={...state,lastStepAt:captured,lastPeakAt:peakAt};return result('step',{capturedAt:captured,source,approximate:true,peak});}
    return result('released');
  }
  return result('rising');
}
