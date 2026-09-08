import type { Diagnostic, Preparation, DetectionReport, RecognitionProfile, FishnetProjection } from './ar-v4-recognition-types';
import {fetchFeaturePack} from './ar-v4-feature-cache';
export type RecognitionPoint = {
  x: number;
  y: number;
};

export type RecognitionDetection = {
  targetId?: string;
  corners: [RecognitionPoint, RecognitionPoint, RecognitionPoint, RecognitionPoint];
  inliers: number;
  matchCount: number;
  confidence: number;
};

export type RecognitionTarget = {
  id: string;
  nodeId?: string;
  imageUrl: string;
  projection?: FishnetProjection;
};

export type OrbImageTrackerOptions = {
  /** Allow a field photograph to fill the frame; legacy marker tracking remains the default. */
  fullScene?: boolean;
  profile?: RecognitionProfile;
};

type WorkerResult = DetectionReport | Preparation;

type WorkerResponse = {
  requestId: number;
  ok: boolean;
  result?: WorkerResult;
  error?: string;
};

type PendingRequest = {
  resolve: (value: WorkerResult) => void;
  reject: (error: Error) => void;
  timeoutId: number;
};

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    const timer = window.setTimeout(() => { image.src = ''; reject(new Error('參考照片載入逾時')); }, 15000);
    if (!url.startsWith("data:") && !url.startsWith("blob:")) image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => { window.clearTimeout(timer); resolve(image); };
    image.onerror = () => { window.clearTimeout(timer); reject(new Error("無法載入此節點的辨識照片")); };
    image.src = url;
  });

export const recognitionFrameSize = (width:number,height:number,maxSide=640) => {
  const scale=Math.min(1,maxSide/Math.max(1,width,height));
  return {width:Math.max(1,Math.round(width*scale)),height:Math.max(1,Math.round(height*scale))};
};
const imageToPixels = (image: HTMLImageElement) => {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  // Reference extraction must stay identical to the published 420px packs.
  const {width,height} = recognitionFrameSize(sourceWidth,sourceHeight,420);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("瀏覽器無法建立圖像辨識畫布");
  context.drawImage(image, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  return { width, height, pixels: imageData.data.buffer };
};

export class OrbImageTracker {
  private loadController: AbortController | null = null;
  private generation = 0;
  public preparation: Preparation | null = null;
  public diagnostics: Diagnostic | null = null;
  private worker: Worker | null = null;
  private prepared = false;
  private requestId = 0;
  private pending = new Map<number, PendingRequest>();
  private readonly fullScene: boolean;
  public readonly profile: RecognitionProfile;

  constructor(options: OrbImageTrackerOptions = {}) {
    this.fullScene = options.fullScene === true;
    this.profile = options.profile === 'fishnet' ? 'fishnet' : 'legacy';
  }

  async prepare(imageUrl: string) {
    await this.prepareMany([{ id: "target", imageUrl }]);
  }

  async preparePacked(targets:{id:string;nodeId:string;packUrl?:string;packError?:string;fishnetPackUrl?:string;fishnetError?:string}[]){
    this.dispose();const generation=this.generation;
    this.preparation=null;this.diagnostics=null;
    const controller=new AbortController();this.loadController=controller;
    const timer=setTimeout(()=>controller.abort(),45000);
    const ready:{id:string;nodeId:string;bytes:ArrayBuffer}[]=[],failures:Preparation['failures']=[];
    const unique=targets.filter((t,i,a)=>a.findIndex(x=>x.id===t.id)===i).slice(0,64);let next=0;
    const load=async()=>{while(next<unique.length&&!controller.signal.aborted){const t=unique[next++];try{
      const url=this.profile==='fishnet'?t.fishnetPackUrl:t.packUrl;
      if(!url)throw new Error((this.profile==='fishnet'?t.fishnetError:t.packError)||(this.profile==='fishnet'?'此照片尚未發布 Fishnet 索引；可切原版對照':'此照片尚未發布特徵包'));
      ready.push({id:t.id,nodeId:t.nodeId,bytes:await fetchFeaturePack(url,controller.signal)});
    }catch(e:any){failures.push({id:t.id,reason:e.message||'特徵包載入失敗'});}}};
    try{await Promise.all([load(),load()]);}finally{clearTimeout(timer);}
    if(generation!==this.generation)throw new Error('圖像辨識已停止');
    for(const t of unique.slice(next))failures.push({id:t.id,reason:'特徵包載入逾時'});
    if(!ready.length){this.preparation={prepared:true,targetCount:0,skippedTargetCount:failures.length,targets:[],failures};throw new Error('沒有可用的特徵包，請稍後重試或使用地圖');}
    const worker=new Worker(new URL('./ar-v4-image-recognition.worker.ts',import.meta.url),{name:'v4-local-features',type:'module'});
    this.worker=worker;worker.addEventListener('message',this.handleMessage);worker.addEventListener('error',this.handleWorkerError);
    const result=await this.request({type:'preparePacked',targets:ready,profile:this.profile},ready.map(t=>t.bytes),10000);
    if(!('prepared' in result))throw new Error('特徵包回應格式錯誤');
    this.preparation={...result,failures:[...failures,...result.failures],skippedTargetCount:result.skippedTargetCount+failures.length};
    this.prepared=result.targetCount>0;if(!this.prepared)throw new Error('特徵包不相容或損壞，請重新發布');return this.preparation;
  }

  async prepareMany(targets: RecognitionTarget[]) {
    this.dispose();
    const generation = this.generation;
    this.preparation = null; this.diagnostics = null;
    const uniqueTargets = targets.filter(
      (target, index, allTargets) =>
        Boolean(target.id && target.imageUrl) &&
        allTargets.findIndex((candidate) => candidate.id === target.id) === index,
    );
    if (!uniqueTargets.length) throw new Error("沒有可供辨識的路徑節點照片");

    const targetResults = await Promise.allSettled(
      uniqueTargets.map(async (target) => {
        const image = await loadImage(target.imageUrl);
        return { id: target.id, nodeId: target.nodeId, projection:target.projection, ...imageToPixels(image) };
      }),
    );
    // Leaving the camera while images load must not create a late orphan worker.
    if (generation !== this.generation) throw new Error('圖像辨識已停止');
    const preparedTargets = targetResults
      .filter((result): result is PromiseFulfilledResult<{ id: string; nodeId: string | undefined; projection: FishnetProjection | undefined; width: number; height: number; pixels: ArrayBuffer }> =>
        result.status === "fulfilled",
      )
      .map((result) => result.value);
    const loadFailures = targetResults.flatMap((r,i)=>r.status==='rejected'?[{id:uniqueTargets[i].id,reason:r.reason?.message||'照片載入失敗'}]:[]);
    if (!preparedTargets.length) {
      this.preparation={prepared:true,targetCount:0,skippedTargetCount:loadFailures.length,targets:[],failures:loadFailures};
      throw new Error('沒有成功載入的參考照，請查看辨識診斷');
    }
    const worker = new Worker(new URL("./ar-v4-image-recognition.worker.ts", import.meta.url), {
      name: "v4-local-features",
      type: "module",
    });
    this.worker = worker;
    worker.addEventListener("message", this.handleMessage);
    worker.addEventListener("error", this.handleWorkerError);

    const result = await this.request(
      {
        type: "prepareMany",
        targets: preparedTargets,
        profile: this.profile,
      },
      preparedTargets.map((target) => target.pixels),
      60_000,
    );
    if (!('prepared' in result)) throw new Error('特徵索引回應格式錯誤');
    this.preparation={...result,failures:[...loadFailures,...result.failures],skippedTargetCount:loadFailures.length+result.skippedTargetCount};
    this.prepared = result.targetCount > 0;
    if(!this.prepared)throw new Error('參考照已載入，但沒有足夠特徵；請查看辨識診斷');
    return this.preparation;
  }

  async detect(frameCanvas: HTMLCanvasElement): Promise<RecognitionDetection | null> {
    if (!this.worker || !this.prepared) return null;
    const context = frameCanvas.getContext("2d", { willReadFrequently: true });
    if (!context) return null;
    const imageData = context.getImageData(0, 0, frameCanvas.width, frameCanvas.height);
    const result = await this.request(
      {
        type: "detect",
        width: frameCanvas.width,
        height: frameCanvas.height,
        pixels: imageData.data.buffer,
        fullScene: this.fullScene,
        profile: this.profile,
      },
      [imageData.data.buffer],
      10_000,
    );
    if (!('diagnostics' in result)) throw new Error('辨識回應格式錯誤');
    this.diagnostics=result.diagnostics;
    return result.detection;
  }

  dispose() {
    this.generation++;
    this.loadController?.abort();this.loadController=null;
    const disposedError = new Error("圖像辨識已停止");
    this.pending.forEach(({ reject, timeoutId }) => {
      window.clearTimeout(timeoutId);
      reject(disposedError);
    });
    this.pending.clear();
    if (this.worker) {
      this.worker.removeEventListener("message", this.handleMessage);
      this.worker.removeEventListener("error", this.handleWorkerError);
      this.worker.terminate();
    }
    this.worker = null;
    this.prepared = false;
  }

  private request(
    message: Record<string, unknown>,
    transfer: Transferable[],
    timeoutMs: number,
  ): Promise<WorkerResult> {
    const worker = this.worker;
    if (!worker) return Promise.reject(new Error("圖像辨識尚未啟動"));
    const requestId = ++this.requestId;
    return new Promise<WorkerResult>((resolve, reject) => {
      const timeoutId = window.setTimeout(() => {
        this.pending.delete(requestId);
        reject(new Error("圖像辨識處理逾時"));
      }, timeoutMs);
      this.pending.set(requestId, { resolve, reject, timeoutId });
      worker.postMessage({ ...message, requestId }, transfer);
    });
  }

  private handleMessage = (event: MessageEvent<WorkerResponse>) => {
    const response = event.data;
    const pending = this.pending.get(response.requestId);
    if (!pending) return;
    window.clearTimeout(pending.timeoutId);
    this.pending.delete(response.requestId);
    if (!response.ok) {
      pending.reject(new Error(response.error || "圖像辨識處理失敗"));
      return;
    }
    pending.resolve(response.result ?? null);
  };

  private handleWorkerError = (event: ErrorEvent) => {
    const error = new Error(event.message || "圖像辨識元件無法啟動");
    this.pending.forEach(({ reject, timeoutId }) => {
      window.clearTimeout(timeoutId);
      reject(error);
    });
    this.pending.clear();
    this.prepared = false;
  };
}
