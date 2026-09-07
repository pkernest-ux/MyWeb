import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';
import postcss from 'postcss';

test('field palette stays V4-scoped and key text pairs meet normal-text contrast', () => {
  const theme = readFileSync(new URL('../src/ar-v4-editor-theme.css', import.meta.url), 'utf8');
  postcss.parse(theme).walkRules(rule => {
    assert.ok(rule.selector.startsWith('.v4-map-editor') || rule.selector === 'body:has(.v4-map-editor)', `Unscoped theme: ${rule.selector}`);
  });
  const luminance = hex => {
    const expanded = hex.length === 4 ? '#' + [...hex.slice(1)].map(c => c + c).join('') : hex;
    const rgb = expanded.slice(1).match(/../g).map(c => parseInt(c, 16) / 255).map(c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
    return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  };
  for (const [foreground, background] of [['#243c3b', '#fff'], ['#536760', '#f8faf6'], ['#fff', '#245e50'], ['#244c38', '#e9f0df'], ['#82591c', '#fff'], ['#9b4d2e', '#fff7f3'], ['#fff', '#a33f32']]) {
    assert.ok(theme.includes(foreground) && theme.includes(background));
    const values = [luminance(foreground), luminance(background)].sort((a,b) => b-a);
    assert.ok((values[0] + .05) / (values[1] + .05) >= 4.5, `${foreground} on ${background}`);
  }
  const entry = readFileSync(new URL('../src/ar-entry.tsx', import.meta.url), 'utf8');
  assert.ok(entry.indexOf('import "./ar-v4-editor-theme.css"') > entry.indexOf('import "./ar.css"'));
});

// These tests exercise the real JSX and extracted handlers without a browser,
// camera, network or data writes. They do not claim visual/physical-device QA.
const source = readFileSync(new URL('../ar.tsx', import.meta.url), 'utf8');
const syntax = ts.createSourceFile('ar.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const require = createRequire(import.meta.url);
const compilerOptions = {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.CommonJS,
  jsx: ts.JsxEmit.React,
  esModuleInterop: true,
};

test('V4 route focus fits all current-segment points and reserves overlay space across viewport sizes', () => {
  const source = readFileSync(new URL('../src/ar-v4-route-focus.ts', import.meta.url), 'utf8');
  const sandbox = { exports: {} };
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions }).outputText, sandbox);
  const fit = sandbox.exports.fitRouteSegment;
  for (const viewport of [{ width: 390, height: 510 }, { width: 1200, height: 620 }, { width: 320, height: 240 }]) {
    const world = { width: viewport.width * .8, height: viewport.height };
    for (const points of [[{ x: .1, y: .15 }, { x: .9, y: .8 }], [{ x: .48, y: .8 }, { x: .51, y: .75 }], [{ x: 0, y: 0 }], [{ x: 1, y: 1 }], [{ x: .2, y: .2 }, { x: .8, y: .2 }, { x: .8, y: .9 }]]) {
      const transform = fit(points, viewport, world);
      assert.ok(transform.scale > 0 && transform.scale <= 3.5);
      for (const point of points) {
        const x = viewport.width / 2 + (point.x - .5) * world.width * transform.scale + transform.x;
        const y = viewport.height / 2 + (point.y - .5) * world.height * transform.scale + transform.y;
        assert.ok(x >= Math.min(44, viewport.width * .12) - .001);
        assert.ok(x <= viewport.width - Math.min(200, viewport.width * .34) + .001);
        assert.ok(y >= Math.min(56, viewport.height * .18) - .001);
        assert.ok(y <= viewport.height - Math.min(56, viewport.height * .18) + .001);
      }
    }
    assert.notDeepEqual(fit([{ x: .2, y: .2 }], viewport, world), fit([{ x: .8, y: .8 }], viewport, world));
    assert.equal(fit([], viewport, world), null);
    assert.equal(fit([{ x: NaN, y: .5 }], viewport, world), null);
  }
  assert.equal(fit([{ x: .5, y: .5 }], { width: 0, height: 100 }, { width: 100, height: 100 }), null);
  const viewport = { width: 390, height: 510 };
  const levels = [.5, .25, .1, .02].map(span => fit([{ x: .2, y: .2 }, { x: .2 + span, y: .2 + span }], viewport, viewport).scale);
  assert.ok(levels.every((level, index) => index === 0 || level >= levels[index - 1]));
  assert.ok(levels.at(-1) > 2 && levels.at(-1) < 3.5, 'Short legs are closer than the old cap without excessive enlargement');
  const legacyEntry = readFileSync(new URL('../src/ar-v3-entry.tsx', import.meta.url), 'utf8');
  assert.ok(!legacyEntry.includes('v4RouteFocus'));
  assert.ok(readFileSync(new URL('../src/ar-v4-navigation-entry.tsx', import.meta.url), 'utf8').includes('<ARNavigationV3 v4RouteFocus PublicGuide={PublicGuide} />'));
});

function findVariable(name) {
  let result;
  const visit = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(syntax) === name) result = node;
    ts.forEachChild(node, visit);
  };
  visit(syntax);
  assert.ok(result?.initializer, `Expected real implementation of ${name}`);
  return result;
}

function handler(name, context = {}) {
  const expression = findVariable(name).initializer.getText(syntax);
  const code = ts.transpileModule(`exports.handler = ${expression};`, { compilerOptions }).outputText;
  const sandbox = { exports: {}, ...context };
  vm.runInNewContext(code, sandbox, { timeout: 1000 });
  return sandbox.exports.handler;
}

function descendants(root, predicate) {
  const matches = [];
  const visit = node => {
    if (predicate(node)) matches.push(node);
    ts.forEachChild(node, visit);
  };
  visit(root);
  return matches;
}

function jsxAttribute(opening, name) {
  return opening.attributes.properties.find(item => ts.isJsxAttribute(item) && item.name.getText() === name);
}

function renderEditor(v4Integration) {
  const code = ts.transpileModule(source, { compilerOptions }).outputText;
  const rejectSideEffect = () => { throw new Error('SSR must not perform IO'); };
  const sandbox = {
    exports: {},
    require(name) {
      if (name === './src/ar-v3-image-recognition') {
        return { OrbImageTracker: class { constructor() { rejectSideEffect(); } } };
      }
      return require(name);
    },
    window: { location: { search: v4Integration ? '?embedded=1&v4=1' : '?embedded=1', origin: 'http://127.0.0.1' } },
    document: { getElementById: () => null },
    localStorage: { getItem: () => null, setItem: rejectSideEffect, removeItem: rejectSideEffect },
    fetch: rejectSideEffect,
    URLSearchParams,
    console,
  };
  vm.runInNewContext(code, sandbox, { timeout: 1000 });
  return renderToStaticMarkup(React.createElement(sandbox.exports.default, { embedded: true, v4Integration }));
}

test('SSR renders the existing V3 editor without opting into V4 tools or storage', () => {
  const html = renderEditor(false);
  assert.ok(html.includes('aria-label="切換目前編輯樓層"'));
  assert.ok(html.includes('data-testid="editor-map"'));
  assert.ok(html.includes('GitHub 更新本機'));
  assert.ok(!html.includes('class="v4-map-editor'));
  assert.ok(!html.includes('data-testid="v4-editor-notice"'));
  assert.ok(!html.includes('data-tool-group='));
});

test('V4 renders five labelled tool categories with unique disclosure and region relationships', () => {
  const html = renderEditor(true);
  const groups = [...html.matchAll(/data-tool-group="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(groups, ['floor', 'path', 'marker', 'test', 'save']);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'IDs must remain unique in the embedded editor');
  for (const [id, title] of Object.entries({ floor: '樓層與底圖', path: '路徑節點', marker: 'AR 點位', test: '路網測試', save: '資料保存' })) {
    const toggle = html.match(new RegExp(`<button\\b[^>]*id="v4-tool-${id}"[^>]*>`))?.[0];
    const panel = html.match(new RegExp(`<div\\b[^>]*id="v4-panel-${id}"[^>]*>`))?.[0];
    assert.ok(toggle, title);
    assert.ok(toggle.includes('type="button"'), `${title} uses keyboard-operable buttons`);
    assert.ok(toggle.includes(`aria-controls="v4-panel-${id}"`));
    assert.ok(toggle.includes('aria-expanded="false"'));
    assert.ok(panel?.includes(`aria-labelledby="v4-tool-${id}"`));
    assert.ok(panel?.includes('role="region"'));
    assert.ok(panel?.includes('hidden=""'), `${title} starts collapsed`);
    assert.ok(html.includes(`<strong>${title}</strong>`));
  }
  for (const label of ['編輯專案', '編輯建物', '切換目前編輯樓層', '選擇路徑節點編輯', '選擇 AR 點位編輯']) {
    assert.equal(html.split(`aria-label="${label}"`).length - 1, 1, `${label} must not be duplicated by the legacy toolbar`);
  }
  assert.ok(html.includes('data-map-control="tools"'));
  assert.ok(html.includes('data-map-control="context"'));
  assert.ok(html.includes('class="v4-quick-actions"'));
  assert.ok(!html.includes('>瀏覽地圖</span>'));
  assert.ok(html.includes('id="v4-editor-tools"'));
});

test('opening and closing a category changes presentation only and correctly exposes its panel', () => {
  for (const previous of [null, 'floor', 'path']) {
    let chosen = previous;
    const group = handler('renderV4ToolGroup', {
      React,
      v4ToolGroup: previous,
      setV4ToolGroup: update => { chosen = update(chosen); },
      ChevronDown: props => React.createElement('span', props),
    });
    const element = group('floor', '樓層與底圖', '切換樓層', props => React.createElement('span', props), 'Floor tools');
    const heading = React.Children.toArray(element.props.children)[0];
    const toggle = React.Children.only(heading.props.children);
    const panel = React.Children.toArray(element.props.children)[1];
    assert.equal(toggle.props['aria-expanded'], previous === 'floor');
    assert.equal(panel.props.hidden, previous !== 'floor');
    assert.equal(toggle.props['aria-controls'], panel.props.id);
    assert.equal(panel.props['aria-labelledby'], toggle.props.id);
    toggle.props.onClick();
    assert.equal(chosen, previous === 'floor' ? null : 'floor');
  }
});

test('every V4 mode transition is exclusive and clears stale selections, drags and test state', () => {
  const modes = { path: 'setIsPathMode', marker: 'setIsAddMode', shaft: 'setIsToggleShaftMode', measure: 'setIsMeasuring', test: 'setIsNavTestMode' };
  for (const previous of [null, ...Object.keys(modes)]) {
    for (const next of [null, ...Object.keys(modes)]) {
      const state = Object.fromEntries(Object.entries(modes).map(([mode, setter]) => [setter, mode === previous]));
      const setters = [
        ...Object.values(modes), 'setPathStartNodeId', 'setSelectedMarkerId', 'setSelectedWaypointId',
        'setIsConfirmingDelete', 'setDraggingId', 'setIsPanning', 'setHoverPos', 'setMeasurePoints',
        'setNavTestPoints', 'setNavTestPath', 'setV4ToolGroup', 'setV4ToolsVisible',
      ];
      const context = {
        ...Object.fromEntries(setters.map(name => [name, value => { state[name] = value; }])),
        nodePointerStartRef: { current: { nodeId: 'previous-node' } },
        window: { matchMedia: () => ({ matches: false }) },
        requestAnimationFrame: callback => callback(),
        v4EndModeRef: { current: null },
        v4ToolsToggleRef: { current: null },
      };
      handler('setV4EditingMode', context)(next);
      for (const [mode, setter] of Object.entries(modes)) assert.equal(state[setter], mode === next, `${previous} -> ${next}: ${mode}`);
      for (const setter of ['setPathStartNodeId', 'setSelectedMarkerId', 'setSelectedWaypointId', 'setDraggingId', 'setHoverPos', 'setV4ToolGroup']) assert.equal(state[setter], null, setter);
      for (const setter of ['setIsConfirmingDelete', 'setIsPanning']) assert.equal(state[setter], false, setter);
      for (const setter of ['setMeasurePoints', 'setNavTestPoints', 'setNavTestPath']) assert.equal(state[setter].length, 0, setter);
      assert.equal(context.nodePointerStartRef.current, null);
      assert.ok(!('setV4ToolsVisible' in state), 'Desktop category list remains available');
    }
  }
});

test('activating a mobile mode collapses tools, scrolls to the map and restores a visible focus target', () => {
  const calls = [];
  const setters = [
    'setIsPathMode', 'setIsAddMode', 'setIsToggleShaftMode', 'setIsMeasuring', 'setIsNavTestMode',
    'setPathStartNodeId', 'setSelectedMarkerId', 'setSelectedWaypointId', 'setIsConfirmingDelete',
    'setDraggingId', 'setIsPanning', 'setHoverPos', 'setMeasurePoints', 'setNavTestPoints', 'setNavTestPath', 'setV4ToolGroup',
  ];
  handler('setV4EditingMode', {
    ...Object.fromEntries(setters.map(name => [name, () => {}])),
    setV4ToolsVisible: value => calls.push(['visible', value]),
    nodePointerStartRef: { current: null },
    window: { matchMedia: () => ({ matches: true }) },
    requestAnimationFrame: callback => callback(),
    wrapperRef: { current: { scrollIntoView: options => calls.push(['scroll', options.block]) } },
    v4EndModeRef: { current: { focus: options => calls.push(['focus', options.preventScroll]) } },
    v4ToolsToggleRef: { current: null },
  })('path');
  assert.deepEqual(calls, [['visible', false], ['scroll', 'start'], ['focus', true]]);
});

test('a backend read failure visibly opens the save/recovery category while preserving cached drafts', () => {
  const load = findVariable('loadV4Backend');
  const catchClause = descendants(load, ts.isCatchClause)[0];
  assert.ok(catchClause);
  const calls = [];
  const context = {
    error: new Error('Read failed'),
    cachedProjects: null,
    setV4Notice: text => calls.push(['notice', text]),
    setV4LoadFailed: value => calls.push(['failed', value]),
    setV4ToolsVisible: value => calls.push(['visible', value]),
    setV4ToolGroup: value => calls.push(['group', value]),
  };
  vm.runInNewContext(catchClause.block.getText(syntax), context, { timeout: 1000 });
  assert.deepEqual(calls.slice(1), [['failed', true], ['visible', true], ['group', 'save']]);
  assert.ok(calls[0][1].includes('現有草稿不會被覆蓋'));
});

test('map pointer-down ignores form controls and every data-map-control surface', () => {
  for (const control of ['button', 'input', 'select', 'textarea', 'label', 'a', '[data-map-control]']) {
    const calls = [];
    const down = handler('handleMapPointerDown', {
      setIsPanning: value => calls.push(['pan', value]),
      setPanStart: value => calls.push(['start', value]),
      setPanStartClient: value => calls.push(['client', value]),
      mapTransform: { x: 0, y: 0 },
    });
    down({ button: 0, target: {
      closest: selector => selector.split(',').map(part => part.trim()).includes(control) ? {} : null,
      setPointerCapture: () => calls.push(['capture']),
    } });
    assert.deepEqual(calls, [], `${control} must not begin a map drag or creation`);
  }
});

test('map pointer-up on controls clears drag state without creating or connecting nodes', () => {
  for (const control of ['button', 'input', 'select', 'textarea', 'label', 'a', '[data-map-control]']) {
    const calls = [];
    const up = handler('handleMapPointerUp', {
      setIsPanning: value => calls.push(['pan', value]),
      setDraggingId: value => calls.push(['drag', value]),
      // An unintended fall-through should fail rather than silently passing.
      addWaypointAndEdge: () => assert.fail('Control tap created a waypoint'),
      connectToNode: () => assert.fail('Control tap connected a waypoint'),
      setBuildings: () => assert.fail('Control tap changed marker data'),
    });
    up({ pointerId: 7, target: {
      closest: selector => selector.split(',').map(part => part.trim()).includes(control) ? {} : null,
      hasPointerCapture: id => id === 7,
      releasePointerCapture: id => calls.push(['release', id]),
    } });
    assert.deepEqual(calls, [['pan', false], ['drag', null], ['release', 7]], control);
  }
});

test('V4 node long-press opens editing rather than deleting a node or changing cross-floor links', () => {
  const nodeElements = descendants(syntax, ts.isJsxOpeningElement)
    .filter(opening => jsxAttribute(opening, 'data-node-id'));
  assert.equal(nodeElements.length, 2, 'Both route nodes and AR points must be checked');
  for (const element of nodeElements) {
    const action = jsxAttribute(element, 'onContextMenu')?.initializer?.expression;
    assert.ok(action);
    for (const mode of ['path', 'shaft', 'marker']) {
      const selected = [];
      const context = {
        v4Integration: true,
        isPathMode: mode === 'path', isToggleShaftMode: mode === 'shaft', isAddMode: mode === 'marker',
        wp: { id: 'node-1', isVerticalShaft: true }, marker: { id: 'node-1', isVerticalShaft: true },
        selectV4ExistingNode: id => selected.push(id),
        setSelectedMarkerId: id => { if (id) selected.push(id); },
        setSelectedWaypointId: id => { if (id) selected.push(id); },
        setIsConfirmingDelete: value => assert.equal(value, false, 'Long-press must not arm deletion'),
        deleteNode: () => assert.fail('V4 long-press bypassed explicit deletion confirmation'),
        handleToggleVerticalShaft: () => assert.fail('V4 long-press silently changed cross-floor links'),
      };
      const callback = vm.runInNewContext(`(${action.getText(syntax)})`, context);
      callback({ preventDefault() {}, stopPropagation() {} });
      assert.ok(selected.includes('node-1'), `${element.tagName.getText(syntax)} ${mode}: long-press opens the selected node`);
    }
    const legacyCalls = [];
    vm.runInNewContext(`(${action.getText(syntax)})`, {
      v4Integration: false, isPathMode: true,
      wp: { id: 'legacy-node' }, marker: { id: 'legacy-node' },
      deleteNode: id => legacyCalls.push(id),
    })({ preventDefault() {} });
    assert.deepEqual(legacyCalls, ['legacy-node'], 'V3 retains its original context-menu behavior');
  }
});

test('floor switching clears editing selection but preserves cross-floor test endpoints', () => {
  const calls = {};
  const setters = Object.fromEntries([
    'setSelectedMarkerId', 'setSelectedWaypointId', 'setDraggingId', 'setPathStartNodeId',
    'setHoverPos', 'setReferenceFloorId', 'setActiveFloorId', 'setNavTestPoints', 'setNavTestPath',
    'setIsPanning',
  ].map(name => [name, value => { calls[name] = value; }]));
  const changeFloor = handler('switchEditingFloor', { activeFloorId: 'floor-1', ...setters });
  changeFloor('floor-2');
  assert.equal(calls.setActiveFloorId, 'floor-2');
  for (const name of ['setSelectedMarkerId', 'setSelectedWaypointId', 'setDraggingId', 'setPathStartNodeId', 'setHoverPos']) {
    assert.equal(calls[name], null, name);
  }
  assert.equal(calls.setReferenceFloorId, '');
  assert.ok(!('setNavTestPoints' in calls), 'The first test endpoint must survive changing floors');
  assert.ok(!('setNavTestPath' in calls), 'The multi-floor preview must not be erased by floor selection');
});

test('return-to-capture only switches the parent tab and leaves the editor draft mounted', () => {
  const parentSource = readFileSync(new URL('../src/ar-v4-field-app.tsx', import.meta.url), 'utf8');
  const parent = ts.createSourceFile('ar-v4-field-app.tsx', parentSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const openings = descendants(parent, ts.isJsxOpeningElement);
  const returnButton = openings.find(opening => jsxAttribute(opening, 'className')?.initializer?.text?.split(' ').includes('graph-return'));
  assert.ok(returnButton, 'An explicit return-to-capture button must exist');
  const action = jsxAttribute(returnButton, 'onClick')?.initializer?.expression;
  assert.ok(action);
  const calls = [];
  const callback = vm.runInNewContext(`(${action.getText(parent)})`, { selectTab: tab => calls.push(tab) });
  callback();
  assert.deepEqual(calls, ['location']);

  const selectTab = descendants(parent, node => ts.isFunctionDeclaration(node) && node.name?.text === 'selectTab')[0];
  const context = { exports: {}, setMenuOpen:()=>{}, setNotice:()=>{}, tabRef: { current: 'graph' }, tabScroll: { current: {} }, window: { scrollY: 173 }, setTab: tab => calls.push(tab) };
  vm.runInNewContext(ts.transpileModule(`${selectTab.getText(parent)}; exports.selectTab = selectTab;`, { compilerOptions }).outputText, context);
  context.exports.selectTab('location');
  assert.equal(context.tabRef.current, 'location');
  assert.equal(context.tabScroll.current.graph, 173);
  assert.deepEqual(calls, ['location', 'location']);

  const frames = descendants(parent, ts.isJsxSelfClosingElement).filter(node => node.tagName.getText(parent) === 'iframe');
  const graphFrame = frames.find(frame => jsxAttribute(frame, 'title')?.initializer?.text === '地圖與路網編輯器');
  assert.ok(graphFrame);
  assert.ok(ts.isBinaryExpression(graphFrame.parent));
  assert.equal(graphFrame.parent.left.getText(parent), 'editorSrc', 'Tab selection must not unmount the dirty editor');
  const help = openings.find(opening => opening.tagName.getText(parent) === 'details' && jsxAttribute(opening, 'className')?.initializer?.text === 'graph-instructions');
  assert.ok(help, 'Help should use native keyboard-operable disclosure semantics');
});

test('navigation test stops the capture camera and mounts only in the active unlocked camera tab', () => {
  const text = readFileSync(new URL('../src/ar-v4-field-app.tsx', import.meta.url), 'utf8');
  const parent = ts.createSourceFile('field.tsx', text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const button = descendants(parent, ts.isJsxOpeningElement).find(node => node.tagName.getText(parent) === 'button' && jsxAttribute(node, 'onClick')?.initializer?.getText(parent).includes('setNavigationOpen(true)'));
  const calls = [];
  const action = jsxAttribute(button, 'onClick').initializer.expression;
  vm.runInNewContext(`(${action.getText(parent)})`, { stopCamera: () => calls.push('stop'), setNavigationOpen: value => calls.push(value) })();
  assert.deepEqual(calls, ['stop', true]);
  const frame = descendants(parent, ts.isJsxSelfClosingElement).find(node => jsxAttribute(node, 'title')?.initializer?.text === 'AR 導航流程測試');
  const url=vm.runInNewContext(jsxAttribute(frame,'src').initializer.expression.getText(parent),{projectId:'project/a',nodeId:'node&b',encodeURIComponent});
  assert.equal(url,'./ar-v4-navigation.html?projectId=project%2Fa&origin=node%26b');
  let guard = frame.parent;
  while (guard && !ts.isBinaryExpression(guard)) guard = guard.parent;
  assert.ok(guard);
  for (const tab of ['camera', 'graph', 'capture', 'location']) for (const navigationOpen of [false, true]) for (const editorLocked of [false, true]) {
    assert.equal(vm.runInNewContext(guard.left.getText(parent), { tab, navigationOpen, editorLocked }), tab === 'camera' && navigationOpen && !editorLocked);
  }
  assert.ok(text.includes('setNavigationOpen(false); }, [tab, projectId, revision]'), 'Leaving or changing saved data resets navigation');
});
