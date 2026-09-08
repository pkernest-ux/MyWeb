import type { Diagnostic, FishnetProjection, Point } from './ar-v4-recognition-types';
import { FISHNET_GRID_VERSION, fishnetPoint, normalizeProjection } from './ar-v4-fishnet';

export type VisualHeadingEstimate = {
  accepted: true; bearing: number; pitch: number; uncertaintyDeg: number; inliers: number;
  method: 'panorama-center-ray'; assumption: 'near-capture-point'; uncertaintyKind: 'heuristic';
  residualPixels: number; centerSupportRadius: number; estimatedHorizontalFov: number;
} | { accepted: false; reason: string };

type Pair = { source: Point; frame: Point };
type Matrix = number[];
const MAX_POINTS = 90, MIN_POINTS = 12, RANSAC_TRIALS = 96;
const DEG = 180 / Math.PI;
const finite = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n);
const reject = (reason: string): VisualHeadingEstimate => ({ accepted: false, reason });
const norm = (v: number[]) => Math.hypot(...v);
const dot = (a: number[], b: number[]) => a.reduce((sum, x, i) => sum + x * b[i], 0);
const cross3 = (a: number[], b: number[]) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const angularDistance = (a: number[], b: number[]) => Math.acos(Math.max(-1, Math.min(1, dot(a,b)))) * DEG;
const yawDifference = (a: number, b: number) => Math.abs(((a-b+540)%360)-180);
const multiply = (a: Matrix, b: Matrix): Matrix => Array.from({ length: 9 }, (_, i) => {
  const row=Math.floor(i/3),col=i%3;return a[row*3]*b[col]+a[row*3+1]*b[col+3]+a[row*3+2]*b[col+6];
});
function inverse(m: Matrix): Matrix | null {
  const [a,b,c,d,e,f,g,h,i]=m;
  const cof=[e*i-f*h,c*h-b*i,b*f-c*e,f*g-d*i,a*i-c*g,c*d-a*f,d*h-e*g,b*g-a*h,a*e-b*d];
  const determinant=a*cof[0]+b*cof[3]+c*cof[6];
  return !finite(determinant)||Math.abs(determinant)<1e-12?null:cof.map(x=>x/determinant);
}
function project(h: Matrix, p: Point): Point | null {
  const denominator=h[6]*p.x+h[7]*p.y+h[8];
  if(Math.abs(denominator)<1e-9*Math.max(1,Math.abs(h[6]*p.x)+Math.abs(h[7]*p.y)+Math.abs(h[8])))return null;
  const x=(h[0]*p.x+h[1]*p.y+h[2])/denominator,y=(h[3]*p.x+h[4]*p.y+h[5])/denominator;
  return finite(x)&&finite(y)?{x,y}:null;
}
function normalization(points: Point[]) {
  const x=points.reduce((n,p)=>n+p.x,0)/points.length,y=points.reduce((n,p)=>n+p.y,0)/points.length;
  const rms=Math.sqrt(points.reduce((n,p)=>n+(p.x-x)**2+(p.y-y)**2,0)/points.length);
  if(!finite(rms)||rms<1e-5)return null;
  const s=Math.SQRT2/rms;
  return {points:points.map(p=>({x:(p.x-x)*s,y:(p.y-y)*s})),matrix:[s,0,-s*x,0,s,-s*y,0,0,1],inverse:[1/s,0,x,0,1/s,y,0,0,1]};
}
/** Hartley-normalized least squares with pivot checks. At most 90 pairs. */
function fit(pairs: Pair[]): Matrix | null {
  if(pairs.length<4)return null;
  const s=normalization(pairs.map(p=>p.source)),d=normalization(pairs.map(p=>p.frame));
  if(!s||!d)return null;
  const a=Array.from({length:8},()=>new Array<number>(9).fill(0));
  for(let i=0;i<pairs.length;i++){
    const {x,y}=s.points[i],{x:u,y:v}=d.points[i];
    for(const [row,value] of [[ [x,y,1,0,0,0,-u*x,-u*y],u ],[ [0,0,0,x,y,1,-v*x,-v*y],v ]] as [number[],number][]){
      for(let r=0;r<8;r++){for(let c=0;c<8;c++)a[r][c]+=row[r]*row[c];a[r][8]+=row[r]*value;}
    }
  }
  let smallest=Infinity,largest=0;
  for(let col=0;col<8;col++){
    let pivot=col;for(let row=col+1;row<8;row++)if(Math.abs(a[row][col])>Math.abs(a[pivot][col]))pivot=row;
    const magnitude=Math.abs(a[pivot][col]);
    if(!finite(magnitude)||magnitude<1e-10)return null;
    smallest=Math.min(smallest,magnitude);largest=Math.max(largest,magnitude);
    if(smallest/largest<1e-8)return null;
    [a[col],a[pivot]]=[a[pivot],a[col]];
    const scale=a[col][col];for(let j=col;j<=8;j++)a[col][j]/=scale;
    for(let row=0;row<8;row++)if(row!==col){const factor=a[row][col];for(let j=col;j<=8;j++)a[row][j]-=factor*a[col][j];}
  }
  const h=multiply(multiply(d.inverse,[...a.map(row=>row[8]),1]),s.matrix);
  const scale=Math.abs(h[8])>1e-8?h[8]:norm(h);
  return h.every(finite)&&Math.abs(scale)>1e-12?h.map(x=>x/scale):null;
}
function consensus(h: Matrix, pairs: Pair[], reverseScale: number) {
  const inv=inverse(h);if(!inv)return {pairs:[] as Pair[],error:Infinity};
  let error=0;const kept:Pair[]=[];
  for(const pair of pairs){
    const q=project(h,pair.source),p=project(inv,pair.frame);if(!q||!p)continue;
    const forward=Math.hypot(q.x-pair.frame.x,q.y-pair.frame.y),reverse=Math.hypot(p.x-pair.source.x,p.y-pair.source.y)*reverseScale;
    if(forward<=3&&reverse<=3){kept.push(pair);error+=forward*forward;}
  }
  return {pairs:kept,error};
}
function robustFit(pairs: Pair[], reverseScale: number) {
  let best:Pair[]=[],bestError=Infinity;
  const consider=(h:Matrix|null)=>{if(!h)return;const c=consensus(h,pairs,reverseScale);
    if(c.pairs.length>best.length||(c.pairs.length===best.length&&c.error<bestError)){best=c.pairs;bestError=c.error;}};
  consider(fit(pairs));
  let seed=2166136261;
  for(const p of pairs)for(const v of [p.source.x,p.source.y,p.frame.x,p.frame.y])seed=Math.imul(seed^Math.round(v*8),16777619)>>>0;
  for(let trial=0;trial<RANSAC_TRIALS&&best.length<pairs.length;trial++){
    const indices=Array.from({length:pairs.length},(_,i)=>i);
    // Four bounded draws without replacement; no data-dependent retry loop.
    for(let i=0;i<4;i++){
      seed=(Math.imul(seed,1664525)+1013904223)>>>0;
      const j=i+Math.floor(seed/4294967296*(pairs.length-i));[indices[i],indices[j]]=[indices[j],indices[i]];
    }
    consider(fit(indices.slice(0,4).map(i=>pairs[i])));
  }
  if(best.length<MIN_POINTS||best.length/pairs.length<.7)return null;
  for(let round=0;round<2;round++){
    const h=fit(best);if(!h)return null;
    const c=consensus(h,pairs,reverseScale);
    if(c.pairs.length<MIN_POINTS||c.pairs.length/pairs.length<.7)return null;
    best=c.pairs;bestError=c.error;
  }
  const h=fit(best);if(!h)return null;
  const final=consensus(h,best,reverseScale);
  if(final.pairs.length!==best.length)return null;
  return {h,pairs:best,residual:Math.sqrt(final.error/best.length)};
}
const cross = (o:Point,a:Point,b:Point)=>(a.x-o.x)*(b.y-o.y)-(a.y-o.y)*(b.x-o.x);
function hull(points: Point[]): Point[] {
  const sorted=[...points].sort((a,b)=>a.x-b.x||a.y-b.y);
  const half=(input:Point[])=>{const result:Point[]=[];for(const p of input){while(result.length>=2&&cross(result[result.length-2],result[result.length-1],p)<=0)result.pop();result.push(p);}result.pop();return result;};
  return [...half(sorted),...half([...sorted].reverse())];
}
function support(points:Point[],centre:Point,width:number,height:number){
  const polygon=hull(points);if(polygon.length<3)return {coverage:0,margin:-Infinity};
  let twiceArea=0,margin=Infinity;
  polygon.forEach((p,i)=>{const q=polygon[(i+1)%polygon.length];twiceArea+=p.x*q.y-q.x*p.y;const length=Math.hypot(q.x-p.x,q.y-p.y);margin=Math.min(margin,cross(p,q,centre)/Math.max(1e-8,length));});
  return {coverage:Math.abs(twiceArea)/2/width/height,margin};
}
function ray(point: Point,width:number,height:number,id:string,projection:FishnetProjection){
  const r=fishnetPoint(point.x,point.y,width,height,id,projection);
  if(r.yaw===null||r.pitch===null||r.mapYaw===null)return null;
  const y=r.yaw/DEG,p=r.pitch/DEG;
  return {bearing:r.mapYaw,pitch:r.pitch,vector:[Math.sin(y)*Math.cos(p),Math.sin(p),Math.cos(y)*Math.cos(p)]};
}

/**
 * A bounded, approximate optical-axis direction, NOT 6DoF localization.
 * Assumes a centred principal point, square pixels, and negligible translation
 * relative to the panorama capture centre. A planar translation can produce an
 * excellent homography and still bias this direction; these gates cannot detect
 * every such case. uncertaintyDeg is a heuristic quality indicator, not a
 * statistical error bound and does not include unknown parallax/calibration bias.
 */
export function estimateVisualHeading(diagnostic: Diagnostic | null): VisualHeadingEstimate {
  const d=diagnostic,f=d?.fishnet;
  if(!d||d.reason!=='matched'||!f?.geometryAccepted)return reject('not_matched');
  if(f.mode!=='panorama')return reject('image_only');
  const projection=normalizeProjection(f.projection);
  if(!projection||f.version!==FISHNET_GRID_VERSION)return reject('invalid_metadata');
  if(projection.mapBearing===null)return reject('unknown_map_bearing');
  const rw=d.targetWidth,rh=d.targetHeight,fw=d.frameWidth,fh=d.frameHeight;
  if(![rw,rh,fw,fh].every(n=>finite(n)&&Number.isInteger(n)&&n>=64&&n<=4096)
    ||typeof d.targetId!=='string'||!d.targetId||!Array.isArray(f.matches)||f.matches.length>MAX_POINTS
    ||f.matches.some(m=>!m||typeof m.verified!=='boolean'))return reject('invalid_metadata');
  const width=rw!,height=rh!,verified=f.matches.filter(m=>m.verified);
  if(verified.length<MIN_POINTS)return reject('too_few_inliers');
  if(!Number.isInteger(d.inliers)||d.inliers!==verified.length)return reject('invalid_metadata');
  const pairs:Pair[]=[];
  for(const match of verified){
    const p=match.reference,q=match.frame;
    if(!p||!q||![p.x,p.y,q.x,q.y].every(finite)||p.x<0||p.y<0||p.x>=width||p.y>=height||q.x<0||q.y<0||q.x>=fw||q.y>=fh)return reject('invalid_metadata');
    const expected=fishnetPoint(p.x,p.y,width,height,d.targetId,projection);
    if(!finite(p.u)||!finite(p.v)||!finite(p.yaw)||!finite(p.pitch)||!finite(p.mapYaw)
      ||p.u<0||p.u>=1||p.v<0||p.v>1||p.yaw<0||p.yaw>=360||p.pitch< -90||p.pitch>90||p.mapYaw<0||p.mapYaw>=360
      ||Math.min(Math.abs(p.u-expected.u!),1-Math.abs(p.u-expected.u!))>1e-6||Math.abs(p.v-expected.v!)>1e-6
      ||yawDifference(p.yaw,expected.yaw!)>.01||Math.abs(p.pitch-expected.pitch!)>.01||yawDifference(p.mapYaw,expected.mapYaw!)>.01
      ||p.referenceCell?.id!==expected.referenceCell.id)return reject('invalid_metadata');
    // Pyramid copies at nearly the same pixels do not add independent support.
    if(!pairs.some(a=>Math.hypot(a.source.x-p.x,a.source.y-p.y)<2||Math.hypot(a.frame.x-q.x,a.frame.y-q.y)<2))pairs.push({source:{x:p.x,y:p.y},frame:{x:q.x,y:q.y}});
  }
  if(pairs.length<MIN_POINTS)return reject('too_few_inliers');
  const model=robustFit(pairs,Math.min(fw,fh)/Math.min(width,height));
  if(!model)return reject('degenerate_geometry');
  if(model.residual>2)return reject('high_residual');
  const inv=inverse(model.h),centre={x:(fw-1)/2,y:(fh-1)/2};
  const referenceCentre=inv&&project(inv,centre);
  if(!inv||!referenceCentre||referenceCentre.x<0||referenceCentre.y<0||referenceCentre.x>=width||referenceCentre.y>=height)return reject('unsupported_center');
  const frameSupport=support(model.pairs.map(p=>p.frame),centre,fw,fh),refSupport=support(model.pairs.map(p=>p.source),referenceCentre,width,height);
  const quadrants=[0,0,0,0];for(const p of model.pairs)quadrants[(p.frame.x>=centre.x?1:0)+(p.frame.y>=centre.y?2:0)]++;
  if(frameSupport.coverage<.08||frameSupport.margin<Math.min(fw,fh)*.04||refSupport.coverage<.02||refSupport.margin<2||quadrants.some(n=>n<2))return reject('unsupported_center');
  const centreDenom=inv[6]*centre.x+inv[7]*centre.y+inv[8];
  if(model.pairs.some(p=>(inv[6]*p.frame.x+inv[7]*p.frame.y+inv[8])*centreDenom<=0))return reject('unstable_projection');
  const direction=ray(referenceCentre,width,height,d.targetId,projection);
  if(!direction||Math.abs(direction.pitch)>65)return reject('unstable_projection');
  const delta=Math.max(2,Math.min(fw,fh)*.02);
  const around=[{x:centre.x-delta,y:centre.y},{x:centre.x+delta,y:centre.y},{x:centre.x,y:centre.y-delta},{x:centre.x,y:centre.y+delta}]
    .map(p=>project(inv,p)).map(p=>p&&ray(p,width,height,d.targetId!,projection));
  if(around.some(p=>!p))return reject('unstable_projection');
  const [left,right,up,down]=around.map(p=>p!.vector);
  const dx=right.map((x,i)=>(x-left[i])/(2*delta)),dy=down.map((x,i)=>(x-up[i])/(2*delta));
  const sx=norm(dx),sy=norm(dy),orthogonality=Math.abs(dot(dx,dy)/sx/sy);
  const fov=2*Math.atan(fw*Math.sqrt(sx*sy)/2)*DEG;
  if(![sx,sy,orthogonality,fov].every(finite)||sx<=0||sy<=0||Math.max(sx/sy,sy/sx)>1.35
    ||orthogonality>.2||dot(cross3(dx,dy),direction.vector)>=0||fov<20||fov>110)return reject('unstable_projection');
  let disagreement=0;
  for(const parity of [0,1]){
    const subset=fit(model.pairs.filter((_,i)=>i%2===parity)),subInverse=subset&&inverse(subset),point=subInverse&&project(subInverse,centre);
    const alternative=point&&ray(point,width,height,d.targetId,projection);
    if(!alternative)return reject('unstable_projection');
    disagreement=Math.max(disagreement,angularDistance(direction.vector,alternative.vector));
  }
  if(disagreement>4)return reject('unstable_projection');
  const radius=frameSupport.margin/Math.min(fw,fh);
  const uncertainty=5+(model.residual+1.5)*Math.max(sx,sy)*DEG+disagreement+Math.max(0,.12/radius-1);
  if(!finite(uncertainty)||uncertainty>15)return reject('unstable_projection');
  return {accepted:true,bearing:direction.bearing,pitch:direction.pitch,uncertaintyDeg:uncertainty,inliers:model.pairs.length,
    method:'panorama-center-ray',assumption:'near-capture-point',uncertaintyKind:'heuristic',
    residualPixels:model.residual,centerSupportRadius:radius,estimatedHorizontalFov:fov};
}
