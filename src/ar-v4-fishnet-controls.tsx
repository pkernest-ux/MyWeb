import React from 'react';
import type {RecognitionProfile} from './ar-v4-recognition-types';
import './ar-v4-recognition-inspector.css';

export function FishnetProfileControl({profile,onChange,disabled=false}:{profile:RecognitionProfile;onChange:(profile:RecognitionProfile)=>void;disabled?:boolean}) {
  return <div className="v4-fishnet-profile" role="group" aria-label="辨識方法對照">
    <button type="button" disabled={disabled} aria-pressed={profile==='fishnet'} onClick={()=>onChange('fishnet')}>Fishnet 試驗</button>
    <button type="button" disabled={disabled} aria-pressed={profile==='legacy'} onClick={()=>onChange('legacy')}>原版對照</button>
  </div>;
}
