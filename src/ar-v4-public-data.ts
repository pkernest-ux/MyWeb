export async function loadPublicCatalog(){
 const response=await fetch('./assets/ar-v4-public/catalog.json',{cache:'no-store',signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw new Error('民眾辨識資料尚未發布，請稍後重試；不會改下載原始照片。');
 const data=await response.json();
 if(data.schema!=='v4-public-1'||data.algorithm!=='v4-jsfeat-orb-1'||!Array.isArray(data.projects))throw new Error('辨識資料版本不相容，請重新整理。');
 const ids=new Set<string>();
 for(const p of data.projects){
  const id=p?.project?.id;
  if(typeof id!=='string'||!id||ids.has(id))throw new Error('場域清單不完整，請通知管理人員重新發布。');
  ids.add(id);
 }
 return data;
}

export function publicProjectFromCatalog(data:any,id:string){
 const project=data.projects.find((p:any)=>p.project?.id===id);
 if(!project)throw new Error('此連結的場域不存在或尚未發布，請重新選擇場域。');
 if(!project?.buildings?.length)throw new Error('此場域尚未發布民眾導引資料。');
 return {...project,_public:{revision:data.revision,stats:data.stats}};
}

export async function loadPublicProject(){
 const data=await loadPublicCatalog();
 const id=new URLSearchParams(location.search).get('projectId');
 if(!id)throw new Error('請先選擇場域。');
 return publicProjectFromCatalog(data,id);
}
