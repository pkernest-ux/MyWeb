import assert from 'node:assert/strict';
import test from 'node:test';
import { loadV4Source } from '../scripts/ar-v4-worker-runtime.mjs';

const { estimateVisualHeading } = loadV4Source('ar-v4-visual-heading.ts');
const { fishnetPoint, imageCell, FISHNET_GRID_VERSION } = loadV4Source('ar-v4-fishnet.ts');
const DEG=Math.PI/180;
const multiply=(a,b)=>Array.from({length:9},(_,i)=>{const r=Math.floor(i/3),c=i%3;return a[r*3]*b[c]+a[r*3+1]*b[c+3]+a[r*3+2]*b[c+6];});
const transpose=a=>[a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]];
const apply=(r,p)=>[r[0]*p[0]+r[1]*p[1]+r[2]*p[2],r[3]*p[0]+r[4]*p[1]+r[5]*p[2],r[6]*p[0]+r[7]*p[1]+r[8]*p[2]];
function rotation(yaw,pitch,roll=0){
  const y=yaw*DEG,p=pitch*DEG,z=roll*DEG,c=Math.cos,s=Math.sin;
  return multiply(multiply([c(y),0,s(y),0,1,0,-s(y),0,c(y)],[1,0,0,0,c(p),s(p),0,-s(p),c(p)]),[c(z),-s(z),0,s(z),c(z),0,0,0,1]);
}
const difference=(a,b)=>Math.abs(((a-b+540)%360)-180);
const wrap=n=>((n%360)+360)%360;
function scene({referenceYaw=0,referencePitch=0,mapBearing=referenceYaw,referenceFov=75,
  queryYaw=15,queryPitch=0,queryRoll=0,queryFov=50,width=420,height=315}={}){
  const rw=420,rh=315,id='reference-view',projection={panoramaId:'building/floor/node/batch',yaw:referenceYaw,pitch:referencePitch,fov:referenceFov,mapBearing};
  const frameToReference=multiply(transpose(rotation(referenceYaw,referencePitch)),rotation(queryYaw,queryPitch,queryRoll));
  const fr=rw/(2*Math.tan(referenceFov*DEG/2)),fq=width/(2*Math.tan(queryFov*DEG/2)),matches=[];
  for(let row=0;row<7;row++)for(let col=0;col<9;col++){
    const frame={x:(width-1)/2+(col/8-.5)*width*.76,y:(height-1)/2+(row/6-.5)*height*.76};
    const ray=apply(frameToReference,[(frame.x+.5-width/2)/fq,-(frame.y+.5-height/2)/fq,1]);
    const x=rw/2+fr*ray[0]/ray[2]-.5,y=rh/2-fr*ray[1]/ray[2]-.5;
    if(ray[2]<=0||x<4||y<4||x>=rw-4||y>=rh-4)continue;
    matches.push({frame,reference:{...fishnetPoint(x,y,rw,rh,id,projection),level:0,index:matches.length},
      frameCell:imageCell(frame.x,frame.y,width,height,'frame'),distance:10,verified:true});
  }
  const diagnostic={reason:'matched',profile:'fishnet',targetId:id,targetWidth:rw,targetHeight:rh,
    frameWidth:width,frameHeight:height,frameFeatures:600,matchCount:matches.length,inliers:matches.length,
    framePoints:matches.map(m=>m.frame),referencePoints:matches.map(m=>({x:m.reference.x,y:m.reference.y})),region:[],coverage:.5,errorPixels:0,
    fishnet:{version:FISHNET_GRID_VERSION,mode:'panorama',projection,grid:{columns:8,rows:6},referenceGrid:{columns:36,rows:18},
      featureTotal:840,featureSampled:true,features:[],cells:[],referenceCells:[],occupiedCells:48,referenceOccupiedCells:48,
      frameGrid:{columns:8,rows:6},frameCells:[],matchCells:[],verifiedCells:[],geometryAccepted:true,matches}};
  return {diagnostic,bearing:wrap(mapBearing+queryYaw-referenceYaw),pitch:queryPitch};
}
function assertDirection(options,tolerance=.03){
  const s=scene(options),r=estimateVisualHeading(s.diagnostic);
  assert.equal(r.accepted,true,JSON.stringify({options,result:r,points:s.diagnostic.inliers}));
  assert.ok(difference(r.bearing,s.bearing)<tolerance,`${r.bearing} vs ${s.bearing}`);
  assert.ok(Math.abs(r.pitch-s.pitch)<tolerance,`${r.pitch} vs ${s.pitch}`);
  assert.equal(r.method,'panorama-center-ray');assert.equal(r.assumption,'near-capture-point');
  assert.equal(r.uncertaintyKind,'heuristic');assert.ok(r.uncertaintyDeg>=5&&r.uncertaintyDeg<=15);
  return {s,r};
}

test('optical-centre bearing follows the view within a panorama, not the reference-photo bearing',()=>{
  const {r}=assertDirection({referenceYaw:0,mapBearing:100,queryYaw:20,queryFov:45});
  assert.ok(difference(r.bearing,100)>15);
});

test('yaw wraps at north and supports either side of the panorama seam',()=>{
  assertDirection({referenceYaw:350,mapBearing:350,queryYaw:5});
  assertDirection({referenceYaw:10,mapBearing:10,queryYaw:355});
  assertDirection({referenceYaw:175,mapBearing:355,queryYaw:190});
});

test('pitch, roll, a narrower crop and portrait framing preserve the centre ray',()=>{
  assertDirection({queryYaw:12,queryPitch:10,queryRoll:27,queryFov:40});
  assertDirection({referenceYaw:45,referencePitch:12,mapBearing:90,queryYaw:52,queryPitch:19,queryRoll:-38,queryFov:35});
  assertDirection({queryYaw:4,queryPitch:-6,queryRoll:80,queryFov:35,width:360,height:640});
});

test('several reference and query FOVs are handled geometrically',()=>{
  for(const [referenceFov,queryFov,yaw]of [[35,30,2],[60,42,8],[75,65,3],[95,55,15],[110,75,12]]){
    const {r}=assertDirection({referenceFov,queryFov,queryYaw:yaw});
    assert.ok(Math.abs(r.estimatedHorizontalFov-queryFov)<.2);
  }
});

test('full verified matches drive heading even when the 96-point display sample is absent or misleading',()=>{
  const {diagnostic}=scene();
  const original=estimateVisualHeading(diagnostic);
  diagnostic.fishnet.features=[{x:NaN,y:NaN,mapYaw:220}];
  assert.deepEqual(estimateVisualHeading(diagnostic),original);
  assert.equal(original.accepted,true);
});

test('not matched, ambiguous, image-only and unknown map orientation are rejected',()=>{
  assert.equal(estimateVisualHeading(null).accepted,false);
  for(const reason of ['ambiguous','geometry','few_matches','no_targets']){
    const {diagnostic:d}=scene();d.reason=reason;assert.equal(estimateVisualHeading(d).accepted,false);
  }
  for(const change of [d=>{d.fishnet.geometryAccepted=false},d=>{d.fishnet.mode='image-only'},
    d=>{d.fishnet.projection=null},d=>{d.fishnet.projection.mapBearing=null},d=>{d.fishnet.projection.fov=130}]){
    const {diagnostic:d}=scene();change(d);assert.equal(estimateVisualHeading(d).accepted,false);
  }
});

test('the frame centre must be supported rather than extrapolated from features on one side',()=>{
  const {diagnostic:d}=scene({queryYaw:0,queryFov:50});
  d.fishnet.matches=d.fishnet.matches.filter(m=>m.frame.x<d.frameWidth*.45);
  d.inliers=d.fishnet.matches.length;d.matchCount=d.inliers;
  assert.ok(d.inliers>=12);
  assert.deepEqual(JSON.parse(JSON.stringify(estimateVisualHeading(d))),{accepted:false,reason:'unsupported_center'});
});

test('degenerate, repeated and badly conditioned pairs never create a direction',()=>{
  for(const variant of ['line','repeat','thin']){
    const {diagnostic:d}=scene({queryYaw:0});
    d.fishnet.matches=d.fishnet.matches.slice(0,24).map((m,i)=>{
      const x=variant==='repeat'?100:60+i*10,y=variant==='line'?x*.5:variant==='thin'?150+(i%2)*1e-6:100;
      const reference={...fishnetPoint(x,y,420,315,d.targetId,d.fishnet.projection),level:0,index:i};
      return {...m,reference,frame:{x,y}};
    });d.inliers=d.fishnet.matches.length;
    assert.equal(estimateVisualHeading(d).accepted,false,variant);
  }
});

test('finite but non-camera shear, reflection, excessive pitch and extreme focal scales are rejected',()=>{
  for(const transform of [p=>({x:p.x+(p.y-157)*.65,y:p.y}),p=>({x:419-p.x,y:p.y}),p=>({x:209+(p.x-209)*.2,y:p.y})]){
    const {diagnostic:d}=scene({queryYaw:0,queryFov:40});
    for(const m of d.fishnet.matches)m.frame=transform(m.frame);
    assert.equal(estimateVisualHeading(d).accepted,false);
  }
  const tilted=scene({referencePitch:75,queryPitch:75,queryYaw:0,queryFov:40});
  assert.equal(estimateVisualHeading(tilted.diagnostic).accepted,false);
});

test('a bounded outlier subset is robustly excluded and produces deterministic results',()=>{
  const {diagnostic:d,bearing}=scene({queryYaw:9,queryPitch:5,queryRoll:12,queryFov:45});
  for(let i=0;i<d.fishnet.matches.length;i++){
    const m=d.fishnet.matches[i];
    if(i%6===0)m.frame={x:35+(i*47)%340,y:25+(i*29)%260};
    else m.frame={x:m.frame.x+Math.sin(i)*.35,y:m.frame.y+Math.cos(i)*.35};
  }
  const a=estimateVisualHeading(d),b=estimateVisualHeading(d);
  assert.equal(a.accepted,true,JSON.stringify(a));assert.ok(difference(a.bearing,bearing)<.2);
  assert.ok(a.inliers<d.inliers);assert.deepEqual(a,b);
});

test('too many, too few, nonfinite and contradictory metadata are bounded and rejected',()=>{
  for(const change of [d=>{d.fishnet.matches=Array(91).fill(d.fishnet.matches[0])},
    d=>{d.fishnet.matches=d.fishnet.matches.slice(0,11);d.inliers=11},d=>{d.fishnet.matches[0].frame.x=NaN},
    d=>{d.fishnet.matches[0].reference.mapYaw+=10},d=>{d.fishnet.matches[0].reference.referenceCell.id='other-batch'},
    d=>{d.inliers=90},d=>{d.frameWidth=Infinity},d=>{d.frameWidth=420.5},d=>{d.fishnet.matches[0]=null},
    d=>{d.fishnet.matches[0].reference.u=1000},d=>{d.fishnet.matches[0].reference.mapYaw=365}]){
    const {diagnostic:d}=scene();change(d);assert.equal(estimateVisualHeading(d).accepted,false);
  }
});

test('documented limit: homography-compatible planar translation can pass and bias heading',()=>{
  const {diagnostic:d}=scene({queryYaw:0,queryFov:50});
  for(const m of d.fishnet.matches)m.frame={x:m.frame.x+12,y:m.frame.y};
  const r=estimateVisualHeading(d);
  assert.equal(r.accepted,true,JSON.stringify(r));
  assert.ok(difference(r.bearing,0)>.5,'a planar image shift is not identifiable as translation here');
  assert.equal(r.assumption,'near-capture-point');assert.equal(r.uncertaintyKind,'heuristic');
});
