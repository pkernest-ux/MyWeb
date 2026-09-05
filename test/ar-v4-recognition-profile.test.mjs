import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const workerSource = await readFile(new URL("../src/ar-v3-image-recognition.worker.ts", import.meta.url), "utf8");
const workerCompiled = ts.transpileModule(workerSource, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
const workerExports = {};
vm.runInNewContext(workerCompiled, { exports: workerExports, require, self: { addEventListener() {}, postMessage() {} } });
const { isUsableQuadrilateral } = workerExports;

const trackerSource = await readFile(new URL("../src/ar-v3-image-recognition.ts", import.meta.url), "utf8");
const trackerCompiled = ts.transpileModule(trackerSource, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
const { OrbImageTracker } = await import(`data:text/javascript;base64,${Buffer.from(trackerCompiled).toString("base64")}`);
const rectangle = (left, top, right, bottom) => [{ x: left, y: top }, { x: right, y: top }, { x: right, y: bottom }, { x: left, y: bottom }];

test("legacy profile retains its 88 percent area bound; explicit field profile accepts full-frame scenes", () => {
  const fullFrame = rectangle(0, 0, 420, 315);
  assert.equal(isUsableQuadrilateral(fullFrame, 420, 315), false);
  assert.equal(isUsableQuadrilateral(fullFrame, 420, 315, false), false);
  assert.equal(isUsableQuadrilateral(fullFrame, 420, 315, true), true);
  const marker = rectangle(50, 40, 370, 275);
  assert.equal(isUsableQuadrilateral(marker, 420, 315), true);
  assert.equal(isUsableQuadrilateral(marker, 420, 315, true), true);
  assert.equal(isUsableQuadrilateral(rectangle(-21, -15, 441, 330), 420, 315, true), false);
});

test("full-scene profile keeps finite-corner, minimum-area, edge-ratio and boundary guards", () => {
  assert.equal(isUsableQuadrilateral(rectangle(0, 0, 10, 10), 420, 315, true), false);
  assert.equal(isUsableQuadrilateral(rectangle(0, 0, 410, 30), 420, 315, true), false);
  assert.equal(isUsableQuadrilateral(rectangle(-100, 0, 250, 250), 420, 315, true), false);
  assert.equal(isUsableQuadrilateral(rectangle(NaN, 0, 400, 300), 420, 315, true), false);
  assert.equal(isUsableQuadrilateral([{ x: 0, y: 0 }], 420, 315, true), false);
});

test("tracker sends full-scene opt-in with detect requests and defaults to legacy behavior", async () => {
  const oldWindow = globalThis.window;
  globalThis.window = { setTimeout, clearTimeout };
  try {
    for (const [options, expected] of [[undefined, false], [{}, false], [{ fullScene: false }, false], [{ fullScene: true }, true]]) {
      const tracker = new OrbImageTracker(options);
      const requests = [];
      tracker.worker = {
        postMessage(message) {
          requests.push(message);
          queueMicrotask(() => tracker.handleMessage({ data: { requestId: message.requestId, ok: true, result: null } }));
        },
        removeEventListener() {}, terminate() {},
      };
      tracker.prepared = true;
      const canvas = { width: 2, height: 2, getContext: () => ({ getImageData: () => ({ data: new Uint8ClampedArray(16) }) }) };
      assert.equal(await tracker.detect(canvas), null);
      assert.equal(requests.length, 1);
      assert.equal(requests[0].type, "detect");
      assert.equal(requests[0].fullScene, expected);
      tracker.dispose();
    }
  } finally {
    if (oldWindow === undefined) delete globalThis.window;
    else globalThis.window = oldWindow;
  }
});
