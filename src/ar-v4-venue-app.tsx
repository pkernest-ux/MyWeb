import React, {useEffect, useState} from 'react';
import {ArrowRight, Building2, MapPin, Navigation, RefreshCw} from 'lucide-react';
import ARNavigationV3 from './ar-v3-app';
import PublicGuide from './ar-v4-public-guide';
import {loadPublicCatalog, publicProjectFromCatalog} from './ar-v4-public-data';
import './ar-v4-venues.css';

// Venue selection only uses the published, photo-free catalog. Never fall back
// to the private workbench API or raw ar-data.json on public phones.
export default function VenueApp(){
 const [catalog,setCatalog]=useState<any>(null);
 const [error,setError]=useState('');
 const [attempt,setAttempt]=useState(0);
 const [search,setSearch]=useState(location.search);
 useEffect(()=>{
  let active=true;
  setError('');setCatalog(null);
  loadPublicCatalog().then(data=>{if(active)setCatalog(data);}).catch(e=>{if(active)setError(e.message||'無法讀取場域');});
  return()=>{active=false;};
 },[attempt]);
 useEffect(()=>{
  const pop=()=>setSearch(location.search);
  window.addEventListener('popstate',pop);
  return()=>window.removeEventListener('popstate',pop);
 },[]);
 const choose=(id?:string)=>{
  const url=new URL(location.href);
  // A kiosk origin belongs to one venue only. Re-entering through the picker
  // starts a fresh route; a direct projectId + origin QR keeps its original URL.
  for(const key of ['projectId','origin','destination','destinationId','nodeId','floorId'])url.searchParams.delete(key);
  if(id)url.searchParams.set('projectId',id);
  history.pushState(null,'',url.pathname+url.search+url.hash);
  setSearch(url.search);
  window.scrollTo(0,0);
 };
 const id=new URLSearchParams(search).get('projectId');
 let selected:any=null,selectionError='';
 if(catalog&&id){try{selected=publicProjectFromCatalog(catalog,id);}catch(e){selectionError=(e as Error).message;}}
 if(selected)return <React.Fragment key={search}><ARNavigationV3 v4RouteFocus PublicGuide={PublicGuide}
  loadPublicProject={()=>Promise.resolve(selected)} onChooseVenue={()=>choose()}/></React.Fragment>;
 return <main className="v4-venues">
  <header className="v4-venues-brand"><Navigation size={25} aria-hidden="true"/><span>室內導引 <small>V4</small></span></header>
  <section className="v4-venues-content">
   <div className="v4-venues-heading"><span className="v4-venues-eyebrow">開始導覽</span><h1>選擇場域</h1><p>你今天想去哪裡？</p></div>
   {error||selectionError?<div className="v4-venues-state" role="alert"><MapPin aria-hidden="true"/><h2>{selectionError?'找不到此場域':'暫時無法取得場域'}</h2><p>{error||selectionError}</p><button onClick={()=>selectionError?choose():setAttempt(n=>n+1)}>{selectionError?'選擇其他場域':'重新讀取'}</button></div>
    :!catalog?<div className="v4-venues-state" role="status"><RefreshCw className="is-spinning" aria-hidden="true"/><p>正在讀取場域…</p></div>
    :!catalog.projects.length?<div className="v4-venues-state" role="status"><Building2 aria-hidden="true"/><h2>尚無已發布場域</h2><p>請稍後再試，或向現場人員確認。</p><button onClick={()=>setAttempt(n=>n+1)}>重新讀取</button></div>
    :<div className="v4-venue-grid">{catalog.projects.map((p:any)=>{
     const name=p.project.name||p.project.id;
     const floors=(p.buildings||[]).flatMap((b:any)=>b.floors||[]);
     const ready=floors.some((f:any)=>(f.markers||[]).length+(f.waypoints||[]).length>0);
     return <button key={p.project.id} className="v4-venue-card" aria-label={`進入 ${name}`} disabled={!ready} onClick={()=>choose(p.project.id)}>
      <span className="v4-venue-icon"><Building2 size={29} strokeWidth={1.6} aria-hidden="true"/></span>
      <span className="v4-venue-copy"><strong>{name}</strong><small>{ready?`${p.buildings.length} 棟建物 · ${floors.length} 個樓層`:'場域資料準備中'}</small></span>
      <ArrowRight size={22} aria-hidden="true"/>
     </button>;
    })}</div>}
   <p className="v4-venues-footnote">選擇場域 → 選目的地 → 預覽路線</p>
  </section>
 </main>;
}
