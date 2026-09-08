import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {startLocalServer} from './ar-v4-local-server.mjs';

// A separate local dataset avoids replacing existing field drafts or cloud data.
// The normal server initializes this directory from ar-data.json only if absent.
const rootDir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const local=await startLocalServer({rootDir,dataDir:path.join(rootDir,'.local','ar-v4-fishnet'),port:8081});
console.log(`Fishnet 本機試驗 · 獨立資料副本（不會同步 GitHub／Azure）\n${local.origin}/ar-v4-field.html?v=fishnet-20260907\n${local.origin}/ar-v4-navigation.html?v=fishnet-20260907`);
for(const signal of ['SIGINT','SIGTERM'])process.once(signal,()=>{void local.close();});
