function iv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},Za={},zu={exports:{}},Zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function rv(){if(cm)return Zt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=S&&B[S]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,D={};function y(B,re,Ke){this.props=B,this.context=re,this.refs=D,this.updater=Ke||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(B,re,Ke){this.props=B,this.context=re,this.refs=D,this.updater=Ke||M}var R=L.prototype=new _;R.constructor=L,A(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(B,re,Ke){var et,Te={},ce=null,Ee=null;if(re!=null)for(et in re.ref!==void 0&&(Ee=re.ref),re.key!==void 0&&(ce=""+re.key),re)V.call(re,et)&&!O.hasOwnProperty(et)&&(Te[et]=re[et]);var ve=arguments.length-2;if(ve===1)Te.children=Ke;else if(1<ve){for(var Le=Array(ve),tt=0;tt<ve;tt++)Le[tt]=arguments[tt+2];Te.children=Le}if(B&&B.defaultProps)for(et in ve=B.defaultProps,ve)Te[et]===void 0&&(Te[et]=ve[et]);return{$$typeof:s,type:B,key:ce,ref:Ee,props:Te,_owner:I.current}}function U(B,re){return{$$typeof:s,type:B.type,key:re,ref:B.ref,props:B.props,_owner:B._owner}}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function z(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ke){return re[Ke]})}var K=/\/+/g;function ee(B,re){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):re.toString(36)}function pe(B,re,Ke,et,Te){var ce=typeof B;(ce==="undefined"||ce==="boolean")&&(B=null);var Ee=!1;if(B===null)Ee=!0;else switch(ce){case"string":case"number":Ee=!0;break;case"object":switch(B.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=B,Te=Te(Ee),B=et===""?"."+ee(Ee,0):et,N(Te)?(Ke="",B!=null&&(Ke=B.replace(K,"$&/")+"/"),pe(Te,re,Ke,"",function(tt){return tt})):Te!=null&&(G(Te)&&(Te=U(Te,Ke+(!Te.key||Ee&&Ee.key===Te.key?"":(""+Te.key).replace(K,"$&/")+"/")+B)),re.push(Te)),1;if(Ee=0,et=et===""?".":et+":",N(B))for(var ve=0;ve<B.length;ve++){ce=B[ve];var Le=et+ee(ce,ve);Ee+=pe(ce,re,Ke,Le,Te)}else if(Le=x(B),typeof Le=="function")for(B=Le.call(B),ve=0;!(ce=B.next()).done;)ce=ce.value,Le=et+ee(ce,ve++),Ee+=pe(ce,re,Ke,Le,Te);else if(ce==="object")throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Ee}function j(B,re,Ke){if(B==null)return B;var et=[],Te=0;return pe(B,et,"","",function(ce){return re.call(Ke,ce,Te++)}),et}function ie(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(Ke){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ke)},function(Ke){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ke)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var q={current:null},Z={transition:null},me={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Z,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Zt.Children={map:j,forEach:function(B,re,Ke){j(B,function(){re.apply(this,arguments)},Ke)},count:function(B){var re=0;return j(B,function(){re++}),re},toArray:function(B){return j(B,function(re){return re})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Zt.Component=y,Zt.Fragment=t,Zt.Profiler=o,Zt.PureComponent=L,Zt.StrictMode=r,Zt.Suspense=h,Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Zt.act=oe,Zt.cloneElement=function(B,re,Ke){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var et=A({},B.props),Te=B.key,ce=B.ref,Ee=B._owner;if(re!=null){if(re.ref!==void 0&&(ce=re.ref,Ee=I.current),re.key!==void 0&&(Te=""+re.key),B.type&&B.type.defaultProps)var ve=B.type.defaultProps;for(Le in re)V.call(re,Le)&&!O.hasOwnProperty(Le)&&(et[Le]=re[Le]===void 0&&ve!==void 0?ve[Le]:re[Le])}var Le=arguments.length-2;if(Le===1)et.children=Ke;else if(1<Le){ve=Array(Le);for(var tt=0;tt<Le;tt++)ve[tt]=arguments[tt+2];et.children=ve}return{$$typeof:s,type:B.type,key:Te,ref:ce,props:et,_owner:Ee}},Zt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},Zt.createElement=w,Zt.createFactory=function(B){var re=w.bind(null,B);return re.type=B,re},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(B){return{$$typeof:f,render:B}},Zt.isValidElement=G,Zt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:ie}},Zt.memo=function(B,re){return{$$typeof:p,type:B,compare:re===void 0?null:re}},Zt.startTransition=function(B){var re=Z.transition;Z.transition={};try{B()}finally{Z.transition=re}},Zt.unstable_act=oe,Zt.useCallback=function(B,re){return q.current.useCallback(B,re)},Zt.useContext=function(B){return q.current.useContext(B)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(B){return q.current.useDeferredValue(B)},Zt.useEffect=function(B,re){return q.current.useEffect(B,re)},Zt.useId=function(){return q.current.useId()},Zt.useImperativeHandle=function(B,re,Ke){return q.current.useImperativeHandle(B,re,Ke)},Zt.useInsertionEffect=function(B,re){return q.current.useInsertionEffect(B,re)},Zt.useLayoutEffect=function(B,re){return q.current.useLayoutEffect(B,re)},Zt.useMemo=function(B,re){return q.current.useMemo(B,re)},Zt.useReducer=function(B,re,Ke){return q.current.useReducer(B,re,Ke)},Zt.useRef=function(B){return q.current.useRef(B)},Zt.useState=function(B){return q.current.useState(B)},Zt.useSyncExternalStore=function(B,re,Ke){return q.current.useSyncExternalStore(B,re,Ke)},Zt.useTransition=function(){return q.current.useTransition()},Zt.version="18.3.1",Zt}var um;function Ef(){return um||(um=1,zu.exports=rv()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function sv(){if(dm)return Za;dm=1;var s=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var fm;function av(){return fm||(fm=1,Bu.exports=sv()),Bu.exports}var g=av(),Re=Ef();const wf=iv(Re);var xl={},Vu={exports:{}},pi={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function ov(){return hm||(hm=1,(function(s){function e(Z,me){var oe=Z.length;Z.push(me);e:for(;0<oe;){var B=oe-1>>>1,re=Z[B];if(0<o(re,me))Z[B]=me,Z[oe]=re,oe=B;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var me=Z[0],oe=Z.pop();if(oe!==me){Z[0]=oe;e:for(var B=0,re=Z.length,Ke=re>>>1;B<Ke;){var et=2*(B+1)-1,Te=Z[et],ce=et+1,Ee=Z[ce];if(0>o(Te,oe))ce<re&&0>o(Ee,Te)?(Z[B]=Ee,Z[ce]=oe,B=ce):(Z[B]=Te,Z[et]=oe,B=et);else if(ce<re&&0>o(Ee,oe))Z[B]=Ee,Z[ce]=oe,B=ce;else break e}}return me}function o(Z,me){var oe=Z.sortIndex-me.sortIndex;return oe!==0?oe:Z.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,A=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Z){for(var me=t(p);me!==null;){if(me.callback===null)r(p);else if(me.startTime<=Z)r(p),me.sortIndex=me.expirationTime,e(h,me);else break;me=t(p)}}function N(Z){if(D=!1,R(Z),!A)if(t(h)!==null)A=!0,ie(V);else{var me=t(p);me!==null&&q(N,me.startTime-Z)}}function V(Z,me){A=!1,D&&(D=!1,_(w),w=-1),M=!0;var oe=x;try{for(R(me),S=t(h);S!==null&&(!(S.expirationTime>me)||Z&&!z());){var B=S.callback;if(typeof B=="function"){S.callback=null,x=S.priorityLevel;var re=B(S.expirationTime<=me);me=s.unstable_now(),typeof re=="function"?S.callback=re:S===t(h)&&r(h),R(me)}else r(h);S=t(h)}if(S!==null)var Ke=!0;else{var et=t(p);et!==null&&q(N,et.startTime-me),Ke=!1}return Ke}finally{S=null,x=oe,M=!1}}var I=!1,O=null,w=-1,U=5,G=-1;function z(){return!(s.unstable_now()-G<U)}function K(){if(O!==null){var Z=s.unstable_now();G=Z;var me=!0;try{me=O(!0,Z)}finally{me?ee():(I=!1,O=null)}}else I=!1}var ee;if(typeof L=="function")ee=function(){L(K)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,j=pe.port2;pe.port1.onmessage=K,ee=function(){j.postMessage(null)}}else ee=function(){y(K,0)};function ie(Z){O=Z,I||(I=!0,ee())}function q(Z,me){w=y(function(){Z(s.unstable_now())},me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,ie(V))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var me=3;break;default:me=x}var oe=x;x=me;try{return Z()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var oe=x;x=Z;try{return me()}finally{x=oe}},s.unstable_scheduleCallback=function(Z,me,oe){var B=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?B+oe:B):oe=B,Z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,Z={id:v++,callback:me,priorityLevel:Z,startTime:oe,expirationTime:re,sortIndex:-1},oe>B?(Z.sortIndex=oe,e(p,Z),t(h)===null&&Z===t(p)&&(D?(_(w),w=-1):D=!0,q(N,oe-B))):(Z.sortIndex=re,e(h,Z),A||M||(A=!0,ie(V))),Z},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(Z){var me=x;return function(){var oe=x;x=me;try{return Z.apply(this,arguments)}finally{x=oe}}}})(Gu)),Gu}var pm;function lv(){return pm||(pm=1,Hu.exports=ov()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function cv(){if(mm)return pi;mm=1;var s=Ef(),e=lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function D(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new D(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new D(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new D(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new D(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new D(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new D(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new D(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new D(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new D(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),z=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Z=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,B;function re(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var Ke=!1;function et(n,i){if(!n||Ke)return"";Ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(xe){var c=xe}Reflect.construct(n,[],i)}else{try{i.call()}catch(xe){c=xe}n.call(i.prototype)}else{try{throw Error()}catch(xe){c=xe}n()}}catch(xe){if(xe&&c&&typeof xe.stack=="string"){for(var d=xe.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,k=m.length-1;1<=T&&0<=k&&d[T]!==m[k];)k--;for(;1<=T&&0<=k;T--,k--)if(d[T]!==m[k]){if(T!==1||k!==1)do if(T--,k--,0>k||d[T]!==m[k]){var X=`
`+d[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=k);break}}}finally{Ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function Te(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=et(n.type,!1),n;case 11:return n=et(n.type.render,!1),n;case 1:return n=et(n.type,!0),n;default:return""}}function ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case U:return"Profiler";case w:return"StrictMode";case ee:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lt(n){n._valueTracker||(n._valueTracker=tt(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Rt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Gt(n,i){Rt(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Jt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Jt(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function jt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Jt(n,i,a){(i!=="number"||_t(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Y=Array.isArray;function kt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function St(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Y(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function Ye(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Wt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var te,Se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ue[i]=Ue[n]})});function de(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ue.hasOwnProperty(n)&&Ue[n]?(""+i).trim():i+"px"}function ye(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=de(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var we=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(we[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ie(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wt=null,Dt=null,W=null;function Ce(n){if(n=Fa(n)){if(typeof wt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),wt(n.stateNode,n.type,i))}}function _e(n){Dt?W?W.push(n):W=[n]:Dt=n}function We(){if(Dt){var n=Dt,i=W;if(W=Dt=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Oe(n,i){return n(i)}function be(){}var rt=!1;function Et(n,i,a){if(rt)return n(i,a);rt=!0;try{return Oe(n,i,a)}finally{rt=!1,(Dt!==null||W!==null)&&(be(),We())}}function ln(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Kt=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Kt=!1}function jn(n,i,a,c,d,m,T,k,X){var xe=Array.prototype.slice.call(arguments,3);try{i.apply(a,xe)}catch(De){this.onError(De)}}var $n=!1,ge=null,qe=!1,je=null,Ze={onError:function(n){$n=!0,ge=n}};function dt(n,i,a,c,d,m,T,k,X){$n=!1,ge=null,jn.apply(Ze,arguments)}function Ot(n,i,a,c,d,m,T,k,X){if(dt.apply(this,arguments),$n){if($n){var xe=ge;$n=!1,ge=null}else throw Error(t(198));qe||(qe=!0,je=xe)}}function xt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Lt(n){if(xt(n)!==n)throw Error(t(188))}function sn(n){var i=n.alternate;if(!i){if(i=xt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Lt(d),n;if(m===c)return Lt(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,k=d.child;k;){if(k===a){T=!0,a=d,c=m;break}if(k===c){T=!0,c=d,a=m;break}k=k.sibling}if(!T){for(k=m.child;k;){if(k===a){T=!0,a=m,c=d;break}if(k===c){T=!0,c=m,a=d;break}k=k.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function dn(n){return n=sn(n),n!==null?hn(n):null}function hn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=hn(n);if(i!==null)return i;n=n.sibling}return null}var Qt=e.unstable_scheduleCallback,vn=e.unstable_cancelCallback,cn=e.unstable_shouldYield,He=e.unstable_requestPaint,ot=e.unstable_now,pn=e.unstable_getCurrentPriorityLevel,mn=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ne=e.unstable_IdlePriority,se=null,ze=null;function Je(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:yt,st=Math.log,ct=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(st(n)/ct|0)|0}var Ut=64,ft=4194304;function b(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function H(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var k=T&~d;k!==0?c=b(k):(m&=T,m!==0&&(c=b(m)))}else T=a&~d,T!==0?c=b(T):m!==0&&(c=b(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ke(i),d=1<<a,c|=n[a],i&=~d;return c}function F(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ae(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-ke(m),k=1<<T,X=d[T];X===-1?((k&a)===0||(k&c)!==0)&&(d[T]=F(k,i)):X<=i&&(n.expiredLanes|=k),m&=~k}}function Ne(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function he(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function Ve(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Qe(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ke(i),n[i]=a}function en(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ke(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function bt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ke(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var pt=0;function Bt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Tt,zt,Mn,Nt,Un,it=!1,Vt=[],An=null,li=null,Fi=null,Rr=new Map,fn=new Map,$i=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&zt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Tg(n,i,a,c,d){switch(i){case"focusin":return An=Ma(An,n,i,a,c,d),!0;case"dragenter":return li=Ma(li,n,i,a,c,d),!0;case"mouseover":return Fi=Ma(Fi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Rr.set(m,Ma(Rr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fn.set(m,Ma(fn.get(m)||null,n,i,a,c,d)),!0}return!1}function Yf(n){var i=ns(n.target);if(i!==null){var a=xt(i);if(a!==null){if(i=a.tag,i===13){if(i=Yt(a),i!==null){n.blockedOn=i,Un(n.priority,function(){Mn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ae=c,a.target.dispatchEvent(c),Ae=null}else return i=Fa(a),i!==null&&zt(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){vo(n)&&a.delete(i)}function Ag(){it=!1,An!==null&&vo(An)&&(An=null),li!==null&&vo(li)&&(li=null),Fi!==null&&vo(Fi)&&(Fi=null),Rr.forEach($f),fn.forEach($f)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,it||(it=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ag)))}function wa(n){function i(d){return Ea(d,n)}if(0<Vt.length){Ea(Vt[0],n);for(var a=1;a<Vt.length;a++){var c=Vt[a];c.blockedOn===n&&(c.blockedOn=null)}}for(An!==null&&Ea(An,n),li!==null&&Ea(li,n),Fi!==null&&Ea(Fi,n),Rr.forEach(i),fn.forEach(i),a=0;a<$i.length;a++)c=$i[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$i.length&&(a=$i[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&$i.shift()}var Ns=N.ReactCurrentBatchConfig,_o=!0;function Cg(n,i,a,c){var d=pt,m=Ns.transition;Ns.transition=null;try{pt=1,dc(n,i,a,c)}finally{pt=d,Ns.transition=m}}function Rg(n,i,a,c){var d=pt,m=Ns.transition;Ns.transition=null;try{pt=4,dc(n,i,a,c)}finally{pt=d,Ns.transition=m}}function dc(n,i,a,c){if(_o){var d=fc(n,i,a,c);if(d===null)Rc(n,i,c,yo,a),Xf(n,c);else if(Tg(d,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<bg.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&Tt(m),m=fc(n,i,a,c),m===null&&Rc(n,i,c,yo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var yo=null;function fc(n,i,a,c){if(yo=null,n=Ie(c),n=ns(n),n!==null)if(i=xt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pn()){case mn:return 1;case C:return 4;case $:case ue:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Nr=null,hc=null,So=null;function Kf(){if(So)return So;var n,i=hc,a=i.length,c,d="value"in Nr?Nr.value:Nr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return So=d.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Eo(){return!0}function Zf(){return!1}function xi(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Eo:Zf,this.isPropagationStopped=Zf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=xi(Ps),ba=oe({},Ps,{view:0,detail:0}),Ng=xi(ba),mc,gc,Ta,wo=oe({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(mc=n.screenX-Ta.screenX,gc=n.screenY-Ta.screenY):gc=mc=0,Ta=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Jf=xi(wo),Pg=oe({},wo,{dataTransfer:0}),Ig=xi(Pg),Dg=oe({},ba,{relatedTarget:0}),xc=xi(Dg),Lg=oe({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=xi(Lg),Fg=oe({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Og=xi(Fg),kg=oe({},Ps,{data:0}),Qf=xi(kg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vg[n])?!!i[n]:!1}function vc(){return Hg}var Gg=oe({},ba,{key:function(n){if(n.key){var i=Bg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jg=xi(Gg),Wg=oe({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=xi(Wg),Xg=oe({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Yg=xi(Xg),$g=oe({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),qg=xi($g),Kg=oe({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=xi(Kg),Jg=[9,13,27,32],_c=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var Qg=f&&"TextEvent"in window&&!Aa,th=f&&(!_c||Aa&&8<Aa&&11>=Aa),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function ex(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function tx(n,i){if(Is)return n==="compositionend"||!_c&&rh(n,i)?(n=Kf(),So=hc=Nr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!nx[n.type]:i==="textarea"}function oh(n,i,a,c){_e(c),i=Ro(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Ra=null;function ix(n){bh(n,0)}function bo(n){var i=Os(n);if(gt(i))return n}function rx(n,i){if(n==="change")return i}var lh=!1;if(f){var yc;if(f){var Sc="oninput"in document;if(!Sc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Sc=typeof ch.oninput=="function"}yc=Sc}else yc=!1;lh=yc&&(!document.documentMode||9<document.documentMode)}function uh(){Ca&&(Ca.detachEvent("onpropertychange",dh),Ra=Ca=null)}function dh(n){if(n.propertyName==="value"&&bo(Ra)){var i=[];oh(i,Ra,n,Ie(n)),Et(ix,i)}}function sx(n,i,a){n==="focusin"?(uh(),Ca=i,Ra=a,Ca.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function ax(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ra)}function ox(n,i){if(n==="click")return bo(i)}function lx(n,i){if(n==="input"||n==="change")return bo(i)}function cx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Oi=typeof Object.is=="function"?Object.is:cx;function Na(n,i){if(Oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Oi(n[d],i[d]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=_t(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ux(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=hh(a,m);var T=hh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ec=null,Pa=null,wc=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Ds==null||Ds!==_t(c)||(c=Ds,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=Ro(Ec,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ao(n){if(bc[n])return bc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return bc[n]=i[a];return n}var vh=Ao("animationend"),_h=Ao("animationiteration"),yh=Ao("animationstart"),Sh=Ao("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){Mh.set(n,i),l(i,[n])}for(var Tc=0;Tc<Eh.length;Tc++){var Ac=Eh[Tc],fx=Ac.toLowerCase(),hx=Ac[0].toUpperCase()+Ac.slice(1);Pr(fx,"on"+hx)}Pr(vh,"onAnimationEnd"),Pr(_h,"onAnimationIteration"),Pr(yh,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function wh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ot(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],X=k.instance,xe=k.currentTarget;if(k=k.listener,X!==m&&d.isPropagationStopped())break e;wh(d,k,xe),m=X}else for(T=0;T<c.length;T++){if(k=c[T],X=k.instance,xe=k.currentTarget,k=k.listener,X!==m&&d.isPropagationStopped())break e;wh(d,k,xe),m=X}}}if(qe)throw n=je,qe=!1,je=null,n}function yn(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(px.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Cc("selectionchange",!1,i))}}function Th(n,i,a,c){switch(qf(i)){case 1:var d=Cg;break;case 4:d=Rg;break;default:d=dc}a=d.bind(null,i,a,n),d=void 0,!Kt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===d||X.nodeType===8&&X.parentNode===d))return;T=T.return}for(;k!==null;){if(T=ns(k),T===null)return;if(X=T.tag,X===5||X===6){c=m=T;continue e}k=k.parentNode}}c=c.return}Et(function(){var xe=m,De=Ie(a),Be=[];e:{var Pe=Mh.get(n);if(Pe!==void 0){var at=pc,ht=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":at=jg;break;case"focusin":ht="focus",at=xc;break;case"focusout":ht="blur",at=xc;break;case"beforeblur":case"afterblur":at=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Yg;break;case vh:case _h:case yh:at=Ug;break;case Sh:at=qg;break;case"scroll":at=Ng;break;case"wheel":at=Zg;break;case"copy":case"cut":case"paste":at=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=eh}var mt=(i&4)!==0,Rn=!mt&&n==="scroll",le=mt?Pe!==null?Pe+"Capture":null:Pe;mt=[];for(var J=xe,fe;J!==null;){fe=J;var Xe=fe.stateNode;if(fe.tag===5&&Xe!==null&&(fe=Xe,le!==null&&(Xe=ln(J,le),Xe!=null&&mt.push(La(J,Xe,fe)))),Rn)break;J=J.return}0<mt.length&&(Pe=new at(Pe,ht,null,a,De),Be.push({event:Pe,listeners:mt}))}}if((i&7)===0){e:{if(Pe=n==="mouseover"||n==="pointerover",at=n==="mouseout"||n==="pointerout",Pe&&a!==Ae&&(ht=a.relatedTarget||a.fromElement)&&(ns(ht)||ht[cr]))break e;if((at||Pe)&&(Pe=De.window===De?De:(Pe=De.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,at?(ht=a.relatedTarget||a.toElement,at=xe,ht=ht?ns(ht):null,ht!==null&&(Rn=xt(ht),ht!==Rn||ht.tag!==5&&ht.tag!==6)&&(ht=null)):(at=null,ht=xe),at!==ht)){if(mt=Jf,Xe="onMouseLeave",le="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(mt=eh,Xe="onPointerLeave",le="onPointerEnter",J="pointer"),Rn=at==null?Pe:Os(at),fe=ht==null?Pe:Os(ht),Pe=new mt(Xe,J+"leave",at,a,De),Pe.target=Rn,Pe.relatedTarget=fe,Xe=null,ns(De)===xe&&(mt=new mt(le,J+"enter",ht,a,De),mt.target=fe,mt.relatedTarget=Rn,Xe=mt),Rn=Xe,at&&ht)t:{for(mt=at,le=ht,J=0,fe=mt;fe;fe=Us(fe))J++;for(fe=0,Xe=le;Xe;Xe=Us(Xe))fe++;for(;0<J-fe;)mt=Us(mt),J--;for(;0<fe-J;)le=Us(le),fe--;for(;J--;){if(mt===le||le!==null&&mt===le.alternate)break t;mt=Us(mt),le=Us(le)}mt=null}else mt=null;at!==null&&Ah(Be,Pe,at,mt,!1),ht!==null&&Rn!==null&&Ah(Be,Rn,ht,mt,!0)}}e:{if(Pe=xe?Os(xe):window,at=Pe.nodeName&&Pe.nodeName.toLowerCase(),at==="select"||at==="input"&&Pe.type==="file")var vt=rx;else if(ah(Pe))if(lh)vt=lx;else{vt=ax;var At=sx}else(at=Pe.nodeName)&&at.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(vt=ox);if(vt&&(vt=vt(n,xe))){oh(Be,vt,a,De);break e}At&&At(n,Pe,xe),n==="focusout"&&(At=Pe._wrapperState)&&At.controlled&&Pe.type==="number"&&Jt(Pe,"number",Pe.value)}switch(At=xe?Os(xe):window,n){case"focusin":(ah(At)||At.contentEditable==="true")&&(Ds=At,Ec=xe,Pa=null);break;case"focusout":Pa=Ec=Ds=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,gh(Be,a,De);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":gh(Be,a,De)}var Ct;if(_c)e:{switch(n){case"compositionstart":var Ft="onCompositionStart";break e;case"compositionend":Ft="onCompositionEnd";break e;case"compositionupdate":Ft="onCompositionUpdate";break e}Ft=void 0}else Is?rh(n,a)&&(Ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ft="onCompositionStart");Ft&&(th&&a.locale!=="ko"&&(Is||Ft!=="onCompositionStart"?Ft==="onCompositionEnd"&&Is&&(Ct=Kf()):(Nr=De,hc="value"in Nr?Nr.value:Nr.textContent,Is=!0)),At=Ro(xe,Ft),0<At.length&&(Ft=new Qf(Ft,n,null,a,De),Be.push({event:Ft,listeners:At}),Ct?Ft.data=Ct:(Ct=sh(a),Ct!==null&&(Ft.data=Ct)))),(Ct=Qg?ex(n,a):tx(n,a))&&(xe=Ro(xe,"onBeforeInput"),0<xe.length&&(De=new Qf("onBeforeInput","beforeinput",null,a,De),Be.push({event:De,listeners:xe}),De.data=Ct))}bh(Be,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ln(n,a),m!=null&&c.unshift(La(n,m,d)),m=ln(n,i),m!=null&&c.push(La(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var k=a,X=k.alternate,xe=k.stateNode;if(X!==null&&X===c)break;k.tag===5&&xe!==null&&(k=xe,d?(X=ln(a,m),X!=null&&T.unshift(La(a,X,k))):d||(X=ln(a,m),X!=null&&T.push(La(a,X,k)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(mx,`
`).replace(gx,"")}function No(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Po(){}var Nc=null,Pc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(_x)}:Dc;function _x(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),qi="__reactFiber$"+Fs,Ua="__reactProps$"+Fs,cr="__reactContainer$"+Fs,Uc="__reactEvents$"+Fs,yx="__reactListeners$"+Fs,Sx="__reactHandles$"+Fs;function ns(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[qi])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[qi]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ua]||null}var Fc=[],ks=-1;function Dr(n){return{current:n}}function Sn(n){0>ks||(n.current=Fc[ks],Fc[ks]=null,ks--)}function _n(n,i){ks++,Fc[ks]=n.current,n.current=i}var Lr={},qn=Dr(Lr),ci=Dr(!1),is=Lr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ui(n){return n=n.childContextTypes,n!=null}function Do(){Sn(ci),Sn(qn)}function Ph(n,i,a){if(qn.current!==Lr)throw Error(t(168));_n(qn,i),_n(ci,a)}function Ih(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ee(n)||"Unknown",d));return oe({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,is=qn.current,_n(qn,n),_n(ci,ci.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ih(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,Sn(ci),Sn(qn),_n(qn,n)):Sn(ci),_n(ci,a)}var ur=null,Uo=!1,Oc=!1;function Lh(n){ur===null?ur=[n]:ur.push(n)}function Mx(n){Uo=!0,Lh(n)}function Ur(){if(!Oc&&ur!==null){Oc=!0;var n=0,i=pt;try{var a=ur;for(pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,Uo=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),Qt(mn,Ur),d}finally{pt=i,Oc=!1}}return null}var zs=[],Vs=0,Fo=null,Oo=0,bi=[],Ti=0,rs=null,dr=1,fr="";function ss(n,i){zs[Vs++]=Oo,zs[Vs++]=Fo,Fo=n,Oo=i}function Uh(n,i,a){bi[Ti++]=dr,bi[Ti++]=fr,bi[Ti++]=rs,rs=n;var c=dr;n=fr;var d=32-ke(c)-1;c&=~(1<<d),a+=1;var m=32-ke(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,dr=1<<32-ke(i)+d|a<<d|c,fr=m+n}else dr=1<<m|a<<d|c,fr=n}function kc(n){n.return!==null&&(ss(n,1),Uh(n,1,0))}function Bc(n){for(;n===Fo;)Fo=zs[--Vs],zs[Vs]=null,Oo=zs[--Vs],zs[Vs]=null;for(;n===rs;)rs=bi[--Ti],bi[Ti]=null,fr=bi[--Ti],bi[Ti]=null,dr=bi[--Ti],bi[Ti]=null}var vi=null,_i=null,En=!1,ki=null;function Fh(n,i){var a=Ni(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Oh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,vi=n,_i=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,vi=n,_i=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ni(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,vi=n,_i=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(En){var i=_i;if(i){var a=i;if(!Oh(n,i)){if(zc(n))throw Error(t(418));i=Ir(a.nextSibling);var c=vi;i&&Oh(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,En=!1,vi=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,En=!1,vi=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vi=n}function ko(n){if(n!==vi)return!1;if(!En)return kh(n),En=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=_i)){if(zc(n))throw Bh(),Error(t(418));for(;i;)Fh(n,i),i=Ir(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){_i=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}_i=null}}else _i=vi?Ir(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=_i;n;)n=Ir(n.nextSibling)}function Hs(){_i=vi=null,En=!1}function Hc(n){ki===null?ki=[n]:ki.push(n)}var Ex=N.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var k=d.refs;T===null?delete k[m]:k[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(le,J){if(n){var fe=le.deletions;fe===null?(le.deletions=[J],le.flags|=16):fe.push(J)}}function a(le,J){if(!n)return null;for(;J!==null;)i(le,J),J=J.sibling;return null}function c(le,J){for(le=new Map;J!==null;)J.key!==null?le.set(J.key,J):le.set(J.index,J),J=J.sibling;return le}function d(le,J){return le=Gr(le,J),le.index=0,le.sibling=null,le}function m(le,J,fe){return le.index=fe,n?(fe=le.alternate,fe!==null?(fe=fe.index,fe<J?(le.flags|=2,J):fe):(le.flags|=2,J)):(le.flags|=1048576,J)}function T(le){return n&&le.alternate===null&&(le.flags|=2),le}function k(le,J,fe,Xe){return J===null||J.tag!==6?(J=Du(fe,le.mode,Xe),J.return=le,J):(J=d(J,fe),J.return=le,J)}function X(le,J,fe,Xe){var vt=fe.type;return vt===O?De(le,J,fe.props.children,Xe,fe.key):J!==null&&(J.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===ie&&zh(vt)===J.type)?(Xe=d(J,fe.props),Xe.ref=Oa(le,J,fe),Xe.return=le,Xe):(Xe=cl(fe.type,fe.key,fe.props,null,le.mode,Xe),Xe.ref=Oa(le,J,fe),Xe.return=le,Xe)}function xe(le,J,fe,Xe){return J===null||J.tag!==4||J.stateNode.containerInfo!==fe.containerInfo||J.stateNode.implementation!==fe.implementation?(J=Lu(fe,le.mode,Xe),J.return=le,J):(J=d(J,fe.children||[]),J.return=le,J)}function De(le,J,fe,Xe,vt){return J===null||J.tag!==7?(J=hs(fe,le.mode,Xe,vt),J.return=le,J):(J=d(J,fe),J.return=le,J)}function Be(le,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Du(""+J,le.mode,fe),J.return=le,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return fe=cl(J.type,J.key,J.props,null,le.mode,fe),fe.ref=Oa(le,null,J),fe.return=le,fe;case I:return J=Lu(J,le.mode,fe),J.return=le,J;case ie:var Xe=J._init;return Be(le,Xe(J._payload),fe)}if(Y(J)||me(J))return J=hs(J,le.mode,fe,null),J.return=le,J;Bo(le,J)}return null}function Pe(le,J,fe,Xe){var vt=J!==null?J.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return vt!==null?null:k(le,J,""+fe,Xe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:return fe.key===vt?X(le,J,fe,Xe):null;case I:return fe.key===vt?xe(le,J,fe,Xe):null;case ie:return vt=fe._init,Pe(le,J,vt(fe._payload),Xe)}if(Y(fe)||me(fe))return vt!==null?null:De(le,J,fe,Xe,null);Bo(le,fe)}return null}function at(le,J,fe,Xe,vt){if(typeof Xe=="string"&&Xe!==""||typeof Xe=="number")return le=le.get(fe)||null,k(J,le,""+Xe,vt);if(typeof Xe=="object"&&Xe!==null){switch(Xe.$$typeof){case V:return le=le.get(Xe.key===null?fe:Xe.key)||null,X(J,le,Xe,vt);case I:return le=le.get(Xe.key===null?fe:Xe.key)||null,xe(J,le,Xe,vt);case ie:var At=Xe._init;return at(le,J,fe,At(Xe._payload),vt)}if(Y(Xe)||me(Xe))return le=le.get(fe)||null,De(J,le,Xe,vt,null);Bo(J,Xe)}return null}function ht(le,J,fe,Xe){for(var vt=null,At=null,Ct=J,Ft=J=0,Hn=null;Ct!==null&&Ft<fe.length;Ft++){Ct.index>Ft?(Hn=Ct,Ct=null):Hn=Ct.sibling;var un=Pe(le,Ct,fe[Ft],Xe);if(un===null){Ct===null&&(Ct=Hn);break}n&&Ct&&un.alternate===null&&i(le,Ct),J=m(un,J,Ft),At===null?vt=un:At.sibling=un,At=un,Ct=Hn}if(Ft===fe.length)return a(le,Ct),En&&ss(le,Ft),vt;if(Ct===null){for(;Ft<fe.length;Ft++)Ct=Be(le,fe[Ft],Xe),Ct!==null&&(J=m(Ct,J,Ft),At===null?vt=Ct:At.sibling=Ct,At=Ct);return En&&ss(le,Ft),vt}for(Ct=c(le,Ct);Ft<fe.length;Ft++)Hn=at(Ct,le,Ft,fe[Ft],Xe),Hn!==null&&(n&&Hn.alternate!==null&&Ct.delete(Hn.key===null?Ft:Hn.key),J=m(Hn,J,Ft),At===null?vt=Hn:At.sibling=Hn,At=Hn);return n&&Ct.forEach(function(jr){return i(le,jr)}),En&&ss(le,Ft),vt}function mt(le,J,fe,Xe){var vt=me(fe);if(typeof vt!="function")throw Error(t(150));if(fe=vt.call(fe),fe==null)throw Error(t(151));for(var At=vt=null,Ct=J,Ft=J=0,Hn=null,un=fe.next();Ct!==null&&!un.done;Ft++,un=fe.next()){Ct.index>Ft?(Hn=Ct,Ct=null):Hn=Ct.sibling;var jr=Pe(le,Ct,un.value,Xe);if(jr===null){Ct===null&&(Ct=Hn);break}n&&Ct&&jr.alternate===null&&i(le,Ct),J=m(jr,J,Ft),At===null?vt=jr:At.sibling=jr,At=jr,Ct=Hn}if(un.done)return a(le,Ct),En&&ss(le,Ft),vt;if(Ct===null){for(;!un.done;Ft++,un=fe.next())un=Be(le,un.value,Xe),un!==null&&(J=m(un,J,Ft),At===null?vt=un:At.sibling=un,At=un);return En&&ss(le,Ft),vt}for(Ct=c(le,Ct);!un.done;Ft++,un=fe.next())un=at(Ct,le,Ft,un.value,Xe),un!==null&&(n&&un.alternate!==null&&Ct.delete(un.key===null?Ft:un.key),J=m(un,J,Ft),At===null?vt=un:At.sibling=un,At=un);return n&&Ct.forEach(function(nv){return i(le,nv)}),En&&ss(le,Ft),vt}function Rn(le,J,fe,Xe){if(typeof fe=="object"&&fe!==null&&fe.type===O&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:e:{for(var vt=fe.key,At=J;At!==null;){if(At.key===vt){if(vt=fe.type,vt===O){if(At.tag===7){a(le,At.sibling),J=d(At,fe.props.children),J.return=le,le=J;break e}}else if(At.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===ie&&zh(vt)===At.type){a(le,At.sibling),J=d(At,fe.props),J.ref=Oa(le,At,fe),J.return=le,le=J;break e}a(le,At);break}else i(le,At);At=At.sibling}fe.type===O?(J=hs(fe.props.children,le.mode,Xe,fe.key),J.return=le,le=J):(Xe=cl(fe.type,fe.key,fe.props,null,le.mode,Xe),Xe.ref=Oa(le,J,fe),Xe.return=le,le=Xe)}return T(le);case I:e:{for(At=fe.key;J!==null;){if(J.key===At)if(J.tag===4&&J.stateNode.containerInfo===fe.containerInfo&&J.stateNode.implementation===fe.implementation){a(le,J.sibling),J=d(J,fe.children||[]),J.return=le,le=J;break e}else{a(le,J);break}else i(le,J);J=J.sibling}J=Lu(fe,le.mode,Xe),J.return=le,le=J}return T(le);case ie:return At=fe._init,Rn(le,J,At(fe._payload),Xe)}if(Y(fe))return ht(le,J,fe,Xe);if(me(fe))return mt(le,J,fe,Xe);Bo(le,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,J!==null&&J.tag===6?(a(le,J.sibling),J=d(J,fe),J.return=le,le=J):(a(le,J),J=Du(fe,le.mode,Xe),J.return=le,le=J),T(le)):a(le,J)}return Rn}var Gs=Vh(!0),Hh=Vh(!1),zo=Dr(null),Vo=null,js=null,Gc=null;function jc(){Gc=js=Vo=null}function Wc(n){var i=zo.current;Sn(zo),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Vo=n,Gc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(di=!0),n.firstContext=null)}function Ai(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Vo===null)throw Error(t(308));js=n,Vo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var as=null;function Yc(n){as===null?as=[n]:as.push(n)}function Gh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,hr(n,c)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(an&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hr(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,hr(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bt(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Go(n,i,a,c){var d=n.updateQueue;Fr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var X=k,xe=X.next;X.next=null,T===null?m=xe:T.next=xe,T=X;var De=n.alternate;De!==null&&(De=De.updateQueue,k=De.lastBaseUpdate,k!==T&&(k===null?De.firstBaseUpdate=xe:k.next=xe,De.lastBaseUpdate=X))}if(m!==null){var Be=d.baseState;T=0,De=xe=X=null,k=m;do{var Pe=k.lane,at=k.eventTime;if((c&Pe)===Pe){De!==null&&(De=De.next={eventTime:at,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var ht=n,mt=k;switch(Pe=i,at=a,mt.tag){case 1:if(ht=mt.payload,typeof ht=="function"){Be=ht.call(at,Be,Pe);break e}Be=ht;break e;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=mt.payload,Pe=typeof ht=="function"?ht.call(at,Be,Pe):ht,Pe==null)break e;Be=oe({},Be,Pe);break e;case 2:Fr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Pe=d.effects,Pe===null?d.effects=[k]:Pe.push(k))}else at={eventTime:at,lane:Pe,tag:k.tag,payload:k.payload,callback:k.callback,next:null},De===null?(xe=De=at,X=Be):De=De.next=at,T|=Pe;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;Pe=k,k=Pe.next,Pe.next=null,d.lastBaseUpdate=Pe,d.shared.pending=null}}while(!0);if(De===null&&(X=Be),d.baseState=X,d.firstBaseUpdate=xe,d.lastBaseUpdate=De,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);cs|=T,n.lanes=T,n.memoizedState=Be}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},Ki=Dr(ka),Ba=Dr(ka),za=Dr(ka);function os(n){if(n===ka)throw Error(t(174));return n}function qc(n,i){switch(_n(za,i),_n(Ba,n),_n(Ki,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Sn(Ki),_n(Ki,i)}function Xs(){Sn(Ki),Sn(Ba),Sn(za)}function Yh(n){os(za.current);var i=os(Ki.current),a=E(i,n.type);i!==a&&(_n(Ba,n),_n(Ki,a))}function Kc(n){Ba.current===n&&(Sn(Ki),Sn(Ba))}var bn=Dr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Jc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Wo=N.ReactCurrentDispatcher,Qc=N.ReactCurrentBatchConfig,ls=0,Tn=null,Fn=null,zn=null,Xo=!1,Va=!1,Ha=0,wx=0;function Kn(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Oi(n[a],i[a]))return!1;return!0}function tu(n,i,a,c,d,m){if(ls=m,Tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?Cx:Rx,n=a(c,d),Va){m=0;do{if(Va=!1,Ha=0,25<=m)throw Error(t(301));m+=1,zn=Fn=null,i.updateQueue=null,Wo.current=Nx,n=a(c,d)}while(Va)}if(Wo.current=qo,i=Fn!==null&&Fn.next!==null,ls=0,zn=Fn=Tn=null,Xo=!1,i)throw Error(t(300));return n}function nu(){var n=Ha!==0;return Ha=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?Tn.memoizedState=zn=n:zn=zn.next=n,zn}function Ci(){if(Fn===null){var n=Tn.alternate;n=n!==null?n.memoizedState:null}else n=Fn.next;var i=zn===null?Tn.memoizedState:zn.next;if(i!==null)zn=i,Fn=n;else{if(n===null)throw Error(t(310));Fn=n,n={memoizedState:Fn.memoizedState,baseState:Fn.baseState,baseQueue:Fn.baseQueue,queue:Fn.queue,next:null},zn===null?Tn.memoizedState=zn=n:zn=zn.next=n}return zn}function Ga(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Fn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var k=T=null,X=null,xe=m;do{var De=xe.lane;if((ls&De)===De)X!==null&&(X=X.next={lane:0,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),c=xe.hasEagerState?xe.eagerState:n(c,xe.action);else{var Be={lane:De,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null};X===null?(k=X=Be,T=c):X=X.next=Be,Tn.lanes|=De,cs|=De}xe=xe.next}while(xe!==null&&xe!==m);X===null?T=c:X.next=k,Oi(c,i.memoizedState)||(di=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Tn.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ru(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Oi(m,i.memoizedState)||(di=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $h(){}function qh(n,i){var a=Tn,c=Ci(),d=i(),m=!Oi(c.memoizedState,d);if(m&&(c.memoizedState=d,di=!0),c=c.queue,su(Jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||zn!==null&&zn.memoizedState.tag&1){if(a.flags|=2048,ja(9,Zh.bind(null,a,c,d,i),void 0,null),Vn===null)throw Error(t(349));(ls&30)!==0||Kh(a,i,d)}return d}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Tn.updateQueue,i===null?(i={lastEffect:null,stores:null},Tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Qh(i)&&ep(n)}function Jh(n,i,a){return a(function(){Qh(i)&&ep(n)})}function Qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Oi(n,a)}catch{return!0}}function ep(n){var i=hr(n,1);i!==null&&Hi(i,n,1,-1)}function tp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Ax.bind(null,Tn,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Tn.updateQueue,i===null?(i={lastEffect:null,stores:null},Tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return Ci().memoizedState}function Yo(n,i,a,c){var d=Zi();Tn.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var d=Ci();c=c===void 0?null:c;var m=void 0;if(Fn!==null){var T=Fn.memoizedState;if(m=T.destroy,c!==null&&eu(c,T.deps)){d.memoizedState=ja(i,a,m,c);return}}Tn.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function ip(n,i){return Yo(8390656,8,n,i)}function su(n,i){return $o(2048,8,n,i)}function rp(n,i){return $o(4,2,n,i)}function sp(n,i){return $o(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,ap.bind(null,i,n),a)}function au(){}function lp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,di=!0),n.memoizedState=a):(Oi(a,i)||(a=he(),Tn.lanes|=a,cs|=a,n.baseState=!0),i)}function bx(n,i){var a=pt;pt=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{pt=a,Qc.transition=c}}function dp(){return Ci().memoizedState}function Tx(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var d=ri();Hi(a,n,c,d),pp(a,i,c)}}function Ax(n,i,a){var c=Vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,k=m(T,a);if(d.hasEagerState=!0,d.eagerState=k,Oi(k,T)){var X=i.interleaved;X===null?(d.next=d,Yc(i)):(d.next=X.next,X.next=d),i.interleaved=d;return}}catch{}finally{}a=Gh(n,i,d,c),a!==null&&(d=ri(),Hi(a,n,c,d),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===Tn||i!==null&&i===Tn}function hp(n,i){Va=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bt(n,a)}}var qo={readContext:Ai,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useInsertionEffect:Kn,useLayoutEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useMutableSource:Kn,useSyncExternalStore:Kn,useId:Kn,unstable_isNewReconciler:!1},Cx={readContext:Ai,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:Ai,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Tx.bind(null,Tn,n),[c.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:au,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=bx.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Tn,d=Zi();if(En){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Vn===null)throw Error(t(349));(ls&30)!==0||Kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ip(Jh.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Vn.identifierPrefix;if(En){var a=fr,c=dr;a=(c&~(1<<32-ke(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=wx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rx={readContext:Ai,useCallback:lp,useContext:Ai,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=Ci();return up(i,Fn.memoizedState,n)},useTransition:function(){var n=iu(Ga)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1},Nx={readContext:Ai,useCallback:lp,useContext:Ai,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ru,useRef:np,useState:function(){return ru(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=Ci();return Fn===null?i.memoizedState=n:up(i,Fn.memoizedState,n)},useTransition:function(){var n=ru(Ga)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1};function Bi(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ou(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?xt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ri(),d=Vr(n),m=pr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Hi(i,n,d,c),Ho(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ri(),d=Vr(n),m=pr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Hi(i,n,d,c),Ho(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ri(),c=Vr(n),d=pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Or(n,d,c),i!==null&&(Hi(i,n,c,a),Ho(i,n,c))}};function mp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function gp(n,i,a){var c=!1,d=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=Ai(m):(d=ui(i)?is:qn.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function lu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Ai(m):(m=ui(i)?is:qn.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ou(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ko.enqueueReplaceState(d,d.state,null),Go(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,bu=c),uu(n,i)},a}function _p(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){uu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uu(n,i),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Px;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Wx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ix=N.ReactCurrentOwner,di=!1;function ii(n,i,a,c){i.child=n===null?Hh(i,null,a,c):Gs(i,n.child,a,c)}function Ep(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=tu(n,i,a,c,m,d),a=nu(),n!==null&&!di?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(En&&a&&kc(i),i.flags|=1,ii(n,i,c,d),i.child)}function wp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Iu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bp(n,i,m,c,d)):(n=cl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(T,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Gr(m,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(di=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(di=!0);else return i.lanes=n.lanes,mr(n,i,d)}return du(n,i,a,c,d)}function Tp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},_n(qs,yi),yi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,_n(qs,yi),yi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,_n(qs,yi),yi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,_n(qs,yi),yi|=c;return ii(n,i,d,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,a,c,d){var m=ui(a)?is:qn.current;return m=Bs(i,m),Ws(i,d),a=tu(n,i,a,c,m,d),c=nu(),n!==null&&!di?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(En&&c&&kc(i),i.flags|=1,ii(n,i,a,d),i.child)}function Cp(n,i,a,c,d){if(ui(a)){var m=!0;Lo(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Jo(n,i),gp(i,a,c),lu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var X=T.context,xe=a.contextType;typeof xe=="object"&&xe!==null?xe=Ai(xe):(xe=ui(a)?is:qn.current,xe=Bs(i,xe));var De=a.getDerivedStateFromProps,Be=typeof De=="function"||typeof T.getSnapshotBeforeUpdate=="function";Be||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||X!==xe)&&xp(i,T,c,xe),Fr=!1;var Pe=i.memoizedState;T.state=Pe,Go(i,c,T,d),X=i.memoizedState,k!==c||Pe!==X||ci.current||Fr?(typeof De=="function"&&(ou(i,a,De,c),X=i.memoizedState),(k=Fr||mp(i,a,k,c,Pe,X,xe))?(Be||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),T.props=c,T.state=X,T.context=xe,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,jh(n,i),k=i.memoizedProps,xe=i.type===i.elementType?k:Bi(i.type,k),T.props=xe,Be=i.pendingProps,Pe=T.context,X=a.contextType,typeof X=="object"&&X!==null?X=Ai(X):(X=ui(a)?is:qn.current,X=Bs(i,X));var at=a.getDerivedStateFromProps;(De=typeof at=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Be||Pe!==X)&&xp(i,T,c,X),Fr=!1,Pe=i.memoizedState,T.state=Pe,Go(i,c,T,d);var ht=i.memoizedState;k!==Be||Pe!==ht||ci.current||Fr?(typeof at=="function"&&(ou(i,a,at,c),ht=i.memoizedState),(xe=Fr||mp(i,a,xe,c,Pe,ht,X)||!1)?(De||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,ht,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,ht,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ht),T.props=c,T.state=ht,T.context=X,c=xe):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,a,c,m,d)}function fu(n,i,a,c,d,m){Ap(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Dh(i,a,!1),mr(n,i,m);c=i.stateNode,Ix.current=i;var k=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,k,m)):ii(n,i,k,m),i.memoizedState=c.state,d&&Dh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),qc(n,i.containerInfo)}function Np(n,i,a,c,d){return Hs(),Hc(d),i.flags|=256,ii(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,d=bn.current,m=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(d&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),_n(bn,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=ul(T,c,0,null),n=hs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pu(a),i.memoizedState=hu,n):mu(i,T));if(d=n.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return Dx(n,i,T,c,k,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,k=d.sibling;var X={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Gr(d,X),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?m=Gr(k,m):(m=hs(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?pu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return m=n.child,n=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&Hc(c),Gs(i,n.child,null,a),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Dx(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Zo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ul({mode:"visible",children:c.children},d,0,null),m=hs(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,T),i.child.memoizedState=pu(T),i.memoizedState=hu,m);if((i.mode&1)===0)return Zo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=cu(m,c,void 0),Zo(n,i,T,c)}if(k=(T&n.childLanes)!==0,di||k){if(c=Vn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Hi(c,n,d,-1))}return Pu(),c=cu(Error(t(421))),Zo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,_i=Ir(d.nextSibling),vi=i,En=!0,ki=null,n!==null&&(bi[Ti++]=dr,bi[Ti++]=fr,bi[Ti++]=rs,dr=n.id,fr=n.overflow,rs=i),i=mu(i,c.children),i.flags|=4096,i)}function Ip(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function gu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Dp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(ii(n,i,c.children,a),c=bn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,a,i);else if(n.tag===19)Ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(_n(bn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gu(i,!0,a,null,m);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Lx(n,i,a){switch(i.tag){case 3:Rp(i),Hs();break;case 5:Yh(i);break;case 1:ui(i.type)&&Lo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;_n(zo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(_n(bn,bn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(_n(bn,bn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);_n(bn,bn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_n(bn,bn.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return mr(n,i,a)}var Lp,xu,Up,Fp;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Up=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(Ki.current);var m=null;switch(a){case"input":d=Xt(n,d),c=Xt(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=St(n,d),c=St(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}$e(a,c);var T;a=null;for(xe in d)if(!c.hasOwnProperty(xe)&&d.hasOwnProperty(xe)&&d[xe]!=null)if(xe==="style"){var k=d[xe];for(T in k)k.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else xe!=="dangerouslySetInnerHTML"&&xe!=="children"&&xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&xe!=="autoFocus"&&(o.hasOwnProperty(xe)?m||(m=[]):(m=m||[]).push(xe,null));for(xe in c){var X=c[xe];if(k=d!=null?d[xe]:void 0,c.hasOwnProperty(xe)&&X!==k&&(X!=null||k!=null))if(xe==="style")if(k){for(T in k)!k.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in X)X.hasOwnProperty(T)&&k[T]!==X[T]&&(a||(a={}),a[T]=X[T])}else a||(m||(m=[]),m.push(xe,a)),a=X;else xe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,k=k?k.__html:void 0,X!=null&&k!==X&&(m=m||[]).push(xe,X)):xe==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(xe,""+X):xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&(o.hasOwnProperty(xe)?(X!=null&&xe==="onScroll"&&yn("scroll",n),m||k===X||(m=[])):(m=m||[]).push(xe,X))}a&&(m=m||[]).push("style",a);var xe=m;(i.updateQueue=xe)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!En)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ux(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(i),null;case 1:return ui(i.type)&&Do(),Zn(i),null;case 3:return c=i.stateNode,Xs(),Sn(ci),Sn(qn),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ki!==null&&(Cu(ki),ki=null))),xu(n,i),Zn(i),null;case 5:Kc(i);var d=os(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Zn(i),null}if(n=os(Ki.current),ko(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[qi]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":yn("cancel",c),yn("close",c);break;case"iframe":case"object":case"embed":yn("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)yn(Ia[d],c);break;case"source":yn("error",c);break;case"img":case"image":case"link":yn("error",c),yn("load",c);break;case"details":yn("toggle",c);break;case"input":nn(c,m),yn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},yn("invalid",c);break;case"textarea":Mt(c,m),yn("invalid",c)}$e(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var k=m[T];T==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&No(c.textContent,k,n),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&No(c.textContent,k,n),d=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&yn("scroll",c)}switch(a){case"input":lt(c),jt(c,m,!0);break;case"textarea":lt(c),Wt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Po)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[qi]=i,n[Ua]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ge(a,c),a){case"dialog":yn("cancel",n),yn("close",n),d=c;break;case"iframe":case"object":case"embed":yn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)yn(Ia[d],n);d=c;break;case"source":yn("error",n),d=c;break;case"img":case"image":case"link":yn("error",n),yn("load",n),d=c;break;case"details":yn("toggle",n),d=c;break;case"input":nn(n,c),d=Xt(n,c),yn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),yn("invalid",n);break;case"textarea":Mt(n,c),d=St(n,c),yn("invalid",n);break;default:d=c}$e(a,d),k=d;for(m in k)if(k.hasOwnProperty(m)){var X=k[m];m==="style"?ye(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Se(n,X)):m==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&Me(n,X):typeof X=="number"&&Me(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?X!=null&&m==="onScroll"&&yn("scroll",n):X!=null&&R(n,m,X,T))}switch(a){case"input":lt(n),jt(n,c,!1);break;case"textarea":lt(n),Wt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?kt(n,!!c.multiple,m,!1):c.defaultValue!=null&&kt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Zn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(za.current),os(Ki.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(m=c.nodeValue!==a)&&(n=vi,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return Zn(i),null;case 13:if(Sn(bn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(En&&_i!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),Hs(),i.flags|=98560,m=!1;else if(m=ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[qi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zn(i),m=!1}else ki!==null&&(Cu(ki),ki=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(bn.current&1)!==0?On===0&&(On=3):Pu())),i.updateQueue!==null&&(i.flags|=4),Zn(i),null);case 4:return Xs(),xu(n,i),n===null&&Da(i.stateNode.containerInfo),Zn(i),null;case 10:return Wc(i.type._context),Zn(i),null;case 17:return ui(i.type)&&Do(),Zn(i),null;case 19:if(Sn(bn),m=i.memoizedState,m===null)return Zn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Wa(m,!1);else{if(On!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=jo(n),T!==null){for(i.flags|=128,Wa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return _n(bn,bn.current&1|2),i.child}n=n.sibling}m.tail!==null&&ot()>Ks&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=jo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!En)return Zn(i),null}else 2*ot()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ot(),i.sibling=null,a=bn.current,_n(bn,c?a&1|2:a&1),i):(Zn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yi&1073741824)!==0&&(Zn(i),i.subtreeFlags&6&&(i.flags|=8192)):Zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fx(n,i){switch(Bc(i),i.tag){case 1:return ui(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),Sn(ci),Sn(qn),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(Sn(bn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Sn(bn),null;case 4:return Xs(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Qo=!1,Jn=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,ut=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Cn(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){Cn(n,i,c)}}var Op=!1;function kx(n,i){if(Nc=_o,n=mh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,k=-1,X=-1,xe=0,De=0,Be=n,Pe=null;t:for(;;){for(var at;Be!==a||d!==0&&Be.nodeType!==3||(k=T+d),Be!==m||c!==0&&Be.nodeType!==3||(X=T+c),Be.nodeType===3&&(T+=Be.nodeValue.length),(at=Be.firstChild)!==null;)Pe=Be,Be=at;for(;;){if(Be===n)break t;if(Pe===a&&++xe===d&&(k=T),Pe===m&&++De===c&&(X=T),(at=Be.nextSibling)!==null)break;Be=Pe,Pe=Be.parentNode}Be=at}a=k===-1||X===-1?null:{start:k,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},_o=!1,ut=i;ut!==null;)if(i=ut,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ut=n;else for(;ut!==null;){i=ut;try{var ht=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ht!==null){var mt=ht.memoizedProps,Rn=ht.memoizedState,le=i.stateNode,J=le.getSnapshotBeforeUpdate(i.elementType===i.type?mt:Bi(i.type,mt),Rn);le.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Xe){Cn(i,i.return,Xe)}if(n=i.sibling,n!==null){n.return=i.return,ut=n;break}ut=i.return}return ht=Op,Op=!1,ht}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vu(i,a,m)}d=d.next}while(d!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Ua],delete i[Uc],delete i[yx],delete i[Sx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var Wn=null,zi=!1;function kr(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:Jn||$s(a,i);case 6:var c=Wn,d=zi;Wn=null,kr(n,i,a),Wn=c,zi=d,Wn!==null&&(zi?(n=Wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Wn.removeChild(a.stateNode));break;case 18:Wn!==null&&(zi?(n=Wn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),wa(n)):Lc(Wn,a.stateNode));break;case 4:c=Wn,d=zi,Wn=a.stateNode.containerInfo,zi=!0,kr(n,i,a),Wn=c,zi=d;break;case 0:case 11:case 14:case 15:if(!Jn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&vu(a,i,T),d=d.next}while(d!==c)}kr(n,i,a);break;case 1:if(!Jn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Cn(a,i,k)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Jn=(c=Jn)||a.memoizedState!==null,kr(n,i,a),Jn=c):kr(n,i,a);break;default:kr(n,i,a)}}function Hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ox),i.forEach(function(c){var d=Yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:Wn=k.stateNode,zi=!1;break e;case 3:Wn=k.stateNode.containerInfo,zi=!0;break e;case 4:Wn=k.stateNode.containerInfo,zi=!0;break e}k=k.return}if(Wn===null)throw Error(t(160));Vp(m,T,d),Wn=null,zi=!1;var X=d.alternate;X!==null&&(X.return=null),d.return=null}catch(xe){Cn(d,i,xe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(i,n),Ji(n),c&4){try{Xa(3,n,n.return),el(3,n)}catch(mt){Cn(n,n.return,mt)}try{Xa(5,n,n.return)}catch(mt){Cn(n,n.return,mt)}}break;case 1:Vi(i,n),Ji(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Vi(i,n),Ji(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Me(d,"")}catch(mt){Cn(n,n.return,mt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,k=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Rt(d,m),Ge(k,T);var xe=Ge(k,m);for(T=0;T<X.length;T+=2){var De=X[T],Be=X[T+1];De==="style"?ye(d,Be):De==="dangerouslySetInnerHTML"?Se(d,Be):De==="children"?Me(d,Be):R(d,De,Be,xe)}switch(k){case"input":Gt(d,m);break;case"textarea":Ye(d,m);break;case"select":var Pe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var at=m.value;at!=null?kt(d,!!m.multiple,at,!1):Pe!==!!m.multiple&&(m.defaultValue!=null?kt(d,!!m.multiple,m.defaultValue,!0):kt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(mt){Cn(n,n.return,mt)}}break;case 6:if(Vi(i,n),Ji(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(mt){Cn(n,n.return,mt)}}break;case 3:if(Vi(i,n),Ji(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(mt){Cn(n,n.return,mt)}break;case 4:Vi(i,n),Ji(n);break;case 13:Vi(i,n),Ji(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(wu=ot())),c&4&&Hp(n);break;case 22:if(De=a!==null&&a.memoizedState!==null,n.mode&1?(Jn=(xe=Jn)||De,Vi(i,n),Jn=xe):Vi(i,n),Ji(n),c&8192){if(xe=n.memoizedState!==null,(n.stateNode.isHidden=xe)&&!De&&(n.mode&1)!==0)for(ut=n,De=n.child;De!==null;){for(Be=ut=De;ut!==null;){switch(Pe=ut,at=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:Xa(4,Pe,Pe.return);break;case 1:$s(Pe,Pe.return);var ht=Pe.stateNode;if(typeof ht.componentWillUnmount=="function"){c=Pe,a=Pe.return;try{i=c,ht.props=i.memoizedProps,ht.state=i.memoizedState,ht.componentWillUnmount()}catch(mt){Cn(c,a,mt)}}break;case 5:$s(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){Xp(Be);continue}}at!==null?(at.return=Pe,ut=at):Xp(Be)}De=De.sibling}e:for(De=null,Be=n;;){if(Be.tag===5){if(De===null){De=Be;try{d=Be.stateNode,xe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=Be.stateNode,X=Be.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,k.style.display=de("display",T))}catch(mt){Cn(n,n.return,mt)}}}else if(Be.tag===6){if(De===null)try{Be.stateNode.nodeValue=xe?"":Be.memoizedProps}catch(mt){Cn(n,n.return,mt)}}else if((Be.tag!==22&&Be.tag!==23||Be.memoizedState===null||Be===n)&&Be.child!==null){Be.child.return=Be,Be=Be.child;continue}if(Be===n)break e;for(;Be.sibling===null;){if(Be.return===null||Be.return===n)break e;De===Be&&(De=null),Be=Be.return}De===Be&&(De=null),Be.sibling.return=Be.return,Be=Be.sibling}}break;case 19:Vi(i,n),Ji(n),c&4&&Hp(n);break;case 21:break;default:Vi(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Me(d,""),c.flags&=-33);var m=zp(n);Su(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,k=zp(n);yu(n,k,T);break;default:throw Error(t(161))}}catch(X){Cn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bx(n,i,a){ut=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;ut!==null;){var d=ut,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Qo;if(!T){var k=d.alternate,X=k!==null&&k.memoizedState!==null||Jn;k=Qo;var xe=Jn;if(Qo=T,(Jn=X)&&!xe)for(ut=d;ut!==null;)T=ut,X=T.child,T.tag===22&&T.memoizedState!==null?Yp(d):X!==null?(X.return=T,ut=X):Yp(d);for(;m!==null;)ut=m,jp(m),m=m.sibling;ut=d,Qo=k,Jn=xe}Wp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ut=m):Wp(n)}}function Wp(n){for(;ut!==null;){var i=ut;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Jn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Jn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Bi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,T,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var xe=i.alternate;if(xe!==null){var De=xe.memoizedState;if(De!==null){var Be=De.dehydrated;Be!==null&&wa(Be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||i.flags&512&&_u(i)}catch(Pe){Cn(i,i.return,Pe)}}if(i===n){ut=null;break}if(a=i.sibling,a!==null){a.return=i.return,ut=a;break}ut=i.return}}function Xp(n){for(;ut!==null;){var i=ut;if(i===n){ut=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ut=a;break}ut=i.return}}function Yp(n){for(;ut!==null;){var i=ut;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(X){Cn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(X){Cn(i,d,X)}}var m=i.return;try{_u(i)}catch(X){Cn(i,m,X)}break;case 5:var T=i.return;try{_u(i)}catch(X){Cn(i,T,X)}}}catch(X){Cn(i,i.return,X)}if(i===n){ut=null;break}var k=i.sibling;if(k!==null){k.return=i.return,ut=k;break}ut=i.return}}var zx=Math.ceil,tl=N.ReactCurrentDispatcher,Mu=N.ReactCurrentOwner,Ri=N.ReactCurrentBatchConfig,an=0,Vn=null,In=null,Xn=0,yi=0,qs=Dr(0),On=0,Ya=null,cs=0,nl=0,Eu=0,$a=null,fi=null,wu=0,Ks=1/0,gr=null,il=!1,bu=null,Br=null,rl=!1,zr=null,sl=0,qa=0,Tu=null,al=-1,ol=0;function ri(){return(an&6)!==0?ot():al!==-1?al:al=ot()}function Vr(n){return(n.mode&1)===0?1:(an&2)!==0&&Xn!==0?Xn&-Xn:Ex.transition!==null?(ol===0&&(ol=he()),ol):(n=pt,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function Hi(n,i,a,c){if(50<qa)throw qa=0,Tu=null,Error(t(185));Qe(n,a,c),((an&2)===0||n!==Vn)&&(n===Vn&&((an&2)===0&&(nl|=a),On===4&&Hr(n,Xn)),hi(n,c),a===1&&an===0&&(i.mode&1)===0&&(Ks=ot()+500,Uo&&Ur()))}function hi(n,i){var a=n.callbackNode;ae(n,i);var c=H(n,n===Vn?Xn:0);if(c===0)a!==null&&vn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&vn(a),i===1)n.tag===0?Mx(qp.bind(null,n)):Lh(qp.bind(null,n)),vx(function(){(an&6)===0&&Ur()}),a=null;else{switch(Bt(c)){case 1:a=mn;break;case 4:a=C;break;case 16:a=$;break;case 536870912:a=ne;break;default:a=$}a=im(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(al=-1,ol=0,(an&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=H(n,n===Vn?Xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var d=an;an|=2;var m=Zp();(Vn!==n||Xn!==i)&&(gr=null,Ks=ot()+500,ds(n,i));do try{Gx();break}catch(k){Kp(n,k)}while(!0);jc(),tl.current=m,an=d,In!==null?i=0:(Vn=null,Xn=0,i=On)}if(i!==0){if(i===2&&(d=Ne(n),d!==0&&(c=d,i=Au(n,d))),i===1)throw a=Ya,ds(n,0),Hr(n,c),hi(n,ot()),a;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Vx(d)&&(i=ll(n,c),i===2&&(m=Ne(n),m!==0&&(c=m,i=Au(n,m))),i===1))throw a=Ya,ds(n,0),Hr(n,c),hi(n,ot()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,fi,gr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=wu+500-ot(),10<i)){if(H(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){ri(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc(fs.bind(null,n,fi,gr),i);break}fs(n,fi,gr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-ke(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=ot()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zx(c/1960))-c,10<c){n.timeoutHandle=Dc(fs.bind(null,n,fi,gr),c);break}fs(n,fi,gr);break;case 5:fs(n,fi,gr);break;default:throw Error(t(329))}}}return hi(n,ot()),n.callbackNode===a?$p.bind(null,n):null}function Au(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=ll(n,i),n!==2&&(i=fi,fi=a,i!==null&&Cu(i)),n}function Cu(n){fi===null?fi=n:fi.push.apply(fi,n)}function Vx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Oi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~Eu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ke(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if((an&6)!==0)throw Error(t(327));Zs();var i=H(n,0);if((i&1)===0)return hi(n,ot()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=Ne(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=Ya,ds(n,0),Hr(n,i),hi(n,ot()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,fi,gr),hi(n,ot()),null}function Ru(n,i){var a=an;an|=1;try{return n(i)}finally{an=a,an===0&&(Ks=ot()+500,Uo&&Ur())}}function us(n){zr!==null&&zr.tag===0&&(an&6)===0&&Zs();var i=an;an|=1;var a=Ri.transition,c=pt;try{if(Ri.transition=null,pt=1,n)return n()}finally{pt=c,Ri.transition=a,an=i,(an&6)===0&&Ur()}}function Nu(){yi=qs.current,Sn(qs)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,xx(a)),In!==null)for(a=In.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Xs(),Sn(ci),Sn(qn),Jc();break;case 5:Kc(c);break;case 4:Xs();break;case 13:Sn(bn);break;case 19:Sn(bn);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(Vn=n,In=n=Gr(n.current,null),Xn=yi=i,On=0,Ya=null,Eu=nl=cs=0,fi=$a=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}as=null}return n}function Kp(n,i){do{var a=In;try{if(jc(),Wo.current=qo,Xo){for(var c=Tn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xo=!1}if(ls=0,zn=Fn=Tn=null,Va=!1,Ha=0,Mu.current=null,a===null||a.return===null){On=1,Ya=i,In=null;break}e:{var m=n,T=a.return,k=a,X=i;if(i=Xn,k.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var xe=X,De=k,Be=De.tag;if((De.mode&1)===0&&(Be===0||Be===11||Be===15)){var Pe=De.alternate;Pe?(De.updateQueue=Pe.updateQueue,De.memoizedState=Pe.memoizedState,De.lanes=Pe.lanes):(De.updateQueue=null,De.memoizedState=null)}var at=Sp(T);if(at!==null){at.flags&=-257,Mp(at,T,k,m,i),at.mode&1&&yp(m,xe,i),i=at,X=xe;var ht=i.updateQueue;if(ht===null){var mt=new Set;mt.add(X),i.updateQueue=mt}else ht.add(X);break e}else{if((i&1)===0){yp(m,xe,i),Pu();break e}X=Error(t(426))}}else if(En&&k.mode&1){var Rn=Sp(T);if(Rn!==null){(Rn.flags&65536)===0&&(Rn.flags|=256),Mp(Rn,T,k,m,i),Hc(Ys(X,k));break e}}m=X=Ys(X,k),On!==4&&(On=2),$a===null?$a=[m]:$a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var le=vp(m,X,i);Wh(m,le);break e;case 1:k=X;var J=m.type,fe=m.stateNode;if((m.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Br===null||!Br.has(fe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Xe=_p(m,k,i);Wh(m,Xe);break e}}m=m.return}while(m!==null)}Qp(a)}catch(vt){i=vt,In===a&&a!==null&&(In=a=a.return);continue}break}while(!0)}function Zp(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Pu(){(On===0||On===3||On===2)&&(On=4),Vn===null||(cs&268435455)===0&&(nl&268435455)===0||Hr(Vn,Xn)}function ll(n,i){var a=an;an|=2;var c=Zp();(Vn!==n||Xn!==i)&&(gr=null,ds(n,i));do try{Hx();break}catch(d){Kp(n,d)}while(!0);if(jc(),an=a,tl.current=c,In!==null)throw Error(t(261));return Vn=null,Xn=0,On}function Hx(){for(;In!==null;)Jp(In)}function Gx(){for(;In!==null&&!cn();)Jp(In)}function Jp(n){var i=nm(n.alternate,n,yi);n.memoizedProps=n.pendingProps,i===null?Qp(n):In=i,Mu.current=null}function Qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ux(a,i,yi),a!==null){In=a;return}}else{if(a=Fx(a,i),a!==null){a.flags&=32767,In=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{On=6,In=null;return}}if(i=i.sibling,i!==null){In=i;return}In=i=n}while(i!==null);On===0&&(On=5)}function fs(n,i,a){var c=pt,d=Ri.transition;try{Ri.transition=null,pt=1,jx(n,i,a,c)}finally{Ri.transition=d,pt=c}return null}function jx(n,i,a,c){do Zs();while(zr!==null);if((an&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(en(n,m),n===Vn&&(In=Vn=null,Xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,im($,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ri.transition,Ri.transition=null;var T=pt;pt=1;var k=an;an|=4,Mu.current=null,kx(n,a),Gp(a,n),ux(Pc),_o=!!Nc,Pc=Nc=null,n.current=a,Bx(a),He(),an=k,pt=T,Ri.transition=m}else n.current=a;if(rl&&(rl=!1,zr=n,sl=d),m=n.pendingLanes,m===0&&(Br=null),Je(a.stateNode),hi(n,ot()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=bu,bu=null,n;return(sl&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Tu?qa++:(qa=0,Tu=n):qa=0,Ur(),null}function Zs(){if(zr!==null){var n=Bt(sl),i=Ri.transition,a=pt;try{if(Ri.transition=null,pt=16>n?16:n,zr===null)var c=!1;else{if(n=zr,zr=null,sl=0,(an&6)!==0)throw Error(t(331));var d=an;for(an|=4,ut=n.current;ut!==null;){var m=ut,T=m.child;if((ut.flags&16)!==0){var k=m.deletions;if(k!==null){for(var X=0;X<k.length;X++){var xe=k[X];for(ut=xe;ut!==null;){var De=ut;switch(De.tag){case 0:case 11:case 15:Xa(8,De,m)}var Be=De.child;if(Be!==null)Be.return=De,ut=Be;else for(;ut!==null;){De=ut;var Pe=De.sibling,at=De.return;if(kp(De),De===xe){ut=null;break}if(Pe!==null){Pe.return=at,ut=Pe;break}ut=at}}}var ht=m.alternate;if(ht!==null){var mt=ht.child;if(mt!==null){ht.child=null;do{var Rn=mt.sibling;mt.sibling=null,mt=Rn}while(mt!==null)}}ut=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,ut=T;else e:for(;ut!==null;){if(m=ut,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xa(9,m,m.return)}var le=m.sibling;if(le!==null){le.return=m.return,ut=le;break e}ut=m.return}}var J=n.current;for(ut=J;ut!==null;){T=ut;var fe=T.child;if((T.subtreeFlags&2064)!==0&&fe!==null)fe.return=T,ut=fe;else e:for(T=J;ut!==null;){if(k=ut,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:el(9,k)}}catch(vt){Cn(k,k.return,vt)}if(k===T){ut=null;break e}var Xe=k.sibling;if(Xe!==null){Xe.return=k.return,ut=Xe;break e}ut=k.return}}if(an=d,Ur(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(se,n)}catch{}c=!0}return c}finally{pt=a,Ri.transition=i}}return!1}function em(n,i,a){i=Ys(a,i),i=vp(n,i,1),n=Or(n,i,1),i=ri(),n!==null&&(Qe(n,1,i),hi(n,i))}function Cn(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){n=Ys(a,n),n=_p(i,n,1),i=Or(i,n,1),n=ri(),i!==null&&(Qe(i,1,n),hi(i,n));break}}i=i.return}}function Wx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ri(),n.pingedLanes|=n.suspendedLanes&a,Vn===n&&(Xn&a)===a&&(On===4||On===3&&(Xn&130023424)===Xn&&500>ot()-wu?ds(n,0):Eu|=a),hi(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ft,ft<<=1,(ft&130023424)===0&&(ft=4194304)));var a=ri();n=hr(n,i),n!==null&&(Qe(n,i,a),hi(n,a))}function Xx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function Yx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ci.current)di=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return di=!1,Lx(n,i,a);di=(n.flags&131072)!==0}else di=!1,En&&(i.flags&1048576)!==0&&Uh(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var d=Bs(i,qn.current);Ws(i,a),d=tu(null,i,c,n,d,a);var m=nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ui(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=Ko,i.stateNode=d,d._reactInternals=i,lu(i,c,n,a),i=fu(null,i,c,!0,m,a)):(i.tag=0,En&&m&&kc(i),ii(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=qx(c),n=Bi(c,n),d){case 0:i=du(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=wp(null,i,c,Bi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),du(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Cp(n,i,c,d,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,jh(n,i),Go(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ys(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(_i=Ir(i.stateNode.containerInfo.firstChild),vi=i,En=!0,ki=null,a=Hh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=mr(n,i,a);break e}ii(n,i,c,a)}i=i.child}return i;case 5:return Yh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ic(c,d)?T=null:m!==null&&Ic(c,m)&&(i.flags|=32),Ap(n,i),ii(n,i,T,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return Pp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):ii(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Ep(n,i,c,d,a);case 7:return ii(n,i,i.pendingProps,a),i.child;case 8:return ii(n,i,i.pendingProps.children,a),i.child;case 12:return ii(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,_n(zo,c._currentValue),c._currentValue=T,m!==null)if(Oi(m.value,T)){if(m.children===d.children&&!ci.current){i=mr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){T=m.child;for(var X=k.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=pr(-1,a&-a),X.tag=2;var xe=m.updateQueue;if(xe!==null){xe=xe.shared;var De=xe.pending;De===null?X.next=X:(X.next=De.next,De.next=X),xe.pending=X}}m.lanes|=a,X=m.alternate,X!==null&&(X.lanes|=a),Xc(m.return,a,i),k.lanes|=a;break}X=X.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,k=T.alternate,k!==null&&(k.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}ii(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=Ai(d),c=c(d),i.flags|=1,ii(n,i,c,a),i.child;case 14:return c=i.type,d=Bi(c,i.pendingProps),d=Bi(c.type,d),wp(n,i,c,d,a);case 15:return bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Jo(n,i),i.tag=1,ui(c)?(n=!0,Lo(i)):n=!1,Ws(i,a),gp(i,c,d),lu(i,c,d,a),fu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Qt(n,i)}function $x(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(n,i,a,c){return new $x(n,i,a,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qx(n){if(typeof n=="function")return Iu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===j)return 14}return 2}function Gr(n,i){var a=n.alternate;return a===null?(a=Ni(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Iu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return hs(a.children,d,m,i);case w:T=8,d|=8;break;case U:return n=Ni(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case ee:return n=Ni(13,a,i,d),n.elementType=ee,n.lanes=m,n;case pe:return n=Ni(19,a,i,d),n.elementType=pe,n.lanes=m,n;case q:return ul(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:T=10;break e;case z:T=9;break e;case K:T=11;break e;case j:T=14;break e;case ie:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ni(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,a,c){return n=Ni(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=Ni(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=Ni(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=Ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Kx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,d,m,T,k,X){return n=new Kx(n,i,a,k,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ni(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function Zx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Lr;n=n._reactInternals;e:{if(xt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ui(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ui(a))return Ih(n,a,i)}return i}function sm(n,i,a,c,d,m,T,k,X){return n=Uu(a,c,!0,n,d,m,T,k,X),n.context=rm(null),a=n.current,c=ri(),d=Vr(a),m=pr(c,d),m.callback=i??null,Or(a,m,d),n.current.lanes=d,Qe(n,d,c),hi(n,c),n}function dl(n,i,a,c){var d=i.current,m=ri(),T=Vr(d);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Or(d,i,T),n!==null&&(Hi(n,d,T,m),Ho(n,d,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function Jx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}hl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){dl(null,n,null,null)}),i[cr]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<$i.length&&i!==0&&i<$i[a].priority;a++);$i.splice(a,0,n),a===0&&Yf(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function Qx(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var xe=fl(T);m.call(xe)}}var T=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=T,n[cr]=T.current,Da(n.nodeType===8?n.parentNode:n),us(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var xe=fl(X);k.call(xe)}}var X=Uu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=X,n[cr]=X.current,Da(n.nodeType===8?n.parentNode:n),us(function(){dl(i,X,a,c)}),X}function ml(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var k=d;d=function(){var X=fl(T);k.call(X)}}dl(i,T,n,d)}else T=Qx(a,i,n,d,c);return fl(T)}Tt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=b(i.pendingLanes);a!==0&&(bt(i,a|1),hi(i,ot()),(an&6)===0&&(Ks=ot()+500,Ur()))}break;case 13:us(function(){var c=hr(n,1);if(c!==null){var d=ri();Hi(c,n,1,d)}}),Fu(n,1)}},zt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=ri();Hi(i,n,134217728,a)}Fu(n,134217728)}},Mn=function(n){if(n.tag===13){var i=Vr(n),a=hr(n,i);if(a!==null){var c=ri();Hi(a,n,i,c)}Fu(n,i)}},Nt=function(){return pt},Un=function(n,i){var a=pt;try{return pt=n,i()}finally{pt=a}},wt=function(n,i,a){switch(i){case"input":if(Gt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Io(c);if(!d)throw Error(t(90));gt(c),Gt(c,d)}}}break;case"textarea":Ye(n,a);break;case"select":i=a.value,i!=null&&kt(n,!!a.multiple,i,!1)}},Oe=Ru,be=us;var ev={usingClientEntryPoint:!1,Events:[Fa,Os,Io,_e,We,Ru]},Ka={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dn(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{se=gl.inject(tv),ze=gl}catch{}}return pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,pi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(t(200));return Zx(n,i,null,a)},pi.createRoot=function(n,i){if(!ku(n))throw Error(t(299));var a=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,d),n[cr]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ou(i)},pi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dn(i),n=n===null?null:n.stateNode,n},pi.flushSync=function(n){return us(n)},pi.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},pi.hydrateRoot=function(n,i,a){if(!ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=sm(i,null,n,1,a??null,d,!1,m,T),n[cr]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hl(i)},pi.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},pi.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(us(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},pi.unstable_batchedUpdates=Ru,pi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},pi.version="18.3.1-next-f1338f8080-20240426",pi}var gm;function uv(){if(gm)return Vu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=cv(),Vu.exports}var xm;function dv(){if(xm)return xl;xm=1;var s=uv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var fv=dv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="184",hv=0,vm=1,pv=2,Gl=1,mv=2,so=3,ts=0,gi=1,Mr=2,wr=0,pa=1,_m=2,ym=3,Sm=4,gv=5,Ss=100,xv=101,vv=102,_v=103,yv=104,Sv=200,Mv=201,Ev=202,wv=203,Rd=204,Nd=205,bv=206,Tv=207,Av=208,Cv=209,Rv=210,Nv=211,Pv=212,Iv=213,Dv=214,Pd=0,Id=1,Dd=2,ga=3,Ld=4,Ud=5,Fd=6,Od=7,P0=0,Lv=1,Uv=2,rr=0,I0=1,D0=2,L0=3,U0=4,F0=5,O0=6,k0=7,B0=300,Ts=301,xa=302,ju=303,Wu=304,ac=306,kd=1e3,Er=1001,Bd=1002,Yn=1003,Fv=1004,vl=1005,ni=1006,Xu=1007,Es=1008,Ui=1009,z0=1010,V0=1011,ho=1012,Tf=1013,or=1014,nr=1015,Tr=1016,Af=1017,Cf=1018,po=1020,H0=35902,G0=35899,j0=1021,W0=1022,Yi=1023,Ar=1026,ws=1027,X0=1028,Rf=1029,As=1030,Nf=1031,Pf=1033,jl=33776,Wl=33777,Xl=33778,Yl=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,jd=36196,Wd=37492,Xd=37496,Yd=37488,$d=37489,Kl=37490,qd=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Zl=36285,gf=36286,Ov=3200,Mm=0,kv=1,Jr="",Di="srgb",Jl="srgb-linear",Ql="linear",gn="srgb",Js=7680,Em=519,Bv=512,zv=513,Vv=514,If=515,Hv=516,Gv=517,Df=518,jv=519,wm=35044,bm="300 es",ir=2e3,ec=2001;function Wv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xv(){const s=tc("canvas");return s.style.display="block",s}const Tm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function Y0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pt(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function on(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xf(...s){const e=s.join(" ");e in Tm||(Tm[e]=!0,Pt(...s))}function Yv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const $v={[Pd]:Id,[Dd]:Fd,[Ld]:Od,[ga]:Ud,[Id]:Pd,[Fd]:Dd,[Od]:Ld,[Ud]:ga};class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,vf=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function tn(s,e,t){return Math.max(e,Math.min(t,s))}function qv(s,e){return(s%e+e)%e}function $u(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let It=Vf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],A=l[u+2],D=l[u+3];if(S!==D||h!==x||p!==M||v!==A){let y=h*x+p*M+v*A+S*D;y<0&&(x=-x,M=-M,A=-A,D=-D,y=-y);let _=1-f;if(y<.9995){const L=Math.acos(y),R=Math.sin(L);_=Math.sin(_*L)/R,f=Math.sin(f*L)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+D*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+D*f;const L=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=L,p*=L,v*=L,S*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],A=l[u+3];return e[t]=f*A+v*S+h*M-p*x,e[t+1]=h*A+v*x+p*S-f*M,e[t+2]=p*A+v*M+f*x-h*S,e[t+3]=v*A-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),A=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"YXZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"ZXY":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"ZYX":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"YZX":this._x=x*v*S+p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S-x*M*A;break;case"XZY":this._x=x*v*S-p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S+x*M*A;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hf=class Hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this.z=tn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this.z=tn(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hf.prototype.isVector3=!0;let Q=Hf;const qu=new Q,Cm=new ya,Gf=class Gf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],A=r[8],D=o[0],y=o[3],_=o[6],L=o[1],R=o[4],N=o[7],V=o[2],I=o[5],O=o[8];return l[0]=u*D+f*L+h*V,l[3]=u*y+f*R+h*I,l[6]=u*_+f*N+h*O,l[1]=p*D+v*L+S*V,l[4]=p*y+v*R+S*I,l[7]=p*_+v*N+S*O,l[2]=x*D+M*L+A*V,l[5]=x*y+M*R+A*I,l[8]=x*_+M*N+A*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,A=t*S+r*x+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=S*D,e[1]=(o*p-v*r)*D,e[2]=(f*r-o*u)*D,e[3]=x*D,e[4]=(v*t-o*h)*D,e[5]=(o*l-f*t)*D,e[6]=M*D,e[7]=(r*h-p*t)*D,e[8]=(u*t-r*l)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let Ht=Gf;const Ku=new Ht,Rm=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===gn&&(o.r=br(o.r),o.g=br(o.g),o.b=br(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===gn&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:gn,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),s}const rn=Kv();function br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class Zv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=tc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=br(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(br(t[r]/255)*255):t[r]=br(t[r]);return{data:t,width:e.width,height:e.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let Qv=0;const Ju=new Q;class ai extends Rs{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,r=Er,o=Er,l=ni,u=Es,f=Yi,h=Ui,p=ai.DEFAULT_ANISOTROPY,v=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=mo(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=B0;ai.DEFAULT_ANISOTROPY=1;const jf=class jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],A=h[9],D=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-D)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+D)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,N=(M+1)/2,V=(_+1)/2,I=(v+x)/4,O=(S+D)/4,w=(A+y)/4;return R>N&&R>V?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=O/r):N>V?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=I/o,l=w/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=O/l,o=w/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-A)*(y-A)+(S-D)*(S-D)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-A)/L,this.y=(S-D)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this.z=tn(this.z,e.z,t.z),this.w=tn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this.z=tn(this.z,e,t),this.w=tn(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;let Nn=jf;class e_ extends Rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Nn(0,0,e,t),this.scissorTest=!1,this.viewport=new Nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new ai(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends e_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $0 extends ai{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t_ extends ai{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=class sc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,A,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,D,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,D,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=A,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,A=f*v,D=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+A*p,t[5]=x-D*p,t[9]=-f*h,t[2]=D-x*p,t[6]=A+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,A=p*v,D=p*S;t[0]=x+D*f,t[4]=A*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-A,t[6]=D+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,A=p*v,D=p*S;t[0]=x-D*f,t[4]=-u*S,t[8]=A+M*f,t[1]=M+A*f,t[5]=u*v,t[9]=D-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,A=f*v,D=f*S;t[0]=h*v,t[4]=A*p-M,t[8]=x*p+D,t[1]=h*S,t[5]=D*p+x,t[9]=M*p-A,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,A=f*h,D=f*p;t[0]=h*v,t[4]=D-x*S,t[8]=A*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+A,t[10]=x-D*S}else if(e.order==="XZY"){const x=u*h,M=u*p,A=f*h,D=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+D,t[5]=u*v,t[9]=M*S-A,t[2]=A*S-M,t[6]=f*v,t[10]=D*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,i_)}lookAt(e,t,r){const o=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Wr.crossVectors(r,Si),Wr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Wr.crossVectors(r,Si)),Wr.normalize(),_l.crossVectors(Si,Wr),o[0]=Wr.x,o[4]=_l.x,o[8]=Si.x,o[1]=Wr.y,o[5]=_l.y,o[9]=Si.y,o[2]=Wr.z,o[6]=_l.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],A=r[2],D=r[6],y=r[10],_=r[14],L=r[3],R=r[7],N=r[11],V=r[15],I=o[0],O=o[4],w=o[8],U=o[12],G=o[1],z=o[5],K=o[9],ee=o[13],pe=o[2],j=o[6],ie=o[10],q=o[14],Z=o[3],me=o[7],oe=o[11],B=o[15];return l[0]=u*I+f*G+h*pe+p*Z,l[4]=u*O+f*z+h*j+p*me,l[8]=u*w+f*K+h*ie+p*oe,l[12]=u*U+f*ee+h*q+p*B,l[1]=v*I+S*G+x*pe+M*Z,l[5]=v*O+S*z+x*j+M*me,l[9]=v*w+S*K+x*ie+M*oe,l[13]=v*U+S*ee+x*q+M*B,l[2]=A*I+D*G+y*pe+_*Z,l[6]=A*O+D*z+y*j+_*me,l[10]=A*w+D*K+y*ie+_*oe,l[14]=A*U+D*ee+y*q+_*B,l[3]=L*I+R*G+N*pe+V*Z,l[7]=L*O+R*z+N*j+V*me,l[11]=L*w+R*K+N*ie+V*oe,l[15]=L*U+R*ee+N*q+V*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],A=e[3],D=e[7],y=e[11],_=e[15],L=h*M-p*x,R=f*M-p*S,N=f*x-h*S,V=u*M-p*v,I=u*x-h*v,O=u*S-f*v;return t*(D*L-y*R+_*N)-r*(A*L-y*V+_*I)+o*(A*R-D*V+_*O)-l*(A*N-D*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],A=e[12],D=e[13],y=e[14],_=e[15],L=t*f-r*u,R=t*h-o*u,N=t*p-l*u,V=r*h-o*f,I=r*p-l*f,O=o*p-l*h,w=v*D-S*A,U=v*y-x*A,G=v*_-M*A,z=S*y-x*D,K=S*_-M*D,ee=x*_-M*y,pe=L*ee-R*K+N*z+V*G-I*U+O*w;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/pe;return e[0]=(f*ee-h*K+p*z)*j,e[1]=(o*K-r*ee-l*z)*j,e[2]=(D*O-y*I+_*V)*j,e[3]=(x*I-S*O-M*V)*j,e[4]=(h*G-u*ee-p*U)*j,e[5]=(t*ee-o*G+l*U)*j,e[6]=(y*N-A*O-_*R)*j,e[7]=(v*O-x*N+M*R)*j,e[8]=(u*K-f*G+p*w)*j,e[9]=(r*G-t*K-l*w)*j,e[10]=(A*I-D*N+_*L)*j,e[11]=(S*N-v*I-M*L)*j,e[12]=(f*U-u*z-h*w)*j,e[13]=(t*z-r*U+o*w)*j,e[14]=(D*R-A*V-y*L)*j,e[15]=(v*V-S*R+x*L)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,A=l*S,D=u*v,y=u*S,_=f*S,L=h*p,R=h*v,N=h*S,V=r.x,I=r.y,O=r.z;return o[0]=(1-(D+_))*V,o[1]=(M+N)*V,o[2]=(A-R)*V,o[3]=0,o[4]=(M-N)*I,o[5]=(1-(x+_))*I,o[6]=(y+L)*I,o[7]=0,o[8]=(A+R)*O,o[9]=(y-L)*O,o[10]=(1-(x+D))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Gi.copy(this);const p=1/u,v=1/f,S=1/h;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=v,Gi.elements[5]*=v,Gi.elements[6]*=v,Gi.elements[8]*=S,Gi.elements[9]*=S,Gi.elements[10]*=S,t.setFromRotationMatrix(Gi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=ir,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let A,D;if(h)A=l/(u-l),D=u*l/(u-l);else if(f===ir)A=-(u+l)/(u-l),D=-2*u*l/(u-l);else if(f===ec)A=-u/(u-l),D=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=ir,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let A,D;if(h)A=1/(u-l),D=u/(u-l);else if(f===ir)A=-2/(u-l),D=-(u+l)/(u-l);else if(f===ec)A=-1/(u-l),D=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let Ln=sc;const ea=new Q,Gi=new Ln,n_=new Q(0,0,0),i_=new Q(1,1,1),Wr=new Q,_l=new Q,Si=new Q,Pm=new Ln,Im=new ya;class Cs{constructor(e=0,t=0,r=0,o=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-tn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";let q0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r_=0;const Dm=new Q,ta=new ya,xr=new Ln,yl=new Q,Qa=new Q,s_=new Q,a_=new ya,Lm=new Q(1,0,0),Um=new Q(0,1,0),Fm=new Q(0,0,1),Om={type:"added"},o_={type:"removed"},na={type:"childadded",child:null},Qu={type:"childremoved",child:null};class Ei extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ei.DEFAULT_UP.clone();const e=new Q,t=new Cs,r=new ya,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Ht}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=Ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Qa,yl,this.up):xr.lookAt(yl,Qa,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(xr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,a_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ei.DEFAULT_UP=new Q(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l_={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const y=t.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xn{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=rn.workingColorSpace){return this.r=e,this.g=t,this.b=r,rn.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=rn.workingColorSpace){if(e=qv(e,1),t=tn(t,0,1),r=tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=td(u,l,e+1/3),this.g=td(u,l,e),this.b=td(u,l,e-1/3)}return rn.colorSpaceToWorking(this,o),this}setStyle(e,t=Di){function r(l){l!==void 0&&parseFloat(l)<1&&Pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return rn.workingToColorSpace(ei.copy(this),e),Math.round(tn(ei.r*255,0,255))*65536+Math.round(tn(ei.g*255,0,255))*256+Math.round(tn(ei.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.workingToColorSpace(ei.copy(this),t);const r=ei.r,o=ei.g,l=ei.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=rn.workingColorSpace){return rn.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Di){rn.workingToColorSpace(ei.copy(this),e);const t=ei.r,r=ei.g,o=ei.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Sl);const r=$u(Xr.h,Sl.h,t),o=$u(Xr.s,Sl.s,t),l=$u(Xr.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new xn;xn.NAMES=K0;class c_ extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new Q,vr=new Q,nd=new Q,_r=new Q,ia=new Q,ra=new Q,km=new Q,id=new Q,rd=new Q,sd=new Q,ad=new Nn,od=new Nn,ld=new Nn;class Xi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ji.subVectors(e,t),o.cross(ji);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ji.subVectors(o,t),vr.subVectors(r,t),nd.subVectors(e,t);const u=ji.dot(ji),f=ji.dot(vr),h=ji.dot(nd),p=vr.dot(vr),v=vr.dot(nd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,A=(u*v-f*h)*x;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,_r.x),h.addScaledVector(u,_r.y),h.addScaledVector(f,_r.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return ji.subVectors(r,t),vr.subVectors(e,t),ji.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),ji.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),id.subVectors(e,r);const h=ia.dot(id),p=ra.dot(id);if(h<=0&&p<=0)return t.copy(r);rd.subVectors(e,o);const v=ia.dot(rd),S=ra.dot(rd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);sd.subVectors(e,l);const M=ia.dot(sd),A=ra.dot(sd);if(A>=0&&M<=A)return t.copy(l);const D=M*p-h*A;if(D<=0&&p>=0&&A<=0)return f=p/(p-A),t.copy(r).addScaledVector(ra,f);const y=v*A-M*S;if(y<=0&&S-v>=0&&M-A>=0)return km.subVectors(l,o),f=(S-v)/(S-v+(M-A)),t.copy(o).addScaledVector(km,f);const _=1/(y+D+x);return u=D*_,f=x*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Wi):Wi.fromBufferAttribute(l,u),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),El.subVectors(this.max,eo),sa.subVectors(e.a,eo),aa.subVectors(e.b,eo),oa.subVectors(e.c,eo),Yr.subVectors(aa,sa),$r.subVectors(oa,aa),ps.subVectors(sa,oa);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-ps.z,ps.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,ps.z,0,-ps.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-ps.y,ps.x,0];return!cd(t,sa,aa,oa,El)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,sa,aa,oa,El))?!1:(wl.crossVectors(Yr,$r),t=[wl.x,wl.y,wl.z],cd(t,sa,aa,oa,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Wi=new Q,Ml=new go,sa=new Q,aa=new Q,oa=new Q,Yr=new Q,$r=new Q,ps=new Q,eo=new Q,El=new Q,wl=new Q,ms=new Q;function cd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),h=e.dot(ms),p=t.dot(ms),v=r.dot(ms);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Dn=new Q,bl=new It;let u_=0;class ar extends Rs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=mi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),r=mi(r,this.array),o=mi(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),r=mi(r,this.array),o=mi(o,this.array),l=mi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Z0 extends ar{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class J0 extends ar{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Pn extends ar{constructor(e,t,r){super(new Float32Array(e),t,r)}}const d_=new go,to=new Q,ud=new Q;class Uf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):d_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ud)),this.expandByPoint(to.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let f_=0;const Pi=new Ln,dd=new Ei,la=new Q,Mi=new go,no=new go,Gn=new Q;class wi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wv(e)?J0:Z0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,r){return Pi.makeTranslation(e,t,r),this.applyMatrix4(Pi),this}scale(e,t,r){return Pi.makeScale(e,t,r),this.applyMatrix4(Pi),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(Gn.addVectors(Mi.min,no.min),Mi.expandByPoint(Gn),Gn.addVectors(Mi.max,no.max),Mi.expandByPoint(Gn)):(Mi.expandByPoint(no.min),Mi.expandByPoint(no.max))}Mi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Gn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Gn.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Gn.add(la)),o=Math.max(o,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ar(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new Q,h[w]=new Q;const p=new Q,v=new Q,S=new Q,x=new It,M=new It,A=new It,D=new Q,y=new Q;function _(w,U,G){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,U),S.fromBufferAttribute(r,G),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,U),A.fromBufferAttribute(l,G),v.sub(p),S.sub(p),M.sub(x),A.sub(x);const z=1/(M.x*A.y-A.x*M.y);isFinite(z)&&(D.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(z),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(z),f[w].add(D),f[U].add(D),f[G].add(D),h[w].add(y),h[U].add(y),h[G].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let w=0,U=L.length;w<U;++w){const G=L[w],z=G.start,K=G.count;for(let ee=z,pe=z+K;ee<pe;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new Q,N=new Q,V=new Q,I=new Q;function O(w){V.fromBufferAttribute(o,w),I.copy(V);const U=f[w];R.copy(U),R.sub(V.multiplyScalar(V.dot(U))).normalize(),N.crossVectors(I,U);const z=N.dot(h[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,z)}for(let w=0,U=L.length;w<U;++w){const G=L[w],z=G.start,K=G.count;for(let ee=z,pe=z+K;ee<pe;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ar(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,h=new Q,p=new Q,v=new Q,S=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),D=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,D),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(D,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,A=0;for(let D=0,y=h.length;D<y;D++){f.isInterleavedBufferAttribute?M=h[D]*f.data.stride+f.offset:M=h[D]*v;for(let _=0;_<v;_++)x[A++]=p[M++]}return new ar(x,v,S)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let h_=0;class oc extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=pa,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Nd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xn(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new Q,fd=new Q,Tl=new Q,qr=new Q,hd=new Q,Al=new Q,pd=new Q;class p_{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=qr.dot(this.direction),h=-qr.dot(Tl),p=qr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,A;if(v>0)if(S=u*h-f,x=u*f-h,A=l*v,S>=0)if(x>=-A)if(x<=A){const D=1/v;S*=D,x*=D,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-A?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=A?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(fd).addScaledVector(Tl,x),M}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),Al.subVectors(r,e),pd.crossVectors(hd,Al);let u=this.direction.dot(pd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;qr.subVectors(this.origin,e);const h=f*this.direction.dot(Al.crossVectors(qr,Al));if(h<0)return null;const p=f*this.direction.dot(hd.cross(qr));if(p<0||h+p>u)return null;const v=-f*qr.dot(pd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class es extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bm=new Ln,gs=new p_,Cl=new Uf,zm=new Q,Rl=new Q,Nl=new Q,Pl=new Q,md=new Q,Il=new Q,Vm=new Q,Dl=new Q;class oi extends Ei{constructor(e=new wi,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(md.fromBufferAttribute(S,e),u?Il.addScaledVector(md,v):Il.addScaledVector(md.sub(t),v))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Cl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Cl,zm)===null||gs.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),gs.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,D=x.length;A<D;A++){const y=x[A],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,V=R;N<V;N+=3){const I=f.getX(N),O=f.getX(N+1),w=f.getX(N+2);o=Ll(this,_,e,r,p,v,S,I,O,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),D=Math.min(f.count,M.start+M.count);for(let y=A,_=D;y<_;y+=3){const L=f.getX(y),R=f.getX(y+1),N=f.getX(y+2);o=Ll(this,u,e,r,p,v,S,L,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,D=x.length;A<D;A++){const y=x[A],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,V=R;N<V;N+=3){const I=N,O=N+1,w=N+2;o=Ll(this,_,e,r,p,v,S,I,O,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=A,_=D;y<_;y+=3){const L=y,R=y+1,N=y+2;o=Ll(this,u,e,r,p,v,S,L,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function m_(s,e,t,r,o,l,u,f){let h;if(e.side===gi?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ts,f),h===null)return null;Dl.copy(f),Dl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Dl);return p<t.near||p>t.far?null:{distance:p,point:Dl.clone(),object:s}}function Ll(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Rl),s.getVertexPosition(h,Nl),s.getVertexPosition(p,Pl);const v=m_(s,e,t,r,Rl,Nl,Pl,Vm);if(v){const S=new Q;Xi.getBarycoord(Vm,Rl,Nl,Pl,S),o&&(v.uv=Xi.getInterpolatedAttribute(o,f,h,p,S,new It)),l&&(v.uv1=Xi.getInterpolatedAttribute(l,f,h,p,S,new It)),u&&(v.normal=Xi.getInterpolatedAttribute(u,f,h,p,S,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new Q,materialIndex:0};Xi.getNormal(Rl,Nl,Pl,x.normal),v.face=x,v.barycoord=S}return v}class g_ extends ai{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Yn,v=Yn,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new Q,x_=new Q,v_=new Ht;class ys{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(x_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||v_.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Uf,__=new It(.5,.5),Ul=new Q;class Q0{constructor(e=new ys,t=new ys,r=new ys,o=new ys,l=new ys,u=new ys){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],A=l[8],D=l[9],y=l[10],_=l[11],L=l[12],R=l[13],N=l[14],V=l[15];if(o[0].setComponents(p-u,M-v,_-A,V-L).normalize(),o[1].setComponents(p+u,M+v,_+A,V+L).normalize(),o[2].setComponents(p+f,M+S,_+D,V+R).normalize(),o[3].setComponents(p-f,M-S,_-D,V-R).normalize(),r)o[4].setComponents(h,x,y,N).normalize(),o[5].setComponents(p-h,M-x,_-y,V-N).normalize();else if(o[4].setComponents(p-h,M-x,_-y,V-N).normalize(),t===ir)o[5].setComponents(p+h,M+x,_+y,V+N).normalize();else if(t===ec)o[5].setComponents(h,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=__.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eg extends ai{constructor(e=[],t=Ts,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends ai{constructor(e,t,r=or,o,l,u,f=Yn,h=Yn,p,v=Ar,S=1){if(v!==Ar&&v!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class y_ extends va{constructor(e,t=or,r=Ts,o,l,u=Yn,f=Yn,h,p=Ar){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tg extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends wi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(S,2));function A(D,y,_,L,R,N,V,I,O,w,U){const G=N/O,z=V/w,K=N/2,ee=V/2,pe=I/2,j=O+1,ie=w+1;let q=0,Z=0;const me=new Q;for(let oe=0;oe<ie;oe++){const B=oe*z-ee;for(let re=0;re<j;re++){const Ke=re*G-K;me[D]=Ke*L,me[y]=B*R,me[_]=pe,p.push(me.x,me.y,me.z),me[D]=0,me[y]=0,me[_]=I>0?1:-1,v.push(me.x,me.y,me.z),S.push(re/O),S.push(1-oe/w),q+=1}}for(let oe=0;oe<w;oe++)for(let B=0;B<O;B++){const re=x+B+j*oe,Ke=x+B+j*(oe+1),et=x+(B+1)+j*(oe+1),Te=x+(B+1)+j*oe;h.push(re,Ke,Te),h.push(Ke,et,Te),Z+=6}f.addGroup(M,Z,U),M+=Z,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ff extends wi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let A=0;const D=[],y=r/2;let _=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new Pn(S,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(M,2));function L(){const N=new Q,V=new Q;let I=0;const O=(t-e)/r;for(let w=0;w<=l;w++){const U=[],G=w/l,z=G*(t-e)+e;for(let K=0;K<=o;K++){const ee=K/o,pe=ee*h+f,j=Math.sin(pe),ie=Math.cos(pe);V.x=z*j,V.y=-G*r+y,V.z=z*ie,S.push(V.x,V.y,V.z),N.set(j,O,ie).normalize(),x.push(N.x,N.y,N.z),M.push(ee,1-G),U.push(A++)}D.push(U)}for(let w=0;w<o;w++)for(let U=0;U<l;U++){const G=D[U][w],z=D[U+1][w],K=D[U+1][w+1],ee=D[U][w+1];(e>0||U!==0)&&(v.push(G,z,ee),I+=3),(t>0||U!==l-1)&&(v.push(z,K,ee),I+=3)}p.addGroup(_,I,0),_+=I}function R(N){const V=A,I=new It,O=new Q;let w=0;const U=N===!0?e:t,G=N===!0?1:-1;for(let K=1;K<=o;K++)S.push(0,y*G,0),x.push(0,G,0),M.push(.5,.5),A++;const z=A;for(let K=0;K<=o;K++){const pe=K/o*h+f,j=Math.cos(pe),ie=Math.sin(pe);O.x=U*ie,O.y=y*G,O.z=U*j,S.push(O.x,O.y,O.z),x.push(0,G,0),I.x=j*.5+.5,I.y=ie*.5*G+.5,M.push(I.x,I.y),A++}for(let K=0;K<o;K++){const ee=V+K,pe=z+K;N===!0?v.push(pe,pe+1,ee):v.push(pe+1,pe,ee),w+=3}p.addGroup(_,w,N===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Ff{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new It:new Q);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Q,o=[],l=[],u=[],f=new Q,h=new Ln;for(let M=0;M<=e;M++){const A=M/e;o[M]=this.getTangentAt(A,new Q)}l[0]=new Q,u[0]=new Q;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const A=Math.acos(tn(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,A))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(tn(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let A=1;A<=e;A++)l[A].applyMatrix4(h.makeRotationAxis(o[A],M*A)),u[A].crossVectors(o[A],l[A])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ng extends Cr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new It){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S_ extends ng{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Hm=new Q,Gm=new Q,xd=new Of,vd=new Of,_d=new Of;class kf extends Cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Q){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Gm.subVectors(o[0],o[1]).add(o[0]),p=Gm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Hm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Hm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(p.distanceToSquared(S),M),D=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);D<1e-4&&(D=1),A<1e-4&&(A=D),y<1e-4&&(y=D),xd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,A,D,y),vd.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,A,D,y),_d.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,A,D,y)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),vd.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),_d.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(xd.calc(h),vd.calc(h),_d.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Q().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function M_(s,e){const t=1-s;return t*t*e}function E_(s,e){return 2*(1-s)*s*e}function w_(s,e){return s*s*e}function uo(s,e,t,r){return M_(s,e)+E_(s,t)+w_(s,r)}function b_(s,e){const t=1-s;return t*t*t*e}function T_(s,e){const t=1-s;return 3*t*t*s*e}function A_(s,e){return 3*(1-s)*s*s*e}function C_(s,e){return s*s*s*e}function fo(s,e,t,r,o){return b_(s,e)+T_(s,t)+A_(s,r)+C_(s,o)}class R_ extends Cr{constructor(e=new It,t=new It,r=new It,o=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new It){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N_ extends Cr{constructor(e=new Q,t=new Q,r=new Q,o=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Q){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P_ extends Cr{constructor(e=new It,t=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new It){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new It){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends Cr{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Q){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends Cr{constructor(e=new It,t=new It,r=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new It){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ig extends Cr{constructor(e=new Q,t=new Q,r=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Q){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends Cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new It){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(jm(f,h.x,p.x,v.x,S.x),jm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new It().fromArray(o))}return this}}var U_=Object.freeze({__proto__:null,ArcCurve:S_,CatmullRomCurve3:kf,CubicBezierCurve:R_,CubicBezierCurve3:N_,EllipseCurve:ng,LineCurve:P_,LineCurve3:I_,QuadraticBezierCurve:D_,QuadraticBezierCurve3:ig,SplineCurve:L_});class lc extends wi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],A=[],D=[],y=[];for(let _=0;_<v;_++){const L=_*x-u;for(let R=0;R<p;R++){const N=R*S-l;A.push(N,-L,0),D.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const R=L+p*_,N=L+p*(_+1),V=L+1+p*(_+1),I=L+1+p*_;M.push(R,N,I),M.push(N,V,I)}this.setIndex(M),this.setAttribute("position",new Pn(A,3)),this.setAttribute("normal",new Pn(D,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bf extends wi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new Q,A=new It;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),A.x=(M.x/t+1)/2,A.y=(M.y/t+1)/2,v.push(A.x,A.y)}S+=x}for(let D=0;D<o;D++){const y=D*(r+1);for(let _=0;_<r;_++){const L=_+y,R=L,N=L+r+1,V=L+r+2,I=L+1;f.push(R,N,I),f.push(N,V,I)}}this.setIndex(f),this.setAttribute("position",new Pn(h,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends wi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new Q,x=new Q,M=[],A=[],D=[],y=[];for(let _=0;_<=r;_++){const L=[],R=_/r;let N=0;_===0&&u===0?N=.5/t:_===r&&h===Math.PI&&(N=-.5/t);for(let V=0;V<=t;V++){const I=V/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+I*l)*Math.sin(u+R*f),A.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+N,1-R),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const R=v[_][L+1],N=v[_][L],V=v[_+1][L],I=v[_+1][L+1];(_!==0||u>0)&&M.push(R,N,I),(_!==r-1||h<Math.PI)&&M.push(N,V,I)}this.setIndex(M),this.setAttribute("position",new Pn(A,3)),this.setAttribute("normal",new Pn(D,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zf extends wi{constructor(e=new ig(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new Q,h=new Q,p=new It;let v=new Q;const S=[],x=[],M=[],A=[];D(),this.setIndex(A),this.setAttribute("position",new Pn(S,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(M,2));function D(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),L(),_()}function y(R){v=e.getPointAt(R/t,v);const N=u.normals[R],V=u.binormals[R];for(let I=0;I<=o;I++){const O=I/o*Math.PI*2,w=Math.sin(O),U=-Math.cos(O);h.x=U*N.x+w*V.x,h.y=U*N.y+w*V.y,h.z=U*N.z+w*V.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let N=1;N<=o;N++){const V=(o+1)*(R-1)+(N-1),I=(o+1)*R+(N-1),O=(o+1)*R+N,w=(o+1)*(R-1)+N;A.push(V,I,w),A.push(I,O,w)}}function L(){for(let R=0;R<=t;R++)for(let N=0;N<=o;N++)p.x=R/t,p.y=N/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zf(new U_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Wm(o))o.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Wm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function si(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function F_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rn.workingColorSpace}const O_={clone:_a,merge:si};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class z_ extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class V_ extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fl=new Q,Ol=new ya,Qi=new Q;let sg=class extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Ol,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fl,Ol,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Kr=new Q,Xm=new It,Ym=new It;class Li extends sg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ag extends sg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,ua=1;class G_ extends Ei{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Li(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Li(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Li(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new Li(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new Li(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class j_ extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wf=class Wf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Wf.prototype.isMatrix2=!0;let $m=Wf;function qm(s,e,t,r){const o=W_(r);switch(t){case j0:return s*e;case X0:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case As:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case W0:return s*e*3/o.components*o.byteLength;case Yi:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case jl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Wd:case Yd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Kl:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W_(s){switch(s){case Ui:case z0:return{byteLength:1,components:1};case ho:case V0:case Tr:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case or:case Tf:case nr:return{byteLength:4,components:1};case H0:case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function X_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<S.length;M++){const A=S[x],D=S[M];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,A=S.length;M<A;M++){const D=S[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`#ifdef USE_BATCHING
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
#endif`,ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gy=`#define PI 3.141592653589793
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
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
#endif`,Wy=`uniform sampler2D dfgLUT;
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
}`,Xy=`
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IS=`float getShadowMask() {
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
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$S=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,d1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,y1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,b1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Y_,alphahash_pars_fragment:$_,alphamap_fragment:q_,alphamap_pars_fragment:K_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:Q_,aomap_pars_fragment:ey,batching_pars_vertex:ty,batching_vertex:ny,begin_vertex:iy,beginnormal_vertex:ry,bsdfs:sy,iridescence_fragment:ay,bumpmap_pars_fragment:oy,clipping_planes_fragment:ly,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:dy,color_fragment:fy,color_pars_fragment:hy,color_pars_vertex:py,color_vertex:my,common:gy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:vy,displacementmap_pars_vertex:_y,displacementmap_vertex:yy,emissivemap_fragment:Sy,emissivemap_pars_fragment:My,colorspace_fragment:Ey,colorspace_pars_fragment:wy,envmap_fragment:by,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Ay,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:By,envmap_vertex:Ry,fog_vertex:Ny,fog_pars_vertex:Py,fog_fragment:Iy,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Oy,lights_pars_begin:ky,lights_toon_fragment:zy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Gy,lights_physical_fragment:jy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:Yy,lights_fragment_end:$y,lightprobes_pars_fragment:qy,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:Qy,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:MS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:bS,dithering_pars_fragment:TS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:NS,shadowmap_vertex:PS,shadowmask_pars_fragment:IS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:BS,tonemapping_pars_fragment:zS,transmission_fragment:VS,transmission_pars_fragment:HS,uv_pars_fragment:GS,uv_pars_vertex:jS,uv_vertex:WS,worldpos_vertex:XS,background_vert:YS,background_frag:$S,backgroundCube_vert:qS,backgroundCube_frag:KS,cube_vert:ZS,cube_frag:JS,depth_vert:QS,depth_frag:e1,distance_vert:t1,distance_frag:n1,equirect_vert:i1,equirect_frag:r1,linedashed_vert:s1,linedashed_frag:a1,meshbasic_vert:o1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:d1,meshmatcap_frag:f1,meshnormal_vert:h1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:x1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:y1,points_vert:S1,points_frag:M1,shadow_vert:E1,shadow_frag:w1,sprite_vert:b1,sprite_frag:T1},nt={common:{diffuse:{value:new xn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new xn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new xn(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},tr={basic:{uniforms:si([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:si([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xn(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:si([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xn(0)},specular:{value:new xn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:si([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new xn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:si([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new xn(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:si([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:si([nt.points,nt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:si([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:si([nt.common,nt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:si([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:si([nt.sprite,nt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:si([nt.common,nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:si([nt.lights,nt.fog,{color:{value:new xn(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};tr.physical={uniforms:si([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new xn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new xn(0)},specularColor:{value:new xn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const kl={r:0,b:0,g:0},A1=new Ln,lg=new Ht;lg.set(-1,0,0,0,1,0,0,0,1);function C1(s,e,t,r,o,l){const u=new xn(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;if(R&&R.isTexture){const N=L.backgroundBlurriness>0;R=e.get(R,N)}return R}function A(L){let R=!1;const N=M(L);N===null?y(u,f):N&&N.isColor&&(y(N,1),R=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(L,R){const N=M(R);N&&(N.isCubeTexture||N.mapping===ac)?(p===void 0&&(p=new oi(new xo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:_a(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(R.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(lg),p.material.toneMapped=rn.getTransfer(N.colorSpace)!==gn,(v!==N||S!==N.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new oi(new lc(2,2),new lr({name:"BackgroundMaterial",uniforms:_a(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=rn.getTransfer(N.colorSpace)!==gn,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,R){L.getRGB(kl,rg(s)),t.buffers.color.setClear(kl.r,kl.g,kl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:A,addToRenderList:D,dispose:_}}function R1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(z,K,ee,pe,j){let ie=!1;const q=S(z,pe,ee,K);l!==q&&(l=q,p(l.object)),ie=M(z,pe,ee,j),ie&&A(z,pe,ee,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,N(z,K,ee,pe),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function v(z){return s.deleteVertexArray(z)}function S(z,K,ee,pe){const j=pe.wireframe===!0;let ie=r[K.id];ie===void 0&&(ie={},r[K.id]=ie);const q=z.isInstancedMesh===!0?z.id:0;let Z=ie[q];Z===void 0&&(Z={},ie[q]=Z);let me=Z[ee.id];me===void 0&&(me={},Z[ee.id]=me);let oe=me[j];return oe===void 0&&(oe=x(h()),me[j]=oe),oe}function x(z){const K=[],ee=[],pe=[];for(let j=0;j<t;j++)K[j]=0,ee[j]=0,pe[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ee,attributeDivisors:pe,object:z,attributes:{},index:null}}function M(z,K,ee,pe){const j=l.attributes,ie=K.attributes;let q=0;const Z=ee.getAttributes();for(const me in Z)if(Z[me].location>=0){const B=j[me];let re=ie[me];if(re===void 0&&(me==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),me==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),B===void 0||B.attribute!==re||re&&B.data!==re.data)return!0;q++}return l.attributesNum!==q||l.index!==pe}function A(z,K,ee,pe){const j={},ie=K.attributes;let q=0;const Z=ee.getAttributes();for(const me in Z)if(Z[me].location>=0){let B=ie[me];B===void 0&&(me==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),me==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const re={};re.attribute=B,B&&B.data&&(re.data=B.data),j[me]=re,q++}l.attributes=j,l.attributesNum=q,l.index=pe}function D(){const z=l.newAttributes;for(let K=0,ee=z.length;K<ee;K++)z[K]=0}function y(z){_(z,0)}function _(z,K){const ee=l.newAttributes,pe=l.enabledAttributes,j=l.attributeDivisors;ee[z]=1,pe[z]===0&&(s.enableVertexAttribArray(z),pe[z]=1),j[z]!==K&&(s.vertexAttribDivisor(z,K),j[z]=K)}function L(){const z=l.newAttributes,K=l.enabledAttributes;for(let ee=0,pe=K.length;ee<pe;ee++)K[ee]!==z[ee]&&(s.disableVertexAttribArray(ee),K[ee]=0)}function R(z,K,ee,pe,j,ie,q){q===!0?s.vertexAttribIPointer(z,K,ee,j,ie):s.vertexAttribPointer(z,K,ee,pe,j,ie)}function N(z,K,ee,pe){D();const j=pe.attributes,ie=ee.getAttributes(),q=K.defaultAttributeValues;for(const Z in ie){const me=ie[Z];if(me.location>=0){let oe=j[Z];if(oe===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const B=oe.normalized,re=oe.itemSize,Ke=e.get(oe);if(Ke===void 0)continue;const et=Ke.buffer,Te=Ke.type,ce=Ke.bytesPerElement,Ee=Te===s.INT||Te===s.UNSIGNED_INT||oe.gpuType===Tf;if(oe.isInterleavedBufferAttribute){const ve=oe.data,Le=ve.stride,tt=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let lt=0;lt<me.locationSize;lt++)_(me.location+lt,ve.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let lt=0;lt<me.locationSize;lt++)y(me.location+lt);s.bindBuffer(s.ARRAY_BUFFER,et);for(let lt=0;lt<me.locationSize;lt++)R(me.location+lt,re/me.locationSize,Te,B,Le*ce,(tt+re/me.locationSize*lt)*ce,Ee)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<me.locationSize;ve++)_(me.location+ve,oe.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<me.locationSize;ve++)y(me.location+ve);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ve=0;ve<me.locationSize;ve++)R(me.location+ve,re/me.locationSize,Te,B,re*ce,re/me.locationSize*ve*ce,Ee)}}else if(q!==void 0){const B=q[Z];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(me.location,B);break;case 3:s.vertexAttrib3fv(me.location,B);break;case 4:s.vertexAttrib4fv(me.location,B);break;default:s.vertexAttrib1fv(me.location,B)}}}}L()}function V(){U();for(const z in r){const K=r[z];for(const ee in K){const pe=K[ee];for(const j in pe){const ie=pe[j];for(const q in ie)v(ie[q].object),delete ie[q];delete pe[j]}}delete r[z]}}function I(z){if(r[z.id]===void 0)return;const K=r[z.id];for(const ee in K){const pe=K[ee];for(const j in pe){const ie=pe[j];for(const q in ie)v(ie[q].object),delete ie[q];delete pe[j]}}delete r[z.id]}function O(z){for(const K in r){const ee=r[K];for(const pe in ee){const j=ee[pe];if(j[z.id]===void 0)continue;const ie=j[z.id];for(const q in ie)v(ie[q].object),delete ie[q];delete j[z.id]}}}function w(z){for(const K in r){const ee=r[K],pe=z.isInstancedMesh===!0?z.id:0,j=ee[pe];if(j!==void 0){for(const ie in j){const q=j[ie];for(const Z in q)v(q[Z].object),delete q[Z];delete j[ie]}delete ee[pe],Object.keys(ee).length===0&&delete r[K]}}}function U(){G(),u=!0,l!==o&&(l=o,p(l.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:G,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:y,disableUnusedAttributes:L}}function N1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function P1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Yi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ui&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==nr&&!w)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(Pt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:N,maxSamples:V,samples:I}}function I1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ys,f=new Ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const A=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):p();else{const L=l?0:r,R=L*4;let N=_.clippingState||null;h.value=N,N=v(A,x,R,M);for(let V=0;V!==R;++V)N[V]=t[V];_.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,A){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=h.value,A!==!0||y===null){const _=M+D*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,N=M;R!==D;++R,N+=4)u.copy(S[R]).applyMatrix4(L,f),u.normal.toArray(y,N),y[N+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const Qr=4,Km=[.125,.215,.35,.446,.526,.582],Ms=20,D1=256,io=new ag,Zm=new xn;let yd=null,Sd=0,Md=0,Ed=!1;const L1=new Q;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=L1}=l;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Tr,format:Yi,colorSpace:Jl,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U1(l)),this._blurMaterial=O1(l,e,t),this._ggxMaterial=F1(l,e,t)}return o}_compileMaterial(e){const t=new oi(new wi,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new Li(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Zm),S.toneMapping=rr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new xo,new es({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let _=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,_=!0):(y.color.copy(Zm),_=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):N===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const V=this._cubeSize;da(o,N*V,R>2?V:0,V,V),S.setRenderTarget(o),_&&S.render(D,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ts||e.mapping===xa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:A}=this,D=this._sizeLods[r],y=3*D*(r>A-Qr?r-A+Qr:0),_=4*(this._cubeSize-D);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=A-t,da(l,y,_,3*D,2*D),o.setRenderTarget(l),o.render(f,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=A-r,da(e,y,_,3*D,2*D),o.setRenderTarget(e),o.render(f,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),D=l/A,y=isFinite(l)?1+Math.floor(v*D):Ms;y>Ms&&Pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const _=[];let L=0;for(let O=0;O<Ms;++O){const w=O/D,U=Math.exp(-w*w/2);_.push(U),O===0?L+=U:O<y&&(L+=2*U)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=A,x.mipInt.value=R-r;const N=this._sizeLods[o],V=3*N*(o>R-Qr?o-R+Qr:0),I=4*(this._cubeSize-N);da(t,V,I,3*N,2*N),h.setRenderTarget(t),h.render(S,io)}}function U1(s){const e=[],t=[],r=[];let o=s;const l=s-Qr+1+Km.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Qr?h=Km[u-s+Qr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,D=3,y=2,_=1,L=new Float32Array(D*A*M),R=new Float32Array(y*A*M),N=new Float32Array(_*A*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,w=I>2?0:-1,U=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];L.set(U,D*A*I),R.set(x,y*A*I);const G=[I,I,I,I,I,I];N.set(G,_*A*I)}const V=new wi;V.setAttribute("position",new ar(L,D)),V.setAttribute("uv",new ar(R,y)),V.setAttribute("faceIndex",new ar(N,_)),r.push(new oi(V,null)),o>Qr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new sr(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function F1(s,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function O1(s,e,t){const r=new Float32Array(Ms),o=new Q(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function e0(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function t0(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}class cg extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new eg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xo(5,5,5),l=new lr({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:wr});l.uniforms.tEquirect.value=t;const u=new oi(o,l),f=t.minFilter;return t.minFilter===Es&&(t.minFilter=ni),new G_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function k1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===ju||M===Wu)if(e.has(x)){const A=e.get(x).texture;return f(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const D=new cg(A.height);return D.fromEquirectangularTexture(s,x),e.set(x,D),x.addEventListener("dispose",p),f(D.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,A=M===ju||M===Wu,D=M===Ts||M===xa;if(A||D){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const L=x.image;return A&&L&&L.height>0||D&&L&&h(L)?(r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===ju?x.mapping=Ts:M===Wu&&(x.mapping=xa),x}function h(x){let M=0;const A=6;for(let D=0;D<A;D++)x[D]!==void 0&&M++;return M===A}function p(x){const M=x.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function B1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&xf("WebGLRenderer: "+r+" extension not supported."),o}}}function z1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,A=S.attributes.position;let D=0;if(A===void 0)return;if(M!==null){const L=M.array;D=M.version;for(let R=0,N=L.length;R<N;R+=3){const V=L[R+0],I=L[R+1],O=L[R+2];x.push(V,I,I,O,O,V)}}else{const L=A.array;D=A.version;for(let R=0,N=L.length/3-1;R<N;R+=3){const V=R+0,I=R+1,O=R+2;x.push(V,I,I,O,O,V)}}const y=new(A.count>=65535?J0:Z0)(x,1);y.version=D;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function V1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];t.update(D,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function H1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:on("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function G1(s,e,t){const r=new WeakMap,o=new Nn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let G=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",G)};var M=G;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let N=0;A===!0&&(N=1),D===!0&&(N=2),y===!0&&(N=3);let V=f.attributes.position.count*N,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*I*4*S),w=new $0(O,V,I,S);w.type=nr,w.needsUpdate=!0;const U=N*4;for(let z=0;z<S;z++){const K=_[z],ee=L[z],pe=R[z],j=V*I*4*z;for(let ie=0;ie<K.count;ie++){const q=ie*U;A===!0&&(o.fromBufferAttribute(K,ie),O[j+q+0]=o.x,O[j+q+1]=o.y,O[j+q+2]=o.z,O[j+q+3]=0),D===!0&&(o.fromBufferAttribute(ee,ie),O[j+q+4]=o.x,O[j+q+5]=o.y,O[j+q+6]=o.z,O[j+q+7]=0),y===!0&&(o.fromBufferAttribute(pe,ie),O[j+q+8]=o.x,O[j+q+9]=o.y,O[j+q+10]=o.z,O[j+q+11]=pe.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new It(V,I)},r.set(f,x),f.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const D=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",D),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function j1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const W1={[I0]:"LINEAR_TONE_MAPPING",[D0]:"REINHARD_TONE_MAPPING",[L0]:"CINEON_TONE_MAPPING",[U0]:"ACES_FILMIC_TONE_MAPPING",[O0]:"AGX_TONE_MAPPING",[k0]:"NEUTRAL_TONE_MAPPING",[F0]:"CUSTOM_TONE_MAPPING"};function X1(s,e,t,r,o){const l=new sr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new va(e,t):void 0}),u=new sr(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),f=new wi;f.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const h=new z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new oi(f,h),v=new ag(-1,1,1,-1,0,1);let S=null,x=null,M=!1,A,D=null,y=[],_=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let N=0;N<y.length;N++){const V=y[N];V.setSize&&V.setSize(L,R)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,N=l.height;for(let V=0;V<y.length;V++){const I=y[V];I.setSize&&I.setSize(R,N)}},this.begin=function(L,R){if(M||L.toneMapping===rr&&y.length===0)return!1;if(D=R,R!==null){const N=R.width,V=R.height;(l.width!==N||l.height!==V)&&this.setSize(N,V)}return _===!1&&L.setRenderTarget(l),A=L.toneMapping,L.toneMapping=rr,!0},this.hasRenderPass=function(){return _},this.end=function(L,R){L.toneMapping=A,M=!0;let N=l,V=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(L,V,N,R),O.needsSwap!==!1)){const w=N;N=V,V=w}}if(S!==L.outputColorSpace||x!==L.toneMapping){S=L.outputColorSpace,x=L.toneMapping,h.defines={},rn.getTransfer(S)===gn&&(h.defines.SRGB_TRANSFER="");const I=W1[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(D),L.render(p,v),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const ug=new ai,_f=new va(1,1),dg=new $0,fg=new t_,hg=new eg,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=n0[o];if(l===void 0&&(l=new Float32Array(o),n0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function kn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Bn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Y1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2fv(this.addr,e),Bn(t,e)}}function q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;s.uniform3fv(this.addr,e),Bn(t,e)}}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4fv(this.addr,e),Bn(t,e)}}function Z1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(kn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,r))return;a0.set(r),s.uniformMatrix2fv(this.addr,!1,a0),Bn(t,r)}}function J1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(kn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,r))return;s0.set(r),s.uniformMatrix3fv(this.addr,!1,s0),Bn(t,r)}}function Q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(kn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(kn(t,r))return;r0.set(r),s.uniformMatrix4fv(this.addr,!1,r0),Bn(t,r)}}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2iv(this.addr,e),Bn(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3iv(this.addr,e),Bn(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4iv(this.addr,e),Bn(t,e)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2uiv(this.addr,e),Bn(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3uiv(this.addr,e),Bn(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4uiv(this.addr,e),Bn(t,e)}}function lM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Df:If,l=_f):l=ug,t.setTexture2D(e||l,o)}function cM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||fg,o)}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||hg,o)}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||dg,o)}function fM(s){switch(s){case 5126:return Y1;case 35664:return $1;case 35665:return q1;case 35666:return K1;case 35674:return Z1;case 35675:return J1;case 35676:return Q1;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}function hM(s,e){s.uniform1fv(this.addr,e)}function pM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function mM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function gM(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function xM(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vM(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _M(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yM(s,e){s.uniform1iv(this.addr,e)}function SM(s,e){s.uniform2iv(this.addr,e)}function MM(s,e){s.uniform3iv(this.addr,e)}function EM(s,e){s.uniform4iv(this.addr,e)}function wM(s,e){s.uniform1uiv(this.addr,e)}function bM(s,e){s.uniform2uiv(this.addr,e)}function TM(s,e){s.uniform3uiv(this.addr,e)}function AM(s,e){s.uniform4uiv(this.addr,e)}function CM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);kn(r,l)||(s.uniform1iv(this.addr,l),Bn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=ug;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function RM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);kn(r,l)||(s.uniform1iv(this.addr,l),Bn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||fg,l[u])}function NM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);kn(r,l)||(s.uniform1iv(this.addr,l),Bn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||hg,l[u])}function PM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);kn(r,l)||(s.uniform1iv(this.addr,l),Bn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||dg,l[u])}function IM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return bM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=fM(t.type)}}class LM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function o0(s,e){s.seq.push(e),s.map[e.id]=e}function FM(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){o0(t,p===void 0?new DM(f,s,e):new LM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new UM(f),o0(t,S)),t=S}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);FM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function l0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const OM=37297;let kM=0;function BM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const c0=new Ht;function zM(s){rn._getMatrix(c0,rn.workingColorSpace,s);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(rn.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case gn:return[e,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function u0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+BM(s.getShaderSource(e),f)}else return l}function VM(s,e){const t=zM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const HM={[I0]:"Linear",[D0]:"Reinhard",[L0]:"Cineon",[U0]:"ACESFilmic",[O0]:"AgX",[k0]:"Neutral",[F0]:"Custom"};function GM(s,e){const t=HM[e];return t===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new Q;function jM(){rn.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function XM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function YM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function d0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace($M,KM)}const qM=new Map;function KM(s,e){let t=$t[e];if(t===void 0){const r=qM.get(e);if(r!==void 0)t=$t[r],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(s){return s.replace(ZM,JM)}function JM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function p0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const QM={[Gl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function eE(s){return QM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tE={[Ts]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function nE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":tE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const iE={[xa]:"ENVMAP_MODE_REFRACTION"};function rE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":iE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sE={[P0]:"ENVMAP_BLENDING_MULTIPLY",[Lv]:"ENVMAP_BLENDING_MIX",[Uv]:"ENVMAP_BLENDING_ADD"};function aE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sE[s.combine]||"ENVMAP_BLENDING_NONE"}function oE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function lE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=eE(t),p=nE(t),v=rE(t),S=aE(t),x=oE(t),M=WM(t),A=XM(l),D=o.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?$t.tonemapping_pars_fragment:"",t.toneMapping!==rr?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),jM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=yf(u),u=d0(u,t),u=f0(u,t),f=yf(f),f=d0(f,t),f=f0(f,t),u=h0(u),f=h0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+y+u,N=L+_+f,V=l0(o,o.VERTEX_SHADER,R),I=l0(o,o.FRAGMENT_SHADER,N);o.attachShader(D,V),o.attachShader(D,I),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function O(z){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(D)||"",ee=o.getShaderInfoLog(V)||"",pe=o.getShaderInfoLog(I)||"",j=K.trim(),ie=ee.trim(),q=pe.trim();let Z=!0,me=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,V,I);else{const oe=u0(o,V,"vertex"),B=u0(o,I,"fragment");on("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+oe+`
`+B)}else j!==""?Pt("WebGLProgram: Program Info Log:",j):(ie===""||q==="")&&(me=!1);me&&(z.diagnostics={runnable:Z,programLog:j,vertexShader:{log:ie,prefix:y},fragmentShader:{log:q,prefix:_}})}o.deleteShader(V),o.deleteShader(I),w=new $l(o,D),U=YM(o,D)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(D,OM)),G},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=I,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dE(e),t.set(e,r)),r}}class dE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function fE(s){return s===As||s===Kl||s===Zl}function hE(s,e,t,r,o,l){const u=new q0,f=new uE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return h.add(w),w===0?"uv":`uv${w}`}function D(w,U,G,z,K,ee){const pe=z.fog,j=K.geometry,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||ie,q),me=Z&&Z.mapping===ac?Z.image.height:null,oe=M[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&Pt("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=B!==void 0?B.length:0;let Ke=0;j.morphAttributes.position!==void 0&&(Ke=1),j.morphAttributes.normal!==void 0&&(Ke=2),j.morphAttributes.color!==void 0&&(Ke=3);let et,Te,ce,Ee;if(oe){const Et=tr[oe];et=Et.vertexShader,Te=Et.fragmentShader}else et=w.vertexShader,Te=w.fragmentShader,f.update(w),ce=f.getVertexShaderID(w),Ee=f.getFragmentShaderID(w);const ve=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),tt=K.isInstancedMesh===!0,lt=K.isBatchedMesh===!0,gt=!!w.map,_t=!!w.matcap,Xt=!!Z,nn=!!w.aoMap,Rt=!!w.lightMap,Gt=!!w.bumpMap,jt=!!w.normalMap,Jt=!!w.displacementMap,Y=!!w.emissiveMap,kt=!!w.metalnessMap,St=!!w.roughnessMap,Mt=w.anisotropy>0,Ye=w.clearcoat>0,Wt=w.dispersion>0,P=w.iridescence>0,E=w.sheen>0,te=w.transmission>0,Se=Mt&&!!w.anisotropyMap,Me=Ye&&!!w.clearcoatMap,Ue=Ye&&!!w.clearcoatNormalMap,Fe=Ye&&!!w.clearcoatRoughnessMap,de=P&&!!w.iridescenceMap,ye=P&&!!w.iridescenceThicknessMap,we=E&&!!w.sheenColorMap,$e=E&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,Ae=!!w.specularColorMap,Ie=!!w.specularIntensityMap,wt=te&&!!w.transmissionMap,Dt=te&&!!w.thicknessMap,W=!!w.gradientMap,Ce=!!w.alphaMap,_e=w.alphaTest>0,We=!!w.alphaHash,Oe=!!w.extensions;let be=rr;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(be=s.toneMapping);const rt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:Te,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:lt,batchingColor:lt&&K._colorsTexture!==null,instancing:tt,instancingColor:tt&&K.instanceColor!==null,instancingMorph:tt&&K.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:gt,matcap:_t,envMap:Xt,envMapMode:Xt&&Z.mapping,envMapCubeUVHeight:me,aoMap:nn,lightMap:Rt,bumpMap:Gt,normalMap:jt,displacementMap:Jt,emissiveMap:Y,normalMapObjectSpace:jt&&w.normalMapType===kv,normalMapTangentSpace:jt&&w.normalMapType===Mm,packedNormalMap:jt&&w.normalMapType===Mm&&fE(w.normalMap.format),metalnessMap:kt,roughnessMap:St,anisotropy:Mt,anisotropyMap:Se,clearcoat:Ye,clearcoatMap:Me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Fe,dispersion:Wt,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:ye,sheen:E,sheenColorMap:we,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:Ae,specularIntensityMap:Ie,transmission:te,transmissionMap:wt,thicknessMap:Dt,gradientMap:W,opaque:w.transparent===!1&&w.blending===pa&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:We,combine:w.combine,mapUv:gt&&A(w.map.channel),aoMapUv:nn&&A(w.aoMap.channel),lightMapUv:Rt&&A(w.lightMap.channel),bumpMapUv:Gt&&A(w.bumpMap.channel),normalMapUv:jt&&A(w.normalMap.channel),displacementMapUv:Jt&&A(w.displacementMap.channel),emissiveMapUv:Y&&A(w.emissiveMap.channel),metalnessMapUv:kt&&A(w.metalnessMap.channel),roughnessMapUv:St&&A(w.roughnessMap.channel),anisotropyMapUv:Se&&A(w.anisotropyMap.channel),clearcoatMapUv:Me&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&A(w.sheenRoughnessMap.channel),specularMapUv:Ge&&A(w.specularMap.channel),specularColorMapUv:Ae&&A(w.specularColorMap.channel),specularIntensityMapUv:Ie&&A(w.specularIntensityMap.channel),transmissionMapUv:wt&&A(w.transmissionMap.channel),thicknessMapUv:Dt&&A(w.thicknessMap.channel),alphaMapUv:Ce&&A(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(jt||Mt),vertexNormals:!!j.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(gt||Ce),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||j.attributes.normal===void 0&&jt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Le,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ke,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&rn.getTransfer(w.map.colorSpace)===gn,decodeVideoTextureEmissive:Y&&w.emissiveMap.isVideoTexture===!0&&rn.getTransfer(w.emissiveMap.colorSpace)===gn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mr,flipSided:w.side===gi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rt.vertexUv1s=h.has(1),rt.vertexUv2s=h.has(2),rt.vertexUv3s=h.has(3),h.clear(),rt}function y(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)U.push(G),U.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(_(U,w),L(U,w),U.push(s.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function _(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function L(w,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const U=M[w.type];let G;if(U){const z=tr[U];G=O_.clone(z.uniforms)}else G=w.uniforms;return G}function N(w,U){let G=v.get(U);return G!==void 0?++G.usedTimes:(G=new lE(s,U,w,o),p.push(G),v.set(U,G)),G}function V(w){if(--w.usedTimes===0){const U=p.indexOf(w);p[U]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function I(w){f.remove(w)}function O(){f.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:R,acquireProgram:N,releaseProgram:V,releaseShaderCache:I,programs:p,dispose:O}}function pE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function mE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,A,D,y,_){let L=s[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:A,materialVariant:u(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:_},s[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=A,L.materialVariant=u(x),L.groupOrder=D,L.renderOrder=x.renderOrder,L.z=y,L.group=_),e++,L}function h(x,M,A,D,y,_){const L=f(x,M,A,D,y,_);A.transmission>0?r.push(L):A.transparent===!0?o.push(L):t.push(L)}function p(x,M,A,D,y,_){const L=f(x,M,A,D,y,_);A.transmission>0?r.unshift(L):A.transparent===!0?o.unshift(L):t.unshift(L)}function v(x,M){t.length>1&&t.sort(x||mE),r.length>1&&r.sort(M||m0),o.length>1&&o.sort(M||m0)}function S(){for(let x=e,M=s.length;x<M;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function gE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new g0,s.set(r,[u])):o>=l.length?(u=new g0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new xn};break;case"SpotLight":t={position:new Q,direction:new Q,color:new xn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new xn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new xn,groundColor:new xn};break;case"RectAreaLight":t={color:new xn,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _E=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new xE,t=vE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const o=new Q,l=new Ln,u=new Ln;function f(p){let v=0,S=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,A=0,D=0,y=0,_=0,L=0,R=0,N=0,V=0,I=0,O=0;p.sort(yE);for(let U=0,G=p.length;U<G;U++){const z=p[U],K=z.color,ee=z.intensity,pe=z.distance;let j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===As?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=K.r*ee,S+=K.g*ee,x+=K.b*ee;else if(z.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(z.sh.coefficients[ie],ee);O++}else if(z.isDirectionalLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,Z=t.get(z);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=z.shadow.matrix,L++}r.directional[M]=ie,M++}else if(z.isSpotLight){const ie=e.get(z);ie.position.setFromMatrixPosition(z.matrixWorld),ie.color.copy(K).multiplyScalar(ee),ie.distance=pe,ie.coneCos=Math.cos(z.angle),ie.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ie.decay=z.decay,r.spot[D]=ie;const q=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,q.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[D]=q.matrix,z.castShadow){const Z=t.get(z);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[D]=Z,r.spotShadowMap[D]=j,N++}D++}else if(z.isRectAreaLight){const ie=e.get(z);ie.color.copy(K).multiplyScalar(ee),ie.halfWidth.set(z.width*.5,0,0),ie.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ie,y++}else if(z.isPointLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),ie.distance=z.distance,ie.decay=z.decay,z.castShadow){const q=z.shadow,Z=t.get(z);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=j,r.pointShadowMatrix[A]=z.shadow.matrix,R++}r.point[A]=ie,A++}else if(z.isHemisphereLight){const ie=e.get(z);ie.skyColor.copy(z.color).multiplyScalar(ee),ie.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[_]=ie,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=nt.LTC_FLOAT_1,r.rectAreaLTC2=nt.LTC_FLOAT_2):(r.rectAreaLTC1=nt.LTC_HALF_1,r.rectAreaLTC2=nt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==M||w.pointLength!==A||w.spotLength!==D||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==L||w.numPointShadows!==R||w.numSpotShadows!==N||w.numSpotMaps!==V||w.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,w.directionalLength=M,w.pointLength=A,w.spotLength=D,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=L,w.numPointShadows=R,w.numSpotShadows=N,w.numSpotMaps=V,w.numLightProbes=O,r.version=_E++)}function h(p,v){let S=0,x=0,M=0,A=0,D=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const R=p[_];if(R.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),S++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const N=r.hemi[D];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(y),D++}}}return{setup:f,setupView:h,state:r}}function x0(s){const e=new SE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function ME(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new x0(s),e.set(o,[f])):l>=u.length?(f=new x0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
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
}`,bE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],TE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],v0=new Ln,ro=new Q,bd=new Q;function AE(s,e,t){let r=new Q0;const o=new It,l=new It,u=new Nn,f=new V_,h=new H_,p={},v=t.maxTextureSize,S={[ts]:gi,[gi]:ts,[Mr]:Mr},x=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:EE,fragmentShader:wE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new wi;A.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new oi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let _=this.type;this.render=function(I,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===mv&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gl);const U=s.getRenderTarget(),G=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(wr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=_!==this.type;ee&&O.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(j=>j.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,j=I.length;pe<j;pe++){const ie=I[pe],q=ie.shadow;if(q===void 0){Pt("WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Z=q.getFrameExtents();o.multiply(Z),l.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Z.x),o.x=l.x*Z.x,q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Z.y),o.y=l.y*Z.y,q.mapSize.y=l.y));const me=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=me,q.map===null||ee===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===so){if(ie.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new sr(o.x,o.y,{format:As,type:Tr,minFilter:ni,magFilter:ni,generateMipmaps:!1}),q.map.texture.name=ie.name+".shadowMap",q.map.depthTexture=new va(o.x,o.y,nr),q.map.depthTexture.name=ie.name+".shadowMapDepth",q.map.depthTexture.format=Ar,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Yn,q.map.depthTexture.magFilter=Yn}else ie.isPointLight?(q.map=new cg(o.x),q.map.depthTexture=new y_(o.x,or)):(q.map=new sr(o.x,o.y),q.map.depthTexture=new va(o.x,o.y,or)),q.map.depthTexture.name=ie.name+".shadowMap",q.map.depthTexture.format=Ar,this.type===Gl?(q.map.depthTexture.compareFunction=me?Df:If,q.map.depthTexture.minFilter=ni,q.map.depthTexture.magFilter=ni):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Yn,q.map.depthTexture.magFilter=Yn);q.camera.updateProjectionMatrix()}const oe=q.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<oe;B++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,B),s.clear();else{B===0&&(s.setRenderTarget(q.map),s.clear());const re=q.getViewport(B);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),K.viewport(u)}if(ie.isPointLight){const re=q.camera,Ke=q.matrix,et=ie.distance||re.far;et!==re.far&&(re.far=et,re.updateProjectionMatrix()),ro.setFromMatrixPosition(ie.matrixWorld),re.position.copy(ro),bd.copy(re.position),bd.add(bE[B]),re.up.copy(TE[B]),re.lookAt(bd),re.updateMatrixWorld(),Ke.makeTranslation(-ro.x,-ro.y,-ro.z),v0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),q._frustum.setFromProjectionMatrix(v0,re.coordinateSystem,re.reversedDepth)}else q.updateMatrices(ie);r=q.getFrustum(),N(O,w,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===so&&L(q,w),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(U,G,z)};function L(I,O){const w=e.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new sr(o.x,o.y,{format:As,type:Tr})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,w,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,w,M,D,null)}function R(I,O,w,U){let G=null;const z=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)G=z;else if(G=w.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=G.uuid,ee=O.uuid;let pe=p[K];pe===void 0&&(pe={},p[K]=pe);let j=pe[ee];j===void 0&&(j=G.clone(),pe[ee]=j,O.addEventListener("dispose",V)),G=j}if(G.visible=O.visible,G.wireframe=O.wireframe,U===so?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:S[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,w.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const K=s.properties.get(G);K.light=w}return G}function N(I,O,w,U,G){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===so)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),pe=I.material;if(Array.isArray(pe)){const j=ee.groups;for(let ie=0,q=j.length;ie<q;ie++){const Z=j[ie],me=pe[Z.materialIndex];if(me&&me.visible){const oe=R(I,me,U,G);I.onBeforeShadow(s,I,O,w,ee,oe,Z),s.renderBufferDirect(w,null,ee,oe,I,Z),I.onAfterShadow(s,I,O,w,ee,oe,Z)}}}else if(pe.visible){const j=R(I,pe,U,G);I.onBeforeShadow(s,I,O,w,ee,j,null),s.renderBufferDirect(w,null,ee,j,I,null),I.onAfterShadow(s,I,O,w,ee,j,null)}}const K=I.children;for(let ee=0,pe=K.length;ee<pe;ee++)N(K[ee],O,w,U,G)}function V(I){I.target.removeEventListener("dispose",V);for(const w in p){const U=p[w],G=I.target.uuid;G in U&&(U[G].dispose(),delete U[G])}}}function CE(s,e){function t(){let W=!1;const Ce=new Nn;let _e=null;const We=new Nn(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!W&&(s.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,be,rt,Et,ln){ln===!0&&(Oe*=Et,be*=Et,rt*=Et),Ce.set(Oe,be,rt,Et),We.equals(Ce)===!1&&(s.clearColor(Oe,be,rt,Et),We.copy(Ce))},reset:function(){W=!1,_e=null,We.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,_e=null,We=null,Oe=null;return{setReversed:function(be){if(Ce!==be){const rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Et=Oe;Oe=null,this.setClear(Et)}},getReversed:function(){return Ce},setTest:function(be){be?ve(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(be){_e!==be&&!W&&(s.depthMask(be),_e=be)},setFunc:function(be){if(Ce&&(be=$v[be]),We!==be){switch(be){case Pd:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}We=be}},setLocked:function(be){W=be},setClear:function(be){Oe!==be&&(Oe=be,Ce&&(be=1-be),s.clearDepth(be))},reset:function(){W=!1,_e=null,We=null,Oe=null,Ce=!1}}}function o(){let W=!1,Ce=null,_e=null,We=null,Oe=null,be=null,rt=null,Et=null,ln=null;return{setTest:function(Kt){W||(Kt?ve(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Kt){Ce!==Kt&&!W&&(s.stencilMask(Kt),Ce=Kt)},setFunc:function(Kt,wn,jn){(_e!==Kt||We!==wn||Oe!==jn)&&(s.stencilFunc(Kt,wn,jn),_e=Kt,We=wn,Oe=jn)},setOp:function(Kt,wn,jn){(be!==Kt||rt!==wn||Et!==jn)&&(s.stencilOp(Kt,wn,jn),be=Kt,rt=wn,Et=jn)},setLocked:function(Kt){W=Kt},setClear:function(Kt){ln!==Kt&&(s.clearStencil(Kt),ln=Kt)},reset:function(){W=!1,Ce=null,_e=null,We=null,Oe=null,be=null,rt=null,Et=null,ln=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,A=[],D=null,y=!1,_=null,L=null,R=null,N=null,V=null,I=null,O=null,w=new xn(0,0,0),U=0,G=!1,z=null,K=null,ee=null,pe=null,j=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(me)[1]),q=Z>=1):me.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),q=Z>=2);let oe=null,B={};const re=s.getParameter(s.SCISSOR_BOX),Ke=s.getParameter(s.VIEWPORT),et=new Nn().fromArray(re),Te=new Nn().fromArray(Ke);function ce(W,Ce,_e,We){const Oe=new Uint8Array(4),be=s.createTexture();s.bindTexture(W,be),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<_e;rt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,We,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return be}const Ee={};Ee[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(ga),Gt(!1),jt(vm),ve(s.CULL_FACE),nn(wr);function ve(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Le(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function tt(W,Ce){return x[W]!==Ce?(s.bindFramebuffer(W,Ce),x[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function lt(W,Ce){let _e=A,We=!1;if(W){_e=M.get(Ce),_e===void 0&&(_e=[],M.set(Ce,_e));const Oe=W.textures;if(_e.length!==Oe.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=Oe.length;be<rt;be++)_e[be]=s.COLOR_ATTACHMENT0+be;_e.length=Oe.length,We=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,We=!0);We&&s.drawBuffers(_e)}function gt(W){return D!==W?(s.useProgram(W),D=W,!0):!1}const _t={[Ss]:s.FUNC_ADD,[xv]:s.FUNC_SUBTRACT,[vv]:s.FUNC_REVERSE_SUBTRACT};_t[_v]=s.MIN,_t[yv]=s.MAX;const Xt={[Sv]:s.ZERO,[Mv]:s.ONE,[Ev]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[Rv]:s.SRC_ALPHA_SATURATE,[Av]:s.DST_COLOR,[bv]:s.DST_ALPHA,[wv]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[Cv]:s.ONE_MINUS_DST_COLOR,[Tv]:s.ONE_MINUS_DST_ALPHA,[Nv]:s.CONSTANT_COLOR,[Pv]:s.ONE_MINUS_CONSTANT_COLOR,[Iv]:s.CONSTANT_ALPHA,[Dv]:s.ONE_MINUS_CONSTANT_ALPHA};function nn(W,Ce,_e,We,Oe,be,rt,Et,ln,Kt){if(W===wr){y===!0&&(Le(s.BLEND),y=!1);return}if(y===!1&&(ve(s.BLEND),y=!0),W!==gv){if(W!==_||Kt!==G){if((L!==Ss||V!==Ss)&&(s.blendEquation(s.FUNC_ADD),L=Ss,V=Ss),Kt)switch(W){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFunc(s.ONE,s.ONE);break;case ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:on("WebGLState: Invalid blending: ",W);break}else switch(W){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ym:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",W);break}R=null,N=null,I=null,O=null,w.set(0,0,0),U=0,_=W,G=Kt}return}Oe=Oe||Ce,be=be||_e,rt=rt||We,(Ce!==L||Oe!==V)&&(s.blendEquationSeparate(_t[Ce],_t[Oe]),L=Ce,V=Oe),(_e!==R||We!==N||be!==I||rt!==O)&&(s.blendFuncSeparate(Xt[_e],Xt[We],Xt[be],Xt[rt]),R=_e,N=We,I=be,O=rt),(Et.equals(w)===!1||ln!==U)&&(s.blendColor(Et.r,Et.g,Et.b,ln),w.copy(Et),U=ln),_=W,G=!1}function Rt(W,Ce){W.side===Mr?Le(s.CULL_FACE):ve(s.CULL_FACE);let _e=W.side===gi;Ce&&(_e=!_e),Gt(_e),W.blending===pa&&W.transparent===!1?nn(wr):nn(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const We=W.stencilWrite;f.setTest(We),We&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Y(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(W){z!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),z=W)}function jt(W){W!==hv?(ve(s.CULL_FACE),W!==K&&(W===vm?s.cullFace(s.BACK):W===pv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),K=W}function Jt(W){W!==ee&&(q&&s.lineWidth(W),ee=W)}function Y(W,Ce,_e){W?(ve(s.POLYGON_OFFSET_FILL),(pe!==Ce||j!==_e)&&(pe=Ce,j=_e,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,_e))):Le(s.POLYGON_OFFSET_FILL)}function kt(W){W?ve(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function St(W){W===void 0&&(W=s.TEXTURE0+ie-1),oe!==W&&(s.activeTexture(W),oe=W)}function Mt(W,Ce,_e){_e===void 0&&(oe===null?_e=s.TEXTURE0+ie-1:_e=oe);let We=B[_e];We===void 0&&(We={type:void 0,texture:void 0},B[_e]=We),(We.type!==W||We.texture!==Ce)&&(oe!==_e&&(s.activeTexture(_e),oe=_e),s.bindTexture(W,Ce||Ee[W]),We.type=W,We.texture=Ce)}function Ye(){const W=B[oe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Wt(){try{s.compressedTexImage2D(...arguments)}catch(W){on("WebGLState:",W)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(W){on("WebGLState:",W)}}function E(){try{s.texSubImage2D(...arguments)}catch(W){on("WebGLState:",W)}}function te(){try{s.texSubImage3D(...arguments)}catch(W){on("WebGLState:",W)}}function Se(){try{s.compressedTexSubImage2D(...arguments)}catch(W){on("WebGLState:",W)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(W){on("WebGLState:",W)}}function Ue(){try{s.texStorage2D(...arguments)}catch(W){on("WebGLState:",W)}}function Fe(){try{s.texStorage3D(...arguments)}catch(W){on("WebGLState:",W)}}function de(){try{s.texImage2D(...arguments)}catch(W){on("WebGLState:",W)}}function ye(){try{s.texImage3D(...arguments)}catch(W){on("WebGLState:",W)}}function we(W){return S[W]!==void 0?S[W]:s.getParameter(W)}function $e(W,Ce){S[W]!==Ce&&(s.pixelStorei(W,Ce),S[W]=Ce)}function Ge(W){et.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),et.copy(W))}function Ae(W){Te.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Te.copy(W))}function Ie(W,Ce){let _e=p.get(Ce);_e===void 0&&(_e=new WeakMap,p.set(Ce,_e));let We=_e.get(W);We===void 0&&(We=s.getUniformBlockIndex(Ce,W.name),_e.set(W,We))}function wt(W,Ce){const We=p.get(Ce).get(W);h.get(Ce)!==We&&(s.uniformBlockBinding(Ce,We,W.__bindingPointIndex),h.set(Ce,We))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},oe=null,B={},x={},M=new WeakMap,A=[],D=null,y=!1,_=null,L=null,R=null,N=null,V=null,I=null,O=null,w=new xn(0,0,0),U=0,G=!1,z=null,K=null,ee=null,pe=null,j=null,et.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Le,bindFramebuffer:tt,drawBuffers:lt,useProgram:gt,setBlending:nn,setMaterial:Rt,setFlipSided:Gt,setCullFace:jt,setLineWidth:Jt,setPolygonOffset:Y,setScissorTest:kt,activeTexture:St,bindTexture:Mt,unbindTexture:Ye,compressedTexImage2D:Wt,compressedTexImage3D:P,texImage2D:de,texImage3D:ye,pixelStorei:$e,getParameter:we,updateUBOMapping:Ie,uniformBlockBinding:wt,texStorage2D:Ue,texStorage3D:Fe,texSubImage2D:E,texSubImage3D:te,compressedTexSubImage2D:Se,compressedTexSubImage3D:Me,scissor:Ge,viewport:Ae,reset:Dt}}function RE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,E){return A?new OffscreenCanvas(P,E):tc("canvas")}function y(P,E,te){let Se=1;const Me=Wt(P);if((Me.width>te||Me.height>te)&&(Se=te/Math.max(Me.width,Me.height)),Se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ue=Math.floor(Se*Me.width),Fe=Math.floor(Se*Me.height);x===void 0&&(x=D(Ue,Fe));const de=E?D(Ue,Fe):x;return de.width=Ue,de.height=Fe,de.getContext("2d").drawImage(P,0,0,Ue,Fe),Pt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Ue+"x"+Fe+")."),de}else return"data"in P&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),P;return P}function _(P){return P.generateMipmaps}function L(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(P,E,te,Se,Me,Ue=!1){if(P!==null){if(s[P]!==void 0)return s[P];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Fe;Se&&(Fe=e.get("EXT_texture_norm16"),Fe||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===s.RED&&(te===s.FLOAT&&(de=s.R32F),te===s.HALF_FLOAT&&(de=s.R16F),te===s.UNSIGNED_BYTE&&(de=s.R8),te===s.UNSIGNED_SHORT&&Fe&&(de=Fe.R16_EXT),te===s.SHORT&&Fe&&(de=Fe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.R8UI),te===s.UNSIGNED_SHORT&&(de=s.R16UI),te===s.UNSIGNED_INT&&(de=s.R32UI),te===s.BYTE&&(de=s.R8I),te===s.SHORT&&(de=s.R16I),te===s.INT&&(de=s.R32I)),E===s.RG&&(te===s.FLOAT&&(de=s.RG32F),te===s.HALF_FLOAT&&(de=s.RG16F),te===s.UNSIGNED_BYTE&&(de=s.RG8),te===s.UNSIGNED_SHORT&&Fe&&(de=Fe.RG16_EXT),te===s.SHORT&&Fe&&(de=Fe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RG8UI),te===s.UNSIGNED_SHORT&&(de=s.RG16UI),te===s.UNSIGNED_INT&&(de=s.RG32UI),te===s.BYTE&&(de=s.RG8I),te===s.SHORT&&(de=s.RG16I),te===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGB8UI),te===s.UNSIGNED_SHORT&&(de=s.RGB16UI),te===s.UNSIGNED_INT&&(de=s.RGB32UI),te===s.BYTE&&(de=s.RGB8I),te===s.SHORT&&(de=s.RGB16I),te===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),te===s.UNSIGNED_INT&&(de=s.RGBA32UI),te===s.BYTE&&(de=s.RGBA8I),te===s.SHORT&&(de=s.RGBA16I),te===s.INT&&(de=s.RGBA32I)),E===s.RGB&&(te===s.UNSIGNED_SHORT&&Fe&&(de=Fe.RGB16_EXT),te===s.SHORT&&Fe&&(de=Fe.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),E===s.RGBA){const ye=Ue?Ql:rn.getTransfer(Me);te===s.FLOAT&&(de=s.RGBA32F),te===s.HALF_FLOAT&&(de=s.RGBA16F),te===s.UNSIGNED_BYTE&&(de=ye===gn?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Fe&&(de=Fe.RGBA16_EXT),te===s.SHORT&&Fe&&(de=Fe.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(P,E){let te;return P?E===null||E===or||E===po?te=s.DEPTH24_STENCIL8:E===nr?te=s.DEPTH32F_STENCIL8:E===ho&&(te=s.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===or||E===po?te=s.DEPTH_COMPONENT24:E===nr?te=s.DEPTH_COMPONENT32F:E===ho&&(te=s.DEPTH_COMPONENT16),te}function I(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yn&&P.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function O(P){const E=P.target;E.removeEventListener("dispose",O),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),z(E)}function U(P){const E=r.get(P);if(E.__webglInit===void 0)return;const te=P.source,Se=M.get(te);if(Se){const Me=Se[E.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&G(P),Object.keys(Se).length===0&&M.delete(te)}r.remove(P)}function G(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const te=P.source,Se=M.get(te);delete Se[E.__cacheKey],u.memory.textures--}function z(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(E.__webglFramebuffer[Se]))for(let Me=0;Me<E.__webglFramebuffer[Se].length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[Se][Me]);else s.deleteFramebuffer(E.__webglFramebuffer[Se]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Se])}else{if(Array.isArray(E.__webglFramebuffer))for(let Se=0;Se<E.__webglFramebuffer.length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[Se]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Se=0;Se<E.__webglColorRenderbuffer.length;Se++)E.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Se]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=P.textures;for(let Se=0,Me=te.length;Se<Me;Se++){const Ue=r.get(te[Se]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(te[Se])}r.remove(P)}let K=0;function ee(){K=0}function pe(){return K}function j(P){K=P}function ie(){const P=K;return P>=o.maxTextures&&Pt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),K+=1,P}function q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Z(P,E){const te=r.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const Se=P.image;if(Se===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(te,P,E);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+E)}function me(P,E){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Le(te,P,E);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+E)}function oe(P,E){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Le(te,P,E);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+E)}function B(P,E){const te=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&te.__version!==P.version){tt(te,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+E)}const re={[kd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},Ke={[Yn]:s.NEAREST,[Fv]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},et={[Bv]:s.NEVER,[jv]:s.ALWAYS,[zv]:s.LESS,[If]:s.LEQUAL,[Vv]:s.EQUAL,[Df]:s.GEQUAL,[Hv]:s.GREATER,[Gv]:s.NOTEQUAL};function Te(P,E){if(E.type===nr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===Xu||E.magFilter===vl||E.magFilter===Es||E.minFilter===ni||E.minFilter===Xu||E.minFilter===vl||E.minFilter===Es)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,re[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,re[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,re[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Ke[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Ke[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yn||E.minFilter!==vl&&E.minFilter!==Es||E.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ce(P,E){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const Se=E.source;let Me=M.get(Se);Me===void 0&&(Me={},M.set(Se,Me));const Ue=q(E);if(Ue!==P.__cacheKey){Me[Ue]===void 0&&(Me[Ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Me[Ue].usedTimes++;const Fe=Me[P.__cacheKey];Fe!==void 0&&(Me[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&G(E)),P.__cacheKey=Ue,P.__webglTexture=Me[Ue].texture}return te}function Ee(P,E,te){return Math.floor(Math.floor(P/te)/E)}function ve(P,E,te,Se){const Ue=P.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,te,Se,E.data);else{Ue.sort(($e,Ge)=>$e.start-Ge.start);let Fe=0;for(let $e=1;$e<Ue.length;$e++){const Ge=Ue[Fe],Ae=Ue[$e],Ie=Ge.start+Ge.count,wt=Ee(Ae.start,E.width,4),Dt=Ee(Ge.start,E.width,4);Ae.start<=Ie+1&&wt===Dt&&Ee(Ae.start+Ae.count-1,E.width,4)===wt?Ge.count=Math.max(Ge.count,Ae.start+Ae.count-Ge.start):(++Fe,Ue[Fe]=Ae)}Ue.length=Fe+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),ye=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let $e=0,Ge=Ue.length;$e<Ge;$e++){const Ae=Ue[$e],Ie=Math.floor(Ae.start/4),wt=Math.ceil(Ae.count/4),Dt=Ie%E.width,W=Math.floor(Ie/E.width),Ce=wt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,Dt,W,Ce,_e,te,Se,E.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Le(P,E,te){let Se=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Se=s.TEXTURE_3D);const Me=ce(P,E),Ue=E.source;t.bindTexture(Se,P.__webglTexture,s.TEXTURE0+te);const Fe=r.get(Ue);if(Ue.version!==Fe.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=rn.getPrimaries(rn.workingColorSpace),We=E.colorSpace===Jr?null:rn.getPrimaries(E.colorSpace),Oe=E.colorSpace===Jr||_e===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ye=y(E.image,!1,o.maxTextureSize);ye=Ye(E,ye);const we=l.convert(E.format,E.colorSpace),$e=l.convert(E.type);let Ge=N(E.internalFormat,we,$e,E.normalized,E.colorSpace,E.isVideoTexture);Te(Se,E);let Ae;const Ie=E.mipmaps,wt=E.isVideoTexture!==!0,Dt=Fe.__version===void 0||Me===!0,W=Ue.dataReady,Ce=I(E,ye);if(E.isDepthTexture)Ge=V(E.format===ws,E.type),Dt&&(wt?t.texStorage2D(s.TEXTURE_2D,1,Ge,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Ge,ye.width,ye.height,0,we,$e,null));else if(E.isDataTexture)if(Ie.length>0){wt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,Ie[0].width,Ie[0].height);for(let _e=0,We=Ie.length;_e<We;_e++)Ae=Ie[_e],wt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,$e,Ae.data):t.texImage2D(s.TEXTURE_2D,_e,Ge,Ae.width,Ae.height,0,we,$e,Ae.data);E.generateMipmaps=!1}else wt?(Dt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,ye.width,ye.height),W&&ve(E,ye,we,$e)):t.texImage2D(s.TEXTURE_2D,0,Ge,ye.width,ye.height,0,we,$e,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ge,Ie[0].width,Ie[0].height,ye.depth);for(let _e=0,We=Ie.length;_e<We;_e++)if(Ae=Ie[_e],E.format!==Yi)if(we!==null)if(wt){if(W)if(E.layerUpdates.size>0){const Oe=qm(Ae.width,Ae.height,E.format,E.type);for(const be of E.layerUpdates){const rt=Ae.data.subarray(be*Oe/Ae.data.BYTES_PER_ELEMENT,(be+1)*Oe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,be,Ae.width,Ae.height,1,we,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,ye.depth,we,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Ge,Ae.width,Ae.height,ye.depth,0,Ae.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,ye.depth,we,$e,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Ge,Ae.width,Ae.height,ye.depth,0,we,$e,Ae.data)}else{wt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,Ie[0].width,Ie[0].height);for(let _e=0,We=Ie.length;_e<We;_e++)Ae=Ie[_e],E.format!==Yi?we!==null?wt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Ge,Ae.width,Ae.height,0,Ae.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,$e,Ae.data):t.texImage2D(s.TEXTURE_2D,_e,Ge,Ae.width,Ae.height,0,we,$e,Ae.data)}else if(E.isDataArrayTexture)if(wt){if(Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ge,ye.width,ye.height,ye.depth),W)if(E.layerUpdates.size>0){const _e=qm(ye.width,ye.height,E.format,E.type);for(const We of E.layerUpdates){const Oe=ye.data.subarray(We*_e/ye.data.BYTES_PER_ELEMENT,(We+1)*_e/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,ye.width,ye.height,1,we,$e,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,$e,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,ye.width,ye.height,ye.depth,0,we,$e,ye.data);else if(E.isData3DTexture)wt?(Dt&&t.texStorage3D(s.TEXTURE_3D,Ce,Ge,ye.width,ye.height,ye.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,$e,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,ye.width,ye.height,ye.depth,0,we,$e,ye.data);else if(E.isFramebufferTexture){if(Dt)if(wt)t.texStorage2D(s.TEXTURE_2D,Ce,Ge,ye.width,ye.height);else{let _e=ye.width,We=ye.height;for(let Oe=0;Oe<Ce;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ge,_e,We,0,we,$e,null),_e>>=1,We>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ye.parentNode!==_e){_e.appendChild(ye),S.add(E),_e.onpaint=Et=>{const ln=Et.changedElements;for(const Kt of S)ln.includes(Kt.image)&&(Kt.needsUpdate=!0)},_e.requestPaint();return}const We=0,Oe=s.RGBA,be=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,We,Oe,be,rt,ye),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(wt&&Dt){const _e=Wt(Ie[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Ge,_e.width,_e.height)}for(let _e=0,We=Ie.length;_e<We;_e++)Ae=Ie[_e],wt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,we,$e,Ae):t.texImage2D(s.TEXTURE_2D,_e,Ge,we,$e,Ae);E.generateMipmaps=!1}else if(wt){if(Dt){const _e=Wt(ye);t.texStorage2D(s.TEXTURE_2D,Ce,Ge,_e.width,_e.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,$e,ye)}else t.texImage2D(s.TEXTURE_2D,0,Ge,we,$e,ye);_(E)&&L(Se),Fe.__version=Ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function tt(P,E,te){if(E.image.length!==6)return;const Se=ce(P,E),Me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+te);const Ue=r.get(Me);if(Me.version!==Ue.__version||Se===!0){t.activeTexture(s.TEXTURE0+te);const Fe=rn.getPrimaries(rn.workingColorSpace),de=E.colorSpace===Jr?null:rn.getPrimaries(E.colorSpace),ye=E.colorSpace===Jr||Fe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,Ge=[];for(let be=0;be<6;be++)!we&&!$e?Ge[be]=y(E.image[be],!0,o.maxCubemapSize):Ge[be]=$e?E.image[be].image:E.image[be],Ge[be]=Ye(E,Ge[be]);const Ae=Ge[0],Ie=l.convert(E.format,E.colorSpace),wt=l.convert(E.type),Dt=N(E.internalFormat,Ie,wt,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ce=Ue.__version===void 0||Se===!0,_e=Me.dataReady;let We=I(E,Ae);Te(s.TEXTURE_CUBE_MAP,E);let Oe;if(we){W&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Dt,Ae.width,Ae.height);for(let be=0;be<6;be++){Oe=Ge[be].mipmaps;for(let rt=0;rt<Oe.length;rt++){const Et=Oe[rt];E.format!==Yi?Ie!==null?W?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,Et.width,Et.height,Ie,Et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Dt,Et.width,Et.height,0,Et.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,Et.width,Et.height,Ie,wt,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Dt,Et.width,Et.height,0,Ie,wt,Et.data)}}}else{if(Oe=E.mipmaps,W&&Ce){Oe.length>0&&We++;const be=Wt(Ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Dt,be.width,be.height)}for(let be=0;be<6;be++)if($e){W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ge[be].width,Ge[be].height,Ie,wt,Ge[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Dt,Ge[be].width,Ge[be].height,0,Ie,wt,Ge[be].data);for(let rt=0;rt<Oe.length;rt++){const ln=Oe[rt].image[be].image;W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,ln.width,ln.height,Ie,wt,ln.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Dt,ln.width,ln.height,0,Ie,wt,ln.data)}}else{W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ie,wt,Ge[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Dt,Ie,wt,Ge[be]);for(let rt=0;rt<Oe.length;rt++){const Et=Oe[rt];W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,Ie,wt,Et.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Dt,Ie,wt,Et.image[be])}}}_(E)&&L(s.TEXTURE_CUBE_MAP),Ue.__version=Me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function lt(P,E,te,Se,Me,Ue){const Fe=l.convert(te.format,te.colorSpace),de=l.convert(te.type),ye=N(te.internalFormat,Fe,de,te.normalized,te.colorSpace),we=r.get(E),$e=r.get(te);if($e.__renderTarget=E,!we.__hasExternalTextures){const Ge=Math.max(1,E.width>>Ue),Ae=Math.max(1,E.height>>Ue);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Ue,ye,Ge,Ae,E.depth,0,Fe,de,null):t.texImage2D(Me,Ue,ye,Ge,Ae,0,Fe,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Me,$e.__webglTexture,0,kt(E)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Me,$e.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(P,E,te){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const Se=E.depthTexture,Me=Se&&Se.isDepthTexture?Se.type:null,Ue=V(E.stencilBuffer,Me),Fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),Ue,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,P)}else{const Se=E.textures;for(let Me=0;Me<Se.length;Me++){const Ue=Se[Me],Fe=l.convert(Ue.format,Ue.colorSpace),de=l.convert(Ue.type),ye=N(Ue.internalFormat,Fe,de,Ue.normalized,Ue.colorSpace);St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),ye,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ye,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(P,E,te){const Se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=r.get(E.depthTexture);if(Me.__renderTarget=E,(!Me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Se){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Me.__webglTexture===void 0){Me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E.depthTexture);const we=l.convert(E.depthTexture.format),$e=l.convert(E.depthTexture.type);let Ge;E.depthTexture.format===Ar?Ge=s.DEPTH_COMPONENT24:E.depthTexture.format===ws&&(Ge=s.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ge,E.width,E.height,0,we,$e,null)}}else Z(E.depthTexture,0);const Ue=Me.__webglTexture,Fe=kt(E),de=Se?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,ye=E.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ar)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,de,Ue,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,de,Ue,0);else if(E.depthTexture.format===ws)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,de,Ue,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,de,Ue,0);else throw new Error("Unknown depthTexture format")}function Xt(P){const E=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Se=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Se){const Me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Se.removeEventListener("dispose",Me)};Se.addEventListener("dispose",Me),E.__depthDisposeCallback=Me}E.__boundDepthTexture=Se}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(te)for(let Se=0;Se<6;Se++)_t(E.__webglFramebuffer[Se],P,Se);else{const Se=P.texture.mipmaps;Se&&Se.length>0?_t(E.__webglFramebuffer[0],P,0):_t(E.__webglFramebuffer,P,0)}else if(te){E.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Se]),E.__webglDepthbuffer[Se]===void 0)E.__webglDepthbuffer[Se]=s.createRenderbuffer(),gt(E.__webglDepthbuffer[Se],P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ue)}}else{const Se=P.texture.mipmaps;if(Se&&Se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),gt(E.__webglDepthbuffer,P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(P,E,te){const Se=r.get(P);E!==void 0&&lt(Se.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Xt(P)}function Rt(P){const E=P.texture,te=r.get(P),Se=r.get(E);P.addEventListener("dispose",w);const Me=P.textures,Ue=P.isWebGLCubeRenderTarget===!0,Fe=Me.length>1;if(Fe||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=E.version,u.memory.textures++),Ue){te.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[de]=[];for(let ye=0;ye<E.mipmaps.length;ye++)te.__webglFramebuffer[de][ye]=s.createFramebuffer()}else te.__webglFramebuffer[de]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)te.__webglFramebuffer[de]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let de=0,ye=Me.length;de<ye;de++){const we=r.get(Me[de]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&St(P)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let de=0;de<Me.length;de++){const ye=Me[de];te.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[de]);const we=l.convert(ye.format,ye.colorSpace),$e=l.convert(ye.type),Ge=N(ye.internalFormat,we,$e,ye.normalized,ye.colorSpace,P.isXRRenderTarget===!0),Ae=kt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Ge,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,te.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(te.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)lt(te.__webglFramebuffer[de][ye],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else lt(te.__webglFramebuffer[de],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(E)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let de=0,ye=Me.length;de<ye;de++){const we=Me[de],$e=r.get(we);let Ge=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ge=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ge,$e.__webglTexture),Te(Ge,we),lt(te.__webglFramebuffer,P,we,s.COLOR_ATTACHMENT0+de,Ge,0),_(we)&&L(Ge)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Se.__webglTexture),Te(de,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)lt(te.__webglFramebuffer[ye],P,E,s.COLOR_ATTACHMENT0,de,ye);else lt(te.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,de,0);_(E)&&L(de),t.unbindTexture()}P.depthBuffer&&Xt(P)}function Gt(P){const E=P.textures;for(let te=0,Se=E.length;te<Se;te++){const Me=E[te];if(_(Me)){const Ue=R(P),Fe=r.get(Me).__webglTexture;t.bindTexture(Ue,Fe),L(Ue),t.unbindTexture()}}}const jt=[],Jt=[];function Y(P){if(P.samples>0){if(St(P)===!1){const E=P.textures,te=P.width,Se=P.height;let Me=s.COLOR_BUFFER_BIT;const Ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(P),de=E.length>1;if(de)for(let we=0;we<E.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);const $e=r.get(E[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,te,Se,0,0,te,Se,Me,s.NEAREST),h===!0&&(jt.length=0,Jt.length=0,jt.push(s.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(jt.push(Ue),Jt.push(Ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<E.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);const $e=r.get(E[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function kt(P){return Math.min(o.maxSamples,P.samples)}function St(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(P){const E=u.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function Ye(P,E){const te=P.colorSpace,Se=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Jl&&te!==Jr&&(rn.getTransfer(te)===gn?(Se!==Yi||Me!==Ui)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",te)),E}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=ee,this.getTextureUnits=pe,this.setTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=me,this.setTexture3D=oe,this.setTextureCube=B,this.rebindTextures=nn,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NE(s,e){function t(r,o=Jr){let l;const u=rn.getTransfer(o);if(r===Ui)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===H0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===G0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===z0)return s.BYTE;if(r===V0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===Tr)return s.HALF_FLOAT;if(r===j0)return s.ALPHA;if(r===W0)return s.RGB;if(r===Yi)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===ws)return s.DEPTH_STENCIL;if(r===X0)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===As)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===jl||r===Wl||r===Xl||r===Yl)if(u===gn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Vd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Wd||r===Xd||r===Yd||r===$d||r===Kl||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Wd)return u===gn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return l.COMPRESSED_R11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===gn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===gn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===Zl||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const PE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new tg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new lr({vertexShader:PE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Rs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,A=null;const D=typeof XRWebGLBinding<"u",y=new DE,_={},L=t.getContextAttributes();let R=null,N=null;const V=[],I=[],O=new It;let w=null;const U=new Li;U.viewport=new Nn;const G=new Li;G.viewport=new Nn;const z=[U,G],K=new j_;let ee=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Ee=V[ce];return Ee===void 0&&(Ee=new ed,V[ce]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ce){let Ee=V[ce];return Ee===void 0&&(Ee=new ed,V[ce]=Ee),Ee.getGripSpace()},this.getHand=function(ce){let Ee=V[ce];return Ee===void 0&&(Ee=new ed,V[ce]=Ee),Ee.getHandSpace()};function j(ce){const Ee=I.indexOf(ce.inputSource);if(Ee===-1)return;const ve=V[Ee];ve!==void 0&&(ve.update(ce.inputSource,ce.frame,p||u),ve.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ie(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",q);for(let ce=0;ce<V.length;ce++){const Ee=I[ce];Ee!==null&&(I[ce]=null,V[ce].disconnect(Ee))}ee=null,pe=null,y.reset();for(const ce in _)delete _[ce];e.setRenderTarget(R),M=null,x=null,S=null,o=null,N=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,r.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,r.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,tt=null;L.depth&&(tt=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=L.stencil?ws:Ar,Le=L.stencil?po:or);const lt={colorFormat:t.RGBA8,depthFormat:tt,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(lt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new sr(x.textureWidth,x.textureHeight,{format:Yi,type:Ui,depthTexture:new va(x.textureWidth,x.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ve={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new sr(M.framebufferWidth,M.framebufferHeight,{format:Yi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(ce){for(let Ee=0;Ee<ce.removed.length;Ee++){const ve=ce.removed[Ee],Le=I.indexOf(ve);Le>=0&&(I[Le]=null,V[Le].disconnect(ve))}for(let Ee=0;Ee<ce.added.length;Ee++){const ve=ce.added[Ee];let Le=I.indexOf(ve);if(Le===-1){for(let lt=0;lt<V.length;lt++)if(lt>=I.length){I.push(ve),Le=lt;break}else if(I[lt]===null){I[lt]=ve,Le=lt;break}if(Le===-1)break}const tt=V[Le];tt&&tt.connect(ve)}}const Z=new Q,me=new Q;function oe(ce,Ee,ve){Z.setFromMatrixPosition(Ee.matrixWorld),me.setFromMatrixPosition(ve.matrixWorld);const Le=Z.distanceTo(me),tt=Ee.projectionMatrix.elements,lt=ve.projectionMatrix.elements,gt=tt[14]/(tt[10]-1),_t=tt[14]/(tt[10]+1),Xt=(tt[9]+1)/tt[5],nn=(tt[9]-1)/tt[5],Rt=(tt[8]-1)/tt[0],Gt=(lt[8]+1)/lt[0],jt=gt*Rt,Jt=gt*Gt,Y=Le/(-Rt+Gt),kt=Y*-Rt;if(Ee.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(kt),ce.translateZ(Y),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),tt[10]===-1)ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const St=gt+Y,Mt=_t+Y,Ye=jt-kt,Wt=Jt+(Le-kt),P=Xt*_t/Mt*St,E=nn*_t/Mt*St;ce.projectionMatrix.makePerspective(Ye,Wt,P,E,St,Mt),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function B(ce,Ee){Ee===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Ee.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let Ee=ce.near,ve=ce.far;y.texture!==null&&(y.depthNear>0&&(Ee=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),K.near=G.near=U.near=Ee,K.far=G.far=U.far=ve,(ee!==K.near||pe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ee=K.near,pe=K.far),K.layers.mask=ce.layers.mask|6,U.layers.mask=K.layers.mask&-5,G.layers.mask=K.layers.mask&-3;const Le=ce.parent,tt=K.cameras;B(K,Le);for(let lt=0;lt<tt.length;lt++)B(tt[lt],Le);tt.length===2?oe(K,U,G):K.projectionMatrix.copy(U.projectionMatrix),re(ce,K,Le)};function re(ce,Ee,ve){ve===null?ce.matrix.copy(Ee.matrixWorld):(ce.matrix.copy(ve.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Ee.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=vf*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ce){h=ce,x!==null&&(x.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ce){return _[ce]};let Ke=null;function et(ce,Ee){if(v=Ee.getViewerPose(p||u),A=Ee,v!==null){const ve=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Le=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,Le=!0);for(let _t=0;_t<ve.length;_t++){const Xt=ve[_t];let nn=null;if(M!==null)nn=M.getViewport(Xt);else{const Gt=S.getViewSubImage(x,Xt);nn=Gt.viewport,_t===0&&(e.setRenderTargetTextures(N,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(N))}let Rt=z[_t];Rt===void 0&&(Rt=new Li,Rt.layers.enable(_t),Rt.viewport=new Nn,z[_t]=Rt),Rt.matrix.fromArray(Xt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Xt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(nn.x,nn.y,nn.width,nn.height),_t===0&&(K.matrix.copy(Rt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Le===!0&&K.cameras.push(Rt)}const tt=o.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const _t=S.getDepthInformation(ve[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,o.renderState)}if(tt&&tt.includes("camera-access")&&D){e.state.unbindTexture(),S=r.getBinding();for(let _t=0;_t<ve.length;_t++){const Xt=ve[_t].camera;if(Xt){let nn=_[Xt];nn||(nn=new tg,_[Xt]=nn);const Rt=S.getCameraImage(Xt);nn.sourceTexture=Rt}}}}for(let ve=0;ve<V.length;ve++){const Le=I[ve],tt=V[ve];Le!==null&&tt!==void 0&&tt.update(Le,Ee,p||u)}Ke&&Ke(ce,Ee),Ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ee}),A=null}const Te=new og;Te.setAnimationLoop(et),this.setAnimationLoop=function(ce){Ke=ce},this.dispose=function(){}}}const UE=new Ln,pg=new Ht;pg.set(-1,0,0,0,1,0,0,0,1);function FE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,rg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,L,R,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,N)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),D(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===gi&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===gi&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,N=L.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(N)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(pg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gi&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function OE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const N=R.program;r.uniformBlockBinding(L,N)}function p(L,R){let N=o[L.id];N===void 0&&(A(L),N=v(L),o[L.id]=N,L.addEventListener("dispose",y));const V=R.program;r.updateUBOMapping(L,V);const I=e.render.frame;l[L.id]!==I&&(x(L),l[L.id]=I)}function v(L){const R=S();L.__bindingPointIndex=R;const N=s.createBuffer(),V=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const R=o[L.id],N=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,O=N.length;I<O;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,G=w.length;U<G;U++){const z=w[U];if(M(z,I,U,V)===!0){const K=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let pe=0;for(let j=0;j<ee.length;j++){const ie=ee[j],q=D(ie);typeof ie=="number"||typeof ie=="boolean"?(z.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,K+pe,z.__data)):ie.isMatrix3?(z.__data[0]=ie.elements[0],z.__data[1]=ie.elements[1],z.__data[2]=ie.elements[2],z.__data[3]=0,z.__data[4]=ie.elements[3],z.__data[5]=ie.elements[4],z.__data[6]=ie.elements[5],z.__data[7]=0,z.__data[8]=ie.elements[6],z.__data[9]=ie.elements[7],z.__data[10]=ie.elements[8],z.__data[11]=0):ArrayBuffer.isView(ie)?z.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,z.__data.length)):(ie.toArray(z.__data,pe),pe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,N,V){const I=L.value,O=R+"_"+N;if(V[O]===void 0)return typeof I=="number"||typeof I=="boolean"?V[O]=I:ArrayBuffer.isView(I)?V[O]=I.slice():V[O]=I.clone(),!0;{const w=V[O];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return V[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(w.equals(I)===!1)return w.copy(I),!0}}return!1}function A(L){const R=L.uniforms;let N=0;const V=16;for(let O=0,w=R.length;O<w;O++){const U=Array.isArray(R[O])?R[O]:[R[O]];for(let G=0,z=U.length;G<z;G++){const K=U[G],ee=Array.isArray(K.value)?K.value:[K.value];for(let pe=0,j=ee.length;pe<j;pe++){const ie=ee[pe],q=D(ie),Z=N%V,me=Z%q.boundary,oe=Z+me;N+=me,oe!==0&&V-oe<q.storage&&(N+=V-oe),K.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=q.storage}}}const I=N%V;return I>0&&(N+=V-I),L.__size=N,L.__cache={},this}function D(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(R.boundary=16,R.storage=L.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",L),R}function y(L){const R=L.target;R.removeEventListener("dispose",y);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const kE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function BE(){return er===null&&(er=new g_(kE,16,16,As,Tr),er.name="DFG_LUT",er.minFilter=ni,er.magFilter=ni,er.wrapS=Er,er.wrapT=Er,er.generateMipmaps=!1,er.needsUpdate=!0),er}class zE{constructor(e={}){const{canvas:t=Xv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ui}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const D=M,y=new Set([Pf,Nf,Rf]),_=new Set([Ui,or,ho,po,Af,Cf]),L=new Uint32Array(4),R=new Int32Array(4),N=new Q;let V=null,I=null;const O=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let z=!1,K=null;this._outputColorSpace=Di;let ee=0,pe=0,j=null,ie=-1,q=null;const Z=new Nn,me=new Nn;let oe=null;const B=new xn(0);let re=0,Ke=t.width,et=t.height,Te=1,ce=null,Ee=null;const ve=new Nn(0,0,Ke,et),Le=new Nn(0,0,Ke,et);let tt=!1;const lt=new Q0;let gt=!1,_t=!1;const Xt=new Ln,nn=new Q,Rt=new Nn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Jt(){return j===null?Te:1}let Y=r;function kt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Et,!1),Y===null){const $="webgl2";if(Y=kt($,C),Y===null)throw kt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw on("WebGLRenderer: "+C.message),C}let St,Mt,Ye,Wt,P,E,te,Se,Me,Ue,Fe,de,ye,we,$e,Ge,Ae,Ie,wt,Dt,W,Ce,_e;function We(){St=new B1(Y),St.init(),W=new NE(Y,St),Mt=new P1(Y,St,e,W),Ye=new CE(Y,St),Mt.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Wt=new H1(Y),P=new pE,E=new RE(Y,St,Ye,P,Mt,W,Wt),te=new k1(G),Se=new X_(Y),Ce=new R1(Y,Se),Me=new z1(Y,Se,Wt,Ce),Ue=new j1(Y,Me,Se,Ce,Wt),Ie=new G1(Y,Mt,E),$e=new I1(P),Fe=new hE(G,te,St,Mt,Ce,$e),de=new FE(G,P),ye=new gE,we=new ME(St),Ae=new C1(G,te,Ye,Ue,A,h),Ge=new AE(G,Ue,Mt),_e=new OE(Y,Wt,Mt,Ye),wt=new N1(Y,St,Wt),Dt=new V1(Y,St,Wt),Wt.programs=Fe.programs,G.capabilities=Mt,G.extensions=St,G.properties=P,G.renderLists=ye,G.shadowMap=Ge,G.state=Ye,G.info=Wt}We(),D!==Ui&&(U=new X1(D,t.width,t.height,o,l));const Oe=new LE(G,Y);this.xr=Oe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=St.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=St.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(Ke,et,!1))},this.getSize=function(C){return C.set(Ke,et)},this.setSize=function(C,$,ue=!0){if(Oe.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=C,et=$,t.width=Math.floor(C*Te),t.height=Math.floor($*Te),ue===!0&&(t.style.width=C+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(Ke*Te,et*Te).floor()},this.setDrawingBufferSize=function(C,$,ue){Ke=C,et=$,Te=ue,t.width=Math.floor(C*ue),t.height=Math.floor($*ue),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(D===Ui){on("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){Pt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,$,ue,ne){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,$,ue,ne),Ye.viewport(Z.copy(ve).multiplyScalar(Te).round())},this.getScissor=function(C){return C.copy(Le)},this.setScissor=function(C,$,ue,ne){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,$,ue,ne),Ye.scissor(me.copy(Le).multiplyScalar(Te).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){Ye.setScissorTest(tt=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){Ee=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ue=!0){let ne=0;if(C){let se=!1;if(j!==null){const ze=j.texture.format;se=y.has(ze)}if(se){const ze=j.texture.type,Je=_.has(ze),ke=Ae.getClearColor(),st=Ae.getClearAlpha(),ct=ke.r,yt=ke.g,Ut=ke.b;Je?(L[0]=ct,L[1]=yt,L[2]=Ut,L[3]=st,Y.clearBufferuiv(Y.COLOR,0,L)):(R[0]=ct,R[1]=yt,R[2]=Ut,R[3]=st,Y.clearBufferiv(Y.COLOR,0,R))}else ne|=Y.COLOR_BUFFER_BIT}$&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Ae.dispose(),ye.dispose(),we.dispose(),P.dispose(),te.dispose(),Ue.dispose(),Ce.dispose(),_e.dispose(),Fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",qe),Oe.removeEventListener("sessionend",je),Ze.stop()};function be(C){C.preventDefault(),Am("WebGLRenderer: Context Lost."),z=!0}function rt(){Am("WebGLRenderer: Context Restored."),z=!1;const C=Wt.autoReset,$=Ge.enabled,ue=Ge.autoUpdate,ne=Ge.needsUpdate,se=Ge.type;We(),Wt.autoReset=C,Ge.enabled=$,Ge.autoUpdate=ue,Ge.needsUpdate=ne,Ge.type=se}function Et(C){on("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ln(C){const $=C.target;$.removeEventListener("dispose",ln),Kt($)}function Kt(C){wn(C),P.remove(C)}function wn(C){const $=P.get(C).programs;$!==void 0&&($.forEach(function(ue){Fe.releaseProgram(ue)}),C.isShaderMaterial&&Fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ue,ne,se,ze){$===null&&($=Gt);const Je=se.isMesh&&se.matrixWorld.determinant()<0,ke=vn(C,$,ue,ne,se);Ye.setMaterial(ne,Je);let st=ue.index,ct=1;if(ne.wireframe===!0){if(st=Me.getWireframeAttribute(ue),st===void 0)return;ct=2}const yt=ue.drawRange,Ut=ue.attributes.position;let ft=yt.start*ct,b=(yt.start+yt.count)*ct;ze!==null&&(ft=Math.max(ft,ze.start*ct),b=Math.min(b,(ze.start+ze.count)*ct)),st!==null?(ft=Math.max(ft,0),b=Math.min(b,st.count)):Ut!=null&&(ft=Math.max(ft,0),b=Math.min(b,Ut.count));const H=b-ft;if(H<0||H===1/0)return;Ce.setup(se,ne,ke,ue,st);let F,ae=wt;if(st!==null&&(F=Se.get(st),ae=Dt,ae.setIndex(F)),se.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*Jt()),ae.setMode(Y.LINES)):ae.setMode(Y.TRIANGLES);else if(se.isLine){let Ne=ne.linewidth;Ne===void 0&&(Ne=1),Ye.setLineWidth(Ne*Jt()),se.isLineSegments?ae.setMode(Y.LINES):se.isLineLoop?ae.setMode(Y.LINE_LOOP):ae.setMode(Y.LINE_STRIP)}else se.isPoints?ae.setMode(Y.POINTS):se.isSprite&&ae.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ae.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Ne=se._multiDrawStarts,he=se._multiDrawCounts,Ve=se._multiDrawCount,Qe=st?Se.get(st).bytesPerElement:1,en=P.get(ne).currentProgram.getUniforms();for(let bt=0;bt<Ve;bt++)en.setValue(Y,"_gl_DrawID",bt),ae.render(Ne[bt]/Qe,he[bt])}else if(se.isInstancedMesh)ae.renderInstances(ft,H,se.count);else if(ue.isInstancedBufferGeometry){const Ne=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,he=Math.min(ue.instanceCount,Ne);ae.renderInstances(ft,H,he)}else ae.render(ft,H)};function jn(C,$,ue){C.transparent===!0&&C.side===Mr&&C.forceSinglePass===!1?(C.side=gi,C.needsUpdate=!0,sn(C,$,ue),C.side=ts,C.needsUpdate=!0,sn(C,$,ue),C.side=Mr):sn(C,$,ue)}this.compile=function(C,$,ue=null){ue===null&&(ue=C),I=we.get(ue),I.init($),w.push(I),ue.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),C!==ue&&C.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),I.setupLights();const ne=new Set;return C.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const ze=se.material;if(ze)if(Array.isArray(ze))for(let Je=0;Je<ze.length;Je++){const ke=ze[Je];jn(ke,ue,se),ne.add(ke)}else jn(ze,ue,se),ne.add(ze)}),I=w.pop(),ne},this.compileAsync=function(C,$,ue=null){const ne=this.compile(C,$,ue);return new Promise(se=>{function ze(){if(ne.forEach(function(Je){P.get(Je).currentProgram.isReady()&&ne.delete(Je)}),ne.size===0){se(C);return}setTimeout(ze,10)}St.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let $n=null;function ge(C){$n&&$n(C)}function qe(){Ze.stop()}function je(){Ze.start()}const Ze=new og;Ze.setAnimationLoop(ge),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(C){$n=C,Oe.setAnimationLoop(C),C===null?Ze.stop():Ze.start()},Oe.addEventListener("sessionstart",qe),Oe.addEventListener("sessionend",je),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(C,$);const ue=Oe.enabled===!0&&Oe.isPresenting===!0,ne=U!==null&&(j===null||ue)&&U.begin(G,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera($),$=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,$,j),I=we.get(C,w.length),I.init($),I.state.textureUnits=E.getTextureUnits(),w.push(I),Xt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),lt.setFromProjectionMatrix(Xt,ir,$.reversedDepth),_t=this.localClippingEnabled,gt=$e.init(this.clippingPlanes,_t),V=ye.get(C,O.length),V.init(),O.push(V),Oe.enabled===!0&&Oe.isPresenting===!0){const Je=G.xr.getDepthSensingMesh();Je!==null&&dt(Je,$,-1/0,G.sortObjects)}dt(C,$,0,G.sortObjects),V.finish(),G.sortObjects===!0&&V.sort(ce,Ee),jt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,jt&&Ae.addToRenderList(V,C),this.info.render.frame++,gt===!0&&$e.beginShadows();const se=I.state.shadowsArray;if(Ge.render(se,C,$),gt===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&U.hasRenderPass())===!1){const Je=V.opaque,ke=V.transmissive;if(I.setupLights(),$.isArrayCamera){const st=$.cameras;if(ke.length>0)for(let ct=0,yt=st.length;ct<yt;ct++){const Ut=st[ct];xt(Je,ke,C,Ut)}jt&&Ae.render(C);for(let ct=0,yt=st.length;ct<yt;ct++){const Ut=st[ct];Ot(V,C,Ut,Ut.viewport)}}else ke.length>0&&xt(Je,ke,C,$),jt&&Ae.render(C),Ot(V,C,$)}j!==null&&pe===0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j)),ne&&U.end(G),C.isScene===!0&&C.onAfterRender(G,C,$),Ce.resetDefaultState(),ie=-1,q=null,w.pop(),w.length>0?(I=w[w.length-1],E.setTextureUnits(I.state.textureUnits),gt===!0&&$e.setGlobalState(G.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?V=O[O.length-1]:V=null,K!==null&&K.renderEnd()};function dt(C,$,ue,ne){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){ne&&Rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xt);const Je=Ue.update(C),ke=C.material;ke.visible&&V.push(C,Je,ke,ue,Rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){const Je=Ue.update(C),ke=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Rt.copy(C.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Rt.copy(Je.boundingSphere.center)),Rt.applyMatrix4(C.matrixWorld).applyMatrix4(Xt)),Array.isArray(ke)){const st=Je.groups;for(let ct=0,yt=st.length;ct<yt;ct++){const Ut=st[ct],ft=ke[Ut.materialIndex];ft&&ft.visible&&V.push(C,Je,ft,ue,Rt.z,Ut)}}else ke.visible&&V.push(C,Je,ke,ue,Rt.z,null)}}const ze=C.children;for(let Je=0,ke=ze.length;Je<ke;Je++)dt(ze[Je],$,ue,ne)}function Ot(C,$,ue,ne){const{opaque:se,transmissive:ze,transparent:Je}=C;I.setupLightsView(ue),gt===!0&&$e.setGlobalState(G.clippingPlanes,ue),ne&&Ye.viewport(Z.copy(ne)),se.length>0&&Yt(se,$,ue),ze.length>0&&Yt(ze,$,ue),Je.length>0&&Yt(Je,$,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function xt(C,$,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const ft=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new sr(1,1,{generateMipmaps:!0,type:ft?Tr:Ui,minFilter:Es,samples:Math.max(4,Mt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rn.workingColorSpace})}const ze=I.state.transmissionRenderTarget[ne.id],Je=ne.viewport||Z;ze.setSize(Je.z*G.transmissionResolutionScale,Je.w*G.transmissionResolutionScale);const ke=G.getRenderTarget(),st=G.getActiveCubeFace(),ct=G.getActiveMipmapLevel();G.setRenderTarget(ze),G.getClearColor(B),re=G.getClearAlpha(),re<1&&G.setClearColor(16777215,.5),G.clear(),jt&&Ae.render(ue);const yt=G.toneMapping;G.toneMapping=rr;const Ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),gt===!0&&$e.setGlobalState(G.clippingPlanes,ne),Yt(C,ue,ne),E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze),St.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let b=0,H=$.length;b<H;b++){const F=$[b],{object:ae,geometry:Ne,material:he,group:Ve}=F;if(he.side===Mr&&ae.layers.test(ne.layers)){const Qe=he.side;he.side=gi,he.needsUpdate=!0,Lt(ae,ue,ne,Ne,he,Ve),he.side=Qe,he.needsUpdate=!0,ft=!0}}ft===!0&&(E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze))}G.setRenderTarget(ke,st,ct),G.setClearColor(B,re),Ut!==void 0&&(ne.viewport=Ut),G.toneMapping=yt}function Yt(C,$,ue){const ne=$.isScene===!0?$.overrideMaterial:null;for(let se=0,ze=C.length;se<ze;se++){const Je=C[se],{object:ke,geometry:st,group:ct}=Je;let yt=Je.material;yt.allowOverride===!0&&ne!==null&&(yt=ne),ke.layers.test(ue.layers)&&Lt(ke,$,ue,st,yt,ct)}}function Lt(C,$,ue,ne,se,ze){C.onBeforeRender(G,$,ue,ne,se,ze),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(G,$,ue,ne,C,ze),se.transparent===!0&&se.side===Mr&&se.forceSinglePass===!1?(se.side=gi,se.needsUpdate=!0,G.renderBufferDirect(ue,$,ne,se,C,ze),se.side=ts,se.needsUpdate=!0,G.renderBufferDirect(ue,$,ne,se,C,ze),se.side=Mr):G.renderBufferDirect(ue,$,ne,se,C,ze),C.onAfterRender(G,$,ue,ne,se,ze)}function sn(C,$,ue){$.isScene!==!0&&($=Gt);const ne=P.get(C),se=I.state.lights,ze=I.state.shadowsArray,Je=se.state.version,ke=Fe.getParameters(C,se.state,ze,$,ue,I.state.lightProbeGridArray),st=Fe.getProgramCacheKey(ke);let ct=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=te.get(C.envMap||ne.environment,yt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",ln),ct=new Map,ne.programs=ct);let Ut=ct.get(st);if(Ut!==void 0){if(ne.currentProgram===Ut&&ne.lightsStateVersion===Je)return hn(C,ke),Ut}else ke.uniforms=Fe.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,ue,ke),C.onBeforeCompile(ke,G),Ut=Fe.acquireProgram(ke,st),ct.set(st,Ut),ne.uniforms=ke.uniforms;const ft=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ft.clippingPlanes=$e.uniform),hn(C,ke),ne.needsLights=He(C),ne.lightsStateVersion=Je,ne.needsLights&&(ft.ambientLightColor.value=se.state.ambient,ft.lightProbe.value=se.state.probe,ft.directionalLights.value=se.state.directional,ft.directionalLightShadows.value=se.state.directionalShadow,ft.spotLights.value=se.state.spot,ft.spotLightShadows.value=se.state.spotShadow,ft.rectAreaLights.value=se.state.rectArea,ft.ltc_1.value=se.state.rectAreaLTC1,ft.ltc_2.value=se.state.rectAreaLTC2,ft.pointLights.value=se.state.point,ft.pointLightShadows.value=se.state.pointShadow,ft.hemisphereLights.value=se.state.hemi,ft.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ft.spotLightMatrix.value=se.state.spotLightMatrix,ft.spotLightMap.value=se.state.spotLightMap,ft.pointShadowMatrix.value=se.state.pointShadowMatrix),ne.lightProbeGrid=I.state.lightProbeGridArray.length>0,ne.currentProgram=Ut,ne.uniformsList=null,Ut}function dn(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=$l.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function hn(C,$){const ue=P.get(C);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Qt(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition($.matrixWorld);for(let ue=0,ne=C.length;ue<ne;ue++){const se=C[ue];if(se.texture!==null&&se.boundingBox.containsPoint(N))return se}return null}function vn(C,$,ue,ne,se){$.isScene!==!0&&($=Gt),E.resetTextureUnits();const ze=$.fog,Je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,ke=j===null?G.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rn.workingColorSpace,st=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ct=te.get(ne.envMap||Je,st),yt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ut=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ft=!!ue.morphAttributes.position,b=!!ue.morphAttributes.normal,H=!!ue.morphAttributes.color;let F=rr;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(F=G.toneMapping);const ae=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ne=ae!==void 0?ae.length:0,he=P.get(ne),Ve=I.state.lights;if(gt===!0&&(_t===!0||C!==q)){const Nt=C===q&&ne.id===ie;$e.setState(ne,C,Nt)}let Qe=!1;ne.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Ve.state.version||he.outputColorSpace!==ke||se.isBatchedMesh&&he.batching===!1||!se.isBatchedMesh&&he.batching===!0||se.isBatchedMesh&&he.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&he.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&he.instancing===!1||!se.isInstancedMesh&&he.instancing===!0||se.isSkinnedMesh&&he.skinning===!1||!se.isSkinnedMesh&&he.skinning===!0||se.isInstancedMesh&&he.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&he.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&he.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&he.instancingMorph===!1&&se.morphTexture!==null||he.envMap!==ct||ne.fog===!0&&he.fog!==ze||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==$e.numPlanes||he.numIntersection!==$e.numIntersection)||he.vertexAlphas!==yt||he.vertexTangents!==Ut||he.morphTargets!==ft||he.morphNormals!==b||he.morphColors!==H||he.toneMapping!==F||he.morphTargetsCount!==Ne||!!he.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,he.__version=ne.version);let en=he.currentProgram;Qe===!0&&(en=sn(ne,$,se),K&&ne.isNodeMaterial&&K.onUpdateProgram(ne,en,he));let bt=!1,pt=!1,Bt=!1;const Tt=en.getUniforms(),zt=he.uniforms;if(Ye.useProgram(en.program)&&(bt=!0,pt=!0,Bt=!0),ne.id!==ie&&(ie=ne.id,pt=!0),he.needsLights){const Nt=Qt(I.state.lightProbeGridArray,se);he.lightProbeGrid!==Nt&&(he.lightProbeGrid=Nt,pt=!0)}if(bt||q!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Tt.setValue(Y,"projectionMatrix",C.projectionMatrix),Tt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Un=Tt.map.cameraPosition;Un!==void 0&&Un.setValue(Y,nn.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Tt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),q!==C&&(q=C,pt=!0,Bt=!0)}if(he.needsLights&&(Ve.state.directionalShadowMap.length>0&&Tt.setValue(Y,"directionalShadowMap",Ve.state.directionalShadowMap,E),Ve.state.spotShadowMap.length>0&&Tt.setValue(Y,"spotShadowMap",Ve.state.spotShadowMap,E),Ve.state.pointShadowMap.length>0&&Tt.setValue(Y,"pointShadowMap",Ve.state.pointShadowMap,E)),se.isSkinnedMesh){Tt.setOptional(Y,se,"bindMatrix"),Tt.setOptional(Y,se,"bindMatrixInverse");const Nt=se.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Tt.setValue(Y,"boneTexture",Nt.boneTexture,E))}se.isBatchedMesh&&(Tt.setOptional(Y,se,"batchingTexture"),Tt.setValue(Y,"batchingTexture",se._matricesTexture,E),Tt.setOptional(Y,se,"batchingIdTexture"),Tt.setValue(Y,"batchingIdTexture",se._indirectTexture,E),Tt.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&Tt.setValue(Y,"batchingColorTexture",se._colorsTexture,E));const Mn=ue.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ie.update(se,ue,en),(pt||he.receiveShadow!==se.receiveShadow)&&(he.receiveShadow=se.receiveShadow,Tt.setValue(Y,"receiveShadow",se.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(zt.envMapIntensity.value=$.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=BE()),pt){if(Tt.setValue(Y,"toneMappingExposure",G.toneMappingExposure),he.needsLights&&cn(zt,Bt),ze&&ne.fog===!0&&de.refreshFogUniforms(zt,ze),de.refreshMaterialUniforms(zt,ne,Te,et,I.state.transmissionRenderTarget[C.id]),he.needsLights&&he.lightProbeGrid){const Nt=he.lightProbeGrid;zt.probesSH.value=Nt.texture,zt.probesMin.value.copy(Nt.boundingBox.min),zt.probesMax.value.copy(Nt.boundingBox.max),zt.probesResolution.value.copy(Nt.resolution)}$l.upload(Y,dn(he),zt,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($l.upload(Y,dn(he),zt,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(Y,"center",se.center),Tt.setValue(Y,"modelViewMatrix",se.modelViewMatrix),Tt.setValue(Y,"normalMatrix",se.normalMatrix),Tt.setValue(Y,"modelMatrix",se.matrixWorld),ne.uniformsGroups!==void 0){const Nt=ne.uniformsGroups;for(let Un=0,it=Nt.length;Un<it;Un++){const Vt=Nt[Un];_e.update(Vt,en),_e.bind(Vt,en)}}return en}function cn(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function He(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,$,ue){const ne=P.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=$,P.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ue=P.get(C);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const ot=Y.createFramebuffer();this.setRenderTarget=function(C,$=0,ue=0){j=C,ee=$,pe=ue;let ne=null,se=!1,ze=!1;if(C){const ke=P.get(C);if(ke.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(Y.FRAMEBUFFER,ke.__webglFramebuffer),Z.copy(C.viewport),me.copy(C.scissor),oe=C.scissorTest,Ye.viewport(Z),Ye.scissor(me),Ye.setScissorTest(oe),ie=-1;return}else if(ke.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(ke.__hasExternalTextures)E.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const yt=C.depthTexture;if(ke.__boundDepthTexture!==yt){if(yt!==null&&P.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(ze=!0);const ct=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[$])?ne=ct[$][ue]:ne=ct[$],se=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?ne=P.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?ne=ct[ue]:ne=ct,Z.copy(C.viewport),me.copy(C.scissor),oe=C.scissorTest}else Z.copy(ve).multiplyScalar(Te).floor(),me.copy(Le).multiplyScalar(Te).floor(),oe=tt;if(ue!==0&&(ne=ot),Ye.bindFramebuffer(Y.FRAMEBUFFER,ne)&&Ye.drawBuffers(C,ne),Ye.viewport(Z),Ye.scissor(me),Ye.setScissorTest(oe),se){const ke=P.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,ue)}else if(ze){const ke=$;for(let st=0;st<C.textures.length;st++){const ct=P.get(C.textures[st]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+st,ct.__webglTexture,ue,ke)}}else if(C!==null&&ue!==0){const ke=P.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ke.__webglTexture,ue)}ie=-1},this.readRenderTargetPixels=function(C,$,ue,ne,se,ze,Je,ke=0){if(!(C&&C.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(st=st[Je]),st){Ye.bindFramebuffer(Y.FRAMEBUFFER,st);try{const ct=C.textures[ke],yt=ct.format,Ut=ct.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ke),!Mt.textureFormatReadable(yt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ut)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ne&&ue>=0&&ue<=C.height-se&&Y.readPixels($,ue,ne,se,W.convert(yt),W.convert(Ut),ze)}finally{const ct=j!==null?P.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(Y.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(C,$,ue,ne,se,ze,Je,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(st=st[Je]),st)if($>=0&&$<=C.width-ne&&ue>=0&&ue<=C.height-se){Ye.bindFramebuffer(Y.FRAMEBUFFER,st);const ct=C.textures[ke],yt=ct.format,Ut=ct.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ke),!Mt.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.bufferData(Y.PIXEL_PACK_BUFFER,ze.byteLength,Y.STREAM_READ),Y.readPixels($,ue,ne,se,W.convert(yt),W.convert(Ut),0);const b=j!==null?P.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(Y.FRAMEBUFFER,b);const H=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Yv(Y,H,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,ze),Y.deleteBuffer(ft),Y.deleteSync(H),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ue=0){const ne=Math.pow(2,-ue),se=Math.floor(C.image.width*ne),ze=Math.floor(C.image.height*ne),Je=$!==null?$.x:0,ke=$!==null?$.y:0;E.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ue,0,0,Je,ke,se,ze),Ye.unbindTexture()};const pn=Y.createFramebuffer(),mn=Y.createFramebuffer();this.copyTextureToTexture=function(C,$,ue=null,ne=null,se=0,ze=0){let Je,ke,st,ct,yt,Ut,ft,b,H;const F=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(ue!==null)Je=ue.max.x-ue.min.x,ke=ue.max.y-ue.min.y,st=ue.isBox3?ue.max.z-ue.min.z:1,ct=ue.min.x,yt=ue.min.y,Ut=ue.isBox3?ue.min.z:0;else{const zt=Math.pow(2,-se);Je=Math.floor(F.width*zt),ke=Math.floor(F.height*zt),C.isDataArrayTexture?st=F.depth:C.isData3DTexture?st=Math.floor(F.depth*zt):st=1,ct=0,yt=0,Ut=0}ne!==null?(ft=ne.x,b=ne.y,H=ne.z):(ft=0,b=0,H=0);const ae=W.convert($.format),Ne=W.convert($.type);let he;$.isData3DTexture?(E.setTexture3D($,0),he=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(E.setTexture2DArray($,0),he=Y.TEXTURE_2D_ARRAY):(E.setTexture2D($,0),he=Y.TEXTURE_2D),Ye.activeTexture(Y.TEXTURE0),Ye.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),Ye.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Ye.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const Ve=Ye.getParameter(Y.UNPACK_ROW_LENGTH),Qe=Ye.getParameter(Y.UNPACK_IMAGE_HEIGHT),en=Ye.getParameter(Y.UNPACK_SKIP_PIXELS),bt=Ye.getParameter(Y.UNPACK_SKIP_ROWS),pt=Ye.getParameter(Y.UNPACK_SKIP_IMAGES);Ye.pixelStorei(Y.UNPACK_ROW_LENGTH,F.width),Ye.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,F.height),Ye.pixelStorei(Y.UNPACK_SKIP_PIXELS,ct),Ye.pixelStorei(Y.UNPACK_SKIP_ROWS,yt),Ye.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ut);const Bt=C.isDataArrayTexture||C.isData3DTexture,Tt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const zt=P.get(C),Mn=P.get($),Nt=P.get(zt.__renderTarget),Un=P.get(Mn.__renderTarget);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let it=0;it<st;it++)Bt&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,P.get(C).__webglTexture,se,Ut+it),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,P.get($).__webglTexture,ze,H+it)),Y.blitFramebuffer(ct,yt,Je,ke,ft,b,Je,ke,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||C.isRenderTargetTexture||P.has(C)){const zt=P.get(C),Mn=P.get($);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,pn),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,mn);for(let Nt=0;Nt<st;Nt++)Bt?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,zt.__webglTexture,se,Ut+Nt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,zt.__webglTexture,se),Tt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Mn.__webglTexture,ze,H+Nt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Mn.__webglTexture,ze),se!==0?Y.blitFramebuffer(ct,yt,Je,ke,ft,b,Je,ke,Y.COLOR_BUFFER_BIT,Y.NEAREST):Tt?Y.copyTexSubImage3D(he,ze,ft,b,H+Nt,ct,yt,Je,ke):Y.copyTexSubImage2D(he,ze,ft,b,ct,yt,Je,ke);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(he,ze,ft,b,H,Je,ke,st,ae,Ne,F.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(he,ze,ft,b,H,Je,ke,st,ae,F.data):Y.texSubImage3D(he,ze,ft,b,H,Je,ke,st,ae,Ne,F):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ze,ft,b,Je,ke,ae,Ne,F.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ze,ft,b,F.width,F.height,ae,F.data):Y.texSubImage2D(Y.TEXTURE_2D,ze,ft,b,Je,ke,ae,Ne,F);Ye.pixelStorei(Y.UNPACK_ROW_LENGTH,Ve),Ye.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Qe),Ye.pixelStorei(Y.UNPACK_SKIP_PIXELS,en),Ye.pixelStorei(Y.UNPACK_SKIP_ROWS,bt),Ye.pixelStorei(Y.UNPACK_SKIP_IMAGES,pt),ze===0&&$.generateMipmaps&&Y.generateMipmap(he),Ye.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){ee=0,pe=0,j=null,Ye.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(e),t.unpackColorSpace=rn._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var HE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Re.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Re.createElement("svg",{ref:h,...HE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:mg("lucide",o),...f},[...u.map(([p,v])=>Re.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(s,e)=>{const t=Re.forwardRef(({className:r,...o},l)=>Re.createElement(GE,{ref:l,iconNode:e,className:mg(`lucide-${VE(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=qt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=qt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=qt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=qt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=qt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=qt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=qt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=qt("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=qt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=qt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=qt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=qt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=qt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=qt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=qt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=qt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=qt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=qt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=qt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=qt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=qt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=qt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=qt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=qt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=qt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=qt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=qt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=qt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=qt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=qt("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=qt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=qt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=qt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=qt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=qt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=qt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=qt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=qt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=qt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=qt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),b0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},aw=({direction:s,className:e})=>{const r={none:E0,up:_g,down:gg,left:xg,right:vg,"up-left":XE,"up-right":YE,"down-left":jE,"down-right":WE}[s]||E0;return g.jsx(r,{className:e})},ti=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Zr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ii=s=>JSON.parse(JSON.stringify(s)),T0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new kf(s),l=new zf(o,Math.max(8,s.length*12),e,12,!1),u=new es({color:t,transparent:r<1,opacity:r});return new oi(l,u)},A0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},C0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),ow=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),lw=s=>{if(!s||s.length<2)return null;const e=new kf(s),t=Math.max(ow(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new bs;for(let u=0;u<r;u++){const f=new bs,h=new oi(new nc(.14,.34,24),new es({color:16777215,transparent:!0,opacity:.22})),p=new oi(new nc(.09,.28,24),new es({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},cw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new Q(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},ha=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],uw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:ha(s),buildings:co()}),Vl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...ha(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function dw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var ct,yt,Ut,ft;const[r,o]=Re.useState(e),[l,u]=Re.useState(!1),[f,h]=Re.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Re.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Re.useState({isOpen:!1,message:""}),[M,A]=Re.useState(!1),[D,y]=Re.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Re.useRef(!1),[L,R]=Re.useState(()=>{if(t)return[Vl({})];try{const F=localStorage.getItem("arManager_projects");if(F){const ae=JSON.parse(F);if(Array.isArray(ae)&&ae.length>0)return ae}}catch(F){console.error("Project load error:",F)}let b=ha("預設導引專案"),H=co();try{const F=localStorage.getItem("arManager_config");F&&(b={...b,...JSON.parse(F)});const ae=localStorage.getItem("arManager_buildings");ae&&(H=JSON.parse(ae))}catch(F){console.error("Legacy AR data migration error:",F)}return[{id:`project_${Date.now()}`,name:b.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:b,buildings:H}]}),[N,V]=Re.useState((ct=L[0])==null?void 0:ct.id),I=L.find(b=>b.id===N)||L[0],[O,w]=Re.useState(()=>Ii((I==null?void 0:I.systemConfig)||ha())),[U,G]=Re.useState(()=>Ii((I==null?void 0:I.buildings)||co())),[z,K]=Re.useState((yt=U[0])==null?void 0:yt.id),[ee,pe]=Re.useState((ft=(Ut=U[0])==null?void 0:Ut.floors[0])==null?void 0:ft.id),[j,ie]=Re.useState(""),[q,Z]=Re.useState(null),[me,oe]=Re.useState(null),[B,re]=Re.useState(null),[Ke,et]=Re.useState(!1),[Te,ce]=Re.useState(!1),[Ee,ve]=Re.useState(!1),[Le,tt]=Re.useState(null),[lt,gt]=Re.useState(null),[_t,Xt]=Re.useState(!1),[nn,Rt]=Re.useState({x:0,y:0}),[Gt,jt]=Re.useState({x:0,y:0}),[Jt,Y]=Re.useState(!1),[kt,St]=Re.useState(!1),[Mt,Ye]=Re.useState([]),[Wt,P]=Re.useState(!1),[E,te]=Re.useState([]),[Se,Me]=Re.useState([]),Ue=Re.useRef(null),Fe=Re.useRef(null),de=Re.useRef(null),ye=Re.useRef(null),[we,$e]=Re.useState({x:0,y:0,scale:1});Re.useEffect(()=>{const b=H=>{var ae;const F=(ae=H==null?void 0:H.detail)==null?void 0:ae.tab;["map","list","settings","export"].includes(F)&&cn(F)};return window.addEventListener("ar-manager:set-tab",b),()=>window.removeEventListener("ar-manager:set-tab",b)},[]),Re.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(L))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[L,t]),Re.useEffect(()=>{if(!t)return;let b=!1;return(async()=>{const F=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(F.ok)return F.json();const ae=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!ae.ok)throw new Error(`Unable to load AR data: ${ae.status}`);return ae.json()})().then(F=>{var Ne,he,Ve;if(b)return;const ae=Vl(F);R([ae]),V(ae.id),w(Ii(ae.systemConfig)),G(Ii(ae.buildings)),K((Ne=ae.buildings[0])==null?void 0:Ne.id),pe((Ve=(he=ae.buildings[0])==null?void 0:he.floors[0])==null?void 0:Ve.id)}).catch(F=>{console.warn("Published AR data unavailable",F),b||(R([Vl({})]),w(ha("AR導覽")),G([]))}),()=>{b=!0}},[t]),Re.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let b=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(H=>{if(!H.ok)throw new Error(`Unable to load AR data: ${H.status}`);return H.json()}).then(H=>{var ae,Ne,he;if(b||!Array.isArray(H==null?void 0:H.buildings)||H.buildings.length===0)return;const F=Vl(H);R([F]),V(F.id),w(Ii(F.systemConfig)),G(Ii(F.buildings)),K((ae=F.buildings[0])==null?void 0:ae.id),pe((he=(Ne=F.buildings[0])==null?void 0:Ne.floors[0])==null?void 0:he.id)}).catch(H=>console.warn("Published AR admin seed unavailable",H)),()=>{b=!0}},[t]),Re.useEffect(()=>{var H,F,ae;if(t||!I)return;_.current=!0;const b=Ii(I.buildings||co());w(Ii(I.systemConfig||ha(I.name))),G(b),K((H=b[0])==null?void 0:H.id),pe((ae=(F=b[0])==null?void 0:F.floors[0])==null?void 0:ae.id),Z(null),oe(null),ie(""),$e({x:0,y:0,scale:1})},[N,t]),Re.useEffect(()=>{if(!t&&N){if(_.current){_.current=!1;return}R(b=>b.map(H=>H.id===N?{...H,name:O.projectName||H.name,systemConfig:Ii(O),buildings:Ii(U),updatedAt:new Date().toISOString()}:H))}},[N,U,O,t]),Re.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(U))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[U,t]),Re.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(O))}catch(b){console.error("Config save error:",b)}},[O,t]),Re.useEffect(()=>{var H;const b=U.find(F=>F.id===z);b?b.floors.find(F=>F.id===ee)||b.floors.length>0&&pe(b.floors[0].id):U.length>0&&(K(U[0].id),pe((H=U[0].floors[0])==null?void 0:H.id))},[U,z,ee]),Re.useEffect(()=>{j===ee&&ie("")},[ee,j]),Re.useEffect(()=>{et(!1)},[q,me]),Re.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||A(!0)},[]);const Ge=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(H=>H.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),A(!1)},Ae=U.find(b=>b.id===z)||U[0],Ie=Ae==null?void 0:Ae.floors.find(b=>b.id===ee),wt=(Ie==null?void 0:Ie.markers)||[],Dt=(Ie==null?void 0:Ie.waypoints)||[],W=(Ie==null?void 0:Ie.edges)||[],Ce=Zr(Ie),_e=(b,H,F=!0)=>{G(ae=>{let Ne=null,he=null,Ve=null;if(ae.forEach(Bt=>Bt.floors.forEach(Tt=>{const zt=F?Tt.markers:Tt.waypoints,Mn=zt==null?void 0:zt.find(Nt=>Nt.id===b);Mn&&(Ne=Mn,he=Bt.id,Ve=Tt)})),!Ne)return ae;const Qe=H.shaftId!==void 0?H.shaftId:Ne.shaftId,bt=(H.isVerticalShaft!==void 0?H.isVerticalShaft:Ne.isVerticalShaft)&&Qe,pt=Zr(Ve);return ae.map(Bt=>Bt.id!==he&&!bt?Bt:{...Bt,floors:Bt.floors.map(Tt=>{let zt=F?[...Tt.markers||[]]:[...Tt.waypoints||[]];const Mn=Nt=>{const Un={...Nt,...H};if((H.x!==void 0||H.y!==void 0)&&Tt.id!==Ve.id){const it=Zr(Tt);if(H.x!==void 0){const Vt=pt.blX+H.x*(pt.trX-pt.blX);Un.x=it.trX!==it.blX?(Vt-it.blX)/(it.trX-it.blX):.5}if(H.y!==void 0){const Vt=pt.trY-H.y*(pt.trY-pt.blY);Un.y=it.trY!==it.blY?(it.trY-Vt)/(it.trY-it.blY):.5}}return Un};return bt?zt=zt.map(Nt=>Nt.shaftId===Qe||Nt.id===b?Mn(Nt):Nt):zt=zt.map(Nt=>Nt.id===b?Mn(Nt):Nt),F?{...Tt,markers:zt}:{...Tt,waypoints:zt}})})})},We=(b,H,F)=>_e(b,{[H]:F},!0),Oe=(b,H,F)=>_e(b,{[H]:F},!1),be=(b,H,F=!0)=>{if(H){const ae=F?"shaft_m_":"shaft_wp_",he={isVerticalShaft:!0,shaftId:b.shaftId||`${ae}${Date.now()}`,linkedFloorIds:[ee]};F||(he.sourceFloorId=ee),_e(b.id,he,F)}else{const ae=b.shaftId;G(Ne=>Ne.map(he=>he.id!==z?he:{...he,floors:he.floors.map(Ve=>{const Qe=en=>(en||[]).filter(bt=>!(Ve.id!==ee&&bt.shaftId===ae)).map(bt=>bt.id===b.id?{...bt,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:bt);return F?{...Ve,markers:Qe(Ve.markers)}:{...Ve,waypoints:Qe(Ve.waypoints)}})}))}},rt=(b,H,F,ae=!0)=>{const Ne=b.shaftId,he=b.linkedFloorIds||[ee],Ve=F?[...he,H]:he.filter(Qe=>Qe!==H);G(Qe=>Qe.map(en=>en.id!==z?en:{...en,floors:en.floors.map(bt=>{let pt=ae?[...bt.markers||[]]:[...bt.waypoints||[]];if(F&&bt.id===H){const Bt=Zr(bt),Tt=Zr(Ie),zt=Tt.blX+b.x*(Tt.trX-Tt.blX),Mn=Tt.trY-b.y*(Tt.trY-Tt.blY),Nt=Bt.trX!==Bt.blX?(zt-Bt.blX)/(Bt.trX-Bt.blX):.5,Un=Bt.trY!==Bt.blY?(Bt.trY-Mn)/(Bt.trY-Bt.blY):.5,it=ae?"marker_":"wp_";pt.push({...b,id:`${it}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${bt.id}`,x:Nt,y:Un,linkedFloorIds:Ve})}else!F&&bt.id===H?pt=pt.filter(Bt=>Bt.shaftId!==Ne):pt=pt.map(Bt=>Bt.shaftId===Ne?{...Bt,linkedFloorIds:Ve}:Bt);return ae?{...bt,markers:pt}:{...bt,waypoints:pt}})}))},Et=b=>{let H=null,F=new Set([b]);U.forEach(ae=>ae.floors.forEach(Ne=>{var he;Ne.markers.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(H=Ve.shaftId)}),(he=Ne.waypoints)==null||he.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(H=Ve.shaftId)})})),H&&U.forEach(ae=>ae.floors.forEach(Ne=>{var he;Ne.markers.forEach(Ve=>{Ve.shaftId===H&&F.add(Ve.id)}),(he=Ne.waypoints)==null||he.forEach(Ve=>{Ve.shaftId===H&&F.add(Ve.id)})})),G(ae=>ae.map(Ne=>({...Ne,floors:Ne.floors.map(he=>({...he,markers:(he.markers||[]).filter(Ve=>!F.has(Ve.id)),waypoints:(he.waypoints||[]).filter(Ve=>!F.has(Ve.id)),edges:(he.edges||[]).filter(Ve=>!F.has(Ve.start)&&!F.has(Ve.end))}))}))),F.has(q)&&Z(null),F.has(me)&&oe(null),F.has(Le)&&(tt(null),gt(null)),et(!1)},ln=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:b=>{if(!b)return;const H=`b_${Date.now()}`,F=`f_${Date.now()}`;G(ae=>[...ae,{id:H,name:b,floors:[{id:F,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),K(H),pe(F)}})},Kt=()=>{Ae&&h({isOpen:!0,title:`新增 ${Ae.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:b=>{if(!b)return;const H=`f_${Date.now()}`,F=Ie?{...Zr(Ie)}:{blX:0,blY:0,trX:100,trY:100};G(ae=>ae.map(Ne=>Ne.id===z?{...Ne,floors:[...Ne.floors,{id:H,name:b,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:F}]}:Ne)),pe(H)}})},wn=b=>{const H=b.target.files[0],F=b.target;if(H&&z&&ee){const ae=z,Ne=ee,he=new FileReader;he.onload=Ve=>{b0(Ve.target.result,1600,Qe=>{G(en=>en.map(bt=>bt.id===ae?{...bt,floors:bt.floors.map(pt=>pt.id===Ne?{...pt,imageUrl:Qe}:pt)}:bt)),Y(!1)})},he.readAsDataURL(H)}F.value=""},jn=(b,H)=>{const F=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,ae={id:F,x:b,y:H,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:ee};G(Ne=>Ne.map(he=>he.id===z?{...he,floors:he.floors.map(Ve=>{if(Ve.id!==ee)return Ve;const Qe=Le?[...Ve.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Le,end:F}]:Ve.edges||[];return{...Ve,waypoints:[...Ve.waypoints||[],ae],edges:Qe}})}:he)),tt(F)},$n=b=>{if(Le===b){tt(null),gt(null);return}Le&&Le!==b&&(W.some(F=>F.start===Le&&F.end===b||F.end===Le&&F.start===b)||G(F=>F.map(ae=>ae.id===z?{...ae,floors:ae.floors.map(Ne=>Ne.id===ee?{...Ne,edges:[...Ne.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Le,end:b}]}:Ne)}:ae))),tt(b)},ge=(b,H)=>{for(let ae of wt)if(Math.hypot(ae.x-b,ae.y-H)<.03)return ae.id;for(let ae of Dt)if(Math.hypot(ae.x-b,ae.y-H)<.03)return ae.id;return null};Re.useEffect(()=>{const b=H=>{H.key==="Escape"&&Te&&(tt(null),gt(null))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[Te]);const qe=(b,H)=>{const F={},ae=[],Ne={};U.forEach(it=>{it.floors.forEach(Vt=>{var Fi,Rr;const An=Vt.bounds||{blX:0,blY:0,trX:100,trY:100},li=(fn,$i)=>({physX:An.blX+fn*(An.trX-An.blX),physY:An.trY-$i*(An.trY-An.blY)});Vt.markers.forEach(fn=>{F[fn.id]={...fn,...li(fn.x,fn.y),fId:Vt.id,fName:Vt.name},fn.isVerticalShaft&&fn.shaftId&&(Ne[fn.shaftId]||(Ne[fn.shaftId]=[]),Ne[fn.shaftId].push(fn.id))}),(Fi=Vt.waypoints)==null||Fi.forEach(fn=>{F[fn.id]={...fn,...li(fn.x,fn.y),fId:Vt.id,fName:Vt.name},fn.isVerticalShaft&&fn.shaftId&&(Ne[fn.shaftId]||(Ne[fn.shaftId]=[]),Ne[fn.shaftId].push(fn.id))}),(Rr=Vt.edges)==null||Rr.forEach(fn=>ae.push(fn))})});const he={};Object.keys(F).forEach(it=>{he[it]={}}),ae.forEach(it=>{if(F[it.start]&&F[it.end]){const Vt=Math.hypot(F[it.start].physX-F[it.end].physX,F[it.start].physY-F[it.end].physY);he[it.start][it.end]=Vt,he[it.end][it.start]=Vt}}),Object.values(Ne).forEach(it=>{for(let Vt=0;Vt<it.length;Vt++)for(let An=Vt+1;An<it.length;An++)he[it[Vt]][it[An]]=5,he[it[An]][it[Vt]]=5});const Ve=it=>Object.keys(he[it]).length>0;let Qe=null,en=1/0,bt=null,pt=1/0;if(Object.values(F).forEach(it=>{if(Ve(it.id)){if(it.fId===b.fId){const Vt=Math.hypot(it.x-b.x,it.y-b.y);Vt<en&&(en=Vt,Qe=it.id)}if(it.fId===H.fId){const Vt=Math.hypot(it.x-H.x,it.y-H.y);Vt<pt&&(pt=Vt,bt=it.id)}}}),!Qe||!bt){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),te([]),Me([]);return}const Bt={},Tt={},zt=new Set(Object.keys(F));for(Object.keys(F).forEach(it=>{Bt[it]=1/0,Tt[it]=null}),Bt[Qe]=0;zt.size>0;){let it=null;if(zt.forEach(Vt=>{(it===null||Bt[Vt]<Bt[it])&&(it=Vt)}),Bt[it]===1/0||it===bt)break;zt.delete(it),Object.entries(he[it]).forEach(([Vt,An])=>{if(zt.has(Vt)){const li=Bt[it]+An;li<Bt[Vt]&&(Bt[Vt]=li,Tt[Vt]=it)}})}const Mn=[];let Nt=bt;for(;Nt;)Mn.unshift(Nt),Nt=Tt[Nt];if(Mn.length===0||Mn[0]!==Qe){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),te([]),Me([]);return}const Un=[{x:b.x,y:b.y,fId:b.fId,fName:b.fName,isVirtual:!0},...Mn.map(it=>F[it]),{x:H.x,y:H.y,fId:H.fId,fName:H.fName,isVirtual:!0}];Me(Un)};Re.useEffect(()=>{const b=Ue.current;if(!b||r!=="map")return;const H=F=>{F.preventDefault();const ae=b.getBoundingClientRect(),Ne=F.clientX-ae.left,he=F.clientY-ae.top,Ve=F.deltaY<0?1.1:.9;$e(Qe=>{const en=Math.max(.1,Math.min(10,Qe.scale*Ve)),bt=en/Qe.scale;return{x:Ne-(Ne-Qe.x)*bt,y:he-(he-Qe.y)*bt,scale:en}})};return b.addEventListener("wheel",H,{passive:!1}),()=>b.removeEventListener("wheel",H)},[r]);const je=b=>{b.button!==void 0&&b.button!==0||b.target.closest(".marker-pin")||b.target.closest(".waypoint-pin")||(Xt(!0),Rt({x:b.clientX-we.x,y:b.clientY-we.y}),jt({x:b.clientX,y:b.clientY}),b.target.setPointerCapture(b.pointerId))},Ze=b=>{if(_t)$e(H=>({...H,x:b.clientX-nn.x,y:b.clientY-nn.y}));else if(Te&&Le&&Fe.current){const H=Fe.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(b.clientX-H.left)/H.width)),ae=Math.max(0,Math.min(1,(b.clientY-H.top)/H.height));gt({x:F,y:ae})}else if(B&&Fe.current){const H=Fe.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(b.clientX-H.left)/H.width)),ae=Math.max(0,Math.min(1,(b.clientY-H.top)/H.height));B.startsWith("marker_")?(We(B,"x",F),We(B,"y",ae)):B.startsWith("wp_")&&(Oe(B,"x",F),Oe(B,"y",ae))}},dt=b=>{if(_t&&(Xt(!1),b.target.releasePointerCapture(b.pointerId),Math.hypot(b.clientX-Gt.x,b.clientY-Gt.y)<5)){if(!(Ie!=null&&Ie.imageUrl)||!Fe.current)return;const F=Fe.current.getBoundingClientRect();let ae=Math.max(0,Math.min(1,(b.clientX-F.left)/F.width)),Ne=Math.max(0,Math.min(1,(b.clientY-F.top)/F.height));if(Wt){const he={x:ae,y:Ne,fId:ee,fName:Ie==null?void 0:Ie.name},Ve=E.length>=2?[he]:[...E,he];te(Ve),Ve.length===1&&Me([]),Ve.length===2&&qe(Ve[0],Ve[1])}else if(Te){const he=ge(ae,Ne);he?$n(he):jn(ae,Ne)}else if(Jt){const he=U.reduce((Qe,en)=>Qe+en.floors.reduce((bt,pt)=>bt+pt.markers.length,0),0),Ve={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${he+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:ae,y:Ne,imageUrl:null,enabled:!0,recognitionStatus:"untested"};G(Qe=>Qe.map(en=>en.id===z?{...en,floors:en.floors.map(bt=>bt.id===ee?{...bt,markers:[...bt.markers,Ve]}:bt)}:en)),Z(Ve.id),oe(null),Y(!1)}else kt?Ye(he=>he.length>=2?[{x:ae,y:Ne}]:[...he,{x:ae,y:Ne}]):(Z(null),oe(null))}},Ot=b=>{const H=b.target.files[0],F=b.target;if(H&&q){const ae=q,Ne=new FileReader;Ne.onload=he=>{b0(he.target.result,800,Ve=>{We(ae,"imageUrl",Ve),We(ae,"recognitionStatus","untested")})},Ne.readAsDataURL(H)}F.value=""},xt=(b,H,F)=>{K(b),pe(H),Z(F),oe(null),o("map")},Yt=async()=>{const b={version:"7.0",project:{id:N,name:O.projectName||(I==null?void 0:I.name)||"AR導覽",description:(I==null?void 0:I.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ii(O),buildings:Ii(U)};R(H=>H.map(F=>F.id===N?{...F,name:b.project.name,systemConfig:b.systemConfig,buildings:b.buildings,updatedAt:b.project.updatedAt}:F));try{const H=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),F=await H.json().catch(()=>({}));if(!H.ok)throw new Error(F.error||`Save failed: ${H.status}`);x({isOpen:!0,message:`「${b.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(H){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${H.message}`})}},Lt=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${L.length+1}`,onSubmit:b=>{if(!b)return;const H=uw(b);R(F=>[...F,H]),V(H.id),o("map")}})},sn=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(I==null?void 0:I.name)||O.projectName||"",onSubmit:b=>{b&&(w(H=>({...H,projectName:b})),R(H=>H.map(F=>F.id===N?{...F,name:b,systemConfig:{...F.systemConfig,projectName:b},updatedAt:new Date().toISOString()}:F)))}})},dn=()=>{if(L.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(I==null?void 0:I.name)||O.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(b=>{var F;const H=b.filter(ae=>ae.id!==N);return V((F=H[0])==null?void 0:F.id),H})}})},hn=()=>{G(co()),Z(null),oe(null),$e({x:0,y:0,scale:1}),Y(!1),ce(!1),ve(!1),tt(null),gt(null),P(!1),te([]),Me([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Qt=()=>{const b=(O.projectName||(I==null?void 0:I.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),H="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:N,name:O.projectName||(I==null?void 0:I.name),description:(I==null?void 0:I.description)||"",updatedAt:I==null?void 0:I.updatedAt},systemConfig:O,buildings:U},null,2)),F=document.createElement("a");F.setAttribute("href",H),F.setAttribute("download",`${b}_ar_config_v7.json`),document.body.appendChild(F),F.click(),F.remove()},vn=()=>{if(!(Ie!=null&&Ie.imageUrl)||!Ue.current||!Fe.current){$e({x:0,y:0,scale:1});return}const b=Ue.current,H=Fe.current.querySelector("img");if(!H||H.naturalWidth===0)return;const{width:F,height:ae}=b.getBoundingClientRect(),Ne=Math.min(F/H.naturalWidth,ae/H.naturalHeight,1)*.9;$e({x:(F-H.naturalWidth*Ne)/2,y:(ae-H.naturalHeight*Ne)/2,scale:Ne})},cn=b=>{o(b),u(!1),Y(!1),St(!1),ce(!1),ve(!1),tt(null),gt(null),P(!1),te([]),Me([])};let He=null,ot=null;U.forEach(b=>b.floors.forEach(H=>{var F;H.markers.forEach(ae=>{ae.id===q&&(He=ae,b.name,H.name)}),(F=H.waypoints)==null||F.forEach(ae=>{ae.id===me&&(ot=ae,b.name,H.name)})}));let pn=0,mn=0;const C=document.getElementById("current-map-image"),$=Ce.trX-Ce.blX,ue=Ce.trY-Ce.blY;if(C&&$>0){const b=C.offsetWidth*we.scale;if(b>0){const H=$/b,F=100*H;pn=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Ne=>Ne<=F)||.5,mn=pn/H}}const ne=U.reduce((b,H)=>b+H.floors.reduce((F,ae)=>F+(ae.markers||[]).length,0),0),se=U.reduce((b,H)=>b+H.floors.length,0),ze=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:N,onChange:b=>V(b.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-950",children:b.name},b.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",L.length," 個專案 · ",U.length," 棟建築 · ",se," 個樓層 · ",ne," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Lt,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(zl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:sn,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:Yt,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ql,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:dn,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Cd,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),Je=()=>{const b=new Set,H=U.flatMap(F=>F.floors.flatMap(ae=>(ae.markers||[]).reduce((Ne,he)=>{if(he.isVerticalShaft&&he.shaftId){if(b.has(he.shaftId))return Ne;b.add(he.shaftId)}return Ne.push({...he,bId:F.id,fId:ae.id,buildingName:F.name,floorName:ae.name}),Ne},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[ze(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",H.length," 組節點"]})]}),H.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>cn("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:H.map(F=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(S0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:F.code}),g.jsx(Mf,{status:F.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:F.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[F.buildingName," · ",F.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${F.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:F.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>xt(F.bId,F.fId,F.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]})]})]},F.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:H.map(F=>{var Ne;const ae=F.isVerticalShaft?(Ne=U.find(he=>he.id===F.bId))==null?void 0:Ne.floors.filter(he=>{var Ve;return(Ve=F.linkedFloorIds)==null?void 0:Ve.includes(he.id)}).sort((he,Ve)=>ti(Ve.name)-ti(he.name)).map(he=>he.name).join(", "):F.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${F.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:F.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${F.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:ae})]}),g.jsx("td",{className:"px-4 py-4",children:F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(S0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:F.code}),F.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(vs,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):F.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(aw,{direction:F.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:F.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:F.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:F.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Mf,{status:F.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>xt(F.bId,F.fId,F.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Ad,{className:"w-4 h-4"})})})]},F.id)})})]})})})]})]})})},ke=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[ze(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(w0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(KE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:O.projectName,onChange:b=>w({...O,projectName:b.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:O.lerpFactor,onChange:b=>w({...O,lerpFactor:parseInt(b.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>hn()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),st=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[ze(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(Td,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:U.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:U.reduce((b,H)=>b+H.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:U.reduce((b,H)=>b+H.floors.reduce((F,ae)=>F+(ae.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:Qt,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(Td,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(R0,{buildings:U,systemConfig:O,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(_s,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Hl,{icon:g.jsx(M0,{}),label:"平面圖管理",active:r==="map",onClick:()=>cn("map")}),g.jsx(Hl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>cn("list")}),g.jsx(Hl,{icon:g.jsx(w0,{}),label:"系統設定",active:r==="settings",onClick:()=>cn("settings")}),g.jsx(Hl,{icon:g.jsx(Td,{}),label:"匯出JSON",active:r==="export",onClick:()=>cn("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(R0,{buildings:U,systemConfig:O,onMenuClick:()=>u(!0)}),r==="list"&&Je(),r==="settings"&&ke(),r==="export"&&st(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:N,onChange:b=>V(b.target.value),children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Lt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(zl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:Yt,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ql,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx($E,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:z,onChange:b=>K(b.target.value),children:U.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:ln,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),Ae&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(ZE,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:ee,onChange:b=>pe(b.target.value),children:Ae.floors.slice().sort((b,H)=>ti(H.name)-ti(b.name)).map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Kt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx(qE,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:j,onChange:b=>ie(b.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),U.flatMap(b=>b.floors.filter(H=>H.id!==ee).sort((H,F)=>ti(F.name)-ti(H.name)).map(H=>g.jsxs("option",{value:H.id,className:"bg-slate-900",children:[b.name,"-",H.name]},H.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{Ie!=null&&Ie.imageUrl&&(P(!Wt),ce(!1),ve(!1),Y(!1),St(!1),tt(null),Z(null),oe(null),gt(null),te([]),Me([]))},disabled:!(Ie!=null&&Ie.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Wt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Wt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(_0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(Ie==null?void 0:Ie.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{ve(!Ee),ce(!1),P(!1),Y(!1),St(!1),tt(null),Z(null),oe(null),gt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ee?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:Ee?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(vs,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{ce(!Te),ve(!1),P(!1),Y(!1),St(!1),tt(null),Z(null),oe(null),gt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Te?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Te?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(tw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{St(!kt),ve(!1),P(!1),Y(!1),ce(!1),Ye([]),gt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${kt?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:kt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(nw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{Y(!Jt),ve(!1),P(!1),St(!1),ce(!1),gt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Jt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Jt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:Ce.blX,blY:Ce.blY,trX:Ce.trX,trY:Ce.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(fa,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:de,onChange:wn,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>de.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(sw,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:Ue,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Te?"cursor-crosshair":Ee?"cursor-pointer":Jt||kt||Wt?"cursor-crosshair":_t?"cursor-grabbing":"cursor-grab"}`,onPointerDown:je,onPointerMove:Ze,onPointerUp:dt,onPointerCancel:dt,children:[Ie&&g.jsxs("div",{className:"absolute left-4 top-4 z-[80] rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(Ae==null?void 0:Ae.name)||"目前場域"," / ",Ie.name||"未命名樓層"]}),g.jsxs("div",{ref:Fe,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${we.x}px, ${we.y}px) scale(${we.scale})`},children:[j&&(()=>{let b=null;if(U.forEach(Ve=>Ve.floors.forEach(Qe=>{Qe.id===j&&(b=Qe)})),!b)return null;const H=Zr(b),F=$!==0?(H.trX-H.blX)/$:1,ae=ue!==0?(H.trY-H.blY)/ue:1,Ne=$!==0?(H.blX-Ce.blX)/$:0,he=ue!==0?(Ce.trY-H.trY)/ue:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Ne*100}%`,top:`${he*100}%`,width:`${F*100}%`,height:`${ae*100}%`,opacity:.4},children:[b.imageUrl&&g.jsx("img",{src:b.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),b.markers.map(Ve=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ve.x*100}%`,top:`${Ve.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,we.scale)})`},children:Ve.code})})},Ve.id))]})})(),(Ie==null?void 0:Ie.imageUrl)&&g.jsx("img",{id:"current-map-image",src:Ie.imageUrl,alt:"Floor Plan",onLoad:vn,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${j?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),W.map(b=>{const H=wt.find(ae=>ae.id===b.start)||Dt.find(ae=>ae.id===b.start),F=wt.find(ae=>ae.id===b.end)||Dt.find(ae=>ae.id===b.end);return H&&F?g.jsx("line",{x1:`${H.x*100}%`,y1:`${H.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,we.scale),strokeOpacity:"0.7"},b.id):null}),Te&&Le&&lt&&(()=>{const b=wt.find(H=>H.id===Le)||Dt.find(H=>H.id===Le);return b?g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${lt.x*100}%`,y2:`${lt.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,we.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Wt&&Se.length>0&&Se.map((b,H)=>{if(H===Se.length-1)return null;const F=Se[H+1],ae=[];return b.fId===ee&&F.fId===ee?ae.push(g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,we.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${H}`)):b.fId===ee&&F.fId!==ee?ae.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:12/Math.max(.5,we.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,we.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,we.scale),to:35/Math.max(.5,we.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.5,we.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${b.x*100}%`,y:`${b.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,we.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",F.fName]})]},`leave_${H}`)):b.fId!==ee&&F.fId===ee&&ae.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:12/Math.max(.5,we.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,we.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,we.scale),to:35/Math.max(.5,we.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:6/Math.max(.5,we.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${F.x*100}%`,y:`${F.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,we.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",b.fName]})]},`enter_${H}`)),g.jsx(wf.Fragment,{children:ae},`testfrag_${H}`)})]}),Dt.map(b=>{const H=me===b.id,F=Le===b.id,ae=b.isVerticalShaft&&b.sourceFloorId&&b.sourceFloorId!==ee;let Ne="bg-orange-500",he="border-white",Ve="";return b.isVerticalShaft&&(Ne="bg-green-500"),F?(Ne="bg-white",he=ae?"border-green-500":"border-orange-500",Ve=ae?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):H&&(he="border-cyan-400 border-2",Ve="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${H?"z-40":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:Qe=>{Qe.stopPropagation(),Qe.button===0&&(Te?$n(b.id):Ee?(b.isVerticalShaft||be(b,!0,!1),Z(null),oe(b.id)):!Wt&&!kt&&!_t&&!Jt&&(Z(null),oe(b.id),re(b.id),Qe.target.setPointerCapture(Qe.pointerId)))},onPointerUp:Qe=>{Qe.stopPropagation(),Qe.target.releasePointerCapture(Qe.pointerId)},onContextMenu:Qe=>{Qe.preventDefault(),Te?Et(b.id):Ee?b.isVerticalShaft&&be(b,!1,!1):!Wt&&!kt&&!Jt&&(Z(null),oe(b.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Ne} ${he} ${Ve}`,style:{width:`${(F?14:10)/Math.max(.5,we.scale)}px`,height:`${(F?14:10)/Math.max(.5,we.scale)}px`,borderWidth:H?"2px":"1px"},children:b.isVerticalShaft&&g.jsx(vs,{className:F?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,we.scale)}px`,height:`${6/Math.max(.5,we.scale)}px`}})})},b.id)}),Wt&&E.map((b,H)=>b.fId!==ee?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${b.x*100}%`,top:`${b.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,we.scale)}px`,height:`${16/Math.max(.5,we.scale)}px`},children:H===0?"起":"終"})},`testpt_${H}`)),kt&&Mt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[Mt.length===2&&g.jsx("line",{x1:`${Mt[0].x*100}%`,y1:`${Mt[0].y*100}%`,x2:`${Mt[1].x*100}%`,y2:`${Mt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,we.scale),strokeDasharray:"5,5"}),Mt.map((b,H)=>g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.1,we.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,we.scale)},H))]}),Mt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(Mt[0].x+Mt[1].x)*50}%`,top:`${(Mt[0].y+Mt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,we.scale)})`},children:[Math.hypot((Mt[1].x-Mt[0].x)*$,(Mt[1].y-Mt[0].y)*ue).toFixed(1)," m"]})]}),wt.map(b=>{const H=b.isVerticalShaft?Ae==null?void 0:Ae.floors.filter(F=>{var ae;return(ae=b.linkedFloorIds)==null?void 0:ae.includes(F.id)}).sort((F,ae)=>ti(ae.name)-ti(F.name)).map(F=>F.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${q===b.id?"z-[60]":""} ${Le===b.id?"scale-125":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:F=>{F.stopPropagation(),F.button===0&&(Te?$n(b.id):Ee?(b.isVerticalShaft||be(b,!0,!0),oe(null),Z(b.id)):!Wt&&!Jt&&!kt&&!_t&&(oe(null),re(b.id),Z(b.id),F.target.setPointerCapture(F.pointerId)))},onPointerUp:F=>{F.stopPropagation(),F.target.releasePointerCapture(F.pointerId)},onContextMenu:F=>{F.preventDefault(),Te?Et(b.id):Ee?b.isVerticalShaft&&be(b,!1,!0):!Wt&&!kt&&!Jt&&(oe(null),Z(b.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${q===b.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":b.enabled?b.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Le===b.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:b.isVerticalShaft?g.jsx(vs,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,we.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,we.scale)})`},children:b.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${q===b.id?"border-t-white":b.enabled?b.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Le===b.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${q===b.id?"opacity-100 border-cyan-500 text-cyan-400":b.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,we.scale)})`,transformOrigin:"top center"},children:[b.title||"未命名"," ",b.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",H,")"]})]})]},b.id)})]}),Ee&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(vs,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Te&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(QE,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Wt&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(_0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(Ie!=null&&Ie.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(M0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",Ae==null?void 0:Ae.name," - ",Ie==null?void 0:Ie.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(Ie==null?void 0:Ie.imageUrl)&&mn>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:Ce.blX,blY:Ce.blY,trX:Ce.trX,trY:Ce.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(fa,{className:"w-3 h-3 mr-1"})," 比例尺: ",pn," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${mn}px`}})]}),(Ie==null?void 0:Ie.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>$e(b=>({...b,scale:Math.min(10,b.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(Sg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>$e(b=>({...b,scale:Math.max(.1,b.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(Mg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:vn,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(JE,{className:"w-5 h-5"})})]})]})]}),D.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(fa,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.blX,onChange:b=>y({...D,blX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.blY,onChange:b=>y({...D,blY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.trX,onChange:b=>y({...D,trX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.trY,onChange:b=>y({...D,trY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{G(b=>b.map(H=>H.id===z?{...H,floors:H.floors.map(F=>F.id===ee?{...F,bounds:{blX:D.blX,blY:D.blY,trX:D.trX,trY:D.trY}}:F)}:H)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:b=>{b.key==="Enter"&&(f.onSubmit(b.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:b=>{f.onSubmit(b.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(yg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(Sf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(rw,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:Ge,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ql,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(q||me)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:q?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{Z(null),oe(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(_s,{})})]}),He&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:He.code,onChange:b=>We(He.id,"code",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:He.title,onChange:b=>We(He.id,"title",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:He.description||"",onChange:b=>We(He.id,"description",b.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(He.x*100).toFixed(1),onChange:b=>We(He.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(He.y*100).toFixed(1),onChange:b=>We(He.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:He.isVerticalShaft||!1,onChange:b=>be(He,b.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),He.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ae==null?void 0:Ae.floors.slice().sort((b,H)=>ti(H.name)-ti(b.name)).map(b=>{var ae;const H=(ae=He.linkedFloorIds)==null?void 0:ae.includes(b.id),F=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${H?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:F,checked:H||F,onChange:Ne=>rt(He,b.id,Ne.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",F&&"(目前)"]})]},b.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:He.arrowDirection||"none",onChange:b=>We(He.id,"arrowDirection",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:He.enabled,onChange:b=>We(He.id,"enabled",b.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:ye,onChange:Ot,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>ye.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:He.imageUrl?g.jsx("img",{src:He.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(fw,{marker:He,onUpdateStatus:b=>We(He.id,"recognitionStatus",b),showAlert:b=>x({isOpen:!0,message:b})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Ke?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>et(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>Et(He.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>et(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Z(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),ot&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(ot.x*100).toFixed(1),onChange:b=>Oe(ot.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(ot.y*100).toFixed(1),onChange:b=>Oe(ot.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:ot.isVerticalShaft||!1,onChange:b=>be(ot,b.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),ot.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ae==null?void 0:Ae.floors.slice().sort((b,H)=>ti(H.name)-ti(b.name)).map(b=>{var ae;const H=(ae=ot.linkedFloorIds)==null?void 0:ae.includes(b.id),F=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${H?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:F,checked:H||F,onChange:Ne=>rt(ot,b.id,Ne.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",F&&"(目前)"]})]},b.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Ke?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>et(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>Et(ot.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>et(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>oe(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Hl({icon:s,label:e,active:t,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Mf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ql,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(yg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function fw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Re.useState("idle"),[l,u]=Re.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Re.useRef(null),h=Re.useRef(null),p=Re.useRef(null),v=Re.useRef(null),S=Re.useRef(null),x=Re.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Re.useRef({frames:0,lockedFrames:0});Re.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const A=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,N=x.current;N.refGray&&N.refGray.delete(),N.refKeypoints&&N.refKeypoints.delete(),N.refDescriptors&&N.refDescriptors.delete(),N.orbDetector&&N.orbDetector.delete(),N.matcher&&N.matcher.delete();const V=document.createElement("canvas"),I=V.getContext("2d"),O=p.current,w=320;let U=O.naturalWidth||O.width,G=O.naturalHeight||O.height;(U>w||G>w)&&(U>G?(G=Math.round(G*w/U),U=w):(U=Math.round(U*w/G),G=w)),V.width=U,V.height=G,I.drawImage(O,0,0,U,G);const z=R.imread(V),K=new R.Mat;R.cvtColor(z,K,R.COLOR_RGBA2GRAY);const ee=new R.ORB,pe=new R.KeyPointVector,j=new R.Mat;ee.detectAndCompute(K,new R.Mat,pe,j);const ie=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:K,refKeypoints:pe,refDescriptors:j,orbDetector:ee,matcher:ie},z.delete(),!0}catch{return!1}},D=R=>{if(R.length<4)return!1;let N=[];for(let V=0;V<4;V++){let I=R[(V+1)%4].x-R[V].x,O=R[(V+1)%4].y-R[V].y,w=R[(V+2)%4].x-R[(V+1)%4].x,U=R[(V+2)%4].y-R[(V+1)%4].y;N.push(I*U-O*w>0)}return N.every(V=>V===N[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!A()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(N){console.warn("Device orientation permission was not granted.",N)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,L()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Re.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const L=()=>{const R=window.cv,N=x.current,V=f.current,I=h.current,O=I.getContext("2d");let w=performance.now(),U=null;const G=.15;let z=0;const K=3;let ee=0;const pe=10;let j=null;const ie=()=>{if(!V||!V.srcObject||!N.refDescriptors)return;const q=performance.now(),Z=Math.round(1e3/(q-w));w=q,O.drawImage(V,0,0,I.width,I.height);let me=0,oe=0,B=!1,re=null,Ke=z%K===0;if(z++,Ke){try{const Te=R.imread(I),ce=new R.Mat;R.cvtColor(Te,ce,R.COLOR_RGBA2GRAY);const Ee=new R.KeyPointVector,ve=new R.Mat;if(N.orbDetector.detectAndCompute(ce,new R.Mat,Ee,ve),!ve.empty()&&ve.rows>0){const Le=new R.DMatchVector;N.matcher.match(N.refDescriptors,ve,Le);let tt=[];for(let gt=0;gt<Le.size();gt++)tt.push(Le.get(gt));tt.sort((gt,_t)=>gt.distance-_t.distance);let lt=tt.filter(gt=>gt.distance<=50).slice(0,60);if(me=lt.length,lt.length>=12){const gt=[],_t=[];for(let jt=0;jt<lt.length;jt++){let Jt=lt[jt];gt.push(N.refKeypoints.get(Jt.queryIdx).pt.x,N.refKeypoints.get(Jt.queryIdx).pt.y),_t.push(Ee.get(Jt.trainIdx).pt.x,Ee.get(Jt.trainIdx).pt.y)}const Xt=R.matFromArray(gt.length/2,1,R.CV_32FC2,gt),nn=R.matFromArray(_t.length/2,1,R.CV_32FC2,_t),Rt=new R.Mat,Gt=R.findHomography(Xt,nn,R.RANSAC,4,Rt);for(let jt=0;jt<Rt.rows;jt++)Rt.data[jt]===1&&oe++;if(!Gt.empty()&&oe>=10&&oe/lt.length>=.35){const jt=N.refGray.cols,Jt=N.refGray.rows,Y=[0,0,1,jt,0,1,jt,Jt,1,0,Jt,1];let kt=[];for(let St=0;St<4;St++){let Mt=Y[St*3],Ye=Y[St*3+1],Wt=Gt.data64F[0]*Mt+Gt.data64F[1]*Ye+Gt.data64F[2],P=Gt.data64F[3]*Mt+Gt.data64F[4]*Ye+Gt.data64F[5],E=Gt.data64F[6]*Mt+Gt.data64F[7]*Ye+Gt.data64F[8];kt.push({x:Wt/E,y:P/E})}D(kt)&&(re=kt,B=!0)}Xt.delete(),nn.delete(),Rt.delete(),Gt.delete()}Le.delete()}Te.delete(),ce.delete(),Ee.delete(),ve.delete()}catch{}B?(j=re,ee=pe):ee>0?ee--:j=null}const et=j!==null;if(et){if(!U)U=JSON.parse(JSON.stringify(j));else for(let Te=0;Te<4;Te++)U[Te].x=U[Te].x*(1-G)+j[Te].x*G,U[Te].y=U[Te].y*(1-G)+j[Te].y*G;O.strokeStyle="#00ffcc",O.lineWidth=3,O.shadowBlur=10,O.shadowColor="#00ffcc",O.beginPath(),O.moveTo(U[0].x,U[0].y),O.lineTo(U[1].x,U[1].y),O.lineTo(U[2].x,U[2].y),O.lineTo(U[3].x,U[3].y),O.closePath(),O.stroke(),O.shadowBlur=0}else{U=null;const Te=Math.min(I.width,I.height)*.5,ce=(I.width-Te)/2,Ee=(I.height-Te)/2;O.strokeStyle="rgba(255, 70, 70, 0.5)",O.lineWidth=2,O.strokeRect(ce,Ee,Te,Te)}u(Te=>({fps:Z,matches:Ke?me:Te.matches,inliers:Ke?oe:Te.inliers,status:et?"LOCKED":"SEARCHING"})),M.current.frames++,et&&M.current.lockedFrames++,S.current=requestAnimationFrame(ie)};ie()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Mf,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(ew,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function R0({buildings:s,systemConfig:e,onMenuClick:t}){var jn,$n;const[r,o]=Re.useState("idle"),[l,u]=Re.useState(null),[f,h]=Re.useState(null),[p,v]=Re.useState([]),[S,x]=Re.useState(!1),[M,A]=Re.useState(0),[D,y]=Re.useState("idle"),[_,L]=Re.useState("checking"),[R,N]=Re.useState("idle"),[V,I]=Re.useState(0),[O,w]=Re.useState(0),[U,G]=Re.useState(!1),z=Re.useRef(null),K=Re.useRef(null),ee=Re.useRef(null),pe=Re.useRef(null),j=Re.useRef(null),ie=Re.useRef(null),q=Re.useRef(null),Z=Re.useRef(null),me=Re.useRef(null),oe=Re.useRef(null),B=Re.useRef(!1),re=Re.useRef([]),Ke=Re.useRef({matcher:null}),et=Re.useRef(0),Te=Re.useRef(!1),ce=Re.useRef([]),Ee=Re.useRef({nodes:{},edges:[]}),ve=Re.useRef(null),Le=Re.useRef("idle"),tt=Re.useRef({heading:0,pitch:0,roll:0}),lt=Re.useRef(null),gt=wf.useMemo(()=>{const ge={},qe=[];return s.forEach(je=>je.floors.forEach(Ze=>{var xt,Yt;const dt=Ze.bounds||{blX:0,blY:0,trX:100,trY:100},Ot=(Lt,sn)=>({physX:dt.blX+Lt*(dt.trX-dt.blX),physY:dt.trY-sn*(dt.trY-dt.blY)});Ze.markers.forEach(Lt=>{Lt.enabled&&(ge[Lt.id]={...Lt,...Ot(Lt.x,Lt.y),isMarker:!0,bId:je.id,fId:Ze.id,bName:je.name,fName:Ze.name,bounds:dt})}),(xt=Ze.waypoints)==null||xt.forEach(Lt=>{ge[Lt.id]={...Lt,...Ot(Lt.x,Lt.y),isMarker:!1,fId:Ze.id,bounds:dt}}),(Yt=Ze.edges)==null||Yt.forEach(Lt=>{qe.push({...Lt,fId:Ze.id})})})),{nodes:ge,edges:qe}},[s]);Re.useEffect(()=>{Ee.current=gt},[gt]),Re.useEffect(()=>{ce.current=p},[p]),Re.useEffect(()=>{w(0)},[l,p]),Re.useEffect(()=>{if(!l||p.length<2){I(0);return}const ge=performance.now(),qe=je=>{I((je-ge)/5200%1),lt.current=requestAnimationFrame(qe)};return lt.current=requestAnimationFrame(qe),()=>{lt.current&&cancelAnimationFrame(lt.current)}},[l,p]),Re.useEffect(()=>{ve.current=null,_t("idle")},[l]);const _t=ge=>{Le.current!==ge&&(Le.current=ge,y(ge))};Re.useEffect(()=>{let ge=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){ge&&L("unsupported");return}try{const je=await navigator.xr.isSessionSupported("immersive-ar");ge&&L(je?"supported":"unsupported")}catch{ge&&L("unsupported")}})(),()=>{ge=!1}},[]);const Xt=(ge,qe)=>{const{nodes:je,edges:Ze}=gt,dt={};Object.keys(je).forEach(He=>{dt[He]={}}),Ze.forEach(He=>{if(je[He.start]&&je[He.end]){const ot=Math.hypot(je[He.start].physX-je[He.end].physX,je[He.start].physY-je[He.end].physY);dt[He.start][He.end]=ot,dt[He.end][He.start]=ot}});const Ot={};Object.values(je).forEach(He=>{He.isVerticalShaft&&He.shaftId&&(Ot[He.shaftId]||(Ot[He.shaftId]=[]),Ot[He.shaftId].push(He.id))}),Object.values(Ot).forEach(He=>{for(let ot=0;ot<He.length;ot++)for(let pn=ot+1;pn<He.length;pn++)dt[He[ot]][He[pn]]=5,dt[He[pn]][He[ot]]=5});const xt=He=>Object.keys(dt[He]).length>0,Yt=He=>{if(xt(He))return He;const ot=je[He];let pn=1/0,mn=He;return Object.keys(je).forEach(C=>{if(je[C].fId===ot.fId&&xt(C)){const $=Math.hypot(je[C].physX-ot.physX,je[C].physY-ot.physY);$<pn&&(pn=$,mn=C)}}),mn},Lt=Yt(ge),sn=Yt(qe),dn={},hn={},Qt=new Set(Object.keys(je));for(Object.keys(je).forEach(He=>{dn[He]=1/0,hn[He]=null}),dn[Lt]=0;Qt.size>0;){let He=null;if(Qt.forEach(ot=>{(He===null||dn[ot]<dn[He])&&(He=ot)}),dn[He]===1/0||He===sn)break;Qt.delete(He),Object.entries(dt[He]).forEach(([ot,pn])=>{if(Qt.has(ot)){const mn=dn[He]+pn;mn<dn[ot]&&(dn[ot]=mn,hn[ot]=He)}})}const vn=[];let cn=sn;for(;cn;)vn.unshift(cn),cn=hn[cn];return vn.length===0||vn[0]!==Lt?[]:(Lt!==ge&&vn.unshift(ge),sn!==qe&&vn.push(qe),vn)};Re.useEffect(()=>{v(f&&l&&f!==l?Xt(f,l):[])},[f,l,gt]),Re.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const Ze=document.createElement("script");Ze.id="opencv-script",Ze.src="https://docs.opencv.org/3.4.16/opencv.js",Ze.async=!0,document.body.appendChild(Ze)}}else o("idle");let ge=0;const qe=Ze=>{let dt=null;Ze.webkitCompassHeading!==void 0&&Ze.webkitCompassHeading!==null?dt=Ze.webkitCompassHeading:Ze.alpha!==null&&Ze.alpha!==void 0&&(dt=360-Ze.alpha),dt!==null&&(tt.current={heading:dt,pitch:Ze.beta||0,roll:Ze.gamma||0},et.current=dt,Te.current||(Te.current=!0,G(!0)))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",qe,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",qe,!0));const je=setInterval(()=>{if(!Te.current)return;let dt=et.current-(ge%360+360)%360;dt>180&&(dt-=360),dt<-180&&(dt+=360),ge+=dt,A(ge)},200);return()=>{Gt(),clearInterval(je),window.removeEventListener("deviceorientation",qe,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",qe,!0)}},[]);const nn=async()=>{const ge=window.cv;if(!ge)return!1;re.current=[],Ke.current.matcher=new ge.BFMatcher(ge.NORM_HAMMING,!0);const je=Object.values(gt.nodes).filter(Ze=>Ze.isMarker&&Ze.imageUrl).map(Ze=>new Promise(dt=>{const Ot=new Image;Ot.onload=()=>{try{const xt=document.createElement("canvas"),Yt=xt.getContext("2d");xt.width=320,xt.height=Math.round(320*(Ot.height/Ot.width)),Yt.drawImage(Ot,0,0,xt.width,xt.height);const Lt=ge.imread(xt),sn=new ge.Mat;ge.cvtColor(Lt,sn,ge.COLOR_RGBA2GRAY);const dn=new ge.ORB,hn=new ge.KeyPointVector,Qt=new ge.Mat;dn.detectAndCompute(sn,new ge.Mat,hn,Qt),re.current.push({markerId:Ze.id,gray:sn,kp:hn,des:Qt,orb:dn,width:sn.cols,height:sn.rows}),Lt.delete(),dt(!0)}catch{dt(!1)}},Ot.onerror=()=>dt(!1),Ot.src=Ze.imageUrl}));return await Promise.all(je),re.current.length>0},Rt=async()=>{if(r!=="idle")return;if(o("loading"),!await nn()){o("idle"),alert("無法提取特徵");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(je){console.warn("Device orientation permission was not granted.",je)}const qe=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});ee.current=qe,z.current.srcObject=qe,z.current.play(),z.current.onloadedmetadata=()=>{K.current.width=z.current.videoWidth,K.current.height=z.current.videoHeight,o("scanning"),Wt()}}catch{alert("無相機權限"),o("idle")}},Gt=()=>{pe.current&&cancelAnimationFrame(pe.current),ee.current&&ee.current.getTracks().forEach(ge=>ge.stop()),ve.current=null,_t("idle"),o("idle")},jt=(ge,qe,je=!1)=>{if(!qe||qe.length<2)return!1;const Ze=C0(qe);if(ge.save(),ge.beginPath(),qe.forEach((dt,Ot)=>{Ot===0?ge.moveTo(dt.x,dt.y):ge.lineTo(dt.x,dt.y)}),ge.strokeStyle=je?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",ge.lineWidth=je?8:10,ge.lineCap="round",ge.lineJoin="round",ge.shadowBlur=je?8:12,ge.shadowColor="#ffffff",ge.stroke(),Ze>8){const dt=je?74:62,Ot=je?28:32,xt=Date.now()/10%dt;ge.shadowBlur=je?10:16,ge.shadowColor="#ffffff",ge.fillStyle="rgba(255,255,255,0.98)",ge.strokeStyle="rgba(0,0,0,0.34)",ge.lineWidth=2.5;for(let Yt=xt;Yt<Ze;Yt+=dt){const Lt=A0(qe,Yt);Lt&&(ge.save(),ge.translate(Lt.x,Lt.y),ge.rotate(Lt.angle),ge.beginPath(),ge.moveTo(Ot*.55,0),ge.lineTo(-Ot*.35,-Ot*.32),ge.lineTo(-Ot*.15,0),ge.lineTo(-Ot*.35,Ot*.32),ge.closePath(),ge.stroke(),ge.fill(),ge.restore())}}return ge.restore(),!0},Jt=ge=>{const qe=ve.current;if(!qe||!qe.points||qe.points.length<2||Date.now()-qe.updatedAt>1e3)return!1;const je=tt.current,Ze=Te.current?(je.heading-qe.orientation.heading+540)%360-180:0,dt=Te.current?je.pitch-qe.orientation.pitch:0,xt=(Te.current?je.roll-qe.orientation.roll:0)*Math.PI/180,Yt=Math.cos(xt),Lt=Math.sin(xt),sn=ge.canvas.width/2,dn=ge.canvas.height/2,hn=Math.max(ge.canvas.width,ge.canvas.height)*.95,Qt=ge.canvas.width*1.8,vn=ge.canvas.height*1.2,cn=Math.max(-Qt,Math.min(Qt,Math.tan(Ze*Math.PI/180)*hn)),He=Math.max(-vn,Math.min(vn,Math.tan(dt*Math.PI/180)*hn*.75)),ot=qe.points.map(pn=>{const mn=pn.x*ge.canvas.width,C=pn.y*ge.canvas.height,$=mn-sn,ue=C-dn;return{x:sn+$*Yt-ue*Lt-cn,y:dn+$*Lt+ue*Yt+He}});return jt(ge,ot,!0)},Y=()=>{if(ce.current.length>1)return ce.current;const ge=Object.values(Ee.current.nodes).filter(je=>je.isMarker&&je.id!==l).map(je=>je.id),qe=f||ge[0];return!qe||!l||qe===l?[]:Xt(qe,l)},kt=()=>{const ge=Y(),qe=Ee.current.nodes,je=ge.map(Qt=>qe[Qt]).filter(Boolean);if(je.length<2)return null;const Ze=je[0],dt=.08,Ot=je.map(Qt=>new Q((Qt.physX-Ze.physX)*dt,.03,-(Qt.physY-Ze.physY)*dt)),xt=new bs,Yt=T0(Ot,.045,16777215,.18),Lt=T0(Ot,.016,16777215,.36);Yt&&xt.add(Yt),Lt&&xt.add(Lt);const sn=lw(Ot);sn&&xt.add(sn);const dn=new oi(new ic(.1,24,24),new es({color:2282478}));dn.position.copy(Ot[0]),dn.position.y+=.08,xt.add(dn);const hn=new oi(new ic(.12,24,24),new es({color:16731471}));return hn.position.copy(Ot[Ot.length-1]),hn.position.y+=.1,xt.add(hn),xt},St=async()=>{const ge=ie.current;if(ge)try{await ge.end()}catch{}else Mt()},Mt=()=>{Z.current&&Z.current.traverse(ge=>{ge.geometry&&ge.geometry.dispose(),ge.material&&ge.material.dispose()}),q.current&&(q.current.setAnimationLoop(null),q.current.dispose(),q.current.domElement.remove()),ie.current=null,q.current=null,Z.current=null,me.current=null,oe.current=null,B.current=!1,N("idle")},Ye=async()=>{var ge;if(!(_!=="supported"||!navigator.xr||ie.current)){N("starting"),Gt();try{const qe={requiredFeatures:["hit-test"],optionalFeatures:j.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};j.current&&(qe.domOverlay={root:j.current});const je=await navigator.xr.requestSession("immersive-ar",qe),Ze=new zE({alpha:!0,antialias:!0});Ze.xr.enabled=!0,Ze.setPixelRatio(window.devicePixelRatio||1),Ze.setSize(window.innerWidth,window.innerHeight),Ze.domElement.className="absolute inset-0 h-full w-full",(ge=j.current)==null||ge.appendChild(Ze.domElement),await Ze.xr.setSession(je);const dt=new c_,Ot=new Li,xt=new oi(new Bf(.18,.22,32).rotateX(-Math.PI/2),new es({color:65484,transparent:!0,opacity:.85}));xt.matrixAutoUpdate=!1,xt.visible=!1,dt.add(xt);const Yt=await je.requestReferenceSpace("local-floor").catch(()=>je.requestReferenceSpace("local")),Lt=await je.requestReferenceSpace("viewer"),sn=await je.requestHitTestSource({space:Lt});ie.current=je,q.current=Ze,me.current=sn,oe.current=Yt,N("placing");const dn=hn=>{if(B.current)return;const Qt=kt();if(!Qt){N("no-route");return}Qt.matrix.fromArray(hn),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),dt.add(Qt),Z.current=Qt,B.current=!0,N("anchored")};je.addEventListener("select",()=>{xt.visible&&dn(xt.matrix.elements)}),je.addEventListener("end",Mt),Ze.setAnimationLoop((hn,Qt)=>{if(Z.current&&Z.current.traverse(vn=>cw(vn,hn)),Qt&&!B.current){const vn=Qt.getHitTestResults(sn);if(vn.length){const cn=vn[0].getPose(Yt);cn&&(xt.visible=!0,xt.matrix.fromArray(cn.transform.matrix))}else xt.visible=!1}else xt.visible=!1;Ze.render(dt,Ot)})}catch(qe){console.warn("Unable to start WebXR AR mode.",qe),Mt(),N("failed")}}},Wt=()=>{const ge=window.cv,qe=z.current,je=K.current,Ze=je.getContext("2d"),dt=Ke.current.matcher;let Ot=0,xt=null,Yt=null,Lt=0,sn=0;const dn=()=>{if(!qe||!qe.srcObject)return;Ze.drawImage(qe,0,0,je.width,je.height);let hn=!1;if(Ot%4===0){try{const cn=ge.imread(je),He=new ge.Mat;ge.cvtColor(cn,He,ge.COLOR_RGBA2GRAY);const ot=new ge.KeyPointVector,pn=new ge.Mat;if(re.current[0].orb.detectAndCompute(He,new ge.Mat,ot,pn),!pn.empty())for(let mn of re.current){const C=new ge.DMatchVector;dt.match(mn.des,pn,C);let $=[];for(let ne=0;ne<C.size();ne++)$.push(C.get(ne));$.sort((ne,se)=>ne.distance-se.distance);const ue=$.filter(ne=>ne.distance<=50).slice(0,60);if(ue.length>=12){const ne=[],se=[];for(let yt of ue)ne.push(mn.kp.get(yt.queryIdx).pt.x,mn.kp.get(yt.queryIdx).pt.y),se.push(ot.get(yt.trainIdx).pt.x,ot.get(yt.trainIdx).pt.y);const ze=ge.matFromArray(ne.length/2,1,ge.CV_32FC2,ne),Je=ge.matFromArray(se.length/2,1,ge.CV_32FC2,se),ke=new ge.Mat,st=ge.findHomography(ze,Je,ge.RANSAC,4,ke);let ct=0;for(let yt=0;yt<ke.rows;yt++)ke.data[yt]===1&&ct++;!st.empty()&&ct>=10&&(xt&&xt.delete(),xt=st.clone(),Yt=mn.markerId,h(Yt),hn=!0),ze.delete(),Je.delete(),ke.delete(),st.delete()}if(C.delete(),hn)break}cn.delete(),He.delete(),ot.delete(),pn.delete()}catch{}hn?(sn=8,Lt=Date.now()):sn>0?sn--:(xt&&(xt.delete(),xt=null),Yt=null)}Ot++,(!Lt||Date.now()-Lt>1e3)&&(xt&&(xt.delete(),xt=null),Yt=null,ve.current=null);const Qt=Ee.current,vn=ce.current;if(xt&&Yt&&vn.length>1){const cn=Qt.nodes[Yt],He=re.current.find(ot=>ot.markerId===Yt);if(cn&&He){const ot=He.width/.3,pn=[];for(let mn=0;mn<vn.length;mn++){const C=vn[mn],$=Qt.nodes[C];if(!$||$.fId!==cn.fId)break;const ue=$.physX-cn.physX,ne=-($.physY-cn.physY),se=He.width/2+ue*ot,ze=He.height/2+ne*ot,Je=xt.data64F,ke=Je[6]*se+Je[7]*ze+Je[8];if(ke>0){const st=(Je[0]*se+Je[1]*ze+Je[2])/ke,ct=(Je[3]*se+Je[4]*ze+Je[5])/ke;pn.push({x:st,y:ct})}}jt(Ze,pn,!1)&&(ve.current={markerId:Yt,orientation:{...tt.current},updatedAt:Date.now(),points:pn.map(mn=>({x:mn.x/je.width,y:mn.y/je.height}))},_t("locked"))}}else{const cn=vn.length>1&&Jt(Ze);if(_t(cn?"holding":"searching"),!cn){const He=Math.min(je.width,je.height)*.6;Ze.strokeStyle="rgba(0, 255, 204, 0.4)",Ze.lineWidth=2,Ze.strokeRect((je.width-He)/2,(je.height-He)/2,He,He)}}pe.current=requestAnimationFrame(dn)};dn()};if(!l){const ge=Object.values(gt.nodes).filter(qe=>qe.isMarker).reduce((qe,je)=>{const Ze=`${je.bName} - ${je.fName}`;return qe[Ze]||(qe[Ze]=[]),qe[Ze].push(je),qe},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(ge).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(fa,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(ge).map(([qe,je])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:qe}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:je.map(Ze=>g.jsxs("button",{onClick:()=>u(Ze.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:Ze.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:Ze.title})})]},Ze.id))})]},qe))]})]})}const P=gt.nodes[l],E=f?gt.nodes[f]:null,te=p.length>1?p[1]:null;te&&gt.nodes[te];const Se=p.map(ge=>gt.nodes[ge]).filter(Boolean),Me=[];Se.forEach(ge=>{const qe=Me[Me.length-1];!qe||qe.floorId!==ge.fId?Me.push({floorId:ge.fId,floorName:ge.fName,nodes:[ge]}):qe.nodes.push(ge)});const Ue=E||P?{floorId:(E||P).fId,floorName:(E||P).fName,nodes:[E||P]}:null,Fe=Me.length?Math.min(O,Me.length-1):0,de=Me[Fe]||Ue,ye=Me[Fe-1]||null,we=Me[Fe+1]||null,$e=(jn=de==null?void 0:de.nodes)==null?void 0:jn[de.nodes.length-1];($n=de==null?void 0:de.nodes)==null||$n[0];const Ge=we?ti(we.floorName)-ti(de.floorName):0,Ae=Ge>0?"上樓":Ge<0?"下樓":"前往",Ie=ye?ti(de.floorName)-ti(ye.floorName):0,wt=Ie>0?"上樓":Ie<0?"下樓":"前往",Dt=f===l?"已抵達目的地":we?`請依照 ${de.floorName} 平面圖前往轉乘點，接著${Ae}至 ${we.floorName}`:de?`請依照 ${de.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",W=!!(we||ye);let Ce=de?de.floorId:E?E.fId:P.fId,_e=null,We=de?de.floorName:E?E.fName:P.fName,Oe={blX:0,blY:0,trX:100,trY:100};s.forEach(ge=>ge.floors.forEach(qe=>{qe.id===Ce&&(_e=qe.imageUrl,Oe=Zr(qe),We=qe.name)}));const be=(ge,qe)=>{const je=Oe.trX-Oe.blX,Ze=Oe.trY-Oe.blY,dt=je!==0?(ge-Oe.blX)/je*100:50,Ot=Ze!==0?(Oe.trY-qe)/Ze*100:50;return{x:dt,y:Ot}},rt=(de==null?void 0:de.nodes)||[],Et=rt.filter(ge=>ge&&ge.fId===Ce).map(ge=>be(ge.physX,ge.physY)),ln=C0(Et),Kt=E&&E.fId===Ce?E:Et.length?null:P,wn=ln>0?A0(Et,V*ln):Kt?be(Kt.physX,Kt.physY):null;return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{Gt(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:j,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:z,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:K,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[D==="locked"&&"AR 路徑已鎖定",D==="holding"&&"陀螺儀空間錨點",D==="searching"&&"請重新對準導引圖",D==="idle"&&"準備定位"]}),r==="scanning"&&_e&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:_e,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:W?`自動切換至 ${We}`:`目前平面圖 ${We}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),rt.map((ge,qe)=>{if(qe===rt.length-1)return null;const je=rt[qe+1];if(ge.fId===Ce&&je.fId===Ce){const Ze=be(ge.physX,ge.physY),dt=be(je.physX,je.physY);return g.jsx("line",{x1:`${Ze.x}%`,y1:`${Ze.y}%`,x2:`${dt.x}%`,y2:`${dt.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},qe)}return null})]}),wn&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${wn.x}%`,top:`${wn.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${wn.angle||0}rad)`,willChange:"transform"},children:g.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[g.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),g.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(wn.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),we&&$e&&$e.fId===Ce&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${be($e.physX,$e.physY).x}%`,top:`${be($e.physX,$e.physY).y}%`,transform:"translate(-50%, -140%)"},children:g.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:Ge>=0?g.jsx(_g,{className:"h-8 w-8 stroke-[3.5]"}):g.jsx(gg,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,P&&P.fId===Ce&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${be(P.physX,P.physY).x}%`,top:`${be(P.physX,P.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(Mg,{className:"w-4 h-4"}):g.jsx(Sg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",E?E.fName:P.fName," ",U?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(iw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{onClick:Ye,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:Rt,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:St,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${E?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[g.jsx("button",{onClick:()=>w(ge=>Math.max(0,ge-1)),disabled:!ye,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:g.jsx(xg,{className:"h-5 w-5"})}),g.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[g.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[g.jsxs("span",{children:[(de==null?void 0:de.floorName)||(E==null?void 0:E.fName)||(P==null?void 0:P.fName)," ","平面圖"]}),Me.length>1&&g.jsxs("span",{children:[Fe+1," / ",Me.length]})]}),g.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":we?"text-purple-300":"text-yellow-300"}`,children:Dt}),ye&&g.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",ye.floorName,"；本張是",wt,"後的導引段。"]})]}),g.jsx("button",{onClick:()=>w(ge=>Math.min(Me.length-1,ge+1)),disabled:!we,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:g.jsx(vg,{className:"h-5 w-5"})})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const rc=document.getElementById("ar-root");if(!rc)throw new Error("Missing #ar-root element.");const Eg=new URLSearchParams(window.location.search),hw=window.location.pathname.endsWith("/admin-ar.html"),wg=rc.dataset.embedded==="true"||Eg.get("embedded")==="1",N0=hw||wg;fv.createRoot(rc).render(g.jsx(wf.StrictMode,{children:g.jsx(dw,{embedded:wg,initialTab:N0?rc.dataset.initialTab||Eg.get("tab")||"map":"frontend",publicOnly:!N0})}));
