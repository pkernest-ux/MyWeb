import React,{useEffect,useMemo,useRef,useState} from 'react';
import {ArrowLeft,ArrowUp,Camera,Compass,Info,Map as MapIcon,RefreshCw,X,Footprints} from 'lucide-react';
import {OrbImageTracker,recognitionFrameSize} from './ar-v4-image-recognition';
import {RECOGNITION_REASONS,type Diagnostic,type Preparation,type RecognitionProfile} from './ar-v4-recognition-types';
import {FishnetProfileControl} from './ar-v4-fishnet-controls';
import {RecognitionInspector} from './ar-v4-recognition-inspector';
import {RecognitionCapture} from './ar-v4-recognition-capture';
import {advanceNodeConfirmation,type NodeConfirmation} from './ar-v4-recognition-stability';
import {cameraOrientationSensor,isFreshCameraSensor} from './ar-v4-camera-orientation';
import {createGuidanceSession,resetGuidanceSession,establishGuidanceSession,resolveGuidanceSession,recordGuidanceStep,createStepDetector,advanceStepDetector} from './ar-v4-guidance-session';
import {type StepSensitivity} from './ar-v4-guidance-session';
import {createStepSubmissionGate,resetStepSubmissionGate,submitStep,recommendStepSensitivity,estimatedProgressLimit,type StepInputMode} from './ar-v4-step-controls';
import {splitRecognitionLegs,rollingRecognitionScope,createContinuationState,resetContinuation,advanceContinuation} from './ar-v4-continuation';
import {sampleRouteProgress} from './ar-v4-guidance-geometry';
import {GuidanceScene,GuidanceMap} from './ar-v4-guidance-view';
import {useVisualHeading} from './ar-v4-use-visual-heading';
import {HeadingStatus} from './ar-v4-heading-status';
import {EMPTY_SENSOR,sensorFromEvent,type FieldSensor,nodeLabel} from './ar-v4-field-core';
import {angle,delta,wrap,confirmProgress,type PublicReference} from './ar-v4-public-core';
import './ar-v4-public-guide.css';

export default function PublicGuide({graph,segments:originalSegments,points,destinationId,origin,onExit,MapView}:any){
 const originalRouteKey=JSON.stringify(originalSegments.map((s:any)=>(s.points||[]).map((p:any)=>p.id)));
 const segments=useMemo(()=>splitRecognitionLegs(graph,originalSegments),[graph,originalRouteKey]);
 const [index,setIndex]=useState(0),[enabled,setEnabled]=useState(false),[busy,setBusy]=useState(false),[message,setMessage]=useState('請站定操作，允許相機與方向感測後開始。');
 const [profile,setProfile]=useState<RecognitionProfile>(new URLSearchParams(location.search).get('recognition')==='legacy'?'legacy':'fishnet');
 const [candidate,setCandidate]=useState<PublicReference|null>(null),[sensor,setSensor]=useState<FieldSensor>(EMPTY_SENSOR),[now,setNow]=useState(Date.now());
 const visualHeading=useVisualHeading(sensor,now);
 const session=useRef(createGuidanceSession());
 const detector=useRef(createStepDetector());
 const visualAnchorAllowed=useRef(true);
 const [lastConfirmedId,setLastConfirmedId]=useState(graph.nodes[segments[0]?.start?.id]?.id||origin?.snapId);
 const lastConfirmedRef=useRef(lastConfirmedId);lastConfirmedRef.current=lastConfirmedId;
 const [stepMode,setStepMode]=useState<StepInputMode>('auto'),stepModeRef=useRef<StepInputMode>('auto');
 const [sensitivity,setSensitivity]=useState<StepSensitivity>('standard');
 const gate=useRef(createStepSubmissionGate('auto'));
 const [stepCount,setStepCount]=useState(0);
 const evidence=useRef({physicalSteps:0,automaticMeters:0,manualUsed:false});
 const [autoContinue,setAutoContinue]=useState(false),continuation=useRef(createContinuationState());
 const [lastAuto,setLastAuto]=useState<{index:number;progress:number}|null>(null);
 const transitionPending=useRef(false),tryContinue=useRef<(input:any)=>boolean>(()=>false);
 const [scopePage,setScopePage]=useState(0);
 const [calibration,setCalibration]=useState<'idle'|'running'|'done'>('idle');
 const calibrationRef=useRef<'idle'|'running'|'done'>('idle');
 const sensitivityNames:Record<StepSensitivity,string>={low:'低',standard:'標準',high:'高'};
 const [calibrationCounts,setCalibrationCounts]=useState({low:0,standard:0,high:0});
 const calibrationRun=useRef({startedAt:0,low:createStepDetector(),standard:createStepDetector(),high:createStepDetector(),counts:{low:0,standard:0,high:0}});
 const [progress,setProgress]=useState(0),progressRef=useRef(0);
 const [stride,setStride]=useState(.65),[verticalFov,setVerticalFov]=useState(60);
 const [motionState,setMotionState]=useState('waiting'),[walkHint,setWalkHint]=useState('');
 const [motionAt,setMotionAt]=useState(0),[walking,setWalking]=useState(true);
 const [anchorSource,setAnchorSource]=useState<'manual'|'visual'|''>('');
 const cameraStage=useRef<HTMLDivElement>(null),help=useRef<HTMLDialogElement>(null);
 const footerRef=useRef<HTMLElement>(null);
 const [footerHeight,setFooterHeight]=useState(154);
 const [viewport,setViewport]=useState({width:390,height:540});
 const [lastSeen,setLastSeen]=useState(0),[mapOpen,setMapOpen]=useState(false);
 const [diagnostic,setDiagnostic]=useState<Diagnostic|null>(null),[preparation,setPreparation]=useState<Preparation|null>(null),[sample,setSample]=useState('');
 const diagnosticOpen=useRef(false);
 const capture=useMemo(()=>new RecognitionCapture(),[]);
 const video=useRef<HTMLVideoElement>(null),stream=useRef<MediaStream|null>(null),generation=useRef(0),sensorRef=useRef(sensor);
 sensorRef.current=sensor;
 const arrived=index>=segments.length;
 const leg=segments[Math.min(index,segments.length-1)];
 const current=arrived?graph.nodes[destinationId]:graph.nodes[leg?.start?.id]||graph.nodes[origin?.snapId];
 const target=arrived?null:leg?.end;
 const floor=graph.floors.find((f:any)=>f.id===current?.fId);
 // Parent orientation updates recreate segment objects. Only real route IDs or
 // a new graph revision may rebuild references / restart the recognition worker.
 const routeIds=JSON.stringify((leg?.points||[]).map((p:any)=>p.id));
 const progressBucket=Math.floor(progress/3);
 const scope=useMemo(()=>rollingRecognitionScope(graph,{leg,nextLeg:segments[index+1],current,target,progressMeters:progressBucket*3,page:scopePage,profile}),[graph,routeIds,current?.id,target?.id,progressBucket,scopePage,profile]);
 // Do not recreate the worker for a changed order/bucket when its exact packs stay the same.
 const refs=useMemo(()=>scope.references,[scope.key]);
 const diagnosticRefs=useMemo(()=>refs.map(r=>({...r,label:nodeLabel(graph.nodes[r.nodeId]||{id:r.nodeId})})),[refs,graph]);
 const cameraSensor=cameraOrientationSensor(sensor);
 const liveSensor=isFreshCameraSensor(cameraSensor,Date.now());
 const guidance=resolveGuidanceSession(session.current,cameraSensor,Date.now());
 session.current=guidance.state;
 const facing=enabled?guidance.bearing:null;
 const sameFloor=target?.fId===current?.fId;
 const route=useMemo(()=>leg?.points?.length>1?leg.points:[current,target].filter(Boolean),[routeIds,current,target]);
 const sampled=sampleRouteProgress(route,progress);
 const nextPoint=sampled.valid?sampled.remaining[1]||target:target;
 const direction=facing!==null&&sameFloor&&sampled.valid?delta(angle(sampled.origin,sampled.endpoint)-facing):null;
 const pitchDownDeg=sensor.beta!==null&&sensor.gamma!==null?Math.asin(Math.cos(sensor.beta*Math.PI/180)*Math.cos(sensor.gamma*Math.PI/180))*180/Math.PI:0;
 const videoWidth=video.current?.videoWidth||viewport.width,videoHeight=video.current?.videoHeight||viewport.height;
 const coverScale=Math.max(viewport.width/videoWidth,viewport.height/videoHeight);
 const viewportFov=2*Math.atan(Math.tan(verticalFov*Math.PI/360)*viewport.height/(videoHeight*coverScale))*180/Math.PI;
 const routeKey=`${current?.id}:${target?.id}:${index}`;
 const guidanceActive=facing!==null&&sameFloor&&sampled.valid;
 const candidateAge=Date.now()-lastSeen;
 const nearCandidate=Boolean(candidate?.nodeId===target?.id&&candidateAge>=0&&candidateAge<5000);
 const targetHasPhoto=refs.some(r=>r.nodeId===target?.id);
 const resetEvidence=()=>{evidence.current={physicalSteps:0,automaticMeters:0,manualUsed:false};continuation.current=resetContinuation(createContinuationState(),Date.now());};
 const resetInputs=()=>{detector.current=createStepDetector();gate.current=resetStepSubmissionGate(gate.current,Date.now(),calibrationRef.current==='idle'?stepModeRef.current:'calibration');continuation.current=resetContinuation(continuation.current,Date.now());};
 const clearGuidance=()=>{session.current=resetGuidanceSession(session.current,Date.now());resetInputs();setAnchorSource('');};
 const setReference=(ref:PublicReference)=>{if(calibrationRef.current!=='idle')return;const s=cameraOrientationSensor(sensorRef.current);if(ref.bearing!==null&&isFreshCameraSensor(s,Date.now())){visualHeading.reset();resetInputs();visualAnchorAllowed.current=false;session.current=establishGuidanceSession(session.current,{bearing:ref.bearing,sensor:s,now:Date.now(),source:'manual',nodeId:current.id});setAnchorSource('manual');setWalkHint('');setNow(Date.now());}};
 const faceRoute=()=>{if(sampled.valid&&nextPoint)setReference({id:'manual',nodeId:current.id,imageUrl:'',bearing:angle(sampled.origin,nextPoint)});};
 const stop=()=>{generation.current++;if(calibrationRef.current!=='idle'){calibrationRef.current='done';setCalibration('done');}stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;if(video.current)video.current.srcObject=null;setEnabled(false);setBusy(false);clearGuidance();visualHeading.reset();setCandidate(null);setLastSeen(0);setMotionState('waiting');};
 const changeStepMode=(mode:StepInputMode)=>{stepModeRef.current=mode;setStepMode(mode);resetInputs();visualAnchorAllowed.current=false;setWalkHint(mode==='manual'?'手動加步只推估進度，不代表實際抵達':'已切回自動計步');};
 const changeSensitivity=(value:StepSensitivity)=>{setSensitivity(value);resetInputs();};
 const submitProgress=(source:StepInputMode,at:number)=>{
  if(!enabled||arrived||!walking||calibrationRef.current!=='idle'||transitionPending.current)return;
  const accepted=submitStep(gate.current,{source,capturedAt:at},at);gate.current=accepted.state;if(!accepted.accepted)return;
  visualAnchorAllowed.current=false;
  const live=resolveGuidanceSession(session.current,cameraOrientationSensor(sensorRef.current),at);session.current=live.state;
  const sample=sampleRouteProgress(route,progressRef.current),to=sample.valid?sample.remaining[1]:null;
  if(live.bearing===null||!sameFloor||!sample.valid||!to){setWalkHint('請先核對位置與校正方向，再推進路線');return;}
  if(Math.abs(delta(angle(sample.origin,to)-live.bearing))>55){setWalkHint('步伐方向不符路線，請核對地圖後重新校正');clearGuidance();setNow(at);return;}
  const before=session.current.steps;
  session.current=recordGuidanceStep(session.current,{capturedAt:at,strideMeters:stride},at);
  const stillValid=resolveGuidanceSession(session.current,cameraOrientationSensor(sensorRef.current),at);session.current=stillValid.state;
  if(stillValid.bearing===null||session.current.steps===before){setNow(at);return;}
  const limit=estimatedProgressLimit(sample.totalDistance),next=Math.min(limit,progressRef.current+stride),advanced=next-progressRef.current;
  if(source==='auto'){evidence.current.physicalSteps++;evidence.current.automaticMeters+=advanced;}else{evidence.current.manualUsed=true;continuation.current=resetContinuation(continuation.current,at);}
  progressRef.current=next;setProgress(next);setStepCount(n=>n+1);setWalkHint(next>=limit?'接近地標；影像推估或人工確認後接續':'');
 };
 const beginCalibration=()=>{if(!enabled)return;const manualUsed=evidence.current.manualUsed;resetEvidence();evidence.current.manualUsed=manualUsed;calibrationRef.current='running';setCalibration('running');calibrationRun.current={startedAt:Date.now(),low:createStepDetector(),standard:createStepDetector(),high:createStepDetector(),counts:{low:0,standard:0,high:0}};setCalibrationCounts({low:0,standard:0,high:0});visualAnchorAllowed.current=false;clearGuidance();};
 const finishCalibration=()=>{calibrationRef.current='done';setCalibration('done');resetInputs();};
 const closeCalibration=(apply=false)=>{
  const result=recommendStepSensitivity(calibrationCounts);
  if(apply&&!result.recommended)return;
  if(!window.confirm('請確認已回到這次步伐校準開始的位置。校準期間不會累計導航距離，接著仍需核對方向。'))return;
  if(apply&&result.recommended)setSensitivity(result.recommended);
  const manualUsed=evidence.current.manualUsed;calibrationRef.current='idle';setCalibration('idle');resetEvidence();evidence.current.manualUsed=manualUsed;clearGuidance();setWalkHint('步伐校準已結束，請核對地圖並再次校正方向');
 };
 useEffect(()=>{transitionPending.current=false;setScopePage(0);},[index]);
 useEffect(()=>{if(!enabled||scope.pageCount<2||!preparation)return;const timer=setTimeout(()=>setScopePage(p=>p+1),12000);return()=>clearTimeout(timer);},[enabled,scope.pageCount,preparation,scopePage]);
 useEffect(()=>{if(calibration!=='running')return;const timer=setTimeout(finishCalibration,60000);return()=>clearTimeout(timer);},[calibration]);
 useEffect(()=>{const el=cameraStage.current;if(!el)return;const observer=new ResizeObserver(()=>{const r=el.getBoundingClientRect();setViewport({width:r.width,height:r.height});});observer.observe(el);return()=>observer.disconnect();},[]);
 useEffect(()=>{const el=footerRef.current;if(!el)return;const observer=new ResizeObserver(()=>setFooterHeight(el.getBoundingClientRect().height));observer.observe(el);return()=>observer.disconnect();},[arrived]);
 useEffect(()=>{const tick=setInterval(()=>setNow(Date.now()),400);const hidden=()=>{if(document.hidden){stop();setMessage('已暫停鏡頭，回來後請重新啟用。');}};document.addEventListener('visibilitychange',hidden);return()=>{clearInterval(tick);document.removeEventListener('visibilitychange',hidden);generation.current++;stream.current?.getTracks().forEach(t=>t.stop());};},[]);
 useEffect(()=>{if(!enabled)return;const receive=(e:DeviceOrientationEvent)=>{
  const reading=sensorFromEvent(e,window.screen.orientation?.angle??(window as any).orientation??0);
  if(reading.kind==='relative'&&reading.screenAngle===sensorRef.current.screenAngle&&sensorRef.current.kind==='absolute'&&sensorRef.current.capturedAt&&Date.now()-Date.parse(sensorRef.current.capturedAt!)>=0&&Date.now()-Date.parse(sensorRef.current.capturedAt!)<1500)return;
  sensorRef.current=reading;setSensor(reading);
 };window.addEventListener('deviceorientation',receive);window.addEventListener('deviceorientationabsolute',receive as EventListener);return()=>{window.removeEventListener('deviceorientation',receive);window.removeEventListener('deviceorientationabsolute',receive as EventListener);};},[enabled]);
 useEffect(()=>{
  if(!enabled||arrived||motionState==='denied'||motionState==='unsupported')return;
  const move=(event:DeviceMotionEvent)=>{
   const at=Date.now();
   const sample={capturedAt:at,acceleration:event.acceleration,accelerationIncludingGravity:event.accelerationIncludingGravity};
   const validVector=(v:DeviceMotionEventAcceleration|null)=>v&&[v.x,v.y,v.z].every(n=>typeof n==='number'&&Number.isFinite(n));
   if(validVector(event.acceleration)||validVector(event.accelerationIncludingGravity)){setMotionAt(at);setMotionState('ready');}
   if(calibrationRef.current==='running'){
    const run=calibrationRun.current;
    for(const level of ['low','standard','high'] as StepSensitivity[]){const result=advanceStepDetector(run[level],sample,at,level);run[level]=result.state;if(result.event)run.counts[level]++;}
    setCalibrationCounts({...run.counts});return;
   }
   if(calibrationRef.current!=='idle'||stepModeRef.current!=='auto')return;
   const result=advanceStepDetector(detector.current,sample,at,sensitivity);detector.current=result.state;
   if(result.event)submitProgress('auto',at);
  };
  window.addEventListener('devicemotion',move);return()=>window.removeEventListener('devicemotion',move);
 },[enabled,arrived,motionState,walking,routeIds,current?.id,target?.id,sameFloor,stride,sensitivity]);
 async function start(){
  const token=++generation.current;clearGuidance();setBusy(true);setMessage('正在請求相機、方向與步伐權限…');
  const orientation=(window as any).DeviceOrientationEvent;
  const motion=(window as any).DeviceMotionEvent;
  // All requests start in the same tap gesture, before awaiting any of them.
  const permission=orientation?.requestPermission?orientation.requestPermission().catch(()=> 'denied'):Promise.resolve('granted');
  const motionPermission=motion?.requestPermission?motion.requestPermission().catch(()=> 'denied'):Promise.resolve(motion?'granted':'unsupported');
  try{const media=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1280}},audio:false});if(token!==generation.current||document.hidden){media.getTracks().forEach(t=>t.stop());return;}stream.current?.getTracks().forEach(t=>t.stop());stream.current=media;if(video.current){video.current.srcObject=media;await video.current.play();}const [status,motionStatus]=await Promise.all([permission,motionPermission]);if(token!==generation.current)return;setMotionState(motionStatus==='granted'?'listening':motionStatus);setMotionAt(0);setEnabled(true);setMessage(status==='granted'?'鏡頭已啟用，正在尋找附近的參考照片；也可直接確認面向開始。':'方向感測未允許；仍可辨識照片與查看小地圖。');}
  catch{if(token===generation.current){stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;setMessage('無法啟用相機。請檢查 HTTPS、瀏覽器相機權限，或返回地圖。');}}
  finally{if(token===generation.current)setBusy(false);}
 }
 useEffect(()=>{
  if(!enabled||arrived)return;
  let cancelled=false,timer:ReturnType<typeof setTimeout>|undefined,confirmation:NodeConfirmation|null=null;const tracker=new OrbImageTracker({fullScene:true,profile});const canvas=document.createElement('canvas');
  setCandidate(null);setLastSeen(0);visualHeading.reset();
  setDiagnostic(null);setPreparation(null);setSample('');
  capture.clear();
  if(!refs.length){setMessage('這段尚未建置參考照片；可確認面向開始導引，並核對地圖。');tracker.dispose();return;}
  const loop=async()=>{
   if(cancelled||document.hidden)return;
   try{const v=video.current;if(v&&v.readyState>=2&&v.videoWidth){
    const size=recognitionFrameSize(v.videoWidth,v.videoHeight);canvas.width=size.width;canvas.height=size.height;
    const frameCapturedAt=Date.now(),frameSensor=cameraOrientationSensor(sensorRef.current),frameEvidence={...evidence.current};
    canvas.getContext('2d')?.drawImage(v,0,0,canvas.width,canvas.height);
    const result=await tracker.detect(canvas);if(cancelled)return;
    const match=refs.find(r=>r.id===result?.targetId);
    const directionResult=visualHeading.observe(tracker.diagnostics,{capturedAt:frameCapturedAt,sensor:frameSensor,nodeId:match?.nodeId,referenceId:match?.id,eligibleNodeId:current?.id});
    const visualAnchor=directionResult.resolved.state.anchor;
    // Visual observations calibrate orientation near the confirmed capture
    // node. Once walking, looking back at it must not reset the route position
    // or replenish the dead-reckoning budget. Misses do not gate the renderer.
    if(calibrationRef.current==='idle'&&current?.id===lastConfirmedRef.current&&visualAnchorAllowed.current&&directionResult.estimate.accepted&&match?.nodeId===current?.id&&visualAnchor?.capturedAt===frameCapturedAt&&progressRef.current===0&&session.current.anchor?.source!=='manual'){
     const next=establishGuidanceSession(session.current,{bearing:wrap(frameSensor.heading!+visualAnchor.offset),sensor:frameSensor,observedAt:frameCapturedAt,now:Date.now(),source:'visual',nodeId:current.id});
     session.current=next;if(next.anchor?.observedAt===frameCapturedAt){visualAnchorAllowed.current=false;detector.current=createStepDetector();setAnchorSource('visual');}
    }
    setDiagnostic(tracker.diagnostics);if(diagnosticOpen.current){
     setSample(canvas.toDataURL('image/jpeg',.65));
     if(tracker.diagnostics)capture.record(canvas,tracker.diagnostics,{mode:'public',profile,nodeId:current?.id,targetNodeId:target?.id,referenceIds:refs.map(r=>r.id),packUrls:refs.flatMap(r=>{const url=profile==='fishnet'?r.fishnetPackUrl:r.packUrl;return url?[url]:[];}),sourceWidth:v.videoWidth,sourceHeight:v.videoHeight,heading:{version:'v4-visual-heading-1',frameCapturedAt,sensor:frameSensor,estimate:directionResult.estimate,still:false}});
    }
    if(tryContinue.current({capturedAt:frameCapturedAt,match,diagnostic:tracker.diagnostics,frameSensor,frameEvidence}))return;
    confirmation=advanceNodeConfirmation(confirmation,match?.nodeId||null,frameCapturedAt,tracker.diagnostics?.reason==='ambiguous');
    if(match&&confirmation){
     // Seeing an interior/nearby node must never unlock arrival at the endpoint.
     setCandidate(old=>old?.nodeId===match.nodeId?old:null);
     if(confirmation.hits>=3&&Date.now()-frameCapturedAt<3000){
      setCandidate(match);setLastSeen(frameCapturedAt);
      if(match.nodeId===current?.id){
       const estimate=directionResult.estimate;
       const hint=!estimate.accepted&&estimate.reason==='unsupported_center'?'請把固定地標移到畫面中央，讓方向更容易確認。':!estimate.accepted&&['image_only','unknown_map_bearing','invalid_metadata'].includes(estimate.reason)?'這張參考照缺少可用的環景方向資料，請展開協助手動校正。':'正在確認取景方向，也可展開協助手動校正。';
       setMessage(directionResult.resolved.bearing!==null?'已找到目前節點並估算朝向；請依箭頭轉向，抵達後再確認位置。':`已找到目前節點的局部特徵；${hint}`);
      }
      else if(match.nodeId===target?.id)setMessage('已看見下一地標；走到後再按「我已到達」，尚未更新位置。');
      else setMessage(`已辨識附近地標：${nodeLabel(graph.nodes[match.nodeId])}；請繼續前往 ${nodeLabel(target)}，位置尚未更新。`);
     }else setMessage(`正在確認 ${nodeLabel(graph.nodes[match.nodeId])}（${confirmation.hits}/3，短暫漏判可接續）…`);
    }else if(tracker.diagnostics){
     setMessage(session.current.anchor?'已建立導引，照片背景搜尋中；請依路線前進。':confirmation?`暫時未匹配，保留 ${nodeLabel(graph.nodes[confirmation.nodeId])} 的近期證據（${confirmation.hits}/3）；請停留片刻。`:RECOGNITION_REASONS[tracker.diagnostics.reason]);
     if(tracker.diagnostics.reason==='ambiguous'){setCandidate(null);setLastSeen(0);}
    }
   }}catch{confirmation=null;if(!cancelled){visualHeading.reset();setCandidate(null);setLastSeen(0);setMessage('照片辨識暫時失敗，請調整取景；也可使用人工抵達確認。');}}
   if(!cancelled)timer=setTimeout(loop,350);
  };
  setMessage(`正在載入 ${refs.length} 組沿途特徵資料（不下載參考照片）…`);
  tracker.preparePacked(refs).then(()=>{if(!cancelled){setPreparation(tracker.preparation);setMessage('持續辨識中，請對準固定地標。');void loop();}}).catch(()=>{if(!cancelled){setPreparation(tracker.preparation);setMessage('特徵包無法載入或尚未發布，請展開辨識診斷；也可使用地圖。');}});
  return()=>{cancelled=true;clearTimeout(timer);tracker.dispose();capture.clear();};
 },[enabled,index,refs,profile]);
 const changeAutoContinue=(value:boolean)=>{setAutoContinue(value);continuation.current=resetContinuation(continuation.current,Date.now());setWalkHint(value?'已啟用自動接續試用；位置仍為推估':'已關閉自動接續，抵達後請確認');};
 tryContinue.current=({capturedAt,match,diagnostic,frameSensor,frameEvidence})=>{
  if(transitionPending.current)return true;
  const at=Date.now(),live=resolveGuidanceSession(session.current,cameraOrientationSensor(sensorRef.current),at);session.current=live.state;
  const sample=sampleRouteProgress(route,progressRef.current);
  const crossFloorLink=Object.keys(graph.adjacency[target?.id]||{}).some(id=>graph.nodes[id]?.fId!==target?.fId);
  const result=advanceContinuation(continuation.current,{
   enabled:enabled&&autoContinue&&walking&&calibrationRef.current==='idle'&&profile==='fishnet',now:at,capturedAt,
   scopeKey:`${routeKey}:${scope.key}`,current,target,nextLeg:segments[index+1],destinationId,transitionBlocked:crossFloorLink,
   headingValid:live.bearing!==null&&isFreshCameraSensor(frameSensor,capturedAt)&&frameSensor.kind===session.current.anchor?.kind&&frameSensor.screenAngle===session.current.anchor?.screenAngle,initialAnchorVerified:Boolean(session.current.anchor),stepMode:stepModeRef.current,
   physicalSteps:frameEvidence.physicalSteps,automaticProgressMeters:frameEvidence.automaticMeters,manualSteps:evidence.current.manualUsed||frameEvidence.manualUsed?1:0,
   legDistanceMeters:sample.valid?sample.totalDistance:0,matchedNodeId:match?.nodeId||null,
   geometryAccepted:diagnostic?.reason==='matched'&&diagnostic?.fishnet?.geometryAccepted===true,ambiguous:diagnostic?.reason==='ambiguous',
   sourceKey:`${frameSensor.kind}:${frameSensor.screenAngle}:${session.current.anchor?.observedAt??'none'}`,
  });
  continuation.current=result.state;
  if(!result.acceptEstimate)return false;
  transitionPending.current=true;
  setLastAuto({index,progress:progressRef.current});setIndex(index+1);progressRef.current=0;setProgress(0);resetEvidence();resetInputs();
  // A heuristic next-node estimate must not masquerade as a confirmed fix,
  // reset the heading budget, or re-open automatic photo anchoring.
  visualAnchorAllowed.current=false;visualHeading.reset();setCandidate(null);setLastSeen(0);setWalkHint('已推估接續下一地標；若位置不符，請使用「返回上一點」');setMessage('連續辨識中，位置為自動接續推估。');
  return true;
 };
 const undoAutoContinue=()=>{if(calibrationRef.current!=='idle'||!lastAuto||!window.confirm('將恢復上一段的推估位置，並關閉自動接續。請核對實際位置後重新校正方向。'))return;transitionPending.current=true;setIndex(lastAuto.index);progressRef.current=lastAuto.progress;setProgress(lastAuto.progress);setLastAuto(null);setAutoContinue(false);resetEvidence();visualAnchorAllowed.current=false;clearGuidance();visualHeading.reset();setCandidate(null);setLastSeen(0);setWalkHint('已返回上一段推估位置，請核對地圖與校正方向');};
 function arrive(manual=false){
  if(!target||transitionPending.current||calibrationRef.current!=='idle'||(!nearCandidate&&!manual))return;
  if(manual&&!window.confirm(`請確認已實際走到「${nodeLabel(target)}」，不能只在遠處看到地標。確定更新位置？`))return;
  transitionPending.current=true;setLastConfirmedId(target.id);setLastAuto(null);setIndex(confirmProgress(index,segments.length,true));progressRef.current=0;setProgress(0);resetEvidence();resetInputs();visualAnchorAllowed.current=true;setWalkHint('');
  // An explicit arrival resets only route progress. A valid same-floor IMU
  // orientation can continue into the next leg; it retains its original budget.
  if(!sameFloor)clearGuidance();
  visualHeading.reset();setCandidate(null);setLastSeen(0);setMessage('位置已由您確認，繼續辨識下一個地標。');
  if(index+1>=segments.length)stop();
 }
 if(!leg)return <main className="v4-public-guide"><button onClick={()=>onExit(current?.id)}>返回路線</button><p>沒有可導引的路段。</p></main>;
 return <main className={`v4-public-guide ${mapOpen?'map-expanded':''}`} style={{'--guide-footer-height':`${footerHeight}px`} as React.CSSProperties} data-guidance-status={guidance.status} data-heading={facing?.toFixed(2)??''} data-progress-m={progress.toFixed(2)} data-confirmed-node={lastConfirmedId} data-estimated-node={current?.id} data-active-leg={index} data-target-node={target?.id} data-step-mode={stepMode} data-sensitivity={sensitivity} data-calibration-state={calibration} data-calibration-count={calibrationCounts.standard} data-step-count={stepCount} data-auto-continue={autoContinue} data-source={session.current.anchor?.source??''} data-motion-state={motionState}>
  <div className="v4-camera-stage" ref={cameraStage}>
   <video ref={video} autoPlay playsInline muted className="v4-public-video"/>
   {guidanceActive&&!arrived&&<GuidanceScene sample={sampled} heading={facing} pitchDownDeg={pitchDownDeg} {...viewport} label={nodeLabel(target)} routeKey={routeKey} progress={progress} verticalFovDeg={viewportFov}/>}
   {enabled&&!arrived&&<div className="v4-camera-caption"><span className="v4-guidance-state" data-status={guidance.status}>{guidanceActive?guidance.status==='estimated'?'沿路推估 · 背景辨識中':anchorSource==='visual'?'照片已定向 · 感測導引中':'人工定向 · 感測導引中':!sameFloor?'跨樓層請依小地圖行走':'方向待校正'}</span><small>近似路徑投影 · 非精確空間錨定</small></div>}
  </div>
  <header><button onClick={()=>{stop();onExit(lastConfirmedId);}} aria-label="返回路線预覽"><ArrowLeft/></button><div><strong>{arrived?'已抵達目的地':'跟著皮卡走'}</strong><small>{current?.fName} · 最後確認：{nodeLabel(graph.nodes[lastConfirmedId]||current)}{current?.id!==lastConfirmedId?' · 接續推估中':''}</small></div><button onClick={()=>help.current?.showModal()} aria-label="導引說明與校正"><Info/></button></header>
  {!enabled&&!arrived&&<section className="v4-public-permission"><Camera size={32}/><h1>開始相機導引</h1><p>{message}</p><p>鏡頭持續辨識，感測器延續方向。可自動計步，或切換「手動加步」。</p><label className="v4-continuation-optin"><input type="checkbox" checked={autoContinue} onChange={e=>changeAutoContinue(e.target.checked)}/>開始時啟用自動接續（試用）</label><small>一般路段以影像與步伐推估接續；跨樓層、終點及不確定時仍需確認。</small><button disabled={busy} onClick={start}>{busy?'正在開啟…':'開啟相機與方向感測'}</button><small>同時請求步伐感測；未允許時可使用手動加步。</small></section>}
  {enabled&&!arrived&&<>
   <div className="v4-public-status" role="status">{walkHint||(!refs.length&&guidanceActive?'本段以感測與地圖推估，抵達後請確認。':message)}</div>
   {!guidanceActive&&sameFloor&&<section className="v4-guidance-acquire"><Compass size={26}/><strong>{calibration!=='idle'?'步伐校準中，導航暫停':guidance.reason==='time-budget'||guidance.reason==='distance-budget'||guidance.reason==='step-budget'?'請核對位置並再次校正':'對準地標，或確認面向'}</strong><p>{progress>0||current?.id!==lastConfirmedId?'目前位置仍為推估。請依小地圖核對實際位置；若接續錯誤可返回上一點。':'請先確認自己位於上方標示的起點，再面向地圖的下一段路。'}</p><button disabled={!liveSensor||!sampled.valid||calibration!=='idle'} onClick={faceRoute}>面向下一地標，開始導引</button>{!liveSensor&&<small>請直立持握手機，確認已允許方向感測。</small>}</section>}
  </>}
  <section className="v4-public-minimap" aria-label="最後確認位置與路徑">
   <div className="v4-map-heading"><span>{current?.id!==lastConfirmedId?'接續推估位置':progress>0?'步伐推估位置':'最後確認位置'} · {current?.fName}</span><button onClick={()=>setMapOpen(x=>!x)} aria-label="展開或收合小地圖" aria-expanded={mapOpen}><MapIcon size={18}/></button></div>
   {sampled.valid?<GuidanceMap floor={floor} sample={sampled} heading={facing} allPoints={points} routeKey={routeKey} progress={progress} targetLabel={nodeLabel(target)}/>:<MapView floor={floor} graph={graph} mode="route" origin={current?{floorId:current.fId,x:current.x,y:current.y,physX:current.physX,physY:current.physY,snapId:current.id}:origin} destinationId={destinationId} routePoints={points} routeSegments={segments} activeRouteIndex={Math.min(index,segments.length-1)} completedRouteIndex={index} compact imageMode="navigation" focusActiveSegment/>}
   {!arrived&&<footer ref={footerRef}><div className="v4-public-compass" aria-label="指向皮卡的方向箭頭"><ArrowUp size={32} style={{transform:`rotate(${direction??0}deg)`,opacity:direction===null?.3:1}}/><strong>{!sameFloor?'前往 '+target?.fName:direction===null?'方向待校正':Math.abs(direction)<18?'往皮卡方向前進':Math.abs(direction)>150?'請轉身尋找皮卡':`向${direction>0?'右':'左'}轉`}</strong><small>{index+1}/{segments.length} · 剩餘約 {Number(sampled.valid?sampled.remainingDistance:leg.distance||0).toFixed(1)} 公尺{progress>0||current?.id!==lastConfirmedId?'（推估）':'（地圖）'}</small></div><button className="v4-arrival" disabled={!enabled||!nearCandidate||calibration!=='idle'} onClick={()=>arrive()}>我已到達</button>
    {enabled&&<><div className="v4-step-bar"><label><Footprints size={17}/><select aria-label="步進方式" value={stepMode} disabled={calibration!=='idle'} onChange={e=>changeStepMode(e.target.value as StepInputMode)}><option value="auto">自動計步</option><option value="manual">手動加步</option></select></label>{stepMode==='manual'?<button className="v4-step-add" aria-label="手動增加一步" disabled={!walking||!guidanceActive||calibration!=='idle'} onClick={()=>submitProgress('manual',Date.now())}><Footprints size={18}/>＋一步</button>:<span className="v4-step-counter">{stepCount} 步 · 推估</span>}</div><div className="v4-motion-note"><span>{calibration!=='idle'?'校準中 · 導航暫停':!walking?'步伐推估已暫停':stepMode==='manual'?`手動 ${stepCount} 步 · 每步 ${stride} m`:motionState==='ready'&&now-motionAt<2000?`靈敏度 ${sensitivityNames[sensitivity]} · 每步 ${stride} m`:'未收到步伐，可切手動'}{autoContinue?' · 自動接續試用':''}</span><button onClick={()=>help.current?.showModal()}>校正／人工抵達</button></div>{lastAuto&&<button className="v4-auto-undo" disabled={calibration!=='idle'} onClick={undoAutoContinue}>接續位置不符？返回上一點</button>}</>}
   </footer>}
  </section>
  {arrived&&<section className="v4-public-arrived"><img src="./assets/ar/mascot-walking-small.png" alt="皮卡"/><h1>已由您確認抵達</h1><p>{nodeLabel(current)}</p><button onClick={()=>onExit(current?.id)}>返回路線預覽</button></section>}
  <dialog className="v4-guidance-help" ref={help} onClose={()=>{diagnosticOpen.current=false;setSample('');capture.clear();}}><div className="v4-help-title"><h2>導引說明與校正</h2><button onClick={()=>help.current?.close()} aria-label="關閉導引說明"><X/></button></div>
   <p>照片／Fishnet 持續辨識，感測器延續朝向，自動或手動步伐沿路線推估位置。小地圖與相機共用相同進度；照片暫時沒匹配也會繼續導引。</p>
   <p>這不是精確的 3D 定位。未重新校正最多延續 90 秒或 30 公尺；轉到鏡頭外的皮卡會改為轉向提示。走偏、換樓層或抵達時請核對地圖。</p>
   <h3>影像校正診斷</h3><p>下列是最近影像的校正證據，與持續導引分開；短期影像證據失效不會立即關閉上方路線。</p><HeadingStatus heading={visualHeading} manual={Boolean(facing!==null&&session.current.anchor?.source==='manual')}/>
   <details><summary>連續辨識與接續</summary><label><input type="checkbox" checked={autoContinue} disabled={calibration!=='idle'} onChange={e=>changeAutoContinue(e.target.checked)}/>自動接續（試用）</label><p>一般同樓層路段，至少 3 次自動感測步伐、進度接近下一點，再有 4 次穩定影像匹配，才推估接續。這不是精確到點定位；最後確認位置不會被改寫。</p><p>手動加步不作為自動接續依據。跨樓層、樓梯／電梯及終點仍須確認。照片不明確時停留在目前推估，不跳過節點；關閉此功能仍可持續辨識與手動確認。</p>{lastAuto&&<button disabled={calibration!=='idle'} onClick={()=>{undoAutoContinue();help.current?.close();}}>接續不正確，返回上一點</button>}<p>可將不同拍攝位置的環景放在沿途節點，系統會把有辨識資料的內部節點列為導引點。不要將同一張環景複製到不同 XY。</p></details>
   <details><summary>辨識／方向需要協助</summary><p>{!targetHasPhoto?'下一節點尚無照片。':'若辨識未成功，可核對地圖後人工確認。'}相機比對是候選位置，不是精確測距。校正方向不會重設位置。</p><button disabled={calibration!=='idle'} onClick={()=>{arrive(true);help.current?.close();}}>人工確認已到此地標</button><button disabled={!enabled||!liveSensor||!sameFloor||calibration!=='idle'} onClick={faceRoute}><Compass/>我已面向下一地標，校正方向</button><button disabled={!enabled||calibration!=='idle'} onClick={()=>{if(!window.confirm(`請確認已站在本段起點「${nodeLabel(current)}」。這會清除沿路推估並重新辨識方向。`))return;setLastConfirmedId(current.id);setLastAuto(null);clearGuidance();resetEvidence();visualHeading.reset();progressRef.current=0;setProgress(0);visualAnchorAllowed.current=true;setNow(Date.now());}}>我已回到本段起點，重新辨識</button><button onClick={()=>{stop();help.current?.close();setMessage('請重新啟用相機與方向感測。');}}><RefreshCw/>重新啟用感測</button></details>
   <details><summary>步伐與投影調整</summary><p>步伐是估計，規律晃動也可能被計入。靈敏度調整是否計入一步；步長調整每步推估距離。手動加步與自動計步不會同時累加。</p><label><input type="checkbox" checked={walking} disabled={calibration!=='idle'} onChange={e=>{setWalking(e.target.checked);resetInputs();visualAnchorAllowed.current=false;}}/>啟用步伐推估</label><label>步伐靈敏度<select aria-label="步伐靈敏度" value={sensitivity} disabled={calibration!=='idle'} onChange={e=>changeSensitivity(e.target.value as StepSensitivity)}><option value="low">低</option><option value="standard">標準</option><option value="high">高</option></select></label><label>每步距離（公尺）<input aria-label="估計每步距離（公尺）" type="number" min="0.2" max="1.2" step="0.05" disabled={calibration!=='idle'} value={stride} onChange={e=>{const n=Number(e.target.value);if(n>=.2&&n<=1.2){setStride(n);resetInputs();}}}/></label>
    <section className="v4-step-calibration" aria-label="10步校準"><strong>10 步校準</strong><p>在安全處以導航姿勢走 10 步，再按完成。期間暫停導航進度；結束後請回到校準開始的位置並重新核對方向。</p>{calibration==='idle'?<button disabled={!enabled||motionState==='denied'||motionState==='unsupported'} onClick={beginCalibration}>開始10步校準</button>:<><output aria-live="polite">低 {calibrationCounts.low} · 標準 {calibrationCounts.standard} · 高 {calibrationCounts.high} 步</output>{calibration==='running'?<button onClick={finishCalibration}>完成10步校準</button>:<><p>{recommendStepSensitivity(calibrationCounts).recommended?`最接近 10 步：${sensitivityNames[recommendStepSensitivity(calibrationCounts).recommended!]}`:'尚未取得有效步伐，請檢查感測權限後重試。'}此結果只協助調整，不代表準確率驗收。</p><button disabled={!recommendStepSensitivity(calibrationCounts).recommended} onClick={()=>closeCalibration(true)}>套用建議靈敏度</button><button onClick={beginCalibration}>重新校準10步</button></>}<button onClick={()=>closeCalibration(false)}>取消校準</button></>}</section>
    <label>鏡頭垂直視角<input aria-label="投影垂直視角" type="range" min="40" max="85" value={verticalFov} onChange={e=>setVerticalFov(Number(e.target.value))}/>{verticalFov}°</label><p>目前以鏡頭離地約 1.45 公尺估計投影，會依畫面裁切換算視角；仍非手機校準值。調整只影響本次使用，不修改場域。</p></details>
   <details className="v4-public-diagnostics" onToggle={e=>{diagnosticOpen.current=e.currentTarget.open;if(!e.currentTarget.open){setSample('');capture.clear();}}}><summary>辨識診斷與搜尋範圍</summary>
    <FishnetProfileControl profile={profile} onChange={p=>{setCandidate(null);setLastSeen(0);clearGuidance();setProfile(p);}} disabled={busy}/>
    <button disabled={!sample||!capture.ready} onClick={()=>capture.download()}>匯出這次辨識畫面</button>
    <p>僅在展開時保留一張辨識影格；匯出包含相機畫面與診斷，不會自動上傳。</p>
    <p>本輪搜尋 {new Set(refs.map(r=>r.nodeId)).size} 個節點 · {refs.length} 組照片特徵。僅下載特徵包，不下載參考照片。隨路線進度選取目前、下一點、沿途及同樓層相鄰節點，已載入特徵使用快取。</p>
    {scope.omitted>0&&<p role="status">每批上限 64 組；本批未載入 {scope.omitted} 組。第 {scope.page+1}/{scope.pageCount} 批，準備完成後每 12 秒輪替附近資料，不代表全場域都已搜尋。</p>}
    <ul>{scope.nodes.filter(n=>refs.some(r=>r.nodeId===n.id)).map(n=><li key={n.id}>{nodeLabel(n)}：{refs.filter(r=>r.nodeId===n.id).length} 張</li>)}</ul>
    {!preparation&&<p>{refs.length?'正在建立特徵索引…':'本輪沒有可用的參考照片。'}</p>}
    <RecognitionInspector diagnostic={diagnostic} preparation={preparation} frame={sample} references={diagnosticRefs} precompiled/>
    <p>人工抵達按鈕需最近 4 秒內有 3 次同節點匹配；自動接續試用另檢查多幀穩定、感測步伐、路線順序與樓層。自動接續只改推估位置，不代表已確認抵達；手動步數不作為接續證據。</p>
   </details>
  </dialog>
 </main>;
}
