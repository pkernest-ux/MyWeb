import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

const sourceRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../src');
const require=createRequire(import.meta.url);
// The publisher and offline regression tests execute the very same pure worker
// modules as the browser, including Fishnet projection math. No network access.
export function loadV4Source(name='ar-v4-image-recognition.worker.ts',{self={addEventListener(){},postMessage(){}}}={}){
 const modules=new Map();
 function load(filename){
  if(!filename.startsWith(sourceRoot+path.sep)||!filename.endsWith('.ts'))throw Error('Unexpected V4 source module');
  if(modules.has(filename))return modules.get(filename).exports;
  const module={exports:{}};modules.set(filename,module);
  const source=readFileSync(filename,'utf8');
  const code=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;
  const localRequire=id=>id.startsWith('.')?load(path.resolve(path.dirname(filename),id.endsWith('.ts')?id:id+'.ts')):require(id);
  vm.runInNewContext(code,{exports:module.exports,module,require:localRequire,TextEncoder,TextDecoder,performance,self},{filename});
  return module.exports;
 }
 return load(path.resolve(sourceRoot,name));
}
