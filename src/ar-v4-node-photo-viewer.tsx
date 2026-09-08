import React, { useState } from 'react';
import { firstNodePhoto, nodePhotoCaption, nodePhotoGroups, photoAngle } from './ar-v4-node-photo-core';
import type { NodePhotoGroup } from './ar-v4-node-photo-core';

type PhotoNode = {
  id?: string;
  projectId?: string;
  buildingId?: string;
  floorId?: string;
  nodeType?: string;
  fieldObservations?: unknown;
};

const dateLabel = (value: string | null) => value === null ? '拍攝時間未記錄'
  : new Date(value).toLocaleString('zh-TW', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
const groupLabel = (group: NodePhotoGroup) => group.kind === 'panorama' ? `環景批次 · ${group.photos.length} 張`
  : group.photos[0].source === 'panorama-frame' ? '環景單張' : group.photos[0].source === 'camera' ? '現場拍攝' : '匯入照片';

function PhotoBrowser({ groups }: { groups: NodePhotoGroup[]; key?: string }) {
  const [selectedGroupKey, setSelectedGroupKey] = useState(groups[0].key);
  const [selectedPhotoKey, setSelectedPhotoKey] = useState(firstNodePhoto(groups[0])!.key);
  const [failedImageKey, setFailedImageKey] = useState<string | null>(null);
  const group = groups.find(item => item.key === selectedGroupKey) || groups[0];
  const photo = group.photos.find(item => item.key === selectedPhotoKey) || firstNodePhoto(group)!;
  const imageKey = JSON.stringify([group.key, photo.key]);
  const changeGroup = (key: string) => {
    const next = groups.find(item => item.key === key);
    if (!next) return;
    setSelectedGroupKey(next.key);
    setSelectedPhotoKey(firstNodePhoto(next)!.key);
    setFailedImageKey(null);
  };
  return <section className="v4-node-photos" aria-label="V4 節點參考照片">
    <div className="v4-node-photos-heading"><h3>節點參考照片</h3><span>{group.photos.length} 張</span></div>
    {groups.length > 1 && <label className="v4-node-photos-group">照片／環景批次
      <select aria-label="照片／環景批次" value={group.key} onChange={event => changeGroup(event.target.value)}>
        {groups.map((item, index) => <option key={item.key} value={item.key}>{index + 1}. {groupLabel(item)} · {dateLabel(item.capturedAt)}</option>)}
      </select>
    </label>}
    <figure className="v4-node-photos-preview">
      <img key={imageKey} src={photo.imageUrl} alt={`節點參考照片，${nodePhotoCaption(photo)}`}
        hidden={failedImageKey === imageKey} onError={() => setFailedImageKey(imageKey)} />
      {failedImageKey === imageKey && <p role="status">照片載入失敗，請切換方向或重新讀取後台。</p>}
      <figcaption aria-live="polite">{nodePhotoCaption(photo)}</figcaption>
    </figure>
    {group.kind === 'panorama' && <div className="v4-node-photos-directions" role="group" aria-label="切換環景方向">
      {group.photos.map(item => <button type="button" key={item.key} aria-pressed={item.key === photo.key}
        aria-label={`環景 ${photoAngle(item.yaw)}`} onClick={() => { setSelectedPhotoKey(item.key); setFailedImageKey(null); }}>
        {photoAngle(item.yaw)}
      </button>)}
    </div>}
    <details className="v4-node-photos-help"><summary aria-label="照片與方向說明"><span aria-hidden="true">ⓘ</span></summary>
      <p>環景 0° 是原環景中央視角；地圖角度是校正後的朝向，兩者不一定相同，也不是地磁北方。</p>
      <p>切換只影響預覽，不會修改照片、方向校正或 V3 主要導引照片。有 0° 時預設顯示 0°；資料未包含時，顯示現有第一個方向。</p>
    </details>
  </section>;
}

/** Parent can additionally key this component by project/floor/node scope if
 * the original node object only contains its local ID. All state is view-only. */
export function NodePhotoViewer({ node }: { node: PhotoNode | null | undefined; key?: string }) {
  const groups = nodePhotoGroups(node?.fieldObservations);
  if (!groups.length) return null;
  const identity = JSON.stringify([node?.projectId, node?.buildingId, node?.floorId, node?.nodeType, node?.id]);
  return <PhotoBrowser key={identity} groups={groups} />;
}
