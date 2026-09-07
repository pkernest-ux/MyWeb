import {readFile,writeFile,mkdir,realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import sharp from 'sharp';

const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
let compiler;
async function getCompiler(){
 if(!compiler){const source=await readFile(path.join(repo,'src/ar-v4-image-recognition.worker.ts'),'utf8');const exports={};
  vm.runInNewContext(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,{exports,require,TextEncoder,TextDecoder,self:{addEventListener(){},postMessage(){}}});compiler=exports;
 }return compiler;
}
const pick=(o,keys)=>Object.fromEntries(keys.filter(k=>o[k]!==undefined).map(k=>[k,o[k]]));
const nodeKeys='id x y title code description enabled navigable canStop publicSelectable isVerticalShaft shaftId guideTitle guideInstruction guideExternalUrl guideDirectionMode guideReferenceBearing guideDeviceHeading guideHeadingAccuracy guideHeadingCapturedAt'.split(' ');
async function imageBytes(url,rootDir){
 if(typeof url!=='string')throw new Error('沒有照片');
 const data=url.match(/^data:image\/(?:jpeg|png|webp|gif|avif);base64,([A-Za-z0-9+/=\s]+)$/);
 if(data){if(data[1].length>32*1024*1024)throw new Error('照片超過發布上限');return Buffer.from(data[1],'base64');}
 // Never fetch arbitrary user URLs from the build server (SSRF/privacy).
 if(!/^(?:\.\/)?assets\/[A-Za-z0-9_./ -]+$/.test(url)||url.includes('..'))throw new Error('此照片需匯入工作台後重新發布（不從外部網址抓圖）');
 const file=await realpath(path.resolve(rootDir,url));if(!file.startsWith(await realpath(rootDir)+path.sep))throw new Error('照片路徑不合法');return readFile(file);
}

// Called by CI after an admin save, or by the local backend. Serial extraction
// bounds decoded-image memory; no reference pixels enter the public catalog.
export async function compilePublicCatalog(data,{rootDir=repo}={}){
 const engine=await getCompiler(),assets=new Map(),failures=[];let targetCount=0,featureBytes=0;
 const revision=hash(JSON.stringify(data));const projects=Array.isArray(data.projects)?data.projects:[data];
 const publish=(folder,bytes,ext)=>{const url=`assets/ar-v4-public/${folder}/${hash(bytes)}.${ext}`;assets.set(url,bytes);return './'+url;};
 async function mapImage(url){
  if(!url)return '';
  if(!url.startsWith('data:')&&!url.startsWith('assets/')&&!url.startsWith('./assets/'))return /^https:\/\//.test(url)?url:'';
  const bytes=await imageBytes(url,rootDir);return publish('maps',await sharp(bytes,{limitInputPixels:64000000}).rotate().resize(2048,2048,{fit:'inside',withoutEnlargement:true}).jpeg({quality:85}).toBuffer(),'jpg');
 }
 async function compileNode(raw){
  const node={...pick(raw,nodeKeys),recognitionRefs:[]};const refs=[];
  for(const o of raw.fieldObservations||[])if(o.imageUrl)refs.push({id:JSON.stringify([raw.id,o.id]),imageUrl:o.imageUrl,bearing:o.mapBearing??null});
  for(const [key,url]of [['main',raw.imageUrl],['guide',raw.guideImageUrl]])if(url&&!refs.some(r=>r.imageUrl===url))refs.push({id:JSON.stringify([raw.id,key]),imageUrl:url,bearing:raw.guideReferenceBearing??null});
  for(const r of refs){
   const ref={id:r.id,nodeId:raw.id,bearing:r.bearing};
   try{
    const bytes=await imageBytes(r.imageUrl,rootDir);
    const {data:pixels,info}=await sharp(bytes,{limitInputPixels:64000000}).rotate().resize(420,420,{fit:'inside',withoutEnlargement:true}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const payload={id:r.id,nodeId:raw.id,width:info.width,height:info.height,pixels:pixels.buffer.slice(pixels.byteOffset,pixels.byteOffset+pixels.byteLength)};
    const pack=engine.compileFeatureTarget(payload);engine.decodeFeatureTarget(pack,payload);
    const packed=Buffer.from(pack);ref.packUrl=publish('packs',packed,'bin');ref.bytes=packed.length;featureBytes+=packed.length;targetCount++;
   }catch(e){ref.error=String(e.message).slice(0,180);failures.push({nodeId:raw.id,id:r.id,error:ref.error});}
   node.recognitionRefs.push(ref);
  }
  // Preserve V3-style segment boundaries formerly introduced by a guide photo.
  if((raw.imageUrl||raw.guideImageUrl)&&!node.guideTitle)node.guideTitle=raw.title||raw.code||'地標';
  return node;
 }
 const result=[];
 for(const p of projects){
  const project={project:pick(p.project||{},['id','name','updatedAt']),systemConfig:{},buildings:[]};
  for(const b of p.buildings||[]){const building={id:b.id,name:b.name,floors:[]};
   for(const f of b.floors||[]){const floor={...pick(f,['id','name','bounds','mapUpHeading']),imageUrl:await mapImage(f.imageUrl),navigationImageUrl:await mapImage(f.navigationImageUrl),markers:[],waypoints:[],edges:(f.edges||[]).map(e=>pick(e,['id','start','end']))};
    for(const n of f.markers||[])floor.markers.push(await compileNode(n));
    for(const n of f.waypoints||[])floor.waypoints.push(await compileNode(n));
    building.floors.push(floor);
   }project.buildings.push(building);
  }result.push(project);
 }
 const catalog={schema:'v4-public-1',algorithm:engine.PACK_ALGORITHM,revision,projects:result,stats:{targetCount,featureBytes,failedCount:failures.length}};
 assets.set('assets/ar-v4-public/catalog.json',Buffer.from(JSON.stringify(catalog)));
 return {catalog,assets,failures};
}

if(process.argv[1]&&fileURLToPath(import.meta.url)===path.resolve(process.argv[1])){
 const data=JSON.parse(await readFile(path.join(repo,'ar-data.json'),'utf8'));
 const result=await compilePublicCatalog(data);
 // Content-addressed assets first; publish the manifest only after all succeed.
 for(const [name,bytes]of result.assets){const file=path.join(repo,name);await mkdir(path.dirname(file),{recursive:true});await writeFile(file,bytes);}
 console.log(JSON.stringify({revision:result.catalog.revision,...result.catalog.stats,catalogBytes:result.assets.get('assets/ar-v4-public/catalog.json').length,failures:result.failures},null,2));
}
