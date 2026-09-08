import {readFile,realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {loadV4Source} from './ar-v4-worker-runtime.mjs';

const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

// Local replay only. Never fetch URLs embedded in an imported diagnostic file.
export async function replayCapture(capture,{rootDir=repo}={}){
 if(capture?.schema!=='v4-recognition-capture-1'||!['v4-multiscale-20260907','v4-fishnet-20260907'].includes(capture.matcher))throw Error('不相容的診斷版本');
 const profile=capture.matcher==='v4-multiscale-20260907'?'legacy':capture.context?.profile;
 if(!['legacy','fishnet'].includes(profile)||(capture.matcher==='v4-multiscale-20260907'&&capture.context?.profile&&capture.context.profile!=='legacy'))throw Error('不相容的辨識模式');
 const f=capture.frame,urls=capture.context?.packUrls,ids=capture.context?.referenceIds;
 if(!f||!Number.isInteger(f.width)||!Number.isInteger(f.height)||f.width<1||f.height<1||f.width>640||f.height>640)throw Error('影格尺寸不合法');
 if(typeof f.imageUrl!=='string'||f.imageUrl.length>4*1024*1024||!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(f.imageUrl))throw Error('需要 PNG 辨識影格');
 if(!Array.isArray(urls)||!urls.length||urls.length>64||!Array.isArray(ids)||ids.length>64)throw Error('需要民眾端的特徵包清單');
 const root=await realpath(rootDir);
 const targets=await Promise.all(urls.map(async url=>{
  const match=typeof url==='string'&&url.match(/^\.\/assets\/ar-v4-public\/packs\/([a-f0-9]{64})\.bin$/);
  if(!match)throw Error('不允許外部網址或非特徵包路徑');
  const filename=await realpath(path.resolve(root,url));if(!filename.startsWith(root+path.sep))throw Error('特徵包路徑超出範圍');
  const b=await readFile(filename);if(b.length<8||b.length>65536||createHash('sha256').update(b).digest('hex')!==match[1])throw Error('特徵包雜湊或大小不正確');
  const length=b.readUInt32LE(0);if(length<2||length>4096||length+4>b.length)throw Error('特徵包標頭不正確');
  const h=JSON.parse(b.subarray(4,4+length).toString());if(!ids.includes(h.id))throw Error('特徵包不屬於這次搜尋範圍');
  return {id:h.id,nodeId:h.nodeId,bytes:b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength)};
 }));
 const png=Buffer.from(f.imageUrl.split(',')[1],'base64');
 const image=sharp(png,{limitInputPixels:640*640});const meta=await image.metadata();
 if(meta.format!=='png'||meta.width!==f.width||meta.height!==f.height)throw Error('影格內容與尺寸不一致');
 const pixels=await image.ensureAlpha().raw().toBuffer();
 let receive,response;
 loadV4Source('ar-v4-image-recognition.worker.ts',{self:{addEventListener(_,fn){receive=fn;},postMessage(r){response=r;}}});
 const send=data=>{receive({data:{requestId:1,...data}});if(!response.ok)throw Error(response.error);return response.result;};
 const prepared=send({type:'preparePacked',targets,profile});if(prepared.targetCount!==targets.length)throw Error('部分特徵包無法重播');
 const start=performance.now();
 const result=send({type:'detect',width:f.width,height:f.height,pixels:pixels.buffer.slice(pixels.byteOffset,pixels.byteOffset+pixels.byteLength),fullScene:true,profile});
 return {matcher:capture.matcher,profile,targetCount:prepared.targetCount,elapsedMs:Math.round(performance.now()-start),...structuredClone(result)};
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(!process.argv[2])throw Error('用法：node scripts/ar-v4-replay-capture.mjs <診斷.json> [包含特徵包的本機目錄]');
 const data=await readFile(process.argv[2]);if(data.length>5*1024*1024)throw Error('診斷檔案過大');
 console.log(JSON.stringify(await replayCapture(JSON.parse(data),{rootDir:process.argv[3]||repo}),null,2));
}
