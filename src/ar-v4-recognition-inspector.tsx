import React, {useState} from 'react';
import {RECOGNITION_REASONS, type Diagnostic, type Preparation, type Point, type FishnetSummary, type FishnetDiagnostic} from './ar-v4-recognition-types';
import {imageCell} from './ar-v4-fishnet';
import './ar-v4-recognition-inspector.css';

type Reference = {id:string;imageUrl:string;label:string;bearing:number|null};
type ViewCell = {id:string;row:number;col:number;count:number};

function FeatureImage({src,width,height,points,region,label,accepted,sparse=false,summary,referenceId,gridVisible=false,selectedCellId,onCellSelect,fishnet,className=''}:{
  src:string;width:number;height:number;points:Point[];region?:Point[];label:string;accepted:boolean;sparse?:boolean;
  summary?:FishnetSummary;referenceId?:string;gridVisible?:boolean;selectedCellId?:string;
  onCellSelect?:(cell:ViewCell)=>void;fishnet?:FishnetDiagnostic;className?:string;
}) {
  const cells:ViewCell[]=summary&&referenceId?Array.from({length:summary.grid.columns*summary.grid.rows},(_,i)=>{
    const row=Math.floor(i/summary.grid.columns),col=i%summary.grid.columns;
    const cell=imageCell((col+.5)*width/summary.grid.columns,(row+.5)*height/summary.grid.rows,width,height,referenceId);
    return {...cell,count:summary.cells.find(c=>c.id===cell.id)?.count||0};
  }):[];
  const pointSize=Math.max(2,Math.min(width,height)/110);
  return <figure className={className}><div className={`v4-feature-image ${accepted?'accepted':''} ${sparse?'sparse':''}`} style={{aspectRatio:`${width} / ${height}`}}>
    {!sparse&&src&&<img src={src} alt={label}/>}
    <svg viewBox={`0 0 ${width} ${height}`} aria-label={summary?'Fishnet 參考格網與特徵':'幾何驗證特徵標記'}>
      {sparse&&summary&&<g className="v4-fishnet-sparse-points" aria-label="預先建立的參考特徵">{summary.features.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={pointSize*.48}/>)}</g>}
      {region&&region.length>2&&<polygon points={region.map(p=>`${p.x},${p.y}`).join(' ')}/>}
      <g className="v4-fishnet-match-points">{points.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={pointSize}/>)}</g>
      {gridVisible&&summary&&<g className="v4-fishnet-grid" aria-label="參考照片格網">{cells.map(cell=>{
        const matches=fishnet?.matches.filter(m=>m.reference.viewCell.id===cell.id)||[];
        const valid=matches.filter(m=>m.verified).length;
        return <rect key={cell.id} x={cell.col*width/summary.grid.columns} y={cell.row*height/summary.grid.rows}
          width={width/summary.grid.columns} height={height/summary.grid.rows}
          className={`${selectedCellId===cell.id?'selected ':''}${valid&&accepted?'verified':matches.length?'paired':''}`}
          data-fishnet-cell={cell.id} role="button" tabIndex={0} aria-pressed={selectedCellId===cell.id}
          aria-label={`參考格 第${cell.row+1}列 第${cell.col+1}欄，${matches.length}組配對，${valid}組幾何內點`}
          onClick={()=>onCellSelect?.(cell)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();onCellSelect?.(cell);}}}>
          <title>{`第${cell.row+1}列 第${cell.col+1}欄 · ${cell.count}個描述特徵`}</title>
        </rect>;
      })}</g>}
    </svg>
  </div><figcaption>{label}</figcaption></figure>;
}

function FishnetPanel({diagnostic,preparation,frame,references,precompiled}:{diagnostic:Diagnostic|null;preparation:Preparation|null;frame:string;references:Reference[];precompiled:boolean}) {
  const [gridVisible,setGridVisible]=useState(true),[sparse,setSparse]=useState(false),[chosenReference,setChosenReference]=useState('');
  const [selection,setSelection]=useState<{targetId:string;cell:ViewCell}|null>(null);
  const targets=preparation?.targets.filter(t=>t.fishnet)||[];
  const chosen=targets.find(t=>t.id===chosenReference);
  const targetId=chosen?.id||diagnostic?.targetId||targets[0]?.id;
  const active=diagnostic?.targetId===targetId?diagnostic:null;
  const target=targets.find(t=>t.id===targetId),summary=active?.fishnet||target?.fishnet;
  const reference=references.find(r=>r.id===targetId);
  const width=active?.targetWidth||target?.width||0,height=active?.targetHeight||target?.height||0;
  if(!summary||!targetId||!width||!height)return null;
  const matchData=active?.fishnet;
  const selected=selection?.targetId===targetId?selection.cell:null;
  const pairs=(matchData?.matches||[]).filter(m=>!selected||m.reference.viewCell.id===selected.id);
  const verified=pairs.filter(m=>m.verified);
  const selectedFeatures=summary.features.filter(p=>!selected||p.viewCell.id===selected.id);
  const selectedFeatureCount=selected?summary.cells.find(c=>c.id===selected.id)?.count||0:summary.featureTotal;
  const globalCells=[...new Map(selectedFeatures.map(p=>[p.referenceCell.id,p])).values()];
  const sparseMode=precompiled||sparse||!reference?.imageUrl;
  const refLabel=(id:string)=>{const r=references.find(r=>r.id===id);return r?`${r.label} · ${r.bearing===null?'未校正':`${r.bearing}°`}`:'參考照片';};
  const chooseCell=(cell:ViewCell)=>setSelection({targetId,cell});
  const accepted=active?.reason==='matched'&&matchData?.geometryAccepted===true;
  return <section className="v4-fishnet-panel" data-reference-id={targetId} aria-label="Fishnet 格網檢視">
    <div className="v4-fishnet-heading"><strong>Fishnet 格網</strong><span className="v4-fishnet-tag">{summary.mode==='panorama'?'環景對應':'image-only'}</span></div>
    <div className="v4-fishnet-toolbar">
      <label><input type="checkbox" aria-label="顯示 Fishnet 格線" checked={gridVisible} onChange={e=>setGridVisible(e.target.checked)}/>格線</label>
      <label><input type="checkbox" aria-label="只顯示特徵參數" checked={sparseMode} disabled={precompiled||!reference?.imageUrl} onChange={e=>setSparse(e.target.checked)}/>參數圖</label>
    </div>
    {targets.length>1&&<label className="v4-fishnet-picker">查看參考<select aria-label="查看 Fishnet 參考" value={chosen?.id||''} onChange={e=>{setChosenReference(e.target.value);setSelection(null);}}>
      <option value="">跟隨本次匹配</option>{targets.map(t=><option key={t.id} value={t.id}>{refLabel(t.id)}</option>)}
    </select></label>}
    <div className="v4-feature-pair">
      <FeatureImage className="v4-fishnet-reference" src={precompiled?'':reference?.imageUrl||''} width={width} height={height}
        points={verified.map(m=>m.reference)} label={`${sparseMode?'參考參數圖':'參考照片'} · ${summary.grid.columns} × ${summary.grid.rows}`}
        accepted={accepted} sparse={sparseMode} summary={summary} referenceId={targetId} gridVisible={gridVisible}
        selectedCellId={selected?.id} onCellSelect={chooseCell} fishnet={matchData}/>
      {frame&&diagnostic&&<FeatureImage src={frame} width={diagnostic.frameWidth} height={diagnostic.frameHeight}
        points={verified.map(m=>m.frame)} region={selected?undefined:active?.region}
        label={active?'手機取樣 · 對應有效點':'手機取樣 · 未匹配所選參考'} accepted={accepted}/>}
    </div>
    <label className="v4-fishnet-picker">選取參考格<select aria-label="選取 Fishnet 參考格" value={selected?.id||''} onChange={event=>{
      if(!event.target.value){setSelection(null);return;}
      const [row,col]=event.target.selectedOptions[0].dataset.position!.split(',').map(Number);
      const coord=imageCell((col+.5)*width/summary.grid.columns,(row+.5)*height/summary.grid.rows,width,height,targetId);
      chooseCell({...coord,count:summary.cells.find(c=>c.id===coord.id)?.count||0});
    }}><option value="">全部有效對應</option>{Array.from({length:summary.grid.columns*summary.grid.rows},(_,i)=>{
      const row=Math.floor(i/summary.grid.columns),col=i%summary.grid.columns;
      const cell=imageCell((col+.5)*width/summary.grid.columns,(row+.5)*height/summary.grid.rows,width,height,targetId);
      return <option key={cell.id} value={cell.id} data-position={`${row},${col}`}>第{row+1}列・第{col+1}欄</option>;
    })}</select></label>
    {selected&&<div className="v4-fishnet-cell-info" role="status">
      <div className="v4-fishnet-heading"><strong>第{selected.row+1}列・第{selected.col+1}欄</strong><span className={`v4-fishnet-tag ${accepted&&verified.length?'is-verified':''}`}>{accepted&&verified.length?'本幀幾何通過':'尚未通過本幀'}</span></div>
      <dl><div><dt>描述特徵</dt><dd>{selectedFeatureCount}</dd></div><div><dt>配對</dt><dd>{pairs.length}</dd></div><div><dt>幾何內點</dt><dd>{verified.length}</dd></div></dl>
      <details><summary>格 ID 與參考方向</summary><p>視圖格</p><code>{selected.id}</code>
        <p>{summary.mode==='panorama'?`展示光線對應的環景格（${summary.referenceGrid.columns} × ${summary.referenceGrid.rows}）`:'影像格 · 無環景方位'}</p>
        {globalCells.length?<ul>{globalCells.map(p=><li key={p.referenceCell.id}><code>{p.referenceCell.id}</code>{p.mapYaw!==null&&<span>參考光線 {p.mapYaw.toFixed(1)}°</span>}</li>)}</ul>:<p>{selectedFeatureCount?'此格未抽到展示點；完整特徵仍參與辨識。':'此格尚無可用的特徵參數。'}</p>}
      </details>
    </div>}
    <details className="v4-fishnet-help"><summary>ⓘ 格網怎麼看</summary>
      <p>點選參考格，可查看該格在手機畫面的有效對應點。手機畫面的格號不等於參考格號；配對依特徵與幾何檢查決定。</p>
      <p>淡色點是已建立的描述特徵；綠色表示本幀通過，橘色仍未通過整體檢查。格數、點數都不是定位正確率。</p>
      {summary.featureSampled&&<p>淡色展示點取樣 {summary.features.length}／{summary.featureTotal}，降低手機負擔。格內數量與實際辨識使用全部特徵，亮色配對點不省略。</p>}
      <p>{summary.mode==='panorama'?'環景格 ID 可連結同一環景的不同拆圖。顯示方向是參考光線，不是手機朝向或精確定位。':'image-only 只描述這張照片的格子，沒有環景方位。'}{precompiled?'民眾端只畫參數，不下載參考照片。':''}</p>
    </details>
  </section>;
}

export function RecognitionInspector({diagnostic:d,preparation:p,frame,references,precompiled=false,onExport}:{diagnostic:Diagnostic|null;preparation:Preparation|null;frame:string;references:Reference[];precompiled?:boolean;onExport?:()=>void}){
  if(!p&&!d)return null;
  const ref=references.find(r=>r.id===d?.targetId),other=references.find(r=>r.id===d?.alternateTargetId);
  const label=(id:string)=>{const r=references.find(r=>r.id===id);return r?`${r.label} · ${r.bearing===null?'未知方向':`${r.bearing}°`}`:'參考照片';};
  const hasFishnet=Boolean(d?.fishnet||p?.targets.some(t=>t.fishnet));
  return <details className="v4-recognition-inspector"><summary>辨識診斷 · {p?`${p.targetCount}/${p.targetCount+p.skippedTargetCount} ${precompiled?'組特徵可用':'張可用'}`:'準備中'}{d?` · 有效特徵 ${d.inliers}`:''}</summary>
    <p role="status">{d?RECOGNITION_REASONS[d.reason]:'已建立本輪特徵索引，等待比對。'}</p>
    {onExport&&frame&&<><button type="button" onClick={onExport}>匯出這次辨識畫面</button><p>檔案包含相機取樣畫面與診斷，只儲存到本機，不會自動上傳。</p></>}
    {d&&<><dl><div><dt>畫面特徵</dt><dd>{d.frameFeatures}</dd></div><div><dt>初步配對</dt><dd>{d.matchCount}</dd></div><div><dt>幾何有效</dt><dd>{d.inliers}</dd></div></dl>
      {ref&&<p>{d.reason==='matched'?'候選節點':'最接近的參考（尚未通過）'}：{label(ref.id)}{other?`；另一候選：${label(other.id)}`:''}</p>}
      {!hasFishnet&&frame&&<div className="v4-feature-pair"><FeatureImage src={frame} width={d.frameWidth} height={d.frameHeight} points={d.framePoints} region={d.region} label="這次取樣畫面（非即時串流）" accepted={d.reason==='matched'}/>
        {!precompiled&&ref?.imageUrl&&d.targetWidth&&d.targetHeight&&<FeatureImage src={ref.imageUrl} width={d.targetWidth} height={d.targetHeight} points={d.referencePoints} label="對應參考照片" accepted={d.reason==='matched'}/>}</div>}
      {!hasFishnet&&<p>綠色為通過本幀檢查的匹配；橘色仍未通過。數量不是定位正確率，沒有標點時表示尚無幾何有效配對。</p>}</>}
    {hasFishnet&&<FishnetPanel diagnostic={d} preparation={p} frame={frame} references={references} precompiled={precompiled}/>}
    {p&&<details><summary>照片載入與特徵索引</summary><ul>{p.targets.map(t=><li key={t.id}>{label(t.id)}：已建立 {t.featureCount} 個多尺度特徵</li>)}{p.failures.map((t,i)=><li key={`${t.id}/${i}`}>{label(t.id)}：略過，{t.reason}</li>)}</ul></details>}
    <details><summary>ⓘ 辨識與方向限制</summary><p>{precompiled?'使用發布時預先建立的特徵包；手機可快取重用，不載入參考照片。':'索引只在本輪瀏覽器記憶體建立，不寫回照片或節點。'}顯示的角度是參考照片朝向，不是本次手機的精確朝向；仍需核對位置與面向。</p></details>
  </details>;
}
