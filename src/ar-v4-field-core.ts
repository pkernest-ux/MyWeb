/** Local-only field capture and geometry utilities. No network or project writes occur here. */
export type FieldSensor = {
  heading: number | null;
  kind: "absolute" | "relative" | "unavailable";
  accuracy: number | null;
  capturedAt: string | null;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
  screenAngle: number;
};

export type ImageQuality = {
  /** Mean luminance in the range 0–255, not a recognition score. */
  brightness: number;
  /** Variance of a small-image luminance Laplacian, not a recognition score. */
  sharpness: number;
  warnings: string[];
};

export type FieldObservation = {
  id: string;
  capturedAt: string;
  source: "camera" | "upload" | "panorama-frame";
  imageUrl: string;
  width: number;
  height: number;
  mapBearing: number | null;
  headingSource: "manual" | "sensor-map" | "unconfirmed";
  sensor: FieldSensor;
  note: string;
  quality: ImageQuality;
  panorama?: { yaw: number; pitch: number; fov: number };
};

export type FieldNode = {
  [key: string]: any;
  id: string;
  x: number;
  y: number;
  nodeType: "marker" | "waypoint";
  isMarker: boolean;
  floorId: string;
  floorName: string;
  buildingId: string;
  buildingName: string;
  label: string;
};

export type FieldFloor = {
  [key: string]: any;
  id: string;
  name: string;
  buildingId: string;
  buildingName: string;
  nodes: FieldNode[];
};

export const EMPTY_SENSOR: Readonly<FieldSensor> = Object.freeze({
  heading: null, kind: "unavailable", accuracy: null, capturedAt: null,
  alpha: null, beta: null, gamma: null, screenAngle: 0,
});

const isNumber = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);
const optionalNumber = (value: unknown): number | null => isNumber(value) ? value : null;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function normalizeBearing(degrees: number): number {
  return isNumber(degrees) ? ((degrees % 360) + 360) % 360 : NaN;
}

export function signedAngle(degrees: number): number {
  return isNumber(degrees) ? normalizeBearing(degrees + 180) - 180 : NaN;
}

/** Map coordinates increase right/down; scales convert each axis into the same physical unit. */
export function bearingBetween(
  a: { x: number; y: number }, b: { x: number; y: number }, scaleX = 1, scaleY = 1,
): number | null {
  if (![a?.x, a?.y, b?.x, b?.y, scaleX, scaleY].every(isNumber) || scaleX <= 0 || scaleY <= 0) return null;
  const dx = (b.x - a.x) * scaleX;
  const dy = (b.y - a.y) * scaleY;
  return Math.hypot(dx, dy) < 1e-10 ? null : normalizeBearing(Math.atan2(dx, -dy) * 180 / Math.PI);
}

type OrientationReading = {
  alpha?: number | null; beta?: number | null; gamma?: number | null;
  absolute?: boolean; type?: string;
  webkitCompassHeading?: number; webkitCompassAccuracy?: number;
};

/** Relative alpha is useful for motion, but cannot establish geographic north. */
export function sensorFromEvent(event: OrientationReading, screenAngle = 0): FieldSensor {
  const alpha = optionalNumber(event.alpha);
  const beta = optionalNumber(event.beta);
  const gamma = optionalNumber(event.gamma);
  const angle = isNumber(screenAngle) ? normalizeBearing(screenAngle) : 0;
  const rawAccuracy = optionalNumber(event.webkitCompassAccuracy);
  const uncalibrated = rawAccuracy !== null && rawAccuracy < 0;
  const accuracy = uncalibrated ? null : rawAccuracy;
  const compass = optionalNumber(event.webkitCompassHeading);
  const base: FieldSensor = {
    heading: null, kind: "unavailable", accuracy,
    capturedAt: new Date().toISOString(), alpha, beta, gamma, screenAngle: angle,
  };
  // Apple documents a negative accuracy as an uncalibrated, unusable compass.
  if (uncalibrated) return base;
  if (compass !== null) {
    return { ...base, heading: normalizeBearing(compass + angle), kind: "absolute" };
  }
  if (alpha === null) return base;
  return {
    ...base,
    heading: normalizeBearing(360 - alpha + angle),
    kind: event.absolute === true || event.type === "deviceorientationabsolute" ? "absolute" : "relative",
  };
}

/** Compare freshness to capture time for a saved photograph, or to the current time for live readings. */
export function mapBearingFromSensor(sensor: FieldSensor, mapUpHeading: number | null, referenceMs = Date.now()): number | null {
  if (!sensor || sensor.kind !== "absolute" || !isNumber(sensor.heading) || !isNumber(mapUpHeading)) return null;
  if (sensor.accuracy !== null && (!isNumber(sensor.accuracy) || sensor.accuracy < 0)) return null;
  const capturedMs = sensor.capturedAt ? Date.parse(sensor.capturedAt) : NaN;
  const age = referenceMs - capturedMs;
  if (!isNumber(age) || age < 0 || age > 10_000) return null;
  return normalizeBearing(sensor.heading - mapUpHeading);
}

export function nodeLabel(node?: { title?: string; guideTitle?: string; code?: string } | null): string {
  const title = typeof node?.title === "string" ? node.title.trim() : "";
  return (title && title !== "新增辨識點" ? title : "") || node?.guideTitle?.trim?.() || node?.code?.trim?.() || title || "未命名節點";
}

export function flattenProject(project: any): FieldFloor[] {
  const buildings = Array.isArray(project) ? project : project?.buildings ?? project?.data?.buildings ?? [];
  if (!Array.isArray(buildings)) return [];
  return buildings.flatMap((building: any) => (Array.isArray(building?.floors) ? building.floors : []).map((rawFloor: any) => {
    const context = { buildingId: building.id, buildingName: building.name || "未命名建物", floorId: rawFloor.id, floorName: rawFloor.name || "未命名樓層" };
    const nodes = (["marker", "waypoint"] as const).flatMap((nodeType) => {
      const items = rawFloor[nodeType === "marker" ? "markers" : "waypoints"];
      return (Array.isArray(items) ? items : []).map((raw: any) => ({
        ...raw, ...context, nodeType, isMarker: nodeType === "marker", label: nodeLabel(raw),
        x: optionalNumber(raw.x) ?? (typeof raw.x === "string" && raw.x.trim() && Number.isFinite(Number(raw.x)) ? Number(raw.x) : NaN),
        y: optionalNumber(raw.y) ?? (typeof raw.y === "string" && raw.y.trim() && Number.isFinite(Number(raw.y)) ? Number(raw.y) : NaN),
      }));
    });
    return { ...rawFloor, buildingId: context.buildingId, buildingName: context.buildingName, nodes };
  }));
}

const MAX_FILE_BYTES = 30 * 1024 * 1024;
const MAX_IMAGE_PIXELS = 100_000_000;
const MAX_IMAGE_EDGE = 32_768;
const MAX_ENCODED_BYTES = 256 * 1024;

function validateFile(file: File, panorama = false): void {
  if (!file || file.size === 0) throw new Error("照片是空白檔案，請重新選擇。");
  if (/\.(insv|insp)$/i.test(file.name)) throw new Error("請先用環景相機軟體拼接並匯出 2:1 的 JPEG／PNG 環景照片；無法直接讀取 .insv／.insp 原始檔。");
  if (/\.(heic|heif)$/i.test(file.name) || /image\/(heic|heif)/i.test(file.type)) throw new Error("此瀏覽器無法直接處理 HEIC／HEIF；請先匯出 JPEG 或 PNG 再上傳。");
  if (file.size > MAX_FILE_BYTES) throw new Error("照片超過 30 MB，請先縮小或匯出較小的 JPEG／PNG。");
  const allowed = panorama ? ["image/jpeg", "image/png"] : ["image/jpeg", "image/png", "image/webp"];
  const validExtension = panorama ? /\.(jpe?g|png)$/i : /\.(jpe?g|png|webp)$/i;
  if (!(allowed.includes(file.type.toLowerCase()) || (!file.type && validExtension.test(file.name)))) {
    throw new Error(panorama ? "環景請使用已拼接的 2:1 JPEG／PNG；不支援影片或 SVG。" : "請選擇 JPEG、PNG 或 WebP 照片；不支援 SVG 或影片。");
  }
}

async function decodeImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);
  const image = new Image();
  try {
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("無法解碼這張照片，請重新匯出 JPEG／PNG 後再試。"));
      image.src = url;
    });
    const { naturalWidth: width, naturalHeight: height } = image;
    if (!width || !height) throw new Error("照片沒有有效尺寸，請重新匯出後再試。");
    if (width > MAX_IMAGE_EDGE || height > MAX_IMAGE_EDGE || width * height > MAX_IMAGE_PIXELS) throw new Error("照片解析度過大，請先縮小至 1 億像素以下再試。");
    return image;
  } finally {
    URL.revokeObjectURL(url);
    image.onload = null;
    image.onerror = null;
  }
}

function newCanvas(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));
  return canvas;
}

function contextOf(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("瀏覽器無法處理照片，請重新開啟頁面或改用另一個瀏覽器。");
  return context;
}

function sourceSize(source: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement): { width: number; height: number } {
  const candidate = source as HTMLVideoElement & HTMLImageElement;
  return { width: candidate.videoWidth || candidate.naturalWidth || source.width, height: candidate.videoHeight || candidate.naturalHeight || source.height };
}

function scaledCanvas(source: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement, maxEdge: number): HTMLCanvasElement {
  const { width, height } = sourceSize(source);
  if (!isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) throw new Error("相機畫面尚未就緒，請等候畫面出現再拍照。");
  const scale = Math.min(1, maxEdge / Math.max(width, height));
  const canvas = newCanvas(width * scale, height * scale);
  const context = contextOf(canvas);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}

export async function prepareImage(file: File): Promise<{ canvas: HTMLCanvasElement; originalWidth: number; originalHeight: number }> {
  validateFile(file);
  const image = await decodeImage(file);
  return { canvas: scaledCanvas(image, 1600), originalWidth: image.naturalWidth, originalHeight: image.naturalHeight };
}

export async function loadPanorama(file: File): Promise<HTMLImageElement> {
  validateFile(file, true);
  const image = await decodeImage(file);
  if (Math.abs(image.naturalWidth / image.naturalHeight - 2) > 0.04) throw new Error("此照片不是 2:1 等距柱狀環景；請先用相機軟體拼接，匯出完整 JPEG／PNG 環景。");
  if (image.naturalWidth < 1024) throw new Error("環景解析度太小，請使用至少 1024 × 512 的完整環景照片。");
  return image;
}

function imageQuality(canvas: HTMLCanvasElement): ImageQuality {
  const sample = scaledCanvas(canvas, 256);
  const { width, height } = sample;
  const pixels = contextOf(sample).getImageData(0, 0, width, height).data;
  const luminance = new Float32Array(width * height);
  let sum = 0;
  let sumSquared = 0;
  for (let i = 0; i < luminance.length; i++) {
    const value = pixels[i * 4] * 0.2126 + pixels[i * 4 + 1] * 0.7152 + pixels[i * 4 + 2] * 0.0722;
    luminance[i] = value;
    sum += value;
    sumSquared += value * value;
  }
  const brightness = sum / luminance.length;
  const contrast = Math.sqrt(Math.max(0, sumSquared / luminance.length - brightness * brightness));
  let lapSum = 0;
  let lapSquared = 0;
  let count = 0;
  for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
    const index = y * width + x;
    const value = luminance[index - width] + luminance[index + width] + luminance[index - 1] + luminance[index + 1] - 4 * luminance[index];
    lapSum += value;
    lapSquared += value * value;
    count++;
  }
  const sharpness = count ? Math.max(0, lapSquared / count - (lapSum / count) ** 2) : 0;
  const warnings: string[] = [];
  if (brightness < 45) warnings.push("畫面偏暗，請增加照明或換個角度。");
  if (brightness > 220) warnings.push("畫面偏亮，請避開逆光或反光區域。");
  if (contrast < 18) warnings.push("畫面對比偏低，請納入門牌、轉角或固定物件。");
  if (sharpness < 40) warnings.push("細節可能不足或模糊，請穩住手機並重新對焦。");
  if (Math.min(canvas.width, canvas.height) < 320) warnings.push("照片解析度偏低，請靠近目標並重新拍照。");
  return { brightness: Math.round(brightness), sharpness: Math.round(sharpness), warnings };
}

export async function encodeObservationImage(source: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement): Promise<{ imageUrl: string; width: number; height: number; quality: ImageQuality }> {
  let canvas = scaledCanvas(source, 1280);
  try {
    const quality = imageQuality(canvas);
    for (let resize = 0; resize < 6; resize++) {
      for (const jpegQuality of [0.88, 0.75, 0.6, 0.45]) {
        const imageUrl = canvas.toDataURL("image/jpeg", jpegQuality);
        const base64 = imageUrl.substring(imageUrl.indexOf(",") + 1);
        const bytes = Math.floor(base64.length * 3 / 4) - (base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0);
        if (imageUrl.startsWith("data:image/jpeg;base64,") && bytes <= MAX_ENCODED_BYTES) return { imageUrl, width: canvas.width, height: canvas.height, quality };
      }
      canvas = scaledCanvas(canvas, Math.max(canvas.width, canvas.height) * 0.8);
    }
    throw new Error("照片壓縮後仍過大，請縮小圖片後再試。");
  } catch (error) {
    if (error instanceof Error && error.name === "SecurityError") throw new Error("無法讀取這個圖片來源，請使用現場拍照或本機照片檔案。");
    throw error;
  }
}

/** Projection coordinates: yaw 0 selects the panorama center; positive yaw turns right. */
export function panoramaCoordinates(x: number, y: number, width: number, height: number, yaw: number, pitch = 0, fov = 75): { u: number; v: number } {
  if (![x, y, width, height, yaw, pitch, fov].every(isNumber) || width <= 0 || height <= 0) throw new Error("環景視角參數無效。");
  const radians = Math.PI / 180;
  const tanFov = Math.tan(clamp(fov, 30, 110) * radians / 2);
  const rayX = (2 * (x + 0.5) / width - 1) * tanFov;
  const rayY = (1 - 2 * (y + 0.5) / height) * tanFov * height / width;
  const pitchRadians = clamp(pitch, -85, 85) * radians;
  const pitchY = rayY * Math.cos(pitchRadians) + Math.sin(pitchRadians);
  const pitchZ = Math.cos(pitchRadians) - rayY * Math.sin(pitchRadians);
  const yawRadians = normalizeBearing(yaw) * radians;
  const worldX = rayX * Math.cos(yawRadians) + pitchZ * Math.sin(yawRadians);
  const worldZ = pitchZ * Math.cos(yawRadians) - rayX * Math.sin(yawRadians);
  const longitude = Math.atan2(worldX, worldZ);
  const latitude = Math.atan2(pitchY, Math.hypot(worldX, worldZ));
  return { u: ((longitude / (2 * Math.PI) + 0.5) % 1 + 1) % 1, v: clamp(0.5 - latitude / Math.PI, 0, 1) };
}

export function extractPanoramaView(image: HTMLImageElement, yaw: number, pitch = 0, fov = 75): HTMLCanvasElement {
  // Bound working memory even when the original panorama has tens of megapixels.
  const input = scaledCanvas(image, 4096);
  const inputPixels = contextOf(input).getImageData(0, 0, input.width, input.height).data;
  const output = newCanvas(768, 576);
  const context = contextOf(output);
  const frame = context.createImageData(output.width, output.height);
  const wrap = (value: number) => ((value % input.width) + input.width) % input.width;
  for (let y = 0; y < output.height; y++) for (let x = 0; x < output.width; x++) {
    const { u, v } = panoramaCoordinates(x, y, output.width, output.height, yaw, pitch, fov);
    const sourceX = u * input.width - 0.5;
    const sourceY = clamp(v * input.height - 0.5, 0, input.height - 1);
    const floorX = Math.floor(sourceX);
    const floorY = Math.floor(sourceY);
    const x0 = wrap(floorX);
    const x1 = wrap(floorX + 1);
    const y1 = Math.min(input.height - 1, floorY + 1);
    const fx = sourceX - floorX;
    const fy = sourceY - floorY;
    const target = (y * output.width + x) * 4;
    for (let channel = 0; channel < 3; channel++) {
      const top = inputPixels[(floorY * input.width + x0) * 4 + channel] * (1 - fx) + inputPixels[(floorY * input.width + x1) * 4 + channel] * fx;
      const bottom = inputPixels[(y1 * input.width + x0) * 4 + channel] * (1 - fx) + inputPixels[(y1 * input.width + x1) * 4 + channel] * fx;
      frame.data[target + channel] = top * (1 - fy) + bottom * fy;
    }
    frame.data[target + 3] = 255;
  }
  context.putImageData(frame, 0, 0);
  return output;
}
