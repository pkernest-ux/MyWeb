export type RecognitionPoint = {
  x: number;
  y: number;
};

export type RecognitionDetection = {
  corners: [RecognitionPoint, RecognitionPoint, RecognitionPoint, RecognitionPoint];
  inliers: number;
  matchCount: number;
  confidence: number;
};

type WorkerResult = RecognitionDetection | null | { prepared: true };

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
    if (!url.startsWith("data:") && !url.startsWith("blob:")) image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("無法載入此節點的辨識照片"));
    image.src = url;
  });

const imageToPixels = (image: HTMLImageElement) => {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const scale = Math.min(1, 420 / Math.max(1, sourceWidth));
  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));
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
  private worker: Worker | null = null;
  private prepared = false;
  private requestId = 0;
  private pending = new Map<number, PendingRequest>();

  async prepare(imageUrl: string) {
    this.dispose();
    const image = await loadImage(imageUrl);
    const target = imageToPixels(image);
    const worker = new Worker(new URL("./ar-v3-image-recognition.worker.ts", import.meta.url), {
      name: "v3-image-recognition",
      type: "module",
    });
    this.worker = worker;
    worker.addEventListener("message", this.handleMessage);
    worker.addEventListener("error", this.handleWorkerError);

    await this.request(
      {
        type: "prepare",
        width: target.width,
        height: target.height,
        pixels: target.pixels,
      },
      [target.pixels],
      60_000,
    );
    this.prepared = true;
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
      },
      [imageData.data.buffer],
      10_000,
    );
    return result && "corners" in result ? result : null;
  }

  dispose() {
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
