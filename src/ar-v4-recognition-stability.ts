export type NodeConfirmation={nodeId:string;hits:number;time:number;samples:{time:number;matched:boolean}[]};
// Three accepted samples in the last five observations / four seconds.
// Misses never add evidence or refresh last-match time. A conflicting node or
// ambiguity resets immediately rather than carrying votes across locations.
export function advanceNodeConfirmation(previous:NodeConfirmation|null,nodeId:string|null,time:number,ambiguous=false):NodeConfirmation|null{
 if(ambiguous)return null;
 const live=previous&&time>=(previous.samples[previous.samples.length-1]?.time??previous.time)&&time-previous.time<=4000?previous:null;
 if(!nodeId&&!live)return null;
 const same=live&&(!nodeId||live.nodeId===nodeId)?live:null;
 const samples=[...(same?.samples||[]).filter(s=>time-s.time<=4000),{time,matched:Boolean(nodeId)}].slice(-5);
 const hits=samples.filter(s=>s.matched).length;
 if(!hits)return null;
 return {nodeId:nodeId||same!.nodeId,hits:Math.min(3,hits),time:nodeId?time:same!.time,samples};
}
