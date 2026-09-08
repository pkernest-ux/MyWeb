import {publicReferences,type PublicReference} from './ar-v4-public-core';

/** Pure V4-only planning and conservative ESTIMATED continuation. No function
 * confirms arrival, changes graph data, advances an index, or refreshes a
 * heading/dead-reckoning budget. All times are epoch milliseconds. */
const finite=(n:unknown):n is number=>typeof n==='number'&&Number.isFinite(n);
const validTime=(n:unknown):n is number=>finite(n)&&n>=0;
const persisted=(graph:any,point:any)=>point&&typeof point.id==='string'?graph?.nodes?.[point.id]:undefined;
const eligible=(node:any,floorId:string)=>typeof floorId==='string'&&floorId.length>0&&node&&typeof node.id==='string'&&node.fId===floorId&&node.enabled!==false&&node.navigable!==false;
const metric=(a:any,b:any)=>[a?.physX,a?.physY,b?.physX,b?.physY].every(finite)?Math.hypot(b.physX-a.physX,b.physY-a.physY):NaN;
const packUrl=(ref:PublicReference,profile:'fishnet'|'legacy')=>profile==='fishnet'?ref.fishnetPackUrl:ref.packUrl;
const published=(ref:PublicReference,profile:'fishnet'|'legacy')=>typeof packUrl(ref,profile)==='string'&&Boolean(packUrl(ref,profile)?.trim())&&!(profile==='fishnet'?ref.fishnetError:ref.packError);
export const hasPublishedFishnet=(node:any)=>publicReferences([node]).some(ref=>published(ref,'fishnet'));
const copyPoint=(point:any)=>point&&typeof point==='object'?{...point}:point;

/** Keep all existing turn/floor boundaries; only add cuts at persisted internal
 * recognition anchors. Published metadata is checked, not downloaded/verified
 * here. The worker still validates the actual pack. Legacy V3 remains intact. */
export function splitRecognitionLegs(graph:any,legs:readonly any[]):any[] {
  if(!Array.isArray(legs))return [];
  const result:any[]=[];
  for(const [legNumber,leg] of legs.entries()){
    if(!leg||!Array.isArray(leg.points)){result.push({...leg,index:result.length,originalIndex:leg?.index??legNumber});continue;}
    const points=leg.points,base=finite(leg.startIndex)?leg.startIndex:0;
    const floor=points[0]?.fId;
    const sameFloor=typeof floor==='string'&&floor.length>0&&points.every((p:any)=>p?.fId===floor);
    const lengths=points.slice(1).map((p:any,i:number)=>metric(points[i],p));
    const validGeometry=lengths.every(finite);
    const cuts=[0];
    if(sameFloor&&validGeometry)for(let i=1;i<points.length-1;i++){
      const node=persisted(graph,points[i]);
      if(eligible(node,floor)&&hasPublishedFishnet(node))cuts.push(i);
    }
    if(cuts.length===1){
      const copies=points.map(copyPoint);
      result.push({...leg,index:result.length,originalIndex:leg.index??legNumber,points:copies,start:copyPoint(leg.start),end:copyPoint(leg.end)});
      continue;
    }
    cuts.push(points.length-1);
    for(let part=0;part<cuts.length-1;part++){
      const from=cuts[part],to=cuts[part+1],slice=points.slice(from,to+1).map(copyPoint);
      result.push({...leg,index:result.length,originalIndex:leg.index??legNumber,sublegIndex:part,
        startIndex:base+from,endIndex:base+to,points:slice,start:slice[0],end:slice[slice.length-1],
        distance:lengths.slice(from,to).reduce((sum:number,n:number)=>sum+n,0)});
    }
  }
  return result;
}

export const recognitionProgressBucket=(progressMeters:number)=>Math.floor(Math.max(0,finite(progressMeters)?progressMeters:0)/3);
export type RollingRecognitionInput={leg:any;nextLeg?:any;current:any;target:any;progressMeters?:number;page?:number;limit?:number;profile?:'fishnet'|'legacy'};
export type RollingRecognitionResult={references:PublicReference[];nodes:any[];total:number;omitted:number;bucket:number;page:number;pageCount:number;key:string};
function roundRobin(groups:readonly PublicReference[][]):PublicReference[]{
  const result:PublicReference[]=[];
  const count=Math.max(0,...groups.map(group=>group.length));
  for(let i=0;i<count;i++)for(const group of groups)if(group[i])result.push(group[i]);
  return result;
}
const windowOf=(list:PublicReference[],count:number,page:number)=>Array.from({length:count},(_,i)=>list[(page*count+i)%list.length]);

/** Stable within a 3 m progress bucket. Page changes are an explicit caller
 * decision (e.g. after a settled 12 s search), never an orientation-frame timer.
 * Endpoint and secondary pools retain separate slots so neither can starve.
 * All published directions are reachable across pageCount pages, including
 * when the current/next anchors alone contain more than the 64-pack budget. */
export function rollingRecognitionScope(graph:any,input:RollingRecognitionInput):RollingRecognitionResult {
  const profile=input.profile==='legacy'?'legacy':'fishnet';
  const limit=Math.max(0,Math.min(64,finite(input.limit)?Math.floor(input.limit!):64));
  const bucket=recognitionProgressBucket(input.progressMeters??0),floor=input.current?.fId;
  const nodes:any[]=[];
  const add=(point:any)=>{const node=persisted(graph,point);if(eligible(node,floor)&&!nodes.some(n=>n.id===node.id))nodes.push(node);};
  add(input.target);add(input.current);
  const endpointIds=new Set(nodes.map(n=>n.id));
  let travelled=0;
  const near=(Array.isArray(input.leg?.points)?input.leg.points:[]).map((point:any,i:number,list:any[])=>{
    if(i){const length=metric(list[i-1],point);travelled+=finite(length)?length:3;}
    return {point,index:i,distance:Math.abs(travelled-bucket*3)};
  }).sort((a:any,b:any)=>a.distance-b.distance||a.index-b.index);
  for(const item of near)add(item.point);
  for(const point of Array.isArray(input.nextLeg?.points)?input.nextLeg.points:[])add(point);
  // One hop only; adding a neighbour must not recursively explore its neighbours.
  for(const node of [...nodes])for(const id of Object.keys(graph?.adjacency?.[node.id]||{}).sort())add(graph?.nodes?.[id]);
  const seen=new Set<string>();
  const refsFor=(node:any)=>publicReferences([node]).filter(ref=>{
    const key=JSON.stringify([ref.nodeId,ref.id]);
    if(!published(ref,profile)||seen.has(key))return false;
    seen.add(key);return true;
  });
  const primary=roundRobin(nodes.filter(n=>endpointIds.has(n.id)).map(refsFor));
  const secondary=roundRobin(nodes.filter(n=>!endpointIds.has(n.id)).map(refsFor));
  if(limit===1){
    const all=[...primary,...secondary],pageCount=Math.max(1,all.length),page=(finite(input.page)?Math.max(0,Math.floor(input.page!)):0)%pageCount;
    const references=all.length?[all[page]]:[];
    return {references,nodes,total:all.length,omitted:all.length-references.length,bucket,page,pageCount,
      key:JSON.stringify([profile,references.map(ref=>[ref.id,ref.nodeId,packUrl(ref,profile)])])};
  }
  let primaryCount=Math.min(primary.length,secondary.length?Math.max(1,Math.floor(limit/2)):limit);
  let secondaryCount=Math.min(secondary.length,Math.max(0,limit-primaryCount));
  primaryCount=Math.min(primary.length,Math.max(0,limit-secondaryCount));
  if(!limit){primaryCount=0;secondaryCount=0;}
  const pageCount=Math.max(1,primaryCount?Math.ceil(primary.length/primaryCount):0,secondaryCount?Math.ceil(secondary.length/secondaryCount):0);
  const requested=finite(input.page)?Math.max(0,Math.floor(input.page!)):0,page=requested%pageCount;
  const references=[...windowOf(primary,primaryCount,page),...windowOf(secondary,secondaryCount,page)];
  const key=JSON.stringify([profile,references.map(ref=>[ref.id,ref.nodeId,packUrl(ref,profile)]).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)))]);
  const total=primary.length+secondary.length;
  return {references,nodes,total,omitted:total-references.length,bucket,page,pageCount,key};
}

export type ContinuationReason='waiting'|'disabled'|'not-verified'|'heading-unavailable'|'manual-mode'|'manual-progress'|
  'unsafe-target'|'not-near-end'|'few-physical-steps'|'invalid-input'|'clock-change'|'scope-changed'|'source-changed'|
  'stale'|'out-of-order'|'miss'|'ambiguous'|'geometry-rejected'|'confirming'|'accept-estimate'|'already-accepted'|'reset';
export type ContinuationState={scopeKey:string|null;sourceKey:string|null;barrierAt:number|null;lastNow:number|null;
  lastCapturedAt:number|null;captures:readonly number[];accepted:boolean;manualUsed:boolean;reason:ContinuationReason};
export type ContinuationInput={
  enabled:boolean;now:number;capturedAt:number;scopeKey:string;sourceKey:string;
  current:any;target:any;destinationId:string;nextLeg?:any;transitionBlocked?:boolean;
  headingValid:boolean;initialAnchorVerified:boolean;stepMode:'auto'|'manual';manualSteps?:number;
  physicalSteps:number;automaticProgressMeters:number;legDistanceMeters:number;
  matchedNodeId:string|null;geometryAccepted:boolean;ambiguous:boolean;
};
export type ContinuationResult={state:ContinuationState;acceptEstimate:boolean;reason:ContinuationReason;hits:number;
  estimate?:{fromNodeId:string;toNodeId:string;capturedAt:number;confirmed:false}};
export const CONTINUATION_LIMITS=Object.freeze({matches:4,windowMs:8000,minSpanMs:1000,maxCaptureAgeMs:3000,minPhysicalSteps:3,nearEndMeters:.8,minProgressFraction:.7});
export function createContinuationState():ContinuationState {
  return {scopeKey:null,sourceKey:null,barrierAt:null,lastNow:null,lastCapturedAt:null,captures:[],accepted:false,manualUsed:false,reason:'waiting'};
}
function clearVotes(state:ContinuationState,now:number,reason:ContinuationReason):ContinuationState {
  return {...state,captures:[],barrierAt:Math.max(state.barrierAt??0,state.lastNow??0,validTime(now)?now:0),reason};
}
export function resetContinuation(previous:ContinuationState|null|undefined,now:number):ContinuationState {
  return clearVotes(previous||createContinuationState(),now,'reset');
}
function transitionNode(node:any):boolean {
  if(node?.isVerticalShaft||node?.shaftId||node?.isTransition||node?.requiresConfirmation)return true;
  const labels=[node?.nodeType,node?.type,node?.kind,node?.connectorType,node?.transitionType,node?.title,node?.name,node?.guideTitle,node?.code].filter(value=>typeof value==='string').join(' ');
  return /stairs?|staircase|elevator|escalator|\blift\b|樓梯|電梯|升降|扶梯|跨樓/i.test(labels);
}
function ordinary(input:ContinuationInput):boolean {
  const {current,target}=input;
  if(typeof input.destinationId!=='string'||!input.destinationId||!current?.id||!target?.id||current.id===target.id||!current.fId||current.fId!==target.fId||target.id===input.destinationId||
    current.enabled===false||current.navigable===false||target.enabled===false||target.navigable===false||transitionNode(current)||transitionNode(target)||input.transitionBlocked)return false;
  if(input.nextLeg){
    const points=[input.nextLeg.start,input.nextLeg.end,...(Array.isArray(input.nextLeg.points)?input.nextLeg.points:[])].filter(Boolean);
    if(points.some(point=>point.fId!==target.fId))return false;
  }
  return true;
}

/** Call only with camera-match results, never a manual candidate confirmation.
 * Root owns the immutable expected next target and physical-only counters for
 * this leg. A prior manual step disqualifies the entire leg, including after
 * switching back to auto. Evidence is strict/consecutive; misses reset it.
 * Success is consumed once per scope and remains ESTIMATED, not arrival proof. */
export function advanceContinuation(previous:ContinuationState|null|undefined,input:ContinuationInput):ContinuationResult {
  let state=previous||createContinuationState();
  const output=(reason:ContinuationReason,acceptEstimate=false):ContinuationResult=>({state:{...state,reason},reason,acceptEstimate,hits:Math.min(CONTINUATION_LIMITS.matches,state.captures.length),
    ...(acceptEstimate?{estimate:{fromNodeId:input.current.id,toNodeId:input.target.id,capturedAt:input.capturedAt,confirmed:false as const}}:{})});
  const reject=(reason:ContinuationReason)=>{state=clearVotes(state,input.now,reason);return output(reason);};
  if(!validTime(input.now)||state.lastNow!==null&&input.now<state.lastNow)return reject('clock-change');
  state={...state,lastNow:input.now};
  if(typeof input.scopeKey!=='string'||!input.scopeKey||typeof input.sourceKey!=='string'||!input.sourceKey)return reject('invalid-input');
  if(state.scopeKey!==null&&state.scopeKey!==input.scopeKey){
    state={...createContinuationState(),scopeKey:input.scopeKey,sourceKey:input.sourceKey,lastNow:input.now,barrierAt:input.now};return output('scope-changed');
  }
  if(state.sourceKey!==null&&state.sourceKey!==input.sourceKey){state={...state,sourceKey:input.sourceKey};return reject('source-changed');}
  state={...state,scopeKey:input.scopeKey,sourceKey:input.sourceKey,manualUsed:state.manualUsed||(finite(input.manualSteps)&&input.manualSteps>0)};
  if(state.accepted)return output('already-accepted');
  if(!input.enabled)return reject('disabled');
  if(!input.initialAnchorVerified)return reject('not-verified');
  if(!input.headingValid)return reject('heading-unavailable');
  if(state.manualUsed)return reject('manual-progress');
  if(input.stepMode!=='auto')return reject('manual-mode');
  if(!ordinary(input))return reject('unsafe-target');
  if(input.manualSteps!==undefined&&(!Number.isInteger(input.manualSteps)||input.manualSteps<0)||
    !finite(input.legDistanceMeters)||input.legDistanceMeters<=0||!finite(input.automaticProgressMeters)||input.automaticProgressMeters<0||
    !Number.isInteger(input.physicalSteps)||input.physicalSteps<0)return reject('invalid-input');
  if(input.physicalSteps<CONTINUATION_LIMITS.minPhysicalSteps)return reject('few-physical-steps');
  const required=Math.max(input.legDistanceMeters*CONTINUATION_LIMITS.minProgressFraction,input.legDistanceMeters-CONTINUATION_LIMITS.nearEndMeters);
  if(input.automaticProgressMeters+1e-6<required)return reject('not-near-end');
  if(!validTime(input.capturedAt)||input.capturedAt>input.now)return reject('invalid-input');
  if(state.barrierAt!==null&&input.capturedAt<state.barrierAt||state.lastCapturedAt!==null&&input.capturedAt<=state.lastCapturedAt)return reject('out-of-order');
  if(input.now-input.capturedAt>CONTINUATION_LIMITS.maxCaptureAgeMs)return reject('stale');
  state={...state,lastCapturedAt:input.capturedAt};
  if(input.ambiguous)return reject('ambiguous');
  if(input.matchedNodeId!==input.target.id)return reject('miss');
  if(!input.geometryAccepted)return reject('geometry-rejected');
  const captures=[...state.captures.filter(at=>input.now-at<=CONTINUATION_LIMITS.windowMs),input.capturedAt].slice(-64);
  state={...state,captures};
  if(captures.length<CONTINUATION_LIMITS.matches||captures[captures.length-1]-captures[0]<CONTINUATION_LIMITS.minSpanMs)return output('confirming');
  state={...state,accepted:true};
  return output('accept-estimate',true);
}
