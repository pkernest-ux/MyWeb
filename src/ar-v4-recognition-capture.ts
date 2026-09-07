import type {Diagnostic,RecognitionProfile} from './ar-v4-recognition-types';

export const MATCHER_REVISION='v4-fishnet-20260907';
type Context={mode:'public'|'field';profile?:RecognitionProfile;revision?:string;nodeId?:string;targetNodeId?:string;referenceIds:string[];packUrls?:string[];sourceWidth:number;sourceHeight:number};
// One uncompressed analysis frame in memory, not a recording. No storage,
// network, original reference photos, device IDs, tokens or page query strings.
export class RecognitionCapture {
 private canvas:HTMLCanvasElement|null=null;
 private data:{capturedAt:string;diagnostic:Diagnostic;context:Context}|null=null;
 get ready(){return Boolean(this.data);}
 record(frame:HTMLCanvasElement,diagnostic:Diagnostic,context:Context){
  this.canvas ||= document.createElement('canvas');
  this.canvas.width=frame.width;this.canvas.height=frame.height;
  this.canvas.getContext('2d')!.drawImage(frame,0,0);
  this.data={capturedAt:new Date().toISOString(),diagnostic:structuredClone(diagnostic),context:structuredClone(context)};
 }
 clear(){if(this.canvas){this.canvas.width=0;this.canvas.height=0;}this.canvas=null;this.data=null;}
 export(){
  if(!this.data||!this.canvas)throw new Error('請先展開診斷並等待一次取樣');
  return {schema:'v4-recognition-capture-1',matcher:MATCHER_REVISION,...this.data,
   frame:{width:this.canvas.width,height:this.canvas.height,imageUrl:this.canvas.toDataURL('image/png')},
   note:'這是送入辨識器的縮小相機影格，不含介面遮擋，不是相機原始全解析照片。僅供人工選擇後匯出。'};
 }
 download(){
  if(!this.ready||!window.confirm('檔案包含現場相機畫面，可能含有人像或非公開資訊。只會儲存到本機，不會自動上傳。要匯出嗎？'))return;
  const url=URL.createObjectURL(new Blob([JSON.stringify(this.export())],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download=`v4-recognition-${Date.now()}.json`;a.click();
  window.setTimeout(()=>URL.revokeObjectURL(url),10000);
 }
}
