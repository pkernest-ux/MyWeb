function ev(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},Za={},zu={exports:{}},Wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function tv(){if(cm)return Wt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,I={};function y(V,oe,$e){this.props=V,this.context=oe,this.refs=I,this.updater=$e||M}y.prototype.isReactComponent={},y.prototype.setState=function(V,oe){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,oe,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(V,oe,$e){this.props=V,this.context=oe,this.refs=I,this.updater=$e||M}var R=L.prototype=new _;R.constructor=L,A(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,P={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(V,oe,$e){var Ze,Ne={},ue=null,Ae=null;if(oe!=null)for(Ze in oe.ref!==void 0&&(Ae=oe.ref),oe.key!==void 0&&(ue=""+oe.key),oe)z.call(oe,Ze)&&!k.hasOwnProperty(Ze)&&(Ne[Ze]=oe[Ze]);var we=arguments.length-2;if(we===1)Ne.children=$e;else if(1<we){for(var Fe=Array(we),qe=0;qe<we;qe++)Fe[qe]=arguments[qe+2];Ne.children=Fe}if(V&&V.defaultProps)for(Ze in we=V.defaultProps,we)Ne[Ze]===void 0&&(Ne[Ze]=we[Ze]);return{$$typeof:s,type:V,key:ue,ref:Ae,props:Ne,_owner:P.current}}function D(V,oe){return{$$typeof:s,type:V.type,key:oe,ref:V.ref,props:V.props,_owner:V._owner}}function W(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function H(V){var oe={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function($e){return oe[$e]})}var q=/\/+/g;function ee(V,oe){return typeof V=="object"&&V!==null&&V.key!=null?H(""+V.key):oe.toString(36)}function xe(V,oe,$e,Ze,Ne){var ue=typeof V;(ue==="undefined"||ue==="boolean")&&(V=null);var Ae=!1;if(V===null)Ae=!0;else switch(ue){case"string":case"number":Ae=!0;break;case"object":switch(V.$$typeof){case s:case e:Ae=!0}}if(Ae)return Ae=V,Ne=Ne(Ae),V=Ze===""?"."+ee(Ae,0):Ze,N(Ne)?($e="",V!=null&&($e=V.replace(q,"$&/")+"/"),xe(Ne,oe,$e,"",function(qe){return qe})):Ne!=null&&(W(Ne)&&(Ne=D(Ne,$e+(!Ne.key||Ae&&Ae.key===Ne.key?"":(""+Ne.key).replace(q,"$&/")+"/")+V)),oe.push(Ne)),1;if(Ae=0,Ze=Ze===""?".":Ze+":",N(V))for(var we=0;we<V.length;we++){ue=V[we];var Fe=Ze+ee(ue,we);Ae+=xe(ue,oe,$e,Fe,Ne)}else if(Fe=x(V),typeof Fe=="function")for(V=Fe.call(V),we=0;!(ue=V.next()).done;)ue=ue.value,Fe=Ze+ee(ue,we++),Ae+=xe(ue,oe,$e,Fe,Ne);else if(ue==="object")throw oe=String(V),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return Ae}function X(V,oe,$e){if(V==null)return V;var Ze=[],Ne=0;return xe(V,Ze,"","",function(ue){return oe.call($e,ue,Ne++)}),Ze}function ie(V){if(V._status===-1){var oe=V._result;oe=oe(),oe.then(function($e){(V._status===0||V._status===-1)&&(V._status=1,V._result=$e)},function($e){(V._status===0||V._status===-1)&&(V._status=2,V._result=$e)}),V._status===-1&&(V._status=0,V._result=oe)}if(V._status===1)return V._result.default;throw V._result}var K={current:null},Q={transition:null},pe={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Q,ReactCurrentOwner:P};function se(){throw Error("act(...) is not supported in production builds of React.")}return Wt.Children={map:X,forEach:function(V,oe,$e){X(V,function(){oe.apply(this,arguments)},$e)},count:function(V){var oe=0;return X(V,function(){oe++}),oe},toArray:function(V){return X(V,function(oe){return oe})||[]},only:function(V){if(!W(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Wt.Component=y,Wt.Fragment=t,Wt.Profiler=o,Wt.PureComponent=L,Wt.StrictMode=r,Wt.Suspense=h,Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Wt.act=se,Wt.cloneElement=function(V,oe,$e){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ze=A({},V.props),Ne=V.key,ue=V.ref,Ae=V._owner;if(oe!=null){if(oe.ref!==void 0&&(ue=oe.ref,Ae=P.current),oe.key!==void 0&&(Ne=""+oe.key),V.type&&V.type.defaultProps)var we=V.type.defaultProps;for(Fe in oe)z.call(oe,Fe)&&!k.hasOwnProperty(Fe)&&(Ze[Fe]=oe[Fe]===void 0&&we!==void 0?we[Fe]:oe[Fe])}var Fe=arguments.length-2;if(Fe===1)Ze.children=$e;else if(1<Fe){we=Array(Fe);for(var qe=0;qe<Fe;qe++)we[qe]=arguments[qe+2];Ze.children=we}return{$$typeof:s,type:V.type,key:Ne,ref:ue,props:Ze,_owner:Ae}},Wt.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Wt.createElement=w,Wt.createFactory=function(V){var oe=w.bind(null,V);return oe.type=V,oe},Wt.createRef=function(){return{current:null}},Wt.forwardRef=function(V){return{$$typeof:f,render:V}},Wt.isValidElement=W,Wt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:ie}},Wt.memo=function(V,oe){return{$$typeof:p,type:V,compare:oe===void 0?null:oe}},Wt.startTransition=function(V){var oe=Q.transition;Q.transition={};try{V()}finally{Q.transition=oe}},Wt.unstable_act=se,Wt.useCallback=function(V,oe){return K.current.useCallback(V,oe)},Wt.useContext=function(V){return K.current.useContext(V)},Wt.useDebugValue=function(){},Wt.useDeferredValue=function(V){return K.current.useDeferredValue(V)},Wt.useEffect=function(V,oe){return K.current.useEffect(V,oe)},Wt.useId=function(){return K.current.useId()},Wt.useImperativeHandle=function(V,oe,$e){return K.current.useImperativeHandle(V,oe,$e)},Wt.useInsertionEffect=function(V,oe){return K.current.useInsertionEffect(V,oe)},Wt.useLayoutEffect=function(V,oe){return K.current.useLayoutEffect(V,oe)},Wt.useMemo=function(V,oe){return K.current.useMemo(V,oe)},Wt.useReducer=function(V,oe,$e){return K.current.useReducer(V,oe,$e)},Wt.useRef=function(V){return K.current.useRef(V)},Wt.useState=function(V){return K.current.useState(V)},Wt.useSyncExternalStore=function(V,oe,$e){return K.current.useSyncExternalStore(V,oe,$e)},Wt.useTransition=function(){return K.current.useTransition()},Wt.version="18.3.1",Wt}var um;function Ef(){return um||(um=1,zu.exports=tv()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function nv(){if(dm)return Za;dm=1;var s=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var fm;function iv(){return fm||(fm=1,Bu.exports=nv()),Bu.exports}var g=iv(),De=Ef();const wf=ev(De);var vl={},Vu={exports:{}},oi={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function rv(){return hm||(hm=1,(function(s){function e(Q,pe){var se=Q.length;Q.push(pe);e:for(;0<se;){var V=se-1>>>1,oe=Q[V];if(0<o(oe,pe))Q[V]=pe,Q[se]=oe,se=V;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var pe=Q[0],se=Q.pop();if(se!==pe){Q[0]=se;e:for(var V=0,oe=Q.length,$e=oe>>>1;V<$e;){var Ze=2*(V+1)-1,Ne=Q[Ze],ue=Ze+1,Ae=Q[ue];if(0>o(Ne,se))ue<oe&&0>o(Ae,Ne)?(Q[V]=Ae,Q[ue]=se,V=ue):(Q[V]=Ne,Q[Ze]=se,V=Ze);else if(ue<oe&&0>o(Ae,se))Q[V]=Ae,Q[ue]=se,V=ue;else break e}}return pe}function o(Q,pe){var se=Q.sortIndex-pe.sortIndex;return se!==0?se:Q.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,A=!1,I=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Q){for(var pe=t(p);pe!==null;){if(pe.callback===null)r(p);else if(pe.startTime<=Q)r(p),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=t(p)}}function N(Q){if(I=!1,R(Q),!A)if(t(h)!==null)A=!0,ie(z);else{var pe=t(p);pe!==null&&K(N,pe.startTime-Q)}}function z(Q,pe){A=!1,I&&(I=!1,_(w),w=-1),M=!0;var se=x;try{for(R(pe),S=t(h);S!==null&&(!(S.expirationTime>pe)||Q&&!H());){var V=S.callback;if(typeof V=="function"){S.callback=null,x=S.priorityLevel;var oe=V(S.expirationTime<=pe);pe=s.unstable_now(),typeof oe=="function"?S.callback=oe:S===t(h)&&r(h),R(pe)}else r(h);S=t(h)}if(S!==null)var $e=!0;else{var Ze=t(p);Ze!==null&&K(N,Ze.startTime-pe),$e=!1}return $e}finally{S=null,x=se,M=!1}}var P=!1,k=null,w=-1,D=5,W=-1;function H(){return!(s.unstable_now()-W<D)}function q(){if(k!==null){var Q=s.unstable_now();W=Q;var pe=!0;try{pe=k(!0,Q)}finally{pe?ee():(P=!1,k=null)}}else P=!1}var ee;if(typeof L=="function")ee=function(){L(q)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,X=xe.port2;xe.port1.onmessage=q,ee=function(){X.postMessage(null)}}else ee=function(){y(q,0)};function ie(Q){k=Q,P||(P=!0,ee())}function K(Q,pe){w=y(function(){Q(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,ie(z))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Q){switch(x){case 1:case 2:case 3:var pe=3;break;default:pe=x}var se=x;x=pe;try{return Q()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,pe){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var se=x;x=Q;try{return pe()}finally{x=se}},s.unstable_scheduleCallback=function(Q,pe,se){var V=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,Q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=se+oe,Q={id:v++,callback:pe,priorityLevel:Q,startTime:se,expirationTime:oe,sortIndex:-1},se>V?(Q.sortIndex=se,e(p,Q),t(h)===null&&Q===t(p)&&(I?(_(w),w=-1):I=!0,K(N,se-V))):(Q.sortIndex=oe,e(h,Q),A||M||(A=!0,ie(z))),Q},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(Q){var pe=x;return function(){var se=x;x=pe;try{return Q.apply(this,arguments)}finally{x=se}}}})(Gu)),Gu}var pm;function sv(){return pm||(pm=1,Hu.exports=rv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function av(){if(mm)return oi;mm=1;var s=Ef(),e=sv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function I(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new I(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new I(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new I(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new I(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new I(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new I(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new I(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new I(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new I(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new I(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new I(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new I(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new I(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new I(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),P=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Q=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,V;function oe(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var $e=!1;function Ze(n,i){if(!n||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,B=m.length-1;1<=T&&0<=B&&d[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(d[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||d[T]!==m[B]){var Y=`
`+d[T].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=T&&0<=B);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function Ne(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=Ze(n.type,!1),n;case 11:return n=Ze(n.type.render,!1),n;case 1:return n=Ze(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case P:return"Portal";case D:return"Profiler";case w:return"StrictMode";case ee:return"Suspense";case xe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function st(n){n._valueTracker||(n._valueTracker=qe(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vt(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function jt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ht(n,i){bt(n,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Xt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Xt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function kt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Xt(n,i,a){(i!=="number"||xt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $=Array.isArray;function It(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function yt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function ze(n,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ot(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,Ee=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Be[i]=Be[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Be.hasOwnProperty(n)&&Be[n]?(""+i).trim():i+"px"}function Te(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ie=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function He(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j=null;function ae(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Ce=null,O=null;function _e(n){if(n=Fa(n)){if(typeof Se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Do(i),Se(n.stateNode,n.type,i))}}function re(n){Ce?O?O.push(n):O=[n]:Ce=n}function Pe(){if(Ce){var n=Ce,i=O;if(O=Ce=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function be(n,i){return n(i)}function Me(){}var je=!1;function nt(n,i,a){if(je)return n(i,a);je=!0;try{return be(n,i,a)}finally{je=!1,(Ce!==null||O!==null)&&(Me(),Pe())}}function dt(n,i){var a=n.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var mt=!1;if(f)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){mt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{mt=!1}function et(n,i,a,c,d,m,T,B,Y){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(ke){this.onError(ke)}}var Dt=!1,Zt=null,dn=!1,on=null,xn={onError:function(n){Dt=!0,Zt=n}};function ln(n,i,a,c,d,m,T,B,Y){Dt=!1,Zt=null,et.apply(xn,arguments)}function zn(n,i,a,c,d,m,T,B,Y){if(ln.apply(this,arguments),Dt){if(Dt){var ve=Zt;Dt=!1,Zt=null}else throw Error(t(198));dn||(dn=!0,on=ve)}}function En(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function pn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Fn(n){if(En(n)!==n)throw Error(t(188))}function ei(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Fn(d),n;if(m===c)return Fn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,B=d.child;B;){if(B===a){T=!0,a=d,c=m;break}if(B===c){T=!0,c=d,a=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===a){T=!0,a=m,c=d;break}if(B===c){T=!0,c=m,a=d;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function vi(n){return n=ei(n),n!==null?Vn(n):null}function Vn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vn(n);if(i!==null)return i;n=n.sibling}return null}var Rs=e.unstable_scheduleCallback,es=e.unstable_cancelCallback,Gi=e.unstable_shouldYield,nn=e.unstable_requestPaint,qt=e.unstable_now,ts=e.unstable_getCurrentPriorityLevel,sr=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,me=e.unstable_LowPriority,fe=e.unstable_IdlePriority,de=null,Xe=null;function it(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Rt,lt=Math.log,ft=Math.LN2;function Rt(n){return n>>>=0,n===0?32:31-(lt(n)/ft|0)|0}var Nt=64,ct=4194304;function b(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function G(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~d;B!==0?c=b(B):(m&=T,m!==0&&(c=b(m)))}else T=a&~d,T!==0?c=b(T):m!==0&&(c=b(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ye(i),d=1<<a,c|=n[a],i&=~d;return c}function F(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function le(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ye(m),B=1<<T,Y=d[T];Y===-1?((B&a)===0||(B&c)!==0)&&(d[T]=F(B,i)):Y<=i&&(n.expiredLanes|=B),m&=~B}}function Le(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ge(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function Ge(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Je(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ye(i),n[i]=a}function Yt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ye(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function St(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ye(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ht=0;function Lt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Mt,Ut,fn,Tt,An,tt=!1,Ft=[],vn=null,ti=null,Pi=null,Tr=new Map,tn=new Map,ji=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":Tr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":tn.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&Ut(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Eg(n,i,a,c,d){switch(i){case"focusin":return vn=Ma(vn,n,i,a,c,d),!0;case"dragenter":return ti=Ma(ti,n,i,a,c,d),!0;case"mouseover":return Pi=Ma(Pi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Tr.set(m,Ma(Tr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,tn.set(m,Ma(tn.get(m)||null,n,i,a,c,d)),!0}return!1}function Yf(n){var i=ns(n.target);if(i!==null){var a=En(i);if(a!==null){if(i=a.tag,i===13){if(i=pn(a),i!==null){n.blockedOn=i,An(n.priority,function(){fn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);j=c,a.target.dispatchEvent(c),j=null}else return i=Fa(a),i!==null&&Ut(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){_o(n)&&a.delete(i)}function wg(){tt=!1,vn!==null&&_o(vn)&&(vn=null),ti!==null&&_o(ti)&&(ti=null),Pi!==null&&_o(Pi)&&(Pi=null),Tr.forEach($f),tn.forEach($f)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,tt||(tt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wg)))}function wa(n){function i(d){return Ea(d,n)}if(0<Ft.length){Ea(Ft[0],n);for(var a=1;a<Ft.length;a++){var c=Ft[a];c.blockedOn===n&&(c.blockedOn=null)}}for(vn!==null&&Ea(vn,n),ti!==null&&Ea(ti,n),Pi!==null&&Ea(Pi,n),Tr.forEach(i),tn.forEach(i),a=0;a<ji.length;a++)c=ji[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ji.length&&(a=ji[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&ji.shift()}var Ns=N.ReactCurrentBatchConfig,yo=!0;function bg(n,i,a,c){var d=ht,m=Ns.transition;Ns.transition=null;try{ht=1,dc(n,i,a,c)}finally{ht=d,Ns.transition=m}}function Tg(n,i,a,c){var d=ht,m=Ns.transition;Ns.transition=null;try{ht=4,dc(n,i,a,c)}finally{ht=d,Ns.transition=m}}function dc(n,i,a,c){if(yo){var d=fc(n,i,a,c);if(d===null)Rc(n,i,c,So,a),Xf(n,c);else if(Eg(d,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<Mg.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&Mt(m),m=fc(n,i,a,c),m===null&&Rc(n,i,c,So,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var So=null;function fc(n,i,a,c){if(So=null,n=ae(c),n=ns(n),n!==null)if(i=En(n),i===null)n=null;else if(a=i.tag,a===13){if(n=pn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ts()){case sr:return 1;case C:return 4;case Z:case me:return 16;case fe:return 536870912;default:return 16}default:return 16}}var Ar=null,hc=null,Mo=null;function Kf(){if(Mo)return Mo;var n,i=hc,a=i.length,c,d="value"in Ar?Ar.value:Ar.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return Mo=d.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Zf(){return!1}function ui(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wo:Zf,this.isPropagationStopped=Zf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=ui(Ps),ba=se({},Ps,{view:0,detail:0}),Ag=ui(ba),mc,gc,Ta,bo=se({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(mc=n.screenX-Ta.screenX,gc=n.screenY-Ta.screenY):gc=mc=0,Ta=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Jf=ui(bo),Cg=se({},bo,{dataTransfer:0}),Rg=ui(Cg),Ng=se({},ba,{relatedTarget:0}),xc=ui(Ng),Pg=se({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=ui(Pg),Dg=se({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lg=ui(Dg),Ug=se({},Ps,{data:0}),Qf=ui(Ug),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=kg[n])?!!i[n]:!1}function vc(){return Bg}var zg=se({},ba,{key:function(n){if(n.key){var i=Fg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Og[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vg=ui(zg),Hg=se({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=ui(Hg),Gg=se({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),jg=ui(Gg),Wg=se({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=ui(Wg),Yg=se({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=ui(Yg),qg=[9,13,27,32],_c=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var Kg=f&&"TextEvent"in window&&!Aa,th=f&&(!_c||Aa&&8<Aa&&11>=Aa),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Zg(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function Jg(n,i){if(Is)return n==="compositionend"||!_c&&rh(n,i)?(n=Kf(),Mo=hc=Ar=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Qg[n.type]:i==="textarea"}function oh(n,i,a,c){re(c),i=No(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Ra=null;function ex(n){bh(n,0)}function To(n){var i=Os(n);if(_t(i))return n}function tx(n,i){if(n==="change")return i}var lh=!1;if(f){var yc;if(f){var Sc="oninput"in document;if(!Sc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Sc=typeof ch.oninput=="function"}yc=Sc}else yc=!1;lh=yc&&(!document.documentMode||9<document.documentMode)}function uh(){Ca&&(Ca.detachEvent("onpropertychange",dh),Ra=Ca=null)}function dh(n){if(n.propertyName==="value"&&To(Ra)){var i=[];oh(i,Ra,n,ae(n)),nt(ex,i)}}function nx(n,i,a){n==="focusin"?(uh(),Ca=i,Ra=a,Ca.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function ix(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Ra)}function rx(n,i){if(n==="click")return To(i)}function sx(n,i){if(n==="input"||n==="change")return To(i)}function ax(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:ax;function Na(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Ii(n[d],i[d]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=xt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=xt(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ox(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=hh(a,m);var T=hh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ec=null,Pa=null,wc=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Ds==null||Ds!==xt(c)||(c=Ds,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=No(Ec,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Co(n){if(bc[n])return bc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return bc[n]=i[a];return n}var vh=Co("animationend"),_h=Co("animationiteration"),yh=Co("animationstart"),Sh=Co("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,i){Mh.set(n,i),l(i,[n])}for(var Tc=0;Tc<Eh.length;Tc++){var Ac=Eh[Tc],cx=Ac.toLowerCase(),ux=Ac[0].toUpperCase()+Ac.slice(1);Cr(cx,"on"+ux)}Cr(vh,"onAnimationEnd"),Cr(_h,"onAnimationIteration"),Cr(yh,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function wh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,zn(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Y=B.instance,ve=B.currentTarget;if(B=B.listener,Y!==m&&d.isPropagationStopped())break e;wh(d,B,ve),m=Y}else for(T=0;T<c.length;T++){if(B=c[T],Y=B.instance,ve=B.currentTarget,B=B.listener,Y!==m&&d.isPropagationStopped())break e;wh(d,B,ve),m=Y}}}if(dn)throw n=on,dn=!1,on=null,n}function cn(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Ro]){n[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(dx.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Cc("selectionchange",!1,i))}}function Th(n,i,a,c){switch(qf(i)){case 1:var d=bg;break;case 4:d=Tg;break;default:d=dc}a=d.bind(null,i,a,n),d=void 0,!mt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var Y=T.tag;if((Y===3||Y===4)&&(Y=T.stateNode.containerInfo,Y===d||Y.nodeType===8&&Y.parentNode===d))return;T=T.return}for(;B!==null;){if(T=ns(B),T===null)return;if(Y=T.tag,Y===5||Y===6){c=m=T;continue e}B=B.parentNode}}c=c.return}nt(function(){var ve=m,ke=ae(a),Ve=[];e:{var Ue=Mh.get(n);if(Ue!==void 0){var rt=pc,ut=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":rt=Vg;break;case"focusin":ut="focus",rt=xc;break;case"focusout":ut="blur",rt=xc;break;case"beforeblur":case"afterblur":rt=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=jg;break;case vh:case _h:case yh:rt=Ig;break;case Sh:rt=Xg;break;case"scroll":rt=Ag;break;case"wheel":rt=$g;break;case"copy":case"cut":case"paste":rt=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=eh}var pt=(i&4)!==0,yn=!pt&&n==="scroll",ce=pt?Ue!==null?Ue+"Capture":null:Ue;pt=[];for(var J=ve,he;J!==null;){he=J;var We=he.stateNode;if(he.tag===5&&We!==null&&(he=We,ce!==null&&(We=dt(J,ce),We!=null&&pt.push(La(J,We,he)))),yn)break;J=J.return}0<pt.length&&(Ue=new rt(Ue,ut,null,a,ke),Ve.push({event:Ue,listeners:pt}))}}if((i&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",rt=n==="mouseout"||n==="pointerout",Ue&&a!==j&&(ut=a.relatedTarget||a.fromElement)&&(ns(ut)||ut[ar]))break e;if((rt||Ue)&&(Ue=ke.window===ke?ke:(Ue=ke.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,rt?(ut=a.relatedTarget||a.toElement,rt=ve,ut=ut?ns(ut):null,ut!==null&&(yn=En(ut),ut!==yn||ut.tag!==5&&ut.tag!==6)&&(ut=null)):(rt=null,ut=ve),rt!==ut)){if(pt=Jf,We="onMouseLeave",ce="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(pt=eh,We="onPointerLeave",ce="onPointerEnter",J="pointer"),yn=rt==null?Ue:Os(rt),he=ut==null?Ue:Os(ut),Ue=new pt(We,J+"leave",rt,a,ke),Ue.target=yn,Ue.relatedTarget=he,We=null,ns(ke)===ve&&(pt=new pt(ce,J+"enter",ut,a,ke),pt.target=he,pt.relatedTarget=yn,We=pt),yn=We,rt&&ut)t:{for(pt=rt,ce=ut,J=0,he=pt;he;he=Us(he))J++;for(he=0,We=ce;We;We=Us(We))he++;for(;0<J-he;)pt=Us(pt),J--;for(;0<he-J;)ce=Us(ce),he--;for(;J--;){if(pt===ce||ce!==null&&pt===ce.alternate)break t;pt=Us(pt),ce=Us(ce)}pt=null}else pt=null;rt!==null&&Ah(Ve,Ue,rt,pt,!1),ut!==null&&yn!==null&&Ah(Ve,yn,ut,pt,!0)}}e:{if(Ue=ve?Os(ve):window,rt=Ue.nodeName&&Ue.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Ue.type==="file")var gt=tx;else if(ah(Ue))if(lh)gt=sx;else{gt=ix;var Et=nx}else(rt=Ue.nodeName)&&rt.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(gt=rx);if(gt&&(gt=gt(n,ve))){oh(Ve,gt,a,ke);break e}Et&&Et(n,Ue,ve),n==="focusout"&&(Et=Ue._wrapperState)&&Et.controlled&&Ue.type==="number"&&Xt(Ue,"number",Ue.value)}switch(Et=ve?Os(ve):window,n){case"focusin":(ah(Et)||Et.contentEditable==="true")&&(Ds=Et,Ec=ve,Pa=null);break;case"focusout":Pa=Ec=Ds=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,gh(Ve,a,ke);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":gh(Ve,a,ke)}var wt;if(_c)e:{switch(n){case"compositionstart":var Pt="onCompositionStart";break e;case"compositionend":Pt="onCompositionEnd";break e;case"compositionupdate":Pt="onCompositionUpdate";break e}Pt=void 0}else Is?rh(n,a)&&(Pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Pt="onCompositionStart");Pt&&(th&&a.locale!=="ko"&&(Is||Pt!=="onCompositionStart"?Pt==="onCompositionEnd"&&Is&&(wt=Kf()):(Ar=ke,hc="value"in Ar?Ar.value:Ar.textContent,Is=!0)),Et=No(ve,Pt),0<Et.length&&(Pt=new Qf(Pt,n,null,a,ke),Ve.push({event:Pt,listeners:Et}),wt?Pt.data=wt:(wt=sh(a),wt!==null&&(Pt.data=wt)))),(wt=Kg?Zg(n,a):Jg(n,a))&&(ve=No(ve,"onBeforeInput"),0<ve.length&&(ke=new Qf("onBeforeInput","beforeinput",null,a,ke),Ve.push({event:ke,listeners:ve}),ke.data=wt))}bh(Ve,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=dt(n,a),m!=null&&c.unshift(La(n,m,d)),m=dt(n,i),m!=null&&c.push(La(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var B=a,Y=B.alternate,ve=B.stateNode;if(Y!==null&&Y===c)break;B.tag===5&&ve!==null&&(B=ve,d?(Y=dt(a,m),Y!=null&&T.unshift(La(a,Y,B))):d||(Y=dt(a,m),Y!=null&&T.push(La(a,Y,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var fx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(fx,`
`).replace(hx,"")}function Po(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Io(){}var Nc=null,Pc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(gx)}:Dc;function gx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Fs,Ua="__reactProps$"+Fs,ar="__reactContainer$"+Fs,Uc="__reactEvents$"+Fs,xx="__reactListeners$"+Fs,vx="__reactHandles$"+Fs;function ns(n){var i=n[Wi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ar]||a[Wi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Wi])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Wi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Do(n){return n[Ua]||null}var Fc=[],ks=-1;function Nr(n){return{current:n}}function un(n){0>ks||(n.current=Fc[ks],Fc[ks]=null,ks--)}function an(n,i){ks++,Fc[ks]=n.current,n.current=i}var Pr={},Hn=Nr(Pr),ni=Nr(!1),is=Pr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ii(n){return n=n.childContextTypes,n!=null}function Lo(){un(ni),un(Hn)}function Ph(n,i,a){if(Hn.current!==Pr)throw Error(t(168));an(Hn,i),an(ni,a)}function Ih(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ae(n)||"Unknown",d));return se({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,is=Hn.current,an(Hn,n),an(ni,ni.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ih(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,un(ni),un(Hn),an(Hn,n)):un(ni),an(ni,a)}var or=null,Fo=!1,Oc=!1;function Lh(n){or===null?or=[n]:or.push(n)}function _x(n){Fo=!0,Lh(n)}function Ir(){if(!Oc&&or!==null){Oc=!0;var n=0,i=ht;try{var a=or;for(ht=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}or=null,Fo=!1}catch(d){throw or!==null&&(or=or.slice(n+1)),Rs(sr,Ir),d}finally{ht=i,Oc=!1}}return null}var zs=[],Vs=0,Oo=null,ko=0,_i=[],yi=0,rs=null,lr=1,cr="";function ss(n,i){zs[Vs++]=ko,zs[Vs++]=Oo,Oo=n,ko=i}function Uh(n,i,a){_i[yi++]=lr,_i[yi++]=cr,_i[yi++]=rs,rs=n;var c=lr;n=cr;var d=32-Ye(c)-1;c&=~(1<<d),a+=1;var m=32-Ye(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,lr=1<<32-Ye(i)+d|a<<d|c,cr=m+n}else lr=1<<m|a<<d|c,cr=n}function kc(n){n.return!==null&&(ss(n,1),Uh(n,1,0))}function Bc(n){for(;n===Oo;)Oo=zs[--Vs],zs[Vs]=null,ko=zs[--Vs],zs[Vs]=null;for(;n===rs;)rs=_i[--yi],_i[yi]=null,cr=_i[--yi],_i[yi]=null,lr=_i[--yi],_i[yi]=null}var di=null,fi=null,hn=!1,Di=null;function Fh(n,i){var a=wi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Oh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,di=n,fi=Rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,di=n,fi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,di=n,fi=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(hn){var i=fi;if(i){var a=i;if(!Oh(n,i)){if(zc(n))throw Error(t(418));i=Rr(a.nextSibling);var c=di;i&&Oh(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,hn=!1,di=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,hn=!1,di=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;di=n}function Bo(n){if(n!==di)return!1;if(!hn)return kh(n),hn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=fi)){if(zc(n))throw Bh(),Error(t(418));for(;i;)Fh(n,i),i=Rr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){fi=Rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}fi=null}}else fi=di?Rr(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=fi;n;)n=Rr(n.nextSibling)}function Hs(){fi=di=null,hn=!1}function Hc(n){Di===null?Di=[n]:Di.push(n)}var yx=N.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=d.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(ce,J){if(n){var he=ce.deletions;he===null?(ce.deletions=[J],ce.flags|=16):he.push(J)}}function a(ce,J){if(!n)return null;for(;J!==null;)i(ce,J),J=J.sibling;return null}function c(ce,J){for(ce=new Map;J!==null;)J.key!==null?ce.set(J.key,J):ce.set(J.index,J),J=J.sibling;return ce}function d(ce,J){return ce=zr(ce,J),ce.index=0,ce.sibling=null,ce}function m(ce,J,he){return ce.index=he,n?(he=ce.alternate,he!==null?(he=he.index,he<J?(ce.flags|=2,J):he):(ce.flags|=2,J)):(ce.flags|=1048576,J)}function T(ce){return n&&ce.alternate===null&&(ce.flags|=2),ce}function B(ce,J,he,We){return J===null||J.tag!==6?(J=Du(he,ce.mode,We),J.return=ce,J):(J=d(J,he),J.return=ce,J)}function Y(ce,J,he,We){var gt=he.type;return gt===k?ke(ce,J,he.props.children,We,he.key):J!==null&&(J.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===ie&&zh(gt)===J.type)?(We=d(J,he.props),We.ref=Oa(ce,J,he),We.return=ce,We):(We=ul(he.type,he.key,he.props,null,ce.mode,We),We.ref=Oa(ce,J,he),We.return=ce,We)}function ve(ce,J,he,We){return J===null||J.tag!==4||J.stateNode.containerInfo!==he.containerInfo||J.stateNode.implementation!==he.implementation?(J=Lu(he,ce.mode,We),J.return=ce,J):(J=d(J,he.children||[]),J.return=ce,J)}function ke(ce,J,he,We,gt){return J===null||J.tag!==7?(J=hs(he,ce.mode,We,gt),J.return=ce,J):(J=d(J,he),J.return=ce,J)}function Ve(ce,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Du(""+J,ce.mode,he),J.return=ce,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case z:return he=ul(J.type,J.key,J.props,null,ce.mode,he),he.ref=Oa(ce,null,J),he.return=ce,he;case P:return J=Lu(J,ce.mode,he),J.return=ce,J;case ie:var We=J._init;return Ve(ce,We(J._payload),he)}if($(J)||pe(J))return J=hs(J,ce.mode,he,null),J.return=ce,J;zo(ce,J)}return null}function Ue(ce,J,he,We){var gt=J!==null?J.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return gt!==null?null:B(ce,J,""+he,We);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===gt?Y(ce,J,he,We):null;case P:return he.key===gt?ve(ce,J,he,We):null;case ie:return gt=he._init,Ue(ce,J,gt(he._payload),We)}if($(he)||pe(he))return gt!==null?null:ke(ce,J,he,We,null);zo(ce,he)}return null}function rt(ce,J,he,We,gt){if(typeof We=="string"&&We!==""||typeof We=="number")return ce=ce.get(he)||null,B(J,ce,""+We,gt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case z:return ce=ce.get(We.key===null?he:We.key)||null,Y(J,ce,We,gt);case P:return ce=ce.get(We.key===null?he:We.key)||null,ve(J,ce,We,gt);case ie:var Et=We._init;return rt(ce,J,he,Et(We._payload),gt)}if($(We)||pe(We))return ce=ce.get(he)||null,ke(J,ce,We,gt,null);zo(J,We)}return null}function ut(ce,J,he,We){for(var gt=null,Et=null,wt=J,Pt=J=0,Ln=null;wt!==null&&Pt<he.length;Pt++){wt.index>Pt?(Ln=wt,wt=null):Ln=wt.sibling;var en=Ue(ce,wt,he[Pt],We);if(en===null){wt===null&&(wt=Ln);break}n&&wt&&en.alternate===null&&i(ce,wt),J=m(en,J,Pt),Et===null?gt=en:Et.sibling=en,Et=en,wt=Ln}if(Pt===he.length)return a(ce,wt),hn&&ss(ce,Pt),gt;if(wt===null){for(;Pt<he.length;Pt++)wt=Ve(ce,he[Pt],We),wt!==null&&(J=m(wt,J,Pt),Et===null?gt=wt:Et.sibling=wt,Et=wt);return hn&&ss(ce,Pt),gt}for(wt=c(ce,wt);Pt<he.length;Pt++)Ln=rt(wt,ce,Pt,he[Pt],We),Ln!==null&&(n&&Ln.alternate!==null&&wt.delete(Ln.key===null?Pt:Ln.key),J=m(Ln,J,Pt),Et===null?gt=Ln:Et.sibling=Ln,Et=Ln);return n&&wt.forEach(function(Vr){return i(ce,Vr)}),hn&&ss(ce,Pt),gt}function pt(ce,J,he,We){var gt=pe(he);if(typeof gt!="function")throw Error(t(150));if(he=gt.call(he),he==null)throw Error(t(151));for(var Et=gt=null,wt=J,Pt=J=0,Ln=null,en=he.next();wt!==null&&!en.done;Pt++,en=he.next()){wt.index>Pt?(Ln=wt,wt=null):Ln=wt.sibling;var Vr=Ue(ce,wt,en.value,We);if(Vr===null){wt===null&&(wt=Ln);break}n&&wt&&Vr.alternate===null&&i(ce,wt),J=m(Vr,J,Pt),Et===null?gt=Vr:Et.sibling=Vr,Et=Vr,wt=Ln}if(en.done)return a(ce,wt),hn&&ss(ce,Pt),gt;if(wt===null){for(;!en.done;Pt++,en=he.next())en=Ve(ce,en.value,We),en!==null&&(J=m(en,J,Pt),Et===null?gt=en:Et.sibling=en,Et=en);return hn&&ss(ce,Pt),gt}for(wt=c(ce,wt);!en.done;Pt++,en=he.next())en=rt(wt,ce,Pt,en.value,We),en!==null&&(n&&en.alternate!==null&&wt.delete(en.key===null?Pt:en.key),J=m(en,J,Pt),Et===null?gt=en:Et.sibling=en,Et=en);return n&&wt.forEach(function(Qx){return i(ce,Qx)}),hn&&ss(ce,Pt),gt}function yn(ce,J,he,We){if(typeof he=="object"&&he!==null&&he.type===k&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var gt=he.key,Et=J;Et!==null;){if(Et.key===gt){if(gt=he.type,gt===k){if(Et.tag===7){a(ce,Et.sibling),J=d(Et,he.props.children),J.return=ce,ce=J;break e}}else if(Et.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===ie&&zh(gt)===Et.type){a(ce,Et.sibling),J=d(Et,he.props),J.ref=Oa(ce,Et,he),J.return=ce,ce=J;break e}a(ce,Et);break}else i(ce,Et);Et=Et.sibling}he.type===k?(J=hs(he.props.children,ce.mode,We,he.key),J.return=ce,ce=J):(We=ul(he.type,he.key,he.props,null,ce.mode,We),We.ref=Oa(ce,J,he),We.return=ce,ce=We)}return T(ce);case P:e:{for(Et=he.key;J!==null;){if(J.key===Et)if(J.tag===4&&J.stateNode.containerInfo===he.containerInfo&&J.stateNode.implementation===he.implementation){a(ce,J.sibling),J=d(J,he.children||[]),J.return=ce,ce=J;break e}else{a(ce,J);break}else i(ce,J);J=J.sibling}J=Lu(he,ce.mode,We),J.return=ce,ce=J}return T(ce);case ie:return Et=he._init,yn(ce,J,Et(he._payload),We)}if($(he))return ut(ce,J,he,We);if(pe(he))return pt(ce,J,he,We);zo(ce,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,J!==null&&J.tag===6?(a(ce,J.sibling),J=d(J,he),J.return=ce,ce=J):(a(ce,J),J=Du(he,ce.mode,We),J.return=ce,ce=J),T(ce)):a(ce,J)}return yn}var Gs=Vh(!0),Hh=Vh(!1),Vo=Nr(null),Ho=null,js=null,Gc=null;function jc(){Gc=js=Ho=null}function Wc(n){var i=Vo.current;un(Vo),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Ho=n,Gc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function Si(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Ho===null)throw Error(t(308));js=n,Ho.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var as=null;function Yc(n){as===null?as=[n]:as.push(n)}function Gh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,ur(n,c)}function ur(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Dr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Jt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,ur(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,ur(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,St(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var d=n.updateQueue;Dr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var Y=B,ve=Y.next;Y.next=null,T===null?m=ve:T.next=ve,T=Y;var ke=n.alternate;ke!==null&&(ke=ke.updateQueue,B=ke.lastBaseUpdate,B!==T&&(B===null?ke.firstBaseUpdate=ve:B.next=ve,ke.lastBaseUpdate=Y))}if(m!==null){var Ve=d.baseState;T=0,ke=ve=Y=null,B=m;do{var Ue=B.lane,rt=B.eventTime;if((c&Ue)===Ue){ke!==null&&(ke=ke.next={eventTime:rt,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var ut=n,pt=B;switch(Ue=i,rt=a,pt.tag){case 1:if(ut=pt.payload,typeof ut=="function"){Ve=ut.call(rt,Ve,Ue);break e}Ve=ut;break e;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=pt.payload,Ue=typeof ut=="function"?ut.call(rt,Ve,Ue):ut,Ue==null)break e;Ve=se({},Ve,Ue);break e;case 2:Dr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ue=d.effects,Ue===null?d.effects=[B]:Ue.push(B))}else rt={eventTime:rt,lane:Ue,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ke===null?(ve=ke=rt,Y=Ve):ke=ke.next=rt,T|=Ue;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Ue=B,B=Ue.next,Ue.next=null,d.lastBaseUpdate=Ue,d.shared.pending=null}}while(!0);if(ke===null&&(Y=Ve),d.baseState=Y,d.firstBaseUpdate=ve,d.lastBaseUpdate=ke,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);cs|=T,n.lanes=T,n.memoizedState=Ve}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},Xi=Nr(ka),Ba=Nr(ka),za=Nr(ka);function os(n){if(n===ka)throw Error(t(174));return n}function qc(n,i){switch(an(za,i),an(Ba,n),an(Xi,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}un(Xi),an(Xi,i)}function Xs(){un(Xi),un(Ba),un(za)}function Yh(n){os(za.current);var i=os(Xi.current),a=E(i,n.type);i!==a&&(an(Ba,n),an(Xi,a))}function Kc(n){Ba.current===n&&(un(Xi),un(Ba))}var mn=Nr(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Jc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Xo=N.ReactCurrentDispatcher,Qc=N.ReactCurrentBatchConfig,ls=0,gn=null,Cn=null,In=null,Yo=!1,Va=!1,Ha=0,Sx=0;function Gn(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function tu(n,i,a,c,d,m){if(ls=m,gn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?bx:Tx,n=a(c,d),Va){m=0;do{if(Va=!1,Ha=0,25<=m)throw Error(t(301));m+=1,In=Cn=null,i.updateQueue=null,Xo.current=Ax,n=a(c,d)}while(Va)}if(Xo.current=Ko,i=Cn!==null&&Cn.next!==null,ls=0,In=Cn=gn=null,Yo=!1,i)throw Error(t(300));return n}function nu(){var n=Ha!==0;return Ha=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?gn.memoizedState=In=n:In=In.next=n,In}function Mi(){if(Cn===null){var n=gn.alternate;n=n!==null?n.memoizedState:null}else n=Cn.next;var i=In===null?gn.memoizedState:In.next;if(i!==null)In=i,Cn=n;else{if(n===null)throw Error(t(310));Cn=n,n={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},In===null?gn.memoizedState=In=n:In=In.next=n}return In}function Ga(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Cn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var B=T=null,Y=null,ve=m;do{var ke=ve.lane;if((ls&ke)===ke)Y!==null&&(Y=Y.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Ve={lane:ke,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};Y===null?(B=Y=Ve,T=c):Y=Y.next=Ve,gn.lanes|=ke,cs|=ke}ve=ve.next}while(ve!==null&&ve!==m);Y===null?T=c:Y.next=B,Ii(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Y,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,gn.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ru(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Ii(m,i.memoizedState)||(ri=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $h(){}function qh(n,i){var a=gn,c=Mi(),d=i(),m=!Ii(c.memoizedState,d);if(m&&(c.memoizedState=d,ri=!0),c=c.queue,su(Jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||In!==null&&In.memoizedState.tag&1){if(a.flags|=2048,ja(9,Zh.bind(null,a,c,d,i),void 0,null),Dn===null)throw Error(t(349));(ls&30)!==0||Kh(a,i,d)}return d}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Qh(i)&&ep(n)}function Jh(n,i,a){return a(function(){Qh(i)&&ep(n)})}function Qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function ep(n){var i=ur(n,1);i!==null&&Oi(i,n,1,-1)}function tp(n){var i=Yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=wx.bind(null,gn,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return Mi().memoizedState}function $o(n,i,a,c){var d=Yi();gn.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function qo(n,i,a,c){var d=Mi();c=c===void 0?null:c;var m=void 0;if(Cn!==null){var T=Cn.memoizedState;if(m=T.destroy,c!==null&&eu(c,T.deps)){d.memoizedState=ja(i,a,m,c);return}}gn.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function ip(n,i){return $o(8390656,8,n,i)}function su(n,i){return qo(2048,8,n,i)}function rp(n,i){return qo(4,2,n,i)}function sp(n,i){return qo(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,ap.bind(null,i,n),a)}function au(){}function lp(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(Ii(a,i)||(a=ge(),gn.lanes|=a,cs|=a,n.baseState=!0),i)}function Mx(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{ht=a,Qc.transition=c}}function dp(){return Mi().memoizedState}function Ex(n,i,a){var c=kr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var d=Kn();Oi(a,n,c,d),pp(a,i,c)}}function wx(n,i,a){var c=kr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,a);if(d.hasEagerState=!0,d.eagerState=B,Ii(B,T)){var Y=i.interleaved;Y===null?(d.next=d,Yc(i)):(d.next=Y.next,Y.next=d),i.interleaved=d;return}}catch{}finally{}a=Gh(n,i,d,c),a!==null&&(d=Kn(),Oi(a,n,c,d),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===gn||i!==null&&i===gn}function hp(n,i){Va=Yo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,St(n,a)}}var Ko={readContext:Si,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},bx={readContext:Si,useCallback:function(n,i){return Yi().memoizedState=[n,i===void 0?null:i],n},useContext:Si,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ex.bind(null,gn,n),[c.memoizedState,n]},useRef:function(n){var i=Yi();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:au,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=Mx.bind(null,n[1]),Yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=gn,d=Yi();if(hn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Dn===null)throw Error(t(349));(ls&30)!==0||Kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ip(Jh.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Yi(),i=Dn.identifierPrefix;if(hn){var a=cr,c=lr;a=(c&~(1<<32-Ye(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Tx={readContext:Si,useCallback:lp,useContext:Si,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=Mi();return up(i,Cn.memoizedState,n)},useTransition:function(){var n=iu(Ga)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1},Ax={readContext:Si,useCallback:lp,useContext:Si,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ru,useRef:np,useState:function(){return ru(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=Mi();return Cn===null?i.memoizedState=n:up(i,Cn.memoizedState,n)},useTransition:function(){var n=ru(Ga)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ou(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=kr(n),m=dr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Lr(n,m,d),i!==null&&(Oi(i,n,d,c),Go(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=kr(n),m=dr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Lr(n,m,d),i!==null&&(Oi(i,n,d,c),Go(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kn(),c=kr(n),d=dr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(n,d,c),i!==null&&(Oi(i,n,c,a),Go(i,n,c))}};function mp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function gp(n,i,a){var c=!1,d=Pr,m=i.contextType;return typeof m=="object"&&m!==null?m=Si(m):(d=ii(i)?is:Hn.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Pr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function lu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Si(m):(m=ii(i)?is:Hn.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ou(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Zo.enqueueReplaceState(d,d.state,null),jo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=Ne(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,bu=c),uu(n,i)},a}function _p(n,i,a){a=dr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){uu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uu(n,i),typeof c!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Cx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Hx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=dr(-1,1),i.tag=2,Lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Rx=N.ReactCurrentOwner,ri=!1;function qn(n,i,a,c){i.child=n===null?Hh(i,null,a,c):Gs(i,n.child,a,c)}function Ep(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=tu(n,i,a,c,m,d),a=nu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,fr(n,i,d)):(hn&&a&&kc(i),i.flags|=1,qn(n,i,c,d),i.child)}function wp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Iu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bp(n,i,m,c,d)):(n=ul(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(T,c)&&n.ref===i.ref)return fr(n,i,d)}return i.flags|=1,n=zr(m,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,fr(n,i,d)}return du(n,i,a,c,d)}function Tp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},an(qs,hi),hi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,an(qs,hi),hi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,an(qs,hi),hi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,an(qs,hi),hi|=c;return qn(n,i,d,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,a,c,d){var m=ii(a)?is:Hn.current;return m=Bs(i,m),Ws(i,d),a=tu(n,i,a,c,m,d),c=nu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,fr(n,i,d)):(hn&&c&&kc(i),i.flags|=1,qn(n,i,a,d),i.child)}function Cp(n,i,a,c,d){if(ii(a)){var m=!0;Uo(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Qo(n,i),gp(i,a,c),lu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Y=T.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=Si(ve):(ve=ii(a)?is:Hn.current,ve=Bs(i,ve));var ke=a.getDerivedStateFromProps,Ve=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ve||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Y!==ve)&&xp(i,T,c,ve),Dr=!1;var Ue=i.memoizedState;T.state=Ue,jo(i,c,T,d),Y=i.memoizedState,B!==c||Ue!==Y||ni.current||Dr?(typeof ke=="function"&&(ou(i,a,ke,c),Y=i.memoizedState),(B=Dr||mp(i,a,B,c,Ue,Y,ve))?(Ve||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),T.props=c,T.state=Y,T.context=ve,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,jh(n,i),B=i.memoizedProps,ve=i.type===i.elementType?B:Li(i.type,B),T.props=ve,Ve=i.pendingProps,Ue=T.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=Si(Y):(Y=ii(a)?is:Hn.current,Y=Bs(i,Y));var rt=a.getDerivedStateFromProps;(ke=typeof rt=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Ve||Ue!==Y)&&xp(i,T,c,Y),Dr=!1,Ue=i.memoizedState,T.state=Ue,jo(i,c,T,d);var ut=i.memoizedState;B!==Ve||Ue!==ut||ni.current||Dr?(typeof rt=="function"&&(ou(i,a,rt,c),ut=i.memoizedState),(ve=Dr||mp(i,a,ve,c,Ue,ut,Y)||!1)?(ke||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,ut,Y),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,ut,Y)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ut),T.props=c,T.state=ut,T.context=Y,c=ve):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,a,c,m,d)}function fu(n,i,a,c,d,m){Ap(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Dh(i,a,!1),fr(n,i,m);c=i.stateNode,Rx.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,B,m)):qn(n,i,B,m),i.memoizedState=c.state,d&&Dh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),qc(n,i.containerInfo)}function Np(n,i,a,c,d){return Hs(),Hc(d),i.flags|=256,qn(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,d=mn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),an(mn,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=dl(T,c,0,null),n=hs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pu(a),i.memoizedState=hu,n):mu(i,T));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return Nx(n,i,T,c,B,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,B=d.sibling;var Y={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=zr(d,Y),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=zr(B,m):(m=hs(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?pu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return m=n.child,n=m.sibling,c=zr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Hc(c),Gs(i,n.child,null,a),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nx(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Jo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=dl({mode:"visible",children:c.children},d,0,null),m=hs(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,T),i.child.memoizedState=pu(T),i.memoizedState=hu,m);if((i.mode&1)===0)return Jo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=cu(m,c,void 0),Jo(n,i,T,c)}if(B=(T&n.childLanes)!==0,ri||B){if(c=Dn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ur(n,d),Oi(c,n,d,-1))}return Pu(),c=cu(Error(t(421))),Jo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Gx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,fi=Rr(d.nextSibling),di=i,hn=!0,Di=null,n!==null&&(_i[yi++]=lr,_i[yi++]=cr,_i[yi++]=rs,lr=n.id,cr=n.overflow,rs=i),i=mu(i,c.children),i.flags|=4096,i)}function Ip(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function gu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Dp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qn(n,i,c.children,a),c=mn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,a,i);else if(n.tag===19)Ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(an(mn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gu(i,!0,a,null,m);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function fr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=zr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Px(n,i,a){switch(i.tag){case 3:Rp(i),Hs();break;case 5:Yh(i);break;case 1:ii(i.type)&&Uo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;an(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(an(mn,mn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(an(mn,mn.current&1),n=fr(n,i,a),n!==null?n.sibling:null);an(mn,mn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),an(mn,mn.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return fr(n,i,a)}var Lp,xu,Up,Fp;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Up=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(Xi.current);var m=null;switch(a){case"input":d=Vt(n,d),c=Vt(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=vt(n,d),c=vt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Io)}Ke(a,c);var T;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var B=d[ve];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?m||(m=[]):(m=m||[]).push(ve,null));for(ve in c){var Y=c[ve];if(B=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&Y!==B&&(Y!=null||B!=null))if(ve==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Y&&Y.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Y)Y.hasOwnProperty(T)&&B[T]!==Y[T]&&(a||(a={}),a[T]=Y[T])}else a||(m||(m=[]),m.push(ve,a)),a=Y;else ve==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(m=m||[]).push(ve,Y)):ve==="children"?typeof Y!="string"&&typeof Y!="number"||(m=m||[]).push(ve,""+Y):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(Y!=null&&ve==="onScroll"&&cn("scroll",n),m||B===Y||(m=[])):(m=m||[]).push(ve,Y))}a&&(m=m||[]).push("style",a);var ve=m;(i.updateQueue=ve)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!hn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ix(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(i),null;case 1:return ii(i.type)&&Lo(),jn(i),null;case 3:return c=i.stateNode,Xs(),un(ni),un(Hn),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Cu(Di),Di=null))),xu(n,i),jn(i),null;case 5:Kc(i);var d=os(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jn(i),null}if(n=os(Xi.current),Bo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Wi]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":cn("cancel",c),cn("close",c);break;case"iframe":case"object":case"embed":cn("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)cn(Ia[d],c);break;case"source":cn("error",c);break;case"img":case"image":case"link":cn("error",c),cn("load",c);break;case"details":cn("toggle",c);break;case"input":jt(c,m),cn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},cn("invalid",c);break;case"textarea":yt(c,m),cn("invalid",c)}Ke(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),d=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&cn("scroll",c)}switch(a){case"input":st(c),kt(c,m,!0);break;case"textarea":st(c),ot(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Io)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Wi]=i,n[Ua]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=He(a,c),a){case"dialog":cn("cancel",n),cn("close",n),d=c;break;case"iframe":case"object":case"embed":cn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)cn(Ia[d],n);d=c;break;case"source":cn("error",n),d=c;break;case"img":case"image":case"link":cn("error",n),cn("load",n),d=c;break;case"details":cn("toggle",n),d=c;break;case"input":jt(n,c),d=Vt(n,c),cn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),cn("invalid",n);break;case"textarea":yt(n,c),d=vt(n,c),cn("invalid",n);break;default:d=c}Ke(a,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var Y=B[m];m==="style"?Te(n,Y):m==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Ee(n,Y)):m==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&Re(n,Y):typeof Y=="number"&&Re(n,""+Y):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?Y!=null&&m==="onScroll"&&cn("scroll",n):Y!=null&&R(n,m,Y,T))}switch(a){case"input":st(n),kt(n,c,!1);break;case"textarea":st(n),ot(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?It(n,!!c.multiple,m,!1):c.defaultValue!=null&&It(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Io)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(za.current),os(Xi.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Wi]=i,(m=c.nodeValue!==a)&&(n=di,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wi]=i,i.stateNode=c}return jn(i),null;case 13:if(un(mn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(hn&&fi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),Hs(),i.flags|=98560,m=!1;else if(m=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Wi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jn(i),m=!1}else Di!==null&&(Cu(Di),Di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(mn.current&1)!==0?Rn===0&&(Rn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),jn(i),null);case 4:return Xs(),xu(n,i),n===null&&Da(i.stateNode.containerInfo),jn(i),null;case 10:return Wc(i.type._context),jn(i),null;case 17:return ii(i.type)&&Lo(),jn(i),null;case 19:if(un(mn),m=i.memoizedState,m===null)return jn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Wa(m,!1);else{if(Rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wo(n),T!==null){for(i.flags|=128,Wa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return an(mn,mn.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Ks&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!hn)return jn(i),null}else 2*qt()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=mn.current,an(mn,c?a&1|2:a&1),i):(jn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hi&1073741824)!==0&&(jn(i),i.subtreeFlags&6&&(i.flags|=8192)):jn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Dx(n,i){switch(Bc(i),i.tag){case 1:return ii(i.type)&&Lo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),un(ni),un(Hn),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(un(mn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return un(mn),null;case 4:return Xs(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var el=!1,Wn=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,at=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){_n(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){_n(n,i,c)}}var Op=!1;function Ux(n,i){if(Nc=yo,n=mh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,B=-1,Y=-1,ve=0,ke=0,Ve=n,Ue=null;t:for(;;){for(var rt;Ve!==a||d!==0&&Ve.nodeType!==3||(B=T+d),Ve!==m||c!==0&&Ve.nodeType!==3||(Y=T+c),Ve.nodeType===3&&(T+=Ve.nodeValue.length),(rt=Ve.firstChild)!==null;)Ue=Ve,Ve=rt;for(;;){if(Ve===n)break t;if(Ue===a&&++ve===d&&(B=T),Ue===m&&++ke===c&&(Y=T),(rt=Ve.nextSibling)!==null)break;Ve=Ue,Ue=Ve.parentNode}Ve=rt}a=B===-1||Y===-1?null:{start:B,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},yo=!1,at=i;at!==null;)if(i=at,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,at=n;else for(;at!==null;){i=at;try{var ut=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ut!==null){var pt=ut.memoizedProps,yn=ut.memoizedState,ce=i.stateNode,J=ce.getSnapshotBeforeUpdate(i.elementType===i.type?pt:Li(i.type,pt),yn);ce.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){_n(i,i.return,We)}if(n=i.sibling,n!==null){n.return=i.return,at=n;break}at=i.return}return ut=Op,Op=!1,ut}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vu(i,a,m)}d=d.next}while(d!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Wi],delete i[Ua],delete i[Uc],delete i[xx],delete i[vx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Io));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var On=null,Ui=!1;function Ur(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 5:Wn||$s(a,i);case 6:var c=On,d=Ui;On=null,Ur(n,i,a),On=c,Ui=d,On!==null&&(Ui?(n=On,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):On.removeChild(a.stateNode));break;case 18:On!==null&&(Ui?(n=On,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),wa(n)):Lc(On,a.stateNode));break;case 4:c=On,d=Ui,On=a.stateNode.containerInfo,Ui=!0,Ur(n,i,a),On=c,Ui=d;break;case 0:case 11:case 14:case 15:if(!Wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&vu(a,i,T),d=d.next}while(d!==c)}Ur(n,i,a);break;case 1:if(!Wn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){_n(a,i,B)}Ur(n,i,a);break;case 21:Ur(n,i,a);break;case 22:a.mode&1?(Wn=(c=Wn)||a.memoizedState!==null,Ur(n,i,a),Wn=c):Ur(n,i,a);break;default:Ur(n,i,a)}}function Hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Lx),i.forEach(function(c){var d=jx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:On=B.stateNode,Ui=!1;break e;case 3:On=B.stateNode.containerInfo,Ui=!0;break e;case 4:On=B.stateNode.containerInfo,Ui=!0;break e}B=B.return}if(On===null)throw Error(t(160));Vp(m,T,d),On=null,Ui=!1;var Y=d.alternate;Y!==null&&(Y.return=null),d.return=null}catch(ve){_n(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),$i(n),c&4){try{Xa(3,n,n.return),tl(3,n)}catch(pt){_n(n,n.return,pt)}try{Xa(5,n,n.return)}catch(pt){_n(n,n.return,pt)}}break;case 1:Fi(i,n),$i(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Fi(i,n),$i(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(pt){_n(n,n.return,pt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,B=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&bt(d,m),He(B,T);var ve=He(B,m);for(T=0;T<Y.length;T+=2){var ke=Y[T],Ve=Y[T+1];ke==="style"?Te(d,Ve):ke==="dangerouslySetInnerHTML"?Ee(d,Ve):ke==="children"?Re(d,Ve):R(d,ke,Ve,ve)}switch(B){case"input":Ht(d,m);break;case"textarea":ze(d,m);break;case"select":var Ue=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var rt=m.value;rt!=null?It(d,!!m.multiple,rt,!1):Ue!==!!m.multiple&&(m.defaultValue!=null?It(d,!!m.multiple,m.defaultValue,!0):It(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(pt){_n(n,n.return,pt)}}break;case 6:if(Fi(i,n),$i(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(pt){_n(n,n.return,pt)}}break;case 3:if(Fi(i,n),$i(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(pt){_n(n,n.return,pt)}break;case 4:Fi(i,n),$i(n);break;case 13:Fi(i,n),$i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(wu=qt())),c&4&&Hp(n);break;case 22:if(ke=a!==null&&a.memoizedState!==null,n.mode&1?(Wn=(ve=Wn)||ke,Fi(i,n),Wn=ve):Fi(i,n),$i(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!ke&&(n.mode&1)!==0)for(at=n,ke=n.child;ke!==null;){for(Ve=at=ke;at!==null;){switch(Ue=at,rt=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:Xa(4,Ue,Ue.return);break;case 1:$s(Ue,Ue.return);var ut=Ue.stateNode;if(typeof ut.componentWillUnmount=="function"){c=Ue,a=Ue.return;try{i=c,ut.props=i.memoizedProps,ut.state=i.memoizedState,ut.componentWillUnmount()}catch(pt){_n(c,a,pt)}}break;case 5:$s(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){Xp(Ve);continue}}rt!==null?(rt.return=Ue,at=rt):Xp(Ve)}ke=ke.sibling}e:for(ke=null,Ve=n;;){if(Ve.tag===5){if(ke===null){ke=Ve;try{d=Ve.stateNode,ve?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Ve.stateNode,Y=Ve.memoizedProps.style,T=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=ye("display",T))}catch(pt){_n(n,n.return,pt)}}}else if(Ve.tag===6){if(ke===null)try{Ve.stateNode.nodeValue=ve?"":Ve.memoizedProps}catch(pt){_n(n,n.return,pt)}}else if((Ve.tag!==22&&Ve.tag!==23||Ve.memoizedState===null||Ve===n)&&Ve.child!==null){Ve.child.return=Ve,Ve=Ve.child;continue}if(Ve===n)break e;for(;Ve.sibling===null;){if(Ve.return===null||Ve.return===n)break e;ke===Ve&&(ke=null),Ve=Ve.return}ke===Ve&&(ke=null),Ve.sibling.return=Ve.return,Ve=Ve.sibling}}break;case 19:Fi(i,n),$i(n),c&4&&Hp(n);break;case 21:break;default:Fi(i,n),$i(n)}}function $i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Re(d,""),c.flags&=-33);var m=zp(n);Su(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,B=zp(n);yu(n,B,T);break;default:throw Error(t(161))}}catch(Y){_n(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fx(n,i,a){at=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;at!==null;){var d=at,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||el;if(!T){var B=d.alternate,Y=B!==null&&B.memoizedState!==null||Wn;B=el;var ve=Wn;if(el=T,(Wn=Y)&&!ve)for(at=d;at!==null;)T=at,Y=T.child,T.tag===22&&T.memoizedState!==null?Yp(d):Y!==null?(Y.return=T,at=Y):Yp(d);for(;m!==null;)at=m,jp(m),m=m.sibling;at=d,el=B,Wn=ve}Wp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,at=m):Wp(n)}}function Wp(n){for(;at!==null;){var i=at;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Wn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Wn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Li(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var ke=ve.memoizedState;if(ke!==null){var Ve=ke.dehydrated;Ve!==null&&wa(Ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wn||i.flags&512&&_u(i)}catch(Ue){_n(i,i.return,Ue)}}if(i===n){at=null;break}if(a=i.sibling,a!==null){a.return=i.return,at=a;break}at=i.return}}function Xp(n){for(;at!==null;){var i=at;if(i===n){at=null;break}var a=i.sibling;if(a!==null){a.return=i.return,at=a;break}at=i.return}}function Yp(n){for(;at!==null;){var i=at;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(Y){_n(i,a,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(Y){_n(i,d,Y)}}var m=i.return;try{_u(i)}catch(Y){_n(i,m,Y)}break;case 5:var T=i.return;try{_u(i)}catch(Y){_n(i,T,Y)}}}catch(Y){_n(i,i.return,Y)}if(i===n){at=null;break}var B=i.sibling;if(B!==null){B.return=i.return,at=B;break}at=i.return}}var Ox=Math.ceil,nl=N.ReactCurrentDispatcher,Mu=N.ReactCurrentOwner,Ei=N.ReactCurrentBatchConfig,Jt=0,Dn=null,wn=null,kn=0,hi=0,qs=Nr(0),Rn=0,Ya=null,cs=0,il=0,Eu=0,$a=null,si=null,wu=0,Ks=1/0,hr=null,rl=!1,bu=null,Fr=null,sl=!1,Or=null,al=0,qa=0,Tu=null,ol=-1,ll=0;function Kn(){return(Jt&6)!==0?qt():ol!==-1?ol:ol=qt()}function kr(n){return(n.mode&1)===0?1:(Jt&2)!==0&&kn!==0?kn&-kn:yx.transition!==null?(ll===0&&(ll=ge()),ll):(n=ht,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function Oi(n,i,a,c){if(50<qa)throw qa=0,Tu=null,Error(t(185));Je(n,a,c),((Jt&2)===0||n!==Dn)&&(n===Dn&&((Jt&2)===0&&(il|=a),Rn===4&&Br(n,kn)),ai(n,c),a===1&&Jt===0&&(i.mode&1)===0&&(Ks=qt()+500,Fo&&Ir()))}function ai(n,i){var a=n.callbackNode;le(n,i);var c=G(n,n===Dn?kn:0);if(c===0)a!==null&&es(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&es(a),i===1)n.tag===0?_x(qp.bind(null,n)):Lh(qp.bind(null,n)),mx(function(){(Jt&6)===0&&Ir()}),a=null;else{switch(Lt(c)){case 1:a=sr;break;case 4:a=C;break;case 16:a=Z;break;case 536870912:a=fe;break;default:a=Z}a=im(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(ol=-1,ll=0,(Jt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=G(n,n===Dn?kn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var d=Jt;Jt|=2;var m=Zp();(Dn!==n||kn!==i)&&(hr=null,Ks=qt()+500,ds(n,i));do try{zx();break}catch(B){Kp(n,B)}while(!0);jc(),nl.current=m,Jt=d,wn!==null?i=0:(Dn=null,kn=0,i=Rn)}if(i!==0){if(i===2&&(d=Le(n),d!==0&&(c=d,i=Au(n,d))),i===1)throw a=Ya,ds(n,0),Br(n,c),ai(n,qt()),a;if(i===6)Br(n,c);else{if(d=n.current.alternate,(c&30)===0&&!kx(d)&&(i=cl(n,c),i===2&&(m=Le(n),m!==0&&(c=m,i=Au(n,m))),i===1))throw a=Ya,ds(n,0),Br(n,c),ai(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,si,hr);break;case 3:if(Br(n,c),(c&130023424)===c&&(i=wu+500-qt(),10<i)){if(G(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc(fs.bind(null,n,si,hr),i);break}fs(n,si,hr);break;case 4:if(Br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ye(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ox(c/1960))-c,10<c){n.timeoutHandle=Dc(fs.bind(null,n,si,hr),c);break}fs(n,si,hr);break;case 5:fs(n,si,hr);break;default:throw Error(t(329))}}}return ai(n,qt()),n.callbackNode===a?$p.bind(null,n):null}function Au(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=cl(n,i),n!==2&&(i=si,si=a,i!==null&&Cu(i)),n}function Cu(n){si===null?si=n:si.push.apply(si,n)}function kx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Ii(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Br(n,i){for(i&=~Eu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ye(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if((Jt&6)!==0)throw Error(t(327));Zs();var i=G(n,0);if((i&1)===0)return ai(n,qt()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=Le(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=Ya,ds(n,0),Br(n,i),ai(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,si,hr),ai(n,qt()),null}function Ru(n,i){var a=Jt;Jt|=1;try{return n(i)}finally{Jt=a,Jt===0&&(Ks=qt()+500,Fo&&Ir())}}function us(n){Or!==null&&Or.tag===0&&(Jt&6)===0&&Zs();var i=Jt;Jt|=1;var a=Ei.transition,c=ht;try{if(Ei.transition=null,ht=1,n)return n()}finally{ht=c,Ei.transition=a,Jt=i,(Jt&6)===0&&Ir()}}function Nu(){hi=qs.current,un(qs)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,px(a)),wn!==null)for(a=wn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Lo();break;case 3:Xs(),un(ni),un(Hn),Jc();break;case 5:Kc(c);break;case 4:Xs();break;case 13:un(mn);break;case 19:un(mn);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(Dn=n,wn=n=zr(n.current,null),kn=hi=i,Rn=0,Ya=null,Eu=il=cs=0,si=$a=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}as=null}return n}function Kp(n,i){do{var a=wn;try{if(jc(),Xo.current=Ko,Yo){for(var c=gn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yo=!1}if(ls=0,In=Cn=gn=null,Va=!1,Ha=0,Mu.current=null,a===null||a.return===null){Rn=1,Ya=i,wn=null;break}e:{var m=n,T=a.return,B=a,Y=i;if(i=kn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var ve=Y,ke=B,Ve=ke.tag;if((ke.mode&1)===0&&(Ve===0||Ve===11||Ve===15)){var Ue=ke.alternate;Ue?(ke.updateQueue=Ue.updateQueue,ke.memoizedState=Ue.memoizedState,ke.lanes=Ue.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var rt=Sp(T);if(rt!==null){rt.flags&=-257,Mp(rt,T,B,m,i),rt.mode&1&&yp(m,ve,i),i=rt,Y=ve;var ut=i.updateQueue;if(ut===null){var pt=new Set;pt.add(Y),i.updateQueue=pt}else ut.add(Y);break e}else{if((i&1)===0){yp(m,ve,i),Pu();break e}Y=Error(t(426))}}else if(hn&&B.mode&1){var yn=Sp(T);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),Mp(yn,T,B,m,i),Hc(Ys(Y,B));break e}}m=Y=Ys(Y,B),Rn!==4&&(Rn=2),$a===null?$a=[m]:$a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ce=vp(m,Y,i);Wh(m,ce);break e;case 1:B=Y;var J=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Fr===null||!Fr.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var We=_p(m,B,i);Wh(m,We);break e}}m=m.return}while(m!==null)}Qp(a)}catch(gt){i=gt,wn===a&&a!==null&&(wn=a=a.return);continue}break}while(!0)}function Zp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function Pu(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Dn===null||(cs&268435455)===0&&(il&268435455)===0||Br(Dn,kn)}function cl(n,i){var a=Jt;Jt|=2;var c=Zp();(Dn!==n||kn!==i)&&(hr=null,ds(n,i));do try{Bx();break}catch(d){Kp(n,d)}while(!0);if(jc(),Jt=a,nl.current=c,wn!==null)throw Error(t(261));return Dn=null,kn=0,Rn}function Bx(){for(;wn!==null;)Jp(wn)}function zx(){for(;wn!==null&&!Gi();)Jp(wn)}function Jp(n){var i=nm(n.alternate,n,hi);n.memoizedProps=n.pendingProps,i===null?Qp(n):wn=i,Mu.current=null}function Qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ix(a,i,hi),a!==null){wn=a;return}}else{if(a=Dx(a,i),a!==null){a.flags&=32767,wn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rn=6,wn=null;return}}if(i=i.sibling,i!==null){wn=i;return}wn=i=n}while(i!==null);Rn===0&&(Rn=5)}function fs(n,i,a){var c=ht,d=Ei.transition;try{Ei.transition=null,ht=1,Vx(n,i,a,c)}finally{Ei.transition=d,ht=c}return null}function Vx(n,i,a,c){do Zs();while(Or!==null);if((Jt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Yt(n,m),n===Dn&&(wn=Dn=null,kn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,im(Z,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ei.transition,Ei.transition=null;var T=ht;ht=1;var B=Jt;Jt|=4,Mu.current=null,Ux(n,a),Gp(a,n),ox(Pc),yo=!!Nc,Pc=Nc=null,n.current=a,Fx(a),nn(),Jt=B,ht=T,Ei.transition=m}else n.current=a;if(sl&&(sl=!1,Or=n,al=d),m=n.pendingLanes,m===0&&(Fr=null),it(a.stateNode),ai(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(rl)throw rl=!1,n=bu,bu=null,n;return(al&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Tu?qa++:(qa=0,Tu=n):qa=0,Ir(),null}function Zs(){if(Or!==null){var n=Lt(al),i=Ei.transition,a=ht;try{if(Ei.transition=null,ht=16>n?16:n,Or===null)var c=!1;else{if(n=Or,Or=null,al=0,(Jt&6)!==0)throw Error(t(331));var d=Jt;for(Jt|=4,at=n.current;at!==null;){var m=at,T=m.child;if((at.flags&16)!==0){var B=m.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var ve=B[Y];for(at=ve;at!==null;){var ke=at;switch(ke.tag){case 0:case 11:case 15:Xa(8,ke,m)}var Ve=ke.child;if(Ve!==null)Ve.return=ke,at=Ve;else for(;at!==null;){ke=at;var Ue=ke.sibling,rt=ke.return;if(kp(ke),ke===ve){at=null;break}if(Ue!==null){Ue.return=rt,at=Ue;break}at=rt}}}var ut=m.alternate;if(ut!==null){var pt=ut.child;if(pt!==null){ut.child=null;do{var yn=pt.sibling;pt.sibling=null,pt=yn}while(pt!==null)}}at=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,at=T;else e:for(;at!==null;){if(m=at,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xa(9,m,m.return)}var ce=m.sibling;if(ce!==null){ce.return=m.return,at=ce;break e}at=m.return}}var J=n.current;for(at=J;at!==null;){T=at;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,at=he;else e:for(T=J;at!==null;){if(B=at,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:tl(9,B)}}catch(gt){_n(B,B.return,gt)}if(B===T){at=null;break e}var We=B.sibling;if(We!==null){We.return=B.return,at=We;break e}at=B.return}}if(Jt=d,Ir(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(de,n)}catch{}c=!0}return c}finally{ht=a,Ei.transition=i}}return!1}function em(n,i,a){i=Ys(a,i),i=vp(n,i,1),n=Lr(n,i,1),i=Kn(),n!==null&&(Je(n,1,i),ai(n,i))}function _n(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fr===null||!Fr.has(c))){n=Ys(a,n),n=_p(i,n,1),i=Lr(i,n,1),n=Kn(),i!==null&&(Je(i,1,n),ai(i,n));break}}i=i.return}}function Hx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kn(),n.pingedLanes|=n.suspendedLanes&a,Dn===n&&(kn&a)===a&&(Rn===4||Rn===3&&(kn&130023424)===kn&&500>qt()-wu?ds(n,0):Eu|=a),ai(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ct,ct<<=1,(ct&130023424)===0&&(ct=4194304)));var a=Kn();n=ur(n,i),n!==null&&(Je(n,i,a),ai(n,a))}function Gx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function jx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,Px(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,hn&&(i.flags&1048576)!==0&&Uh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var d=Bs(i,Hn.current);Ws(i,a),d=tu(null,i,c,n,d,a);var m=nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(m=!0,Uo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=Zo,i.stateNode=d,d._reactInternals=i,lu(i,c,n,a),i=fu(null,i,c,!0,m,a)):(i.tag=0,hn&&m&&kc(i),qn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Xx(c),n=Li(c,n),d){case 0:i=du(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=wp(null,i,c,Li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),du(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Cp(n,i,c,d,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,jh(n,i),jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ys(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(fi=Rr(i.stateNode.containerInfo.firstChild),di=i,hn=!0,Di=null,a=Hh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=fr(n,i,a);break e}qn(n,i,c,a)}i=i.child}return i;case 5:return Yh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ic(c,d)?T=null:m!==null&&Ic(c,m)&&(i.flags|=32),Ap(n,i),qn(n,i,T,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return Pp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):qn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Ep(n,i,c,d,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,an(Vo,c._currentValue),c._currentValue=T,m!==null)if(Ii(m.value,T)){if(m.children===d.children&&!ni.current){i=fr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===c){if(m.tag===1){Y=dr(-1,a&-a),Y.tag=2;var ve=m.updateQueue;if(ve!==null){ve=ve.shared;var ke=ve.pending;ke===null?Y.next=Y:(Y.next=ke.next,ke.next=Y),ve.pending=Y}}m.lanes|=a,Y=m.alternate,Y!==null&&(Y.lanes|=a),Xc(m.return,a,i),B.lanes|=a;break}Y=Y.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}qn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=Si(d),c=c(d),i.flags|=1,qn(n,i,c,a),i.child;case 14:return c=i.type,d=Li(c,i.pendingProps),d=Li(c.type,d),wp(n,i,c,d,a);case 15:return bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Qo(n,i),i.tag=1,ii(c)?(n=!0,Uo(i)):n=!1,Ws(i,a),gp(i,c,d),lu(i,c,d,a),fu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Rs(n,i)}function Wx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,i,a,c){return new Wx(n,i,a,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xx(n){if(typeof n=="function")return Iu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===X)return 14}return 2}function zr(n,i){var a=n.alternate;return a===null?(a=wi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Iu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case k:return hs(a.children,d,m,i);case w:T=8,d|=8;break;case D:return n=wi(12,a,i,d|2),n.elementType=D,n.lanes=m,n;case ee:return n=wi(13,a,i,d),n.elementType=ee,n.lanes=m,n;case xe:return n=wi(19,a,i,d),n.elementType=xe,n.lanes=m,n;case K:return dl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:T=10;break e;case H:T=9;break e;case q:T=11;break e;case X:T=14;break e;case ie:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wi(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,a,c){return n=wi(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=wi(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=wi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=wi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,d,m,T,B,Y){return n=new Yx(n,i,a,B,Y),i===1?(i=1,m===!0&&(i|=8)):i=0,m=wi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function $x(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Pr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return Ih(n,a,i)}return i}function sm(n,i,a,c,d,m,T,B,Y){return n=Uu(a,c,!0,n,d,m,T,B,Y),n.context=rm(null),a=n.current,c=Kn(),d=kr(a),m=dr(c,d),m.callback=i??null,Lr(a,m,d),n.current.lanes=d,Je(n,d,c),ai(n,c),n}function fl(n,i,a,c){var d=i.current,m=Kn(),T=kr(d);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=dr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(d,i,T),n!==null&&(Oi(n,d,T,m),Go(n,d,T)),T}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function qx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}pl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){fl(null,n,null,null)}),i[ar]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Tt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ji.length&&i!==0&&i<ji[a].priority;a++);ji.splice(a,0,n),a===0&&Yf(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function Kx(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ve=hl(T);m.call(ve)}}var T=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=T,n[ar]=T.current,Da(n.nodeType===8?n.parentNode:n),us(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var ve=hl(Y);B.call(ve)}}var Y=Uu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=Y,n[ar]=Y.current,Da(n.nodeType===8?n.parentNode:n),us(function(){fl(i,Y,a,c)}),Y}function gl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var B=d;d=function(){var Y=hl(T);B.call(Y)}}fl(i,T,n,d)}else T=Kx(a,i,n,d,c);return hl(T)}Mt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=b(i.pendingLanes);a!==0&&(St(i,a|1),ai(i,qt()),(Jt&6)===0&&(Ks=qt()+500,Ir()))}break;case 13:us(function(){var c=ur(n,1);if(c!==null){var d=Kn();Oi(c,n,1,d)}}),Fu(n,1)}},Ut=function(n){if(n.tag===13){var i=ur(n,134217728);if(i!==null){var a=Kn();Oi(i,n,134217728,a)}Fu(n,134217728)}},fn=function(n){if(n.tag===13){var i=kr(n),a=ur(n,i);if(a!==null){var c=Kn();Oi(a,n,i,c)}Fu(n,i)}},Tt=function(){return ht},An=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},Se=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Do(c);if(!d)throw Error(t(90));_t(c),Ht(c,d)}}}break;case"textarea":ze(n,a);break;case"select":i=a.value,i!=null&&It(n,!!a.multiple,i,!1)}},be=Ru,Me=us;var Zx={usingClientEntryPoint:!1,Events:[Fa,Os,Do,re,Pe,Ru]},Ka={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vi(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{de=xl.inject(Jx),Xe=xl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(t(200));return $x(n,i,null,a)},oi.createRoot=function(n,i){if(!ku(n))throw Error(t(299));var a=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,d),n[ar]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ou(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=vi(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return us(n)},oi.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=sm(i,null,n,1,a??null,d,!1,m,T),n[ar]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pl(i)},oi.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(us(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},oi.unstable_batchedUpdates=Ru,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var gm;function ov(){if(gm)return Vu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=av(),Vu.exports}var xm;function lv(){if(xm)return vl;xm=1;var s=ov();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var cv=lv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="184",uv=0,vm=1,dv=2,jl=1,fv=2,so=3,Qr=0,ci=1,_r=2,Sr=0,pa=1,_m=2,ym=3,Sm=4,hv=5,ys=100,pv=101,mv=102,gv=103,xv=104,vv=200,_v=201,yv=202,Sv=203,Rd=204,Nd=205,Mv=206,Ev=207,wv=208,bv=209,Tv=210,Av=211,Cv=212,Rv=213,Nv=214,Pd=0,Id=1,Dd=2,ga=3,Ld=4,Ud=5,Fd=6,Od=7,P0=0,Pv=1,Iv=2,er=0,I0=1,D0=2,L0=3,U0=4,F0=5,O0=6,k0=7,B0=300,bs=301,xa=302,ju=303,Wu=304,ac=306,kd=1e3,yr=1001,Bd=1002,Bn=1003,Dv=1004,_l=1005,$n=1006,Xu=1007,Ms=1008,Ni=1009,z0=1010,V0=1011,po=1012,Tf=1013,ir=1014,Ji=1015,Er=1016,Af=1017,Cf=1018,mo=1020,H0=35902,G0=35899,j0=1021,W0=1022,Hi=1023,wr=1026,Es=1027,X0=1028,Rf=1029,Ts=1030,Nf=1031,Pf=1033,Wl=33776,Xl=33777,Yl=33778,$l=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,jd=36196,Wd=37492,Xd=37496,Yd=37488,$d=37489,Kl=37490,qd=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Zl=36285,gf=36286,Lv=3200,Mm=0,Uv=1,Kr="",Ci="srgb",Jl="srgb-linear",Ql="linear",rn="srgb",Js=7680,Em=519,Fv=512,Ov=513,kv=514,If=515,Bv=516,zv=517,Df=518,Vv=519,wm=35044,bm="300 es",Qi=2e3,ec=2001;function Hv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gv(){const s=tc("canvas");return s.style.display="block",s}const Tm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function Y0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function At(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Qt(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xf(...s){const e=s.join(" ");e in Tm||(Tm[e]=!0,At(...s))}function jv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Wv={[Pd]:Id,[Dd]:Fd,[Ld]:Od,[ga]:Ud,[Id]:Pd,[Fd]:Dd,[Od]:Ld,[Ud]:ga};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,vf=180/Math.PI;function go(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function Xv(s,e){return(s%e+e)%e}function $u(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let Ct=Vf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],A=l[u+2],I=l[u+3];if(S!==I||h!==x||p!==M||v!==A){let y=h*x+p*M+v*A+S*I;y<0&&(x=-x,M=-M,A=-A,I=-I,y=-y);let _=1-f;if(y<.9995){const L=Math.acos(y),R=Math.sin(L);_=Math.sin(_*L)/R,f=Math.sin(f*L)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+I*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+I*f;const L=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=L,p*=L,v*=L,S*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],A=l[u+3];return e[t]=f*A+v*S+h*M-p*x,e[t+1]=h*A+v*x+p*S-f*M,e[t+2]=p*A+v*M+f*x-h*S,e[t+3]=v*A-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),A=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"YXZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"ZXY":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"ZYX":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"YZX":this._x=x*v*S+p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S-x*M*A;break;case"XZY":this._x=x*v*S-p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S+x*M*A;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hf=class Hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hf.prototype.isVector3=!0;let te=Hf;const qu=new te,Cm=new ya,Gf=class Gf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],A=r[8],I=o[0],y=o[3],_=o[6],L=o[1],R=o[4],N=o[7],z=o[2],P=o[5],k=o[8];return l[0]=u*I+f*L+h*z,l[3]=u*y+f*R+h*P,l[6]=u*_+f*N+h*k,l[1]=p*I+v*L+S*z,l[4]=p*y+v*R+S*P,l[7]=p*_+v*N+S*k,l[2]=x*I+M*L+A*z,l[5]=x*y+M*R+A*P,l[8]=x*_+M*N+A*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,A=t*S+r*x+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=S*I,e[1]=(o*p-v*r)*I,e[2]=(f*r-o*u)*I,e[3]=x*I,e[4]=(v*t-o*h)*I,e[5]=(o*l-f*t)*I,e[6]=M*I,e[7]=(r*h-p*t)*I,e[8]=(u*t-r*l)*I,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let Ot=Gf;const Ku=new Ot,Rm=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===rn&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===rn&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:rn,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),s}const Kt=Yv();function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class $v{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=tc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Mr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qv=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$v.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}let Kv=0;const Ju=new te;class Jn extends Cs{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,r=yr,o=yr,l=$n,u=Ms,f=Hi,h=Ni,p=Jn.DEFAULT_ANISOTROPY,v=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=go(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){At(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){At(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=B0;Jn.DEFAULT_ANISOTROPY=1;const jf=class jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],A=h[9],I=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-I)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+I)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,N=(M+1)/2,z=(_+1)/2,P=(v+x)/4,k=(S+I)/4,w=(A+y)/4;return R>N&&R>z?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=P/r,l=k/r):N>z?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=P/o,l=w/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=k/l,o=w/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-A)*(y-A)+(S-I)*(S-I)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-A)/L,this.y=(S-I)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this.w=$t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this.w=$t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;let Sn=jf;class Zv extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Sn(0,0,e,t),this.scissorTest=!1,this.viewport=new Sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Jn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Zv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $0 extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=class sc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=A,_[11]=I,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,A=f*v,I=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+A*p,t[5]=x-I*p,t[9]=-f*h,t[2]=I-x*p,t[6]=A+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,A=p*v,I=p*S;t[0]=x+I*f,t[4]=A*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-A,t[6]=I+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,A=p*v,I=p*S;t[0]=x-I*f,t[4]=-u*S,t[8]=A+M*f,t[1]=M+A*f,t[5]=u*v,t[9]=I-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,A=f*v,I=f*S;t[0]=h*v,t[4]=A*p-M,t[8]=x*p+I,t[1]=h*S,t[5]=I*p+x,t[9]=M*p-A,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,A=f*h,I=f*p;t[0]=h*v,t[4]=I-x*S,t[8]=A*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+A,t[10]=x-I*S}else if(e.order==="XZY"){const x=u*h,M=u*p,A=f*h,I=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+I,t[5]=u*v,t[9]=M*S-A,t[2]=A*S-M,t[6]=f*v,t[10]=I*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qv,e,e_)}lookAt(e,t,r){const o=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Hr.crossVectors(r,pi),Hr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Hr.crossVectors(r,pi)),Hr.normalize(),yl.crossVectors(pi,Hr),o[0]=Hr.x,o[4]=yl.x,o[8]=pi.x,o[1]=Hr.y,o[5]=yl.y,o[9]=pi.y,o[2]=Hr.z,o[6]=yl.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],A=r[2],I=r[6],y=r[10],_=r[14],L=r[3],R=r[7],N=r[11],z=r[15],P=o[0],k=o[4],w=o[8],D=o[12],W=o[1],H=o[5],q=o[9],ee=o[13],xe=o[2],X=o[6],ie=o[10],K=o[14],Q=o[3],pe=o[7],se=o[11],V=o[15];return l[0]=u*P+f*W+h*xe+p*Q,l[4]=u*k+f*H+h*X+p*pe,l[8]=u*w+f*q+h*ie+p*se,l[12]=u*D+f*ee+h*K+p*V,l[1]=v*P+S*W+x*xe+M*Q,l[5]=v*k+S*H+x*X+M*pe,l[9]=v*w+S*q+x*ie+M*se,l[13]=v*D+S*ee+x*K+M*V,l[2]=A*P+I*W+y*xe+_*Q,l[6]=A*k+I*H+y*X+_*pe,l[10]=A*w+I*q+y*ie+_*se,l[14]=A*D+I*ee+y*K+_*V,l[3]=L*P+R*W+N*xe+z*Q,l[7]=L*k+R*H+N*X+z*pe,l[11]=L*w+R*q+N*ie+z*se,l[15]=L*D+R*ee+N*K+z*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],A=e[3],I=e[7],y=e[11],_=e[15],L=h*M-p*x,R=f*M-p*S,N=f*x-h*S,z=u*M-p*v,P=u*x-h*v,k=u*S-f*v;return t*(I*L-y*R+_*N)-r*(A*L-y*z+_*P)+o*(A*R-I*z+_*k)-l*(A*N-I*P+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],A=e[12],I=e[13],y=e[14],_=e[15],L=t*f-r*u,R=t*h-o*u,N=t*p-l*u,z=r*h-o*f,P=r*p-l*f,k=o*p-l*h,w=v*I-S*A,D=v*y-x*A,W=v*_-M*A,H=S*y-x*I,q=S*_-M*I,ee=x*_-M*y,xe=L*ee-R*q+N*H+z*W-P*D+k*w;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/xe;return e[0]=(f*ee-h*q+p*H)*X,e[1]=(o*q-r*ee-l*H)*X,e[2]=(I*k-y*P+_*z)*X,e[3]=(x*P-S*k-M*z)*X,e[4]=(h*W-u*ee-p*D)*X,e[5]=(t*ee-o*W+l*D)*X,e[6]=(y*N-A*k-_*R)*X,e[7]=(v*k-x*N+M*R)*X,e[8]=(u*q-f*W+p*w)*X,e[9]=(r*W-t*q-l*w)*X,e[10]=(A*P-I*N+_*L)*X,e[11]=(S*N-v*P-M*L)*X,e[12]=(f*D-u*H-h*w)*X,e[13]=(t*H-r*D+o*w)*X,e[14]=(I*R-A*z-y*L)*X,e[15]=(v*z-S*R+x*L)*X,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,A=l*S,I=u*v,y=u*S,_=f*S,L=h*p,R=h*v,N=h*S,z=r.x,P=r.y,k=r.z;return o[0]=(1-(I+_))*z,o[1]=(M+N)*z,o[2]=(A-R)*z,o[3]=0,o[4]=(M-N)*P,o[5]=(1-(x+_))*P,o[6]=(y+L)*P,o[7]=0,o[8]=(A+R)*k,o[9]=(y-L)*k,o[10]=(1-(x+I))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const p=1/u,v=1/f,S=1/h;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=S,ki.elements[9]*=S,ki.elements[10]*=S,t.setFromRotationMatrix(ki),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Qi,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let A,I;if(h)A=l/(u-l),I=u*l/(u-l);else if(f===Qi)A=-(u+l)/(u-l),I=-2*u*l/(u-l);else if(f===ec)A=-u/(u-l),I=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=I,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Qi,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let A,I;if(h)A=1/(u-l),I=u/(u-l);else if(f===Qi)A=-2/(u-l),I=-(u+l)/(u-l);else if(f===ec)A=-1/(u-l),I=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=I,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let Tn=sc;const ea=new te,ki=new Tn,Qv=new te(0,0,0),e_=new te(1,1,1),Hr=new te,yl=new te,pi=new te,Pm=new Tn,Im=new ya;class As{constructor(e=0,t=0,r=0,o=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin($t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-$t(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";let q0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t_=0;const Dm=new te,ta=new ya,pr=new Tn,Sl=new te,Qa=new te,n_=new te,i_=new ya,Lm=new te(1,0,0),Um=new te(0,1,0),Fm=new te(0,0,1),Om={type:"added"},r_={type:"removed"},na={type:"childadded",child:null},Qu={type:"childremoved",child:null};class gi extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new te,t=new As,r=new ya,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Ot}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Qa,Sl,this.up):pr.lookAt(Sl,Qa,this.up),this.quaternion.setFromRotationMatrix(pr),o&&(pr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(pr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}gi.DEFAULT_UP=new te(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s_={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const I of e.hand.values()){const y=t.getJointPose(I,r),_=this._getHandJoint(p,I);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ws;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class sn{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Kt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Kt.workingColorSpace){if(e=Xv(e,1),t=$t(t,0,1),r=$t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=td(u,l,e+1/3),this.g=td(u,l,e),this.b=td(u,l,e-1/3)}return Kt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ci){function r(l){l!==void 0&&parseFloat(l)<1&&At("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:At("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);At("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ci){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):At("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Kt.workingToColorSpace(Yn.copy(this),e),Math.round($t(Yn.r*255,0,255))*65536+Math.round($t(Yn.g*255,0,255))*256+Math.round($t(Yn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.workingToColorSpace(Yn.copy(this),t);const r=Yn.r,o=Yn.g,l=Yn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Kt.workingColorSpace){return Kt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Ci){Kt.workingToColorSpace(Yn.copy(this),e);const t=Yn.r,r=Yn.g,o=Yn.b;return e!==Ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Ml);const r=$u(Gr.h,Ml.h,t),o=$u(Gr.s,Ml.s,t),l=$u(Gr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new sn;sn.NAMES=K0;class a_ extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new te,mr=new te,nd=new te,gr=new te,ia=new te,ra=new te,km=new te,id=new te,rd=new te,sd=new te,ad=new Sn,od=new Sn,ld=new Sn;class Vi{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),mr.subVectors(r,t),nd.subVectors(e,t);const u=Bi.dot(Bi),f=Bi.dot(mr),h=Bi.dot(nd),p=mr.dot(mr),v=mr.dot(nd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,A=(u*v-f*h)*x;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,gr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,gr.x),h.addScaledVector(u,gr.y),h.addScaledVector(f,gr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),mr.subVectors(e,t),Bi.cross(mr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Bi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),id.subVectors(e,r);const h=ia.dot(id),p=ra.dot(id);if(h<=0&&p<=0)return t.copy(r);rd.subVectors(e,o);const v=ia.dot(rd),S=ra.dot(rd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);sd.subVectors(e,l);const M=ia.dot(sd),A=ra.dot(sd);if(A>=0&&M<=A)return t.copy(l);const I=M*p-h*A;if(I<=0&&p>=0&&A<=0)return f=p/(p-A),t.copy(r).addScaledVector(ra,f);const y=v*A-M*S;if(y<=0&&S-v>=0&&M-A>=0)return km.subVectors(l,o),f=(S-v)/(S-v+(M-A)),t.copy(o).addScaledVector(km,f);const _=1/(y+I+x);return u=I*_,f=x*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),wl.subVectors(this.max,eo),sa.subVectors(e.a,eo),aa.subVectors(e.b,eo),oa.subVectors(e.c,eo),jr.subVectors(aa,sa),Wr.subVectors(oa,aa),ps.subVectors(sa,oa);let t=[0,-jr.z,jr.y,0,-Wr.z,Wr.y,0,-ps.z,ps.y,jr.z,0,-jr.x,Wr.z,0,-Wr.x,ps.z,0,-ps.x,-jr.y,jr.x,0,-Wr.y,Wr.x,0,-ps.y,ps.x,0];return!cd(t,sa,aa,oa,wl)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,sa,aa,oa,wl))?!1:(bl.crossVectors(jr,Wr),t=[bl.x,bl.y,bl.z],cd(t,sa,aa,oa,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new te,new te,new te,new te,new te,new te,new te,new te],zi=new te,El=new xo,sa=new te,aa=new te,oa=new te,jr=new te,Wr=new te,ps=new te,eo=new te,wl=new te,bl=new te,ms=new te;function cd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),h=e.dot(ms),p=t.dot(ms),v=r.dot(ms);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const bn=new te,Tl=new Ct;let o_=0;class nr extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=li(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array),l=li(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Z0 extends nr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class J0 extends nr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mn extends nr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const l_=new xo,to=new te,ud=new te;class Uf{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):l_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ud)),this.expandByPoint(to.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c_=0;const bi=new Tn,dd=new gi,la=new te,mi=new xo,no=new xo,Un=new te;class xi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?J0:Z0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,r){return bi.makeTranslation(e,t,r),this.applyMatrix4(bi),this}scale(e,t,r){return bi.makeScale(e,t,r),this.applyMatrix4(bi),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(mi.min,no.min),mi.expandByPoint(Un),Un.addVectors(mi.max,no.max),mi.expandByPoint(Un)):(mi.expandByPoint(no.min),mi.expandByPoint(no.max))}mi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Un));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Un.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Un.add(la)),o=Math.max(o,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new te,h[w]=new te;const p=new te,v=new te,S=new te,x=new Ct,M=new Ct,A=new Ct,I=new te,y=new te;function _(w,D,W){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,D),S.fromBufferAttribute(r,W),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,D),A.fromBufferAttribute(l,W),v.sub(p),S.sub(p),M.sub(x),A.sub(x);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(I.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),f[w].add(I),f[D].add(I),f[W].add(I),h[w].add(y),h[D].add(y),h[W].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let w=0,D=L.length;w<D;++w){const W=L[w],H=W.start,q=W.count;for(let ee=H,xe=H+q;ee<xe;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new te,N=new te,z=new te,P=new te;function k(w){z.fromBufferAttribute(o,w),P.copy(z);const D=f[w];R.copy(D),R.sub(z.multiplyScalar(z.dot(D))).normalize(),N.crossVectors(P,D);const H=N.dot(h[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,H)}for(let w=0,D=L.length;w<D;++w){const W=L[w],H=W.start,q=W.count;for(let ee=H,xe=H+q;ee<xe;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new nr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new te,l=new te,u=new te,f=new te,h=new te,p=new te,v=new te,S=new te;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),I=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,I),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,I),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(I,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,A=0;for(let I=0,y=h.length;I<y;I++){f.isInterleavedBufferAttribute?M=h[I]*f.data.stride+f.offset:M=h[I]*v;for(let _=0;_<v;_++)x[A++]=p[M++]}return new nr(x,v,S)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let u_=0;class oc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=go(),this.name="",this.type="Material",this.blending=pa,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Nd,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){At(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){At(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new te,fd=new te,Al=new te,Xr=new te,hd=new te,Cl=new te,pd=new te;class d_{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Al),f=Xr.dot(this.direction),h=-Xr.dot(Al),p=Xr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,A;if(v>0)if(S=u*h-f,x=u*f-h,A=l*v,S>=0)if(x>=-A)if(x<=A){const I=1/v;S*=I,x*=I,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-A?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=A?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(fd).addScaledVector(Al,x),M}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const r=vr.dot(this.direction),o=vr.dot(vr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),Cl.subVectors(r,e),pd.crossVectors(hd,Cl);let u=this.direction.dot(pd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Xr,Cl));if(h<0)return null;const p=f*this.direction.dot(hd.cross(Xr));if(p<0||h+p>u)return null;const v=-f*Xr.dot(pd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jr extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bm=new Tn,gs=new d_,Rl=new Uf,zm=new te,Nl=new te,Pl=new te,Il=new te,md=new te,Dl=new te,Vm=new te,Ll=new te;class Qn extends gi{constructor(e=new xi,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(md.fromBufferAttribute(S,e),u?Dl.addScaledVector(md,v):Dl.addScaledVector(md.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Rl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Rl,zm)===null||gs.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),gs.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,z=R;N<z;N+=3){const P=f.getX(N),k=f.getX(N+1),w=f.getX(N+2);o=Ul(this,_,e,r,p,v,S,P,k,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(f.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const L=f.getX(y),R=f.getX(y+1),N=f.getX(y+2);o=Ul(this,u,e,r,p,v,S,L,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,z=R;N<z;N+=3){const P=N,k=N+1,w=N+2;o=Ul(this,_,e,r,p,v,S,P,k,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(h.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const L=y,R=y+1,N=y+2;o=Ul(this,u,e,r,p,v,S,L,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function f_(s,e,t,r,o,l,u,f){let h;if(e.side===ci?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Qr,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Ul(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Nl),s.getVertexPosition(h,Pl),s.getVertexPosition(p,Il);const v=f_(s,e,t,r,Nl,Pl,Il,Vm);if(v){const S=new te;Vi.getBarycoord(Vm,Nl,Pl,Il,S),o&&(v.uv=Vi.getInterpolatedAttribute(o,f,h,p,S,new Ct)),l&&(v.uv1=Vi.getInterpolatedAttribute(l,f,h,p,S,new Ct)),u&&(v.normal=Vi.getInterpolatedAttribute(u,f,h,p,S,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new te,materialIndex:0};Vi.getNormal(Nl,Pl,Il,x.normal),v.face=x,v.barycoord=S}return v}class h_ extends Jn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Bn,v=Bn,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new te,p_=new te,m_=new Ot;class _s{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||m_.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Uf,g_=new Ct(.5,.5),Fl=new te;class Q0{constructor(e=new _s,t=new _s,r=new _s,o=new _s,l=new _s,u=new _s){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],A=l[8],I=l[9],y=l[10],_=l[11],L=l[12],R=l[13],N=l[14],z=l[15];if(o[0].setComponents(p-u,M-v,_-A,z-L).normalize(),o[1].setComponents(p+u,M+v,_+A,z+L).normalize(),o[2].setComponents(p+f,M+S,_+I,z+R).normalize(),o[3].setComponents(p-f,M-S,_-I,z-R).normalize(),r)o[4].setComponents(h,x,y,N).normalize(),o[5].setComponents(p-h,M-x,_-y,z-N).normalize();else if(o[4].setComponents(p-h,M-x,_-y,z-N).normalize(),t===Qi)o[5].setComponents(p+h,M+x,_+y,z+N).normalize();else if(t===ec)o[5].setComponents(h,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=g_.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eg extends Jn{constructor(e=[],t=bs,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends Jn{constructor(e,t,r=ir,o,l,u,f=Bn,h=Bn,p,v=wr,S=1){if(v!==wr&&v!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class x_ extends va{constructor(e,t=ir,r=bs,o,l,u=Bn,f=Bn,h,p=wr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tg extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends xi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(v,3)),this.setAttribute("uv",new Mn(S,2));function A(I,y,_,L,R,N,z,P,k,w,D){const W=N/k,H=z/w,q=N/2,ee=z/2,xe=P/2,X=k+1,ie=w+1;let K=0,Q=0;const pe=new te;for(let se=0;se<ie;se++){const V=se*H-ee;for(let oe=0;oe<X;oe++){const $e=oe*W-q;pe[I]=$e*L,pe[y]=V*R,pe[_]=xe,p.push(pe.x,pe.y,pe.z),pe[I]=0,pe[y]=0,pe[_]=P>0?1:-1,v.push(pe.x,pe.y,pe.z),S.push(oe/k),S.push(1-se/w),K+=1}}for(let se=0;se<w;se++)for(let V=0;V<k;V++){const oe=x+V+X*se,$e=x+V+X*(se+1),Ze=x+(V+1)+X*(se+1),Ne=x+(V+1)+X*se;h.push(oe,$e,Ne),h.push($e,Ze,Ne),Q+=6}f.addGroup(M,Q,D),M+=Q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ff extends xi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let A=0;const I=[],y=r/2;let _=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new Mn(S,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(M,2));function L(){const N=new te,z=new te;let P=0;const k=(t-e)/r;for(let w=0;w<=l;w++){const D=[],W=w/l,H=W*(t-e)+e;for(let q=0;q<=o;q++){const ee=q/o,xe=ee*h+f,X=Math.sin(xe),ie=Math.cos(xe);z.x=H*X,z.y=-W*r+y,z.z=H*ie,S.push(z.x,z.y,z.z),N.set(X,k,ie).normalize(),x.push(N.x,N.y,N.z),M.push(ee,1-W),D.push(A++)}I.push(D)}for(let w=0;w<o;w++)for(let D=0;D<l;D++){const W=I[D][w],H=I[D+1][w],q=I[D+1][w+1],ee=I[D][w+1];(e>0||D!==0)&&(v.push(W,H,ee),P+=3),(t>0||D!==l-1)&&(v.push(H,q,ee),P+=3)}p.addGroup(_,P,0),_+=P}function R(N){const z=A,P=new Ct,k=new te;let w=0;const D=N===!0?e:t,W=N===!0?1:-1;for(let q=1;q<=o;q++)S.push(0,y*W,0),x.push(0,W,0),M.push(.5,.5),A++;const H=A;for(let q=0;q<=o;q++){const xe=q/o*h+f,X=Math.cos(xe),ie=Math.sin(xe);k.x=D*ie,k.y=y*W,k.z=D*X,S.push(k.x,k.y,k.z),x.push(0,W,0),P.x=X*.5+.5,P.y=ie*.5*W+.5,M.push(P.x,P.y),A++}for(let q=0;q<o;q++){const ee=z+q,xe=H+q;N===!0?v.push(xe,xe+1,ee):v.push(xe+1,xe,ee),w+=3}p.addGroup(_,w,N===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Ff{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){At("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Ct:new te);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new te,o=[],l=[],u=[],f=new te,h=new Tn;for(let M=0;M<=e;M++){const A=M/e;o[M]=this.getTangentAt(A,new te)}l[0]=new te,u[0]=new te;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const A=Math.acos($t(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,A))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos($t(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let A=1;A<=e;A++)l[A].applyMatrix4(h.makeRotationAxis(o[A],M*A)),u[A].crossVectors(o[A],l[A])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ng extends br{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ct){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class v_ extends ng{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Hm=new te,Gm=new te,xd=new Of,vd=new Of,_d=new Of;class kf extends br{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new te){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Gm.subVectors(o[0],o[1]).add(o[0]),p=Gm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Hm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Hm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(p.distanceToSquared(S),M),I=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);I<1e-4&&(I=1),A<1e-4&&(A=I),y<1e-4&&(y=I),xd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,A,I,y),vd.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,A,I,y),_d.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,A,I,y)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),vd.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),_d.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(xd.calc(h),vd.calc(h),_d.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function __(s,e){const t=1-s;return t*t*e}function y_(s,e){return 2*(1-s)*s*e}function S_(s,e){return s*s*e}function uo(s,e,t,r){return __(s,e)+y_(s,t)+S_(s,r)}function M_(s,e){const t=1-s;return t*t*t*e}function E_(s,e){const t=1-s;return 3*t*t*s*e}function w_(s,e){return 3*(1-s)*s*s*e}function b_(s,e){return s*s*s*e}function fo(s,e,t,r,o){return M_(s,e)+E_(s,t)+w_(s,r)+b_(s,o)}class T_ extends br{constructor(e=new Ct,t=new Ct,r=new Ct,o=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ct){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A_ extends br{constructor(e=new te,t=new te,r=new te,o=new te){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new te){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C_ extends br{constructor(e=new Ct,t=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ct){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ct){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends br{constructor(e=new te,t=new te){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new te){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends br{constructor(e=new Ct,t=new Ct,r=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ct){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ig extends br{constructor(e=new te,t=new te,r=new te){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new te){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ct){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(jm(f,h.x,p.x,v.x,S.x),jm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ct().fromArray(o))}return this}}var I_=Object.freeze({__proto__:null,ArcCurve:v_,CatmullRomCurve3:kf,CubicBezierCurve:T_,CubicBezierCurve3:A_,EllipseCurve:ng,LineCurve:C_,LineCurve3:R_,QuadraticBezierCurve:N_,QuadraticBezierCurve3:ig,SplineCurve:P_});class lc extends xi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],A=[],I=[],y=[];for(let _=0;_<v;_++){const L=_*x-u;for(let R=0;R<p;R++){const N=R*S-l;A.push(N,-L,0),I.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const R=L+p*_,N=L+p*(_+1),z=L+1+p*(_+1),P=L+1+p*_;M.push(R,N,P),M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(I,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bf extends xi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new te,A=new Ct;for(let I=0;I<=o;I++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),A.x=(M.x/t+1)/2,A.y=(M.y/t+1)/2,v.push(A.x,A.y)}S+=x}for(let I=0;I<o;I++){const y=I*(r+1);for(let _=0;_<r;_++){const L=_+y,R=L,N=L+r+1,z=L+r+2,P=L+1;f.push(R,N,P),f.push(N,z,P)}}this.setIndex(f),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends xi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new te,x=new te,M=[],A=[],I=[],y=[];for(let _=0;_<=r;_++){const L=[],R=_/r;let N=0;_===0&&u===0?N=.5/t:_===r&&h===Math.PI&&(N=-.5/t);for(let z=0;z<=t;z++){const P=z/t;S.x=-e*Math.cos(o+P*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+P*l)*Math.sin(u+R*f),A.push(S.x,S.y,S.z),x.copy(S).normalize(),I.push(x.x,x.y,x.z),y.push(P+N,1-R),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const R=v[_][L+1],N=v[_][L],z=v[_+1][L],P=v[_+1][L+1];(_!==0||u>0)&&M.push(R,N,P),(_!==r-1||h<Math.PI)&&M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(I,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zf extends xi{constructor(e=new ig(new te(-1,-1,0),new te(-1,1,0),new te(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new te,h=new te,p=new Ct;let v=new te;const S=[],x=[],M=[],A=[];I(),this.setIndex(A),this.setAttribute("position",new Mn(S,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(M,2));function I(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),L(),_()}function y(R){v=e.getPointAt(R/t,v);const N=u.normals[R],z=u.binormals[R];for(let P=0;P<=o;P++){const k=P/o*Math.PI*2,w=Math.sin(k),D=-Math.cos(k);h.x=D*N.x+w*z.x,h.y=D*N.y+w*z.y,h.z=D*N.z+w*z.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let N=1;N<=o;N++){const z=(o+1)*(R-1)+(N-1),P=(o+1)*R+(N-1),k=(o+1)*R+N,w=(o+1)*(R-1)+N;A.push(z,P,w),A.push(P,k,w)}}function L(){for(let R=0;R<=t;R++)for(let N=0;N<=o;N++)p.x=R/t,p.y=N/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zf(new I_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Wm(o))o.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Wm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function D_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Kt.workingColorSpace}const L_={clone:_a,merge:Zn};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=D_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class O_ extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class k_ extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B_ extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ol=new te,kl=new ya,qi=new te;let sg=class extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ol,kl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Yr=new te,Xm=new Ct,Ym=new Ct;class Ri extends sg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ag extends sg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,ua=1;class z_ extends gi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ri(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Ri(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Ri(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Ri(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new Ri(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new Ri(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=I,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class V_ extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wf=class Wf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Wf.prototype.isMatrix2=!0;let $m=Wf;function qm(s,e,t,r){const o=H_(r);switch(t){case j0:return s*e;case X0:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case Ts:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case W0:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Wd:case Yd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Kl:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H_(s){switch(s){case Ni:case z0:return{byteLength:1,components:1};case po:case V0:case Er:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case ir:case Tf:case Ji:return{byteLength:4,components:1};case H0:case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function G_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<S.length;M++){const A=S[x],I=S[M];I.start<=A.start+A.count+1?A.count=Math.max(A.count,I.start+I.count-A.start):(++x,S[x]=I)}S.length=x+1;for(let M=0,A=S.length;M<A;M++){const I=S[M];s.bufferSubData(p,I.start*v.BYTES_PER_ELEMENT,v,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var j_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
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
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,Q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Hy=`uniform sampler2D dfgLUT;
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
}`,Gy=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eS=`#if defined( USE_POINTS_UV )
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
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
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
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_S=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RS=`float getShadowMask() {
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
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
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
}`,ZS=`#if DEPTH_PACKING == 3200
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
}`,JS=`#define DISTANCE
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
}`,QS=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,o1=`#define LAMBERT
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
}`,l1=`#define MATCAP
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
}`,c1=`#define MATCAP
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
}`,u1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,f1=`#define PHONG
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
}`,h1=`#define PHONG
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
}`,p1=`#define STANDARD
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
}`,m1=`#define STANDARD
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
}`,g1=`#define TOON
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
}`,x1=`#define TOON
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
}`,v1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,M1=`uniform float rotation;
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
}`,E1=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:j_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:q_,aomap_fragment:K_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:Q_,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:hy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:xy,emissivemap_fragment:vy,emissivemap_pars_fragment:_y,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:Ey,envmap_pars_fragment:wy,envmap_pars_vertex:by,envmap_physical_pars_fragment:Fy,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:Ny,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Iy,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Ly,lights_pars_begin:Uy,lights_toon_fragment:Oy,lights_toon_pars_fragment:ky,lights_phong_fragment:By,lights_phong_pars_fragment:zy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Gy,lights_fragment_maps:jy,lights_fragment_end:Wy,lightprobes_pars_fragment:Xy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Ky,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:nS,morphinstance_vertex:iS,morphcolor_vertex:rS,morphnormal_vertex:sS,morphtarget_pars_vertex:aS,morphtarget_vertex:oS,normal_fragment_begin:lS,normal_fragment_maps:cS,normal_pars_fragment:uS,normal_pars_vertex:dS,normal_vertex:fS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:mS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:xS,opaque_fragment:vS,packing:_S,premultiplied_alpha_fragment:yS,project_vertex:SS,dithering_fragment:MS,dithering_pars_fragment:ES,roughnessmap_fragment:wS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:AS,shadowmap_vertex:CS,shadowmask_pars_fragment:RS,skinbase_vertex:NS,skinning_pars_vertex:PS,skinning_vertex:IS,skinnormal_vertex:DS,specularmap_fragment:LS,specularmap_pars_fragment:US,tonemapping_fragment:FS,tonemapping_pars_fragment:OS,transmission_fragment:kS,transmission_pars_fragment:BS,uv_pars_fragment:zS,uv_pars_vertex:VS,uv_vertex:HS,worldpos_vertex:GS,background_vert:jS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:YS,cube_vert:$S,cube_frag:qS,depth_vert:KS,depth_frag:ZS,distance_vert:JS,distance_frag:QS,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:r1,meshbasic_frag:s1,meshlambert_vert:a1,meshlambert_frag:o1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:u1,meshnormal_frag:d1,meshphong_vert:f1,meshphong_frag:h1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:x1,points_vert:v1,points_frag:_1,shadow_vert:y1,shadow_frag:S1,sprite_vert:M1,sprite_frag:E1},Qe={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Zi={basic:{uniforms:Zn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Zn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new sn(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Zn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Zn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Zn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new sn(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Zn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Zn([Qe.points,Qe.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Zn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Zn([Qe.common,Qe.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Zn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Zn([Qe.sprite,Qe.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Zn([Qe.common,Qe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Zn([Qe.lights,Qe.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Zi.physical={uniforms:Zn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Bl={r:0,b:0,g:0},w1=new Tn,lg=new Ot;lg.set(-1,0,0,0,1,0,0,0,1);function b1(s,e,t,r,o,l){const u=new sn(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;if(R&&R.isTexture){const N=L.backgroundBlurriness>0;R=e.get(R,N)}return R}function A(L){let R=!1;const N=M(L);N===null?y(u,f):N&&N.isColor&&(y(N,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function I(L,R){const N=M(R);N&&(N.isCubeTexture||N.mapping===ac)?(p===void 0&&(p=new Qn(new vo(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:_a(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(R.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(lg),p.material.toneMapped=Kt.getTransfer(N.colorSpace)!==rn,(v!==N||S!==N.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Qn(new lc(2,2),new rr({name:"BackgroundMaterial",uniforms:_a(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(N.colorSpace)!==rn,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,R){L.getRGB(Bl,rg(s)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:A,addToRenderList:I,dispose:_}}function T1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(H,q,ee,xe,X){let ie=!1;const K=S(H,xe,ee,q);l!==K&&(l=K,p(l.object)),ie=M(H,xe,ee,X),ie&&A(H,xe,ee,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,N(H,q,ee,xe),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,q,ee,xe){const X=xe.wireframe===!0;let ie=r[q.id];ie===void 0&&(ie={},r[q.id]=ie);const K=H.isInstancedMesh===!0?H.id:0;let Q=ie[K];Q===void 0&&(Q={},ie[K]=Q);let pe=Q[ee.id];pe===void 0&&(pe={},Q[ee.id]=pe);let se=pe[X];return se===void 0&&(se=x(h()),pe[X]=se),se}function x(H){const q=[],ee=[],xe=[];for(let X=0;X<t;X++)q[X]=0,ee[X]=0,xe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:xe,object:H,attributes:{},index:null}}function M(H,q,ee,xe){const X=l.attributes,ie=q.attributes;let K=0;const Q=ee.getAttributes();for(const pe in Q)if(Q[pe].location>=0){const V=X[pe];let oe=ie[pe];if(oe===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor)),V===void 0||V.attribute!==oe||oe&&V.data!==oe.data)return!0;K++}return l.attributesNum!==K||l.index!==xe}function A(H,q,ee,xe){const X={},ie=q.attributes;let K=0;const Q=ee.getAttributes();for(const pe in Q)if(Q[pe].location>=0){let V=ie[pe];V===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(V=H.instanceColor));const oe={};oe.attribute=V,V&&V.data&&(oe.data=V.data),X[pe]=oe,K++}l.attributes=X,l.attributesNum=K,l.index=xe}function I(){const H=l.newAttributes;for(let q=0,ee=H.length;q<ee;q++)H[q]=0}function y(H){_(H,0)}function _(H,q){const ee=l.newAttributes,xe=l.enabledAttributes,X=l.attributeDivisors;ee[H]=1,xe[H]===0&&(s.enableVertexAttribArray(H),xe[H]=1),X[H]!==q&&(s.vertexAttribDivisor(H,q),X[H]=q)}function L(){const H=l.newAttributes,q=l.enabledAttributes;for(let ee=0,xe=q.length;ee<xe;ee++)q[ee]!==H[ee]&&(s.disableVertexAttribArray(ee),q[ee]=0)}function R(H,q,ee,xe,X,ie,K){K===!0?s.vertexAttribIPointer(H,q,ee,X,ie):s.vertexAttribPointer(H,q,ee,xe,X,ie)}function N(H,q,ee,xe){I();const X=xe.attributes,ie=ee.getAttributes(),K=q.defaultAttributeValues;for(const Q in ie){const pe=ie[Q];if(pe.location>=0){let se=X[Q];if(se===void 0&&(Q==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),Q==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const V=se.normalized,oe=se.itemSize,$e=e.get(se);if($e===void 0)continue;const Ze=$e.buffer,Ne=$e.type,ue=$e.bytesPerElement,Ae=Ne===s.INT||Ne===s.UNSIGNED_INT||se.gpuType===Tf;if(se.isInterleavedBufferAttribute){const we=se.data,Fe=we.stride,qe=se.offset;if(we.isInstancedInterleavedBuffer){for(let st=0;st<pe.locationSize;st++)_(pe.location+st,we.meshPerAttribute);H.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let st=0;st<pe.locationSize;st++)y(pe.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let st=0;st<pe.locationSize;st++)R(pe.location+st,oe/pe.locationSize,Ne,V,Fe*ue,(qe+oe/pe.locationSize*st)*ue,Ae)}else{if(se.isInstancedBufferAttribute){for(let we=0;we<pe.locationSize;we++)_(pe.location+we,se.meshPerAttribute);H.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<pe.locationSize;we++)y(pe.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let we=0;we<pe.locationSize;we++)R(pe.location+we,oe/pe.locationSize,Ne,V,oe*ue,oe/pe.locationSize*we*ue,Ae)}}else if(K!==void 0){const V=K[Q];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(pe.location,V);break;case 3:s.vertexAttrib3fv(pe.location,V);break;case 4:s.vertexAttrib4fv(pe.location,V);break;default:s.vertexAttrib1fv(pe.location,V)}}}}L()}function z(){D();for(const H in r){const q=r[H];for(const ee in q){const xe=q[ee];for(const X in xe){const ie=xe[X];for(const K in ie)v(ie[K].object),delete ie[K];delete xe[X]}}delete r[H]}}function P(H){if(r[H.id]===void 0)return;const q=r[H.id];for(const ee in q){const xe=q[ee];for(const X in xe){const ie=xe[X];for(const K in ie)v(ie[K].object),delete ie[K];delete xe[X]}}delete r[H.id]}function k(H){for(const q in r){const ee=r[q];for(const xe in ee){const X=ee[xe];if(X[H.id]===void 0)continue;const ie=X[H.id];for(const K in ie)v(ie[K].object),delete ie[K];delete X[H.id]}}}function w(H){for(const q in r){const ee=r[q],xe=H.isInstancedMesh===!0?H.id:0,X=ee[xe];if(X!==void 0){for(const ie in X){const K=X[ie];for(const Q in K)v(K[Q].object),delete K[Q];delete X[ie]}delete ee[xe],Object.keys(ee).length===0&&delete r[q]}}}function D(){W(),u=!0,l!==o&&(l=o,p(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:I,enableAttribute:y,disableUnusedAttributes:L}}function A1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function C1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ni&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ji&&!w)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(At("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:I,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:N,maxSamples:z,samples:P}}function R1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new _s,f=new Ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const A=S.clippingPlanes,I=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):p();else{const L=l?0:r,R=L*4;let N=_.clippingState||null;h.value=N,N=v(A,x,R,M);for(let z=0;z!==R;++z)N[z]=t[z];_.clippingState=N,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,A){const I=S!==null?S.length:0;let y=null;if(I!==0){if(y=h.value,A!==!0||y===null){const _=M+I*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,N=M;R!==I;++R,N+=4)u.copy(S[R]).applyMatrix4(L,f),u.normal.toArray(y,N),y[N+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,y}}const Zr=4,Km=[.125,.215,.35,.446,.526,.582],Ss=20,N1=256,io=new ag,Zm=new sn;let yd=null,Sd=0,Md=0,Ed=!1;const P1=new te;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=P1}=l;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Er,format:Hi,colorSpace:Jl,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I1(l)),this._blurMaterial=L1(l,e,t),this._ggxMaterial=D1(l,e,t)}return o}_compileMaterial(e){const t=new Qn(new xi,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new Ri(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Zm),S.toneMapping=er,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new vo,new Jr({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,y=I.material;let _=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,_=!0):(y.color.copy(Zm),_=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):N===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const z=this._cubeSize;da(o,N*z,R>2?z:0,z,z),S.setRenderTarget(o),_&&S.render(I,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===bs||e.mapping===xa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:A}=this,I=this._sizeLods[r],y=3*I*(r>A-Zr?r-A+Zr:0),_=4*(this._cubeSize-I);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=A-t,da(l,y,_,3*I,2*I),o.setRenderTarget(l),o.render(f,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=A-r,da(e,y,_,3*I,2*I),o.setRenderTarget(e),o.render(f,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ss-1),I=l/A,y=isFinite(l)?1+Math.floor(v*I):Ss;y>Ss&&At(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const _=[];let L=0;for(let k=0;k<Ss;++k){const w=k/I,D=Math.exp(-w*w/2);_.push(D),k===0?L+=D:k<y&&(L+=2*D)}for(let k=0;k<_.length;k++)_[k]=_[k]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=A,x.mipInt.value=R-r;const N=this._sizeLods[o],z=3*N*(o>R-Zr?o-R+Zr:0),P=4*(this._cubeSize-N);da(t,z,P,3*N,2*N),h.setRenderTarget(t),h.render(S,io)}}function I1(s){const e=[],t=[],r=[];let o=s;const l=s-Zr+1+Km.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Zr?h=Km[u-s+Zr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,I=3,y=2,_=1,L=new Float32Array(I*A*M),R=new Float32Array(y*A*M),N=new Float32Array(_*A*M);for(let P=0;P<M;P++){const k=P%3*2/3-1,w=P>2?0:-1,D=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];L.set(D,I*A*P),R.set(x,y*A*P);const W=[P,P,P,P,P,P];N.set(W,_*A*P)}const z=new xi;z.setAttribute("position",new nr(L,I)),z.setAttribute("uv",new nr(R,y)),z.setAttribute("faceIndex",new nr(N,_)),r.push(new Qn(z,null)),o>Zr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new tr(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function D1(s,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function L1(s,e,t){const r=new Float32Array(Ss),o=new te(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function e0(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function t0(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}class cg extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new eg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new rr({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ci,blending:Sr});l.uniforms.tEquirect.value=t;const u=new Qn(o,l),f=t.minFilter;return t.minFilter===Ms&&(t.minFilter=$n),new z_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function U1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===ju||M===Wu)if(e.has(x)){const A=e.get(x).texture;return f(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const I=new cg(A.height);return I.fromEquirectangularTexture(s,x),e.set(x,I),x.addEventListener("dispose",p),f(I.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,A=M===ju||M===Wu,I=M===bs||M===xa;if(A||I){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const L=x.image;return A&&L&&L.height>0||I&&L&&h(L)?(r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===ju?x.mapping=bs:M===Wu&&(x.mapping=xa),x}function h(x){let M=0;const A=6;for(let I=0;I<A;I++)x[I]!==void 0&&M++;return M===A}function p(x){const M=x.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function F1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&xf("WebGLRenderer: "+r+" extension not supported."),o}}}function O1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,A=S.attributes.position;let I=0;if(A===void 0)return;if(M!==null){const L=M.array;I=M.version;for(let R=0,N=L.length;R<N;R+=3){const z=L[R+0],P=L[R+1],k=L[R+2];x.push(z,P,P,k,k,z)}}else{const L=A.array;I=A.version;for(let R=0,N=L.length/3-1;R<N;R+=3){const z=R+0,P=R+1,k=R+2;x.push(z,P,P,k,k,z)}}const y=new(A.count>=65535?J0:Z0)(x,1);y.version=I;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function k1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let I=0;for(let y=0;y<M;y++)I+=x[y];t.update(I,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function B1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Qt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function z1(s,e,t){const r=new WeakMap,o=new Sn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let W=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var M=W;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,I=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let N=0;A===!0&&(N=1),I===!0&&(N=2),y===!0&&(N=3);let z=f.attributes.position.count*N,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*P*4*S),w=new $0(k,z,P,S);w.type=Ji,w.needsUpdate=!0;const D=N*4;for(let H=0;H<S;H++){const q=_[H],ee=L[H],xe=R[H],X=z*P*4*H;for(let ie=0;ie<q.count;ie++){const K=ie*D;A===!0&&(o.fromBufferAttribute(q,ie),k[X+K+0]=o.x,k[X+K+1]=o.y,k[X+K+2]=o.z,k[X+K+3]=0),I===!0&&(o.fromBufferAttribute(ee,ie),k[X+K+4]=o.x,k[X+K+5]=o.y,k[X+K+6]=o.z,k[X+K+7]=0),y===!0&&(o.fromBufferAttribute(xe,ie),k[X+K+8]=o.x,k[X+K+9]=o.y,k[X+K+10]=o.z,k[X+K+11]=xe.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new Ct(z,P)},r.set(f,x),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const I=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",I),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function V1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const H1={[I0]:"LINEAR_TONE_MAPPING",[D0]:"REINHARD_TONE_MAPPING",[L0]:"CINEON_TONE_MAPPING",[U0]:"ACES_FILMIC_TONE_MAPPING",[O0]:"AGX_TONE_MAPPING",[k0]:"NEUTRAL_TONE_MAPPING",[F0]:"CUSTOM_TONE_MAPPING"};function G1(s,e,t,r,o){const l=new tr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new va(e,t):void 0}),u=new tr(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),f=new xi;f.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const h=new O_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Qn(f,h),v=new ag(-1,1,1,-1,0,1);let S=null,x=null,M=!1,A,I=null,y=[],_=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(L,R)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,N=l.height;for(let z=0;z<y.length;z++){const P=y[z];P.setSize&&P.setSize(R,N)}},this.begin=function(L,R){if(M||L.toneMapping===er&&y.length===0)return!1;if(I=R,R!==null){const N=R.width,z=R.height;(l.width!==N||l.height!==z)&&this.setSize(N,z)}return _===!1&&L.setRenderTarget(l),A=L.toneMapping,L.toneMapping=er,!0},this.hasRenderPass=function(){return _},this.end=function(L,R){L.toneMapping=A,M=!0;let N=l,z=u;for(let P=0;P<y.length;P++){const k=y[P];if(k.enabled!==!1&&(k.render(L,z,N,R),k.needsSwap!==!1)){const w=N;N=z,z=w}}if(S!==L.outputColorSpace||x!==L.toneMapping){S=L.outputColorSpace,x=L.toneMapping,h.defines={},Kt.getTransfer(S)===rn&&(h.defines.SRGB_TRANSFER="");const P=H1[x];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(I),L.render(p,v),I=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const ug=new Jn,_f=new va(1,1),dg=new $0,fg=new Jv,hg=new eg,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=n0[o];if(l===void 0&&(l=new Float32Array(o),n0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function j1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2fv(this.addr,e),Pn(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;s.uniform3fv(this.addr,e),Pn(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4fv(this.addr,e),Pn(t,e)}}function $1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(Nn(t,r))return;a0.set(r),s.uniformMatrix2fv(this.addr,!1,a0),Pn(t,r)}}function q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(Nn(t,r))return;s0.set(r),s.uniformMatrix3fv(this.addr,!1,s0),Pn(t,r)}}function K1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(Nn(t,r))return;r0.set(r),s.uniformMatrix4fv(this.addr,!1,r0),Pn(t,r)}}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2iv(this.addr,e),Pn(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3iv(this.addr,e),Pn(t,e)}}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4iv(this.addr,e),Pn(t,e)}}function tM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2uiv(this.addr,e),Pn(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3uiv(this.addr,e),Pn(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4uiv(this.addr,e),Pn(t,e)}}function sM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Df:If,l=_f):l=ug,t.setTexture2D(e||l,o)}function aM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||fg,o)}function oM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||hg,o)}function lM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||dg,o)}function cM(s){switch(s){case 5126:return j1;case 35664:return W1;case 35665:return X1;case 35666:return Y1;case 35674:return $1;case 35675:return q1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(s,e){s.uniform1fv(this.addr,e)}function dM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function fM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function hM(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function pM(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mM(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gM(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xM(s,e){s.uniform1iv(this.addr,e)}function vM(s,e){s.uniform2iv(this.addr,e)}function _M(s,e){s.uniform3iv(this.addr,e)}function yM(s,e){s.uniform4iv(this.addr,e)}function SM(s,e){s.uniform1uiv(this.addr,e)}function MM(s,e){s.uniform2uiv(this.addr,e)}function EM(s,e){s.uniform3uiv(this.addr,e)}function wM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=ug;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function TM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||fg,l[u])}function AM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||hg,l[u])}function CM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||dg,l[u])}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}class NM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cM(t.type)}}class PM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function o0(s,e){s.seq.push(e),s.map[e.id]=e}function DM(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){o0(t,p===void 0?new NM(f,s,e):new PM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new IM(f),o0(t,S)),t=S}}}class ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);DM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function l0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const LM=37297;let UM=0;function FM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const c0=new Ot;function OM(s){Kt._getMatrix(c0,Kt.workingColorSpace,s);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function u0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+FM(s.getShaderSource(e),f)}else return l}function kM(s,e){const t=OM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const BM={[I0]:"Linear",[D0]:"Reinhard",[L0]:"Cineon",[U0]:"ACESFilmic",[O0]:"AgX",[k0]:"Neutral",[F0]:"Custom"};function zM(s,e){const t=BM[e];return t===void 0?(At("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new te;function VM(){Kt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function GM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function d0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(WM,YM)}const XM=new Map;function YM(s,e){let t=Gt[e];if(t===void 0){const r=XM.get(e);if(r!==void 0)t=Gt[r],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(s){return s.replace($M,qM)}function qM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function p0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const KM={[jl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function ZM(s){return KM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JM={[bs]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function QM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":JM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eE={[xa]:"ENVMAP_MODE_REFRACTION"};function tE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nE={[P0]:"ENVMAP_BLENDING_MULTIPLY",[Pv]:"ENVMAP_BLENDING_MIX",[Iv]:"ENVMAP_BLENDING_ADD"};function iE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nE[s.combine]||"ENVMAP_BLENDING_NONE"}function rE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function sE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=ZM(t),p=QM(t),v=tE(t),S=iE(t),x=rE(t),M=HM(t),A=GM(l),I=o.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?Gt.tonemapping_pars_fragment:"",t.toneMapping!==er?zM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),VM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=yf(u),u=d0(u,t),u=f0(u,t),f=yf(f),f=d0(f,t),f=f0(f,t),u=h0(u),f=h0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+y+u,N=L+_+f,z=l0(o,o.VERTEX_SHADER,R),P=l0(o,o.FRAGMENT_SHADER,N);o.attachShader(I,z),o.attachShader(I,P),t.index0AttributeName!==void 0?o.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(I,0,"position"),o.linkProgram(I);function k(H){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(I)||"",ee=o.getShaderInfoLog(z)||"",xe=o.getShaderInfoLog(P)||"",X=q.trim(),ie=ee.trim(),K=xe.trim();let Q=!0,pe=!0;if(o.getProgramParameter(I,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,I,z,P);else{const se=u0(o,z,"vertex"),V=u0(o,P,"fragment");Qt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(I,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+se+`
`+V)}else X!==""?At("WebGLProgram: Program Info Log:",X):(ie===""||K==="")&&(pe=!1);pe&&(H.diagnostics={runnable:Q,programLog:X,vertexShader:{log:ie,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(z),o.deleteShader(P),w=new ql(o,I),D=jM(o,I)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(I,LM)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=z,this.fragmentShader=P,this}let aE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new lE(e),t.set(e,r)),r}}class lE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function cE(s){return s===Ts||s===Kl||s===Zl}function uE(s,e,t,r,o,l){const u=new q0,f=new oE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return h.add(w),w===0?"uv":`uv${w}`}function I(w,D,W,H,q,ee){const xe=H.fog,X=q.geometry,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Q=e.get(w.envMap||ie,K),pe=Q&&Q.mapping===ac?Q.image.height:null,se=M[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&At("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const V=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=V!==void 0?V.length:0;let $e=0;X.morphAttributes.position!==void 0&&($e=1),X.morphAttributes.normal!==void 0&&($e=2),X.morphAttributes.color!==void 0&&($e=3);let Ze,Ne,ue,Ae;if(se){const nt=Zi[se];Ze=nt.vertexShader,Ne=nt.fragmentShader}else Ze=w.vertexShader,Ne=w.fragmentShader,f.update(w),ue=f.getVertexShaderID(w),Ae=f.getFragmentShaderID(w);const we=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),qe=q.isInstancedMesh===!0,st=q.isBatchedMesh===!0,_t=!!w.map,xt=!!w.matcap,Vt=!!Q,jt=!!w.aoMap,bt=!!w.lightMap,Ht=!!w.bumpMap,kt=!!w.normalMap,Xt=!!w.displacementMap,$=!!w.emissiveMap,It=!!w.metalnessMap,vt=!!w.roughnessMap,yt=w.anisotropy>0,ze=w.clearcoat>0,ot=w.dispersion>0,U=w.iridescence>0,E=w.sheen>0,ne=w.transmission>0,Ee=yt&&!!w.anisotropyMap,Re=ze&&!!w.clearcoatMap,Be=ze&&!!w.clearcoatNormalMap,Oe=ze&&!!w.clearcoatRoughnessMap,ye=U&&!!w.iridescenceMap,Te=U&&!!w.iridescenceThicknessMap,Ie=E&&!!w.sheenColorMap,Ke=E&&!!w.sheenRoughnessMap,He=!!w.specularMap,j=!!w.specularColorMap,ae=!!w.specularIntensityMap,Se=ne&&!!w.transmissionMap,Ce=ne&&!!w.thicknessMap,O=!!w.gradientMap,_e=!!w.alphaMap,re=w.alphaTest>0,Pe=!!w.alphaHash,be=!!w.extensions;let Me=er;w.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Me=s.toneMapping);const je={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:Ne,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:st,batchingColor:st&&q._colorsTexture!==null,instancing:qe,instancingColor:qe&&q.instanceColor!==null,instancingMorph:qe&&q.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:xt,envMap:Vt,envMapMode:Vt&&Q.mapping,envMapCubeUVHeight:pe,aoMap:jt,lightMap:bt,bumpMap:Ht,normalMap:kt,displacementMap:Xt,emissiveMap:$,normalMapObjectSpace:kt&&w.normalMapType===Uv,normalMapTangentSpace:kt&&w.normalMapType===Mm,packedNormalMap:kt&&w.normalMapType===Mm&&cE(w.normalMap.format),metalnessMap:It,roughnessMap:vt,anisotropy:yt,anisotropyMap:Ee,clearcoat:ze,clearcoatMap:Re,clearcoatNormalMap:Be,clearcoatRoughnessMap:Oe,dispersion:ot,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:Te,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:Ke,specularMap:He,specularColorMap:j,specularIntensityMap:ae,transmission:ne,transmissionMap:Se,thicknessMap:Ce,gradientMap:O,opaque:w.transparent===!1&&w.blending===pa&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:re,alphaHash:Pe,combine:w.combine,mapUv:_t&&A(w.map.channel),aoMapUv:jt&&A(w.aoMap.channel),lightMapUv:bt&&A(w.lightMap.channel),bumpMapUv:Ht&&A(w.bumpMap.channel),normalMapUv:kt&&A(w.normalMap.channel),displacementMapUv:Xt&&A(w.displacementMap.channel),emissiveMapUv:$&&A(w.emissiveMap.channel),metalnessMapUv:It&&A(w.metalnessMap.channel),roughnessMapUv:vt&&A(w.roughnessMap.channel),anisotropyMapUv:Ee&&A(w.anisotropyMap.channel),clearcoatMapUv:Re&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&A(w.sheenRoughnessMap.channel),specularMapUv:He&&A(w.specularMap.channel),specularColorMapUv:j&&A(w.specularColorMap.channel),specularIntensityMapUv:ae&&A(w.specularIntensityMap.channel),transmissionMapUv:Se&&A(w.transmissionMap.channel),thicknessMapUv:Ce&&A(w.thicknessMap.channel),alphaMapUv:_e&&A(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(kt||yt),vertexNormals:!!X.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(_t||_e),fog:!!xe,useFog:w.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||X.attributes.normal===void 0&&kt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Fe,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:$e,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===rn,decodeVideoTextureEmissive:$&&w.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(w.emissiveMap.colorSpace)===rn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_r,flipSided:w.side===ci,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function y(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)D.push(W),D.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(_(D,w),L(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function _(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function L(w,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const D=M[w.type];let W;if(D){const H=Zi[D];W=L_.clone(H.uniforms)}else W=w.uniforms;return W}function N(w,D){let W=v.get(D);return W!==void 0?++W.usedTimes:(W=new sE(s,D,w,o),p.push(W),v.set(D,W)),W}function z(w){if(--w.usedTimes===0){const D=p.indexOf(w);p[D]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function k(){f.dispose()}return{getParameters:I,getProgramCacheKey:y,getUniforms:R,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:p,dispose:k}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,A,I,y,_){let L=s[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:A,materialVariant:u(x),groupOrder:I,renderOrder:x.renderOrder,z:y,group:_},s[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=A,L.materialVariant=u(x),L.groupOrder=I,L.renderOrder=x.renderOrder,L.z=y,L.group=_),e++,L}function h(x,M,A,I,y,_){const L=f(x,M,A,I,y,_);A.transmission>0?r.push(L):A.transparent===!0?o.push(L):t.push(L)}function p(x,M,A,I,y,_){const L=f(x,M,A,I,y,_);A.transmission>0?r.unshift(L):A.transparent===!0?o.unshift(L):t.unshift(L)}function v(x,M){t.length>1&&t.sort(x||fE),r.length>1&&r.sort(M||m0),o.length>1&&o.sort(M||m0)}function S(){for(let x=e,M=s.length;x<M;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function hE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new g0,s.set(r,[u])):o>=l.length?(u=new g0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new sn};break;case"SpotLight":t={position:new te,direction:new te,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new sn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":t={color:new sn,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=t,t}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gE=0;function xE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vE(s){const e=new pE,t=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new te);const o=new te,l=new Tn,u=new Tn;function f(p){let v=0,S=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,I=0,y=0,_=0,L=0,R=0,N=0,z=0,P=0,k=0;p.sort(xE);for(let D=0,W=p.length;D<W;D++){const H=p[D],q=H.color,ee=H.intensity,xe=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ts?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=q.r*ee,S+=q.g*ee,x+=q.b*ee;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(H.sh.coefficients[ie],ee);k++}else if(H.isDirectionalLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,Q=t.get(H);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=ie,M++}else if(H.isSpotLight){const ie=e.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(q).multiplyScalar(ee),ie.distance=xe,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,r.spot[I]=ie;const K=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,K.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[I]=K.matrix,H.castShadow){const Q=t.get(H);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.spotShadow[I]=Q,r.spotShadowMap[I]=X,N++}I++}else if(H.isRectAreaLight){const ie=e.get(H);ie.color.copy(q).multiplyScalar(ee),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=ie,y++}else if(H.isPointLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const K=H.shadow,Q=t.get(H);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,r.pointShadow[A]=Q,r.pointShadowMap[A]=X,r.pointShadowMatrix[A]=H.shadow.matrix,R++}r.point[A]=ie,A++}else if(H.isHemisphereLight){const ie=e.get(H);ie.skyColor.copy(H.color).multiplyScalar(ee),ie.groundColor.copy(H.groundColor).multiplyScalar(ee),r.hemi[_]=ie,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Qe.LTC_FLOAT_1,r.rectAreaLTC2=Qe.LTC_FLOAT_2):(r.rectAreaLTC1=Qe.LTC_HALF_1,r.rectAreaLTC2=Qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==M||w.pointLength!==A||w.spotLength!==I||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==L||w.numPointShadows!==R||w.numSpotShadows!==N||w.numSpotMaps!==z||w.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=I,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,w.directionalLength=M,w.pointLength=A,w.spotLength=I,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=L,w.numPointShadows=R,w.numSpotShadows=N,w.numSpotMaps=z,w.numLightProbes=k,r.version=gE++)}function h(p,v){let S=0,x=0,M=0,A=0,I=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const R=p[_];if(R.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),S++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const N=r.hemi[I];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(y),I++}}}return{setup:f,setupView:h,state:r}}function x0(s){const e=new vE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function _E(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new x0(s),e.set(o,[f])):l>=u.length?(f=new x0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
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
}`,ME=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],EE=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],v0=new Tn,ro=new te,bd=new te;function wE(s,e,t){let r=new Q0;const o=new Ct,l=new Ct,u=new Sn,f=new k_,h=new B_,p={},v=t.maxTextureSize,S={[Qr]:ci,[ci]:Qr,[_r]:_r},x=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:yE,fragmentShader:SE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new xi;A.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Qn(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let _=this.type;this.render=function(P,k,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===fv&&(At("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jl);const D=s.getRenderTarget(),W=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Sr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=_!==this.type;ee&&k.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(X=>X.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,X=P.length;xe<X;xe++){const ie=P[xe],K=ie.shadow;if(K===void 0){At("WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Q=K.getFrameExtents();o.multiply(Q),l.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Q.x),o.x=l.x*Q.x,K.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Q.y),o.y=l.y*Q.y,K.mapSize.y=l.y));const pe=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=pe,K.map===null||ee===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===so){if(ie.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new tr(o.x,o.y,{format:Ts,type:Er,minFilter:$n,magFilter:$n,generateMipmaps:!1}),K.map.texture.name=ie.name+".shadowMap",K.map.depthTexture=new va(o.x,o.y,Ji),K.map.depthTexture.name=ie.name+".shadowMapDepth",K.map.depthTexture.format=wr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn}else ie.isPointLight?(K.map=new cg(o.x),K.map.depthTexture=new x_(o.x,ir)):(K.map=new tr(o.x,o.y),K.map.depthTexture=new va(o.x,o.y,ir)),K.map.depthTexture.name=ie.name+".shadowMap",K.map.depthTexture.format=wr,this.type===jl?(K.map.depthTexture.compareFunction=pe?Df:If,K.map.depthTexture.minFilter=$n,K.map.depthTexture.magFilter=$n):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn);K.camera.updateProjectionMatrix()}const se=K.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<se;V++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,V),s.clear();else{V===0&&(s.setRenderTarget(K.map),s.clear());const oe=K.getViewport(V);u.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),q.viewport(u)}if(ie.isPointLight){const oe=K.camera,$e=K.matrix,Ze=ie.distance||oe.far;Ze!==oe.far&&(oe.far=Ze,oe.updateProjectionMatrix()),ro.setFromMatrixPosition(ie.matrixWorld),oe.position.copy(ro),bd.copy(oe.position),bd.add(ME[V]),oe.up.copy(EE[V]),oe.lookAt(bd),oe.updateMatrixWorld(),$e.makeTranslation(-ro.x,-ro.y,-ro.z),v0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),K._frustum.setFromProjectionMatrix(v0,oe.coordinateSystem,oe.reversedDepth)}else K.updateMatrices(ie);r=K.getFrustum(),N(k,w,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===so&&L(K,w),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(D,W,H)};function L(P,k){const w=e.update(I);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new tr(o.x,o.y,{format:Ts,type:Er})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(k,null,w,x,I,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(k,null,w,M,I,null)}function R(P,k,w,D){let W=null;const H=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)W=H;else if(W=w.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=W.uuid,ee=k.uuid;let xe=p[q];xe===void 0&&(xe={},p[q]=xe);let X=xe[ee];X===void 0&&(X=W.clone(),xe[ee]=X,k.addEventListener("dispose",z)),W=X}if(W.visible=k.visible,W.wireframe=k.wireframe,D===so?W.side=k.shadowSide!==null?k.shadowSide:k.side:W.side=k.shadowSide!==null?k.shadowSide:S[k.side],W.alphaMap=k.alphaMap,W.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,W.map=k.map,W.clipShadows=k.clipShadows,W.clippingPlanes=k.clippingPlanes,W.clipIntersection=k.clipIntersection,W.displacementMap=k.displacementMap,W.displacementScale=k.displacementScale,W.displacementBias=k.displacementBias,W.wireframeLinewidth=k.wireframeLinewidth,W.linewidth=k.linewidth,w.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=s.properties.get(W);q.light=w}return W}function N(P,k,w,D,W){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===so)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ee=e.update(P),xe=P.material;if(Array.isArray(xe)){const X=ee.groups;for(let ie=0,K=X.length;ie<K;ie++){const Q=X[ie],pe=xe[Q.materialIndex];if(pe&&pe.visible){const se=R(P,pe,D,W);P.onBeforeShadow(s,P,k,w,ee,se,Q),s.renderBufferDirect(w,null,ee,se,P,Q),P.onAfterShadow(s,P,k,w,ee,se,Q)}}}else if(xe.visible){const X=R(P,xe,D,W);P.onBeforeShadow(s,P,k,w,ee,X,null),s.renderBufferDirect(w,null,ee,X,P,null),P.onAfterShadow(s,P,k,w,ee,X,null)}}const q=P.children;for(let ee=0,xe=q.length;ee<xe;ee++)N(q[ee],k,w,D,W)}function z(P){P.target.removeEventListener("dispose",z);for(const w in p){const D=p[w],W=P.target.uuid;W in D&&(D[W].dispose(),delete D[W])}}}function bE(s,e){function t(){let O=!1;const _e=new Sn;let re=null;const Pe=new Sn(0,0,0,0);return{setMask:function(be){re!==be&&!O&&(s.colorMask(be,be,be,be),re=be)},setLocked:function(be){O=be},setClear:function(be,Me,je,nt,dt){dt===!0&&(be*=nt,Me*=nt,je*=nt),_e.set(be,Me,je,nt),Pe.equals(_e)===!1&&(s.clearColor(be,Me,je,nt),Pe.copy(_e))},reset:function(){O=!1,re=null,Pe.set(-1,0,0,0)}}}function r(){let O=!1,_e=!1,re=null,Pe=null,be=null;return{setReversed:function(Me){if(_e!==Me){const je=e.get("EXT_clip_control");Me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),_e=Me;const nt=be;be=null,this.setClear(nt)}},getReversed:function(){return _e},setTest:function(Me){Me?we(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(Me){re!==Me&&!O&&(s.depthMask(Me),re=Me)},setFunc:function(Me){if(_e&&(Me=Wv[Me]),Pe!==Me){switch(Me){case Pd:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Me}},setLocked:function(Me){O=Me},setClear:function(Me){be!==Me&&(be=Me,_e&&(Me=1-Me),s.clearDepth(Me))},reset:function(){O=!1,re=null,Pe=null,be=null,_e=!1}}}function o(){let O=!1,_e=null,re=null,Pe=null,be=null,Me=null,je=null,nt=null,dt=null;return{setTest:function(mt){O||(mt?we(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!O&&(s.stencilMask(mt),_e=mt)},setFunc:function(mt,Bt,et){(re!==mt||Pe!==Bt||be!==et)&&(s.stencilFunc(mt,Bt,et),re=mt,Pe=Bt,be=et)},setOp:function(mt,Bt,et){(Me!==mt||je!==Bt||nt!==et)&&(s.stencilOp(mt,Bt,et),Me=mt,je=Bt,nt=et)},setLocked:function(mt){O=mt},setClear:function(mt){dt!==mt&&(s.clearStencil(mt),dt=mt)},reset:function(){O=!1,_e=null,re=null,Pe=null,be=null,Me=null,je=null,nt=null,dt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,L=null,R=null,N=null,z=null,P=null,k=null,w=new sn(0,0,0),D=0,W=!1,H=null,q=null,ee=null,xe=null,X=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(pe)[1]),K=Q>=1):pe.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),K=Q>=2);let se=null,V={};const oe=s.getParameter(s.SCISSOR_BOX),$e=s.getParameter(s.VIEWPORT),Ze=new Sn().fromArray(oe),Ne=new Sn().fromArray($e);function ue(O,_e,re,Pe){const be=new Uint8Array(4),Me=s.createTexture();s.bindTexture(O,Me),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<re;je++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(_e+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Me}const Ae={};Ae[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),we(s.DEPTH_TEST),u.setFunc(ga),Ht(!1),kt(vm),we(s.CULL_FACE),jt(Sr);function we(O){v[O]!==!0&&(s.enable(O),v[O]=!0)}function Fe(O){v[O]!==!1&&(s.disable(O),v[O]=!1)}function qe(O,_e){return x[O]!==_e?(s.bindFramebuffer(O,_e),x[O]=_e,O===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=_e),O===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function st(O,_e){let re=A,Pe=!1;if(O){re=M.get(_e),re===void 0&&(re=[],M.set(_e,re));const be=O.textures;if(re.length!==be.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,je=be.length;Me<je;Me++)re[Me]=s.COLOR_ATTACHMENT0+Me;re.length=be.length,Pe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(re)}function _t(O){return I!==O?(s.useProgram(O),I=O,!0):!1}const xt={[ys]:s.FUNC_ADD,[pv]:s.FUNC_SUBTRACT,[mv]:s.FUNC_REVERSE_SUBTRACT};xt[gv]=s.MIN,xt[xv]=s.MAX;const Vt={[vv]:s.ZERO,[_v]:s.ONE,[yv]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[Tv]:s.SRC_ALPHA_SATURATE,[wv]:s.DST_COLOR,[Mv]:s.DST_ALPHA,[Sv]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[bv]:s.ONE_MINUS_DST_COLOR,[Ev]:s.ONE_MINUS_DST_ALPHA,[Av]:s.CONSTANT_COLOR,[Cv]:s.ONE_MINUS_CONSTANT_COLOR,[Rv]:s.CONSTANT_ALPHA,[Nv]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(O,_e,re,Pe,be,Me,je,nt,dt,mt){if(O===Sr){y===!0&&(Fe(s.BLEND),y=!1);return}if(y===!1&&(we(s.BLEND),y=!0),O!==hv){if(O!==_||mt!==W){if((L!==ys||z!==ys)&&(s.blendEquation(s.FUNC_ADD),L=ys,z=ys),mt)switch(O){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFunc(s.ONE,s.ONE);break;case ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ym:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}R=null,N=null,P=null,k=null,w.set(0,0,0),D=0,_=O,W=mt}return}be=be||_e,Me=Me||re,je=je||Pe,(_e!==L||be!==z)&&(s.blendEquationSeparate(xt[_e],xt[be]),L=_e,z=be),(re!==R||Pe!==N||Me!==P||je!==k)&&(s.blendFuncSeparate(Vt[re],Vt[Pe],Vt[Me],Vt[je]),R=re,N=Pe,P=Me,k=je),(nt.equals(w)===!1||dt!==D)&&(s.blendColor(nt.r,nt.g,nt.b,dt),w.copy(nt),D=dt),_=O,W=!1}function bt(O,_e){O.side===_r?Fe(s.CULL_FACE):we(s.CULL_FACE);let re=O.side===ci;_e&&(re=!re),Ht(re),O.blending===pa&&O.transparent===!1?jt(Sr):jt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),l.setMask(O.colorWrite);const Pe=O.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(O){H!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),H=O)}function kt(O){O!==uv?(we(s.CULL_FACE),O!==q&&(O===vm?s.cullFace(s.BACK):O===dv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),q=O}function Xt(O){O!==ee&&(K&&s.lineWidth(O),ee=O)}function $(O,_e,re){O?(we(s.POLYGON_OFFSET_FILL),(xe!==_e||X!==re)&&(xe=_e,X=re,u.getReversed()&&(_e=-_e),s.polygonOffset(_e,re))):Fe(s.POLYGON_OFFSET_FILL)}function It(O){O?we(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function vt(O){O===void 0&&(O=s.TEXTURE0+ie-1),se!==O&&(s.activeTexture(O),se=O)}function yt(O,_e,re){re===void 0&&(se===null?re=s.TEXTURE0+ie-1:re=se);let Pe=V[re];Pe===void 0&&(Pe={type:void 0,texture:void 0},V[re]=Pe),(Pe.type!==O||Pe.texture!==_e)&&(se!==re&&(s.activeTexture(re),se=re),s.bindTexture(O,_e||Ae[O]),Pe.type=O,Pe.texture=_e)}function ze(){const O=V[se];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ot(){try{s.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function E(){try{s.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ne(){try{s.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ee(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Be(){try{s.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Oe(){try{s.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ye(){try{s.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Te(){try{s.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ie(O){return S[O]!==void 0?S[O]:s.getParameter(O)}function Ke(O,_e){S[O]!==_e&&(s.pixelStorei(O,_e),S[O]=_e)}function He(O){Ze.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ze.copy(O))}function j(O){Ne.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Ne.copy(O))}function ae(O,_e){let re=p.get(_e);re===void 0&&(re=new WeakMap,p.set(_e,re));let Pe=re.get(O);Pe===void 0&&(Pe=s.getUniformBlockIndex(_e,O.name),re.set(O,Pe))}function Se(O,_e){const Pe=p.get(_e).get(O);h.get(_e)!==Pe&&(s.uniformBlockBinding(_e,Pe,O.__bindingPointIndex),h.set(_e,Pe))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},se=null,V={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,L=null,R=null,N=null,z=null,P=null,k=null,w=new sn(0,0,0),D=0,W=!1,H=null,q=null,ee=null,xe=null,X=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:we,disable:Fe,bindFramebuffer:qe,drawBuffers:st,useProgram:_t,setBlending:jt,setMaterial:bt,setFlipSided:Ht,setCullFace:kt,setLineWidth:Xt,setPolygonOffset:$,setScissorTest:It,activeTexture:vt,bindTexture:yt,unbindTexture:ze,compressedTexImage2D:ot,compressedTexImage3D:U,texImage2D:ye,texImage3D:Te,pixelStorei:Ke,getParameter:Ie,updateUBOMapping:ae,uniformBlockBinding:Se,texStorage2D:Be,texStorage3D:Oe,texSubImage2D:E,texSubImage3D:ne,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Re,scissor:He,viewport:j,reset:Ce}}function TE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,E){return A?new OffscreenCanvas(U,E):tc("canvas")}function y(U,E,ne){let Ee=1;const Re=ot(U);if((Re.width>ne||Re.height>ne)&&(Ee=ne/Math.max(Re.width,Re.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Be=Math.floor(Ee*Re.width),Oe=Math.floor(Ee*Re.height);x===void 0&&(x=I(Be,Oe));const ye=E?I(Be,Oe):x;return ye.width=Be,ye.height=Oe,ye.getContext("2d").drawImage(U,0,0,Be,Oe),At("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+Be+"x"+Oe+")."),ye}else return"data"in U&&At("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),U;return U}function _(U){return U.generateMipmaps}function L(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,E,ne,Ee,Re,Be=!1){if(U!==null){if(s[U]!==void 0)return s[U];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Oe;Ee&&(Oe=e.get("EXT_texture_norm16"),Oe||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=E;if(E===s.RED&&(ne===s.FLOAT&&(ye=s.R32F),ne===s.HALF_FLOAT&&(ye=s.R16F),ne===s.UNSIGNED_BYTE&&(ye=s.R8),ne===s.UNSIGNED_SHORT&&Oe&&(ye=Oe.R16_EXT),ne===s.SHORT&&Oe&&(ye=Oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ye=s.R8UI),ne===s.UNSIGNED_SHORT&&(ye=s.R16UI),ne===s.UNSIGNED_INT&&(ye=s.R32UI),ne===s.BYTE&&(ye=s.R8I),ne===s.SHORT&&(ye=s.R16I),ne===s.INT&&(ye=s.R32I)),E===s.RG&&(ne===s.FLOAT&&(ye=s.RG32F),ne===s.HALF_FLOAT&&(ye=s.RG16F),ne===s.UNSIGNED_BYTE&&(ye=s.RG8),ne===s.UNSIGNED_SHORT&&Oe&&(ye=Oe.RG16_EXT),ne===s.SHORT&&Oe&&(ye=Oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ye=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ye=s.RG16UI),ne===s.UNSIGNED_INT&&(ye=s.RG32UI),ne===s.BYTE&&(ye=s.RG8I),ne===s.SHORT&&(ye=s.RG16I),ne===s.INT&&(ye=s.RG32I)),E===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),ne===s.UNSIGNED_INT&&(ye=s.RGB32UI),ne===s.BYTE&&(ye=s.RGB8I),ne===s.SHORT&&(ye=s.RGB16I),ne===s.INT&&(ye=s.RGB32I)),E===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),ne===s.UNSIGNED_INT&&(ye=s.RGBA32UI),ne===s.BYTE&&(ye=s.RGBA8I),ne===s.SHORT&&(ye=s.RGBA16I),ne===s.INT&&(ye=s.RGBA32I)),E===s.RGB&&(ne===s.UNSIGNED_SHORT&&Oe&&(ye=Oe.RGB16_EXT),ne===s.SHORT&&Oe&&(ye=Oe.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(ye=s.R11F_G11F_B10F)),E===s.RGBA){const Te=Be?Ql:Kt.getTransfer(Re);ne===s.FLOAT&&(ye=s.RGBA32F),ne===s.HALF_FLOAT&&(ye=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ye=Te===rn?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Oe&&(ye=Oe.RGBA16_EXT),ne===s.SHORT&&Oe&&(ye=Oe.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function z(U,E){let ne;return U?E===null||E===ir||E===mo?ne=s.DEPTH24_STENCIL8:E===Ji?ne=s.DEPTH32F_STENCIL8:E===po&&(ne=s.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ir||E===mo?ne=s.DEPTH_COMPONENT24:E===Ji?ne=s.DEPTH_COMPONENT32F:E===po&&(ne=s.DEPTH_COMPONENT16),ne}function P(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Bn&&U.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function k(U){const E=U.target;E.removeEventListener("dispose",k),D(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function w(U){const E=U.target;E.removeEventListener("dispose",w),H(E)}function D(U){const E=r.get(U);if(E.__webglInit===void 0)return;const ne=U.source,Ee=M.get(ne);if(Ee){const Re=Ee[E.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&W(U),Object.keys(Ee).length===0&&M.delete(ne)}r.remove(U)}function W(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const ne=U.source,Ee=M.get(ne);delete Ee[E.__cacheKey],u.memory.textures--}function H(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(E.__webglFramebuffer[Ee]))for(let Re=0;Re<E.__webglFramebuffer[Ee].length;Re++)s.deleteFramebuffer(E.__webglFramebuffer[Ee][Re]);else s.deleteFramebuffer(E.__webglFramebuffer[Ee]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let Ee=0;Ee<E.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(E.__webglFramebuffer[Ee]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Ee=0;Ee<E.__webglColorRenderbuffer.length;Ee++)E.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Ee]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ne=U.textures;for(let Ee=0,Re=ne.length;Ee<Re;Ee++){const Be=r.get(ne[Ee]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(ne[Ee])}r.remove(U)}let q=0;function ee(){q=0}function xe(){return q}function X(U){q=U}function ie(){const U=q;return U>=o.maxTextures&&At("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),q+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function Q(U,E){const ne=r.get(U);if(U.isVideoTexture&&yt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ne.__version!==U.version){const Ee=U.image;if(Ee===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(ne,U,E);return}}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+E)}function pe(U,E){const ne=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Fe(ne,U,E);return}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+E)}function se(U,E){const ne=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Fe(ne,U,E);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+E)}function V(U,E){const ne=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ne.__version!==U.version){qe(ne,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+E)}const oe={[kd]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},$e={[Bn]:s.NEAREST,[Dv]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[$n]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},Ze={[Fv]:s.NEVER,[Vv]:s.ALWAYS,[Ov]:s.LESS,[If]:s.LEQUAL,[kv]:s.EQUAL,[Df]:s.GEQUAL,[Bv]:s.GREATER,[zv]:s.NOTEQUAL};function Ne(U,E){if(E.type===Ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===Xu||E.magFilter===_l||E.magFilter===Ms||E.minFilter===$n||E.minFilter===Xu||E.minFilter===_l||E.minFilter===Ms)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,oe[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,$e[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,$e[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ze[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==_l&&E.minFilter!==Ms||E.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ue(U,E){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",k));const Ee=E.source;let Re=M.get(Ee);Re===void 0&&(Re={},M.set(Ee,Re));const Be=K(E);if(Be!==U.__cacheKey){Re[Be]===void 0&&(Re[Be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Re[Be].usedTimes++;const Oe=Re[U.__cacheKey];Oe!==void 0&&(Re[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&W(E)),U.__cacheKey=Be,U.__webglTexture=Re[Be].texture}return ne}function Ae(U,E,ne){return Math.floor(Math.floor(U/ne)/E)}function we(U,E,ne,Ee){const Be=U.updateRanges;if(Be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ne,Ee,E.data);else{Be.sort((Ke,He)=>Ke.start-He.start);let Oe=0;for(let Ke=1;Ke<Be.length;Ke++){const He=Be[Oe],j=Be[Ke],ae=He.start+He.count,Se=Ae(j.start,E.width,4),Ce=Ae(He.start,E.width,4);j.start<=ae+1&&Se===Ce&&Ae(j.start+j.count-1,E.width,4)===Se?He.count=Math.max(He.count,j.start+j.count-He.start):(++Oe,Be[Oe]=j)}Be.length=Oe+1;const ye=t.getParameter(s.UNPACK_ROW_LENGTH),Te=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ke=0,He=Be.length;Ke<He;Ke++){const j=Be[Ke],ae=Math.floor(j.start/4),Se=Math.ceil(j.count/4),Ce=ae%E.width,O=Math.floor(ae/E.width),_e=Se,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Ce,O,_e,re,ne,Ee,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ye),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Fe(U,E,ne){let Ee=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ee=s.TEXTURE_3D);const Re=ue(U,E),Be=E.source;t.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+ne);const Oe=r.get(Be);if(Be.version!==Oe.__version||Re===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const re=Kt.getPrimaries(Kt.workingColorSpace),Pe=E.colorSpace===Kr?null:Kt.getPrimaries(E.colorSpace),be=E.colorSpace===Kr||re===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let Te=y(E.image,!1,o.maxTextureSize);Te=ze(E,Te);const Ie=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let He=N(E.internalFormat,Ie,Ke,E.normalized,E.colorSpace,E.isVideoTexture);Ne(Ee,E);let j;const ae=E.mipmaps,Se=E.isVideoTexture!==!0,Ce=Oe.__version===void 0||Re===!0,O=Be.dataReady,_e=P(E,Te);if(E.isDepthTexture)He=z(E.format===Es,E.type),Ce&&(Se?t.texStorage2D(s.TEXTURE_2D,1,He,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,He,Te.width,Te.height,0,Ie,Ke,null));else if(E.isDataTexture)if(ae.length>0){Se&&Ce&&t.texStorage2D(s.TEXTURE_2D,_e,He,ae[0].width,ae[0].height);for(let re=0,Pe=ae.length;re<Pe;re++)j=ae[re],Se?O&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,j.width,j.height,Ie,Ke,j.data):t.texImage2D(s.TEXTURE_2D,re,He,j.width,j.height,0,Ie,Ke,j.data);E.generateMipmaps=!1}else Se?(Ce&&t.texStorage2D(s.TEXTURE_2D,_e,He,Te.width,Te.height),O&&we(E,Te,Ie,Ke)):t.texImage2D(s.TEXTURE_2D,0,He,Te.width,Te.height,0,Ie,Ke,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Se&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,He,ae[0].width,ae[0].height,Te.depth);for(let re=0,Pe=ae.length;re<Pe;re++)if(j=ae[re],E.format!==Hi)if(Ie!==null)if(Se){if(O)if(E.layerUpdates.size>0){const be=qm(j.width,j.height,E.format,E.type);for(const Me of E.layerUpdates){const je=j.data.subarray(Me*be/j.data.BYTES_PER_ELEMENT,(Me+1)*be/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Me,j.width,j.height,1,Ie,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,Te.depth,Ie,j.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,He,j.width,j.height,Te.depth,0,j.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,Te.depth,Ie,Ke,j.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,He,j.width,j.height,Te.depth,0,Ie,Ke,j.data)}else{Se&&Ce&&t.texStorage2D(s.TEXTURE_2D,_e,He,ae[0].width,ae[0].height);for(let re=0,Pe=ae.length;re<Pe;re++)j=ae[re],E.format!==Hi?Ie!==null?Se?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,j.width,j.height,Ie,j.data):t.compressedTexImage2D(s.TEXTURE_2D,re,He,j.width,j.height,0,j.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?O&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,j.width,j.height,Ie,Ke,j.data):t.texImage2D(s.TEXTURE_2D,re,He,j.width,j.height,0,Ie,Ke,j.data)}else if(E.isDataArrayTexture)if(Se){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,He,Te.width,Te.height,Te.depth),O)if(E.layerUpdates.size>0){const re=qm(Te.width,Te.height,E.format,E.type);for(const Pe of E.layerUpdates){const be=Te.data.subarray(Pe*re/Te.data.BYTES_PER_ELEMENT,(Pe+1)*re/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,Te.width,Te.height,1,Ie,Ke,be)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Ke,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,Te.width,Te.height,Te.depth,0,Ie,Ke,Te.data);else if(E.isData3DTexture)Se?(Ce&&t.texStorage3D(s.TEXTURE_3D,_e,He,Te.width,Te.height,Te.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Ke,Te.data)):t.texImage3D(s.TEXTURE_3D,0,He,Te.width,Te.height,Te.depth,0,Ie,Ke,Te.data);else if(E.isFramebufferTexture){if(Ce)if(Se)t.texStorage2D(s.TEXTURE_2D,_e,He,Te.width,Te.height);else{let re=Te.width,Pe=Te.height;for(let be=0;be<_e;be++)t.texImage2D(s.TEXTURE_2D,be,He,re,Pe,0,Ie,Ke,null),re>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Te.parentNode!==re){re.appendChild(Te),S.add(E),re.onpaint=nt=>{const dt=nt.changedElements;for(const mt of S)dt.includes(mt.image)&&(mt.needsUpdate=!0)},re.requestPaint();return}const Pe=0,be=s.RGBA,Me=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Pe,be,Me,je,Te),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ae.length>0){if(Se&&Ce){const re=ot(ae[0]);t.texStorage2D(s.TEXTURE_2D,_e,He,re.width,re.height)}for(let re=0,Pe=ae.length;re<Pe;re++)j=ae[re],Se?O&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Ie,Ke,j):t.texImage2D(s.TEXTURE_2D,re,He,Ie,Ke,j);E.generateMipmaps=!1}else if(Se){if(Ce){const re=ot(Te);t.texStorage2D(s.TEXTURE_2D,_e,He,re.width,re.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Ke,Te)}else t.texImage2D(s.TEXTURE_2D,0,He,Ie,Ke,Te);_(E)&&L(Ee),Oe.__version=Be.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function qe(U,E,ne){if(E.image.length!==6)return;const Ee=ue(U,E),Re=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const Be=r.get(Re);if(Re.version!==Be.__version||Ee===!0){t.activeTexture(s.TEXTURE0+ne);const Oe=Kt.getPrimaries(Kt.workingColorSpace),ye=E.colorSpace===Kr?null:Kt.getPrimaries(E.colorSpace),Te=E.colorSpace===Kr||Oe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,He=[];for(let Me=0;Me<6;Me++)!Ie&&!Ke?He[Me]=y(E.image[Me],!0,o.maxCubemapSize):He[Me]=Ke?E.image[Me].image:E.image[Me],He[Me]=ze(E,He[Me]);const j=He[0],ae=l.convert(E.format,E.colorSpace),Se=l.convert(E.type),Ce=N(E.internalFormat,ae,Se,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,_e=Be.__version===void 0||Ee===!0,re=Re.dataReady;let Pe=P(E,j);Ne(s.TEXTURE_CUBE_MAP,E);let be;if(Ie){O&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ce,j.width,j.height);for(let Me=0;Me<6;Me++){be=He[Me].mipmaps;for(let je=0;je<be.length;je++){const nt=be[je];E.format!==Hi?ae!==null?O?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,0,0,nt.width,nt.height,ae,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,Ce,nt.width,nt.height,0,nt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,0,0,nt.width,nt.height,ae,Se,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je,Ce,nt.width,nt.height,0,ae,Se,nt.data)}}}else{if(be=E.mipmaps,O&&_e){be.length>0&&Pe++;const Me=ot(He[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ce,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ke){O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,He[Me].width,He[Me].height,ae,Se,He[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ce,He[Me].width,He[Me].height,0,ae,Se,He[Me].data);for(let je=0;je<be.length;je++){const dt=be[je].image[Me].image;O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,0,0,dt.width,dt.height,ae,Se,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,Ce,dt.width,dt.height,0,ae,Se,dt.data)}}else{O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ae,Se,He[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ce,ae,Se,He[Me]);for(let je=0;je<be.length;je++){const nt=be[je];O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,0,0,ae,Se,nt.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je+1,Ce,ae,Se,nt.image[Me])}}}_(E)&&L(s.TEXTURE_CUBE_MAP),Be.__version=Re.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function st(U,E,ne,Ee,Re,Be){const Oe=l.convert(ne.format,ne.colorSpace),ye=l.convert(ne.type),Te=N(ne.internalFormat,Oe,ye,ne.normalized,ne.colorSpace),Ie=r.get(E),Ke=r.get(ne);if(Ke.__renderTarget=E,!Ie.__hasExternalTextures){const He=Math.max(1,E.width>>Be),j=Math.max(1,E.height>>Be);Re===s.TEXTURE_3D||Re===s.TEXTURE_2D_ARRAY?t.texImage3D(Re,Be,Te,He,j,E.depth,0,Oe,ye,null):t.texImage2D(Re,Be,Te,He,j,0,Oe,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Re,Ke.__webglTexture,0,It(E)):(Re===s.TEXTURE_2D||Re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Re,Ke.__webglTexture,Be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(U,E,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Ee=E.depthTexture,Re=Ee&&Ee.isDepthTexture?Ee.type:null,Be=z(E.stencilBuffer,Re),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(E),Be,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(E),Be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Be,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,U)}else{const Ee=E.textures;for(let Re=0;Re<Ee.length;Re++){const Be=Ee[Re],Oe=l.convert(Be.format,Be.colorSpace),ye=l.convert(Be.type),Te=N(Be.internalFormat,Oe,ye,Be.normalized,Be.colorSpace);vt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(E),Te,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(E),Te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(U,E,ne){const Ee=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=r.get(E.depthTexture);if(Re.__renderTarget=E,(!Re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Ee){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),Re.__webglTexture===void 0){Re.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=l.convert(E.depthTexture.format),Ke=l.convert(E.depthTexture.type);let He;E.depthTexture.format===wr?He=s.DEPTH_COMPONENT24:E.depthTexture.format===Es&&(He=s.DEPTH24_STENCIL8);for(let j=0;j<6;j++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,E.width,E.height,0,Ie,Ke,null)}}else Q(E.depthTexture,0);const Be=Re.__webglTexture,Oe=It(E),ye=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,Te=E.depthTexture.format===Es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===wr)vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,ye,Be,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Te,ye,Be,0);else if(E.depthTexture.format===Es)vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,ye,Be,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Te,ye,Be,0);else throw new Error("Unknown depthTexture format")}function Vt(U){const E=r.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ee){const Re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ee.removeEventListener("dispose",Re)};Ee.addEventListener("dispose",Re),E.__depthDisposeCallback=Re}E.__boundDepthTexture=Ee}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(ne)for(let Ee=0;Ee<6;Ee++)xt(E.__webglFramebuffer[Ee],U,Ee);else{const Ee=U.texture.mipmaps;Ee&&Ee.length>0?xt(E.__webglFramebuffer[0],U,0):xt(E.__webglFramebuffer,U,0)}else if(ne){E.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ee]),E.__webglDepthbuffer[Ee]===void 0)E.__webglDepthbuffer[Ee]=s.createRenderbuffer(),_t(E.__webglDepthbuffer[Ee],U,!1);else{const Re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Be),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,Be)}}else{const Ee=U.texture.mipmaps;if(Ee&&Ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),_t(E.__webglDepthbuffer,U,!1);else{const Re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Be),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,Be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(U,E,ne){const Ee=r.get(U);E!==void 0&&st(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Vt(U)}function bt(U){const E=U.texture,ne=r.get(U),Ee=r.get(E);U.addEventListener("dispose",w);const Re=U.textures,Be=U.isWebGLCubeRenderTarget===!0,Oe=Re.length>1;if(Oe||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=E.version,u.memory.textures++),Be){ne.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[ye]=[];for(let Te=0;Te<E.mipmaps.length;Te++)ne.__webglFramebuffer[ye][Te]=s.createFramebuffer()}else ne.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ne.__webglFramebuffer[ye]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let ye=0,Te=Re.length;ye<Te;ye++){const Ie=r.get(Re[ye]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&vt(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ye=0;ye<Re.length;ye++){const Te=Re[ye];ne.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[ye]);const Ie=l.convert(Te.format,Te.colorSpace),Ke=l.convert(Te.type),He=N(Te.internalFormat,Ie,Ke,Te.normalized,Te.colorSpace,U.isXRRenderTarget===!0),j=It(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,He,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,ne.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Be){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)st(ne.__webglFramebuffer[ye][Te],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else st(ne.__webglFramebuffer[ye],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(E)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ye=0,Te=Re.length;ye<Te;ye++){const Ie=Re[ye],Ke=r.get(Ie);let He=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(He=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(He,Ke.__webglTexture),Ne(He,Ie),st(ne.__webglFramebuffer,U,Ie,s.COLOR_ATTACHMENT0+ye,He,0),_(Ie)&&L(He)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ye=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ee.__webglTexture),Ne(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)st(ne.__webglFramebuffer[Te],U,E,s.COLOR_ATTACHMENT0,ye,Te);else st(ne.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ye,0);_(E)&&L(ye),t.unbindTexture()}U.depthBuffer&&Vt(U)}function Ht(U){const E=U.textures;for(let ne=0,Ee=E.length;ne<Ee;ne++){const Re=E[ne];if(_(Re)){const Be=R(U),Oe=r.get(Re).__webglTexture;t.bindTexture(Be,Oe),L(Be),t.unbindTexture()}}}const kt=[],Xt=[];function $(U){if(U.samples>0){if(vt(U)===!1){const E=U.textures,ne=U.width,Ee=U.height;let Re=s.COLOR_BUFFER_BIT;const Be=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(U),ye=E.length>1;if(ye)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Te=U.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Re|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Re|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);const Ke=r.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,ne,Ee,0,0,ne,Ee,Re,s.NEAREST),h===!0&&(kt.length=0,Xt.length=0,kt.push(s.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.resolveDepthBuffer===!1&&(kt.push(Be),Xt.push(Be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);const Ke=r.get(E[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function It(U){return Math.min(o.maxSamples,U.samples)}function vt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function ze(U,E){const ne=U.colorSpace,Ee=U.format,Re=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Jl&&ne!==Kr&&(Kt.getTransfer(ne)===rn?(Ee!==Hi||Re!==Ni)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",ne)),E}function ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=ee,this.getTextureUnits=xe,this.setTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=pe,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=jt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AE(s,e){function t(r,o=Kr){let l;const u=Kt.getTransfer(o);if(r===Ni)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===H0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===G0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===z0)return s.BYTE;if(r===V0)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===ir)return s.UNSIGNED_INT;if(r===Ji)return s.FLOAT;if(r===Er)return s.HALF_FLOAT;if(r===j0)return s.ALPHA;if(r===W0)return s.RGB;if(r===Hi)return s.RGBA;if(r===wr)return s.DEPTH_COMPONENT;if(r===Es)return s.DEPTH_STENCIL;if(r===X0)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===Ts)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===Yl||r===$l)if(u===rn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Vd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Wd||r===Xd||r===Yd||r===$d||r===Kl||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Wd)return u===rn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return l.COMPRESSED_R11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===rn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===Zl||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
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

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new tg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new rr({vertexShader:CE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends Cs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,A=null;const I=typeof XRWebGLBinding<"u",y=new NE,_={},L=t.getContextAttributes();let R=null,N=null;const z=[],P=[],k=new Ct;let w=null;const D=new Ri;D.viewport=new Sn;const W=new Ri;W.viewport=new Sn;const H=[D,W],q=new V_;let ee=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Ae=z[ue];return Ae===void 0&&(Ae=new ed,z[ue]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(ue){let Ae=z[ue];return Ae===void 0&&(Ae=new ed,z[ue]=Ae),Ae.getGripSpace()},this.getHand=function(ue){let Ae=z[ue];return Ae===void 0&&(Ae=new ed,z[ue]=Ae),Ae.getHandSpace()};function X(ue){const Ae=P.indexOf(ue.inputSource);if(Ae===-1)return;const we=z[Ae];we!==void 0&&(we.update(ue.inputSource,ue.frame,p||u),we.dispatchEvent({type:ue.type,data:ue.inputSource}))}function ie(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",K);for(let ue=0;ue<z.length;ue++){const Ae=P[ue];Ae!==null&&(P[ue]=null,z[ue].disconnect(Ae))}ee=null,xe=null,y.reset();for(const ue in _)delete _[ue];e.setRenderTarget(R),M=null,x=null,S=null,o=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,r.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){f=ue,r.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&I&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(ue){if(o=ue,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Fe=null,qe=null;L.depth&&(qe=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=L.stencil?Es:wr,Fe=L.stencil?mo:ir);const st={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(st),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new tr(x.textureWidth,x.textureHeight,{format:Hi,type:Ni,depthTexture:new va(x.textureWidth,x.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new tr(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ue){for(let Ae=0;Ae<ue.removed.length;Ae++){const we=ue.removed[Ae],Fe=P.indexOf(we);Fe>=0&&(P[Fe]=null,z[Fe].disconnect(we))}for(let Ae=0;Ae<ue.added.length;Ae++){const we=ue.added[Ae];let Fe=P.indexOf(we);if(Fe===-1){for(let st=0;st<z.length;st++)if(st>=P.length){P.push(we),Fe=st;break}else if(P[st]===null){P[st]=we,Fe=st;break}if(Fe===-1)break}const qe=z[Fe];qe&&qe.connect(we)}}const Q=new te,pe=new te;function se(ue,Ae,we){Q.setFromMatrixPosition(Ae.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Fe=Q.distanceTo(pe),qe=Ae.projectionMatrix.elements,st=we.projectionMatrix.elements,_t=qe[14]/(qe[10]-1),xt=qe[14]/(qe[10]+1),Vt=(qe[9]+1)/qe[5],jt=(qe[9]-1)/qe[5],bt=(qe[8]-1)/qe[0],Ht=(st[8]+1)/st[0],kt=_t*bt,Xt=_t*Ht,$=Fe/(-bt+Ht),It=$*-bt;if(Ae.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(It),ue.translateZ($),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),qe[10]===-1)ue.projectionMatrix.copy(Ae.projectionMatrix),ue.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const vt=_t+$,yt=xt+$,ze=kt-It,ot=Xt+(Fe-It),U=Vt*xt/yt*vt,E=jt*xt/yt*vt;ue.projectionMatrix.makePerspective(ze,ot,U,E,vt,yt),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function V(ue,Ae){Ae===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Ae.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(o===null)return;let Ae=ue.near,we=ue.far;y.texture!==null&&(y.depthNear>0&&(Ae=y.depthNear),y.depthFar>0&&(we=y.depthFar)),q.near=W.near=D.near=Ae,q.far=W.far=D.far=we,(ee!==q.near||xe!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ee=q.near,xe=q.far),q.layers.mask=ue.layers.mask|6,D.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const Fe=ue.parent,qe=q.cameras;V(q,Fe);for(let st=0;st<qe.length;st++)V(qe[st],Fe);qe.length===2?se(q,D,W):q.projectionMatrix.copy(D.projectionMatrix),oe(ue,q,Fe)};function oe(ue,Ae,we){we===null?ue.matrix.copy(Ae.matrixWorld):(ue.matrix.copy(we.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Ae.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Ae.projectionMatrix),ue.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=vf*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ue){h=ue,x!==null&&(x.fixedFoveation=ue),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ue){return _[ue]};let $e=null;function Ze(ue,Ae){if(v=Ae.getViewerPose(p||u),A=Ae,v!==null){const we=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Fe=!1;we.length!==q.cameras.length&&(q.cameras.length=0,Fe=!0);for(let xt=0;xt<we.length;xt++){const Vt=we[xt];let jt=null;if(M!==null)jt=M.getViewport(Vt);else{const Ht=S.getViewSubImage(x,Vt);jt=Ht.viewport,xt===0&&(e.setRenderTargetTextures(N,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(N))}let bt=H[xt];bt===void 0&&(bt=new Ri,bt.layers.enable(xt),bt.viewport=new Sn,H[xt]=bt),bt.matrix.fromArray(Vt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Vt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(jt.x,jt.y,jt.width,jt.height),xt===0&&(q.matrix.copy(bt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Fe===!0&&q.cameras.push(bt)}const qe=o.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&I){S=r.getBinding();const xt=S.getDepthInformation(we[0]);xt&&xt.isValid&&xt.texture&&y.init(xt,o.renderState)}if(qe&&qe.includes("camera-access")&&I){e.state.unbindTexture(),S=r.getBinding();for(let xt=0;xt<we.length;xt++){const Vt=we[xt].camera;if(Vt){let jt=_[Vt];jt||(jt=new tg,_[Vt]=jt);const bt=S.getCameraImage(Vt);jt.sourceTexture=bt}}}}for(let we=0;we<z.length;we++){const Fe=P[we],qe=z[we];Fe!==null&&qe!==void 0&&qe.update(Fe,Ae,p||u)}$e&&$e(ue,Ae),Ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ae}),A=null}const Ne=new og;Ne.setAnimationLoop(Ze),this.setAnimationLoop=function(ue){$e=ue},this.dispose=function(){}}}const IE=new Tn,pg=new Ot;pg.set(-1,0,0,0,1,0,0,0,1);function DE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,rg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,L,R,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,N)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),I(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ci&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ci&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,N=L.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(N)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(pg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ci&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function I(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const N=R.program;r.uniformBlockBinding(L,N)}function p(L,R){let N=o[L.id];N===void 0&&(A(L),N=v(L),o[L.id]=N,L.addEventListener("dispose",y));const z=R.program;r.updateUBOMapping(L,z);const P=e.render.frame;l[L.id]!==P&&(x(L),l[L.id]=P)}function v(L){const R=S();L.__bindingPointIndex=R;const N=s.createBuffer(),z=L.__size,P=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const R=o[L.id],N=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let P=0,k=N.length;P<k;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let D=0,W=w.length;D<W;D++){const H=w[D];if(M(H,P,D,z)===!0){const q=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let xe=0;for(let X=0;X<ee.length;X++){const ie=ee[X],K=I(ie);typeof ie=="number"||typeof ie=="boolean"?(H.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,q+xe,H.__data)):ie.isMatrix3?(H.__data[0]=ie.elements[0],H.__data[1]=ie.elements[1],H.__data[2]=ie.elements[2],H.__data[3]=0,H.__data[4]=ie.elements[3],H.__data[5]=ie.elements[4],H.__data[6]=ie.elements[5],H.__data[7]=0,H.__data[8]=ie.elements[6],H.__data[9]=ie.elements[7],H.__data[10]=ie.elements[8],H.__data[11]=0):ArrayBuffer.isView(ie)?H.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,H.__data.length)):(ie.toArray(H.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,N,z){const P=L.value,k=R+"_"+N;if(z[k]===void 0)return typeof P=="number"||typeof P=="boolean"?z[k]=P:ArrayBuffer.isView(P)?z[k]=P.slice():z[k]=P.clone(),!0;{const w=z[k];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return z[k]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function A(L){const R=L.uniforms;let N=0;const z=16;for(let k=0,w=R.length;k<w;k++){const D=Array.isArray(R[k])?R[k]:[R[k]];for(let W=0,H=D.length;W<H;W++){const q=D[W],ee=Array.isArray(q.value)?q.value:[q.value];for(let xe=0,X=ee.length;xe<X;xe++){const ie=ee[xe],K=I(ie),Q=N%z,pe=Q%K.boundary,se=Q+pe;N+=pe,se!==0&&z-se<K.storage&&(N+=z-se),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=K.storage}}}const P=N%z;return P>0&&(N+=z-P),L.__size=N,L.__cache={},this}function I(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(R.boundary=16,R.storage=L.byteLength):At("WebGLRenderer: Unsupported uniform value type.",L),R}function y(L){const R=L.target;R.removeEventListener("dispose",y);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const UE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function FE(){return Ki===null&&(Ki=new h_(UE,16,16,Ts,Er),Ki.name="DFG_LUT",Ki.minFilter=$n,Ki.magFilter=$n,Ki.wrapS=yr,Ki.wrapT=yr,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class OE{constructor(e={}){const{canvas:t=Gv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ni}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const I=M,y=new Set([Pf,Nf,Rf]),_=new Set([Ni,ir,po,mo,Af,Cf]),L=new Uint32Array(4),R=new Int32Array(4),N=new te;let z=null,P=null;const k=[],w=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let H=!1,q=null;this._outputColorSpace=Ci;let ee=0,xe=0,X=null,ie=-1,K=null;const Q=new Sn,pe=new Sn;let se=null;const V=new sn(0);let oe=0,$e=t.width,Ze=t.height,Ne=1,ue=null,Ae=null;const we=new Sn(0,0,$e,Ze),Fe=new Sn(0,0,$e,Ze);let qe=!1;const st=new Q0;let _t=!1,xt=!1;const Vt=new Tn,jt=new te,bt=new Sn,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Xt(){return X===null?Ne:1}let $=r;function It(C,Z){return t.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",nt,!1),$===null){const Z="webgl2";if($=It(Z,C),$===null)throw It(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Qt("WebGLRenderer: "+C.message),C}let vt,yt,ze,ot,U,E,ne,Ee,Re,Be,Oe,ye,Te,Ie,Ke,He,j,ae,Se,Ce,O,_e,re;function Pe(){vt=new F1($),vt.init(),O=new AE($,vt),yt=new C1($,vt,e,O),ze=new bE($,vt),yt.reversedDepthBuffer&&x&&ze.buffers.depth.setReversed(!0),ot=new B1($),U=new dE,E=new TE($,vt,ze,U,yt,O,ot),ne=new U1(W),Ee=new G_($),_e=new T1($,Ee),Re=new O1($,Ee,ot,_e),Be=new V1($,Re,Ee,_e,ot),ae=new z1($,yt,E),Ke=new R1(U),Oe=new uE(W,ne,vt,yt,_e,Ke),ye=new DE(W,U),Te=new hE,Ie=new _E(vt),j=new b1(W,ne,ze,Be,A,h),He=new wE(W,Be,yt),re=new LE($,ot,yt,ze),Se=new A1($,vt,ot),Ce=new k1($,vt,ot),ot.programs=Oe.programs,W.capabilities=yt,W.extensions=vt,W.properties=U,W.renderLists=Te,W.shadowMap=He,W.state=ze,W.info=ot}Pe(),I!==Ni&&(D=new G1(I,t.width,t.height,o,l));const be=new PE(W,$);this.xr=be,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(C){C!==void 0&&(Ne=C,this.setSize($e,Ze,!1))},this.getSize=function(C){return C.set($e,Ze)},this.setSize=function(C,Z,me=!0){if(be.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=C,Ze=Z,t.width=Math.floor(C*Ne),t.height=Math.floor(Z*Ne),me===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set($e*Ne,Ze*Ne).floor()},this.setDrawingBufferSize=function(C,Z,me){$e=C,Ze=Z,Ne=me,t.width=Math.floor(C*me),t.height=Math.floor(Z*me),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(I===Ni){Qt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){At("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(we)},this.setViewport=function(C,Z,me,fe){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,Z,me,fe),ze.viewport(Q.copy(we).multiplyScalar(Ne).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,Z,me,fe){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,Z,me,fe),ze.scissor(pe.copy(Fe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(C){ze.setScissorTest(qe=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){Ae=C},this.getClearColor=function(C){return C.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,me=!0){let fe=0;if(C){let de=!1;if(X!==null){const Xe=X.texture.format;de=y.has(Xe)}if(de){const Xe=X.texture.type,it=_.has(Xe),Ye=j.getClearColor(),lt=j.getClearAlpha(),ft=Ye.r,Rt=Ye.g,Nt=Ye.b;it?(L[0]=ft,L[1]=Rt,L[2]=Nt,L[3]=lt,$.clearBufferuiv($.COLOR,0,L)):(R[0]=ft,R[1]=Rt,R[2]=Nt,R[3]=lt,$.clearBufferiv($.COLOR,0,R))}else fe|=$.COLOR_BUFFER_BIT}Z&&(fe|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(fe|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&$.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),j.dispose(),Te.dispose(),Ie.dispose(),U.dispose(),ne.dispose(),Be.dispose(),_e.dispose(),re.dispose(),Oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",dn),be.removeEventListener("sessionend",on),xn.stop()};function Me(C){C.preventDefault(),Am("WebGLRenderer: Context Lost."),H=!0}function je(){Am("WebGLRenderer: Context Restored."),H=!1;const C=ot.autoReset,Z=He.enabled,me=He.autoUpdate,fe=He.needsUpdate,de=He.type;Pe(),ot.autoReset=C,He.enabled=Z,He.autoUpdate=me,He.needsUpdate=fe,He.type=de}function nt(C){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const Z=C.target;Z.removeEventListener("dispose",dt),mt(Z)}function mt(C){Bt(C),U.remove(C)}function Bt(C){const Z=U.get(C).programs;Z!==void 0&&(Z.forEach(function(me){Oe.releaseProgram(me)}),C.isShaderMaterial&&Oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,me,fe,de,Xe){Z===null&&(Z=Ht);const it=de.isMesh&&de.matrixWorld.determinant()<0,Ye=es(C,Z,me,fe,de);ze.setMaterial(fe,it);let lt=me.index,ft=1;if(fe.wireframe===!0){if(lt=Re.getWireframeAttribute(me),lt===void 0)return;ft=2}const Rt=me.drawRange,Nt=me.attributes.position;let ct=Rt.start*ft,b=(Rt.start+Rt.count)*ft;Xe!==null&&(ct=Math.max(ct,Xe.start*ft),b=Math.min(b,(Xe.start+Xe.count)*ft)),lt!==null?(ct=Math.max(ct,0),b=Math.min(b,lt.count)):Nt!=null&&(ct=Math.max(ct,0),b=Math.min(b,Nt.count));const G=b-ct;if(G<0||G===1/0)return;_e.setup(de,fe,Ye,me,lt);let F,le=Se;if(lt!==null&&(F=Ee.get(lt),le=Ce,le.setIndex(F)),de.isMesh)fe.wireframe===!0?(ze.setLineWidth(fe.wireframeLinewidth*Xt()),le.setMode($.LINES)):le.setMode($.TRIANGLES);else if(de.isLine){let Le=fe.linewidth;Le===void 0&&(Le=1),ze.setLineWidth(Le*Xt()),de.isLineSegments?le.setMode($.LINES):de.isLineLoop?le.setMode($.LINE_LOOP):le.setMode($.LINE_STRIP)}else de.isPoints?le.setMode($.POINTS):de.isSprite&&le.setMode($.TRIANGLES);if(de.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))le.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const Le=de._multiDrawStarts,ge=de._multiDrawCounts,Ge=de._multiDrawCount,Je=lt?Ee.get(lt).bytesPerElement:1,Yt=U.get(fe).currentProgram.getUniforms();for(let St=0;St<Ge;St++)Yt.setValue($,"_gl_DrawID",St),le.render(Le[St]/Je,ge[St])}else if(de.isInstancedMesh)le.renderInstances(ct,G,de.count);else if(me.isInstancedBufferGeometry){const Le=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,ge=Math.min(me.instanceCount,Le);le.renderInstances(ct,G,ge)}else le.render(ct,G)};function et(C,Z,me){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,ei(C,Z,me),C.side=Qr,C.needsUpdate=!0,ei(C,Z,me),C.side=_r):ei(C,Z,me)}this.compile=function(C,Z,me=null){me===null&&(me=C),P=Ie.get(me),P.init(Z),w.push(P),me.traverseVisible(function(de){de.isLight&&de.layers.test(Z.layers)&&(P.pushLight(de),de.castShadow&&P.pushShadow(de))}),C!==me&&C.traverseVisible(function(de){de.isLight&&de.layers.test(Z.layers)&&(P.pushLight(de),de.castShadow&&P.pushShadow(de))}),P.setupLights();const fe=new Set;return C.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Xe=de.material;if(Xe)if(Array.isArray(Xe))for(let it=0;it<Xe.length;it++){const Ye=Xe[it];et(Ye,me,de),fe.add(Ye)}else et(Xe,me,de),fe.add(Xe)}),P=w.pop(),fe},this.compileAsync=function(C,Z,me=null){const fe=this.compile(C,Z,me);return new Promise(de=>{function Xe(){if(fe.forEach(function(it){U.get(it).currentProgram.isReady()&&fe.delete(it)}),fe.size===0){de(C);return}setTimeout(Xe,10)}vt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Dt=null;function Zt(C){Dt&&Dt(C)}function dn(){xn.stop()}function on(){xn.start()}const xn=new og;xn.setAnimationLoop(Zt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(C){Dt=C,be.setAnimationLoop(C),C===null?xn.stop():xn.start()},be.addEventListener("sessionstart",dn),be.addEventListener("sessionend",on),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;q!==null&&q.renderStart(C,Z);const me=be.enabled===!0&&be.isPresenting===!0,fe=D!==null&&(X===null||me)&&D.begin(W,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Z),Z=be.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,Z,X),P=Ie.get(C,w.length),P.init(Z),P.state.textureUnits=E.getTextureUnits(),w.push(P),Vt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),st.setFromProjectionMatrix(Vt,Qi,Z.reversedDepth),xt=this.localClippingEnabled,_t=Ke.init(this.clippingPlanes,xt),z=Te.get(C,k.length),z.init(),k.push(z),be.enabled===!0&&be.isPresenting===!0){const it=W.xr.getDepthSensingMesh();it!==null&&ln(it,Z,-1/0,W.sortObjects)}ln(C,Z,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(ue,Ae),kt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,kt&&j.addToRenderList(z,C),this.info.render.frame++,_t===!0&&Ke.beginShadows();const de=P.state.shadowsArray;if(He.render(de,C,Z),_t===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&D.hasRenderPass())===!1){const it=z.opaque,Ye=z.transmissive;if(P.setupLights(),Z.isArrayCamera){const lt=Z.cameras;if(Ye.length>0)for(let ft=0,Rt=lt.length;ft<Rt;ft++){const Nt=lt[ft];En(it,Ye,C,Nt)}kt&&j.render(C);for(let ft=0,Rt=lt.length;ft<Rt;ft++){const Nt=lt[ft];zn(z,C,Nt,Nt.viewport)}}else Ye.length>0&&En(it,Ye,C,Z),kt&&j.render(C),zn(z,C,Z)}X!==null&&xe===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),fe&&D.end(W),C.isScene===!0&&C.onAfterRender(W,C,Z),_e.resetDefaultState(),ie=-1,K=null,w.pop(),w.length>0?(P=w[w.length-1],E.setTextureUnits(P.state.textureUnits),_t===!0&&Ke.setGlobalState(W.clippingPlanes,P.state.camera)):P=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,q!==null&&q.renderEnd()};function ln(C,Z,me,fe){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)me=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){fe&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Vt);const it=Be.update(C),Ye=C.material;Ye.visible&&z.push(C,it,Ye,me,bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const it=Be.update(C),Ye=C.material;if(fe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),bt.copy(it.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ye)){const lt=it.groups;for(let ft=0,Rt=lt.length;ft<Rt;ft++){const Nt=lt[ft],ct=Ye[Nt.materialIndex];ct&&ct.visible&&z.push(C,it,ct,me,bt.z,Nt)}}else Ye.visible&&z.push(C,it,Ye,me,bt.z,null)}}const Xe=C.children;for(let it=0,Ye=Xe.length;it<Ye;it++)ln(Xe[it],Z,me,fe)}function zn(C,Z,me,fe){const{opaque:de,transmissive:Xe,transparent:it}=C;P.setupLightsView(me),_t===!0&&Ke.setGlobalState(W.clippingPlanes,me),fe&&ze.viewport(Q.copy(fe)),de.length>0&&pn(de,Z,me),Xe.length>0&&pn(Xe,Z,me),it.length>0&&pn(it,Z,me),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function En(C,Z,me,fe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[fe.id]===void 0){const ct=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[fe.id]=new tr(1,1,{generateMipmaps:!0,type:ct?Er:Ni,minFilter:Ms,samples:Math.max(4,yt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const Xe=P.state.transmissionRenderTarget[fe.id],it=fe.viewport||Q;Xe.setSize(it.z*W.transmissionResolutionScale,it.w*W.transmissionResolutionScale);const Ye=W.getRenderTarget(),lt=W.getActiveCubeFace(),ft=W.getActiveMipmapLevel();W.setRenderTarget(Xe),W.getClearColor(V),oe=W.getClearAlpha(),oe<1&&W.setClearColor(16777215,.5),W.clear(),kt&&j.render(me);const Rt=W.toneMapping;W.toneMapping=er;const Nt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),P.setupLightsView(fe),_t===!0&&Ke.setGlobalState(W.clippingPlanes,fe),pn(C,me,fe),E.updateMultisampleRenderTarget(Xe),E.updateRenderTargetMipmap(Xe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let b=0,G=Z.length;b<G;b++){const F=Z[b],{object:le,geometry:Le,material:ge,group:Ge}=F;if(ge.side===_r&&le.layers.test(fe.layers)){const Je=ge.side;ge.side=ci,ge.needsUpdate=!0,Fn(le,me,fe,Le,ge,Ge),ge.side=Je,ge.needsUpdate=!0,ct=!0}}ct===!0&&(E.updateMultisampleRenderTarget(Xe),E.updateRenderTargetMipmap(Xe))}W.setRenderTarget(Ye,lt,ft),W.setClearColor(V,oe),Nt!==void 0&&(fe.viewport=Nt),W.toneMapping=Rt}function pn(C,Z,me){const fe=Z.isScene===!0?Z.overrideMaterial:null;for(let de=0,Xe=C.length;de<Xe;de++){const it=C[de],{object:Ye,geometry:lt,group:ft}=it;let Rt=it.material;Rt.allowOverride===!0&&fe!==null&&(Rt=fe),Ye.layers.test(me.layers)&&Fn(Ye,Z,me,lt,Rt,ft)}}function Fn(C,Z,me,fe,de,Xe){C.onBeforeRender(W,Z,me,fe,de,Xe),C.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),de.onBeforeRender(W,Z,me,fe,C,Xe),de.transparent===!0&&de.side===_r&&de.forceSinglePass===!1?(de.side=ci,de.needsUpdate=!0,W.renderBufferDirect(me,Z,fe,de,C,Xe),de.side=Qr,de.needsUpdate=!0,W.renderBufferDirect(me,Z,fe,de,C,Xe),de.side=_r):W.renderBufferDirect(me,Z,fe,de,C,Xe),C.onAfterRender(W,Z,me,fe,de,Xe)}function ei(C,Z,me){Z.isScene!==!0&&(Z=Ht);const fe=U.get(C),de=P.state.lights,Xe=P.state.shadowsArray,it=de.state.version,Ye=Oe.getParameters(C,de.state,Xe,Z,me,P.state.lightProbeGridArray),lt=Oe.getProgramCacheKey(Ye);let ft=fe.programs;fe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,fe.fog=Z.fog;const Rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;fe.envMap=ne.get(C.envMap||fe.environment,Rt),fe.envMapRotation=fe.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ft===void 0&&(C.addEventListener("dispose",dt),ft=new Map,fe.programs=ft);let Nt=ft.get(lt);if(Nt!==void 0){if(fe.currentProgram===Nt&&fe.lightsStateVersion===it)return Vn(C,Ye),Nt}else Ye.uniforms=Oe.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,me,Ye),C.onBeforeCompile(Ye,W),Nt=Oe.acquireProgram(Ye,lt),ft.set(lt,Nt),fe.uniforms=Ye.uniforms;const ct=fe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ct.clippingPlanes=Ke.uniform),Vn(C,Ye),fe.needsLights=nn(C),fe.lightsStateVersion=it,fe.needsLights&&(ct.ambientLightColor.value=de.state.ambient,ct.lightProbe.value=de.state.probe,ct.directionalLights.value=de.state.directional,ct.directionalLightShadows.value=de.state.directionalShadow,ct.spotLights.value=de.state.spot,ct.spotLightShadows.value=de.state.spotShadow,ct.rectAreaLights.value=de.state.rectArea,ct.ltc_1.value=de.state.rectAreaLTC1,ct.ltc_2.value=de.state.rectAreaLTC2,ct.pointLights.value=de.state.point,ct.pointLightShadows.value=de.state.pointShadow,ct.hemisphereLights.value=de.state.hemi,ct.directionalShadowMatrix.value=de.state.directionalShadowMatrix,ct.spotLightMatrix.value=de.state.spotLightMatrix,ct.spotLightMap.value=de.state.spotLightMap,ct.pointShadowMatrix.value=de.state.pointShadowMatrix),fe.lightProbeGrid=P.state.lightProbeGridArray.length>0,fe.currentProgram=Nt,fe.uniformsList=null,Nt}function vi(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=ql.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Vn(C,Z){const me=U.get(C);me.outputColorSpace=Z.outputColorSpace,me.batching=Z.batching,me.batchingColor=Z.batchingColor,me.instancing=Z.instancing,me.instancingColor=Z.instancingColor,me.instancingMorph=Z.instancingMorph,me.skinning=Z.skinning,me.morphTargets=Z.morphTargets,me.morphNormals=Z.morphNormals,me.morphColors=Z.morphColors,me.morphTargetsCount=Z.morphTargetsCount,me.numClippingPlanes=Z.numClippingPlanes,me.numIntersection=Z.numClipIntersection,me.vertexAlphas=Z.vertexAlphas,me.vertexTangents=Z.vertexTangents,me.toneMapping=Z.toneMapping}function Rs(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(Z.matrixWorld);for(let me=0,fe=C.length;me<fe;me++){const de=C[me];if(de.texture!==null&&de.boundingBox.containsPoint(N))return de}return null}function es(C,Z,me,fe,de){Z.isScene!==!0&&(Z=Ht),E.resetTextureUnits();const Xe=Z.fog,it=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?Z.environment:null,Ye=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Kt.workingColorSpace,lt=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,ft=ne.get(fe.envMap||it,lt),Rt=fe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,Nt=!!me.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),ct=!!me.morphAttributes.position,b=!!me.morphAttributes.normal,G=!!me.morphAttributes.color;let F=er;fe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(F=W.toneMapping);const le=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Le=le!==void 0?le.length:0,ge=U.get(fe),Ge=P.state.lights;if(_t===!0&&(xt===!0||C!==K)){const Tt=C===K&&fe.id===ie;Ke.setState(fe,C,Tt)}let Je=!1;fe.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ge.state.version||ge.outputColorSpace!==Ye||de.isBatchedMesh&&ge.batching===!1||!de.isBatchedMesh&&ge.batching===!0||de.isBatchedMesh&&ge.batchingColor===!0&&de.colorTexture===null||de.isBatchedMesh&&ge.batchingColor===!1&&de.colorTexture!==null||de.isInstancedMesh&&ge.instancing===!1||!de.isInstancedMesh&&ge.instancing===!0||de.isSkinnedMesh&&ge.skinning===!1||!de.isSkinnedMesh&&ge.skinning===!0||de.isInstancedMesh&&ge.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&ge.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&ge.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&ge.instancingMorph===!1&&de.morphTexture!==null||ge.envMap!==ft||fe.fog===!0&&ge.fog!==Xe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ke.numPlanes||ge.numIntersection!==Ke.numIntersection)||ge.vertexAlphas!==Rt||ge.vertexTangents!==Nt||ge.morphTargets!==ct||ge.morphNormals!==b||ge.morphColors!==G||ge.toneMapping!==F||ge.morphTargetsCount!==Le||!!ge.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ge.__version=fe.version);let Yt=ge.currentProgram;Je===!0&&(Yt=ei(fe,Z,de),q&&fe.isNodeMaterial&&q.onUpdateProgram(fe,Yt,ge));let St=!1,ht=!1,Lt=!1;const Mt=Yt.getUniforms(),Ut=ge.uniforms;if(ze.useProgram(Yt.program)&&(St=!0,ht=!0,Lt=!0),fe.id!==ie&&(ie=fe.id,ht=!0),ge.needsLights){const Tt=Rs(P.state.lightProbeGridArray,de);ge.lightProbeGrid!==Tt&&(ge.lightProbeGrid=Tt,ht=!0)}if(St||K!==C){ze.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue($,"projectionMatrix",C.projectionMatrix),Mt.setValue($,"viewMatrix",C.matrixWorldInverse);const An=Mt.map.cameraPosition;An!==void 0&&An.setValue($,jt.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&Mt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Mt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,ht=!0,Lt=!0)}if(ge.needsLights&&(Ge.state.directionalShadowMap.length>0&&Mt.setValue($,"directionalShadowMap",Ge.state.directionalShadowMap,E),Ge.state.spotShadowMap.length>0&&Mt.setValue($,"spotShadowMap",Ge.state.spotShadowMap,E),Ge.state.pointShadowMap.length>0&&Mt.setValue($,"pointShadowMap",Ge.state.pointShadowMap,E)),de.isSkinnedMesh){Mt.setOptional($,de,"bindMatrix"),Mt.setOptional($,de,"bindMatrixInverse");const Tt=de.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue($,"boneTexture",Tt.boneTexture,E))}de.isBatchedMesh&&(Mt.setOptional($,de,"batchingTexture"),Mt.setValue($,"batchingTexture",de._matricesTexture,E),Mt.setOptional($,de,"batchingIdTexture"),Mt.setValue($,"batchingIdTexture",de._indirectTexture,E),Mt.setOptional($,de,"batchingColorTexture"),de._colorsTexture!==null&&Mt.setValue($,"batchingColorTexture",de._colorsTexture,E));const fn=me.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ae.update(de,me,Yt),(ht||ge.receiveShadow!==de.receiveShadow)&&(ge.receiveShadow=de.receiveShadow,Mt.setValue($,"receiveShadow",de.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&Z.environment!==null&&(Ut.envMapIntensity.value=Z.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=FE()),ht){if(Mt.setValue($,"toneMappingExposure",W.toneMappingExposure),ge.needsLights&&Gi(Ut,Lt),Xe&&fe.fog===!0&&ye.refreshFogUniforms(Ut,Xe),ye.refreshMaterialUniforms(Ut,fe,Ne,Ze,P.state.transmissionRenderTarget[C.id]),ge.needsLights&&ge.lightProbeGrid){const Tt=ge.lightProbeGrid;Ut.probesSH.value=Tt.texture,Ut.probesMin.value.copy(Tt.boundingBox.min),Ut.probesMax.value.copy(Tt.boundingBox.max),Ut.probesResolution.value.copy(Tt.resolution)}ql.upload($,vi(ge),Ut,E)}if(fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(ql.upload($,vi(ge),Ut,E),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Mt.setValue($,"center",de.center),Mt.setValue($,"modelViewMatrix",de.modelViewMatrix),Mt.setValue($,"normalMatrix",de.normalMatrix),Mt.setValue($,"modelMatrix",de.matrixWorld),fe.uniformsGroups!==void 0){const Tt=fe.uniformsGroups;for(let An=0,tt=Tt.length;An<tt;An++){const Ft=Tt[An];re.update(Ft,Yt),re.bind(Ft,Yt)}}return Yt}function Gi(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function nn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return xe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Z,me){const fe=U.get(C);fe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),U.get(C.texture).__webglTexture=Z,U.get(C.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:me,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const me=U.get(C);me.__webglFramebuffer=Z,me.__useDefaultFramebuffer=Z===void 0};const qt=$.createFramebuffer();this.setRenderTarget=function(C,Z=0,me=0){X=C,ee=Z,xe=me;let fe=null,de=!1,Xe=!1;if(C){const Ye=U.get(C);if(Ye.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer($.FRAMEBUFFER,Ye.__webglFramebuffer),Q.copy(C.viewport),pe.copy(C.scissor),se=C.scissorTest,ze.viewport(Q),ze.scissor(pe),ze.setScissorTest(se),ie=-1;return}else if(Ye.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Ye.__hasExternalTextures)E.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Rt=C.depthTexture;if(Ye.__boundDepthTexture!==Rt){if(Rt!==null&&U.has(Rt)&&(C.width!==Rt.image.width||C.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Xe=!0);const ft=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ft[Z])?fe=ft[Z][me]:fe=ft[Z],de=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?fe=U.get(C).__webglMultisampledFramebuffer:Array.isArray(ft)?fe=ft[me]:fe=ft,Q.copy(C.viewport),pe.copy(C.scissor),se=C.scissorTest}else Q.copy(we).multiplyScalar(Ne).floor(),pe.copy(Fe).multiplyScalar(Ne).floor(),se=qe;if(me!==0&&(fe=qt),ze.bindFramebuffer($.FRAMEBUFFER,fe)&&ze.drawBuffers(C,fe),ze.viewport(Q),ze.scissor(pe),ze.setScissorTest(se),de){const Ye=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ye.__webglTexture,me)}else if(Xe){const Ye=Z;for(let lt=0;lt<C.textures.length;lt++){const ft=U.get(C.textures[lt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+lt,ft.__webglTexture,me,Ye)}}else if(C!==null&&me!==0){const Ye=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ye.__webglTexture,me)}ie=-1},this.readRenderTargetPixels=function(C,Z,me,fe,de,Xe,it,Ye=0){if(!(C&&C.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(lt=lt[it]),lt){ze.bindFramebuffer($.FRAMEBUFFER,lt);try{const ft=C.textures[Ye],Rt=ft.format,Nt=ft.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ye),!yt.textureFormatReadable(Rt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Nt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-fe&&me>=0&&me<=C.height-de&&$.readPixels(Z,me,fe,de,O.convert(Rt),O.convert(Nt),Xe)}finally{const ft=X!==null?U.get(X).__webglFramebuffer:null;ze.bindFramebuffer($.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(C,Z,me,fe,de,Xe,it,Ye=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(lt=lt[it]),lt)if(Z>=0&&Z<=C.width-fe&&me>=0&&me<=C.height-de){ze.bindFramebuffer($.FRAMEBUFFER,lt);const ft=C.textures[Ye],Rt=ft.format,Nt=ft.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ye),!yt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ct),$.bufferData($.PIXEL_PACK_BUFFER,Xe.byteLength,$.STREAM_READ),$.readPixels(Z,me,fe,de,O.convert(Rt),O.convert(Nt),0);const b=X!==null?U.get(X).__webglFramebuffer:null;ze.bindFramebuffer($.FRAMEBUFFER,b);const G=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await jv($,G,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ct),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Xe),$.deleteBuffer(ct),$.deleteSync(G),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,me=0){const fe=Math.pow(2,-me),de=Math.floor(C.image.width*fe),Xe=Math.floor(C.image.height*fe),it=Z!==null?Z.x:0,Ye=Z!==null?Z.y:0;E.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,it,Ye,de,Xe),ze.unbindTexture()};const ts=$.createFramebuffer(),sr=$.createFramebuffer();this.copyTextureToTexture=function(C,Z,me=null,fe=null,de=0,Xe=0){let it,Ye,lt,ft,Rt,Nt,ct,b,G;const F=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(me!==null)it=me.max.x-me.min.x,Ye=me.max.y-me.min.y,lt=me.isBox3?me.max.z-me.min.z:1,ft=me.min.x,Rt=me.min.y,Nt=me.isBox3?me.min.z:0;else{const Ut=Math.pow(2,-de);it=Math.floor(F.width*Ut),Ye=Math.floor(F.height*Ut),C.isDataArrayTexture?lt=F.depth:C.isData3DTexture?lt=Math.floor(F.depth*Ut):lt=1,ft=0,Rt=0,Nt=0}fe!==null?(ct=fe.x,b=fe.y,G=fe.z):(ct=0,b=0,G=0);const le=O.convert(Z.format),Le=O.convert(Z.type);let ge;Z.isData3DTexture?(E.setTexture3D(Z,0),ge=$.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(E.setTexture2DArray(Z,0),ge=$.TEXTURE_2D_ARRAY):(E.setTexture2D(Z,0),ge=$.TEXTURE_2D),ze.activeTexture($.TEXTURE0),ze.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),ze.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),ze.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ge=ze.getParameter($.UNPACK_ROW_LENGTH),Je=ze.getParameter($.UNPACK_IMAGE_HEIGHT),Yt=ze.getParameter($.UNPACK_SKIP_PIXELS),St=ze.getParameter($.UNPACK_SKIP_ROWS),ht=ze.getParameter($.UNPACK_SKIP_IMAGES);ze.pixelStorei($.UNPACK_ROW_LENGTH,F.width),ze.pixelStorei($.UNPACK_IMAGE_HEIGHT,F.height),ze.pixelStorei($.UNPACK_SKIP_PIXELS,ft),ze.pixelStorei($.UNPACK_SKIP_ROWS,Rt),ze.pixelStorei($.UNPACK_SKIP_IMAGES,Nt);const Lt=C.isDataArrayTexture||C.isData3DTexture,Mt=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Ut=U.get(C),fn=U.get(Z),Tt=U.get(Ut.__renderTarget),An=U.get(fn.__renderTarget);ze.bindFramebuffer($.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let tt=0;tt<lt;tt++)Lt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(C).__webglTexture,de,Nt+tt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(Z).__webglTexture,Xe,G+tt)),$.blitFramebuffer(ft,Rt,it,Ye,ct,b,it,Ye,$.DEPTH_BUFFER_BIT,$.NEAREST);ze.bindFramebuffer($.READ_FRAMEBUFFER,null),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(de!==0||C.isRenderTargetTexture||U.has(C)){const Ut=U.get(C),fn=U.get(Z);ze.bindFramebuffer($.READ_FRAMEBUFFER,ts),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,sr);for(let Tt=0;Tt<lt;Tt++)Lt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ut.__webglTexture,de,Nt+Tt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ut.__webglTexture,de),Mt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,fn.__webglTexture,Xe,G+Tt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,fn.__webglTexture,Xe),de!==0?$.blitFramebuffer(ft,Rt,it,Ye,ct,b,it,Ye,$.COLOR_BUFFER_BIT,$.NEAREST):Mt?$.copyTexSubImage3D(ge,Xe,ct,b,G+Tt,ft,Rt,it,Ye):$.copyTexSubImage2D(ge,Xe,ct,b,ft,Rt,it,Ye);ze.bindFramebuffer($.READ_FRAMEBUFFER,null),ze.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Mt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(ge,Xe,ct,b,G,it,Ye,lt,le,Le,F.data):Z.isCompressedArrayTexture?$.compressedTexSubImage3D(ge,Xe,ct,b,G,it,Ye,lt,le,F.data):$.texSubImage3D(ge,Xe,ct,b,G,it,Ye,lt,le,Le,F):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Xe,ct,b,it,Ye,le,Le,F.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Xe,ct,b,F.width,F.height,le,F.data):$.texSubImage2D($.TEXTURE_2D,Xe,ct,b,it,Ye,le,Le,F);ze.pixelStorei($.UNPACK_ROW_LENGTH,Ge),ze.pixelStorei($.UNPACK_IMAGE_HEIGHT,Je),ze.pixelStorei($.UNPACK_SKIP_PIXELS,Yt),ze.pixelStorei($.UNPACK_SKIP_ROWS,St),ze.pixelStorei($.UNPACK_SKIP_IMAGES,ht),Xe===0&&Z.generateMipmaps&&$.generateMipmap(ge),ze.unbindTexture()},this.initRenderTarget=function(C){U.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),ze.unbindTexture()},this.resetState=function(){ee=0,xe=0,X=null,ze.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Kt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=De.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>De.createElement("svg",{ref:h,...BE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:mg("lucide",o),...f},[...u.map(([p,v])=>De.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(s,e)=>{const t=De.forwardRef(({className:r,...o},l)=>De.createElement(zE,{ref:l,iconNode:e,className:mg(`lucide-${kE(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=zt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=zt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=zt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=zt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=zt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=zt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=zt("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=zt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=zt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=zt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=zt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=zt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=zt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=zt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=zt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=zt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=zt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=zt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=zt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=zt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=zt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=zt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=zt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=zt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=zt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=zt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=zt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=zt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=zt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=zt("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=zt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=zt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=zt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=zt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=zt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=zt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=zt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=zt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=zt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),b0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},ow=({direction:s,className:e})=>{const r={none:E0,up:$E,down:GE,left:jE,right:WE,"up-left":XE,"up-right":YE,"down-left":VE,"down-right":HE}[s]||E0;return g.jsx(r,{className:e})},Ti=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},qr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ai=s=>JSON.parse(JSON.stringify(s)),T0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new kf(s),l=new zf(o,Math.max(8,s.length*12),e,12,!1),u=new Jr({color:t,transparent:r<1,opacity:r});return new Qn(l,u)},A0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},C0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),lw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),cw=s=>{if(!s||s.length<2)return null;const e=new kf(s),t=Math.max(lw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new ws;for(let u=0;u<r;u++){const f=new ws,h=new Qn(new nc(.14,.34,24),new Jr({color:16777215,transparent:!0,opacity:.22})),p=new Qn(new nc(.09,.28,24),new Jr({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},uw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new te(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},ha=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],dw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:ha(s),buildings:co()}),Hl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...ha(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function fw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var ft,Rt,Nt,ct;const[r,o]=De.useState(e),[l,u]=De.useState(!1),[f,h]=De.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=De.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=De.useState({isOpen:!1,message:""}),[M,A]=De.useState(!1),[I,y]=De.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=De.useRef(!1),[L,R]=De.useState(()=>{if(t)return[Hl({})];try{const F=localStorage.getItem("arManager_projects");if(F){const le=JSON.parse(F);if(Array.isArray(le)&&le.length>0)return le}}catch(F){console.error("Project load error:",F)}let b=ha("預設導引專案"),G=co();try{const F=localStorage.getItem("arManager_config");F&&(b={...b,...JSON.parse(F)});const le=localStorage.getItem("arManager_buildings");le&&(G=JSON.parse(le))}catch(F){console.error("Legacy AR data migration error:",F)}return[{id:`project_${Date.now()}`,name:b.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:b,buildings:G}]}),[N,z]=De.useState((ft=L[0])==null?void 0:ft.id),P=L.find(b=>b.id===N)||L[0],[k,w]=De.useState(()=>Ai((P==null?void 0:P.systemConfig)||ha())),[D,W]=De.useState(()=>Ai((P==null?void 0:P.buildings)||co())),[H,q]=De.useState((Rt=D[0])==null?void 0:Rt.id),[ee,xe]=De.useState((ct=(Nt=D[0])==null?void 0:Nt.floors[0])==null?void 0:ct.id),[X,ie]=De.useState(""),[K,Q]=De.useState(null),[pe,se]=De.useState(null),[V,oe]=De.useState(null),[$e,Ze]=De.useState(!1),[Ne,ue]=De.useState(!1),[Ae,we]=De.useState(!1),[Fe,qe]=De.useState(null),[st,_t]=De.useState(null),[xt,Vt]=De.useState(!1),[jt,bt]=De.useState({x:0,y:0}),[Ht,kt]=De.useState({x:0,y:0}),[Xt,$]=De.useState(!1),[It,vt]=De.useState(!1),[yt,ze]=De.useState([]),[ot,U]=De.useState(!1),[E,ne]=De.useState([]),[Ee,Re]=De.useState([]),Be=De.useRef(null),Oe=De.useRef(null),ye=De.useRef(null),Te=De.useRef(null),[Ie,Ke]=De.useState({x:0,y:0,scale:1});De.useEffect(()=>{const b=G=>{var le;const F=(le=G==null?void 0:G.detail)==null?void 0:le.tab;["map","list","settings","export"].includes(F)&&Gi(F)};return window.addEventListener("ar-manager:set-tab",b),()=>window.removeEventListener("ar-manager:set-tab",b)},[]),De.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(L))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[L,t]),De.useEffect(()=>{if(!t)return;let b=!1;return(async()=>{const F=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(F.ok)return F.json();const le=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!le.ok)throw new Error(`Unable to load AR data: ${le.status}`);return le.json()})().then(F=>{var Le,ge,Ge;if(b)return;const le=Hl(F);R([le]),z(le.id),w(Ai(le.systemConfig)),W(Ai(le.buildings)),q((Le=le.buildings[0])==null?void 0:Le.id),xe((Ge=(ge=le.buildings[0])==null?void 0:ge.floors[0])==null?void 0:Ge.id)}).catch(F=>{console.warn("Published AR data unavailable",F),b||(R([Hl({})]),w(ha("AR導覽")),W([]))}),()=>{b=!0}},[t]),De.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let b=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(G=>{if(!G.ok)throw new Error(`Unable to load AR data: ${G.status}`);return G.json()}).then(G=>{var le,Le,ge;if(b||!Array.isArray(G==null?void 0:G.buildings)||G.buildings.length===0)return;const F=Hl(G);R([F]),z(F.id),w(Ai(F.systemConfig)),W(Ai(F.buildings)),q((le=F.buildings[0])==null?void 0:le.id),xe((ge=(Le=F.buildings[0])==null?void 0:Le.floors[0])==null?void 0:ge.id)}).catch(G=>console.warn("Published AR admin seed unavailable",G)),()=>{b=!0}},[t]),De.useEffect(()=>{var G,F,le;if(t||!P)return;_.current=!0;const b=Ai(P.buildings||co());w(Ai(P.systemConfig||ha(P.name))),W(b),q((G=b[0])==null?void 0:G.id),xe((le=(F=b[0])==null?void 0:F.floors[0])==null?void 0:le.id),Q(null),se(null),ie(""),Ke({x:0,y:0,scale:1})},[N,t]),De.useEffect(()=>{if(!t&&N){if(_.current){_.current=!1;return}R(b=>b.map(G=>G.id===N?{...G,name:k.projectName||G.name,systemConfig:Ai(k),buildings:Ai(D),updatedAt:new Date().toISOString()}:G))}},[N,D,k,t]),De.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(D))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[D,t]),De.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(k))}catch(b){console.error("Config save error:",b)}},[k,t]),De.useEffect(()=>{var G;const b=D.find(F=>F.id===H);b?b.floors.find(F=>F.id===ee)||b.floors.length>0&&xe(b.floors[0].id):D.length>0&&(q(D[0].id),xe((G=D[0].floors[0])==null?void 0:G.id))},[D,H,ee]),De.useEffect(()=>{X===ee&&ie("")},[ee,X]),De.useEffect(()=>{Ze(!1)},[K,pe]),De.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||A(!0)},[]);const He=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(G=>G.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),A(!1)},j=D.find(b=>b.id===H)||D[0],ae=j==null?void 0:j.floors.find(b=>b.id===ee),Se=(ae==null?void 0:ae.markers)||[],Ce=(ae==null?void 0:ae.waypoints)||[],O=(ae==null?void 0:ae.edges)||[],_e=qr(ae),re=(b,G,F=!0)=>{W(le=>{let Le=null,ge=null,Ge=null;if(le.forEach(Lt=>Lt.floors.forEach(Mt=>{const Ut=F?Mt.markers:Mt.waypoints,fn=Ut==null?void 0:Ut.find(Tt=>Tt.id===b);fn&&(Le=fn,ge=Lt.id,Ge=Mt)})),!Le)return le;const Je=G.shaftId!==void 0?G.shaftId:Le.shaftId,St=(G.isVerticalShaft!==void 0?G.isVerticalShaft:Le.isVerticalShaft)&&Je,ht=qr(Ge);return le.map(Lt=>Lt.id!==ge&&!St?Lt:{...Lt,floors:Lt.floors.map(Mt=>{let Ut=F?[...Mt.markers||[]]:[...Mt.waypoints||[]];const fn=Tt=>{const An={...Tt,...G};if((G.x!==void 0||G.y!==void 0)&&Mt.id!==Ge.id){const tt=qr(Mt);if(G.x!==void 0){const Ft=ht.blX+G.x*(ht.trX-ht.blX);An.x=tt.trX!==tt.blX?(Ft-tt.blX)/(tt.trX-tt.blX):.5}if(G.y!==void 0){const Ft=ht.trY-G.y*(ht.trY-ht.blY);An.y=tt.trY!==tt.blY?(tt.trY-Ft)/(tt.trY-tt.blY):.5}}return An};return St?Ut=Ut.map(Tt=>Tt.shaftId===Je||Tt.id===b?fn(Tt):Tt):Ut=Ut.map(Tt=>Tt.id===b?fn(Tt):Tt),F?{...Mt,markers:Ut}:{...Mt,waypoints:Ut}})})})},Pe=(b,G,F)=>re(b,{[G]:F},!0),be=(b,G,F)=>re(b,{[G]:F},!1),Me=(b,G,F=!0)=>{if(G){const le=F?"shaft_m_":"shaft_wp_",ge={isVerticalShaft:!0,shaftId:b.shaftId||`${le}${Date.now()}`,linkedFloorIds:[ee]};F||(ge.sourceFloorId=ee),re(b.id,ge,F)}else{const le=b.shaftId;W(Le=>Le.map(ge=>ge.id!==H?ge:{...ge,floors:ge.floors.map(Ge=>{const Je=Yt=>(Yt||[]).filter(St=>!(Ge.id!==ee&&St.shaftId===le)).map(St=>St.id===b.id?{...St,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:St);return F?{...Ge,markers:Je(Ge.markers)}:{...Ge,waypoints:Je(Ge.waypoints)}})}))}},je=(b,G,F,le=!0)=>{const Le=b.shaftId,ge=b.linkedFloorIds||[ee],Ge=F?[...ge,G]:ge.filter(Je=>Je!==G);W(Je=>Je.map(Yt=>Yt.id!==H?Yt:{...Yt,floors:Yt.floors.map(St=>{let ht=le?[...St.markers||[]]:[...St.waypoints||[]];if(F&&St.id===G){const Lt=qr(St),Mt=qr(ae),Ut=Mt.blX+b.x*(Mt.trX-Mt.blX),fn=Mt.trY-b.y*(Mt.trY-Mt.blY),Tt=Lt.trX!==Lt.blX?(Ut-Lt.blX)/(Lt.trX-Lt.blX):.5,An=Lt.trY!==Lt.blY?(Lt.trY-fn)/(Lt.trY-Lt.blY):.5,tt=le?"marker_":"wp_";ht.push({...b,id:`${tt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${St.id}`,x:Tt,y:An,linkedFloorIds:Ge})}else!F&&St.id===G?ht=ht.filter(Lt=>Lt.shaftId!==Le):ht=ht.map(Lt=>Lt.shaftId===Le?{...Lt,linkedFloorIds:Ge}:Lt);return le?{...St,markers:ht}:{...St,waypoints:ht}})}))},nt=b=>{let G=null,F=new Set([b]);D.forEach(le=>le.floors.forEach(Le=>{var ge;Le.markers.forEach(Ge=>{Ge.id===b&&Ge.isVerticalShaft&&(G=Ge.shaftId)}),(ge=Le.waypoints)==null||ge.forEach(Ge=>{Ge.id===b&&Ge.isVerticalShaft&&(G=Ge.shaftId)})})),G&&D.forEach(le=>le.floors.forEach(Le=>{var ge;Le.markers.forEach(Ge=>{Ge.shaftId===G&&F.add(Ge.id)}),(ge=Le.waypoints)==null||ge.forEach(Ge=>{Ge.shaftId===G&&F.add(Ge.id)})})),W(le=>le.map(Le=>({...Le,floors:Le.floors.map(ge=>({...ge,markers:(ge.markers||[]).filter(Ge=>!F.has(Ge.id)),waypoints:(ge.waypoints||[]).filter(Ge=>!F.has(Ge.id)),edges:(ge.edges||[]).filter(Ge=>!F.has(Ge.start)&&!F.has(Ge.end))}))}))),F.has(K)&&Q(null),F.has(pe)&&se(null),F.has(Fe)&&(qe(null),_t(null)),Ze(!1)},dt=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:b=>{if(!b)return;const G=`b_${Date.now()}`,F=`f_${Date.now()}`;W(le=>[...le,{id:G,name:b,floors:[{id:F,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),q(G),xe(F)}})},mt=()=>{j&&h({isOpen:!0,title:`新增 ${j.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:b=>{if(!b)return;const G=`f_${Date.now()}`,F=ae?{...qr(ae)}:{blX:0,blY:0,trX:100,trY:100};W(le=>le.map(Le=>Le.id===H?{...Le,floors:[...Le.floors,{id:G,name:b,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:F}]}:Le)),xe(G)}})},Bt=b=>{const G=b.target.files[0],F=b.target;if(G&&H&&ee){const le=H,Le=ee,ge=new FileReader;ge.onload=Ge=>{b0(Ge.target.result,1600,Je=>{W(Yt=>Yt.map(St=>St.id===le?{...St,floors:St.floors.map(ht=>ht.id===Le?{...ht,imageUrl:Je}:ht)}:St)),$(!1)})},ge.readAsDataURL(G)}F.value=""},et=(b,G)=>{const F=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,le={id:F,x:b,y:G,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:ee};W(Le=>Le.map(ge=>ge.id===H?{...ge,floors:ge.floors.map(Ge=>{if(Ge.id!==ee)return Ge;const Je=Fe?[...Ge.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Fe,end:F}]:Ge.edges||[];return{...Ge,waypoints:[...Ge.waypoints||[],le],edges:Je}})}:ge)),qe(F)},Dt=b=>{if(Fe===b){qe(null),_t(null);return}Fe&&Fe!==b&&(O.some(F=>F.start===Fe&&F.end===b||F.end===Fe&&F.start===b)||W(F=>F.map(le=>le.id===H?{...le,floors:le.floors.map(Le=>Le.id===ee?{...Le,edges:[...Le.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Fe,end:b}]}:Le)}:le))),qe(b)},Zt=(b,G)=>{for(let le of Se)if(Math.hypot(le.x-b,le.y-G)<.03)return le.id;for(let le of Ce)if(Math.hypot(le.x-b,le.y-G)<.03)return le.id;return null};De.useEffect(()=>{const b=G=>{G.key==="Escape"&&Ne&&(qe(null),_t(null))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[Ne]);const dn=(b,G)=>{const F={},le=[],Le={};D.forEach(tt=>{tt.floors.forEach(Ft=>{var Pi,Tr;const vn=Ft.bounds||{blX:0,blY:0,trX:100,trY:100},ti=(tn,ji)=>({physX:vn.blX+tn*(vn.trX-vn.blX),physY:vn.trY-ji*(vn.trY-vn.blY)});Ft.markers.forEach(tn=>{F[tn.id]={...tn,...ti(tn.x,tn.y),fId:Ft.id,fName:Ft.name},tn.isVerticalShaft&&tn.shaftId&&(Le[tn.shaftId]||(Le[tn.shaftId]=[]),Le[tn.shaftId].push(tn.id))}),(Pi=Ft.waypoints)==null||Pi.forEach(tn=>{F[tn.id]={...tn,...ti(tn.x,tn.y),fId:Ft.id,fName:Ft.name},tn.isVerticalShaft&&tn.shaftId&&(Le[tn.shaftId]||(Le[tn.shaftId]=[]),Le[tn.shaftId].push(tn.id))}),(Tr=Ft.edges)==null||Tr.forEach(tn=>le.push(tn))})});const ge={};Object.keys(F).forEach(tt=>{ge[tt]={}}),le.forEach(tt=>{if(F[tt.start]&&F[tt.end]){const Ft=Math.hypot(F[tt.start].physX-F[tt.end].physX,F[tt.start].physY-F[tt.end].physY);ge[tt.start][tt.end]=Ft,ge[tt.end][tt.start]=Ft}}),Object.values(Le).forEach(tt=>{for(let Ft=0;Ft<tt.length;Ft++)for(let vn=Ft+1;vn<tt.length;vn++)ge[tt[Ft]][tt[vn]]=5,ge[tt[vn]][tt[Ft]]=5});const Ge=tt=>Object.keys(ge[tt]).length>0;let Je=null,Yt=1/0,St=null,ht=1/0;if(Object.values(F).forEach(tt=>{if(Ge(tt.id)){if(tt.fId===b.fId){const Ft=Math.hypot(tt.x-b.x,tt.y-b.y);Ft<Yt&&(Yt=Ft,Je=tt.id)}if(tt.fId===G.fId){const Ft=Math.hypot(tt.x-G.x,tt.y-G.y);Ft<ht&&(ht=Ft,St=tt.id)}}}),!Je||!St){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),ne([]),Re([]);return}const Lt={},Mt={},Ut=new Set(Object.keys(F));for(Object.keys(F).forEach(tt=>{Lt[tt]=1/0,Mt[tt]=null}),Lt[Je]=0;Ut.size>0;){let tt=null;if(Ut.forEach(Ft=>{(tt===null||Lt[Ft]<Lt[tt])&&(tt=Ft)}),Lt[tt]===1/0||tt===St)break;Ut.delete(tt),Object.entries(ge[tt]).forEach(([Ft,vn])=>{if(Ut.has(Ft)){const ti=Lt[tt]+vn;ti<Lt[Ft]&&(Lt[Ft]=ti,Mt[Ft]=tt)}})}const fn=[];let Tt=St;for(;Tt;)fn.unshift(Tt),Tt=Mt[Tt];if(fn.length===0||fn[0]!==Je){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),ne([]),Re([]);return}const An=[{x:b.x,y:b.y,fId:b.fId,fName:b.fName,isVirtual:!0},...fn.map(tt=>F[tt]),{x:G.x,y:G.y,fId:G.fId,fName:G.fName,isVirtual:!0}];Re(An)};De.useEffect(()=>{const b=Be.current;if(!b||r!=="map")return;const G=F=>{F.preventDefault();const le=b.getBoundingClientRect(),Le=F.clientX-le.left,ge=F.clientY-le.top,Ge=F.deltaY<0?1.1:.9;Ke(Je=>{const Yt=Math.max(.1,Math.min(10,Je.scale*Ge)),St=Yt/Je.scale;return{x:Le-(Le-Je.x)*St,y:ge-(ge-Je.y)*St,scale:Yt}})};return b.addEventListener("wheel",G,{passive:!1}),()=>b.removeEventListener("wheel",G)},[r]);const on=b=>{b.button!==void 0&&b.button!==0||b.target.closest(".marker-pin")||b.target.closest(".waypoint-pin")||(Vt(!0),bt({x:b.clientX-Ie.x,y:b.clientY-Ie.y}),kt({x:b.clientX,y:b.clientY}),b.target.setPointerCapture(b.pointerId))},xn=b=>{if(xt)Ke(G=>({...G,x:b.clientX-jt.x,y:b.clientY-jt.y}));else if(Ne&&Fe&&Oe.current){const G=Oe.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(b.clientX-G.left)/G.width)),le=Math.max(0,Math.min(1,(b.clientY-G.top)/G.height));_t({x:F,y:le})}else if(V&&Oe.current){const G=Oe.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(b.clientX-G.left)/G.width)),le=Math.max(0,Math.min(1,(b.clientY-G.top)/G.height));V.startsWith("marker_")?(Pe(V,"x",F),Pe(V,"y",le)):V.startsWith("wp_")&&(be(V,"x",F),be(V,"y",le))}},ln=b=>{if(xt&&(Vt(!1),b.target.releasePointerCapture(b.pointerId),Math.hypot(b.clientX-Ht.x,b.clientY-Ht.y)<5)){if(!(ae!=null&&ae.imageUrl)||!Oe.current)return;const F=Oe.current.getBoundingClientRect();let le=Math.max(0,Math.min(1,(b.clientX-F.left)/F.width)),Le=Math.max(0,Math.min(1,(b.clientY-F.top)/F.height));if(ot){const ge={x:le,y:Le,fId:ee,fName:ae==null?void 0:ae.name},Ge=E.length>=2?[ge]:[...E,ge];ne(Ge),Ge.length===1&&Re([]),Ge.length===2&&dn(Ge[0],Ge[1])}else if(Ne){const ge=Zt(le,Le);ge?Dt(ge):et(le,Le)}else if(Xt){const ge=D.reduce((Je,Yt)=>Je+Yt.floors.reduce((St,ht)=>St+ht.markers.length,0),0),Ge={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${ge+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:le,y:Le,imageUrl:null,enabled:!0,recognitionStatus:"untested"};W(Je=>Je.map(Yt=>Yt.id===H?{...Yt,floors:Yt.floors.map(St=>St.id===ee?{...St,markers:[...St.markers,Ge]}:St)}:Yt)),Q(Ge.id),se(null),$(!1)}else It?ze(ge=>ge.length>=2?[{x:le,y:Le}]:[...ge,{x:le,y:Le}]):(Q(null),se(null))}},zn=b=>{const G=b.target.files[0],F=b.target;if(G&&K){const le=K,Le=new FileReader;Le.onload=ge=>{b0(ge.target.result,800,Ge=>{Pe(le,"imageUrl",Ge),Pe(le,"recognitionStatus","untested")})},Le.readAsDataURL(G)}F.value=""},En=(b,G,F)=>{q(b),xe(G),Q(F),se(null),o("map")},pn=async()=>{const b={version:"7.0",project:{id:N,name:k.projectName||(P==null?void 0:P.name)||"AR導覽",description:(P==null?void 0:P.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ai(k),buildings:Ai(D)};R(G=>G.map(F=>F.id===N?{...F,name:b.project.name,systemConfig:b.systemConfig,buildings:b.buildings,updatedAt:b.project.updatedAt}:F));try{const G=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),F=await G.json().catch(()=>({}));if(!G.ok)throw new Error(F.error||`Save failed: ${G.status}`);x({isOpen:!0,message:`「${b.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(G){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${G.message}`})}},Fn=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${L.length+1}`,onSubmit:b=>{if(!b)return;const G=dw(b);R(F=>[...F,G]),z(G.id),o("map")}})},ei=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(P==null?void 0:P.name)||k.projectName||"",onSubmit:b=>{b&&(w(G=>({...G,projectName:b})),R(G=>G.map(F=>F.id===N?{...F,name:b,systemConfig:{...F.systemConfig,projectName:b},updatedAt:new Date().toISOString()}:F)))}})},vi=()=>{if(L.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(P==null?void 0:P.name)||k.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(b=>{var F;const G=b.filter(le=>le.id!==N);return z((F=G[0])==null?void 0:F.id),G})}})},Vn=()=>{W(co()),Q(null),se(null),Ke({x:0,y:0,scale:1}),$(!1),ue(!1),we(!1),qe(null),_t(null),U(!1),ne([]),Re([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Rs=()=>{const b=(k.projectName||(P==null?void 0:P.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),G="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:N,name:k.projectName||(P==null?void 0:P.name),description:(P==null?void 0:P.description)||"",updatedAt:P==null?void 0:P.updatedAt},systemConfig:k,buildings:D},null,2)),F=document.createElement("a");F.setAttribute("href",G),F.setAttribute("download",`${b}_ar_config_v7.json`),document.body.appendChild(F),F.click(),F.remove()},es=()=>{if(!(ae!=null&&ae.imageUrl)||!Be.current||!Oe.current){Ke({x:0,y:0,scale:1});return}const b=Be.current,G=Oe.current.querySelector("img");if(!G||G.naturalWidth===0)return;const{width:F,height:le}=b.getBoundingClientRect(),Le=Math.min(F/G.naturalWidth,le/G.naturalHeight,1)*.9;Ke({x:(F-G.naturalWidth*Le)/2,y:(le-G.naturalHeight*Le)/2,scale:Le})},Gi=b=>{o(b),u(!1),$(!1),vt(!1),ue(!1),we(!1),qe(null),_t(null),U(!1),ne([]),Re([])};let nn=null,qt=null;D.forEach(b=>b.floors.forEach(G=>{var F;G.markers.forEach(le=>{le.id===K&&(nn=le,b.name,G.name)}),(F=G.waypoints)==null||F.forEach(le=>{le.id===pe&&(qt=le,b.name,G.name)})}));let ts=0,sr=0;const C=document.getElementById("current-map-image"),Z=_e.trX-_e.blX,me=_e.trY-_e.blY;if(C&&Z>0){const b=C.offsetWidth*Ie.scale;if(b>0){const G=Z/b,F=100*G;ts=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Le=>Le<=F)||.5,sr=ts/G}}const fe=D.reduce((b,G)=>b+G.floors.reduce((F,le)=>F+(le.markers||[]).length,0),0),de=D.reduce((b,G)=>b+G.floors.length,0),Xe=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:N,onChange:b=>z(b.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-950",children:b.name},b.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",L.length," 個專案 · ",D.length," 棟建築 · ",de," 個樓層 · ",fe," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Fn,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Vl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:ei,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:pn,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ho,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:vi,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Cd,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),it=()=>{const b=new Set,G=D.flatMap(F=>F.floors.flatMap(le=>(le.markers||[]).reduce((Le,ge)=>{if(ge.isVerticalShaft&&ge.shaftId){if(b.has(ge.shaftId))return Le;b.add(ge.shaftId)}return Le.push({...ge,bId:F.id,fId:le.id,buildingName:F.name,floorName:le.name}),Le},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[Xe(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",G.length," 組節點"]})]}),G.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>Gi("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:G.map(F=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(S0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:F.code}),g.jsx(Mf,{status:F.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:F.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[F.buildingName," · ",F.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${F.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:F.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>En(F.bId,F.fId,F.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]})]})]},F.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:G.map(F=>{var Le;const le=F.isVerticalShaft?(Le=D.find(ge=>ge.id===F.bId))==null?void 0:Le.floors.filter(ge=>{var Ge;return(Ge=F.linkedFloorIds)==null?void 0:Ge.includes(ge.id)}).sort((ge,Ge)=>Ti(Ge.name)-Ti(ge.name)).map(ge=>ge.name).join(", "):F.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${F.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:F.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${F.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:le})]}),g.jsx("td",{className:"px-4 py-4",children:F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(S0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:F.code}),F.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx($r,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):F.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(ow,{direction:F.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:F.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:F.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:F.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Mf,{status:F.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>En(F.bId,F.fId,F.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Ad,{className:"w-4 h-4"})})})]},F.id)})})]})})})]})]})})},Ye=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[Xe(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(w0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(ZE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:k.projectName,onChange:b=>w({...k,projectName:b.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:k.lerpFactor,onChange:b=>w({...k,lerpFactor:parseInt(b.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Vn()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),lt=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[Xe(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(Td,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:D.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:D.reduce((b,G)=>b+G.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:D.reduce((b,G)=>b+G.floors.reduce((F,le)=>F+(le.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:Rs,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(Td,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(R0,{buildings:D,systemConfig:k,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(vs,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Gl,{icon:g.jsx(M0,{}),label:"平面圖管理",active:r==="map",onClick:()=>Gi("map")}),g.jsx(Gl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>Gi("list")}),g.jsx(Gl,{icon:g.jsx(w0,{}),label:"系統設定",active:r==="settings",onClick:()=>Gi("settings")}),g.jsx(Gl,{icon:g.jsx(Td,{}),label:"匯出JSON",active:r==="export",onClick:()=>Gi("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(R0,{buildings:D,systemConfig:k,onMenuClick:()=>u(!0)}),r==="list"&&it(),r==="settings"&&Ye(),r==="export"&&lt(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:N,onChange:b=>z(b.target.value),children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Fn,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(Vl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:pn,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ho,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(qE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:H,onChange:b=>q(b.target.value),children:D.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:dt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),j&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(QE,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:ee,onChange:b=>xe(b.target.value),children:j.floors.slice().sort((b,G)=>Ti(G.name)-Ti(b.name)).map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:mt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx(KE,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:X,onChange:b=>ie(b.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),D.flatMap(b=>b.floors.filter(G=>G.id!==ee).sort((G,F)=>Ti(F.name)-Ti(G.name)).map(G=>g.jsxs("option",{value:G.id,className:"bg-slate-900",children:[b.name,"-",G.name]},G.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{ae!=null&&ae.imageUrl&&(U(!ot),ue(!1),we(!1),$(!1),vt(!1),qe(null),Q(null),se(null),_t(null),ne([]),Re([]))},disabled:!(ae!=null&&ae.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${ot?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[ot?g.jsx(vs,{className:"w-5 h-5"}):g.jsx(_0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(ae==null?void 0:ae.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{we(!Ae),ue(!1),U(!1),$(!1),vt(!1),qe(null),Q(null),se(null),_t(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ae?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:Ae?g.jsx(vs,{className:"w-5 h-5"}):g.jsx($r,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{ue(!Ne),we(!1),U(!1),$(!1),vt(!1),qe(null),Q(null),se(null),_t(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ne?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Ne?g.jsx(vs,{className:"w-5 h-5"}):g.jsx(gg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{vt(!It),we(!1),U(!1),$(!1),ue(!1),ze([]),_t(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${It?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:It?g.jsx(vs,{className:"w-5 h-5"}):g.jsx(iw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{$(!Xt),we(!1),U(!1),vt(!1),ue(!1),_t(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Xt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Xt?g.jsx(vs,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:_e.blX,blY:_e.blY,trX:_e.trX,trY:_e.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(fa,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:ye,onChange:Bt,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>ye.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(aw,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:Be,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Ne?"cursor-crosshair":Ae?"cursor-pointer":Xt||It||ot?"cursor-crosshair":xt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:on,onPointerMove:xn,onPointerUp:ln,onPointerCancel:ln,children:[ae&&g.jsxs("div",{className:"absolute left-4 top-4 z-[80] rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(j==null?void 0:j.name)||"目前場域"," / ",ae.name||"未命名樓層"]}),g.jsxs("div",{ref:Oe,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Ie.x}px, ${Ie.y}px) scale(${Ie.scale})`},children:[X&&(()=>{let b=null;if(D.forEach(Ge=>Ge.floors.forEach(Je=>{Je.id===X&&(b=Je)})),!b)return null;const G=qr(b),F=Z!==0?(G.trX-G.blX)/Z:1,le=me!==0?(G.trY-G.blY)/me:1,Le=Z!==0?(G.blX-_e.blX)/Z:0,ge=me!==0?(_e.trY-G.trY)/me:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Le*100}%`,top:`${ge*100}%`,width:`${F*100}%`,height:`${le*100}%`,opacity:.4},children:[b.imageUrl&&g.jsx("img",{src:b.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),b.markers.map(Ge=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ge.x*100}%`,top:`${Ge.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`},children:Ge.code})})},Ge.id))]})})(),(ae==null?void 0:ae.imageUrl)&&g.jsx("img",{id:"current-map-image",src:ae.imageUrl,alt:"Floor Plan",onLoad:es,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${X?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),O.map(b=>{const G=Se.find(le=>le.id===b.start)||Ce.find(le=>le.id===b.start),F=Se.find(le=>le.id===b.end)||Ce.find(le=>le.id===b.end);return G&&F?g.jsx("line",{x1:`${G.x*100}%`,y1:`${G.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ie.scale),strokeOpacity:"0.7"},b.id):null}),Ne&&Fe&&st&&(()=>{const b=Se.find(G=>G.id===Fe)||Ce.find(G=>G.id===Fe);return b?g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${st.x*100}%`,y2:`${st.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ie.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),ot&&Ee.length>0&&Ee.map((b,G)=>{if(G===Ee.length-1)return null;const F=Ee[G+1],le=[];return b.fId===ee&&F.fId===ee?le.push(g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Ie.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${G}`)):b.fId===ee&&F.fId!==ee?le.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:12/Math.max(.5,Ie.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Ie.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ie.scale),to:35/Math.max(.5,Ie.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.5,Ie.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${b.x*100}%`,y:`${b.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Ie.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",F.fName]})]},`leave_${G}`)):b.fId!==ee&&F.fId===ee&&le.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:12/Math.max(.5,Ie.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Ie.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ie.scale),to:35/Math.max(.5,Ie.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:6/Math.max(.5,Ie.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${F.x*100}%`,y:`${F.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Ie.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",b.fName]})]},`enter_${G}`)),g.jsx(wf.Fragment,{children:le},`testfrag_${G}`)})]}),Ce.map(b=>{const G=pe===b.id,F=Fe===b.id,le=b.isVerticalShaft&&b.sourceFloorId&&b.sourceFloorId!==ee;let Le="bg-orange-500",ge="border-white",Ge="";return b.isVerticalShaft&&(Le="bg-green-500"),F?(Le="bg-white",ge=le?"border-green-500":"border-orange-500",Ge=le?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):G&&(ge="border-cyan-400 border-2",Ge="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${G?"z-40":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:Je=>{Je.stopPropagation(),Je.button===0&&(Ne?Dt(b.id):Ae?(b.isVerticalShaft||Me(b,!0,!1),Q(null),se(b.id)):!ot&&!It&&!xt&&!Xt&&(Q(null),se(b.id),oe(b.id),Je.target.setPointerCapture(Je.pointerId)))},onPointerUp:Je=>{Je.stopPropagation(),Je.target.releasePointerCapture(Je.pointerId)},onContextMenu:Je=>{Je.preventDefault(),Ne?nt(b.id):Ae?b.isVerticalShaft&&Me(b,!1,!1):!ot&&!It&&!Xt&&(Q(null),se(b.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Le} ${ge} ${Ge}`,style:{width:`${(F?14:10)/Math.max(.5,Ie.scale)}px`,height:`${(F?14:10)/Math.max(.5,Ie.scale)}px`,borderWidth:G?"2px":"1px"},children:b.isVerticalShaft&&g.jsx($r,{className:F?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Ie.scale)}px`,height:`${6/Math.max(.5,Ie.scale)}px`}})})},b.id)}),ot&&E.map((b,G)=>b.fId!==ee?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${b.x*100}%`,top:`${b.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Ie.scale)}px`,height:`${16/Math.max(.5,Ie.scale)}px`},children:G===0?"起":"終"})},`testpt_${G}`)),It&&yt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[yt.length===2&&g.jsx("line",{x1:`${yt[0].x*100}%`,y1:`${yt[0].y*100}%`,x2:`${yt[1].x*100}%`,y2:`${yt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Ie.scale),strokeDasharray:"5,5"}),yt.map((b,G)=>g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.1,Ie.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Ie.scale)},G))]}),yt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(yt[0].x+yt[1].x)*50}%`,top:`${(yt[0].y+yt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Ie.scale)})`},children:[Math.hypot((yt[1].x-yt[0].x)*Z,(yt[1].y-yt[0].y)*me).toFixed(1)," m"]})]}),Se.map(b=>{const G=b.isVerticalShaft?j==null?void 0:j.floors.filter(F=>{var le;return(le=b.linkedFloorIds)==null?void 0:le.includes(F.id)}).sort((F,le)=>Ti(le.name)-Ti(F.name)).map(F=>F.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${K===b.id?"z-[60]":""} ${Fe===b.id?"scale-125":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:F=>{F.stopPropagation(),F.button===0&&(Ne?Dt(b.id):Ae?(b.isVerticalShaft||Me(b,!0,!0),se(null),Q(b.id)):!ot&&!Xt&&!It&&!xt&&(se(null),oe(b.id),Q(b.id),F.target.setPointerCapture(F.pointerId)))},onPointerUp:F=>{F.stopPropagation(),F.target.releasePointerCapture(F.pointerId)},onContextMenu:F=>{F.preventDefault(),Ne?nt(b.id):Ae?b.isVerticalShaft&&Me(b,!1,!0):!ot&&!It&&!Xt&&(se(null),Q(b.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${K===b.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":b.enabled?b.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Fe===b.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:b.isVerticalShaft?g.jsx($r,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`},children:b.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${K===b.id?"border-t-white":b.enabled?b.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Fe===b.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${K===b.id?"opacity-100 border-cyan-500 text-cyan-400":b.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`,transformOrigin:"top center"},children:[b.title||"未命名"," ",b.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",G,")"]})]})]},b.id)})]}),Ae&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx($r,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Ne&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(tw,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),ot&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(_0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(ae!=null&&ae.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(M0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",j==null?void 0:j.name," - ",ae==null?void 0:ae.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(ae==null?void 0:ae.imageUrl)&&sr>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:_e.blX,blY:_e.blY,trX:_e.trX,trY:_e.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(fa,{className:"w-3 h-3 mr-1"})," 比例尺: ",ts," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${sr}px`}})]}),(ae==null?void 0:ae.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>Ke(b=>({...b,scale:Math.min(10,b.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(vg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Ke(b=>({...b,scale:Math.max(.1,b.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(_g,{className:"w-5 h-5"})}),g.jsx("button",{onClick:es,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(ew,{className:"w-5 h-5"})})]})]})]}),I.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(fa,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.blX,onChange:b=>y({...I,blX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.blY,onChange:b=>y({...I,blY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.trX,onChange:b=>y({...I,trX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.trY,onChange:b=>y({...I,trY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{W(b=>b.map(G=>G.id===H?{...G,floors:G.floors.map(F=>F.id===ee?{...F,bounds:{blX:I.blX,blY:I.blY,trX:I.trX,trY:I.trY}}:F)}:G)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:b=>{b.key==="Enter"&&(f.onSubmit(b.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:b=>{f.onSubmit(b.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(xg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(Sf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(sw,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:He,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ho,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(K||pe)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:K?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{Q(null),se(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(vs,{})})]}),nn&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:nn.code,onChange:b=>Pe(nn.id,"code",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:nn.title,onChange:b=>Pe(nn.id,"title",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:nn.description||"",onChange:b=>Pe(nn.id,"description",b.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(nn.x*100).toFixed(1),onChange:b=>Pe(nn.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(nn.y*100).toFixed(1),onChange:b=>Pe(nn.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx($r,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:nn.isVerticalShaft||!1,onChange:b=>Me(nn,b.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),nn.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:j==null?void 0:j.floors.slice().sort((b,G)=>Ti(G.name)-Ti(b.name)).map(b=>{var le;const G=(le=nn.linkedFloorIds)==null?void 0:le.includes(b.id),F=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${G?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:F,checked:G||F,onChange:Le=>je(nn,b.id,Le.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",F&&"(目前)"]})]},b.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:nn.arrowDirection||"none",onChange:b=>Pe(nn.id,"arrowDirection",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:nn.enabled,onChange:b=>Pe(nn.id,"enabled",b.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:Te,onChange:zn,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>Te.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:nn.imageUrl?g.jsx("img",{src:nn.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(hw,{marker:nn,onUpdateStatus:b=>Pe(nn.id,"recognitionStatus",b),showAlert:b=>x({isOpen:!0,message:b})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:$e?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ze(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>nt(nn.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ze(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Q(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),qt&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(qt.x*100).toFixed(1),onChange:b=>be(qt.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(qt.y*100).toFixed(1),onChange:b=>be(qt.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx($r,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:qt.isVerticalShaft||!1,onChange:b=>Me(qt,b.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),qt.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:j==null?void 0:j.floors.slice().sort((b,G)=>Ti(G.name)-Ti(b.name)).map(b=>{var le;const G=(le=qt.linkedFloorIds)==null?void 0:le.includes(b.id),F=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${G?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:F,checked:G||F,onChange:Le=>je(qt,b.id,Le.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",F&&"(目前)"]})]},b.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:$e?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ze(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>nt(qt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ze(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>se(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Gl({icon:s,label:e,active:t,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Mf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ho,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(xg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function hw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=De.useState("idle"),[l,u]=De.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=De.useRef(null),h=De.useRef(null),p=De.useRef(null),v=De.useRef(null),S=De.useRef(null),x=De.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=De.useRef({frames:0,lockedFrames:0});De.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const A=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,N=x.current;N.refGray&&N.refGray.delete(),N.refKeypoints&&N.refKeypoints.delete(),N.refDescriptors&&N.refDescriptors.delete(),N.orbDetector&&N.orbDetector.delete(),N.matcher&&N.matcher.delete();const z=document.createElement("canvas"),P=z.getContext("2d"),k=p.current,w=320;let D=k.naturalWidth||k.width,W=k.naturalHeight||k.height;(D>w||W>w)&&(D>W?(W=Math.round(W*w/D),D=w):(D=Math.round(D*w/W),W=w)),z.width=D,z.height=W,P.drawImage(k,0,0,D,W);const H=R.imread(z),q=new R.Mat;R.cvtColor(H,q,R.COLOR_RGBA2GRAY);const ee=new R.ORB,xe=new R.KeyPointVector,X=new R.Mat;ee.detectAndCompute(q,new R.Mat,xe,X);const ie=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:q,refKeypoints:xe,refDescriptors:X,orbDetector:ee,matcher:ie},H.delete(),!0}catch{return!1}},I=R=>{if(R.length<4)return!1;let N=[];for(let z=0;z<4;z++){let P=R[(z+1)%4].x-R[z].x,k=R[(z+1)%4].y-R[z].y,w=R[(z+2)%4].x-R[(z+1)%4].x,D=R[(z+2)%4].y-R[(z+1)%4].y;N.push(P*D-k*w>0)}return N.every(z=>z===N[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!A()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(N){console.warn("Device orientation permission was not granted.",N)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,L()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};De.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const L=()=>{const R=window.cv,N=x.current,z=f.current,P=h.current,k=P.getContext("2d");let w=performance.now(),D=null;const W=.15;let H=0;const q=3;let ee=0;const xe=10;let X=null;const ie=()=>{if(!z||!z.srcObject||!N.refDescriptors)return;const K=performance.now(),Q=Math.round(1e3/(K-w));w=K,k.drawImage(z,0,0,P.width,P.height);let pe=0,se=0,V=!1,oe=null,$e=H%q===0;if(H++,$e){try{const Ne=R.imread(P),ue=new R.Mat;R.cvtColor(Ne,ue,R.COLOR_RGBA2GRAY);const Ae=new R.KeyPointVector,we=new R.Mat;if(N.orbDetector.detectAndCompute(ue,new R.Mat,Ae,we),!we.empty()&&we.rows>0){const Fe=new R.DMatchVector;N.matcher.match(N.refDescriptors,we,Fe);let qe=[];for(let _t=0;_t<Fe.size();_t++)qe.push(Fe.get(_t));qe.sort((_t,xt)=>_t.distance-xt.distance);let st=qe.filter(_t=>_t.distance<=50).slice(0,60);if(pe=st.length,st.length>=12){const _t=[],xt=[];for(let kt=0;kt<st.length;kt++){let Xt=st[kt];_t.push(N.refKeypoints.get(Xt.queryIdx).pt.x,N.refKeypoints.get(Xt.queryIdx).pt.y),xt.push(Ae.get(Xt.trainIdx).pt.x,Ae.get(Xt.trainIdx).pt.y)}const Vt=R.matFromArray(_t.length/2,1,R.CV_32FC2,_t),jt=R.matFromArray(xt.length/2,1,R.CV_32FC2,xt),bt=new R.Mat,Ht=R.findHomography(Vt,jt,R.RANSAC,4,bt);for(let kt=0;kt<bt.rows;kt++)bt.data[kt]===1&&se++;if(!Ht.empty()&&se>=10&&se/st.length>=.35){const kt=N.refGray.cols,Xt=N.refGray.rows,$=[0,0,1,kt,0,1,kt,Xt,1,0,Xt,1];let It=[];for(let vt=0;vt<4;vt++){let yt=$[vt*3],ze=$[vt*3+1],ot=Ht.data64F[0]*yt+Ht.data64F[1]*ze+Ht.data64F[2],U=Ht.data64F[3]*yt+Ht.data64F[4]*ze+Ht.data64F[5],E=Ht.data64F[6]*yt+Ht.data64F[7]*ze+Ht.data64F[8];It.push({x:ot/E,y:U/E})}I(It)&&(oe=It,V=!0)}Vt.delete(),jt.delete(),bt.delete(),Ht.delete()}Fe.delete()}Ne.delete(),ue.delete(),Ae.delete(),we.delete()}catch{}V?(X=oe,ee=xe):ee>0?ee--:X=null}const Ze=X!==null;if(Ze){if(!D)D=JSON.parse(JSON.stringify(X));else for(let Ne=0;Ne<4;Ne++)D[Ne].x=D[Ne].x*(1-W)+X[Ne].x*W,D[Ne].y=D[Ne].y*(1-W)+X[Ne].y*W;k.strokeStyle="#00ffcc",k.lineWidth=3,k.shadowBlur=10,k.shadowColor="#00ffcc",k.beginPath(),k.moveTo(D[0].x,D[0].y),k.lineTo(D[1].x,D[1].y),k.lineTo(D[2].x,D[2].y),k.lineTo(D[3].x,D[3].y),k.closePath(),k.stroke(),k.shadowBlur=0}else{D=null;const Ne=Math.min(P.width,P.height)*.5,ue=(P.width-Ne)/2,Ae=(P.height-Ne)/2;k.strokeStyle="rgba(255, 70, 70, 0.5)",k.lineWidth=2,k.strokeRect(ue,Ae,Ne,Ne)}u(Ne=>({fps:Q,matches:$e?pe:Ne.matches,inliers:$e?se:Ne.inliers,status:Ze?"LOCKED":"SEARCHING"})),M.current.frames++,Ze&&M.current.lockedFrames++,S.current=requestAnimationFrame(ie)};ie()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Mf,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(nw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function R0({buildings:s,systemConfig:e,onMenuClick:t}){const[r,o]=De.useState("idle"),[l,u]=De.useState(null),[f,h]=De.useState(null),[p,v]=De.useState([]),[S,x]=De.useState(!1),[M,A]=De.useState(0),[I,y]=De.useState("idle"),[_,L]=De.useState("checking"),[R,N]=De.useState("idle"),[z,P]=De.useState(0),[k,w]=De.useState(!1),D=De.useRef(null),W=De.useRef(null),H=De.useRef(null),q=De.useRef(null),ee=De.useRef(null),xe=De.useRef(null),X=De.useRef(null),ie=De.useRef(null),K=De.useRef(null),Q=De.useRef(null),pe=De.useRef(!1),se=De.useRef([]),V=De.useRef({matcher:null}),oe=De.useRef(0),$e=De.useRef(!1),Ze=De.useRef([]),Ne=De.useRef({nodes:{},edges:[]}),ue=De.useRef(null),Ae=De.useRef("idle"),we=De.useRef({heading:0,pitch:0,roll:0}),Fe=De.useRef(null),qe=wf.useMemo(()=>{const j={},ae=[];return s.forEach(Se=>Se.floors.forEach(Ce=>{var re,Pe;const O=Ce.bounds||{blX:0,blY:0,trX:100,trY:100},_e=(be,Me)=>({physX:O.blX+be*(O.trX-O.blX),physY:O.trY-Me*(O.trY-O.blY)});Ce.markers.forEach(be=>{be.enabled&&(j[be.id]={...be,..._e(be.x,be.y),isMarker:!0,bId:Se.id,fId:Ce.id,bName:Se.name,fName:Ce.name,bounds:O})}),(re=Ce.waypoints)==null||re.forEach(be=>{j[be.id]={...be,..._e(be.x,be.y),isMarker:!1,fId:Ce.id,bounds:O}}),(Pe=Ce.edges)==null||Pe.forEach(be=>{ae.push({...be,fId:Ce.id})})})),{nodes:j,edges:ae}},[s]);De.useEffect(()=>{Ne.current=qe},[qe]),De.useEffect(()=>{Ze.current=p},[p]),De.useEffect(()=>{if(!l||p.length<2){P(0);return}const j=performance.now(),ae=Se=>{P((Se-j)/5200%1),Fe.current=requestAnimationFrame(ae)};return Fe.current=requestAnimationFrame(ae),()=>{Fe.current&&cancelAnimationFrame(Fe.current)}},[l,p]),De.useEffect(()=>{ue.current=null,st("idle")},[l]);const st=j=>{Ae.current!==j&&(Ae.current=j,y(j))};De.useEffect(()=>{let j=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){j&&L("unsupported");return}try{const Se=await navigator.xr.isSessionSupported("immersive-ar");j&&L(Se?"supported":"unsupported")}catch{j&&L("unsupported")}})(),()=>{j=!1}},[]);const _t=(j,ae)=>{const{nodes:Se,edges:Ce}=qe,O={};Object.keys(Se).forEach(et=>{O[et]={}}),Ce.forEach(et=>{if(Se[et.start]&&Se[et.end]){const Dt=Math.hypot(Se[et.start].physX-Se[et.end].physX,Se[et.start].physY-Se[et.end].physY);O[et.start][et.end]=Dt,O[et.end][et.start]=Dt}});const _e={};Object.values(Se).forEach(et=>{et.isVerticalShaft&&et.shaftId&&(_e[et.shaftId]||(_e[et.shaftId]=[]),_e[et.shaftId].push(et.id))}),Object.values(_e).forEach(et=>{for(let Dt=0;Dt<et.length;Dt++)for(let Zt=Dt+1;Zt<et.length;Zt++)O[et[Dt]][et[Zt]]=5,O[et[Zt]][et[Dt]]=5});const re=et=>Object.keys(O[et]).length>0,Pe=et=>{if(re(et))return et;const Dt=Se[et];let Zt=1/0,dn=et;return Object.keys(Se).forEach(on=>{if(Se[on].fId===Dt.fId&&re(on)){const xn=Math.hypot(Se[on].physX-Dt.physX,Se[on].physY-Dt.physY);xn<Zt&&(Zt=xn,dn=on)}}),dn},be=Pe(j),Me=Pe(ae),je={},nt={},dt=new Set(Object.keys(Se));for(Object.keys(Se).forEach(et=>{je[et]=1/0,nt[et]=null}),je[be]=0;dt.size>0;){let et=null;if(dt.forEach(Dt=>{(et===null||je[Dt]<je[et])&&(et=Dt)}),je[et]===1/0||et===Me)break;dt.delete(et),Object.entries(O[et]).forEach(([Dt,Zt])=>{if(dt.has(Dt)){const dn=je[et]+Zt;dn<je[Dt]&&(je[Dt]=dn,nt[Dt]=et)}})}const mt=[];let Bt=Me;for(;Bt;)mt.unshift(Bt),Bt=nt[Bt];return mt.length===0||mt[0]!==be?[]:(be!==j&&mt.unshift(j),Me!==ae&&mt.push(ae),mt)};De.useEffect(()=>{v(f&&l&&f!==l?_t(f,l):[])},[f,l,qe]),De.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const Ce=document.createElement("script");Ce.id="opencv-script",Ce.src="https://docs.opencv.org/3.4.16/opencv.js",Ce.async=!0,document.body.appendChild(Ce)}}else o("idle");let j=0;const ae=Ce=>{let O=null;Ce.webkitCompassHeading!==void 0&&Ce.webkitCompassHeading!==null?O=Ce.webkitCompassHeading:Ce.alpha!==null&&Ce.alpha!==void 0&&(O=360-Ce.alpha),O!==null&&(we.current={heading:O,pitch:Ce.beta||0,roll:Ce.gamma||0},oe.current=O,$e.current||($e.current=!0,w(!0)))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",ae,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",ae,!0));const Se=setInterval(()=>{if(!$e.current)return;let O=oe.current-(j%360+360)%360;O>180&&(O-=360),O<-180&&(O+=360),j+=O,A(j)},200);return()=>{jt(),clearInterval(Se),window.removeEventListener("deviceorientation",ae,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",ae,!0)}},[]);const xt=async()=>{const j=window.cv;if(!j)return!1;se.current=[],V.current.matcher=new j.BFMatcher(j.NORM_HAMMING,!0);const Se=Object.values(qe.nodes).filter(Ce=>Ce.isMarker&&Ce.imageUrl).map(Ce=>new Promise(O=>{const _e=new Image;_e.onload=()=>{try{const re=document.createElement("canvas"),Pe=re.getContext("2d");re.width=320,re.height=Math.round(320*(_e.height/_e.width)),Pe.drawImage(_e,0,0,re.width,re.height);const be=j.imread(re),Me=new j.Mat;j.cvtColor(be,Me,j.COLOR_RGBA2GRAY);const je=new j.ORB,nt=new j.KeyPointVector,dt=new j.Mat;je.detectAndCompute(Me,new j.Mat,nt,dt),se.current.push({markerId:Ce.id,gray:Me,kp:nt,des:dt,orb:je,width:Me.cols,height:Me.rows}),be.delete(),O(!0)}catch{O(!1)}},_e.onerror=()=>O(!1),_e.src=Ce.imageUrl}));return await Promise.all(Se),se.current.length>0},Vt=async()=>{if(r!=="idle")return;if(o("loading"),!await xt()){o("idle"),alert("無法提取特徵");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(Se){console.warn("Device orientation permission was not granted.",Se)}const ae=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});H.current=ae,D.current.srcObject=ae,D.current.play(),D.current.onloadedmetadata=()=>{W.current.width=D.current.videoWidth,W.current.height=D.current.videoHeight,o("scanning"),yt()}}catch{alert("無相機權限"),o("idle")}},jt=()=>{q.current&&cancelAnimationFrame(q.current),H.current&&H.current.getTracks().forEach(j=>j.stop()),ue.current=null,st("idle"),o("idle")},bt=(j,ae,Se=!1)=>{if(!ae||ae.length<2)return!1;const Ce=C0(ae);if(j.save(),j.beginPath(),ae.forEach((O,_e)=>{_e===0?j.moveTo(O.x,O.y):j.lineTo(O.x,O.y)}),j.strokeStyle=Se?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",j.lineWidth=Se?8:10,j.lineCap="round",j.lineJoin="round",j.shadowBlur=Se?8:12,j.shadowColor="#ffffff",j.stroke(),Ce>8){const O=Se?74:62,_e=Se?28:32,re=Date.now()/10%O;j.shadowBlur=Se?10:16,j.shadowColor="#ffffff",j.fillStyle="rgba(255,255,255,0.98)",j.strokeStyle="rgba(0,0,0,0.34)",j.lineWidth=2.5;for(let Pe=re;Pe<Ce;Pe+=O){const be=A0(ae,Pe);be&&(j.save(),j.translate(be.x,be.y),j.rotate(be.angle),j.beginPath(),j.moveTo(_e*.55,0),j.lineTo(-_e*.35,-_e*.32),j.lineTo(-_e*.15,0),j.lineTo(-_e*.35,_e*.32),j.closePath(),j.stroke(),j.fill(),j.restore())}}return j.restore(),!0},Ht=j=>{const ae=ue.current;if(!ae||!ae.points||ae.points.length<2)return!1;const Se=we.current,Ce=$e.current?(Se.heading-ae.orientation.heading+540)%360-180:0,O=$e.current?Se.pitch-ae.orientation.pitch:0,re=($e.current?Se.roll-ae.orientation.roll:0)*Math.PI/180,Pe=Math.cos(re),be=Math.sin(re),Me=j.canvas.width/2,je=j.canvas.height/2,nt=Math.max(j.canvas.width,j.canvas.height)*.95,dt=j.canvas.width*1.8,mt=j.canvas.height*1.2,Bt=Math.max(-dt,Math.min(dt,Math.tan(Ce*Math.PI/180)*nt)),et=Math.max(-mt,Math.min(mt,Math.tan(O*Math.PI/180)*nt*.75)),Dt=ae.points.map(Zt=>{const dn=Zt.x*j.canvas.width,on=Zt.y*j.canvas.height,xn=dn-Me,ln=on-je;return{x:Me+xn*Pe-ln*be-Bt,y:je+xn*be+ln*Pe+et}});return bt(j,Dt,!0)},kt=()=>{if(Ze.current.length>1)return Ze.current;const j=Object.values(Ne.current.nodes).filter(Se=>Se.isMarker&&Se.id!==l).map(Se=>Se.id),ae=f||j[0];return!ae||!l||ae===l?[]:_t(ae,l)},Xt=()=>{const j=kt(),ae=Ne.current.nodes,Se=j.map(dt=>ae[dt]).filter(Boolean);if(Se.length<2)return null;const Ce=Se[0],O=.08,_e=Se.map(dt=>new te((dt.physX-Ce.physX)*O,.03,-(dt.physY-Ce.physY)*O)),re=new ws,Pe=T0(_e,.045,16777215,.18),be=T0(_e,.016,16777215,.36);Pe&&re.add(Pe),be&&re.add(be);const Me=cw(_e);Me&&re.add(Me);const je=new Qn(new ic(.1,24,24),new Jr({color:2282478}));je.position.copy(_e[0]),je.position.y+=.08,re.add(je);const nt=new Qn(new ic(.12,24,24),new Jr({color:16731471}));return nt.position.copy(_e[_e.length-1]),nt.position.y+=.1,re.add(nt),re},$=async()=>{const j=xe.current;if(j)try{await j.end()}catch{}else It()},It=()=>{ie.current&&ie.current.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&j.material.dispose()}),X.current&&(X.current.setAnimationLoop(null),X.current.dispose(),X.current.domElement.remove()),xe.current=null,X.current=null,ie.current=null,K.current=null,Q.current=null,pe.current=!1,N("idle")},vt=async()=>{var j;if(!(_!=="supported"||!navigator.xr||xe.current)){N("starting"),jt();try{const ae={requiredFeatures:["hit-test"],optionalFeatures:ee.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};ee.current&&(ae.domOverlay={root:ee.current});const Se=await navigator.xr.requestSession("immersive-ar",ae),Ce=new OE({alpha:!0,antialias:!0});Ce.xr.enabled=!0,Ce.setPixelRatio(window.devicePixelRatio||1),Ce.setSize(window.innerWidth,window.innerHeight),Ce.domElement.className="absolute inset-0 h-full w-full",(j=ee.current)==null||j.appendChild(Ce.domElement),await Ce.xr.setSession(Se);const O=new a_,_e=new Ri,re=new Qn(new Bf(.18,.22,32).rotateX(-Math.PI/2),new Jr({color:65484,transparent:!0,opacity:.85}));re.matrixAutoUpdate=!1,re.visible=!1,O.add(re);const Pe=await Se.requestReferenceSpace("local-floor").catch(()=>Se.requestReferenceSpace("local")),be=await Se.requestReferenceSpace("viewer"),Me=await Se.requestHitTestSource({space:be});xe.current=Se,X.current=Ce,K.current=Me,Q.current=Pe,N("placing");const je=nt=>{if(pe.current)return;const dt=Xt();if(!dt){N("no-route");return}dt.matrix.fromArray(nt),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),O.add(dt),ie.current=dt,pe.current=!0,N("anchored")};Se.addEventListener("select",()=>{re.visible&&je(re.matrix.elements)}),Se.addEventListener("end",It),Ce.setAnimationLoop((nt,dt)=>{if(ie.current&&ie.current.traverse(mt=>uw(mt,nt)),dt&&!pe.current){const mt=dt.getHitTestResults(Me);if(mt.length){const Bt=mt[0].getPose(Pe);Bt&&(re.visible=!0,re.matrix.fromArray(Bt.transform.matrix))}else re.visible=!1}else re.visible=!1;Ce.render(O,_e)})}catch(ae){console.warn("Unable to start WebXR AR mode.",ae),It(),N("failed")}}},yt=()=>{const j=window.cv,ae=D.current,Se=W.current,Ce=Se.getContext("2d"),O=V.current.matcher;let _e=0,re=null,Pe=null,be=0;const Me=()=>{if(!ae||!ae.srcObject)return;Ce.drawImage(ae,0,0,Se.width,Se.height);let je=!1;if(_e%4===0){try{const mt=j.imread(Se),Bt=new j.Mat;j.cvtColor(mt,Bt,j.COLOR_RGBA2GRAY);const et=new j.KeyPointVector,Dt=new j.Mat;if(se.current[0].orb.detectAndCompute(Bt,new j.Mat,et,Dt),!Dt.empty())for(let Zt of se.current){const dn=new j.DMatchVector;O.match(Zt.des,Dt,dn);let on=[];for(let ln=0;ln<dn.size();ln++)on.push(dn.get(ln));on.sort((ln,zn)=>ln.distance-zn.distance);const xn=on.filter(ln=>ln.distance<=50).slice(0,60);if(xn.length>=12){const ln=[],zn=[];for(let Vn of xn)ln.push(Zt.kp.get(Vn.queryIdx).pt.x,Zt.kp.get(Vn.queryIdx).pt.y),zn.push(et.get(Vn.trainIdx).pt.x,et.get(Vn.trainIdx).pt.y);const En=j.matFromArray(ln.length/2,1,j.CV_32FC2,ln),pn=j.matFromArray(zn.length/2,1,j.CV_32FC2,zn),Fn=new j.Mat,ei=j.findHomography(En,pn,j.RANSAC,4,Fn);let vi=0;for(let Vn=0;Vn<Fn.rows;Vn++)Fn.data[Vn]===1&&vi++;!ei.empty()&&vi>=10&&(re&&re.delete(),re=ei.clone(),Pe=Zt.markerId,h(Pe),je=!0),En.delete(),pn.delete(),Fn.delete(),ei.delete()}if(dn.delete(),je)break}mt.delete(),Bt.delete(),et.delete(),Dt.delete()}catch{}je?be=8:be>0?be--:(re&&(re.delete(),re=null),Pe=null)}_e++;const nt=Ne.current,dt=Ze.current;if(re&&Pe&&dt.length>1){const mt=nt.nodes[Pe],Bt=se.current.find(et=>et.markerId===Pe);if(mt&&Bt){const et=Bt.width/.3,Dt=[];for(let Zt=0;Zt<dt.length;Zt++){const dn=dt[Zt],on=nt.nodes[dn];if(!on||on.fId!==mt.fId)break;const xn=on.physX-mt.physX,ln=-(on.physY-mt.physY),zn=Bt.width/2+xn*et,En=Bt.height/2+ln*et,pn=re.data64F,Fn=pn[6]*zn+pn[7]*En+pn[8];if(Fn>0){const ei=(pn[0]*zn+pn[1]*En+pn[2])/Fn,vi=(pn[3]*zn+pn[4]*En+pn[5])/Fn;Dt.push({x:ei,y:vi})}}bt(Ce,Dt,!1)&&(ue.current={markerId:Pe,orientation:{...we.current},updatedAt:Date.now(),points:Dt.map(Zt=>({x:Zt.x/Se.width,y:Zt.y/Se.height}))},st("locked"))}}else{const mt=dt.length>1&&Ht(Ce);if(st(mt?"holding":"searching"),!mt){const Bt=Math.min(Se.width,Se.height)*.6;Ce.strokeStyle="rgba(0, 255, 204, 0.4)",Ce.lineWidth=2,Ce.strokeRect((Se.width-Bt)/2,(Se.height-Bt)/2,Bt,Bt)}}q.current=requestAnimationFrame(Me)};Me()};if(!l){const j=Object.values(qe.nodes).filter(ae=>ae.isMarker).reduce((ae,Se)=>{const Ce=`${Se.bName} - ${Se.fName}`;return ae[Ce]||(ae[Ce]=[]),ae[Ce].push(Se),ae},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(j).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(fa,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(j).map(([ae,Se])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:ae}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Se.map(Ce=>g.jsxs("button",{onClick:()=>u(Ce.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:Ce.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:Ce.title})})]},Ce.id))})]},ae))]})]})}const ze=qe.nodes[l],ot=f?qe.nodes[f]:null,U=p.length>1?p[1]:null,E=U?qe.nodes[U]:null,ne=!!(ot&&E&&E.fId!==ot.fId);let Ee=ne?E.fId:ot?ot.fId:ze.fId,Re=null,Be=ne?E.fName:ot?ot.fName:ze.fName,Oe={blX:0,blY:0,trX:100,trY:100};s.forEach(j=>j.floors.forEach(ae=>{ae.id===Ee&&(Re=ae.imageUrl,Oe=qr(ae),Be=ae.name)}));const ye=(j,ae)=>{const Se=Oe.trX-Oe.blX,Ce=Oe.trY-Oe.blY,O=Se!==0?(j-Oe.blX)/Se*100:50,_e=Ce!==0?(Oe.trY-ae)/Ce*100:50;return{x:O,y:_e}},Te=p.map(j=>qe.nodes[j]).filter(j=>j&&j.fId===Ee).map(j=>ye(j.physX,j.physY)),Ie=C0(Te),Ke=ot&&ot.fId===Ee?ot:Te.length?null:ze,He=Ie>0?A0(Te,z*Ie):Ke?ye(Ke.physX,Ke.physY):null;return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{jt(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:ee,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:D,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:W,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[I==="locked"&&"AR 路徑已鎖定",I==="holding"&&"陀螺儀空間錨點",I==="searching"&&"搜尋定位標記",I==="idle"&&"準備定位"]}),r==="scanning"&&Re&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:Re,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:ne?`自動切換至 ${Be}`:`目前平面圖 ${Be}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),p.map((j,ae)=>{if(ae===p.length-1)return null;const Se=qe.nodes[j],Ce=qe.nodes[p[ae+1]];if(Se.fId===Ee&&Ce.fId===Ee){const O=ye(Se.physX,Se.physY),_e=ye(Ce.physX,Ce.physY);return g.jsx("line",{x1:`${O.x}%`,y1:`${O.y}%`,x2:`${_e.x}%`,y2:`${_e.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},ae)}return null})]}),He&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${He.x}%`,top:`${He.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${He.angle||0}rad)`,willChange:"transform"},children:g.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[g.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),g.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(He.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),!1,ze&&ze.fId===Ee&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${ye(ze.physX,ze.physY).x}%`,top:`${ye(ze.physX,ze.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(_g,{className:"w-4 h-4"}):g.jsx(vg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",ot?ot.fName:ze.fName," ",k?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(rw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{onClick:vt,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:Vt,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:$,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${ot?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"bg-cyan-500/20 text-cyan-400 p-3 rounded-xl mr-4 shrink-0",children:g.jsx(JE,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 w-full min-w-0",children:[g.jsxs("div",{className:"text-xs font-bold text-slate-400 mb-1",children:["📍 定位成功：",ot==null?void 0:ot.bName," ",ot==null?void 0:ot.fName," (",ot==null?void 0:ot.code,")"]}),f===l?g.jsxs("div",{className:"mt-2 flex items-center bg-green-500/20 p-3 rounded-xl border border-green-500/50 shadow-inner",children:[g.jsx(ho,{className:"w-6 h-6 text-green-400 mr-3 shrink-0"}),g.jsx("span",{className:"text-green-400 font-bold text-sm tracking-wide",children:"🎉 您已抵達目的地！"})]}):E?E.fId!==(ot==null?void 0:ot.fId)?g.jsxs("div",{className:"mt-2 flex items-center bg-purple-500/20 p-3 rounded-xl border border-purple-500/50 shadow-inner",children:[g.jsx($r,{className:"w-6 h-6 text-purple-400 mr-3 shrink-0 animate-bounce"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-purple-400 font-bold text-sm",children:"請換樓層"}),g.jsxs("span",{className:"text-purple-300/70 text-xs mt-0.5",children:["搭乘至 ",E.fName," 後重新掃描"]})]})]}):g.jsxs("div",{className:"mt-2 flex items-center bg-slate-800/80 p-3 rounded-xl border border-slate-700 shadow-inner",children:[g.jsx("div",{className:"bg-yellow-500/20 text-yellow-400 p-2 rounded-lg mr-3 shadow-[0_0_10px_rgba(234,179,8,0.2)] shrink-0",children:g.jsx(gg,{className:"w-6 h-6"})}),g.jsx("div",{className:"flex flex-col",children:g.jsx("span",{className:"text-yellow-400 font-bold text-sm tracking-wide",children:"請依循 AR 畫面上的發光路徑前往下一站"})})]}):g.jsx("div",{className:"text-red-400 text-sm font-bold mt-2",children:"⚠️ 無法計算路線，請確認點位連線設定。"})]})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const rc=document.getElementById("ar-root");if(!rc)throw new Error("Missing #ar-root element.");const yg=new URLSearchParams(window.location.search),pw=window.location.pathname.endsWith("/admin-ar.html"),Sg=rc.dataset.embedded==="true"||yg.get("embedded")==="1",N0=pw||Sg;cv.createRoot(rc).render(g.jsx(wf.StrictMode,{children:g.jsx(fw,{embedded:Sg,initialTab:N0?rc.dataset.initialTab||yg.get("tab")||"map":"frontend",publicOnly:!N0})}));
