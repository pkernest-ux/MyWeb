import test from 'node:test';
import assert from 'node:assert/strict';
import {loadV4Source} from '../scripts/ar-v4-worker-runtime.mjs';
const {cameraOrientationSensor:camera,isFreshCameraSensor:fresh,manualHeadingAgeValid:manualAge}=loadV4Source('ar-v4-camera-orientation.ts');
const raw={heading:90,kind:'absolute',accuracy:null,capturedAt:new Date().toISOString(),alpha:270,beta:90,gamma:0,screenAngle:0};
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
test('rear camera heading includes all three orientation angles',()=>{
 near(camera(raw).heading,90);
 near(camera({...raw,gamma:30}).heading,60);
 near(camera({...raw,alpha:0,beta:60,gamma:30}).heading,326.30993247402023);
 assert.equal(raw.heading,90,'survey reading is not mutated');
});
test('screen rotation does not add ninety degrees to the camera optical axis',()=>{
 near(camera({...raw,screenAngle:90}).heading,90);
 assert.equal(camera({...raw,screenAngle:90}).screenAngle,90,'fusion receives reset identity');
});
test('flat, missing and invalid readings cannot drive guidance',()=>{
 for(const changed of [{beta:0,gamma:0},{beta:10,gamma:0},{alpha:null},{beta:NaN},{gamma:null},{kind:'unavailable'}])assert.equal(camera({...raw,...changed}).heading,null);
 near(camera({...raw,kind:'relative',heading:0}).heading,90);
});
test('manual guidance rejects stale, future and inaccurate readings and clock rollback',()=>{
 const now=Date.now(),sample={...raw,capturedAt:new Date(now).toISOString()};
 assert.equal(fresh(sample,now),true);
 assert.equal(fresh(sample,now+1001),false);
 assert.equal(fresh(sample,now-1),false);
 assert.equal(fresh({...sample,accuracy:100},now),false);
 assert.equal(fresh({...sample,heading:null},now),false);
 assert.equal(manualAge(now,now+19999),true);
 assert.equal(manualAge(now,now+20000),false);
 assert.equal(manualAge(now,now-1),false);
});
