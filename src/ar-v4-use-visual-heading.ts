import {useCallback,useEffect,useRef,useState} from 'react';
import type {FieldSensor} from './ar-v4-field-core';
import type {Diagnostic} from './ar-v4-recognition-types';
import {cameraOrientationSensor} from './ar-v4-camera-orientation';
import {estimateVisualHeading,type VisualHeadingEstimate} from './ar-v4-visual-heading';
import {advanceVisualHeading,createHeadingState,resetHeadingState,resolveHeading} from './ar-v4-heading-fusion';

export type HeadingFrame = {capturedAt:number;sensor:FieldSensor;nodeId?:string;referenceId?:string;eligibleNodeId?:string;still?:boolean};

/** Both UIs share the same estimator and capture-time fusion. No image fetches,
 * map writes, node switching, arrival decisions, or pose claims live here. */
export function useVisualHeading(rawSensor:FieldSensor,now:number){
 const state=useRef(createHeadingState());
 const liveSensor=useRef(cameraOrientationSensor(rawSensor));
 liveSensor.current=cameraOrientationSensor(rawSensor);
 const [,render]=useState(0);
 const [estimate,setEstimate]=useState<VisualHeadingEstimate|null>(null);
 const [sampleKind,setSampleKind]=useState<'live'|'still'|'other-node'>('live');
 const reset=useCallback(()=>{state.current=resetHeadingState('reset',Date.now());setEstimate(null);setSampleKind('live');render(n=>n+1);},[]);
 useEffect(()=>{
  // Parent timers only trigger expiry renders; a newly delivered sensor may
  // be newer than that tick. Compare with real observation time, not the tick.
  const next=resolveHeading(state.current,liveSensor.current,Date.now());
  if(next.state!==state.current){state.current=next.state;render(n=>n+1);}
 },[rawSensor,now]);
 const observe=useCallback((diagnostic:Diagnostic|null,frame:HeadingFrame)=>{
  const result=estimateVisualHeading(diagnostic);
  setEstimate(result);
  const eligible=Boolean(frame.nodeId&&frame.nodeId===frame.eligibleNodeId);
  setSampleKind(frame.still?'still':frame.nodeId&&!eligible?'other-node':'live');
  if(frame.still||diagnostic?.reason==='ambiguous'||frame.nodeId&&!eligible){
   state.current=resetHeadingState('reset',Date.now());
  }else{
   state.current=advanceVisualHeading(state.current,result.accepted&&eligible?{
    bearing:result.bearing,uncertaintyDeg:result.uncertaintyDeg,nodeId:frame.nodeId!,referenceId:frame.referenceId!,
    capturedAt:frame.capturedAt,sensor:frame.sensor,
   }:null,Date.now());
  }
  const resolved=resolveHeading(state.current,liveSensor.current,Date.now());
  state.current=resolved.state;render(n=>n+1);
  return {estimate:result,resolved};
 },[]);
 return {reset,observe,estimate,sampleKind,view:resolveHeading(state.current,liveSensor.current,Date.now())};
}
