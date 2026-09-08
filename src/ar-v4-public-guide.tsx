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
import {sampleRouteProgress} from './ar-v4-guidance-geometry';
import {GuidanceScene,GuidanceMap} from './ar-v4-guidance-view';
import {useVisualHeading} from './ar-v4-use-visual-heading';
import {HeadingStatus} from './ar-v4-heading-status';
import {EMPTY_SENSOR,sensorFromEvent,type FieldSensor,nodeLabel} from './ar-v4-field-core';
import {angle,delta,wrap,publicRecognitionScope,confirmProgress,type PublicReference} from './ar-v4-public-core';
import './ar-v4-public-guide.css';

export default function PublicGuide({graph,segments,points,destinationId,origin,onExit,MapView}:any){
 const [index,setIndex]=useState(0),[enabled,setEnabled]=useState(false),[busy,setBusy]=useState(false),[message,setMessage]=useState('請站定操作，允許相機與方向感測後開始。');
 const [profile,setProfile]=useState<RecognitionProfile>(new URLSearchParams(location.search).get('recognition')==='legacy'?'legacy':'fishnet');
 const [candidate,setCandidate]=useState<PublicReference|null>(null),[sensor,setSensor]=useState<FieldSensor>(EMPTY_SENSOR),[now,setNow]=useState(Date.now());
 const visualHeading=useVisualHeading(sensor,now);
 const session=useRef(createGuidanceSession());
 const detector=useRef(createStepDetector());
 const visualAnchorAllowed=useRef(true);
 const [progress,setProgress]=useState(0),progressRef=useRef(0);
 const [stride,setStride]=useState(.65),[verticalFov,setVerticalFov]=useState(60);
 const [motionState,setMotionState]=useState('waiting'),[walkHint,setWalkHint]=useState('');
 const [motionAt,setMotionAt]=useState(0),[walking,setWalking]=useState(true);
 const [anchorSource,setAnchorSource]=useState<'manual'|'visual'|''>('');
 const cameraStage=useRef<HTMLDivElement>(null),help=useRef<HTMLDialogElement>(null);
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
 const scope=useMemo(()=>publicRecognitionScope(graph,leg,current,target),[graph,routeIds,current?.id,target?.id]);
 const refs=scope.references;
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
 const nearCandidate=Boolean(candidate?.nodeId===target?.id&&now-lastSeen<5000);
 const targetHasPhoto=refs.some(r=>r.nodeId===target?.id);
 const clearGuidance=()=>{session.current=resetGuidanceSession(session.current,Date.now());detector.current=createStepDetector();setAnchorSource('');};
 const setReference=(ref:PublicReference)=>{const s=cameraOrientationSensor(sensorRef.current);if(ref.bearing!==null&&isFreshCameraSensor(s,Date.now())){visualHeading.reset();detector.current=createStepDetector();visualAnchorAllowed.current=false;session.current=establishGuidanceSession(session.current,{bearing:ref.bearing,sensor:s,now:Date.now(),source:'manual',nodeId:current.id});setAnchorSource('manual');setWalkHint('');setNow(Date.now());}};
 const faceRoute=()=>{if(sampled.valid&&nextPoint)setReference({id:'manual',nodeId:current.id,imageUrl:'',bearing:angle(sampled.origin,nextPoint)});};
 const stop=()=>{generation.current++;stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;if(video.current)video.current.srcObject=null;setEnabled(false);setBusy(false);clearGuidance();visualHeading.reset();setCandidate(null);setLastSeen(0);setMotionState('waiting');};
 useEffect(()=>{const el=cameraStage.current;if(!el)return;const observer=new ResizeObserver(()=>{const r=el.getBoundingClientRect();setViewport({width:r.width,height:r.height});});observer.observe(el);return()=>observer.disconnect();},[]);
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
   const result=advanceStepDetector(detector.current,{capturedAt:at,acceleration:event.acceleration,accelerationIncludingGravity:event.accelerationIncludingGravity},at);detector.current=result.state;
   const validVector=(v:DeviceMotionEventAcceleration|null)=>v&&[v.x,v.y,v.z].every(n=>typeof n==='number'&&Number.isFinite(n));
   if(validVector(event.acceleration)||validVector(event.accelerationIncludingGravity)){setMotionAt(at);setMotionState('ready');}
   if(!result.event||!walking)return;
   visualAnchorAllowed.current=false;
   const live=resolveGuidanceSession(session.current,cameraOrientationSensor(sensorRef.current),at);session.current=live.state;
   const sample=sampleRouteProgress(route,progressRef.current);
   if(live.bearing===null||!sameFloor||!sample.valid)return;
   const to=sample.remaining[1];if(!to)return;
   // Walking is an estimate along the selected route, never an arrival event.
   // Off-route/backward movement cannot be inferred safely from phone steps.
   if(Math.abs(delta(angle(sample.origin,to)-live.bearing))>55){setWalkHint('步伐方向不符路線，請核對地圖後重新校正');clearGuidance();setNow(at);return;}
   session.current=recordGuidanceStep(session.current,{capturedAt:at,strideMeters:stride},at);
   const stillValid=resolveGuidanceSession(session.current,cameraOrientationSensor(sensorRef.current),at);session.current=stillValid.state;
   if(stillValid.bearing===null){setNow(at);return;}
   const next=Math.min(Math.max(0,sample.totalDistance-.8),progressRef.current+stride);
   progressRef.current=next;setProgress(next);setWalkHint(next>=sample.totalDistance-.8?'接近地標，請實際走到後確認':'');
  };
  window.addEventListener('devicemotion',move);return()=>window.removeEventListener('devicemotion',move);
 },[enabled,arrived,motionState,walking,routeIds,current?.id,target?.id,sameFloor,stride]);
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
    const frameCapturedAt=Date.now(),frameSensor=cameraOrientationSensor(sensorRef.current);
    canvas.getContext('2d')?.drawImage(v,0,0,canvas.width,canvas.height);
    const result=await tracker.detect(canvas);if(cancelled)return;
    const match=refs.find(r=>r.id===result?.targetId);
    const directionResult=visualHeading.observe(tracker.diagnostics,{capturedAt:frameCapturedAt,sensor:frameSensor,nodeId:match?.nodeId,referenceId:match?.id,eligibleNodeId:current?.id});
    const visualAnchor=directionResult.resolved.state.anchor;
    // Visual observations calibrate orientation near the confirmed capture
    // node. Once walking, looking back at it must not reset the route position
    // or replenish the dead-reckoning budget. Misses do not gate the renderer.
    if(visualAnchorAllowed.current&&directionResult.estimate.accepted&&match?.nodeId===current?.id&&visualAnchor?.capturedAt===frameCapturedAt&&progressRef.current===0&&session.current.anchor?.source!=='manual'){
     const next=establishGuidanceSession(session.current,{bearing:wrap(frameSensor.heading!+visualAnchor.offset),sensor:frameSensor,observedAt:frameCapturedAt,now:Date.now(),source:'visual',nodeId:current.id});
     session.current=next;if(next.anchor?.observedAt===frameCapturedAt){visualAnchorAllowed.current=false;detector.current=createStepDetector();setAnchorSource('visual');}
    }
    setDiagnostic(tracker.diagnostics);if(diagnosticOpen.current){
     setSample(canvas.toDataURL('image/jpeg',.65));
     if(tracker.diagnostics)capture.record(canvas,tracker.diagnostics,{mode:'public',profile,nodeId:current?.id,targetNodeId:target?.id,referenceIds:refs.map(r=>r.id),packUrls:refs.flatMap(r=>{const url=profile==='fishnet'?r.fishnetPackUrl:r.packUrl;return url?[url]:[];}),sourceWidth:v.videoWidth,sourceHeight:v.videoHeight,heading:{version:'v4-visual-heading-1',frameCapturedAt,sensor:frameSensor,estimate:directionResult.estimate,still:false}});
    }
    confirmation=advanceNodeConfirmation(confirmation,match?.nodeId||null,Date.now(),tracker.diagnostics?.reason==='ambiguous');
    if(match&&confirmation){
     // Seeing an interior/nearby node must never unlock arrival at the endpoint.
     setCandidate(old=>old?.nodeId===match.nodeId?old:null);
     if(confirmation.hits>=3){
      setCandidate(match);setLastSeen(Date.now());
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
 function arrive(manual=false){
  if(!target||(!nearCandidate&&!manual))return;
  if(manual&&!window.confirm(`請確認已實際走到「${nodeLabel(target)}」，不能只在遠處看到地標。確定更新位置？`))return;
  setIndex(confirmProgress(index,segments.length,true));progressRef.current=0;setProgress(0);detector.current=createStepDetector();visualAnchorAllowed.current=true;setWalkHint('');
  // An explicit arrival resets only route progress. A valid same-floor IMU
  // orientation can continue into the next leg; it retains its original budget.
  if(!sameFloor)clearGuidance();
  visualHeading.reset();setCandidate(null);setLastSeen(0);setMessage('位置已由您確認，繼續辨識下一個地標。');
  if(index+1>=segments.length)stop();
 }
 if(!leg)return <main className="v4-public-guide"><button onClick={()=>onExit(current?.id)}>返回路線</button><p>沒有可導引的路段。</p></main>;
 return <main className={`v4-public-guide ${mapOpen?'map-expanded':''}`} data-guidance-status={guidance.status} data-heading={facing?.toFixed(2)??''} data-progress-m={progress.toFixed(2)} data-confirmed-node={current?.id} data-source={session.current.anchor?.source??''} data-motion-state={motionState}>
  <div className="v4-camera-stage" ref={cameraStage}>
   <video ref={video} autoPlay playsInline muted className="v4-public-video"/>
   {guidanceActive&&!arrived&&<GuidanceScene sample={sampled} heading={facing} pitchDownDeg={pitchDownDeg} {...viewport} label={nodeLabel(target)} routeKey={routeKey} progress={progress} verticalFovDeg={viewportFov}/>}
   {enabled&&!arrived&&<div className="v4-camera-caption"><span className="v4-guidance-state" data-status={guidance.status}>{guidanceActive?guidance.status==='estimated'?'沿路推估 · 背景辨識中':anchorSource==='visual'?'照片已定向 · 感測導引中':'人工定向 · 感測導引中':!sameFloor?'跨樓層請依小地圖行走':'方向待校正'}</span><small>近似路徑投影 · 非精確空間錨定</small></div>}
  </div>
  <header><button onClick={()=>{stop();onExit(current?.id);}} aria-label="返回路線预覽"><ArrowLeft/></button><div><strong>{arrived?'已抵達目的地':'跟著皮卡走'}</strong><small>{current?.fName} · 最後確認：{nodeLabel(current)}</small></div><button onClick={()=>help.current?.showModal()} aria-label="導引說明與校正"><Info/></button></header>
  {!enabled&&!arrived&&<section className="v4-public-permission"><Camera size={32}/><h1>開始相機導引</h1><p>{message}</p><p>鏡頭辨識起點與朝向，感測器延續轉向，步伐估計沿路進度。請注意周圍並在地標確認抵達。</p><button disabled={busy} onClick={start}>{busy?'正在開啟…':'開啟相機與方向感測'}</button><small>同時請求步伐感測；未允許時仍可看方向與地圖。</small></section>}
  {enabled&&!arrived&&<>
   <div className="v4-public-status" role="status">{walkHint||(!refs.length&&guidanceActive?'本段以感測與地圖推估，抵達後請確認。':message)}</div>
   {!guidanceActive&&sameFloor&&<section className="v4-guidance-acquire"><Compass size={26}/><strong>{guidance.reason==='time-budget'||guidance.reason==='distance-budget'||guidance.reason==='step-budget'?'請核對位置並再次校正':'對準地標，或確認面向'}</strong><p>{progress>0?'目前沿路位置仍為步伐推估。若走偏，請使用下方地圖核對或返回路線。':'請先確認自己位於上方標示的起點，再面向地圖的下一段路。'}</p><button disabled={!liveSensor||!sampled.valid} onClick={faceRoute}>面向下一地標，開始導引</button>{!liveSensor&&<small>請直立持握手機，確認已允許方向感測。</small>}</section>}
  </>}
  <section className="v4-public-minimap" aria-label="最後確認位置與路徑">
   <div className="v4-map-heading"><span>{progress>0?'步伐推估位置':'最後確認位置'} · {current?.fName}</span><button onClick={()=>setMapOpen(x=>!x)} aria-label="展開或收合小地圖" aria-expanded={mapOpen}><MapIcon size={18}/></button></div>
   {sampled.valid?<GuidanceMap floor={floor} sample={sampled} heading={facing} allPoints={points} routeKey={routeKey} progress={progress} targetLabel={nodeLabel(target)}/>:<MapView floor={floor} graph={graph} mode="route" origin={current?{floorId:current.fId,x:current.x,y:current.y,physX:current.physX,physY:current.physY,snapId:current.id}:origin} destinationId={destinationId} routePoints={points} routeSegments={segments} activeRouteIndex={Math.min(index,segments.length-1)} completedRouteIndex={index} compact imageMode="navigation" focusActiveSegment/>}
   {!arrived&&<footer><div className="v4-public-compass" aria-label="指向皮卡的方向箭頭"><ArrowUp size={32} style={{transform:`rotate(${direction??0}deg)`,opacity:direction===null?.3:1}}/><strong>{!sameFloor?'前往 '+target?.fName:direction===null?'方向待校正':Math.abs(direction)<18?'往皮卡方向前進':Math.abs(direction)>150?'請轉身尋找皮卡':`向${direction>0?'右':'左'}轉`}</strong><small>{index+1}/{segments.length} · 剩餘約 {Number(sampled.valid?sampled.remainingDistance:leg.distance||0).toFixed(1)} 公尺{progress>0?'（推估）':'（地圖）'}</small></div><button className="v4-arrival" disabled={!enabled||!nearCandidate} onClick={()=>arrive()}>我已到達</button>
    {enabled&&<div className="v4-motion-note"><Footprints size={13}/>{!walking?'步伐推估已暫停':motionState==='ready'&&now-motionAt<2000?`步伐推估開啟 · 每步 ${stride} m`:'步伐未提供，位置停在最後推估點'}<button onClick={()=>help.current?.showModal()}>校正／人工抵達</button></div>}
   </footer>}
  </section>
  {arrived&&<section className="v4-public-arrived"><img src="./assets/ar/mascot-walking-small.png" alt="皮卡"/><h1>已由您確認抵達</h1><p>{nodeLabel(current)}</p><button onClick={()=>onExit(current?.id)}>返回路線預覽</button></section>}
  <dialog className="v4-guidance-help" ref={help} onClose={()=>{diagnosticOpen.current=false;setSample('');capture.clear();}}><div className="v4-help-title"><h2>導引說明與校正</h2><button onClick={()=>help.current?.close()} aria-label="關閉導引說明"><X/></button></div>
   <p>照片／Fishnet 負責建立方向，感測器延續朝向，步伐沿已選路徑推估位置。小地圖與相機共用相同資料；照片暫時沒匹配也會繼續導引。</p>
   <p>這不是精確的 3D 定位。未重新校正最多延續 90 秒或 30 公尺；轉到鏡頭外的皮卡會改為轉向提示。走偏、換樓層或抵達時請核對地圖。</p>
   <h3>影像校正診斷</h3><p>下列是最近影像的校正證據，與持續導引分開；短期影像證據失效不會立即關閉上方路線。</p><HeadingStatus heading={visualHeading} manual={Boolean(facing!==null&&session.current.anchor?.source==='manual')}/>
   <details><summary>辨識／方向需要協助</summary><p>{!targetHasPhoto?'下一節點尚無照片。':'若辨識未成功，可核對地圖後人工確認。'}相機比對是候選位置，不是精確測距。校正方向不會重設位置。</p><button onClick={()=>{arrive(true);help.current?.close();}}>人工確認已到此地標</button><button disabled={!enabled||!liveSensor||!sameFloor} onClick={faceRoute}><Compass/>我已面向下一地標，校正方向</button><button disabled={!enabled} onClick={()=>{if(!window.confirm(`請確認已站在本段起點「${nodeLabel(current)}」。這會清除沿路推估並重新辨識方向。`))return;clearGuidance();visualHeading.reset();progressRef.current=0;setProgress(0);visualAnchorAllowed.current=true;setNow(Date.now());}}>我已回到本段起點，重新辨識</button><button onClick={()=>{stop();help.current?.close();setMessage('請重新啟用相機與方向感測。');}}><RefreshCw/>重新啟用感測</button></details>
   <details><summary>步伐與投影調整</summary><p>步伐是估計，規律晃動也可能被計入。拍照測試時可暫停；不會自動判定抵達。</p><label><input type="checkbox" checked={walking} onChange={e=>{setWalking(e.target.checked);detector.current=createStepDetector();visualAnchorAllowed.current=false;}}/>啟用步伐推估</label><label>每步距離（公尺）<input aria-label="估計每步距離（公尺）" type="number" min="0.2" max="1.2" step="0.05" value={stride} onChange={e=>{const n=Number(e.target.value);if(n>=.2&&n<=1.2)setStride(n);}}/></label><label>鏡頭垂直視角<input aria-label="投影垂直視角" type="range" min="40" max="85" value={verticalFov} onChange={e=>setVerticalFov(Number(e.target.value))}/>{verticalFov}°</label><p>目前以鏡頭離地約 1.45 公尺估計投影，會依畫面裁切換算視角；仍非手機校準值。調整只影響本次使用，不修改場域。</p></details>
   <details className="v4-public-diagnostics" onToggle={e=>{diagnosticOpen.current=e.currentTarget.open;if(!e.currentTarget.open){setSample('');capture.clear();}}}><summary>辨識診斷與搜尋範圍</summary>
    <FishnetProfileControl profile={profile} onChange={p=>{setCandidate(null);setLastSeen(0);clearGuidance();setProfile(p);}} disabled={busy}/>
    <button disabled={!sample||!capture.ready} onClick={()=>capture.download()}>匯出這次辨識畫面</button>
    <p>僅在展開時保留一張辨識影格；匯出包含相機畫面與診斷，不會自動上傳。</p>
    <p>本輪搜尋 {new Set(refs.map(r=>r.nodeId)).size} 個節點 · {refs.length} 組照片特徵。僅下載特徵包，不下載參考照片。優先路段起終點，再搜尋沿途及同樓層直接相鄰節點。</p>
    {scope.omitted>0&&<p role="status">手機效能上限 64 張；本輪另有 {scope.omitted} 張未載入。切換路段會重新選取，不代表所有照片已搜尋。</p>}
    <ul>{scope.nodes.filter(n=>refs.some(r=>r.nodeId===n.id)).map(n=><li key={n.id}>{nodeLabel(n)}：{refs.filter(r=>r.nodeId===n.id).length} 張</li>)}</ul>
    {!preparation&&<p>{refs.length?'正在建立特徵索引…':'本輪沒有可用的參考照片。'}</p>}
    <RecognitionInspector diagnostic={diagnostic} preparation={preparation} frame={sample} references={diagnosticRefs} precompiled/>
    <p>最近 4 秒內的 5 次取樣，須有 3 次通過同節點檢查；短暫漏判可接續，出現不同節點或位置混淆就重新確認。辨識附近地標不會自動改變位置，也不會解鎖其他節點的抵達按鈕。</p>
   </details>
  </dialog>
 </main>;
}
