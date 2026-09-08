import type {FieldSensor} from './ar-v4-field-core';

/** All times are epoch milliseconds. Bearings refer to the rear-camera optical
 * axis in map space; callers must supply the SAME optical-axis sensor convention
 * at frame capture and during live resolution. This helper does not locate or
 * advance a visitor, nor infer a phone bearing from a reference view's centre. */
export type HeadingFix = {
  bearing:number; uncertaintyDeg:number; nodeId:string; referenceId:string;
  capturedAt:number; sensor:FieldSensor;
};
export type HeadingStatus = 'searching'|'confirming'|'tracking'|'lost';
export type HeadingReason = 'waiting-for-visual'|'confirming'|'visual-locked'|'expired'|
  'sensor-unavailable'|'stale-sensor'|'sensor-source-changed'|'discontinuity'|
  'invalid-visual'|'stale-visual'|'out-of-order'|'clock-change'|'reset';
type SensorSource = {kind:'absolute'|'relative';screenAngle:number};
type Evidence = {offset:number;uncertaintyDeg:number;nodeId:string;referenceId:string;capturedAt:number};
export type HeadingAnchor = Evidence & {source:SensorSource};
export type HeadingState = {
  status:HeadingStatus; reason:HeadingReason; source:SensorSource|null;
  anchor:HeadingAnchor|null; pending:readonly Evidence[];
  lastCapturedAt:number|null; invalidatedAt:number; lastRejection:HeadingReason|null;
};
export type HeadingResolution = {
  state:HeadingState; bearing:number|null; uncertaintyDeg:number|null;
  status:HeadingStatus; reason:HeadingReason; ageMs:number|null; hits:number;
};

export const HEADING_LIMITS = Object.freeze({
  confirmationHits:3, confirmationWindowMs:8000, maxResultAgeMs:3000,
  sensorFreshnessMs:1000, maxHoldMs:15000, maxVisualUncertaintyDeg:20,
  consistencyDeg:15, maxSensorUncertaintyDeg:45,
});
const finite=(n:unknown):n is number=>typeof n==='number'&&Number.isFinite(n);
const wrap=(n:number)=>((n%360)+360)%360;
const difference=(a:number,b:number)=>((a-b+540)%360+360)%360-180;
const validTime=(n:number)=>finite(n)&&n>=0;
const sameSource=(a:SensorSource|null,b:SensorSource)=>a?.kind===b.kind&&a.screenAngle===b.screenAngle;

export function createHeadingState():HeadingState {
  return {status:'searching',reason:'waiting-for-visual',source:null,anchor:null,pending:[],
    lastCapturedAt:null,invalidatedAt:0,lastRejection:null};
}
/** Pass now when explicitly invalidating an async session (e.g. ambiguity).
 * Earlier captured results will then be unable to revive its baseline. */
export function resetHeadingState(reason:HeadingReason='reset',now=0):HeadingState {
  return {...createHeadingState(),status:'lost',reason,invalidatedAt:validTime(now)?now:0};
}
function invalidate(state:HeadingState,reason:HeadingReason,now:number,source:SensorSource|null=null):HeadingState {
  return {...state,status:'lost',reason,anchor:null,pending:[],source,
    invalidatedAt:Math.max(state.invalidatedAt,validTime(now)?now:state.invalidatedAt),lastRejection:reason};
}
function inspectSensor(sensor:FieldSensor|null|undefined,at:number):{source:SensorSource;heading:number}|HeadingReason {
  if(!sensor||!finite(sensor.heading)||!finite(sensor.screenAngle)||!['absolute','relative'].includes(sensor.kind))return 'sensor-unavailable';
  if(sensor.accuracy!==null&&(!finite(sensor.accuracy)||sensor.accuracy<0||sensor.accuracy>HEADING_LIMITS.maxSensorUncertaintyDeg))return 'sensor-unavailable';
  const sampled=typeof sensor.capturedAt==='string'?Date.parse(sensor.capturedAt):NaN;
  if(!validTime(sampled)||sampled>at||at-sampled>HEADING_LIMITS.sensorFreshnessMs)return 'stale-sensor';
  return {source:{kind:sensor.kind as SensorSource['kind'],screenAngle:wrap(sensor.screenAngle)},heading:wrap(sensor.heading)};
}
function expire(state:HeadingState,now:number):HeadingState {
  if(!validTime(now)||(state.anchor&&now<state.anchor.capturedAt))return invalidate(state,'clock-change',now);
  const pending=state.pending.filter(e=>e.capturedAt<=now&&now-e.capturedAt<=HEADING_LIMITS.confirmationWindowMs);
  const anchor=state.anchor&&now-state.anchor.capturedAt<=HEADING_LIMITS.maxHoldMs?state.anchor:null;
  if(pending.length===state.pending.length&&anchor===state.anchor)return state;
  if(anchor)return {...state,pending};
  return {...state,anchor:null,pending,status:pending.length?'confirming':state.anchor?'lost':state.status==='confirming'?'searching':state.status,
    reason:state.anchor?'expired':pending.length?'confirming':'waiting-for-visual'};
}
const reject=(state:HeadingState,reason:HeadingReason):HeadingState=>({...state,lastRejection:reason});
function combinedOffset(evidence:readonly Evidence[]):{offset:number;uncertaintyDeg:number} {
  let x=0,y=0;
  for(const e of evidence){const weight=1/Math.max(3,e.uncertaintyDeg)**2;x+=Math.cos(e.offset*Math.PI/180)*weight;y+=Math.sin(e.offset*Math.PI/180)*weight;}
  const offset=wrap(Math.atan2(y,x)*180/Math.PI);
  // A conservative display envelope, not a calibrated probabilistic confidence.
  const scatter=Math.max(...evidence.map(e=>Math.abs(difference(e.offset,offset))));
  return {offset,uncertaintyDeg:Math.max(...evidence.map(e=>e.uncertaintyDeg))+scatter};
}

/** One call per independently captured accepted visual observation; null means
 * a miss. Comparing visual-minus-capture-sensor offsets compensates real turns
 * made between frames and never uses the sensor at async completion time. */
export function advanceVisualHeading(previous:HeadingState|null|undefined,fix:HeadingFix|null,now:number):HeadingState {
  let state=expire(previous||createHeadingState(),now);
  if(!validTime(now))return state;
  if(!fix)return state; // No new evidence and no freshness extension.
  if(!finite(fix.bearing)||!finite(fix.uncertaintyDeg)||fix.uncertaintyDeg<0||fix.uncertaintyDeg>HEADING_LIMITS.maxVisualUncertaintyDeg||
    typeof fix.nodeId!=='string'||!fix.nodeId.trim()||typeof fix.referenceId!=='string'||!fix.referenceId.trim()||!validTime(fix.capturedAt))return reject(state,'invalid-visual');
  if(fix.capturedAt>now)return reject(state,'invalid-visual');
  if(fix.capturedAt<state.invalidatedAt||(state.lastCapturedAt!==null&&fix.capturedAt<=state.lastCapturedAt))return reject(state,'out-of-order');
  if(now-fix.capturedAt>HEADING_LIMITS.maxResultAgeMs)return reject(state,'stale-visual');
  const reading=inspectSensor(fix.sensor,fix.capturedAt);
  if(typeof reading==='string')return reject(state,reading);
  if(state.source&&!sameSource(state.source,reading.source))state=invalidate(state,'sensor-source-changed',fix.capturedAt,reading.source);
  const evidence:Evidence={offset:wrap(fix.bearing-reading.heading),uncertaintyDeg:fix.uncertaintyDeg,
    nodeId:fix.nodeId,referenceId:fix.referenceId,capturedAt:fix.capturedAt};
  let pending=state.pending.filter(e=>e.nodeId===fix.nodeId);
  const conflict=Boolean(state.anchor&&Math.abs(difference(evidence.offset,state.anchor.offset))>HEADING_LIMITS.consistencyDeg)
    ||pending.some(e=>Math.abs(difference(evidence.offset,e.offset))>HEADING_LIMITS.consistencyDeg);
  if(conflict){state=invalidate(state,'discontinuity',fix.capturedAt,reading.source);pending=[];}
  pending=[...pending,evidence].slice(-HEADING_LIMITS.confirmationHits);
  let anchor=state.anchor;
  if(pending.length>=HEADING_LIMITS.confirmationHits){
    anchor={...evidence,...combinedOffset(pending),source:reading.source};
  }
  return {...state,source:reading.source,pending,anchor,lastCapturedAt:fix.capturedAt,lastRejection:null,
    status:anchor?'tracking':'confirming',reason:anchor?'visual-locked':conflict?'discontinuity':'confirming'};
}

/** Store the returned state, even when bearing is null. Source/screen changes,
 * stale sensors and expiry must not resurrect an old anchor when inputs return. */
export function resolveHeading(previous:HeadingState|null|undefined,sensor:FieldSensor|null|undefined,now:number):HeadingResolution {
  let state=expire(previous||createHeadingState(),now);
  if(validTime(now)){
    const reading=inspectSensor(sensor,now);
    if(typeof reading==='string')state=invalidate(state,reading,now);
    else if(state.source&&!sameSource(state.source,reading.source))state=invalidate(state,'sensor-source-changed',now,reading.source);
    else {
      if(!state.source)state={...state,source:reading.source};
      if(state.anchor)return {state,bearing:wrap(reading.heading+state.anchor.offset),uncertaintyDeg:state.anchor.uncertaintyDeg,
        status:'tracking',reason:'visual-locked',ageMs:now-state.anchor.capturedAt,hits:state.pending.length};
    }
  }
  return {state,bearing:null,uncertaintyDeg:null,status:state.status,reason:state.reason,
    ageMs:null,hits:state.pending.length};
}
