export type NodeConfirmation={nodeId:string;hits:number;time:number};
// Different panorama directions may alternate while the same node stays visible.
// A miss, a different node or a stale sample must break the confirmation streak.
export function advanceNodeConfirmation(previous:NodeConfirmation|null,nodeId:string|null,time:number):NodeConfirmation|null{
 if(!nodeId)return null;
 const continuous=previous?.nodeId===nodeId&&time>=previous.time&&time-previous.time<=5000;
 return {nodeId,hits:continuous?Math.min(3,previous.hits+1):1,time};
}
