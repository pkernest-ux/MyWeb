import React,{useEffect,useRef,useState} from 'react';
import {Navigation2} from 'lucide-react';
import {floorImageHeadingTransform,projectGuidanceRoute,projectHeadingUpPoint} from './ar-v4-guidance-geometry';

const PIKA='./assets/ar/mascot-walking-small.png';
const coordinates=(points:{x:number;y:number}[])=>points.map(p=>`${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');

/** These SVGs visualize live route data, not decorative illustrations. Both
 * projections receive exactly the same estimated origin and optical heading. */
export function GuidanceScene({sample,heading,pitchDownDeg,width,height,label,routeKey,progress,verticalFovDeg}:any){
 const projection=sample?.valid&&heading!==null?projectGuidanceRoute(sample,{width,height,headingDeg:heading,pitchDownDeg,verticalFovDeg,cameraHeight:1.45,routeWidth:.7}):null;
 if(!projection?.valid)return null;
 const endpoint=projection.endpoint;
 const size=endpoint?Math.max(48,Math.min(94,260/Math.max(2,endpoint.depth))):64;
 return <div className="v4-guidance-scene" data-testid="guidance-scene">
  <svg className="v4-ar-path" viewBox={`0 0 ${width} ${height}`} aria-label="相機上的近似路徑投影" data-heading={heading.toFixed(2)} data-progress-m={progress.toFixed(2)} data-route-key={routeKey}>
   {projection.polygons.map((polygon:any,i:number)=><polygon key={i} points={coordinates(polygon)} className="v4-route-ribbon"/>)}
   {projection.borders.map((line:any,i:number)=><polyline key={i} points={coordinates(line)} className="v4-route-border"/>)}
   {projection.chevrons.map((line:any,i:number)=><polygon key={i} points={coordinates(line)} className="v4-route-chevron"/>)}
   {endpoint&&<ellipse cx={endpoint.x} cy={endpoint.y} rx={size*.55} ry={Math.max(4,size*.12)} fill="#168bf0" stroke="white" strokeWidth="2"/>}
  </svg>
  {endpoint?<div className="v4-pika-endpoint" data-endpoint-x={endpoint.x.toFixed(2)} data-endpoint-y={endpoint.y.toFixed(2)} style={{left:endpoint.x,top:endpoint.y,width:size}}>
   <div className="v4-pika-label"><strong>{label}</strong><span>約 {sample.remainingDistance.toFixed(1)} 公尺</span></div>
   <div className="v4-pika-art" style={{height:size*196/153}}><img src={PIKA} alt="皮卡在下一節點等你"/></div>
  </div>:<div className="v4-route-offscreen" role="status"><Navigation2 size={20} style={{transform:`rotate(${projection.relativeBearing??0}deg)`}}/>{projection.offscreen==='behind'?'皮卡在後方，請轉身':projection.offscreen==='left'?'向左轉，尋找皮卡':projection.offscreen==='right'?'向右轉，尋找皮卡':projection.offscreen==='near'?'接近下一節點，請核對位置':'請調整手機俯仰，查看前方路線'}</div>}
 </div>;
}

export function GuidanceMap({floor,sample,heading,allPoints,routeKey,progress,targetLabel}:any){
 const element=useRef<SVGSVGElement>(null);
 const [size,setSize]=useState({width:390,height:180});
 useEffect(()=>{const el=element.current;if(!el)return;const observer=new ResizeObserver(()=>{const r=el.getBoundingClientRect();if(r.width>0&&r.height>0)setSize({width:r.width,height:r.height});});observer.observe(el);return()=>observer.disconnect();},[]);
 const {width,height}=size;
 const origin=sample?.valid?sample.origin:null;
 if(!origin)return <div className="v4-guidance-map-empty">目前樓層没有可顯示的路徑</div>;
 const facing=heading??0;
 const visiblePoints=sample.valid?sample.remaining:[];
 // Fit the rotated remaining route in the actual viewport; a fixed SVG with
 // slice can crop out the visitor on desktop and landscape phones.
 const offsets=visiblePoints.map((p:any)=>projectHeadingUpPoint(p,origin,{headingDeg:facing,pixelsPerMeter:1,anchorX:0,anchorY:0})).filter(Boolean);
 const minX=Math.min(0,...offsets.map((p:any)=>p.x)),maxX=Math.max(0,...offsets.map((p:any)=>p.x));
 const minY=Math.min(0,...offsets.map((p:any)=>p.y)),maxY=Math.max(0,...offsets.map((p:any)=>p.y));
 const pixelsPerMeter=Math.max(.1,Math.min(12,(width-70)/Math.max(8,maxX-minX),(height-90)/Math.max(8,maxY-minY)));
 const view={headingDeg:facing,pixelsPerMeter,anchorX:width/2-(minX+maxX)/2*pixelsPerMeter,anchorY:50+(height-80)/2-(minY+maxY)/2*pixelsPerMeter};
 const project=(point:any)=>projectHeadingUpPoint(point,origin,view);
 const onFloor=(p:any)=>p.fId===origin.fId;
 const path=visiblePoints.map(project).filter(Boolean);
 const full:any[][]=[];let run:any[]=[];
 for(const point of allPoints||[]){if(onFloor(point)){const p=project(point);if(p)run.push(p);}else{if(run.length>1)full.push(run);run=[];}}
 if(run.length>1)full.push(run);
 const end=project(sample.endpoint);
 const transform=floorImageHeadingTransform(floor?.bounds||{blX:0,blY:0,trX:100,trY:100},{width:1000,height:1000},origin,view);
 const image=floor?.navigationImageUrl||floor?.imageUrl;
 return <svg ref={element} className="v4-guidance-map" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="依手機朝向旋轉的目前位置與路徑" data-heading={facing.toFixed(2)} data-progress-m={progress.toFixed(2)} data-route-key={routeKey} data-map-rotation={(-facing).toFixed(2)}>
  <rect width={width} height={height} fill="#edf0ed"/>
  {image&&transform&&<image href={image} width="1000" height="1000" preserveAspectRatio="none" opacity=".65" transform={`matrix(${transform.a} ${transform.b} ${transform.c} ${transform.d} ${transform.e} ${transform.f})`}/>}
  {full.map((part,i)=><polyline key={i} points={coordinates(part)} fill="none" stroke="#829197" strokeWidth="4" opacity=".6"/>)}
  {path.length>1&&<><polyline points={coordinates(path)} fill="none" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/><polyline points={coordinates(path)} fill="none" stroke="#147bec" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/></>}
  {end&&<g><circle cx={end.x} cy={end.y} r="8" fill="#147bec" stroke="white" strokeWidth="2"/><svg x={end.x-15} y={end.y-38} width="30" height="38" viewBox="76 7 153 196"><image href={PIKA} width="320" height="213"><title>{targetLabel}</title></image></svg></g>}
  <g className="v4-map-user" transform={`translate(${view.anchorX-15} ${view.anchorY-16})`}><Navigation2 width={30} height={30} fill="#147bec" stroke="white" strokeWidth={1.5}/></g>
  {heading===null&&<text x="14" y={height-8} fill="#36534b" fontSize="10">地圖朝上 · 尚未校正方向</text>}
 </svg>;
}
