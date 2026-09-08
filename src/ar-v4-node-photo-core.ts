/** Read-only presentation of saved V4 observations. Never promotes a V3 guide
 * image, changes calibration, or fabricates missing panorama metadata. */
export type NodePhotoSource = 'camera' | 'upload' | 'panorama-frame';
export type NodePhoto = {
  key: string;
  imageUrl: string;
  source: NodePhotoSource;
  yaw: number | null;
  mapBearing: number | null;
  capturedAt: string | null;
};
export type NodePhotoGroup = {
  key: string;
  kind: 'panorama' | 'photo';
  photos: NodePhoto[];
  capturedAt: string | null;
};

const record = (value: unknown): value is Record<string, any> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const angle = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? ((value % 360) + 360) % 360 : null;
const validId = (value: unknown): value is string => typeof value === 'string'
  && !!value.trim() && value === value.trim() && value.length <= 128 && !/[\u0000-\u001f\u007f]/.test(value);
const captureTime = (value: unknown): string | null => typeof value === 'string'
  && value.length <= 40 && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(value)
  && Number.isFinite(Date.parse(value)) ? value : null;

export function nodePhotoGroups(observations: unknown): NodePhotoGroup[] {
  if (!Array.isArray(observations)) return [];
  const groups = new Map<string, NodePhotoGroup & { time: number; order: number }>();
  observations.forEach((observation, index) => {
    if (!record(observation) || !['camera', 'upload', 'panorama-frame'].includes(observation.source)
      || typeof observation.imageUrl !== 'string' || !observation.imageUrl.trim()) return;
    const source = observation.source as NodePhotoSource;
    const panorama = source === 'panorama-frame' && record(observation.panorama) ? observation.panorama : null;
    const yaw = panorama ? angle(panorama.yaw) : null;
    const batched = panorama && validId(panorama.batchId) && yaw !== null;
    // The index also preserves malformed duplicate observation IDs as separate
    // views instead of silently dropping data or sharing a React selection key.
    const photoKey = JSON.stringify(['photo', observation.id ?? null, index]);
    const key = batched ? JSON.stringify(['batch', panorama.batchId]) : photoKey;
    const capturedAt = captureTime(observation.capturedAt);
    const time = capturedAt === null ? Number.NEGATIVE_INFINITY : Date.parse(capturedAt);
    const photo: NodePhoto = { key: photoKey, imageUrl: observation.imageUrl, source, yaw,
      mapBearing: angle(observation.mapBearing), capturedAt };
    const group = groups.get(key);
    if (group) {
      group.photos.push(photo);
      if (time > group.time) { group.time = time; group.capturedAt = capturedAt; }
    } else {
      groups.set(key, { key, kind: batched ? 'panorama' : 'photo', photos: [photo], capturedAt, time, order: index });
    }
  });
  return [...groups.values()]
    .sort((a, b) => a.kind !== b.kind ? a.kind === 'panorama' ? -1 : 1
      : a.time === b.time ? b.order - a.order : a.time > b.time ? -1 : 1)
    .map(({ time: _time, order: _order, ...group }) => ({ ...group,
      photos: group.kind === 'panorama' ? group.photos.slice().sort((a, b) => a.yaw! - b.yaw!) : group.photos.slice() }));
}

export function firstNodePhoto(group: NodePhotoGroup): NodePhoto | undefined {
  return group.photos.find(photo => photo.source === 'panorama-frame' && photo.yaw === 0) || group.photos[0];
}

export function photoAngle(value: number | null): string {
  return value === null ? '待確認' : `${Number(value.toFixed(1))}°`;
}

export function nodePhotoCaption(photo: NodePhoto): string {
  const map = photo.mapBearing === null ? '地圖方向待確認' : `地圖 ${photoAngle(photo.mapBearing)}`;
  if (photo.source === 'panorama-frame') return `${photo.yaw === null ? '環景角度未記錄' : `環景 ${photoAngle(photo.yaw)}`} · ${map}`;
  return `${photo.source === 'camera' ? '現場拍攝' : '匯入照片'} · ${map}`;
}
