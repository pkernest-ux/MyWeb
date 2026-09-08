export const wrap=(n:number)=>((n%360)+360)%360;
export const delta=(n:number)=>((n+540)%360)-180;
export const angle=(a:any,b:any)=>wrap(Math.atan2(b.physX-a.physX,b.physY-a.physY)*180/Math.PI);
export type PublicReference={id:string;nodeId:string;imageUrl:string;bearing:number|null;packUrl?:string;packError?:string;fishnetPackUrl?:string;fishnetError?:string};
const optional=(v:unknown)=>v!==null&&v!==undefined&&v!==''&&Number.isFinite(Number(v))?wrap(Number(v)):null;
export function publicReferences(nodes:any[]):PublicReference[]{
 const result:PublicReference[]=[];
 for(const n of nodes.filter((n,i,a)=>n&&a.findIndex(x=>x?.id===n.id)===i)){
  if(Array.isArray(n.recognitionRefs)){
   for(const r of n.recognitionRefs)result.push({id:r.id,nodeId:n.id,imageUrl:'',bearing:optional(r.bearing),packUrl:r.packUrl,packError:r.error,fishnetPackUrl:r.fishnetPackUrl,fishnetError:r.fishnetError});
   continue;
  }
  for(const o of n.fieldObservations||[])if(typeof o.imageUrl==='string'&&o.imageUrl)result.push({id:JSON.stringify([n.id,o.id]),nodeId:n.id,imageUrl:o.imageUrl,bearing:optional(o.mapBearing)});
  for(const [key,url] of [['main',n.imageUrl],['guide',n.guideImageUrl]])if(typeof url==='string'&&url&&!result.some(r=>r.nodeId===n.id&&r.imageUrl===url))result.push({id:JSON.stringify([n.id,key]),nodeId:n.id,imageUrl:url,bearing:optional(n.guideReferenceBearing)});
 }
 return result;
}
export function confirmProgress(index:number,length:number,confirmed:boolean){return confirmed?Math.min(index+1,length):index;}

// Keep every endpoint photo first. Spend the remaining budget fairly across
// route-interior and one-hop neighbours, never search unrelated floors.
export function publicRecognitionScope(graph:any,leg:any,current:any,target:any,limit=64){
 const eligible=(n:any)=>n&&n.fId===current?.fId&&n.enabled!==false&&n.navigable!==false;
 // Route previews may insert a synthetic "manual-origin" copying the start's
 // photos. Only index persisted nodes; otherwise identical photos compete as
 // two different places and every start match becomes ambiguous.
 const resolve=(n:any)=>graph.nodes[n?.id];
 const route=[current,target,...(leg?.points||[]).map(resolve)].filter(eligible);
 const adjacent=route.flatMap((n:any)=>Object.keys(graph.adjacency[n.id]||{}).map(id=>graph.nodes[id])).filter(eligible);
 const nodes=[...route,...adjacent].filter((n,i,a)=>a.findIndex(x=>x.id===n.id)===i);
 const endpoints=nodes.filter(n=>n.id===current?.id||n.id===target?.id);
 const others=nodes.filter(n=>!endpoints.includes(n));
 const primary=publicReferences(endpoints),groups=others.map(n=>publicReferences([n]));
 const secondary:PublicReference[]=[];
 for(let i=0;i<Math.max(0,...groups.map(g=>g.length));i++)for(const group of groups)if(group[i])secondary.push(group[i]);
 const all=[...primary,...secondary],references=all.slice(0,Math.max(0,limit));
 return {references,nodes,total:all.length,omitted:all.length-references.length};
}
