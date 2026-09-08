import React from 'react';
import type {useVisualHeading} from './ar-v4-use-visual-heading';
import './ar-v4-heading-status.css';

const reasons:Record<string,string>={
 not_matched:'尚未有足夠的幾何匹配',image_only:'此參考照沒有可用的環景方向索引',unknown_map_bearing:'環景尚未指定地圖 0°',
 too_few_inliers:'可用方向特徵不足',invalid_metadata:'環景方向資料不完整',degenerate_geometry:'特徵分布不適合估算方向',
 unsupported_center:'請將固定地標移到畫面中央',unstable_projection:'取景差距過大，請靠近原拍攝位置',high_residual:'方向估計不一致，請站定重試',
};
export function HeadingStatus({heading,manual=false}:{heading:ReturnType<typeof useVisualHeading>;manual?:boolean}){
 const {view,estimate,sampleKind}=heading;
 const tracking=!manual&&view.bearing!==null;
 const failure=view.state.lastRejection||view.reason;
 const sensorMissing=['sensor-unavailable','stale-sensor'].includes(failure);
 const title=manual?'人工校正':tracking?'視覺定向（近似）':sampleKind==='still'?'單張照片試算':sampleKind==='other-node'?'附近地標，尚未定向':sensorMissing?'請朝向現場並啟用方向感測':view.status==='confirming'?`方向確認 ${view.hits}/3`:view.status==='lost'?'方向已失效，請重新取景':'等待視覺定向';
 return <div className="v4-heading-status" data-status={manual?'manual':view.status} data-heading={tracking?view.bearing!.toFixed(1):''} data-hits={view.hits}>
  <span>{title}{tracking?` · 地圖 ${Math.round(view.bearing!)}°`:''}</span>
  <details><summary aria-label="查看方向估計說明">ⓘ</summary><div>
   <p>{tracking?'依最近的視覺方向，用感測器延續轉動；最長保留 15 秒，後續有效影像會重新校正。':manual?'優先使用您人工確認的方向，過期後重新取景。':'在目前已確認節點附近站定，把固定地標放在畫面中央；需 3 次一致的方向與有效感測資料。'}</p>
   {estimate&&<p>{estimate.accepted?`此影格取景方向：約 ${estimate.bearing.toFixed(1)}°（地圖座標，非地磁北向）。`:reasons[estimate.reason]||'此影格尚不適合估算方向。'}</p>}
   {sampleKind==='still'&&<p>匯入照片只檢查該照片，不會套用現在手機的感測器或啟用導航。</p>}
   {sampleKind==='other-node'&&<p>看到其他節點不代表已到達；請實際走到後確認位置，再重新定向。</p>}
   {sensorMissing&&<p>請勿將鏡頭朝向天花板／地板。若仍未取得方向資料，可展開感測協助重新啟用，或返回地圖。</p>}
   {failure==='stale-visual'&&<p>此影格處理時間過長，沒有套用舊方向；請站定、稍後重試。</p>}
   <p>這是近拍攝點的方向近似，不是精確位置或空間錨定。離拍攝點太遠、環景 0° 錯誤或平面視差仍可能造成偏差；不確定時請使用地圖／人工校正。</p>
  </div></details>
 </div>;
}
