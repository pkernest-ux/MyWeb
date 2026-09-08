import assert from 'node:assert/strict';
import test from 'node:test';
import sharp from 'sharp';
import {compilePublicCatalog} from '../scripts/ar-v4-feature-publisher.mjs';
import {loadV4Source} from '../scripts/ar-v4-worker-runtime.mjs';
const engine=loadV4Source();
const width=320,height=240,raw=Buffer.alloc(width*height*3,245);
for(let i=0;i<100;i++){const x=(i*73)%290,y=(i*41)%210;for(let a=x;a<x+8+i%20;a++)for(let b=y;b<y+8+i%20;b++){const at=(b*width+a)*3;raw[at]=i*71%255;raw[at+1]=i*31%255;raw[at+2]=i*17%255;}}
const jpeg=await sharp(raw,{raw:{width,height,channels:3}}).jpeg().toBuffer(),photo='data:image/jpeg;base64,'+jpeg.toString('base64');
const fixture={projects:[{project:{id:'p',name:'Test'},buildings:[{id:'b',name:'B',floors:[{id:'f',name:'F',imageUrl:photo,markers:[{id:'a',title:'A',x:.2,y:.2,fieldObservations:[{id:'o',imageUrl:photo,mapBearing:45,note:'private collection note'}]}],waypoints:[],edges:[]}]}]}]};
test('published catalog contains map URLs and immutable packs, no observation images or private capture notes',async()=>{
 const before=JSON.stringify(fixture),{catalog,assets}=await compilePublicCatalog(fixture);
 assert.equal(JSON.stringify(fixture),before);assert.equal(catalog.stats.targetCount,1);assert.equal(catalog.stats.failedCount,0);
 const json=JSON.stringify(catalog);assert.ok(!json.includes('data:image'));assert.ok(!json.includes('fieldObservations'));assert.ok(!json.includes('private collection note'));
 const ref=catalog.projects[0].buildings[0].floors[0].markers[0].recognitionRefs[0];assert.match(ref.packUrl,/packs\/[a-f0-9]{64}\.bin$/);assert.equal(ref.bearing,45);
 assert.equal(catalog.stats.fishnetTargetCount,1);assert.equal(catalog.fishnetAlgorithm,'v4-jsfeat-orb-fishnet-1');assert.match(ref.fishnetPackUrl,/packs\/[a-f0-9]{64}\.bin$/);
 const fishnetBytes=assets.get(ref.fishnetPackUrl.slice(2));assert.ok(fishnetBytes.length<=65536);assert.notEqual(ref.packUrl,ref.fishnetPackUrl);
 const fishnet=engine.decodeFeatureTarget(fishnetBytes.buffer.slice(fishnetBytes.byteOffset,fishnetBytes.byteOffset+fishnetBytes.byteLength),ref,{profile:'fishnet'});
 assert.equal(fishnet.fishnet.mode,'image-only');assert.ok(fishnet.fishnet.features.every(p=>p.u===null&&p.mapYaw===null));
 const bytes=assets.get(ref.packUrl.slice(2)),buffer=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
 const target=engine.decodeFeatureTarget(buffer,ref);assert.equal(target.nodeId,'a');assert.equal(target.levels.length,3);assert.ok(target.levels.reduce((n,l)=>n+l.count,0)>=12);
 assert.throws(()=>engine.decodeFeatureTarget(buffer,{...ref,nodeId:'wrong'}),/節點/);
 assert.throws(()=>engine.decodeFeatureTarget(buffer.slice(0,20),ref),/標頭|完整/);
 const bad=buffer.slice(0);new DataView(bad).setUint32(0,90000,true);assert.throws(()=>engine.decodeFeatureTarget(bad,ref),/標頭/);
 const changed=structuredClone(fixture);changed.projects[0].buildings[0].floors[0].markers[0].fieldObservations[0].mapBearing=90;
 const updated=await compilePublicCatalog(changed);assert.notEqual(updated.catalog.revision,catalog.revision);
 assert.equal(updated.catalog.projects[0].buildings[0].floors[0].markers[0].recognitionRefs[0].packUrl,ref.packUrl,'metadata-only calibration reuses descriptor bytes');
});
test('panorama calibration changes only experimental metadata and scopes cell IDs to the node and batch',async()=>{
 const data=structuredClone(fixture),node=data.projects[0].buildings[0].floors[0].markers[0];
 node.fieldObservations[0]={...node.fieldObservations[0],source:'panorama-frame',panorama:{batchId:'batch',yaw:45,pitch:0,fov:75}};
 const before=JSON.stringify(data),first=await compilePublicCatalog(data);
 const reference=r=>r.catalog.projects[0].buildings[0].floors[0].markers[0].recognitionRefs[0];
 const unpack=(r)=>{const ref=reference(r),b=r.assets.get(ref.fishnetPackUrl.slice(2));return engine.decodeFeatureTarget(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),ref,{profile:'fishnet'});};
 const initial=unpack(first);assert.equal(initial.fishnet.mode,'panorama');assert.equal(initial.fishnet.projection.panoramaId,JSON.stringify(['p','b','f','a','batch']));
 assert.equal(JSON.stringify(data),before,'publishing never changes survey records');
 node.fieldObservations[0].mapBearing=90;const calibrated=await compilePublicCatalog(data),adjusted=unpack(calibrated);
 assert.equal(reference(first).packUrl,reference(calibrated).packUrl,'original descriptor pack remains byte-identical');
 assert.notEqual(reference(first).fishnetPackUrl,reference(calibrated).fishnetPackUrl,'new header is content-addressed after calibration');
 assert.deepEqual(initial.fishnet.features.map(p=>p.referenceCell.id),adjusted.fishnet.features.map(p=>p.referenceCell.id),'same panorama rays keep IDs');
 const delta=((adjusted.fishnet.features[0].mapYaw-initial.fishnet.features[0].mapYaw)+360)%360;assert.ok(Math.abs(delta-45)<1e-9);
 node.id='another';const elsewhere=unpack(await compilePublicCatalog(data));assert.notEqual(elsewhere.fishnet.features[0].referenceCell.id,initial.fishnet.features[0].referenceCell.id);
 delete node.fieldObservations[0].panorama.batchId;assert.equal(unpack(await compilePublicCatalog(data)).fishnet.mode,'image-only','old incomplete panorama metadata stays explicitly image-only');
});
test('bad/untrusted photos are reported without fetching them or disabling the route catalog',async()=>{
 const data=structuredClone(fixture);data.projects[0].buildings[0].floors[0].markers[0].fieldObservations=[{id:'bad',imageUrl:'https://127.0.0.1/private'},{id:'broken',imageUrl:'data:image/jpeg;base64,YQ=='}];
 const {catalog}=await compilePublicCatalog(data);assert.equal(catalog.stats.targetCount,0);assert.equal(catalog.stats.failedCount,2);
 assert.ok(catalog.projects[0].buildings[0].floors[0].markers[0].recognitionRefs.every(r=>r.error&&!r.packUrl));
});
