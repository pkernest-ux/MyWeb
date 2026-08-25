import jsfeatModule from "jsfeat";

type RecognitionPoint = {
  x: number;
  y: number;
};

type RecognitionDetection = {
  targetId?: string;
  corners: [RecognitionPoint, RecognitionPoint, RecognitionPoint, RecognitionPoint];
  inliers: number;
  matchCount: number;
  confidence: number;
};

type ImagePayload = {
  id: string;
  width: number;
  height: number;
  pixels: ArrayBuffer;
};

type WorkerRequest =
  | {
      type: "prepareMany";
      requestId: number;
      targets: ImagePayload[];
    }
  | {
      type: "detect";
      requestId: number;
      width: number;
      height: number;
      pixels: ArrayBuffer;
    };

type TargetPattern = {
  id: string;
  width: number;
  height: number;
  levels: FeatureLevel[];
};

type FeatureLevel = {
  scale: number;
  corners: any[];
  descriptors: any;
  count: number;
};

type FeatureMatch = {
  screenIndex: number;
  patternLevel: number;
  patternIndex: number;
  distance: number;
};

const jsfeat: any = jsfeatModule;
const scope: any = self as any;
const TARGET_LEVELS = 3;
const TARGET_FEATURE_LIMIT = 280;
const FRAME_FEATURE_LIMIT = 420;
const CORNER_CAPACITY = 12_000;
const MATCH_DISTANCE_LIMIT = 64;
const MATCH_RATIO_LIMIT = 0.82;
const MAX_MATCHES = 90;
const MIN_MATCHES = 12;
const MIN_INLIERS = 9;
const MIN_INLIER_RATIO = 0.42;
const TARGET_SCALE_STEP = Math.SQRT1_2;
const ORIENTATION_RADIUS = 15;
const ORIENTATION_WIDTHS = new Int32Array([15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0]);

let targetPatterns: TargetPattern[] = [];
let frameGray: any = null;
let frameSmooth: any = null;
let frameDescriptors: any = null;
let frameCorners: any[] = [];
let frameWidth = 0;
let frameHeight = 0;
const homography = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
const matchMask = new jsfeat.matrix_t(MAX_MATCHES, 1, jsfeat.U8C1_t);

const createCorners = () => {
  const corners = new Array(CORNER_CAPACITY);
  for (let index = 0; index < CORNER_CAPACITY; index += 1) {
    corners[index] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return corners;
};

const keypointOrientation = (image: any, px: number, py: number) => {
  let momentY = 0;
  let momentX = 0;
  const source = image.data;
  const stride = image.cols;
  const centerOffset = (py * stride + px) | 0;

  for (let x = -ORIENTATION_RADIUS; x <= ORIENTATION_RADIUS; x += 1) {
    momentX += x * source[centerOffset + x];
  }

  for (let y = 1; y <= ORIENTATION_RADIUS; y += 1) {
    let verticalSum = 0;
    const width = ORIENTATION_WIDTHS[y];
    for (let x = -width; x <= width; x += 1) {
      const lower = source[centerOffset + x + y * stride];
      const upper = source[centerOffset + x - y * stride];
      verticalSum += lower - upper;
      momentX += x * (lower + upper);
    }
    momentY += y * verticalSum;
  }
  return Math.atan2(momentY, momentX);
};

const detectKeypoints = (image: any, corners: any[], limit: number) => {
  jsfeat.yape06.laplacian_threshold = 30;
  jsfeat.yape06.min_eigen_value_threshold = 25;
  let count = jsfeat.yape06.detect(image, corners, 17);
  if (count > limit) {
    jsfeat.math.qsort(corners, 0, count - 1, (left: any, right: any) => right.score < left.score);
    count = limit;
  }
  for (let index = 0; index < count; index += 1) {
    corners[index].angle = keypointOrientation(image, corners[index].x, corners[index].y);
  }
  return count;
};

const rgbaToGray = (payload: ImagePayload) => {
  const gray = new jsfeat.matrix_t(payload.width, payload.height, jsfeat.U8_t | jsfeat.C1_t);
  jsfeat.imgproc.grayscale(new Uint8Array(payload.pixels), payload.width, payload.height, gray);
  return gray;
};

const prepareTargetPattern = (target: ImagePayload): TargetPattern => {
  const source = rgbaToGray(target);
  const targetLevels: FeatureLevel[] = [];

  for (let levelIndex = 0; levelIndex < TARGET_LEVELS; levelIndex += 1) {
    const scale = TARGET_SCALE_STEP ** levelIndex;
    const width = Math.max(64, Math.round(target.width * scale));
    const height = Math.max(64, Math.round(target.height * scale));
    const levelImage = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    const smoothImage = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
    if (levelIndex === 0 && width === target.width && height === target.height) {
      source.copy_to(levelImage);
    } else {
      jsfeat.imgproc.resample(source, levelImage, width, height);
    }
    jsfeat.imgproc.gaussian_blur(levelImage, smoothImage, 5, 0);
    const corners = createCorners();
    const count = detectKeypoints(smoothImage, corners, TARGET_FEATURE_LIMIT);
    const descriptors = new jsfeat.matrix_t(32, TARGET_FEATURE_LIMIT, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.orb.describe(smoothImage, corners, count, descriptors);
    for (let index = 0; index < count; index += 1) {
      corners[index].x /= scale;
      corners[index].y /= scale;
    }
    targetLevels.push({ scale, corners: corners.slice(0, count), descriptors, count });
  }

  const totalFeatures = targetLevels.reduce((total, level) => total + level.count, 0);
  if (totalFeatures < MIN_MATCHES) {
    throw new Error("辨識照片的特徵不足，請改用紋理清楚、避免反光的現場照片");
  }
  return {
    id: target.id,
    width: target.width,
    height: target.height,
    levels: targetLevels,
  };
};

const prepareTargets = (request: Extract<WorkerRequest, { type: "prepareMany" }>) => {
  const failures: string[] = [];
  targetPatterns = request.targets.flatMap((target) => {
    try {
      return [prepareTargetPattern(target)];
    } catch (error: any) {
      failures.push(error?.message || "節點照片無法建立辨識特徵");
      return [];
    }
  });
  if (!targetPatterns.length) {
    throw new Error(failures[0] || "沒有可供辨識的路徑節點照片");
  }
  return {
    prepared: true,
    targetCount: targetPatterns.length,
    skippedTargetCount: failures.length,
  } as const;
};

const ensureFrameBuffers = (width: number, height: number) => {
  if (frameGray && frameWidth === width && frameHeight === height) return;
  frameWidth = width;
  frameHeight = height;
  frameGray = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
  frameSmooth = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
  frameDescriptors = new jsfeat.matrix_t(32, FRAME_FEATURE_LIMIT, jsfeat.U8_t | jsfeat.C1_t);
  frameCorners = createCorners();
};

const popCount32 = (value: number) => {
  let current = value - ((value >>> 1) & 0x55555555);
  current = (current & 0x33333333) + ((current >>> 2) & 0x33333333);
  return (((current + (current >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
};

const matchFeatures = (frameCount: number, targetLevels: FeatureLevel[]) => {
  const matches: FeatureMatch[] = [];
  const frameDescriptors32 = frameDescriptors.buffer.i32;
  for (let screenIndex = 0; screenIndex < frameCount; screenIndex += 1) {
    const screenOffset = screenIndex * 8;
    let bestDistance = 257;
    let secondDistance = 257;
    let bestLevel = -1;
    let bestPatternIndex = -1;

    targetLevels.forEach((level, levelIndex) => {
      const targetDescriptors32 = level.descriptors.buffer.i32;
      for (let patternIndex = 0; patternIndex < level.count; patternIndex += 1) {
        const patternOffset = patternIndex * 8;
        let distance = 0;
        for (let word = 0; word < 8; word += 1) {
          distance += popCount32(frameDescriptors32[screenOffset + word] ^ targetDescriptors32[patternOffset + word]);
        }
        if (distance < bestDistance) {
          secondDistance = bestDistance;
          bestDistance = distance;
          bestLevel = levelIndex;
          bestPatternIndex = patternIndex;
        } else if (distance < secondDistance) {
          secondDistance = distance;
        }
      }
    });

    if (
      bestPatternIndex >= 0 &&
      bestDistance <= MATCH_DISTANCE_LIMIT &&
      bestDistance < secondDistance * MATCH_RATIO_LIMIT
    ) {
      matches.push({
        screenIndex,
        patternLevel: bestLevel,
        patternIndex: bestPatternIndex,
        distance: bestDistance,
      });
    }
  }

  const uniqueTargets = new Set<string>();
  return matches
    .sort((left, right) => left.distance - right.distance)
    .filter((match) => {
      const key = `${match.patternLevel}:${match.patternIndex}`;
      if (uniqueTargets.has(key)) return false;
      uniqueTargets.add(key);
      return true;
    })
    .slice(0, MAX_MATCHES);
};

const polygonArea = (points: RecognitionPoint[]) =>
  Math.abs(
    points.reduce((total, point, index) => {
      const next = points[(index + 1) % points.length];
      return total + point.x * next.y - next.x * point.y;
    }, 0),
  ) / 2;

const pointDistance = (start: RecognitionPoint, end: RecognitionPoint) =>
  Math.hypot(end.x - start.x, end.y - start.y);

const isUsableQuadrilateral = (
  corners: RecognitionPoint[],
  width: number,
  height: number,
) => {
  if (corners.length !== 4 || corners.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) {
    return false;
  }
  const areaRatio = polygonArea(corners) / Math.max(1, width * height);
  if (areaRatio < 0.018 || areaRatio > 0.88) return false;
  const edgeLengths = corners.map((point, index) => pointDistance(point, corners[(index + 1) % 4]));
  const shortestEdge = Math.min(...edgeLengths);
  const longestEdge = Math.max(...edgeLengths);
  if (shortestEdge < 20 || longestEdge / Math.max(1, shortestEdge) > 8) return false;
  const marginX = width * 0.16;
  const marginY = height * 0.16;
  return corners.every(
    (point) =>
      point.x >= -marginX &&
      point.x <= width + marginX &&
      point.y >= -marginY &&
      point.y <= height + marginY,
  );
};

const projectTargetCorners = (target: TargetPattern) => {
  const matrix = homography.data;
  const sourceCorners = [
    { x: 0, y: 0 },
    { x: target.width, y: 0 },
    { x: target.width, y: target.height },
    { x: 0, y: target.height },
  ];
  return sourceCorners.map((point) => {
    const denominator = matrix[6] * point.x + matrix[7] * point.y + matrix[8];
    return {
      x: (matrix[0] * point.x + matrix[1] * point.y + matrix[2]) / denominator,
      y: (matrix[3] * point.x + matrix[4] * point.y + matrix[5]) / denominator,
    };
  }) as RecognitionDetection["corners"];
};

const estimateDetection = (
  matches: FeatureMatch[],
  width: number,
  height: number,
  target: TargetPattern,
) => {
  if (matches.length < MIN_MATCHES) return null;
  const sourcePoints = matches.map((match) => {
    const point = target.levels[match.patternLevel].corners[match.patternIndex];
    return { x: point.x, y: point.y };
  });
  const destinationPoints = matches.map((match) => {
    const point = frameCorners[match.screenIndex];
    return { x: point.x, y: point.y };
  });
  const kernel = new jsfeat.motion_model.homography2d();
  const parameters = new jsfeat.ransac_params_t(4, 3, 0.5, 0.99);
  const found = jsfeat.motion_estimator.ransac(
    parameters,
    kernel,
    sourcePoints,
    destinationPoints,
    matches.length,
    homography,
    matchMask,
    1000,
  );
  if (!found) return null;

  const inlierSource: RecognitionPoint[] = [];
  const inlierDestination: RecognitionPoint[] = [];
  for (let index = 0; index < matches.length; index += 1) {
    if (!matchMask.data[index]) continue;
    inlierSource.push(sourcePoints[index]);
    inlierDestination.push(destinationPoints[index]);
  }
  const inliers = inlierSource.length;
  if (inliers < MIN_INLIERS || inliers / matches.length < MIN_INLIER_RATIO) return null;
  kernel.run(inlierSource, inlierDestination, homography, inliers);
  const corners = projectTargetCorners(target);
  if (!isUsableQuadrilateral(corners, width, height)) return null;
  return {
    targetId: target.id,
    corners,
    inliers,
    matchCount: matches.length,
    confidence: Math.min(1, inliers / 18),
  } satisfies RecognitionDetection;
};

const detect = (request: WorkerRequest): RecognitionDetection | null => {
  if (request.type !== "detect" || !targetPatterns.length) return null;
  ensureFrameBuffers(request.width, request.height);
  jsfeat.imgproc.grayscale(new Uint8Array(request.pixels), request.width, request.height, frameGray);
  jsfeat.imgproc.gaussian_blur(frameGray, frameSmooth, 5, 0);
  const frameCount = detectKeypoints(frameSmooth, frameCorners, FRAME_FEATURE_LIMIT);
  if (frameCount < MIN_MATCHES) return null;
  jsfeat.orb.describe(frameSmooth, frameCorners, frameCount, frameDescriptors);
  return targetPatterns.reduce<RecognitionDetection | null>((bestDetection, target) => {
    const detection = estimateDetection(
      matchFeatures(frameCount, target.levels),
      request.width,
      request.height,
      target,
    );
    if (!detection) return bestDetection;
    if (!bestDetection) return detection;
    if (detection.inliers !== bestDetection.inliers) {
      return detection.inliers > bestDetection.inliers ? detection : bestDetection;
    }
    if (detection.confidence !== bestDetection.confidence) {
      return detection.confidence > bestDetection.confidence ? detection : bestDetection;
    }
    return detection.matchCount > bestDetection.matchCount ? detection : bestDetection;
  }, null);
};

scope.addEventListener("message", (event: MessageEvent<WorkerRequest>) => {
  const request = event.data;
  try {
    const result = request.type === "prepareMany" ? prepareTargets(request) : detect(request);
    scope.postMessage({ requestId: request.requestId, ok: true, result });
  } catch (error: any) {
    scope.postMessage({
      requestId: request.requestId,
      ok: false,
      error: error?.message || "圖像辨識處理失敗",
    });
  }
});
