import React, { useEffect, useRef } from 'react';
import { Info, X } from 'lucide-react';
import type { FieldObservation } from './ar-v4-field-core';

export const FLOW_STEPS = {
  location: ['選擇樓層', '地圖選點', '確認位置'],
  graph: ['地圖與路網'],
  camera: ['選擇測試', '執行測試', '確認結果'],
  capture: ['選擇來源', '預覽與方向', '核對保存', '保存結果'],
  calibrate: ['選參考方向', '微調方向', '核對保存', '保存結果'],
  records: ['後台紀錄'],
};
export type FlowTab = keyof typeof FLOW_STEPS;
export const EMPTY_STEPS: Record<FlowTab, number> = { location:0, graph:0, camera:0, capture:0, calibrate:0, records:0 };
export type WorkDraft = {
  version:1; revision:string; bearing:number; mapUp:string; saveMapUp:boolean; nextNodeId:string;
  panoFile:File|null; panoBatch:FieldObservation[]; panoSaved:string[]; panoZero:string; panoYaw:number; panoPitch:number;
  steps:Record<FlowTab,number>; captureKind:'photo'|'panorama'; calibrationReview?:boolean;
};
export function Step({ visible, children }: { visible:boolean; children:React.ReactNode }) {
  return <div className="flow-step" hidden={!visible}>{children}</div>;
}
export function Help({ title, children }: { title:string; children:React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <><button type="button" className="help-trigger" aria-label={`${title}說明`} onClick={() => dialog.current?.showModal()}><Info size={19}/></button>
    <dialog ref={dialog} className="flow-sheet" aria-label={`${title}說明`}><div className="sheet-heading"><h2>{title}</h2><button autoFocus onClick={() => dialog.current?.close()} aria-label="關閉說明"><X size={20}/></button></div><div className="sheet-content">{children}</div></dialog></>;
}
export function Modal({ title, close, children }: { title:string; close:()=>void; children:React.ReactNode }) {
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{dialog.current?.showModal();},[]);
  return <dialog ref={dialog} className="flow-sheet" aria-label={title} onCancel={close} onClose={close}><div className="sheet-heading"><h2>{title}</h2><button autoFocus onClick={close} aria-label="關閉面板"><X size={20}/></button></div><div className="sheet-content">{children}</div></dialog>;
}
export function groupObservations<T extends { observation:FieldObservation; nodeId:string }>(records:T[]):T[][] {
  const groups=new Map<string,T[]>();
  for(const record of records){const o=record.observation; const key=JSON.stringify([record.nodeId,o.panorama?.batchId?'batch':'photo',o.panorama?.batchId || o.id]); groups.set(key,[...(groups.get(key)||[]),record]);}
  return [...groups.values()].reverse();
}
