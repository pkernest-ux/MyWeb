export async function loadPublicProject(){
 const response=await fetch('./assets/ar-v4-public/catalog.json',{cache:'no-store',signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw new Error('民眾辨識資料尚未發布，請稍後重試；不會改下載原始照片。');
 const data=await response.json();
 if(data.schema!=='v4-public-1'||data.algorithm!=='v4-jsfeat-orb-1'||!Array.isArray(data.projects))throw new Error('辨識資料版本不相容，請重新整理。');
 const id=new URLSearchParams(location.search).get('projectId');
 const project=id?data.projects.find((p:any)=>p.project?.id===id):data.projects.find((p:any)=>p.project?.name?.includes('新竹市政府'))||data.projects[0];
 if(!project?.buildings?.length)throw new Error('此場域尚未發布民眾導引資料。');
 return {...project,_public:{revision:data.revision,stats:data.stats}};
}
