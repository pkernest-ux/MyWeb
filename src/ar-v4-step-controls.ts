import type {StepSensitivity} from './ar-v4-guidance-session';

/** Local, approximate step input. Acceptance is permission to submit ONE step
 * to the existing guidance budget, not a location or arrival decision. */
export type StepInputMode='auto'|'manual';
export type StepSubmissionMode=StepInputMode|'calibration';
export type StepSubmissionGate={
  mode:StepSubmissionMode;
  barrierAt:number;
  lastNow:number;
  lastAcceptedAt:number|null;
};
export type StepSubmissionReason='accepted'|'calibrating'|'mode-mismatch'|'invalid-step'|
  'stale-step'|'out-of-order'|'debounce'|'clock-change';
export type StepSubmissionResult={state:StepSubmissionGate;accepted:boolean;reason:StepSubmissionReason};
export const STEP_SUBMISSION_LIMITS=Object.freeze({minIntervalMs:350,maxStepAgeMs:1000});
const time=(n:unknown):n is number=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
const validMode=(mode:unknown):mode is StepSubmissionMode=>mode==='auto'||mode==='manual'||mode==='calibration';

/** Leave a visible, unconfirmed endpoint margin. Dense sub-4m anchors use
 * a relative margin so a fixed 0.8m stop cannot consume the entire leg. */
export function estimatedProgressLimit(distanceMeters:number):number {
  if(!Number.isFinite(distanceMeters)||distanceMeters<=0)return 0;
  return Math.max(0,distanceMeters-Math.min(.8,distanceMeters*.2));
}

export function createStepSubmissionGate(mode:StepSubmissionMode='auto',now=0):StepSubmissionGate {
  const at=time(now)?now:0;
  return {mode:validMode(mode)?mode:'calibration',barrierAt:at,lastNow:at,lastAcceptedAt:null};
}

/** Call on mode, pause, sensitivity or calibration changes, and reset the raw
 * detector too. The capture-time barrier rejects in-flight old events; keeping
 * lastAcceptedAt prevents switching modes from bypassing the debounce guard.
 * Starting/ending calibration must reset the gate even if navigation mode is
 * unchanged. No calibration event can advance navigation while mode is set to
 * 'calibration'. Save the returned gate after every operation. */
export function resetStepSubmissionGate(
  previous:StepSubmissionGate|null|undefined,
  now:number,
  mode:StepSubmissionMode=previous?.mode??'auto',
):StepSubmissionGate {
  const state=previous||createStepSubmissionGate(mode);
  const barrier=Math.max(state.barrierAt,state.lastNow,state.lastAcceptedAt??0,time(now)?now:0);
  return {mode:validMode(mode)?mode:'calibration',barrierAt:barrier,lastNow:barrier,lastAcceptedAt:state.lastAcceptedAt};
}

export function submitStep(
  previous:StepSubmissionGate|null|undefined,
  step:{source:StepInputMode;capturedAt:number},
  now:number,
):StepSubmissionResult {
  let state=previous||createStepSubmissionGate();
  const result=(reason:StepSubmissionReason,accepted=false):StepSubmissionResult=>({state,accepted,reason});
  if(!time(now)||now<state.lastNow){state=resetStepSubmissionGate(state,now);return result('clock-change');}
  state={...state,lastNow:now};
  if(!step||!time(step.capturedAt)||step.capturedAt>now||(step.source!=='auto'&&step.source!=='manual'))return result('invalid-step');
  if(state.mode==='calibration')return result('calibrating');
  if(step.source!==state.mode)return result('mode-mismatch');
  if(step.capturedAt<=state.barrierAt||state.lastAcceptedAt!==null&&step.capturedAt<=state.lastAcceptedAt)return result('out-of-order');
  if(now-step.capturedAt>STEP_SUBMISSION_LIMITS.maxStepAgeMs)return result('stale-step');
  if(state.lastAcceptedAt!==null&&step.capturedAt-state.lastAcceptedAt<STEP_SUBMISSION_LIMITS.minIntervalMs)return result('debounce');
  state={...state,lastAcceptedAt:step.capturedAt};
  return result('accepted',true);
}

export type StepCalibrationCounts=Record<StepSensitivity,number>;
export type StepCalibrationRecommendation={
  recommended:StepSensitivity|null;
  expectedSteps:10;
  error:number|null;
  reason:'closest-count'|'no-steps'|'invalid-counts';
};

/** Feed the SAME raw motion samples to three independently reset detectors and
 * call this only after the user explicitly completes ten real steps. This
 * compares counts, not accuracy or false-positive timing, and never changes a
 * setting. A user must choose whether to apply its recommendation. */
export function recommendStepSensitivity(counts:StepCalibrationCounts):StepCalibrationRecommendation {
  const order:StepSensitivity[]=['standard','low','high'];
  if(!counts||order.some(profile=>!Number.isInteger(counts[profile])||counts[profile]<0||counts[profile]>1000))
    return {recommended:null,expectedSteps:10,error:null,reason:'invalid-counts'};
  if(order.every(profile=>counts[profile]===0))return {recommended:null,expectedSteps:10,error:null,reason:'no-steps'};
  let recommended=order[0],error=Math.abs(counts[recommended]-10);
  for(const profile of order.slice(1)){
    const difference=Math.abs(counts[profile]-10);
    if(difference<error){recommended=profile;error=difference;}
  }
  return {recommended,expectedSteps:10,error,reason:'closest-count'};
}
