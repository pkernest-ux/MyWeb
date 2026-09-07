import React from 'react';
import { RECOGNITION_REASONS, type Diagnostic, type Preparation, type Point } from './ar-v4-recognition-types';
import './ar-v4-recognition-inspector.css';

function FeatureImage({src,width,height,points,region,label,accepted}:{src:string;width:number;height:number;points:Point[];region?:Point[];label:string;accepted:boolean}){
  return <figure><div className={`v4-feature-image ${accepted?'accepted':''}`}><img src={src} alt={label}/><svg viewBox={`0 0 ${width} ${height}`} aria-label="幾何驗證特徵標記">
    {region&&region.length>2&&<polygon points={region.map(p=>`${p.x},${p.y}`).join(' ')}/>}
    {points.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={3}/>)}</svg></div><figcaption>{label}</figcaption></figure>;
}
export function RecognitionInspector({diagnostic:d,preparation:p,frame,references}:{diagnostic:Diagnostic|null;preparation:Preparation|null;frame:string;references:{id:string;imageUrl:string;label:string;bearing:number|null}[]}){
  if(!p&&!d)return null;
  const ref=references.find(r=>r.id===d?.targetId),other=references.find(r=>r.id===d?.alternateTargetId);
  const label=(id:string)=>{const r=references.find(r=>r.id===id);return r?`${r.label} · ${r.bearing===null?'未知方向':`${r.bearing}°`}`:'參考照片';};
  return <details className="v4-recognition-inspector"><summary>辨識診斷 · {p?`${p.targetCount}/${p.targetCount+p.skippedTargetCount} 張可用`:'準備中'}{d?` · 有效特徵 ${d.inliers}`:''}</summary>
    <p role="status">{d?RECOGNITION_REASONS[d.reason]:'已建立本輪特徵索引，等待比對。'}</p>
    {d&&<><dl><div><dt>畫面特徵</dt><dd>{d.frameFeatures}</dd></div><div><dt>初步配對</dt><dd>{d.matchCount}</dd></div><div><dt>幾何有效</dt><dd>{d.inliers}</dd></div></dl>
      {ref&&<p>{d.reason==='matched'?'候選節點':'最接近的參考（尚未通過）'}：{label(ref.id)}{other?`；另一候選：${label(other.id)}`:''}</p>}
      {frame&&<div className="v4-feature-pair"><FeatureImage src={frame} width={d.frameWidth} height={d.frameHeight} points={d.framePoints} region={d.region} label="這次取樣畫面（非即時串流）" accepted={d.reason==='matched'}/>
        {ref&&d.targetWidth&&d.targetHeight&&<FeatureImage src={ref.imageUrl} width={d.targetWidth} height={d.targetHeight} points={d.referencePoints} label="對應參考照片" accepted={d.reason==='matched'}/>}</div>}
      <p>綠色為通過本幀檢查的匹配；橘色仍未通過。數量不是定位正確率，沒有標點時表示尚無幾何有效配對。</p></>}
    {p&&<details><summary>照片載入與特徵索引</summary><ul>{p.targets.map(t=><li key={t.id}>{label(t.id)}：已建立 {t.featureCount} 個多尺度特徵</li>)}{p.failures.map((t,i)=><li key={`${t.id}/${i}`}>{label(t.id)}：略過，{t.reason}</li>)}</ul></details>}
    <p>索引只在本輪瀏覽器記憶體建立，不寫回照片或節點。顯示的角度是參考照片朝向，不是本次手機的精確朝向；仍需核對位置與面向。</p>
  </details>;
}
