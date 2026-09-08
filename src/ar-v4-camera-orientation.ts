import type {FieldSensor} from './ar-v4-field-core';

export function isFreshCameraSensor(sensor:FieldSensor,now:number):boolean {
 const time=sensor.capturedAt?Date.parse(sensor.capturedAt):NaN;
 return Number.isFinite(now)&&Number.isFinite(time)&&time<=now&&now-time<=1000&&sensor.heading!==null&&Number.isFinite(sensor.heading)&&sensor.kind!=='unavailable'
  &&(sensor.accuracy===null||Number.isFinite(sensor.accuracy)&&sensor.accuracy>=0&&sensor.accuracy<=45);
}
export const manualHeadingAgeValid=(capturedAt:number,now:number)=>Number.isFinite(capturedAt)&&Number.isFinite(now)&&now>=capturedAt&&now-capturedAt<20000;

/** Rear-camera optical axis, not the screen's top edge. This is a relative
 * rotation coordinate until a visual/manual map offset has been established.
 * W3C Device Orientation A.1: v = Rz(alpha) Rx(beta) Ry(gamma) [0,0,-1].
 * Keep the survey's raw FieldSensor unchanged; screen rotation changes the
 * rendering coordinates, not this optical axis. Fusion resets on that change.
 */
export function cameraOrientationSensor(raw:FieldSensor):FieldSensor {
 const unavailable={...raw,heading:null,kind:'unavailable' as const};
 if(raw.kind==='unavailable'||![raw.alpha,raw.beta,raw.gamma].every(v=>typeof v==='number'&&Number.isFinite(v)))return unavailable;
 const rad=Math.PI/180,a=raw.alpha!*rad,b=raw.beta!*rad,g=raw.gamma!*rad;
 const x=-Math.cos(a)*Math.sin(g)-Math.sin(a)*Math.sin(b)*Math.cos(g);
 const y=-Math.sin(a)*Math.sin(g)+Math.cos(a)*Math.sin(b)*Math.cos(g);
 // Avoid an unstable horizontal direction when pointed at the ceiling/floor.
 if(Math.hypot(x,y)<.5)return unavailable;
 return {...raw,heading:((Math.atan2(x,y)/rad)%360+360)%360};
}
