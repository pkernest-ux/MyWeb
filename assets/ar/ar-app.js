function uv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gu={exports:{}},Ja={},ju={exports:{}},qt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function dv(){if(dm)return qt;dm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=S&&B[S]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function y(B,le,et){this.props=B,this.context=le,this.refs=D,this.updater=et||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,le){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,le,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(B,le,et){this.props=B,this.context=le,this.refs=D,this.updater=et||M}var R=L.prototype=new _;R.constructor=L,C(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(B,le,et){var st,Te={},ue=null,be=null;if(le!=null)for(st in le.ref!==void 0&&(be=le.ref),le.key!==void 0&&(ue=""+le.key),le)V.call(le,st)&&!O.hasOwnProperty(st)&&(Te[st]=le[st]);var Se=arguments.length-2;if(Se===1)Te.children=et;else if(1<Se){for(var Fe=Array(Se),ot=0;ot<Se;ot++)Fe[ot]=arguments[ot+2];Te.children=Fe}if(B&&B.defaultProps)for(st in Se=B.defaultProps,Se)Te[st]===void 0&&(Te[st]=Se[st]);return{$$typeof:s,type:B,key:ue,ref:be,props:Te,_owner:I.current}}function N(B,le){return{$$typeof:s,type:B.type,key:le,ref:B.ref,props:B.props,_owner:B._owner}}function Y(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function H(B){var le={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(et){return le[et]})}var Q=/\/+/g;function re(B,le){return typeof B=="object"&&B!==null&&B.key!=null?H(""+B.key):le.toString(36)}function pe(B,le,et,st,Te){var ue=typeof B;(ue==="undefined"||ue==="boolean")&&(B=null);var be=!1;if(B===null)be=!0;else switch(ue){case"string":case"number":be=!0;break;case"object":switch(B.$$typeof){case s:case e:be=!0}}if(be)return be=B,Te=Te(be),B=st===""?"."+re(be,0):st,P(Te)?(et="",B!=null&&(et=B.replace(Q,"$&/")+"/"),pe(Te,le,et,"",function(ot){return ot})):Te!=null&&(Y(Te)&&(Te=N(Te,et+(!Te.key||be&&be.key===Te.key?"":(""+Te.key).replace(Q,"$&/")+"/")+B)),le.push(Te)),1;if(be=0,st=st===""?".":st+":",P(B))for(var Se=0;Se<B.length;Se++){ue=B[Se];var Fe=st+re(ue,Se);be+=pe(ue,le,et,Fe,Te)}else if(Fe=x(B),typeof Fe=="function")for(B=Fe.call(B),Se=0;!(ue=B.next()).done;)ue=ue.value,Fe=st+re(ue,Se++),be+=pe(ue,le,et,Fe,Te);else if(ue==="object")throw le=String(B),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return be}function X(B,le,et){if(B==null)return B;var st=[],Te=0;return pe(B,st,"","",function(ue){return le.call(et,ue,Te++)}),st}function oe(B){if(B._status===-1){var le=B._result;le=le(),le.then(function(et){(B._status===0||B._status===-1)&&(B._status=1,B._result=et)},function(et){(B._status===0||B._status===-1)&&(B._status=2,B._result=et)}),B._status===-1&&(B._status=0,B._result=le)}if(B._status===1)return B._result.default;throw B._result}var J={current:null},ee={transition:null},he={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:ee,ReactCurrentOwner:I};function ce(){throw Error("act(...) is not supported in production builds of React.")}return qt.Children={map:X,forEach:function(B,le,et){X(B,function(){le.apply(this,arguments)},et)},count:function(B){var le=0;return X(B,function(){le++}),le},toArray:function(B){return X(B,function(le){return le})||[]},only:function(B){if(!Y(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},qt.Component=y,qt.Fragment=t,qt.Profiler=o,qt.PureComponent=L,qt.StrictMode=r,qt.Suspense=h,qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,qt.act=ce,qt.cloneElement=function(B,le,et){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var st=C({},B.props),Te=B.key,ue=B.ref,be=B._owner;if(le!=null){if(le.ref!==void 0&&(ue=le.ref,be=I.current),le.key!==void 0&&(Te=""+le.key),B.type&&B.type.defaultProps)var Se=B.type.defaultProps;for(Fe in le)V.call(le,Fe)&&!O.hasOwnProperty(Fe)&&(st[Fe]=le[Fe]===void 0&&Se!==void 0?Se[Fe]:le[Fe])}var Fe=arguments.length-2;if(Fe===1)st.children=et;else if(1<Fe){Se=Array(Fe);for(var ot=0;ot<Fe;ot++)Se[ot]=arguments[ot+2];st.children=Se}return{$$typeof:s,type:B.type,key:Te,ref:ue,props:st,_owner:be}},qt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},qt.createElement=T,qt.createFactory=function(B){var le=T.bind(null,B);return le.type=B,le},qt.createRef=function(){return{current:null}},qt.forwardRef=function(B){return{$$typeof:f,render:B}},qt.isValidElement=Y,qt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:oe}},qt.memo=function(B,le){return{$$typeof:p,type:B,compare:le===void 0?null:le}},qt.startTransition=function(B){var le=ee.transition;ee.transition={};try{B()}finally{ee.transition=le}},qt.unstable_act=ce,qt.useCallback=function(B,le){return J.current.useCallback(B,le)},qt.useContext=function(B){return J.current.useContext(B)},qt.useDebugValue=function(){},qt.useDeferredValue=function(B){return J.current.useDeferredValue(B)},qt.useEffect=function(B,le){return J.current.useEffect(B,le)},qt.useId=function(){return J.current.useId()},qt.useImperativeHandle=function(B,le,et){return J.current.useImperativeHandle(B,le,et)},qt.useInsertionEffect=function(B,le){return J.current.useInsertionEffect(B,le)},qt.useLayoutEffect=function(B,le){return J.current.useLayoutEffect(B,le)},qt.useMemo=function(B,le){return J.current.useMemo(B,le)},qt.useReducer=function(B,le,et){return J.current.useReducer(B,le,et)},qt.useRef=function(B){return J.current.useRef(B)},qt.useState=function(B){return J.current.useState(B)},qt.useSyncExternalStore=function(B,le,et){return J.current.useSyncExternalStore(B,le,et)},qt.useTransition=function(){return J.current.useTransition()},qt.version="18.3.1",qt}var fm;function Tf(){return fm||(fm=1,ju.exports=dv()),ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function fv(){if(hm)return Ja;hm=1;var s=Tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var pm;function hv(){return pm||(pm=1,Gu.exports=fv()),Gu.exports}var m=hv(),Pe=Tf();const Af=uv(Pe);var yl={},Wu={exports:{}},ai={},Xu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function pv(){return mm||(mm=1,(function(s){function e(ee,he){var ce=ee.length;ee.push(he);e:for(;0<ce;){var B=ce-1>>>1,le=ee[B];if(0<o(le,he))ee[B]=he,ee[ce]=le,ce=B;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var he=ee[0],ce=ee.pop();if(ce!==he){ee[0]=ce;e:for(var B=0,le=ee.length,et=le>>>1;B<et;){var st=2*(B+1)-1,Te=ee[st],ue=st+1,be=ee[ue];if(0>o(Te,ce))ue<le&&0>o(be,Te)?(ee[B]=be,ee[ue]=ce,B=ue):(ee[B]=Te,ee[st]=ce,B=st);else if(ue<le&&0>o(be,ce))ee[B]=be,ee[ue]=ce,B=ue;else break e}}return he}function o(ee,he){var ce=ee.sortIndex-he.sortIndex;return ce!==0?ce:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,C=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ee){for(var he=t(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=ee)r(p),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(p)}}function P(ee){if(D=!1,R(ee),!C)if(t(h)!==null)C=!0,oe(V);else{var he=t(p);he!==null&&J(P,he.startTime-ee)}}function V(ee,he){C=!1,D&&(D=!1,_(T),T=-1),M=!0;var ce=x;try{for(R(he),S=t(h);S!==null&&(!(S.expirationTime>he)||ee&&!H());){var B=S.callback;if(typeof B=="function"){S.callback=null,x=S.priorityLevel;var le=B(S.expirationTime<=he);he=s.unstable_now(),typeof le=="function"?S.callback=le:S===t(h)&&r(h),R(he)}else r(h);S=t(h)}if(S!==null)var et=!0;else{var st=t(p);st!==null&&J(P,st.startTime-he),et=!1}return et}finally{S=null,x=ce,M=!1}}var I=!1,O=null,T=-1,N=5,Y=-1;function H(){return!(s.unstable_now()-Y<N)}function Q(){if(O!==null){var ee=s.unstable_now();Y=ee;var he=!0;try{he=O(!0,ee)}finally{he?re():(I=!1,O=null)}}else I=!1}var re;if(typeof L=="function")re=function(){L(Q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,X=pe.port2;pe.port1.onmessage=Q,re=function(){X.postMessage(null)}}else re=function(){y(Q,0)};function oe(ee){O=ee,I||(I=!0,re())}function J(ee,he){T=y(function(){ee(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){C||M||(C=!0,oe(V))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(ee){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ce=x;x=he;try{return ee()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ce=x;x=ee;try{return he()}finally{x=ce}},s.unstable_scheduleCallback=function(ee,he,ce){var B=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?B+ce:B):ce=B,ee){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ce+le,ee={id:v++,callback:he,priorityLevel:ee,startTime:ce,expirationTime:le,sortIndex:-1},ce>B?(ee.sortIndex=ce,e(p,ee),t(h)===null&&ee===t(p)&&(D?(_(T),T=-1):D=!0,J(P,ce-B))):(ee.sortIndex=le,e(h,ee),C||M||(C=!0,oe(V))),ee},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(ee){var he=x;return function(){var ce=x;x=he;try{return ee.apply(this,arguments)}finally{x=ce}}}})(Yu)),Yu}var gm;function mv(){return gm||(gm=1,Xu.exports=pv()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function gv(){if(xm)return ai;xm=1;var s=Tf(),e=mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function D(n,i,a,c,d,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new D(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new D(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new D(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new D(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new D(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new D(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new D(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new D(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new D(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),H=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,B;function le(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var et=!1;function st(n,i){if(!n||et)return"";et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var d=ge.stack.split(`
`),g=c.stack.split(`
`),A=d.length-1,z=g.length-1;1<=A&&0<=z&&d[A]!==g[z];)z--;for(;1<=A&&0<=z;A--,z--)if(d[A]!==g[z]){if(A!==1||z!==1)do if(A--,z--,0>z||d[A]!==g[z]){var K=`
`+d[A].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=A&&0<=z);break}}}finally{et=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Te(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=st(n.type,!1),n;case 11:return n=st(n.type.render,!1),n;case 1:return n=st(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case N:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gt(n){n._valueTracker||(n._valueTracker=ot(n))}function Et(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ot(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Kt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Tt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function zt(n,i){Tt(n,i);var a=Se(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Nt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||St(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var q=Array.isArray;function It(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function At(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(q(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Se(a)}}function qe(n,i){var a=Se(i.value),c=Se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ht(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){We.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ce=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ye(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var He=null,Pt=null,$=null;function Ge(n){if(n=Oa(n)){if(typeof He!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Uo(i),He(n.stateNode,n.type,i))}}function me(n){Pt?$?$.push(n):$=[n]:Pt=n}function lt(){if(Pt){var n=Pt,i=$;if($=Pt=null,Ge(n),i)for(n=0;n<i.length;n++)Ge(i[n])}}function ke(n,i){return n(i)}function ye(){}var ct=!1;function Mt(n,i,a){if(ct)return n(i,a);ct=!0;try{return ke(n,i,a)}finally{ct=!1,(Pt!==null||$!==null)&&(ye(),lt())}}function Xt(n,i){var a=n.stateNode;if(a===null)return null;var c=Uo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var $t=!1;if(f)try{var En={};Object.defineProperty(En,"passive",{get:function(){$t=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{$t=!1}function In(n,i,a,c,d,g,A,z,K){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(ze){this.onError(ze)}}var ci=!1,_i=null,Di=!1,Fn=null,Wn={onError:function(n){ci=!0,_i=n}};function Li(n,i,a,c,d,g,A,z,K){ci=!1,_i=null,In.apply(Wn,arguments)}function Xn(n,i,a,c,d,g,A,z,K){if(Li.apply(this,arguments),ci){if(ci){var ge=_i;ci=!1,_i=null}else throw Error(t(198));Di||(Di=!0,Fn=ge)}}function gn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ei(n){if(gn(n)!==n)throw Error(t(188))}function yi(n){var i=n.alternate;if(!i){if(i=gn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return ei(d),n;if(g===c)return ei(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var A=!1,z=d.child;z;){if(z===a){A=!0,a=d,c=g;break}if(z===c){A=!0,c=d,a=g;break}z=z.sibling}if(!A){for(z=g.child;z;){if(z===a){A=!0,a=g,c=d;break}if(z===c){A=!0,c=g,a=d;break}z=z.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Si(n){return n=yi(n),n!==null?ui(n):null}function ui(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ui(n);if(i!==null)return i;n=n.sibling}return null}var lr=e.unstable_scheduleCallback,cr=e.unstable_cancelCallback,j=e.unstable_shouldYield,Le=e.unstable_requestPaint,_e=e.unstable_now,Ne=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,G=e.unstable_NormalPriority,se=e.unstable_LowPriority,Z=e.unstable_IdlePriority,ne=null,Ie=null;function Xe(n){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Ee=Math.clz32?Math.clz32:De,Ze=Math.log,Qe=Math.LN2;function De(n){return n>>>=0,n===0?32:31-(Ze(n)/Qe|0)|0}var it=64,Je=4194304;function bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,A=a&268435455;if(A!==0){var z=A&~d;z!==0?c=bt(z):(g&=A,g!==0&&(c=bt(g)))}else A=a&~d,A!==0?c=bt(A):g!==0&&(c=bt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ee(i),d=1<<a,c|=n[a],i&=~d;return c}function w(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Ee(g),z=1<<A,K=d[A];K===-1?((z&a)===0||(z&c)!==0)&&(d[A]=w(z,i)):K<=i&&(n.expiredLanes|=z),g&=~z}}function F(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function W(){var n=it;return it<<=1,(it&4194240)===0&&(it=64),n}function Re(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ve(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ee(i),n[i]=a}function Ue(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ee(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function ft(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ee(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var at=0;function ut(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mt,rt,Yt,Ut,un,nn=!1,$n=[],ht=null,Bt=null,pn=null,Ui=new Map,Nr=new Map,Fi=[],an="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yo(n,i){switch(n){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(i.pointerId)}}function Ea(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Oa(i),i!==null&&rt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Dg(n,i,a,c,d){switch(i){case"focusin":return ht=Ea(ht,n,i,a,c,d),!0;case"dragenter":return Bt=Ea(Bt,n,i,a,c,d),!0;case"mouseover":return pn=Ea(pn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Ui.set(g,Ea(Ui.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Nr.set(g,Ea(Nr.get(g)||null,n,i,a,c,d)),!0}return!1}function qf(n){var i=is(n.target);if(i!==null){var a=gn(i);if(a!==null){if(i=a.tag,i===13){if(i=Yn(a),i!==null){n.blockedOn=i,un(n.priority,function(){Yt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Oe=c,a.target.dispatchEvent(c),Oe=null}else return i=Oa(a),i!==null&&rt(i),n.blockedOn=a,!1;i.shift()}return!0}function Kf(n,i,a){So(n)&&a.delete(i)}function Lg(){nn=!1,ht!==null&&So(ht)&&(ht=null),Bt!==null&&So(Bt)&&(Bt=null),pn!==null&&So(pn)&&(pn=null),Ui.forEach(Kf),Nr.forEach(Kf)}function wa(n,i){n.blockedOn===i&&(n.blockedOn=null,nn||(nn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lg)))}function ba(n){function i(d){return wa(d,n)}if(0<$n.length){wa($n[0],n);for(var a=1;a<$n.length;a++){var c=$n[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ht!==null&&wa(ht,n),Bt!==null&&wa(Bt,n),pn!==null&&wa(pn,n),Ui.forEach(i),Nr.forEach(i),a=0;a<Fi.length;a++)c=Fi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Fi.length&&(a=Fi[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&Fi.shift()}var Ps=P.ReactCurrentBatchConfig,Mo=!0;function Ug(n,i,a,c){var d=at,g=Ps.transition;Ps.transition=null;try{at=1,mc(n,i,a,c)}finally{at=d,Ps.transition=g}}function Fg(n,i,a,c){var d=at,g=Ps.transition;Ps.transition=null;try{at=4,mc(n,i,a,c)}finally{at=d,Ps.transition=g}}function mc(n,i,a,c){if(Mo){var d=gc(n,i,a,c);if(d===null)Dc(n,i,c,Eo,a),yo(n,c);else if(Dg(d,n,i,a,c))c.stopPropagation();else if(yo(n,c),i&4&&-1<an.indexOf(n)){for(;d!==null;){var g=Oa(d);if(g!==null&&mt(g),g=gc(n,i,a,c),g===null&&Dc(n,i,c,Eo,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Dc(n,i,c,null,a)}}var Eo=null;function gc(n,i,a,c){if(Eo=null,n=Ke(c),n=is(n),n!==null)if(i=gn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Eo=n,null}function Zf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ne()){case nt:return 1;case b:return 4;case G:case se:return 16;case Z:return 536870912;default:return 16}default:return 16}}var Pr=null,xc=null,wo=null;function Jf(){if(wo)return wo;var n,i=xc,a=i.length,c,d="value"in Pr?Pr.value:Pr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[g-c];c++);return wo=d.slice(n,1<c?1-c:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function Qf(){return!1}function di(n){function i(a,c,d,g,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?To:Qf,this.isPropagationStopped=Qf,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=di(Is),Ta=ce({},Is,{view:0,detail:0}),Og=di(Ta),_c,yc,Aa,Ao=ce({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(_c=n.screenX-Aa.screenX,yc=n.screenY-Aa.screenY):yc=_c=0,Aa=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),eh=di(Ao),kg=ce({},Ao,{dataTransfer:0}),Bg=di(kg),zg=ce({},Ta,{relatedTarget:0}),Sc=di(zg),Vg=ce({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=di(Vg),Gg=ce({},Is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jg=di(Gg),Wg=ce({},Is,{data:0}),th=di(Wg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=$g[n])?!!i[n]:!1}function Mc(){return qg}var Kg=ce({},Ta,{key:function(n){if(n.key){var i=Xg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zg=di(Kg),Jg=ce({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=di(Jg),Qg=ce({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),ex=di(Qg),tx=ce({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=di(tx),ix=ce({},Ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=di(ix),sx=[9,13,27,32],Ec=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var ax=f&&"TextEvent"in window&&!Ca,ih=f&&(!Ec||Ca&&8<Ca&&11>=Ca),rh=" ",sh=!1;function ah(n,i){switch(n){case"keyup":return sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function ox(n,i){switch(n){case"compositionend":return oh(i);case"keypress":return i.which!==32?null:(sh=!0,rh);case"textInput":return n=i.data,n===rh&&sh?null:n;default:return null}}function lx(n,i){if(Ds)return n==="compositionend"||!Ec&&ah(n,i)?(n=Jf(),wo=xc=Pr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ih&&i.locale!=="ko"?null:i.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!cx[n.type]:i==="textarea"}function ch(n,i,a,c){me(c),i=Io(i,"onChange"),0<i.length&&(a=new vc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ra=null,Na=null;function ux(n){Ah(n,0)}function Co(n){var i=ks(n);if(Et(i))return n}function dx(n,i){if(n==="change")return i}var uh=!1;if(f){var wc;if(f){var bc="oninput"in document;if(!bc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),bc=typeof dh.oninput=="function"}wc=bc}else wc=!1;uh=wc&&(!document.documentMode||9<document.documentMode)}function fh(){Ra&&(Ra.detachEvent("onpropertychange",hh),Na=Ra=null)}function hh(n){if(n.propertyName==="value"&&Co(Na)){var i=[];ch(i,Na,n,Ke(n)),Mt(ux,i)}}function fx(n,i,a){n==="focusin"?(fh(),Ra=i,Na=a,Ra.attachEvent("onpropertychange",hh)):n==="focusout"&&fh()}function hx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Co(Na)}function px(n,i){if(n==="click")return Co(i)}function mx(n,i){if(n==="input"||n==="change")return Co(i)}function gx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Oi=typeof Object.is=="function"?Object.is:gx;function Pa(n,i){if(Oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Oi(n[d],i[d]))return!1}return!0}function ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mh(n,i){var a=ph(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ph(a)}}function gh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?gh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xh(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=St(n.document)}return i}function Tc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xx(n){var i=xh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&gh(a.ownerDocument.documentElement,a)){if(c!==null&&Tc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=mh(a,g);var A=mh(a,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vx=f&&"documentMode"in document&&11>=document.documentMode,Ls=null,Ac=null,Ia=null,Cc=!1;function vh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||Ls==null||Ls!==St(c)||(c=Ls,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Pa(Ia,c)||(Ia=c,c=Io(Ac,"onSelect"),0<c.length&&(i=new vc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Rc={},_h={};f&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function No(n){if(Rc[n])return Rc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in _h)return Rc[n]=i[a];return n}var yh=No("animationend"),Sh=No("animationiteration"),Mh=No("animationstart"),Eh=No("transitionend"),wh=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){wh.set(n,i),l(i,[n])}for(var Nc=0;Nc<bh.length;Nc++){var Pc=bh[Nc],_x=Pc.toLowerCase(),yx=Pc[0].toUpperCase()+Pc.slice(1);Ir(_x,"on"+yx)}Ir(yh,"onAnimationEnd"),Ir(Sh,"onAnimationIteration"),Ir(Mh,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Eh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Th(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Xn(c,i,void 0,n),n.currentTarget=null}function Ah(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var z=c[A],K=z.instance,ge=z.currentTarget;if(z=z.listener,K!==g&&d.isPropagationStopped())break e;Th(d,z,ge),g=K}else for(A=0;A<c.length;A++){if(z=c[A],K=z.instance,ge=z.currentTarget,z=z.listener,K!==g&&d.isPropagationStopped())break e;Th(d,z,ge),g=K}}}if(Di)throw n=Fn,Di=!1,Fn=null,n}function ln(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Ch(i,n,2,!1),a.add(c))}function Ic(n,i,a){var c=0;i&&(c|=4),Ch(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Po]){n[Po]=!0,r.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,Ic("selectionchange",!1,i))}}function Ch(n,i,a,c){switch(Zf(i)){case 1:var d=Ug;break;case 4:d=Fg;break;default:d=mc}a=d.bind(null,i,a,n),d=void 0,!$t||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Dc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var z=c.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var K=A.tag;if((K===3||K===4)&&(K=A.stateNode.containerInfo,K===d||K.nodeType===8&&K.parentNode===d))return;A=A.return}for(;z!==null;){if(A=is(z),A===null)return;if(K=A.tag,K===5||K===6){c=g=A;continue e}z=z.parentNode}}c=c.return}Mt(function(){var ge=g,ze=Ke(a),je=[];e:{var Be=wh.get(n);if(Be!==void 0){var pt=vc,vt=n;switch(n){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":pt=Zg;break;case"focusin":vt="focus",pt=Sc;break;case"focusout":vt="blur",pt=Sc;break;case"beforeblur":case"afterblur":pt=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=ex;break;case yh:case Sh:case Mh:pt=Hg;break;case Eh:pt=nx;break;case"scroll":pt=Og;break;case"wheel":pt=rx;break;case"copy":case"cut":case"paste":pt=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=nh}var _t=(i&4)!==0,xn=!_t&&n==="scroll",de=_t?Be!==null?Be+"Capture":null:Be;_t=[];for(var te=ge,fe;te!==null;){fe=te;var $e=fe.stateNode;if(fe.tag===5&&$e!==null&&(fe=$e,de!==null&&($e=Xt(te,de),$e!=null&&_t.push(Ua(te,$e,fe)))),xn)break;te=te.return}0<_t.length&&(Be=new pt(Be,vt,null,a,ze),je.push({event:Be,listeners:_t}))}}if((i&7)===0){e:{if(Be=n==="mouseover"||n==="pointerover",pt=n==="mouseout"||n==="pointerout",Be&&a!==Oe&&(vt=a.relatedTarget||a.fromElement)&&(is(vt)||vt[ur]))break e;if((pt||Be)&&(Be=ze.window===ze?ze:(Be=ze.ownerDocument)?Be.defaultView||Be.parentWindow:window,pt?(vt=a.relatedTarget||a.toElement,pt=ge,vt=vt?is(vt):null,vt!==null&&(xn=gn(vt),vt!==xn||vt.tag!==5&&vt.tag!==6)&&(vt=null)):(pt=null,vt=ge),pt!==vt)){if(_t=eh,$e="onMouseLeave",de="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(_t=nh,$e="onPointerLeave",de="onPointerEnter",te="pointer"),xn=pt==null?Be:ks(pt),fe=vt==null?Be:ks(vt),Be=new _t($e,te+"leave",pt,a,ze),Be.target=xn,Be.relatedTarget=fe,$e=null,is(ze)===ge&&(_t=new _t(de,te+"enter",vt,a,ze),_t.target=fe,_t.relatedTarget=xn,$e=_t),xn=$e,pt&&vt)t:{for(_t=pt,de=vt,te=0,fe=_t;fe;fe=Fs(fe))te++;for(fe=0,$e=de;$e;$e=Fs($e))fe++;for(;0<te-fe;)_t=Fs(_t),te--;for(;0<fe-te;)de=Fs(de),fe--;for(;te--;){if(_t===de||de!==null&&_t===de.alternate)break t;_t=Fs(_t),de=Fs(de)}_t=null}else _t=null;pt!==null&&Rh(je,Be,pt,_t,!1),vt!==null&&xn!==null&&Rh(je,xn,vt,_t,!0)}}e:{if(Be=ge?ks(ge):window,pt=Be.nodeName&&Be.nodeName.toLowerCase(),pt==="select"||pt==="input"&&Be.type==="file")var yt=dx;else if(lh(Be))if(uh)yt=mx;else{yt=hx;var Ct=fx}else(pt=Be.nodeName)&&pt.toLowerCase()==="input"&&(Be.type==="checkbox"||Be.type==="radio")&&(yt=px);if(yt&&(yt=yt(n,ge))){ch(je,yt,a,ze);break e}Ct&&Ct(n,Be,ge),n==="focusout"&&(Ct=Be._wrapperState)&&Ct.controlled&&Be.type==="number"&&Gt(Be,"number",Be.value)}switch(Ct=ge?ks(ge):window,n){case"focusin":(lh(Ct)||Ct.contentEditable==="true")&&(Ls=Ct,Ac=ge,Ia=null);break;case"focusout":Ia=Ac=Ls=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,vh(je,a,ze);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":vh(je,a,ze)}var Rt;if(Ec)e:{switch(n){case"compositionstart":var Ft="onCompositionStart";break e;case"compositionend":Ft="onCompositionEnd";break e;case"compositionupdate":Ft="onCompositionUpdate";break e}Ft=void 0}else Ds?ah(n,a)&&(Ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ft="onCompositionStart");Ft&&(ih&&a.locale!=="ko"&&(Ds||Ft!=="onCompositionStart"?Ft==="onCompositionEnd"&&Ds&&(Rt=Jf()):(Pr=ze,xc="value"in Pr?Pr.value:Pr.textContent,Ds=!0)),Ct=Io(ge,Ft),0<Ct.length&&(Ft=new th(Ft,n,null,a,ze),je.push({event:Ft,listeners:Ct}),Rt?Ft.data=Rt:(Rt=oh(a),Rt!==null&&(Ft.data=Rt)))),(Rt=ax?ox(n,a):lx(n,a))&&(ge=Io(ge,"onBeforeInput"),0<ge.length&&(ze=new th("onBeforeInput","beforeinput",null,a,ze),je.push({event:ze,listeners:ge}),ze.data=Rt))}Ah(je,i)})}function Ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Xt(n,a),g!=null&&c.unshift(Ua(n,g,d)),g=Xt(n,i),g!=null&&c.push(Ua(n,g,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rh(n,i,a,c,d){for(var g=i._reactName,A=[];a!==null&&a!==c;){var z=a,K=z.alternate,ge=z.stateNode;if(K!==null&&K===c)break;z.tag===5&&ge!==null&&(z=ge,d?(K=Xt(a,g),K!=null&&A.unshift(Ua(a,K,z))):d||(K=Xt(a,g),K!=null&&A.push(Ua(a,K,z)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Nh(n){return(typeof n=="string"?n:""+n).replace(Mx,`
`).replace(Ex,"")}function Do(n,i,a){if(i=Nh(i),Nh(n)!==i&&a)throw Error(t(425))}function Lo(){}var Lc=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(n){return Ph.resolve(null).then(n).catch(Tx)}:Oc;function Tx(n){setTimeout(function(){throw n})}function kc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ba(i)}function Dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ih(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),$i="__reactFiber$"+Os,Fa="__reactProps$"+Os,ur="__reactContainer$"+Os,Bc="__reactEvents$"+Os,Ax="__reactListeners$"+Os,Cx="__reactHandles$"+Os;function is(n){var i=n[$i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ur]||a[$i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ih(n);n!==null;){if(a=n[$i])return a;n=Ih(n)}return i}n=a,a=n.parentNode}return null}function Oa(n){return n=n[$i]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Uo(n){return n[Fa]||null}var zc=[],Bs=-1;function Lr(n){return{current:n}}function cn(n){0>Bs||(n.current=zc[Bs],zc[Bs]=null,Bs--)}function on(n,i){Bs++,zc[Bs]=n.current,n.current=i}var Ur={},On=Lr(Ur),ti=Lr(!1),rs=Ur;function zs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ni(n){return n=n.childContextTypes,n!=null}function Fo(){cn(ti),cn(On)}function Dh(n,i,a){if(On.current!==Ur)throw Error(t(168));on(On,i),on(ti,a)}function Lh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ce({},a,c)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,rs=On.current,on(On,n),on(ti,ti.current),!0}function Uh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Lh(n,i,rs),c.__reactInternalMemoizedMergedChildContext=n,cn(ti),cn(On),on(On,n)):cn(ti),on(ti,a)}var dr=null,ko=!1,Vc=!1;function Fh(n){dr===null?dr=[n]:dr.push(n)}function Rx(n){ko=!0,Fh(n)}function Fr(){if(!Vc&&dr!==null){Vc=!0;var n=0,i=at;try{var a=dr;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}dr=null,ko=!1}catch(d){throw dr!==null&&(dr=dr.slice(n+1)),lr(nt,Fr),d}finally{at=i,Vc=!1}}return null}var Vs=[],Hs=0,Bo=null,zo=0,Mi=[],Ei=0,ss=null,fr=1,hr="";function as(n,i){Vs[Hs++]=zo,Vs[Hs++]=Bo,Bo=n,zo=i}function Oh(n,i,a){Mi[Ei++]=fr,Mi[Ei++]=hr,Mi[Ei++]=ss,ss=n;var c=fr;n=hr;var d=32-Ee(c)-1;c&=~(1<<d),a+=1;var g=32-Ee(i)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,fr=1<<32-Ee(i)+d|a<<d|c,hr=g+n}else fr=1<<g|a<<d|c,hr=n}function Hc(n){n.return!==null&&(as(n,1),Oh(n,1,0))}function Gc(n){for(;n===Bo;)Bo=Vs[--Hs],Vs[Hs]=null,zo=Vs[--Hs],Vs[Hs]=null;for(;n===ss;)ss=Mi[--Ei],Mi[Ei]=null,hr=Mi[--Ei],Mi[Ei]=null,fr=Mi[--Ei],Mi[Ei]=null}var fi=null,hi=null,dn=!1,ki=null;function kh(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Bh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:fr,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(dn){var i=hi;if(i){var a=i;if(!Bh(n,i)){if(jc(n))throw Error(t(418));i=Dr(a.nextSibling);var c=fi;i&&Bh(n,i)?kh(c,a):(n.flags=n.flags&-4097|2,dn=!1,fi=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,dn=!1,fi=n}}}function zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function Vo(n){if(n!==fi)return!1;if(!dn)return zh(n),dn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=hi)){if(jc(n))throw Vh(),Error(t(418));for(;i;)kh(n,i),i=Dr(i.nextSibling)}if(zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Dr(n.stateNode.nextSibling):null;return!0}function Vh(){for(var n=hi;n;)n=Dr(n.nextSibling)}function Gs(){hi=fi=null,dn=!1}function Xc(n){ki===null?ki=[n]:ki.push(n)}var Nx=P.ReactCurrentBatchConfig;function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var z=d.refs;A===null?delete z[g]:z[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hh(n){var i=n._init;return i(n._payload)}function Gh(n){function i(de,te){if(n){var fe=de.deletions;fe===null?(de.deletions=[te],de.flags|=16):fe.push(te)}}function a(de,te){if(!n)return null;for(;te!==null;)i(de,te),te=te.sibling;return null}function c(de,te){for(de=new Map;te!==null;)te.key!==null?de.set(te.key,te):de.set(te.index,te),te=te.sibling;return de}function d(de,te){return de=jr(de,te),de.index=0,de.sibling=null,de}function g(de,te,fe){return de.index=fe,n?(fe=de.alternate,fe!==null?(fe=fe.index,fe<te?(de.flags|=2,te):fe):(de.flags|=2,te)):(de.flags|=1048576,te)}function A(de){return n&&de.alternate===null&&(de.flags|=2),de}function z(de,te,fe,$e){return te===null||te.tag!==6?(te=Ou(fe,de.mode,$e),te.return=de,te):(te=d(te,fe),te.return=de,te)}function K(de,te,fe,$e){var yt=fe.type;return yt===O?ze(de,te,fe.props.children,$e,fe.key):te!==null&&(te.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===oe&&Hh(yt)===te.type)?($e=d(te,fe.props),$e.ref=ka(de,te,fe),$e.return=de,$e):($e=fl(fe.type,fe.key,fe.props,null,de.mode,$e),$e.ref=ka(de,te,fe),$e.return=de,$e)}function ge(de,te,fe,$e){return te===null||te.tag!==4||te.stateNode.containerInfo!==fe.containerInfo||te.stateNode.implementation!==fe.implementation?(te=ku(fe,de.mode,$e),te.return=de,te):(te=d(te,fe.children||[]),te.return=de,te)}function ze(de,te,fe,$e,yt){return te===null||te.tag!==7?(te=ps(fe,de.mode,$e,yt),te.return=de,te):(te=d(te,fe),te.return=de,te)}function je(de,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Ou(""+te,de.mode,fe),te.return=de,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case V:return fe=fl(te.type,te.key,te.props,null,de.mode,fe),fe.ref=ka(de,null,te),fe.return=de,fe;case I:return te=ku(te,de.mode,fe),te.return=de,te;case oe:var $e=te._init;return je(de,$e(te._payload),fe)}if(q(te)||he(te))return te=ps(te,de.mode,fe,null),te.return=de,te;Ho(de,te)}return null}function Be(de,te,fe,$e){var yt=te!==null?te.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return yt!==null?null:z(de,te,""+fe,$e);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:return fe.key===yt?K(de,te,fe,$e):null;case I:return fe.key===yt?ge(de,te,fe,$e):null;case oe:return yt=fe._init,Be(de,te,yt(fe._payload),$e)}if(q(fe)||he(fe))return yt!==null?null:ze(de,te,fe,$e,null);Ho(de,fe)}return null}function pt(de,te,fe,$e,yt){if(typeof $e=="string"&&$e!==""||typeof $e=="number")return de=de.get(fe)||null,z(te,de,""+$e,yt);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case V:return de=de.get($e.key===null?fe:$e.key)||null,K(te,de,$e,yt);case I:return de=de.get($e.key===null?fe:$e.key)||null,ge(te,de,$e,yt);case oe:var Ct=$e._init;return pt(de,te,fe,Ct($e._payload),yt)}if(q($e)||he($e))return de=de.get(fe)||null,ze(te,de,$e,yt,null);Ho(te,$e)}return null}function vt(de,te,fe,$e){for(var yt=null,Ct=null,Rt=te,Ft=te=0,Nn=null;Rt!==null&&Ft<fe.length;Ft++){Rt.index>Ft?(Nn=Rt,Rt=null):Nn=Rt.sibling;var tn=Be(de,Rt,fe[Ft],$e);if(tn===null){Rt===null&&(Rt=Nn);break}n&&Rt&&tn.alternate===null&&i(de,Rt),te=g(tn,te,Ft),Ct===null?yt=tn:Ct.sibling=tn,Ct=tn,Rt=Nn}if(Ft===fe.length)return a(de,Rt),dn&&as(de,Ft),yt;if(Rt===null){for(;Ft<fe.length;Ft++)Rt=je(de,fe[Ft],$e),Rt!==null&&(te=g(Rt,te,Ft),Ct===null?yt=Rt:Ct.sibling=Rt,Ct=Rt);return dn&&as(de,Ft),yt}for(Rt=c(de,Rt);Ft<fe.length;Ft++)Nn=pt(Rt,de,Ft,fe[Ft],$e),Nn!==null&&(n&&Nn.alternate!==null&&Rt.delete(Nn.key===null?Ft:Nn.key),te=g(Nn,te,Ft),Ct===null?yt=Nn:Ct.sibling=Nn,Ct=Nn);return n&&Rt.forEach(function(Wr){return i(de,Wr)}),dn&&as(de,Ft),yt}function _t(de,te,fe,$e){var yt=he(fe);if(typeof yt!="function")throw Error(t(150));if(fe=yt.call(fe),fe==null)throw Error(t(151));for(var Ct=yt=null,Rt=te,Ft=te=0,Nn=null,tn=fe.next();Rt!==null&&!tn.done;Ft++,tn=fe.next()){Rt.index>Ft?(Nn=Rt,Rt=null):Nn=Rt.sibling;var Wr=Be(de,Rt,tn.value,$e);if(Wr===null){Rt===null&&(Rt=Nn);break}n&&Rt&&Wr.alternate===null&&i(de,Rt),te=g(Wr,te,Ft),Ct===null?yt=Wr:Ct.sibling=Wr,Ct=Wr,Rt=Nn}if(tn.done)return a(de,Rt),dn&&as(de,Ft),yt;if(Rt===null){for(;!tn.done;Ft++,tn=fe.next())tn=je(de,tn.value,$e),tn!==null&&(te=g(tn,te,Ft),Ct===null?yt=tn:Ct.sibling=tn,Ct=tn);return dn&&as(de,Ft),yt}for(Rt=c(de,Rt);!tn.done;Ft++,tn=fe.next())tn=pt(Rt,de,Ft,tn.value,$e),tn!==null&&(n&&tn.alternate!==null&&Rt.delete(tn.key===null?Ft:tn.key),te=g(tn,te,Ft),Ct===null?yt=tn:Ct.sibling=tn,Ct=tn);return n&&Rt.forEach(function(cv){return i(de,cv)}),dn&&as(de,Ft),yt}function xn(de,te,fe,$e){if(typeof fe=="object"&&fe!==null&&fe.type===O&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:e:{for(var yt=fe.key,Ct=te;Ct!==null;){if(Ct.key===yt){if(yt=fe.type,yt===O){if(Ct.tag===7){a(de,Ct.sibling),te=d(Ct,fe.props.children),te.return=de,de=te;break e}}else if(Ct.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===oe&&Hh(yt)===Ct.type){a(de,Ct.sibling),te=d(Ct,fe.props),te.ref=ka(de,Ct,fe),te.return=de,de=te;break e}a(de,Ct);break}else i(de,Ct);Ct=Ct.sibling}fe.type===O?(te=ps(fe.props.children,de.mode,$e,fe.key),te.return=de,de=te):($e=fl(fe.type,fe.key,fe.props,null,de.mode,$e),$e.ref=ka(de,te,fe),$e.return=de,de=$e)}return A(de);case I:e:{for(Ct=fe.key;te!==null;){if(te.key===Ct)if(te.tag===4&&te.stateNode.containerInfo===fe.containerInfo&&te.stateNode.implementation===fe.implementation){a(de,te.sibling),te=d(te,fe.children||[]),te.return=de,de=te;break e}else{a(de,te);break}else i(de,te);te=te.sibling}te=ku(fe,de.mode,$e),te.return=de,de=te}return A(de);case oe:return Ct=fe._init,xn(de,te,Ct(fe._payload),$e)}if(q(fe))return vt(de,te,fe,$e);if(he(fe))return _t(de,te,fe,$e);Ho(de,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,te!==null&&te.tag===6?(a(de,te.sibling),te=d(te,fe),te.return=de,de=te):(a(de,te),te=Ou(fe,de.mode,$e),te.return=de,de=te),A(de)):a(de,te)}return xn}var js=Gh(!0),jh=Gh(!1),Go=Lr(null),jo=null,Ws=null,Yc=null;function $c(){Yc=Ws=jo=null}function qc(n){var i=Go.current;cn(Go),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){jo=n,Yc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ii=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(jo===null)throw Error(t(308));Ws=n,jo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var os=null;function Zc(n){os===null?os=[n]:os.push(n)}function Wh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,pr(n,c)}function pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Or=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Qt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,pr(n,a)}return d=c.interleaved,d===null?(i.next=i,Zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,pr(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ft(n,a)}}function Yh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=A:g=g.next=A,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xo(n,i,a,c){var d=n.updateQueue;Or=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var K=z,ge=K.next;K.next=null,A===null?g=ge:A.next=ge,A=K;var ze=n.alternate;ze!==null&&(ze=ze.updateQueue,z=ze.lastBaseUpdate,z!==A&&(z===null?ze.firstBaseUpdate=ge:z.next=ge,ze.lastBaseUpdate=K))}if(g!==null){var je=d.baseState;A=0,ze=ge=K=null,z=g;do{var Be=z.lane,pt=z.eventTime;if((c&Be)===Be){ze!==null&&(ze=ze.next={eventTime:pt,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var vt=n,_t=z;switch(Be=i,pt=a,_t.tag){case 1:if(vt=_t.payload,typeof vt=="function"){je=vt.call(pt,je,Be);break e}je=vt;break e;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=_t.payload,Be=typeof vt=="function"?vt.call(pt,je,Be):vt,Be==null)break e;je=ce({},je,Be);break e;case 2:Or=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Be=d.effects,Be===null?d.effects=[z]:Be.push(z))}else pt={eventTime:pt,lane:Be,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ze===null?(ge=ze=pt,K=je):ze=ze.next=pt,A|=Be;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;Be=z,z=Be.next,Be.next=null,d.lastBaseUpdate=Be,d.shared.pending=null}}while(!0);if(ze===null&&(K=je),d.baseState=K,d.firstBaseUpdate=ge,d.lastBaseUpdate=ze,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);us|=A,n.lanes=A,n.memoizedState=je}}function $h(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ba={},qi=Lr(Ba),za=Lr(Ba),Va=Lr(Ba);function ls(n){if(n===Ba)throw Error(t(174));return n}function Qc(n,i){switch(on(Va,i),on(za,n),on(qi,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}cn(qi),on(qi,i)}function Ys(){cn(qi),cn(za),cn(Va)}function qh(n){ls(Va.current);var i=ls(qi.current),a=E(i,n.type);i!==a&&(on(za,n),on(qi,a))}function eu(n){za.current===n&&(cn(qi),cn(za))}var fn=Lr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var $o=P.ReactCurrentDispatcher,iu=P.ReactCurrentBatchConfig,cs=0,hn=null,wn=null,Cn=null,qo=!1,Ha=!1,Ga=0,Px=0;function kn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Oi(n[a],i[a]))return!1;return!0}function su(n,i,a,c,d,g){if(cs=g,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?Ux:Fx,n=a(c,d),Ha){g=0;do{if(Ha=!1,Ga=0,25<=g)throw Error(t(301));g+=1,Cn=wn=null,i.updateQueue=null,$o.current=Ox,n=a(c,d)}while(Ha)}if($o.current=Jo,i=wn!==null&&wn.next!==null,cs=0,Cn=wn=hn=null,qo=!1,i)throw Error(t(300));return n}function au(){var n=Ga!==0;return Ga=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?hn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function bi(){if(wn===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var i=Cn===null?hn.memoizedState:Cn.next;if(i!==null)Cn=i,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Cn===null?hn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function ja(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var z=A=null,K=null,ge=g;do{var ze=ge.lane;if((cs&ze)===ze)K!==null&&(K=K.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var je={lane:ze,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};K===null?(z=K=je,A=c):K=K.next=je,hn.lanes|=ze,us|=ze}ge=ge.next}while(ge!==null&&ge!==g);K===null?A=c:K.next=z,Oi(c,i.memoizedState)||(ii=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=K,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,hn.lanes|=g,us|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);Oi(g,i.memoizedState)||(ii=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Kh(){}function Zh(n,i){var a=hn,c=bi(),d=i(),g=!Oi(c.memoizedState,d);if(g&&(c.memoizedState=d,ii=!0),c=c.queue,cu(ep.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,Wa(9,Qh.bind(null,a,c,d,i),void 0,null),Rn===null)throw Error(t(349));(cs&30)!==0||Jh(a,i,d)}return d}function Jh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Qh(n,i,a,c){i.value=a,i.getSnapshot=c,tp(i)&&np(n)}function ep(n,i,a){return a(function(){tp(i)&&np(n)})}function tp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Oi(n,a)}catch{return!0}}function np(n){var i=pr(n,1);i!==null&&Hi(i,n,1,-1)}function ip(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Lx.bind(null,hn,n),[i.memoizedState,n]}function Wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function rp(){return bi().memoizedState}function Ko(n,i,a,c){var d=Ki();hn.flags|=n,d.memoizedState=Wa(1|i,a,void 0,c===void 0?null:c)}function Zo(n,i,a,c){var d=bi();c=c===void 0?null:c;var g=void 0;if(wn!==null){var A=wn.memoizedState;if(g=A.destroy,c!==null&&ru(c,A.deps)){d.memoizedState=Wa(i,a,g,c);return}}hn.flags|=n,d.memoizedState=Wa(1|i,a,g,c)}function sp(n,i){return Ko(8390656,8,n,i)}function cu(n,i){return Zo(2048,8,n,i)}function ap(n,i){return Zo(4,2,n,i)}function op(n,i){return Zo(4,4,n,i)}function lp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cp(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4,4,lp.bind(null,i,n),a)}function uu(){}function up(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function dp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function fp(n,i,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Oi(a,i)||(a=W(),hn.lanes|=a,us|=a,n.baseState=!0),i)}function Ix(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{at=a,iu.transition=c}}function hp(){return bi().memoizedState}function Dx(n,i,a){var c=Hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},pp(n))mp(i,a);else if(a=Wh(n,i,a,c),a!==null){var d=Kn();Hi(a,n,c,d),gp(a,i,c)}}function Lx(n,i,a){var c=Hr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(pp(n))mp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,z=g(A,a);if(d.hasEagerState=!0,d.eagerState=z,Oi(z,A)){var K=i.interleaved;K===null?(d.next=d,Zc(i)):(d.next=K.next,K.next=d),i.interleaved=d;return}}catch{}finally{}a=Wh(n,i,d,c),a!==null&&(d=Kn(),Hi(a,n,c,d),gp(a,i,c))}}function pp(n){var i=n.alternate;return n===hn||i!==null&&i===hn}function mp(n,i){Ha=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function gp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ft(n,a)}}var Jo={readContext:wi,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},Ux={readContext:wi,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4194308,4,lp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ko(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Dx.bind(null,hn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:ip,useDebugValue:uu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=ip(!1),i=n[0];return n=Ix.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=hn,d=Ki();if(dn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Rn===null)throw Error(t(349));(cs&30)!==0||Jh(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,sp(ep.bind(null,c,g,n),[n]),c.flags|=2048,Wa(9,Qh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ki(),i=Rn.identifierPrefix;if(dn){var a=hr,c=fr;a=(c&~(1<<32-Ee(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Px++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Fx={readContext:wi,useCallback:up,useContext:wi,useEffect:cu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:op,useMemo:dp,useReducer:ou,useRef:rp,useState:function(){return ou(ja)},useDebugValue:uu,useDeferredValue:function(n){var i=bi();return fp(i,wn.memoizedState,n)},useTransition:function(){var n=ou(ja)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Kh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1},Ox={readContext:wi,useCallback:up,useContext:wi,useEffect:cu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:op,useMemo:dp,useReducer:lu,useRef:rp,useState:function(){return lu(ja)},useDebugValue:uu,useDeferredValue:function(n){var i=bi();return wn===null?i.memoizedState=n:fp(i,wn.memoizedState,n)},useTransition:function(){var n=lu(ja)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Kh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1};function Bi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?gn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=Hr(n),g=mr(c,d);g.payload=i,a!=null&&(g.callback=a),i=kr(n,g,d),i!==null&&(Hi(i,n,d,c),Wo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=Hr(n),g=mr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=kr(n,g,d),i!==null&&(Hi(i,n,d,c),Wo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kn(),c=Hr(n),d=mr(a,c);d.tag=2,i!=null&&(d.callback=i),i=kr(n,d,c),i!==null&&(Hi(i,n,c,a),Wo(i,n,c))}};function xp(n,i,a,c,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,c)||!Pa(d,g):!0}function vp(n,i,a){var c=!1,d=Ur,g=i.contextType;return typeof g=="object"&&g!==null?g=wi(g):(d=ni(i)?rs:On.current,c=i.contextTypes,g=(c=c!=null)?zs(n,d):Ur),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function _p(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function fu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Jc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=wi(g):(g=ni(i)?rs:On.current,d.context=zs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(du(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),Xo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function yp(n,i,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){al||(al=!0,Ru=c),pu(n,i)},a}function Sp(n,i,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){pu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){pu(n,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Mp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Jx.bind(null,n,i,a),i.then(n,n))}function Ep(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=mr(-1,1),i.tag=2,kr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Bx=P.ReactCurrentOwner,ii=!1;function qn(n,i,a,c){i.child=n===null?jh(i,null,a,c):js(i,n.child,a,c)}function bp(n,i,a,c,d){a=a.render;var g=i.ref;return Xs(i,d),c=su(n,i,a,c,g,d),a=au(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gr(n,i,d)):(dn&&a&&Hc(i),i.flags|=1,qn(n,i,c,d),i.child)}function Tp(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Fu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Ap(n,i,g,c,d)):(n=fl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var A=g.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(A,c)&&n.ref===i.ref)return gr(n,i,d)}return i.flags|=1,n=jr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Ap(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Pa(g,c)&&n.ref===i.ref)if(ii=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ii=!0);else return i.lanes=n.lanes,gr(n,i,d)}return mu(n,i,a,c,d)}function Cp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(Ks,pi),pi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,on(Ks,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,on(Ks,pi),pi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,on(Ks,pi),pi|=c;return qn(n,i,d,a),i.child}function Rp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,a,c,d){var g=ni(a)?rs:On.current;return g=zs(i,g),Xs(i,d),a=su(n,i,a,c,g,d),c=au(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gr(n,i,d)):(dn&&c&&Hc(i),i.flags|=1,qn(n,i,a,d),i.child)}function Np(n,i,a,c,d){if(ni(a)){var g=!0;Oo(i)}else g=!1;if(Xs(i,d),i.stateNode===null)tl(n,i),vp(i,a,c),fu(i,a,c,d),c=!0;else if(n===null){var A=i.stateNode,z=i.memoizedProps;A.props=z;var K=A.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=wi(ge):(ge=ni(a)?rs:On.current,ge=zs(i,ge));var ze=a.getDerivedStateFromProps,je=typeof ze=="function"||typeof A.getSnapshotBeforeUpdate=="function";je||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==c||K!==ge)&&_p(i,A,c,ge),Or=!1;var Be=i.memoizedState;A.state=Be,Xo(i,c,A,d),K=i.memoizedState,z!==c||Be!==K||ti.current||Or?(typeof ze=="function"&&(du(i,a,ze,c),K=i.memoizedState),(z=Or||xp(i,a,z,c,Be,K,ge))?(je||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=K),A.props=c,A.state=K,A.context=ge,c=z):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Xh(n,i),z=i.memoizedProps,ge=i.type===i.elementType?z:Bi(i.type,z),A.props=ge,je=i.pendingProps,Be=A.context,K=a.contextType,typeof K=="object"&&K!==null?K=wi(K):(K=ni(a)?rs:On.current,K=zs(i,K));var pt=a.getDerivedStateFromProps;(ze=typeof pt=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==je||Be!==K)&&_p(i,A,c,K),Or=!1,Be=i.memoizedState,A.state=Be,Xo(i,c,A,d);var vt=i.memoizedState;z!==je||Be!==vt||ti.current||Or?(typeof pt=="function"&&(du(i,a,pt,c),vt=i.memoizedState),(ge=Or||xp(i,a,ge,c,Be,vt,K)||!1)?(ze||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,vt,K),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,vt,K)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&Be===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=vt),A.props=c,A.state=vt,A.context=K,c=ge):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&Be===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Be===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,a,c,g,d)}function gu(n,i,a,c,d,g){Rp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&Uh(i,a,!1),gr(n,i,g);c=i.stateNode,Bx.current=i;var z=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=js(i,n.child,null,g),i.child=js(i,null,z,g)):qn(n,i,z,g),i.memoizedState=c.state,d&&Uh(i,a,!0),i.child}function Pp(n){var i=n.stateNode;i.pendingContext?Dh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Dh(n,i.context,!1),Qc(n,i.containerInfo)}function Ip(n,i,a,c,d){return Gs(),Xc(d),i.flags|=256,qn(n,i,a,c),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dp(n,i,a){var c=i.pendingProps,d=fn.current,g=!1,A=(i.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(d&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),on(fn,d&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=hl(A,c,0,null),n=ps(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=vu(a),i.memoizedState=xu,n):_u(i,A));if(d=n.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return zx(n,i,A,c,z,d,a);if(g){g=c.fallback,A=i.mode,d=n.child,z=d.sibling;var K={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=K,i.deletions=null):(c=jr(d,K),c.subtreeFlags=d.subtreeFlags&14680064),z!==null?g=jr(z,g):(g=ps(g,A,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?vu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~a,i.memoizedState=xu,c}return g=n.child,n=g.sibling,c=jr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _u(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,a,c){return c!==null&&Xc(c),js(i,n.child,null,a),n=_u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zx(n,i,a,c,d,g,A){if(a)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),el(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=hl({mode:"visible",children:c.children},d,0,null),g=ps(g,d,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,A),i.child.memoizedState=vu(A),i.memoizedState=xu,g);if((i.mode&1)===0)return el(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;return c=z,g=Error(t(419)),c=hu(g,c,void 0),el(n,i,A,c)}if(z=(A&n.childLanes)!==0,ii||z){if(c=Rn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,pr(n,d),Hi(c,n,d,-1))}return Uu(),c=hu(Error(t(421))),el(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Qx.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,hi=Dr(d.nextSibling),fi=i,dn=!0,ki=null,n!==null&&(Mi[Ei++]=fr,Mi[Ei++]=hr,Mi[Ei++]=ss,fr=n.id,hr=n.overflow,ss=i),i=_u(i,c.children),i.flags|=4096,i)}function Lp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function yu(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Up(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(qn(n,i,c.children,a),c=fn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lp(n,a,i);else if(n.tag===19)Lp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(on(fn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),yu(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Yo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}yu(i,!0,a,null,g);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function gr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),us|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Vx(n,i,a){switch(i.tag){case 3:Pp(i),Gs();break;case 5:qh(i);break;case 1:ni(i.type)&&Oo(i);break;case 4:Qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;on(Go,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(on(fn,fn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Dp(n,i,a):(on(fn,fn.current&1),n=gr(n,i,a),n!==null?n.sibling:null);on(fn,fn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Up(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),on(fn,fn.current),c)break;return null;case 22:case 23:return i.lanes=0,Cp(n,i,a)}return gr(n,i,a)}var Fp,Su,Op,kp;Fp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Su=function(){},Op=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ls(qi.current);var g=null;switch(a){case"input":d=Ot(n,d),c=Ot(n,c),g=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),g=[];break;case"textarea":d=wt(n,d),c=wt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}tt(a,c);var A;a=null;for(ge in d)if(!c.hasOwnProperty(ge)&&d.hasOwnProperty(ge)&&d[ge]!=null)if(ge==="style"){var z=d[ge];for(A in z)z.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?g||(g=[]):(g=g||[]).push(ge,null));for(ge in c){var K=c[ge];if(z=d!=null?d[ge]:void 0,c.hasOwnProperty(ge)&&K!==z&&(K!=null||z!=null))if(ge==="style")if(z){for(A in z)!z.hasOwnProperty(A)||K&&K.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in K)K.hasOwnProperty(A)&&z[A]!==K[A]&&(a||(a={}),a[A]=K[A])}else a||(g||(g=[]),g.push(ge,a)),a=K;else ge==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,z=z?z.__html:void 0,K!=null&&z!==K&&(g=g||[]).push(ge,K)):ge==="children"?typeof K!="string"&&typeof K!="number"||(g=g||[]).push(ge,""+K):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(K!=null&&ge==="onScroll"&&ln("scroll",n),g||z===K||(g=[])):(g=g||[]).push(ge,K))}a&&(g=g||[]).push("style",a);var ge=g;(i.updateQueue=ge)&&(i.flags|=4)}},kp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Xa(n,i){if(!dn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Hx(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(i),null;case 1:return ni(i.type)&&Fo(),Bn(i),null;case 3:return c=i.stateNode,Ys(),cn(ti),cn(On),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ki!==null&&(Iu(ki),ki=null))),Su(n,i),Bn(i),null;case 5:eu(i);var d=ls(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Op(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Bn(i),null}if(n=ls(qi.current),Vo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[$i]=i,c[Fa]=g,n=(i.mode&1)!==0,a){case"dialog":ln("cancel",c),ln("close",c);break;case"iframe":case"object":case"embed":ln("load",c);break;case"video":case"audio":for(d=0;d<Da.length;d++)ln(Da[d],c);break;case"source":ln("error",c);break;case"img":case"image":case"link":ln("error",c),ln("load",c);break;case"details":ln("toggle",c);break;case"input":Kt(c,g),ln("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},ln("invalid",c);break;case"textarea":At(c,g),ln("invalid",c)}tt(a,g),d=null;for(var A in g)if(g.hasOwnProperty(A)){var z=g[A];A==="children"?typeof z=="string"?c.textContent!==z&&(g.suppressHydrationWarning!==!0&&Do(c.textContent,z,n),d=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&Do(c.textContent,z,n),d=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&ln("scroll",c)}switch(a){case"input":gt(c),Nt(c,g,!0);break;case"textarea":gt(c),Ht(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Lo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[$i]=i,n[Fa]=c,Fp(n,i,!1,!1),i.stateNode=n;e:{switch(A=Ye(a,c),a){case"dialog":ln("cancel",n),ln("close",n),d=c;break;case"iframe":case"object":case"embed":ln("load",n),d=c;break;case"video":case"audio":for(d=0;d<Da.length;d++)ln(Da[d],n);d=c;break;case"source":ln("error",n),d=c;break;case"img":case"image":case"link":ln("error",n),ln("load",n),d=c;break;case"details":ln("toggle",n),d=c;break;case"input":Kt(n,c),d=Ot(n,c),ln("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),ln("invalid",n);break;case"textarea":At(n,c),d=wt(n,c),ln("invalid",n);break;default:d=c}tt(a,d),z=d;for(g in z)if(z.hasOwnProperty(g)){var K=z[g];g==="style"?we(n,K):g==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&Me(n,K)):g==="children"?typeof K=="string"?(a!=="textarea"||K!=="")&&Ae(n,K):typeof K=="number"&&Ae(n,""+K):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?K!=null&&g==="onScroll"&&ln("scroll",n):K!=null&&R(n,g,K,A))}switch(a){case"input":gt(n),Nt(n,c,!1);break;case"textarea":gt(n),Ht(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?It(n,!!c.multiple,g,!1):c.defaultValue!=null&&It(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bn(i),null;case 6:if(n&&i.stateNode!=null)kp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Va.current),ls(qi.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[$i]=i,(g=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Do(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$i]=i,i.stateNode=c}return Bn(i),null;case 13:if(cn(fn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(dn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vh(),Gs(),i.flags|=98560,g=!1;else if(g=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[$i]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bn(i),g=!1}else ki!==null&&(Iu(ki),ki=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(fn.current&1)!==0?bn===0&&(bn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),Bn(i),null);case 4:return Ys(),Su(n,i),n===null&&La(i.stateNode.containerInfo),Bn(i),null;case 10:return qc(i.type._context),Bn(i),null;case 17:return ni(i.type)&&Fo(),Bn(i),null;case 19:if(cn(fn),g=i.memoizedState,g===null)return Bn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)Xa(g,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Yo(n),A!==null){for(i.flags|=128,Xa(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return on(fn,fn.current&1|2),i.child}n=n.sibling}g.tail!==null&&_e()>Zs&&(i.flags|=128,c=!0,Xa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!dn)return Bn(i),null}else 2*_e()-g.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,Xa(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(a=g.last,a!==null?a.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=_e(),i.sibling=null,a=fn.current,on(fn,c?a&1|2:a&1),i):(Bn(i),null);case 22:case 23:return Lu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(Bn(i),i.subtreeFlags&6&&(i.flags|=8192)):Bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gx(n,i){switch(Gc(i),i.tag){case 1:return ni(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),cn(ti),cn(On),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(cn(fn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return cn(fn),null;case 4:return Ys(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var nl=!1,zn=!1,jx=typeof WeakSet=="function"?WeakSet:Set,xt=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){mn(n,i,c)}else a.current=null}function Mu(n,i,a){try{a()}catch(c){mn(n,i,c)}}var Bp=!1;function Wx(n,i){if(Lc=Mo,n=xh(),Tc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var A=0,z=-1,K=-1,ge=0,ze=0,je=n,Be=null;t:for(;;){for(var pt;je!==a||d!==0&&je.nodeType!==3||(z=A+d),je!==g||c!==0&&je.nodeType!==3||(K=A+c),je.nodeType===3&&(A+=je.nodeValue.length),(pt=je.firstChild)!==null;)Be=je,je=pt;for(;;){if(je===n)break t;if(Be===a&&++ge===d&&(z=A),Be===g&&++ze===c&&(K=A),(pt=je.nextSibling)!==null)break;je=Be,Be=je.parentNode}je=pt}a=z===-1||K===-1?null:{start:z,end:K}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},Mo=!1,xt=i;xt!==null;)if(i=xt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,xt=n;else for(;xt!==null;){i=xt;try{var vt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(vt!==null){var _t=vt.memoizedProps,xn=vt.memoizedState,de=i.stateNode,te=de.getSnapshotBeforeUpdate(i.elementType===i.type?_t:Bi(i.type,_t),xn);de.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch($e){mn(i,i.return,$e)}if(n=i.sibling,n!==null){n.return=i.return,xt=n;break}xt=i.return}return vt=Bp,Bp=!1,vt}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Mu(i,a,g)}d=d.next}while(d!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Eu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function zp(n){var i=n.alternate;i!==null&&(n.alternate=null,zp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$i],delete i[Fa],delete i[Bc],delete i[Ax],delete i[Cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}var Dn=null,zi=!1;function Br(n,i,a){for(a=a.child;a!==null;)Gp(n,i,a),a=a.sibling}function Gp(n,i,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:zn||qs(a,i);case 6:var c=Dn,d=zi;Dn=null,Br(n,i,a),Dn=c,zi=d,Dn!==null&&(zi?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(zi?(n=Dn,a=a.stateNode,n.nodeType===8?kc(n.parentNode,a):n.nodeType===1&&kc(n,a),ba(n)):kc(Dn,a.stateNode));break;case 4:c=Dn,d=zi,Dn=a.stateNode.containerInfo,zi=!0,Br(n,i,a),Dn=c,zi=d;break;case 0:case 11:case 14:case 15:if(!zn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Mu(a,i,A),d=d.next}while(d!==c)}Br(n,i,a);break;case 1:if(!zn&&(qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){mn(a,i,z)}Br(n,i,a);break;case 21:Br(n,i,a);break;case 22:a.mode&1?(zn=(c=zn)||a.memoizedState!==null,Br(n,i,a),zn=c):Br(n,i,a);break;default:Br(n,i,a)}}function jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jx),i.forEach(function(c){var d=ev.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,A=i,z=A;e:for(;z!==null;){switch(z.tag){case 5:Dn=z.stateNode,zi=!1;break e;case 3:Dn=z.stateNode.containerInfo,zi=!0;break e;case 4:Dn=z.stateNode.containerInfo,zi=!0;break e}z=z.return}if(Dn===null)throw Error(t(160));Gp(g,A,d),Dn=null,zi=!1;var K=d.alternate;K!==null&&(K.return=null),d.return=null}catch(ge){mn(d,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,n),i=i.sibling}function Wp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(i,n),Zi(n),c&4){try{Ya(3,n,n.return),il(3,n)}catch(_t){mn(n,n.return,_t)}try{Ya(5,n,n.return)}catch(_t){mn(n,n.return,_t)}}break;case 1:Vi(i,n),Zi(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Vi(i,n),Zi(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(_t){mn(n,n.return,_t)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,A=a!==null?a.memoizedProps:g,z=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&Tt(d,g),Ye(z,A);var ge=Ye(z,g);for(A=0;A<K.length;A+=2){var ze=K[A],je=K[A+1];ze==="style"?we(d,je):ze==="dangerouslySetInnerHTML"?Me(d,je):ze==="children"?Ae(d,je):R(d,ze,je,ge)}switch(z){case"input":zt(d,g);break;case"textarea":qe(d,g);break;case"select":var Be=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var pt=g.value;pt!=null?It(d,!!g.multiple,pt,!1):Be!==!!g.multiple&&(g.defaultValue!=null?It(d,!!g.multiple,g.defaultValue,!0):It(d,!!g.multiple,g.multiple?[]:"",!1))}d[Fa]=g}catch(_t){mn(n,n.return,_t)}}break;case 6:if(Vi(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(_t){mn(n,n.return,_t)}}break;case 3:if(Vi(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(_t){mn(n,n.return,_t)}break;case 4:Vi(i,n),Zi(n);break;case 13:Vi(i,n),Zi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Cu=_e())),c&4&&jp(n);break;case 22:if(ze=a!==null&&a.memoizedState!==null,n.mode&1?(zn=(ge=zn)||ze,Vi(i,n),zn=ge):Vi(i,n),Zi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!ze&&(n.mode&1)!==0)for(xt=n,ze=n.child;ze!==null;){for(je=xt=ze;xt!==null;){switch(Be=xt,pt=Be.child,Be.tag){case 0:case 11:case 14:case 15:Ya(4,Be,Be.return);break;case 1:qs(Be,Be.return);var vt=Be.stateNode;if(typeof vt.componentWillUnmount=="function"){c=Be,a=Be.return;try{i=c,vt.props=i.memoizedProps,vt.state=i.memoizedState,vt.componentWillUnmount()}catch(_t){mn(c,a,_t)}}break;case 5:qs(Be,Be.return);break;case 22:if(Be.memoizedState!==null){$p(je);continue}}pt!==null?(pt.return=Be,xt=pt):$p(je)}ze=ze.sibling}e:for(ze=null,je=n;;){if(je.tag===5){if(ze===null){ze=je;try{d=je.stateNode,ge?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=je.stateNode,K=je.memoizedProps.style,A=K!=null&&K.hasOwnProperty("display")?K.display:null,z.style.display=xe("display",A))}catch(_t){mn(n,n.return,_t)}}}else if(je.tag===6){if(ze===null)try{je.stateNode.nodeValue=ge?"":je.memoizedProps}catch(_t){mn(n,n.return,_t)}}else if((je.tag!==22&&je.tag!==23||je.memoizedState===null||je===n)&&je.child!==null){je.child.return=je,je=je.child;continue}if(je===n)break e;for(;je.sibling===null;){if(je.return===null||je.return===n)break e;ze===je&&(ze=null),je=je.return}ze===je&&(ze=null),je.sibling.return=je.return,je=je.sibling}}break;case 19:Vi(i,n),Zi(n),c&4&&jp(n);break;case 21:break;default:Vi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var g=Hp(n);bu(n,g,d);break;case 3:case 4:var A=c.stateNode.containerInfo,z=Hp(n);wu(n,z,A);break;default:throw Error(t(161))}}catch(K){mn(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xx(n,i,a){xt=n,Xp(n)}function Xp(n,i,a){for(var c=(n.mode&1)!==0;xt!==null;){var d=xt,g=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||nl;if(!A){var z=d.alternate,K=z!==null&&z.memoizedState!==null||zn;z=nl;var ge=zn;if(nl=A,(zn=K)&&!ge)for(xt=d;xt!==null;)A=xt,K=A.child,A.tag===22&&A.memoizedState!==null?qp(d):K!==null?(K.return=A,xt=K):qp(d);for(;g!==null;)xt=g,Xp(g),g=g.sibling;xt=d,nl=z,zn=ge}Yp(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,xt=g):Yp(n)}}function Yp(n){for(;xt!==null;){var i=xt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!zn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Bi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&$h(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$h(i,A,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var K=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&a.focus();break;case"img":K.src&&(a.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var ze=ge.memoizedState;if(ze!==null){var je=ze.dehydrated;je!==null&&ba(je)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||i.flags&512&&Eu(i)}catch(Be){mn(i,i.return,Be)}}if(i===n){xt=null;break}if(a=i.sibling,a!==null){a.return=i.return,xt=a;break}xt=i.return}}function $p(n){for(;xt!==null;){var i=xt;if(i===n){xt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,xt=a;break}xt=i.return}}function qp(n){for(;xt!==null;){var i=xt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{il(4,i)}catch(K){mn(i,a,K)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(K){mn(i,d,K)}}var g=i.return;try{Eu(i)}catch(K){mn(i,g,K)}break;case 5:var A=i.return;try{Eu(i)}catch(K){mn(i,A,K)}}}catch(K){mn(i,i.return,K)}if(i===n){xt=null;break}var z=i.sibling;if(z!==null){z.return=i.return,xt=z;break}xt=i.return}}var Yx=Math.ceil,rl=P.ReactCurrentDispatcher,Tu=P.ReactCurrentOwner,Ti=P.ReactCurrentBatchConfig,Qt=0,Rn=null,yn=null,Ln=0,pi=0,Ks=Lr(0),bn=0,$a=null,us=0,sl=0,Au=0,qa=null,ri=null,Cu=0,Zs=1/0,xr=null,al=!1,Ru=null,zr=null,ol=!1,Vr=null,ll=0,Ka=0,Nu=null,cl=-1,ul=0;function Kn(){return(Qt&6)!==0?_e():cl!==-1?cl:cl=_e()}function Hr(n){return(n.mode&1)===0?1:(Qt&2)!==0&&Ln!==0?Ln&-Ln:Nx.transition!==null?(ul===0&&(ul=W()),ul):(n=at,n!==0||(n=window.event,n=n===void 0?16:Zf(n.type)),n)}function Hi(n,i,a,c){if(50<Ka)throw Ka=0,Nu=null,Error(t(185));ve(n,a,c),((Qt&2)===0||n!==Rn)&&(n===Rn&&((Qt&2)===0&&(sl|=a),bn===4&&Gr(n,Ln)),si(n,c),a===1&&Qt===0&&(i.mode&1)===0&&(Zs=_e()+500,ko&&Fr()))}function si(n,i){var a=n.callbackNode;k(n,i);var c=kt(n,n===Rn?Ln:0);if(c===0)a!==null&&cr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&cr(a),i===1)n.tag===0?Rx(Zp.bind(null,n)):Fh(Zp.bind(null,n)),bx(function(){(Qt&6)===0&&Fr()}),a=null;else{switch(ut(c)){case 1:a=nt;break;case 4:a=b;break;case 16:a=G;break;case 536870912:a=Z;break;default:a=G}a=sm(a,Kp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Kp(n,i){if(cl=-1,ul=0,(Qt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=kt(n,n===Rn?Ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var d=Qt;Qt|=2;var g=Qp();(Rn!==n||Ln!==i)&&(xr=null,Zs=_e()+500,fs(n,i));do try{Kx();break}catch(z){Jp(n,z)}while(!0);$c(),rl.current=g,Qt=d,yn!==null?i=0:(Rn=null,Ln=0,i=bn)}if(i!==0){if(i===2&&(d=F(n),d!==0&&(c=d,i=Pu(n,d))),i===1)throw a=$a,fs(n,0),Gr(n,c),si(n,_e()),a;if(i===6)Gr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!$x(d)&&(i=dl(n,c),i===2&&(g=F(n),g!==0&&(c=g,i=Pu(n,g))),i===1))throw a=$a,fs(n,0),Gr(n,c),si(n,_e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,ri,xr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(i=Cu+500-_e(),10<i)){if(kt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(hs.bind(null,n,ri,xr),i);break}hs(n,ri,xr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-Ee(c);g=1<<A,A=i[A],A>d&&(d=A),c&=~g}if(c=d,c=_e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Yx(c/1960))-c,10<c){n.timeoutHandle=Oc(hs.bind(null,n,ri,xr),c);break}hs(n,ri,xr);break;case 5:hs(n,ri,xr);break;default:throw Error(t(329))}}}return si(n,_e()),n.callbackNode===a?Kp.bind(null,n):null}function Pu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=dl(n,i),n!==2&&(i=ri,ri=a,i!==null&&Iu(i)),n}function Iu(n){ri===null?ri=n:ri.push.apply(ri,n)}function $x(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Oi(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(n,i){for(i&=~Au,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ee(i),c=1<<a;n[a]=-1,i&=~c}}function Zp(n){if((Qt&6)!==0)throw Error(t(327));Js();var i=kt(n,0);if((i&1)===0)return si(n,_e()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var c=F(n);c!==0&&(i=c,a=Pu(n,c))}if(a===1)throw a=$a,fs(n,0),Gr(n,i),si(n,_e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,ri,xr),si(n,_e()),null}function Du(n,i){var a=Qt;Qt|=1;try{return n(i)}finally{Qt=a,Qt===0&&(Zs=_e()+500,ko&&Fr())}}function ds(n){Vr!==null&&Vr.tag===0&&(Qt&6)===0&&Js();var i=Qt;Qt|=1;var a=Ti.transition,c=at;try{if(Ti.transition=null,at=1,n)return n()}finally{at=c,Ti.transition=a,Qt=i,(Qt&6)===0&&Fr()}}function Lu(){pi=Ks.current,cn(Ks)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,wx(a)),yn!==null)for(a=yn.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fo();break;case 3:Ys(),cn(ti),cn(On),nu();break;case 5:eu(c);break;case 4:Ys();break;case 13:cn(fn);break;case 19:cn(fn);break;case 10:qc(c.type._context);break;case 22:case 23:Lu()}a=a.return}if(Rn=n,yn=n=jr(n.current,null),Ln=pi=i,bn=0,$a=null,Au=sl=us=0,ri=qa=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var A=g.next;g.next=d,c.next=A}a.pending=c}os=null}return n}function Jp(n,i){do{var a=yn;try{if($c(),$o.current=Jo,qo){for(var c=hn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}qo=!1}if(cs=0,Cn=wn=hn=null,Ha=!1,Ga=0,Tu.current=null,a===null||a.return===null){bn=1,$a=i,yn=null;break}e:{var g=n,A=a.return,z=a,K=i;if(i=Ln,z.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var ge=K,ze=z,je=ze.tag;if((ze.mode&1)===0&&(je===0||je===11||je===15)){var Be=ze.alternate;Be?(ze.updateQueue=Be.updateQueue,ze.memoizedState=Be.memoizedState,ze.lanes=Be.lanes):(ze.updateQueue=null,ze.memoizedState=null)}var pt=Ep(A);if(pt!==null){pt.flags&=-257,wp(pt,A,z,g,i),pt.mode&1&&Mp(g,ge,i),i=pt,K=ge;var vt=i.updateQueue;if(vt===null){var _t=new Set;_t.add(K),i.updateQueue=_t}else vt.add(K);break e}else{if((i&1)===0){Mp(g,ge,i),Uu();break e}K=Error(t(426))}}else if(dn&&z.mode&1){var xn=Ep(A);if(xn!==null){(xn.flags&65536)===0&&(xn.flags|=256),wp(xn,A,z,g,i),Xc($s(K,z));break e}}g=K=$s(K,z),bn!==4&&(bn=2),qa===null?qa=[g]:qa.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var de=yp(g,K,i);Yh(g,de);break e;case 1:z=K;var te=g.type,fe=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(zr===null||!zr.has(fe)))){g.flags|=65536,i&=-i,g.lanes|=i;var $e=Sp(g,z,i);Yh(g,$e);break e}}g=g.return}while(g!==null)}tm(a)}catch(yt){i=yt,yn===a&&a!==null&&(yn=a=a.return);continue}break}while(!0)}function Qp(){var n=rl.current;return rl.current=Jo,n===null?Jo:n}function Uu(){(bn===0||bn===3||bn===2)&&(bn=4),Rn===null||(us&268435455)===0&&(sl&268435455)===0||Gr(Rn,Ln)}function dl(n,i){var a=Qt;Qt|=2;var c=Qp();(Rn!==n||Ln!==i)&&(xr=null,fs(n,i));do try{qx();break}catch(d){Jp(n,d)}while(!0);if($c(),Qt=a,rl.current=c,yn!==null)throw Error(t(261));return Rn=null,Ln=0,bn}function qx(){for(;yn!==null;)em(yn)}function Kx(){for(;yn!==null&&!j();)em(yn)}function em(n){var i=rm(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?tm(n):yn=i,Tu.current=null}function tm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Hx(a,i,pi),a!==null){yn=a;return}}else{if(a=Gx(a,i),a!==null){a.flags&=32767,yn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,yn=null;return}}if(i=i.sibling,i!==null){yn=i;return}yn=i=n}while(i!==null);bn===0&&(bn=5)}function hs(n,i,a){var c=at,d=Ti.transition;try{Ti.transition=null,at=1,Zx(n,i,a,c)}finally{Ti.transition=d,at=c}return null}function Zx(n,i,a,c){do Js();while(Vr!==null);if((Qt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ue(n,g),n===Rn&&(yn=Rn=null,Ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ol||(ol=!0,sm(G,function(){return Js(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ti.transition,Ti.transition=null;var A=at;at=1;var z=Qt;Qt|=4,Tu.current=null,Wx(n,a),Wp(a,n),xx(Uc),Mo=!!Lc,Uc=Lc=null,n.current=a,Xx(a),Le(),Qt=z,at=A,Ti.transition=g}else n.current=a;if(ol&&(ol=!1,Vr=n,ll=d),g=n.pendingLanes,g===0&&(zr=null),Xe(a.stateNode),si(n,_e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,n=Ru,Ru=null,n;return(ll&1)!==0&&n.tag!==0&&Js(),g=n.pendingLanes,(g&1)!==0?n===Nu?Ka++:(Ka=0,Nu=n):Ka=0,Fr(),null}function Js(){if(Vr!==null){var n=ut(ll),i=Ti.transition,a=at;try{if(Ti.transition=null,at=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,ll=0,(Qt&6)!==0)throw Error(t(331));var d=Qt;for(Qt|=4,xt=n.current;xt!==null;){var g=xt,A=g.child;if((xt.flags&16)!==0){var z=g.deletions;if(z!==null){for(var K=0;K<z.length;K++){var ge=z[K];for(xt=ge;xt!==null;){var ze=xt;switch(ze.tag){case 0:case 11:case 15:Ya(8,ze,g)}var je=ze.child;if(je!==null)je.return=ze,xt=je;else for(;xt!==null;){ze=xt;var Be=ze.sibling,pt=ze.return;if(zp(ze),ze===ge){xt=null;break}if(Be!==null){Be.return=pt,xt=Be;break}xt=pt}}}var vt=g.alternate;if(vt!==null){var _t=vt.child;if(_t!==null){vt.child=null;do{var xn=_t.sibling;_t.sibling=null,_t=xn}while(_t!==null)}}xt=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,xt=A;else e:for(;xt!==null;){if(g=xt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var de=g.sibling;if(de!==null){de.return=g.return,xt=de;break e}xt=g.return}}var te=n.current;for(xt=te;xt!==null;){A=xt;var fe=A.child;if((A.subtreeFlags&2064)!==0&&fe!==null)fe.return=A,xt=fe;else e:for(A=te;xt!==null;){if(z=xt,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:il(9,z)}}catch(yt){mn(z,z.return,yt)}if(z===A){xt=null;break e}var $e=z.sibling;if($e!==null){$e.return=z.return,xt=$e;break e}xt=z.return}}if(Qt=d,Fr(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{at=a,Ti.transition=i}}return!1}function nm(n,i,a){i=$s(a,i),i=yp(n,i,1),n=kr(n,i,1),i=Kn(),n!==null&&(ve(n,1,i),si(n,i))}function mn(n,i,a){if(n.tag===3)nm(n,n,a);else for(;i!==null;){if(i.tag===3){nm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){n=$s(a,n),n=Sp(i,n,1),i=kr(i,n,1),n=Kn(),i!==null&&(ve(i,1,n),si(i,n));break}}i=i.return}}function Jx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kn(),n.pingedLanes|=n.suspendedLanes&a,Rn===n&&(Ln&a)===a&&(bn===4||bn===3&&(Ln&130023424)===Ln&&500>_e()-Cu?fs(n,0):Au|=a),si(n,i)}function im(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=Kn();n=pr(n,i),n!==null&&(ve(n,i,a),si(n,a))}function Qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),im(n,a)}function ev(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),im(n,a)}var rm;rm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ii=!1,Vx(n,i,a);ii=(n.flags&131072)!==0}else ii=!1,dn&&(i.flags&1048576)!==0&&Oh(i,zo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var d=zs(i,On.current);Xs(i,a),d=su(null,i,c,n,d,a);var g=au();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ni(c)?(g=!0,Oo(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jc(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,fu(i,c,n,a),i=gu(null,i,c,!0,g,a)):(i.tag=0,dn&&g&&Hc(i),qn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nv(c),n=Bi(c,n),d){case 0:i=mu(null,i,c,n,a);break e;case 1:i=Np(null,i,c,n,a);break e;case 11:i=bp(null,i,c,n,a);break e;case 14:i=Tp(null,i,c,Bi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),mu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Np(n,i,c,d,a);case 3:e:{if(Pp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Xh(n,i),Xo(i,c,null,a);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=$s(Error(t(423)),i),i=Ip(n,i,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),i),i=Ip(n,i,c,a,d);break e}else for(hi=Dr(i.stateNode.containerInfo.firstChild),fi=i,dn=!0,ki=null,a=jh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=gr(n,i,a);break e}qn(n,i,c,a)}i=i.child}return i;case 5:return qh(i),n===null&&Wc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,A=d.children,Fc(c,d)?A=null:g!==null&&Fc(c,g)&&(i.flags|=32),Rp(n,i),qn(n,i,A,a),i.child;case 6:return n===null&&Wc(i),null;case 13:return Dp(n,i,a);case 4:return Qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,a):qn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),bp(n,i,c,d,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,A=d.value,on(Go,c._currentValue),c._currentValue=A,g!==null)if(Oi(g.value,A)){if(g.children===d.children&&!ti.current){i=gr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){A=g.child;for(var K=z.firstContext;K!==null;){if(K.context===c){if(g.tag===1){K=mr(-1,a&-a),K.tag=2;var ge=g.updateQueue;if(ge!==null){ge=ge.shared;var ze=ge.pending;ze===null?K.next=K:(K.next=ze.next,ze.next=K),ge.pending=K}}g.lanes|=a,K=g.alternate,K!==null&&(K.lanes|=a),Kc(g.return,a,i),z.lanes|=a;break}K=K.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=a,z=A.alternate,z!==null&&(z.lanes|=a),Kc(A,a,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}qn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Xs(i,a),d=wi(d),c=c(d),i.flags|=1,qn(n,i,c,a),i.child;case 14:return c=i.type,d=Bi(c,i.pendingProps),d=Bi(c.type,d),Tp(n,i,c,d,a);case 15:return Ap(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),tl(n,i),i.tag=1,ni(c)?(n=!0,Oo(i)):n=!1,Xs(i,a),vp(i,c,d),fu(i,c,d,a),gu(null,i,c,!0,n,a);case 19:return Up(n,i,a);case 22:return Cp(n,i,a)}throw Error(t(156,i.tag))};function sm(n,i){return lr(n,i)}function tv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,c){return new tv(n,i,a,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nv(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===X)return 14}return 2}function jr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fl(n,i,a,c,d,g){var A=2;if(c=n,typeof n=="function")Fu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return ps(a.children,d,g,i);case T:A=8,d|=8;break;case N:return n=Ai(12,a,i,d|2),n.elementType=N,n.lanes=g,n;case re:return n=Ai(13,a,i,d),n.elementType=re,n.lanes=g,n;case pe:return n=Ai(19,a,i,d),n.elementType=pe,n.lanes=g,n;case J:return hl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:A=10;break e;case H:A=9;break e;case Q:A=11;break e;case X:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(A,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ps(n,i,a,c){return n=Ai(7,n,c,i),n.lanes=a,n}function hl(n,i,a,c){return n=Ai(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function Ou(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function ku(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Re(0),this.expirationTimes=Re(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bu(n,i,a,c,d,g,A,z,K){return n=new iv(n,i,a,z,K),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ai(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(g),n}function rv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function am(n){if(!n)return Ur;n=n._reactInternals;e:{if(gn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ni(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return Lh(n,a,i)}return i}function om(n,i,a,c,d,g,A,z,K){return n=Bu(a,c,!0,n,d,g,A,z,K),n.context=am(null),a=n.current,c=Kn(),d=Hr(a),g=mr(c,d),g.callback=i??null,kr(a,g,d),n.current.lanes=d,ve(n,d,c),si(n,c),n}function pl(n,i,a,c){var d=i.current,g=Kn(),A=Hr(d);return a=am(a),i.context===null?i.context=a:i.pendingContext=a,i=mr(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(d,i,A),n!==null&&(Hi(n,d,A,g),Wo(n,d,A)),A}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function lm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zu(n,i){lm(n,i),(n=n.alternate)&&lm(n,i)}function sv(){return null}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}gl.prototype.render=Vu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ds(function(){pl(null,n,null,null)}),i[ur]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ut();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Fi.length&&i!==0&&i<Fi[a].priority;a++);Fi.splice(a,0,n),a===0&&qf(n)}};function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function um(){}function av(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ge=ml(A);g.call(ge)}}var A=om(i,c,n,0,null,!1,!1,"",um);return n._reactRootContainer=A,n[ur]=A.current,La(n.nodeType===8?n.parentNode:n),ds(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var z=c;c=function(){var ge=ml(K);z.call(ge)}}var K=Bu(n,0,!1,null,null,!1,!1,"",um);return n._reactRootContainer=K,n[ur]=K.current,La(n.nodeType===8?n.parentNode:n),ds(function(){pl(i,K,a,c)}),K}function vl(n,i,a,c,d){var g=a._reactRootContainer;if(g){var A=g;if(typeof d=="function"){var z=d;d=function(){var K=ml(A);z.call(K)}}pl(i,A,n,d)}else A=av(a,i,n,d,c);return ml(A)}mt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(ft(i,a|1),si(i,_e()),(Qt&6)===0&&(Zs=_e()+500,Fr()))}break;case 13:ds(function(){var c=pr(n,1);if(c!==null){var d=Kn();Hi(c,n,1,d)}}),zu(n,1)}},rt=function(n){if(n.tag===13){var i=pr(n,134217728);if(i!==null){var a=Kn();Hi(i,n,134217728,a)}zu(n,134217728)}},Yt=function(n){if(n.tag===13){var i=Hr(n),a=pr(n,i);if(a!==null){var c=Kn();Hi(a,n,i,c)}zu(n,i)}},Ut=function(){return at},un=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},He=function(n,i,a){switch(i){case"input":if(zt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Uo(c);if(!d)throw Error(t(90));Et(c),zt(c,d)}}}break;case"textarea":qe(n,a);break;case"select":i=a.value,i!=null&&It(n,!!a.multiple,i,!1)}},ke=Du,ye=ds;var ov={usingClientEntryPoint:!1,Events:[Oa,ks,Uo,me,lt,Du]},Za={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lv={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Si(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{ne=_l.inject(lv),Ie=_l}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov,ai.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return rv(n,i,null,a)},ai.createRoot=function(n,i){if(!Hu(n))throw Error(t(299));var a=!1,c="",d=cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Bu(n,1,!1,null,null,a,!1,c,d),n[ur]=i.current,La(n.nodeType===8?n.parentNode:n),new Vu(i)},ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Si(i),n=n===null?null:n.stateNode,n},ai.flushSync=function(n){return ds(n)},ai.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!0,a)},ai.hydrateRoot=function(n,i,a){if(!Hu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",A=cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=om(i,null,n,1,a??null,d,!1,g,A),n[ur]=i.current,La(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new gl(i)},ai.render=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!1,a)},ai.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},ai.unstable_batchedUpdates=Du,ai.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var vm;function xv(){if(vm)return Wu.exports;vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wu.exports=gv(),Wu.exports}var _m;function vv(){if(_m)return yl;_m=1;var s=xv();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var _v=vv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="184",yv=0,ym=1,Sv=2,Xl=1,Mv=2,oo=3,ns=0,li=1,Er=2,br=0,ma=1,Sm=2,Mm=3,Em=4,Ev=5,Ms=100,wv=101,bv=102,Tv=103,Av=104,Cv=200,Rv=201,Nv=202,Pv=203,Id=204,Dd=205,Iv=206,Dv=207,Lv=208,Uv=209,Fv=210,Ov=211,kv=212,Bv=213,zv=214,Ld=0,Ud=1,Fd=2,xa=3,Od=4,kd=5,Bd=6,zd=7,B0=0,Vv=1,Hv=2,ir=0,z0=1,V0=2,H0=3,G0=4,j0=5,W0=6,X0=7,Y0=300,As=301,va=302,$u=303,qu=304,uc=306,Vd=1e3,wr=1001,Hd=1002,Un=1003,Gv=1004,Sl=1005,jn=1006,Ku=1007,ws=1008,Ii=1009,$0=1010,q0=1011,mo=1012,Rf=1013,ar=1014,tr=1015,Ar=1016,Nf=1017,Pf=1018,go=1020,K0=35902,Z0=35899,J0=1021,Q0=1022,Yi=1023,Cr=1026,bs=1027,eg=1028,If=1029,Cs=1030,Df=1031,Lf=1033,Yl=33776,$l=33777,ql=33778,Kl=33779,Gd=35840,jd=35841,Wd=35842,Xd=35843,Yd=36196,$d=37492,qd=37496,Kd=37488,Zd=37489,Ql=37490,Jd=37491,Qd=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,df=37819,ff=37820,hf=37821,pf=36492,mf=36494,gf=36495,xf=36283,vf=36284,ec=36285,_f=36286,jv=3200,wm=0,Wv=1,Qr="",Ni="srgb",tc="srgb-linear",nc="linear",rn="srgb",Qs=7680,bm=519,Xv=512,Yv=513,$v=514,Uf=515,qv=516,Kv=517,Ff=518,Zv=519,Tm=35044,Am="300 es",nr=2e3,ic=2001;function Jv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=rc("canvas");return s.style.display="block",s}const Cm={};function Rm(...s){const e="THREE."+s.shift();console.log(e,...s)}function tg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=tg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function en(...s){s=tg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function yf(...s){const e=s.join(" ");e in Cm||(Cm[e]=!0,Dt(...s))}function e_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const t_={[Ld]:Ud,[Fd]:Bd,[Od]:zd,[xa]:kd,[Ud]:Ld,[Bd]:Fd,[zd]:Od,[kd]:xa};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,Sf=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function Zt(s,e,t){return Math.max(e,Math.min(t,s))}function n_(s,e){return(s%e+e)%e}function Ju(s,e,t){return(1-t)*s+t*e}function Qa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jf=class jf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jf.prototype.isVector2=!0;let Lt=jf;class Sa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],C=l[u+2],D=l[u+3];if(S!==D||h!==x||p!==M||v!==C){let y=h*x+p*M+v*C+S*D;y<0&&(x=-x,M=-M,C=-C,D=-D,y=-y);let _=1-f;if(y<.9995){const L=Math.acos(y),R=Math.sin(L);_=Math.sin(_*L)/R,f=Math.sin(f*L)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f;const L=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=L,p*=L,v*=L,S*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],C=l[u+3];return e[t]=f*C+v*S+h*M-p*x,e[t+1]=h*C+v*x+p*S-f*M,e[t+2]=p*C+v*M+f*x-h*S,e[t+3]=v*C-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),C=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"YXZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"ZXY":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"ZYX":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"YZX":this._x=x*v*S+p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S-x*M*C;break;case"XZY":this._x=x*v*S-p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S+x*M*C;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wf=class Wf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wf.prototype.isVector3=!0;let ie=Wf;const Qu=new ie,Nm=new Sa,Xf=class Xf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],C=r[8],D=o[0],y=o[3],_=o[6],L=o[1],R=o[4],P=o[7],V=o[2],I=o[5],O=o[8];return l[0]=u*D+f*L+h*V,l[3]=u*y+f*R+h*I,l[6]=u*_+f*P+h*O,l[1]=p*D+v*L+S*V,l[4]=p*y+v*R+S*I,l[7]=p*_+v*P+S*O,l[2]=x*D+M*L+C*V,l[5]=x*y+M*R+C*I,l[8]=x*_+M*P+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,C=t*S+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=S*D,e[1]=(o*p-v*r)*D,e[2]=(f*r-o*u)*D,e[3]=x*D,e[4]=(v*t-o*h)*D,e[5]=(o*l-f*t)*D,e[6]=M*D,e[7]=(r*h-p*t)*D,e[8]=(u*t-r*l)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xf.prototype.isMatrix3=!0;let Vt=Xf;const ed=new Vt,Pm=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const s={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===rn&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===rn&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return yf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return yf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[tc]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:Pm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:r,transfer:rn,toXYZ:Pm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),s}const Jt=i_();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ea;class r_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ea===void 0&&(ea=rc("canvas")),ea.width=e.width,ea.height=e.height;const o=ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(td(o[u].image)):l.push(td(o[u]))}else l=td(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let a_=0;const nd=new ie;class Jn extends Ns{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,r=wr,o=wr,l=jn,u=ws,f=Yi,h=Ii,p=Jn.DEFAULT_ANISOTROPY,v=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=xo(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Y0;Jn.DEFAULT_ANISOTROPY=1;const Yf=class Yf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],C=h[9],D=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-D)<.01&&Math.abs(C-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+D)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(M+1)/2,V=(_+1)/2,I=(v+x)/4,O=(S+D)/4,T=(C+y)/4;return R>P&&R>V?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=O/r):P>V?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=T/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=O/l,o=T/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-C)*(y-C)+(S-D)*(S-D)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(S-D)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this.w=Zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this.w=Zt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;let vn=Yf;class o_ extends Ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Jn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Of(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends o_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ng extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=class cc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=C,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+C*p,t[5]=x-D*p,t[9]=-f*h,t[2]=D-x*p,t[6]=C+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x+D*f,t[4]=C*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-C,t[6]=D+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x-D*f,t[4]=-u*S,t[8]=C+M*f,t[1]=M+C*f,t[5]=u*v,t[9]=D-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=C*p-M,t[8]=x*p+D,t[1]=h*S,t[5]=D*p+x,t[9]=M*p-C,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=D-x*S,t[8]=C*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+C,t[10]=x-D*S}else if(e.order==="XZY"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+D,t[5]=u*v,t[9]=M*S-C,t[2]=C*S-M,t[6]=f*v,t[10]=D*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Xr.crossVectors(r,mi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Xr.crossVectors(r,mi)),Xr.normalize(),Ml.crossVectors(mi,Xr),o[0]=Xr.x,o[4]=Ml.x,o[8]=mi.x,o[1]=Xr.y,o[5]=Ml.y,o[9]=mi.y,o[2]=Xr.z,o[6]=Ml.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],C=r[2],D=r[6],y=r[10],_=r[14],L=r[3],R=r[7],P=r[11],V=r[15],I=o[0],O=o[4],T=o[8],N=o[12],Y=o[1],H=o[5],Q=o[9],re=o[13],pe=o[2],X=o[6],oe=o[10],J=o[14],ee=o[3],he=o[7],ce=o[11],B=o[15];return l[0]=u*I+f*Y+h*pe+p*ee,l[4]=u*O+f*H+h*X+p*he,l[8]=u*T+f*Q+h*oe+p*ce,l[12]=u*N+f*re+h*J+p*B,l[1]=v*I+S*Y+x*pe+M*ee,l[5]=v*O+S*H+x*X+M*he,l[9]=v*T+S*Q+x*oe+M*ce,l[13]=v*N+S*re+x*J+M*B,l[2]=C*I+D*Y+y*pe+_*ee,l[6]=C*O+D*H+y*X+_*he,l[10]=C*T+D*Q+y*oe+_*ce,l[14]=C*N+D*re+y*J+_*B,l[3]=L*I+R*Y+P*pe+V*ee,l[7]=L*O+R*H+P*X+V*he,l[11]=L*T+R*Q+P*oe+V*ce,l[15]=L*N+R*re+P*J+V*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],C=e[3],D=e[7],y=e[11],_=e[15],L=h*M-p*x,R=f*M-p*S,P=f*x-h*S,V=u*M-p*v,I=u*x-h*v,O=u*S-f*v;return t*(D*L-y*R+_*P)-r*(C*L-y*V+_*I)+o*(C*R-D*V+_*O)-l*(C*P-D*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],C=e[12],D=e[13],y=e[14],_=e[15],L=t*f-r*u,R=t*h-o*u,P=t*p-l*u,V=r*h-o*f,I=r*p-l*f,O=o*p-l*h,T=v*D-S*C,N=v*y-x*C,Y=v*_-M*C,H=S*y-x*D,Q=S*_-M*D,re=x*_-M*y,pe=L*re-R*Q+P*H+V*Y-I*N+O*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/pe;return e[0]=(f*re-h*Q+p*H)*X,e[1]=(o*Q-r*re-l*H)*X,e[2]=(D*O-y*I+_*V)*X,e[3]=(x*I-S*O-M*V)*X,e[4]=(h*Y-u*re-p*N)*X,e[5]=(t*re-o*Y+l*N)*X,e[6]=(y*P-C*O-_*R)*X,e[7]=(v*O-x*P+M*R)*X,e[8]=(u*Q-f*Y+p*T)*X,e[9]=(r*Y-t*Q-l*T)*X,e[10]=(C*I-D*P+_*L)*X,e[11]=(S*P-v*I-M*L)*X,e[12]=(f*N-u*H-h*T)*X,e[13]=(t*H-r*N+o*T)*X,e[14]=(D*R-C*V-y*L)*X,e[15]=(v*V-S*R+x*L)*X,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,C=l*S,D=u*v,y=u*S,_=f*S,L=h*p,R=h*v,P=h*S,V=r.x,I=r.y,O=r.z;return o[0]=(1-(D+_))*V,o[1]=(M+P)*V,o[2]=(C-R)*V,o[3]=0,o[4]=(M-P)*I,o[5]=(1-(x+_))*I,o[6]=(y+L)*I,o[7]=0,o[8]=(C+R)*O,o[9]=(y-L)*O,o[10]=(1-(x+D))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ta.set(o[0],o[1],o[2]).length();const f=ta.set(o[4],o[5],o[6]).length(),h=ta.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Gi.copy(this);const p=1/u,v=1/f,S=1/h;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=v,Gi.elements[5]*=v,Gi.elements[6]*=v,Gi.elements[8]*=S,Gi.elements[9]*=S,Gi.elements[10]*=S,t.setFromRotationMatrix(Gi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let C,D;if(h)C=l/(u-l),D=u*l/(u-l);else if(f===nr)C=-(u+l)/(u-l),D=-2*u*l/(u-l);else if(f===ic)C=-u/(u-l),D=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let C,D;if(h)C=1/(u-l),D=u/(u-l);else if(f===nr)C=-2/(u-l),D=-(u+l)/(u-l);else if(f===ic)C=-1/(u-l),D=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cc.prototype.isMatrix4=!0;let Mn=cc;const ta=new ie,Gi=new Mn,c_=new ie(0,0,0),u_=new ie(1,1,1),Xr=new ie,Ml=new ie,mi=new ie,Dm=new Mn,Lm=new Sa;class Rs{constructor(e=0,t=0,r=0,o=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Zt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";let ig=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},d_=0;const Um=new ie,na=new Sa,vr=new Mn,El=new ie,eo=new ie,f_=new ie,h_=new Sa,Fm=new ie(1,0,0),Om=new ie(0,1,0),km=new ie(0,0,1),Bm={type:"added"},p_={type:"removed"},ia={type:"childadded",child:null},id={type:"childremoved",child:null};class xi extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const e=new ie,t=new Rs,r=new Sa,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Vt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(eo,El,this.up):vr.lookAt(El,eo,this.up),this.quaternion.setFromRotationMatrix(vr),o&&(vr.extractRotation(o.matrixWorld),na.setFromRotationMatrix(vr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),ia.child=e,this.dispatchEvent(ia),ia.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),C=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}xi.DEFAULT_UP=new ie(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ts extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const y=t.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,C=.005;p.inputState.pinching&&x>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ts;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class sn{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Jt.workingColorSpace){if(e=n_(e,1),t=Zt(t,0,1),r=Zt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=sd(u,l,e+1/3),this.g=sd(u,l,e),this.b=sd(u,l,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ni){function r(l){l!==void 0&&parseFloat(l)<1&&Dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const r=rg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return Jt.workingToColorSpace(Hn.copy(this),e),Math.round(Zt(Hn.r*255,0,255))*65536+Math.round(Zt(Hn.g*255,0,255))*256+Math.round(Zt(Hn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Hn.copy(this),t);const r=Hn.r,o=Hn.g,l=Hn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ni){Jt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,r=Hn.g,o=Hn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(wl);const r=Ju(Yr.h,wl.h,t),o=Ju(Yr.s,wl.s,t),l=Ju(Yr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new sn;sn.NAMES=rg;class g_ extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rs,this.environmentIntensity=1,this.environmentRotation=new Rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new ie,_r=new ie,ad=new ie,yr=new ie,ra=new ie,sa=new ie,zm=new ie,od=new ie,ld=new ie,cd=new ie,ud=new vn,dd=new vn,fd=new vn;class Xi{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ji.subVectors(e,t),o.cross(ji);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ji.subVectors(o,t),_r.subVectors(r,t),ad.subVectors(e,t);const u=ji.dot(ji),f=ji.dot(_r),h=ji.dot(ad),p=_r.dot(_r),v=_r.dot(ad),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,C=(u*v-f*h)*x;return l.set(1-M-C,C,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,yr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,yr.x),h.addScaledVector(u,yr.y),h.addScaledVector(f,yr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return ud.setScalar(0),dd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,r),fd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ud,l.x),u.addScaledVector(dd,l.y),u.addScaledVector(fd,l.z),u}static isFrontFacing(e,t,r,o){return ji.subVectors(r,t),_r.subVectors(e,t),ji.cross(_r).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),ji.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ra.subVectors(o,r),sa.subVectors(l,r),od.subVectors(e,r);const h=ra.dot(od),p=sa.dot(od);if(h<=0&&p<=0)return t.copy(r);ld.subVectors(e,o);const v=ra.dot(ld),S=sa.dot(ld);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ra,u);cd.subVectors(e,l);const M=ra.dot(cd),C=sa.dot(cd);if(C>=0&&M<=C)return t.copy(l);const D=M*p-h*C;if(D<=0&&p>=0&&C<=0)return f=p/(p-C),t.copy(r).addScaledVector(sa,f);const y=v*C-M*S;if(y<=0&&S-v>=0&&M-C>=0)return zm.subVectors(l,o),f=(S-v)/(S-v+(M-C)),t.copy(o).addScaledVector(zm,f);const _=1/(y+D+x);return u=D*_,f=x*_,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Wi):Wi.fromBufferAttribute(l,u),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Tl.subVectors(this.max,to),aa.subVectors(e.a,to),oa.subVectors(e.b,to),la.subVectors(e.c,to),$r.subVectors(oa,aa),qr.subVectors(la,oa),ms.subVectors(aa,la);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-ms.z,ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,ms.z,0,-ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-ms.y,ms.x,0];return!hd(t,aa,oa,la,Tl)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,aa,oa,la,Tl))?!1:(Al.crossVectors($r,qr),t=[Al.x,Al.y,Al.z],hd(t,aa,oa,la,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Wi=new ie,bl=new vo,aa=new ie,oa=new ie,la=new ie,$r=new ie,qr=new ie,ms=new ie,to=new ie,Tl=new ie,Al=new ie,gs=new ie;function hd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){gs.fromArray(s,l);const f=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),h=e.dot(gs),p=t.dot(gs),v=r.dot(gs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Sn=new ie,Cl=new Lt;let x_=0;class sr extends Ns{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Tm,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Qa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array),l=oi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sg extends sr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ag extends sr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class _n extends sr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const v_=new vo,no=new ie,pd=new ie;class kf{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):v_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(pd)),this.expandByPoint(no.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let __=0;const Ci=new Mn,md=new xi,ca=new ie,gi=new vo,io=new vo,Pn=new ie;class vi extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?ag:sg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];io.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(gi.min,io.min),gi.expandByPoint(Pn),Pn.addVectors(gi.max,io.max),gi.expandByPoint(Pn)):(gi.expandByPoint(io.min),gi.expandByPoint(io.max))}gi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Pn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Pn.fromBufferAttribute(f,p),h&&(ca.fromBufferAttribute(e,p),Pn.add(ca)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new ie,h[T]=new ie;const p=new ie,v=new ie,S=new ie,x=new Lt,M=new Lt,C=new Lt,D=new ie,y=new ie;function _(T,N,Y){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,Y),x.fromBufferAttribute(l,T),M.fromBufferAttribute(l,N),C.fromBufferAttribute(l,Y),v.sub(p),S.sub(p),M.sub(x),C.sub(x);const H=1/(M.x*C.y-C.x*M.y);isFinite(H)&&(D.copy(v).multiplyScalar(C.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(H),f[T].add(D),f[N].add(D),f[Y].add(D),h[T].add(y),h[N].add(y),h[Y].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,N=L.length;T<N;++T){const Y=L[T],H=Y.start,Q=Y.count;for(let re=H,pe=H+Q;re<pe;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const R=new ie,P=new ie,V=new ie,I=new ie;function O(T){V.fromBufferAttribute(o,T),I.copy(V);const N=f[T];R.copy(N),R.sub(V.multiplyScalar(V.dot(N))).normalize(),P.crossVectors(I,N);const H=P.dot(h[T])<0?-1:1;u.setXYZW(T,R.x,R.y,R.z,H)}for(let T=0,N=L.length;T<N;++T){const Y=L[T],H=Y.start,Q=Y.count;for(let re=H,pe=H+Q;re<pe;re+=3)O(e.getX(re+0)),O(e.getX(re+1)),O(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,p=new ie,v=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const C=e.getX(x+0),D=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,D),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(D,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,C=0;for(let D=0,y=h.length;D<y;D++){f.isInterleavedBufferAttribute?M=h[D]*f.data.stride+f.offset:M=h[D]*v;for(let _=0;_<v;_++)x[C++]=p[M++]}return new sr(x,v,S)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let y_=0;class dc extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ma,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Dd,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==Dd&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new ie,gd=new ie,Rl=new ie,Kr=new ie,xd=new ie,Nl=new ie,vd=new ie;class S_{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){gd.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(gd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Kr.dot(this.direction),h=-Kr.dot(Rl),p=Kr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,C;if(v>0)if(S=u*h-f,x=u*f-h,C=l*v,S>=0)if(x>=-C)if(x<=C){const D=1/v;S*=D,x*=D,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-C?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=C?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(gd).addScaledVector(Rl,x),M}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,l){xd.subVectors(t,e),Nl.subVectors(r,e),vd.crossVectors(xd,Nl);let u=this.direction.dot(vd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Kr.subVectors(this.origin,e);const h=f*this.direction.dot(Nl.crossVectors(Kr,Nl));if(h<0)return null;const p=f*this.direction.dot(xd.cross(Kr));if(p<0||h+p>u)return null;const v=-f*Kr.dot(vd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ts extends dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rs,this.combine=B0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vm=new Mn,xs=new S_,Pl=new kf,Hm=new ie,Il=new ie,Dl=new ie,Ll=new ie,_d=new ie,Ul=new ie,Gm=new ie,Fl=new ie;class Qn extends xi{constructor(e=new vi,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ul.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(_d.fromBufferAttribute(S,e),u?Ul.addScaledVector(_d,v):Ul.addScaledVector(_d.sub(t),v))}t.add(Ul)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),xs.copy(e.ray).recast(e.near),!(Pl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Pl,Hm)===null||xs.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Vm.copy(l).invert(),xs.copy(e.ray).applyMatrix4(Vm),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,V=R;P<V;P+=3){const I=f.getX(P),O=f.getX(P+1),T=f.getX(P+2);o=Ol(this,_,e,r,p,v,S,I,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(f.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);o=Ol(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,V=R;P<V;P+=3){const I=P,O=P+1,T=P+2;o=Ol(this,_,e,r,p,v,S,I,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=y,R=y+1,P=y+2;o=Ol(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function M_(s,e,t,r,o,l,u,f){let h;if(e.side===li?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ns,f),h===null)return null;Fl.copy(f),Fl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Fl);return p<t.near||p>t.far?null:{distance:p,point:Fl.clone(),object:s}}function Ol(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Il),s.getVertexPosition(h,Dl),s.getVertexPosition(p,Ll);const v=M_(s,e,t,r,Il,Dl,Ll,Gm);if(v){const S=new ie;Xi.getBarycoord(Gm,Il,Dl,Ll,S),o&&(v.uv=Xi.getInterpolatedAttribute(o,f,h,p,S,new Lt)),l&&(v.uv1=Xi.getInterpolatedAttribute(l,f,h,p,S,new Lt)),u&&(v.normal=Xi.getInterpolatedAttribute(u,f,h,p,S,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};Xi.getNormal(Il,Dl,Ll,x.normal),v.face=x,v.barycoord=S}return v}class E_ extends Jn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Un,v=Un,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yd=new ie,w_=new ie,b_=new Vt;class Ss{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=yd.subVectors(r,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(yd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||b_.getNormalMatrix(e),o=this.coplanarPoint(yd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new kf,T_=new Lt(.5,.5),kl=new ie;class og{constructor(e=new Ss,t=new Ss,r=new Ss,o=new Ss,l=new Ss,u=new Ss){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],C=l[8],D=l[9],y=l[10],_=l[11],L=l[12],R=l[13],P=l[14],V=l[15];if(o[0].setComponents(p-u,M-v,_-C,V-L).normalize(),o[1].setComponents(p+u,M+v,_+C,V+L).normalize(),o[2].setComponents(p+f,M+S,_+D,V+R).normalize(),o[3].setComponents(p-f,M-S,_-D,V-R).normalize(),r)o[4].setComponents(h,x,y,P).normalize(),o[5].setComponents(p-h,M-x,_-y,V-P).normalize();else if(o[4].setComponents(p-h,M-x,_-y,V-P).normalize(),t===nr)o[5].setComponents(p+h,M+x,_+y,V+P).normalize();else if(t===ic)o[5].setComponents(h,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=T_.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lg extends Jn{constructor(e=[],t=As,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _a extends Jn{constructor(e,t,r=ar,o,l,u,f=Un,h=Un,p,v=Cr,S=1){if(v!==Cr&&v!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Of(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class A_ extends _a{constructor(e,t=ar,r=As,o,l,u=Un,f=Un,h,p=Cr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cg extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends vi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;C("z","y","x",-1,-1,r,t,e,u,l,0),C("z","y","x",1,-1,r,t,-e,u,l,1),C("x","z","y",1,1,e,r,t,o,u,2),C("x","z","y",1,-1,e,r,-t,o,u,3),C("x","y","z",1,-1,e,t,r,o,l,4),C("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(S,2));function C(D,y,_,L,R,P,V,I,O,T,N){const Y=P/O,H=V/T,Q=P/2,re=V/2,pe=I/2,X=O+1,oe=T+1;let J=0,ee=0;const he=new ie;for(let ce=0;ce<oe;ce++){const B=ce*H-re;for(let le=0;le<X;le++){const et=le*Y-Q;he[D]=et*L,he[y]=B*R,he[_]=pe,p.push(he.x,he.y,he.z),he[D]=0,he[y]=0,he[_]=I>0?1:-1,v.push(he.x,he.y,he.z),S.push(le/O),S.push(1-ce/T),J+=1}}for(let ce=0;ce<T;ce++)for(let B=0;B<O;B++){const le=x+B+X*ce,et=x+B+X*(ce+1),st=x+(B+1)+X*(ce+1),Te=x+(B+1)+X*ce;h.push(le,et,Te),h.push(et,st,Te),ee+=6}f.addGroup(M,ee,N),M+=ee,x+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bf extends vi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let C=0;const D=[],y=r/2;let _=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new _n(S,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(M,2));function L(){const P=new ie,V=new ie;let I=0;const O=(t-e)/r;for(let T=0;T<=l;T++){const N=[],Y=T/l,H=Y*(t-e)+e;for(let Q=0;Q<=o;Q++){const re=Q/o,pe=re*h+f,X=Math.sin(pe),oe=Math.cos(pe);V.x=H*X,V.y=-Y*r+y,V.z=H*oe,S.push(V.x,V.y,V.z),P.set(X,O,oe).normalize(),x.push(P.x,P.y,P.z),M.push(re,1-Y),N.push(C++)}D.push(N)}for(let T=0;T<o;T++)for(let N=0;N<l;N++){const Y=D[N][T],H=D[N+1][T],Q=D[N+1][T+1],re=D[N][T+1];(e>0||N!==0)&&(v.push(Y,H,re),I+=3),(t>0||N!==l-1)&&(v.push(H,Q,re),I+=3)}p.addGroup(_,I,0),_+=I}function R(P){const V=C,I=new Lt,O=new ie;let T=0;const N=P===!0?e:t,Y=P===!0?1:-1;for(let Q=1;Q<=o;Q++)S.push(0,y*Y,0),x.push(0,Y,0),M.push(.5,.5),C++;const H=C;for(let Q=0;Q<=o;Q++){const pe=Q/o*h+f,X=Math.cos(pe),oe=Math.sin(pe);O.x=N*oe,O.y=y*Y,O.z=N*X,S.push(O.x,O.y,O.z),x.push(0,Y,0),I.x=X*.5+.5,I.y=oe*.5*Y+.5,M.push(I.x,I.y),C++}for(let Q=0;Q<o;Q++){const re=V+Q,pe=H+Q;P===!0?v.push(pe,pe+1,re):v.push(pe+1,pe,re),T+=3}p.addGroup(_,T,P===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends Bf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Lt:new ie);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ie,o=[],l=[],u=[],f=new ie,h=new Mn;for(let M=0;M<=e;M++){const C=M/e;o[M]=this.getTangentAt(C,new ie)}l[0]=new ie,u[0]=new ie;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const C=Math.acos(Zt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,C))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(Zt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let C=1;C<=e;C++)l[C].applyMatrix4(h.makeRotationAxis(o[C],M*C)),u[C].crossVectors(o[C],l[C])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ug extends Rr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Lt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C_ extends ug{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function zf(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const jm=new ie,Wm=new ie,Sd=new zf,Md=new zf,Ed=new zf;class Vf extends Rr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ie){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Wm.subVectors(o[0],o[1]).add(o[0]),p=Wm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(jm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=jm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let C=Math.pow(p.distanceToSquared(S),M),D=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);D<1e-4&&(D=1),C<1e-4&&(C=D),y<1e-4&&(y=D),Sd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,C,D,y),Md.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,C,D,y),Ed.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,C,D,y)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),Md.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),Ed.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(Sd.calc(h),Md.calc(h),Ed.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function R_(s,e){const t=1-s;return t*t*e}function N_(s,e){return 2*(1-s)*s*e}function P_(s,e){return s*s*e}function ho(s,e,t,r){return R_(s,e)+N_(s,t)+P_(s,r)}function I_(s,e){const t=1-s;return t*t*t*e}function D_(s,e){const t=1-s;return 3*t*t*s*e}function L_(s,e){return 3*(1-s)*s*s*e}function U_(s,e){return s*s*s*e}function po(s,e,t,r,o){return I_(s,e)+D_(s,t)+L_(s,r)+U_(s,o)}class F_ extends Rr{constructor(e=new Lt,t=new Lt,r=new Lt,o=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Lt){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(po(e,o.x,l.x,u.x,f.x),po(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O_ extends Rr{constructor(e=new ie,t=new ie,r=new ie,o=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(po(e,o.x,l.x,u.x,f.x),po(e,o.y,l.y,u.y,f.y),po(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k_ extends Rr{constructor(e=new Lt,t=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Lt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Lt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends Rr{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Rr{constructor(e=new Lt,t=new Lt,r=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Lt){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ho(e,o.x,l.x,u.x),ho(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dg extends Rr{constructor(e=new ie,t=new ie,r=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ho(e,o.x,l.x,u.x),ho(e,o.y,l.y,u.y),ho(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends Rr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Lt){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(Xm(f,h.x,p.x,v.x,S.x),Xm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Lt().fromArray(o))}return this}}var H_=Object.freeze({__proto__:null,ArcCurve:C_,CatmullRomCurve3:Vf,CubicBezierCurve:F_,CubicBezierCurve3:O_,EllipseCurve:ug,LineCurve:k_,LineCurve3:B_,QuadraticBezierCurve:z_,QuadraticBezierCurve3:dg,SplineCurve:V_});class fc extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],C=[],D=[],y=[];for(let _=0;_<v;_++){const L=_*x-u;for(let R=0;R<p;R++){const P=R*S-l;C.push(P,-L,0),D.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const R=L+p*_,P=L+p*(_+1),V=L+1+p*(_+1),I=L+1+p*_;M.push(R,P,I),M.push(P,V,I)}this.setIndex(M),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(D,3)),this.setAttribute("uv",new _n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hf extends vi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new ie,C=new Lt;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),C.x=(M.x/t+1)/2,C.y=(M.y/t+1)/2,v.push(C.x,C.y)}S+=x}for(let D=0;D<o;D++){const y=D*(r+1);for(let _=0;_<r;_++){const L=_+y,R=L,P=L+r+1,V=L+r+2,I=L+1;f.push(R,P,I),f.push(P,V,I)}}this.setIndex(f),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ac extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ie,x=new ie,M=[],C=[],D=[],y=[];for(let _=0;_<=r;_++){const L=[],R=_/r;let P=0;_===0&&u===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let V=0;V<=t;V++){const I=V/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+I*l)*Math.sin(u+R*f),C.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+P,1-R),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const R=v[_][L+1],P=v[_][L],V=v[_+1][L],I=v[_+1][L+1];(_!==0||u>0)&&M.push(R,P,I),(_!==r-1||h<Math.PI)&&M.push(P,V,I)}this.setIndex(M),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(D,3)),this.setAttribute("uv",new _n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gf extends vi{constructor(e=new dg(new ie(-1,-1,0),new ie(-1,1,0),new ie(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ie,h=new ie,p=new Lt;let v=new ie;const S=[],x=[],M=[],C=[];D(),this.setIndex(C),this.setAttribute("position",new _n(S,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(M,2));function D(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),L(),_()}function y(R){v=e.getPointAt(R/t,v);const P=u.normals[R],V=u.binormals[R];for(let I=0;I<=o;I++){const O=I/o*Math.PI*2,T=Math.sin(O),N=-Math.cos(O);h.x=N*P.x+T*V.x,h.y=N*P.y+T*V.y,h.z=N*P.z+T*V.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let P=1;P<=o;P++){const V=(o+1)*(R-1)+(P-1),I=(o+1)*R+(P-1),O=(o+1)*R+P,T=(o+1)*(R-1)+P;C.push(V,I,T),C.push(I,O,T)}}function L(){for(let R=0;R<=t;R++)for(let P=0;P<=o;P++)p.x=R/t,p.y=P/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gf(new H_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ya(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Ym(o))o.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Ym(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=ya(s[t]);for(const o in r)e[o]=r[o]}return e}function Ym(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const j_={clone:ya,merge:Zn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Y_ extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $_ extends dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bl=new ie,zl=new Sa,Ji=new ie;let hg=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Bl,zl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Zr=new ie,$m=new Lt,qm=new Lt;class Pi extends hg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sf*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,$m,qm),t.subVectors(qm,$m)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pg extends hg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ua=-90,da=1;class K_ extends xi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(ua,da,e,t);o.layers=this.layers,this.add(o);const l=new Pi(ua,da,e,t);l.layers=this.layers,this.add(l);const u=new Pi(ua,da,e,t);u.layers=this.layers,this.add(u);const f=new Pi(ua,da,e,t);f.layers=this.layers,this.add(f);const h=new Pi(ua,da,e,t);h.layers=this.layers,this.add(h);const p=new Pi(ua,da,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class Z_ extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $f=class $f{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};$f.prototype.isMatrix2=!0;let Km=$f;function Zm(s,e,t,r){const o=J_(r);switch(t){case J0:return s*e;case eg:return s*e/o.components*o.byteLength;case If:return s*e/o.components*o.byteLength;case Cs:return s*e*2/o.components*o.byteLength;case Df:return s*e*2/o.components*o.byteLength;case Q0:return s*e*3/o.components*o.byteLength;case Yi:return s*e*4/o.components*o.byteLength;case Lf:return s*e*4/o.components*o.byteLength;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:case Xd:return Math.max(s,16)*Math.max(e,8)/4;case Gd:case Wd:return Math.max(s,8)*Math.max(e,8)/2;case Yd:case $d:case Kd:case Zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qd:case Ql:case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pf:case mf:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xf:case vf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case _f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(s){switch(s){case Ii:case $0:return{byteLength:1,components:1};case mo:case q0:case Ar:return{byteLength:2,components:1};case Nf:case Pf:return{byteLength:2,components:4};case ar:case Rf:case tr:return{byteLength:4,components:1};case K0:case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Q_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<S.length;M++){const C=S[x],D=S[M];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,C=S.length;M<C;M++){const D=S[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:ay,aomap_pars_fragment:oy,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:dy,bsdfs:fy,iridescence_fragment:hy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:vy,color_fragment:_y,color_pars_fragment:yy,color_pars_vertex:Sy,color_vertex:My,common:Ey,cube_uv_reflection_fragment:wy,defaultnormal_vertex:by,displacementmap_pars_vertex:Ty,displacementmap_vertex:Ay,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ry,colorspace_fragment:Ny,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ly,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:Xy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:ky,fog_fragment:By,fog_pars_fragment:zy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:jy,lights_pars_begin:Wy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:qy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Qy,lights_fragment_maps:eS,lights_fragment_end:tS,lightprobes_pars_fragment:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:xS,normal_fragment_begin:vS,normal_fragment_maps:_S,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:bS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:CS,packing:RS,premultiplied_alpha_fragment:NS,project_vertex:PS,dithering_fragment:IS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:zS,skinning_pars_vertex:VS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:jS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:YS,transmission_fragment:$S,transmission_pars_fragment:qS,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:QS,background_vert:e1,background_frag:t1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:r1,cube_frag:s1,depth_vert:a1,depth_frag:o1,distance_vert:l1,distance_frag:c1,equirect_vert:u1,equirect_frag:d1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:x1,meshmatcap_vert:v1,meshmatcap_frag:_1,meshnormal_vert:y1,meshnormal_frag:S1,meshphong_vert:M1,meshphong_frag:E1,meshphysical_vert:w1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:C1,points_frag:R1,shadow_vert:N1,shadow_frag:P1,sprite_vert:I1,sprite_frag:D1},dt={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},er={basic:{uniforms:Zn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Zn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new sn(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Zn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Zn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Zn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new sn(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Zn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Zn([dt.points,dt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Zn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Zn([dt.common,dt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Zn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Zn([dt.sprite,dt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Zn([dt.common,dt.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Zn([dt.lights,dt.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};er.physical={uniforms:Zn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Vl={r:0,b:0,g:0},L1=new Mn,gg=new Vt;gg.set(-1,0,0,0,1,0,0,0,1);function U1(s,e,t,r,o,l){const u=new sn(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;if(R&&R.isTexture){const P=L.backgroundBlurriness>0;R=e.get(R,P)}return R}function C(L){let R=!1;const P=M(L);P===null?y(u,f):P&&P.isColor&&(y(P,1),R=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(L,R){const P=M(R);P&&(P.isCubeTexture||P.mapping===uc)?(p===void 0&&(p=new Qn(new _o(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ya(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(gg),p.material.toneMapped=Jt.getTransfer(P.colorSpace)!==rn,(v!==P||S!==P.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Qn(new fc(2,2),new or({name:"BackgroundMaterial",uniforms:ya(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(P.colorSpace)!==rn,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,R){L.getRGB(Vl,fg(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:C,addToRenderList:D,dispose:_}}function F1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(H,Q,re,pe,X){let oe=!1;const J=S(H,pe,re,Q);l!==J&&(l=J,p(l.object)),oe=M(H,pe,re,X),oe&&C(H,pe,re,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,P(H,Q,re,pe),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,Q,re,pe){const X=pe.wireframe===!0;let oe=r[Q.id];oe===void 0&&(oe={},r[Q.id]=oe);const J=H.isInstancedMesh===!0?H.id:0;let ee=oe[J];ee===void 0&&(ee={},oe[J]=ee);let he=ee[re.id];he===void 0&&(he={},ee[re.id]=he);let ce=he[X];return ce===void 0&&(ce=x(h()),he[X]=ce),ce}function x(H){const Q=[],re=[],pe=[];for(let X=0;X<t;X++)Q[X]=0,re[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:re,attributeDivisors:pe,object:H,attributes:{},index:null}}function M(H,Q,re,pe){const X=l.attributes,oe=Q.attributes;let J=0;const ee=re.getAttributes();for(const he in ee)if(ee[he].location>=0){const B=X[he];let le=oe[he];if(le===void 0&&(he==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),he==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),B===void 0||B.attribute!==le||le&&B.data!==le.data)return!0;J++}return l.attributesNum!==J||l.index!==pe}function C(H,Q,re,pe){const X={},oe=Q.attributes;let J=0;const ee=re.getAttributes();for(const he in ee)if(ee[he].location>=0){let B=oe[he];B===void 0&&(he==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),he==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const le={};le.attribute=B,B&&B.data&&(le.data=B.data),X[he]=le,J++}l.attributes=X,l.attributesNum=J,l.index=pe}function D(){const H=l.newAttributes;for(let Q=0,re=H.length;Q<re;Q++)H[Q]=0}function y(H){_(H,0)}function _(H,Q){const re=l.newAttributes,pe=l.enabledAttributes,X=l.attributeDivisors;re[H]=1,pe[H]===0&&(s.enableVertexAttribArray(H),pe[H]=1),X[H]!==Q&&(s.vertexAttribDivisor(H,Q),X[H]=Q)}function L(){const H=l.newAttributes,Q=l.enabledAttributes;for(let re=0,pe=Q.length;re<pe;re++)Q[re]!==H[re]&&(s.disableVertexAttribArray(re),Q[re]=0)}function R(H,Q,re,pe,X,oe,J){J===!0?s.vertexAttribIPointer(H,Q,re,X,oe):s.vertexAttribPointer(H,Q,re,pe,X,oe)}function P(H,Q,re,pe){D();const X=pe.attributes,oe=re.getAttributes(),J=Q.defaultAttributeValues;for(const ee in oe){const he=oe[ee];if(he.location>=0){let ce=X[ee];if(ce===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),ce!==void 0){const B=ce.normalized,le=ce.itemSize,et=e.get(ce);if(et===void 0)continue;const st=et.buffer,Te=et.type,ue=et.bytesPerElement,be=Te===s.INT||Te===s.UNSIGNED_INT||ce.gpuType===Rf;if(ce.isInterleavedBufferAttribute){const Se=ce.data,Fe=Se.stride,ot=ce.offset;if(Se.isInstancedInterleavedBuffer){for(let gt=0;gt<he.locationSize;gt++)_(he.location+gt,Se.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let gt=0;gt<he.locationSize;gt++)y(he.location+gt);s.bindBuffer(s.ARRAY_BUFFER,st);for(let gt=0;gt<he.locationSize;gt++)R(he.location+gt,le/he.locationSize,Te,B,Fe*ue,(ot+le/he.locationSize*gt)*ue,be)}else{if(ce.isInstancedBufferAttribute){for(let Se=0;Se<he.locationSize;Se++)_(he.location+Se,ce.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<he.locationSize;Se++)y(he.location+Se);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Se=0;Se<he.locationSize;Se++)R(he.location+Se,le/he.locationSize,Te,B,le*ue,le/he.locationSize*Se*ue,be)}}else if(J!==void 0){const B=J[ee];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(he.location,B);break;case 3:s.vertexAttrib3fv(he.location,B);break;case 4:s.vertexAttrib4fv(he.location,B);break;default:s.vertexAttrib1fv(he.location,B)}}}}L()}function V(){N();for(const H in r){const Q=r[H];for(const re in Q){const pe=Q[re];for(const X in pe){const oe=pe[X];for(const J in oe)v(oe[J].object),delete oe[J];delete pe[X]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const Q=r[H.id];for(const re in Q){const pe=Q[re];for(const X in pe){const oe=pe[X];for(const J in oe)v(oe[J].object),delete oe[J];delete pe[X]}}delete r[H.id]}function O(H){for(const Q in r){const re=r[Q];for(const pe in re){const X=re[pe];if(X[H.id]===void 0)continue;const oe=X[H.id];for(const J in oe)v(oe[J].object),delete oe[J];delete X[H.id]}}}function T(H){for(const Q in r){const re=r[Q],pe=H.isInstancedMesh===!0?H.id:0,X=re[pe];if(X!==void 0){for(const oe in X){const J=X[oe];for(const ee in J)v(J[ee].object),delete J[ee];delete X[oe]}delete re[pe],Object.keys(re).length===0&&delete r[Q]}}}function N(){Y(),u=!0,l!==o&&(l=o,p(l.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:Y,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:y,disableUnusedAttributes:L}}function O1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function k1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Yi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==tr&&!T)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(Dt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:P,maxSamples:V,samples:I}}function B1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ss,f=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const C=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||C===null||C.length===0||l&&!y)l?v(null):p();else{const L=l?0:r,R=L*4;let P=_.clippingState||null;h.value=P,P=v(C,x,R,M);for(let V=0;V!==R;++V)P[V]=t[V];_.clippingState=P,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,C){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=h.value,C!==!0||y===null){const _=M+D*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,P=M;R!==D;++R,P+=4)u.copy(S[R]).applyMatrix4(L,f),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const es=4,Jm=[.125,.215,.35,.446,.526,.582],Es=20,z1=256,ro=new pg,Qm=new sn;let wd=null,bd=0,Td=0,Ad=!1;const V1=new ie;class e0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=V1}=l;wd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,bd,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ar,format:Yi,colorSpace:tc,depthBuffer:!1},o=t0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(l)),this._blurMaterial=j1(l,e,t),this._ggxMaterial=G1(l,e,t)}return o}_compileMaterial(e){const t=new Qn(new vi,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,r,o,l){const h=new Pi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Qm),S.toneMapping=ir,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new _o,new ts({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let _=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,_=!0):(y.color.copy(Qm),_=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):P===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const V=this._cubeSize;fa(o,P*V,R>2?V:0,V,V),S.setRenderTarget(o),_&&S.render(D,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===As||e.mapping===va;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;fa(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,ro)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:C}=this,D=this._sizeLods[r],y=3*D*(r>C-es?r-C+es:0),_=4*(this._cubeSize-D);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=C-t,fa(l,y,_,3*D,2*D),o.setRenderTarget(l),o.render(f,ro),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=C-r,fa(e,y,_,3*D,2*D),o.setRenderTarget(e),o.render(f,ro)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Es-1),D=l/C,y=isFinite(l)?1+Math.floor(v*D):Es;y>Es&&Dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Es}`);const _=[];let L=0;for(let O=0;O<Es;++O){const T=O/D,N=Math.exp(-T*T/2);_.push(N),O===0?L+=N:O<y&&(L+=2*N)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=C,x.mipInt.value=R-r;const P=this._sizeLods[o],V=3*P*(o>R-es?o-R+es:0),I=4*(this._cubeSize-P);fa(t,V,I,3*P,2*P),h.setRenderTarget(t),h.render(S,ro)}}function H1(s){const e=[],t=[],r=[];let o=s;const l=s-es+1+Jm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-es?h=Jm[u-s+es-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,C=6,D=3,y=2,_=1,L=new Float32Array(D*C*M),R=new Float32Array(y*C*M),P=new Float32Array(_*C*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,T=I>2?0:-1,N=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];L.set(N,D*C*I),R.set(x,y*C*I);const Y=[I,I,I,I,I,I];P.set(Y,_*C*I)}const V=new vi;V.setAttribute("position",new sr(L,D)),V.setAttribute("uv",new sr(R,y)),V.setAttribute("faceIndex",new sr(P,_)),r.push(new Qn(V,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function t0(s,e,t){const r=new rr(s,e,t);return r.texture.mapping=uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function G1(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function j1(s,e,t){const r=new Float32Array(Es),o=new ie(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function n0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function i0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xg extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new lg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _o(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:ya(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:br});l.uniforms.tEquirect.value=t;const u=new Qn(o,l),f=t.minFilter;return t.minFilter===ws&&(t.minFilter=jn),new K_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function W1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===$u||M===qu)if(e.has(x)){const C=e.get(x).texture;return f(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const D=new xg(C.height);return D.fromEquirectangularTexture(s,x),e.set(x,D),x.addEventListener("dispose",p),f(D.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,C=M===$u||M===qu,D=M===As||M===va;if(C||D){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new e0(s)),y=C?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const L=x.image;return C&&L&&L.height>0||D&&L&&h(L)?(r===null&&(r=new e0(s)),y=C?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===$u?x.mapping=As:M===qu&&(x.mapping=va),x}function h(x){let M=0;const C=6;for(let D=0;D<C;D++)x[D]!==void 0&&M++;return M===C}function p(x){const M=x.target;M.removeEventListener("dispose",p);const C=e.get(M);C!==void 0&&(e.delete(M),C.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const C=t.get(M);C!==void 0&&(t.delete(M),C.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function X1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&yf("WebGLRenderer: "+r+" extension not supported."),o}}}function Y1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,C=S.attributes.position;let D=0;if(C===void 0)return;if(M!==null){const L=M.array;D=M.version;for(let R=0,P=L.length;R<P;R+=3){const V=L[R+0],I=L[R+1],O=L[R+2];x.push(V,I,I,O,O,V)}}else{const L=C.array;D=C.version;for(let R=0,P=L.length/3-1;R<P;R+=3){const V=R+0,I=R+1,O=R+2;x.push(V,I,I,O,O,V)}}const y=new(C.count>=65535?ag:sg)(x,1);y.version=D;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function $1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];t.update(D,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function q1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:en("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function K1(s,e,t){const r=new WeakMap,o=new vn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let Y=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",Y)};var M=Y;x!==void 0&&x.texture.dispose();const C=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let P=0;C===!0&&(P=1),D===!0&&(P=2),y===!0&&(P=3);let V=f.attributes.position.count*P,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*I*4*S),T=new ng(O,V,I,S);T.type=tr,T.needsUpdate=!0;const N=P*4;for(let H=0;H<S;H++){const Q=_[H],re=L[H],pe=R[H],X=V*I*4*H;for(let oe=0;oe<Q.count;oe++){const J=oe*N;C===!0&&(o.fromBufferAttribute(Q,oe),O[X+J+0]=o.x,O[X+J+1]=o.y,O[X+J+2]=o.z,O[X+J+3]=0),D===!0&&(o.fromBufferAttribute(re,oe),O[X+J+4]=o.x,O[X+J+5]=o.y,O[X+J+6]=o.z,O[X+J+7]=0),y===!0&&(o.fromBufferAttribute(pe,oe),O[X+J+8]=o.x,O[X+J+9]=o.y,O[X+J+10]=o.z,O[X+J+11]=pe.itemSize===4?o.w:1)}}x={count:S,texture:T,size:new Lt(V,I)},r.set(f,x),f.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const D=f.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",D),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function Z1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const J1={[z0]:"LINEAR_TONE_MAPPING",[V0]:"REINHARD_TONE_MAPPING",[H0]:"CINEON_TONE_MAPPING",[G0]:"ACES_FILMIC_TONE_MAPPING",[W0]:"AGX_TONE_MAPPING",[X0]:"NEUTRAL_TONE_MAPPING",[j0]:"CUSTOM_TONE_MAPPING"};function Q1(s,e,t,r,o){const l=new rr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new _a(e,t):void 0}),u=new rr(e,t,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new _n([0,2,0,0,2,0],2));const h=new Y_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Qn(f,h),v=new pg(-1,1,1,-1,0,1);let S=null,x=null,M=!1,C,D=null,y=[],_=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let P=0;P<y.length;P++){const V=y[P];V.setSize&&V.setSize(L,R)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,P=l.height;for(let V=0;V<y.length;V++){const I=y[V];I.setSize&&I.setSize(R,P)}},this.begin=function(L,R){if(M||L.toneMapping===ir&&y.length===0)return!1;if(D=R,R!==null){const P=R.width,V=R.height;(l.width!==P||l.height!==V)&&this.setSize(P,V)}return _===!1&&L.setRenderTarget(l),C=L.toneMapping,L.toneMapping=ir,!0},this.hasRenderPass=function(){return _},this.end=function(L,R){L.toneMapping=C,M=!0;let P=l,V=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(L,V,P,R),O.needsSwap!==!1)){const T=P;P=V,V=T}}if(S!==L.outputColorSpace||x!==L.toneMapping){S=L.outputColorSpace,x=L.toneMapping,h.defines={},Jt.getTransfer(S)===rn&&(h.defines.SRGB_TRANSFER="");const I=J1[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(D),L.render(p,v),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const vg=new Jn,Mf=new _a(1,1),_g=new ng,yg=new l_,Sg=new lg,r0=[],s0=[],a0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=r0[o];if(l===void 0&&(l=new Float32Array(o),r0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function An(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pc(s,e){let t=s0[e];t===void 0&&(t=new Int32Array(e),s0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),An(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),An(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),An(t,e)}}function rM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;l0.set(r),s.uniformMatrix2fv(this.addr,!1,l0),An(t,r)}}function sM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;o0.set(r),s.uniformMatrix3fv(this.addr,!1,o0),An(t,r)}}function aM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;a0.set(r),s.uniformMatrix4fv(this.addr,!1,a0),An(t,r)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),An(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),An(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),An(t,e)}}function dM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),An(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),An(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),An(t,e)}}function mM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Mf.compareFunction=t.isReversedDepthBuffer()?Ff:Uf,l=Mf):l=vg,t.setTexture2D(e||l,o)}function gM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||yg,o)}function xM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Sg,o)}function vM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||_g,o)}function _M(s){switch(s){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return vM}}function yM(s,e){s.uniform1fv(this.addr,e)}function SM(s,e){const t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function MM(s,e){const t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function EM(s,e){const t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function wM(s,e){const t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bM(s,e){const t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TM(s,e){const t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function NM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function IM(s,e){s.uniform2uiv(this.addr,e)}function DM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function UM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Tn(r,l)||(s.uniform1iv(this.addr,l),An(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Mf:u=vg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function FM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Tn(r,l)||(s.uniform1iv(this.addr,l),An(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||yg,l[u])}function OM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Tn(r,l)||(s.uniform1iv(this.addr,l),An(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Sg,l[u])}function kM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Tn(r,l)||(s.uniform1iv(this.addr,l),An(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||_g,l[u])}function BM(s){switch(s){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return EM;case 35674:return wM;case 35675:return bM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return NM;case 5125:return PM;case 36294:return IM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}class zM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class VM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function c0(s,e){s.seq.push(e),s.map[e.id]=e}function GM(s,e,t){const r=s.name,o=r.length;for(Cd.lastIndex=0;;){const l=Cd.exec(r),u=Cd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){c0(t,p===void 0?new zM(f,s,e):new VM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new HM(f),c0(t,S)),t=S}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);GM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function u0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const jM=37297;let WM=0;function XM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const d0=new Vt;function YM(s){Jt._getMatrix(d0,Jt.workingColorSpace,s);const e=`mat3( ${d0.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function f0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+XM(s.getShaderSource(e),f)}else return l}function $M(s,e){const t=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qM={[z0]:"Linear",[V0]:"Reinhard",[H0]:"Cineon",[G0]:"ACESFilmic",[W0]:"AgX",[X0]:"Neutral",[j0]:"Custom"};function KM(s,e){const t=qM[e];return t===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new ie;function ZM(){Jt.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function QM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function lo(s){return s!==""}function h0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(s){return s.replace(tE,iE)}const nE=new Map;function iE(s,e){let t=jt[e];if(t===void 0){const r=nE.get(e);if(r!==void 0)t=jt[r],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ef(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(s){return s.replace(rE,sE)}function sE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function g0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aE={[Xl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function oE(s){return aE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lE={[As]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function cE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const uE={[va]:"ENVMAP_MODE_REFRACTION"};function dE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fE={[B0]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[Hv]:"ENVMAP_BLENDING_ADD"};function hE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fE[s.combine]||"ENVMAP_BLENDING_NONE"}function pE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function mE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=oE(t),p=cE(t),v=dE(t),S=hE(t),x=pE(t),M=JM(t),C=QM(l),D=o.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(lo).join(`
`),_.length>0&&(_+=`
`)):(y=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),_=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?jt.tonemapping_pars_fragment:"",t.toneMapping!==ir?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),u=Ef(u),u=h0(u,t),u=p0(u,t),f=Ef(f),f=h0(f,t),f=p0(f,t),u=m0(u),f=m0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+y+u,P=L+_+f,V=u0(o,o.VERTEX_SHADER,R),I=u0(o,o.FRAGMENT_SHADER,P);o.attachShader(D,V),o.attachShader(D,I),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function O(H){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(D)||"",re=o.getShaderInfoLog(V)||"",pe=o.getShaderInfoLog(I)||"",X=Q.trim(),oe=re.trim(),J=pe.trim();let ee=!0,he=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,V,I);else{const ce=f0(o,V,"vertex"),B=f0(o,I,"fragment");en("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+ce+`
`+B)}else X!==""?Dt("WebGLProgram: Program Info Log:",X):(oe===""||J==="")&&(he=!1);he&&(H.diagnostics={runnable:ee,programLog:X,vertexShader:{log:oe,prefix:y},fragmentShader:{log:J,prefix:_}})}o.deleteShader(V),o.deleteShader(I),T=new Zl(o,D),N=eE(o,D)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(D,jM)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=I,this}let gE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vE(e),t.set(e,r)),r}}class vE{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function _E(s){return s===Cs||s===Ql||s===ec}function yE(s,e,t,r,o,l){const u=new ig,f=new xE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return h.add(T),T===0?"uv":`uv${T}`}function D(T,N,Y,H,Q,re){const pe=H.fog,X=Q.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||oe,J),he=ee&&ee.mapping===uc?ee.image.height:null,ce=M[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&Dt("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=B!==void 0?B.length:0;let et=0;X.morphAttributes.position!==void 0&&(et=1),X.morphAttributes.normal!==void 0&&(et=2),X.morphAttributes.color!==void 0&&(et=3);let st,Te,ue,be;if(ce){const Mt=er[ce];st=Mt.vertexShader,Te=Mt.fragmentShader}else st=T.vertexShader,Te=T.fragmentShader,f.update(T),ue=f.getVertexShaderID(T),be=f.getFragmentShaderID(T);const Se=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),ot=Q.isInstancedMesh===!0,gt=Q.isBatchedMesh===!0,Et=!!T.map,St=!!T.matcap,Ot=!!ee,Kt=!!T.aoMap,Tt=!!T.lightMap,zt=!!T.bumpMap,Nt=!!T.normalMap,Gt=!!T.displacementMap,q=!!T.emissiveMap,It=!!T.metalnessMap,wt=!!T.roughnessMap,At=T.anisotropy>0,qe=T.clearcoat>0,Ht=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,ae=T.transmission>0,Me=At&&!!T.anisotropyMap,Ae=qe&&!!T.clearcoatMap,Ve=qe&&!!T.clearcoatNormalMap,We=qe&&!!T.clearcoatRoughnessMap,xe=U&&!!T.iridescenceMap,we=U&&!!T.iridescenceThicknessMap,Ce=E&&!!T.sheenColorMap,tt=E&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Oe=!!T.specularColorMap,Ke=!!T.specularIntensityMap,He=ae&&!!T.transmissionMap,Pt=ae&&!!T.thicknessMap,$=!!T.gradientMap,Ge=!!T.alphaMap,me=T.alphaTest>0,lt=!!T.alphaHash,ke=!!T.extensions;let ye=ir;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ye=s.toneMapping);const ct={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:st,fragmentShader:Te,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:gt,batchingColor:gt&&Q._colorsTexture!==null,instancing:ot,instancingColor:ot&&Q.instanceColor!==null,instancingMorph:ot&&Q.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Et,matcap:St,envMap:Ot,envMapMode:Ot&&ee.mapping,envMapCubeUVHeight:he,aoMap:Kt,lightMap:Tt,bumpMap:zt,normalMap:Nt,displacementMap:Gt,emissiveMap:q,normalMapObjectSpace:Nt&&T.normalMapType===Wv,normalMapTangentSpace:Nt&&T.normalMapType===wm,packedNormalMap:Nt&&T.normalMapType===wm&&_E(T.normalMap.format),metalnessMap:It,roughnessMap:wt,anisotropy:At,anisotropyMap:Me,clearcoat:qe,clearcoatMap:Ae,clearcoatNormalMap:Ve,clearcoatRoughnessMap:We,dispersion:Ht,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:we,sheen:E,sheenColorMap:Ce,sheenRoughnessMap:tt,specularMap:Ye,specularColorMap:Oe,specularIntensityMap:Ke,transmission:ae,transmissionMap:He,thicknessMap:Pt,gradientMap:$,opaque:T.transparent===!1&&T.blending===ma&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:me,alphaHash:lt,combine:T.combine,mapUv:Et&&C(T.map.channel),aoMapUv:Kt&&C(T.aoMap.channel),lightMapUv:Tt&&C(T.lightMap.channel),bumpMapUv:zt&&C(T.bumpMap.channel),normalMapUv:Nt&&C(T.normalMap.channel),displacementMapUv:Gt&&C(T.displacementMap.channel),emissiveMapUv:q&&C(T.emissiveMap.channel),metalnessMapUv:It&&C(T.metalnessMap.channel),roughnessMapUv:wt&&C(T.roughnessMap.channel),anisotropyMapUv:Me&&C(T.anisotropyMap.channel),clearcoatMapUv:Ae&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:we&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:tt&&C(T.sheenRoughnessMap.channel),specularMapUv:Ye&&C(T.specularMap.channel),specularColorMapUv:Oe&&C(T.specularColorMap.channel),specularIntensityMapUv:Ke&&C(T.specularIntensityMap.channel),transmissionMapUv:He&&C(T.transmissionMap.channel),thicknessMapUv:Pt&&C(T.thicknessMap.channel),alphaMapUv:Ge&&C(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Nt||At),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Et||Ge),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Nt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Fe,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Et&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Er,flipSided:T.side===li,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ct.vertexUv1s=h.has(1),ct.vertexUv2s=h.has(2),ct.vertexUv3s=h.has(3),h.clear(),ct}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)N.push(Y),N.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(_(N,T),L(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function L(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function R(T){const N=M[T.type];let Y;if(N){const H=er[N];Y=j_.clone(H.uniforms)}else Y=T.uniforms;return Y}function P(T,N){let Y=v.get(N);return Y!==void 0?++Y.usedTimes:(Y=new mE(s,N,T,o),p.push(Y),v.set(N,Y)),Y}function V(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){f.remove(T)}function O(){f.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:V,releaseShaderCache:I,programs:p,dispose:O}}function SE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function x0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function v0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,C,D,y,_){let L=s[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:C,materialVariant:u(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:_},s[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=C,L.materialVariant=u(x),L.groupOrder=D,L.renderOrder=x.renderOrder,L.z=y,L.group=_),e++,L}function h(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.push(L):C.transparent===!0?o.push(L):t.push(L)}function p(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.unshift(L):C.transparent===!0?o.unshift(L):t.unshift(L)}function v(x,M){t.length>1&&t.sort(x||ME),r.length>1&&r.sort(M||x0),o.length>1&&o.sort(M||x0)}function S(){for(let x=e,M=s.length;x<M;x++){const C=s[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function EE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new v0,s.set(r,[u])):o>=l.length?(u=new v0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new sn};break;case"SpotLight":t={position:new ie,direction:new ie,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new sn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":t={color:new sn,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new wE,t=bE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new Mn,u=new Mn;function f(p){let v=0,S=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,C=0,D=0,y=0,_=0,L=0,R=0,P=0,V=0,I=0,O=0;p.sort(AE);for(let N=0,Y=p.length;N<Y;N++){const H=p[N],Q=H.color,re=H.intensity,pe=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Cs?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Q.r*re,S+=Q.g*re,x+=Q.b*re;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],re);O++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,ee=t.get(H);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=oe,M++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(Q).multiplyScalar(re),oe.distance=pe,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[D]=oe;const J=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,J.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[D]=J.matrix,H.castShadow){const ee=t.get(H);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,r.spotShadow[D]=ee,r.spotShadowMap[D]=X,P++}D++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(Q).multiplyScalar(re),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const J=H.shadow,ee=t.get(H);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,r.pointShadow[C]=ee,r.pointShadowMap[C]=X,r.pointShadowMatrix[C]=H.shadow.matrix,R++}r.point[C]=oe,C++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(re),oe.groundColor.copy(H.groundColor).multiplyScalar(re),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=dt.LTC_FLOAT_1,r.rectAreaLTC2=dt.LTC_FLOAT_2):(r.rectAreaLTC1=dt.LTC_HALF_1,r.rectAreaLTC2=dt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==M||T.pointLength!==C||T.spotLength!==D||T.rectAreaLength!==y||T.hemiLength!==_||T.numDirectionalShadows!==L||T.numPointShadows!==R||T.numSpotShadows!==P||T.numSpotMaps!==V||T.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,T.directionalLength=M,T.pointLength=C,T.spotLength=D,T.rectAreaLength=y,T.hemiLength=_,T.numDirectionalShadows=L,T.numPointShadows=R,T.numSpotShadows=P,T.numSpotMaps=V,T.numLightProbes=O,r.version=TE++)}function h(p,v){let S=0,x=0,M=0,C=0,D=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const R=p[_];if(R.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(R.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const P=r.rectArea[C];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const P=r.hemi[D];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),D++}}}return{setup:f,setupView:h,state:r}}function _0(s){const e=new CE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function RE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new _0(s),e.set(o,[f])):l>=u.length?(f=new _0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],DE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],y0=new Mn,so=new ie,Rd=new ie;function LE(s,e,t){let r=new og;const o=new Lt,l=new Lt,u=new vn,f=new $_,h=new q_,p={},v=t.maxTextureSize,S={[ns]:li,[li]:ns,[Er]:Er},x=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:NE,fragmentShader:PE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new vi;C.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Qn(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let _=this.type;this.render=function(I,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===Mv&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const N=s.getRenderTarget(),Y=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(br),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const re=_!==this.type;re&&O.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(X=>X.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,X=I.length;pe<X;pe++){const oe=I[pe],J=oe.shadow;if(J===void 0){Dt("WebGLShadowMap:",oe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const ee=J.getFrameExtents();o.multiply(ee),l.copy(J.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ee.x),o.x=l.x*ee.x,J.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ee.y),o.y=l.y*ee.y,J.mapSize.y=l.y));const he=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=he,J.map===null||re===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===oo){if(oe.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new rr(o.x,o.y,{format:Cs,type:Ar,minFilter:jn,magFilter:jn,generateMipmaps:!1}),J.map.texture.name=oe.name+".shadowMap",J.map.depthTexture=new _a(o.x,o.y,tr),J.map.depthTexture.name=oe.name+".shadowMapDepth",J.map.depthTexture.format=Cr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Un,J.map.depthTexture.magFilter=Un}else oe.isPointLight?(J.map=new xg(o.x),J.map.depthTexture=new A_(o.x,ar)):(J.map=new rr(o.x,o.y),J.map.depthTexture=new _a(o.x,o.y,ar)),J.map.depthTexture.name=oe.name+".shadowMap",J.map.depthTexture.format=Cr,this.type===Xl?(J.map.depthTexture.compareFunction=he?Ff:Uf,J.map.depthTexture.minFilter=jn,J.map.depthTexture.magFilter=jn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Un,J.map.depthTexture.magFilter=Un);J.camera.updateProjectionMatrix()}const ce=J.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ce;B++){if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,B),s.clear();else{B===0&&(s.setRenderTarget(J.map),s.clear());const le=J.getViewport(B);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),Q.viewport(u)}if(oe.isPointLight){const le=J.camera,et=J.matrix,st=oe.distance||le.far;st!==le.far&&(le.far=st,le.updateProjectionMatrix()),so.setFromMatrixPosition(oe.matrixWorld),le.position.copy(so),Rd.copy(le.position),Rd.add(IE[B]),le.up.copy(DE[B]),le.lookAt(Rd),le.updateMatrixWorld(),et.makeTranslation(-so.x,-so.y,-so.z),y0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),J._frustum.setFromProjectionMatrix(y0,le.coordinateSystem,le.reversedDepth)}else J.updateMatrices(oe);r=J.getFrustum(),P(O,T,J.camera,oe,this.type)}J.isPointLightShadow!==!0&&this.type===oo&&L(J,T),J.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(N,Y,H)};function L(I,O){const T=e.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new rr(o.x,o.y,{format:Cs,type:Ar})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,T,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,T,M,D,null)}function R(I,O,T,N){let Y=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=T.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=Y.uuid,re=O.uuid;let pe=p[Q];pe===void 0&&(pe={},p[Q]=pe);let X=pe[re];X===void 0&&(X=Y.clone(),pe[re]=X,O.addEventListener("dispose",V)),Y=X}if(Y.visible=O.visible,Y.wireframe=O.wireframe,N===oo?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:S[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=s.properties.get(Y);Q.light=T}return Y}function P(I,O,T,N,Y){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Y===oo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const re=e.update(I),pe=I.material;if(Array.isArray(pe)){const X=re.groups;for(let oe=0,J=X.length;oe<J;oe++){const ee=X[oe],he=pe[ee.materialIndex];if(he&&he.visible){const ce=R(I,he,N,Y);I.onBeforeShadow(s,I,O,T,re,ce,ee),s.renderBufferDirect(T,null,re,ce,I,ee),I.onAfterShadow(s,I,O,T,re,ce,ee)}}}else if(pe.visible){const X=R(I,pe,N,Y);I.onBeforeShadow(s,I,O,T,re,X,null),s.renderBufferDirect(T,null,re,X,I,null),I.onAfterShadow(s,I,O,T,re,X,null)}}const Q=I.children;for(let re=0,pe=Q.length;re<pe;re++)P(Q[re],O,T,N,Y)}function V(I){I.target.removeEventListener("dispose",V);for(const T in p){const N=p[T],Y=I.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function UE(s,e){function t(){let $=!1;const Ge=new vn;let me=null;const lt=new vn(0,0,0,0);return{setMask:function(ke){me!==ke&&!$&&(s.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){$=ke},setClear:function(ke,ye,ct,Mt,Xt){Xt===!0&&(ke*=Mt,ye*=Mt,ct*=Mt),Ge.set(ke,ye,ct,Mt),lt.equals(Ge)===!1&&(s.clearColor(ke,ye,ct,Mt),lt.copy(Ge))},reset:function(){$=!1,me=null,lt.set(-1,0,0,0)}}}function r(){let $=!1,Ge=!1,me=null,lt=null,ke=null;return{setReversed:function(ye){if(Ge!==ye){const ct=e.get("EXT_clip_control");ye?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Ge=ye;const Mt=ke;ke=null,this.setClear(Mt)}},getReversed:function(){return Ge},setTest:function(ye){ye?Se(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(ye){me!==ye&&!$&&(s.depthMask(ye),me=ye)},setFunc:function(ye){if(Ge&&(ye=t_[ye]),lt!==ye){switch(ye){case Ld:s.depthFunc(s.NEVER);break;case Ud:s.depthFunc(s.ALWAYS);break;case Fd:s.depthFunc(s.LESS);break;case xa:s.depthFunc(s.LEQUAL);break;case Od:s.depthFunc(s.EQUAL);break;case kd:s.depthFunc(s.GEQUAL);break;case Bd:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=ye}},setLocked:function(ye){$=ye},setClear:function(ye){ke!==ye&&(ke=ye,Ge&&(ye=1-ye),s.clearDepth(ye))},reset:function(){$=!1,me=null,lt=null,ke=null,Ge=!1}}}function o(){let $=!1,Ge=null,me=null,lt=null,ke=null,ye=null,ct=null,Mt=null,Xt=null;return{setTest:function($t){$||($t?Se(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function($t){Ge!==$t&&!$&&(s.stencilMask($t),Ge=$t)},setFunc:function($t,En,In){(me!==$t||lt!==En||ke!==In)&&(s.stencilFunc($t,En,In),me=$t,lt=En,ke=In)},setOp:function($t,En,In){(ye!==$t||ct!==En||Mt!==In)&&(s.stencilOp($t,En,In),ye=$t,ct=En,Mt=In)},setLocked:function($t){$=$t},setClear:function($t){Xt!==$t&&(s.clearStencil($t),Xt=$t)},reset:function(){$=!1,Ge=null,me=null,lt=null,ke=null,ye=null,ct=null,Mt=null,Xt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,V=null,I=null,O=null,T=new sn(0,0,0),N=0,Y=!1,H=null,Q=null,re=null,pe=null,X=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),J=ee>=1):he.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),J=ee>=2);let ce=null,B={};const le=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),st=new vn().fromArray(le),Te=new vn().fromArray(et);function ue($,Ge,me,lt){const ke=new Uint8Array(4),ye=s.createTexture();s.bindTexture($,ye),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<me;ct++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ge,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ge+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ye}const be={};be[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Se(s.DEPTH_TEST),u.setFunc(xa),zt(!1),Nt(ym),Se(s.CULL_FACE),Kt(br);function Se($){v[$]!==!0&&(s.enable($),v[$]=!0)}function Fe($){v[$]!==!1&&(s.disable($),v[$]=!1)}function ot($,Ge){return x[$]!==Ge?(s.bindFramebuffer($,Ge),x[$]=Ge,$===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ge),$===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ge),!0):!1}function gt($,Ge){let me=C,lt=!1;if($){me=M.get(Ge),me===void 0&&(me=[],M.set(Ge,me));const ke=$.textures;if(me.length!==ke.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,ct=ke.length;ye<ct;ye++)me[ye]=s.COLOR_ATTACHMENT0+ye;me.length=ke.length,lt=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,lt=!0);lt&&s.drawBuffers(me)}function Et($){return D!==$?(s.useProgram($),D=$,!0):!1}const St={[Ms]:s.FUNC_ADD,[wv]:s.FUNC_SUBTRACT,[bv]:s.FUNC_REVERSE_SUBTRACT};St[Tv]=s.MIN,St[Av]=s.MAX;const Ot={[Cv]:s.ZERO,[Rv]:s.ONE,[Nv]:s.SRC_COLOR,[Id]:s.SRC_ALPHA,[Fv]:s.SRC_ALPHA_SATURATE,[Lv]:s.DST_COLOR,[Iv]:s.DST_ALPHA,[Pv]:s.ONE_MINUS_SRC_COLOR,[Dd]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA,[Ov]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Bv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt($,Ge,me,lt,ke,ye,ct,Mt,Xt,$t){if($===br){y===!0&&(Fe(s.BLEND),y=!1);return}if(y===!1&&(Se(s.BLEND),y=!0),$!==Ev){if($!==_||$t!==Y){if((L!==Ms||V!==Ms)&&(s.blendEquation(s.FUNC_ADD),L=Ms,V=Ms),$t)switch($){case ma:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFunc(s.ONE,s.ONE);break;case Mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:en("WebGLState: Invalid blending: ",$);break}else switch($){case ma:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mm:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",$);break}R=null,P=null,I=null,O=null,T.set(0,0,0),N=0,_=$,Y=$t}return}ke=ke||Ge,ye=ye||me,ct=ct||lt,(Ge!==L||ke!==V)&&(s.blendEquationSeparate(St[Ge],St[ke]),L=Ge,V=ke),(me!==R||lt!==P||ye!==I||ct!==O)&&(s.blendFuncSeparate(Ot[me],Ot[lt],Ot[ye],Ot[ct]),R=me,P=lt,I=ye,O=ct),(Mt.equals(T)===!1||Xt!==N)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Xt),T.copy(Mt),N=Xt),_=$,Y=!1}function Tt($,Ge){$.side===Er?Fe(s.CULL_FACE):Se(s.CULL_FACE);let me=$.side===li;Ge&&(me=!me),zt(me),$.blending===ma&&$.transparent===!1?Kt(br):Kt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const lt=$.stencilWrite;f.setTest(lt),lt&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),q($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt($){H!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),H=$)}function Nt($){$!==yv?(Se(s.CULL_FACE),$!==Q&&($===ym?s.cullFace(s.BACK):$===Sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),Q=$}function Gt($){$!==re&&(J&&s.lineWidth($),re=$)}function q($,Ge,me){$?(Se(s.POLYGON_OFFSET_FILL),(pe!==Ge||X!==me)&&(pe=Ge,X=me,u.getReversed()&&(Ge=-Ge),s.polygonOffset(Ge,me))):Fe(s.POLYGON_OFFSET_FILL)}function It($){$?Se(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function wt($){$===void 0&&($=s.TEXTURE0+oe-1),ce!==$&&(s.activeTexture($),ce=$)}function At($,Ge,me){me===void 0&&(ce===null?me=s.TEXTURE0+oe-1:me=ce);let lt=B[me];lt===void 0&&(lt={type:void 0,texture:void 0},B[me]=lt),(lt.type!==$||lt.texture!==Ge)&&(ce!==me&&(s.activeTexture(me),ce=me),s.bindTexture($,Ge||be[$]),lt.type=$,lt.texture=Ge)}function qe(){const $=B[ce];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Ht(){try{s.compressedTexImage2D(...arguments)}catch($){en("WebGLState:",$)}}function U(){try{s.compressedTexImage3D(...arguments)}catch($){en("WebGLState:",$)}}function E(){try{s.texSubImage2D(...arguments)}catch($){en("WebGLState:",$)}}function ae(){try{s.texSubImage3D(...arguments)}catch($){en("WebGLState:",$)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch($){en("WebGLState:",$)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch($){en("WebGLState:",$)}}function Ve(){try{s.texStorage2D(...arguments)}catch($){en("WebGLState:",$)}}function We(){try{s.texStorage3D(...arguments)}catch($){en("WebGLState:",$)}}function xe(){try{s.texImage2D(...arguments)}catch($){en("WebGLState:",$)}}function we(){try{s.texImage3D(...arguments)}catch($){en("WebGLState:",$)}}function Ce($){return S[$]!==void 0?S[$]:s.getParameter($)}function tt($,Ge){S[$]!==Ge&&(s.pixelStorei($,Ge),S[$]=Ge)}function Ye($){st.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),st.copy($))}function Oe($){Te.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Te.copy($))}function Ke($,Ge){let me=p.get(Ge);me===void 0&&(me=new WeakMap,p.set(Ge,me));let lt=me.get($);lt===void 0&&(lt=s.getUniformBlockIndex(Ge,$.name),me.set($,lt))}function He($,Ge){const lt=p.get(Ge).get($);h.get(Ge)!==lt&&(s.uniformBlockBinding(Ge,lt,$.__bindingPointIndex),h.set(Ge,lt))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},ce=null,B={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,V=null,I=null,O=null,T=new sn(0,0,0),N=0,Y=!1,H=null,Q=null,re=null,pe=null,X=null,st.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Se,disable:Fe,bindFramebuffer:ot,drawBuffers:gt,useProgram:Et,setBlending:Kt,setMaterial:Tt,setFlipSided:zt,setCullFace:Nt,setLineWidth:Gt,setPolygonOffset:q,setScissorTest:It,activeTexture:wt,bindTexture:At,unbindTexture:qe,compressedTexImage2D:Ht,compressedTexImage3D:U,texImage2D:xe,texImage3D:we,pixelStorei:tt,getParameter:Ce,updateUBOMapping:Ke,uniformBlockBinding:He,texStorage2D:Ve,texStorage3D:We,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ae,scissor:Ye,viewport:Oe,reset:Pt}}function FE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,E){return C?new OffscreenCanvas(U,E):rc("canvas")}function y(U,E,ae){let Me=1;const Ae=Ht(U);if((Ae.width>ae||Ae.height>ae)&&(Me=ae/Math.max(Ae.width,Ae.height)),Me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ve=Math.floor(Me*Ae.width),We=Math.floor(Me*Ae.height);x===void 0&&(x=D(Ve,We));const xe=E?D(Ve,We):x;return xe.width=Ve,xe.height=We,xe.getContext("2d").drawImage(U,0,0,Ve,We),Dt("WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+Ve+"x"+We+")."),xe}else return"data"in U&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function L(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(U,E,ae,Me,Ae,Ve=!1){if(U!==null){if(s[U]!==void 0)return s[U];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let We;Me&&(We=e.get("EXT_texture_norm16"),We||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===s.RED&&(ae===s.FLOAT&&(xe=s.R32F),ae===s.HALF_FLOAT&&(xe=s.R16F),ae===s.UNSIGNED_BYTE&&(xe=s.R8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.R16_EXT),ae===s.SHORT&&We&&(xe=We.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.R8UI),ae===s.UNSIGNED_SHORT&&(xe=s.R16UI),ae===s.UNSIGNED_INT&&(xe=s.R32UI),ae===s.BYTE&&(xe=s.R8I),ae===s.SHORT&&(xe=s.R16I),ae===s.INT&&(xe=s.R32I)),E===s.RG&&(ae===s.FLOAT&&(xe=s.RG32F),ae===s.HALF_FLOAT&&(xe=s.RG16F),ae===s.UNSIGNED_BYTE&&(xe=s.RG8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.RG16_EXT),ae===s.SHORT&&We&&(xe=We.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ae===s.UNSIGNED_INT&&(xe=s.RG32UI),ae===s.BYTE&&(xe=s.RG8I),ae===s.SHORT&&(xe=s.RG16I),ae===s.INT&&(xe=s.RG32I)),E===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ae===s.UNSIGNED_INT&&(xe=s.RGB32UI),ae===s.BYTE&&(xe=s.RGB8I),ae===s.SHORT&&(xe=s.RGB16I),ae===s.INT&&(xe=s.RGB32I)),E===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ae===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ae===s.BYTE&&(xe=s.RGBA8I),ae===s.SHORT&&(xe=s.RGBA16I),ae===s.INT&&(xe=s.RGBA32I)),E===s.RGB&&(ae===s.UNSIGNED_SHORT&&We&&(xe=We.RGB16_EXT),ae===s.SHORT&&We&&(xe=We.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),E===s.RGBA){const we=Ve?nc:Jt.getTransfer(Ae);ae===s.FLOAT&&(xe=s.RGBA32F),ae===s.HALF_FLOAT&&(xe=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(xe=we===rn?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.RGBA16_EXT),ae===s.SHORT&&We&&(xe=We.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function V(U,E){let ae;return U?E===null||E===ar||E===go?ae=s.DEPTH24_STENCIL8:E===tr?ae=s.DEPTH32F_STENCIL8:E===mo&&(ae=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ar||E===go?ae=s.DEPTH_COMPONENT24:E===tr?ae=s.DEPTH_COMPONENT32F:E===mo&&(ae=s.DEPTH_COMPONENT16),ae}function I(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function O(U){const E=U.target;E.removeEventListener("dispose",O),N(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),H(E)}function N(U){const E=r.get(U);if(E.__webglInit===void 0)return;const ae=U.source,Me=M.get(ae);if(Me){const Ae=Me[E.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&Y(U),Object.keys(Me).length===0&&M.delete(ae)}r.remove(U)}function Y(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const ae=U.source,Me=M.get(ae);delete Me[E.__cacheKey],u.memory.textures--}function H(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(E.__webglFramebuffer[Me]))for(let Ae=0;Ae<E.__webglFramebuffer[Me].length;Ae++)s.deleteFramebuffer(E.__webglFramebuffer[Me][Ae]);else s.deleteFramebuffer(E.__webglFramebuffer[Me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Me])}else{if(Array.isArray(E.__webglFramebuffer))for(let Me=0;Me<E.__webglFramebuffer.length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[Me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Me=0;Me<E.__webglColorRenderbuffer.length;Me++)E.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ae=U.textures;for(let Me=0,Ae=ae.length;Me<Ae;Me++){const Ve=r.get(ae[Me]);Ve.__webglTexture&&(s.deleteTexture(Ve.__webglTexture),u.memory.textures--),r.remove(ae[Me])}r.remove(U)}let Q=0;function re(){Q=0}function pe(){return Q}function X(U){Q=U}function oe(){const U=Q;return U>=o.maxTextures&&Dt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Q+=1,U}function J(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ee(U,E){const ae=r.get(U);if(U.isVideoTexture&&At(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ae.__version!==U.version){const Me=U.image;if(Me===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(ae,U,E);return}}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function he(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){Fe(ae,U,E);return}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function ce(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){Fe(ae,U,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function B(U,E){const ae=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ae.__version!==U.version){ot(ae,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}const le={[Vd]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[Hd]:s.MIRRORED_REPEAT},et={[Un]:s.NEAREST,[Gv]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Ku]:s.LINEAR_MIPMAP_NEAREST,[ws]:s.LINEAR_MIPMAP_LINEAR},st={[Xv]:s.NEVER,[Zv]:s.ALWAYS,[Yv]:s.LESS,[Uf]:s.LEQUAL,[$v]:s.EQUAL,[Ff]:s.GEQUAL,[qv]:s.GREATER,[Kv]:s.NOTEQUAL};function Te(U,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Ku||E.magFilter===Sl||E.magFilter===ws||E.minFilter===jn||E.minFilter===Ku||E.minFilter===Sl||E.minFilter===ws)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,et[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Sl&&E.minFilter!==ws||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ue(U,E){let ae=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",O));const Me=E.source;let Ae=M.get(Me);Ae===void 0&&(Ae={},M.set(Me,Ae));const Ve=J(E);if(Ve!==U.__cacheKey){Ae[Ve]===void 0&&(Ae[Ve]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Ae[Ve].usedTimes++;const We=Ae[U.__cacheKey];We!==void 0&&(Ae[U.__cacheKey].usedTimes--,We.usedTimes===0&&Y(E)),U.__cacheKey=Ve,U.__webglTexture=Ae[Ve].texture}return ae}function be(U,E,ae){return Math.floor(Math.floor(U/ae)/E)}function Se(U,E,ae,Me){const Ve=U.updateRanges;if(Ve.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ae,Me,E.data);else{Ve.sort((tt,Ye)=>tt.start-Ye.start);let We=0;for(let tt=1;tt<Ve.length;tt++){const Ye=Ve[We],Oe=Ve[tt],Ke=Ye.start+Ye.count,He=be(Oe.start,E.width,4),Pt=be(Ye.start,E.width,4);Oe.start<=Ke+1&&He===Pt&&be(Oe.start+Oe.count-1,E.width,4)===He?Ye.count=Math.max(Ye.count,Oe.start+Oe.count-Ye.start):(++We,Ve[We]=Oe)}Ve.length=We+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let tt=0,Ye=Ve.length;tt<Ye;tt++){const Oe=Ve[tt],Ke=Math.floor(Oe.start/4),He=Math.ceil(Oe.count/4),Pt=Ke%E.width,$=Math.floor(Ke/E.width),Ge=He,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,$),t.texSubImage2D(s.TEXTURE_2D,0,Pt,$,Ge,me,ae,Me,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function Fe(U,E,ae){let Me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Me=s.TEXTURE_3D);const Ae=ue(U,E),Ve=E.source;t.bindTexture(Me,U.__webglTexture,s.TEXTURE0+ae);const We=r.get(Ve);if(Ve.version!==We.__version||Ae===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Jt.getPrimaries(Jt.workingColorSpace),lt=E.colorSpace===Qr?null:Jt.getPrimaries(E.colorSpace),ke=E.colorSpace===Qr||me===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let we=y(E.image,!1,o.maxTextureSize);we=qe(E,we);const Ce=l.convert(E.format,E.colorSpace),tt=l.convert(E.type);let Ye=P(E.internalFormat,Ce,tt,E.normalized,E.colorSpace,E.isVideoTexture);Te(Me,E);let Oe;const Ke=E.mipmaps,He=E.isVideoTexture!==!0,Pt=We.__version===void 0||Ae===!0,$=Ve.dataReady,Ge=I(E,we);if(E.isDepthTexture)Ye=V(E.format===bs,E.type),Pt&&(He?t.texStorage2D(s.TEXTURE_2D,1,Ye,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Ye,we.width,we.height,0,Ce,tt,null));else if(E.isDataTexture)if(Ke.length>0){He&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ge,Ye,Ke[0].width,Ke[0].height);for(let me=0,lt=Ke.length;me<lt;me++)Oe=Ke[me],He?$&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ce,tt,Oe.data):t.texImage2D(s.TEXTURE_2D,me,Ye,Oe.width,Oe.height,0,Ce,tt,Oe.data);E.generateMipmaps=!1}else He?(Pt&&t.texStorage2D(s.TEXTURE_2D,Ge,Ye,we.width,we.height),$&&Se(E,we,Ce,tt)):t.texImage2D(s.TEXTURE_2D,0,Ye,we.width,we.height,0,Ce,tt,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Ye,Ke[0].width,Ke[0].height,we.depth);for(let me=0,lt=Ke.length;me<lt;me++)if(Oe=Ke[me],E.format!==Yi)if(Ce!==null)if(He){if($)if(E.layerUpdates.size>0){const ke=Zm(Oe.width,Oe.height,E.format,E.type);for(const ye of E.layerUpdates){const ct=Oe.data.subarray(ye*ke/Oe.data.BYTES_PER_ELEMENT,(ye+1)*ke/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ye,Oe.width,Oe.height,1,Ce,ct)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,we.depth,Ce,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ye,Oe.width,Oe.height,we.depth,0,Oe.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,we.depth,Ce,tt,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Ye,Oe.width,Oe.height,we.depth,0,Ce,tt,Oe.data)}else{He&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ge,Ye,Ke[0].width,Ke[0].height);for(let me=0,lt=Ke.length;me<lt;me++)Oe=Ke[me],E.format!==Yi?Ce!==null?He?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ce,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Ye,Oe.width,Oe.height,0,Oe.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?$&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ce,tt,Oe.data):t.texImage2D(s.TEXTURE_2D,me,Ye,Oe.width,Oe.height,0,Ce,tt,Oe.data)}else if(E.isDataArrayTexture)if(He){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Ye,we.width,we.height,we.depth),$)if(E.layerUpdates.size>0){const me=Zm(we.width,we.height,E.format,E.type);for(const lt of E.layerUpdates){const ke=we.data.subarray(lt*me/we.data.BYTES_PER_ELEMENT,(lt+1)*me/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,we.width,we.height,1,Ce,tt,ke)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ce,tt,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,we.width,we.height,we.depth,0,Ce,tt,we.data);else if(E.isData3DTexture)He?(Pt&&t.texStorage3D(s.TEXTURE_3D,Ge,Ye,we.width,we.height,we.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ce,tt,we.data)):t.texImage3D(s.TEXTURE_3D,0,Ye,we.width,we.height,we.depth,0,Ce,tt,we.data);else if(E.isFramebufferTexture){if(Pt)if(He)t.texStorage2D(s.TEXTURE_2D,Ge,Ye,we.width,we.height);else{let me=we.width,lt=we.height;for(let ke=0;ke<Ge;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ye,me,lt,0,Ce,tt,null),me>>=1,lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),we.parentNode!==me){me.appendChild(we),S.add(E),me.onpaint=Mt=>{const Xt=Mt.changedElements;for(const $t of S)Xt.includes($t.image)&&($t.needsUpdate=!0)},me.requestPaint();return}const lt=0,ke=s.RGBA,ye=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,lt,ke,ye,ct,we),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(He&&Pt){const me=Ht(Ke[0]);t.texStorage2D(s.TEXTURE_2D,Ge,Ye,me.width,me.height)}for(let me=0,lt=Ke.length;me<lt;me++)Oe=Ke[me],He?$&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce,tt,Oe):t.texImage2D(s.TEXTURE_2D,me,Ye,Ce,tt,Oe);E.generateMipmaps=!1}else if(He){if(Pt){const me=Ht(we);t.texStorage2D(s.TEXTURE_2D,Ge,Ye,me.width,me.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,tt,we)}else t.texImage2D(s.TEXTURE_2D,0,Ye,Ce,tt,we);_(E)&&L(Me),We.__version=Ve.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,ae){if(E.image.length!==6)return;const Me=ue(U,E),Ae=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ae);const Ve=r.get(Ae);if(Ae.version!==Ve.__version||Me===!0){t.activeTexture(s.TEXTURE0+ae);const We=Jt.getPrimaries(Jt.workingColorSpace),xe=E.colorSpace===Qr?null:Jt.getPrimaries(E.colorSpace),we=E.colorSpace===Qr||We===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,Ye=[];for(let ye=0;ye<6;ye++)!Ce&&!tt?Ye[ye]=y(E.image[ye],!0,o.maxCubemapSize):Ye[ye]=tt?E.image[ye].image:E.image[ye],Ye[ye]=qe(E,Ye[ye]);const Oe=Ye[0],Ke=l.convert(E.format,E.colorSpace),He=l.convert(E.type),Pt=P(E.internalFormat,Ke,He,E.normalized,E.colorSpace),$=E.isVideoTexture!==!0,Ge=Ve.__version===void 0||Me===!0,me=Ae.dataReady;let lt=I(E,Oe);Te(s.TEXTURE_CUBE_MAP,E);let ke;if(Ce){$&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Pt,Oe.width,Oe.height);for(let ye=0;ye<6;ye++){ke=Ye[ye].mipmaps;for(let ct=0;ct<ke.length;ct++){const Mt=ke[ct];E.format!==Yi?Ke!==null?$?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Mt.width,Mt.height,Ke,Mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,Pt,Mt.width,Mt.height,0,Mt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Mt.width,Mt.height,Ke,He,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,Pt,Mt.width,Mt.height,0,Ke,He,Mt.data)}}}else{if(ke=E.mipmaps,$&&Ge){ke.length>0&&lt++;const ye=Ht(Ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(tt){$?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye[ye].width,Ye[ye].height,Ke,He,Ye[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Pt,Ye[ye].width,Ye[ye].height,0,Ke,He,Ye[ye].data);for(let ct=0;ct<ke.length;ct++){const Xt=ke[ct].image[ye].image;$?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,Xt.width,Xt.height,Ke,He,Xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,Pt,Xt.width,Xt.height,0,Ke,He,Xt.data)}}else{$?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ke,He,Ye[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Pt,Ke,He,Ye[ye]);for(let ct=0;ct<ke.length;ct++){const Mt=ke[ct];$?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,Ke,He,Mt.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,Pt,Ke,He,Mt.image[ye])}}}_(E)&&L(s.TEXTURE_CUBE_MAP),Ve.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function gt(U,E,ae,Me,Ae,Ve){const We=l.convert(ae.format,ae.colorSpace),xe=l.convert(ae.type),we=P(ae.internalFormat,We,xe,ae.normalized,ae.colorSpace),Ce=r.get(E),tt=r.get(ae);if(tt.__renderTarget=E,!Ce.__hasExternalTextures){const Ye=Math.max(1,E.width>>Ve),Oe=Math.max(1,E.height>>Ve);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,Ve,we,Ye,Oe,E.depth,0,We,xe,null):t.texImage2D(Ae,Ve,we,Ye,Oe,0,We,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),wt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Ae,tt.__webglTexture,0,It(E)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Ae,tt.__webglTexture,Ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(U,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Me=E.depthTexture,Ae=Me&&Me.isDepthTexture?Me.type:null,Ve=V(E.stencilBuffer,Ae),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(E),Ve,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(E),Ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,U)}else{const Me=E.textures;for(let Ae=0;Ae<Me.length;Ae++){const Ve=Me[Ae],We=l.convert(Ve.format,Ve.colorSpace),xe=l.convert(Ve.type),we=P(Ve.internalFormat,We,xe,Ve.normalized,Ve.colorSpace);wt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(E),we,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(E),we,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,we,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(U,E,ae){const Me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ae=r.get(E.depthTexture);if(Ae.__renderTarget=E,(!Ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Me){if(Ae.__webglInit===void 0&&(Ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Ae.__webglTexture===void 0){Ae.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ae.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ce=l.convert(E.depthTexture.format),tt=l.convert(E.depthTexture.type);let Ye;E.depthTexture.format===Cr?Ye=s.DEPTH_COMPONENT24:E.depthTexture.format===bs&&(Ye=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ye,E.width,E.height,0,Ce,tt,null)}}else ee(E.depthTexture,0);const Ve=Ae.__webglTexture,We=It(E),xe=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,we=E.depthTexture.format===bs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Cr)wt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,xe,Ve,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,we,xe,Ve,0);else if(E.depthTexture.format===bs)wt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,xe,Ve,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,we,xe,Ve,0);else throw new Error("Unknown depthTexture format")}function Ot(U){const E=r.get(U),ae=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Me){const Ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Me.removeEventListener("dispose",Ae)};Me.addEventListener("dispose",Ae),E.__depthDisposeCallback=Ae}E.__boundDepthTexture=Me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let Me=0;Me<6;Me++)St(E.__webglFramebuffer[Me],U,Me);else{const Me=U.texture.mipmaps;Me&&Me.length>0?St(E.__webglFramebuffer[0],U,0):St(E.__webglFramebuffer,U,0)}else if(ae){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]===void 0)E.__webglDepthbuffer[Me]=s.createRenderbuffer(),Et(E.__webglDepthbuffer[Me],U,!1);else{const Ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=E.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,Ve)}}else{const Me=U.texture.mipmaps;if(Me&&Me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Et(E.__webglDepthbuffer,U,!1);else{const Ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,Ve)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(U,E,ae){const Me=r.get(U);E!==void 0&&gt(Me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Ot(U)}function Tt(U){const E=U.texture,ae=r.get(U),Me=r.get(E);U.addEventListener("dispose",T);const Ae=U.textures,Ve=U.isWebGLCubeRenderTarget===!0,We=Ae.length>1;if(We||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=E.version,u.memory.textures++),Ve){ae.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[xe]=[];for(let we=0;we<E.mipmaps.length;we++)ae.__webglFramebuffer[xe][we]=s.createFramebuffer()}else ae.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)ae.__webglFramebuffer[xe]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(We)for(let xe=0,we=Ae.length;xe<we;xe++){const Ce=r.get(Ae[xe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&wt(U)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let xe=0;xe<Ae.length;xe++){const we=Ae[xe];ae.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const Ce=l.convert(we.format,we.colorSpace),tt=l.convert(we.type),Ye=P(we.internalFormat,Ce,tt,we.normalized,we.colorSpace,U.isXRRenderTarget===!0),Oe=It(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ye,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(ae.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ve){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)gt(ae.__webglFramebuffer[xe][we],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else gt(ae.__webglFramebuffer[xe],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(E)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let xe=0,we=Ae.length;xe<we;xe++){const Ce=Ae[xe],tt=r.get(Ce);let Ye=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ye=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ye,tt.__webglTexture),Te(Ye,Ce),gt(ae.__webglFramebuffer,U,Ce,s.COLOR_ATTACHMENT0+xe,Ye,0),_(Ce)&&L(Ye)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Me.__webglTexture),Te(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)gt(ae.__webglFramebuffer[we],U,E,s.COLOR_ATTACHMENT0,xe,we);else gt(ae.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,xe,0);_(E)&&L(xe),t.unbindTexture()}U.depthBuffer&&Ot(U)}function zt(U){const E=U.textures;for(let ae=0,Me=E.length;ae<Me;ae++){const Ae=E[ae];if(_(Ae)){const Ve=R(U),We=r.get(Ae).__webglTexture;t.bindTexture(Ve,We),L(Ve),t.unbindTexture()}}}const Nt=[],Gt=[];function q(U){if(U.samples>0){if(wt(U)===!1){const E=U.textures,ae=U.width,Me=U.height;let Ae=s.COLOR_BUFFER_BIT;const Ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(U),xe=E.length>1;if(xe)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ce]);const tt=r.get(E[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,ae,Me,0,0,ae,Me,Ae,s.NEAREST),h===!0&&(Nt.length=0,Gt.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Nt.push(Ve),Gt.push(Ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ce]);const tt=r.get(E[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function It(U){return Math.min(o.maxSamples,U.samples)}function wt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function qe(U,E){const ae=U.colorSpace,Me=U.format,Ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ae!==tc&&ae!==Qr&&(Jt.getTransfer(ae)===rn?(Me!==Yi||Ae!==Ii)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",ae)),E}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=pe,this.setTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Kt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OE(s,e){function t(r,o=Qr){let l;const u=Jt.getTransfer(o);if(r===Ii)return s.UNSIGNED_BYTE;if(r===Nf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===K0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Z0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$0)return s.BYTE;if(r===q0)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Rf)return s.INT;if(r===ar)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===Ar)return s.HALF_FLOAT;if(r===J0)return s.ALPHA;if(r===Q0)return s.RGB;if(r===Yi)return s.RGBA;if(r===Cr)return s.DEPTH_COMPONENT;if(r===bs)return s.DEPTH_STENCIL;if(r===eg)return s.RED;if(r===If)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===Lf)return s.RGBA_INTEGER;if(r===Yl||r===$l||r===ql||r===Kl)if(u===rn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gd||r===jd||r===Wd||r===Xd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd||r===$d||r===qd||r===Kd||r===Zd||r===Ql||r===Jd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yd||r===$d)return u===rn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===qd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Kd)return l.COMPRESSED_R11_EAC;if(r===Zd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ql)return l.COMPRESSED_RG11_EAC;if(r===Jd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Qd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ef)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===af)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===of)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===df)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ff)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pf||r===mf||r===gf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===pf)return u===rn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xf||r===vf||r===ec||r===_f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===xf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===vf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const kE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new cg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:kE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends Ns{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,C=null;const D=typeof XRWebGLBinding<"u",y=new zE,_={},L=t.getContextAttributes();let R=null,P=null;const V=[],I=[],O=new Lt;let T=null;const N=new Pi;N.viewport=new vn;const Y=new Pi;Y.viewport=new vn;const H=[N,Y],Q=new Z_;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let be=V[ue];return be===void 0&&(be=new rd,V[ue]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ue){let be=V[ue];return be===void 0&&(be=new rd,V[ue]=be),be.getGripSpace()},this.getHand=function(ue){let be=V[ue];return be===void 0&&(be=new rd,V[ue]=be),be.getHandSpace()};function X(ue){const be=I.indexOf(ue.inputSource);if(be===-1)return;const Se=V[be];Se!==void 0&&(Se.update(ue.inputSource,ue.frame,p||u),Se.dispatchEvent({type:ue.type,data:ue.inputSource}))}function oe(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",J);for(let ue=0;ue<V.length;ue++){const be=I[ue];be!==null&&(I[ue]=null,V[ue].disconnect(be))}re=null,pe=null,y.reset();for(const ue in _)delete _[ue];e.setRenderTarget(R),M=null,x=null,S=null,o=null,P=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,r.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){f=ue,r.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(ue){if(o=ue,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",J),L.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,ot=null;L.depth&&(ot=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=L.stencil?bs:Cr,Fe=L.stencil?go:ar);const gt={colorFormat:t.RGBA8,depthFormat:ot,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(gt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new rr(x.textureWidth,x.textureHeight,{format:Yi,type:Ii,depthTexture:new _a(x.textureWidth,x.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new rr(M.framebufferWidth,M.framebufferHeight,{format:Yi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(ue){for(let be=0;be<ue.removed.length;be++){const Se=ue.removed[be],Fe=I.indexOf(Se);Fe>=0&&(I[Fe]=null,V[Fe].disconnect(Se))}for(let be=0;be<ue.added.length;be++){const Se=ue.added[be];let Fe=I.indexOf(Se);if(Fe===-1){for(let gt=0;gt<V.length;gt++)if(gt>=I.length){I.push(Se),Fe=gt;break}else if(I[gt]===null){I[gt]=Se,Fe=gt;break}if(Fe===-1)break}const ot=V[Fe];ot&&ot.connect(Se)}}const ee=new ie,he=new ie;function ce(ue,be,Se){ee.setFromMatrixPosition(be.matrixWorld),he.setFromMatrixPosition(Se.matrixWorld);const Fe=ee.distanceTo(he),ot=be.projectionMatrix.elements,gt=Se.projectionMatrix.elements,Et=ot[14]/(ot[10]-1),St=ot[14]/(ot[10]+1),Ot=(ot[9]+1)/ot[5],Kt=(ot[9]-1)/ot[5],Tt=(ot[8]-1)/ot[0],zt=(gt[8]+1)/gt[0],Nt=Et*Tt,Gt=Et*zt,q=Fe/(-Tt+zt),It=q*-Tt;if(be.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(It),ue.translateZ(q),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),ot[10]===-1)ue.projectionMatrix.copy(be.projectionMatrix),ue.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const wt=Et+q,At=St+q,qe=Nt-It,Ht=Gt+(Fe-It),U=Ot*St/At*wt,E=Kt*St/At*wt;ue.projectionMatrix.makePerspective(qe,Ht,U,E,wt,At),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function B(ue,be){be===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(be.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(o===null)return;let be=ue.near,Se=ue.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),Q.near=Y.near=N.near=be,Q.far=Y.far=N.far=Se,(re!==Q.near||pe!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),re=Q.near,pe=Q.far),Q.layers.mask=ue.layers.mask|6,N.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const Fe=ue.parent,ot=Q.cameras;B(Q,Fe);for(let gt=0;gt<ot.length;gt++)B(ot[gt],Fe);ot.length===2?ce(Q,N,Y):Q.projectionMatrix.copy(N.projectionMatrix),le(ue,Q,Fe)};function le(ue,be,Se){Se===null?ue.matrix.copy(be.matrixWorld):(ue.matrix.copy(Se.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(be.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(be.projectionMatrix),ue.projectionMatrixInverse.copy(be.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Sf*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ue){h=ue,x!==null&&(x.fixedFoveation=ue),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ue){return _[ue]};let et=null;function st(ue,be){if(v=be.getViewerPose(p||u),C=be,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Fe=!1;Se.length!==Q.cameras.length&&(Q.cameras.length=0,Fe=!0);for(let St=0;St<Se.length;St++){const Ot=Se[St];let Kt=null;if(M!==null)Kt=M.getViewport(Ot);else{const zt=S.getViewSubImage(x,Ot);Kt=zt.viewport,St===0&&(e.setRenderTargetTextures(P,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(P))}let Tt=H[St];Tt===void 0&&(Tt=new Pi,Tt.layers.enable(St),Tt.viewport=new vn,H[St]=Tt),Tt.matrix.fromArray(Ot.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Ot.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),St===0&&(Q.matrix.copy(Tt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Fe===!0&&Q.cameras.push(Tt)}const ot=o.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const St=S.getDepthInformation(Se[0]);St&&St.isValid&&St.texture&&y.init(St,o.renderState)}if(ot&&ot.includes("camera-access")&&D){e.state.unbindTexture(),S=r.getBinding();for(let St=0;St<Se.length;St++){const Ot=Se[St].camera;if(Ot){let Kt=_[Ot];Kt||(Kt=new cg,_[Ot]=Kt);const Tt=S.getCameraImage(Ot);Kt.sourceTexture=Tt}}}}for(let Se=0;Se<V.length;Se++){const Fe=I[Se],ot=V[Se];Fe!==null&&ot!==void 0&&ot.update(Fe,be,p||u)}et&&et(ue,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),C=null}const Te=new mg;Te.setAnimationLoop(st),this.setAnimationLoop=function(ue){et=ue},this.dispose=function(){}}}const HE=new Mn,Mg=new Vt;Mg.set(-1,0,0,0,1,0,0,0,1);function GE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,fg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,L,R,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),C(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),D(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===li&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===li&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,P=L.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(HE.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Mg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===li&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function jE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const P=R.program;r.uniformBlockBinding(L,P)}function p(L,R){let P=o[L.id];P===void 0&&(C(L),P=v(L),o[L.id]=P,L.addEventListener("dispose",y));const V=R.program;r.updateUBOMapping(L,V);const I=e.render.frame;l[L.id]!==I&&(x(L),l[L.id]=I)}function v(L){const R=S();L.__bindingPointIndex=R;const P=s.createBuffer(),V=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const R=o[L.id],P=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,O=P.length;I<O;I++){const T=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,Y=T.length;N<Y;N++){const H=T[N];if(M(H,I,N,V)===!0){const Q=H.__offset,re=Array.isArray(H.value)?H.value:[H.value];let pe=0;for(let X=0;X<re.length;X++){const oe=re[X],J=D(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Q+pe,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):ArrayBuffer.isView(oe)?H.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,H.__data.length)):(oe.toArray(H.__data,pe),pe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,P,V){const I=L.value,O=R+"_"+P;if(V[O]===void 0)return typeof I=="number"||typeof I=="boolean"?V[O]=I:ArrayBuffer.isView(I)?V[O]=I.slice():V[O]=I.clone(),!0;{const T=V[O];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return V[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(T.equals(I)===!1)return T.copy(I),!0}}return!1}function C(L){const R=L.uniforms;let P=0;const V=16;for(let O=0,T=R.length;O<T;O++){const N=Array.isArray(R[O])?R[O]:[R[O]];for(let Y=0,H=N.length;Y<H;Y++){const Q=N[Y],re=Array.isArray(Q.value)?Q.value:[Q.value];for(let pe=0,X=re.length;pe<X;pe++){const oe=re[pe],J=D(oe),ee=P%V,he=ee%J.boundary,ce=ee+he;P+=he,ce!==0&&V-ce<J.storage&&(P+=V-ce),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=J.storage}}}const I=P%V;return I>0&&(P+=V-I),L.__size=P,L.__cache={},this}function D(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(R.boundary=16,R.storage=L.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",L),R}function y(L){const R=L.target;R.removeEventListener("dispose",y);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const WE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function XE(){return Qi===null&&(Qi=new E_(WE,16,16,Cs,Ar),Qi.name="DFG_LUT",Qi.minFilter=jn,Qi.magFilter=jn,Qi.wrapS=wr,Qi.wrapT=wr,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class YE{constructor(e={}){const{canvas:t=Qv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ii}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const D=M,y=new Set([Lf,Df,If]),_=new Set([Ii,ar,mo,go,Nf,Pf]),L=new Uint32Array(4),R=new Int32Array(4),P=new ie;let V=null,I=null;const O=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,Q=null;this._outputColorSpace=Ni;let re=0,pe=0,X=null,oe=-1,J=null;const ee=new vn,he=new vn;let ce=null;const B=new sn(0);let le=0,et=t.width,st=t.height,Te=1,ue=null,be=null;const Se=new vn(0,0,et,st),Fe=new vn(0,0,et,st);let ot=!1;const gt=new og;let Et=!1,St=!1;const Ot=new Mn,Kt=new ie,Tt=new vn,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Gt(){return X===null?Te:1}let q=r;function It(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),q===null){const G="webgl2";if(q=It(G,b),q===null)throw It(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw en("WebGLRenderer: "+b.message),b}let wt,At,qe,Ht,U,E,ae,Me,Ae,Ve,We,xe,we,Ce,tt,Ye,Oe,Ke,He,Pt,$,Ge,me;function lt(){wt=new X1(q),wt.init(),$=new OE(q,wt),At=new k1(q,wt,e,$),qe=new UE(q,wt),At.reversedDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Ht=new q1(q),U=new SE,E=new FE(q,wt,qe,U,At,$,Ht),ae=new W1(Y),Me=new Q_(q),Ge=new F1(q,Me),Ae=new Y1(q,Me,Ht,Ge),Ve=new Z1(q,Ae,Me,Ge,Ht),Ke=new K1(q,At,E),tt=new B1(U),We=new yE(Y,ae,wt,At,Ge,tt),xe=new GE(Y,U),we=new EE,Ce=new RE(wt),Oe=new U1(Y,ae,qe,Ve,C,h),Ye=new LE(Y,Ve,At),me=new jE(q,Ht,At,qe),He=new O1(q,wt,Ht),Pt=new $1(q,wt,Ht),Ht.programs=We.programs,Y.capabilities=At,Y.extensions=wt,Y.properties=U,Y.renderLists=we,Y.shadowMap=Ye,Y.state=qe,Y.info=Ht}lt(),D!==Ii&&(N=new Q1(D,t.width,t.height,o,l));const ke=new VE(Y,q);this.xr=ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(b){b!==void 0&&(Te=b,this.setSize(et,st,!1))},this.getSize=function(b){return b.set(et,st)},this.setSize=function(b,G,se=!0){if(ke.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=b,st=G,t.width=Math.floor(b*Te),t.height=Math.floor(G*Te),se===!0&&(t.style.width=b+"px",t.style.height=G+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(et*Te,st*Te).floor()},this.setDrawingBufferSize=function(b,G,se){et=b,st=G,Te=se,t.width=Math.floor(b*se),t.height=Math.floor(G*se),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(D===Ii){en("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,G,se,Z){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,G,se,Z),qe.viewport(ee.copy(Se).multiplyScalar(Te).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,G,se,Z){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,G,se,Z),qe.scissor(he.copy(Fe).multiplyScalar(Te).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(b){qe.setScissorTest(ot=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,se=!0){let Z=0;if(b){let ne=!1;if(X!==null){const Ie=X.texture.format;ne=y.has(Ie)}if(ne){const Ie=X.texture.type,Xe=_.has(Ie),Ee=Oe.getClearColor(),Ze=Oe.getClearAlpha(),Qe=Ee.r,De=Ee.g,it=Ee.b;Xe?(L[0]=Qe,L[1]=De,L[2]=it,L[3]=Ze,q.clearBufferuiv(q.COLOR,0,L)):(R[0]=Qe,R[1]=De,R[2]=it,R[3]=Ze,q.clearBufferiv(q.COLOR,0,R))}else Z|=q.COLOR_BUFFER_BIT}G&&(Z|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Q=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),Oe.dispose(),we.dispose(),Ce.dispose(),U.dispose(),ae.dispose(),Ve.dispose(),Ge.dispose(),me.dispose(),We.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Di),ke.removeEventListener("sessionend",Fn),Wn.stop()};function ye(b){b.preventDefault(),Rm("WebGLRenderer: Context Lost."),H=!0}function ct(){Rm("WebGLRenderer: Context Restored."),H=!1;const b=Ht.autoReset,G=Ye.enabled,se=Ye.autoUpdate,Z=Ye.needsUpdate,ne=Ye.type;lt(),Ht.autoReset=b,Ye.enabled=G,Ye.autoUpdate=se,Ye.needsUpdate=Z,Ye.type=ne}function Mt(b){en("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const G=b.target;G.removeEventListener("dispose",Xt),$t(G)}function $t(b){En(b),U.remove(b)}function En(b){const G=U.get(b).programs;G!==void 0&&(G.forEach(function(se){We.releaseProgram(se)}),b.isShaderMaterial&&We.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,se,Z,ne,Ie){G===null&&(G=zt);const Xe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ee=cr(b,G,se,Z,ne);qe.setMaterial(Z,Xe);let Ze=se.index,Qe=1;if(Z.wireframe===!0){if(Ze=Ae.getWireframeAttribute(se),Ze===void 0)return;Qe=2}const De=se.drawRange,it=se.attributes.position;let Je=De.start*Qe,bt=(De.start+De.count)*Qe;Ie!==null&&(Je=Math.max(Je,Ie.start*Qe),bt=Math.min(bt,(Ie.start+Ie.count)*Qe)),Ze!==null?(Je=Math.max(Je,0),bt=Math.min(bt,Ze.count)):it!=null&&(Je=Math.max(Je,0),bt=Math.min(bt,it.count));const kt=bt-Je;if(kt<0||kt===1/0)return;Ge.setup(ne,Z,Ee,se,Ze);let w,k=He;if(Ze!==null&&(w=Me.get(Ze),k=Pt,k.setIndex(w)),ne.isMesh)Z.wireframe===!0?(qe.setLineWidth(Z.wireframeLinewidth*Gt()),k.setMode(q.LINES)):k.setMode(q.TRIANGLES);else if(ne.isLine){let F=Z.linewidth;F===void 0&&(F=1),qe.setLineWidth(F*Gt()),ne.isLineSegments?k.setMode(q.LINES):ne.isLineLoop?k.setMode(q.LINE_LOOP):k.setMode(q.LINE_STRIP)}else ne.isPoints?k.setMode(q.POINTS):ne.isSprite&&k.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))k.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const F=ne._multiDrawStarts,W=ne._multiDrawCounts,Re=ne._multiDrawCount,ve=Ze?Me.get(Ze).bytesPerElement:1,Ue=U.get(Z).currentProgram.getUniforms();for(let ft=0;ft<Re;ft++)Ue.setValue(q,"_gl_DrawID",ft),k.render(F[ft]/ve,W[ft])}else if(ne.isInstancedMesh)k.renderInstances(Je,kt,ne.count);else if(se.isInstancedBufferGeometry){const F=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,W=Math.min(se.instanceCount,F);k.renderInstances(Je,kt,W)}else k.render(Je,kt)};function In(b,G,se){b.transparent===!0&&b.side===Er&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,yi(b,G,se),b.side=ns,b.needsUpdate=!0,yi(b,G,se),b.side=Er):yi(b,G,se)}this.compile=function(b,G,se=null){se===null&&(se=b),I=Ce.get(se),I.init(G),T.push(I),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),b!==se&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const Z=new Set;return b.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Xe=0;Xe<Ie.length;Xe++){const Ee=Ie[Xe];In(Ee,se,ne),Z.add(Ee)}else In(Ie,se,ne),Z.add(Ie)}),I=T.pop(),Z},this.compileAsync=function(b,G,se=null){const Z=this.compile(b,G,se);return new Promise(ne=>{function Ie(){if(Z.forEach(function(Xe){U.get(Xe).currentProgram.isReady()&&Z.delete(Xe)}),Z.size===0){ne(b);return}setTimeout(Ie,10)}wt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ci=null;function _i(b){ci&&ci(b)}function Di(){Wn.stop()}function Fn(){Wn.start()}const Wn=new mg;Wn.setAnimationLoop(_i),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){ci=b,ke.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},ke.addEventListener("sessionstart",Di),ke.addEventListener("sessionend",Fn),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Q!==null&&Q.renderStart(b,G);const se=ke.enabled===!0&&ke.isPresenting===!0,Z=N!==null&&(X===null||se)&&N.begin(Y,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(G),G=ke.getCamera()),b.isScene===!0&&b.onBeforeRender(Y,b,G,X),I=Ce.get(b,T.length),I.init(G),I.state.textureUnits=E.getTextureUnits(),T.push(I),Ot.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),gt.setFromProjectionMatrix(Ot,nr,G.reversedDepth),St=this.localClippingEnabled,Et=tt.init(this.clippingPlanes,St),V=we.get(b,O.length),V.init(),O.push(V),ke.enabled===!0&&ke.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&Li(Xe,G,-1/0,Y.sortObjects)}Li(b,G,0,Y.sortObjects),V.finish(),Y.sortObjects===!0&&V.sort(ue,be),Nt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Nt&&Oe.addToRenderList(V,b),this.info.render.frame++,Et===!0&&tt.beginShadows();const ne=I.state.shadowsArray;if(Ye.render(ne,b,G),Et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&N.hasRenderPass())===!1){const Xe=V.opaque,Ee=V.transmissive;if(I.setupLights(),G.isArrayCamera){const Ze=G.cameras;if(Ee.length>0)for(let Qe=0,De=Ze.length;Qe<De;Qe++){const it=Ze[Qe];gn(Xe,Ee,b,it)}Nt&&Oe.render(b);for(let Qe=0,De=Ze.length;Qe<De;Qe++){const it=Ze[Qe];Xn(V,b,it,it.viewport)}}else Ee.length>0&&gn(Xe,Ee,b,G),Nt&&Oe.render(b),Xn(V,b,G)}X!==null&&pe===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),Z&&N.end(Y),b.isScene===!0&&b.onAfterRender(Y,b,G),Ge.resetDefaultState(),oe=-1,J=null,T.pop(),T.length>0?(I=T[T.length-1],E.setTextureUnits(I.state.textureUnits),Et===!0&&tt.setGlobalState(Y.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?V=O[O.length-1]:V=null,Q!==null&&Q.renderEnd()};function Li(b,G,se,Z){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLightProbeGrid)I.pushLightProbeGrid(b);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||gt.intersectsSprite(b)){Z&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ot);const Xe=Ve.update(b),Ee=b.material;Ee.visible&&V.push(b,Xe,Ee,se,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||gt.intersectsObject(b))){const Xe=Ve.update(b),Ee=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Tt.copy(Xe.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(Ot)),Array.isArray(Ee)){const Ze=Xe.groups;for(let Qe=0,De=Ze.length;Qe<De;Qe++){const it=Ze[Qe],Je=Ee[it.materialIndex];Je&&Je.visible&&V.push(b,Xe,Je,se,Tt.z,it)}}else Ee.visible&&V.push(b,Xe,Ee,se,Tt.z,null)}}const Ie=b.children;for(let Xe=0,Ee=Ie.length;Xe<Ee;Xe++)Li(Ie[Xe],G,se,Z)}function Xn(b,G,se,Z){const{opaque:ne,transmissive:Ie,transparent:Xe}=b;I.setupLightsView(se),Et===!0&&tt.setGlobalState(Y.clippingPlanes,se),Z&&qe.viewport(ee.copy(Z)),ne.length>0&&Yn(ne,G,se),Ie.length>0&&Yn(Ie,G,se),Xe.length>0&&Yn(Xe,G,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function gn(b,G,se,Z){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Z.id]===void 0){const Je=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Z.id]=new rr(1,1,{generateMipmaps:!0,type:Je?Ar:Ii,minFilter:ws,samples:Math.max(4,At.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const Ie=I.state.transmissionRenderTarget[Z.id],Xe=Z.viewport||ee;Ie.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const Ee=Y.getRenderTarget(),Ze=Y.getActiveCubeFace(),Qe=Y.getActiveMipmapLevel();Y.setRenderTarget(Ie),Y.getClearColor(B),le=Y.getClearAlpha(),le<1&&Y.setClearColor(16777215,.5),Y.clear(),Nt&&Oe.render(se);const De=Y.toneMapping;Y.toneMapping=ir;const it=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),I.setupLightsView(Z),Et===!0&&tt.setGlobalState(Y.clippingPlanes,Z),Yn(b,se,Z),E.updateMultisampleRenderTarget(Ie),E.updateRenderTargetMipmap(Ie),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let bt=0,kt=G.length;bt<kt;bt++){const w=G[bt],{object:k,geometry:F,material:W,group:Re}=w;if(W.side===Er&&k.layers.test(Z.layers)){const ve=W.side;W.side=li,W.needsUpdate=!0,ei(k,se,Z,F,W,Re),W.side=ve,W.needsUpdate=!0,Je=!0}}Je===!0&&(E.updateMultisampleRenderTarget(Ie),E.updateRenderTargetMipmap(Ie))}Y.setRenderTarget(Ee,Ze,Qe),Y.setClearColor(B,le),it!==void 0&&(Z.viewport=it),Y.toneMapping=De}function Yn(b,G,se){const Z=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Ie=b.length;ne<Ie;ne++){const Xe=b[ne],{object:Ee,geometry:Ze,group:Qe}=Xe;let De=Xe.material;De.allowOverride===!0&&Z!==null&&(De=Z),Ee.layers.test(se.layers)&&ei(Ee,G,se,Ze,De,Qe)}}function ei(b,G,se,Z,ne,Ie){b.onBeforeRender(Y,G,se,Z,ne,Ie),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(Y,G,se,Z,b,Ie),ne.transparent===!0&&ne.side===Er&&ne.forceSinglePass===!1?(ne.side=li,ne.needsUpdate=!0,Y.renderBufferDirect(se,G,Z,ne,b,Ie),ne.side=ns,ne.needsUpdate=!0,Y.renderBufferDirect(se,G,Z,ne,b,Ie),ne.side=Er):Y.renderBufferDirect(se,G,Z,ne,b,Ie),b.onAfterRender(Y,G,se,Z,ne,Ie)}function yi(b,G,se){G.isScene!==!0&&(G=zt);const Z=U.get(b),ne=I.state.lights,Ie=I.state.shadowsArray,Xe=ne.state.version,Ee=We.getParameters(b,ne.state,Ie,G,se,I.state.lightProbeGridArray),Ze=We.getProgramCacheKey(Ee);let Qe=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;const De=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=ae.get(b.envMap||Z.environment,De),Z.envMapRotation=Z.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Xt),Qe=new Map,Z.programs=Qe);let it=Qe.get(Ze);if(it!==void 0){if(Z.currentProgram===it&&Z.lightsStateVersion===Xe)return ui(b,Ee),it}else Ee.uniforms=We.getUniforms(b),Q!==null&&b.isNodeMaterial&&Q.build(b,se,Ee),b.onBeforeCompile(Ee,Y),it=We.acquireProgram(Ee,Ze),Qe.set(Ze,it),Z.uniforms=Ee.uniforms;const Je=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=tt.uniform),ui(b,Ee),Z.needsLights=Le(b),Z.lightsStateVersion=Xe,Z.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),Z.lightProbeGrid=I.state.lightProbeGridArray.length>0,Z.currentProgram=it,Z.uniformsList=null,it}function Si(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Zl.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function ui(b,G){const se=U.get(b);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function lr(b,G){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;P.setFromMatrixPosition(G.matrixWorld);for(let se=0,Z=b.length;se<Z;se++){const ne=b[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(P))return ne}return null}function cr(b,G,se,Z,ne){G.isScene!==!0&&(G=zt),E.resetTextureUnits();const Ie=G.fog,Xe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Ee=X===null?Y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Jt.workingColorSpace,Ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Qe=ae.get(Z.envMap||Xe,Ze),De=Z.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Je=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,kt=!!se.morphAttributes.color;let w=ir;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(w=Y.toneMapping);const k=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=k!==void 0?k.length:0,W=U.get(Z),Re=I.state.lights;if(Et===!0&&(St===!0||b!==J)){const Ut=b===J&&Z.id===oe;tt.setState(Z,b,Ut)}let ve=!1;Z.version===W.__version?(W.needsLights&&W.lightsStateVersion!==Re.state.version||W.outputColorSpace!==Ee||ne.isBatchedMesh&&W.batching===!1||!ne.isBatchedMesh&&W.batching===!0||ne.isBatchedMesh&&W.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&W.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&W.instancing===!1||!ne.isInstancedMesh&&W.instancing===!0||ne.isSkinnedMesh&&W.skinning===!1||!ne.isSkinnedMesh&&W.skinning===!0||ne.isInstancedMesh&&W.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&W.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&W.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&W.instancingMorph===!1&&ne.morphTexture!==null||W.envMap!==Qe||Z.fog===!0&&W.fog!==Ie||W.numClippingPlanes!==void 0&&(W.numClippingPlanes!==tt.numPlanes||W.numIntersection!==tt.numIntersection)||W.vertexAlphas!==De||W.vertexTangents!==it||W.morphTargets!==Je||W.morphNormals!==bt||W.morphColors!==kt||W.toneMapping!==w||W.morphTargetsCount!==F||!!W.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,W.__version=Z.version);let Ue=W.currentProgram;ve===!0&&(Ue=yi(Z,G,ne),Q&&Z.isNodeMaterial&&Q.onUpdateProgram(Z,Ue,W));let ft=!1,at=!1,ut=!1;const mt=Ue.getUniforms(),rt=W.uniforms;if(qe.useProgram(Ue.program)&&(ft=!0,at=!0,ut=!0),Z.id!==oe&&(oe=Z.id,at=!0),W.needsLights){const Ut=lr(I.state.lightProbeGridArray,ne);W.lightProbeGrid!==Ut&&(W.lightProbeGrid=Ut,at=!0)}if(ft||J!==b){qe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(q,"projectionMatrix",b.projectionMatrix),mt.setValue(q,"viewMatrix",b.matrixWorldInverse);const un=mt.map.cameraPosition;un!==void 0&&un.setValue(q,Kt.setFromMatrixPosition(b.matrixWorld)),At.logarithmicDepthBuffer&&mt.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,at=!0,ut=!0)}if(W.needsLights&&(Re.state.directionalShadowMap.length>0&&mt.setValue(q,"directionalShadowMap",Re.state.directionalShadowMap,E),Re.state.spotShadowMap.length>0&&mt.setValue(q,"spotShadowMap",Re.state.spotShadowMap,E),Re.state.pointShadowMap.length>0&&mt.setValue(q,"pointShadowMap",Re.state.pointShadowMap,E)),ne.isSkinnedMesh){mt.setOptional(q,ne,"bindMatrix"),mt.setOptional(q,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),mt.setValue(q,"boneTexture",Ut.boneTexture,E))}ne.isBatchedMesh&&(mt.setOptional(q,ne,"batchingTexture"),mt.setValue(q,"batchingTexture",ne._matricesTexture,E),mt.setOptional(q,ne,"batchingIdTexture"),mt.setValue(q,"batchingIdTexture",ne._indirectTexture,E),mt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&mt.setValue(q,"batchingColorTexture",ne._colorsTexture,E));const Yt=se.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Ke.update(ne,se,Ue),(at||W.receiveShadow!==ne.receiveShadow)&&(W.receiveShadow=ne.receiveShadow,mt.setValue(q,"receiveShadow",ne.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(rt.envMapIntensity.value=G.environmentIntensity),rt.dfgLUT!==void 0&&(rt.dfgLUT.value=XE()),at){if(mt.setValue(q,"toneMappingExposure",Y.toneMappingExposure),W.needsLights&&j(rt,ut),Ie&&Z.fog===!0&&xe.refreshFogUniforms(rt,Ie),xe.refreshMaterialUniforms(rt,Z,Te,st,I.state.transmissionRenderTarget[b.id]),W.needsLights&&W.lightProbeGrid){const Ut=W.lightProbeGrid;rt.probesSH.value=Ut.texture,rt.probesMin.value.copy(Ut.boundingBox.min),rt.probesMax.value.copy(Ut.boundingBox.max),rt.probesResolution.value.copy(Ut.resolution)}Zl.upload(q,Si(W),rt,E)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Zl.upload(q,Si(W),rt,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(q,"center",ne.center),mt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),mt.setValue(q,"normalMatrix",ne.normalMatrix),mt.setValue(q,"modelMatrix",ne.matrixWorld),Z.uniformsGroups!==void 0){const Ut=Z.uniformsGroups;for(let un=0,nn=Ut.length;un<nn;un++){const $n=Ut[un];me.update($n,Ue),me.bind($n,Ue)}}return Ue}function j(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Le(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,G,se){const Z=U.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),U.get(b.texture).__webglTexture=G,U.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:se,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const se=U.get(b);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0};const _e=q.createFramebuffer();this.setRenderTarget=function(b,G=0,se=0){X=b,re=G,pe=se;let Z=null,ne=!1,Ie=!1;if(b){const Ee=U.get(b);if(Ee.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(q.FRAMEBUFFER,Ee.__webglFramebuffer),ee.copy(b.viewport),he.copy(b.scissor),ce=b.scissorTest,qe.viewport(ee),qe.scissor(he),qe.setScissorTest(ce),oe=-1;return}else if(Ee.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Ee.__hasExternalTextures)E.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(Ee.__boundDepthTexture!==De){if(De!==null&&U.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Ze=b.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Qe=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?Z=Qe[G][se]:Z=Qe[G],ne=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?Z=U.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[se]:Z=Qe,ee.copy(b.viewport),he.copy(b.scissor),ce=b.scissorTest}else ee.copy(Se).multiplyScalar(Te).floor(),he.copy(Fe).multiplyScalar(Te).floor(),ce=ot;if(se!==0&&(Z=_e),qe.bindFramebuffer(q.FRAMEBUFFER,Z)&&qe.drawBuffers(b,Z),qe.viewport(ee),qe.scissor(he),qe.setScissorTest(ce),ne){const Ee=U.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ee.__webglTexture,se)}else if(Ie){const Ee=G;for(let Ze=0;Ze<b.textures.length;Ze++){const Qe=U.get(b.textures[Ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ze,Qe.__webglTexture,se,Ee)}}else if(b!==null&&se!==0){const Ee=U.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ee.__webglTexture,se)}oe=-1},this.readRenderTargetPixels=function(b,G,se,Z,ne,Ie,Xe,Ee=0){if(!(b&&b.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){qe.bindFramebuffer(q.FRAMEBUFFER,Ze);try{const Qe=b.textures[Ee],De=Qe.format,it=Qe.type;if(b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ee),!At.textureFormatReadable(De)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(it)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-Z&&se>=0&&se<=b.height-ne&&q.readPixels(G,se,Z,ne,$.convert(De),$.convert(it),Ie)}finally{const Qe=X!==null?U.get(X).__webglFramebuffer:null;qe.bindFramebuffer(q.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,G,se,Z,ne,Ie,Xe,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if(G>=0&&G<=b.width-Z&&se>=0&&se<=b.height-ne){qe.bindFramebuffer(q.FRAMEBUFFER,Ze);const Qe=b.textures[Ee],De=Qe.format,it=Qe.type;if(b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ee),!At.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Je),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(G,se,Z,ne,$.convert(De),$.convert(it),0);const bt=X!==null?U.get(X).__webglFramebuffer:null;qe.bindFramebuffer(q.FRAMEBUFFER,bt);const kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await e_(q,kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Je),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer(Je),q.deleteSync(kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,se=0){const Z=Math.pow(2,-se),ne=Math.floor(b.image.width*Z),Ie=Math.floor(b.image.height*Z),Xe=G!==null?G.x:0,Ee=G!==null?G.y:0;E.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,Xe,Ee,ne,Ie),qe.unbindTexture()};const Ne=q.createFramebuffer(),nt=q.createFramebuffer();this.copyTextureToTexture=function(b,G,se=null,Z=null,ne=0,Ie=0){let Xe,Ee,Ze,Qe,De,it,Je,bt,kt;const w=b.isCompressedTexture?b.mipmaps[Ie]:b.image;if(se!==null)Xe=se.max.x-se.min.x,Ee=se.max.y-se.min.y,Ze=se.isBox3?se.max.z-se.min.z:1,Qe=se.min.x,De=se.min.y,it=se.isBox3?se.min.z:0;else{const rt=Math.pow(2,-ne);Xe=Math.floor(w.width*rt),Ee=Math.floor(w.height*rt),b.isDataArrayTexture?Ze=w.depth:b.isData3DTexture?Ze=Math.floor(w.depth*rt):Ze=1,Qe=0,De=0,it=0}Z!==null?(Je=Z.x,bt=Z.y,kt=Z.z):(Je=0,bt=0,kt=0);const k=$.convert(G.format),F=$.convert(G.type);let W;G.isData3DTexture?(E.setTexture3D(G,0),W=q.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(E.setTexture2DArray(G,0),W=q.TEXTURE_2D_ARRAY):(E.setTexture2D(G,0),W=q.TEXTURE_2D),qe.activeTexture(q.TEXTURE0),qe.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),qe.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),qe.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);const Re=qe.getParameter(q.UNPACK_ROW_LENGTH),ve=qe.getParameter(q.UNPACK_IMAGE_HEIGHT),Ue=qe.getParameter(q.UNPACK_SKIP_PIXELS),ft=qe.getParameter(q.UNPACK_SKIP_ROWS),at=qe.getParameter(q.UNPACK_SKIP_IMAGES);qe.pixelStorei(q.UNPACK_ROW_LENGTH,w.width),qe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,w.height),qe.pixelStorei(q.UNPACK_SKIP_PIXELS,Qe),qe.pixelStorei(q.UNPACK_SKIP_ROWS,De),qe.pixelStorei(q.UNPACK_SKIP_IMAGES,it);const ut=b.isDataArrayTexture||b.isData3DTexture,mt=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const rt=U.get(b),Yt=U.get(G),Ut=U.get(rt.__renderTarget),un=U.get(Yt.__renderTarget);qe.bindFramebuffer(q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let nn=0;nn<Ze;nn++)ut&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(b).__webglTexture,ne,it+nn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(G).__webglTexture,Ie,kt+nn)),q.blitFramebuffer(Qe,De,Xe,Ee,Je,bt,Xe,Ee,q.DEPTH_BUFFER_BIT,q.NEAREST);qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||b.isRenderTargetTexture||U.has(b)){const rt=U.get(b),Yt=U.get(G);qe.bindFramebuffer(q.READ_FRAMEBUFFER,Ne),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,nt);for(let Ut=0;Ut<Ze;Ut++)ut?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rt.__webglTexture,ne,it+Ut):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rt.__webglTexture,ne),mt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Yt.__webglTexture,Ie,kt+Ut):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Yt.__webglTexture,Ie),ne!==0?q.blitFramebuffer(Qe,De,Xe,Ee,Je,bt,Xe,Ee,q.COLOR_BUFFER_BIT,q.NEAREST):mt?q.copyTexSubImage3D(W,Ie,Je,bt,kt+Ut,Qe,De,Xe,Ee):q.copyTexSubImage2D(W,Ie,Je,bt,Qe,De,Xe,Ee);qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(W,Ie,Je,bt,kt,Xe,Ee,Ze,k,F,w.data):G.isCompressedArrayTexture?q.compressedTexSubImage3D(W,Ie,Je,bt,kt,Xe,Ee,Ze,k,w.data):q.texSubImage3D(W,Ie,Je,bt,kt,Xe,Ee,Ze,k,F,w):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,Je,bt,Xe,Ee,k,F,w.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,Je,bt,w.width,w.height,k,w.data):q.texSubImage2D(q.TEXTURE_2D,Ie,Je,bt,Xe,Ee,k,F,w);qe.pixelStorei(q.UNPACK_ROW_LENGTH,Re),qe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve),qe.pixelStorei(q.UNPACK_SKIP_PIXELS,Ue),qe.pixelStorei(q.UNPACK_SKIP_ROWS,ft),qe.pixelStorei(q.UNPACK_SKIP_IMAGES,at),Ie===0&&G.generateMipmaps&&q.generateMipmap(W),qe.unbindTexture()},this.initRenderTarget=function(b){U.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){re=0,pe=0,X=null,qe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Pe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Pe.createElement("svg",{ref:h,...qE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Eg("lucide",o),...f},[...u.map(([p,v])=>Pe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(s,e)=>{const t=Pe.forwardRef(({className:r,...o},l)=>Pe.createElement(KE,{ref:l,iconNode:e,className:Eg(`lucide-${$E(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Wt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=Wt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=Wt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Wt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Wt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Wt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=Wt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=Wt("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=Wt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Wt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Wt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Wt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Wt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Wt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=Wt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Wt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Wt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Wt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Wt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=Wt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=Wt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Wt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=Wt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Wt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Wt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Wt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=Wt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Wt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Wt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Wt("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Wt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Wt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Wt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=Wt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Wt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Wt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=Wt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Wt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Wt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),R0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},dw=({direction:s,className:e})=>{const r={none:T0,up:Ag,down:wg,left:bg,right:Tg,"up-left":QE,"up-right":ew,"down-left":ZE,"down-right":JE}[s]||T0;return m.jsx(r,{className:e})},Gn=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Jr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ri=s=>JSON.parse(JSON.stringify(s)),N0=(s,e)=>(s-e+540)%360-180,oc=s=>s==null||Number.isNaN(s)?null:(s%360+360)%360,P0=(s,e)=>s==null||e==null?null:oc(s-e),fw=s=>s&&typeof s.webkitCompassHeading=="number"?oc(s.webkitCompassHeading):s&&typeof s.alpha=="number"?oc(360-s.alpha):null,hw=(s,e)=>{if(!s||!e)return null;const t=s.physX??s.x,r=s.physY??s.y,o=e.physX??e.x,l=e.physY??e.y;return[t,r,o,l].some(u=>typeof u!="number")?null:oc(Math.atan2(o-t,r-l)*180/Math.PI)},I0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new Vf(s),l=new Gf(o,Math.max(8,s.length*12),e,12,!1),u=new ts({color:t,transparent:r<1,opacity:r});return new Qn(l,u)},D0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},L0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),pw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),mw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return!o||!t?e:o.fId!==t.fId?e+5:e+Math.hypot((t.physX||0)-(o.physX||0),(t.physY||0)-(o.physY||0))},0),U0=(s,e,t)=>s+(e-s)*t,gw=(s,e,t=.36)=>s?{...e,x:U0(s.x,e.x,t),y:U0(s.y,e.y,t)}:e,F0=(s=[],e=[],t=.36)=>e.map((r,o)=>gw(s[o],r,t)),xw=s=>{if(!s||s.length<2)return null;const e=new Vf(s),t=Math.max(pw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new Ts;for(let u=0;u<r;u++){const f=new Ts,h=new Qn(new sc(.14,.34,24),new ts({color:16777215,transparent:!0,opacity:.22})),p=new Qn(new sc(.09,.28,24),new ts({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},vw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ie(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},pa=(s="新導引專案")=>({projectName:s,lerpFactor:15}),fo=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],_w=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:pa(s),buildings:fo()}),jl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...pa(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function yw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var it,Je,bt,kt;const[r,o]=Pe.useState(e),[l,u]=Pe.useState(!1),[f,h]=Pe.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Pe.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Pe.useState({isOpen:!1,message:""}),[M,C]=Pe.useState(!1),[D,y]=Pe.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Pe.useRef(!1),[L,R]=Pe.useState(()=>{if(t)return[jl({})];try{const F=localStorage.getItem("arManager_projects");if(F){const W=JSON.parse(F);if(Array.isArray(W)&&W.length>0)return W}}catch(F){console.error("Project load error:",F)}let w=pa("預設導引專案"),k=fo();try{const F=localStorage.getItem("arManager_config");F&&(w={...w,...JSON.parse(F)});const W=localStorage.getItem("arManager_buildings");W&&(k=JSON.parse(W))}catch(F){console.error("Legacy AR data migration error:",F)}return[{id:`project_${Date.now()}`,name:w.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:w,buildings:k}]}),[P,V]=Pe.useState((it=L[0])==null?void 0:it.id),I=L.find(w=>w.id===P)||L[0],[O,T]=Pe.useState(()=>Ri((I==null?void 0:I.systemConfig)||pa())),[N,Y]=Pe.useState(()=>Ri((I==null?void 0:I.buildings)||fo())),[H,Q]=Pe.useState((Je=N[0])==null?void 0:Je.id),[re,pe]=Pe.useState((kt=(bt=N[0])==null?void 0:bt.floors[0])==null?void 0:kt.id),[X,oe]=Pe.useState(""),[J,ee]=Pe.useState(null),[he,ce]=Pe.useState(null),[B,le]=Pe.useState(null),[et,st]=Pe.useState(!1),[Te,ue]=Pe.useState(!1),[be,Se]=Pe.useState(!1),[Fe,ot]=Pe.useState(null),[gt,Et]=Pe.useState(null),[St,Ot]=Pe.useState(!1),[Kt,Tt]=Pe.useState({x:0,y:0}),[zt,Nt]=Pe.useState({x:0,y:0}),[Gt,q]=Pe.useState(!1),[It,wt]=Pe.useState(!1),[At,qe]=Pe.useState([]),[Ht,U]=Pe.useState(!1),[E,ae]=Pe.useState([]),[Me,Ae]=Pe.useState([]),Ve=Pe.useRef(null),We=Pe.useRef(null),xe=Pe.useRef(null),we=Pe.useRef(null),[Ce,tt]=Pe.useState({x:0,y:0,scale:1}),Ye=w=>{var F,W,Re;if(!Array.isArray(w==null?void 0:w.buildings)||w.buildings.length===0)throw new Error("雲端目前沒有可載入的 AR 平面圖資料。");const k=jl(w);return R([k]),V(k.id),T(Ri(k.systemConfig)),Y(Ri(k.buildings)),Q((F=k.buildings[0])==null?void 0:F.id),pe((Re=(W=k.buildings[0])==null?void 0:W.floors[0])==null?void 0:Re.id),oe(""),ee(null),ce(null),ot(null),tt({x:0,y:0,scale:1}),localStorage.setItem("arManager_lastCloudSyncAt",k.updatedAt||new Date().toISOString()),k};Pe.useEffect(()=>{const w=k=>{var W;const F=(W=k==null?void 0:k.detail)==null?void 0:W.tab;["map","list","settings","export"].includes(F)&&_e(F)};return window.addEventListener("ar-manager:set-tab",w),()=>window.removeEventListener("ar-manager:set-tab",w)},[]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(L))}catch(w){w.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[L,t]),Pe.useEffect(()=>{if(!t)return;let w=!1;return(async()=>{const F=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(F.ok)return F.json();const W=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!W.ok)throw new Error(`Unable to load AR data: ${W.status}`);return W.json()})().then(F=>{var Re,ve,Ue;if(w)return;const W=jl(F);R([W]),V(W.id),T(Ri(W.systemConfig)),Y(Ri(W.buildings)),Q((Re=W.buildings[0])==null?void 0:Re.id),pe((Ue=(ve=W.buildings[0])==null?void 0:ve.floors[0])==null?void 0:Ue.id)}).catch(F=>{console.warn("Published AR data unavailable",F),w||(R([jl({})]),T(pa("AR導覽")),Y([]))}),()=>{w=!0}},[t]),Pe.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let w=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(k=>{if(!k.ok)throw new Error(`Unable to load AR data: ${k.status}`);return k.json()}).then(k=>{w||!Array.isArray(k==null?void 0:k.buildings)||k.buildings.length===0||Ye(k)}).catch(k=>console.warn("Published AR admin seed unavailable",k)),()=>{w=!0}},[t]),Pe.useEffect(()=>{var k,F,W;if(t||!I)return;_.current=!0;const w=Ri(I.buildings||fo());T(Ri(I.systemConfig||pa(I.name))),Y(w),Q((k=w[0])==null?void 0:k.id),pe((W=(F=w[0])==null?void 0:F.floors[0])==null?void 0:W.id),ee(null),ce(null),oe(""),tt({x:0,y:0,scale:1})},[P,t]),Pe.useEffect(()=>{if(!t&&P){if(_.current){_.current=!1;return}R(w=>w.map(k=>k.id===P?{...k,name:O.projectName||k.name,systemConfig:Ri(O),buildings:Ri(N),updatedAt:new Date().toISOString()}:k))}},[P,N,O,t]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(N))}catch(w){w.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[N,t]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(O))}catch(w){console.error("Config save error:",w)}},[O,t]),Pe.useEffect(()=>{var k;const w=N.find(F=>F.id===H);w?w.floors.find(F=>F.id===re)||w.floors.length>0&&pe(w.floors[0].id):N.length>0&&(Q(N[0].id),pe((k=N[0].floors[0])==null?void 0:k.id))},[N,H,re]),Pe.useEffect(()=>{X===re&&oe("")},[re,X]),Pe.useEffect(()=>{st(!1)},[J,he]),Pe.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||C(!0)},[]);const Oe=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(k=>k.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),C(!1)},Ke=N.find(w=>w.id===H)||N[0],He=Ke==null?void 0:Ke.floors.find(w=>w.id===re),Pt=(He==null?void 0:He.markers)||[],$=(He==null?void 0:He.waypoints)||[],Ge=(He==null?void 0:He.edges)||[],me=Jr(He),lt=(w,k,F=!0)=>{Y(W=>{let Re=null,ve=null,Ue=null;if(W.forEach(rt=>rt.floors.forEach(Yt=>{const Ut=F?Yt.markers:Yt.waypoints,un=Ut==null?void 0:Ut.find(nn=>nn.id===w);un&&(Re=un,ve=rt.id,Ue=Yt)})),!Re)return W;const ft=k.shaftId!==void 0?k.shaftId:Re.shaftId,ut=(k.isVerticalShaft!==void 0?k.isVerticalShaft:Re.isVerticalShaft)&&ft,mt=Jr(Ue);return W.map(rt=>rt.id!==ve&&!ut?rt:{...rt,floors:rt.floors.map(Yt=>{let Ut=F?[...Yt.markers||[]]:[...Yt.waypoints||[]];const un=nn=>{const $n={...nn,...k};if((k.x!==void 0||k.y!==void 0)&&Yt.id!==Ue.id){const ht=Jr(Yt);if(k.x!==void 0){const Bt=mt.blX+k.x*(mt.trX-mt.blX);$n.x=ht.trX!==ht.blX?(Bt-ht.blX)/(ht.trX-ht.blX):.5}if(k.y!==void 0){const Bt=mt.trY-k.y*(mt.trY-mt.blY);$n.y=ht.trY!==ht.blY?(ht.trY-Bt)/(ht.trY-ht.blY):.5}}return $n};return ut?Ut=Ut.map(nn=>nn.shaftId===ft||nn.id===w?un(nn):nn):Ut=Ut.map(nn=>nn.id===w?un(nn):nn),F?{...Yt,markers:Ut}:{...Yt,waypoints:Ut}})})})},ke=(w,k,F)=>lt(w,{[k]:F},!0),ye=(w,k,F)=>lt(w,{[k]:F},!1),ct=(w,k,F=!0)=>{if(k){const W=F?"shaft_m_":"shaft_wp_",ve={isVerticalShaft:!0,shaftId:w.shaftId||`${W}${Date.now()}`,linkedFloorIds:[re]};F||(ve.sourceFloorId=re),lt(w.id,ve,F)}else{const W=w.shaftId;Y(Re=>Re.map(ve=>ve.id!==H?ve:{...ve,floors:ve.floors.map(Ue=>{const ft=at=>(at||[]).filter(ut=>!(Ue.id!==re&&ut.shaftId===W)).map(ut=>ut.id===w.id?{...ut,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:ut);return F?{...Ue,markers:ft(Ue.markers)}:{...Ue,waypoints:ft(Ue.waypoints)}})}))}},Mt=(w,k,F,W=!0)=>{const Re=w.shaftId,ve=w.linkedFloorIds||[re],Ue=F?[...ve,k]:ve.filter(ft=>ft!==k);Y(ft=>ft.map(at=>at.id!==H?at:{...at,floors:at.floors.map(ut=>{let mt=W?[...ut.markers||[]]:[...ut.waypoints||[]];if(F&&ut.id===k){const rt=Jr(ut),Yt=Jr(He),Ut=Yt.blX+w.x*(Yt.trX-Yt.blX),un=Yt.trY-w.y*(Yt.trY-Yt.blY),nn=rt.trX!==rt.blX?(Ut-rt.blX)/(rt.trX-rt.blX):.5,$n=rt.trY!==rt.blY?(rt.trY-un)/(rt.trY-rt.blY):.5,ht=W?"marker_":"wp_";mt.push({...w,id:`${ht}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${ut.id}`,x:nn,y:$n,linkedFloorIds:Ue})}else!F&&ut.id===k?mt=mt.filter(rt=>rt.shaftId!==Re):mt=mt.map(rt=>rt.shaftId===Re?{...rt,linkedFloorIds:Ue}:rt);return W?{...ut,markers:mt}:{...ut,waypoints:mt}})}))},Xt=w=>{let k=null,F=new Set([w]);N.forEach(W=>W.floors.forEach(Re=>{var ve;Re.markers.forEach(Ue=>{Ue.id===w&&Ue.isVerticalShaft&&(k=Ue.shaftId)}),(ve=Re.waypoints)==null||ve.forEach(Ue=>{Ue.id===w&&Ue.isVerticalShaft&&(k=Ue.shaftId)})})),k&&N.forEach(W=>W.floors.forEach(Re=>{var ve;Re.markers.forEach(Ue=>{Ue.shaftId===k&&F.add(Ue.id)}),(ve=Re.waypoints)==null||ve.forEach(Ue=>{Ue.shaftId===k&&F.add(Ue.id)})})),Y(W=>W.map(Re=>({...Re,floors:Re.floors.map(ve=>({...ve,markers:(ve.markers||[]).filter(Ue=>!F.has(Ue.id)),waypoints:(ve.waypoints||[]).filter(Ue=>!F.has(Ue.id)),edges:(ve.edges||[]).filter(Ue=>!F.has(Ue.start)&&!F.has(Ue.end))}))}))),F.has(J)&&ee(null),F.has(he)&&ce(null),F.has(Fe)&&(ot(null),Et(null)),st(!1)},$t=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:w=>{if(!w)return;const k=`b_${Date.now()}`,F=`f_${Date.now()}`;Y(W=>[...W,{id:k,name:w,floors:[{id:F,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),Q(k),pe(F)}})},En=()=>{Ke&&h({isOpen:!0,title:`新增 ${Ke.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:w=>{if(!w)return;const k=`f_${Date.now()}`,F=He?{...Jr(He)}:{blX:0,blY:0,trX:100,trY:100};Y(W=>W.map(Re=>Re.id===H?{...Re,floors:[...Re.floors,{id:k,name:w,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:F}]}:Re)),pe(k)}})},In=w=>{const k=w.target.files[0],F=w.target;if(k&&H&&re){const W=H,Re=re,ve=new FileReader;ve.onload=Ue=>{R0(Ue.target.result,1600,ft=>{Y(at=>at.map(ut=>ut.id===W?{...ut,floors:ut.floors.map(mt=>mt.id===Re?{...mt,imageUrl:ft}:mt)}:ut)),q(!1)})},ve.readAsDataURL(k)}F.value=""},ci=(w,k)=>{const F=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,W={id:F,x:w,y:k,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:re};Y(Re=>Re.map(ve=>ve.id===H?{...ve,floors:ve.floors.map(Ue=>{if(Ue.id!==re)return Ue;const ft=Fe?[...Ue.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Fe,end:F}]:Ue.edges||[];return{...Ue,waypoints:[...Ue.waypoints||[],W],edges:ft}})}:ve)),ot(F)},_i=w=>{if(Fe===w){ot(null),Et(null);return}Fe&&Fe!==w&&(Ge.some(F=>F.start===Fe&&F.end===w||F.end===Fe&&F.start===w)||Y(F=>F.map(W=>W.id===H?{...W,floors:W.floors.map(Re=>Re.id===re?{...Re,edges:[...Re.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Fe,end:w}]}:Re)}:W))),ot(w)},Di=(w,k)=>{for(let W of Pt)if(Math.hypot(W.x-w,W.y-k)<.03)return W.id;for(let W of $)if(Math.hypot(W.x-w,W.y-k)<.03)return W.id;return null};Pe.useEffect(()=>{const w=k=>{k.key==="Escape"&&Te&&(ot(null),Et(null))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[Te]);const Fn=(w,k)=>{const F={},W=[],Re={};N.forEach(ht=>{ht.floors.forEach(Bt=>{var Nr,Fi;const pn=Bt.bounds||{blX:0,blY:0,trX:100,trY:100},Ui=(an,yo)=>({physX:pn.blX+an*(pn.trX-pn.blX),physY:pn.trY-yo*(pn.trY-pn.blY)});Bt.markers.forEach(an=>{F[an.id]={...an,...Ui(an.x,an.y),fId:Bt.id,fName:Bt.name},an.isVerticalShaft&&an.shaftId&&(Re[an.shaftId]||(Re[an.shaftId]=[]),Re[an.shaftId].push(an.id))}),(Nr=Bt.waypoints)==null||Nr.forEach(an=>{F[an.id]={...an,...Ui(an.x,an.y),fId:Bt.id,fName:Bt.name},an.isVerticalShaft&&an.shaftId&&(Re[an.shaftId]||(Re[an.shaftId]=[]),Re[an.shaftId].push(an.id))}),(Fi=Bt.edges)==null||Fi.forEach(an=>W.push(an))})});const ve={};Object.keys(F).forEach(ht=>{ve[ht]={}}),W.forEach(ht=>{if(F[ht.start]&&F[ht.end]){const Bt=Math.hypot(F[ht.start].physX-F[ht.end].physX,F[ht.start].physY-F[ht.end].physY);ve[ht.start][ht.end]=Bt,ve[ht.end][ht.start]=Bt}}),Object.values(Re).forEach(ht=>{for(let Bt=0;Bt<ht.length;Bt++)for(let pn=Bt+1;pn<ht.length;pn++)ve[ht[Bt]][ht[pn]]=5,ve[ht[pn]][ht[Bt]]=5});const Ue=ht=>Object.keys(ve[ht]).length>0;let ft=null,at=1/0,ut=null,mt=1/0;if(Object.values(F).forEach(ht=>{if(Ue(ht.id)){if(ht.fId===w.fId){const Bt=Math.hypot(ht.x-w.x,ht.y-w.y);Bt<at&&(at=Bt,ft=ht.id)}if(ht.fId===k.fId){const Bt=Math.hypot(ht.x-k.x,ht.y-k.y);Bt<mt&&(mt=Bt,ut=ht.id)}}}),!ft||!ut){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),ae([]),Ae([]);return}const rt={},Yt={},Ut=new Set(Object.keys(F));for(Object.keys(F).forEach(ht=>{rt[ht]=1/0,Yt[ht]=null}),rt[ft]=0;Ut.size>0;){let ht=null;if(Ut.forEach(Bt=>{(ht===null||rt[Bt]<rt[ht])&&(ht=Bt)}),rt[ht]===1/0||ht===ut)break;Ut.delete(ht),Object.entries(ve[ht]).forEach(([Bt,pn])=>{if(Ut.has(Bt)){const Ui=rt[ht]+pn;Ui<rt[Bt]&&(rt[Bt]=Ui,Yt[Bt]=ht)}})}const un=[];let nn=ut;for(;nn;)un.unshift(nn),nn=Yt[nn];if(un.length===0||un[0]!==ft){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),ae([]),Ae([]);return}const $n=[{x:w.x,y:w.y,fId:w.fId,fName:w.fName,isVirtual:!0},...un.map(ht=>F[ht]),{x:k.x,y:k.y,fId:k.fId,fName:k.fName,isVirtual:!0}];Ae($n)};Pe.useEffect(()=>{const w=Ve.current;if(!w||r!=="map")return;const k=F=>{F.preventDefault();const W=w.getBoundingClientRect(),Re=F.clientX-W.left,ve=F.clientY-W.top,Ue=F.deltaY<0?1.1:.9;tt(ft=>{const at=Math.max(.1,Math.min(10,ft.scale*Ue)),ut=at/ft.scale;return{x:Re-(Re-ft.x)*ut,y:ve-(ve-ft.y)*ut,scale:at}})};return w.addEventListener("wheel",k,{passive:!1}),()=>w.removeEventListener("wheel",k)},[r]);const Wn=w=>{w.button!==void 0&&w.button!==0||w.target.closest(".marker-pin")||w.target.closest(".waypoint-pin")||(Ot(!0),Tt({x:w.clientX-Ce.x,y:w.clientY-Ce.y}),Nt({x:w.clientX,y:w.clientY}),w.target.setPointerCapture(w.pointerId))},Li=w=>{if(St)tt(k=>({...k,x:w.clientX-Kt.x,y:w.clientY-Kt.y}));else if(Te&&Fe&&We.current){const k=We.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(w.clientX-k.left)/k.width)),W=Math.max(0,Math.min(1,(w.clientY-k.top)/k.height));Et({x:F,y:W})}else if(B&&We.current){const k=We.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(w.clientX-k.left)/k.width)),W=Math.max(0,Math.min(1,(w.clientY-k.top)/k.height));B.startsWith("marker_")?(ke(B,"x",F),ke(B,"y",W)):B.startsWith("wp_")&&(ye(B,"x",F),ye(B,"y",W))}},Xn=w=>{if(St&&(Ot(!1),w.target.releasePointerCapture(w.pointerId),Math.hypot(w.clientX-zt.x,w.clientY-zt.y)<5)){if(!(He!=null&&He.imageUrl)||!We.current)return;const F=We.current.getBoundingClientRect();let W=Math.max(0,Math.min(1,(w.clientX-F.left)/F.width)),Re=Math.max(0,Math.min(1,(w.clientY-F.top)/F.height));if(Ht){const ve={x:W,y:Re,fId:re,fName:He==null?void 0:He.name},Ue=E.length>=2?[ve]:[...E,ve];ae(Ue),Ue.length===1&&Ae([]),Ue.length===2&&Fn(Ue[0],Ue[1])}else if(Te){const ve=Di(W,Re);ve?_i(ve):ci(W,Re)}else if(Gt){const ve=N.reduce((ft,at)=>ft+at.floors.reduce((ut,mt)=>ut+mt.markers.length,0),0),Ue={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${ve+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:W,y:Re,imageUrl:null,enabled:!0,recognitionStatus:"untested"};Y(ft=>ft.map(at=>at.id===H?{...at,floors:at.floors.map(ut=>ut.id===re?{...ut,markers:[...ut.markers,Ue]}:ut)}:at)),ee(Ue.id),ce(null),q(!1)}else It?qe(ve=>ve.length>=2?[{x:W,y:Re}]:[...ve,{x:W,y:Re}]):(ee(null),ce(null))}},gn=w=>{const k=w.target.files[0],F=w.target;if(k&&J){const W=J,Re=new FileReader;Re.onload=ve=>{R0(ve.target.result,800,Ue=>{ke(W,"imageUrl",Ue),ke(W,"recognitionStatus","untested")})},Re.readAsDataURL(k)}F.value=""},Yn=(w,k,F)=>{Q(w),pe(k),ee(F),ce(null),o("map")},ei=async()=>{const w={version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name)||"AR導覽",description:(I==null?void 0:I.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ri(O),buildings:Ri(N)};R(k=>k.map(F=>F.id===P?{...F,name:w.project.name,systemConfig:w.systemConfig,buildings:w.buildings,updatedAt:w.project.updatedAt}:F));try{const k=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}),F=await k.json().catch(()=>({}));if(!k.ok)throw new Error(F.error||`Save failed: ${k.status}`);localStorage.setItem("arManager_lastCloudSyncAt",w.project.updatedAt),x({isOpen:!0,message:`「${w.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(k){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${k.message}`})}},yi=async()=>{try{const w=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(!w.ok)throw new Error(`Load failed: ${w.status}`);const k=await w.json(),F=Ye(k);x({isOpen:!0,message:`已從雲端載入「${F.name}」。桌機與手機現在會使用同一份已上架的平面圖、AR 點位與路網資料。`})}catch(w){x({isOpen:!0,message:`無法從雲端載入 AR 資料：${w.message}`})}},Si=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${L.length+1}`,onSubmit:w=>{if(!w)return;const k=_w(w);R(F=>[...F,k]),V(k.id),o("map")}})},ui=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(I==null?void 0:I.name)||O.projectName||"",onSubmit:w=>{w&&(T(k=>({...k,projectName:w})),R(k=>k.map(F=>F.id===P?{...F,name:w,systemConfig:{...F.systemConfig,projectName:w},updatedAt:new Date().toISOString()}:F)))}})},lr=()=>{if(L.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(I==null?void 0:I.name)||O.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(w=>{var F;const k=w.filter(W=>W.id!==P);return V((F=k[0])==null?void 0:F.id),k})}})},cr=()=>{Y(fo()),ee(null),ce(null),tt({x:0,y:0,scale:1}),q(!1),ue(!1),Se(!1),ot(null),Et(null),U(!1),ae([]),Ae([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},j=()=>{const w=(O.projectName||(I==null?void 0:I.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),k="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name),description:(I==null?void 0:I.description)||"",updatedAt:I==null?void 0:I.updatedAt},systemConfig:O,buildings:N},null,2)),F=document.createElement("a");F.setAttribute("href",k),F.setAttribute("download",`${w}_ar_config_v7.json`),document.body.appendChild(F),F.click(),F.remove()},Le=()=>{if(!(He!=null&&He.imageUrl)||!Ve.current||!We.current){tt({x:0,y:0,scale:1});return}const w=Ve.current,k=We.current.querySelector("img");if(!k||k.naturalWidth===0)return;const{width:F,height:W}=w.getBoundingClientRect(),Re=Math.min(F/k.naturalWidth,W/k.naturalHeight,1)*.9;tt({x:(F-k.naturalWidth*Re)/2,y:(W-k.naturalHeight*Re)/2,scale:Re})},_e=w=>{o(w),u(!1),q(!1),wt(!1),ue(!1),Se(!1),ot(null),Et(null),U(!1),ae([]),Ae([])};let Ne=null,nt=null;N.forEach(w=>w.floors.forEach(k=>{var F;k.markers.forEach(W=>{W.id===J&&(Ne=W,w.name,k.name)}),(F=k.waypoints)==null||F.forEach(W=>{W.id===he&&(nt=W,w.name,k.name)})}));let b=0,G=0;const se=document.getElementById("current-map-image"),Z=me.trX-me.blX,ne=me.trY-me.blY;if(se&&Z>0){const w=se.offsetWidth*Ce.scale;if(w>0){const k=Z/w,F=100*k;b=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Re=>Re<=F)||.5,G=b/k}}const Ie=N.reduce((w,k)=>w+k.floors.reduce((F,W)=>F+(W.markers||[]).length,0),0),Xe=N.reduce((w,k)=>w+k.floors.length,0),Ee=()=>m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[m.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[m.jsx("select",{value:P,onChange:w=>V(w.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:L.map(w=>m.jsx("option",{value:w.id,className:"bg-slate-950",children:w.name},w.id))}),m.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",L.length," 個專案 · ",N.length," 棟建築 · ",Xe," 個樓層 · ",Ie," 個 AR 點位"]})]})]}),m.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[m.jsxs("button",{onClick:Si,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Gl,{className:"w-4 h-4"}),"新增專案"]}),m.jsxs("button",{onClick:ui,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Nd,{className:"w-4 h-4"}),"編輯"]}),m.jsxs("button",{onClick:ei,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Jl,{className:"w-4 h-4"}),"儲存"]}),m.jsxs("button",{onClick:ei,className:"inline-flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"把目前這台裝置的 AR 資料同步到雲端，讓其他裝置可以載入",children:[m.jsx(C0,{className:"w-4 h-4"}),"同步雲端"]}),m.jsxs("button",{onClick:yi,className:"inline-flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"從雲端載入已上架的 AR 資料，會覆蓋目前後台顯示的本機暫存",children:[m.jsx(ao,{className:"w-4 h-4"}),"從雲端載入"]}),m.jsxs("button",{onClick:lr,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Pd,{className:"w-4 h-4"}),"刪除"]})]})]}),m.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),Ze=()=>{const w=new Set,k=N.flatMap(F=>F.floors.flatMap(W=>(W.markers||[]).reduce((Re,ve)=>{if(ve.isVerticalShaft&&ve.shaftId){if(w.has(ve.shaftId))return Re;w.add(ve.shaftId)}return Re.push({...ve,bId:F.id,fId:W.id,buildingName:F.name,floorName:W.name}),Re},[])));return m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[Ee(),m.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(co,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),m.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",k.length," 組節點"]})]}),k.length===0?m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[m.jsx(co,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),m.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),m.jsx("button",{onClick:()=>_e("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"md:hidden space-y-3",children:k.map(F=>m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[m.jsxs("div",{className:"flex items-start gap-3",children:[F.imageUrl?m.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):m.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:m.jsx(w0,{className:"w-5 h-5"})}),m.jsxs("div",{className:"min-w-0 flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between gap-2",children:[m.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:F.code}),m.jsx(bf,{status:F.recognitionStatus})]}),m.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:F.title||"未命名點位"}),m.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[F.buildingName," · ",F.floorName]})]})]}),m.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[m.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${F.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:F.enabled?"已啟用":"未啟用"}),m.jsxs("button",{onClick:()=>Yn(F.bId,F.fId,F.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[m.jsx(Nd,{className:"w-4 h-4"}),"編輯"]})]})]},F.id))}),m.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[m.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:m.jsxs("tr",{children:[m.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),m.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),m.jsx("tbody",{className:"divide-y divide-slate-800",children:k.map(F=>{var Re;const W=F.isVerticalShaft?(Re=N.find(ve=>ve.id===F.bId))==null?void 0:Re.floors.filter(ve=>{var Ue;return(Ue=F.linkedFloorIds)==null?void 0:Ue.includes(ve.id)}).sort((ve,Ue)=>Gn(Ue.name)-Gn(ve.name)).map(ve=>ve.name).join(", "):F.floorName;return m.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${F.isVerticalShaft?"bg-purple-900/5":""}`,children:[m.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[m.jsx("div",{className:"text-xs font-bold text-slate-300",children:F.buildingName}),m.jsx("div",{className:`text-[10px] mt-0.5 ${F.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:W})]}),m.jsx("td",{className:"px-4 py-4",children:F.imageUrl?m.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):m.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:m.jsx(w0,{className:"w-4 h-4"})})}),m.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[m.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:F.code}),F.isVerticalShaft?m.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[m.jsx(_s,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):F.arrowDirection!=="none"&&m.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[m.jsx(dw,{direction:F.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),m.jsxs("td",{className:"px-4 py-4",children:[m.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:F.title||"未命名"}),m.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:F.description||"無描述"})]}),m.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:F.enabled?m.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):m.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),m.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:m.jsx(bf,{status:F.recognitionStatus})}),m.jsx("td",{className:"px-4 py-4 text-right",children:m.jsx("button",{onClick:()=>Yn(F.bId,F.fId,F.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:m.jsx(Nd,{className:"w-4 h-4"})})})]},F.id)})})]})})})]})]})})},Qe=()=>m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[Ee(),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center mb-2",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(A0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),m.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[m.jsx(E0,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),m.jsxs("div",{className:"space-y-4 md:space-y-5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),m.jsx("input",{type:"text",value:O.projectName,onChange:w=>T({...O,projectName:w.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),m.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[m.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),m.jsx("input",{type:"range",min:"5",max:"50",value:O.lerpFactor,onChange:w=>T({...O,lerpFactor:parseInt(w.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),m.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[m.jsx(M0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),m.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),m.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),m.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),m.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>cr()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),De=()=>m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[Ee(),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center mb-2",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(ao,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),m.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.length}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((w,k)=>w+k.floors.length,0)}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((w,k)=>w+k.floors.reduce((F,W)=>F+(W.markers||[]).length,0),0)}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[m.jsx(M0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),m.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",m.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),m.jsxs("button",{onClick:j,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[m.jsx(ao,{className:"w-5 h-5"}),m.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?m.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:m.jsx(O0,{buildings:N,systemConfig:O,onMenuClick:()=>{}})}):m.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&m.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(ha,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),m.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),m.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:m.jsx(ys,{className:"w-6 h-6"})})]}),m.jsxs("nav",{className:"p-4 space-y-2",children:[m.jsx(Wl,{icon:m.jsx(b0,{}),label:"平面圖管理",active:r==="map",onClick:()=>_e("map")}),m.jsx(Wl,{icon:m.jsx(co,{}),label:"點位列表",active:r==="list",onClick:()=>_e("list")}),m.jsx(Wl,{icon:m.jsx(A0,{}),label:"系統設定",active:r==="settings",onClick:()=>_e("settings")}),m.jsx(Wl,{icon:m.jsx(ao,{}),label:"匯出JSON",active:r==="export",onClick:()=>_e("export")})]})]}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:m.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&m.jsx(O0,{buildings:N,systemConfig:O,onMenuClick:()=>u(!0)}),r==="list"&&Ze(),r==="settings"&&Qe(),r==="export"&&De(),r==="map"&&m.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[m.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-56 lg:right-72 z-40 flex flex-wrap items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-visible",children:[!s&&m.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-5 h-5"})}),m.jsxs("div",{className:"flex items-center",children:[m.jsx(ha,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),m.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:P,onChange:w=>V(w.target.value),children:L.map(w=>m.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),m.jsx("button",{onClick:Si,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:m.jsx(Gl,{className:"w-4 h-4"})}),m.jsx("button",{onClick:ei,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:m.jsx(Jl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),m.jsxs("div",{className:"flex items-center",children:[m.jsx(tw,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),m.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:H,onChange:w=>Q(w.target.value),children:N.map(w=>m.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),m.jsx("button",{onClick:$t,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:m.jsx(Gl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),Ke&&m.jsxs("div",{className:"flex items-center",children:[m.jsx(iw,{className:"w-4 h-4 text-slate-500 mr-2"}),m.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:re,onChange:w=>pe(w.target.value),children:Ke.floors.slice().sort((w,k)=>Gn(k.name)-Gn(w.name)).map(w=>m.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),m.jsx("button",{onClick:En,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:m.jsx(Gl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),m.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[m.jsx(nw,{className:"w-4 h-4 text-slate-500 mr-1"}),m.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:X,onChange:w=>oe(w.target.value),children:[m.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),N.flatMap(w=>w.floors.filter(k=>k.id!==re).sort((k,F)=>Gn(F.name)-Gn(k.name)).map(k=>m.jsxs("option",{value:k.id,className:"bg-slate-900",children:[w.name,"-",k.name]},k.id)))]})]})]}),m.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[m.jsxs("button",{onClick:yi,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30",title:"從雲端載入已上架的 AR 資料",children:[m.jsx(ao,{className:"w-5 h-5"}),m.jsx("span",{children:"載入雲端"})]}),m.jsxs("button",{onClick:ei,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-green-500/10 hover:bg-green-500/20 text-green-300 border border-green-500/30",title:"把目前這台裝置的 AR 資料同步到雲端",children:[m.jsx(E0,{className:"w-5 h-5"}),m.jsx("span",{children:"同步雲端"})]}),m.jsxs("button",{onClick:()=>{He!=null&&He.imageUrl&&(U(!Ht),ue(!1),Se(!1),q(!1),wt(!1),ot(null),ee(null),ce(null),Et(null),ae([]),Ae([]))},disabled:!(He!=null&&He.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Ht?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Ht?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(S0,{className:"w-5 h-5"}),m.jsx("span",{children:"路網測試"})]}),(He==null?void 0:He.imageUrl)&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),m.jsx("button",{onClick:()=>{Se(!be),ue(!1),U(!1),q(!1),wt(!1),ot(null),ee(null),ce(null),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${be?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:be?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(_s,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{ue(!Te),Se(!1),U(!1),q(!1),wt(!1),ot(null),ee(null),ce(null),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Te?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Te?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(ow,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{wt(!It),Se(!1),U(!1),q(!1),ue(!1),qe([]),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${It?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:It?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(lw,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{q(!Gt),Se(!1),U(!1),wt(!1),ue(!1),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Gt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Gt?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(co,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>y({isOpen:!0,blX:me.blX,blY:me.blY,trX:me.trX,trY:me.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:m.jsx(ha,{className:"w-5 h-5"})})]}),m.jsx("input",{type:"file",ref:xe,onChange:In,className:"hidden",accept:"image/*"}),m.jsx("button",{onClick:()=>xe.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:m.jsx(C0,{className:"w-5 h-5"})})]}),m.jsxs("div",{ref:Ve,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Te?"cursor-crosshair":be?"cursor-pointer":Gt||It||Ht?"cursor-crosshair":St?"cursor-grabbing":"cursor-grab"}`,onPointerDown:Wn,onPointerMove:Li,onPointerUp:Xn,onPointerCancel:Xn,children:[He&&m.jsxs("div",{className:"absolute left-4 top-24 md:top-20 z-30 rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(Ke==null?void 0:Ke.name)||"目前場域"," / ",He.name||"未命名樓層"]}),m.jsxs("div",{ref:We,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Ce.x}px, ${Ce.y}px) scale(${Ce.scale})`},children:[X&&(()=>{let w=null;if(N.forEach(Ue=>Ue.floors.forEach(ft=>{ft.id===X&&(w=ft)})),!w)return null;const k=Jr(w),F=Z!==0?(k.trX-k.blX)/Z:1,W=ne!==0?(k.trY-k.blY)/ne:1,Re=Z!==0?(k.blX-me.blX)/Z:0,ve=ne!==0?(me.trY-k.trY)/ne:0;return m.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Re*100}%`,top:`${ve*100}%`,width:`${F*100}%`,height:`${W*100}%`,opacity:.4},children:[w.imageUrl&&m.jsx("img",{src:w.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),w.markers.map(Ue=>m.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ue.x*100}%`,top:`${Ue.y*100}%`},children:m.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:m.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Ce.scale)})`},children:Ue.code})})},Ue.id))]})})(),(He==null?void 0:He.imageUrl)&&m.jsx("img",{id:"current-map-image",src:He.imageUrl,alt:"Floor Plan",onLoad:Le,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${X?"opacity-70 mix-blend-screen":"opacity-100"}`}),m.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[m.jsx("defs",{children:m.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:m.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),Ge.map(w=>{const k=Pt.find(W=>W.id===w.start)||$.find(W=>W.id===w.start),F=Pt.find(W=>W.id===w.end)||$.find(W=>W.id===w.end);return k&&F?m.jsx("line",{x1:`${k.x*100}%`,y1:`${k.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ce.scale),strokeOpacity:"0.7"},w.id):null}),Te&&Fe&&gt&&(()=>{const w=Pt.find(k=>k.id===Fe)||$.find(k=>k.id===Fe);return w?m.jsx("line",{x1:`${w.x*100}%`,y1:`${w.y*100}%`,x2:`${gt.x*100}%`,y2:`${gt.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ce.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Ht&&Me.length>0&&Me.map((w,k)=>{if(k===Me.length-1)return null;const F=Me[k+1],W=[];return w.fId===re&&F.fId===re?W.push(m.jsx("line",{x1:`${w.x*100}%`,y1:`${w.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Ce.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${k}`)):w.fId===re&&F.fId!==re?W.push(m.jsxs("g",{children:[m.jsxs("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:12/Math.max(.5,Ce.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Ce.scale),children:[m.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ce.scale),to:35/Math.max(.5,Ce.scale),dur:"1.5s",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),m.jsx("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:6/Math.max(.5,Ce.scale),fill:"#ef4444"}),m.jsxs("text",{x:`${w.x*100}%`,y:`${w.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Ce.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",F.fName]})]},`leave_${k}`)):w.fId!==re&&F.fId===re&&W.push(m.jsxs("g",{children:[m.jsxs("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:12/Math.max(.5,Ce.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Ce.scale),children:[m.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ce.scale),to:35/Math.max(.5,Ce.scale),dur:"1.5s",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),m.jsx("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:6/Math.max(.5,Ce.scale),fill:"#22c55e"}),m.jsxs("text",{x:`${F.x*100}%`,y:`${F.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Ce.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",w.fName]})]},`enter_${k}`)),m.jsx(Af.Fragment,{children:W},`testfrag_${k}`)})]}),$.map(w=>{const k=he===w.id,F=Fe===w.id,W=w.isVerticalShaft&&w.sourceFloorId&&w.sourceFloorId!==re;let Re="bg-orange-500",ve="border-white",Ue="";return w.isVerticalShaft&&(Re="bg-green-500"),F?(Re="bg-white",ve=W?"border-green-500":"border-orange-500",Ue=W?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):k&&(ve="border-cyan-400 border-2",Ue="shadow-[0_0_10px_cyan]"),m.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${k?"z-40":""}`,style:{left:`${w.x*100}%`,top:`${w.y*100}%`},onPointerDown:ft=>{ft.stopPropagation(),ft.button===0&&(Te?_i(w.id):be?(w.isVerticalShaft||ct(w,!0,!1),ee(null),ce(w.id)):!Ht&&!It&&!St&&!Gt&&(ee(null),ce(w.id),le(w.id),ft.target.setPointerCapture(ft.pointerId)))},onPointerUp:ft=>{ft.stopPropagation(),ft.target.releasePointerCapture(ft.pointerId)},onContextMenu:ft=>{ft.preventDefault(),Te?Xt(w.id):be?w.isVerticalShaft&&ct(w,!1,!1):!Ht&&!It&&!Gt&&(ee(null),ce(w.id))},children:m.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Re} ${ve} ${Ue}`,style:{width:`${(F?14:10)/Math.max(.5,Ce.scale)}px`,height:`${(F?14:10)/Math.max(.5,Ce.scale)}px`,borderWidth:k?"2px":"1px"},children:w.isVerticalShaft&&m.jsx(_s,{className:F?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Ce.scale)}px`,height:`${6/Math.max(.5,Ce.scale)}px`}})})},w.id)}),Ht&&E.map((w,k)=>w.fId!==re?null:m.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${w.x*100}%`,top:`${w.y*100}%`},children:m.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Ce.scale)}px`,height:`${16/Math.max(.5,Ce.scale)}px`},children:k===0?"起":"終"})},`testpt_${k}`)),It&&At.length>0&&m.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[m.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[At.length===2&&m.jsx("line",{x1:`${At[0].x*100}%`,y1:`${At[0].y*100}%`,x2:`${At[1].x*100}%`,y2:`${At[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Ce.scale),strokeDasharray:"5,5"}),At.map((w,k)=>m.jsx("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:6/Math.max(.1,Ce.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Ce.scale)},k))]}),At.length===2&&m.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(At[0].x+At[1].x)*50}%`,top:`${(At[0].y+At[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Ce.scale)})`},children:[Math.hypot((At[1].x-At[0].x)*Z,(At[1].y-At[0].y)*ne).toFixed(1)," m"]})]}),Pt.map(w=>{const k=w.isVerticalShaft?Ke==null?void 0:Ke.floors.filter(F=>{var W;return(W=w.linkedFloorIds)==null?void 0:W.includes(F.id)}).sort((F,W)=>Gn(W.name)-Gn(F.name)).map(F=>F.name).join(", "):"";return m.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${J===w.id?"z-[60]":""} ${Fe===w.id?"scale-125":""}`,style:{left:`${w.x*100}%`,top:`${w.y*100}%`},onPointerDown:F=>{F.stopPropagation(),F.button===0&&(Te?_i(w.id):be?(w.isVerticalShaft||ct(w,!0,!0),ce(null),ee(w.id)):!Ht&&!Gt&&!It&&!St&&(ce(null),le(w.id),ee(w.id),F.target.setPointerCapture(F.pointerId)))},onPointerUp:F=>{F.stopPropagation(),F.target.releasePointerCapture(F.pointerId)},onContextMenu:F=>{F.preventDefault(),Te?Xt(w.id):be?w.isVerticalShaft&&ct(w,!1,!0):!Ht&&!It&&!Gt&&(ce(null),ee(w.id))},children:[m.jsxs("div",{className:"relative pointer-events-none",children:[m.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${J===w.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":w.enabled?w.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Fe===w.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:w.isVerticalShaft?m.jsx(_s,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Ce.scale)})`}}):m.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Ce.scale)})`},children:w.code})}),m.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${J===w.id?"border-t-white":w.enabled?w.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Fe===w.id?"border-t-orange-500":""}`})]}),m.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${J===w.id?"opacity-100 border-cyan-500 text-cyan-400":w.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Ce.scale)})`,transformOrigin:"top center"},children:[w.title||"未命名"," ",w.isVerticalShaft&&m.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",k,")"]})]})]},w.id)})]}),be&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(_s,{className:"w-5 h-5 mr-3 shrink-0"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),m.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Te&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(sw,{className:"w-5 h-5 mr-3 shrink-0"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),m.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Ht&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(S0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),m.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(He!=null&&He.imageUrl)&&m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[m.jsx(b0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),m.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",Ke==null?void 0:Ke.name," - ",He==null?void 0:He.name," 的平面圖"]}),m.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(He==null?void 0:He.imageUrl)&&G>0&&m.jsxs("div",{onClick:()=>y({isOpen:!0,blX:me.blX,blY:me.blY,trX:me.trX,trY:me.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[m.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[m.jsx(ha,{className:"w-3 h-3 mr-1"})," 比例尺: ",b," m"]}),m.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${G}px`}})]}),(He==null?void 0:He.imageUrl)&&m.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[m.jsx("button",{onClick:()=>tt(w=>({...w,scale:Math.min(10,w.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:m.jsx(Rg,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>tt(w=>({...w,scale:Math.max(.1,w.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:m.jsx(Ng,{className:"w-5 h-5"})}),m.jsx("button",{onClick:Le,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:m.jsx(rw,{className:"w-5 h-5"})})]})]})]}),D.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[m.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[m.jsx(ha,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),m.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",m.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),m.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[m.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[m.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),m.jsx("input",{type:"number",value:D.blX,onChange:w=>y({...D,blX:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),m.jsx("input",{type:"number",value:D.blY,onChange:w=>y({...D,blY:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),m.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[m.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),m.jsx("input",{type:"number",value:D.trX,onChange:w=>y({...D,trX:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),m.jsx("input",{type:"number",value:D.trY,onChange:w=>y({...D,trY:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),m.jsx("button",{onClick:()=>{Y(w=>w.map(k=>k.id===H?{...k,floors:k.floors.map(F=>F.id===re?{...F,bounds:{blX:D.blX,blY:D.blY,trX:D.trX,trY:D.trY}}:F)}:k)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[m.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),m.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:w=>{w.key==="Enter"&&(f.onSubmit(w.target.value),h({isOpen:!1}))}}),m.jsxs("div",{className:"flex space-x-3 justify-end",children:[m.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),m.jsx("button",{onClick:w=>{f.onSubmit(w.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[m.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),m.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),m.jsxs("div",{className:"flex space-x-3 justify-end",children:[m.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),m.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[m.jsx(Cg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),m.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),m.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),m.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[m.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[m.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:m.jsx(wf,{className:"w-10 h-10 text-cyan-400"})}),m.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:m.jsx(uw,{className:"w-10 h-10 text-purple-400"})})]}),m.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),m.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",m.jsx("b",{children:"「相機」"}),"進行掃描，以及",m.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),m.jsxs("button",{onClick:Oe,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[m.jsx(Jl,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),m.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(J||he)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[m.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[m.jsx("h2",{className:"font-bold text-slate-200",children:J?"AR 點位設定":"轉折點 (Waypoint) 設定"}),m.jsx("button",{onClick:()=>{ee(null),ce(null)},className:"text-slate-400 hover:text-white p-2",children:m.jsx(ys,{})})]}),Ne&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),m.jsx("input",{type:"text",value:Ne.code,onChange:w=>ke(Ne.id,"code",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-[2]",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),m.jsx("input",{type:"text",value:Ne.title,onChange:w=>ke(Ne.id,"title",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),m.jsx("textarea",{value:Ne.description||"",onChange:w=>ke(Ne.id,"description",w.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(Ne.x*100).toFixed(1),onChange:w=>ke(Ne.id,"x",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(Ne.y*100).toFixed(1),onChange:w=>ke(Ne.id,"y",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[m.jsx(_s,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:Ne.isVerticalShaft||!1,onChange:w=>ct(Ne,w.target.checked,!0),className:"sr-only peer"}),m.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),Ne.isVerticalShaft?m.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:m.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ke==null?void 0:Ke.floors.slice().sort((w,k)=>Gn(k.name)-Gn(w.name)).map(w=>{var W;const k=(W=Ne.linkedFloorIds)==null?void 0:W.includes(w.id),F=w.id===re;return m.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[m.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:F,checked:k||F,onChange:Re=>Mt(Ne,w.id,Re.target.checked,!0)}),m.jsxs("span",{className:"text-xs font-bold",children:[w.name," ",F&&"(目前)"]})]},w.id)})})}):m.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),m.jsxs("select",{value:Ne.arrowDirection||"none",onChange:w=>ke(Ne.id,"arrowDirection",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[m.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),m.jsx("option",{value:"up",children:"上 (Up)"}),m.jsx("option",{value:"down",children:"下 (Down)"}),m.jsx("option",{value:"left",children:"左 (Left)"}),m.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),m.jsxs("div",{className:"flex items-center justify-between pt-1",children:[m.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:Ne.enabled,onChange:w=>ke(Ne.id,"enabled",w.target.checked),className:"sr-only peer"}),m.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),m.jsx("hr",{className:"border-slate-800"}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),m.jsx("input",{type:"file",ref:we,onChange:gn,className:"hidden",accept:"image/*"}),m.jsx("button",{onClick:()=>we.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),m.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:Ne.imageUrl?m.jsx("img",{src:Ne.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):m.jsxs("div",{className:"text-center text-slate-600",children:[m.jsx(wf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),m.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),m.jsx(Sw,{marker:Ne,onUpdateStatus:w=>ke(Ne.id,"recognitionStatus",w),showAlert:w=>x({isOpen:!0,message:w})})]}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?m.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[m.jsx("button",{onClick:()=>st(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),m.jsx("button",{onClick:()=>Xt(Ne.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):m.jsxs("div",{className:"flex space-x-3",children:[m.jsx("button",{onClick:()=>st(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:m.jsx(Pd,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>ee(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),nt&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(nt.x*100).toFixed(1),onChange:w=>ye(nt.id,"x",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(nt.y*100).toFixed(1),onChange:w=>ye(nt.id,"y",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[m.jsx(_s,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:nt.isVerticalShaft||!1,onChange:w=>ct(nt,w.target.checked,!1),className:"sr-only peer"}),m.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),nt.isVerticalShaft&&m.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[m.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),m.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ke==null?void 0:Ke.floors.slice().sort((w,k)=>Gn(k.name)-Gn(w.name)).map(w=>{var W;const k=(W=nt.linkedFloorIds)==null?void 0:W.includes(w.id),F=w.id===re;return m.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[m.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:F,checked:k||F,onChange:Re=>Mt(nt,w.id,Re.target.checked,!1)}),m.jsxs("span",{className:"text-xs font-bold",children:[w.name," ",F&&"(目前)"]})]},w.id)})})]})]})]})}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?m.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[m.jsx("button",{onClick:()=>st(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),m.jsx("button",{onClick:()=>Xt(nt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):m.jsxs("div",{className:"flex space-x-3",children:[m.jsx("button",{onClick:()=>st(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:m.jsx(Pd,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>ce(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Wl({icon:s,label:e,active:t,onClick:r}){return m.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[m.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),m.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function bf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:m.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:m.jsx(Jl,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:m.jsx(Cg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return m.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function Sw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Pe.useState("idle"),[l,u]=Pe.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),v=Pe.useRef(null),S=Pe.useRef(null),x=Pe.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Pe.useRef({frames:0,lockedFrames:0});Pe.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const C=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,P=x.current;P.refGray&&P.refGray.delete(),P.refKeypoints&&P.refKeypoints.delete(),P.refDescriptors&&P.refDescriptors.delete(),P.orbDetector&&P.orbDetector.delete(),P.matcher&&P.matcher.delete();const V=document.createElement("canvas"),I=V.getContext("2d"),O=p.current,T=320;let N=O.naturalWidth||O.width,Y=O.naturalHeight||O.height;(N>T||Y>T)&&(N>Y?(Y=Math.round(Y*T/N),N=T):(N=Math.round(N*T/Y),Y=T)),V.width=N,V.height=Y,I.drawImage(O,0,0,N,Y);const H=R.imread(V),Q=new R.Mat;R.cvtColor(H,Q,R.COLOR_RGBA2GRAY);const re=new R.ORB,pe=new R.KeyPointVector,X=new R.Mat;re.detectAndCompute(Q,new R.Mat,pe,X);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:Q,refKeypoints:pe,refDescriptors:X,orbDetector:re,matcher:oe},H.delete(),!0}catch{return!1}},D=R=>{if(R.length<4)return!1;let P=[];for(let V=0;V<4;V++){let I=R[(V+1)%4].x-R[V].x,O=R[(V+1)%4].y-R[V].y,T=R[(V+2)%4].x-R[(V+1)%4].x,N=R[(V+2)%4].y-R[(V+1)%4].y;P.push(I*N-O*T>0)}return P.every(V=>V===P[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!C()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(P){console.warn("Device orientation permission was not granted.",P)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,L()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Pe.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const L=()=>{const R=window.cv,P=x.current,V=f.current,I=h.current,O=I.getContext("2d");let T=performance.now(),N=null;const Y=.15;let H=0;const Q=3;let re=0;const pe=10;let X=null;const oe=()=>{if(!V||!V.srcObject||!P.refDescriptors)return;const J=performance.now(),ee=Math.round(1e3/(J-T));T=J,O.drawImage(V,0,0,I.width,I.height);let he=0,ce=0,B=!1,le=null,et=H%Q===0;if(H++,et){try{const Te=R.imread(I),ue=new R.Mat;R.cvtColor(Te,ue,R.COLOR_RGBA2GRAY);const be=new R.KeyPointVector,Se=new R.Mat;if(P.orbDetector.detectAndCompute(ue,new R.Mat,be,Se),!Se.empty()&&Se.rows>0){const Fe=new R.DMatchVector;P.matcher.match(P.refDescriptors,Se,Fe);let ot=[];for(let Et=0;Et<Fe.size();Et++)ot.push(Fe.get(Et));ot.sort((Et,St)=>Et.distance-St.distance);let gt=ot.filter(Et=>Et.distance<=50).slice(0,60);if(he=gt.length,gt.length>=12){const Et=[],St=[];for(let Nt=0;Nt<gt.length;Nt++){let Gt=gt[Nt];Et.push(P.refKeypoints.get(Gt.queryIdx).pt.x,P.refKeypoints.get(Gt.queryIdx).pt.y),St.push(be.get(Gt.trainIdx).pt.x,be.get(Gt.trainIdx).pt.y)}const Ot=R.matFromArray(Et.length/2,1,R.CV_32FC2,Et),Kt=R.matFromArray(St.length/2,1,R.CV_32FC2,St),Tt=new R.Mat,zt=R.findHomography(Ot,Kt,R.RANSAC,4,Tt);for(let Nt=0;Nt<Tt.rows;Nt++)Tt.data[Nt]===1&&ce++;if(!zt.empty()&&ce>=10&&ce/gt.length>=.35){const Nt=P.refGray.cols,Gt=P.refGray.rows,q=[0,0,1,Nt,0,1,Nt,Gt,1,0,Gt,1];let It=[];for(let wt=0;wt<4;wt++){let At=q[wt*3],qe=q[wt*3+1],Ht=zt.data64F[0]*At+zt.data64F[1]*qe+zt.data64F[2],U=zt.data64F[3]*At+zt.data64F[4]*qe+zt.data64F[5],E=zt.data64F[6]*At+zt.data64F[7]*qe+zt.data64F[8];It.push({x:Ht/E,y:U/E})}D(It)&&(le=It,B=!0)}Ot.delete(),Kt.delete(),Tt.delete(),zt.delete()}Fe.delete()}Te.delete(),ue.delete(),be.delete(),Se.delete()}catch{}B?(X=le,re=pe):re>0?re--:X=null}const st=X!==null;if(st){if(!N)N=JSON.parse(JSON.stringify(X));else for(let Te=0;Te<4;Te++)N[Te].x=N[Te].x*(1-Y)+X[Te].x*Y,N[Te].y=N[Te].y*(1-Y)+X[Te].y*Y;O.strokeStyle="#00ffcc",O.lineWidth=3,O.shadowBlur=10,O.shadowColor="#00ffcc",O.beginPath(),O.moveTo(N[0].x,N[0].y),O.lineTo(N[1].x,N[1].y),O.lineTo(N[2].x,N[2].y),O.lineTo(N[3].x,N[3].y),O.closePath(),O.stroke(),O.shadowBlur=0}else{N=null;const Te=Math.min(I.width,I.height)*.5,ue=(I.width-Te)/2,be=(I.height-Te)/2;O.strokeStyle="rgba(255, 70, 70, 0.5)",O.lineWidth=2,O.strokeRect(ue,be,Te,Te)}u(Te=>({fps:ee,matches:et?he:Te.matches,inliers:et?ce:Te.inliers,status:st?"LOCKED":"SEARCHING"})),M.current.frames++,st&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return m.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&m.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),m.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[m.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),m.jsx(bf,{status:s.recognitionStatus})]}),m.jsxs("div",{className:"p-3 space-y-3",children:[m.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[m.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),m.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),m.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&m.jsx("div",{className:"text-center z-20",children:r==="loading"?m.jsxs("div",{className:"animate-pulse text-yellow-500",children:[m.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):m.jsxs(m.Fragment,{children:[m.jsx(wf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),m.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&m.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[m.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),m.jsxs("span",{children:["INLIERS: ",l.inliers]}),m.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?m.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):m.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[m.jsx(aw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),m.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function O0({buildings:s,systemConfig:e,onMenuClick:t}){var lr,cr;const[r,o]=Pe.useState("idle"),[l,u]=Pe.useState(null),[f,h]=Pe.useState(null),[p,v]=Pe.useState([]),[S,x]=Pe.useState(!1),[M,C]=Pe.useState(0),[D,y]=Pe.useState("idle"),[_,L]=Pe.useState("checking"),[R,P]=Pe.useState("idle"),[V,I]=Pe.useState(0),[O,T]=Pe.useState(0),[N,Y]=Pe.useState({}),[H,Q]=Pe.useState(!1),[re,pe]=Pe.useState(""),X=Pe.useRef(null),oe=Pe.useRef(null),J=Pe.useRef(null),ee=Pe.useRef(null),he=Pe.useRef(null),ce=Pe.useRef(null),B=Pe.useRef(null),le=Pe.useRef(null),et=Pe.useRef(null),st=Pe.useRef(null),Te=Pe.useRef(!1),ue=Pe.useRef([]),be=Pe.useRef({matcher:null}),Se=Pe.useRef(null),Fe=Pe.useRef(null),ot=Pe.useRef(!1),gt=Pe.useRef({}),Et=Pe.useRef([]),St=Pe.useRef({nodes:{},edges:[]}),Ot=Pe.useRef(null),Kt=Pe.useRef("idle"),Tt=Pe.useRef({heading:null,pitch:0,roll:0}),zt=Pe.useRef(null),Nt=Af.useMemo(()=>{const j={},Le=[];return s.forEach(_e=>_e.floors.forEach(Ne=>{var G,se;const nt=Ne.bounds||{blX:0,blY:0,trX:100,trY:100},b=(Z,ne)=>({physX:nt.blX+Z*(nt.trX-nt.blX),physY:nt.trY-ne*(nt.trY-nt.blY)});Ne.markers.forEach(Z=>{Z.enabled&&(j[Z.id]={...Z,...b(Z.x,Z.y),isMarker:!0,bId:_e.id,fId:Ne.id,bName:_e.name,fName:Ne.name,bounds:nt})}),(G=Ne.waypoints)==null||G.forEach(Z=>{j[Z.id]={...Z,...b(Z.x,Z.y),isMarker:!1,bId:_e.id,fId:Ne.id,bName:_e.name,fName:Ne.name,bounds:nt}}),(se=Ne.edges)==null||se.forEach(Z=>{Le.push({...Z,fId:Ne.id})})})),{nodes:j,edges:Le}},[s]);Pe.useEffect(()=>{St.current=Nt},[Nt]),Pe.useEffect(()=>{Et.current=p},[p]),Pe.useEffect(()=>{T(0)},[l,p]),Pe.useEffect(()=>{if(!l||p.length<2){I(0);return}const j=performance.now(),Le=_e=>{I((_e-j)/5200%1),zt.current=requestAnimationFrame(Le)};return zt.current=requestAnimationFrame(Le),()=>{zt.current&&cancelAnimationFrame(zt.current)}},[l,p]),Pe.useEffect(()=>{Ot.current=null,Fe.current=null,Gt("idle")},[l]);const Gt=j=>{Kt.current!==j&&(Kt.current=j,y(j))},q=()=>new URLSearchParams(window.location.search).get("debugAR")==="1"||localStorage.getItem("debugAR")==="1",It=j=>{q()&&(gt.current={...gt.current,...j,isSecureContext:window.isSecureContext,lastUpdateTime:new Date().toLocaleTimeString()},Y(gt.current))};Pe.useEffect(()=>{let j=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){j&&L("unsupported");return}try{const _e=await navigator.xr.isSessionSupported("immersive-ar");j&&L(_e?"supported":"unsupported")}catch{j&&L("unsupported")}})(),()=>{j=!1}},[]);const wt=(j,Le)=>{const{nodes:_e,edges:Ne}=Nt,nt={};Object.keys(_e).forEach(De=>{nt[De]={}}),Ne.forEach(De=>{if(_e[De.start]&&_e[De.end]){const it=Math.hypot(_e[De.start].physX-_e[De.end].physX,_e[De.start].physY-_e[De.end].physY);nt[De.start][De.end]=it,nt[De.end][De.start]=it}});const b={};Object.values(_e).forEach(De=>{De.isVerticalShaft&&De.shaftId&&(b[De.shaftId]||(b[De.shaftId]=[]),b[De.shaftId].push(De.id))}),Object.values(b).forEach(De=>{for(let it=0;it<De.length;it++)for(let Je=it+1;Je<De.length;Je++)nt[De[it]][De[Je]]=5,nt[De[Je]][De[it]]=5});const G=De=>Object.keys(nt[De]).length>0,se=De=>{if(G(De))return De;const it=_e[De];let Je=1/0,bt=De;return Object.keys(_e).forEach(kt=>{if(_e[kt].fId===it.fId&&G(kt)){const w=Math.hypot(_e[kt].physX-it.physX,_e[kt].physY-it.physY);w<Je&&(Je=w,bt=kt)}}),bt},Z=se(j),ne=se(Le),Ie={},Xe={},Ee=new Set(Object.keys(_e));for(Object.keys(_e).forEach(De=>{Ie[De]=1/0,Xe[De]=null}),Ie[Z]=0;Ee.size>0;){let De=null;if(Ee.forEach(it=>{(De===null||Ie[it]<Ie[De])&&(De=it)}),Ie[De]===1/0||De===ne)break;Ee.delete(De),Object.entries(nt[De]).forEach(([it,Je])=>{if(Ee.has(it)){const bt=Ie[De]+Je;bt<Ie[it]&&(Ie[it]=bt,Xe[it]=De)}})}const Ze=[];let Qe=ne;for(;Qe;)Ze.unshift(Qe),Qe=Xe[Qe];return Ze.length===0||Ze[0]!==Z?[]:(Z!==j&&Ze.unshift(j),ne!==Le&&Ze.push(Le),Ze)};Pe.useEffect(()=>{v(f&&l&&f!==l?wt(f,l):[])},[f,l,Nt]),Pe.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const Ne=document.createElement("script");Ne.id="opencv-script",Ne.src="https://docs.opencv.org/3.4.16/opencv.js",Ne.async=!0,document.body.appendChild(Ne)}}else o("idle");let j=0;const Le=Ne=>{const nt=fw(Ne);It({alpha:Ne.alpha,beta:Ne.beta,gamma:Ne.gamma,webkitCompassHeading:Ne.webkitCompassHeading,currentHeading:nt}),nt!=null&&(Fe.current==null&&(Fe.current=nt),Tt.current={heading:nt,pitch:Ne.beta||0,roll:Ne.gamma||0},Se.current=nt,ot.current||(ot.current=!0,Q(!0)),It({baseHeading:Fe.current,relativeHeading:P0(nt,Fe.current),orientationEventActive:!0}))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Le,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",Le,!0));const _e=setInterval(()=>{if(!ot.current)return;let Ne=Se.current;if(Ne==null)return;let nt=Ne-(j%360+360)%360;nt>180&&(nt-=360),nt<-180&&(nt+=360),j+=nt,C(j)},200);return()=>{E(),clearInterval(_e),window.removeEventListener("deviceorientation",Le,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",Le,!0)}},[]);const At=async()=>{const j=window.cv;if(!j)return!1;ue.current=[],be.current.matcher=new j.BFMatcher(j.NORM_HAMMING,!0);const _e=Object.values(Nt.nodes).filter(Ne=>Ne.isMarker&&Ne.imageUrl).map(Ne=>new Promise(nt=>{const b=new Image;b.onload=()=>{try{const G=document.createElement("canvas"),se=G.getContext("2d");G.width=320,G.height=Math.round(320*(b.height/b.width)),se.drawImage(b,0,0,G.width,G.height);const Z=j.imread(G),ne=new j.Mat;j.cvtColor(Z,ne,j.COLOR_RGBA2GRAY);const Ie=new j.ORB,Xe=new j.KeyPointVector,Ee=new j.Mat;Ie.detectAndCompute(ne,new j.Mat,Xe,Ee),ue.current.push({markerId:Ne.id,gray:ne,kp:Xe,des:Ee,orb:Ie,width:ne.cols,height:ne.rows}),Z.delete(),nt(!0)}catch{nt(!1)}},b.onerror=()=>nt(!1),b.src=Ne.imageUrl}));return await Promise.all(_e),ue.current.length>0},qe=async()=>{const j={orientationPermission:"not-required",motionPermission:"not-required",granted:!0,reason:null};if(!window.isSecureContext&&location.hostname!=="localhost")return j.granted=!1,j.reason="AR 方向感測需要 HTTPS 或 localhost。",It(j),j;try{window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&(j.orientationPermission=await window.DeviceOrientationEvent.requestPermission(),j.orientationPermission!=="granted"&&(j.granted=!1)),window.DeviceMotionEvent&&typeof window.DeviceMotionEvent.requestPermission=="function"&&(j.motionPermission=await window.DeviceMotionEvent.requestPermission(),j.motionPermission!=="granted"&&(j.granted=!1))}catch(Le){j.granted=!1,j.reason=(Le==null?void 0:Le.message)||"方向感測授權失敗。"}return It(j),j},Ht=async()=>{const j=await qe();return j.granted?pe("已送出動作與方向啟用請求，請轉動手機確認羅盤資料是否開始變化。"):pe(j.reason||"瀏覽器未允許動作與方向存取，請在 Safari 設定中開啟「動作與方向存取」。"),j},U=async()=>{if(r!=="idle")return;if(o("loading"),!await At()){o("idle"),alert("無法提取特徵");return}try{await Ht();const Le=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});J.current=Le,X.current.srcObject=Le,X.current.play(),X.current.onloadedmetadata=()=>{oe.current.width=X.current.videoWidth,oe.current.height=X.current.videoHeight,o("scanning"),Ye()}}catch{alert("無相機權限"),o("idle")}},E=()=>{ee.current&&cancelAnimationFrame(ee.current),J.current&&J.current.getTracks().forEach(j=>j.stop()),Ot.current=null,Fe.current=null,Gt("idle"),o("idle")},ae=(j,Le,_e=!1)=>{if(!Le||Le.length<2)return!1;const Ne=L0(Le);if(j.save(),j.beginPath(),Le.forEach((nt,b)=>{b===0?j.moveTo(nt.x,nt.y):j.lineTo(nt.x,nt.y)}),j.strokeStyle=_e?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",j.lineWidth=_e?8:10,j.lineCap="round",j.lineJoin="round",j.shadowBlur=_e?8:12,j.shadowColor="#ffffff",j.stroke(),Ne>8){const nt=_e?86:74,b=_e?26:30,G=Date.now()/18%nt;j.shadowBlur=_e?10:16,j.shadowColor="#ffffff",j.fillStyle="rgba(255,255,255,0.98)",j.strokeStyle="rgba(0,0,0,0.34)",j.lineWidth=2.5;for(let se=G;se<Ne;se+=nt){const Z=D0(Le,se);Z&&(j.save(),j.translate(Z.x,Z.y),j.rotate(Z.angle),j.beginPath(),j.moveTo(b*.55,0),j.lineTo(-b*.35,-b*.32),j.lineTo(-b*.15,0),j.lineTo(-b*.35,b*.32),j.closePath(),j.stroke(),j.fill(),j.restore())}}return j.restore(),!0},Me=(j,Le=[])=>{Le.forEach(_e=>{if(!_e||typeof _e.x!="number"||typeof _e.y!="number")return;const Ne=_e.type==="destination",nt=Ne?"#ef4444":"#a855f7",b=_e.label||(Ne?"目的地":"路段末端");j.save(),j.translate(_e.x,_e.y),j.shadowBlur=16,j.shadowColor=nt,j.fillStyle=nt,j.strokeStyle="#ffffff",j.lineWidth=3,j.beginPath(),j.arc(0,-18,Ne?15:13,0,Math.PI*2),j.fill(),j.stroke(),j.beginPath(),j.moveTo(-8,-6),j.lineTo(0,12),j.lineTo(8,-6),j.closePath(),j.fill(),j.stroke(),j.fillStyle="#ffffff",j.shadowBlur=0,j.font="bold 18px sans-serif",j.textAlign="center",j.textBaseline="middle",j.fillText(Ne?"!":"↑",0,-18),j.font="bold 13px sans-serif";const G=j.measureText(b).width+18;j.fillStyle="rgba(15, 23, 42, 0.86)",j.strokeStyle="rgba(255, 255, 255, 0.35)",j.lineWidth=1,j.beginPath(),j.roundRect(-G/2,20,G,26,13),j.fill(),j.stroke(),j.fillStyle="#ffffff",j.fillText(b,0,33),j.restore()})},Ae=(j,Le)=>{!Le||typeof Le.x!="number"||typeof Le.y!="number"||(j.save(),j.translate(Le.x,Le.y),j.shadowBlur=14,j.shadowColor="#22d3ee",j.strokeStyle="rgba(255,255,255,0.95)",j.fillStyle="rgba(34,211,238,0.95)",j.lineWidth=3,j.beginPath(),j.arc(0,0,10,0,Math.PI*2),j.fill(),j.stroke(),j.beginPath(),j.arc(0,0,20,0,Math.PI*2),j.strokeStyle="rgba(34,211,238,0.55)",j.stroke(),j.restore())},Ve=j=>{const Le=Ot.current;if(!Le||!Le.points||Le.points.length<2)return!1;const _e=Tt.current,Ne=ot.current&&_e.heading!=null&&Le.orientation.heading!=null,nt=Ne?N0(_e.heading,Le.orientation.heading):0,b=Ne?_e.pitch-Le.orientation.pitch:0,G=Ne?_e.roll-Le.orientation.roll:0,se=(G-nt)*Math.PI/180,Z=Math.cos(se),ne=Math.sin(se),Ie=Le.anchor||Le.points[0],Xe=j.canvas.width/2,Ee=j.canvas.height/2,Ze=Ie.x*j.canvas.width,Qe=Ie.y*j.canvas.height,De=Math.max(j.canvas.width,j.canvas.height)*.95,it=j.canvas.width*1.8,Je=j.canvas.height*1.2,bt=Math.max(-it,Math.min(it,Math.tan(nt*Math.PI/180)*De)),kt=Math.max(-Je,Math.min(Je,Math.tan(b*Math.PI/180)*De*.75)),k=((at,ut)=>{const mt=at-Xe,rt=ut-Ee;return{x:Xe+mt*Z-rt*ne-bt,y:Ee+mt*ne+rt*Z+kt}})(Ze,Qe),F=at=>{const ut=at.x*j.canvas.width,mt=at.y*j.canvas.height,rt=ut-Ze,Yt=mt-Qe;return{x:k.x+rt*Z-Yt*ne,y:k.y+rt*ne+Yt*Z}},W=Le.points.map(F),Re=(Le.pins||[]).map(F).map((at,ut)=>{var mt,rt;return{...at,type:(mt=Le.pins[ut])==null?void 0:mt.type,label:(rt=Le.pins[ut])==null?void 0:rt.label}}),ve=P0(_e.heading,Le.baseHeading),Ue=Le.targetBearing!=null&&ve!=null?N0(Le.targetBearing,ve):null;It({currentHeading:_e.heading,baseHeading:Le.baseHeading,relativeHeading:ve,targetBearing:Le.targetBearing,headingDelta:nt,arrowRotation:Ue,finalArrowRotation:Ue==null?null:Ue+G,currentARMode:"camera-overlay"});const ft=ae(j,W,!0);return ft&&(Ae(j,k),Me(j,Re)),ft},We=()=>{if(Et.current.length>1)return Et.current;const j=Object.values(St.current.nodes).filter(_e=>_e.isMarker&&_e.id!==l).map(_e=>_e.id),Le=f||j[0];return!Le||!l||Le===l?[]:wt(Le,l)},xe=()=>{const j=We(),Le=St.current.nodes,_e=j.map(Ee=>Le[Ee]).filter(Boolean);if(_e.length<2)return null;const Ne=_e[0],nt=.08,b=_e.map(Ee=>new ie((Ee.physX-Ne.physX)*nt,.03,-(Ee.physY-Ne.physY)*nt)),G=new Ts,se=I0(b,.045,16777215,.18),Z=I0(b,.016,16777215,.36);se&&G.add(se),Z&&G.add(Z);const ne=xw(b);ne&&G.add(ne);const Ie=new Qn(new ac(.1,24,24),new ts({color:2282478}));Ie.position.copy(b[0]),Ie.position.y+=.08,G.add(Ie);const Xe=new Qn(new ac(.12,24,24),new ts({color:16731471}));return Xe.position.copy(b[b.length-1]),Xe.position.y+=.1,G.add(Xe),G},we=async()=>{const j=ce.current;if(j)try{await j.end()}catch{}else Ce()},Ce=()=>{le.current&&le.current.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&j.material.dispose()}),B.current&&(B.current.setAnimationLoop(null),B.current.dispose(),B.current.domElement.remove()),ce.current=null,B.current=null,le.current=null,et.current=null,st.current=null,Te.current=!1,P("idle")},tt=async()=>{var j;if(!(_!=="supported"||!navigator.xr||ce.current)){P("starting"),E();try{const Le={requiredFeatures:["hit-test"],optionalFeatures:he.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};he.current&&(Le.domOverlay={root:he.current});const _e=await navigator.xr.requestSession("immersive-ar",Le),Ne=new YE({alpha:!0,antialias:!0});Ne.xr.enabled=!0,Ne.setPixelRatio(window.devicePixelRatio||1),Ne.setSize(window.innerWidth,window.innerHeight),Ne.domElement.className="absolute inset-0 h-full w-full",(j=he.current)==null||j.appendChild(Ne.domElement),await Ne.xr.setSession(_e);const nt=new g_,b=new Pi,G=new Qn(new Hf(.18,.22,32).rotateX(-Math.PI/2),new ts({color:65484,transparent:!0,opacity:.85}));G.matrixAutoUpdate=!1,G.visible=!1,nt.add(G);const se=await _e.requestReferenceSpace("local-floor").catch(()=>_e.requestReferenceSpace("local")),Z=await _e.requestReferenceSpace("viewer"),ne=await _e.requestHitTestSource({space:Z});ce.current=_e,B.current=Ne,et.current=ne,st.current=se,P("placing");const Ie=Xe=>{if(Te.current)return;const Ee=xe();if(!Ee){P("no-route");return}Ee.matrix.fromArray(Xe),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),nt.add(Ee),le.current=Ee,Te.current=!0,P("anchored")};_e.addEventListener("select",()=>{G.visible&&Ie(G.matrix.elements)}),_e.addEventListener("end",Ce),Ne.setAnimationLoop((Xe,Ee)=>{if(le.current&&le.current.traverse(Ze=>vw(Ze,Xe)),Ee&&!Te.current){const Ze=Ee.getHitTestResults(ne);if(Ze.length){const Qe=Ze[0].getPose(se);Qe&&(G.visible=!0,G.matrix.fromArray(Qe.transform.matrix))}else G.visible=!1}else G.visible=!1;Ne.render(nt,b)})}catch(Le){console.warn("Unable to start WebXR AR mode.",Le),Ce(),P("failed")}}},Ye=()=>{const j=window.cv,Le=X.current,_e=oe.current,Ne=_e.getContext("2d"),nt=be.current.matcher;let b=0,G=null,se=null,Z=0,ne=0;const Ie=()=>{if(!Le||!Le.srcObject)return;Ne.drawImage(Le,0,0,_e.width,_e.height);let Xe=!1;if(b%4===0){try{const Qe=j.imread(_e),De=new j.Mat;j.cvtColor(Qe,De,j.COLOR_RGBA2GRAY);const it=new j.KeyPointVector,Je=new j.Mat;if(ue.current[0].orb.detectAndCompute(De,new j.Mat,it,Je),!Je.empty())for(let bt of ue.current){const kt=new j.DMatchVector;nt.match(bt.des,Je,kt);let w=[];for(let F=0;F<kt.size();F++)w.push(kt.get(F));w.sort((F,W)=>F.distance-W.distance);const k=w.filter(F=>F.distance<=50).slice(0,60);if(k.length>=12){const F=[],W=[];for(let ut of k)F.push(bt.kp.get(ut.queryIdx).pt.x,bt.kp.get(ut.queryIdx).pt.y),W.push(it.get(ut.trainIdx).pt.x,it.get(ut.trainIdx).pt.y);const Re=j.matFromArray(F.length/2,1,j.CV_32FC2,F),ve=j.matFromArray(W.length/2,1,j.CV_32FC2,W),Ue=new j.Mat,ft=j.findHomography(Re,ve,j.RANSAC,4,Ue);let at=0;for(let ut=0;ut<Ue.rows;ut++)Ue.data[ut]===1&&at++;!ft.empty()&&at>=10&&(G&&G.delete(),G=ft.clone(),se=bt.markerId,h(se),Xe=!0),Re.delete(),ve.delete(),Ue.delete(),ft.delete()}if(kt.delete(),Xe)break}Qe.delete(),De.delete(),it.delete(),Je.delete()}catch{}Xe?(ne=8,Z=Date.now()):ne>0?ne--:(G&&(G.delete(),G=null),se=null)}b++,!Z&&!Ot.current&&(G&&(G.delete(),G=null),se=null);const Ee=St.current,Ze=Et.current;if(G&&se&&Ze.length>1){const Qe=Ee.nodes[se],De=ue.current.find(it=>it.markerId===se);if(Qe&&De){const it=De.width/.3,Je=[],bt=[],kt=Ze.indexOf(se),w=kt>=0?kt:0,k=hw(Ee.nodes[Ze[w]],Ee.nodes[Ze[w+1]]);for(let F=0;F<Ze.length;F++){const W=Ze[F],Re=Ee.nodes[W];if(!Re||Re.fId!==Qe.fId)break;const ve=Re.physX-Qe.physX,Ue=-(Re.physY-Qe.physY),ft=De.width/2+ve*it,at=De.height/2+Ue*it,ut=G.data64F,mt=ut[6]*ft+ut[7]*at+ut[8];if(mt>0){const rt=(ut[0]*ft+ut[1]*at+ut[2])/mt,Yt=(ut[3]*ft+ut[4]*at+ut[5])/mt;Je.push({x:rt,y:Yt}),bt.push({x:rt,y:Yt,nodeId:W})}}if(Je.length>=2){const F=Ot.current,W=Je.map(rt=>({x:rt.x/_e.width,y:rt.y/_e.height})),Re=W[0],ve=bt[bt.length-1],Ue=bt.find(rt=>rt.nodeId===l),ft=[];ve&&ft.push({x:ve.x,y:ve.y,type:Ue?"destination":"endpoint",label:Ue?"目的地":"路段末端"}),Ue&&Ue!==ve&&ft.push({x:Ue.x,y:Ue.y,type:"destination",label:"目的地"}),Fe.current==null&&Tt.current.heading!=null&&(Fe.current=Tt.current.heading);const at=F0(F==null?void 0:F.points,W,F?.45:1);at.length>0&&(at[0]=Re);const ut=ft.map(rt=>({x:rt.x/_e.width,y:rt.y/_e.height,type:rt.type,label:rt.label})),mt={markerId:se,orientation:{...Tt.current},baseHeading:Fe.current,targetBearing:k,updatedAt:Date.now(),anchor:Re,points:at,pins:F0(F==null?void 0:F.pins,ut,F?.45:1)};Ot.current={...mt},Ve(Ne),It({arrowElementFound:!0,targetBearing:k,baseHeading:Fe.current,currentARMode:"camera-overlay"}),Gt("locked")}}}else{const Qe=Ze.length>1&&Ve(Ne);if(Gt(Qe?"holding":"searching"),!Qe){const De=Math.min(_e.width,_e.height)*.6;Ne.strokeStyle="rgba(0, 255, 204, 0.4)",Ne.lineWidth=2,Ne.strokeRect((_e.width-De)/2,(_e.height-De)/2,De,De)}}ee.current=requestAnimationFrame(Ie)};Ie()};if(!l){const j=Object.values(Nt.nodes).filter(Le=>Le.isMarker).reduce((Le,_e)=>{const Ne=`${_e.bName} - ${_e.fName}`;return Le[Ne]||(Le[Ne]=[]),Le[Ne].push(_e),Le},{});return m.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[m.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:m.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:m.jsx(uo,{className:"w-5 h-5"})})}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[m.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[m.jsx(co,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(j).length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[m.jsx(ha,{className:"w-16 h-16 text-slate-700 mb-4"}),m.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),m.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",m.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(j).map(([Le,_e])=>m.jsxs("div",{className:"mb-6",children:[m.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:Le}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:_e.map(Ne=>m.jsxs("button",{onClick:()=>u(Ne.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[m.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:Ne.code}),m.jsx("div",{className:"flex-1",children:m.jsx("div",{className:"text-white font-bold",children:Ne.title})})]},Ne.id))})]},Le))]})]})}const Oe=Nt.nodes[l],Ke=f?Nt.nodes[f]:null,He=p.length>1?p[1]:null;He&&Nt.nodes[He];const Pt=j=>{if(!j)return"";if(j.fName)return j.fName;for(const Le of s){const _e=Le.floors.find(Ne=>Ne.id===j.fId);if(_e!=null&&_e.name)return _e.name}return j.fId||""},$=p.map(j=>Nt.nodes[j]).filter(Boolean),Ge=mw($),me=[];$.forEach(j=>{const Le=me[me.length-1];!Le||Le.floorId!==j.fId?me.push({floorId:j.fId,floorName:Pt(j),nodes:[j]}):Le.nodes.push(j)});const lt=Ke||Oe?{floorId:(Ke||Oe).fId,floorName:Pt(Ke||Oe),nodes:[Ke||Oe]}:null,ke=me.length?Math.min(O,me.length-1):0,ye=me[ke]||lt,ct=me[ke-1]||null,Mt=me[ke+1]||null,Xt=(lr=ye==null?void 0:ye.nodes)==null?void 0:lr[ye.nodes.length-1];(cr=ye==null?void 0:ye.nodes)==null||cr[0];const $t=Mt?Gn(Mt.floorName)-Gn(ye.floorName):0,En=$t>0?"上樓":$t<0?"下樓":"前往",In=ct?Gn(ye.floorName)-Gn(ct.floorName):0,ci=In>0?"上樓":In<0?"下樓":"前往",_i=f===l?"已抵達目的地":Mt?`請依照 ${ye.floorName} 平面圖前往轉乘點，接著${En}至 ${Mt.floorName}`:ye?`請依照 ${ye.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",Di=!!(Mt||ct);let Fn=ye?ye.floorId:Ke?Ke.fId:Oe.fId,Wn=null,Li=ye?ye.floorName:Ke?Ke.fName:Oe.fName,Xn={blX:0,blY:0,trX:100,trY:100};s.forEach(j=>j.floors.forEach(Le=>{Le.id===Fn&&(Wn=Le.imageUrl,Xn=Jr(Le),Li=Le.name)}));const gn=(j,Le)=>{const _e=Xn.trX-Xn.blX,Ne=Xn.trY-Xn.blY,nt=_e!==0?(j-Xn.blX)/_e*100:50,b=Ne!==0?(Xn.trY-Le)/Ne*100:50;return{x:nt,y:b}},Yn=(ye==null?void 0:ye.nodes)||[],ei=Yn.filter(j=>j&&j.fId===Fn).map(j=>gn(j.physX,j.physY)),yi=L0(ei),Si=Ke&&Ke.fId===Fn?Ke:ei.length?null:Oe,ui=yi>0?D0(ei,V*yi):Si?gn(Si.physX,Si.physY):null;return m.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-4 left-4 z-40",children:m.jsx("button",{onClick:()=>{E(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),m.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[m.jsx("div",{ref:he,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),m.jsx("video",{ref:X,playsInline:!0,muted:!0,className:"hidden"}),m.jsx("canvas",{ref:oe,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&m.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[D==="locked"&&"AR 路徑已鎖定",D==="holding"&&"陀螺儀空間錨點",D==="searching"&&"請重新對準導引圖",D==="idle"&&"準備定位"]}),r==="scanning"&&!H&&m.jsxs("div",{className:"absolute left-4 right-4 top-16 z-40 rounded-2xl border border-yellow-400/40 bg-slate-950/88 p-4 text-sm leading-relaxed text-yellow-50 shadow-xl backdrop-blur-md md:left-auto md:max-w-sm",children:[m.jsx("div",{className:"mb-1 font-bold text-yellow-200",children:"需要開啟動作與方向"}),m.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"若沒有啟用，AR 箭頭無法隨手機轉向套疊在實景中。"}),re&&m.jsx("div",{className:"mt-2 text-xs text-yellow-100/90",children:re})]}),r==="scanning"&&q()&&m.jsxs("div",{className:"absolute right-4 top-16 z-40 max-w-[260px] rounded-xl border border-slate-600 bg-slate-950/85 p-3 text-[10px] leading-relaxed text-slate-200 shadow-xl backdrop-blur-md",children:[m.jsx("div",{className:"mb-1 font-bold text-cyan-300",children:"AR Debug"}),[["secure",String(N.isSecureContext)],["permission",`${N.orientationPermission||"-"} / ${N.motionPermission||"-"}`],["alpha",N.alpha==null?"-":Math.round(N.alpha)],["webkit",N.webkitCompassHeading==null?"-":Math.round(N.webkitCompassHeading)],["heading",N.currentHeading==null?"-":Math.round(N.currentHeading)],["base",N.baseHeading==null?"-":Math.round(N.baseHeading)],["relative",N.relativeHeading==null?"-":Math.round(N.relativeHeading)],["target",N.targetBearing==null?"-":Math.round(N.targetBearing)],["rotate",N.arrowRotation==null?"-":Math.round(N.arrowRotation)],["mode",N.currentARMode||"-"],["updated",N.lastUpdateTime||"-"]].map(([j,Le])=>m.jsxs("div",{className:"flex justify-between gap-3 border-t border-white/5 py-0.5",children:[m.jsx("span",{className:"text-slate-400",children:j}),m.jsx("span",{className:"font-mono text-white",children:Le})]},j))]}),r==="scanning"&&Wn&&m.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[m.jsxs("div",{className:"relative w-full h-full",children:[m.jsx("img",{src:Wn,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),m.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:Di?`自動切換至 ${Li}`:`目前平面圖 ${Li}`}),m.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[m.jsx("defs",{children:m.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:m.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),Yn.map((j,Le)=>{if(Le===Yn.length-1)return null;const _e=Yn[Le+1];if(j.fId===Fn&&_e.fId===Fn){const Ne=gn(j.physX,j.physY),nt=gn(_e.physX,_e.physY);return m.jsx("line",{x1:`${Ne.x}%`,y1:`${Ne.y}%`,x2:`${nt.x}%`,y2:`${nt.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},Le)}return null})]}),ui&&m.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${ui.x}%`,top:`${ui.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${ui.angle||0}rad)`,willChange:"transform"},children:m.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[m.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),m.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(ui.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),Mt&&Xt&&Xt.fId===Fn&&m.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${gn(Xt.physX,Xt.physY).x}%`,top:`${gn(Xt.physX,Xt.physY).y}%`,transform:"translate(-50%, -140%)"},children:m.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:$t>=0?m.jsx(Ag,{className:"h-8 w-8 stroke-[3.5]"}):m.jsx(wg,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,Oe&&Oe.fId===Fn&&m.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${gn(Oe.physX,Oe.physY).x}%`,top:`${gn(Oe.physX,Oe.physY).y}%`,transform:"translate(-50%, -50%)"},children:m.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[m.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),m.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),m.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?m.jsx(Ng,{className:"w-4 h-4"}):m.jsx(Rg,{className:"w-4 h-4"})}),m.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",Ke?Ke.fName:Oe.fName," ",H?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&m.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[m.jsx(cw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),m.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),m.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),m.jsxs("div",{className:"space-y-3",children:[!H&&m.jsxs("div",{className:"rounded-2xl border border-yellow-400/35 bg-yellow-400/10 p-4 text-left text-sm leading-relaxed text-yellow-50",children:[m.jsx("div",{className:"mb-2 font-bold text-yellow-200",children:"請開啟「動作與方向」權限"}),m.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"AR 箭頭需要手機羅盤資料才能隨轉向正確套疊。iPhone 請用 Safari 開啟，並允許動作與方向存取。"}),re&&m.jsx("div",{className:"mt-3 text-xs text-yellow-100/90",children:re})]}),m.jsx("button",{onClick:tt,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),m.jsx("button",{onClick:U,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"開啟動作與方向及相機"})]}),_==="unsupported"&&m.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&m.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",m.jsx("button",{onClick:we,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),m.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${Ke?"translate-y-0":"translate-y-full"}`,children:m.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),m.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[m.jsx("button",{onClick:()=>T(j=>Math.max(0,j-1)),disabled:!ct,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:m.jsx(bg,{className:"h-5 w-5"})}),m.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[m.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[m.jsxs("span",{children:[(ye==null?void 0:ye.floorName)||Pt(Ke||Oe)," ","平面圖"]}),me.length>1&&m.jsxs("span",{children:[ke+1," / ",me.length]})]}),m.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":Mt?"text-purple-300":"text-yellow-300"}`,children:_i}),Ge>0&&m.jsxs("div",{className:"mt-2 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold text-cyan-100",children:["預估路徑長度：",Ge<100?Ge.toFixed(1):Math.round(Ge)," m"]}),ct&&m.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",ct.floorName,"；本張是",ci,"後的導引段。"]})]}),m.jsx("button",{onClick:()=>T(j=>Math.min(me.length-1,j+1)),disabled:!Mt,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:m.jsx(Tg,{className:"h-5 w-5"})})]})]})}),m.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const lc=document.getElementById("ar-root");if(!lc)throw new Error("Missing #ar-root element.");const Pg=new URLSearchParams(window.location.search),Mw=window.location.pathname.endsWith("/admin-ar.html"),Ig=lc.dataset.embedded==="true"||Pg.get("embedded")==="1",k0=Mw||Ig;_v.createRoot(lc).render(m.jsx(Af.StrictMode,{children:m.jsx(yw,{embedded:Ig,initialTab:k0?lc.dataset.initialTab||Pg.get("tab")||"map":"frontend",publicOnly:!k0})}));
