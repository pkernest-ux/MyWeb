// Content-addressed binary packs, bounded persistent cache, two downloads at a
// time in the caller. Cache failure never prevents navigation or fetch retries.
const memory=new Map<string,ArrayBuffer>();
let dbPromise:Promise<IDBDatabase|null>|undefined;
function database(){
 return dbPromise??=new Promise(resolve=>{
  if(!globalThis.indexedDB){resolve(null);return;}
  try{const request=indexedDB.open('ar-v4-feature-packs-1',1);const timer=setTimeout(()=>resolve(null),1500);
   request.onupgradeneeded=()=>request.result.createObjectStore('packs',{keyPath:'url'});
   request.onsuccess=()=>{clearTimeout(timer);request.result.onversionchange=()=>request.result.close();resolve(request.result);};
   request.onerror=request.onblocked=()=>{clearTimeout(timer);resolve(null);};
  }catch{resolve(null);}
 });
}
async function readCache(url:string){
 if(memory.has(url))return memory.get(url)!;
 const db=await database();if(!db)return null;
 return new Promise<ArrayBuffer|null>(resolve=>{try{const r=db.transaction('packs').objectStore('packs').get(url);const timer=setTimeout(()=>resolve(null),1000);r.onsuccess=()=>{clearTimeout(timer);resolve(r.result?.bytes||null);};r.onerror=()=>{clearTimeout(timer);resolve(null);};}catch{resolve(null);}});
}
async function saveCache(url:string,bytes:ArrayBuffer){
 memory.set(url,bytes);while(memory.size>64)memory.delete(memory.keys().next().value!);
 const db=await database();if(!db)return;
 try{const store=db.transaction('packs','readwrite').objectStore('packs');store.put({url,bytes,time:Date.now()});const r=store.getAll();r.onsuccess=()=>{const rows=r.result.sort((a,b)=>b.time-a.time);for(const row of rows.slice(64))store.delete(row.url);};}catch{/* private mode / quota: keep memory cache only */}
}
export async function fetchFeaturePack(url:string,signal:AbortSignal):Promise<ArrayBuffer>{
 const parsed=new URL(url,location.href),match=parsed.pathname.match(/^\/assets\/ar-v4-public\/packs\/([a-f0-9]{64})\.bin$/);
 if(parsed.origin!==location.origin||!match)throw new Error('特徵包網址不合法');
 const valid=async(bytes:ArrayBuffer)=>bytes.byteLength<=65536&&bytes.byteLength>=8&&Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(n=>n.toString(16).padStart(2,'0')).join('')===match[1];
 if(signal.aborted)throw new Error('辨識已停止');
 const cached=await readCache(parsed.href);if(cached&&await valid(cached)){if(signal.aborted)throw new Error('辨識已停止');return cached.slice(0);}
 const response=await fetch(parsed.href,{signal,cache:'force-cache'});
 if(!response.ok)throw new Error(`特徵包載入失敗 (${response.status})，可重新啟用感測重試`);
 if(Number(response.headers.get('content-length'))>65536)throw new Error('特徵包超過上限');
 const bytes=await response.arrayBuffer();if(!await valid(bytes))throw new Error('特徵包校驗失敗，請重新整理或重新發布');
 if(signal.aborted)throw new Error('辨識已停止');void saveCache(parsed.href,bytes);return bytes.slice(0);
}
