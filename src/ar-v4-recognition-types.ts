export type Point = { x: number; y: number };
export type Reason = 'matched' | 'few_features' | 'few_matches' | 'geometry' | 'clustered' | 'ambiguous' | 'no_targets';
export type Preparation = {
  prepared: true; targetCount: number; skippedTargetCount: number;
  targets: { id: string; featureCount: number; width: number; height: number }[];
  failures: { id: string; reason: string }[];
};
export type Diagnostic = {
  reason: Reason; targetId?: string; frameFeatures: number; matchCount: number; inliers: number;
  frameWidth: number; frameHeight: number; targetWidth?: number; targetHeight?: number;
  framePoints: Point[]; referencePoints: Point[]; region: Point[];
  coverage?: number; errorPixels?: number; alternateTargetId?: string;
};
export type Detection = {
  targetId: string; corners: [Point, Point, Point, Point]; inliers: number; matchCount: number;
  confidence: number;
};
export type DetectionReport = { detection: Detection | null; diagnostics: Diagnostic };
export const RECOGNITION_REASONS: Record<Reason, string> = {
  matched: '局部特徵已匹配，仍需核對節點與面向',
  few_features: '畫面特徵不足：請站定，拍清楚招牌、門框或固定裝飾',
  few_matches: '對應特徵不足：請靠近原拍攝位置，調整取景或補拍參考照',
  geometry: '已找到相似特徵，但尚未確認位置；請停留片刻，將門牌與周邊一起入鏡',
  clustered: '特徵過度集中或接近一直線：請納入更大範圍的固定地標',
  ambiguous: '多個節點都很相似：請換個角度，尚未選定位置',
  no_targets: '沒有可使用的參考照：請檢查照片載入與節點',
};
