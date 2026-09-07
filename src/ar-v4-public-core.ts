export const wrap=(n:number)=>((n%360)+360)%360;
export const delta=(n:number)=>((n+540)%360)-180;
export const angle=(a:any,b:any)=>wrap(Math.atan2(b.physX-a.physX,b.physY-a.physY)*180/Math.PI);
export type PublicReference={id:string;nodeId:string;imageUrl:string;bearing:number|null};
const optional=(v:unknown)=>v!==null&&v!==undefined&&v!==''&&Number.isFinite(Number(v))?wrap(Number(v)):null;
export function publicReferences(nodes:any[]):PublicReference[]{
 const result:PublicReference[]=[];
 for(const n of nodes.filter((n,i,a)=>n&&a.findIndex(x=>x?.id===n.id)===i)){
  for(const o of n.fieldObservations||[])if(typeof o.imageUrl==='string'&&o.imageUrl)result.push({id:JSON.stringify([n.id,o.id]),nodeId:n.id,imageUrl:o.imageUrl,bearing:optional(o.mapBearing)});
  for(const [key,url] of [['main',n.imageUrl],['guide',n.guideImageUrl]])if(typeof url==='string'&&url&&!result.some(r=>r.nodeId===n.id&&r.imageUrl===url))result.push({id:JSON.stringify([n.id,key]),nodeId:n.id,imageUrl:url,bearing:optional(n.guideReferenceBearing)});
 }
 return result;
}
export function confirmProgress(index:number,length:number,confirmed:boolean){return confirmed?Math.min(index+1,length):index;}
