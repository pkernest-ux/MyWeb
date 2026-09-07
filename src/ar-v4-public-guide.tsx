import React,{useEffect,useMemo,useRef,useState} from 'react';
import {ArrowLeft,ArrowUp,Camera,Compass,Map as MapIcon,RefreshCw} from 'lucide-react';
import {OrbImageTracker,recognitionFrameSize} from './ar-v4-image-recognition';
import {RECOGNITION_REASONS,type Diagnostic,type Preparation,type RecognitionProfile} from './ar-v4-recognition-types';
import {FishnetProfileControl} from './ar-v4-fishnet-controls';
import {RecognitionInspector} from './ar-v4-recognition-inspector';
import {RecognitionCapture} from './ar-v4-recognition-capture';
import {advanceNodeConfirmation,type NodeConfirmation} from './ar-v4-recognition-stability';
import {EMPTY_SENSOR,sensorFromEvent,type FieldSensor,nodeLabel} from './ar-v4-field-core';
import {angle,delta,wrap,publicRecognitionScope,confirmProgress,type PublicReference} from './ar-v4-public-core';
import './ar-v4-public-guide.css';

export default function PublicGuide({graph,segments,points,destinationId,origin,onExit,MapView}:any){
 const [index,setIndex]=useState(0),[enabled,setEnabled]=useState(false),[busy,setBusy]=useState(false),[message,setMessage]=useState('請站定操作，允許相機與方向感測後開始。');
 const [profile,setProfile]=useState<RecognitionProfile>(new URLSearchParams(location.search).get('recognition')==='legacy'?'legacy':'fishnet');
 const [candidate,setCandidate]=useState<PublicReference|null>(null),[sensor,setSensor]=useState<FieldSensor>(EMPTY_SENSOR),[now,setNow]=useState(Date.now());
 const [baseline,setBaseline]=useState<{id:string;bearing:number;sensor:number;kind:string;screen:number;time:number}|null>(null);
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
 const liveSensor=sensor.heading!==null&&sensor.capturedAt&&now-Date.parse(sensor.capturedAt)<10000;
 const baselineValid=baseline&&now-baseline.time<20000&&liveSensor&&baseline.kind===sensor.kind&&baseline.screen===sensor.screenAngle;
 const facing=baselineValid?wrap(baseline.bearing+delta(sensor.heading!-baseline.sensor)):null;
 const sameFloor=target?.fId===current?.fId;
 const direction=facing!==null&&sameFloor?delta(angle(current,target)-facing):null;
 const nearCandidate=Boolean(candidate?.nodeId===target?.id&&now-lastSeen<5000);
 const targetHasPhoto=refs.some(r=>r.nodeId===target?.id);
 const setReference=(ref:PublicReference)=>{const s=sensorRef.current;if(ref.bearing!==null&&s.heading!==null&&s.capturedAt&&Date.now()-Date.parse(s.capturedAt)<10000)setBaseline(old=>old&&old.id===ref.id&&ref.id!=='manual'&&old.kind===s.kind&&old.screen===s.screenAngle?{...old,time:Date.now()}:{id:ref.id,bearing:ref.bearing!,sensor:s.heading!,kind:s.kind,screen:s.screenAngle,time:Date.now()});};
 const stop=()=>{generation.current++;stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;if(video.current)video.current.srcObject=null;setEnabled(false);setBusy(false);setBaseline(null);setCandidate(null);setLastSeen(0);};
 useEffect(()=>{const tick=setInterval(()=>setNow(Date.now()),400);const hidden=()=>{if(document.hidden){stop();setMessage('已暫停鏡頭，回來後請重新啟用。');}};document.addEventListener('visibilitychange',hidden);return()=>{clearInterval(tick);document.removeEventListener('visibilitychange',hidden);generation.current++;stream.current?.getTracks().forEach(t=>t.stop());};},[]);
 useEffect(()=>{if(!enabled)return;const receive=(e:DeviceOrientationEvent)=>setSensor(sensorFromEvent(e,window.screen.orientation?.angle||0));window.addEventListener('deviceorientation',receive);window.addEventListener('deviceorientationabsolute',receive as EventListener);return()=>{window.removeEventListener('deviceorientation',receive);window.removeEventListener('deviceorientationabsolute',receive as EventListener);};},[enabled]);
 async function start(){
  const token=++generation.current;setBusy(true);setMessage('正在請求相機與方向權限…');
  const orientation=(window as any).DeviceOrientationEvent;
  // Both permission requests start in the tap gesture, before awaiting either.
  const permission=orientation?.requestPermission?orientation.requestPermission().catch(()=> 'denied'):Promise.resolve('granted');
  try{const media=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1280}},audio:false});if(token!==generation.current||document.hidden){media.getTracks().forEach(t=>t.stop());return;}stream.current?.getTracks().forEach(t=>t.stop());stream.current=media;if(video.current){video.current.srcObject=media;await video.current.play();}const status=await permission;if(token!==generation.current)return;setEnabled(true);setMessage(status==='granted'?'鏡頭已啟用，正在尋找附近的參考照片。':'方向感測未允許；仍可辨識照片與查看小地圖。');}
  catch{if(token===generation.current){stream.current?.getTracks().forEach(t=>t.stop());stream.current=null;setMessage('無法啟用相機。請檢查 HTTPS、瀏覽器相機權限，或返回地圖。');}}
  finally{if(token===generation.current)setBusy(false);}
 }
 useEffect(()=>{
  if(!enabled||arrived)return;
  let cancelled=false,timer:ReturnType<typeof setTimeout>|undefined,confirmation:NodeConfirmation|null=null;const tracker=new OrbImageTracker({fullScene:true,profile});const canvas=document.createElement('canvas');
  setCandidate(null);setLastSeen(0);
  setDiagnostic(null);setPreparation(null);setSample('');
  capture.clear();
  if(!refs.length){setMessage('這段尚未建置參考照片；可依小地圖行走，再人工確認抵達。');return;}
  const loop=async()=>{
   if(cancelled||document.hidden)return;
   try{const v=video.current;if(v&&v.readyState>=2&&v.videoWidth){
    const size=recognitionFrameSize(v.videoWidth,v.videoHeight);canvas.width=size.width;canvas.height=size.height;
    canvas.getContext('2d')?.drawImage(v,0,0,canvas.width,canvas.height);
    const result=await tracker.detect(canvas);if(cancelled)return;
    setDiagnostic(tracker.diagnostics);if(diagnosticOpen.current){
     setSample(canvas.toDataURL('image/jpeg',.65));
     if(tracker.diagnostics)capture.record(canvas,tracker.diagnostics,{mode:'public',profile,nodeId:current?.id,targetNodeId:target?.id,referenceIds:refs.map(r=>r.id),packUrls:refs.flatMap(r=>{const url=profile==='fishnet'?r.fishnetPackUrl:r.packUrl;return url?[url]:[];}),sourceWidth:v.videoWidth,sourceHeight:v.videoHeight});
    }
    const match=refs.find(r=>r.id===result?.targetId);
    confirmation=advanceNodeConfirmation(confirmation,match?.nodeId||null,Date.now(),tracker.diagnostics?.reason==='ambiguous');
    if(match&&confirmation){
     // Seeing an interior/nearby node must never unlock arrival at the endpoint.
     setCandidate(old=>old?.nodeId===match.nodeId?old:null);
     if(confirmation.hits>=3){
      setCandidate(match);setLastSeen(Date.now());
      if(match.nodeId===current?.id)setMessage('已找到目前節點的局部特徵；方向未校正時，請展開協助確認面向。');
      else if(match.nodeId===target?.id)setMessage('已看見下一地標；走到後再按「我已到達」，尚未更新位置。');
      else setMessage(`已辨識附近地標：${nodeLabel(graph.nodes[match.nodeId])}；請繼續前往 ${nodeLabel(target)}，位置尚未更新。`);
     }else setMessage(`正在確認 ${nodeLabel(graph.nodes[match.nodeId])}（${confirmation.hits}/3，短暫漏判可接續）…`);
    }else if(tracker.diagnostics){
     setMessage(confirmation?`暫時未匹配，保留 ${nodeLabel(graph.nodes[confirmation.nodeId])} 的近期證據（${confirmation.hits}/3）；請停留片刻。`:RECOGNITION_REASONS[tracker.diagnostics.reason]);
     if(tracker.diagnostics.reason==='ambiguous'){setCandidate(null);setLastSeen(0);setBaseline(null);}
    }
   }}catch{confirmation=null;if(!cancelled){setCandidate(null);setLastSeen(0);setMessage('照片辨識暫時失敗，請調整取景；也可使用人工抵達確認。');}}
   if(!cancelled)timer=setTimeout(loop,350);
  };
  setMessage(`正在載入 ${refs.length} 組沿途特徵資料（不下載參考照片）…`);
  tracker.preparePacked(refs).then(()=>{if(!cancelled){setPreparation(tracker.preparation);setMessage('持續辨識中，請對準固定地標。');void loop();}}).catch(()=>{if(!cancelled){setPreparation(tracker.preparation);setMessage('特徵包無法載入或尚未發布，請展開辨識診斷；也可使用地圖。');}});
  return()=>{cancelled=true;clearTimeout(timer);tracker.dispose();capture.clear();};
 },[enabled,index,refs,profile]);
 function arrive(manual=false){
  if(!target||(!nearCandidate&&!manual))return;
  if(manual&&!window.confirm(`請確認已實際走到「${nodeLabel(target)}」，不能只在遠處看到地標。確定更新位置？`))return;
  setIndex(confirmProgress(index,segments.length,true));setBaseline(null);setCandidate(null);setLastSeen(0);setMessage('位置已由您確認，繼續辨識下一個地標。');
  if(index+1>=segments.length)stop();
 }
 if(!leg)return <main className="v4-public-guide"><button onClick={()=>onExit(current?.id)}>返回路線</button><p>沒有可導引的路段。</p></main>;
 return <main className="v4-public-guide">
  <video ref={video} autoPlay playsInline muted className="v4-public-video"/>
  <header><button onClick={()=>{stop();onExit(current?.id);}} aria-label="返回路線预覽"><ArrowLeft/></button><div><strong>{arrived?'已抵達目的地':`前往 ${nodeLabel(target)}`}</strong><small>{current?.fName} · 最後確認：{nodeLabel(current)}</small></div><button onClick={()=>setMapOpen(x=>!x)} aria-label="展開或收合小地圖"><MapIcon/></button></header>
  {!enabled&&!arrived&&<section className="v4-public-permission"><Camera size={32}/><h1>跟著皮卡走</h1><p>{message}</p><p>照片比對不會量測距離；看到地標後，仍須實際走到再確認。</p><button disabled={busy} onClick={start}>{busy?'正在開啟…':'開啟相機與方向感測'}</button></section>}
  {enabled&&!arrived&&<><div className="v4-public-status" role="status">{message}</div><div className="v4-pika" style={{left:direction===null?'50%':`${50+Math.max(-1,Math.min(1,direction/65))*27}%`}}><span>{sameFloor?'我在下一個地標等你':'請依地圖前往 '+target?.fName}</span><div className="v4-pika-wave"><img src="./assets/ar/mascot-walking-small.png" alt="皮卡揮手引導"/><b aria-hidden="true">👋</b></div><small>方向示意 · 非現場 3D 定位</small></div></>}
  <section className={`v4-public-minimap ${mapOpen?'expanded':''}`} aria-label="最後確認位置與路徑"><div>最後確認位置 · {current?.fName}</div><MapView floor={floor} graph={graph} mode="route" origin={current?{floorId:current.fId,x:current.x,y:current.y,physX:current.physX,physY:current.physY,snapId:current.id}:origin} destinationId={destinationId} routePoints={points} routeSegments={segments} activeRouteIndex={Math.min(index,segments.length-1)} completedRouteIndex={index} compact imageMode="navigation" focusActiveSegment/></section>
  {arrived?<section className="v4-public-arrived"><img src="./assets/ar/mascot-walking-small.png" alt="皮卡"/><h1>已由您確認抵達</h1><p>{nodeLabel(current)}</p><button onClick={()=>onExit(current?.id)}>返回路線預覽</button></section>:enabled&&<footer><div className="v4-public-compass" aria-label="指向皮卡的方向箭頭"><ArrowUp size={44} style={{transform:`rotate(${direction??0}deg)`,opacity:direction===null?.3:1}}/><strong>{direction===null?'方向待校正':Math.abs(direction)<18?'往皮卡方向前進':Math.abs(direction)>150?'請轉身尋找皮卡':`向${direction>0?'右':'左'}轉`}</strong><small>{index+1}/{segments.length} · 本段約 {Number(leg.distance||0).toFixed(1)} 公尺（地圖距離）</small></div><button className="v4-arrival" disabled={!nearCandidate} onClick={()=>arrive()}>我已到達{nearCandidate?' · 接續導引':''}</button><details><summary>辨識／方向需要協助</summary><p>{!targetHasPhoto?'下一節點尚無照片。':'若辨識未成功，可核對地圖後人工確認。'}相機比對是候選位置，不是精確測距。</p><button onClick={()=>arrive(true)}>人工確認已到此地標</button><button disabled={!liveSensor||!sameFloor} onClick={()=>setReference({id:'manual',nodeId:current.id,imageUrl:'',bearing:angle(current,target)})}><Compass/>我已面向下一地標，校正方向</button><button onClick={()=>{stop();setMessage('請重新啟用相機與方向感測。');}}><RefreshCw/>重新啟用感測</button></details>
   <details className="v4-public-diagnostics" onToggle={e=>{diagnosticOpen.current=e.currentTarget.open;if(!e.currentTarget.open){setSample('');capture.clear();}}}><summary>辨識診斷與搜尋範圍</summary>
    <FishnetProfileControl profile={profile} onChange={p=>{setCandidate(null);setLastSeen(0);setBaseline(null);setProfile(p);}} disabled={busy}/>
    <button disabled={!sample||!capture.ready} onClick={()=>capture.download()}>匯出這次辨識畫面</button>
    <p>僅在展開時保留一張辨識影格；匯出包含相機畫面與診斷，不會自動上傳。</p>
    <p>本輪搜尋 {new Set(refs.map(r=>r.nodeId)).size} 個節點 · {refs.length} 組照片特徵。僅下載特徵包，不下載參考照片。優先路段起終點，再搜尋沿途及同樓層直接相鄰節點。</p>
    {scope.omitted>0&&<p role="status">手機效能上限 64 張；本輪另有 {scope.omitted} 張未載入。切換路段會重新選取，不代表所有照片已搜尋。</p>}
    <ul>{scope.nodes.filter(n=>refs.some(r=>r.nodeId===n.id)).map(n=><li key={n.id}>{nodeLabel(n)}：{refs.filter(r=>r.nodeId===n.id).length} 張</li>)}</ul>
    {!preparation&&<p>{refs.length?'正在建立特徵索引…':'本輪沒有可用的參考照片。'}</p>}
    <RecognitionInspector diagnostic={diagnostic} preparation={preparation} frame={sample} references={diagnosticRefs} precompiled/>
    <p>最近 4 秒內的 5 次取樣，須有 3 次通過同節點檢查；短暫漏判可接續，出現不同節點或位置混淆就重新確認。辨識附近地標不會自動改變位置，也不會解鎖其他節點的抵達按鈕。</p>
   </details>
  </footer>}
 </main>;
}
