import jsfeatModule from "jsfeat";
import type { Diagnostic, DetectionReport, Preparation, Reason } from './ar-v4-recognition-types';

type RecognitionPoint = {
  x: number;
  y: number;
};

type RecognitionDetection = {
  targetId?: string;
  corners: [RecognitionPoint, RecognitionPoint, RecognitionPoint, RecognitionPoint];
  inliers: number;
  matchCount: number;
  confidence: number;
};

type ImagePayload = {
  id: string;
  nodeId?: string;
  width: number;
  height: number;
  pixels: ArrayBuffer;
};

type WorkerRequest =
  | { type: 'preparePacked'; requestId:number; targets:{id:string;nodeId:string;bytes:ArrayBuffer}[] }
  | {
      type: "prepareMany";
      requestId: number;
      targets: ImagePayload[];
    }
  | {
      type: "detect";
      requestId: number;
      width: number;
      height: number;
      pixels: ArrayBuffer;
      fullScene?: boolean;
    };

type TargetPattern = {
  id: string;
  nodeId: string;
  width: number;
  height: number;
  levels: FeatureLevel[];
};

type FeatureLevel = {
  scale: number;
  corners: any[];
  descriptors: any;
  count: number;
};

type FeatureMatch = {
  screenIndex: number;
  patternLevel: number;
  patternIndex: number;
  distance: number;
};

const jsfeat: any = jsfeatModule;
const scope: any = self as any;
const TARGET_LEVELS = 3;
const TARGET_FEATURE_LIMIT = 280;
// A bounded query pyramid covers a closer phone view without enlarging packs.
const FRAME_LEVEL_LIMITS = [280, 200, 120];
const FRAME_FEATURE_LIMIT = 600;
const CORNER_CAPACITY = 12_000;
const MATCH_DISTANCE_LIMIT = 64;
const MATCH_RATIO_LIMIT = 0.82;
const MAX_MATCHES = 90;
const MIN_MATCHES = 12;
const MIN_INLIERS = 12;
const MIN_INLIER_RATIO = 0.5;
const TARGET_SCALE_STEP = Math.SQRT1_2;
const ORIENTATION_RADIUS = 15;
const ORIENTATION_WIDTHS = new Int32Array([15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0]);

let targetPatterns: TargetPattern[] = [];
let frameGray: any = null;
let frameSmooth: any = null;
let frameDescriptors: any = null;
let frameCorners: any[] = [];
let levelCorners: any[] = [];
let frameWidth = 0;
let frameHeight = 0;
const homography = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
const matchMask = new jsfeat.matrix_t(MAX_MATCHES, 1, jsfeat.U8C1_t);

const createCorners = () => {
  const corners = new Array(CORNER_CAPACITY);
  for (let index = 0; index < CORNER_CAPACITY; index += 1) {
    corners[index] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return corners;
};

const keypointOrientation = (image: any, px: number, py: number) => {
  let momentY = 0;
  let momentX = 0;
  const source = image.data;
  const stride = image.cols;
  const centerOffset = (py * stride + px) | 0;

  for (let x = -ORIENTATION_RADIUS; x <= ORIENTATION_RADIUS; x += 1) {
    momentX += x * source[centerOffset + x];
  }

  for (let y = 1; y <= ORIENTATION_RADIUS; y += 1) {
    let verticalSum = 0;
    const width = ORIENTATION_WIDTHS[y];
    for (let x = -width; x <= width; x += 1) {
      const lower = source[centerOffset + x + y * stride];
      const upper = source[centerOffset + x - y * stride];
      verticalSum += lower - upper;
      momentX += x * (lower + upper);
    }
    momentY += y * verticalSum;
  }
  return Math.atan2(momentY, momentX);
};

const detectKeypoints = (image: any, corners: any[], limit: number) => {
  jsfeat.yape06.laplacian_threshold = 30;
  jsfeat.yape06.min_eigen_value_threshold = 25;
  let count = jsfeat.yape06.detect(image, corners, 17);
  if (count > limit) {
    jsfeat.math.qsort(corners, 0, count - 1, (left: any, right: any) => right.score < left.score);
    count = limit;
  }
  for (let index = 0; index < count; index += 1) {
    corners[index].angle = keypointOrientation(image, corners[index].x, corners[index].y);
  }
  return count;
};

const rgbaToGray = (payload: ImagePayload) => {
  const gray = new jsfeat.matrix_t(payload.width, payload.height, jsfeat.U8_t | jsfeat.C1_t);
  jsfeat.imgproc.grayscale(new Uint8Array(payload.pixels), payload.width, payload.height, gray);
  return gray;
};

const prepareTargetPattern = (target: ImagePayload): TargetPattern => {
  const source = rgbaToGray(target);
  const targetLevels: FeatureLevel[] = [];

  for (let levelIndex = 0; levelIndex < TARGET_LEVELS; levelIndex += 1) {
    const scale = TARGET_SCALE_STEP ** levelIndex;
    const width = Math.max(64, Math.round(target.width * scale));
    const height = Math.max(64, Math.round(target.height * scale));
    const levelImage = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    const smoothImage = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    if (levelIndex === 0 && width === target.width && height === target.height) {
      source.copy_to(levelImage);
    } else {
      jsfeat.imgproc.resample(source, levelImage, width, height);
    }
    jsfeat.imgproc.gaussian_blur(levelImage, smoothImage, 5, 0);
    const corners = createCorners();
    const count = detectKeypoints(smoothImage, corners, TARGET_FEATURE_LIMIT);
    const descriptors = new jsfeat.matrix_t(32, TARGET_FEATURE_LIMIT, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.orb.describe(smoothImage, corners, count, descriptors);
    for (let index = 0; index < count; index += 1) {
      corners[index].x /= scale;
      corners[index].y /= scale;
    }
    targetLevels.push({ scale, corners: corners.slice(0, count), descriptors, count });
  }

  const totalFeatures = targetLevels.reduce((total, level) => total + level.count, 0);
  if (totalFeatures < MIN_MATCHES) {
    throw new Error("辨識照片的特徵不足，請改用紋理清楚、避免反光的現場照片");
  }
  return {
    id: target.id,
    nodeId: target.nodeId || target.id,
    width: target.width,
    height: target.height,
    levels: targetLevels,
  };
};

export const PACK_ALGORITHM='v4-jsfeat-orb-1';
// Published packs contain coordinates + binary descriptors only, never pixels.
export function compileFeatureTarget(target:ImagePayload):ArrayBuffer{
 const p=prepareTargetPattern(target);
 const header=new TextEncoder().encode(JSON.stringify({algorithm:PACK_ALGORITHM,id:p.id,nodeId:p.nodeId,width:p.width,height:p.height,levels:p.levels.map(l=>({scale:l.scale,count:l.count}))}));
 const buffer=new ArrayBuffer(4+header.length+p.levels.reduce((n,l)=>n+l.count*40,0));const view=new DataView(buffer);const bytes=new Uint8Array(buffer);
 view.setUint32(0,header.length,true);bytes.set(header,4);let offset=4+header.length;
 for(const l of p.levels){for(const point of l.corners){view.setFloat32(offset,point.x,true);view.setFloat32(offset+4,point.y,true);offset+=8;}bytes.set(l.descriptors.data.subarray(0,l.count*32),offset);offset+=l.count*32;}
 return buffer;
}
export function decodeFeatureTarget(buffer:ArrayBuffer,expected:{id:string;nodeId:string}):TargetPattern{
 if(!buffer||buffer.byteLength<8||buffer.byteLength>65536)throw new Error('特徵包大小不正確');
 const view=new DataView(buffer),length=view.getUint32(0,true);
 if(length<2||length>4096||length+4>buffer.byteLength)throw new Error('特徵包標頭不正確');
 const h=JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,4,length)));
 if(h.algorithm!==PACK_ALGORITHM||h.id!==expected.id||h.nodeId!==expected.nodeId||!Number.isInteger(h.width)||!Number.isInteger(h.height)||h.width<1||h.height<1||h.width>420||h.height>420||h.levels?.length!==3)throw new Error('特徵包版本或節點不一致');
 let offset=4+length;const levels:FeatureLevel[]=[];
 for(let i=0;i<h.levels.length;i++){
  const l=h.levels[i];if(!Number.isInteger(l.count)||l.count<0||l.count>TARGET_FEATURE_LIMIT||l.scale!==TARGET_SCALE_STEP**i||offset+l.count*40>buffer.byteLength)throw new Error('特徵包層級不正確');
  const corners=[];for(let j=0;j<l.count;j++){const x=view.getFloat32(offset,true),y=view.getFloat32(offset+4,true);offset+=8;if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||y<0||x>h.width+2||y>h.height+2)throw new Error('特徵座標不正確');corners.push({x,y});}
  const descriptors=new jsfeat.matrix_t(32,TARGET_FEATURE_LIMIT,jsfeat.U8_t|jsfeat.C1_t);descriptors.data.set(new Uint8Array(buffer,offset,l.count*32));offset+=l.count*32;levels.push({...l,corners,descriptors});
 }
 if(offset!==buffer.byteLength||levels.reduce((n,l)=>n+l.count,0)<MIN_MATCHES)throw new Error('特徵包未完整或特徵不足');
 return {id:h.id,nodeId:h.nodeId,width:h.width,height:h.height,levels};
}
const preparePacked=(request:Extract<WorkerRequest,{type:'preparePacked'}>):Preparation=>{
 if(request.targets.length>64)throw new Error('本輪特徵包超過上限');
 const failures:Preparation['failures']=[];
 targetPatterns=request.targets.flatMap(t=>{try{return [decodeFeatureTarget(t.bytes,t)];}catch(e:any){failures.push({id:t.id,reason:e.message});return [];}});
 return {prepared:true,targetCount:targetPatterns.length,skippedTargetCount:failures.length,failures,targets:targetPatterns.map(t=>({id:t.id,width:t.width,height:t.height,featureCount:t.levels.reduce((n,l)=>n+l.count,0)}))};
};

const prepareTargets = (request: Extract<WorkerRequest, { type: "prepareMany" }>) => {
  const failures: Preparation['failures'] = [];
  targetPatterns = request.targets.flatMap((target) => {
    try {
      return [prepareTargetPattern(target)];
    } catch (error: any) {
      failures.push({ id: target.id, reason: error?.message || "節點照片無法建立辨識特徵" });
      return [];
    }
  });
  return {
    prepared: true,
    targetCount: targetPatterns.length,
    skippedTargetCount: failures.length,
    targets: targetPatterns.map(t => ({ id: t.id, featureCount: t.levels.reduce((sum, l) => sum + l.count, 0), width: t.width, height: t.height })),
    failures,
  } satisfies Preparation;
};

const ensureFrameBuffers = (width: number, height: number) => {
  if (frameGray && frameWidth === width && frameHeight === height) return;
  frameWidth = width;
  frameHeight = height;
  frameGray = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
  frameSmooth = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
  frameDescriptors = new jsfeat.matrix_t(32, FRAME_FEATURE_LIMIT, jsfeat.U8_t | jsfeat.C1_t);
  frameCorners = createCorners();
  if (!levelCorners.length) levelCorners = createCorners();
};

const describeFrame = () => {
  let total = 0;
  for (let level = 0; level < FRAME_LEVEL_LIMITS.length; level++) {
    const scale = TARGET_SCALE_STEP ** level;
    const width = Math.round(frameWidth * scale), height = Math.round(frameHeight * scale);
    if (Math.min(width, height) < 64) continue;
    const gray = level === 0 ? frameGray : new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    const smooth = level === 0 ? frameSmooth : new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    if (level) jsfeat.imgproc.resample(frameGray, gray, width, height);
    jsfeat.imgproc.gaussian_blur(gray, smooth, 5, 0);
    const count = detectKeypoints(smooth, levelCorners, FRAME_LEVEL_LIMITS[level]);
    const descriptors = new jsfeat.matrix_t(32, FRAME_LEVEL_LIMITS[level], jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.orb.describe(smooth, levelCorners, count, descriptors);
    frameDescriptors.data.set(descriptors.data.subarray(0, count * 32), total * 32);
    for (let i = 0; i < count; i++) {
      frameCorners[total + i].x = levelCorners[i].x * frameWidth / width;
      frameCorners[total + i].y = levelCorners[i].y * frameHeight / height;
    }
    total += count;
  }
  return total;
};

const popCount32 = (value: number) => {
  let current = value - ((value >>> 1) & 0x55555555);
  current = (current & 0x33333333) + ((current >>> 2) & 0x33333333);
  return (((current + (current >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
};

const matchFeatures = (frameCount: number, targetLevels: FeatureLevel[]) => {
  const matches: FeatureMatch[] = [];
  const frameDescriptors32 = frameDescriptors.buffer.i32;
  const candidates = targetLevels.flatMap((level, levelIndex) => level.corners.map((point, index) => ({point, levelIndex, index})));
  const distances = new Uint16Array(candidates.length);
  for (let screenIndex = 0; screenIndex < frameCount; screenIndex += 1) {
    const screenOffset = screenIndex * 8;
    let bestDistance = 257;
    let bestLevel = -1;
    let bestPatternIndex = -1;
    let candidateIndex = 0;

    targetLevels.forEach((level, levelIndex) => {
      const targetDescriptors32 = level.descriptors.buffer.i32;
      for (let patternIndex = 0; patternIndex < level.count; patternIndex += 1) {
        const patternOffset = patternIndex * 8;
        let distance = 0;
        for (let word = 0; word < 8; word += 1) {
          distance += popCount32(frameDescriptors32[screenOffset + word] ^ targetDescriptors32[patternOffset + word]);
        }
        distances[candidateIndex++] = distance;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestLevel = levelIndex;
          bestPatternIndex = patternIndex;
        }
      }
    });

    // Compare against a DIFFERENT physical corner. The same corner appears in
    // multiple reference scales and must not compete against itself in the ratio test.
    const bestPoint = targetLevels[bestLevel]?.corners[bestPatternIndex];
    let secondDistance = 257;
    if (bestPoint) for (let i = 0; i < candidates.length; i++) {
      if (distances[i] >= secondDistance) continue;
      const p = candidates[i].point;
      const dx=p.x-bestPoint.x,dy=p.y-bestPoint.y;
      if (dx*dx+dy*dy > 16) secondDistance = distances[i];
    }

    if (
      bestPatternIndex >= 0 &&
      bestDistance <= MATCH_DISTANCE_LIMIT &&
      bestDistance < secondDistance * MATCH_RATIO_LIMIT
    ) {
      matches.push({
        screenIndex,
        patternLevel: bestLevel,
        patternIndex: bestPatternIndex,
        distance: bestDistance,
      });
    }
  }

  const usedTargets: RecognitionPoint[] = [], usedFrames: RecognitionPoint[] = [];
  return matches
    .sort((left, right) => left.distance - right.distance)
    .filter((match) => {
      // Symmetric nearest-neighbour check removes one-way lookalikes before
      // geometry. Query pyramid copies at the same physical pixel count as one.
      const descriptor = targetLevels[match.patternLevel].descriptors.buffer.i32;
      const offset = match.patternIndex * 8;
      let reverseBest = 257, reverseIndex = -1;
      for (let i = 0; i < frameCount; i++) {
        let distance = 0;
        for (let word = 0; word < 8; word++) distance += popCount32(descriptor[offset + word] ^ frameDescriptors32[i * 8 + word]);
        if (distance < reverseBest) { reverseBest = distance; reverseIndex = i; }
      }
      const original = frameCorners[match.screenIndex], reverse = frameCorners[reverseIndex];
      if (!reverse || (original.x-reverse.x)**2+(original.y-reverse.y)**2 > 16) return false;
      // The same physical corner seen at multiple scales is only one piece of evidence.
      const p = targetLevels[match.patternLevel].corners[match.patternIndex];
      const q = frameCorners[match.screenIndex];
      if (usedTargets.some(t=>(t.x-p.x)**2+(t.y-p.y)**2<=16) || usedFrames.some(t=>(t.x-q.x)**2+(t.y-q.y)**2<=16)) return false;
      usedTargets.push(p); usedFrames.push(q);
      return true;
    })
    .slice(0, MAX_MATCHES);
};

const polygonArea = (points: RecognitionPoint[]) =>
  Math.abs(
    points.reduce((total, point, index) => {
      const next = points[(index + 1) % points.length];
      return total + point.x * next.y - next.x * point.y;
    }, 0),
  ) / 2;

const pointDistance = (start: RecognitionPoint, end: RecognitionPoint) =>
  Math.hypot(end.x - start.x, end.y - start.y);

export const isUsableQuadrilateral = (
  corners: RecognitionPoint[],
  width: number,
  height: number,
  fullScene = false,
) => {
  if (corners.length !== 4 || corners.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) {
    return false;
  }
  const areaRatio = polygonArea(corners) / Math.max(1, width * height);
  if (areaRatio < 0.018 || areaRatio > (fullScene ? 1.2 : 0.88)) return false;
  const edgeLengths = corners.map((point, index) => pointDistance(point, corners[(index + 1) % 4]));
  const shortestEdge = Math.min(...edgeLengths);
  const longestEdge = Math.max(...edgeLengths);
  if (shortestEdge < 20 || longestEdge / Math.max(1, shortestEdge) > 8) return false;
  const marginX = width * 0.16;
  const marginY = height * 0.16;
  return corners.every(
    (point) =>
      point.x >= -marginX &&
      point.x <= width + marginX &&
      point.y >= -marginY &&
      point.y <= height + marginY,
  );
};

const projectTargetCorners = (target: TargetPattern) => {
  const matrix = homography.data;
  const sourceCorners = [
    { x: 0, y: 0 },
    { x: target.width, y: 0 },
    { x: target.width, y: target.height },
    { x: 0, y: target.height },
  ];
  return sourceCorners.map((point) => {
    const denominator = matrix[6] * point.x + matrix[7] * point.y + matrix[8];
    return {
      x: (matrix[0] * point.x + matrix[1] * point.y + matrix[2]) / denominator,
      y: (matrix[3] * point.x + matrix[4] * point.y + matrix[5]) / denominator,
    };
  }) as RecognitionDetection["corners"];
};

// V4 validates the visible feature support, not the four corners of the entire photograph.
export const supportHull = (points: RecognitionPoint[]) => {
  const sorted = [...points].sort((a,b)=>a.x-b.x||a.y-b.y);
  const cross = (o:RecognitionPoint,a:RecognitionPoint,b:RecognitionPoint)=>(a.x-o.x)*(b.y-o.y)-(a.y-o.y)*(b.x-o.x);
  const half = (items:RecognitionPoint[]) => {
    const hull:RecognitionPoint[]=[];
    for(const p of items){while(hull.length>=2&&cross(hull[hull.length-2],hull[hull.length-1],p)<=0)hull.pop();hull.push(p);}
    hull.pop();return hull;
  };
  return sorted.length<3?sorted:[...half(sorted),...half(sorted.reverse())];
};
export const hasSpread = (points:RecognitionPoint[],width:number,height:number,minCoverage:number) => {
  if(points.length<MIN_INLIERS||points.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))return false;
  const hull=supportHull(points);
  const xs=points.map(p=>p.x),ys=points.map(p=>p.y);
  return hull.length>=3&&polygonArea(hull)/(width*height)>=minCoverage
    &&Math.max(...xs)-Math.min(...xs)>=20&&Math.max(...ys)-Math.min(...ys)>=20;
};
const blankDiagnostic = (width:number,height:number,frameFeatures:number,reason:Reason):Diagnostic => ({
  reason,frameFeatures,frameWidth:width,frameHeight:height,matchCount:0,inliers:0,
  framePoints:[],referencePoints:[],region:[],
});

// Bounded, repeatable robust fitting. Reject degenerate minimal samples, then
// locally refit their consensus before scoring. The final acceptance gates below
// remain unchanged; replaying an exported frame must not depend on Math.random().
export const fitLocalHomography = (source:RecognitionPoint[],destination:RecognitionPoint[]) => {
  const count=source.length;if(count<4||count>MAX_MATCHES)return false;
  const kernel=new jsfeat.motion_model.homography2d();
  const model=new jsfeat.matrix_t(3,3,jsfeat.F32C1_t),errors=new Float32Array(count);
  let seed=2166136261;
  for(let i=0;i<count;i++)for(const v of [source[i].x,source[i].y,destination[i].x,destination[i].y])seed=Math.imul(seed^Math.round(v*8),16777619)>>>0;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const nondegenerate=(p:RecognitionPoint[])=>{
    for(let a=0;a<2;a++)for(let b=a+1;b<3;b++)for(let c=b+1;c<4;c++)
      if(Math.abs((p[b].x-p[a].x)*(p[c].y-p[a].y)-(p[b].y-p[a].y)*(p[c].x-p[a].x))<4)return false;
    return true;
  };
  let best=0,bestError=Infinity;
  for(let trial=0;trial<384;trial++){
    // Matches are ordered by descriptor distance. Include high-quality subsets
    // early, but sample the whole set as well so a wrong prefix cannot dominate.
    const pool=trial<64?Math.min(count,Math.max(8,8+Math.floor(trial/8)*4)):count;
    const indices:number[]=[];while(indices.length<4){const i=Math.floor(random()*pool);if(!indices.includes(i))indices.push(i);}
    const from=indices.map(i=>source[i]),to=indices.map(i=>destination[i]);
    if(!nondegenerate(from)||!nondegenerate(to)||!kernel.check_subset(from,to,4)||!kernel.run(from,to,model,4))continue;
    for(let refinement=0;refinement<2;refinement++){
      kernel.error(source,destination,model,errors,count);
      const inliers:number[]=[];let error=0;
      for(let i=0;i<count;i++)if(Number.isFinite(errors[i])&&errors[i]<=9){inliers.push(i);error+=errors[i];}
      if(inliers.length>best||(inliers.length===best&&error<bestError)){
        best=inliers.length;bestError=error;model.copy_to(homography);matchMask.data.fill(0);for(const i of inliers)matchMask.data[i]=1;
      }
      if(refinement||inliers.length<6||!kernel.run(inliers.map(i=>source[i]),inliers.map(i=>destination[i]),model,inliers.length))break;
    }
    if(best===count&&trial>=24)break;
  }
  return best>=4;
};
const estimateLocalDetection = (
  matches:FeatureMatch[],width:number,height:number,target:TargetPattern,frameFeatures:number,
):DetectionReport => {
  const diagnostics:Diagnostic={...blankDiagnostic(width,height,frameFeatures,'few_matches'),
    targetId:target.id,targetWidth:target.width,targetHeight:target.height,matchCount:matches.length};
  const reject=(reason:Reason):DetectionReport=>({detection:null,diagnostics:{...diagnostics,reason}});
  if(matches.length<MIN_MATCHES)return reject('few_matches');
  const sourcePoints=matches.map(m=>target.levels[m.patternLevel].corners[m.patternIndex]);
  const destinationPoints=matches.map(m=>frameCorners[m.screenIndex]);
  const kernel=new jsfeat.motion_model.homography2d();
  const found=fitLocalHomography(sourcePoints,destinationPoints);
  if(!found)return reject('geometry');
  const source:RecognitionPoint[]=[],destination:RecognitionPoint[]=[];
  for(let i=0;i<matches.length;i++)if(matchMask.data[i]){
    source.push({x:sourcePoints[i].x,y:sourcePoints[i].y});
    destination.push({x:destinationPoints[i].x,y:destinationPoints[i].y});
  }
  diagnostics.inliers=source.length;
  if(source.length<MIN_INLIERS||source.length/matches.length<MIN_INLIER_RATIO)return reject('geometry');
  if(!kernel.run(source,destination,homography,source.length))return reject('geometry');
  const h=homography.data;let sum=0;
  // Re-check residuals after refitting; RANSAC's pre-refit mask alone is insufficient.
  const verifiedSource:RecognitionPoint[]=[],verifiedDestination:RecognitionPoint[]=[];
  source.forEach((p,i)=>{
    const d=h[6]*p.x+h[7]*p.y+h[8];
    const x=(h[0]*p.x+h[1]*p.y+h[2])/d,y=(h[3]*p.x+h[4]*p.y+h[5])/d;
    const error=Math.hypot(x-destination[i].x,y-destination[i].y);
    if(Number.isFinite(error)&&Math.abs(d)>1e-8&&error<=4){verifiedSource.push(p);verifiedDestination.push(destination[i]);sum+=error;}
  });
  diagnostics.inliers=verifiedSource.length;
  diagnostics.errorPixels=verifiedSource.length?sum/verifiedSource.length:Infinity;
  diagnostics.framePoints=verifiedDestination;diagnostics.referencePoints=verifiedSource;
  diagnostics.region=supportHull(verifiedDestination);
  diagnostics.coverage=polygonArea(diagnostics.region)/(width*height);
  if(verifiedSource.length<MIN_INLIERS||verifiedSource.length/matches.length<MIN_INLIER_RATIO||diagnostics.errorPixels>2.5)return reject('geometry');
  if(!hasSpread(verifiedSource,target.width,target.height,.015)||!hasSpread(verifiedDestination,width,height,.035))return reject('clustered');
  const xs=verifiedDestination.map(p=>p.x),ys=verifiedDestination.map(p=>p.y);
  const corners:[RecognitionPoint,RecognitionPoint,RecognitionPoint,RecognitionPoint]=[
    {x:Math.min(...xs),y:Math.min(...ys)},{x:Math.max(...xs),y:Math.min(...ys)},
    {x:Math.max(...xs),y:Math.max(...ys)},{x:Math.min(...xs),y:Math.max(...ys)},
  ];
  return {detection:{targetId:target.id,corners,inliers:verifiedSource.length,matchCount:matches.length,
    confidence:Math.min(1,verifiedSource.length/30)},diagnostics:{...diagnostics,reason:'matched'}};
};
export const ambiguousNodes = (first:{nodeId:string;inliers:number},second?:{nodeId:string;inliers:number}) =>
  Boolean(second&&first.nodeId!==second.nodeId&&(first.inliers<second.inliers*1.25||first.inliers-second.inliers<4));

const detect = (request:Extract<WorkerRequest,{type:'detect'}>):DetectionReport => {
  const empty=(reason:Reason,count=0):DetectionReport=>({detection:null,diagnostics:blankDiagnostic(request.width,request.height,count,reason)});
  if(!targetPatterns.length)return empty('no_targets');
  ensureFrameBuffers(request.width,request.height);
  jsfeat.imgproc.grayscale(new Uint8Array(request.pixels),request.width,request.height,frameGray);
  const frameCount=describeFrame();
  if(frameCount<MIN_MATCHES)return empty('few_features',frameCount);
  const attempts=targetPatterns.map(t=>({...estimateLocalDetection(matchFeatures(frameCount,t.levels),request.width,request.height,t,frameCount),nodeId:t.nodeId}));
  const accepted=attempts.filter(a=>a.detection).sort((a,b)=>b.detection!.inliers-a.detection!.inliers);
  if(!accepted.length)return attempts.sort((a,b)=>b.diagnostics.inliers-a.diagnostics.inliers||b.diagnostics.matchCount-a.diagnostics.matchCount)[0];
  const best=accepted[0],other=accepted.find(a=>a.nodeId!==best.nodeId);
  if(ambiguousNodes({nodeId:best.nodeId,inliers:best.detection!.inliers},other?{nodeId:other.nodeId,inliers:other.detection!.inliers}:undefined))
    return {detection:null,diagnostics:{...best.diagnostics,reason:'ambiguous',alternateTargetId:other!.diagnostics.targetId}};
  return best;
};

scope.addEventListener("message", (event: MessageEvent<WorkerRequest>) => {
  const request = event.data;
  try {
    const result = request.type === 'preparePacked' ? preparePacked(request) : request.type === "prepareMany" ? prepareTargets(request) : detect(request);
    scope.postMessage({ requestId: request.requestId, ok: true, result });
  } catch (error: any) {
    scope.postMessage({
      requestId: request.requestId,
      ok: false,
      error: error?.message || "圖像辨識處理失敗",
    });
  }
});
