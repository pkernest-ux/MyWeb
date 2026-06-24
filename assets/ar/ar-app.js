function uv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ju={exports:{}},Ja={},Wu={exports:{}},qt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function dv(){if(fm)return qt;fm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=S&&B[S]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function y(B,le,tt){this.props=B,this.context=le,this.refs=D,this.updater=tt||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,le){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,le,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=y.prototype;function U(B,le,tt){this.props=B,this.context=le,this.refs=D,this.updater=tt||M}var R=U.prototype=new _;R.constructor=U,C(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(B,le,tt){var it,Ce={},ue=null,be=null;if(le!=null)for(it in le.ref!==void 0&&(be=le.ref),le.key!==void 0&&(ue=""+le.key),le)H.call(le,it)&&!k.hasOwnProperty(it)&&(Ce[it]=le[it]);var ye=arguments.length-2;if(ye===1)Ce.children=tt;else if(1<ye){for(var Le=Array(ye),at=0;at<ye;at++)Le[at]=arguments[at+2];Ce.children=Le}if(B&&B.defaultProps)for(it in ye=B.defaultProps,ye)Ce[it]===void 0&&(Ce[it]=ye[it]);return{$$typeof:s,type:B,key:ue,ref:be,props:Ce,_owner:I.current}}function N(B,le){return{$$typeof:s,type:B.type,key:le,ref:B.ref,props:B.props,_owner:B._owner}}function X(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function G(B){var le={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(tt){return le[tt]})}var Q=/\/+/g;function re(B,le){return typeof B=="object"&&B!==null&&B.key!=null?G(""+B.key):le.toString(36)}function pe(B,le,tt,it,Ce){var ue=typeof B;(ue==="undefined"||ue==="boolean")&&(B=null);var be=!1;if(B===null)be=!0;else switch(ue){case"string":case"number":be=!0;break;case"object":switch(B.$$typeof){case s:case e:be=!0}}if(be)return be=B,Ce=Ce(be),B=it===""?"."+re(be,0):it,P(Ce)?(tt="",B!=null&&(tt=B.replace(Q,"$&/")+"/"),pe(Ce,le,tt,"",function(at){return at})):Ce!=null&&(X(Ce)&&(Ce=N(Ce,tt+(!Ce.key||be&&be.key===Ce.key?"":(""+Ce.key).replace(Q,"$&/")+"/")+B)),le.push(Ce)),1;if(be=0,it=it===""?".":it+":",P(B))for(var ye=0;ye<B.length;ye++){ue=B[ye];var Le=it+re(ue,ye);be+=pe(ue,le,tt,Le,Ce)}else if(Le=x(B),typeof Le=="function")for(B=Le.call(B),ye=0;!(ue=B.next()).done;)ue=ue.value,Le=it+re(ue,ye++),be+=pe(ue,le,tt,Le,Ce);else if(ue==="object")throw le=String(B),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return be}function W(B,le,tt){if(B==null)return B;var it=[],Ce=0;return pe(B,it,"","",function(ue){return le.call(tt,ue,Ce++)}),it}function oe(B){if(B._status===-1){var le=B._result;le=le(),le.then(function(tt){(B._status===0||B._status===-1)&&(B._status=1,B._result=tt)},function(tt){(B._status===0||B._status===-1)&&(B._status=2,B._result=tt)}),B._status===-1&&(B._status=0,B._result=le)}if(B._status===1)return B._result.default;throw B._result}var J={current:null},ee={transition:null},he={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:ee,ReactCurrentOwner:I};function ce(){throw Error("act(...) is not supported in production builds of React.")}return qt.Children={map:W,forEach:function(B,le,tt){W(B,function(){le.apply(this,arguments)},tt)},count:function(B){var le=0;return W(B,function(){le++}),le},toArray:function(B){return W(B,function(le){return le})||[]},only:function(B){if(!X(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},qt.Component=y,qt.Fragment=t,qt.Profiler=o,qt.PureComponent=U,qt.StrictMode=r,qt.Suspense=h,qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,qt.act=ce,qt.cloneElement=function(B,le,tt){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var it=C({},B.props),Ce=B.key,ue=B.ref,be=B._owner;if(le!=null){if(le.ref!==void 0&&(ue=le.ref,be=I.current),le.key!==void 0&&(Ce=""+le.key),B.type&&B.type.defaultProps)var ye=B.type.defaultProps;for(Le in le)H.call(le,Le)&&!k.hasOwnProperty(Le)&&(it[Le]=le[Le]===void 0&&ye!==void 0?ye[Le]:le[Le])}var Le=arguments.length-2;if(Le===1)it.children=tt;else if(1<Le){ye=Array(Le);for(var at=0;at<Le;at++)ye[at]=arguments[at+2];it.children=ye}return{$$typeof:s,type:B.type,key:Ce,ref:ue,props:it,_owner:be}},qt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},qt.createElement=T,qt.createFactory=function(B){var le=T.bind(null,B);return le.type=B,le},qt.createRef=function(){return{current:null}},qt.forwardRef=function(B){return{$$typeof:f,render:B}},qt.isValidElement=X,qt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:oe}},qt.memo=function(B,le){return{$$typeof:p,type:B,compare:le===void 0?null:le}},qt.startTransition=function(B){var le=ee.transition;ee.transition={};try{B()}finally{ee.transition=le}},qt.unstable_act=ce,qt.useCallback=function(B,le){return J.current.useCallback(B,le)},qt.useContext=function(B){return J.current.useContext(B)},qt.useDebugValue=function(){},qt.useDeferredValue=function(B){return J.current.useDeferredValue(B)},qt.useEffect=function(B,le){return J.current.useEffect(B,le)},qt.useId=function(){return J.current.useId()},qt.useImperativeHandle=function(B,le,tt){return J.current.useImperativeHandle(B,le,tt)},qt.useInsertionEffect=function(B,le){return J.current.useInsertionEffect(B,le)},qt.useLayoutEffect=function(B,le){return J.current.useLayoutEffect(B,le)},qt.useMemo=function(B,le){return J.current.useMemo(B,le)},qt.useReducer=function(B,le,tt){return J.current.useReducer(B,le,tt)},qt.useRef=function(B){return J.current.useRef(B)},qt.useState=function(B){return J.current.useState(B)},qt.useSyncExternalStore=function(B,le,tt){return J.current.useSyncExternalStore(B,le,tt)},qt.useTransition=function(){return J.current.useTransition()},qt.version="18.3.1",qt}var hm;function Af(){return hm||(hm=1,Wu.exports=dv()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function fv(){if(pm)return Ja;pm=1;var s=Af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var mm;function hv(){return mm||(mm=1,ju.exports=fv()),ju.exports}var m=hv(),Pe=Af();const Cf=uv(Pe);var yl={},Xu={exports:{}},ui={},Yu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function pv(){return gm||(gm=1,(function(s){function e(ee,he){var ce=ee.length;ee.push(he);e:for(;0<ce;){var B=ce-1>>>1,le=ee[B];if(0<o(le,he))ee[B]=he,ee[ce]=le,ce=B;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var he=ee[0],ce=ee.pop();if(ce!==he){ee[0]=ce;e:for(var B=0,le=ee.length,tt=le>>>1;B<tt;){var it=2*(B+1)-1,Ce=ee[it],ue=it+1,be=ee[ue];if(0>o(Ce,ce))ue<le&&0>o(be,Ce)?(ee[B]=be,ee[ue]=ce,B=ue):(ee[B]=Ce,ee[it]=ce,B=it);else if(ue<le&&0>o(be,ce))ee[B]=be,ee[ue]=ce,B=ue;else break e}}return he}function o(ee,he){var ce=ee.sortIndex-he.sortIndex;return ce!==0?ce:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,C=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ee){for(var he=t(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=ee)r(p),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(p)}}function P(ee){if(D=!1,R(ee),!C)if(t(h)!==null)C=!0,oe(H);else{var he=t(p);he!==null&&J(P,he.startTime-ee)}}function H(ee,he){C=!1,D&&(D=!1,_(T),T=-1),M=!0;var ce=x;try{for(R(he),S=t(h);S!==null&&(!(S.expirationTime>he)||ee&&!G());){var B=S.callback;if(typeof B=="function"){S.callback=null,x=S.priorityLevel;var le=B(S.expirationTime<=he);he=s.unstable_now(),typeof le=="function"?S.callback=le:S===t(h)&&r(h),R(he)}else r(h);S=t(h)}if(S!==null)var tt=!0;else{var it=t(p);it!==null&&J(P,it.startTime-he),tt=!1}return tt}finally{S=null,x=ce,M=!1}}var I=!1,k=null,T=-1,N=5,X=-1;function G(){return!(s.unstable_now()-X<N)}function Q(){if(k!==null){var ee=s.unstable_now();X=ee;var he=!0;try{he=k(!0,ee)}finally{he?re():(I=!1,k=null)}}else I=!1}var re;if(typeof U=="function")re=function(){U(Q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,W=pe.port2;pe.port1.onmessage=Q,re=function(){W.postMessage(null)}}else re=function(){y(Q,0)};function oe(ee){k=ee,I||(I=!0,re())}function J(ee,he){T=y(function(){ee(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){C||M||(C=!0,oe(H))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(ee){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ce=x;x=he;try{return ee()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ce=x;x=ee;try{return he()}finally{x=ce}},s.unstable_scheduleCallback=function(ee,he,ce){var B=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?B+ce:B):ce=B,ee){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ce+le,ee={id:v++,callback:he,priorityLevel:ee,startTime:ce,expirationTime:le,sortIndex:-1},ce>B?(ee.sortIndex=ce,e(p,ee),t(h)===null&&ee===t(p)&&(D?(_(T),T=-1):D=!0,J(P,ce-B))):(ee.sortIndex=le,e(h,ee),C||M||(C=!0,oe(H))),ee},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(ee){var he=x;return function(){var ce=x;x=he;try{return ee.apply(this,arguments)}finally{x=ce}}}})($u)),$u}var xm;function mv(){return xm||(xm=1,Yu.exports=pv()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function gv(){if(vm)return ui;vm=1;var s=Af(),e=mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function D(n,i,a,c,d,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new D(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new D(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new D(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new D(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new D(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new D(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new D(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new D(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new D(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new D(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new D(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);y[i]=new D(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),G=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,B;function le(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var tt=!1;function it(n,i){if(!n||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var d=ge.stack.split(`
`),g=c.stack.split(`
`),A=d.length-1,V=g.length-1;1<=A&&0<=V&&d[A]!==g[V];)V--;for(;1<=A&&0<=V;A--,V--)if(d[A]!==g[V]){if(A!==1||V!==1)do if(A--,V--,0>V||d[A]!==g[V]){var q=`
`+d[A].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=A&&0<=V);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Ce(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=it(n.type,!1),n;case 11:return n=it(n.type.render,!1),n;case 1:return n=it(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case I:return"Portal";case N:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function at(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ht(n){n._valueTracker||(n._valueTracker=at(n))}function Mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ut(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Kt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ot(n,i){bt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||yt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $=Array.isArray;function Pt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Et(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function qe(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Bt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?F(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){We.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ne=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Xe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ve=null,Nt=null,Y=null;function He(n){if(n=Oa(n)){if(typeof Ve!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Uo(i),Ve(n.stateNode,n.type,i))}}function me(n){Nt?Y?Y.push(n):Y=[n]:Nt=n}function ot(){if(Nt){var n=Nt,i=Y;if(Y=Nt=null,He(n),i)for(n=0;n<i.length;n++)He(i[n])}}function Oe(n,i){return n(i)}function _e(){}var lt=!1;function St(n,i,a){if(lt)return n(i,a);lt=!0;try{return Oe(n,i,a)}finally{lt=!1,(Nt!==null||Y!==null)&&(_e(),ot())}}function Xt(n,i){var a=n.stateNode;if(a===null)return null;var c=Uo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Yt=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Yt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Yt=!1}function Ln(n,i,a,c,d,g,A,V,q){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(Be){this.onError(Be)}}var hi=!1,Mi=null,Li=!1,kn=null,$n={onError:function(n){hi=!0,Mi=n}};function Ui(n,i,a,c,d,g,A,V,q){hi=!1,Mi=null,Ln.apply($n,arguments)}function qn(n,i,a,c,d,g,A,V,q){if(Ui.apply(this,arguments),hi){if(hi){var ge=Mi;hi=!1,Mi=null}else throw Error(t(198));Li||(Li=!0,kn=ge)}}function gn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Kn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Fi(n){if(gn(n)!==n)throw Error(t(188))}function Oi(n){var i=n.alternate;if(!i){if(i=gn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Fi(d),n;if(g===c)return Fi(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var A=!1,V=d.child;V;){if(V===a){A=!0,a=d,c=g;break}if(V===c){A=!0,c=d,a=g;break}V=V.sibling}if(!A){for(V=g.child;V;){if(V===a){A=!0,a=g,c=d;break}if(V===c){A=!0,c=g,a=d;break}V=V.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ni(n){return n=Oi(n),n!==null?ii(n):null}function ii(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ii(n);if(i!==null)return i;n=n.sibling}return null}var qi=e.unstable_scheduleCallback,ur=e.unstable_cancelCallback,j=e.unstable_shouldYield,Ue=e.unstable_requestPaint,Se=e.unstable_now,Ye=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,w=e.unstable_UserBlockingPriority,z=e.unstable_NormalPriority,se=e.unstable_LowPriority,K=e.unstable_IdlePriority,ne=null,Te=null;function Ge(n){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:Ie,Ze=Math.log,Je=Math.LN2;function Ie(n){return n>>>=0,n===0?32:31-(Ze(n)/Je|0)|0}var rt=64,Qe=4194304;function wt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ft(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,A=a&268435455;if(A!==0){var V=A&~d;V!==0?c=wt(V):(g&=A,g!==0&&(c=wt(g)))}else A=a&~d,A!==0?c=wt(A):g!==0&&(c=wt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-we(i),d=1<<a,c|=n[a],i&=~d;return c}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-we(g),V=1<<A,q=d[A];q===-1?((V&a)===0||(V&c)!==0)&&(d[A]=$t(V,i)):q<=i&&(n.expiredLanes|=V),g&=~V}}function E(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function L(){var n=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),n}function O(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Z(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-we(i),n[i]=a}function Ae(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-we(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function De(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-we(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ve=0;function st(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pt,et,Vt,xt,Qt,an=!1,yn=[],on=null,Bn=null,dt=null,Ht=new Map,bn=new Map,ri=[],yo="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ea(n,i){switch(n){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Ht.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(i.pointerId)}}function rn(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Oa(i),i!==null&&et(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function mc(n,i,a,c,d){switch(i){case"focusin":return on=rn(on,n,i,a,c,d),!0;case"dragenter":return Bn=rn(Bn,n,i,a,c,d),!0;case"mouseover":return dt=rn(dt,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Ht.set(g,rn(Ht.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,bn.set(g,rn(bn.get(g)||null,n,i,a,c,d)),!0}return!1}function Kf(n){var i=is(n.target);if(i!==null){var a=gn(i);if(a!==null){if(i=a.tag,i===13){if(i=Kn(a),i!==null){n.blockedOn=i,Qt(n.priority,function(){Vt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fe=c,a.target.dispatchEvent(c),Fe=null}else return i=Oa(a),i!==null&&et(i),n.blockedOn=a,!1;i.shift()}return!0}function Zf(n,i,a){So(n)&&a.delete(i)}function Lg(){an=!1,on!==null&&So(on)&&(on=null),Bn!==null&&So(Bn)&&(Bn=null),dt!==null&&So(dt)&&(dt=null),Ht.forEach(Zf),bn.forEach(Zf)}function wa(n,i){n.blockedOn===i&&(n.blockedOn=null,an||(an=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lg)))}function ba(n){function i(d){return wa(d,n)}if(0<yn.length){wa(yn[0],n);for(var a=1;a<yn.length;a++){var c=yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(on!==null&&wa(on,n),Bn!==null&&wa(Bn,n),dt!==null&&wa(dt,n),Ht.forEach(i),bn.forEach(i),a=0;a<ri.length;a++)c=ri[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ri.length&&(a=ri[0],a.blockedOn===null);)Kf(a),a.blockedOn===null&&ri.shift()}var Ps=P.ReactCurrentBatchConfig,Mo=!0;function Ug(n,i,a,c){var d=ve,g=Ps.transition;Ps.transition=null;try{ve=1,gc(n,i,a,c)}finally{ve=d,Ps.transition=g}}function Fg(n,i,a,c){var d=ve,g=Ps.transition;Ps.transition=null;try{ve=4,gc(n,i,a,c)}finally{ve=d,Ps.transition=g}}function gc(n,i,a,c){if(Mo){var d=xc(n,i,a,c);if(d===null)Lc(n,i,c,Eo,a),Ea(n,c);else if(mc(d,n,i,a,c))c.stopPropagation();else if(Ea(n,c),i&4&&-1<yo.indexOf(n)){for(;d!==null;){var g=Oa(d);if(g!==null&&pt(g),g=xc(n,i,a,c),g===null&&Lc(n,i,c,Eo,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Lc(n,i,c,null,a)}}var Eo=null;function xc(n,i,a,c){if(Eo=null,n=Ke(c),n=is(n),n!==null)if(i=gn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Kn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Eo=n,null}function Jf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case ct:return 1;case w:return 4;case z:case se:return 16;case K:return 536870912;default:return 16}default:return 16}}var Pr=null,vc=null,wo=null;function Qf(){if(wo)return wo;var n,i=vc,a=i.length,c,d="value"in Pr?Pr.value:Pr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[g-c];c++);return wo=d.slice(n,1<c?1-c:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function eh(){return!1}function pi(n){function i(a,c,d,g,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?To:eh,this.isPropagationStopped=eh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=pi(Is),Ta=ce({},Is,{view:0,detail:0}),Og=pi(Ta),yc,Sc,Aa,Ao=ce({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(yc=n.screenX-Aa.screenX,Sc=n.screenY-Aa.screenY):Sc=yc=0,Aa=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),th=pi(Ao),kg=ce({},Ao,{dataTransfer:0}),Bg=pi(kg),zg=ce({},Ta,{relatedTarget:0}),Mc=pi(zg),Vg=ce({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=pi(Vg),Gg=ce({},Is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jg=pi(Gg),Wg=ce({},Is,{data:0}),nh=pi(Wg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=$g[n])?!!i[n]:!1}function Ec(){return qg}var Kg=ce({},Ta,{key:function(n){if(n.key){var i=Xg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zg=pi(Kg),Jg=ce({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=pi(Jg),Qg=ce({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),ex=pi(Qg),tx=ce({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=pi(tx),ix=ce({},Ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=pi(ix),sx=[9,13,27,32],wc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var ax=f&&"TextEvent"in window&&!Ca,rh=f&&(!wc||Ca&&8<Ca&&11>=Ca),sh=" ",ah=!1;function oh(n,i){switch(n){case"keyup":return sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function ox(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(ah=!0,sh);case"textInput":return n=i.data,n===sh&&ah?null:n;default:return null}}function lx(n,i){if(Ds)return n==="compositionend"||!wc&&oh(n,i)?(n=Qf(),wo=vc=Pr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!cx[n.type]:i==="textarea"}function uh(n,i,a,c){me(c),i=Io(i,"onChange"),0<i.length&&(a=new _c("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ra=null,Na=null;function ux(n){Ch(n,0)}function Co(n){var i=ks(n);if(Mt(i))return n}function dx(n,i){if(n==="change")return i}var dh=!1;if(f){var bc;if(f){var Tc="oninput"in document;if(!Tc){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Tc=typeof fh.oninput=="function"}bc=Tc}else bc=!1;dh=bc&&(!document.documentMode||9<document.documentMode)}function hh(){Ra&&(Ra.detachEvent("onpropertychange",ph),Na=Ra=null)}function ph(n){if(n.propertyName==="value"&&Co(Na)){var i=[];uh(i,Na,n,Ke(n)),St(ux,i)}}function fx(n,i,a){n==="focusin"?(hh(),Ra=i,Na=a,Ra.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function hx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Co(Na)}function px(n,i){if(n==="click")return Co(i)}function mx(n,i){if(n==="input"||n==="change")return Co(i)}function gx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ki=typeof Object.is=="function"?Object.is:gx;function Pa(n,i){if(ki(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ki(n[d],i[d]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var a=mh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mh(a)}}function xh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vh(){for(var n=window,i=yt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=yt(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xx(n){var i=vh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&xh(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=gh(a,g);var A=gh(a,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vx=f&&"documentMode"in document&&11>=document.documentMode,Ls=null,Cc=null,Ia=null,Rc=!1;function _h(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Ls==null||Ls!==yt(c)||(c=Ls,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Pa(Ia,c)||(Ia=c,c=Io(Cc,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Nc={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function No(n){if(Nc[n])return Nc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in yh)return Nc[n]=i[a];return n}var Sh=No("animationend"),Mh=No("animationiteration"),Eh=No("animationstart"),wh=No("transitionend"),bh=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){bh.set(n,i),l(i,[n])}for(var Pc=0;Pc<Th.length;Pc++){var Ic=Th[Pc],_x=Ic.toLowerCase(),yx=Ic[0].toUpperCase()+Ic.slice(1);Ir(_x,"on"+yx)}Ir(Sh,"onAnimationEnd"),Ir(Mh,"onAnimationIteration"),Ir(Eh,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Ah(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,qn(c,i,void 0,n),n.currentTarget=null}function Ch(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var V=c[A],q=V.instance,ge=V.currentTarget;if(V=V.listener,q!==g&&d.isPropagationStopped())break e;Ah(d,V,ge),g=q}else for(A=0;A<c.length;A++){if(V=c[A],q=V.instance,ge=V.currentTarget,V=V.listener,q!==g&&d.isPropagationStopped())break e;Ah(d,V,ge),g=q}}}if(Li)throw n=kn,Li=!1,kn=null,n}function un(n,i){var a=i[zc];a===void 0&&(a=i[zc]=new Set);var c=n+"__bubble";a.has(c)||(Rh(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),Rh(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Po]){n[Po]=!0,r.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,Dc("selectionchange",!1,i))}}function Rh(n,i,a,c){switch(Jf(i)){case 1:var d=Ug;break;case 4:d=Fg;break;default:d=gc}a=d.bind(null,i,a,n),d=void 0,!Yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Lc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var q=A.tag;if((q===3||q===4)&&(q=A.stateNode.containerInfo,q===d||q.nodeType===8&&q.parentNode===d))return;A=A.return}for(;V!==null;){if(A=is(V),A===null)return;if(q=A.tag,q===5||q===6){c=g=A;continue e}V=V.parentNode}}c=c.return}St(function(){var ge=g,Be=Ke(a),je=[];e:{var ke=bh.get(n);if(ke!==void 0){var ft=_c,gt=n;switch(n){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":ft=Zg;break;case"focusin":gt="focus",ft=Mc;break;case"focusout":gt="blur",ft=Mc;break;case"beforeblur":case"afterblur":ft=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=ex;break;case Sh:case Mh:case Eh:ft=Hg;break;case wh:ft=nx;break;case"scroll":ft=Og;break;case"wheel":ft=rx;break;case"copy":case"cut":case"paste":ft=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=ih}var vt=(i&4)!==0,xn=!vt&&n==="scroll",de=vt?ke!==null?ke+"Capture":null:ke;vt=[];for(var te=ge,fe;te!==null;){fe=te;var $e=fe.stateNode;if(fe.tag===5&&$e!==null&&(fe=$e,de!==null&&($e=Xt(te,de),$e!=null&&vt.push(Ua(te,$e,fe)))),xn)break;te=te.return}0<vt.length&&(ke=new ft(ke,gt,null,a,Be),je.push({event:ke,listeners:vt}))}}if((i&7)===0){e:{if(ke=n==="mouseover"||n==="pointerover",ft=n==="mouseout"||n==="pointerout",ke&&a!==Fe&&(gt=a.relatedTarget||a.fromElement)&&(is(gt)||gt[dr]))break e;if((ft||ke)&&(ke=Be.window===Be?Be:(ke=Be.ownerDocument)?ke.defaultView||ke.parentWindow:window,ft?(gt=a.relatedTarget||a.toElement,ft=ge,gt=gt?is(gt):null,gt!==null&&(xn=gn(gt),gt!==xn||gt.tag!==5&&gt.tag!==6)&&(gt=null)):(ft=null,gt=ge),ft!==gt)){if(vt=th,$e="onMouseLeave",de="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(vt=ih,$e="onPointerLeave",de="onPointerEnter",te="pointer"),xn=ft==null?ke:ks(ft),fe=gt==null?ke:ks(gt),ke=new vt($e,te+"leave",ft,a,Be),ke.target=xn,ke.relatedTarget=fe,$e=null,is(Be)===ge&&(vt=new vt(de,te+"enter",gt,a,Be),vt.target=fe,vt.relatedTarget=xn,$e=vt),xn=$e,ft&&gt)t:{for(vt=ft,de=gt,te=0,fe=vt;fe;fe=Fs(fe))te++;for(fe=0,$e=de;$e;$e=Fs($e))fe++;for(;0<te-fe;)vt=Fs(vt),te--;for(;0<fe-te;)de=Fs(de),fe--;for(;te--;){if(vt===de||de!==null&&vt===de.alternate)break t;vt=Fs(vt),de=Fs(de)}vt=null}else vt=null;ft!==null&&Nh(je,ke,ft,vt,!1),gt!==null&&xn!==null&&Nh(je,xn,gt,vt,!0)}}e:{if(ke=ge?ks(ge):window,ft=ke.nodeName&&ke.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ke.type==="file")var _t=dx;else if(ch(ke))if(dh)_t=mx;else{_t=hx;var At=fx}else(ft=ke.nodeName)&&ft.toLowerCase()==="input"&&(ke.type==="checkbox"||ke.type==="radio")&&(_t=px);if(_t&&(_t=_t(n,ge))){uh(je,_t,a,Be);break e}At&&At(n,ke,ge),n==="focusout"&&(At=ke._wrapperState)&&At.controlled&&ke.type==="number"&&Gt(ke,"number",ke.value)}switch(At=ge?ks(ge):window,n){case"focusin":(ch(At)||At.contentEditable==="true")&&(Ls=At,Cc=ge,Ia=null);break;case"focusout":Ia=Cc=Ls=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,_h(je,a,Be);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":_h(je,a,Be)}var Ct;if(wc)e:{switch(n){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else Ds?oh(n,a)&&(Lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Lt="onCompositionStart");Lt&&(rh&&a.locale!=="ko"&&(Ds||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&Ds&&(Ct=Qf()):(Pr=Be,vc="value"in Pr?Pr.value:Pr.textContent,Ds=!0)),At=Io(ge,Lt),0<At.length&&(Lt=new nh(Lt,n,null,a,Be),je.push({event:Lt,listeners:At}),Ct?Lt.data=Ct:(Ct=lh(a),Ct!==null&&(Lt.data=Ct)))),(Ct=ax?ox(n,a):lx(n,a))&&(ge=Io(ge,"onBeforeInput"),0<ge.length&&(Be=new nh("onBeforeInput","beforeinput",null,a,Be),je.push({event:Be,listeners:ge}),Be.data=Ct))}Ch(je,i)})}function Ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Xt(n,a),g!=null&&c.unshift(Ua(n,g,d)),g=Xt(n,i),g!=null&&c.push(Ua(n,g,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,c,d){for(var g=i._reactName,A=[];a!==null&&a!==c;){var V=a,q=V.alternate,ge=V.stateNode;if(q!==null&&q===c)break;V.tag===5&&ge!==null&&(V=ge,d?(q=Xt(a,g),q!=null&&A.unshift(Ua(a,q,V))):d||(q=Xt(a,g),q!=null&&A.push(Ua(a,q,V)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Ph(n){return(typeof n=="string"?n:""+n).replace(Mx,`
`).replace(Ex,"")}function Do(n,i,a){if(i=Ph(i),Ph(n)!==i&&a)throw Error(t(425))}function Lo(){}var Uc=null,Fc=null;function Oc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(n){return Ih.resolve(null).then(n).catch(Tx)}:kc;function Tx(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ba(i)}function Dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Dh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Os,Fa="__reactProps$"+Os,dr="__reactContainer$"+Os,zc="__reactEvents$"+Os,Ax="__reactListeners$"+Os,Cx="__reactHandles$"+Os;function is(n){var i=n[Ki];if(i)return i;for(var a=n.parentNode;a;){if(i=a[dr]||a[Ki]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Dh(n);n!==null;){if(a=n[Ki])return a;n=Dh(n)}return i}n=a,a=n.parentNode}return null}function Oa(n){return n=n[Ki]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Uo(n){return n[Fa]||null}var Vc=[],Bs=-1;function Lr(n){return{current:n}}function dn(n){0>Bs||(n.current=Vc[Bs],Vc[Bs]=null,Bs--)}function cn(n,i){Bs++,Vc[Bs]=n.current,n.current=i}var Ur={},zn=Lr(Ur),si=Lr(!1),rs=Ur;function zs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ai(n){return n=n.childContextTypes,n!=null}function Fo(){dn(si),dn(zn)}function Lh(n,i,a){if(zn.current!==Ur)throw Error(t(168));cn(zn,i),cn(si,a)}function Uh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ce({},a,c)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,rs=zn.current,cn(zn,n),cn(si,si.current),!0}function Fh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Uh(n,i,rs),c.__reactInternalMemoizedMergedChildContext=n,dn(si),dn(zn),cn(zn,n)):dn(si),cn(si,a)}var fr=null,ko=!1,Hc=!1;function Oh(n){fr===null?fr=[n]:fr.push(n)}function Rx(n){ko=!0,Oh(n)}function Fr(){if(!Hc&&fr!==null){Hc=!0;var n=0,i=ve;try{var a=fr;for(ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,ko=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),qi(ct,Fr),d}finally{ve=i,Hc=!1}}return null}var Vs=[],Hs=0,Bo=null,zo=0,Ei=[],wi=0,ss=null,hr=1,pr="";function as(n,i){Vs[Hs++]=zo,Vs[Hs++]=Bo,Bo=n,zo=i}function kh(n,i,a){Ei[wi++]=hr,Ei[wi++]=pr,Ei[wi++]=ss,ss=n;var c=hr;n=pr;var d=32-we(c)-1;c&=~(1<<d),a+=1;var g=32-we(i)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,hr=1<<32-we(i)+d|a<<d|c,pr=g+n}else hr=1<<g|a<<d|c,pr=n}function Gc(n){n.return!==null&&(as(n,1),kh(n,1,0))}function jc(n){for(;n===Bo;)Bo=Vs[--Hs],Vs[Hs]=null,zo=Vs[--Hs],Vs[Hs]=null;for(;n===ss;)ss=Ei[--wi],Ei[wi]=null,pr=Ei[--wi],Ei[wi]=null,hr=Ei[--wi],Ei[wi]=null}var mi=null,gi=null,fn=!1,Bi=null;function Bh(n,i){var a=Ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(fn){var i=gi;if(i){var a=i;if(!zh(n,i)){if(Wc(n))throw Error(t(418));i=Dr(a.nextSibling);var c=mi;i&&zh(n,i)?Bh(c,a):(n.flags=n.flags&-4097|2,fn=!1,mi=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,fn=!1,mi=n}}}function Vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function Vo(n){if(n!==mi)return!1;if(!fn)return Vh(n),fn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Oc(n.type,n.memoizedProps)),i&&(i=gi)){if(Wc(n))throw Hh(),Error(t(418));for(;i;)Bh(n,i),i=Dr(i.nextSibling)}if(Vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=Dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Dr(n.stateNode.nextSibling):null;return!0}function Hh(){for(var n=gi;n;)n=Dr(n.nextSibling)}function Gs(){gi=mi=null,fn=!1}function Yc(n){Bi===null?Bi=[n]:Bi.push(n)}var Nx=P.ReactCurrentBatchConfig;function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var V=d.refs;A===null?delete V[g]:V[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function jh(n){function i(de,te){if(n){var fe=de.deletions;fe===null?(de.deletions=[te],de.flags|=16):fe.push(te)}}function a(de,te){if(!n)return null;for(;te!==null;)i(de,te),te=te.sibling;return null}function c(de,te){for(de=new Map;te!==null;)te.key!==null?de.set(te.key,te):de.set(te.index,te),te=te.sibling;return de}function d(de,te){return de=jr(de,te),de.index=0,de.sibling=null,de}function g(de,te,fe){return de.index=fe,n?(fe=de.alternate,fe!==null?(fe=fe.index,fe<te?(de.flags|=2,te):fe):(de.flags|=2,te)):(de.flags|=1048576,te)}function A(de){return n&&de.alternate===null&&(de.flags|=2),de}function V(de,te,fe,$e){return te===null||te.tag!==6?(te=ku(fe,de.mode,$e),te.return=de,te):(te=d(te,fe),te.return=de,te)}function q(de,te,fe,$e){var _t=fe.type;return _t===k?Be(de,te,fe.props.children,$e,fe.key):te!==null&&(te.elementType===_t||typeof _t=="object"&&_t!==null&&_t.$$typeof===oe&&Gh(_t)===te.type)?($e=d(te,fe.props),$e.ref=ka(de,te,fe),$e.return=de,$e):($e=fl(fe.type,fe.key,fe.props,null,de.mode,$e),$e.ref=ka(de,te,fe),$e.return=de,$e)}function ge(de,te,fe,$e){return te===null||te.tag!==4||te.stateNode.containerInfo!==fe.containerInfo||te.stateNode.implementation!==fe.implementation?(te=Bu(fe,de.mode,$e),te.return=de,te):(te=d(te,fe.children||[]),te.return=de,te)}function Be(de,te,fe,$e,_t){return te===null||te.tag!==7?(te=ps(fe,de.mode,$e,_t),te.return=de,te):(te=d(te,fe),te.return=de,te)}function je(de,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return te=ku(""+te,de.mode,fe),te.return=de,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case H:return fe=fl(te.type,te.key,te.props,null,de.mode,fe),fe.ref=ka(de,null,te),fe.return=de,fe;case I:return te=Bu(te,de.mode,fe),te.return=de,te;case oe:var $e=te._init;return je(de,$e(te._payload),fe)}if($(te)||he(te))return te=ps(te,de.mode,fe,null),te.return=de,te;Ho(de,te)}return null}function ke(de,te,fe,$e){var _t=te!==null?te.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return _t!==null?null:V(de,te,""+fe,$e);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:return fe.key===_t?q(de,te,fe,$e):null;case I:return fe.key===_t?ge(de,te,fe,$e):null;case oe:return _t=fe._init,ke(de,te,_t(fe._payload),$e)}if($(fe)||he(fe))return _t!==null?null:Be(de,te,fe,$e,null);Ho(de,fe)}return null}function ft(de,te,fe,$e,_t){if(typeof $e=="string"&&$e!==""||typeof $e=="number")return de=de.get(fe)||null,V(te,de,""+$e,_t);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case H:return de=de.get($e.key===null?fe:$e.key)||null,q(te,de,$e,_t);case I:return de=de.get($e.key===null?fe:$e.key)||null,ge(te,de,$e,_t);case oe:var At=$e._init;return ft(de,te,fe,At($e._payload),_t)}if($($e)||he($e))return de=de.get(fe)||null,Be(te,de,$e,_t,null);Ho(te,$e)}return null}function gt(de,te,fe,$e){for(var _t=null,At=null,Ct=te,Lt=te=0,In=null;Ct!==null&&Lt<fe.length;Lt++){Ct.index>Lt?(In=Ct,Ct=null):In=Ct.sibling;var nn=ke(de,Ct,fe[Lt],$e);if(nn===null){Ct===null&&(Ct=In);break}n&&Ct&&nn.alternate===null&&i(de,Ct),te=g(nn,te,Lt),At===null?_t=nn:At.sibling=nn,At=nn,Ct=In}if(Lt===fe.length)return a(de,Ct),fn&&as(de,Lt),_t;if(Ct===null){for(;Lt<fe.length;Lt++)Ct=je(de,fe[Lt],$e),Ct!==null&&(te=g(Ct,te,Lt),At===null?_t=Ct:At.sibling=Ct,At=Ct);return fn&&as(de,Lt),_t}for(Ct=c(de,Ct);Lt<fe.length;Lt++)In=ft(Ct,de,Lt,fe[Lt],$e),In!==null&&(n&&In.alternate!==null&&Ct.delete(In.key===null?Lt:In.key),te=g(In,te,Lt),At===null?_t=In:At.sibling=In,At=In);return n&&Ct.forEach(function(Wr){return i(de,Wr)}),fn&&as(de,Lt),_t}function vt(de,te,fe,$e){var _t=he(fe);if(typeof _t!="function")throw Error(t(150));if(fe=_t.call(fe),fe==null)throw Error(t(151));for(var At=_t=null,Ct=te,Lt=te=0,In=null,nn=fe.next();Ct!==null&&!nn.done;Lt++,nn=fe.next()){Ct.index>Lt?(In=Ct,Ct=null):In=Ct.sibling;var Wr=ke(de,Ct,nn.value,$e);if(Wr===null){Ct===null&&(Ct=In);break}n&&Ct&&Wr.alternate===null&&i(de,Ct),te=g(Wr,te,Lt),At===null?_t=Wr:At.sibling=Wr,At=Wr,Ct=In}if(nn.done)return a(de,Ct),fn&&as(de,Lt),_t;if(Ct===null){for(;!nn.done;Lt++,nn=fe.next())nn=je(de,nn.value,$e),nn!==null&&(te=g(nn,te,Lt),At===null?_t=nn:At.sibling=nn,At=nn);return fn&&as(de,Lt),_t}for(Ct=c(de,Ct);!nn.done;Lt++,nn=fe.next())nn=ft(Ct,de,Lt,nn.value,$e),nn!==null&&(n&&nn.alternate!==null&&Ct.delete(nn.key===null?Lt:nn.key),te=g(nn,te,Lt),At===null?_t=nn:At.sibling=nn,At=nn);return n&&Ct.forEach(function(cv){return i(de,cv)}),fn&&as(de,Lt),_t}function xn(de,te,fe,$e){if(typeof fe=="object"&&fe!==null&&fe.type===k&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:e:{for(var _t=fe.key,At=te;At!==null;){if(At.key===_t){if(_t=fe.type,_t===k){if(At.tag===7){a(de,At.sibling),te=d(At,fe.props.children),te.return=de,de=te;break e}}else if(At.elementType===_t||typeof _t=="object"&&_t!==null&&_t.$$typeof===oe&&Gh(_t)===At.type){a(de,At.sibling),te=d(At,fe.props),te.ref=ka(de,At,fe),te.return=de,de=te;break e}a(de,At);break}else i(de,At);At=At.sibling}fe.type===k?(te=ps(fe.props.children,de.mode,$e,fe.key),te.return=de,de=te):($e=fl(fe.type,fe.key,fe.props,null,de.mode,$e),$e.ref=ka(de,te,fe),$e.return=de,de=$e)}return A(de);case I:e:{for(At=fe.key;te!==null;){if(te.key===At)if(te.tag===4&&te.stateNode.containerInfo===fe.containerInfo&&te.stateNode.implementation===fe.implementation){a(de,te.sibling),te=d(te,fe.children||[]),te.return=de,de=te;break e}else{a(de,te);break}else i(de,te);te=te.sibling}te=Bu(fe,de.mode,$e),te.return=de,de=te}return A(de);case oe:return At=fe._init,xn(de,te,At(fe._payload),$e)}if($(fe))return gt(de,te,fe,$e);if(he(fe))return vt(de,te,fe,$e);Ho(de,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,te!==null&&te.tag===6?(a(de,te.sibling),te=d(te,fe),te.return=de,de=te):(a(de,te),te=ku(fe,de.mode,$e),te.return=de,de=te),A(de)):a(de,te)}return xn}var js=jh(!0),Wh=jh(!1),Go=Lr(null),jo=null,Ws=null,$c=null;function qc(){$c=Ws=jo=null}function Kc(n){var i=Go.current;dn(Go),n._currentValue=i}function Zc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){jo=n,$c=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(oi=!0),n.firstContext=null)}function bi(n){var i=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(jo===null)throw Error(t(308));Ws=n,jo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var os=null;function Jc(n){os===null?os=[n]:os.push(n)}function Xh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Jc(i)):(a.next=d.next,d.next=a),i.interleaved=a,mr(n,c)}function mr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Or=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(en&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,mr(n,a)}return d=c.interleaved,d===null?(i.next=i,Jc(c)):(i.next=d.next,d.next=i),c.interleaved=i,mr(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,De(n,a)}}function $h(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=A:g=g.next=A,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xo(n,i,a,c){var d=n.updateQueue;Or=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var q=V,ge=q.next;q.next=null,A===null?g=ge:A.next=ge,A=q;var Be=n.alternate;Be!==null&&(Be=Be.updateQueue,V=Be.lastBaseUpdate,V!==A&&(V===null?Be.firstBaseUpdate=ge:V.next=ge,Be.lastBaseUpdate=q))}if(g!==null){var je=d.baseState;A=0,Be=ge=q=null,V=g;do{var ke=V.lane,ft=V.eventTime;if((c&ke)===ke){Be!==null&&(Be=Be.next={eventTime:ft,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var gt=n,vt=V;switch(ke=i,ft=a,vt.tag){case 1:if(gt=vt.payload,typeof gt=="function"){je=gt.call(ft,je,ke);break e}je=gt;break e;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=vt.payload,ke=typeof gt=="function"?gt.call(ft,je,ke):gt,ke==null)break e;je=ce({},je,ke);break e;case 2:Or=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,ke=d.effects,ke===null?d.effects=[V]:ke.push(V))}else ft={eventTime:ft,lane:ke,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Be===null?(ge=Be=ft,q=je):Be=Be.next=ft,A|=ke;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;ke=V,V=ke.next,ke.next=null,d.lastBaseUpdate=ke,d.shared.pending=null}}while(!0);if(Be===null&&(q=je),d.baseState=q,d.firstBaseUpdate=ge,d.lastBaseUpdate=Be,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);us|=A,n.lanes=A,n.memoizedState=je}}function qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ba={},Zi=Lr(Ba),za=Lr(Ba),Va=Lr(Ba);function ls(n){if(n===Ba)throw Error(t(174));return n}function eu(n,i){switch(cn(Va,i),cn(za,n),cn(Zi,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:b(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=b(i,n)}dn(Zi),cn(Zi,i)}function Ys(){dn(Zi),dn(za),dn(Va)}function Kh(n){ls(Va.current);var i=ls(Zi.current),a=b(i,n.type);i!==a&&(cn(za,n),cn(Zi,a))}function tu(n){za.current===n&&(dn(Zi),dn(za))}var hn=Lr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nu=[];function iu(){for(var n=0;n<nu.length;n++)nu[n]._workInProgressVersionPrimary=null;nu.length=0}var $o=P.ReactCurrentDispatcher,ru=P.ReactCurrentBatchConfig,cs=0,pn=null,Tn=null,Nn=null,qo=!1,Ha=!1,Ga=0,Px=0;function Vn(){throw Error(t(321))}function su(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ki(n[a],i[a]))return!1;return!0}function au(n,i,a,c,d,g){if(cs=g,pn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?Ux:Fx,n=a(c,d),Ha){g=0;do{if(Ha=!1,Ga=0,25<=g)throw Error(t(301));g+=1,Nn=Tn=null,i.updateQueue=null,$o.current=Ox,n=a(c,d)}while(Ha)}if($o.current=Jo,i=Tn!==null&&Tn.next!==null,cs=0,Nn=Tn=pn=null,qo=!1,i)throw Error(t(300));return n}function ou(){var n=Ga!==0;return Ga=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?pn.memoizedState=Nn=n:Nn=Nn.next=n,Nn}function Ti(){if(Tn===null){var n=pn.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var i=Nn===null?pn.memoizedState:Nn.next;if(i!==null)Nn=i,Tn=n;else{if(n===null)throw Error(t(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Nn===null?pn.memoizedState=Nn=n:Nn=Nn.next=n}return Nn}function ja(n,i){return typeof i=="function"?i(n):i}function lu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=A=null,q=null,ge=g;do{var Be=ge.lane;if((cs&Be)===Be)q!==null&&(q=q.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var je={lane:Be,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};q===null?(V=q=je,A=c):q=q.next=je,pn.lanes|=Be,us|=Be}ge=ge.next}while(ge!==null&&ge!==g);q===null?A=c:q.next=V,ki(c,i.memoizedState)||(oi=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,pn.lanes|=g,us|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function cu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);ki(g,i.memoizedState)||(oi=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Zh(){}function Jh(n,i){var a=pn,c=Ti(),d=i(),g=!ki(c.memoizedState,d);if(g&&(c.memoizedState=d,oi=!0),c=c.queue,uu(tp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Nn!==null&&Nn.memoizedState.tag&1){if(a.flags|=2048,Wa(9,ep.bind(null,a,c,d,i),void 0,null),Pn===null)throw Error(t(349));(cs&30)!==0||Qh(a,i,d)}return d}function Qh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ep(n,i,a,c){i.value=a,i.getSnapshot=c,np(i)&&ip(n)}function tp(n,i,a){return a(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ki(n,a)}catch{return!0}}function ip(n){var i=mr(n,1);i!==null&&Gi(i,n,1,-1)}function rp(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Lx.bind(null,pn,n),[i.memoizedState,n]}function Wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function sp(){return Ti().memoizedState}function Ko(n,i,a,c){var d=Ji();pn.flags|=n,d.memoizedState=Wa(1|i,a,void 0,c===void 0?null:c)}function Zo(n,i,a,c){var d=Ti();c=c===void 0?null:c;var g=void 0;if(Tn!==null){var A=Tn.memoizedState;if(g=A.destroy,c!==null&&su(c,A.deps)){d.memoizedState=Wa(i,a,g,c);return}}pn.flags|=n,d.memoizedState=Wa(1|i,a,g,c)}function ap(n,i){return Ko(8390656,8,n,i)}function uu(n,i){return Zo(2048,8,n,i)}function op(n,i){return Zo(4,2,n,i)}function lp(n,i){return Zo(4,4,n,i)}function cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function up(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4,4,cp.bind(null,i,n),a)}function du(){}function dp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function fp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function hp(n,i,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=a):(ki(a,i)||(a=L(),pn.lanes|=a,us|=a,n.baseState=!0),i)}function Ix(n,i){var a=ve;ve=a!==0&&4>a?a:4,n(!0);var c=ru.transition;ru.transition={};try{n(!1),i()}finally{ve=a,ru.transition=c}}function pp(){return Ti().memoizedState}function Dx(n,i,a){var c=Hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,a);else if(a=Xh(n,i,a,c),a!==null){var d=Jn();Gi(a,n,c,d),xp(a,i,c)}}function Lx(n,i,a){var c=Hr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,V=g(A,a);if(d.hasEagerState=!0,d.eagerState=V,ki(V,A)){var q=i.interleaved;q===null?(d.next=d,Jc(i)):(d.next=q.next,q.next=d),i.interleaved=d;return}}catch{}finally{}a=Xh(n,i,d,c),a!==null&&(d=Jn(),Gi(a,n,c,d),xp(a,i,c))}}function mp(n){var i=n.alternate;return n===pn||i!==null&&i===pn}function gp(n,i){Ha=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function xp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,De(n,a)}}var Jo={readContext:bi,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},Ux={readContext:bi,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:bi,useEffect:ap,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4194308,4,cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ko(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ji();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Dx.bind(null,pn,n),[c.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:du,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=Ix.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=pn,d=Ji();if(fn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Pn===null)throw Error(t(349));(cs&30)!==0||Qh(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,ap(tp.bind(null,c,g,n),[n]),c.flags|=2048,Wa(9,ep.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ji(),i=Pn.identifierPrefix;if(fn){var a=pr,c=hr;a=(c&~(1<<32-we(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Px++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Fx={readContext:bi,useCallback:dp,useContext:bi,useEffect:uu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:lu,useRef:sp,useState:function(){return lu(ja)},useDebugValue:du,useDeferredValue:function(n){var i=Ti();return hp(i,Tn.memoizedState,n)},useTransition:function(){var n=lu(ja)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1},Ox={readContext:bi,useCallback:dp,useContext:bi,useEffect:uu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:cu,useRef:sp,useState:function(){return cu(ja)},useDebugValue:du,useDeferredValue:function(n){var i=Ti();return Tn===null?i.memoizedState=n:hp(i,Tn.memoizedState,n)},useTransition:function(){var n=cu(ja)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1};function zi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?gn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Jn(),d=Hr(n),g=gr(c,d);g.payload=i,a!=null&&(g.callback=a),i=kr(n,g,d),i!==null&&(Gi(i,n,d,c),Wo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Jn(),d=Hr(n),g=gr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=kr(n,g,d),i!==null&&(Gi(i,n,d,c),Wo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Jn(),c=Hr(n),d=gr(a,c);d.tag=2,i!=null&&(d.callback=i),i=kr(n,d,c),i!==null&&(Gi(i,n,c,a),Wo(i,n,c))}};function vp(n,i,a,c,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,c)||!Pa(d,g):!0}function _p(n,i,a){var c=!1,d=Ur,g=i.contextType;return typeof g=="object"&&g!==null?g=bi(g):(d=ai(i)?rs:zn.current,c=i.contextTypes,g=(c=c!=null)?zs(n,d):Ur),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function yp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function hu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Qc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=bi(g):(g=ai(i)?rs:zn.current,d.context=zs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(fu(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),Xo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var a="",c=i;do a+=Ce(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function pu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){al||(al=!0,Nu=c),mu(n,i)},a}function Mp(n,i,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){mu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){mu(n,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Ep(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Jx.bind(null,n,i,a),i.then(n,n))}function wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function bp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=gr(-1,1),i.tag=2,kr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Bx=P.ReactCurrentOwner,oi=!1;function Zn(n,i,a,c){i.child=n===null?Wh(i,null,a,c):js(i,n.child,a,c)}function Tp(n,i,a,c,d){a=a.render;var g=i.ref;return Xs(i,d),c=au(n,i,a,c,g,d),a=ou(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(fn&&a&&Gc(i),i.flags|=1,Zn(n,i,c,d),i.child)}function Ap(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Ou(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Cp(n,i,g,c,d)):(n=fl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var A=g.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(A,c)&&n.ref===i.ref)return xr(n,i,d)}return i.flags|=1,n=jr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Cp(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Pa(g,c)&&n.ref===i.ref)if(oi=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(oi=!0);else return i.lanes=n.lanes,xr(n,i,d)}return gu(n,i,a,c,d)}function Rp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},cn(Ks,xi),xi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,cn(Ks,xi),xi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,cn(Ks,xi),xi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,cn(Ks,xi),xi|=c;return Zn(n,i,d,a),i.child}function Np(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function gu(n,i,a,c,d){var g=ai(a)?rs:zn.current;return g=zs(i,g),Xs(i,d),a=au(n,i,a,c,g,d),c=ou(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,xr(n,i,d)):(fn&&c&&Gc(i),i.flags|=1,Zn(n,i,a,d),i.child)}function Pp(n,i,a,c,d){if(ai(a)){var g=!0;Oo(i)}else g=!1;if(Xs(i,d),i.stateNode===null)tl(n,i),_p(i,a,c),hu(i,a,c,d),c=!0;else if(n===null){var A=i.stateNode,V=i.memoizedProps;A.props=V;var q=A.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=bi(ge):(ge=ai(a)?rs:zn.current,ge=zs(i,ge));var Be=a.getDerivedStateFromProps,je=typeof Be=="function"||typeof A.getSnapshotBeforeUpdate=="function";je||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==c||q!==ge)&&yp(i,A,c,ge),Or=!1;var ke=i.memoizedState;A.state=ke,Xo(i,c,A,d),q=i.memoizedState,V!==c||ke!==q||si.current||Or?(typeof Be=="function"&&(fu(i,a,Be,c),q=i.memoizedState),(V=Or||vp(i,a,V,c,ke,q,ge))?(je||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),A.props=c,A.state=q,A.context=ge,c=V):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Yh(n,i),V=i.memoizedProps,ge=i.type===i.elementType?V:zi(i.type,V),A.props=ge,je=i.pendingProps,ke=A.context,q=a.contextType,typeof q=="object"&&q!==null?q=bi(q):(q=ai(a)?rs:zn.current,q=zs(i,q));var ft=a.getDerivedStateFromProps;(Be=typeof ft=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==je||ke!==q)&&yp(i,A,c,q),Or=!1,ke=i.memoizedState,A.state=ke,Xo(i,c,A,d);var gt=i.memoizedState;V!==je||ke!==gt||si.current||Or?(typeof ft=="function"&&(fu(i,a,ft,c),gt=i.memoizedState),(ge=Or||vp(i,a,ge,c,ke,gt,q)||!1)?(Be||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,gt,q),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,gt,q)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||V===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=gt),A.props=c,A.state=gt,A.context=q,c=ge):(typeof A.componentDidUpdate!="function"||V===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),c=!1)}return xu(n,i,a,c,g,d)}function xu(n,i,a,c,d,g){Np(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&Fh(i,a,!1),xr(n,i,g);c=i.stateNode,Bx.current=i;var V=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=js(i,n.child,null,g),i.child=js(i,null,V,g)):Zn(n,i,V,g),i.memoizedState=c.state,d&&Fh(i,a,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Lh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Lh(n,i.context,!1),eu(n,i.containerInfo)}function Dp(n,i,a,c,d){return Gs(),Yc(d),i.flags|=256,Zn(n,i,a,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lp(n,i,a){var c=i.pendingProps,d=hn.current,g=!1,A=(i.flags&128)!==0,V;if((V=A)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),cn(hn,d&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=hl(A,c,0,null),n=ps(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=_u(a),i.memoizedState=vu,n):yu(i,A));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return zx(n,i,A,c,V,d,a);if(g){g=c.fallback,A=i.mode,d=n.child,V=d.sibling;var q={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=jr(d,q),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=jr(V,g):(g=ps(g,A,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?_u(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~a,i.memoizedState=vu,c}return g=n.child,n=g.sibling,c=jr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,a,c){return c!==null&&Yc(c),js(i,n.child,null,a),n=yu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zx(n,i,a,c,d,g,A){if(a)return i.flags&256?(i.flags&=-257,c=pu(Error(t(422))),el(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=hl({mode:"visible",children:c.children},d,0,null),g=ps(g,d,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,A),i.child.memoizedState=_u(A),i.memoizedState=vu,g);if((i.mode&1)===0)return el(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=pu(g,c,void 0),el(n,i,A,c)}if(V=(A&n.childLanes)!==0,oi||V){if(c=Pn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,mr(n,d),Gi(c,n,d,-1))}return Fu(),c=pu(Error(t(421))),el(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Qx.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,gi=Dr(d.nextSibling),mi=i,fn=!0,Bi=null,n!==null&&(Ei[wi++]=hr,Ei[wi++]=pr,Ei[wi++]=ss,hr=n.id,pr=n.overflow,ss=i),i=yu(i,c.children),i.flags|=4096,i)}function Up(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Zc(n.return,i,a)}function Su(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Fp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Zn(n,i,c.children,a),c=hn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Up(n,a,i);else if(n.tag===19)Up(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(cn(hn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Su(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Yo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Su(i,!0,a,null,g);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function xr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),us|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Vx(n,i,a){switch(i.tag){case 3:Ip(i),Gs();break;case 5:Kh(i);break;case 1:ai(i.type)&&Oo(i);break;case 4:eu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;cn(Go,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(cn(hn,hn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Lp(n,i,a):(cn(hn,hn.current&1),n=xr(n,i,a),n!==null?n.sibling:null);cn(hn,hn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),cn(hn,hn.current),c)break;return null;case 22:case 23:return i.lanes=0,Rp(n,i,a)}return xr(n,i,a)}var Op,Mu,kp,Bp;Op=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mu=function(){},kp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ls(Zi.current);var g=null;switch(a){case"input":d=Ut(n,d),c=Ut(n,c),g=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),g=[];break;case"textarea":d=Et(n,d),c=Et(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}nt(a,c);var A;a=null;for(ge in d)if(!c.hasOwnProperty(ge)&&d.hasOwnProperty(ge)&&d[ge]!=null)if(ge==="style"){var V=d[ge];for(A in V)V.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?g||(g=[]):(g=g||[]).push(ge,null));for(ge in c){var q=c[ge];if(V=d!=null?d[ge]:void 0,c.hasOwnProperty(ge)&&q!==V&&(q!=null||V!=null))if(ge==="style")if(V){for(A in V)!V.hasOwnProperty(A)||q&&q.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in q)q.hasOwnProperty(A)&&V[A]!==q[A]&&(a||(a={}),a[A]=q[A])}else a||(g||(g=[]),g.push(ge,a)),a=q;else ge==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,V=V?V.__html:void 0,q!=null&&V!==q&&(g=g||[]).push(ge,q)):ge==="children"?typeof q!="string"&&typeof q!="number"||(g=g||[]).push(ge,""+q):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(q!=null&&ge==="onScroll"&&un("scroll",n),g||V===q||(g=[])):(g=g||[]).push(ge,q))}a&&(g=g||[]).push("style",a);var ge=g;(i.updateQueue=ge)&&(i.flags|=4)}},Bp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Xa(n,i){if(!fn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Hx(n,i,a){var c=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(i),null;case 1:return ai(i.type)&&Fo(),Hn(i),null;case 3:return c=i.stateNode,Ys(),dn(si),dn(zn),iu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bi!==null&&(Du(Bi),Bi=null))),Mu(n,i),Hn(i),null;case 5:tu(i);var d=ls(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)kp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Hn(i),null}if(n=ls(Zi.current),Vo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ki]=i,c[Fa]=g,n=(i.mode&1)!==0,a){case"dialog":un("cancel",c),un("close",c);break;case"iframe":case"object":case"embed":un("load",c);break;case"video":case"audio":for(d=0;d<Da.length;d++)un(Da[d],c);break;case"source":un("error",c);break;case"img":case"image":case"link":un("error",c),un("load",c);break;case"details":un("toggle",c);break;case"input":Kt(c,g),un("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},un("invalid",c);break;case"textarea":Tt(c,g),un("invalid",c)}nt(a,g),d=null;for(var A in g)if(g.hasOwnProperty(A)){var V=g[A];A==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Do(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Do(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(A)&&V!=null&&A==="onScroll"&&un("scroll",c)}switch(a){case"input":ht(c),Rt(c,g,!0);break;case"textarea":ht(c),Bt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Lo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Ki]=i,n[Fa]=c,Op(n,i,!1,!1),i.stateNode=n;e:{switch(A=Xe(a,c),a){case"dialog":un("cancel",n),un("close",n),d=c;break;case"iframe":case"object":case"embed":un("load",n),d=c;break;case"video":case"audio":for(d=0;d<Da.length;d++)un(Da[d],n);d=c;break;case"source":un("error",n),d=c;break;case"img":case"image":case"link":un("error",n),un("load",n),d=c;break;case"details":un("toggle",n),d=c;break;case"input":Kt(n,c),d=Ut(n,c),un("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),un("invalid",n);break;case"textarea":Tt(n,c),d=Et(n,c),un("invalid",n);break;default:d=c}nt(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var q=V[g];g==="style"?Ee(n,q):g==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Me(n,q)):g==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&Re(n,q):typeof q=="number"&&Re(n,""+q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?q!=null&&g==="onScroll"&&un("scroll",n):q!=null&&R(n,g,q,A))}switch(a){case"input":ht(n),Rt(n,c,!1);break;case"textarea":ht(n),Bt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Pt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Pt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Hn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Va.current),ls(Zi.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ki]=i,(g=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:Do(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ki]=i,i.stateNode=c}return Hn(i),null;case 13:if(dn(hn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(fn&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hh(),Gs(),i.flags|=98560,g=!1;else if(g=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ki]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Hn(i),g=!1}else Bi!==null&&(Du(Bi),Bi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(hn.current&1)!==0?An===0&&(An=3):Fu())),i.updateQueue!==null&&(i.flags|=4),Hn(i),null);case 4:return Ys(),Mu(n,i),n===null&&La(i.stateNode.containerInfo),Hn(i),null;case 10:return Kc(i.type._context),Hn(i),null;case 17:return ai(i.type)&&Fo(),Hn(i),null;case 19:if(dn(hn),g=i.memoizedState,g===null)return Hn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)Xa(g,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Yo(n),A!==null){for(i.flags|=128,Xa(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return cn(hn,hn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Se()>Zs&&(i.flags|=128,c=!0,Xa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!fn)return Hn(i),null}else 2*Se()-g.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,Xa(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(a=g.last,a!==null?a.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Se(),i.sibling=null,a=hn.current,cn(hn,c?a&1|2:a&1),i):(Hn(i),null);case 22:case 23:return Uu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(xi&1073741824)!==0&&(Hn(i),i.subtreeFlags&6&&(i.flags|=8192)):Hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gx(n,i){switch(jc(i),i.tag){case 1:return ai(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),dn(si),dn(zn),iu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return tu(i),null;case 13:if(dn(hn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return dn(hn),null;case 4:return Ys(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var nl=!1,Gn=!1,jx=typeof WeakSet=="function"?WeakSet:Set,mt=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){mn(n,i,c)}else a.current=null}function Eu(n,i,a){try{a()}catch(c){mn(n,i,c)}}var zp=!1;function Wx(n,i){if(Uc=Mo,n=vh(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var A=0,V=-1,q=-1,ge=0,Be=0,je=n,ke=null;t:for(;;){for(var ft;je!==a||d!==0&&je.nodeType!==3||(V=A+d),je!==g||c!==0&&je.nodeType!==3||(q=A+c),je.nodeType===3&&(A+=je.nodeValue.length),(ft=je.firstChild)!==null;)ke=je,je=ft;for(;;){if(je===n)break t;if(ke===a&&++ge===d&&(V=A),ke===g&&++Be===c&&(q=A),(ft=je.nextSibling)!==null)break;je=ke,ke=je.parentNode}je=ft}a=V===-1||q===-1?null:{start:V,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},Mo=!1,mt=i;mt!==null;)if(i=mt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,mt=n;else for(;mt!==null;){i=mt;try{var gt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(gt!==null){var vt=gt.memoizedProps,xn=gt.memoizedState,de=i.stateNode,te=de.getSnapshotBeforeUpdate(i.elementType===i.type?vt:zi(i.type,vt),xn);de.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch($e){mn(i,i.return,$e)}if(n=i.sibling,n!==null){n.return=i.return,mt=n;break}mt=i.return}return gt=zp,zp=!1,gt}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Eu(i,a,g)}d=d.next}while(d!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function wu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Vp(n){var i=n.alternate;i!==null&&(n.alternate=null,Vp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ki],delete i[Fa],delete i[zc],delete i[Ax],delete i[Cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}var Un=null,Vi=!1;function Br(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:Gn||qs(a,i);case 6:var c=Un,d=Vi;Un=null,Br(n,i,a),Un=c,Vi=d,Un!==null&&(Vi?(n=Un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(Vi?(n=Un,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),ba(n)):Bc(Un,a.stateNode));break;case 4:c=Un,d=Vi,Un=a.stateNode.containerInfo,Vi=!0,Br(n,i,a),Un=c,Vi=d;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Eu(a,i,A),d=d.next}while(d!==c)}Br(n,i,a);break;case 1:if(!Gn&&(qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){mn(a,i,V)}Br(n,i,a);break;case 21:Br(n,i,a);break;case 22:a.mode&1?(Gn=(c=Gn)||a.memoizedState!==null,Br(n,i,a),Gn=c):Br(n,i,a);break;default:Br(n,i,a)}}function Wp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jx),i.forEach(function(c){var d=ev.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Hi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,A=i,V=A;e:for(;V!==null;){switch(V.tag){case 5:Un=V.stateNode,Vi=!1;break e;case 3:Un=V.stateNode.containerInfo,Vi=!0;break e;case 4:Un=V.stateNode.containerInfo,Vi=!0;break e}V=V.return}if(Un===null)throw Error(t(160));jp(g,A,d),Un=null,Vi=!1;var q=d.alternate;q!==null&&(q.return=null),d.return=null}catch(ge){mn(d,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xp(i,n),i=i.sibling}function Xp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hi(i,n),Qi(n),c&4){try{Ya(3,n,n.return),il(3,n)}catch(vt){mn(n,n.return,vt)}try{Ya(5,n,n.return)}catch(vt){mn(n,n.return,vt)}}break;case 1:Hi(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Hi(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(vt){mn(n,n.return,vt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,A=a!==null?a.memoizedProps:g,V=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&bt(d,g),Xe(V,A);var ge=Xe(V,g);for(A=0;A<q.length;A+=2){var Be=q[A],je=q[A+1];Be==="style"?Ee(d,je):Be==="dangerouslySetInnerHTML"?Me(d,je):Be==="children"?Re(d,je):R(d,Be,je,ge)}switch(V){case"input":Ot(d,g);break;case"textarea":qe(d,g);break;case"select":var ke=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ft=g.value;ft!=null?Pt(d,!!g.multiple,ft,!1):ke!==!!g.multiple&&(g.defaultValue!=null?Pt(d,!!g.multiple,g.defaultValue,!0):Pt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Fa]=g}catch(vt){mn(n,n.return,vt)}}break;case 6:if(Hi(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(vt){mn(n,n.return,vt)}}break;case 3:if(Hi(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(vt){mn(n,n.return,vt)}break;case 4:Hi(i,n),Qi(n);break;case 13:Hi(i,n),Qi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ru=Se())),c&4&&Wp(n);break;case 22:if(Be=a!==null&&a.memoizedState!==null,n.mode&1?(Gn=(ge=Gn)||Be,Hi(i,n),Gn=ge):Hi(i,n),Qi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!Be&&(n.mode&1)!==0)for(mt=n,Be=n.child;Be!==null;){for(je=mt=Be;mt!==null;){switch(ke=mt,ft=ke.child,ke.tag){case 0:case 11:case 14:case 15:Ya(4,ke,ke.return);break;case 1:qs(ke,ke.return);var gt=ke.stateNode;if(typeof gt.componentWillUnmount=="function"){c=ke,a=ke.return;try{i=c,gt.props=i.memoizedProps,gt.state=i.memoizedState,gt.componentWillUnmount()}catch(vt){mn(c,a,vt)}}break;case 5:qs(ke,ke.return);break;case 22:if(ke.memoizedState!==null){qp(je);continue}}ft!==null?(ft.return=ke,mt=ft):qp(je)}Be=Be.sibling}e:for(Be=null,je=n;;){if(je.tag===5){if(Be===null){Be=je;try{d=je.stateNode,ge?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=je.stateNode,q=je.memoizedProps.style,A=q!=null&&q.hasOwnProperty("display")?q.display:null,V.style.display=xe("display",A))}catch(vt){mn(n,n.return,vt)}}}else if(je.tag===6){if(Be===null)try{je.stateNode.nodeValue=ge?"":je.memoizedProps}catch(vt){mn(n,n.return,vt)}}else if((je.tag!==22&&je.tag!==23||je.memoizedState===null||je===n)&&je.child!==null){je.child.return=je,je=je.child;continue}if(je===n)break e;for(;je.sibling===null;){if(je.return===null||je.return===n)break e;Be===je&&(Be=null),je=je.return}Be===je&&(Be=null),je.sibling.return=je.return,je=je.sibling}}break;case 19:Hi(i,n),Qi(n),c&4&&Wp(n);break;case 21:break;default:Hi(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Hp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Re(d,""),c.flags&=-33);var g=Gp(n);Tu(n,g,d);break;case 3:case 4:var A=c.stateNode.containerInfo,V=Gp(n);bu(n,V,A);break;default:throw Error(t(161))}}catch(q){mn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xx(n,i,a){mt=n,Yp(n)}function Yp(n,i,a){for(var c=(n.mode&1)!==0;mt!==null;){var d=mt,g=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||nl;if(!A){var V=d.alternate,q=V!==null&&V.memoizedState!==null||Gn;V=nl;var ge=Gn;if(nl=A,(Gn=q)&&!ge)for(mt=d;mt!==null;)A=mt,q=A.child,A.tag===22&&A.memoizedState!==null?Kp(d):q!==null?(q.return=A,mt=q):Kp(d);for(;g!==null;)mt=g,Yp(g),g=g.sibling;mt=d,nl=V,Gn=ge}$p(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,mt=g):$p(n)}}function $p(n){for(;mt!==null;){var i=mt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:zi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&qh(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qh(i,A,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var Be=ge.memoizedState;if(Be!==null){var je=Be.dehydrated;je!==null&&ba(je)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||i.flags&512&&wu(i)}catch(ke){mn(i,i.return,ke)}}if(i===n){mt=null;break}if(a=i.sibling,a!==null){a.return=i.return,mt=a;break}mt=i.return}}function qp(n){for(;mt!==null;){var i=mt;if(i===n){mt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,mt=a;break}mt=i.return}}function Kp(n){for(;mt!==null;){var i=mt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{il(4,i)}catch(q){mn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(q){mn(i,d,q)}}var g=i.return;try{wu(i)}catch(q){mn(i,g,q)}break;case 5:var A=i.return;try{wu(i)}catch(q){mn(i,A,q)}}}catch(q){mn(i,i.return,q)}if(i===n){mt=null;break}var V=i.sibling;if(V!==null){V.return=i.return,mt=V;break}mt=i.return}}var Yx=Math.ceil,rl=P.ReactCurrentDispatcher,Au=P.ReactCurrentOwner,Ai=P.ReactCurrentBatchConfig,en=0,Pn=null,Sn=null,Fn=0,xi=0,Ks=Lr(0),An=0,$a=null,us=0,sl=0,Cu=0,qa=null,li=null,Ru=0,Zs=1/0,vr=null,al=!1,Nu=null,zr=null,ol=!1,Vr=null,ll=0,Ka=0,Pu=null,cl=-1,ul=0;function Jn(){return(en&6)!==0?Se():cl!==-1?cl:cl=Se()}function Hr(n){return(n.mode&1)===0?1:(en&2)!==0&&Fn!==0?Fn&-Fn:Nx.transition!==null?(ul===0&&(ul=L()),ul):(n=ve,n!==0||(n=window.event,n=n===void 0?16:Jf(n.type)),n)}function Gi(n,i,a,c){if(50<Ka)throw Ka=0,Pu=null,Error(t(185));Z(n,a,c),((en&2)===0||n!==Pn)&&(n===Pn&&((en&2)===0&&(sl|=a),An===4&&Gr(n,Fn)),ci(n,c),a===1&&en===0&&(i.mode&1)===0&&(Zs=Se()+500,ko&&Fr()))}function ci(n,i){var a=n.callbackNode;zt(n,i);var c=Ft(n,n===Pn?Fn:0);if(c===0)a!==null&&ur(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ur(a),i===1)n.tag===0?Rx(Jp.bind(null,n)):Oh(Jp.bind(null,n)),bx(function(){(en&6)===0&&Fr()}),a=null;else{switch(st(c)){case 1:a=ct;break;case 4:a=w;break;case 16:a=z;break;case 536870912:a=K;break;default:a=z}a=am(a,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zp(n,i){if(cl=-1,ul=0,(en&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Ft(n,n===Pn?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var d=en;en|=2;var g=em();(Pn!==n||Fn!==i)&&(vr=null,Zs=Se()+500,fs(n,i));do try{Kx();break}catch(V){Qp(n,V)}while(!0);qc(),rl.current=g,en=d,Sn!==null?i=0:(Pn=null,Fn=0,i=An)}if(i!==0){if(i===2&&(d=E(n),d!==0&&(c=d,i=Iu(n,d))),i===1)throw a=$a,fs(n,0),Gr(n,c),ci(n,Se()),a;if(i===6)Gr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!$x(d)&&(i=dl(n,c),i===2&&(g=E(n),g!==0&&(c=g,i=Iu(n,g))),i===1))throw a=$a,fs(n,0),Gr(n,c),ci(n,Se()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,li,vr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(i=Ru+500-Se(),10<i)){if(Ft(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Jn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=kc(hs.bind(null,n,li,vr),i);break}hs(n,li,vr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-we(c);g=1<<A,A=i[A],A>d&&(d=A),c&=~g}if(c=d,c=Se()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Yx(c/1960))-c,10<c){n.timeoutHandle=kc(hs.bind(null,n,li,vr),c);break}hs(n,li,vr);break;case 5:hs(n,li,vr);break;default:throw Error(t(329))}}}return ci(n,Se()),n.callbackNode===a?Zp.bind(null,n):null}function Iu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=dl(n,i),n!==2&&(i=li,li=a,i!==null&&Du(i)),n}function Du(n){li===null?li=n:li.push.apply(li,n)}function $x(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!ki(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(n,i){for(i&=~Cu,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-we(i),c=1<<a;n[a]=-1,i&=~c}}function Jp(n){if((en&6)!==0)throw Error(t(327));Js();var i=Ft(n,0);if((i&1)===0)return ci(n,Se()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var c=E(n);c!==0&&(i=c,a=Iu(n,c))}if(a===1)throw a=$a,fs(n,0),Gr(n,i),ci(n,Se()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,li,vr),ci(n,Se()),null}function Lu(n,i){var a=en;en|=1;try{return n(i)}finally{en=a,en===0&&(Zs=Se()+500,ko&&Fr())}}function ds(n){Vr!==null&&Vr.tag===0&&(en&6)===0&&Js();var i=en;en|=1;var a=Ai.transition,c=ve;try{if(Ai.transition=null,ve=1,n)return n()}finally{ve=c,Ai.transition=a,en=i,(en&6)===0&&Fr()}}function Uu(){xi=Ks.current,dn(Ks)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,wx(a)),Sn!==null)for(a=Sn.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fo();break;case 3:Ys(),dn(si),dn(zn),iu();break;case 5:tu(c);break;case 4:Ys();break;case 13:dn(hn);break;case 19:dn(hn);break;case 10:Kc(c.type._context);break;case 22:case 23:Uu()}a=a.return}if(Pn=n,Sn=n=jr(n.current,null),Fn=xi=i,An=0,$a=null,Cu=sl=us=0,li=qa=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var A=g.next;g.next=d,c.next=A}a.pending=c}os=null}return n}function Qp(n,i){do{var a=Sn;try{if(qc(),$o.current=Jo,qo){for(var c=pn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}qo=!1}if(cs=0,Nn=Tn=pn=null,Ha=!1,Ga=0,Au.current=null,a===null||a.return===null){An=1,$a=i,Sn=null;break}e:{var g=n,A=a.return,V=a,q=i;if(i=Fn,V.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ge=q,Be=V,je=Be.tag;if((Be.mode&1)===0&&(je===0||je===11||je===15)){var ke=Be.alternate;ke?(Be.updateQueue=ke.updateQueue,Be.memoizedState=ke.memoizedState,Be.lanes=ke.lanes):(Be.updateQueue=null,Be.memoizedState=null)}var ft=wp(A);if(ft!==null){ft.flags&=-257,bp(ft,A,V,g,i),ft.mode&1&&Ep(g,ge,i),i=ft,q=ge;var gt=i.updateQueue;if(gt===null){var vt=new Set;vt.add(q),i.updateQueue=vt}else gt.add(q);break e}else{if((i&1)===0){Ep(g,ge,i),Fu();break e}q=Error(t(426))}}else if(fn&&V.mode&1){var xn=wp(A);if(xn!==null){(xn.flags&65536)===0&&(xn.flags|=256),bp(xn,A,V,g,i),Yc($s(q,V));break e}}g=q=$s(q,V),An!==4&&(An=2),qa===null?qa=[g]:qa.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var de=Sp(g,q,i);$h(g,de);break e;case 1:V=q;var te=g.type,fe=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(zr===null||!zr.has(fe)))){g.flags|=65536,i&=-i,g.lanes|=i;var $e=Mp(g,V,i);$h(g,$e);break e}}g=g.return}while(g!==null)}nm(a)}catch(_t){i=_t,Sn===a&&a!==null&&(Sn=a=a.return);continue}break}while(!0)}function em(){var n=rl.current;return rl.current=Jo,n===null?Jo:n}function Fu(){(An===0||An===3||An===2)&&(An=4),Pn===null||(us&268435455)===0&&(sl&268435455)===0||Gr(Pn,Fn)}function dl(n,i){var a=en;en|=2;var c=em();(Pn!==n||Fn!==i)&&(vr=null,fs(n,i));do try{qx();break}catch(d){Qp(n,d)}while(!0);if(qc(),en=a,rl.current=c,Sn!==null)throw Error(t(261));return Pn=null,Fn=0,An}function qx(){for(;Sn!==null;)tm(Sn)}function Kx(){for(;Sn!==null&&!j();)tm(Sn)}function tm(n){var i=sm(n.alternate,n,xi);n.memoizedProps=n.pendingProps,i===null?nm(n):Sn=i,Au.current=null}function nm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Hx(a,i,xi),a!==null){Sn=a;return}}else{if(a=Gx(a,i),a!==null){a.flags&=32767,Sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{An=6,Sn=null;return}}if(i=i.sibling,i!==null){Sn=i;return}Sn=i=n}while(i!==null);An===0&&(An=5)}function hs(n,i,a){var c=ve,d=Ai.transition;try{Ai.transition=null,ve=1,Zx(n,i,a,c)}finally{Ai.transition=d,ve=c}return null}function Zx(n,i,a,c){do Js();while(Vr!==null);if((en&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ae(n,g),n===Pn&&(Sn=Pn=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ol||(ol=!0,am(z,function(){return Js(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ai.transition,Ai.transition=null;var A=ve;ve=1;var V=en;en|=4,Au.current=null,Wx(n,a),Xp(a,n),xx(Fc),Mo=!!Uc,Fc=Uc=null,n.current=a,Xx(a),Ue(),en=V,ve=A,Ai.transition=g}else n.current=a;if(ol&&(ol=!1,Vr=n,ll=d),g=n.pendingLanes,g===0&&(zr=null),Ge(a.stateNode),ci(n,Se()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,n=Nu,Nu=null,n;return(ll&1)!==0&&n.tag!==0&&Js(),g=n.pendingLanes,(g&1)!==0?n===Pu?Ka++:(Ka=0,Pu=n):Ka=0,Fr(),null}function Js(){if(Vr!==null){var n=st(ll),i=Ai.transition,a=ve;try{if(Ai.transition=null,ve=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,ll=0,(en&6)!==0)throw Error(t(331));var d=en;for(en|=4,mt=n.current;mt!==null;){var g=mt,A=g.child;if((mt.flags&16)!==0){var V=g.deletions;if(V!==null){for(var q=0;q<V.length;q++){var ge=V[q];for(mt=ge;mt!==null;){var Be=mt;switch(Be.tag){case 0:case 11:case 15:Ya(8,Be,g)}var je=Be.child;if(je!==null)je.return=Be,mt=je;else for(;mt!==null;){Be=mt;var ke=Be.sibling,ft=Be.return;if(Vp(Be),Be===ge){mt=null;break}if(ke!==null){ke.return=ft,mt=ke;break}mt=ft}}}var gt=g.alternate;if(gt!==null){var vt=gt.child;if(vt!==null){gt.child=null;do{var xn=vt.sibling;vt.sibling=null,vt=xn}while(vt!==null)}}mt=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,mt=A;else e:for(;mt!==null;){if(g=mt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var de=g.sibling;if(de!==null){de.return=g.return,mt=de;break e}mt=g.return}}var te=n.current;for(mt=te;mt!==null;){A=mt;var fe=A.child;if((A.subtreeFlags&2064)!==0&&fe!==null)fe.return=A,mt=fe;else e:for(A=te;mt!==null;){if(V=mt,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:il(9,V)}}catch(_t){mn(V,V.return,_t)}if(V===A){mt=null;break e}var $e=V.sibling;if($e!==null){$e.return=V.return,mt=$e;break e}mt=V.return}}if(en=d,Fr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{ve=a,Ai.transition=i}}return!1}function im(n,i,a){i=$s(a,i),i=Sp(n,i,1),n=kr(n,i,1),i=Jn(),n!==null&&(Z(n,1,i),ci(n,i))}function mn(n,i,a){if(n.tag===3)im(n,n,a);else for(;i!==null;){if(i.tag===3){im(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){n=$s(a,n),n=Mp(i,n,1),i=kr(i,n,1),n=Jn(),i!==null&&(Z(i,1,n),ci(i,n));break}}i=i.return}}function Jx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Jn(),n.pingedLanes|=n.suspendedLanes&a,Pn===n&&(Fn&a)===a&&(An===4||An===3&&(Fn&130023424)===Fn&&500>Se()-Ru?fs(n,0):Cu|=a),ci(n,i)}function rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var a=Jn();n=mr(n,i),n!==null&&(Z(n,i,a),ci(n,a))}function Qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(n,a)}function ev(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),rm(n,a)}var sm;sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||si.current)oi=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return oi=!1,Vx(n,i,a);oi=(n.flags&131072)!==0}else oi=!1,fn&&(i.flags&1048576)!==0&&kh(i,zo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var d=zs(i,zn.current);Xs(i,a),d=au(null,i,c,n,d,a);var g=ou();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ai(c)?(g=!0,Oo(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qc(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,hu(i,c,n,a),i=xu(null,i,c,!0,g,a)):(i.tag=0,fn&&g&&Gc(i),Zn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nv(c),n=zi(c,n),d){case 0:i=gu(null,i,c,n,a);break e;case 1:i=Pp(null,i,c,n,a);break e;case 11:i=Tp(null,i,c,n,a);break e;case 14:i=Ap(null,i,c,zi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zi(c,d),gu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zi(c,d),Pp(n,i,c,d,a);case 3:e:{if(Ip(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Yh(n,i),Xo(i,c,null,a);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=$s(Error(t(423)),i),i=Dp(n,i,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),i),i=Dp(n,i,c,a,d);break e}else for(gi=Dr(i.stateNode.containerInfo.firstChild),mi=i,fn=!0,Bi=null,a=Wh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=xr(n,i,a);break e}Zn(n,i,c,a)}i=i.child}return i;case 5:return Kh(i),n===null&&Xc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,A=d.children,Oc(c,d)?A=null:g!==null&&Oc(c,g)&&(i.flags|=32),Np(n,i),Zn(n,i,A,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return Lp(n,i,a);case 4:return eu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,a):Zn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zi(c,d),Tp(n,i,c,d,a);case 7:return Zn(n,i,i.pendingProps,a),i.child;case 8:return Zn(n,i,i.pendingProps.children,a),i.child;case 12:return Zn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,A=d.value,cn(Go,c._currentValue),c._currentValue=A,g!==null)if(ki(g.value,A)){if(g.children===d.children&&!si.current){i=xr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){A=g.child;for(var q=V.firstContext;q!==null;){if(q.context===c){if(g.tag===1){q=gr(-1,a&-a),q.tag=2;var ge=g.updateQueue;if(ge!==null){ge=ge.shared;var Be=ge.pending;Be===null?q.next=q:(q.next=Be.next,Be.next=q),ge.pending=q}}g.lanes|=a,q=g.alternate,q!==null&&(q.lanes|=a),Zc(g.return,a,i),V.lanes|=a;break}q=q.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=a,V=A.alternate,V!==null&&(V.lanes|=a),Zc(A,a,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Zn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Xs(i,a),d=bi(d),c=c(d),i.flags|=1,Zn(n,i,c,a),i.child;case 14:return c=i.type,d=zi(c,i.pendingProps),d=zi(c.type,d),Ap(n,i,c,d,a);case 15:return Cp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zi(c,d),tl(n,i),i.tag=1,ai(c)?(n=!0,Oo(i)):n=!1,Xs(i,a),_p(i,c,d),hu(i,c,d,a),xu(null,i,c,!0,n,a);case 19:return Fp(n,i,a);case 22:return Rp(n,i,a)}throw Error(t(156,i.tag))};function am(n,i){return qi(n,i)}function tv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(n,i,a,c){return new tv(n,i,a,c)}function Ou(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nv(n){if(typeof n=="function")return Ou(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===W)return 14}return 2}function jr(n,i){var a=n.alternate;return a===null?(a=Ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fl(n,i,a,c,d,g){var A=2;if(c=n,typeof n=="function")Ou(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return ps(a.children,d,g,i);case T:A=8,d|=8;break;case N:return n=Ci(12,a,i,d|2),n.elementType=N,n.lanes=g,n;case re:return n=Ci(13,a,i,d),n.elementType=re,n.lanes=g,n;case pe:return n=Ci(19,a,i,d),n.elementType=pe,n.lanes=g,n;case J:return hl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:A=10;break e;case G:A=9;break e;case Q:A=11;break e;case W:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ci(A,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ps(n,i,a,c){return n=Ci(7,n,c,i),n.lanes=a,n}function hl(n,i,a,c){return n=Ci(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function ku(n,i,a){return n=Ci(6,n,null,i),n.lanes=a,n}function Bu(n,i,a){return i=Ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=O(0),this.expirationTimes=O(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=O(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zu(n,i,a,c,d,g,A,V,q){return n=new iv(n,i,a,V,q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ci(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(g),n}function rv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function om(n){if(!n)return Ur;n=n._reactInternals;e:{if(gn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ai(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ai(a))return Uh(n,a,i)}return i}function lm(n,i,a,c,d,g,A,V,q){return n=zu(a,c,!0,n,d,g,A,V,q),n.context=om(null),a=n.current,c=Jn(),d=Hr(a),g=gr(c,d),g.callback=i??null,kr(a,g,d),n.current.lanes=d,Z(n,d,c),ci(n,c),n}function pl(n,i,a,c){var d=i.current,g=Jn(),A=Hr(d);return a=om(a),i.context===null?i.context=a:i.pendingContext=a,i=gr(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(d,i,A),n!==null&&(Gi(n,d,A,g),Wo(n,d,A)),A}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Vu(n,i){cm(n,i),(n=n.alternate)&&cm(n,i)}function sv(){return null}var um=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}gl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ds(function(){pl(null,n,null,null)}),i[dr]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=xt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ri.length&&i!==0&&i<ri[a].priority;a++);ri.splice(a,0,n),a===0&&Kf(n)}};function Gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dm(){}function av(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ge=ml(A);g.call(ge)}}var A=lm(i,c,n,0,null,!1,!1,"",dm);return n._reactRootContainer=A,n[dr]=A.current,La(n.nodeType===8?n.parentNode:n),ds(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var ge=ml(q);V.call(ge)}}var q=zu(n,0,!1,null,null,!1,!1,"",dm);return n._reactRootContainer=q,n[dr]=q.current,La(n.nodeType===8?n.parentNode:n),ds(function(){pl(i,q,a,c)}),q}function vl(n,i,a,c,d){var g=a._reactRootContainer;if(g){var A=g;if(typeof d=="function"){var V=d;d=function(){var q=ml(A);V.call(q)}}pl(i,A,n,d)}else A=av(a,i,n,d,c);return ml(A)}pt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=wt(i.pendingLanes);a!==0&&(De(i,a|1),ci(i,Se()),(en&6)===0&&(Zs=Se()+500,Fr()))}break;case 13:ds(function(){var c=mr(n,1);if(c!==null){var d=Jn();Gi(c,n,1,d)}}),Vu(n,1)}},et=function(n){if(n.tag===13){var i=mr(n,134217728);if(i!==null){var a=Jn();Gi(i,n,134217728,a)}Vu(n,134217728)}},Vt=function(n){if(n.tag===13){var i=Hr(n),a=mr(n,i);if(a!==null){var c=Jn();Gi(a,n,i,c)}Vu(n,i)}},xt=function(){return ve},Qt=function(n,i){var a=ve;try{return ve=n,i()}finally{ve=a}},Ve=function(n,i,a){switch(i){case"input":if(Ot(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Uo(c);if(!d)throw Error(t(90));Mt(c),Ot(c,d)}}}break;case"textarea":qe(n,a);break;case"select":i=a.value,i!=null&&Pt(n,!!a.multiple,i,!1)}},Oe=Lu,_e=ds;var ov={usingClientEntryPoint:!1,Events:[Oa,ks,Uo,me,ot,Lu]},Za={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lv={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ni(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{ne=_l.inject(lv),Te=_l}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov,ui.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(t(200));return rv(n,i,null,a)},ui.createRoot=function(n,i){if(!Gu(n))throw Error(t(299));var a=!1,c="",d=um;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=zu(n,1,!1,null,null,a,!1,c,d),n[dr]=i.current,La(n.nodeType===8?n.parentNode:n),new Hu(i)},ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ni(i),n=n===null?null:n.stateNode,n},ui.flushSync=function(n){return ds(n)},ui.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!0,a)},ui.hydrateRoot=function(n,i,a){if(!Gu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",A=um;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=lm(i,null,n,1,a??null,d,!1,g,A),n[dr]=i.current,La(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new gl(i)},ui.render=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!1,a)},ui.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},ui.unstable_batchedUpdates=Lu,ui.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var _m;function xv(){if(_m)return Xu.exports;_m=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xu.exports=gv(),Xu.exports}var ym;function vv(){if(ym)return yl;ym=1;var s=xv();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var _v=vv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="184",yv=0,Sm=1,Sv=2,Xl=1,Mv=2,oo=3,ns=0,fi=1,wr=2,Tr=0,ma=1,Mm=2,Em=3,wm=4,Ev=5,Ms=100,wv=101,bv=102,Tv=103,Av=104,Cv=200,Rv=201,Nv=202,Pv=203,Dd=204,Ld=205,Iv=206,Dv=207,Lv=208,Uv=209,Fv=210,Ov=211,kv=212,Bv=213,zv=214,Ud=0,Fd=1,Od=2,xa=3,kd=4,Bd=5,zd=6,Vd=7,z0=0,Vv=1,Hv=2,sr=0,V0=1,H0=2,G0=3,j0=4,W0=5,X0=6,Y0=7,$0=300,As=301,va=302,qu=303,Ku=304,uc=306,Hd=1e3,br=1001,Gd=1002,On=1003,Gv=1004,Sl=1005,Yn=1006,Zu=1007,ws=1008,Di=1009,q0=1010,K0=1011,mo=1012,Nf=1013,lr=1014,ir=1015,Cr=1016,Pf=1017,If=1018,go=1020,Z0=35902,J0=35899,Q0=1021,eg=1022,$i=1023,Rr=1026,bs=1027,tg=1028,Df=1029,Cs=1030,Lf=1031,Uf=1033,Yl=33776,$l=33777,ql=33778,Kl=33779,jd=35840,Wd=35841,Xd=35842,Yd=35843,$d=36196,qd=37492,Kd=37496,Zd=37488,Jd=37489,Ql=37490,Qd=37491,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,af=37813,of=37814,lf=37815,cf=37816,uf=37817,df=37818,ff=37819,hf=37820,pf=37821,mf=36492,gf=36494,xf=36495,vf=36283,_f=36284,ec=36285,yf=36286,jv=3200,bm=0,Wv=1,Qr="",Pi="srgb",tc="srgb-linear",nc="linear",sn="srgb",Qs=7680,Tm=519,Xv=512,Yv=513,$v=514,Ff=515,qv=516,Kv=517,Of=518,Zv=519,Am=35044,Cm="300 es",rr=2e3,ic=2001;function Jv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=rc("canvas");return s.style.display="block",s}const Rm={};function Nm(...s){const e="THREE."+s.shift();console.log(e,...s)}function ng(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=ng(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function tn(...s){s=ng(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Sf(...s){const e=s.join(" ");e in Rm||(Rm[e]=!0,It(...s))}function e_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const t_={[Ud]:Fd,[Od]:zd,[kd]:Vd,[xa]:Bd,[Fd]:Ud,[zd]:Od,[Vd]:kd,[Bd]:xa};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,Mf=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Zt(s,e,t){return Math.max(e,Math.min(t,s))}function n_(s,e){return(s%e+e)%e}function Qu(s,e,t){return(1-t)*s+t*e}function Qa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wf=class Wf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wf.prototype.isVector2=!0;let Dt=Wf;class Sa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],C=l[u+2],D=l[u+3];if(S!==D||h!==x||p!==M||v!==C){let y=h*x+p*M+v*C+S*D;y<0&&(x=-x,M=-M,C=-C,D=-D,y=-y);let _=1-f;if(y<.9995){const U=Math.acos(y),R=Math.sin(U);_=Math.sin(_*U)/R,f=Math.sin(f*U)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f;const U=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=U,p*=U,v*=U,S*=U}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],C=l[u+3];return e[t]=f*C+v*S+h*M-p*x,e[t+1]=h*C+v*x+p*S-f*M,e[t+2]=p*C+v*M+f*x-h*S,e[t+3]=v*C-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),C=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"YXZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"ZXY":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"ZYX":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"YZX":this._x=x*v*S+p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S-x*M*C;break;case"XZY":this._x=x*v*S-p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S+x*M*C;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xf=class Xf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xf.prototype.isVector3=!0;let ie=Xf;const ed=new ie,Pm=new Sa,Yf=class Yf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],C=r[8],D=o[0],y=o[3],_=o[6],U=o[1],R=o[4],P=o[7],H=o[2],I=o[5],k=o[8];return l[0]=u*D+f*U+h*H,l[3]=u*y+f*R+h*I,l[6]=u*_+f*P+h*k,l[1]=p*D+v*U+S*H,l[4]=p*y+v*R+S*I,l[7]=p*_+v*P+S*k,l[2]=x*D+M*U+C*H,l[5]=x*y+M*R+C*I,l[8]=x*_+M*P+C*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,C=t*S+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=S*D,e[1]=(o*p-v*r)*D,e[2]=(f*r-o*u)*D,e[3]=x*D,e[4]=(v*t-o*h)*D,e[5]=(o*l-f*t)*D,e[6]=M*D,e[7]=(r*h-p*t)*D,e[8]=(u*t-r*l)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(td.makeScale(e,t)),this}rotate(e){return this.premultiply(td.makeRotation(-e)),this}translate(e,t){return this.premultiply(td.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yf.prototype.isMatrix3=!0;let kt=Yf;const td=new kt,Im=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const s={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===sn&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===sn&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Sf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Sf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[tc]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:r,transfer:sn,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),s}const Jt=i_();function Ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ea;class r_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ea===void 0&&(ea=rc("canvas")),ea.width=e.width,ea.height=e.height;const o=ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(nd(o[u].image)):l.push(nd(o[u]))}else l=nd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let a_=0;const id=new ie;class ei extends Ns{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,r=br,o=br,l=Yn,u=ws,f=$i,h=Di,p=ei.DEFAULT_ANISOTROPY,v=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=xo(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){It(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){It(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=$0;ei.DEFAULT_ANISOTROPY=1;const $f=class $f{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],C=h[9],D=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-D)<.01&&Math.abs(C-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+D)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(M+1)/2,H=(_+1)/2,I=(v+x)/4,k=(S+D)/4,T=(C+y)/4;return R>P&&R>H?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=k/r):P>H?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=T/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=k/l,o=T/l),this.set(r,o,l,t),this}let U=Math.sqrt((y-C)*(y-C)+(S-D)*(S-D)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(y-C)/U,this.y=(S-D)/U,this.z=(x-v)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this.w=Zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this.w=Zt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$f.prototype.isVector4=!0;let vn=$f;class o_ extends Ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new ei(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new kf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends o_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ig extends ei{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends ei{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=class cc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=C,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+C*p,t[5]=x-D*p,t[9]=-f*h,t[2]=D-x*p,t[6]=C+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x+D*f,t[4]=C*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-C,t[6]=D+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x-D*f,t[4]=-u*S,t[8]=C+M*f,t[1]=M+C*f,t[5]=u*v,t[9]=D-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=C*p-M,t[8]=x*p+D,t[1]=h*S,t[5]=D*p+x,t[9]=M*p-C,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=D-x*S,t[8]=C*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+C,t[10]=x-D*S}else if(e.order==="XZY"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+D,t[5]=u*v,t[9]=M*S-C,t[2]=C*S-M,t[6]=f*v,t[10]=D*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,t,r){const o=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Xr.crossVectors(r,vi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Xr.crossVectors(r,vi)),Xr.normalize(),Ml.crossVectors(vi,Xr),o[0]=Xr.x,o[4]=Ml.x,o[8]=vi.x,o[1]=Xr.y,o[5]=Ml.y,o[9]=vi.y,o[2]=Xr.z,o[6]=Ml.z,o[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],C=r[2],D=r[6],y=r[10],_=r[14],U=r[3],R=r[7],P=r[11],H=r[15],I=o[0],k=o[4],T=o[8],N=o[12],X=o[1],G=o[5],Q=o[9],re=o[13],pe=o[2],W=o[6],oe=o[10],J=o[14],ee=o[3],he=o[7],ce=o[11],B=o[15];return l[0]=u*I+f*X+h*pe+p*ee,l[4]=u*k+f*G+h*W+p*he,l[8]=u*T+f*Q+h*oe+p*ce,l[12]=u*N+f*re+h*J+p*B,l[1]=v*I+S*X+x*pe+M*ee,l[5]=v*k+S*G+x*W+M*he,l[9]=v*T+S*Q+x*oe+M*ce,l[13]=v*N+S*re+x*J+M*B,l[2]=C*I+D*X+y*pe+_*ee,l[6]=C*k+D*G+y*W+_*he,l[10]=C*T+D*Q+y*oe+_*ce,l[14]=C*N+D*re+y*J+_*B,l[3]=U*I+R*X+P*pe+H*ee,l[7]=U*k+R*G+P*W+H*he,l[11]=U*T+R*Q+P*oe+H*ce,l[15]=U*N+R*re+P*J+H*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],C=e[3],D=e[7],y=e[11],_=e[15],U=h*M-p*x,R=f*M-p*S,P=f*x-h*S,H=u*M-p*v,I=u*x-h*v,k=u*S-f*v;return t*(D*U-y*R+_*P)-r*(C*U-y*H+_*I)+o*(C*R-D*H+_*k)-l*(C*P-D*I+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],C=e[12],D=e[13],y=e[14],_=e[15],U=t*f-r*u,R=t*h-o*u,P=t*p-l*u,H=r*h-o*f,I=r*p-l*f,k=o*p-l*h,T=v*D-S*C,N=v*y-x*C,X=v*_-M*C,G=S*y-x*D,Q=S*_-M*D,re=x*_-M*y,pe=U*re-R*Q+P*G+H*X-I*N+k*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/pe;return e[0]=(f*re-h*Q+p*G)*W,e[1]=(o*Q-r*re-l*G)*W,e[2]=(D*k-y*I+_*H)*W,e[3]=(x*I-S*k-M*H)*W,e[4]=(h*X-u*re-p*N)*W,e[5]=(t*re-o*X+l*N)*W,e[6]=(y*P-C*k-_*R)*W,e[7]=(v*k-x*P+M*R)*W,e[8]=(u*Q-f*X+p*T)*W,e[9]=(r*X-t*Q-l*T)*W,e[10]=(C*I-D*P+_*U)*W,e[11]=(S*P-v*I-M*U)*W,e[12]=(f*N-u*G-h*T)*W,e[13]=(t*G-r*N+o*T)*W,e[14]=(D*R-C*H-y*U)*W,e[15]=(v*H-S*R+x*U)*W,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,C=l*S,D=u*v,y=u*S,_=f*S,U=h*p,R=h*v,P=h*S,H=r.x,I=r.y,k=r.z;return o[0]=(1-(D+_))*H,o[1]=(M+P)*H,o[2]=(C-R)*H,o[3]=0,o[4]=(M-P)*I,o[5]=(1-(x+_))*I,o[6]=(y+U)*I,o[7]=0,o[8]=(C+R)*k,o[9]=(y-U)*k,o[10]=(1-(x+D))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ta.set(o[0],o[1],o[2]).length();const f=ta.set(o[4],o[5],o[6]).length(),h=ta.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ji.copy(this);const p=1/u,v=1/f,S=1/h;return ji.elements[0]*=p,ji.elements[1]*=p,ji.elements[2]*=p,ji.elements[4]*=v,ji.elements[5]*=v,ji.elements[6]*=v,ji.elements[8]*=S,ji.elements[9]*=S,ji.elements[10]*=S,t.setFromRotationMatrix(ji),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=rr,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let C,D;if(h)C=l/(u-l),D=u*l/(u-l);else if(f===rr)C=-(u+l)/(u-l),D=-2*u*l/(u-l);else if(f===ic)C=-u/(u-l),D=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=rr,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let C,D;if(h)C=1/(u-l),D=u/(u-l);else if(f===rr)C=-2/(u-l),D=-(u+l)/(u-l);else if(f===ic)C=-1/(u-l),D=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cc.prototype.isMatrix4=!0;let En=cc;const ta=new ie,ji=new En,c_=new ie(0,0,0),u_=new ie(1,1,1),Xr=new ie,Ml=new ie,vi=new ie,Lm=new En,Um=new Sa;class Rs{constructor(e=0,t=0,r=0,o=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Zt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";let rg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},d_=0;const Fm=new ie,na=new Sa,_r=new En,El=new ie,eo=new ie,f_=new ie,h_=new Sa,Om=new ie(1,0,0),km=new ie(0,1,0),Bm=new ie(0,0,1),zm={type:"added"},p_={type:"removed"},ia={type:"childadded",child:null},rd={type:"childremoved",child:null};class yi extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yi.DEFAULT_UP.clone();const e=new ie,t=new Rs,r=new Sa,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new En},normalMatrix:{value:new kt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=yi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(eo,El,this.up):_r.lookAt(El,eo,this.up),this.quaternion.setFromRotationMatrix(_r),o&&(_r.extractRotation(o.matrixWorld),na.setFromRotationMatrix(_r),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),ia.child=e,this.dispatchEvent(ia),ia.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),C=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yi.DEFAULT_UP=new ie(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ts extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const y=t.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,C=.005;p.inputState.pinching&&x>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ts;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function ad(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ln{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Jt.workingColorSpace){if(e=n_(e,1),t=Zt(t,0,1),r=Zt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ad(u,l,e+1/3),this.g=ad(u,l,e),this.b=ad(u,l,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Pi){function r(l){l!==void 0&&parseFloat(l)<1&&It("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:It("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);It("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){const r=sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):It("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Jt.workingToColorSpace(Wn.copy(this),e),Math.round(Zt(Wn.r*255,0,255))*65536+Math.round(Zt(Wn.g*255,0,255))*256+Math.round(Zt(Wn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,l=Wn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Pi){Jt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(wl);const r=Qu(Yr.h,wl.h,t),o=Qu(Yr.s,wl.s,t),l=Qu(Yr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new ln;ln.NAMES=sg;class g_ extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rs,this.environmentIntensity=1,this.environmentRotation=new Rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wi=new ie,yr=new ie,od=new ie,Sr=new ie,ra=new ie,sa=new ie,Vm=new ie,ld=new ie,cd=new ie,ud=new ie,dd=new vn,fd=new vn,hd=new vn;class Yi{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Wi.subVectors(e,t),o.cross(Wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Wi.subVectors(o,t),yr.subVectors(r,t),od.subVectors(e,t);const u=Wi.dot(Wi),f=Wi.dot(yr),h=Wi.dot(od),p=yr.dot(yr),v=yr.dot(od),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,C=(u*v-f*h)*x;return l.set(1-M-C,C,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Sr.x),h.addScaledVector(u,Sr.y),h.addScaledVector(f,Sr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return dd.setScalar(0),fd.setScalar(0),hd.setScalar(0),dd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,r),hd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(dd,l.x),u.addScaledVector(fd,l.y),u.addScaledVector(hd,l.z),u}static isFrontFacing(e,t,r,o){return Wi.subVectors(r,t),yr.subVectors(e,t),Wi.cross(yr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Wi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ra.subVectors(o,r),sa.subVectors(l,r),ld.subVectors(e,r);const h=ra.dot(ld),p=sa.dot(ld);if(h<=0&&p<=0)return t.copy(r);cd.subVectors(e,o);const v=ra.dot(cd),S=sa.dot(cd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ra,u);ud.subVectors(e,l);const M=ra.dot(ud),C=sa.dot(ud);if(C>=0&&M<=C)return t.copy(l);const D=M*p-h*C;if(D<=0&&p>=0&&C<=0)return f=p/(p-C),t.copy(r).addScaledVector(sa,f);const y=v*C-M*S;if(y<=0&&S-v>=0&&M-C>=0)return Vm.subVectors(l,o),f=(S-v)/(S-v+(M-C)),t.copy(o).addScaledVector(Vm,f);const _=1/(y+D+x);return u=D*_,f=x*_,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(l,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Tl.subVectors(this.max,to),aa.subVectors(e.a,to),oa.subVectors(e.b,to),la.subVectors(e.c,to),$r.subVectors(oa,aa),qr.subVectors(la,oa),ms.subVectors(aa,la);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-ms.z,ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,ms.z,0,-ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-ms.y,ms.x,0];return!pd(t,aa,oa,la,Tl)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,aa,oa,la,Tl))?!1:(Al.crossVectors($r,qr),t=[Al.x,Al.y,Al.z],pd(t,aa,oa,la,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Xi=new ie,bl=new vo,aa=new ie,oa=new ie,la=new ie,$r=new ie,qr=new ie,ms=new ie,to=new ie,Tl=new ie,Al=new ie,gs=new ie;function pd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){gs.fromArray(s,l);const f=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),h=e.dot(gs),p=t.dot(gs),v=r.dot(gs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Mn=new ie,Cl=new Dt;let x_=0;class or extends Ns{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Am,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Qa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=di(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array),o=di(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array),o=di(o,this.array),l=di(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ag extends or{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class og extends or{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class _n extends or{constructor(e,t,r){super(new Float32Array(e),t,r)}}const v_=new vo,no=new ie,md=new ie;class Bf{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):v_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(md)),this.expandByPoint(no.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let __=0;const Ri=new En,gd=new yi,ca=new ie,_i=new vo,io=new vo,Dn=new ie;class Si extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?og:ag)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new kt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];io.setFromBufferAttribute(f),this.morphTargetsRelative?(Dn.addVectors(_i.min,io.min),_i.expandByPoint(Dn),Dn.addVectors(_i.max,io.max),_i.expandByPoint(Dn)):(_i.expandByPoint(io.min),_i.expandByPoint(io.max))}_i.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Dn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Dn.fromBufferAttribute(f,p),h&&(ca.fromBufferAttribute(e,p),Dn.add(ca)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new or(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new ie,h[T]=new ie;const p=new ie,v=new ie,S=new ie,x=new Dt,M=new Dt,C=new Dt,D=new ie,y=new ie;function _(T,N,X){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,X),x.fromBufferAttribute(l,T),M.fromBufferAttribute(l,N),C.fromBufferAttribute(l,X),v.sub(p),S.sub(p),M.sub(x),C.sub(x);const G=1/(M.x*C.y-C.x*M.y);isFinite(G)&&(D.copy(v).multiplyScalar(C.y).addScaledVector(S,-M.y).multiplyScalar(G),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(G),f[T].add(D),f[N].add(D),f[X].add(D),h[T].add(y),h[N].add(y),h[X].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,N=U.length;T<N;++T){const X=U[T],G=X.start,Q=X.count;for(let re=G,pe=G+Q;re<pe;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const R=new ie,P=new ie,H=new ie,I=new ie;function k(T){H.fromBufferAttribute(o,T),I.copy(H);const N=f[T];R.copy(N),R.sub(H.multiplyScalar(H.dot(N))).normalize(),P.crossVectors(I,N);const G=P.dot(h[T])<0?-1:1;u.setXYZW(T,R.x,R.y,R.z,G)}for(let T=0,N=U.length;T<N;++T){const X=U[T],G=X.start,Q=X.count;for(let re=G,pe=G+Q;re<pe;re+=3)k(e.getX(re+0)),k(e.getX(re+1)),k(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new or(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,p=new ie,v=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const C=e.getX(x+0),D=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,D),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(D,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,C=0;for(let D=0,y=h.length;D<y;D++){f.isInterleavedBufferAttribute?M=h[D]*f.data.stride+f.offset:M=h[D]*v;for(let _=0;_<v;_++)x[C++]=p[M++]}return new or(x,v,S)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let y_=0;class dc extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ma,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ld,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ln(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){It(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){It(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Dd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ld&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Er=new ie,xd=new ie,Rl=new ie,Kr=new ie,vd=new ie,Nl=new ie,_d=new ie;class S_{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){xd.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(xd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Kr.dot(this.direction),h=-Kr.dot(Rl),p=Kr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,C;if(v>0)if(S=u*h-f,x=u*f-h,C=l*v,S>=0)if(x>=-C)if(x<=C){const D=1/v;S*=D,x*=D,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-C?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=C?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(xd).addScaledVector(Rl,x),M}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const r=Er.dot(this.direction),o=Er.dot(Er)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,r,o,l){vd.subVectors(t,e),Nl.subVectors(r,e),_d.crossVectors(vd,Nl);let u=this.direction.dot(_d),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Kr.subVectors(this.origin,e);const h=f*this.direction.dot(Nl.crossVectors(Kr,Nl));if(h<0)return null;const p=f*this.direction.dot(vd.cross(Kr));if(p<0||h+p>u)return null;const v=-f*Kr.dot(_d);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ts extends dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ln(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rs,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hm=new En,xs=new S_,Pl=new Bf,Gm=new ie,Il=new ie,Dl=new ie,Ll=new ie,yd=new ie,Ul=new ie,jm=new ie,Fl=new ie;class ti extends yi{constructor(e=new Si,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ul.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(yd.fromBufferAttribute(S,e),u?Ul.addScaledVector(yd,v):Ul.addScaledVector(yd.sub(t),v))}t.add(Ul)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),xs.copy(e.ray).recast(e.near),!(Pl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Pl,Gm)===null||xs.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(l).invert(),xs.copy(e.ray).applyMatrix4(Hm),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],U=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=U,H=R;P<H;P+=3){const I=f.getX(P),k=f.getX(P+1),T=f.getX(P+2);o=Ol(this,_,e,r,p,v,S,I,k,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(f.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const U=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);o=Ol(this,u,e,r,p,v,S,U,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],U=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=U,H=R;P<H;P+=3){const I=P,k=P+1,T=P+2;o=Ol(this,_,e,r,p,v,S,I,k,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const U=y,R=y+1,P=y+2;o=Ol(this,u,e,r,p,v,S,U,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function M_(s,e,t,r,o,l,u,f){let h;if(e.side===fi?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ns,f),h===null)return null;Fl.copy(f),Fl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Fl);return p<t.near||p>t.far?null:{distance:p,point:Fl.clone(),object:s}}function Ol(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Il),s.getVertexPosition(h,Dl),s.getVertexPosition(p,Ll);const v=M_(s,e,t,r,Il,Dl,Ll,jm);if(v){const S=new ie;Yi.getBarycoord(jm,Il,Dl,Ll,S),o&&(v.uv=Yi.getInterpolatedAttribute(o,f,h,p,S,new Dt)),l&&(v.uv1=Yi.getInterpolatedAttribute(l,f,h,p,S,new Dt)),u&&(v.normal=Yi.getInterpolatedAttribute(u,f,h,p,S,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};Yi.getNormal(Il,Dl,Ll,x.normal),v.face=x,v.barycoord=S}return v}class E_ extends ei{constructor(e=null,t=1,r=1,o,l,u,f,h,p=On,v=On,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new ie,w_=new ie,b_=new kt;class Ss{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Sd.subVectors(r,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Sd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||b_.getNormalMatrix(e),o=this.coplanarPoint(Sd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Bf,T_=new Dt(.5,.5),kl=new ie;class lg{constructor(e=new Ss,t=new Ss,r=new Ss,o=new Ss,l=new Ss,u=new Ss){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=rr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],C=l[8],D=l[9],y=l[10],_=l[11],U=l[12],R=l[13],P=l[14],H=l[15];if(o[0].setComponents(p-u,M-v,_-C,H-U).normalize(),o[1].setComponents(p+u,M+v,_+C,H+U).normalize(),o[2].setComponents(p+f,M+S,_+D,H+R).normalize(),o[3].setComponents(p-f,M-S,_-D,H-R).normalize(),r)o[4].setComponents(h,x,y,P).normalize(),o[5].setComponents(p-h,M-x,_-y,H-P).normalize();else if(o[4].setComponents(p-h,M-x,_-y,H-P).normalize(),t===rr)o[5].setComponents(p+h,M+x,_+y,H+P).normalize();else if(t===ic)o[5].setComponents(h,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=T_.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cg extends ei{constructor(e=[],t=As,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _a extends ei{constructor(e,t,r=lr,o,l,u,f=On,h=On,p,v=Rr,S=1){if(v!==Rr&&v!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class A_ extends _a{constructor(e,t=lr,r=As,o,l,u=On,f=On,h,p=Rr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ug extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends Si{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;C("z","y","x",-1,-1,r,t,e,u,l,0),C("z","y","x",1,-1,r,t,-e,u,l,1),C("x","z","y",1,1,e,r,t,o,u,2),C("x","z","y",1,-1,e,r,-t,o,u,3),C("x","y","z",1,-1,e,t,r,o,l,4),C("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(S,2));function C(D,y,_,U,R,P,H,I,k,T,N){const X=P/k,G=H/T,Q=P/2,re=H/2,pe=I/2,W=k+1,oe=T+1;let J=0,ee=0;const he=new ie;for(let ce=0;ce<oe;ce++){const B=ce*G-re;for(let le=0;le<W;le++){const tt=le*X-Q;he[D]=tt*U,he[y]=B*R,he[_]=pe,p.push(he.x,he.y,he.z),he[D]=0,he[y]=0,he[_]=I>0?1:-1,v.push(he.x,he.y,he.z),S.push(le/k),S.push(1-ce/T),J+=1}}for(let ce=0;ce<T;ce++)for(let B=0;B<k;B++){const le=x+B+W*ce,tt=x+B+W*(ce+1),it=x+(B+1)+W*(ce+1),Ce=x+(B+1)+W*ce;h.push(le,tt,Ce),h.push(tt,it,Ce),ee+=6}f.addGroup(M,ee,N),M+=ee,x+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zf extends Si{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let C=0;const D=[],y=r/2;let _=0;U(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new _n(S,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(M,2));function U(){const P=new ie,H=new ie;let I=0;const k=(t-e)/r;for(let T=0;T<=l;T++){const N=[],X=T/l,G=X*(t-e)+e;for(let Q=0;Q<=o;Q++){const re=Q/o,pe=re*h+f,W=Math.sin(pe),oe=Math.cos(pe);H.x=G*W,H.y=-X*r+y,H.z=G*oe,S.push(H.x,H.y,H.z),P.set(W,k,oe).normalize(),x.push(P.x,P.y,P.z),M.push(re,1-X),N.push(C++)}D.push(N)}for(let T=0;T<o;T++)for(let N=0;N<l;N++){const X=D[N][T],G=D[N+1][T],Q=D[N+1][T+1],re=D[N][T+1];(e>0||N!==0)&&(v.push(X,G,re),I+=3),(t>0||N!==l-1)&&(v.push(G,Q,re),I+=3)}p.addGroup(_,I,0),_+=I}function R(P){const H=C,I=new Dt,k=new ie;let T=0;const N=P===!0?e:t,X=P===!0?1:-1;for(let Q=1;Q<=o;Q++)S.push(0,y*X,0),x.push(0,X,0),M.push(.5,.5),C++;const G=C;for(let Q=0;Q<=o;Q++){const pe=Q/o*h+f,W=Math.cos(pe),oe=Math.sin(pe);k.x=N*oe,k.y=y*X,k.z=N*W,S.push(k.x,k.y,k.z),x.push(0,X,0),I.x=W*.5+.5,I.y=oe*.5*X+.5,M.push(I.x,I.y),C++}for(let Q=0;Q<o;Q++){const re=H+Q,pe=G+Q;P===!0?v.push(pe,pe+1,re):v.push(pe+1,pe,re),T+=3}p.addGroup(_,T,P===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends zf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Dt:new ie);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ie,o=[],l=[],u=[],f=new ie,h=new En;for(let M=0;M<=e;M++){const C=M/e;o[M]=this.getTangentAt(C,new ie)}l[0]=new ie,u[0]=new ie;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const C=Math.acos(Zt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,C))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(Zt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let C=1;C<=e;C++)l[C].applyMatrix4(h.makeRotationAxis(o[C],M*C)),u[C].crossVectors(o[C],l[C])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dg extends Nr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Dt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C_ extends dg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Vf(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Wm=new ie,Xm=new ie,Md=new Vf,Ed=new Vf,wd=new Vf;class Hf extends Nr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ie){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Xm.subVectors(o[0],o[1]).add(o[0]),p=Xm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Wm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Wm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let C=Math.pow(p.distanceToSquared(S),M),D=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);D<1e-4&&(D=1),C<1e-4&&(C=D),y<1e-4&&(y=D),Md.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,C,D,y),Ed.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,C,D,y),wd.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,C,D,y)}else this.curveType==="catmullrom"&&(Md.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),Ed.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),wd.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(Md.calc(h),Ed.calc(h),wd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ym(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function R_(s,e){const t=1-s;return t*t*e}function N_(s,e){return 2*(1-s)*s*e}function P_(s,e){return s*s*e}function ho(s,e,t,r){return R_(s,e)+N_(s,t)+P_(s,r)}function I_(s,e){const t=1-s;return t*t*t*e}function D_(s,e){const t=1-s;return 3*t*t*s*e}function L_(s,e){return 3*(1-s)*s*s*e}function U_(s,e){return s*s*s*e}function po(s,e,t,r,o){return I_(s,e)+D_(s,t)+L_(s,r)+U_(s,o)}class F_ extends Nr{constructor(e=new Dt,t=new Dt,r=new Dt,o=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Dt){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(po(e,o.x,l.x,u.x,f.x),po(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O_ extends Nr{constructor(e=new ie,t=new ie,r=new ie,o=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(po(e,o.x,l.x,u.x,f.x),po(e,o.y,l.y,u.y,f.y),po(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k_ extends Nr{constructor(e=new Dt,t=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Dt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Dt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends Nr{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Nr{constructor(e=new Dt,t=new Dt,r=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Dt){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ho(e,o.x,l.x,u.x),ho(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fg extends Nr{constructor(e=new ie,t=new ie,r=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ho(e,o.x,l.x,u.x),ho(e,o.y,l.y,u.y),ho(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends Nr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Dt){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(Ym(f,h.x,p.x,v.x,S.x),Ym(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Dt().fromArray(o))}return this}}var H_=Object.freeze({__proto__:null,ArcCurve:C_,CatmullRomCurve3:Hf,CubicBezierCurve:F_,CubicBezierCurve3:O_,EllipseCurve:dg,LineCurve:k_,LineCurve3:B_,QuadraticBezierCurve:z_,QuadraticBezierCurve3:fg,SplineCurve:V_});class fc extends Si{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],C=[],D=[],y=[];for(let _=0;_<v;_++){const U=_*x-u;for(let R=0;R<p;R++){const P=R*S-l;C.push(P,-U,0),D.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<f;U++){const R=U+p*_,P=U+p*(_+1),H=U+1+p*(_+1),I=U+1+p*_;M.push(R,P,I),M.push(P,H,I)}this.setIndex(M),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(D,3)),this.setAttribute("uv",new _n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gf extends Si{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new ie,C=new Dt;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),C.x=(M.x/t+1)/2,C.y=(M.y/t+1)/2,v.push(C.x,C.y)}S+=x}for(let D=0;D<o;D++){const y=D*(r+1);for(let _=0;_<r;_++){const U=_+y,R=U,P=U+r+1,H=U+r+2,I=U+1;f.push(R,P,I),f.push(P,H,I)}}this.setIndex(f),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ac extends Si{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ie,x=new ie,M=[],C=[],D=[],y=[];for(let _=0;_<=r;_++){const U=[],R=_/r;let P=0;_===0&&u===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let H=0;H<=t;H++){const I=H/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+I*l)*Math.sin(u+R*f),C.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+P,1-R),U.push(p++)}v.push(U)}for(let _=0;_<r;_++)for(let U=0;U<t;U++){const R=v[_][U+1],P=v[_][U],H=v[_+1][U],I=v[_+1][U+1];(_!==0||u>0)&&M.push(R,P,I),(_!==r-1||h<Math.PI)&&M.push(P,H,I)}this.setIndex(M),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(D,3)),this.setAttribute("uv",new _n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jf extends Si{constructor(e=new fg(new ie(-1,-1,0),new ie(-1,1,0),new ie(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ie,h=new ie,p=new Dt;let v=new ie;const S=[],x=[],M=[],C=[];D(),this.setIndex(C),this.setAttribute("position",new _n(S,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(M,2));function D(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),U(),_()}function y(R){v=e.getPointAt(R/t,v);const P=u.normals[R],H=u.binormals[R];for(let I=0;I<=o;I++){const k=I/o*Math.PI*2,T=Math.sin(k),N=-Math.cos(k);h.x=N*P.x+T*H.x,h.y=N*P.y+T*H.y,h.z=N*P.z+T*H.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let P=1;P<=o;P++){const H=(o+1)*(R-1)+(P-1),I=(o+1)*R+(P-1),k=(o+1)*R+P,T=(o+1)*(R-1)+P;C.push(H,I,T),C.push(I,k,T)}}function U(){for(let R=0;R<=t;R++)for(let P=0;P<=o;P++)p.x=R/t,p.y=P/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jf(new H_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ya(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if($m(o))o.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if($m(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Qn(s){const e={};for(let t=0;t<s.length;t++){const r=ya(s[t]);for(const o in r)e[o]=r[o]}return e}function $m(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const j_={clone:ya,merge:Qn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Y_ extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $_ extends dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bl=new ie,zl=new Sa,er=new ie;let pg=class extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,er.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Bl,zl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Zr=new ie,qm=new Dt,Km=new Dt;class Ii extends pg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mf*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Km),t.subVectors(Km,qm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ju*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mg extends pg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ua=-90,da=1;class K_ extends yi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ii(ua,da,e,t);o.layers=this.layers,this.add(o);const l=new Ii(ua,da,e,t);l.layers=this.layers,this.add(l);const u=new Ii(ua,da,e,t);u.layers=this.layers,this.add(u);const f=new Ii(ua,da,e,t);f.layers=this.layers,this.add(f);const h=new Ii(ua,da,e,t);h.layers=this.layers,this.add(h);const p=new Ii(ua,da,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===rr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class Z_ extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qf=class qf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};qf.prototype.isMatrix2=!0;let Zm=qf;function Jm(s,e,t,r){const o=J_(r);switch(t){case Q0:return s*e;case tg:return s*e/o.components*o.byteLength;case Df:return s*e/o.components*o.byteLength;case Cs:return s*e*2/o.components*o.byteLength;case Lf:return s*e*2/o.components*o.byteLength;case eg:return s*e*3/o.components*o.byteLength;case $i:return s*e*4/o.components*o.byteLength;case Uf:return s*e*4/o.components*o.byteLength;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Yd:return Math.max(s,16)*Math.max(e,8)/4;case jd:case Xd:return Math.max(s,8)*Math.max(e,8)/2;case $d:case qd:case Zd:case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kd:case Ql:case Qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mf:case gf:case xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vf:case _f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(s){switch(s){case Di:case q0:return{byteLength:1,components:1};case mo:case K0:case Cr:return{byteLength:2,components:1};case Pf:case If:return{byteLength:2,components:4};case lr:case Nf:case ir:return{byteLength:4,components:1};case Z0:case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Q_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<S.length;M++){const C=S[x],D=S[M];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,C=S.length;M<C;M++){const D=S[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var ey=`#ifdef USE_ALPHAHASH
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
}`,jt={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:ay,aomap_pars_fragment:oy,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:dy,bsdfs:fy,iridescence_fragment:hy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:vy,color_fragment:_y,color_pars_fragment:yy,color_pars_vertex:Sy,color_vertex:My,common:Ey,cube_uv_reflection_fragment:wy,defaultnormal_vertex:by,displacementmap_pars_vertex:Ty,displacementmap_vertex:Ay,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ry,colorspace_fragment:Ny,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ly,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:Xy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:ky,fog_fragment:By,fog_pars_fragment:zy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:jy,lights_pars_begin:Wy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:qy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Qy,lights_fragment_maps:eS,lights_fragment_end:tS,lightprobes_pars_fragment:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:xS,normal_fragment_begin:vS,normal_fragment_maps:_S,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:bS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:CS,packing:RS,premultiplied_alpha_fragment:NS,project_vertex:PS,dithering_fragment:IS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:zS,skinning_pars_vertex:VS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:jS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:YS,transmission_fragment:$S,transmission_pars_fragment:qS,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:QS,background_vert:e1,background_frag:t1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:r1,cube_frag:s1,depth_vert:a1,depth_frag:o1,distance_vert:l1,distance_frag:c1,equirect_vert:u1,equirect_frag:d1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:x1,meshmatcap_vert:v1,meshmatcap_frag:_1,meshnormal_vert:y1,meshnormal_frag:S1,meshphong_vert:M1,meshphong_frag:E1,meshphysical_vert:w1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:C1,points_frag:R1,shadow_vert:N1,shadow_frag:P1,sprite_vert:I1,sprite_frag:D1},ut={common:{diffuse:{value:new ln(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ln(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new ln(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ln(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},nr={basic:{uniforms:Qn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Qn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ln(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Qn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ln(0)},specular:{value:new ln(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Qn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ln(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Qn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ln(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Qn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Qn([ut.points,ut.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Qn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Qn([ut.common,ut.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Qn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Qn([ut.sprite,ut.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Qn([ut.common,ut.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Qn([ut.lights,ut.fog,{color:{value:new ln(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};nr.physical={uniforms:Qn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ln(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ln(0)},specularColor:{value:new ln(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Vl={r:0,b:0,g:0},L1=new En,xg=new kt;xg.set(-1,0,0,0,1,0,0,0,1);function U1(s,e,t,r,o,l){const u=new ln(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(U){let R=U.isScene===!0?U.background:null;if(R&&R.isTexture){const P=U.backgroundBlurriness>0;R=e.get(R,P)}return R}function C(U){let R=!1;const P=M(U);P===null?y(u,f):P&&P.isColor&&(y(P,1),R=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?t.buffers.color.setClear(0,0,0,1,l):H==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(U,R){const P=M(R);P&&(P.isCubeTexture||P.mapping===uc)?(p===void 0&&(p=new ti(new _o(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:ya(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(xg),p.material.toneMapped=Jt.getTransfer(P.colorSpace)!==sn,(v!==P||S!==P.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ti(new fc(2,2),new cr({name:"BackgroundMaterial",uniforms:ya(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(P.colorSpace)!==sn,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function y(U,R){U.getRGB(Vl,hg(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,R=1){u.set(U),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,y(u,f)},render:C,addToRenderList:D,dispose:_}}function F1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(G,Q,re,pe,W){let oe=!1;const J=S(G,pe,re,Q);l!==J&&(l=J,p(l.object)),oe=M(G,pe,re,W),oe&&C(G,pe,re,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,P(G,Q,re,pe),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function S(G,Q,re,pe){const W=pe.wireframe===!0;let oe=r[Q.id];oe===void 0&&(oe={},r[Q.id]=oe);const J=G.isInstancedMesh===!0?G.id:0;let ee=oe[J];ee===void 0&&(ee={},oe[J]=ee);let he=ee[re.id];he===void 0&&(he={},ee[re.id]=he);let ce=he[W];return ce===void 0&&(ce=x(h()),he[W]=ce),ce}function x(G){const Q=[],re=[],pe=[];for(let W=0;W<t;W++)Q[W]=0,re[W]=0,pe[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:re,attributeDivisors:pe,object:G,attributes:{},index:null}}function M(G,Q,re,pe){const W=l.attributes,oe=Q.attributes;let J=0;const ee=re.getAttributes();for(const he in ee)if(ee[he].location>=0){const B=W[he];let le=oe[he];if(le===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),B===void 0||B.attribute!==le||le&&B.data!==le.data)return!0;J++}return l.attributesNum!==J||l.index!==pe}function C(G,Q,re,pe){const W={},oe=Q.attributes;let J=0;const ee=re.getAttributes();for(const he in ee)if(ee[he].location>=0){let B=oe[he];B===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const le={};le.attribute=B,B&&B.data&&(le.data=B.data),W[he]=le,J++}l.attributes=W,l.attributesNum=J,l.index=pe}function D(){const G=l.newAttributes;for(let Q=0,re=G.length;Q<re;Q++)G[Q]=0}function y(G){_(G,0)}function _(G,Q){const re=l.newAttributes,pe=l.enabledAttributes,W=l.attributeDivisors;re[G]=1,pe[G]===0&&(s.enableVertexAttribArray(G),pe[G]=1),W[G]!==Q&&(s.vertexAttribDivisor(G,Q),W[G]=Q)}function U(){const G=l.newAttributes,Q=l.enabledAttributes;for(let re=0,pe=Q.length;re<pe;re++)Q[re]!==G[re]&&(s.disableVertexAttribArray(re),Q[re]=0)}function R(G,Q,re,pe,W,oe,J){J===!0?s.vertexAttribIPointer(G,Q,re,W,oe):s.vertexAttribPointer(G,Q,re,pe,W,oe)}function P(G,Q,re,pe){D();const W=pe.attributes,oe=re.getAttributes(),J=Q.defaultAttributeValues;for(const ee in oe){const he=oe[ee];if(he.location>=0){let ce=W[ee];if(ce===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor)),ce!==void 0){const B=ce.normalized,le=ce.itemSize,tt=e.get(ce);if(tt===void 0)continue;const it=tt.buffer,Ce=tt.type,ue=tt.bytesPerElement,be=Ce===s.INT||Ce===s.UNSIGNED_INT||ce.gpuType===Nf;if(ce.isInterleavedBufferAttribute){const ye=ce.data,Le=ye.stride,at=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let ht=0;ht<he.locationSize;ht++)_(he.location+ht,ye.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ht=0;ht<he.locationSize;ht++)y(he.location+ht);s.bindBuffer(s.ARRAY_BUFFER,it);for(let ht=0;ht<he.locationSize;ht++)R(he.location+ht,le/he.locationSize,Ce,B,Le*ue,(at+le/he.locationSize*ht)*ue,be)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<he.locationSize;ye++)_(he.location+ye,ce.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<he.locationSize;ye++)y(he.location+ye);s.bindBuffer(s.ARRAY_BUFFER,it);for(let ye=0;ye<he.locationSize;ye++)R(he.location+ye,le/he.locationSize,Ce,B,le*ue,le/he.locationSize*ye*ue,be)}}else if(J!==void 0){const B=J[ee];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(he.location,B);break;case 3:s.vertexAttrib3fv(he.location,B);break;case 4:s.vertexAttrib4fv(he.location,B);break;default:s.vertexAttrib1fv(he.location,B)}}}}U()}function H(){N();for(const G in r){const Q=r[G];for(const re in Q){const pe=Q[re];for(const W in pe){const oe=pe[W];for(const J in oe)v(oe[J].object),delete oe[J];delete pe[W]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const Q=r[G.id];for(const re in Q){const pe=Q[re];for(const W in pe){const oe=pe[W];for(const J in oe)v(oe[J].object),delete oe[J];delete pe[W]}}delete r[G.id]}function k(G){for(const Q in r){const re=r[Q];for(const pe in re){const W=re[pe];if(W[G.id]===void 0)continue;const oe=W[G.id];for(const J in oe)v(oe[J].object),delete oe[J];delete W[G.id]}}}function T(G){for(const Q in r){const re=r[Q],pe=G.isInstancedMesh===!0?G.id:0,W=re[pe];if(W!==void 0){for(const oe in W){const J=W[oe];for(const ee in J)v(J[ee].object),delete J[ee];delete W[oe]}delete re[pe],Object.keys(re).length===0&&delete r[Q]}}}function N(){X(),u=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:X,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:D,enableAttribute:y,disableUnusedAttributes:U}}function O1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function k1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==$i&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const T=k===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Di&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ir&&!T)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(It("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:P,maxSamples:H,samples:I}}function B1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ss,f=new kt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const C=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||C===null||C.length===0||l&&!y)l?v(null):p();else{const U=l?0:r,R=U*4;let P=_.clippingState||null;h.value=P,P=v(C,x,R,M);for(let H=0;H!==R;++H)P[H]=t[H];_.clippingState=P,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,C){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=h.value,C!==!0||y===null){const _=M+D*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,P=M;R!==D;++R,P+=4)u.copy(S[R]).applyMatrix4(U,f),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const es=4,Qm=[.125,.215,.35,.446,.526,.582],Es=20,z1=256,ro=new mg,e0=new ln;let bd=null,Td=0,Ad=0,Cd=!1;const V1=new ie;class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=V1}=l;bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Td,Ad),this._renderer.xr.enabled=Cd,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Cr,format:$i,colorSpace:tc,depthBuffer:!1},o=n0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(l)),this._blurMaterial=j1(l,e,t),this._ggxMaterial=G1(l,e,t)}return o}_compileMaterial(e){const t=new ti(new Si,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,r,o,l){const h=new Ii(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(e0),S.toneMapping=sr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new _o,new ts({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let _=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,_=!0):(y.color.copy(e0),_=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):P===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const H=this._cubeSize;fa(o,P*H,R>2?H:0,H,H),S.setRenderTarget(o),_&&S.render(D,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===As||e.mapping===va;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;fa(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,ro)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:C}=this,D=this._sizeLods[r],y=3*D*(r>C-es?r-C+es:0),_=4*(this._cubeSize-D);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=C-t,fa(l,y,_,3*D,2*D),o.setRenderTarget(l),o.render(f,ro),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=C-r,fa(e,y,_,3*D,2*D),o.setRenderTarget(e),o.render(f,ro)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Es-1),D=l/C,y=isFinite(l)?1+Math.floor(v*D):Es;y>Es&&It(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Es}`);const _=[];let U=0;for(let k=0;k<Es;++k){const T=k/D,N=Math.exp(-T*T/2);_.push(N),k===0?U+=N:k<y&&(U+=2*N)}for(let k=0;k<_.length;k++)_[k]=_[k]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=C,x.mipInt.value=R-r;const P=this._sizeLods[o],H=3*P*(o>R-es?o-R+es:0),I=4*(this._cubeSize-P);fa(t,H,I,3*P,2*P),h.setRenderTarget(t),h.render(S,ro)}}function H1(s){const e=[],t=[],r=[];let o=s;const l=s-es+1+Qm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-es?h=Qm[u-s+es-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,C=6,D=3,y=2,_=1,U=new Float32Array(D*C*M),R=new Float32Array(y*C*M),P=new Float32Array(_*C*M);for(let I=0;I<M;I++){const k=I%3*2/3-1,T=I>2?0:-1,N=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];U.set(N,D*C*I),R.set(x,y*C*I);const X=[I,I,I,I,I,I];P.set(X,_*C*I)}const H=new Si;H.setAttribute("position",new or(U,D)),H.setAttribute("uv",new or(R,y)),H.setAttribute("faceIndex",new or(P,_)),r.push(new ti(H,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function n0(s,e,t){const r=new ar(s,e,t);return r.texture.mapping=uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function G1(s,e,t){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function j1(s,e,t){const r=new Float32Array(Es),o=new ie(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function i0(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function r0(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}class vg extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new cg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),l=new cr({name:"CubemapFromEquirect",uniforms:ya(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fi,blending:Tr});l.uniforms.tEquirect.value=t;const u=new ti(o,l),f=t.minFilter;return t.minFilter===ws&&(t.minFilter=Yn),new K_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function W1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===qu||M===Ku)if(e.has(x)){const C=e.get(x).texture;return f(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const D=new vg(C.height);return D.fromEquirectangularTexture(s,x),e.set(x,D),x.addEventListener("dispose",p),f(D.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,C=M===qu||M===Ku,D=M===As||M===va;if(C||D){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new t0(s)),y=C?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const U=x.image;return C&&U&&U.height>0||D&&U&&h(U)?(r===null&&(r=new t0(s)),y=C?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===qu?x.mapping=As:M===Ku&&(x.mapping=va),x}function h(x){let M=0;const C=6;for(let D=0;D<C;D++)x[D]!==void 0&&M++;return M===C}function p(x){const M=x.target;M.removeEventListener("dispose",p);const C=e.get(M);C!==void 0&&(e.delete(M),C.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const C=t.get(M);C!==void 0&&(t.delete(M),C.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function X1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Sf("WebGLRenderer: "+r+" extension not supported."),o}}}function Y1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,C=S.attributes.position;let D=0;if(C===void 0)return;if(M!==null){const U=M.array;D=M.version;for(let R=0,P=U.length;R<P;R+=3){const H=U[R+0],I=U[R+1],k=U[R+2];x.push(H,I,I,k,k,H)}}else{const U=C.array;D=C.version;for(let R=0,P=U.length/3-1;R<P;R+=3){const H=R+0,I=R+1,k=R+2;x.push(H,I,I,k,k,H)}}const y=new(C.count>=65535?og:ag)(x,1);y.version=D;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function $1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];t.update(D,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function q1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:tn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function K1(s,e,t){const r=new WeakMap,o=new vn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let X=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",X)};var M=X;x!==void 0&&x.texture.dispose();const C=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let P=0;C===!0&&(P=1),D===!0&&(P=2),y===!0&&(P=3);let H=f.attributes.position.count*P,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const k=new Float32Array(H*I*4*S),T=new ig(k,H,I,S);T.type=ir,T.needsUpdate=!0;const N=P*4;for(let G=0;G<S;G++){const Q=_[G],re=U[G],pe=R[G],W=H*I*4*G;for(let oe=0;oe<Q.count;oe++){const J=oe*N;C===!0&&(o.fromBufferAttribute(Q,oe),k[W+J+0]=o.x,k[W+J+1]=o.y,k[W+J+2]=o.z,k[W+J+3]=0),D===!0&&(o.fromBufferAttribute(re,oe),k[W+J+4]=o.x,k[W+J+5]=o.y,k[W+J+6]=o.z,k[W+J+7]=0),y===!0&&(o.fromBufferAttribute(pe,oe),k[W+J+8]=o.x,k[W+J+9]=o.y,k[W+J+10]=o.z,k[W+J+11]=pe.itemSize===4?o.w:1)}}x={count:S,texture:T,size:new Dt(H,I)},r.set(f,x),f.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const D=f.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",D),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function Z1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const J1={[V0]:"LINEAR_TONE_MAPPING",[H0]:"REINHARD_TONE_MAPPING",[G0]:"CINEON_TONE_MAPPING",[j0]:"ACES_FILMIC_TONE_MAPPING",[X0]:"AGX_TONE_MAPPING",[Y0]:"NEUTRAL_TONE_MAPPING",[W0]:"CUSTOM_TONE_MAPPING"};function Q1(s,e,t,r,o){const l=new ar(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new _a(e,t):void 0}),u=new ar(e,t,{type:Cr,depthBuffer:!1,stencilBuffer:!1}),f=new Si;f.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new _n([0,2,0,0,2,0],2));const h=new Y_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ti(f,h),v=new mg(-1,1,1,-1,0,1);let S=null,x=null,M=!1,C,D=null,y=[],_=!1;this.setSize=function(U,R){l.setSize(U,R),u.setSize(U,R);for(let P=0;P<y.length;P++){const H=y[P];H.setSize&&H.setSize(U,R)}},this.setEffects=function(U){y=U,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,P=l.height;for(let H=0;H<y.length;H++){const I=y[H];I.setSize&&I.setSize(R,P)}},this.begin=function(U,R){if(M||U.toneMapping===sr&&y.length===0)return!1;if(D=R,R!==null){const P=R.width,H=R.height;(l.width!==P||l.height!==H)&&this.setSize(P,H)}return _===!1&&U.setRenderTarget(l),C=U.toneMapping,U.toneMapping=sr,!0},this.hasRenderPass=function(){return _},this.end=function(U,R){U.toneMapping=C,M=!0;let P=l,H=u;for(let I=0;I<y.length;I++){const k=y[I];if(k.enabled!==!1&&(k.render(U,H,P,R),k.needsSwap!==!1)){const T=P;P=H,H=T}}if(S!==U.outputColorSpace||x!==U.toneMapping){S=U.outputColorSpace,x=U.toneMapping,h.defines={},Jt.getTransfer(S)===sn&&(h.defines.SRGB_TRANSFER="");const I=J1[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(D),U.render(p,v),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const _g=new ei,Ef=new _a(1,1),yg=new ig,Sg=new l_,Mg=new cg,s0=[],a0=[],o0=new Float32Array(16),l0=new Float32Array(9),c0=new Float32Array(4);function Ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=s0[o];if(l===void 0&&(l=new Float32Array(o),s0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pc(s,e){let t=a0[e];t===void 0&&(t=new Int32Array(e),a0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2fv(this.addr,e),Rn(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;s.uniform3fv(this.addr,e),Rn(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4fv(this.addr,e),Rn(t,e)}}function rM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,r))return;c0.set(r),s.uniformMatrix2fv(this.addr,!1,c0),Rn(t,r)}}function sM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,r))return;l0.set(r),s.uniformMatrix3fv(this.addr,!1,l0),Rn(t,r)}}function aM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,r))return;o0.set(r),s.uniformMatrix4fv(this.addr,!1,o0),Rn(t,r)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2iv(this.addr,e),Rn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;s.uniform3iv(this.addr,e),Rn(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4iv(this.addr,e),Rn(t,e)}}function dM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2uiv(this.addr,e),Rn(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;s.uniform3uiv(this.addr,e),Rn(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4uiv(this.addr,e),Rn(t,e)}}function mM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ef.compareFunction=t.isReversedDepthBuffer()?Of:Ff,l=Ef):l=_g,t.setTexture2D(e||l,o)}function gM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Sg,o)}function xM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Mg,o)}function vM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||yg,o)}function _M(s){switch(s){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return vM}}function yM(s,e){s.uniform1fv(this.addr,e)}function SM(s,e){const t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function MM(s,e){const t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function EM(s,e){const t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function wM(s,e){const t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bM(s,e){const t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TM(s,e){const t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function NM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function IM(s,e){s.uniform2uiv(this.addr,e)}function DM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function UM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Cn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Ef:u=_g;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function FM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Cn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Sg,l[u])}function OM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Cn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Mg,l[u])}function kM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Cn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||yg,l[u])}function BM(s){switch(s){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return EM;case 35674:return wM;case 35675:return bM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return NM;case 5125:return PM;case 36294:return IM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}class zM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class VM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function u0(s,e){s.seq.push(e),s.map[e.id]=e}function GM(s,e,t){const r=s.name,o=r.length;for(Rd.lastIndex=0;;){const l=Rd.exec(r),u=Rd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){u0(t,p===void 0?new zM(f,s,e):new VM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new HM(f),u0(t,S)),t=S}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);GM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function d0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const jM=37297;let WM=0;function XM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const f0=new kt;function YM(s){Jt._getMatrix(f0,Jt.workingColorSpace,s);const e=`mat3( ${f0.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case sn:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function h0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+XM(s.getShaderSource(e),f)}else return l}function $M(s,e){const t=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qM={[V0]:"Linear",[H0]:"Reinhard",[G0]:"Cineon",[j0]:"ACESFilmic",[X0]:"AgX",[Y0]:"Neutral",[W0]:"Custom"};function KM(s,e){const t=qM[e];return t===void 0?(It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new ie;function ZM(){Jt.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function QM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function lo(s){return s!==""}function p0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(s){return s.replace(tE,iE)}const nE=new Map;function iE(s,e){let t=jt[e];if(t===void 0){const r=nE.get(e);if(r!==void 0)t=jt[r],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wf(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(s){return s.replace(rE,sE)}function sE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function x0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const aE={[Xl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function oE(s){return aE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lE={[As]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function cE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const uE={[va]:"ENVMAP_MODE_REFRACTION"};function dE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fE={[z0]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[Hv]:"ENVMAP_BLENDING_ADD"};function hE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fE[s.combine]||"ENVMAP_BLENDING_NONE"}function pE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function mE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=oE(t),p=cE(t),v=dE(t),S=hE(t),x=pE(t),M=JM(t),C=QM(l),D=o.createProgram();let y,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(lo).join(`
`),_.length>0&&(_+=`
`)):(y=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),_=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?jt.tonemapping_pars_fragment:"",t.toneMapping!==sr?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),u=wf(u),u=p0(u,t),u=m0(u,t),f=wf(f),f=p0(f,t),f=m0(f,t),u=g0(u),f=g0(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=U+y+u,P=U+_+f,H=d0(o,o.VERTEX_SHADER,R),I=d0(o,o.FRAGMENT_SHADER,P);o.attachShader(D,H),o.attachShader(D,I),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function k(G){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(D)||"",re=o.getShaderInfoLog(H)||"",pe=o.getShaderInfoLog(I)||"",W=Q.trim(),oe=re.trim(),J=pe.trim();let ee=!0,he=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,H,I);else{const ce=h0(o,H,"vertex"),B=h0(o,I,"fragment");tn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+ce+`
`+B)}else W!==""?It("WebGLProgram: Program Info Log:",W):(oe===""||J==="")&&(he=!1);he&&(G.diagnostics={runnable:ee,programLog:W,vertexShader:{log:oe,prefix:y},fragmentShader:{log:J,prefix:_}})}o.deleteShader(H),o.deleteShader(I),T=new Zl(o,D),N=eE(o,D)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(D,jM)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=H,this.fragmentShader=I,this}let gE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vE(e),t.set(e,r)),r}}class vE{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function _E(s){return s===Cs||s===Ql||s===ec}function yE(s,e,t,r,o,l){const u=new rg,f=new xE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return h.add(T),T===0?"uv":`uv${T}`}function D(T,N,X,G,Q,re){const pe=G.fog,W=Q.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||oe,J),he=ee&&ee.mapping===uc?ee.image.height:null,ce=M[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&It("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=B!==void 0?B.length:0;let tt=0;W.morphAttributes.position!==void 0&&(tt=1),W.morphAttributes.normal!==void 0&&(tt=2),W.morphAttributes.color!==void 0&&(tt=3);let it,Ce,ue,be;if(ce){const St=nr[ce];it=St.vertexShader,Ce=St.fragmentShader}else it=T.vertexShader,Ce=T.fragmentShader,f.update(T),ue=f.getVertexShaderID(T),be=f.getFragmentShaderID(T);const ye=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),at=Q.isInstancedMesh===!0,ht=Q.isBatchedMesh===!0,Mt=!!T.map,yt=!!T.matcap,Ut=!!ee,Kt=!!T.aoMap,bt=!!T.lightMap,Ot=!!T.bumpMap,Rt=!!T.normalMap,Gt=!!T.displacementMap,$=!!T.emissiveMap,Pt=!!T.metalnessMap,Et=!!T.roughnessMap,Tt=T.anisotropy>0,qe=T.clearcoat>0,Bt=T.dispersion>0,F=T.iridescence>0,b=T.sheen>0,ae=T.transmission>0,Me=Tt&&!!T.anisotropyMap,Re=qe&&!!T.clearcoatMap,ze=qe&&!!T.clearcoatNormalMap,We=qe&&!!T.clearcoatRoughnessMap,xe=F&&!!T.iridescenceMap,Ee=F&&!!T.iridescenceThicknessMap,Ne=b&&!!T.sheenColorMap,nt=b&&!!T.sheenRoughnessMap,Xe=!!T.specularMap,Fe=!!T.specularColorMap,Ke=!!T.specularIntensityMap,Ve=ae&&!!T.transmissionMap,Nt=ae&&!!T.thicknessMap,Y=!!T.gradientMap,He=!!T.alphaMap,me=T.alphaTest>0,ot=!!T.alphaHash,Oe=!!T.extensions;let _e=sr;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(_e=s.toneMapping);const lt={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:it,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:ht,batchingColor:ht&&Q._colorsTexture!==null,instancing:at,instancingColor:at&&Q.instanceColor!==null,instancingMorph:at&&Q.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Mt,matcap:yt,envMap:Ut,envMapMode:Ut&&ee.mapping,envMapCubeUVHeight:he,aoMap:Kt,lightMap:bt,bumpMap:Ot,normalMap:Rt,displacementMap:Gt,emissiveMap:$,normalMapObjectSpace:Rt&&T.normalMapType===Wv,normalMapTangentSpace:Rt&&T.normalMapType===bm,packedNormalMap:Rt&&T.normalMapType===bm&&_E(T.normalMap.format),metalnessMap:Pt,roughnessMap:Et,anisotropy:Tt,anisotropyMap:Me,clearcoat:qe,clearcoatMap:Re,clearcoatNormalMap:ze,clearcoatRoughnessMap:We,dispersion:Bt,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:Ee,sheen:b,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:Ke,transmission:ae,transmissionMap:Ve,thicknessMap:Nt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===ma&&T.alphaToCoverage===!1,alphaMap:He,alphaTest:me,alphaHash:ot,combine:T.combine,mapUv:Mt&&C(T.map.channel),aoMapUv:Kt&&C(T.aoMap.channel),lightMapUv:bt&&C(T.lightMap.channel),bumpMapUv:Ot&&C(T.bumpMap.channel),normalMapUv:Rt&&C(T.normalMap.channel),displacementMapUv:Gt&&C(T.displacementMap.channel),emissiveMapUv:$&&C(T.emissiveMap.channel),metalnessMapUv:Pt&&C(T.metalnessMap.channel),roughnessMapUv:Et&&C(T.roughnessMap.channel),anisotropyMapUv:Me&&C(T.anisotropyMap.channel),clearcoatMapUv:Re&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:nt&&C(T.sheenRoughnessMap.channel),specularMapUv:Xe&&C(T.specularMap.channel),specularColorMapUv:Fe&&C(T.specularColorMap.channel),specularIntensityMapUv:Ke&&C(T.specularIntensityMap.channel),transmissionMapUv:Ve&&C(T.transmissionMap.channel),thicknessMapUv:Nt&&C(T.thicknessMap.channel),alphaMapUv:He&&C(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||Tt),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(Mt||He),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Rt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Le,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:tt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Mt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===sn,decodeVideoTextureEmissive:$&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===sn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wr,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return lt.vertexUv1s=h.has(1),lt.vertexUv2s=h.has(2),lt.vertexUv3s=h.has(3),h.clear(),lt}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)N.push(X),N.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(_(N,T),U(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function U(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function R(T){const N=M[T.type];let X;if(N){const G=nr[N];X=j_.clone(G.uniforms)}else X=T.uniforms;return X}function P(T,N){let X=v.get(N);return X!==void 0?++X.usedTimes:(X=new mE(s,N,T,o),p.push(X),v.set(N,X)),X}function H(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){f.remove(T)}function k(){f.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:H,releaseShaderCache:I,programs:p,dispose:k}}function SE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function v0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,C,D,y,_){let U=s[e];return U===void 0?(U={id:x.id,object:x,geometry:M,material:C,materialVariant:u(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:_},s[e]=U):(U.id=x.id,U.object=x,U.geometry=M,U.material=C,U.materialVariant=u(x),U.groupOrder=D,U.renderOrder=x.renderOrder,U.z=y,U.group=_),e++,U}function h(x,M,C,D,y,_){const U=f(x,M,C,D,y,_);C.transmission>0?r.push(U):C.transparent===!0?o.push(U):t.push(U)}function p(x,M,C,D,y,_){const U=f(x,M,C,D,y,_);C.transmission>0?r.unshift(U):C.transparent===!0?o.unshift(U):t.unshift(U)}function v(x,M){t.length>1&&t.sort(x||ME),r.length>1&&r.sort(M||v0),o.length>1&&o.sort(M||v0)}function S(){for(let x=e,M=s.length;x<M;x++){const C=s[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function EE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new _0,s.set(r,[u])):o>=l.length?(u=new _0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new ln};break;case"SpotLight":t={position:new ie,direction:new ie,color:new ln,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new ln,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new ln,groundColor:new ln};break;case"RectAreaLight":t={color:new ln,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new wE,t=bE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new En,u=new En;function f(p){let v=0,S=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,C=0,D=0,y=0,_=0,U=0,R=0,P=0,H=0,I=0,k=0;p.sort(AE);for(let N=0,X=p.length;N<X;N++){const G=p[N],Q=G.color,re=G.intensity,pe=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Cs?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*re,S+=Q.g*re,x+=Q.b*re;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(G.sh.coefficients[oe],re);k++}else if(G.isDirectionalLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const J=G.shadow,ee=t.get(G);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=W,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=oe,M++}else if(G.isSpotLight){const oe=e.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(Q).multiplyScalar(re),oe.distance=pe,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,r.spot[D]=oe;const J=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,J.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[D]=J.matrix,G.castShadow){const ee=t.get(G);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,r.spotShadow[D]=ee,r.spotShadowMap[D]=W,P++}D++}else if(G.isRectAreaLight){const oe=e.get(G);oe.color.copy(Q).multiplyScalar(re),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=oe,y++}else if(G.isPointLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){const J=G.shadow,ee=t.get(G);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,r.pointShadow[C]=ee,r.pointShadowMap[C]=W,r.pointShadowMatrix[C]=G.shadow.matrix,R++}r.point[C]=oe,C++}else if(G.isHemisphereLight){const oe=e.get(G);oe.skyColor.copy(G.color).multiplyScalar(re),oe.groundColor.copy(G.groundColor).multiplyScalar(re),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ut.LTC_FLOAT_1,r.rectAreaLTC2=ut.LTC_FLOAT_2):(r.rectAreaLTC1=ut.LTC_HALF_1,r.rectAreaLTC2=ut.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==M||T.pointLength!==C||T.spotLength!==D||T.rectAreaLength!==y||T.hemiLength!==_||T.numDirectionalShadows!==U||T.numPointShadows!==R||T.numSpotShadows!==P||T.numSpotMaps!==H||T.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,T.directionalLength=M,T.pointLength=C,T.spotLength=D,T.rectAreaLength=y,T.hemiLength=_,T.numDirectionalShadows=U,T.numPointShadows=R,T.numSpotShadows=P,T.numSpotMaps=H,T.numLightProbes=k,r.version=TE++)}function h(p,v){let S=0,x=0,M=0,C=0,D=0;const y=v.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const R=p[_];if(R.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(R.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const P=r.rectArea[C];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const P=r.hemi[D];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),D++}}}return{setup:f,setupView:h,state:r}}function y0(s){const e=new CE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function RE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new y0(s),e.set(o,[f])):l>=u.length?(f=new y0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const NE=`void main() {
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
}`,IE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],DE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],S0=new En,so=new ie,Nd=new ie;function LE(s,e,t){let r=new lg;const o=new Dt,l=new Dt,u=new vn,f=new $_,h=new q_,p={},v=t.maxTextureSize,S={[ns]:fi,[fi]:ns,[wr]:wr},x=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:NE,fragmentShader:PE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new Si;C.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ti(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let _=this.type;this.render=function(I,k,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===Mv&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const N=s.getRenderTarget(),X=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Tr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const re=_!==this.type;re&&k.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(W=>W.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,W=I.length;pe<W;pe++){const oe=I[pe],J=oe.shadow;if(J===void 0){It("WebGLShadowMap:",oe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const ee=J.getFrameExtents();o.multiply(ee),l.copy(J.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ee.x),o.x=l.x*ee.x,J.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ee.y),o.y=l.y*ee.y,J.mapSize.y=l.y));const he=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=he,J.map===null||re===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===oo){if(oe.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ar(o.x,o.y,{format:Cs,type:Cr,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),J.map.texture.name=oe.name+".shadowMap",J.map.depthTexture=new _a(o.x,o.y,ir),J.map.depthTexture.name=oe.name+".shadowMapDepth",J.map.depthTexture.format=Rr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=On,J.map.depthTexture.magFilter=On}else oe.isPointLight?(J.map=new vg(o.x),J.map.depthTexture=new A_(o.x,lr)):(J.map=new ar(o.x,o.y),J.map.depthTexture=new _a(o.x,o.y,lr)),J.map.depthTexture.name=oe.name+".shadowMap",J.map.depthTexture.format=Rr,this.type===Xl?(J.map.depthTexture.compareFunction=he?Of:Ff,J.map.depthTexture.minFilter=Yn,J.map.depthTexture.magFilter=Yn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=On,J.map.depthTexture.magFilter=On);J.camera.updateProjectionMatrix()}const ce=J.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ce;B++){if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,B),s.clear();else{B===0&&(s.setRenderTarget(J.map),s.clear());const le=J.getViewport(B);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),Q.viewport(u)}if(oe.isPointLight){const le=J.camera,tt=J.matrix,it=oe.distance||le.far;it!==le.far&&(le.far=it,le.updateProjectionMatrix()),so.setFromMatrixPosition(oe.matrixWorld),le.position.copy(so),Nd.copy(le.position),Nd.add(IE[B]),le.up.copy(DE[B]),le.lookAt(Nd),le.updateMatrixWorld(),tt.makeTranslation(-so.x,-so.y,-so.z),S0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),J._frustum.setFromProjectionMatrix(S0,le.coordinateSystem,le.reversedDepth)}else J.updateMatrices(oe);r=J.getFrustum(),P(k,T,J.camera,oe,this.type)}J.isPointLightShadow!==!0&&this.type===oo&&U(J,T),J.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(N,X,G)};function U(I,k){const T=e.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ar(o.x,o.y,{format:Cs,type:Cr})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(k,null,T,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(k,null,T,M,D,null)}function R(I,k,T,N){let X=null;const G=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)X=G;else if(X=T.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Q=X.uuid,re=k.uuid;let pe=p[Q];pe===void 0&&(pe={},p[Q]=pe);let W=pe[re];W===void 0&&(W=X.clone(),pe[re]=W,k.addEventListener("dispose",H)),X=W}if(X.visible=k.visible,X.wireframe=k.wireframe,N===oo?X.side=k.shadowSide!==null?k.shadowSide:k.side:X.side=k.shadowSide!==null?k.shadowSide:S[k.side],X.alphaMap=k.alphaMap,X.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,X.map=k.map,X.clipShadows=k.clipShadows,X.clippingPlanes=k.clippingPlanes,X.clipIntersection=k.clipIntersection,X.displacementMap=k.displacementMap,X.displacementScale=k.displacementScale,X.displacementBias=k.displacementBias,X.wireframeLinewidth=k.wireframeLinewidth,X.linewidth=k.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Q=s.properties.get(X);Q.light=T}return X}function P(I,k,T,N,X){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&X===oo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const re=e.update(I),pe=I.material;if(Array.isArray(pe)){const W=re.groups;for(let oe=0,J=W.length;oe<J;oe++){const ee=W[oe],he=pe[ee.materialIndex];if(he&&he.visible){const ce=R(I,he,N,X);I.onBeforeShadow(s,I,k,T,re,ce,ee),s.renderBufferDirect(T,null,re,ce,I,ee),I.onAfterShadow(s,I,k,T,re,ce,ee)}}}else if(pe.visible){const W=R(I,pe,N,X);I.onBeforeShadow(s,I,k,T,re,W,null),s.renderBufferDirect(T,null,re,W,I,null),I.onAfterShadow(s,I,k,T,re,W,null)}}const Q=I.children;for(let re=0,pe=Q.length;re<pe;re++)P(Q[re],k,T,N,X)}function H(I){I.target.removeEventListener("dispose",H);for(const T in p){const N=p[T],X=I.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function UE(s,e){function t(){let Y=!1;const He=new vn;let me=null;const ot=new vn(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!Y&&(s.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){Y=Oe},setClear:function(Oe,_e,lt,St,Xt){Xt===!0&&(Oe*=St,_e*=St,lt*=St),He.set(Oe,_e,lt,St),ot.equals(He)===!1&&(s.clearColor(Oe,_e,lt,St),ot.copy(He))},reset:function(){Y=!1,me=null,ot.set(-1,0,0,0)}}}function r(){let Y=!1,He=!1,me=null,ot=null,Oe=null;return{setReversed:function(_e){if(He!==_e){const lt=e.get("EXT_clip_control");_e?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),He=_e;const St=Oe;Oe=null,this.setClear(St)}},getReversed:function(){return He},setTest:function(_e){_e?ye(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(_e){me!==_e&&!Y&&(s.depthMask(_e),me=_e)},setFunc:function(_e){if(He&&(_e=t_[_e]),ot!==_e){switch(_e){case Ud:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Od:s.depthFunc(s.LESS);break;case xa:s.depthFunc(s.LEQUAL);break;case kd:s.depthFunc(s.EQUAL);break;case Bd:s.depthFunc(s.GEQUAL);break;case zd:s.depthFunc(s.GREATER);break;case Vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=_e}},setLocked:function(_e){Y=_e},setClear:function(_e){Oe!==_e&&(Oe=_e,He&&(_e=1-_e),s.clearDepth(_e))},reset:function(){Y=!1,me=null,ot=null,Oe=null,He=!1}}}function o(){let Y=!1,He=null,me=null,ot=null,Oe=null,_e=null,lt=null,St=null,Xt=null;return{setTest:function(Yt){Y||(Yt?ye(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Yt){He!==Yt&&!Y&&(s.stencilMask(Yt),He=Yt)},setFunc:function(Yt,wn,Ln){(me!==Yt||ot!==wn||Oe!==Ln)&&(s.stencilFunc(Yt,wn,Ln),me=Yt,ot=wn,Oe=Ln)},setOp:function(Yt,wn,Ln){(_e!==Yt||lt!==wn||St!==Ln)&&(s.stencilOp(Yt,wn,Ln),_e=Yt,lt=wn,St=Ln)},setLocked:function(Yt){Y=Yt},setClear:function(Yt){Xt!==Yt&&(s.clearStencil(Yt),Xt=Yt)},reset:function(){Y=!1,He=null,me=null,ot=null,Oe=null,_e=null,lt=null,St=null,Xt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,U=null,R=null,P=null,H=null,I=null,k=null,T=new ln(0,0,0),N=0,X=!1,G=null,Q=null,re=null,pe=null,W=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),J=ee>=1):he.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),J=ee>=2);let ce=null,B={};const le=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),it=new vn().fromArray(le),Ce=new vn().fromArray(tt);function ue(Y,He,me,ot){const Oe=new Uint8Array(4),_e=s.createTexture();s.bindTexture(Y,_e),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<me;lt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(He,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(He+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return _e}const be={};be[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),u.setFunc(xa),Ot(!1),Rt(Sm),ye(s.CULL_FACE),Kt(Tr);function ye(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function Le(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function at(Y,He){return x[Y]!==He?(s.bindFramebuffer(Y,He),x[Y]=He,Y===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=He),Y===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=He),!0):!1}function ht(Y,He){let me=C,ot=!1;if(Y){me=M.get(He),me===void 0&&(me=[],M.set(He,me));const Oe=Y.textures;if(me.length!==Oe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,lt=Oe.length;_e<lt;_e++)me[_e]=s.COLOR_ATTACHMENT0+_e;me.length=Oe.length,ot=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,ot=!0);ot&&s.drawBuffers(me)}function Mt(Y){return D!==Y?(s.useProgram(Y),D=Y,!0):!1}const yt={[Ms]:s.FUNC_ADD,[wv]:s.FUNC_SUBTRACT,[bv]:s.FUNC_REVERSE_SUBTRACT};yt[Tv]=s.MIN,yt[Av]=s.MAX;const Ut={[Cv]:s.ZERO,[Rv]:s.ONE,[Nv]:s.SRC_COLOR,[Dd]:s.SRC_ALPHA,[Fv]:s.SRC_ALPHA_SATURATE,[Lv]:s.DST_COLOR,[Iv]:s.DST_ALPHA,[Pv]:s.ONE_MINUS_SRC_COLOR,[Ld]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA,[Ov]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Bv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(Y,He,me,ot,Oe,_e,lt,St,Xt,Yt){if(Y===Tr){y===!0&&(Le(s.BLEND),y=!1);return}if(y===!1&&(ye(s.BLEND),y=!0),Y!==Ev){if(Y!==_||Yt!==X){if((U!==Ms||H!==Ms)&&(s.blendEquation(s.FUNC_ADD),U=Ms,H=Ms),Yt)switch(Y){case ma:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.ONE,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:tn("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ma:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Em:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wm:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",Y);break}R=null,P=null,I=null,k=null,T.set(0,0,0),N=0,_=Y,X=Yt}return}Oe=Oe||He,_e=_e||me,lt=lt||ot,(He!==U||Oe!==H)&&(s.blendEquationSeparate(yt[He],yt[Oe]),U=He,H=Oe),(me!==R||ot!==P||_e!==I||lt!==k)&&(s.blendFuncSeparate(Ut[me],Ut[ot],Ut[_e],Ut[lt]),R=me,P=ot,I=_e,k=lt),(St.equals(T)===!1||Xt!==N)&&(s.blendColor(St.r,St.g,St.b,Xt),T.copy(St),N=Xt),_=Y,X=!1}function bt(Y,He){Y.side===wr?Le(s.CULL_FACE):ye(s.CULL_FACE);let me=Y.side===fi;He&&(me=!me),Ot(me),Y.blending===ma&&Y.transparent===!1?Kt(Tr):Kt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const ot=Y.stencilWrite;f.setTest(ot),ot&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(Y){G!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),G=Y)}function Rt(Y){Y!==yv?(ye(s.CULL_FACE),Y!==Q&&(Y===Sm?s.cullFace(s.BACK):Y===Sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),Q=Y}function Gt(Y){Y!==re&&(J&&s.lineWidth(Y),re=Y)}function $(Y,He,me){Y?(ye(s.POLYGON_OFFSET_FILL),(pe!==He||W!==me)&&(pe=He,W=me,u.getReversed()&&(He=-He),s.polygonOffset(He,me))):Le(s.POLYGON_OFFSET_FILL)}function Pt(Y){Y?ye(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function Et(Y){Y===void 0&&(Y=s.TEXTURE0+oe-1),ce!==Y&&(s.activeTexture(Y),ce=Y)}function Tt(Y,He,me){me===void 0&&(ce===null?me=s.TEXTURE0+oe-1:me=ce);let ot=B[me];ot===void 0&&(ot={type:void 0,texture:void 0},B[me]=ot),(ot.type!==Y||ot.texture!==He)&&(ce!==me&&(s.activeTexture(me),ce=me),s.bindTexture(Y,He||be[Y]),ot.type=Y,ot.texture=He)}function qe(){const Y=B[ce];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Bt(){try{s.compressedTexImage2D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function b(){try{s.texSubImage2D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function ae(){try{s.texSubImage3D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function ze(){try{s.texStorage2D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function We(){try{s.texStorage3D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function xe(){try{s.texImage2D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function Ee(){try{s.texImage3D(...arguments)}catch(Y){tn("WebGLState:",Y)}}function Ne(Y){return S[Y]!==void 0?S[Y]:s.getParameter(Y)}function nt(Y,He){S[Y]!==He&&(s.pixelStorei(Y,He),S[Y]=He)}function Xe(Y){it.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),it.copy(Y))}function Fe(Y){Ce.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Ke(Y,He){let me=p.get(He);me===void 0&&(me=new WeakMap,p.set(He,me));let ot=me.get(Y);ot===void 0&&(ot=s.getUniformBlockIndex(He,Y.name),me.set(Y,ot))}function Ve(Y,He){const ot=p.get(He).get(Y);h.get(He)!==ot&&(s.uniformBlockBinding(He,ot,Y.__bindingPointIndex),h.set(He,ot))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},ce=null,B={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,U=null,R=null,P=null,H=null,I=null,k=null,T=new ln(0,0,0),N=0,X=!1,G=null,Q=null,re=null,pe=null,W=null,it.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ye,disable:Le,bindFramebuffer:at,drawBuffers:ht,useProgram:Mt,setBlending:Kt,setMaterial:bt,setFlipSided:Ot,setCullFace:Rt,setLineWidth:Gt,setPolygonOffset:$,setScissorTest:Pt,activeTexture:Et,bindTexture:Tt,unbindTexture:qe,compressedTexImage2D:Bt,compressedTexImage3D:F,texImage2D:xe,texImage3D:Ee,pixelStorei:nt,getParameter:Ne,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:ze,texStorage3D:We,texSubImage2D:b,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:Xe,viewport:Fe,reset:Nt}}function FE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(F,b){return C?new OffscreenCanvas(F,b):rc("canvas")}function y(F,b,ae){let Me=1;const Re=Bt(F);if((Re.width>ae||Re.height>ae)&&(Me=ae/Math.max(Re.width,Re.height)),Me<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ze=Math.floor(Me*Re.width),We=Math.floor(Me*Re.height);x===void 0&&(x=D(ze,We));const xe=b?D(ze,We):x;return xe.width=ze,xe.height=We,xe.getContext("2d").drawImage(F,0,0,ze,We),It("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+ze+"x"+We+")."),xe}else return"data"in F&&It("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),F;return F}function _(F){return F.generateMipmaps}function U(F){s.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(F,b,ae,Me,Re,ze=!1){if(F!==null){if(s[F]!==void 0)return s[F];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let We;Me&&(We=e.get("EXT_texture_norm16"),We||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=b;if(b===s.RED&&(ae===s.FLOAT&&(xe=s.R32F),ae===s.HALF_FLOAT&&(xe=s.R16F),ae===s.UNSIGNED_BYTE&&(xe=s.R8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.R16_EXT),ae===s.SHORT&&We&&(xe=We.R16_SNORM_EXT)),b===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.R8UI),ae===s.UNSIGNED_SHORT&&(xe=s.R16UI),ae===s.UNSIGNED_INT&&(xe=s.R32UI),ae===s.BYTE&&(xe=s.R8I),ae===s.SHORT&&(xe=s.R16I),ae===s.INT&&(xe=s.R32I)),b===s.RG&&(ae===s.FLOAT&&(xe=s.RG32F),ae===s.HALF_FLOAT&&(xe=s.RG16F),ae===s.UNSIGNED_BYTE&&(xe=s.RG8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.RG16_EXT),ae===s.SHORT&&We&&(xe=We.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ae===s.UNSIGNED_INT&&(xe=s.RG32UI),ae===s.BYTE&&(xe=s.RG8I),ae===s.SHORT&&(xe=s.RG16I),ae===s.INT&&(xe=s.RG32I)),b===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ae===s.UNSIGNED_INT&&(xe=s.RGB32UI),ae===s.BYTE&&(xe=s.RGB8I),ae===s.SHORT&&(xe=s.RGB16I),ae===s.INT&&(xe=s.RGB32I)),b===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ae===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ae===s.BYTE&&(xe=s.RGBA8I),ae===s.SHORT&&(xe=s.RGBA16I),ae===s.INT&&(xe=s.RGBA32I)),b===s.RGB&&(ae===s.UNSIGNED_SHORT&&We&&(xe=We.RGB16_EXT),ae===s.SHORT&&We&&(xe=We.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),b===s.RGBA){const Ee=ze?nc:Jt.getTransfer(Re);ae===s.FLOAT&&(xe=s.RGBA32F),ae===s.HALF_FLOAT&&(xe=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(xe=Ee===sn?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&We&&(xe=We.RGBA16_EXT),ae===s.SHORT&&We&&(xe=We.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function H(F,b){let ae;return F?b===null||b===lr||b===go?ae=s.DEPTH24_STENCIL8:b===ir?ae=s.DEPTH32F_STENCIL8:b===mo&&(ae=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===lr||b===go?ae=s.DEPTH_COMPONENT24:b===ir?ae=s.DEPTH_COMPONENT32F:b===mo&&(ae=s.DEPTH_COMPONENT16),ae}function I(F,b){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function k(F){const b=F.target;b.removeEventListener("dispose",k),N(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&S.delete(b)}function T(F){const b=F.target;b.removeEventListener("dispose",T),G(b)}function N(F){const b=r.get(F);if(b.__webglInit===void 0)return;const ae=F.source,Me=M.get(ae);if(Me){const Re=Me[b.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&X(F),Object.keys(Me).length===0&&M.delete(ae)}r.remove(F)}function X(F){const b=r.get(F);s.deleteTexture(b.__webglTexture);const ae=F.source,Me=M.get(ae);delete Me[b.__cacheKey],u.memory.textures--}function G(F){const b=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(b.__webglFramebuffer[Me]))for(let Re=0;Re<b.__webglFramebuffer[Me].length;Re++)s.deleteFramebuffer(b.__webglFramebuffer[Me][Re]);else s.deleteFramebuffer(b.__webglFramebuffer[Me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Me])}else{if(Array.isArray(b.__webglFramebuffer))for(let Me=0;Me<b.__webglFramebuffer.length;Me++)s.deleteFramebuffer(b.__webglFramebuffer[Me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Me=0;Me<b.__webglColorRenderbuffer.length;Me++)b.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ae=F.textures;for(let Me=0,Re=ae.length;Me<Re;Me++){const ze=r.get(ae[Me]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),u.memory.textures--),r.remove(ae[Me])}r.remove(F)}let Q=0;function re(){Q=0}function pe(){return Q}function W(F){Q=F}function oe(){const F=Q;return F>=o.maxTextures&&It("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),Q+=1,F}function J(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function ee(F,b){const ae=r.get(F);if(F.isVideoTexture&&Tt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ae.__version!==F.version){const Me=F.image;if(Me===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ae,F,b);return}}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+b)}function he(F,b){const ae=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){Le(ae,F,b);return}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+b)}function ce(F,b){const ae=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){Le(ae,F,b);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+b)}function B(F,b){const ae=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ae.__version!==F.version){at(ae,F,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+b)}const le={[Hd]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[Gd]:s.MIRRORED_REPEAT},tt={[On]:s.NEAREST,[Gv]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[Zu]:s.LINEAR_MIPMAP_NEAREST,[ws]:s.LINEAR_MIPMAP_LINEAR},it={[Xv]:s.NEVER,[Zv]:s.ALWAYS,[Yv]:s.LESS,[Ff]:s.LEQUAL,[$v]:s.EQUAL,[Of]:s.GEQUAL,[qv]:s.GREATER,[Kv]:s.NOTEQUAL};function Ce(F,b){if(b.type===ir&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Zu||b.magFilter===Sl||b.magFilter===ws||b.minFilter===Yn||b.minFilter===Zu||b.minFilter===Sl||b.minFilter===ws)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,le[b.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,le[b.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,le[b.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,tt[b.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==Sl&&b.minFilter!==ws||b.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ue(F,b){let ae=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",k));const Me=b.source;let Re=M.get(Me);Re===void 0&&(Re={},M.set(Me,Re));const ze=J(b);if(ze!==F.__cacheKey){Re[ze]===void 0&&(Re[ze]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Re[ze].usedTimes++;const We=Re[F.__cacheKey];We!==void 0&&(Re[F.__cacheKey].usedTimes--,We.usedTimes===0&&X(b)),F.__cacheKey=ze,F.__webglTexture=Re[ze].texture}return ae}function be(F,b,ae){return Math.floor(Math.floor(F/ae)/b)}function ye(F,b,ae,Me){const ze=F.updateRanges;if(ze.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ae,Me,b.data);else{ze.sort((nt,Xe)=>nt.start-Xe.start);let We=0;for(let nt=1;nt<ze.length;nt++){const Xe=ze[We],Fe=ze[nt],Ke=Xe.start+Xe.count,Ve=be(Fe.start,b.width,4),Nt=be(Xe.start,b.width,4);Fe.start<=Ke+1&&Ve===Nt&&be(Fe.start+Fe.count-1,b.width,4)===Ve?Xe.count=Math.max(Xe.count,Fe.start+Fe.count-Xe.start):(++We,ze[We]=Fe)}ze.length=We+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Ee=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let nt=0,Xe=ze.length;nt<Xe;nt++){const Fe=ze[nt],Ke=Math.floor(Fe.start/4),Ve=Math.ceil(Fe.count/4),Nt=Ke%b.width,Y=Math.floor(Ke/b.width),He=Ve,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Nt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,Nt,Y,He,me,ae,Me,b.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function Le(F,b,ae){let Me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Me=s.TEXTURE_3D);const Re=ue(F,b),ze=b.source;t.bindTexture(Me,F.__webglTexture,s.TEXTURE0+ae);const We=r.get(ze);if(ze.version!==We.__version||Re===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Jt.getPrimaries(Jt.workingColorSpace),ot=b.colorSpace===Qr?null:Jt.getPrimaries(b.colorSpace),Oe=b.colorSpace===Qr||me===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let Ee=y(b.image,!1,o.maxTextureSize);Ee=qe(b,Ee);const Ne=l.convert(b.format,b.colorSpace),nt=l.convert(b.type);let Xe=P(b.internalFormat,Ne,nt,b.normalized,b.colorSpace,b.isVideoTexture);Ce(Me,b);let Fe;const Ke=b.mipmaps,Ve=b.isVideoTexture!==!0,Nt=We.__version===void 0||Re===!0,Y=ze.dataReady,He=I(b,Ee);if(b.isDepthTexture)Xe=H(b.format===bs,b.type),Nt&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,Xe,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Ne,nt,null));else if(b.isDataTexture)if(Ke.length>0){Ve&&Nt&&t.texStorage2D(s.TEXTURE_2D,He,Xe,Ke[0].width,Ke[0].height);for(let me=0,ot=Ke.length;me<ot;me++)Fe=Ke[me],Ve?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Fe.width,Fe.height,Ne,nt,Fe.data):t.texImage2D(s.TEXTURE_2D,me,Xe,Fe.width,Fe.height,0,Ne,nt,Fe.data);b.generateMipmaps=!1}else Ve?(Nt&&t.texStorage2D(s.TEXTURE_2D,He,Xe,Ee.width,Ee.height),Y&&ye(b,Ee,Ne,nt)):t.texImage2D(s.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Ne,nt,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,Xe,Ke[0].width,Ke[0].height,Ee.depth);for(let me=0,ot=Ke.length;me<ot;me++)if(Fe=Ke[me],b.format!==$i)if(Ne!==null)if(Ve){if(Y)if(b.layerUpdates.size>0){const Oe=Jm(Fe.width,Fe.height,b.format,b.type);for(const _e of b.layerUpdates){const lt=Fe.data.subarray(_e*Oe/Fe.data.BYTES_PER_ELEMENT,(_e+1)*Oe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,_e,Fe.width,Fe.height,1,Ne,lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Fe.width,Fe.height,Ee.depth,Ne,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Xe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Fe.width,Fe.height,Ee.depth,Ne,nt,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Xe,Fe.width,Fe.height,Ee.depth,0,Ne,nt,Fe.data)}else{Ve&&Nt&&t.texStorage2D(s.TEXTURE_2D,He,Xe,Ke[0].width,Ke[0].height);for(let me=0,ot=Ke.length;me<ot;me++)Fe=Ke[me],b.format!==$i?Ne!==null?Ve?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Xe,Fe.width,Fe.height,0,Fe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Fe.width,Fe.height,Ne,nt,Fe.data):t.texImage2D(s.TEXTURE_2D,me,Xe,Fe.width,Fe.height,0,Ne,nt,Fe.data)}else if(b.isDataArrayTexture)if(Ve){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,Xe,Ee.width,Ee.height,Ee.depth),Y)if(b.layerUpdates.size>0){const me=Jm(Ee.width,Ee.height,b.format,b.type);for(const ot of b.layerUpdates){const Oe=Ee.data.subarray(ot*me/Ee.data.BYTES_PER_ELEMENT,(ot+1)*me/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,Ee.width,Ee.height,1,Ne,nt,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,nt,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Ee.width,Ee.height,Ee.depth,0,Ne,nt,Ee.data);else if(b.isData3DTexture)Ve?(Nt&&t.texStorage3D(s.TEXTURE_3D,He,Xe,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,nt,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,Xe,Ee.width,Ee.height,Ee.depth,0,Ne,nt,Ee.data);else if(b.isFramebufferTexture){if(Nt)if(Ve)t.texStorage2D(s.TEXTURE_2D,He,Xe,Ee.width,Ee.height);else{let me=Ee.width,ot=Ee.height;for(let Oe=0;Oe<He;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Xe,me,ot,0,Ne,nt,null),me>>=1,ot>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),Ee.parentNode!==me){me.appendChild(Ee),S.add(b),me.onpaint=St=>{const Xt=St.changedElements;for(const Yt of S)Xt.includes(Yt.image)&&(Yt.needsUpdate=!0)},me.requestPaint();return}const ot=0,Oe=s.RGBA,_e=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ot,Oe,_e,lt,Ee),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Ve&&Nt){const me=Bt(Ke[0]);t.texStorage2D(s.TEXTURE_2D,He,Xe,me.width,me.height)}for(let me=0,ot=Ke.length;me<ot;me++)Fe=Ke[me],Ve?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne,nt,Fe):t.texImage2D(s.TEXTURE_2D,me,Xe,Ne,nt,Fe);b.generateMipmaps=!1}else if(Ve){if(Nt){const me=Bt(Ee);t.texStorage2D(s.TEXTURE_2D,He,Xe,me.width,me.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,nt,Ee)}else t.texImage2D(s.TEXTURE_2D,0,Xe,Ne,nt,Ee);_(b)&&U(Me),We.__version=ze.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function at(F,b,ae){if(b.image.length!==6)return;const Me=ue(F,b),Re=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ae);const ze=r.get(Re);if(Re.version!==ze.__version||Me===!0){t.activeTexture(s.TEXTURE0+ae);const We=Jt.getPrimaries(Jt.workingColorSpace),xe=b.colorSpace===Qr?null:Jt.getPrimaries(b.colorSpace),Ee=b.colorSpace===Qr||We===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,Xe=[];for(let _e=0;_e<6;_e++)!Ne&&!nt?Xe[_e]=y(b.image[_e],!0,o.maxCubemapSize):Xe[_e]=nt?b.image[_e].image:b.image[_e],Xe[_e]=qe(b,Xe[_e]);const Fe=Xe[0],Ke=l.convert(b.format,b.colorSpace),Ve=l.convert(b.type),Nt=P(b.internalFormat,Ke,Ve,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,He=ze.__version===void 0||Me===!0,me=Re.dataReady;let ot=I(b,Fe);Ce(s.TEXTURE_CUBE_MAP,b);let Oe;if(Ne){Y&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Nt,Fe.width,Fe.height);for(let _e=0;_e<6;_e++){Oe=Xe[_e].mipmaps;for(let lt=0;lt<Oe.length;lt++){const St=Oe[lt];b.format!==$i?Ke!==null?Y?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt,0,0,St.width,St.height,Ke,St.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt,Nt,St.width,St.height,0,St.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt,0,0,St.width,St.height,Ke,Ve,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt,Nt,St.width,St.height,0,Ke,Ve,St.data)}}}else{if(Oe=b.mipmaps,Y&&He){Oe.length>0&&ot++;const _e=Bt(Xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Nt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(nt){Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe[_e].width,Xe[_e].height,Ke,Ve,Xe[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Nt,Xe[_e].width,Xe[_e].height,0,Ke,Ve,Xe[_e].data);for(let lt=0;lt<Oe.length;lt++){const Xt=Oe[lt].image[_e].image;Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt+1,0,0,Xt.width,Xt.height,Ke,Ve,Xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt+1,Nt,Xt.width,Xt.height,0,Ke,Ve,Xt.data)}}else{Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ke,Ve,Xe[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Nt,Ke,Ve,Xe[_e]);for(let lt=0;lt<Oe.length;lt++){const St=Oe[lt];Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt+1,0,0,Ke,Ve,St.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,lt+1,Nt,Ke,Ve,St.image[_e])}}}_(b)&&U(s.TEXTURE_CUBE_MAP),ze.__version=Re.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ht(F,b,ae,Me,Re,ze){const We=l.convert(ae.format,ae.colorSpace),xe=l.convert(ae.type),Ee=P(ae.internalFormat,We,xe,ae.normalized,ae.colorSpace),Ne=r.get(b),nt=r.get(ae);if(nt.__renderTarget=b,!Ne.__hasExternalTextures){const Xe=Math.max(1,b.width>>ze),Fe=Math.max(1,b.height>>ze);Re===s.TEXTURE_3D||Re===s.TEXTURE_2D_ARRAY?t.texImage3D(Re,ze,Ee,Xe,Fe,b.depth,0,We,xe,null):t.texImage2D(Re,ze,Ee,Xe,Fe,0,We,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Et(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Re,nt.__webglTexture,0,Pt(b)):(Re===s.TEXTURE_2D||Re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Re,nt.__webglTexture,ze),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(F,b,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,F),b.depthBuffer){const Me=b.depthTexture,Re=Me&&Me.isDepthTexture?Me.type:null,ze=H(b.stencilBuffer,Re),We=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Et(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(b),ze,b.width,b.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(b),ze,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ze,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,F)}else{const Me=b.textures;for(let Re=0;Re<Me.length;Re++){const ze=Me[Re],We=l.convert(ze.format,ze.colorSpace),xe=l.convert(ze.type),Ee=P(ze.internalFormat,We,xe,ze.normalized,ze.colorSpace);Et(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(b),Ee,b.width,b.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(b),Ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(F,b,ae){const Me=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=r.get(b.depthTexture);if(Re.__renderTarget=b,(!Re.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Me){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,b.depthTexture.addEventListener("dispose",k)),Re.__webglTexture===void 0){Re.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ne=l.convert(b.depthTexture.format),nt=l.convert(b.depthTexture.type);let Xe;b.depthTexture.format===Rr?Xe=s.DEPTH_COMPONENT24:b.depthTexture.format===bs&&(Xe=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Xe,b.width,b.height,0,Ne,nt,null)}}else ee(b.depthTexture,0);const ze=Re.__webglTexture,We=Pt(b),xe=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Ee=b.depthTexture.format===bs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Rr)Et(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,xe,ze,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,xe,ze,0);else if(b.depthTexture.format===bs)Et(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,xe,ze,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,xe,ze,0);else throw new Error("Unknown depthTexture format")}function Ut(F){const b=r.get(F),ae=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const Me=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Me){const Re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Me.removeEventListener("dispose",Re)};Me.addEventListener("dispose",Re),b.__depthDisposeCallback=Re}b.__boundDepthTexture=Me}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(ae)for(let Me=0;Me<6;Me++)yt(b.__webglFramebuffer[Me],F,Me);else{const Me=F.texture.mipmaps;Me&&Me.length>0?yt(b.__webglFramebuffer[0],F,0):yt(b.__webglFramebuffer,F,0)}else if(ae){b.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Me]),b.__webglDepthbuffer[Me]===void 0)b.__webglDepthbuffer[Me]=s.createRenderbuffer(),Mt(b.__webglDepthbuffer[Me],F,!1);else{const Re=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=b.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,ze),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,ze)}}else{const Me=F.texture.mipmaps;if(Me&&Me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Mt(b.__webglDepthbuffer,F,!1);else{const Re=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ze),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,ze)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(F,b,ae){const Me=r.get(F);b!==void 0&&ht(Me.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Ut(F)}function bt(F){const b=F.texture,ae=r.get(F),Me=r.get(b);F.addEventListener("dispose",T);const Re=F.textures,ze=F.isWebGLCubeRenderTarget===!0,We=Re.length>1;if(We||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=b.version,u.memory.textures++),ze){ae.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)ae.__webglFramebuffer[xe][Ee]=s.createFramebuffer()}else ae.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)ae.__webglFramebuffer[xe]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(We)for(let xe=0,Ee=Re.length;xe<Ee;xe++){const Ne=r.get(Re[xe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&Et(F)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let xe=0;xe<Re.length;xe++){const Ee=Re[xe];ae.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const Ne=l.convert(Ee.format,Ee.colorSpace),nt=l.convert(Ee.type),Xe=P(Ee.internalFormat,Ne,nt,Ee.normalized,Ee.colorSpace,F.isXRRenderTarget===!0),Fe=Pt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Xe,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(ae.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ze){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)ht(ae.__webglFramebuffer[xe][Ee],F,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else ht(ae.__webglFramebuffer[xe],F,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(b)&&U(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let xe=0,Ee=Re.length;xe<Ee;xe++){const Ne=Re[xe],nt=r.get(Ne);let Xe=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Xe=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Xe,nt.__webglTexture),Ce(Xe,Ne),ht(ae.__webglFramebuffer,F,Ne,s.COLOR_ATTACHMENT0+xe,Xe,0),_(Ne)&&U(Xe)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xe=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Me.__webglTexture),Ce(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)ht(ae.__webglFramebuffer[Ee],F,b,s.COLOR_ATTACHMENT0,xe,Ee);else ht(ae.__webglFramebuffer,F,b,s.COLOR_ATTACHMENT0,xe,0);_(b)&&U(xe),t.unbindTexture()}F.depthBuffer&&Ut(F)}function Ot(F){const b=F.textures;for(let ae=0,Me=b.length;ae<Me;ae++){const Re=b[ae];if(_(Re)){const ze=R(F),We=r.get(Re).__webglTexture;t.bindTexture(ze,We),U(ze),t.unbindTexture()}}}const Rt=[],Gt=[];function $(F){if(F.samples>0){if(Et(F)===!1){const b=F.textures,ae=F.width,Me=F.height;let Re=s.COLOR_BUFFER_BIT;const ze=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(F),xe=b.length>1;if(xe)for(let Ne=0;Ne<b.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ee=F.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Re|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Re|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const nt=r.get(b[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,ae,Me,0,0,ae,Me,Re,s.NEAREST),h===!0&&(Rt.length=0,Gt.length=0,Rt.push(s.COLOR_ATTACHMENT0+Ne),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Rt.push(ze),Gt.push(ze),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<b.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const nt=r.get(b[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const b=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Pt(F){return Math.min(o.maxSamples,F.samples)}function Et(F){const b=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(F){const b=u.render.frame;v.get(F)!==b&&(v.set(F,b),F.update())}function qe(F,b){const ae=F.colorSpace,Me=F.format,Re=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ae!==tc&&ae!==Qr&&(Jt.getTransfer(ae)===sn?(Me!==$i||Re!==Di)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",ae)),b}function Bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=pe,this.setTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Kt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OE(s,e){function t(r,o=Qr){let l;const u=Jt.getTransfer(o);if(r===Di)return s.UNSIGNED_BYTE;if(r===Pf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===If)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Z0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===J0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===q0)return s.BYTE;if(r===K0)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Nf)return s.INT;if(r===lr)return s.UNSIGNED_INT;if(r===ir)return s.FLOAT;if(r===Cr)return s.HALF_FLOAT;if(r===Q0)return s.ALPHA;if(r===eg)return s.RGB;if(r===$i)return s.RGBA;if(r===Rr)return s.DEPTH_COMPONENT;if(r===bs)return s.DEPTH_STENCIL;if(r===tg)return s.RED;if(r===Df)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===Lf)return s.RG_INTEGER;if(r===Uf)return s.RGBA_INTEGER;if(r===Yl||r===$l||r===ql||r===Kl)if(u===sn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jd||r===Wd||r===Xd||r===Yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===jd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===qd||r===Kd||r===Zd||r===Jd||r===Ql||r===Qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===$d||r===qd)return u===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kd)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zd)return l.COMPRESSED_R11_EAC;if(r===Jd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ql)return l.COMPRESSED_RG11_EAC;if(r===Qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ef)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===af)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===of)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===df)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ff)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mf||r===gf||r===xf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===mf)return u===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vf||r===_f||r===ec||r===yf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===vf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===_f)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const kE=`
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

}`;class zE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ug(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cr({vertexShader:kE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends Ns{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,C=null;const D=typeof XRWebGLBinding<"u",y=new zE,_={},U=t.getContextAttributes();let R=null,P=null;const H=[],I=[],k=new Dt;let T=null;const N=new Ii;N.viewport=new vn;const X=new Ii;X.viewport=new vn;const G=[N,X],Q=new Z_;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let be=H[ue];return be===void 0&&(be=new sd,H[ue]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ue){let be=H[ue];return be===void 0&&(be=new sd,H[ue]=be),be.getGripSpace()},this.getHand=function(ue){let be=H[ue];return be===void 0&&(be=new sd,H[ue]=be),be.getHandSpace()};function W(ue){const be=I.indexOf(ue.inputSource);if(be===-1)return;const ye=H[be];ye!==void 0&&(ye.update(ue.inputSource,ue.frame,p||u),ye.dispatchEvent({type:ue.type,data:ue.inputSource}))}function oe(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",J);for(let ue=0;ue<H.length;ue++){const be=I[ue];be!==null&&(I[ue]=null,H[ue].disconnect(be))}re=null,pe=null,y.reset();for(const ue in _)delete _[ue];e.setRenderTarget(R),M=null,x=null,S=null,o=null,P=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,r.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){f=ue,r.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(ue){if(o=ue,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",J),U.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Le=null,at=null;U.depth&&(at=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=U.stencil?bs:Rr,Le=U.stencil?go:lr);const ht={colorFormat:t.RGBA8,depthFormat:at,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ht),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new ar(x.textureWidth,x.textureHeight,{format:$i,type:Di,depthTexture:new _a(x.textureWidth,x.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ar(M.framebufferWidth,M.framebufferHeight,{format:$i,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(ue){for(let be=0;be<ue.removed.length;be++){const ye=ue.removed[be],Le=I.indexOf(ye);Le>=0&&(I[Le]=null,H[Le].disconnect(ye))}for(let be=0;be<ue.added.length;be++){const ye=ue.added[be];let Le=I.indexOf(ye);if(Le===-1){for(let ht=0;ht<H.length;ht++)if(ht>=I.length){I.push(ye),Le=ht;break}else if(I[ht]===null){I[ht]=ye,Le=ht;break}if(Le===-1)break}const at=H[Le];at&&at.connect(ye)}}const ee=new ie,he=new ie;function ce(ue,be,ye){ee.setFromMatrixPosition(be.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);const Le=ee.distanceTo(he),at=be.projectionMatrix.elements,ht=ye.projectionMatrix.elements,Mt=at[14]/(at[10]-1),yt=at[14]/(at[10]+1),Ut=(at[9]+1)/at[5],Kt=(at[9]-1)/at[5],bt=(at[8]-1)/at[0],Ot=(ht[8]+1)/ht[0],Rt=Mt*bt,Gt=Mt*Ot,$=Le/(-bt+Ot),Pt=$*-bt;if(be.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Pt),ue.translateZ($),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),at[10]===-1)ue.projectionMatrix.copy(be.projectionMatrix),ue.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Et=Mt+$,Tt=yt+$,qe=Rt-Pt,Bt=Gt+(Le-Pt),F=Ut*yt/Tt*Et,b=Kt*yt/Tt*Et;ue.projectionMatrix.makePerspective(qe,Bt,F,b,Et,Tt),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function B(ue,be){be===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(be.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(o===null)return;let be=ue.near,ye=ue.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),Q.near=X.near=N.near=be,Q.far=X.far=N.far=ye,(re!==Q.near||pe!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),re=Q.near,pe=Q.far),Q.layers.mask=ue.layers.mask|6,N.layers.mask=Q.layers.mask&-5,X.layers.mask=Q.layers.mask&-3;const Le=ue.parent,at=Q.cameras;B(Q,Le);for(let ht=0;ht<at.length;ht++)B(at[ht],Le);at.length===2?ce(Q,N,X):Q.projectionMatrix.copy(N.projectionMatrix),le(ue,Q,Le)};function le(ue,be,ye){ye===null?ue.matrix.copy(be.matrixWorld):(ue.matrix.copy(ye.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(be.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(be.projectionMatrix),ue.projectionMatrixInverse.copy(be.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Mf*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ue){h=ue,x!==null&&(x.fixedFoveation=ue),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ue){return _[ue]};let tt=null;function it(ue,be){if(v=be.getViewerPose(p||u),C=be,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Le=!1;ye.length!==Q.cameras.length&&(Q.cameras.length=0,Le=!0);for(let yt=0;yt<ye.length;yt++){const Ut=ye[yt];let Kt=null;if(M!==null)Kt=M.getViewport(Ut);else{const Ot=S.getViewSubImage(x,Ut);Kt=Ot.viewport,yt===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let bt=G[yt];bt===void 0&&(bt=new Ii,bt.layers.enable(yt),bt.viewport=new vn,G[yt]=bt),bt.matrix.fromArray(Ut.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Ut.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),yt===0&&(Q.matrix.copy(bt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Le===!0&&Q.cameras.push(bt)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const yt=S.getDepthInformation(ye[0]);yt&&yt.isValid&&yt.texture&&y.init(yt,o.renderState)}if(at&&at.includes("camera-access")&&D){e.state.unbindTexture(),S=r.getBinding();for(let yt=0;yt<ye.length;yt++){const Ut=ye[yt].camera;if(Ut){let Kt=_[Ut];Kt||(Kt=new ug,_[Ut]=Kt);const bt=S.getCameraImage(Ut);Kt.sourceTexture=bt}}}}for(let ye=0;ye<H.length;ye++){const Le=I[ye],at=H[ye];Le!==null&&at!==void 0&&at.update(Le,be,p||u)}tt&&tt(ue,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),C=null}const Ce=new gg;Ce.setAnimationLoop(it),this.setAnimationLoop=function(ue){tt=ue},this.dispose=function(){}}}const HE=new En,Eg=new kt;Eg.set(-1,0,0,0,1,0,0,0,1);function GE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,hg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,U,R,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),C(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),D(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,U,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===fi&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===fi&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),R=U.envMap,P=U.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(HE.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Eg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,U,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===fi&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function jE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,R){const P=R.program;r.uniformBlockBinding(U,P)}function p(U,R){let P=o[U.id];P===void 0&&(C(U),P=v(U),o[U.id]=P,U.addEventListener("dispose",y));const H=R.program;r.updateUBOMapping(U,H);const I=e.render.frame;l[U.id]!==I&&(x(U),l[U.id]=I)}function v(U){const R=S();U.__bindingPointIndex=R;const P=s.createBuffer(),H=U.__size,I=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function S(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const R=o[U.id],P=U.uniforms,H=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,k=P.length;I<k;I++){const T=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,X=T.length;N<X;N++){const G=T[N];if(M(G,I,N,H)===!0){const Q=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let W=0;W<re.length;W++){const oe=re[W],J=D(oe);typeof oe=="number"||typeof oe=="boolean"?(G.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Q+pe,G.__data)):oe.isMatrix3?(G.__data[0]=oe.elements[0],G.__data[1]=oe.elements[1],G.__data[2]=oe.elements[2],G.__data[3]=0,G.__data[4]=oe.elements[3],G.__data[5]=oe.elements[4],G.__data[6]=oe.elements[5],G.__data[7]=0,G.__data[8]=oe.elements[6],G.__data[9]=oe.elements[7],G.__data[10]=oe.elements[8],G.__data[11]=0):ArrayBuffer.isView(oe)?G.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,G.__data.length)):(oe.toArray(G.__data,pe),pe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,R,P,H){const I=U.value,k=R+"_"+P;if(H[k]===void 0)return typeof I=="number"||typeof I=="boolean"?H[k]=I:ArrayBuffer.isView(I)?H[k]=I.slice():H[k]=I.clone(),!0;{const T=H[k];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return H[k]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(T.equals(I)===!1)return T.copy(I),!0}}return!1}function C(U){const R=U.uniforms;let P=0;const H=16;for(let k=0,T=R.length;k<T;k++){const N=Array.isArray(R[k])?R[k]:[R[k]];for(let X=0,G=N.length;X<G;X++){const Q=N[X],re=Array.isArray(Q.value)?Q.value:[Q.value];for(let pe=0,W=re.length;pe<W;pe++){const oe=re[pe],J=D(oe),ee=P%H,he=ee%J.boundary,ce=ee+he;P+=he,ce!==0&&H-ce<J.storage&&(P+=H-ce),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=J.storage}}}const I=P%H;return I>0&&(P+=H-I),U.__size=P,U.__cache={},this}function D(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(U)?(R.boundary=16,R.storage=U.byteLength):It("WebGLRenderer: Unsupported uniform value type.",U),R}function y(U){const R=U.target;R.removeEventListener("dispose",y);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const WE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function XE(){return tr===null&&(tr=new E_(WE,16,16,Cs,Cr),tr.name="DFG_LUT",tr.minFilter=Yn,tr.magFilter=Yn,tr.wrapS=br,tr.wrapT=br,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class YE{constructor(e={}){const{canvas:t=Qv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Di}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const D=M,y=new Set([Uf,Lf,Df]),_=new Set([Di,lr,mo,go,Pf,If]),U=new Uint32Array(4),R=new Int32Array(4),P=new ie;let H=null,I=null;const k=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,Q=null;this._outputColorSpace=Pi;let re=0,pe=0,W=null,oe=-1,J=null;const ee=new vn,he=new vn;let ce=null;const B=new ln(0);let le=0,tt=t.width,it=t.height,Ce=1,ue=null,be=null;const ye=new vn(0,0,tt,it),Le=new vn(0,0,tt,it);let at=!1;const ht=new lg;let Mt=!1,yt=!1;const Ut=new En,Kt=new ie,bt=new vn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Gt(){return W===null?Ce:1}let $=r;function Pt(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",St,!1),$===null){const z="webgl2";if($=Pt(z,w),$===null)throw Pt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw tn("WebGLRenderer: "+w.message),w}let Et,Tt,qe,Bt,F,b,ae,Me,Re,ze,We,xe,Ee,Ne,nt,Xe,Fe,Ke,Ve,Nt,Y,He,me;function ot(){Et=new X1($),Et.init(),Y=new OE($,Et),Tt=new k1($,Et,e,Y),qe=new UE($,Et),Tt.reversedDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Bt=new q1($),F=new SE,b=new FE($,Et,qe,F,Tt,Y,Bt),ae=new W1(X),Me=new Q_($),He=new F1($,Me),Re=new Y1($,Me,Bt,He),ze=new Z1($,Re,Me,He,Bt),Ke=new K1($,Tt,b),nt=new B1(F),We=new yE(X,ae,Et,Tt,He,nt),xe=new GE(X,F),Ee=new EE,Ne=new RE(Et),Fe=new U1(X,ae,qe,ze,C,h),Xe=new LE(X,ze,Tt),me=new jE($,Bt,Tt,qe),Ve=new O1($,Et,Bt),Nt=new $1($,Et,Bt),Bt.programs=We.programs,X.capabilities=Tt,X.extensions=Et,X.properties=F,X.renderLists=Ee,X.shadowMap=Xe,X.state=qe,X.info=Bt}ot(),D!==Di&&(N=new Q1(D,t.width,t.height,o,l));const Oe=new VE(X,$);this.xr=Oe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(w){w!==void 0&&(Ce=w,this.setSize(tt,it,!1))},this.getSize=function(w){return w.set(tt,it)},this.setSize=function(w,z,se=!0){if(Oe.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,it=z,t.width=Math.floor(w*Ce),t.height=Math.floor(z*Ce),se===!0&&(t.style.width=w+"px",t.style.height=z+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(tt*Ce,it*Ce).floor()},this.setDrawingBufferSize=function(w,z,se){tt=w,it=z,Ce=se,t.width=Math.floor(w*se),t.height=Math.floor(z*se),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(D===Di){tn("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){It("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,z,se,K){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,z,se,K),qe.viewport(ee.copy(ye).multiplyScalar(Ce).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,z,se,K){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,z,se,K),qe.scissor(he.copy(Le).multiplyScalar(Ce).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){qe.setScissorTest(at=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){be=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,se=!0){let K=0;if(w){let ne=!1;if(W!==null){const Te=W.texture.format;ne=y.has(Te)}if(ne){const Te=W.texture.type,Ge=_.has(Te),we=Fe.getClearColor(),Ze=Fe.getClearAlpha(),Je=we.r,Ie=we.g,rt=we.b;Ge?(U[0]=Je,U[1]=Ie,U[2]=rt,U[3]=Ze,$.clearBufferuiv($.COLOR,0,U)):(R[0]=Je,R[1]=Ie,R[2]=rt,R[3]=Ze,$.clearBufferiv($.COLOR,0,R))}else K|=$.COLOR_BUFFER_BIT}z&&(K|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(K|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&$.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Q=w},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Fe.dispose(),Ee.dispose(),Ne.dispose(),F.dispose(),ae.dispose(),ze.dispose(),He.dispose(),me.dispose(),We.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Li),Oe.removeEventListener("sessionend",kn),$n.stop()};function _e(w){w.preventDefault(),Nm("WebGLRenderer: Context Lost."),G=!0}function lt(){Nm("WebGLRenderer: Context Restored."),G=!1;const w=Bt.autoReset,z=Xe.enabled,se=Xe.autoUpdate,K=Xe.needsUpdate,ne=Xe.type;ot(),Bt.autoReset=w,Xe.enabled=z,Xe.autoUpdate=se,Xe.needsUpdate=K,Xe.type=ne}function St(w){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){const z=w.target;z.removeEventListener("dispose",Xt),Yt(z)}function Yt(w){wn(w),F.remove(w)}function wn(w){const z=F.get(w).programs;z!==void 0&&(z.forEach(function(se){We.releaseProgram(se)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,se,K,ne,Te){z===null&&(z=Ot);const Ge=ne.isMesh&&ne.matrixWorld.determinant()<0,we=ur(w,z,se,K,ne);qe.setMaterial(K,Ge);let Ze=se.index,Je=1;if(K.wireframe===!0){if(Ze=Re.getWireframeAttribute(se),Ze===void 0)return;Je=2}const Ie=se.drawRange,rt=se.attributes.position;let Qe=Ie.start*Je,wt=(Ie.start+Ie.count)*Je;Te!==null&&(Qe=Math.max(Qe,Te.start*Je),wt=Math.min(wt,(Te.start+Te.count)*Je)),Ze!==null?(Qe=Math.max(Qe,0),wt=Math.min(wt,Ze.count)):rt!=null&&(Qe=Math.max(Qe,0),wt=Math.min(wt,rt.count));const Ft=wt-Qe;if(Ft<0||Ft===1/0)return;He.setup(ne,K,we,se,Ze);let $t,zt=Ve;if(Ze!==null&&($t=Me.get(Ze),zt=Nt,zt.setIndex($t)),ne.isMesh)K.wireframe===!0?(qe.setLineWidth(K.wireframeLinewidth*Gt()),zt.setMode($.LINES)):zt.setMode($.TRIANGLES);else if(ne.isLine){let E=K.linewidth;E===void 0&&(E=1),qe.setLineWidth(E*Gt()),ne.isLineSegments?zt.setMode($.LINES):ne.isLineLoop?zt.setMode($.LINE_LOOP):zt.setMode($.LINE_STRIP)}else ne.isPoints?zt.setMode($.POINTS):ne.isSprite&&zt.setMode($.TRIANGLES);if(ne.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))zt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const E=ne._multiDrawStarts,L=ne._multiDrawCounts,O=ne._multiDrawCount,Z=Ze?Me.get(Ze).bytesPerElement:1,Ae=F.get(K).currentProgram.getUniforms();for(let De=0;De<O;De++)Ae.setValue($,"_gl_DrawID",De),zt.render(E[De]/Z,L[De])}else if(ne.isInstancedMesh)zt.renderInstances(Qe,Ft,ne.count);else if(se.isInstancedBufferGeometry){const E=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,L=Math.min(se.instanceCount,E);zt.renderInstances(Qe,Ft,L)}else zt.render(Qe,Ft)};function Ln(w,z,se){w.transparent===!0&&w.side===wr&&w.forceSinglePass===!1?(w.side=fi,w.needsUpdate=!0,Oi(w,z,se),w.side=ns,w.needsUpdate=!0,Oi(w,z,se),w.side=wr):Oi(w,z,se)}this.compile=function(w,z,se=null){se===null&&(se=w),I=Ne.get(se),I.init(z),T.push(I),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(z.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),w!==se&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(z.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const K=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Te=ne.material;if(Te)if(Array.isArray(Te))for(let Ge=0;Ge<Te.length;Ge++){const we=Te[Ge];Ln(we,se,ne),K.add(we)}else Ln(Te,se,ne),K.add(Te)}),I=T.pop(),K},this.compileAsync=function(w,z,se=null){const K=this.compile(w,z,se);return new Promise(ne=>{function Te(){if(K.forEach(function(Ge){F.get(Ge).currentProgram.isReady()&&K.delete(Ge)}),K.size===0){ne(w);return}setTimeout(Te,10)}Et.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let hi=null;function Mi(w){hi&&hi(w)}function Li(){$n.stop()}function kn(){$n.start()}const $n=new gg;$n.setAnimationLoop(Mi),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(w){hi=w,Oe.setAnimationLoop(w),w===null?$n.stop():$n.start()},Oe.addEventListener("sessionstart",Li),Oe.addEventListener("sessionend",kn),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(w,z);const se=Oe.enabled===!0&&Oe.isPresenting===!0,K=N!==null&&(W===null||se)&&N.begin(X,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(z),z=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(X,w,z,W),I=Ne.get(w,T.length),I.init(z),I.state.textureUnits=b.getTextureUnits(),T.push(I),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ht.setFromProjectionMatrix(Ut,rr,z.reversedDepth),yt=this.localClippingEnabled,Mt=nt.init(this.clippingPlanes,yt),H=Ee.get(w,k.length),H.init(),k.push(H),Oe.enabled===!0&&Oe.isPresenting===!0){const Ge=X.xr.getDepthSensingMesh();Ge!==null&&Ui(Ge,z,-1/0,X.sortObjects)}Ui(w,z,0,X.sortObjects),H.finish(),X.sortObjects===!0&&H.sort(ue,be),Rt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Rt&&Fe.addToRenderList(H,w),this.info.render.frame++,Mt===!0&&nt.beginShadows();const ne=I.state.shadowsArray;if(Xe.render(ne,w,z),Mt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&N.hasRenderPass())===!1){const Ge=H.opaque,we=H.transmissive;if(I.setupLights(),z.isArrayCamera){const Ze=z.cameras;if(we.length>0)for(let Je=0,Ie=Ze.length;Je<Ie;Je++){const rt=Ze[Je];gn(Ge,we,w,rt)}Rt&&Fe.render(w);for(let Je=0,Ie=Ze.length;Je<Ie;Je++){const rt=Ze[Je];qn(H,w,rt,rt.viewport)}}else we.length>0&&gn(Ge,we,w,z),Rt&&Fe.render(w),qn(H,w,z)}W!==null&&pe===0&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),K&&N.end(X),w.isScene===!0&&w.onAfterRender(X,w,z),He.resetDefaultState(),oe=-1,J=null,T.pop(),T.length>0?(I=T[T.length-1],b.setTextureUnits(I.state.textureUnits),Mt===!0&&nt.setGlobalState(X.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?H=k[k.length-1]:H=null,Q!==null&&Q.renderEnd()};function Ui(w,z,se,K){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)I.pushLightProbeGrid(w);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ht.intersectsSprite(w)){K&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);const Ge=ze.update(w),we=w.material;we.visible&&H.push(w,Ge,we,se,bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ht.intersectsObject(w))){const Ge=ze.update(w),we=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),bt.copy(Ge.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(we)){const Ze=Ge.groups;for(let Je=0,Ie=Ze.length;Je<Ie;Je++){const rt=Ze[Je],Qe=we[rt.materialIndex];Qe&&Qe.visible&&H.push(w,Ge,Qe,se,bt.z,rt)}}else we.visible&&H.push(w,Ge,we,se,bt.z,null)}}const Te=w.children;for(let Ge=0,we=Te.length;Ge<we;Ge++)Ui(Te[Ge],z,se,K)}function qn(w,z,se,K){const{opaque:ne,transmissive:Te,transparent:Ge}=w;I.setupLightsView(se),Mt===!0&&nt.setGlobalState(X.clippingPlanes,se),K&&qe.viewport(ee.copy(K)),ne.length>0&&Kn(ne,z,se),Te.length>0&&Kn(Te,z,se),Ge.length>0&&Kn(Ge,z,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function gn(w,z,se,K){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[K.id]===void 0){const Qe=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[K.id]=new ar(1,1,{generateMipmaps:!0,type:Qe?Cr:Di,minFilter:ws,samples:Math.max(4,Tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const Te=I.state.transmissionRenderTarget[K.id],Ge=K.viewport||ee;Te.setSize(Ge.z*X.transmissionResolutionScale,Ge.w*X.transmissionResolutionScale);const we=X.getRenderTarget(),Ze=X.getActiveCubeFace(),Je=X.getActiveMipmapLevel();X.setRenderTarget(Te),X.getClearColor(B),le=X.getClearAlpha(),le<1&&X.setClearColor(16777215,.5),X.clear(),Rt&&Fe.render(se);const Ie=X.toneMapping;X.toneMapping=sr;const rt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),I.setupLightsView(K),Mt===!0&&nt.setGlobalState(X.clippingPlanes,K),Kn(w,se,K),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let wt=0,Ft=z.length;wt<Ft;wt++){const $t=z[wt],{object:zt,geometry:E,material:L,group:O}=$t;if(L.side===wr&&zt.layers.test(K.layers)){const Z=L.side;L.side=fi,L.needsUpdate=!0,Fi(zt,se,K,E,L,O),L.side=Z,L.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}X.setRenderTarget(we,Ze,Je),X.setClearColor(B,le),rt!==void 0&&(K.viewport=rt),X.toneMapping=Ie}function Kn(w,z,se){const K=z.isScene===!0?z.overrideMaterial:null;for(let ne=0,Te=w.length;ne<Te;ne++){const Ge=w[ne],{object:we,geometry:Ze,group:Je}=Ge;let Ie=Ge.material;Ie.allowOverride===!0&&K!==null&&(Ie=K),we.layers.test(se.layers)&&Fi(we,z,se,Ze,Ie,Je)}}function Fi(w,z,se,K,ne,Te){w.onBeforeRender(X,z,se,K,ne,Te),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(X,z,se,K,w,Te),ne.transparent===!0&&ne.side===wr&&ne.forceSinglePass===!1?(ne.side=fi,ne.needsUpdate=!0,X.renderBufferDirect(se,z,K,ne,w,Te),ne.side=ns,ne.needsUpdate=!0,X.renderBufferDirect(se,z,K,ne,w,Te),ne.side=wr):X.renderBufferDirect(se,z,K,ne,w,Te),w.onAfterRender(X,z,se,K,ne,Te)}function Oi(w,z,se){z.isScene!==!0&&(z=Ot);const K=F.get(w),ne=I.state.lights,Te=I.state.shadowsArray,Ge=ne.state.version,we=We.getParameters(w,ne.state,Te,z,se,I.state.lightProbeGridArray),Ze=We.getProgramCacheKey(we);let Je=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;const Ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=ae.get(w.envMap||K.environment,Ie),K.envMapRotation=K.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",Xt),Je=new Map,K.programs=Je);let rt=Je.get(Ze);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===Ge)return ii(w,we),rt}else we.uniforms=We.getUniforms(w),Q!==null&&w.isNodeMaterial&&Q.build(w,se,we),w.onBeforeCompile(we,X),rt=We.acquireProgram(we,Ze),Je.set(Ze,rt),K.uniforms=we.uniforms;const Qe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=nt.uniform),ii(w,we),K.needsLights=Ue(w),K.lightsStateVersion=Ge,K.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),K.lightProbeGrid=I.state.lightProbeGridArray.length>0,K.currentProgram=rt,K.uniformsList=null,rt}function ni(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Zl.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function ii(w,z){const se=F.get(w);se.outputColorSpace=z.outputColorSpace,se.batching=z.batching,se.batchingColor=z.batchingColor,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.instancingMorph=z.instancingMorph,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function qi(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;P.setFromMatrixPosition(z.matrixWorld);for(let se=0,K=w.length;se<K;se++){const ne=w[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(P))return ne}return null}function ur(w,z,se,K,ne){z.isScene!==!0&&(z=Ot),b.resetTextureUnits();const Te=z.fog,Ge=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?z.environment:null,we=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Jt.workingColorSpace,Ze=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Je=ae.get(K.envMap||Ge,Ze),Ie=K.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qe=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let $t=sr;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($t=X.toneMapping);const zt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,E=zt!==void 0?zt.length:0,L=F.get(K),O=I.state.lights;if(Mt===!0&&(yt===!0||w!==J)){const xt=w===J&&K.id===oe;nt.setState(K,w,xt)}let Z=!1;K.version===L.__version?(L.needsLights&&L.lightsStateVersion!==O.state.version||L.outputColorSpace!==we||ne.isBatchedMesh&&L.batching===!1||!ne.isBatchedMesh&&L.batching===!0||ne.isBatchedMesh&&L.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&L.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&L.instancing===!1||!ne.isInstancedMesh&&L.instancing===!0||ne.isSkinnedMesh&&L.skinning===!1||!ne.isSkinnedMesh&&L.skinning===!0||ne.isInstancedMesh&&L.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&L.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&L.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&L.instancingMorph===!1&&ne.morphTexture!==null||L.envMap!==Je||K.fog===!0&&L.fog!==Te||L.numClippingPlanes!==void 0&&(L.numClippingPlanes!==nt.numPlanes||L.numIntersection!==nt.numIntersection)||L.vertexAlphas!==Ie||L.vertexTangents!==rt||L.morphTargets!==Qe||L.morphNormals!==wt||L.morphColors!==Ft||L.toneMapping!==$t||L.morphTargetsCount!==E||!!L.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Z=!0):(Z=!0,L.__version=K.version);let Ae=L.currentProgram;Z===!0&&(Ae=Oi(K,z,ne),Q&&K.isNodeMaterial&&Q.onUpdateProgram(K,Ae,L));let De=!1,ve=!1,st=!1;const pt=Ae.getUniforms(),et=L.uniforms;if(qe.useProgram(Ae.program)&&(De=!0,ve=!0,st=!0),K.id!==oe&&(oe=K.id,ve=!0),L.needsLights){const xt=qi(I.state.lightProbeGridArray,ne);L.lightProbeGrid!==xt&&(L.lightProbeGrid=xt,ve=!0)}if(De||J!==w){qe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue($,"projectionMatrix",w.projectionMatrix),pt.setValue($,"viewMatrix",w.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue($,Kt.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&pt.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pt.setValue($,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,ve=!0,st=!0)}if(L.needsLights&&(O.state.directionalShadowMap.length>0&&pt.setValue($,"directionalShadowMap",O.state.directionalShadowMap,b),O.state.spotShadowMap.length>0&&pt.setValue($,"spotShadowMap",O.state.spotShadowMap,b),O.state.pointShadowMap.length>0&&pt.setValue($,"pointShadowMap",O.state.pointShadowMap,b)),ne.isSkinnedMesh){pt.setOptional($,ne,"bindMatrix"),pt.setOptional($,ne,"bindMatrixInverse");const xt=ne.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue($,"boneTexture",xt.boneTexture,b))}ne.isBatchedMesh&&(pt.setOptional($,ne,"batchingTexture"),pt.setValue($,"batchingTexture",ne._matricesTexture,b),pt.setOptional($,ne,"batchingIdTexture"),pt.setValue($,"batchingIdTexture",ne._indirectTexture,b),pt.setOptional($,ne,"batchingColorTexture"),ne._colorsTexture!==null&&pt.setValue($,"batchingColorTexture",ne._colorsTexture,b));const Vt=se.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Ke.update(ne,se,Ae),(ve||L.receiveShadow!==ne.receiveShadow)&&(L.receiveShadow=ne.receiveShadow,pt.setValue($,"receiveShadow",ne.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&z.environment!==null&&(et.envMapIntensity.value=z.environmentIntensity),et.dfgLUT!==void 0&&(et.dfgLUT.value=XE()),ve){if(pt.setValue($,"toneMappingExposure",X.toneMappingExposure),L.needsLights&&j(et,st),Te&&K.fog===!0&&xe.refreshFogUniforms(et,Te),xe.refreshMaterialUniforms(et,K,Ce,it,I.state.transmissionRenderTarget[w.id]),L.needsLights&&L.lightProbeGrid){const xt=L.lightProbeGrid;et.probesSH.value=xt.texture,et.probesMin.value.copy(xt.boundingBox.min),et.probesMax.value.copy(xt.boundingBox.max),et.probesResolution.value.copy(xt.resolution)}Zl.upload($,ni(L),et,b)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zl.upload($,ni(L),et,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pt.setValue($,"center",ne.center),pt.setValue($,"modelViewMatrix",ne.modelViewMatrix),pt.setValue($,"normalMatrix",ne.normalMatrix),pt.setValue($,"modelMatrix",ne.matrixWorld),K.uniformsGroups!==void 0){const xt=K.uniformsGroups;for(let Qt=0,an=xt.length;Qt<an;Qt++){const yn=xt[Qt];me.update(yn,Ae),me.bind(yn,Ae)}}return Ae}function j(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Ue(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,z,se){const K=F.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),F.get(w.texture).__webglTexture=z,F.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:se,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const se=F.get(w);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0};const Se=$.createFramebuffer();this.setRenderTarget=function(w,z=0,se=0){W=w,re=z,pe=se;let K=null,ne=!1,Te=!1;if(w){const we=F.get(w);if(we.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer($.FRAMEBUFFER,we.__webglFramebuffer),ee.copy(w.viewport),he.copy(w.scissor),ce=w.scissorTest,qe.viewport(ee),qe.scissor(he),qe.setScissorTest(ce),oe=-1;return}else if(we.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(we.__hasExternalTextures)b.rebindTextures(w,F.get(w.texture).__webglTexture,F.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(we.__boundDepthTexture!==Ie){if(Ie!==null&&F.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=F.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?K=Je[z][se]:K=Je[z],ne=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?K=F.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[se]:K=Je,ee.copy(w.viewport),he.copy(w.scissor),ce=w.scissorTest}else ee.copy(ye).multiplyScalar(Ce).floor(),he.copy(Le).multiplyScalar(Ce).floor(),ce=at;if(se!==0&&(K=Se),qe.bindFramebuffer($.FRAMEBUFFER,K)&&qe.drawBuffers(w,K),qe.viewport(ee),qe.scissor(he),qe.setScissorTest(ce),ne){const we=F.get(w.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,se)}else if(Te){const we=z;for(let Ze=0;Ze<w.textures.length;Ze++){const Je=F.get(w.textures[Ze]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,se,we)}}else if(w!==null&&se!==0){const we=F.get(w.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,we.__webglTexture,se)}oe=-1},this.readRenderTargetPixels=function(w,z,se,K,ne,Te,Ge,we=0){if(!(w&&w.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=F.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){qe.bindFramebuffer($.FRAMEBUFFER,Ze);try{const Je=w.textures[we],Ie=Je.format,rt=Je.type;if(w.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+we),!Tt.textureFormatReadable(Ie)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(rt)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-K&&se>=0&&se<=w.height-ne&&$.readPixels(z,se,K,ne,Y.convert(Ie),Y.convert(rt),Te)}finally{const Je=W!==null?F.get(W).__webglFramebuffer:null;qe.bindFramebuffer($.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,z,se,K,ne,Te,Ge,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=F.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze)if(z>=0&&z<=w.width-K&&se>=0&&se<=w.height-ne){qe.bindFramebuffer($.FRAMEBUFFER,Ze);const Je=w.textures[we],Ie=Je.format,rt=Je.type;if(w.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+we),!Tt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Qe),$.bufferData($.PIXEL_PACK_BUFFER,Te.byteLength,$.STREAM_READ),$.readPixels(z,se,K,ne,Y.convert(Ie),Y.convert(rt),0);const wt=W!==null?F.get(W).__webglFramebuffer:null;qe.bindFramebuffer($.FRAMEBUFFER,wt);const Ft=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await e_($,Ft,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Qe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Te),$.deleteBuffer(Qe),$.deleteSync(Ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,se=0){const K=Math.pow(2,-se),ne=Math.floor(w.image.width*K),Te=Math.floor(w.image.height*K),Ge=z!==null?z.x:0,we=z!==null?z.y:0;b.setTexture2D(w,0),$.copyTexSubImage2D($.TEXTURE_2D,se,0,0,Ge,we,ne,Te),qe.unbindTexture()};const Ye=$.createFramebuffer(),ct=$.createFramebuffer();this.copyTextureToTexture=function(w,z,se=null,K=null,ne=0,Te=0){let Ge,we,Ze,Je,Ie,rt,Qe,wt,Ft;const $t=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(se!==null)Ge=se.max.x-se.min.x,we=se.max.y-se.min.y,Ze=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,Ie=se.min.y,rt=se.isBox3?se.min.z:0;else{const et=Math.pow(2,-ne);Ge=Math.floor($t.width*et),we=Math.floor($t.height*et),w.isDataArrayTexture?Ze=$t.depth:w.isData3DTexture?Ze=Math.floor($t.depth*et):Ze=1,Je=0,Ie=0,rt=0}K!==null?(Qe=K.x,wt=K.y,Ft=K.z):(Qe=0,wt=0,Ft=0);const zt=Y.convert(z.format),E=Y.convert(z.type);let L;z.isData3DTexture?(b.setTexture3D(z,0),L=$.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(b.setTexture2DArray(z,0),L=$.TEXTURE_2D_ARRAY):(b.setTexture2D(z,0),L=$.TEXTURE_2D),qe.activeTexture($.TEXTURE0),qe.pixelStorei($.UNPACK_FLIP_Y_WEBGL,z.flipY),qe.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),qe.pixelStorei($.UNPACK_ALIGNMENT,z.unpackAlignment);const O=qe.getParameter($.UNPACK_ROW_LENGTH),Z=qe.getParameter($.UNPACK_IMAGE_HEIGHT),Ae=qe.getParameter($.UNPACK_SKIP_PIXELS),De=qe.getParameter($.UNPACK_SKIP_ROWS),ve=qe.getParameter($.UNPACK_SKIP_IMAGES);qe.pixelStorei($.UNPACK_ROW_LENGTH,$t.width),qe.pixelStorei($.UNPACK_IMAGE_HEIGHT,$t.height),qe.pixelStorei($.UNPACK_SKIP_PIXELS,Je),qe.pixelStorei($.UNPACK_SKIP_ROWS,Ie),qe.pixelStorei($.UNPACK_SKIP_IMAGES,rt);const st=w.isDataArrayTexture||w.isData3DTexture,pt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const et=F.get(w),Vt=F.get(z),xt=F.get(et.__renderTarget),Qt=F.get(Vt.__renderTarget);qe.bindFramebuffer($.READ_FRAMEBUFFER,xt.__webglFramebuffer),qe.bindFramebuffer($.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let an=0;an<Ze;an++)st&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,F.get(w).__webglTexture,ne,rt+an),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,F.get(z).__webglTexture,Te,Ft+an)),$.blitFramebuffer(Je,Ie,Ge,we,Qe,wt,Ge,we,$.DEPTH_BUFFER_BIT,$.NEAREST);qe.bindFramebuffer($.READ_FRAMEBUFFER,null),qe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||F.has(w)){const et=F.get(w),Vt=F.get(z);qe.bindFramebuffer($.READ_FRAMEBUFFER,Ye),qe.bindFramebuffer($.DRAW_FRAMEBUFFER,ct);for(let xt=0;xt<Ze;xt++)st?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,et.__webglTexture,ne,rt+xt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,et.__webglTexture,ne),pt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Vt.__webglTexture,Te,Ft+xt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Vt.__webglTexture,Te),ne!==0?$.blitFramebuffer(Je,Ie,Ge,we,Qe,wt,Ge,we,$.COLOR_BUFFER_BIT,$.NEAREST):pt?$.copyTexSubImage3D(L,Te,Qe,wt,Ft+xt,Je,Ie,Ge,we):$.copyTexSubImage2D(L,Te,Qe,wt,Je,Ie,Ge,we);qe.bindFramebuffer($.READ_FRAMEBUFFER,null),qe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else pt?w.isDataTexture||w.isData3DTexture?$.texSubImage3D(L,Te,Qe,wt,Ft,Ge,we,Ze,zt,E,$t.data):z.isCompressedArrayTexture?$.compressedTexSubImage3D(L,Te,Qe,wt,Ft,Ge,we,Ze,zt,$t.data):$.texSubImage3D(L,Te,Qe,wt,Ft,Ge,we,Ze,zt,E,$t):w.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Te,Qe,wt,Ge,we,zt,E,$t.data):w.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Te,Qe,wt,$t.width,$t.height,zt,$t.data):$.texSubImage2D($.TEXTURE_2D,Te,Qe,wt,Ge,we,zt,E,$t);qe.pixelStorei($.UNPACK_ROW_LENGTH,O),qe.pixelStorei($.UNPACK_IMAGE_HEIGHT,Z),qe.pixelStorei($.UNPACK_SKIP_PIXELS,Ae),qe.pixelStorei($.UNPACK_SKIP_ROWS,De),qe.pixelStorei($.UNPACK_SKIP_IMAGES,ve),Te===0&&z.generateMipmaps&&$.generateMipmap(L),qe.unbindTexture()},this.initRenderTarget=function(w){F.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),qe.unbindTexture()},this.resetState=function(){re=0,pe=0,W=null,qe.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Pe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Pe.createElement("svg",{ref:h,...qE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:wg("lucide",o),...f},[...u.map(([p,v])=>Pe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(s,e)=>{const t=Pe.forwardRef(({className:r,...o},l)=>Pe.createElement(KE,{ref:l,iconNode:e,className:wg(`lucide-${$E(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Wt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
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
 */const bg=Wt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Wt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Wt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
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
 */const Cg=Wt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Wt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Wt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Wt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Wt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
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
 */const w0=Wt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=Wt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
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
 */const T0=Wt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
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
 */const A0=Wt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
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
 */const C0=Wt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Wt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Wt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=Wt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Wt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Wt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Wt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Wt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Wt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),N0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},dw=({direction:s,className:e})=>{const r={none:A0,up:Cg,down:bg,left:Tg,right:Ag,"up-left":QE,"up-right":ew,"down-left":ZE,"down-right":JE}[s]||A0;return m.jsx(r,{className:e})},Xn=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Jr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ni=s=>JSON.parse(JSON.stringify(s)),P0=(s,e)=>(s-e+540)%360-180,oc=s=>s==null||Number.isNaN(s)?null:(s%360+360)%360,I0=(s,e)=>s==null||e==null?null:oc(s-e),fw=s=>s&&typeof s.webkitCompassHeading=="number"?oc(s.webkitCompassHeading):s&&typeof s.alpha=="number"?oc(360-s.alpha):null,hw=(s,e)=>{if(!s||!e)return null;const t=s.physX??s.x,r=s.physY??s.y,o=e.physX??e.x,l=e.physY??e.y;return[t,r,o,l].some(u=>typeof u!="number")?null:oc(Math.atan2(o-t,r-l)*180/Math.PI)},D0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new Hf(s),l=new jf(o,Math.max(8,s.length*12),e,12,!1),u=new ts({color:t,transparent:r<1,opacity:r});return new ti(l,u)},L0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},U0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),pw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),mw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return!o||!t?e:o.fId!==t.fId?e+5:e+Math.hypot((t.physX||0)-(o.physX||0),(t.physY||0)-(o.physY||0))},0),F0=(s,e,t)=>s+(e-s)*t,gw=(s,e,t=.36)=>s?{...e,x:F0(s.x,e.x,t),y:F0(s.y,e.y,t)}:e,O0=(s=[],e=[],t=.36)=>e.map((r,o)=>gw(s[o],r,t)),xw=s=>{if(!s||s.length<2)return null;const e=new Hf(s),t=Math.max(pw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new Ts;for(let u=0;u<r;u++){const f=new Ts,h=new ti(new sc(.14,.34,24),new ts({color:16777215,transparent:!0,opacity:.22})),p=new ti(new sc(.09,.28,24),new ts({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},vw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ie(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},pa=(s="新導引專案")=>({projectName:s,lerpFactor:15}),fo=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],_w=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:pa(s),buildings:fo()}),jl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...pa(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function yw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var wt,Ft,$t,zt;const[r,o]=Pe.useState(e),[l,u]=Pe.useState(!1),[f,h]=Pe.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Pe.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Pe.useState({isOpen:!1,message:""}),[M,C]=Pe.useState(!1),[D,y]=Pe.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Pe.useRef(!1),[U,R]=Pe.useState(()=>{if(t)return[jl({})];try{const O=localStorage.getItem("arManager_projects");if(O){const Z=JSON.parse(O);if(Array.isArray(Z)&&Z.length>0)return Z}}catch(O){console.error("Project load error:",O)}let E=pa("預設導引專案"),L=fo();try{const O=localStorage.getItem("arManager_config");O&&(E={...E,...JSON.parse(O)});const Z=localStorage.getItem("arManager_buildings");Z&&(L=JSON.parse(Z))}catch(O){console.error("Legacy AR data migration error:",O)}return[{id:`project_${Date.now()}`,name:E.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:E,buildings:L}]}),[P,H]=Pe.useState((wt=U[0])==null?void 0:wt.id),I=U.find(E=>E.id===P)||U[0],[k,T]=Pe.useState(()=>Ni((I==null?void 0:I.systemConfig)||pa())),[N,X]=Pe.useState(()=>Ni((I==null?void 0:I.buildings)||fo())),[G,Q]=Pe.useState((Ft=N[0])==null?void 0:Ft.id),[re,pe]=Pe.useState((zt=($t=N[0])==null?void 0:$t.floors[0])==null?void 0:zt.id),[W,oe]=Pe.useState(""),[J,ee]=Pe.useState(null),[he,ce]=Pe.useState(null),[B,le]=Pe.useState(null),[tt,it]=Pe.useState(!1),[Ce,ue]=Pe.useState(!1),[be,ye]=Pe.useState(!1),[Le,at]=Pe.useState(null),[ht,Mt]=Pe.useState(null),[yt,Ut]=Pe.useState(!1),[Kt,bt]=Pe.useState({x:0,y:0}),[Ot,Rt]=Pe.useState({x:0,y:0}),[Gt,$]=Pe.useState(!1),[Pt,Et]=Pe.useState(!1),[Tt,qe]=Pe.useState([]),[Bt,F]=Pe.useState(!1),[b,ae]=Pe.useState([]),[Me,Re]=Pe.useState([]),ze=Pe.useRef(null),We=Pe.useRef(null),xe=Pe.useRef(null),Ee=Pe.useRef(null),[Ne,nt]=Pe.useState({x:0,y:0,scale:1}),Xe=E=>{var O,Z,Ae;if(!Array.isArray(E==null?void 0:E.buildings)||E.buildings.length===0)throw new Error("雲端目前沒有可載入的 AR 平面圖資料。");const L=jl(E);return R([L]),H(L.id),T(Ni(L.systemConfig)),X(Ni(L.buildings)),Q((O=L.buildings[0])==null?void 0:O.id),pe((Ae=(Z=L.buildings[0])==null?void 0:Z.floors[0])==null?void 0:Ae.id),oe(""),ee(null),ce(null),at(null),nt({x:0,y:0,scale:1}),localStorage.setItem("arManager_lastCloudSyncAt",L.updatedAt||new Date().toISOString()),L};Pe.useEffect(()=>{const E=L=>{var Z;const O=(Z=L==null?void 0:L.detail)==null?void 0:Z.tab;["map","list","settings","export"].includes(O)&&ct(O)};return window.addEventListener("ar-manager:set-tab",E),()=>window.removeEventListener("ar-manager:set-tab",E)},[]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(U))}catch(E){E.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[U,t]),Pe.useEffect(()=>{if(!t)return;let E=!1;return(async()=>{const O=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(O.ok)return O.json();const Z=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!Z.ok)throw new Error(`Unable to load AR data: ${Z.status}`);return Z.json()})().then(O=>{var Ae,De,ve;if(E)return;const Z=jl(O);R([Z]),H(Z.id),T(Ni(Z.systemConfig)),X(Ni(Z.buildings)),Q((Ae=Z.buildings[0])==null?void 0:Ae.id),pe((ve=(De=Z.buildings[0])==null?void 0:De.floors[0])==null?void 0:ve.id)}).catch(O=>{console.warn("Published AR data unavailable",O),E||(R([jl({})]),T(pa("AR導覽")),X([]))}),()=>{E=!0}},[t]),Pe.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let E=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(L=>{if(!L.ok)throw new Error(`Unable to load AR data: ${L.status}`);return L.json()}).then(L=>{E||!Array.isArray(L==null?void 0:L.buildings)||L.buildings.length===0||Xe(L)}).catch(L=>console.warn("Published AR admin seed unavailable",L)),()=>{E=!0}},[t]),Pe.useEffect(()=>{var L,O,Z;if(t||!I)return;_.current=!0;const E=Ni(I.buildings||fo());T(Ni(I.systemConfig||pa(I.name))),X(E),Q((L=E[0])==null?void 0:L.id),pe((Z=(O=E[0])==null?void 0:O.floors[0])==null?void 0:Z.id),ee(null),ce(null),oe(""),nt({x:0,y:0,scale:1})},[P,t]),Pe.useEffect(()=>{if(!t&&P){if(_.current){_.current=!1;return}R(E=>E.map(L=>L.id===P?{...L,name:k.projectName||L.name,systemConfig:Ni(k),buildings:Ni(N),updatedAt:new Date().toISOString()}:L))}},[P,N,k,t]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(N))}catch(E){E.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[N,t]),Pe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(k))}catch(E){console.error("Config save error:",E)}},[k,t]),Pe.useEffect(()=>{var L;const E=N.find(O=>O.id===G);E?E.floors.find(O=>O.id===re)||E.floors.length>0&&pe(E.floors[0].id):N.length>0&&(Q(N[0].id),pe((L=N[0].floors[0])==null?void 0:L.id))},[N,G,re]),Pe.useEffect(()=>{W===re&&oe("")},[re,W]),Pe.useEffect(()=>{it(!1)},[J,he]),Pe.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||C(!0)},[]);const Fe=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(L=>L.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),C(!1)},Ke=N.find(E=>E.id===G)||N[0],Ve=Ke==null?void 0:Ke.floors.find(E=>E.id===re),Nt=(Ve==null?void 0:Ve.markers)||[],Y=(Ve==null?void 0:Ve.waypoints)||[],He=(Ve==null?void 0:Ve.edges)||[],me=Jr(Ve),ot=(E,L,O=!0)=>{X(Z=>{let Ae=null,De=null,ve=null;if(Z.forEach(xt=>xt.floors.forEach(Qt=>{const an=O?Qt.markers:Qt.waypoints,yn=an==null?void 0:an.find(on=>on.id===E);yn&&(Ae=yn,De=xt.id,ve=Qt)})),!Ae)return Z;const st=L.shaftId!==void 0?L.shaftId:Ae.shaftId,et=(L.isVerticalShaft!==void 0?L.isVerticalShaft:Ae.isVerticalShaft)&&st,Vt=Jr(ve);return Z.map(xt=>xt.id!==De&&!et?xt:{...xt,floors:xt.floors.map(Qt=>{let an=O?[...Qt.markers||[]]:[...Qt.waypoints||[]];const yn=on=>{const Bn={...on,...L};if((L.x!==void 0||L.y!==void 0)&&Qt.id!==ve.id){const dt=Jr(Qt);if(L.x!==void 0){const Ht=Vt.blX+L.x*(Vt.trX-Vt.blX);Bn.x=dt.trX!==dt.blX?(Ht-dt.blX)/(dt.trX-dt.blX):.5}if(L.y!==void 0){const Ht=Vt.trY-L.y*(Vt.trY-Vt.blY);Bn.y=dt.trY!==dt.blY?(dt.trY-Ht)/(dt.trY-dt.blY):.5}}return Bn};return et?an=an.map(on=>on.shaftId===st||on.id===E?yn(on):on):an=an.map(on=>on.id===E?yn(on):on),O?{...Qt,markers:an}:{...Qt,waypoints:an}})})})},Oe=(E,L,O)=>ot(E,{[L]:O},!0),_e=(E,L,O)=>ot(E,{[L]:O},!1),lt=(E,L,O=!0)=>{if(L){const Z=O?"shaft_m_":"shaft_wp_",De={isVerticalShaft:!0,shaftId:E.shaftId||`${Z}${Date.now()}`,linkedFloorIds:[re]};O||(De.sourceFloorId=re),ot(E.id,De,O)}else{const Z=E.shaftId;X(Ae=>Ae.map(De=>De.id!==G?De:{...De,floors:De.floors.map(ve=>{const st=pt=>(pt||[]).filter(et=>!(ve.id!==re&&et.shaftId===Z)).map(et=>et.id===E.id?{...et,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:et);return O?{...ve,markers:st(ve.markers)}:{...ve,waypoints:st(ve.waypoints)}})}))}},St=(E,L,O,Z=!0)=>{const Ae=E.shaftId,De=E.linkedFloorIds||[re],ve=O?[...De,L]:De.filter(st=>st!==L);X(st=>st.map(pt=>pt.id!==G?pt:{...pt,floors:pt.floors.map(et=>{let Vt=Z?[...et.markers||[]]:[...et.waypoints||[]];if(O&&et.id===L){const xt=Jr(et),Qt=Jr(Ve),an=Qt.blX+E.x*(Qt.trX-Qt.blX),yn=Qt.trY-E.y*(Qt.trY-Qt.blY),on=xt.trX!==xt.blX?(an-xt.blX)/(xt.trX-xt.blX):.5,Bn=xt.trY!==xt.blY?(xt.trY-yn)/(xt.trY-xt.blY):.5,dt=Z?"marker_":"wp_";Vt.push({...E,id:`${dt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${et.id}`,x:on,y:Bn,linkedFloorIds:ve})}else!O&&et.id===L?Vt=Vt.filter(xt=>xt.shaftId!==Ae):Vt=Vt.map(xt=>xt.shaftId===Ae?{...xt,linkedFloorIds:ve}:xt);return Z?{...et,markers:Vt}:{...et,waypoints:Vt}})}))},Xt=E=>{let L=null,O=new Set([E]);N.forEach(Z=>Z.floors.forEach(Ae=>{var De;Ae.markers.forEach(ve=>{ve.id===E&&ve.isVerticalShaft&&(L=ve.shaftId)}),(De=Ae.waypoints)==null||De.forEach(ve=>{ve.id===E&&ve.isVerticalShaft&&(L=ve.shaftId)})})),L&&N.forEach(Z=>Z.floors.forEach(Ae=>{var De;Ae.markers.forEach(ve=>{ve.shaftId===L&&O.add(ve.id)}),(De=Ae.waypoints)==null||De.forEach(ve=>{ve.shaftId===L&&O.add(ve.id)})})),X(Z=>Z.map(Ae=>({...Ae,floors:Ae.floors.map(De=>({...De,markers:(De.markers||[]).filter(ve=>!O.has(ve.id)),waypoints:(De.waypoints||[]).filter(ve=>!O.has(ve.id)),edges:(De.edges||[]).filter(ve=>!O.has(ve.start)&&!O.has(ve.end))}))}))),O.has(J)&&ee(null),O.has(he)&&ce(null),O.has(Le)&&(at(null),Mt(null)),it(!1)},Yt=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:E=>{if(!E)return;const L=`b_${Date.now()}`,O=`f_${Date.now()}`;X(Z=>[...Z,{id:L,name:E,floors:[{id:O,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),Q(L),pe(O)}})},wn=()=>{Ke&&h({isOpen:!0,title:`新增 ${Ke.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:E=>{if(!E)return;const L=`f_${Date.now()}`,O=Ve?{...Jr(Ve)}:{blX:0,blY:0,trX:100,trY:100};X(Z=>Z.map(Ae=>Ae.id===G?{...Ae,floors:[...Ae.floors,{id:L,name:E,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:O}]}:Ae)),pe(L)}})},Ln=E=>{const L=E.target.files[0],O=E.target;if(L&&G&&re){const Z=G,Ae=re,De=new FileReader;De.onload=ve=>{N0(ve.target.result,1600,st=>{X(pt=>pt.map(et=>et.id===Z?{...et,floors:et.floors.map(Vt=>Vt.id===Ae?{...Vt,imageUrl:st}:Vt)}:et)),$(!1)})},De.readAsDataURL(L)}O.value=""},hi=(E,L)=>{const O=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,Z={id:O,x:E,y:L,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:re};X(Ae=>Ae.map(De=>De.id===G?{...De,floors:De.floors.map(ve=>{if(ve.id!==re)return ve;const st=Le?[...ve.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Le,end:O}]:ve.edges||[];return{...ve,waypoints:[...ve.waypoints||[],Z],edges:st}})}:De)),at(O)},Mi=E=>{if(Le===E){at(null),Mt(null);return}Le&&Le!==E&&(He.some(O=>O.start===Le&&O.end===E||O.end===Le&&O.start===E)||X(O=>O.map(Z=>Z.id===G?{...Z,floors:Z.floors.map(Ae=>Ae.id===re?{...Ae,edges:[...Ae.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Le,end:E}]}:Ae)}:Z))),at(E)},Li=(E,L)=>{for(let Z of Nt)if(Math.hypot(Z.x-E,Z.y-L)<.03)return Z.id;for(let Z of Y)if(Math.hypot(Z.x-E,Z.y-L)<.03)return Z.id;return null};Pe.useEffect(()=>{const E=L=>{L.key==="Escape"&&Ce&&(at(null),Mt(null))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[Ce]);const kn=(E,L)=>{const O={},Z=[],Ae={};N.forEach(dt=>{dt.floors.forEach(Ht=>{var yo,Ea;const bn=Ht.bounds||{blX:0,blY:0,trX:100,trY:100},ri=(rn,mc)=>({physX:bn.blX+rn*(bn.trX-bn.blX),physY:bn.trY-mc*(bn.trY-bn.blY)});Ht.markers.forEach(rn=>{O[rn.id]={...rn,...ri(rn.x,rn.y),fId:Ht.id,fName:Ht.name},rn.isVerticalShaft&&rn.shaftId&&(Ae[rn.shaftId]||(Ae[rn.shaftId]=[]),Ae[rn.shaftId].push(rn.id))}),(yo=Ht.waypoints)==null||yo.forEach(rn=>{O[rn.id]={...rn,...ri(rn.x,rn.y),fId:Ht.id,fName:Ht.name},rn.isVerticalShaft&&rn.shaftId&&(Ae[rn.shaftId]||(Ae[rn.shaftId]=[]),Ae[rn.shaftId].push(rn.id))}),(Ea=Ht.edges)==null||Ea.forEach(rn=>Z.push(rn))})});const De={};Object.keys(O).forEach(dt=>{De[dt]={}}),Z.forEach(dt=>{if(O[dt.start]&&O[dt.end]){const Ht=Math.hypot(O[dt.start].physX-O[dt.end].physX,O[dt.start].physY-O[dt.end].physY);De[dt.start][dt.end]=Ht,De[dt.end][dt.start]=Ht}}),Object.values(Ae).forEach(dt=>{for(let Ht=0;Ht<dt.length;Ht++)for(let bn=Ht+1;bn<dt.length;bn++)De[dt[Ht]][dt[bn]]=5,De[dt[bn]][dt[Ht]]=5});const ve=dt=>Object.keys(De[dt]).length>0;let st=null,pt=1/0,et=null,Vt=1/0;if(Object.values(O).forEach(dt=>{if(ve(dt.id)){if(dt.fId===E.fId){const Ht=Math.hypot(dt.x-E.x,dt.y-E.y);Ht<pt&&(pt=Ht,st=dt.id)}if(dt.fId===L.fId){const Ht=Math.hypot(dt.x-L.x,dt.y-L.y);Ht<Vt&&(Vt=Ht,et=dt.id)}}}),!st||!et){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),ae([]),Re([]);return}const xt={},Qt={},an=new Set(Object.keys(O));for(Object.keys(O).forEach(dt=>{xt[dt]=1/0,Qt[dt]=null}),xt[st]=0;an.size>0;){let dt=null;if(an.forEach(Ht=>{(dt===null||xt[Ht]<xt[dt])&&(dt=Ht)}),xt[dt]===1/0||dt===et)break;an.delete(dt),Object.entries(De[dt]).forEach(([Ht,bn])=>{if(an.has(Ht)){const ri=xt[dt]+bn;ri<xt[Ht]&&(xt[Ht]=ri,Qt[Ht]=dt)}})}const yn=[];let on=et;for(;on;)yn.unshift(on),on=Qt[on];if(yn.length===0||yn[0]!==st){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),ae([]),Re([]);return}const Bn=[{x:E.x,y:E.y,fId:E.fId,fName:E.fName,isVirtual:!0},...yn.map(dt=>O[dt]),{x:L.x,y:L.y,fId:L.fId,fName:L.fName,isVirtual:!0}];Re(Bn)};Pe.useEffect(()=>{const E=ze.current;if(!E||r!=="map")return;const L=O=>{O.preventDefault();const Z=E.getBoundingClientRect(),Ae=O.clientX-Z.left,De=O.clientY-Z.top,ve=O.deltaY<0?1.1:.9;nt(st=>{const pt=Math.max(.1,Math.min(10,st.scale*ve)),et=pt/st.scale;return{x:Ae-(Ae-st.x)*et,y:De-(De-st.y)*et,scale:pt}})};return E.addEventListener("wheel",L,{passive:!1}),()=>E.removeEventListener("wheel",L)},[r]);const $n=E=>{E.button!==void 0&&E.button!==0||E.target.closest(".marker-pin")||E.target.closest(".waypoint-pin")||(Ut(!0),bt({x:E.clientX-Ne.x,y:E.clientY-Ne.y}),Rt({x:E.clientX,y:E.clientY}),E.target.setPointerCapture(E.pointerId))},Ui=E=>{if(yt)nt(L=>({...L,x:E.clientX-Kt.x,y:E.clientY-Kt.y}));else if(Ce&&Le&&We.current){const L=We.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(E.clientX-L.left)/L.width)),Z=Math.max(0,Math.min(1,(E.clientY-L.top)/L.height));Mt({x:O,y:Z})}else if(B&&We.current){const L=We.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(E.clientX-L.left)/L.width)),Z=Math.max(0,Math.min(1,(E.clientY-L.top)/L.height));B.startsWith("marker_")?(Oe(B,"x",O),Oe(B,"y",Z)):B.startsWith("wp_")&&(_e(B,"x",O),_e(B,"y",Z))}},qn=E=>{if(yt&&(Ut(!1),E.target.releasePointerCapture(E.pointerId),Math.hypot(E.clientX-Ot.x,E.clientY-Ot.y)<5)){if(!(Ve!=null&&Ve.imageUrl)||!We.current)return;const O=We.current.getBoundingClientRect();let Z=Math.max(0,Math.min(1,(E.clientX-O.left)/O.width)),Ae=Math.max(0,Math.min(1,(E.clientY-O.top)/O.height));if(Bt){const De={x:Z,y:Ae,fId:re,fName:Ve==null?void 0:Ve.name},ve=b.length>=2?[De]:[...b,De];ae(ve),ve.length===1&&Re([]),ve.length===2&&kn(ve[0],ve[1])}else if(Ce){const De=Li(Z,Ae);De?Mi(De):hi(Z,Ae)}else if(Gt){const De=N.reduce((st,pt)=>st+pt.floors.reduce((et,Vt)=>et+Vt.markers.length,0),0),ve={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${De+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:Z,y:Ae,imageUrl:null,enabled:!0,recognitionStatus:"untested"};X(st=>st.map(pt=>pt.id===G?{...pt,floors:pt.floors.map(et=>et.id===re?{...et,markers:[...et.markers,ve]}:et)}:pt)),ee(ve.id),ce(null),$(!1)}else Pt?qe(De=>De.length>=2?[{x:Z,y:Ae}]:[...De,{x:Z,y:Ae}]):(ee(null),ce(null))}},gn=E=>{const L=E.target.files[0],O=E.target;if(L&&J){const Z=J,Ae=new FileReader;Ae.onload=De=>{N0(De.target.result,800,ve=>{Oe(Z,"imageUrl",ve),Oe(Z,"recognitionStatus","untested")})},Ae.readAsDataURL(L)}O.value=""},Kn=(E,L,O)=>{Q(E),pe(L),ee(O),ce(null),o("map")},Fi=E=>(E||[]).reduce((L,O)=>((O.floors||[]).forEach(Z=>{Z.imageUrl&&(L.floorPlans+=1),L.markers+=(Z.markers||[]).length,L.waypoints+=(Z.waypoints||[]).length,L.edges+=(Z.edges||[]).length}),L),{floorPlans:0,markers:0,waypoints:0,edges:0}),Oi=E=>{const L=Fi(E);return L.floorPlans>0||L.markers>0||L.waypoints>0||L.edges>0},ni=async()=>{if(!Oi(N)){x({isOpen:!0,message:"目前專案還是空的，尚未有平面圖、AR 點位或路網資料。為避免覆蓋雲端既有專案，請先載入雲端資料或新增內容後再同步。"});return}const E={version:"7.0",project:{id:P,name:k.projectName||(I==null?void 0:I.name)||"AR導覽",description:(I==null?void 0:I.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ni(k),buildings:Ni(N)};R(L=>L.map(O=>O.id===P?{...O,name:E.project.name,systemConfig:E.systemConfig,buildings:E.buildings,updatedAt:E.project.updatedAt}:O));try{const L=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}),O=await L.json().catch(()=>({}));if(!L.ok)throw new Error(O.error||`Save failed: ${L.status}`);localStorage.setItem("arManager_lastCloudSyncAt",E.project.updatedAt),x({isOpen:!0,message:`「${E.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(L){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${L.message}`})}},ii=async()=>{try{const E=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(!E.ok)throw new Error(`Load failed: ${E.status}`);const L=await E.json(),O=Xe(L);x({isOpen:!0,message:`已從雲端載入「${O.name}」。桌機與手機現在會使用同一份已上架的平面圖、AR 點位與路網資料。`})}catch(E){x({isOpen:!0,message:`無法從雲端載入 AR 資料：${E.message}`})}},qi=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${U.length+1}`,onSubmit:E=>{if(!E)return;const L=_w(E);R(O=>[...O,L]),H(L.id),o("map")}})},ur=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(I==null?void 0:I.name)||k.projectName||"",onSubmit:E=>{E&&(T(L=>({...L,projectName:E})),R(L=>L.map(O=>O.id===P?{...O,name:E,systemConfig:{...O.systemConfig,projectName:E},updatedAt:new Date().toISOString()}:O)))}})},j=()=>{if(U.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(I==null?void 0:I.name)||k.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(E=>{var O;const L=E.filter(Z=>Z.id!==P);return H((O=L[0])==null?void 0:O.id),L})}})},Ue=()=>{X(fo()),ee(null),ce(null),nt({x:0,y:0,scale:1}),$(!1),ue(!1),ye(!1),at(null),Mt(null),F(!1),ae([]),Re([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Se=()=>{const E=(k.projectName||(I==null?void 0:I.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),L="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:P,name:k.projectName||(I==null?void 0:I.name),description:(I==null?void 0:I.description)||"",updatedAt:I==null?void 0:I.updatedAt},systemConfig:k,buildings:N},null,2)),O=document.createElement("a");O.setAttribute("href",L),O.setAttribute("download",`${E}_ar_config_v7.json`),document.body.appendChild(O),O.click(),O.remove()},Ye=()=>{if(!(Ve!=null&&Ve.imageUrl)||!ze.current||!We.current){nt({x:0,y:0,scale:1});return}const E=ze.current,L=We.current.querySelector("img");if(!L||L.naturalWidth===0)return;const{width:O,height:Z}=E.getBoundingClientRect(),Ae=Math.min(O/L.naturalWidth,Z/L.naturalHeight,1)*.9;nt({x:(O-L.naturalWidth*Ae)/2,y:(Z-L.naturalHeight*Ae)/2,scale:Ae})},ct=E=>{o(E),u(!1),$(!1),Et(!1),ue(!1),ye(!1),at(null),Mt(null),F(!1),ae([]),Re([])};let w=null,z=null;N.forEach(E=>E.floors.forEach(L=>{var O;L.markers.forEach(Z=>{Z.id===J&&(w=Z,E.name,L.name)}),(O=L.waypoints)==null||O.forEach(Z=>{Z.id===he&&(z=Z,E.name,L.name)})}));let se=0,K=0;const ne=document.getElementById("current-map-image"),Te=me.trX-me.blX,Ge=me.trY-me.blY;if(ne&&Te>0){const E=ne.offsetWidth*Ne.scale;if(E>0){const L=Te/E,O=100*L;se=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Ae=>Ae<=O)||.5,K=se/L}}const we=N.reduce((E,L)=>E+L.floors.reduce((O,Z)=>O+(Z.markers||[]).length,0),0),Ze=N.reduce((E,L)=>E+L.floors.length,0),Je=()=>m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[m.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[m.jsx("select",{value:P,onChange:E=>H(E.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:U.map(E=>m.jsx("option",{value:E.id,className:"bg-slate-950",children:E.name},E.id))}),m.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",U.length," 個專案 · ",N.length," 棟建築 · ",Ze," 個樓層 · ",we," 個 AR 點位"]})]})]}),m.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[m.jsxs("button",{onClick:qi,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Gl,{className:"w-4 h-4"}),"新增專案"]}),m.jsxs("button",{onClick:ur,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Pd,{className:"w-4 h-4"}),"編輯"]}),m.jsxs("button",{onClick:ni,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Jl,{className:"w-4 h-4"}),"儲存"]}),m.jsxs("button",{onClick:ni,className:"inline-flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"把目前這台裝置的 AR 資料同步到雲端，讓其他裝置可以載入",children:[m.jsx(R0,{className:"w-4 h-4"}),"同步雲端"]}),m.jsxs("button",{onClick:ii,className:"inline-flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"從雲端載入已上架的 AR 資料，會覆蓋目前後台顯示的本機暫存",children:[m.jsx(ao,{className:"w-4 h-4"}),"從雲端載入"]}),m.jsxs("button",{onClick:j,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[m.jsx(Id,{className:"w-4 h-4"}),"刪除"]})]})]}),m.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),Ie=()=>{const E=new Set,L=N.flatMap(O=>O.floors.flatMap(Z=>(Z.markers||[]).reduce((Ae,De)=>{if(De.isVerticalShaft&&De.shaftId){if(E.has(De.shaftId))return Ae;E.add(De.shaftId)}return Ae.push({...De,bId:O.id,fId:Z.id,buildingName:O.name,floorName:Z.name}),Ae},[])));return m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-7xl mx-auto",children:[Je(),m.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(co,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),m.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",L.length," 組節點"]})]}),L.length===0?m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[m.jsx(co,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),m.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),m.jsx("button",{onClick:()=>ct("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"md:hidden space-y-3",children:L.map(O=>m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[m.jsxs("div",{className:"flex items-start gap-3",children:[O.imageUrl?m.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):m.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:m.jsx(b0,{className:"w-5 h-5"})}),m.jsxs("div",{className:"min-w-0 flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between gap-2",children:[m.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:O.code}),m.jsx(Tf,{status:O.recognitionStatus})]}),m.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:O.title||"未命名點位"}),m.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[O.buildingName," · ",O.floorName]})]})]}),m.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[m.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${O.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:O.enabled?"已啟用":"未啟用"}),m.jsxs("button",{onClick:()=>Kn(O.bId,O.fId,O.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[m.jsx(Pd,{className:"w-4 h-4"}),"編輯"]})]})]},O.id))}),m.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[m.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:m.jsxs("tr",{children:[m.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),m.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),m.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),m.jsx("tbody",{className:"divide-y divide-slate-800",children:L.map(O=>{var Ae;const Z=O.isVerticalShaft?(Ae=N.find(De=>De.id===O.bId))==null?void 0:Ae.floors.filter(De=>{var ve;return(ve=O.linkedFloorIds)==null?void 0:ve.includes(De.id)}).sort((De,ve)=>Xn(ve.name)-Xn(De.name)).map(De=>De.name).join(", "):O.floorName;return m.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${O.isVerticalShaft?"bg-purple-900/5":""}`,children:[m.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[m.jsx("div",{className:"text-xs font-bold text-slate-300",children:O.buildingName}),m.jsx("div",{className:`text-[10px] mt-0.5 ${O.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:Z})]}),m.jsx("td",{className:"px-4 py-4",children:O.imageUrl?m.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):m.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:m.jsx(b0,{className:"w-4 h-4"})})}),m.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[m.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:O.code}),O.isVerticalShaft?m.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[m.jsx(_s,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):O.arrowDirection!=="none"&&m.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[m.jsx(dw,{direction:O.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),m.jsxs("td",{className:"px-4 py-4",children:[m.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:O.title||"未命名"}),m.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:O.description||"無描述"})]}),m.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:O.enabled?m.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):m.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),m.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:m.jsx(Tf,{status:O.recognitionStatus})}),m.jsx("td",{className:"px-4 py-4 text-right",children:m.jsx("button",{onClick:()=>Kn(O.bId,O.fId,O.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:m.jsx(Pd,{className:"w-4 h-4"})})})]},O.id)})})]})})})]})]})})},rt=()=>m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[Je(),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center mb-2",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(C0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),m.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[m.jsx(w0,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),m.jsxs("div",{className:"space-y-4 md:space-y-5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),m.jsx("input",{type:"text",value:k.projectName,onChange:E=>T({...k,projectName:E.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),m.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[m.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),m.jsx("input",{type:"range",min:"5",max:"50",value:k.lerpFactor,onChange:E=>T({...k,lerpFactor:parseInt(E.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),m.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[m.jsx(E0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),m.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),m.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),m.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),m.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Ue()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),Qe=()=>m.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:m.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[Je(),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center mb-2",children:[m.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-6 h-6"})}),m.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[m.jsx(ao,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),m.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.length}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((E,L)=>E+L.floors.length,0)}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[m.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((E,L)=>E+L.floors.reduce((O,Z)=>O+(Z.markers||[]).length,0),0)}),m.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),m.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[m.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[m.jsx(E0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),m.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",m.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),m.jsxs("button",{onClick:Se,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[m.jsx(ao,{className:"w-5 h-5"}),m.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?m.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:m.jsx(k0,{buildings:N,systemConfig:k,onMenuClick:()=>{}})}):m.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&m.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(ha,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),m.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),m.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:m.jsx(ys,{className:"w-6 h-6"})})]}),m.jsxs("nav",{className:"p-4 space-y-2",children:[m.jsx(Wl,{icon:m.jsx(T0,{}),label:"平面圖管理",active:r==="map",onClick:()=>ct("map")}),m.jsx(Wl,{icon:m.jsx(co,{}),label:"點位列表",active:r==="list",onClick:()=>ct("list")}),m.jsx(Wl,{icon:m.jsx(C0,{}),label:"系統設定",active:r==="settings",onClick:()=>ct("settings")}),m.jsx(Wl,{icon:m.jsx(ao,{}),label:"匯出JSON",active:r==="export",onClick:()=>ct("export")})]})]}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:m.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&m.jsx(k0,{buildings:N,systemConfig:k,onMenuClick:()=>u(!0)}),r==="list"&&Ie(),r==="settings"&&rt(),r==="export"&&Qe(),r==="map"&&m.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[m.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-56 lg:right-72 z-40 flex flex-wrap items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-visible",children:[!s&&m.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:m.jsx(uo,{className:"w-5 h-5"})}),m.jsxs("div",{className:"flex items-center",children:[m.jsx(ha,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),m.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:P,onChange:E=>H(E.target.value),children:U.map(E=>m.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),m.jsx("button",{onClick:qi,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:m.jsx(Gl,{className:"w-4 h-4"})}),m.jsx("button",{onClick:ni,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:m.jsx(Jl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),m.jsxs("div",{className:"flex items-center",children:[m.jsx(tw,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),m.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:G,onChange:E=>Q(E.target.value),children:N.map(E=>m.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),m.jsx("button",{onClick:Yt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:m.jsx(Gl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),Ke&&m.jsxs("div",{className:"flex items-center",children:[m.jsx(iw,{className:"w-4 h-4 text-slate-500 mr-2"}),m.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:re,onChange:E=>pe(E.target.value),children:Ke.floors.slice().sort((E,L)=>Xn(L.name)-Xn(E.name)).map(E=>m.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),m.jsx("button",{onClick:wn,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:m.jsx(Gl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),m.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[m.jsx(nw,{className:"w-4 h-4 text-slate-500 mr-1"}),m.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:W,onChange:E=>oe(E.target.value),children:[m.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),N.flatMap(E=>E.floors.filter(L=>L.id!==re).sort((L,O)=>Xn(O.name)-Xn(L.name)).map(L=>m.jsxs("option",{value:L.id,className:"bg-slate-900",children:[E.name,"-",L.name]},L.id)))]})]})]}),m.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[m.jsxs("button",{onClick:ii,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30",title:"從雲端載入已上架的 AR 資料",children:[m.jsx(ao,{className:"w-5 h-5"}),m.jsx("span",{children:"載入雲端"})]}),m.jsxs("button",{onClick:ni,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-green-500/10 hover:bg-green-500/20 text-green-300 border border-green-500/30",title:"把目前這台裝置的 AR 資料同步到雲端",children:[m.jsx(w0,{className:"w-5 h-5"}),m.jsx("span",{children:"同步雲端"})]}),m.jsxs("button",{onClick:()=>{Ve!=null&&Ve.imageUrl&&(F(!Bt),ue(!1),ye(!1),$(!1),Et(!1),at(null),ee(null),ce(null),Mt(null),ae([]),Re([]))},disabled:!(Ve!=null&&Ve.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Bt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Bt?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(M0,{className:"w-5 h-5"}),m.jsx("span",{children:"路網測試"})]}),(Ve==null?void 0:Ve.imageUrl)&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),m.jsx("button",{onClick:()=>{ye(!be),ue(!1),F(!1),$(!1),Et(!1),at(null),ee(null),ce(null),Mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${be?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:be?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(_s,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{ue(!Ce),ye(!1),F(!1),$(!1),Et(!1),at(null),ee(null),ce(null),Mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ce?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Ce?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(ow,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{Et(!Pt),ye(!1),F(!1),$(!1),ue(!1),qe([]),Mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Pt?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:Pt?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(lw,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>{$(!Gt),ye(!1),F(!1),Et(!1),ue(!1),Mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Gt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Gt?m.jsx(ys,{className:"w-5 h-5"}):m.jsx(co,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>y({isOpen:!0,blX:me.blX,blY:me.blY,trX:me.trX,trY:me.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:m.jsx(ha,{className:"w-5 h-5"})})]}),m.jsx("input",{type:"file",ref:xe,onChange:Ln,className:"hidden",accept:"image/*"}),m.jsx("button",{onClick:()=>xe.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:m.jsx(R0,{className:"w-5 h-5"})})]}),m.jsxs("div",{ref:ze,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Ce?"cursor-crosshair":be?"cursor-pointer":Gt||Pt||Bt?"cursor-crosshair":yt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:$n,onPointerMove:Ui,onPointerUp:qn,onPointerCancel:qn,children:[Ve&&m.jsxs("div",{className:"absolute left-4 top-24 md:top-20 z-30 rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(Ke==null?void 0:Ke.name)||"目前場域"," / ",Ve.name||"未命名樓層"]}),m.jsxs("div",{ref:We,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Ne.x}px, ${Ne.y}px) scale(${Ne.scale})`},children:[W&&(()=>{let E=null;if(N.forEach(ve=>ve.floors.forEach(st=>{st.id===W&&(E=st)})),!E)return null;const L=Jr(E),O=Te!==0?(L.trX-L.blX)/Te:1,Z=Ge!==0?(L.trY-L.blY)/Ge:1,Ae=Te!==0?(L.blX-me.blX)/Te:0,De=Ge!==0?(me.trY-L.trY)/Ge:0;return m.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Ae*100}%`,top:`${De*100}%`,width:`${O*100}%`,height:`${Z*100}%`,opacity:.4},children:[E.imageUrl&&m.jsx("img",{src:E.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),E.markers.map(ve=>m.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${ve.x*100}%`,top:`${ve.y*100}%`},children:m.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:m.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Ne.scale)})`},children:ve.code})})},ve.id))]})})(),(Ve==null?void 0:Ve.imageUrl)&&m.jsx("img",{id:"current-map-image",src:Ve.imageUrl,alt:"Floor Plan",onLoad:Ye,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${W?"opacity-70 mix-blend-screen":"opacity-100"}`}),m.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[m.jsx("defs",{children:m.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:m.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),He.map(E=>{const L=Nt.find(Z=>Z.id===E.start)||Y.find(Z=>Z.id===E.start),O=Nt.find(Z=>Z.id===E.end)||Y.find(Z=>Z.id===E.end);return L&&O?m.jsx("line",{x1:`${L.x*100}%`,y1:`${L.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ne.scale),strokeOpacity:"0.7"},E.id):null}),Ce&&Le&&ht&&(()=>{const E=Nt.find(L=>L.id===Le)||Y.find(L=>L.id===Le);return E?m.jsx("line",{x1:`${E.x*100}%`,y1:`${E.y*100}%`,x2:`${ht.x*100}%`,y2:`${ht.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ne.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Bt&&Me.length>0&&Me.map((E,L)=>{if(L===Me.length-1)return null;const O=Me[L+1],Z=[];return E.fId===re&&O.fId===re?Z.push(m.jsx("line",{x1:`${E.x*100}%`,y1:`${E.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Ne.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${L}`)):E.fId===re&&O.fId!==re?Z.push(m.jsxs("g",{children:[m.jsxs("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:12/Math.max(.5,Ne.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Ne.scale),children:[m.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ne.scale),to:35/Math.max(.5,Ne.scale),dur:"1.5s",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),m.jsx("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:6/Math.max(.5,Ne.scale),fill:"#ef4444"}),m.jsxs("text",{x:`${E.x*100}%`,y:`${E.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Ne.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",O.fName]})]},`leave_${L}`)):E.fId!==re&&O.fId===re&&Z.push(m.jsxs("g",{children:[m.jsxs("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:12/Math.max(.5,Ne.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Ne.scale),children:[m.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ne.scale),to:35/Math.max(.5,Ne.scale),dur:"1.5s",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),m.jsx("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:6/Math.max(.5,Ne.scale),fill:"#22c55e"}),m.jsxs("text",{x:`${O.x*100}%`,y:`${O.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Ne.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",E.fName]})]},`enter_${L}`)),m.jsx(Cf.Fragment,{children:Z},`testfrag_${L}`)})]}),Y.map(E=>{const L=he===E.id,O=Le===E.id,Z=E.isVerticalShaft&&E.sourceFloorId&&E.sourceFloorId!==re;let Ae="bg-orange-500",De="border-white",ve="";return E.isVerticalShaft&&(Ae="bg-green-500"),O?(Ae="bg-white",De=Z?"border-green-500":"border-orange-500",ve=Z?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):L&&(De="border-cyan-400 border-2",ve="shadow-[0_0_10px_cyan]"),m.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${L?"z-40":""}`,style:{left:`${E.x*100}%`,top:`${E.y*100}%`},onPointerDown:st=>{st.stopPropagation(),st.button===0&&(Ce?Mi(E.id):be?(E.isVerticalShaft||lt(E,!0,!1),ee(null),ce(E.id)):!Bt&&!Pt&&!yt&&!Gt&&(ee(null),ce(E.id),le(E.id),st.target.setPointerCapture(st.pointerId)))},onPointerUp:st=>{st.stopPropagation(),st.target.releasePointerCapture(st.pointerId)},onContextMenu:st=>{st.preventDefault(),Ce?Xt(E.id):be?E.isVerticalShaft&&lt(E,!1,!1):!Bt&&!Pt&&!Gt&&(ee(null),ce(E.id))},children:m.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Ae} ${De} ${ve}`,style:{width:`${(O?14:10)/Math.max(.5,Ne.scale)}px`,height:`${(O?14:10)/Math.max(.5,Ne.scale)}px`,borderWidth:L?"2px":"1px"},children:E.isVerticalShaft&&m.jsx(_s,{className:O?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Ne.scale)}px`,height:`${6/Math.max(.5,Ne.scale)}px`}})})},E.id)}),Bt&&b.map((E,L)=>E.fId!==re?null:m.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${E.x*100}%`,top:`${E.y*100}%`},children:m.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Ne.scale)}px`,height:`${16/Math.max(.5,Ne.scale)}px`},children:L===0?"起":"終"})},`testpt_${L}`)),Pt&&Tt.length>0&&m.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[m.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[Tt.length===2&&m.jsx("line",{x1:`${Tt[0].x*100}%`,y1:`${Tt[0].y*100}%`,x2:`${Tt[1].x*100}%`,y2:`${Tt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Ne.scale),strokeDasharray:"5,5"}),Tt.map((E,L)=>m.jsx("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:6/Math.max(.1,Ne.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Ne.scale)},L))]}),Tt.length===2&&m.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(Tt[0].x+Tt[1].x)*50}%`,top:`${(Tt[0].y+Tt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Ne.scale)})`},children:[Math.hypot((Tt[1].x-Tt[0].x)*Te,(Tt[1].y-Tt[0].y)*Ge).toFixed(1)," m"]})]}),Nt.map(E=>{const L=E.isVerticalShaft?Ke==null?void 0:Ke.floors.filter(O=>{var Z;return(Z=E.linkedFloorIds)==null?void 0:Z.includes(O.id)}).sort((O,Z)=>Xn(Z.name)-Xn(O.name)).map(O=>O.name).join(", "):"";return m.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${J===E.id?"z-[60]":""} ${Le===E.id?"scale-125":""}`,style:{left:`${E.x*100}%`,top:`${E.y*100}%`},onPointerDown:O=>{O.stopPropagation(),O.button===0&&(Ce?Mi(E.id):be?(E.isVerticalShaft||lt(E,!0,!0),ce(null),ee(E.id)):!Bt&&!Gt&&!Pt&&!yt&&(ce(null),le(E.id),ee(E.id),O.target.setPointerCapture(O.pointerId)))},onPointerUp:O=>{O.stopPropagation(),O.target.releasePointerCapture(O.pointerId)},onContextMenu:O=>{O.preventDefault(),Ce?Xt(E.id):be?E.isVerticalShaft&&lt(E,!1,!0):!Bt&&!Pt&&!Gt&&(ce(null),ee(E.id))},children:[m.jsxs("div",{className:"relative pointer-events-none",children:[m.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${J===E.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":E.enabled?E.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Le===E.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:E.isVerticalShaft?m.jsx(_s,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Ne.scale)})`}}):m.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Ne.scale)})`},children:E.code})}),m.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${J===E.id?"border-t-white":E.enabled?E.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Le===E.id?"border-t-orange-500":""}`})]}),m.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${J===E.id?"opacity-100 border-cyan-500 text-cyan-400":E.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Ne.scale)})`,transformOrigin:"top center"},children:[E.title||"未命名"," ",E.isVerticalShaft&&m.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",L,")"]})]})]},E.id)})]}),be&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(_s,{className:"w-5 h-5 mr-3 shrink-0"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),m.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Ce&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(sw,{className:"w-5 h-5 mr-3 shrink-0"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),m.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Bt&&m.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[m.jsx(M0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),m.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(Ve!=null&&Ve.imageUrl)&&m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[m.jsx(T0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),m.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",Ke==null?void 0:Ke.name," - ",Ve==null?void 0:Ve.name," 的平面圖"]}),m.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(Ve==null?void 0:Ve.imageUrl)&&K>0&&m.jsxs("div",{onClick:()=>y({isOpen:!0,blX:me.blX,blY:me.blY,trX:me.trX,trY:me.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[m.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[m.jsx(ha,{className:"w-3 h-3 mr-1"})," 比例尺: ",se," m"]}),m.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${K}px`}})]}),(Ve==null?void 0:Ve.imageUrl)&&m.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[m.jsx("button",{onClick:()=>nt(E=>({...E,scale:Math.min(10,E.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:m.jsx(Ng,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>nt(E=>({...E,scale:Math.max(.1,E.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:m.jsx(Pg,{className:"w-5 h-5"})}),m.jsx("button",{onClick:Ye,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:m.jsx(rw,{className:"w-5 h-5"})})]})]})]}),D.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[m.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[m.jsx(ha,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),m.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",m.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),m.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[m.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[m.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),m.jsx("input",{type:"number",value:D.blX,onChange:E=>y({...D,blX:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),m.jsx("input",{type:"number",value:D.blY,onChange:E=>y({...D,blY:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),m.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[m.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),m.jsx("input",{type:"number",value:D.trX,onChange:E=>y({...D,trX:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),m.jsx("input",{type:"number",value:D.trY,onChange:E=>y({...D,trY:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),m.jsx("button",{onClick:()=>{X(E=>E.map(L=>L.id===G?{...L,floors:L.floors.map(O=>O.id===re?{...O,bounds:{blX:D.blX,blY:D.blY,trX:D.trX,trY:D.trY}}:O)}:L)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[m.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),m.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:E=>{E.key==="Enter"&&(f.onSubmit(E.target.value),h({isOpen:!1}))}}),m.jsxs("div",{className:"flex space-x-3 justify-end",children:[m.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),m.jsx("button",{onClick:E=>{f.onSubmit(E.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[m.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),m.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),m.jsxs("div",{className:"flex space-x-3 justify-end",children:[m.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),m.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[m.jsx(Rg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),m.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),m.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),m.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&m.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[m.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[m.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:m.jsx(bf,{className:"w-10 h-10 text-cyan-400"})}),m.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:m.jsx(uw,{className:"w-10 h-10 text-purple-400"})})]}),m.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),m.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",m.jsx("b",{children:"「相機」"}),"進行掃描，以及",m.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),m.jsxs("button",{onClick:Fe,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[m.jsx(Jl,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),m.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(J||he)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[m.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[m.jsx("h2",{className:"font-bold text-slate-200",children:J?"AR 點位設定":"轉折點 (Waypoint) 設定"}),m.jsx("button",{onClick:()=>{ee(null),ce(null)},className:"text-slate-400 hover:text-white p-2",children:m.jsx(ys,{})})]}),w&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),m.jsx("input",{type:"text",value:w.code,onChange:E=>Oe(w.id,"code",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-[2]",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),m.jsx("input",{type:"text",value:w.title,onChange:E=>Oe(w.id,"title",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),m.jsx("textarea",{value:w.description||"",onChange:E=>Oe(w.id,"description",E.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(w.x*100).toFixed(1),onChange:E=>Oe(w.id,"x",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(w.y*100).toFixed(1),onChange:E=>Oe(w.id,"y",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[m.jsx(_s,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:w.isVerticalShaft||!1,onChange:E=>lt(w,E.target.checked,!0),className:"sr-only peer"}),m.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),w.isVerticalShaft?m.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:m.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ke==null?void 0:Ke.floors.slice().sort((E,L)=>Xn(L.name)-Xn(E.name)).map(E=>{var Z;const L=(Z=w.linkedFloorIds)==null?void 0:Z.includes(E.id),O=E.id===re;return m.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${L?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[m.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:O,checked:L||O,onChange:Ae=>St(w,E.id,Ae.target.checked,!0)}),m.jsxs("span",{className:"text-xs font-bold",children:[E.name," ",O&&"(目前)"]})]},E.id)})})}):m.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),m.jsxs("select",{value:w.arrowDirection||"none",onChange:E=>Oe(w.id,"arrowDirection",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[m.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),m.jsx("option",{value:"up",children:"上 (Up)"}),m.jsx("option",{value:"down",children:"下 (Down)"}),m.jsx("option",{value:"left",children:"左 (Left)"}),m.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),m.jsxs("div",{className:"flex items-center justify-between pt-1",children:[m.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:w.enabled,onChange:E=>Oe(w.id,"enabled",E.target.checked),className:"sr-only peer"}),m.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),m.jsx("hr",{className:"border-slate-800"}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),m.jsx("input",{type:"file",ref:Ee,onChange:gn,className:"hidden",accept:"image/*"}),m.jsx("button",{onClick:()=>Ee.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),m.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:w.imageUrl?m.jsx("img",{src:w.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):m.jsxs("div",{className:"text-center text-slate-600",children:[m.jsx(bf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),m.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),m.jsx(Sw,{marker:w,onUpdateStatus:E=>Oe(w.id,"recognitionStatus",E),showAlert:E=>x({isOpen:!0,message:E})})]}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:tt?m.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[m.jsx("button",{onClick:()=>it(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),m.jsx("button",{onClick:()=>Xt(w.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):m.jsxs("div",{className:"flex space-x-3",children:[m.jsx("button",{onClick:()=>it(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:m.jsx(Id,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>ee(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),z&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex space-x-3",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(z.x*100).toFixed(1),onChange:E=>_e(z.id,"x",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),m.jsx("input",{type:"number",step:"0.1",value:+(z.y*100).toFixed(1),onChange:E=>_e(z.id,"y",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),m.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[m.jsx(_s,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),m.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[m.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:z.isVerticalShaft||!1,onChange:E=>lt(z,E.target.checked,!1),className:"sr-only peer"}),m.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),z.isVerticalShaft&&m.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[m.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),m.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ke==null?void 0:Ke.floors.slice().sort((E,L)=>Xn(L.name)-Xn(E.name)).map(E=>{var Z;const L=(Z=z.linkedFloorIds)==null?void 0:Z.includes(E.id),O=E.id===re;return m.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${L?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[m.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:O,checked:L||O,onChange:Ae=>St(z,E.id,Ae.target.checked,!1)}),m.jsxs("span",{className:"text-xs font-bold",children:[E.name," ",O&&"(目前)"]})]},E.id)})})]})]})]})}),m.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:tt?m.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[m.jsx("button",{onClick:()=>it(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),m.jsx("button",{onClick:()=>Xt(z.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):m.jsxs("div",{className:"flex space-x-3",children:[m.jsx("button",{onClick:()=>it(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:m.jsx(Id,{className:"w-5 h-5"})}),m.jsx("button",{onClick:()=>ce(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Wl({icon:s,label:e,active:t,onClick:r}){return m.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[m.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),m.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Tf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:m.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:m.jsx(Jl,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:m.jsx(Rg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return m.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function Sw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Pe.useState("idle"),[l,u]=Pe.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),v=Pe.useRef(null),S=Pe.useRef(null),x=Pe.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Pe.useRef({frames:0,lockedFrames:0});Pe.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const C=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,P=x.current;P.refGray&&P.refGray.delete(),P.refKeypoints&&P.refKeypoints.delete(),P.refDescriptors&&P.refDescriptors.delete(),P.orbDetector&&P.orbDetector.delete(),P.matcher&&P.matcher.delete();const H=document.createElement("canvas"),I=H.getContext("2d"),k=p.current,T=320;let N=k.naturalWidth||k.width,X=k.naturalHeight||k.height;(N>T||X>T)&&(N>X?(X=Math.round(X*T/N),N=T):(N=Math.round(N*T/X),X=T)),H.width=N,H.height=X,I.drawImage(k,0,0,N,X);const G=R.imread(H),Q=new R.Mat;R.cvtColor(G,Q,R.COLOR_RGBA2GRAY);const re=new R.ORB,pe=new R.KeyPointVector,W=new R.Mat;re.detectAndCompute(Q,new R.Mat,pe,W);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:Q,refKeypoints:pe,refDescriptors:W,orbDetector:re,matcher:oe},G.delete(),!0}catch{return!1}},D=R=>{if(R.length<4)return!1;let P=[];for(let H=0;H<4;H++){let I=R[(H+1)%4].x-R[H].x,k=R[(H+1)%4].y-R[H].y,T=R[(H+2)%4].x-R[(H+1)%4].x,N=R[(H+2)%4].y-R[(H+1)%4].y;P.push(I*N-k*T>0)}return P.every(H=>H===P[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!C()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(P){console.warn("Device orientation permission was not granted.",P)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,U()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Pe.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const U=()=>{const R=window.cv,P=x.current,H=f.current,I=h.current,k=I.getContext("2d");let T=performance.now(),N=null;const X=.15;let G=0;const Q=3;let re=0;const pe=10;let W=null;const oe=()=>{if(!H||!H.srcObject||!P.refDescriptors)return;const J=performance.now(),ee=Math.round(1e3/(J-T));T=J,k.drawImage(H,0,0,I.width,I.height);let he=0,ce=0,B=!1,le=null,tt=G%Q===0;if(G++,tt){try{const Ce=R.imread(I),ue=new R.Mat;R.cvtColor(Ce,ue,R.COLOR_RGBA2GRAY);const be=new R.KeyPointVector,ye=new R.Mat;if(P.orbDetector.detectAndCompute(ue,new R.Mat,be,ye),!ye.empty()&&ye.rows>0){const Le=new R.DMatchVector;P.matcher.match(P.refDescriptors,ye,Le);let at=[];for(let Mt=0;Mt<Le.size();Mt++)at.push(Le.get(Mt));at.sort((Mt,yt)=>Mt.distance-yt.distance);let ht=at.filter(Mt=>Mt.distance<=50).slice(0,60);if(he=ht.length,ht.length>=12){const Mt=[],yt=[];for(let Rt=0;Rt<ht.length;Rt++){let Gt=ht[Rt];Mt.push(P.refKeypoints.get(Gt.queryIdx).pt.x,P.refKeypoints.get(Gt.queryIdx).pt.y),yt.push(be.get(Gt.trainIdx).pt.x,be.get(Gt.trainIdx).pt.y)}const Ut=R.matFromArray(Mt.length/2,1,R.CV_32FC2,Mt),Kt=R.matFromArray(yt.length/2,1,R.CV_32FC2,yt),bt=new R.Mat,Ot=R.findHomography(Ut,Kt,R.RANSAC,4,bt);for(let Rt=0;Rt<bt.rows;Rt++)bt.data[Rt]===1&&ce++;if(!Ot.empty()&&ce>=10&&ce/ht.length>=.35){const Rt=P.refGray.cols,Gt=P.refGray.rows,$=[0,0,1,Rt,0,1,Rt,Gt,1,0,Gt,1];let Pt=[];for(let Et=0;Et<4;Et++){let Tt=$[Et*3],qe=$[Et*3+1],Bt=Ot.data64F[0]*Tt+Ot.data64F[1]*qe+Ot.data64F[2],F=Ot.data64F[3]*Tt+Ot.data64F[4]*qe+Ot.data64F[5],b=Ot.data64F[6]*Tt+Ot.data64F[7]*qe+Ot.data64F[8];Pt.push({x:Bt/b,y:F/b})}D(Pt)&&(le=Pt,B=!0)}Ut.delete(),Kt.delete(),bt.delete(),Ot.delete()}Le.delete()}Ce.delete(),ue.delete(),be.delete(),ye.delete()}catch{}B?(W=le,re=pe):re>0?re--:W=null}const it=W!==null;if(it){if(!N)N=JSON.parse(JSON.stringify(W));else for(let Ce=0;Ce<4;Ce++)N[Ce].x=N[Ce].x*(1-X)+W[Ce].x*X,N[Ce].y=N[Ce].y*(1-X)+W[Ce].y*X;k.strokeStyle="#00ffcc",k.lineWidth=3,k.shadowBlur=10,k.shadowColor="#00ffcc",k.beginPath(),k.moveTo(N[0].x,N[0].y),k.lineTo(N[1].x,N[1].y),k.lineTo(N[2].x,N[2].y),k.lineTo(N[3].x,N[3].y),k.closePath(),k.stroke(),k.shadowBlur=0}else{N=null;const Ce=Math.min(I.width,I.height)*.5,ue=(I.width-Ce)/2,be=(I.height-Ce)/2;k.strokeStyle="rgba(255, 70, 70, 0.5)",k.lineWidth=2,k.strokeRect(ue,be,Ce,Ce)}u(Ce=>({fps:ee,matches:tt?he:Ce.matches,inliers:tt?ce:Ce.inliers,status:it?"LOCKED":"SEARCHING"})),M.current.frames++,it&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return m.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&m.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),m.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[m.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),m.jsx(Tf,{status:s.recognitionStatus})]}),m.jsxs("div",{className:"p-3 space-y-3",children:[m.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[m.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),m.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),m.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&m.jsx("div",{className:"text-center z-20",children:r==="loading"?m.jsxs("div",{className:"animate-pulse text-yellow-500",children:[m.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):m.jsxs(m.Fragment,{children:[m.jsx(bf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),m.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&m.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[m.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),m.jsxs("span",{children:["INLIERS: ",l.inliers]}),m.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?m.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):m.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[m.jsx(aw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),m.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function k0({buildings:s,systemConfig:e,onMenuClick:t}){var qi,ur;const[r,o]=Pe.useState("idle"),[l,u]=Pe.useState(null),[f,h]=Pe.useState(null),[p,v]=Pe.useState([]),[S,x]=Pe.useState(!1),[M,C]=Pe.useState(0),[D,y]=Pe.useState("idle"),[_,U]=Pe.useState("checking"),[R,P]=Pe.useState("idle"),[H,I]=Pe.useState(0),[k,T]=Pe.useState(0),[N,X]=Pe.useState({}),[G,Q]=Pe.useState(!1),[re,pe]=Pe.useState(""),W=Pe.useRef(null),oe=Pe.useRef(null),J=Pe.useRef(null),ee=Pe.useRef(null),he=Pe.useRef(null),ce=Pe.useRef(null),B=Pe.useRef(null),le=Pe.useRef(null),tt=Pe.useRef(null),it=Pe.useRef(null),Ce=Pe.useRef(!1),ue=Pe.useRef([]),be=Pe.useRef({matcher:null}),ye=Pe.useRef(null),Le=Pe.useRef(null),at=Pe.useRef(!1),ht=Pe.useRef({}),Mt=Pe.useRef([]),yt=Pe.useRef({nodes:{},edges:[]}),Ut=Pe.useRef(null),Kt=Pe.useRef("idle"),bt=Pe.useRef({heading:null,pitch:0,roll:0}),Ot=Pe.useRef(null),Rt=Cf.useMemo(()=>{const j={},Ue=[];return s.forEach(Se=>Se.floors.forEach(Ye=>{var z,se;const ct=Ye.bounds||{blX:0,blY:0,trX:100,trY:100},w=(K,ne)=>({physX:ct.blX+K*(ct.trX-ct.blX),physY:ct.trY-ne*(ct.trY-ct.blY)});Ye.markers.forEach(K=>{K.enabled&&(j[K.id]={...K,...w(K.x,K.y),isMarker:!0,bId:Se.id,fId:Ye.id,bName:Se.name,fName:Ye.name,bounds:ct})}),(z=Ye.waypoints)==null||z.forEach(K=>{j[K.id]={...K,...w(K.x,K.y),isMarker:!1,bId:Se.id,fId:Ye.id,bName:Se.name,fName:Ye.name,bounds:ct}}),(se=Ye.edges)==null||se.forEach(K=>{Ue.push({...K,fId:Ye.id})})})),{nodes:j,edges:Ue}},[s]);Pe.useEffect(()=>{yt.current=Rt},[Rt]),Pe.useEffect(()=>{Mt.current=p},[p]),Pe.useEffect(()=>{T(0)},[l,p]),Pe.useEffect(()=>{if(!l||p.length<2){I(0);return}const j=performance.now(),Ue=Se=>{I((Se-j)/5200%1),Ot.current=requestAnimationFrame(Ue)};return Ot.current=requestAnimationFrame(Ue),()=>{Ot.current&&cancelAnimationFrame(Ot.current)}},[l,p]),Pe.useEffect(()=>{Ut.current=null,Le.current=null,Gt("idle")},[l]);const Gt=j=>{Kt.current!==j&&(Kt.current=j,y(j))},$=()=>new URLSearchParams(window.location.search).get("debugAR")==="1"||localStorage.getItem("debugAR")==="1",Pt=j=>{$()&&(ht.current={...ht.current,...j,isSecureContext:window.isSecureContext,lastUpdateTime:new Date().toLocaleTimeString()},X(ht.current))};Pe.useEffect(()=>{let j=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){j&&U("unsupported");return}try{const Se=await navigator.xr.isSessionSupported("immersive-ar");j&&U(Se?"supported":"unsupported")}catch{j&&U("unsupported")}})(),()=>{j=!1}},[]);const Et=(j,Ue)=>{const{nodes:Se,edges:Ye}=Rt,ct={};Object.keys(Se).forEach(Ie=>{ct[Ie]={}}),Ye.forEach(Ie=>{if(Se[Ie.start]&&Se[Ie.end]){const rt=Math.hypot(Se[Ie.start].physX-Se[Ie.end].physX,Se[Ie.start].physY-Se[Ie.end].physY);ct[Ie.start][Ie.end]=rt,ct[Ie.end][Ie.start]=rt}});const w={};Object.values(Se).forEach(Ie=>{Ie.isVerticalShaft&&Ie.shaftId&&(w[Ie.shaftId]||(w[Ie.shaftId]=[]),w[Ie.shaftId].push(Ie.id))}),Object.values(w).forEach(Ie=>{for(let rt=0;rt<Ie.length;rt++)for(let Qe=rt+1;Qe<Ie.length;Qe++)ct[Ie[rt]][Ie[Qe]]=5,ct[Ie[Qe]][Ie[rt]]=5});const z=Ie=>Object.keys(ct[Ie]).length>0,se=Ie=>{if(z(Ie))return Ie;const rt=Se[Ie];let Qe=1/0,wt=Ie;return Object.keys(Se).forEach(Ft=>{if(Se[Ft].fId===rt.fId&&z(Ft)){const $t=Math.hypot(Se[Ft].physX-rt.physX,Se[Ft].physY-rt.physY);$t<Qe&&(Qe=$t,wt=Ft)}}),wt},K=se(j),ne=se(Ue),Te={},Ge={},we=new Set(Object.keys(Se));for(Object.keys(Se).forEach(Ie=>{Te[Ie]=1/0,Ge[Ie]=null}),Te[K]=0;we.size>0;){let Ie=null;if(we.forEach(rt=>{(Ie===null||Te[rt]<Te[Ie])&&(Ie=rt)}),Te[Ie]===1/0||Ie===ne)break;we.delete(Ie),Object.entries(ct[Ie]).forEach(([rt,Qe])=>{if(we.has(rt)){const wt=Te[Ie]+Qe;wt<Te[rt]&&(Te[rt]=wt,Ge[rt]=Ie)}})}const Ze=[];let Je=ne;for(;Je;)Ze.unshift(Je),Je=Ge[Je];return Ze.length===0||Ze[0]!==K?[]:(K!==j&&Ze.unshift(j),ne!==Ue&&Ze.push(Ue),Ze)};Pe.useEffect(()=>{v(f&&l&&f!==l?Et(f,l):[])},[f,l,Rt]),Pe.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const Ye=document.createElement("script");Ye.id="opencv-script",Ye.src="https://docs.opencv.org/3.4.16/opencv.js",Ye.async=!0,document.body.appendChild(Ye)}}else o("idle");let j=0;const Ue=Ye=>{const ct=fw(Ye);Pt({alpha:Ye.alpha,beta:Ye.beta,gamma:Ye.gamma,webkitCompassHeading:Ye.webkitCompassHeading,currentHeading:ct}),ct!=null&&(Le.current==null&&(Le.current=ct),bt.current={heading:ct,pitch:Ye.beta||0,roll:Ye.gamma||0},ye.current=ct,at.current||(at.current=!0,Q(!0)),Pt({baseHeading:Le.current,relativeHeading:I0(ct,Le.current),orientationEventActive:!0}))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Ue,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",Ue,!0));const Se=setInterval(()=>{if(!at.current)return;let Ye=ye.current;if(Ye==null)return;let ct=Ye-(j%360+360)%360;ct>180&&(ct-=360),ct<-180&&(ct+=360),j+=ct,C(j)},200);return()=>{b(),clearInterval(Se),window.removeEventListener("deviceorientation",Ue,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",Ue,!0)}},[]);const Tt=async()=>{const j=window.cv;if(!j)return!1;ue.current=[],be.current.matcher=new j.BFMatcher(j.NORM_HAMMING,!0);const Se=Object.values(Rt.nodes).filter(Ye=>Ye.isMarker&&Ye.imageUrl).map(Ye=>new Promise(ct=>{const w=new Image;w.onload=()=>{try{const z=document.createElement("canvas"),se=z.getContext("2d");z.width=320,z.height=Math.round(320*(w.height/w.width)),se.drawImage(w,0,0,z.width,z.height);const K=j.imread(z),ne=new j.Mat;j.cvtColor(K,ne,j.COLOR_RGBA2GRAY);const Te=new j.ORB,Ge=new j.KeyPointVector,we=new j.Mat;Te.detectAndCompute(ne,new j.Mat,Ge,we),ue.current.push({markerId:Ye.id,gray:ne,kp:Ge,des:we,orb:Te,width:ne.cols,height:ne.rows}),K.delete(),ct(!0)}catch{ct(!1)}},w.onerror=()=>ct(!1),w.src=Ye.imageUrl}));return await Promise.all(Se),ue.current.length>0},qe=async()=>{const j={orientationPermission:"not-required",motionPermission:"not-required",granted:!0,reason:null};if(!window.isSecureContext&&location.hostname!=="localhost")return j.granted=!1,j.reason="AR 方向感測需要 HTTPS 或 localhost。",Pt(j),j;try{window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&(j.orientationPermission=await window.DeviceOrientationEvent.requestPermission(),j.orientationPermission!=="granted"&&(j.granted=!1)),window.DeviceMotionEvent&&typeof window.DeviceMotionEvent.requestPermission=="function"&&(j.motionPermission=await window.DeviceMotionEvent.requestPermission(),j.motionPermission!=="granted"&&(j.granted=!1))}catch(Ue){j.granted=!1,j.reason=(Ue==null?void 0:Ue.message)||"方向感測授權失敗。"}return Pt(j),j},Bt=async()=>{const j=await qe();return j.granted?pe("已送出動作與方向啟用請求，請轉動手機確認羅盤資料是否開始變化。"):pe(j.reason||"瀏覽器未允許動作與方向存取，請在 Safari 設定中開啟「動作與方向存取」。"),j},F=async()=>{if(r!=="idle")return;if(o("loading"),!await Tt()){o("idle"),alert("無法提取特徵");return}try{await Bt();const Ue=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});J.current=Ue,W.current.srcObject=Ue,W.current.play(),W.current.onloadedmetadata=()=>{oe.current.width=W.current.videoWidth,oe.current.height=W.current.videoHeight,o("scanning"),Xe()}}catch{alert("無相機權限"),o("idle")}},b=()=>{ee.current&&cancelAnimationFrame(ee.current),J.current&&J.current.getTracks().forEach(j=>j.stop()),Ut.current=null,Le.current=null,Gt("idle"),o("idle")},ae=(j,Ue,Se=!1)=>{if(!Ue||Ue.length<2)return!1;const Ye=U0(Ue);if(j.save(),j.beginPath(),Ue.forEach((ct,w)=>{w===0?j.moveTo(ct.x,ct.y):j.lineTo(ct.x,ct.y)}),j.strokeStyle=Se?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",j.lineWidth=Se?8:10,j.lineCap="round",j.lineJoin="round",j.shadowBlur=Se?8:12,j.shadowColor="#ffffff",j.stroke(),Ye>8){const ct=Se?86:74,w=Se?26:30,z=Date.now()/18%ct;j.shadowBlur=Se?10:16,j.shadowColor="#ffffff",j.fillStyle="rgba(255,255,255,0.98)",j.strokeStyle="rgba(0,0,0,0.34)",j.lineWidth=2.5;for(let se=z;se<Ye;se+=ct){const K=L0(Ue,se);K&&(j.save(),j.translate(K.x,K.y),j.rotate(K.angle),j.beginPath(),j.moveTo(w*.55,0),j.lineTo(-w*.35,-w*.32),j.lineTo(-w*.15,0),j.lineTo(-w*.35,w*.32),j.closePath(),j.stroke(),j.fill(),j.restore())}}return j.restore(),!0},Me=(j,Ue=[])=>{Ue.forEach(Se=>{if(!Se||typeof Se.x!="number"||typeof Se.y!="number")return;const Ye=Se.type==="destination",ct=Ye?"#ef4444":"#a855f7",w=Se.label||(Ye?"目的地":"路段末端");j.save(),j.translate(Se.x,Se.y),j.shadowBlur=16,j.shadowColor=ct,j.fillStyle=ct,j.strokeStyle="#ffffff",j.lineWidth=3,j.beginPath(),j.arc(0,-18,Ye?15:13,0,Math.PI*2),j.fill(),j.stroke(),j.beginPath(),j.moveTo(-8,-6),j.lineTo(0,12),j.lineTo(8,-6),j.closePath(),j.fill(),j.stroke(),j.fillStyle="#ffffff",j.shadowBlur=0,j.font="bold 18px sans-serif",j.textAlign="center",j.textBaseline="middle",j.fillText(Ye?"!":"↑",0,-18),j.font="bold 13px sans-serif";const z=j.measureText(w).width+18;j.fillStyle="rgba(15, 23, 42, 0.86)",j.strokeStyle="rgba(255, 255, 255, 0.35)",j.lineWidth=1,j.beginPath(),j.roundRect(-z/2,20,z,26,13),j.fill(),j.stroke(),j.fillStyle="#ffffff",j.fillText(w,0,33),j.restore()})},Re=(j,Ue)=>{!Ue||typeof Ue.x!="number"||typeof Ue.y!="number"||(j.save(),j.translate(Ue.x,Ue.y),j.shadowBlur=14,j.shadowColor="#22d3ee",j.strokeStyle="rgba(255,255,255,0.95)",j.fillStyle="rgba(34,211,238,0.95)",j.lineWidth=3,j.beginPath(),j.arc(0,0,10,0,Math.PI*2),j.fill(),j.stroke(),j.beginPath(),j.arc(0,0,20,0,Math.PI*2),j.strokeStyle="rgba(34,211,238,0.55)",j.stroke(),j.restore())},ze=j=>{const Ue=Ut.current;if(!Ue||!Ue.points||Ue.points.length<2)return!1;const Se=bt.current,Ye=at.current&&Se.heading!=null&&Ue.orientation.heading!=null,ct=Ye?P0(Se.heading,Ue.orientation.heading):0,w=Ye?Se.pitch-Ue.orientation.pitch:0,z=Ye?Se.roll-Ue.orientation.roll:0,se=(z-ct)*Math.PI/180,K=Math.cos(se),ne=Math.sin(se),Te=Ue.anchor||Ue.points[0],Ge=j.canvas.width/2,we=j.canvas.height/2,Ze=Te.x*j.canvas.width,Je=Te.y*j.canvas.height,Ie=Math.max(j.canvas.width,j.canvas.height)*.95,rt=j.canvas.width*1.8,Qe=j.canvas.height*1.2,wt=Math.max(-rt,Math.min(rt,Math.tan(ct*Math.PI/180)*Ie)),Ft=Math.max(-Qe,Math.min(Qe,Math.tan(w*Math.PI/180)*Ie*.75)),zt=((ve,st)=>{const pt=ve-Ge,et=st-we;return{x:Ge+pt*K-et*ne-wt,y:we+pt*ne+et*K+Ft}})(Ze,Je),E=ve=>{const st=ve.x*j.canvas.width,pt=ve.y*j.canvas.height,et=st-Ze,Vt=pt-Je;return{x:zt.x+et*K-Vt*ne,y:zt.y+et*ne+Vt*K}},L=Ue.points.map(E),O=(Ue.pins||[]).map(E).map((ve,st)=>{var pt,et;return{...ve,type:(pt=Ue.pins[st])==null?void 0:pt.type,label:(et=Ue.pins[st])==null?void 0:et.label}}),Z=I0(Se.heading,Ue.baseHeading),Ae=Ue.targetBearing!=null&&Z!=null?P0(Ue.targetBearing,Z):null;Pt({currentHeading:Se.heading,baseHeading:Ue.baseHeading,relativeHeading:Z,targetBearing:Ue.targetBearing,headingDelta:ct,arrowRotation:Ae,finalArrowRotation:Ae==null?null:Ae+z,currentARMode:"camera-overlay"});const De=ae(j,L,!0);return De&&(Re(j,zt),Me(j,O)),De},We=()=>{if(Mt.current.length>1)return Mt.current;const j=Object.values(yt.current.nodes).filter(Se=>Se.isMarker&&Se.id!==l).map(Se=>Se.id),Ue=f||j[0];return!Ue||!l||Ue===l?[]:Et(Ue,l)},xe=()=>{const j=We(),Ue=yt.current.nodes,Se=j.map(we=>Ue[we]).filter(Boolean);if(Se.length<2)return null;const Ye=Se[0],ct=.08,w=Se.map(we=>new ie((we.physX-Ye.physX)*ct,.03,-(we.physY-Ye.physY)*ct)),z=new Ts,se=D0(w,.045,16777215,.18),K=D0(w,.016,16777215,.36);se&&z.add(se),K&&z.add(K);const ne=xw(w);ne&&z.add(ne);const Te=new ti(new ac(.1,24,24),new ts({color:2282478}));Te.position.copy(w[0]),Te.position.y+=.08,z.add(Te);const Ge=new ti(new ac(.12,24,24),new ts({color:16731471}));return Ge.position.copy(w[w.length-1]),Ge.position.y+=.1,z.add(Ge),z},Ee=async()=>{const j=ce.current;if(j)try{await j.end()}catch{}else Ne()},Ne=()=>{le.current&&le.current.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&j.material.dispose()}),B.current&&(B.current.setAnimationLoop(null),B.current.dispose(),B.current.domElement.remove()),ce.current=null,B.current=null,le.current=null,tt.current=null,it.current=null,Ce.current=!1,P("idle")},nt=async()=>{var j;if(!(_!=="supported"||!navigator.xr||ce.current)){P("starting"),b();try{const Ue={requiredFeatures:["hit-test"],optionalFeatures:he.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};he.current&&(Ue.domOverlay={root:he.current});const Se=await navigator.xr.requestSession("immersive-ar",Ue),Ye=new YE({alpha:!0,antialias:!0});Ye.xr.enabled=!0,Ye.setPixelRatio(window.devicePixelRatio||1),Ye.setSize(window.innerWidth,window.innerHeight),Ye.domElement.className="absolute inset-0 h-full w-full",(j=he.current)==null||j.appendChild(Ye.domElement),await Ye.xr.setSession(Se);const ct=new g_,w=new Ii,z=new ti(new Gf(.18,.22,32).rotateX(-Math.PI/2),new ts({color:65484,transparent:!0,opacity:.85}));z.matrixAutoUpdate=!1,z.visible=!1,ct.add(z);const se=await Se.requestReferenceSpace("local-floor").catch(()=>Se.requestReferenceSpace("local")),K=await Se.requestReferenceSpace("viewer"),ne=await Se.requestHitTestSource({space:K});ce.current=Se,B.current=Ye,tt.current=ne,it.current=se,P("placing");const Te=Ge=>{if(Ce.current)return;const we=xe();if(!we){P("no-route");return}we.matrix.fromArray(Ge),we.matrix.decompose(we.position,we.quaternion,we.scale),ct.add(we),le.current=we,Ce.current=!0,P("anchored")};Se.addEventListener("select",()=>{z.visible&&Te(z.matrix.elements)}),Se.addEventListener("end",Ne),Ye.setAnimationLoop((Ge,we)=>{if(le.current&&le.current.traverse(Ze=>vw(Ze,Ge)),we&&!Ce.current){const Ze=we.getHitTestResults(ne);if(Ze.length){const Je=Ze[0].getPose(se);Je&&(z.visible=!0,z.matrix.fromArray(Je.transform.matrix))}else z.visible=!1}else z.visible=!1;Ye.render(ct,w)})}catch(Ue){console.warn("Unable to start WebXR AR mode.",Ue),Ne(),P("failed")}}},Xe=()=>{const j=window.cv,Ue=W.current,Se=oe.current,Ye=Se.getContext("2d"),ct=be.current.matcher;let w=0,z=null,se=null,K=0,ne=0;const Te=()=>{if(!Ue||!Ue.srcObject)return;Ye.drawImage(Ue,0,0,Se.width,Se.height);let Ge=!1;if(w%4===0){try{const Je=j.imread(Se),Ie=new j.Mat;j.cvtColor(Je,Ie,j.COLOR_RGBA2GRAY);const rt=new j.KeyPointVector,Qe=new j.Mat;if(ue.current[0].orb.detectAndCompute(Ie,new j.Mat,rt,Qe),!Qe.empty())for(let wt of ue.current){const Ft=new j.DMatchVector;ct.match(wt.des,Qe,Ft);let $t=[];for(let E=0;E<Ft.size();E++)$t.push(Ft.get(E));$t.sort((E,L)=>E.distance-L.distance);const zt=$t.filter(E=>E.distance<=50).slice(0,60);if(zt.length>=12){const E=[],L=[];for(let st of zt)E.push(wt.kp.get(st.queryIdx).pt.x,wt.kp.get(st.queryIdx).pt.y),L.push(rt.get(st.trainIdx).pt.x,rt.get(st.trainIdx).pt.y);const O=j.matFromArray(E.length/2,1,j.CV_32FC2,E),Z=j.matFromArray(L.length/2,1,j.CV_32FC2,L),Ae=new j.Mat,De=j.findHomography(O,Z,j.RANSAC,4,Ae);let ve=0;for(let st=0;st<Ae.rows;st++)Ae.data[st]===1&&ve++;!De.empty()&&ve>=10&&(z&&z.delete(),z=De.clone(),se=wt.markerId,h(se),Ge=!0),O.delete(),Z.delete(),Ae.delete(),De.delete()}if(Ft.delete(),Ge)break}Je.delete(),Ie.delete(),rt.delete(),Qe.delete()}catch{}Ge?(ne=8,K=Date.now()):ne>0?ne--:(z&&(z.delete(),z=null),se=null)}w++,!K&&!Ut.current&&(z&&(z.delete(),z=null),se=null);const we=yt.current,Ze=Mt.current;if(z&&se&&Ze.length>1){const Je=we.nodes[se],Ie=ue.current.find(rt=>rt.markerId===se);if(Je&&Ie){const rt=Ie.width/.3,Qe=[],wt=[],Ft=Ze.indexOf(se),$t=Ft>=0?Ft:0,zt=hw(we.nodes[Ze[$t]],we.nodes[Ze[$t+1]]);for(let E=0;E<Ze.length;E++){const L=Ze[E],O=we.nodes[L];if(!O||O.fId!==Je.fId)break;const Z=O.physX-Je.physX,Ae=-(O.physY-Je.physY),De=Ie.width/2+Z*rt,ve=Ie.height/2+Ae*rt,st=z.data64F,pt=st[6]*De+st[7]*ve+st[8];if(pt>0){const et=(st[0]*De+st[1]*ve+st[2])/pt,Vt=(st[3]*De+st[4]*ve+st[5])/pt;Qe.push({x:et,y:Vt}),wt.push({x:et,y:Vt,nodeId:L})}}if(Qe.length>=2){const E=Ut.current,L=Qe.map(et=>({x:et.x/Se.width,y:et.y/Se.height})),O=L[0],Z=wt[wt.length-1],Ae=wt.find(et=>et.nodeId===l),De=[];Z&&De.push({x:Z.x,y:Z.y,type:Ae?"destination":"endpoint",label:Ae?"目的地":"路段末端"}),Ae&&Ae!==Z&&De.push({x:Ae.x,y:Ae.y,type:"destination",label:"目的地"}),Le.current==null&&bt.current.heading!=null&&(Le.current=bt.current.heading);const ve=O0(E==null?void 0:E.points,L,E?.45:1);ve.length>0&&(ve[0]=O);const st=De.map(et=>({x:et.x/Se.width,y:et.y/Se.height,type:et.type,label:et.label})),pt={markerId:se,orientation:{...bt.current},baseHeading:Le.current,targetBearing:zt,updatedAt:Date.now(),anchor:O,points:ve,pins:O0(E==null?void 0:E.pins,st,E?.45:1)};Ut.current={...pt},ze(Ye),Pt({arrowElementFound:!0,targetBearing:zt,baseHeading:Le.current,currentARMode:"camera-overlay"}),Gt("locked")}}}else{const Je=Ze.length>1&&ze(Ye);if(Gt(Je?"holding":"searching"),!Je){const Ie=Math.min(Se.width,Se.height)*.6;Ye.strokeStyle="rgba(0, 255, 204, 0.4)",Ye.lineWidth=2,Ye.strokeRect((Se.width-Ie)/2,(Se.height-Ie)/2,Ie,Ie)}}ee.current=requestAnimationFrame(Te)};Te()};if(!l){const j=Object.values(Rt.nodes).filter(Ue=>Ue.isMarker).reduce((Ue,Se)=>{const Ye=`${Se.bName} - ${Se.fName}`;return Ue[Ye]||(Ue[Ye]=[]),Ue[Ye].push(Se),Ue},{});return m.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[m.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:m.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:m.jsx(uo,{className:"w-5 h-5"})})}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[m.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[m.jsx(co,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(j).length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[m.jsx(ha,{className:"w-16 h-16 text-slate-700 mb-4"}),m.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),m.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",m.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(j).map(([Ue,Se])=>m.jsxs("div",{className:"mb-6",children:[m.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:Ue}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Se.map(Ye=>m.jsxs("button",{onClick:()=>u(Ye.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[m.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:Ye.code}),m.jsx("div",{className:"flex-1",children:m.jsx("div",{className:"text-white font-bold",children:Ye.title})})]},Ye.id))})]},Ue))]})]})}const Fe=Rt.nodes[l],Ke=f?Rt.nodes[f]:null,Ve=p.length>1?p[1]:null;Ve&&Rt.nodes[Ve];const Nt=j=>{if(!j)return"";if(j.fName)return j.fName;for(const Ue of s){const Se=Ue.floors.find(Ye=>Ye.id===j.fId);if(Se!=null&&Se.name)return Se.name}return j.fId||""},Y=p.map(j=>Rt.nodes[j]).filter(Boolean),He=mw(Y),me=[];Y.forEach(j=>{const Ue=me[me.length-1];!Ue||Ue.floorId!==j.fId?me.push({floorId:j.fId,floorName:Nt(j),nodes:[j]}):Ue.nodes.push(j)});const ot=Ke||Fe?{floorId:(Ke||Fe).fId,floorName:Nt(Ke||Fe),nodes:[Ke||Fe]}:null,Oe=me.length?Math.min(k,me.length-1):0,_e=me[Oe]||ot,lt=me[Oe-1]||null,St=me[Oe+1]||null,Xt=(qi=_e==null?void 0:_e.nodes)==null?void 0:qi[_e.nodes.length-1];(ur=_e==null?void 0:_e.nodes)==null||ur[0];const Yt=St?Xn(St.floorName)-Xn(_e.floorName):0,wn=Yt>0?"上樓":Yt<0?"下樓":"前往",Ln=lt?Xn(_e.floorName)-Xn(lt.floorName):0,hi=Ln>0?"上樓":Ln<0?"下樓":"前往",Mi=f===l?"已抵達目的地":St?`請依照 ${_e.floorName} 平面圖前往轉乘點，接著${wn}至 ${St.floorName}`:_e?`請依照 ${_e.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",Li=!!(St||lt);let kn=_e?_e.floorId:Ke?Ke.fId:Fe.fId,$n=null,Ui=_e?_e.floorName:Ke?Ke.fName:Fe.fName,qn={blX:0,blY:0,trX:100,trY:100};s.forEach(j=>j.floors.forEach(Ue=>{Ue.id===kn&&($n=Ue.imageUrl,qn=Jr(Ue),Ui=Ue.name)}));const gn=(j,Ue)=>{const Se=qn.trX-qn.blX,Ye=qn.trY-qn.blY,ct=Se!==0?(j-qn.blX)/Se*100:50,w=Ye!==0?(qn.trY-Ue)/Ye*100:50;return{x:ct,y:w}},Kn=(_e==null?void 0:_e.nodes)||[],Fi=Kn.filter(j=>j&&j.fId===kn).map(j=>gn(j.physX,j.physY)),Oi=U0(Fi),ni=Ke&&Ke.fId===kn?Ke:Fi.length?null:Fe,ii=Oi>0?L0(Fi,H*Oi):ni?gn(ni.physX,ni.physY):null;return m.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-4 left-4 z-40",children:m.jsx("button",{onClick:()=>{b(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),m.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[m.jsx("div",{ref:he,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),m.jsx("video",{ref:W,playsInline:!0,muted:!0,className:"hidden"}),m.jsx("canvas",{ref:oe,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&m.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[D==="locked"&&"AR 路徑已鎖定",D==="holding"&&"陀螺儀空間錨點",D==="searching"&&"請重新對準導引圖",D==="idle"&&"準備定位"]}),r==="scanning"&&!G&&m.jsxs("div",{className:"absolute left-4 right-4 top-16 z-40 rounded-2xl border border-yellow-400/40 bg-slate-950/88 p-4 text-sm leading-relaxed text-yellow-50 shadow-xl backdrop-blur-md md:left-auto md:max-w-sm",children:[m.jsx("div",{className:"mb-1 font-bold text-yellow-200",children:"需要開啟動作與方向"}),m.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"若沒有啟用，AR 箭頭無法隨手機轉向套疊在實景中。"}),re&&m.jsx("div",{className:"mt-2 text-xs text-yellow-100/90",children:re})]}),r==="scanning"&&$()&&m.jsxs("div",{className:"absolute right-4 top-16 z-40 max-w-[260px] rounded-xl border border-slate-600 bg-slate-950/85 p-3 text-[10px] leading-relaxed text-slate-200 shadow-xl backdrop-blur-md",children:[m.jsx("div",{className:"mb-1 font-bold text-cyan-300",children:"AR Debug"}),[["secure",String(N.isSecureContext)],["permission",`${N.orientationPermission||"-"} / ${N.motionPermission||"-"}`],["alpha",N.alpha==null?"-":Math.round(N.alpha)],["webkit",N.webkitCompassHeading==null?"-":Math.round(N.webkitCompassHeading)],["heading",N.currentHeading==null?"-":Math.round(N.currentHeading)],["base",N.baseHeading==null?"-":Math.round(N.baseHeading)],["relative",N.relativeHeading==null?"-":Math.round(N.relativeHeading)],["target",N.targetBearing==null?"-":Math.round(N.targetBearing)],["rotate",N.arrowRotation==null?"-":Math.round(N.arrowRotation)],["mode",N.currentARMode||"-"],["updated",N.lastUpdateTime||"-"]].map(([j,Ue])=>m.jsxs("div",{className:"flex justify-between gap-3 border-t border-white/5 py-0.5",children:[m.jsx("span",{className:"text-slate-400",children:j}),m.jsx("span",{className:"font-mono text-white",children:Ue})]},j))]}),r==="scanning"&&$n&&m.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[m.jsxs("div",{className:"relative w-full h-full",children:[m.jsx("img",{src:$n,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),m.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:Li?`自動切換至 ${Ui}`:`目前平面圖 ${Ui}`}),m.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[m.jsx("defs",{children:m.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:m.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),Kn.map((j,Ue)=>{if(Ue===Kn.length-1)return null;const Se=Kn[Ue+1];if(j.fId===kn&&Se.fId===kn){const Ye=gn(j.physX,j.physY),ct=gn(Se.physX,Se.physY);return m.jsx("line",{x1:`${Ye.x}%`,y1:`${Ye.y}%`,x2:`${ct.x}%`,y2:`${ct.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},Ue)}return null})]}),ii&&m.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${ii.x}%`,top:`${ii.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${ii.angle||0}rad)`,willChange:"transform"},children:m.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[m.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),m.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(ii.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),St&&Xt&&Xt.fId===kn&&m.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${gn(Xt.physX,Xt.physY).x}%`,top:`${gn(Xt.physX,Xt.physY).y}%`,transform:"translate(-50%, -140%)"},children:m.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:Yt>=0?m.jsx(Cg,{className:"h-8 w-8 stroke-[3.5]"}):m.jsx(bg,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,Fe&&Fe.fId===kn&&m.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${gn(Fe.physX,Fe.physY).x}%`,top:`${gn(Fe.physX,Fe.physY).y}%`,transform:"translate(-50%, -50%)"},children:m.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[m.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),m.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),m.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?m.jsx(Pg,{className:"w-4 h-4"}):m.jsx(Ng,{className:"w-4 h-4"})}),m.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",Ke?Ke.fName:Fe.fName," ",G?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&m.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[m.jsx(cw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),m.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),m.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),m.jsxs("div",{className:"space-y-3",children:[!G&&m.jsxs("div",{className:"rounded-2xl border border-yellow-400/35 bg-yellow-400/10 p-4 text-left text-sm leading-relaxed text-yellow-50",children:[m.jsx("div",{className:"mb-2 font-bold text-yellow-200",children:"請開啟「動作與方向」權限"}),m.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"AR 箭頭需要手機羅盤資料才能隨轉向正確套疊。iPhone 請用 Safari 開啟，並允許動作與方向存取。"}),re&&m.jsx("div",{className:"mt-3 text-xs text-yellow-100/90",children:re})]}),m.jsx("button",{onClick:nt,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),m.jsx("button",{onClick:F,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"開啟動作與方向及相機"})]}),_==="unsupported"&&m.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&m.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",m.jsx("button",{onClick:Ee,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),m.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${Ke?"translate-y-0":"translate-y-full"}`,children:m.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),m.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[m.jsx("button",{onClick:()=>T(j=>Math.max(0,j-1)),disabled:!lt,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:m.jsx(Tg,{className:"h-5 w-5"})}),m.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[m.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[m.jsxs("span",{children:[(_e==null?void 0:_e.floorName)||Nt(Ke||Fe)," ","平面圖"]}),me.length>1&&m.jsxs("span",{children:[Oe+1," / ",me.length]})]}),m.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":St?"text-purple-300":"text-yellow-300"}`,children:Mi}),He>0&&m.jsxs("div",{className:"mt-2 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold text-cyan-100",children:["預估路徑長度：",He<100?He.toFixed(1):Math.round(He)," m"]}),lt&&m.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",lt.floorName,"；本張是",hi,"後的導引段。"]})]}),m.jsx("button",{onClick:()=>T(j=>Math.min(me.length-1,j+1)),disabled:!St,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:m.jsx(Ag,{className:"h-5 w-5"})})]})]})}),m.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const lc=document.getElementById("ar-root");if(!lc)throw new Error("Missing #ar-root element.");const Ig=new URLSearchParams(window.location.search),Mw=window.location.pathname.endsWith("/admin-ar.html"),Dg=lc.dataset.embedded==="true"||Ig.get("embedded")==="1",B0=Mw||Dg;_v.createRoot(lc).render(m.jsx(Cf.StrictMode,{children:m.jsx(yw,{embedded:Dg,initialTab:B0?lc.dataset.initialTab||Ig.get("tab")||"map":"frontend",publicOnly:!B0})}));
