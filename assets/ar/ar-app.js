function sv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},Za={},zu={exports:{}},Zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function av(){if(cm)return Zt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function y(V,ue,et){this.props=V,this.context=ue,this.refs=D,this.updater=et||M}y.prototype.isReactComponent={},y.prototype.setState=function(V,ue){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ue,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(V,ue,et){this.props=V,this.context=ue,this.refs=D,this.updater=et||M}var R=L.prototype=new _;R.constructor=L,C(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function b(V,ue,et){var tt,Pe={},fe=null,be=null;if(ue!=null)for(tt in ue.ref!==void 0&&(be=ue.ref),ue.key!==void 0&&(fe=""+ue.key),ue)z.call(ue,tt)&&!O.hasOwnProperty(tt)&&(Pe[tt]=ue[tt]);var ye=arguments.length-2;if(ye===1)Pe.children=et;else if(1<ye){for(var Be=Array(ye),it=0;it<ye;it++)Be[it]=arguments[it+2];Pe.children=Be}if(V&&V.defaultProps)for(tt in ye=V.defaultProps,ye)Pe[tt]===void 0&&(Pe[tt]=ye[tt]);return{$$typeof:s,type:V,key:fe,ref:be,props:Pe,_owner:I.current}}function N(V,ue){return{$$typeof:s,type:V.type,key:ue,ref:V.ref,props:V.props,_owner:V._owner}}function W(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function H(V){var ue={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(et){return ue[et]})}var Z=/\/+/g;function te(V,ue){return typeof V=="object"&&V!==null&&V.key!=null?H(""+V.key):ue.toString(36)}function me(V,ue,et,tt,Pe){var fe=typeof V;(fe==="undefined"||fe==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(fe){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case s:case e:be=!0}}if(be)return be=V,Pe=Pe(be),V=tt===""?"."+te(be,0):tt,P(Pe)?(et="",V!=null&&(et=V.replace(Z,"$&/")+"/"),me(Pe,ue,et,"",function(it){return it})):Pe!=null&&(W(Pe)&&(Pe=N(Pe,et+(!Pe.key||be&&be.key===Pe.key?"":(""+Pe.key).replace(Z,"$&/")+"/")+V)),ue.push(Pe)),1;if(be=0,tt=tt===""?".":tt+":",P(V))for(var ye=0;ye<V.length;ye++){fe=V[ye];var Be=tt+te(fe,ye);be+=me(fe,ue,et,Be,Pe)}else if(Be=x(V),typeof Be=="function")for(V=Be.call(V),ye=0;!(fe=V.next()).done;)fe=fe.value,Be=tt+te(fe,ye++),be+=me(fe,ue,et,Be,Pe);else if(fe==="object")throw ue=String(V),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.");return be}function Y(V,ue,et){if(V==null)return V;var tt=[],Pe=0;return me(V,tt,"","",function(fe){return ue.call(et,fe,Pe++)}),tt}function oe(V){if(V._status===-1){var ue=V._result;ue=ue(),ue.then(function(et){(V._status===0||V._status===-1)&&(V._status=1,V._result=et)},function(et){(V._status===0||V._status===-1)&&(V._status=2,V._result=et)}),V._status===-1&&(V._status=0,V._result=ue)}if(V._status===1)return V._result.default;throw V._result}var K={current:null},J={transition:null},pe={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:J,ReactCurrentOwner:I};function le(){throw Error("act(...) is not supported in production builds of React.")}return Zt.Children={map:Y,forEach:function(V,ue,et){Y(V,function(){ue.apply(this,arguments)},et)},count:function(V){var ue=0;return Y(V,function(){ue++}),ue},toArray:function(V){return Y(V,function(ue){return ue})||[]},only:function(V){if(!W(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Zt.Component=y,Zt.Fragment=t,Zt.Profiler=o,Zt.PureComponent=L,Zt.StrictMode=r,Zt.Suspense=h,Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Zt.act=le,Zt.cloneElement=function(V,ue,et){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var tt=C({},V.props),Pe=V.key,fe=V.ref,be=V._owner;if(ue!=null){if(ue.ref!==void 0&&(fe=ue.ref,be=I.current),ue.key!==void 0&&(Pe=""+ue.key),V.type&&V.type.defaultProps)var ye=V.type.defaultProps;for(Be in ue)z.call(ue,Be)&&!O.hasOwnProperty(Be)&&(tt[Be]=ue[Be]===void 0&&ye!==void 0?ye[Be]:ue[Be])}var Be=arguments.length-2;if(Be===1)tt.children=et;else if(1<Be){ye=Array(Be);for(var it=0;it<Be;it++)ye[it]=arguments[it+2];tt.children=ye}return{$$typeof:s,type:V.type,key:Pe,ref:fe,props:tt,_owner:be}},Zt.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Zt.createElement=b,Zt.createFactory=function(V){var ue=b.bind(null,V);return ue.type=V,ue},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(V){return{$$typeof:f,render:V}},Zt.isValidElement=W,Zt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:oe}},Zt.memo=function(V,ue){return{$$typeof:p,type:V,compare:ue===void 0?null:ue}},Zt.startTransition=function(V){var ue=J.transition;J.transition={};try{V()}finally{J.transition=ue}},Zt.unstable_act=le,Zt.useCallback=function(V,ue){return K.current.useCallback(V,ue)},Zt.useContext=function(V){return K.current.useContext(V)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(V){return K.current.useDeferredValue(V)},Zt.useEffect=function(V,ue){return K.current.useEffect(V,ue)},Zt.useId=function(){return K.current.useId()},Zt.useImperativeHandle=function(V,ue,et){return K.current.useImperativeHandle(V,ue,et)},Zt.useInsertionEffect=function(V,ue){return K.current.useInsertionEffect(V,ue)},Zt.useLayoutEffect=function(V,ue){return K.current.useLayoutEffect(V,ue)},Zt.useMemo=function(V,ue){return K.current.useMemo(V,ue)},Zt.useReducer=function(V,ue,et){return K.current.useReducer(V,ue,et)},Zt.useRef=function(V){return K.current.useRef(V)},Zt.useState=function(V){return K.current.useState(V)},Zt.useSyncExternalStore=function(V,ue,et){return K.current.useSyncExternalStore(V,ue,et)},Zt.useTransition=function(){return K.current.useTransition()},Zt.version="18.3.1",Zt}var um;function Ef(){return um||(um=1,zu.exports=av()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function ov(){if(dm)return Za;dm=1;var s=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var fm;function lv(){return fm||(fm=1,Bu.exports=ov()),Bu.exports}var g=lv(),Ie=Ef();const wf=sv(Ie);var xl={},Vu={exports:{}},ci={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function cv(){return hm||(hm=1,(function(s){function e(J,pe){var le=J.length;J.push(pe);e:for(;0<le;){var V=le-1>>>1,ue=J[V];if(0<o(ue,pe))J[V]=pe,J[le]=ue,le=V;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var pe=J[0],le=J.pop();if(le!==pe){J[0]=le;e:for(var V=0,ue=J.length,et=ue>>>1;V<et;){var tt=2*(V+1)-1,Pe=J[tt],fe=tt+1,be=J[fe];if(0>o(Pe,le))fe<ue&&0>o(be,Pe)?(J[V]=be,J[fe]=le,V=fe):(J[V]=Pe,J[tt]=le,V=tt);else if(fe<ue&&0>o(be,le))J[V]=be,J[fe]=le,V=fe;else break e}}return pe}function o(J,pe){var le=J.sortIndex-pe.sortIndex;return le!==0?le:J.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,C=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(J){for(var pe=t(p);pe!==null;){if(pe.callback===null)r(p);else if(pe.startTime<=J)r(p),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=t(p)}}function P(J){if(D=!1,R(J),!C)if(t(h)!==null)C=!0,oe(z);else{var pe=t(p);pe!==null&&K(P,pe.startTime-J)}}function z(J,pe){C=!1,D&&(D=!1,_(b),b=-1),M=!0;var le=x;try{for(R(pe),S=t(h);S!==null&&(!(S.expirationTime>pe)||J&&!H());){var V=S.callback;if(typeof V=="function"){S.callback=null,x=S.priorityLevel;var ue=V(S.expirationTime<=pe);pe=s.unstable_now(),typeof ue=="function"?S.callback=ue:S===t(h)&&r(h),R(pe)}else r(h);S=t(h)}if(S!==null)var et=!0;else{var tt=t(p);tt!==null&&K(P,tt.startTime-pe),et=!1}return et}finally{S=null,x=le,M=!1}}var I=!1,O=null,b=-1,N=5,W=-1;function H(){return!(s.unstable_now()-W<N)}function Z(){if(O!==null){var J=s.unstable_now();W=J;var pe=!0;try{pe=O(!0,J)}finally{pe?te():(I=!1,O=null)}}else I=!1}var te;if(typeof L=="function")te=function(){L(Z)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Y=me.port2;me.port1.onmessage=Z,te=function(){Y.postMessage(null)}}else te=function(){y(Z,0)};function oe(J){O=J,I||(I=!0,te())}function K(J,pe){b=y(function(){J(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){C||M||(C=!0,oe(z))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(x){case 1:case 2:case 3:var pe=3;break;default:pe=x}var le=x;x=pe;try{return J()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,pe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var le=x;x=J;try{return pe()}finally{x=le}},s.unstable_scheduleCallback=function(J,pe,le){var V=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,J){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=le+ue,J={id:v++,callback:pe,priorityLevel:J,startTime:le,expirationTime:ue,sortIndex:-1},le>V?(J.sortIndex=le,e(p,J),t(h)===null&&J===t(p)&&(D?(_(b),b=-1):D=!0,K(P,le-V))):(J.sortIndex=ue,e(h,J),C||M||(C=!0,oe(z))),J},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(J){var pe=x;return function(){var le=x;x=pe;try{return J.apply(this,arguments)}finally{x=le}}}})(Gu)),Gu}var pm;function uv(){return pm||(pm=1,Hu.exports=cv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function dv(){if(mm)return ci;mm=1;var s=Ef(),e=uv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function D(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new D(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new D(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new D(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new D(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new D(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new D(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new D(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new D(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new D(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),H=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),J=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,V;function ue(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var et=!1;function tt(n,i){if(!n||et)return"";et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var d=ge.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,B=m.length-1;1<=T&&0<=B&&d[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(d[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||d[T]!==m[B]){var q=`
`+d[T].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=T&&0<=B);break}}}finally{et=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ue(n):""}function Pe(n){switch(n.tag){case 5:return ue(n.type);case 16:return ue("Lazy");case 13:return ue("Suspense");case 19:return ue("SuspenseList");case 0:case 2:case 15:return n=tt(n.type,!1),n;case 11:return n=tt(n.type.render,!1),n;case 1:return n=tt(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case N:return"Profiler";case b:return"StrictMode";case te:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ut(n){n._valueTracker||(n._valueTracker=it(n))}function St(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ft(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ot(n,i){yt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Xt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Xt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function jt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Xt(n,i,a){(i!=="number"||Mt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $=Array.isArray;function kt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function Ke(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Bt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,Se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){Ge.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function Te(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Me=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(Me[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function qe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mt=null,Dt=null,X=null;function Ee(n){if(n=Fa(n)){if(typeof mt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),mt(n.stateNode,n.type,i))}}function ve(n){Dt?X?X.push(n):X=[n]:Dt=n}function Ye(){if(Dt){var n=Dt,i=X;if(X=Dt=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function je(n,i){return n(i)}function Ne(){}var dt=!1;function bt(n,i,a){if(dt)return n(i,a);dt=!0;try{return je(n,i,a)}finally{dt=!1,(Dt!==null||X!==null)&&(Ne(),Ye())}}function sn(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Qt=!1;if(f)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Qt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Qt=!1}function gn(n,i,a,c,d,m,T,B,q){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(ze){this.onError(ze)}}var Un=!1,yi=null,Fn=!1,On=null,Hn={onError:function(n){Un=!0,yi=n}};function Si(n,i,a,c,d,m,T,B,q){Un=!1,yi=null,gn.apply(Hn,arguments)}function lr(n,i,a,c,d,m,T,B,q){if(Si.apply(this,arguments),Un){if(Un){var ge=yi;Un=!1,yi=null}else throw Error(t(198));Fn||(Fn=!0,On=ge)}}function kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Gn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Di(n){if(kn(n)!==n)throw Error(t(188))}function Li(n){var i=n.alternate;if(!i){if(i=kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Di(d),n;if(m===c)return Di(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,B=d.child;B;){if(B===a){T=!0,a=d,c=m;break}if(B===c){T=!0,c=d,a=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===a){T=!0,a=m,c=d;break}if(B===c){T=!0,c=m,a=d;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function G(n){return n=Li(n),n!==null?Le(n):null}function Le(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Le(n);if(i!==null)return i;n=n.sibling}return null}var Ue=e.unstable_scheduleCallback,$e=e.unstable_cancelCallback,ot=e.unstable_shouldYield,at=e.unstable_requestPaint,Je=e.unstable_now,Kt=e.unstable_getCurrentPriorityLevel,Lt=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,ae=e.unstable_LowPriority,Q=e.unstable_IdlePriority,ie=null,De=null;function _e(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:gt,Qe=Math.log,nt=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(Qe(n)/nt|0)|0}var _t=64,st=4194304;function E(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function k(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~d;B!==0?c=E(B):(m&=T,m!==0&&(c=E(m)))}else T=a&~d,T!==0?c=E(T):m!==0&&(c=E(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ae(i),d=1<<a,c|=n[a],i&=~d;return c}function F(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function re(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ae(m),B=1<<T,q=d[T];q===-1?((B&a)===0||(B&c)!==0)&&(d[T]=F(B,i)):q<=i&&(n.expiredLanes|=B),m&=~B}}function we(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ce(){var n=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),n}function Fe(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Oe(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function Wt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ae(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Et(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ae(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ht=0;function zt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var At,Vt,fn,Nt,Tn,lt=!1,Ht=[],xn=null,ii=null,Ui=null,Rr=new Map,an=new Map,Yi=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&Vt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Cg(n,i,a,c,d){switch(i){case"focusin":return xn=Ma(xn,n,i,a,c,d),!0;case"dragenter":return ii=Ma(ii,n,i,a,c,d),!0;case"mouseover":return Ui=Ma(Ui,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Rr.set(m,Ma(Rr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,an.set(m,Ma(an.get(m)||null,n,i,a,c,d)),!0}return!1}function Yf(n){var i=ns(n.target);if(i!==null){var a=kn(i);if(a!==null){if(i=a.tag,i===13){if(i=Gn(a),i!==null){n.blockedOn=i,Tn(n.priority,function(){fn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=Fa(a),i!==null&&Vt(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){vo(n)&&a.delete(i)}function Rg(){lt=!1,xn!==null&&vo(xn)&&(xn=null),ii!==null&&vo(ii)&&(ii=null),Ui!==null&&vo(Ui)&&(Ui=null),Rr.forEach($f),an.forEach($f)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,lt||(lt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function wa(n){function i(d){return Ea(d,n)}if(0<Ht.length){Ea(Ht[0],n);for(var a=1;a<Ht.length;a++){var c=Ht[a];c.blockedOn===n&&(c.blockedOn=null)}}for(xn!==null&&Ea(xn,n),ii!==null&&Ea(ii,n),Ui!==null&&Ea(Ui,n),Rr.forEach(i),an.forEach(i),a=0;a<Yi.length;a++)c=Yi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&Yi.shift()}var Ns=P.ReactCurrentBatchConfig,_o=!0;function Ng(n,i,a,c){var d=ht,m=Ns.transition;Ns.transition=null;try{ht=1,dc(n,i,a,c)}finally{ht=d,Ns.transition=m}}function Pg(n,i,a,c){var d=ht,m=Ns.transition;Ns.transition=null;try{ht=4,dc(n,i,a,c)}finally{ht=d,Ns.transition=m}}function dc(n,i,a,c){if(_o){var d=fc(n,i,a,c);if(d===null)Rc(n,i,c,yo,a),Xf(n,c);else if(Cg(d,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<Ag.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&At(m),m=fc(n,i,a,c),m===null&&Rc(n,i,c,yo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var yo=null;function fc(n,i,a,c){if(yo=null,n=Ve(c),n=ns(n),n!==null)if(i=kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Gn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kt()){case Lt:return 1;case A:return 4;case j:case ae:return 16;case Q:return 536870912;default:return 16}default:return 16}}var Nr=null,hc=null,So=null;function Kf(){if(So)return So;var n,i=hc,a=i.length,c,d="value"in Nr?Nr.value:Nr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return So=d.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Eo(){return!0}function Zf(){return!1}function fi(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Eo:Zf,this.isPropagationStopped=Zf,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=fi(Ps),ba=le({},Ps,{view:0,detail:0}),Ig=fi(ba),mc,gc,Ta,wo=le({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(mc=n.screenX-Ta.screenX,gc=n.screenY-Ta.screenY):gc=mc=0,Ta=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Jf=fi(wo),Dg=le({},wo,{dataTransfer:0}),Lg=fi(Dg),Ug=le({},ba,{relatedTarget:0}),xc=fi(Ug),Fg=le({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=fi(Fg),kg=le({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bg=fi(kg),zg=le({},Ps,{data:0}),Qf=fi(zg),Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gg[n])?!!i[n]:!1}function vc(){return jg}var Wg=le({},ba,{key:function(n){if(n.key){var i=Vg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xg=fi(Wg),Yg=le({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=fi(Yg),$g=le({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),qg=fi($g),Kg=le({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=fi(Kg),Jg=le({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=fi(Jg),ex=[9,13,27,32],_c=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var tx=f&&"TextEvent"in window&&!Aa,th=f&&(!_c||Aa&&8<Aa&&11>=Aa),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return ex.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function nx(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function ix(n,i){if(Is)return n==="compositionend"||!_c&&rh(n,i)?(n=Kf(),So=hc=Nr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!rx[n.type]:i==="textarea"}function oh(n,i,a,c){ve(c),i=Ro(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Ra=null;function sx(n){bh(n,0)}function bo(n){var i=Os(n);if(St(i))return n}function ax(n,i){if(n==="change")return i}var lh=!1;if(f){var yc;if(f){var Sc="oninput"in document;if(!Sc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Sc=typeof ch.oninput=="function"}yc=Sc}else yc=!1;lh=yc&&(!document.documentMode||9<document.documentMode)}function uh(){Ca&&(Ca.detachEvent("onpropertychange",dh),Ra=Ca=null)}function dh(n){if(n.propertyName==="value"&&bo(Ra)){var i=[];oh(i,Ra,n,Ve(n)),bt(sx,i)}}function ox(n,i,a){n==="focusin"?(uh(),Ca=i,Ra=a,Ca.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function lx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ra)}function cx(n,i){if(n==="click")return bo(i)}function ux(n,i){if(n==="input"||n==="change")return bo(i)}function dx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Fi=typeof Object.is=="function"?Object.is:dx;function Na(n,i){if(Fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Fi(n[d],i[d]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=Mt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mt(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function fx(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=hh(a,m);var T=hh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ec=null,Pa=null,wc=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Ds==null||Ds!==Mt(c)||(c=Ds,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=Ro(Ec,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ao(n){if(bc[n])return bc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return bc[n]=i[a];return n}var vh=Ao("animationend"),_h=Ao("animationiteration"),yh=Ao("animationstart"),Sh=Ao("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){Mh.set(n,i),l(i,[n])}for(var Tc=0;Tc<Eh.length;Tc++){var Ac=Eh[Tc],px=Ac.toLowerCase(),mx=Ac[0].toUpperCase()+Ac.slice(1);Pr(px,"on"+mx)}Pr(vh,"onAnimationEnd"),Pr(_h,"onAnimationIteration"),Pr(yh,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function wh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,lr(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],q=B.instance,ge=B.currentTarget;if(B=B.listener,q!==m&&d.isPropagationStopped())break e;wh(d,B,ge),m=q}else for(T=0;T<c.length;T++){if(B=c[T],q=B.instance,ge=B.currentTarget,B=B.listener,q!==m&&d.isPropagationStopped())break e;wh(d,B,ge),m=q}}}if(Fn)throw n=On,Fn=!1,On=null,n}function un(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(gx.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Cc("selectionchange",!1,i))}}function Th(n,i,a,c){switch(qf(i)){case 1:var d=Ng;break;case 4:d=Pg;break;default:d=dc}a=d.bind(null,i,a,n),d=void 0,!Qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var q=T.tag;if((q===3||q===4)&&(q=T.stateNode.containerInfo,q===d||q.nodeType===8&&q.parentNode===d))return;T=T.return}for(;B!==null;){if(T=ns(B),T===null)return;if(q=T.tag,q===5||q===6){c=m=T;continue e}B=B.parentNode}}c=c.return}bt(function(){var ge=m,ze=Ve(a),We=[];e:{var ke=Mh.get(n);if(ke!==void 0){var ct=pc,pt=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":ct=Xg;break;case"focusin":pt="focus",ct=xc;break;case"focusout":pt="blur",ct=xc;break;case"beforeblur":case"afterblur":ct=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=qg;break;case vh:case _h:case yh:ct=Og;break;case Sh:ct=Zg;break;case"scroll":ct=Ig;break;case"wheel":ct=Qg;break;case"copy":case"cut":case"paste":ct=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=eh}var xt=(i&4)!==0,_n=!xt&&n==="scroll",de=xt?ke!==null?ke+"Capture":null:ke;xt=[];for(var ee=ge,he;ee!==null;){he=ee;var Ze=he.stateNode;if(he.tag===5&&Ze!==null&&(he=Ze,de!==null&&(Ze=sn(ee,de),Ze!=null&&xt.push(La(ee,Ze,he)))),_n)break;ee=ee.return}0<xt.length&&(ke=new ct(ke,pt,null,a,ze),We.push({event:ke,listeners:xt}))}}if((i&7)===0){e:{if(ke=n==="mouseover"||n==="pointerover",ct=n==="mouseout"||n==="pointerout",ke&&a!==Ce&&(pt=a.relatedTarget||a.fromElement)&&(ns(pt)||pt[cr]))break e;if((ct||ke)&&(ke=ze.window===ze?ze:(ke=ze.ownerDocument)?ke.defaultView||ke.parentWindow:window,ct?(pt=a.relatedTarget||a.toElement,ct=ge,pt=pt?ns(pt):null,pt!==null&&(_n=kn(pt),pt!==_n||pt.tag!==5&&pt.tag!==6)&&(pt=null)):(ct=null,pt=ge),ct!==pt)){if(xt=Jf,Ze="onMouseLeave",de="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(xt=eh,Ze="onPointerLeave",de="onPointerEnter",ee="pointer"),_n=ct==null?ke:Os(ct),he=pt==null?ke:Os(pt),ke=new xt(Ze,ee+"leave",ct,a,ze),ke.target=_n,ke.relatedTarget=he,Ze=null,ns(ze)===ge&&(xt=new xt(de,ee+"enter",pt,a,ze),xt.target=he,xt.relatedTarget=_n,Ze=xt),_n=Ze,ct&&pt)t:{for(xt=ct,de=pt,ee=0,he=xt;he;he=Us(he))ee++;for(he=0,Ze=de;Ze;Ze=Us(Ze))he++;for(;0<ee-he;)xt=Us(xt),ee--;for(;0<he-ee;)de=Us(de),he--;for(;ee--;){if(xt===de||de!==null&&xt===de.alternate)break t;xt=Us(xt),de=Us(de)}xt=null}else xt=null;ct!==null&&Ah(We,ke,ct,xt,!1),pt!==null&&_n!==null&&Ah(We,_n,pt,xt,!0)}}e:{if(ke=ge?Os(ge):window,ct=ke.nodeName&&ke.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ke.type==="file")var vt=ax;else if(ah(ke))if(lh)vt=ux;else{vt=lx;var Ct=ox}else(ct=ke.nodeName)&&ct.toLowerCase()==="input"&&(ke.type==="checkbox"||ke.type==="radio")&&(vt=cx);if(vt&&(vt=vt(n,ge))){oh(We,vt,a,ze);break e}Ct&&Ct(n,ke,ge),n==="focusout"&&(Ct=ke._wrapperState)&&Ct.controlled&&ke.type==="number"&&Xt(ke,"number",ke.value)}switch(Ct=ge?Os(ge):window,n){case"focusin":(ah(Ct)||Ct.contentEditable==="true")&&(Ds=Ct,Ec=ge,Pa=null);break;case"focusout":Pa=Ec=Ds=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,gh(We,a,ze);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":gh(We,a,ze)}var Rt;if(_c)e:{switch(n){case"compositionstart":var Ut="onCompositionStart";break e;case"compositionend":Ut="onCompositionEnd";break e;case"compositionupdate":Ut="onCompositionUpdate";break e}Ut=void 0}else Is?rh(n,a)&&(Ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ut="onCompositionStart");Ut&&(th&&a.locale!=="ko"&&(Is||Ut!=="onCompositionStart"?Ut==="onCompositionEnd"&&Is&&(Rt=Kf()):(Nr=ze,hc="value"in Nr?Nr.value:Nr.textContent,Is=!0)),Ct=Ro(ge,Ut),0<Ct.length&&(Ut=new Qf(Ut,n,null,a,ze),We.push({event:Ut,listeners:Ct}),Rt?Ut.data=Rt:(Rt=sh(a),Rt!==null&&(Ut.data=Rt)))),(Rt=tx?nx(n,a):ix(n,a))&&(ge=Ro(ge,"onBeforeInput"),0<ge.length&&(ze=new Qf("onBeforeInput","beforeinput",null,a,ze),We.push({event:ze,listeners:ge}),ze.data=Rt))}bh(We,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=sn(n,a),m!=null&&c.unshift(La(n,m,d)),m=sn(n,i),m!=null&&c.push(La(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var B=a,q=B.alternate,ge=B.stateNode;if(q!==null&&q===c)break;B.tag===5&&ge!==null&&(B=ge,d?(q=sn(a,m),q!=null&&T.unshift(La(a,q,B))):d||(q=sn(a,m),q!=null&&T.push(La(a,q,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var xx=/\r\n?/g,vx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(xx,`
`).replace(vx,"")}function No(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Po(){}var Nc=null,Pc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(Sx)}:Dc;function Sx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),$i="__reactFiber$"+Fs,Ua="__reactProps$"+Fs,cr="__reactContainer$"+Fs,Uc="__reactEvents$"+Fs,Mx="__reactListeners$"+Fs,Ex="__reactHandles$"+Fs;function ns(n){var i=n[$i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[$i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[$i])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[$i]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ua]||null}var Fc=[],ks=-1;function Dr(n){return{current:n}}function dn(n){0>ks||(n.current=Fc[ks],Fc[ks]=null,ks--)}function cn(n,i){ks++,Fc[ks]=n.current,n.current=i}var Lr={},jn=Dr(Lr),ri=Dr(!1),is=Lr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function si(n){return n=n.childContextTypes,n!=null}function Do(){dn(ri),dn(jn)}function Ph(n,i,a){if(jn.current!==Lr)throw Error(t(168));cn(jn,i),cn(ri,a)}function Ih(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return le({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,is=jn.current,cn(jn,n),cn(ri,ri.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ih(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,dn(ri),dn(jn),cn(jn,n)):dn(ri),cn(ri,a)}var ur=null,Uo=!1,Oc=!1;function Lh(n){ur===null?ur=[n]:ur.push(n)}function wx(n){Uo=!0,Lh(n)}function Ur(){if(!Oc&&ur!==null){Oc=!0;var n=0,i=ht;try{var a=ur;for(ht=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,Uo=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),Ue(Lt,Ur),d}finally{ht=i,Oc=!1}}return null}var zs=[],Vs=0,Fo=null,Oo=0,Mi=[],Ei=0,rs=null,dr=1,fr="";function ss(n,i){zs[Vs++]=Oo,zs[Vs++]=Fo,Fo=n,Oo=i}function Uh(n,i,a){Mi[Ei++]=dr,Mi[Ei++]=fr,Mi[Ei++]=rs,rs=n;var c=dr;n=fr;var d=32-Ae(c)-1;c&=~(1<<d),a+=1;var m=32-Ae(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,dr=1<<32-Ae(i)+d|a<<d|c,fr=m+n}else dr=1<<m|a<<d|c,fr=n}function kc(n){n.return!==null&&(ss(n,1),Uh(n,1,0))}function Bc(n){for(;n===Fo;)Fo=zs[--Vs],zs[Vs]=null,Oo=zs[--Vs],zs[Vs]=null;for(;n===rs;)rs=Mi[--Ei],Mi[Ei]=null,fr=Mi[--Ei],Mi[Ei]=null,dr=Mi[--Ei],Mi[Ei]=null}var hi=null,pi=null,hn=!1,Oi=null;function Fh(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Oh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,hi=n,pi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,hi=n,pi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,hi=n,pi=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(hn){var i=pi;if(i){var a=i;if(!Oh(n,i)){if(zc(n))throw Error(t(418));i=Ir(a.nextSibling);var c=hi;i&&Oh(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,hn=!1,hi=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,hn=!1,hi=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hi=n}function ko(n){if(n!==hi)return!1;if(!hn)return kh(n),hn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=pi)){if(zc(n))throw Bh(),Error(t(418));for(;i;)Fh(n,i),i=Ir(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){pi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}pi=null}}else pi=hi?Ir(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=pi;n;)n=Ir(n.nextSibling)}function Hs(){pi=hi=null,hn=!1}function Hc(n){Oi===null?Oi=[n]:Oi.push(n)}var bx=P.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=d.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(de,ee){if(n){var he=de.deletions;he===null?(de.deletions=[ee],de.flags|=16):he.push(ee)}}function a(de,ee){if(!n)return null;for(;ee!==null;)i(de,ee),ee=ee.sibling;return null}function c(de,ee){for(de=new Map;ee!==null;)ee.key!==null?de.set(ee.key,ee):de.set(ee.index,ee),ee=ee.sibling;return de}function d(de,ee){return de=Gr(de,ee),de.index=0,de.sibling=null,de}function m(de,ee,he){return de.index=he,n?(he=de.alternate,he!==null?(he=he.index,he<ee?(de.flags|=2,ee):he):(de.flags|=2,ee)):(de.flags|=1048576,ee)}function T(de){return n&&de.alternate===null&&(de.flags|=2),de}function B(de,ee,he,Ze){return ee===null||ee.tag!==6?(ee=Du(he,de.mode,Ze),ee.return=de,ee):(ee=d(ee,he),ee.return=de,ee)}function q(de,ee,he,Ze){var vt=he.type;return vt===O?ze(de,ee,he.props.children,Ze,he.key):ee!==null&&(ee.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===oe&&zh(vt)===ee.type)?(Ze=d(ee,he.props),Ze.ref=Oa(de,ee,he),Ze.return=de,Ze):(Ze=cl(he.type,he.key,he.props,null,de.mode,Ze),Ze.ref=Oa(de,ee,he),Ze.return=de,Ze)}function ge(de,ee,he,Ze){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=Lu(he,de.mode,Ze),ee.return=de,ee):(ee=d(ee,he.children||[]),ee.return=de,ee)}function ze(de,ee,he,Ze,vt){return ee===null||ee.tag!==7?(ee=hs(he,de.mode,Ze,vt),ee.return=de,ee):(ee=d(ee,he),ee.return=de,ee)}function We(de,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=Du(""+ee,de.mode,he),ee.return=de,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case z:return he=cl(ee.type,ee.key,ee.props,null,de.mode,he),he.ref=Oa(de,null,ee),he.return=de,he;case I:return ee=Lu(ee,de.mode,he),ee.return=de,ee;case oe:var Ze=ee._init;return We(de,Ze(ee._payload),he)}if($(ee)||pe(ee))return ee=hs(ee,de.mode,he,null),ee.return=de,ee;Bo(de,ee)}return null}function ke(de,ee,he,Ze){var vt=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return vt!==null?null:B(de,ee,""+he,Ze);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===vt?q(de,ee,he,Ze):null;case I:return he.key===vt?ge(de,ee,he,Ze):null;case oe:return vt=he._init,ke(de,ee,vt(he._payload),Ze)}if($(he)||pe(he))return vt!==null?null:ze(de,ee,he,Ze,null);Bo(de,he)}return null}function ct(de,ee,he,Ze,vt){if(typeof Ze=="string"&&Ze!==""||typeof Ze=="number")return de=de.get(he)||null,B(ee,de,""+Ze,vt);if(typeof Ze=="object"&&Ze!==null){switch(Ze.$$typeof){case z:return de=de.get(Ze.key===null?he:Ze.key)||null,q(ee,de,Ze,vt);case I:return de=de.get(Ze.key===null?he:Ze.key)||null,ge(ee,de,Ze,vt);case oe:var Ct=Ze._init;return ct(de,ee,he,Ct(Ze._payload),vt)}if($(Ze)||pe(Ze))return de=de.get(he)||null,ze(ee,de,Ze,vt,null);Bo(ee,Ze)}return null}function pt(de,ee,he,Ze){for(var vt=null,Ct=null,Rt=ee,Ut=ee=0,Dn=null;Rt!==null&&Ut<he.length;Ut++){Rt.index>Ut?(Dn=Rt,Rt=null):Dn=Rt.sibling;var rn=ke(de,Rt,he[Ut],Ze);if(rn===null){Rt===null&&(Rt=Dn);break}n&&Rt&&rn.alternate===null&&i(de,Rt),ee=m(rn,ee,Ut),Ct===null?vt=rn:Ct.sibling=rn,Ct=rn,Rt=Dn}if(Ut===he.length)return a(de,Rt),hn&&ss(de,Ut),vt;if(Rt===null){for(;Ut<he.length;Ut++)Rt=We(de,he[Ut],Ze),Rt!==null&&(ee=m(Rt,ee,Ut),Ct===null?vt=Rt:Ct.sibling=Rt,Ct=Rt);return hn&&ss(de,Ut),vt}for(Rt=c(de,Rt);Ut<he.length;Ut++)Dn=ct(Rt,de,Ut,he[Ut],Ze),Dn!==null&&(n&&Dn.alternate!==null&&Rt.delete(Dn.key===null?Ut:Dn.key),ee=m(Dn,ee,Ut),Ct===null?vt=Dn:Ct.sibling=Dn,Ct=Dn);return n&&Rt.forEach(function(jr){return i(de,jr)}),hn&&ss(de,Ut),vt}function xt(de,ee,he,Ze){var vt=pe(he);if(typeof vt!="function")throw Error(t(150));if(he=vt.call(he),he==null)throw Error(t(151));for(var Ct=vt=null,Rt=ee,Ut=ee=0,Dn=null,rn=he.next();Rt!==null&&!rn.done;Ut++,rn=he.next()){Rt.index>Ut?(Dn=Rt,Rt=null):Dn=Rt.sibling;var jr=ke(de,Rt,rn.value,Ze);if(jr===null){Rt===null&&(Rt=Dn);break}n&&Rt&&jr.alternate===null&&i(de,Rt),ee=m(jr,ee,Ut),Ct===null?vt=jr:Ct.sibling=jr,Ct=jr,Rt=Dn}if(rn.done)return a(de,Rt),hn&&ss(de,Ut),vt;if(Rt===null){for(;!rn.done;Ut++,rn=he.next())rn=We(de,rn.value,Ze),rn!==null&&(ee=m(rn,ee,Ut),Ct===null?vt=rn:Ct.sibling=rn,Ct=rn);return hn&&ss(de,Ut),vt}for(Rt=c(de,Rt);!rn.done;Ut++,rn=he.next())rn=ct(Rt,de,Ut,rn.value,Ze),rn!==null&&(n&&rn.alternate!==null&&Rt.delete(rn.key===null?Ut:rn.key),ee=m(rn,ee,Ut),Ct===null?vt=rn:Ct.sibling=rn,Ct=rn);return n&&Rt.forEach(function(rv){return i(de,rv)}),hn&&ss(de,Ut),vt}function _n(de,ee,he,Ze){if(typeof he=="object"&&he!==null&&he.type===O&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var vt=he.key,Ct=ee;Ct!==null;){if(Ct.key===vt){if(vt=he.type,vt===O){if(Ct.tag===7){a(de,Ct.sibling),ee=d(Ct,he.props.children),ee.return=de,de=ee;break e}}else if(Ct.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===oe&&zh(vt)===Ct.type){a(de,Ct.sibling),ee=d(Ct,he.props),ee.ref=Oa(de,Ct,he),ee.return=de,de=ee;break e}a(de,Ct);break}else i(de,Ct);Ct=Ct.sibling}he.type===O?(ee=hs(he.props.children,de.mode,Ze,he.key),ee.return=de,de=ee):(Ze=cl(he.type,he.key,he.props,null,de.mode,Ze),Ze.ref=Oa(de,ee,he),Ze.return=de,de=Ze)}return T(de);case I:e:{for(Ct=he.key;ee!==null;){if(ee.key===Ct)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){a(de,ee.sibling),ee=d(ee,he.children||[]),ee.return=de,de=ee;break e}else{a(de,ee);break}else i(de,ee);ee=ee.sibling}ee=Lu(he,de.mode,Ze),ee.return=de,de=ee}return T(de);case oe:return Ct=he._init,_n(de,ee,Ct(he._payload),Ze)}if($(he))return pt(de,ee,he,Ze);if(pe(he))return xt(de,ee,he,Ze);Bo(de,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ee!==null&&ee.tag===6?(a(de,ee.sibling),ee=d(ee,he),ee.return=de,de=ee):(a(de,ee),ee=Du(he,de.mode,Ze),ee.return=de,de=ee),T(de)):a(de,ee)}return _n}var Gs=Vh(!0),Hh=Vh(!1),zo=Dr(null),Vo=null,js=null,Gc=null;function jc(){Gc=js=Vo=null}function Wc(n){var i=zo.current;dn(zo),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Vo=n,Gc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ai=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Vo===null)throw Error(t(308));js=n,Vo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var as=null;function Yc(n){as===null?as=[n]:as.push(n)}function Gh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,hr(n,c)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(tn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hr(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,hr(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Et(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Go(n,i,a,c){var d=n.updateQueue;Fr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var q=B,ge=q.next;q.next=null,T===null?m=ge:T.next=ge,T=q;var ze=n.alternate;ze!==null&&(ze=ze.updateQueue,B=ze.lastBaseUpdate,B!==T&&(B===null?ze.firstBaseUpdate=ge:B.next=ge,ze.lastBaseUpdate=q))}if(m!==null){var We=d.baseState;T=0,ze=ge=q=null,B=m;do{var ke=B.lane,ct=B.eventTime;if((c&ke)===ke){ze!==null&&(ze=ze.next={eventTime:ct,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var pt=n,xt=B;switch(ke=i,ct=a,xt.tag){case 1:if(pt=xt.payload,typeof pt=="function"){We=pt.call(ct,We,ke);break e}We=pt;break e;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=xt.payload,ke=typeof pt=="function"?pt.call(ct,We,ke):pt,ke==null)break e;We=le({},We,ke);break e;case 2:Fr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,ke=d.effects,ke===null?d.effects=[B]:ke.push(B))}else ct={eventTime:ct,lane:ke,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ze===null?(ge=ze=ct,q=We):ze=ze.next=ct,T|=ke;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;ke=B,B=ke.next,ke.next=null,d.lastBaseUpdate=ke,d.shared.pending=null}}while(!0);if(ze===null&&(q=We),d.baseState=q,d.firstBaseUpdate=ge,d.lastBaseUpdate=ze,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);cs|=T,n.lanes=T,n.memoizedState=We}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},qi=Dr(ka),Ba=Dr(ka),za=Dr(ka);function os(n){if(n===ka)throw Error(t(174));return n}function qc(n,i){switch(cn(za,i),cn(Ba,n),cn(qi,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}dn(qi),cn(qi,i)}function Xs(){dn(qi),dn(Ba),dn(za)}function Yh(n){os(za.current);var i=os(qi.current),a=w(i,n.type);i!==a&&(cn(Ba,n),cn(qi,a))}function Kc(n){Ba.current===n&&(dn(qi),dn(Ba))}var pn=Dr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Jc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Wo=P.ReactCurrentDispatcher,Qc=P.ReactCurrentBatchConfig,ls=0,mn=null,An=null,Pn=null,Xo=!1,Va=!1,Ha=0,Tx=0;function Wn(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Fi(n[a],i[a]))return!1;return!0}function tu(n,i,a,c,d,m){if(ls=m,mn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?Nx:Px,n=a(c,d),Va){m=0;do{if(Va=!1,Ha=0,25<=m)throw Error(t(301));m+=1,Pn=An=null,i.updateQueue=null,Wo.current=Ix,n=a(c,d)}while(Va)}if(Wo.current=qo,i=An!==null&&An.next!==null,ls=0,Pn=An=mn=null,Xo=!1,i)throw Error(t(300));return n}function nu(){var n=Ha!==0;return Ha=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?mn.memoizedState=Pn=n:Pn=Pn.next=n,Pn}function bi(){if(An===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var i=Pn===null?mn.memoizedState:Pn.next;if(i!==null)Pn=i,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Pn===null?mn.memoizedState=Pn=n:Pn=Pn.next=n}return Pn}function Ga(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=An,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var B=T=null,q=null,ge=m;do{var ze=ge.lane;if((ls&ze)===ze)q!==null&&(q=q.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var We={lane:ze,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};q===null?(B=q=We,T=c):q=q.next=We,mn.lanes|=ze,cs|=ze}ge=ge.next}while(ge!==null&&ge!==m);q===null?T=c:q.next=B,Fi(c,i.memoizedState)||(ai=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,mn.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ru(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Fi(m,i.memoizedState)||(ai=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $h(){}function qh(n,i){var a=mn,c=bi(),d=i(),m=!Fi(c.memoizedState,d);if(m&&(c.memoizedState=d,ai=!0),c=c.queue,su(Jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Pn!==null&&Pn.memoizedState.tag&1){if(a.flags|=2048,ja(9,Zh.bind(null,a,c,d,i),void 0,null),In===null)throw Error(t(349));(ls&30)!==0||Kh(a,i,d)}return d}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Qh(i)&&ep(n)}function Jh(n,i,a){return a(function(){Qh(i)&&ep(n)})}function Qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Fi(n,a)}catch{return!0}}function ep(n){var i=hr(n,1);i!==null&&Vi(i,n,1,-1)}function tp(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Rx.bind(null,mn,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return bi().memoizedState}function Yo(n,i,a,c){var d=Ki();mn.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var d=bi();c=c===void 0?null:c;var m=void 0;if(An!==null){var T=An.memoizedState;if(m=T.destroy,c!==null&&eu(c,T.deps)){d.memoizedState=ja(i,a,m,c);return}}mn.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function ip(n,i){return Yo(8390656,8,n,i)}function su(n,i){return $o(2048,8,n,i)}function rp(n,i){return $o(4,2,n,i)}function sp(n,i){return $o(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,ap.bind(null,i,n),a)}function au(){}function lp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ai=!0),n.memoizedState=a):(Fi(a,i)||(a=ce(),mn.lanes|=a,cs|=a,n.baseState=!0),i)}function Ax(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{ht=a,Qc.transition=c}}function dp(){return bi().memoizedState}function Cx(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var d=Qn();Vi(a,n,c,d),pp(a,i,c)}}function Rx(n,i,a){var c=Vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,a);if(d.hasEagerState=!0,d.eagerState=B,Fi(B,T)){var q=i.interleaved;q===null?(d.next=d,Yc(i)):(d.next=q.next,q.next=d),i.interleaved=d;return}}catch{}finally{}a=Gh(n,i,d,c),a!==null&&(d=Qn(),Vi(a,n,c,d),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===mn||i!==null&&i===mn}function hp(n,i){Va=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Et(n,a)}}var qo={readContext:wi,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},Nx={readContext:wi,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cx.bind(null,mn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:au,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=Ax.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=mn,d=Ki();if(hn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),In===null)throw Error(t(349));(ls&30)!==0||Kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ip(Jh.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ki(),i=In.identifierPrefix;if(hn){var a=fr,c=dr;a=(c&~(1<<32-Ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Tx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Px={readContext:wi,useCallback:lp,useContext:wi,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=bi();return up(i,An.memoizedState,n)},useTransition:function(){var n=iu(Ga)[0],i=bi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1},Ix={readContext:wi,useCallback:lp,useContext:wi,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ru,useRef:np,useState:function(){return ru(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=bi();return An===null?i.memoizedState=n:up(i,An.memoizedState,n)},useTransition:function(){var n=ru(Ga)[0],i=bi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1};function ki(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ou(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Qn(),d=Vr(n),m=pr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Vi(i,n,d,c),Ho(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Qn(),d=Vr(n),m=pr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Vi(i,n,d,c),Ho(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qn(),c=Vr(n),d=pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Or(n,d,c),i!==null&&(Vi(i,n,c,a),Ho(i,n,c))}};function mp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function gp(n,i,a){var c=!1,d=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=wi(m):(d=si(i)?is:jn.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function lu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=wi(m):(m=si(i)?is:jn.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ou(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ko.enqueueReplaceState(d,d.state,null),Go(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,bu=c),uu(n,i)},a}function _p(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){uu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uu(n,i),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Dx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Yx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Lx=P.ReactCurrentOwner,ai=!1;function Jn(n,i,a,c){i.child=n===null?Hh(i,null,a,c):Gs(i,n.child,a,c)}function Ep(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=tu(n,i,a,c,m,d),a=nu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(hn&&a&&kc(i),i.flags|=1,Jn(n,i,c,d),i.child)}function wp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Iu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bp(n,i,m,c,d)):(n=cl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(T,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Gr(m,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(ai=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ai=!0);else return i.lanes=n.lanes,mr(n,i,d)}return du(n,i,a,c,d)}function Tp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},cn(qs,mi),mi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,cn(qs,mi),mi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,cn(qs,mi),mi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,cn(qs,mi),mi|=c;return Jn(n,i,d,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,a,c,d){var m=si(a)?is:jn.current;return m=Bs(i,m),Ws(i,d),a=tu(n,i,a,c,m,d),c=nu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(hn&&c&&kc(i),i.flags|=1,Jn(n,i,a,d),i.child)}function Cp(n,i,a,c,d){if(si(a)){var m=!0;Lo(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Jo(n,i),gp(i,a,c),lu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var q=T.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=wi(ge):(ge=si(a)?is:jn.current,ge=Bs(i,ge));var ze=a.getDerivedStateFromProps,We=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function";We||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||q!==ge)&&xp(i,T,c,ge),Fr=!1;var ke=i.memoizedState;T.state=ke,Go(i,c,T,d),q=i.memoizedState,B!==c||ke!==q||ri.current||Fr?(typeof ze=="function"&&(ou(i,a,ze,c),q=i.memoizedState),(B=Fr||mp(i,a,B,c,ke,q,ge))?(We||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),T.props=c,T.state=q,T.context=ge,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,jh(n,i),B=i.memoizedProps,ge=i.type===i.elementType?B:ki(i.type,B),T.props=ge,We=i.pendingProps,ke=T.context,q=a.contextType,typeof q=="object"&&q!==null?q=wi(q):(q=si(a)?is:jn.current,q=Bs(i,q));var ct=a.getDerivedStateFromProps;(ze=typeof ct=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==We||ke!==q)&&xp(i,T,c,q),Fr=!1,ke=i.memoizedState,T.state=ke,Go(i,c,T,d);var pt=i.memoizedState;B!==We||ke!==pt||ri.current||Fr?(typeof ct=="function"&&(ou(i,a,ct,c),pt=i.memoizedState),(ge=Fr||mp(i,a,ge,c,ke,pt,q)||!1)?(ze||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,pt,q),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,pt,q)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=pt),T.props=c,T.state=pt,T.context=q,c=ge):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,a,c,m,d)}function fu(n,i,a,c,d,m){Ap(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Dh(i,a,!1),mr(n,i,m);c=i.stateNode,Lx.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,B,m)):Jn(n,i,B,m),i.memoizedState=c.state,d&&Dh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),qc(n,i.containerInfo)}function Np(n,i,a,c,d){return Hs(),Hc(d),i.flags|=256,Jn(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,d=pn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),cn(pn,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=ul(T,c,0,null),n=hs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pu(a),i.memoizedState=hu,n):mu(i,T));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return Ux(n,i,T,c,B,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,B=d.sibling;var q={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=Gr(d,q),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=Gr(B,m):(m=hs(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?pu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return m=n.child,n=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&Hc(c),Gs(i,n.child,null,a),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ux(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Zo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ul({mode:"visible",children:c.children},d,0,null),m=hs(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,T),i.child.memoizedState=pu(T),i.memoizedState=hu,m);if((i.mode&1)===0)return Zo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=cu(m,c,void 0),Zo(n,i,T,c)}if(B=(T&n.childLanes)!==0,ai||B){if(c=In,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Vi(c,n,d,-1))}return Pu(),c=cu(Error(t(421))),Zo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=$x.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,pi=Ir(d.nextSibling),hi=i,hn=!0,Oi=null,n!==null&&(Mi[Ei++]=dr,Mi[Ei++]=fr,Mi[Ei++]=rs,dr=n.id,fr=n.overflow,rs=i),i=mu(i,c.children),i.flags|=4096,i)}function Ip(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function gu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Dp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Jn(n,i,c.children,a),c=pn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,a,i);else if(n.tag===19)Ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(cn(pn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gu(i,!0,a,null,m);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Fx(n,i,a){switch(i.tag){case 3:Rp(i),Hs();break;case 5:Yh(i);break;case 1:si(i.type)&&Lo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;cn(zo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(cn(pn,pn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(cn(pn,pn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);cn(pn,pn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),cn(pn,pn.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return mr(n,i,a)}var Lp,xu,Up,Fp;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Up=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(qi.current);var m=null;switch(a){case"input":d=Ft(n,d),c=Ft(n,c),m=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":d=wt(n,d),c=wt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}Xe(a,c);var T;a=null;for(ge in d)if(!c.hasOwnProperty(ge)&&d.hasOwnProperty(ge)&&d[ge]!=null)if(ge==="style"){var B=d[ge];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?m||(m=[]):(m=m||[]).push(ge,null));for(ge in c){var q=c[ge];if(B=d!=null?d[ge]:void 0,c.hasOwnProperty(ge)&&q!==B&&(q!=null||B!=null))if(ge==="style")if(B){for(T in B)!B.hasOwnProperty(T)||q&&q.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in q)q.hasOwnProperty(T)&&B[T]!==q[T]&&(a||(a={}),a[T]=q[T])}else a||(m||(m=[]),m.push(ge,a)),a=q;else ge==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,B=B?B.__html:void 0,q!=null&&B!==q&&(m=m||[]).push(ge,q)):ge==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(ge,""+q):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(q!=null&&ge==="onScroll"&&un("scroll",n),m||B===q||(m=[])):(m=m||[]).push(ge,q))}a&&(m=m||[]).push("style",a);var ge=m;(i.updateQueue=ge)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!hn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ox(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(i),null;case 1:return si(i.type)&&Do(),Xn(i),null;case 3:return c=i.stateNode,Xs(),dn(ri),dn(jn),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Oi!==null&&(Cu(Oi),Oi=null))),xu(n,i),Xn(i),null;case 5:Kc(i);var d=os(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Xn(i),null}if(n=os(qi.current),ko(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[$i]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":un("cancel",c),un("close",c);break;case"iframe":case"object":case"embed":un("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)un(Ia[d],c);break;case"source":un("error",c);break;case"img":case"image":case"link":un("error",c),un("load",c);break;case"details":un("toggle",c);break;case"input":qt(c,m),un("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},un("invalid",c);break;case"textarea":Tt(c,m),un("invalid",c)}Xe(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&No(c.textContent,B,n),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&No(c.textContent,B,n),d=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&un("scroll",c)}switch(a){case"input":ut(c),jt(c,m,!0);break;case"textarea":ut(c),Bt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Po)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[$i]=i,n[Ua]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=qe(a,c),a){case"dialog":un("cancel",n),un("close",n),d=c;break;case"iframe":case"object":case"embed":un("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)un(Ia[d],n);d=c;break;case"source":un("error",n),d=c;break;case"img":case"image":case"link":un("error",n),un("load",n),d=c;break;case"details":un("toggle",n),d=c;break;case"input":qt(n,c),d=Ft(n,c),un("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),un("invalid",n);break;case"textarea":Tt(n,c),d=wt(n,c),un("invalid",n);break;default:d=c}Xe(a,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var q=B[m];m==="style"?Te(n,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Se(n,q)):m==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&Re(n,q):typeof q=="number"&&Re(n,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?q!=null&&m==="onScroll"&&un("scroll",n):q!=null&&R(n,m,q,T))}switch(a){case"input":ut(n),jt(n,c,!1);break;case"textarea":ut(n),Bt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?kt(n,!!c.multiple,m,!1):c.defaultValue!=null&&kt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(za.current),os(qi.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[$i]=i,(m=c.nodeValue!==a)&&(n=hi,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$i]=i,i.stateNode=c}return Xn(i),null;case 13:if(dn(pn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(hn&&pi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),Hs(),i.flags|=98560,m=!1;else if(m=ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[$i]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xn(i),m=!1}else Oi!==null&&(Cu(Oi),Oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(pn.current&1)!==0?Cn===0&&(Cn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),Xn(i),null);case 4:return Xs(),xu(n,i),n===null&&Da(i.stateNode.containerInfo),Xn(i),null;case 10:return Wc(i.type._context),Xn(i),null;case 17:return si(i.type)&&Do(),Xn(i),null;case 19:if(dn(pn),m=i.memoizedState,m===null)return Xn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Wa(m,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=jo(n),T!==null){for(i.flags|=128,Wa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return cn(pn,pn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Je()>Ks&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=jo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!hn)return Xn(i),null}else 2*Je()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Je(),i.sibling=null,a=pn.current,cn(pn,c?a&1|2:a&1),i):(Xn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(mi&1073741824)!==0&&(Xn(i),i.subtreeFlags&6&&(i.flags|=8192)):Xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function kx(n,i){switch(Bc(i),i.tag){case 1:return si(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),dn(ri),dn(jn),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(dn(pn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return dn(pn),null;case 4:return Xs(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Qo=!1,Yn=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,ft=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){vn(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){vn(n,i,c)}}var Op=!1;function zx(n,i){if(Nc=_o,n=mh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,B=-1,q=-1,ge=0,ze=0,We=n,ke=null;t:for(;;){for(var ct;We!==a||d!==0&&We.nodeType!==3||(B=T+d),We!==m||c!==0&&We.nodeType!==3||(q=T+c),We.nodeType===3&&(T+=We.nodeValue.length),(ct=We.firstChild)!==null;)ke=We,We=ct;for(;;){if(We===n)break t;if(ke===a&&++ge===d&&(B=T),ke===m&&++ze===c&&(q=T),(ct=We.nextSibling)!==null)break;We=ke,ke=We.parentNode}We=ct}a=B===-1||q===-1?null:{start:B,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},_o=!1,ft=i;ft!==null;)if(i=ft,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ft=n;else for(;ft!==null;){i=ft;try{var pt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(pt!==null){var xt=pt.memoizedProps,_n=pt.memoizedState,de=i.stateNode,ee=de.getSnapshotBeforeUpdate(i.elementType===i.type?xt:ki(i.type,xt),_n);de.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ze){vn(i,i.return,Ze)}if(n=i.sibling,n!==null){n.return=i.return,ft=n;break}ft=i.return}return pt=Op,Op=!1,pt}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vu(i,a,m)}d=d.next}while(d!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$i],delete i[Ua],delete i[Uc],delete i[Mx],delete i[Ex])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var Bn=null,Bi=!1;function kr(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 5:Yn||$s(a,i);case 6:var c=Bn,d=Bi;Bn=null,kr(n,i,a),Bn=c,Bi=d,Bn!==null&&(Bi?(n=Bn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Bn.removeChild(a.stateNode));break;case 18:Bn!==null&&(Bi?(n=Bn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),wa(n)):Lc(Bn,a.stateNode));break;case 4:c=Bn,d=Bi,Bn=a.stateNode.containerInfo,Bi=!0,kr(n,i,a),Bn=c,Bi=d;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&vu(a,i,T),d=d.next}while(d!==c)}kr(n,i,a);break;case 1:if(!Yn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){vn(a,i,B)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Yn=(c=Yn)||a.memoizedState!==null,kr(n,i,a),Yn=c):kr(n,i,a);break;default:kr(n,i,a)}}function Hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bx),i.forEach(function(c){var d=qx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function zi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Bn=B.stateNode,Bi=!1;break e;case 3:Bn=B.stateNode.containerInfo,Bi=!0;break e;case 4:Bn=B.stateNode.containerInfo,Bi=!0;break e}B=B.return}if(Bn===null)throw Error(t(160));Vp(m,T,d),Bn=null,Bi=!1;var q=d.alternate;q!==null&&(q.return=null),d.return=null}catch(ge){vn(d,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(i,n),Zi(n),c&4){try{Xa(3,n,n.return),el(3,n)}catch(xt){vn(n,n.return,xt)}try{Xa(5,n,n.return)}catch(xt){vn(n,n.return,xt)}}break;case 1:zi(i,n),Zi(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(zi(i,n),Zi(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(xt){vn(n,n.return,xt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,B=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&yt(d,m),qe(B,T);var ge=qe(B,m);for(T=0;T<q.length;T+=2){var ze=q[T],We=q[T+1];ze==="style"?Te(d,We):ze==="dangerouslySetInnerHTML"?Se(d,We):ze==="children"?Re(d,We):R(d,ze,We,ge)}switch(B){case"input":Ot(d,m);break;case"textarea":Ke(d,m);break;case"select":var ke=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ct=m.value;ct!=null?kt(d,!!m.multiple,ct,!1):ke!==!!m.multiple&&(m.defaultValue!=null?kt(d,!!m.multiple,m.defaultValue,!0):kt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(xt){vn(n,n.return,xt)}}break;case 6:if(zi(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(xt){vn(n,n.return,xt)}}break;case 3:if(zi(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(xt){vn(n,n.return,xt)}break;case 4:zi(i,n),Zi(n);break;case 13:zi(i,n),Zi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(wu=Je())),c&4&&Hp(n);break;case 22:if(ze=a!==null&&a.memoizedState!==null,n.mode&1?(Yn=(ge=Yn)||ze,zi(i,n),Yn=ge):zi(i,n),Zi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!ze&&(n.mode&1)!==0)for(ft=n,ze=n.child;ze!==null;){for(We=ft=ze;ft!==null;){switch(ke=ft,ct=ke.child,ke.tag){case 0:case 11:case 14:case 15:Xa(4,ke,ke.return);break;case 1:$s(ke,ke.return);var pt=ke.stateNode;if(typeof pt.componentWillUnmount=="function"){c=ke,a=ke.return;try{i=c,pt.props=i.memoizedProps,pt.state=i.memoizedState,pt.componentWillUnmount()}catch(xt){vn(c,a,xt)}}break;case 5:$s(ke,ke.return);break;case 22:if(ke.memoizedState!==null){Xp(We);continue}}ct!==null?(ct.return=ke,ft=ct):Xp(We)}ze=ze.sibling}e:for(ze=null,We=n;;){if(We.tag===5){if(ze===null){ze=We;try{d=We.stateNode,ge?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=We.stateNode,q=We.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null,B.style.display=xe("display",T))}catch(xt){vn(n,n.return,xt)}}}else if(We.tag===6){if(ze===null)try{We.stateNode.nodeValue=ge?"":We.memoizedProps}catch(xt){vn(n,n.return,xt)}}else if((We.tag!==22&&We.tag!==23||We.memoizedState===null||We===n)&&We.child!==null){We.child.return=We,We=We.child;continue}if(We===n)break e;for(;We.sibling===null;){if(We.return===null||We.return===n)break e;ze===We&&(ze=null),We=We.return}ze===We&&(ze=null),We.sibling.return=We.return,We=We.sibling}}break;case 19:zi(i,n),Zi(n),c&4&&Hp(n);break;case 21:break;default:zi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Re(d,""),c.flags&=-33);var m=zp(n);Su(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,B=zp(n);yu(n,B,T);break;default:throw Error(t(161))}}catch(q){vn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Vx(n,i,a){ft=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;ft!==null;){var d=ft,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Qo;if(!T){var B=d.alternate,q=B!==null&&B.memoizedState!==null||Yn;B=Qo;var ge=Yn;if(Qo=T,(Yn=q)&&!ge)for(ft=d;ft!==null;)T=ft,q=T.child,T.tag===22&&T.memoizedState!==null?Yp(d):q!==null?(q.return=T,ft=q):Yp(d);for(;m!==null;)ft=m,jp(m),m=m.sibling;ft=d,Qo=B,Yn=ge}Wp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ft=m):Wp(n)}}function Wp(n){for(;ft!==null;){var i=ft;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Yn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Yn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ki(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var ze=ge.memoizedState;if(ze!==null){var We=ze.dehydrated;We!==null&&wa(We)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||i.flags&512&&_u(i)}catch(ke){vn(i,i.return,ke)}}if(i===n){ft=null;break}if(a=i.sibling,a!==null){a.return=i.return,ft=a;break}ft=i.return}}function Xp(n){for(;ft!==null;){var i=ft;if(i===n){ft=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ft=a;break}ft=i.return}}function Yp(n){for(;ft!==null;){var i=ft;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(q){vn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(q){vn(i,d,q)}}var m=i.return;try{_u(i)}catch(q){vn(i,m,q)}break;case 5:var T=i.return;try{_u(i)}catch(q){vn(i,T,q)}}}catch(q){vn(i,i.return,q)}if(i===n){ft=null;break}var B=i.sibling;if(B!==null){B.return=i.return,ft=B;break}ft=i.return}}var Hx=Math.ceil,tl=P.ReactCurrentDispatcher,Mu=P.ReactCurrentOwner,Ti=P.ReactCurrentBatchConfig,tn=0,In=null,Mn=null,zn=0,mi=0,qs=Dr(0),Cn=0,Ya=null,cs=0,nl=0,Eu=0,$a=null,oi=null,wu=0,Ks=1/0,gr=null,il=!1,bu=null,Br=null,rl=!1,zr=null,sl=0,qa=0,Tu=null,al=-1,ol=0;function Qn(){return(tn&6)!==0?Je():al!==-1?al:al=Je()}function Vr(n){return(n.mode&1)===0?1:(tn&2)!==0&&zn!==0?zn&-zn:bx.transition!==null?(ol===0&&(ol=ce()),ol):(n=ht,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function Vi(n,i,a,c){if(50<qa)throw qa=0,Tu=null,Error(t(185));Oe(n,a,c),((tn&2)===0||n!==In)&&(n===In&&((tn&2)===0&&(nl|=a),Cn===4&&Hr(n,zn)),li(n,c),a===1&&tn===0&&(i.mode&1)===0&&(Ks=Je()+500,Uo&&Ur()))}function li(n,i){var a=n.callbackNode;re(n,i);var c=k(n,n===In?zn:0);if(c===0)a!==null&&$e(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&$e(a),i===1)n.tag===0?wx(qp.bind(null,n)):Lh(qp.bind(null,n)),yx(function(){(tn&6)===0&&Ur()}),a=null;else{switch(zt(c)){case 1:a=Lt;break;case 4:a=A;break;case 16:a=j;break;case 536870912:a=Q;break;default:a=j}a=im(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(al=-1,ol=0,(tn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=k(n,n===In?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var d=tn;tn|=2;var m=Zp();(In!==n||zn!==i)&&(gr=null,Ks=Je()+500,ds(n,i));do try{Wx();break}catch(B){Kp(n,B)}while(!0);jc(),tl.current=m,tn=d,Mn!==null?i=0:(In=null,zn=0,i=Cn)}if(i!==0){if(i===2&&(d=we(n),d!==0&&(c=d,i=Au(n,d))),i===1)throw a=Ya,ds(n,0),Hr(n,c),li(n,Je()),a;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Gx(d)&&(i=ll(n,c),i===2&&(m=we(n),m!==0&&(c=m,i=Au(n,m))),i===1))throw a=Ya,ds(n,0),Hr(n,c),li(n,Je()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,oi,gr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=wu+500-Je(),10<i)){if(k(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Qn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc(fs.bind(null,n,oi,gr),i);break}fs(n,oi,gr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ae(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=Je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hx(c/1960))-c,10<c){n.timeoutHandle=Dc(fs.bind(null,n,oi,gr),c);break}fs(n,oi,gr);break;case 5:fs(n,oi,gr);break;default:throw Error(t(329))}}}return li(n,Je()),n.callbackNode===a?$p.bind(null,n):null}function Au(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=ll(n,i),n!==2&&(i=oi,oi=a,i!==null&&Cu(i)),n}function Cu(n){oi===null?oi=n:oi.push.apply(oi,n)}function Gx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Fi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~Eu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if((tn&6)!==0)throw Error(t(327));Zs();var i=k(n,0);if((i&1)===0)return li(n,Je()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=we(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=Ya,ds(n,0),Hr(n,i),li(n,Je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,oi,gr),li(n,Je()),null}function Ru(n,i){var a=tn;tn|=1;try{return n(i)}finally{tn=a,tn===0&&(Ks=Je()+500,Uo&&Ur())}}function us(n){zr!==null&&zr.tag===0&&(tn&6)===0&&Zs();var i=tn;tn|=1;var a=Ti.transition,c=ht;try{if(Ti.transition=null,ht=1,n)return n()}finally{ht=c,Ti.transition=a,tn=i,(tn&6)===0&&Ur()}}function Nu(){mi=qs.current,dn(qs)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_x(a)),Mn!==null)for(a=Mn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Xs(),dn(ri),dn(jn),Jc();break;case 5:Kc(c);break;case 4:Xs();break;case 13:dn(pn);break;case 19:dn(pn);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(In=n,Mn=n=Gr(n.current,null),zn=mi=i,Cn=0,Ya=null,Eu=nl=cs=0,oi=$a=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}as=null}return n}function Kp(n,i){do{var a=Mn;try{if(jc(),Wo.current=qo,Xo){for(var c=mn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xo=!1}if(ls=0,Pn=An=mn=null,Va=!1,Ha=0,Mu.current=null,a===null||a.return===null){Cn=1,Ya=i,Mn=null;break}e:{var m=n,T=a.return,B=a,q=i;if(i=zn,B.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ge=q,ze=B,We=ze.tag;if((ze.mode&1)===0&&(We===0||We===11||We===15)){var ke=ze.alternate;ke?(ze.updateQueue=ke.updateQueue,ze.memoizedState=ke.memoizedState,ze.lanes=ke.lanes):(ze.updateQueue=null,ze.memoizedState=null)}var ct=Sp(T);if(ct!==null){ct.flags&=-257,Mp(ct,T,B,m,i),ct.mode&1&&yp(m,ge,i),i=ct,q=ge;var pt=i.updateQueue;if(pt===null){var xt=new Set;xt.add(q),i.updateQueue=xt}else pt.add(q);break e}else{if((i&1)===0){yp(m,ge,i),Pu();break e}q=Error(t(426))}}else if(hn&&B.mode&1){var _n=Sp(T);if(_n!==null){(_n.flags&65536)===0&&(_n.flags|=256),Mp(_n,T,B,m,i),Hc(Ys(q,B));break e}}m=q=Ys(q,B),Cn!==4&&(Cn=2),$a===null?$a=[m]:$a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var de=vp(m,q,i);Wh(m,de);break e;case 1:B=q;var ee=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Br===null||!Br.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ze=_p(m,B,i);Wh(m,Ze);break e}}m=m.return}while(m!==null)}Qp(a)}catch(vt){i=vt,Mn===a&&a!==null&&(Mn=a=a.return);continue}break}while(!0)}function Zp(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Pu(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),In===null||(cs&268435455)===0&&(nl&268435455)===0||Hr(In,zn)}function ll(n,i){var a=tn;tn|=2;var c=Zp();(In!==n||zn!==i)&&(gr=null,ds(n,i));do try{jx();break}catch(d){Kp(n,d)}while(!0);if(jc(),tn=a,tl.current=c,Mn!==null)throw Error(t(261));return In=null,zn=0,Cn}function jx(){for(;Mn!==null;)Jp(Mn)}function Wx(){for(;Mn!==null&&!ot();)Jp(Mn)}function Jp(n){var i=nm(n.alternate,n,mi);n.memoizedProps=n.pendingProps,i===null?Qp(n):Mn=i,Mu.current=null}function Qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ox(a,i,mi),a!==null){Mn=a;return}}else{if(a=kx(a,i),a!==null){a.flags&=32767,Mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,Mn=null;return}}if(i=i.sibling,i!==null){Mn=i;return}Mn=i=n}while(i!==null);Cn===0&&(Cn=5)}function fs(n,i,a){var c=ht,d=Ti.transition;try{Ti.transition=null,ht=1,Xx(n,i,a,c)}finally{Ti.transition=d,ht=c}return null}function Xx(n,i,a,c){do Zs();while(zr!==null);if((tn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Wt(n,m),n===In&&(Mn=In=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,im(j,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ti.transition,Ti.transition=null;var T=ht;ht=1;var B=tn;tn|=4,Mu.current=null,zx(n,a),Gp(a,n),fx(Pc),_o=!!Nc,Pc=Nc=null,n.current=a,Vx(a),at(),tn=B,ht=T,Ti.transition=m}else n.current=a;if(rl&&(rl=!1,zr=n,sl=d),m=n.pendingLanes,m===0&&(Br=null),_e(a.stateNode),li(n,Je()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=bu,bu=null,n;return(sl&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Tu?qa++:(qa=0,Tu=n):qa=0,Ur(),null}function Zs(){if(zr!==null){var n=zt(sl),i=Ti.transition,a=ht;try{if(Ti.transition=null,ht=16>n?16:n,zr===null)var c=!1;else{if(n=zr,zr=null,sl=0,(tn&6)!==0)throw Error(t(331));var d=tn;for(tn|=4,ft=n.current;ft!==null;){var m=ft,T=m.child;if((ft.flags&16)!==0){var B=m.deletions;if(B!==null){for(var q=0;q<B.length;q++){var ge=B[q];for(ft=ge;ft!==null;){var ze=ft;switch(ze.tag){case 0:case 11:case 15:Xa(8,ze,m)}var We=ze.child;if(We!==null)We.return=ze,ft=We;else for(;ft!==null;){ze=ft;var ke=ze.sibling,ct=ze.return;if(kp(ze),ze===ge){ft=null;break}if(ke!==null){ke.return=ct,ft=ke;break}ft=ct}}}var pt=m.alternate;if(pt!==null){var xt=pt.child;if(xt!==null){pt.child=null;do{var _n=xt.sibling;xt.sibling=null,xt=_n}while(xt!==null)}}ft=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,ft=T;else e:for(;ft!==null;){if(m=ft,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xa(9,m,m.return)}var de=m.sibling;if(de!==null){de.return=m.return,ft=de;break e}ft=m.return}}var ee=n.current;for(ft=ee;ft!==null;){T=ft;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,ft=he;else e:for(T=ee;ft!==null;){if(B=ft,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:el(9,B)}}catch(vt){vn(B,B.return,vt)}if(B===T){ft=null;break e}var Ze=B.sibling;if(Ze!==null){Ze.return=B.return,ft=Ze;break e}ft=B.return}}if(tn=d,Ur(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ie,n)}catch{}c=!0}return c}finally{ht=a,Ti.transition=i}}return!1}function em(n,i,a){i=Ys(a,i),i=vp(n,i,1),n=Or(n,i,1),i=Qn(),n!==null&&(Oe(n,1,i),li(n,i))}function vn(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){n=Ys(a,n),n=_p(i,n,1),i=Or(i,n,1),n=Qn(),i!==null&&(Oe(i,1,n),li(i,n));break}}i=i.return}}function Yx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&a,In===n&&(zn&a)===a&&(Cn===4||Cn===3&&(zn&130023424)===zn&&500>Je()-wu?ds(n,0):Eu|=a),li(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=st,st<<=1,(st&130023424)===0&&(st=4194304)));var a=Qn();n=hr(n,i),n!==null&&(Oe(n,i,a),li(n,a))}function $x(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function qx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ri.current)ai=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ai=!1,Fx(n,i,a);ai=(n.flags&131072)!==0}else ai=!1,hn&&(i.flags&1048576)!==0&&Uh(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var d=Bs(i,jn.current);Ws(i,a),d=tu(null,i,c,n,d,a);var m=nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,si(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=Ko,i.stateNode=d,d._reactInternals=i,lu(i,c,n,a),i=fu(null,i,c,!0,m,a)):(i.tag=0,hn&&m&&kc(i),Jn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Zx(c),n=ki(c,n),d){case 0:i=du(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=wp(null,i,c,ki(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ki(c,d),du(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ki(c,d),Cp(n,i,c,d,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,jh(n,i),Go(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ys(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(pi=Ir(i.stateNode.containerInfo.firstChild),hi=i,hn=!0,Oi=null,a=Hh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=mr(n,i,a);break e}Jn(n,i,c,a)}i=i.child}return i;case 5:return Yh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ic(c,d)?T=null:m!==null&&Ic(c,m)&&(i.flags|=32),Ap(n,i),Jn(n,i,T,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return Pp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):Jn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ki(c,d),Ep(n,i,c,d,a);case 7:return Jn(n,i,i.pendingProps,a),i.child;case 8:return Jn(n,i,i.pendingProps.children,a),i.child;case 12:return Jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,cn(zo,c._currentValue),c._currentValue=T,m!==null)if(Fi(m.value,T)){if(m.children===d.children&&!ri.current){i=mr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var q=B.firstContext;q!==null;){if(q.context===c){if(m.tag===1){q=pr(-1,a&-a),q.tag=2;var ge=m.updateQueue;if(ge!==null){ge=ge.shared;var ze=ge.pending;ze===null?q.next=q:(q.next=ze.next,ze.next=q),ge.pending=q}}m.lanes|=a,q=m.alternate,q!==null&&(q.lanes|=a),Xc(m.return,a,i),B.lanes|=a;break}q=q.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Jn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=wi(d),c=c(d),i.flags|=1,Jn(n,i,c,a),i.child;case 14:return c=i.type,d=ki(c,i.pendingProps),d=ki(c.type,d),wp(n,i,c,d,a);case 15:return bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ki(c,d),Jo(n,i),i.tag=1,si(c)?(n=!0,Lo(i)):n=!1,Ws(i,a),gp(i,c,d),lu(i,c,d,a),fu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Ue(n,i)}function Kx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,c){return new Kx(n,i,a,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zx(n){if(typeof n=="function")return Iu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===Y)return 14}return 2}function Gr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Iu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return hs(a.children,d,m,i);case b:T=8,d|=8;break;case N:return n=Ai(12,a,i,d|2),n.elementType=N,n.lanes=m,n;case te:return n=Ai(13,a,i,d),n.elementType=te,n.lanes=m,n;case me:return n=Ai(19,a,i,d),n.elementType=me,n.lanes=m,n;case K:return ul(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:T=10;break e;case H:T=9;break e;case Z:T=11;break e;case Y:T=14;break e;case oe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,a,c){return n=Ai(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=Ai(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Jx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fe(0),this.expirationTimes=Fe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,d,m,T,B,q){return n=new Jx(n,i,a,B,q),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ai(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function Qx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Lr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(si(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(si(a))return Ih(n,a,i)}return i}function sm(n,i,a,c,d,m,T,B,q){return n=Uu(a,c,!0,n,d,m,T,B,q),n.context=rm(null),a=n.current,c=Qn(),d=Vr(a),m=pr(c,d),m.callback=i??null,Or(a,m,d),n.current.lanes=d,Oe(n,d,c),li(n,c),n}function dl(n,i,a,c){var d=i.current,m=Qn(),T=Vr(d);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Or(d,i,T),n!==null&&(Vi(n,d,T,m),Ho(n,d,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function ev(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}hl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){dl(null,n,null,null)}),i[cr]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yi.length&&i!==0&&i<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&Yf(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function tv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ge=fl(T);m.call(ge)}}var T=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=T,n[cr]=T.current,Da(n.nodeType===8?n.parentNode:n),us(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var ge=fl(q);B.call(ge)}}var q=Uu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=q,n[cr]=q.current,Da(n.nodeType===8?n.parentNode:n),us(function(){dl(i,q,a,c)}),q}function ml(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var B=d;d=function(){var q=fl(T);B.call(q)}}dl(i,T,n,d)}else T=tv(a,i,n,d,c);return fl(T)}At=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=E(i.pendingLanes);a!==0&&(Et(i,a|1),li(i,Je()),(tn&6)===0&&(Ks=Je()+500,Ur()))}break;case 13:us(function(){var c=hr(n,1);if(c!==null){var d=Qn();Vi(c,n,1,d)}}),Fu(n,1)}},Vt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=Qn();Vi(i,n,134217728,a)}Fu(n,134217728)}},fn=function(n){if(n.tag===13){var i=Vr(n),a=hr(n,i);if(a!==null){var c=Qn();Vi(a,n,i,c)}Fu(n,i)}},Nt=function(){return ht},Tn=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},mt=function(n,i,a){switch(i){case"input":if(Ot(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Io(c);if(!d)throw Error(t(90));St(c),Ot(c,d)}}}break;case"textarea":Ke(n,a);break;case"select":i=a.value,i!=null&&kt(n,!!a.multiple,i,!1)}},je=Ru,Ne=us;var nv={usingClientEntryPoint:!1,Events:[Fa,Os,Io,ve,Ye,Ru]},Ka={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iv={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=G(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{ie=gl.inject(iv),De=gl}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv,ci.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(t(200));return Qx(n,i,null,a)},ci.createRoot=function(n,i){if(!ku(n))throw Error(t(299));var a=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,d),n[cr]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ou(i)},ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=G(i),n=n===null?null:n.stateNode,n},ci.flushSync=function(n){return us(n)},ci.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},ci.hydrateRoot=function(n,i,a){if(!ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=sm(i,null,n,1,a??null,d,!1,m,T),n[cr]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hl(i)},ci.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},ci.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(us(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},ci.unstable_batchedUpdates=Ru,ci.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var gm;function fv(){if(gm)return Vu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=dv(),Vu.exports}var xm;function hv(){if(xm)return xl;xm=1;var s=fv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var pv=hv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="184",mv=0,vm=1,gv=2,Gl=1,xv=2,so=3,ts=0,di=1,Mr=2,wr=0,pa=1,_m=2,ym=3,Sm=4,vv=5,Ss=100,_v=101,yv=102,Sv=103,Mv=104,Ev=200,wv=201,bv=202,Tv=203,Rd=204,Nd=205,Av=206,Cv=207,Rv=208,Nv=209,Pv=210,Iv=211,Dv=212,Lv=213,Uv=214,Pd=0,Id=1,Dd=2,ga=3,Ld=4,Ud=5,Fd=6,Od=7,I0=0,Fv=1,Ov=2,ir=0,D0=1,L0=2,U0=3,F0=4,O0=5,k0=6,B0=7,z0=300,Ts=301,xa=302,ju=303,Wu=304,ac=306,kd=1e3,Er=1001,Bd=1002,Vn=1003,kv=1004,vl=1005,Zn=1006,Xu=1007,Es=1008,Ii=1009,V0=1010,H0=1011,ho=1012,Tf=1013,ar=1014,tr=1015,Tr=1016,Af=1017,Cf=1018,po=1020,G0=35902,j0=35899,W0=1021,X0=1022,Xi=1023,Ar=1026,ws=1027,Y0=1028,Rf=1029,As=1030,Nf=1031,Pf=1033,jl=33776,Wl=33777,Xl=33778,Yl=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,jd=36196,Wd=37492,Xd=37496,Yd=37488,$d=37489,Kl=37490,qd=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Zl=36285,gf=36286,Bv=3200,Mm=0,zv=1,Jr="",Ni="srgb",Jl="srgb-linear",Ql="linear",on="srgb",Js=7680,Em=519,Vv=512,Hv=513,Gv=514,If=515,jv=516,Wv=517,Df=518,Xv=519,wm=35044,bm="300 es",nr=2e3,ec=2001;function Yv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $v(){const s=tc("canvas");return s.style.display="block",s}const Tm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function $0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pt(...s){s=$0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function nn(...s){s=$0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xf(...s){const e=s.join(" ");e in Tm||(Tm[e]=!0,Pt(...s))}function qv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Kv={[Pd]:Id,[Dd]:Fd,[Ld]:Od,[ga]:Ud,[Id]:Pd,[Fd]:Dd,[Od]:Ld,[Ud]:ga};class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,vf=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function Zv(s,e){return(s%e+e)%e}function $u(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let It=Vf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],C=l[u+2],D=l[u+3];if(S!==D||h!==x||p!==M||v!==C){let y=h*x+p*M+v*C+S*D;y<0&&(x=-x,M=-M,C=-C,D=-D,y=-y);let _=1-f;if(y<.9995){const L=Math.acos(y),R=Math.sin(L);_=Math.sin(_*L)/R,f=Math.sin(f*L)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f;const L=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=L,p*=L,v*=L,S*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],C=l[u+3];return e[t]=f*C+v*S+h*M-p*x,e[t+1]=h*C+v*x+p*S-f*M,e[t+2]=p*C+v*M+f*x-h*S,e[t+3]=v*C-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),C=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"YXZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"ZXY":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"ZYX":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"YZX":this._x=x*v*S+p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S-x*M*C;break;case"XZY":this._x=x*v*S-p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S+x*M*C;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hf=class Hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hf.prototype.isVector3=!0;let ne=Hf;const qu=new ne,Cm=new ya,Gf=class Gf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],C=r[8],D=o[0],y=o[3],_=o[6],L=o[1],R=o[4],P=o[7],z=o[2],I=o[5],O=o[8];return l[0]=u*D+f*L+h*z,l[3]=u*y+f*R+h*I,l[6]=u*_+f*P+h*O,l[1]=p*D+v*L+S*z,l[4]=p*y+v*R+S*I,l[7]=p*_+v*P+S*O,l[2]=x*D+M*L+C*z,l[5]=x*y+M*R+C*I,l[8]=x*_+M*P+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,C=t*S+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=S*D,e[1]=(o*p-v*r)*D,e[2]=(f*r-o*u)*D,e[3]=x*D,e[4]=(v*t-o*h)*D,e[5]=(o*l-f*t)*D,e[6]=M*D,e[7]=(r*h-p*t)*D,e[8]=(u*t-r*l)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let Gt=Gf;const Ku=new Gt,Rm=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===on&&(o.r=br(o.r),o.g=br(o.g),o.b=br(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===on&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:r,transfer:on,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),s}const en=Jv();function br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class Qv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=tc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=br(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(br(t[r]/255)*255):t[r]=br(t[r]);return{data:t,width:e.width,height:e.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let t_=0;const Ju=new ne;class ti extends Rs{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,r=Er,o=Er,l=Zn,u=Es,f=Xi,h=Ii,p=ti.DEFAULT_ANISOTROPY,v=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=mo(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=z0;ti.DEFAULT_ANISOTROPY=1;const jf=class jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],C=h[9],D=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-D)<.01&&Math.abs(C-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+D)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(M+1)/2,z=(_+1)/2,I=(v+x)/4,O=(S+D)/4,b=(C+y)/4;return R>P&&R>z?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=O/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=b/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=O/l,o=b/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-C)*(y-C)+(S-D)*(S-D)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(S-D)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this.w=Jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this.w=Jt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;let yn=jf;class n_ extends Rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new ti(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends n_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class q0 extends ti{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends ti{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=class sc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=C,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+C*p,t[5]=x-D*p,t[9]=-f*h,t[2]=D-x*p,t[6]=C+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x+D*f,t[4]=C*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-C,t[6]=D+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x-D*f,t[4]=-u*S,t[8]=C+M*f,t[1]=M+C*f,t[5]=u*v,t[9]=D-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=C*p-M,t[8]=x*p+D,t[1]=h*S,t[5]=D*p+x,t[9]=M*p-C,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=D-x*S,t[8]=C*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+C,t[10]=x-D*S}else if(e.order==="XZY"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+D,t[5]=u*v,t[9]=M*S-C,t[2]=C*S-M,t[6]=f*v,t[10]=D*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,s_)}lookAt(e,t,r){const o=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Wr.crossVectors(r,gi),Wr.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Wr.crossVectors(r,gi)),Wr.normalize(),_l.crossVectors(gi,Wr),o[0]=Wr.x,o[4]=_l.x,o[8]=gi.x,o[1]=Wr.y,o[5]=_l.y,o[9]=gi.y,o[2]=Wr.z,o[6]=_l.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],C=r[2],D=r[6],y=r[10],_=r[14],L=r[3],R=r[7],P=r[11],z=r[15],I=o[0],O=o[4],b=o[8],N=o[12],W=o[1],H=o[5],Z=o[9],te=o[13],me=o[2],Y=o[6],oe=o[10],K=o[14],J=o[3],pe=o[7],le=o[11],V=o[15];return l[0]=u*I+f*W+h*me+p*J,l[4]=u*O+f*H+h*Y+p*pe,l[8]=u*b+f*Z+h*oe+p*le,l[12]=u*N+f*te+h*K+p*V,l[1]=v*I+S*W+x*me+M*J,l[5]=v*O+S*H+x*Y+M*pe,l[9]=v*b+S*Z+x*oe+M*le,l[13]=v*N+S*te+x*K+M*V,l[2]=C*I+D*W+y*me+_*J,l[6]=C*O+D*H+y*Y+_*pe,l[10]=C*b+D*Z+y*oe+_*le,l[14]=C*N+D*te+y*K+_*V,l[3]=L*I+R*W+P*me+z*J,l[7]=L*O+R*H+P*Y+z*pe,l[11]=L*b+R*Z+P*oe+z*le,l[15]=L*N+R*te+P*K+z*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],C=e[3],D=e[7],y=e[11],_=e[15],L=h*M-p*x,R=f*M-p*S,P=f*x-h*S,z=u*M-p*v,I=u*x-h*v,O=u*S-f*v;return t*(D*L-y*R+_*P)-r*(C*L-y*z+_*I)+o*(C*R-D*z+_*O)-l*(C*P-D*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],C=e[12],D=e[13],y=e[14],_=e[15],L=t*f-r*u,R=t*h-o*u,P=t*p-l*u,z=r*h-o*f,I=r*p-l*f,O=o*p-l*h,b=v*D-S*C,N=v*y-x*C,W=v*_-M*C,H=S*y-x*D,Z=S*_-M*D,te=x*_-M*y,me=L*te-R*Z+P*H+z*W-I*N+O*b;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/me;return e[0]=(f*te-h*Z+p*H)*Y,e[1]=(o*Z-r*te-l*H)*Y,e[2]=(D*O-y*I+_*z)*Y,e[3]=(x*I-S*O-M*z)*Y,e[4]=(h*W-u*te-p*N)*Y,e[5]=(t*te-o*W+l*N)*Y,e[6]=(y*P-C*O-_*R)*Y,e[7]=(v*O-x*P+M*R)*Y,e[8]=(u*Z-f*W+p*b)*Y,e[9]=(r*W-t*Z-l*b)*Y,e[10]=(C*I-D*P+_*L)*Y,e[11]=(S*P-v*I-M*L)*Y,e[12]=(f*N-u*H-h*b)*Y,e[13]=(t*H-r*N+o*b)*Y,e[14]=(D*R-C*z-y*L)*Y,e[15]=(v*z-S*R+x*L)*Y,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,C=l*S,D=u*v,y=u*S,_=f*S,L=h*p,R=h*v,P=h*S,z=r.x,I=r.y,O=r.z;return o[0]=(1-(D+_))*z,o[1]=(M+P)*z,o[2]=(C-R)*z,o[3]=0,o[4]=(M-P)*I,o[5]=(1-(x+_))*I,o[6]=(y+L)*I,o[7]=0,o[8]=(C+R)*O,o[9]=(y-L)*O,o[10]=(1-(x+D))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Hi.copy(this);const p=1/u,v=1/f,S=1/h;return Hi.elements[0]*=p,Hi.elements[1]*=p,Hi.elements[2]*=p,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=S,Hi.elements[9]*=S,Hi.elements[10]*=S,t.setFromRotationMatrix(Hi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let C,D;if(h)C=l/(u-l),D=u*l/(u-l);else if(f===nr)C=-(u+l)/(u-l),D=-2*u*l/(u-l);else if(f===ec)C=-u/(u-l),D=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let C,D;if(h)C=1/(u-l),D=u/(u-l);else if(f===nr)C=-2/(u-l),D=-(u+l)/(u-l);else if(f===ec)C=-1/(u-l),D=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let wn=sc;const ea=new ne,Hi=new wn,r_=new ne(0,0,0),s_=new ne(1,1,1),Wr=new ne,_l=new ne,gi=new ne,Pm=new wn,Im=new ya;class Cs{constructor(e=0,t=0,r=0,o=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Jt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";let K0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a_=0;const Dm=new ne,ta=new ya,xr=new wn,yl=new ne,Qa=new ne,o_=new ne,l_=new ya,Lm=new ne(1,0,0),Um=new ne(0,1,0),Fm=new ne(0,0,1),Om={type:"added"},c_={type:"removed"},na={type:"childadded",child:null},Qu={type:"childremoved",child:null};class vi extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new ne,t=new Cs,r=new ya,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new wn},normalMatrix:{value:new Gt}}),this.matrix=new wn,this.matrixWorld=new wn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Qa,yl,this.up):xr.lookAt(yl,Qa,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(xr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,o_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),C=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}vi.DEFAULT_UP=new ne(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const y=t.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,C=.005;p.inputState.pinching&&x>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ln{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=en.workingColorSpace){return this.r=e,this.g=t,this.b=r,en.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=en.workingColorSpace){if(e=Zv(e,1),t=Jt(t,0,1),r=Jt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=td(u,l,e+1/3),this.g=td(u,l,e),this.b=td(u,l,e-1/3)}return en.colorSpaceToWorking(this,o),this}setStyle(e,t=Ni){function r(l){l!==void 0&&parseFloat(l)<1&&Pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const r=Z0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return en.workingToColorSpace(qn.copy(this),e),Math.round(Jt(qn.r*255,0,255))*65536+Math.round(Jt(qn.g*255,0,255))*256+Math.round(Jt(qn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=en.workingColorSpace){return en.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ni){en.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Sl);const r=$u(Xr.h,Sl.h,t),o=$u(Xr.s,Sl.s,t),l=$u(Xr.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new ln;ln.NAMES=Z0;class d_ extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new ne,vr=new ne,nd=new ne,_r=new ne,ia=new ne,ra=new ne,km=new ne,id=new ne,rd=new ne,sd=new ne,ad=new yn,od=new yn,ld=new yn;class Wi{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Gi.subVectors(e,t),o.cross(Gi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Gi.subVectors(o,t),vr.subVectors(r,t),nd.subVectors(e,t);const u=Gi.dot(Gi),f=Gi.dot(vr),h=Gi.dot(nd),p=vr.dot(vr),v=vr.dot(nd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,C=(u*v-f*h)*x;return l.set(1-M-C,C,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,_r.x),h.addScaledVector(u,_r.y),h.addScaledVector(f,_r.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return Gi.subVectors(r,t),vr.subVectors(e,t),Gi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Gi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),id.subVectors(e,r);const h=ia.dot(id),p=ra.dot(id);if(h<=0&&p<=0)return t.copy(r);rd.subVectors(e,o);const v=ia.dot(rd),S=ra.dot(rd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);sd.subVectors(e,l);const M=ia.dot(sd),C=ra.dot(sd);if(C>=0&&M<=C)return t.copy(l);const D=M*p-h*C;if(D<=0&&p>=0&&C<=0)return f=p/(p-C),t.copy(r).addScaledVector(ra,f);const y=v*C-M*S;if(y<=0&&S-v>=0&&M-C>=0)return km.subVectors(l,o),f=(S-v)/(S-v+(M-C)),t.copy(o).addScaledVector(km,f);const _=1/(y+D+x);return u=D*_,f=x*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ji):ji.fromBufferAttribute(l,u),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),El.subVectors(this.max,eo),sa.subVectors(e.a,eo),aa.subVectors(e.b,eo),oa.subVectors(e.c,eo),Yr.subVectors(aa,sa),$r.subVectors(oa,aa),ps.subVectors(sa,oa);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-ps.z,ps.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,ps.z,0,-ps.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-ps.y,ps.x,0];return!cd(t,sa,aa,oa,El)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,sa,aa,oa,El))?!1:(wl.crossVectors(Yr,$r),t=[wl.x,wl.y,wl.z],cd(t,sa,aa,oa,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ji=new ne,Ml=new go,sa=new ne,aa=new ne,oa=new ne,Yr=new ne,$r=new ne,ps=new ne,eo=new ne,El=new ne,wl=new ne,ms=new ne;function cd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),h=e.dot(ms),p=t.dot(ms),v=r.dot(ms);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const En=new ne,bl=new It;let f_=0;class sr extends Rs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ui(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),r=ui(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),r=ui(r,this.array),o=ui(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),r=ui(r,this.array),o=ui(o,this.array),l=ui(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class J0 extends sr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Q0 extends sr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Sn extends sr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const h_=new go,to=new ne,ud=new ne;class Uf{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):h_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ud)),this.expandByPoint(to.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p_=0;const Ci=new wn,dd=new vi,la=new ne,xi=new go,no=new go,Ln=new ne;class _i extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?Q0:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];xi.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(Ln.addVectors(xi.min,no.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,no.max),xi.expandByPoint(Ln)):(xi.expandByPoint(no.min),xi.expandByPoint(no.max))}xi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Ln.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Ln.add(la)),o=Math.max(o,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let b=0;b<r.count;b++)f[b]=new ne,h[b]=new ne;const p=new ne,v=new ne,S=new ne,x=new It,M=new It,C=new It,D=new ne,y=new ne;function _(b,N,W){p.fromBufferAttribute(r,b),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,W),x.fromBufferAttribute(l,b),M.fromBufferAttribute(l,N),C.fromBufferAttribute(l,W),v.sub(p),S.sub(p),M.sub(x),C.sub(x);const H=1/(M.x*C.y-C.x*M.y);isFinite(H)&&(D.copy(v).multiplyScalar(C.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(H),f[b].add(D),f[N].add(D),f[W].add(D),h[b].add(y),h[N].add(y),h[W].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let b=0,N=L.length;b<N;++b){const W=L[b],H=W.start,Z=W.count;for(let te=H,me=H+Z;te<me;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const R=new ne,P=new ne,z=new ne,I=new ne;function O(b){z.fromBufferAttribute(o,b),I.copy(z);const N=f[b];R.copy(N),R.sub(z.multiplyScalar(z.dot(N))).normalize(),P.crossVectors(I,N);const H=P.dot(h[b])<0?-1:1;u.setXYZW(b,R.x,R.y,R.z,H)}for(let b=0,N=L.length;b<N;++b){const W=L[b],H=W.start,Z=W.count;for(let te=H,me=H+Z;te<me;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,p=new ne,v=new ne,S=new ne;if(e)for(let x=0,M=e.count;x<M;x+=3){const C=e.getX(x+0),D=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,D),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(D,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,C=0;for(let D=0,y=h.length;D<y;D++){f.isInterleavedBufferAttribute?M=h[D]*f.data.stride+f.offset:M=h[D]*v;for(let _=0;_<v;_++)x[C++]=p[M++]}return new sr(x,v,S)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m_=0;class oc extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=pa,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Nd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ln(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new ne,fd=new ne,Tl=new ne,qr=new ne,hd=new ne,Al=new ne,pd=new ne;class g_{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=qr.dot(this.direction),h=-qr.dot(Tl),p=qr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,C;if(v>0)if(S=u*h-f,x=u*f-h,C=l*v,S>=0)if(x>=-C)if(x<=C){const D=1/v;S*=D,x*=D,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-C?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=C?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(fd).addScaledVector(Tl,x),M}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),Al.subVectors(r,e),pd.crossVectors(hd,Al);let u=this.direction.dot(pd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;qr.subVectors(this.origin,e);const h=f*this.direction.dot(Al.crossVectors(qr,Al));if(h<0)return null;const p=f*this.direction.dot(hd.cross(qr));if(p<0||h+p>u)return null;const v=-f*qr.dot(pd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class es extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ln(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bm=new wn,gs=new g_,Cl=new Uf,zm=new ne,Rl=new ne,Nl=new ne,Pl=new ne,md=new ne,Il=new ne,Vm=new ne,Dl=new ne;class ni extends vi{constructor(e=new _i,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(md.fromBufferAttribute(S,e),u?Il.addScaledVector(md,v):Il.addScaledVector(md.sub(t),v))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Cl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Cl,zm)===null||gs.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),gs.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,z=R;P<z;P+=3){const I=f.getX(P),O=f.getX(P+1),b=f.getX(P+2);o=Ll(this,_,e,r,p,v,S,I,O,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(f.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);o=Ll(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,z=R;P<z;P+=3){const I=P,O=P+1,b=P+2;o=Ll(this,_,e,r,p,v,S,I,O,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=y,R=y+1,P=y+2;o=Ll(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function x_(s,e,t,r,o,l,u,f){let h;if(e.side===di?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ts,f),h===null)return null;Dl.copy(f),Dl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Dl);return p<t.near||p>t.far?null:{distance:p,point:Dl.clone(),object:s}}function Ll(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Rl),s.getVertexPosition(h,Nl),s.getVertexPosition(p,Pl);const v=x_(s,e,t,r,Rl,Nl,Pl,Vm);if(v){const S=new ne;Wi.getBarycoord(Vm,Rl,Nl,Pl,S),o&&(v.uv=Wi.getInterpolatedAttribute(o,f,h,p,S,new It)),l&&(v.uv1=Wi.getInterpolatedAttribute(l,f,h,p,S,new It)),u&&(v.normal=Wi.getInterpolatedAttribute(u,f,h,p,S,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ne,materialIndex:0};Wi.getNormal(Rl,Nl,Pl,x.normal),v.face=x,v.barycoord=S}return v}class v_ extends ti{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Vn,v=Vn,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new ne,__=new ne,y_=new Gt;class ys{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||y_.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Uf,S_=new It(.5,.5),Ul=new ne;class eg{constructor(e=new ys,t=new ys,r=new ys,o=new ys,l=new ys,u=new ys){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],C=l[8],D=l[9],y=l[10],_=l[11],L=l[12],R=l[13],P=l[14],z=l[15];if(o[0].setComponents(p-u,M-v,_-C,z-L).normalize(),o[1].setComponents(p+u,M+v,_+C,z+L).normalize(),o[2].setComponents(p+f,M+S,_+D,z+R).normalize(),o[3].setComponents(p-f,M-S,_-D,z-R).normalize(),r)o[4].setComponents(h,x,y,P).normalize(),o[5].setComponents(p-h,M-x,_-y,z-P).normalize();else if(o[4].setComponents(p-h,M-x,_-y,z-P).normalize(),t===nr)o[5].setComponents(p+h,M+x,_+y,z+P).normalize();else if(t===ec)o[5].setComponents(h,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=S_.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tg extends ti{constructor(e=[],t=Ts,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends ti{constructor(e,t,r=ar,o,l,u,f=Vn,h=Vn,p,v=Ar,S=1){if(v!==Ar&&v!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class M_ extends va{constructor(e,t=ar,r=Ts,o,l,u=Vn,f=Vn,h,p=Ar){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ng extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends _i{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;C("z","y","x",-1,-1,r,t,e,u,l,0),C("z","y","x",1,-1,r,t,-e,u,l,1),C("x","z","y",1,1,e,r,t,o,u,2),C("x","z","y",1,-1,e,r,-t,o,u,3),C("x","y","z",1,-1,e,t,r,o,l,4),C("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(S,2));function C(D,y,_,L,R,P,z,I,O,b,N){const W=P/O,H=z/b,Z=P/2,te=z/2,me=I/2,Y=O+1,oe=b+1;let K=0,J=0;const pe=new ne;for(let le=0;le<oe;le++){const V=le*H-te;for(let ue=0;ue<Y;ue++){const et=ue*W-Z;pe[D]=et*L,pe[y]=V*R,pe[_]=me,p.push(pe.x,pe.y,pe.z),pe[D]=0,pe[y]=0,pe[_]=I>0?1:-1,v.push(pe.x,pe.y,pe.z),S.push(ue/O),S.push(1-le/b),K+=1}}for(let le=0;le<b;le++)for(let V=0;V<O;V++){const ue=x+V+Y*le,et=x+V+Y*(le+1),tt=x+(V+1)+Y*(le+1),Pe=x+(V+1)+Y*le;h.push(ue,et,Pe),h.push(et,tt,Pe),J+=6}f.addGroup(M,J,N),M+=J,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ff extends _i{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let C=0;const D=[],y=r/2;let _=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new Sn(S,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(M,2));function L(){const P=new ne,z=new ne;let I=0;const O=(t-e)/r;for(let b=0;b<=l;b++){const N=[],W=b/l,H=W*(t-e)+e;for(let Z=0;Z<=o;Z++){const te=Z/o,me=te*h+f,Y=Math.sin(me),oe=Math.cos(me);z.x=H*Y,z.y=-W*r+y,z.z=H*oe,S.push(z.x,z.y,z.z),P.set(Y,O,oe).normalize(),x.push(P.x,P.y,P.z),M.push(te,1-W),N.push(C++)}D.push(N)}for(let b=0;b<o;b++)for(let N=0;N<l;N++){const W=D[N][b],H=D[N+1][b],Z=D[N+1][b+1],te=D[N][b+1];(e>0||N!==0)&&(v.push(W,H,te),I+=3),(t>0||N!==l-1)&&(v.push(H,Z,te),I+=3)}p.addGroup(_,I,0),_+=I}function R(P){const z=C,I=new It,O=new ne;let b=0;const N=P===!0?e:t,W=P===!0?1:-1;for(let Z=1;Z<=o;Z++)S.push(0,y*W,0),x.push(0,W,0),M.push(.5,.5),C++;const H=C;for(let Z=0;Z<=o;Z++){const me=Z/o*h+f,Y=Math.cos(me),oe=Math.sin(me);O.x=N*oe,O.y=y*W,O.z=N*Y,S.push(O.x,O.y,O.z),x.push(0,W,0),I.x=Y*.5+.5,I.y=oe*.5*W+.5,M.push(I.x,I.y),C++}for(let Z=0;Z<o;Z++){const te=z+Z,me=H+Z;P===!0?v.push(me,me+1,te):v.push(me+1,me,te),b+=3}p.addGroup(_,b,P===!0?1:2),_+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Ff{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new It:new ne);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ne,o=[],l=[],u=[],f=new ne,h=new wn;for(let M=0;M<=e;M++){const C=M/e;o[M]=this.getTangentAt(C,new ne)}l[0]=new ne,u[0]=new ne;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const C=Math.acos(Jt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,C))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(Jt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let C=1;C<=e;C++)l[C].applyMatrix4(h.makeRotationAxis(o[C],M*C)),u[C].crossVectors(o[C],l[C])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ig extends Cr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new It){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E_ extends ig{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Hm=new ne,Gm=new ne,xd=new Of,vd=new Of,_d=new Of;class kf extends Cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ne){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Gm.subVectors(o[0],o[1]).add(o[0]),p=Gm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Hm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Hm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let C=Math.pow(p.distanceToSquared(S),M),D=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);D<1e-4&&(D=1),C<1e-4&&(C=D),y<1e-4&&(y=D),xd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,C,D,y),vd.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,C,D,y),_d.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,C,D,y)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),vd.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),_d.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(xd.calc(h),vd.calc(h),_d.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ne().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function w_(s,e){const t=1-s;return t*t*e}function b_(s,e){return 2*(1-s)*s*e}function T_(s,e){return s*s*e}function uo(s,e,t,r){return w_(s,e)+b_(s,t)+T_(s,r)}function A_(s,e){const t=1-s;return t*t*t*e}function C_(s,e){const t=1-s;return 3*t*t*s*e}function R_(s,e){return 3*(1-s)*s*s*e}function N_(s,e){return s*s*s*e}function fo(s,e,t,r,o){return A_(s,e)+C_(s,t)+R_(s,r)+N_(s,o)}class P_ extends Cr{constructor(e=new It,t=new It,r=new It,o=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new It){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends Cr{constructor(e=new ne,t=new ne,r=new ne,o=new ne){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ne){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D_ extends Cr{constructor(e=new It,t=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new It){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new It){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends Cr{constructor(e=new ne,t=new ne){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ne){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends Cr{constructor(e=new It,t=new It,r=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new It){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rg extends Cr{constructor(e=new ne,t=new ne,r=new ne){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ne){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends Cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new It){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(jm(f,h.x,p.x,v.x,S.x),jm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new It().fromArray(o))}return this}}var O_=Object.freeze({__proto__:null,ArcCurve:E_,CatmullRomCurve3:kf,CubicBezierCurve:P_,CubicBezierCurve3:I_,EllipseCurve:ig,LineCurve:D_,LineCurve3:L_,QuadraticBezierCurve:U_,QuadraticBezierCurve3:rg,SplineCurve:F_});class lc extends _i{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],C=[],D=[],y=[];for(let _=0;_<v;_++){const L=_*x-u;for(let R=0;R<p;R++){const P=R*S-l;C.push(P,-L,0),D.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const R=L+p*_,P=L+p*(_+1),z=L+1+p*(_+1),I=L+1+p*_;M.push(R,P,I),M.push(P,z,I)}this.setIndex(M),this.setAttribute("position",new Sn(C,3)),this.setAttribute("normal",new Sn(D,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bf extends _i{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new ne,C=new It;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),C.x=(M.x/t+1)/2,C.y=(M.y/t+1)/2,v.push(C.x,C.y)}S+=x}for(let D=0;D<o;D++){const y=D*(r+1);for(let _=0;_<r;_++){const L=_+y,R=L,P=L+r+1,z=L+r+2,I=L+1;f.push(R,P,I),f.push(P,z,I)}}this.setIndex(f),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(p,3)),this.setAttribute("uv",new Sn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends _i{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ne,x=new ne,M=[],C=[],D=[],y=[];for(let _=0;_<=r;_++){const L=[],R=_/r;let P=0;_===0&&u===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let z=0;z<=t;z++){const I=z/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+I*l)*Math.sin(u+R*f),C.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+P,1-R),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const R=v[_][L+1],P=v[_][L],z=v[_+1][L],I=v[_+1][L+1];(_!==0||u>0)&&M.push(R,P,I),(_!==r-1||h<Math.PI)&&M.push(P,z,I)}this.setIndex(M),this.setAttribute("position",new Sn(C,3)),this.setAttribute("normal",new Sn(D,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zf extends _i{constructor(e=new rg(new ne(-1,-1,0),new ne(-1,1,0),new ne(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ne,h=new ne,p=new It;let v=new ne;const S=[],x=[],M=[],C=[];D(),this.setIndex(C),this.setAttribute("position",new Sn(S,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(M,2));function D(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),L(),_()}function y(R){v=e.getPointAt(R/t,v);const P=u.normals[R],z=u.binormals[R];for(let I=0;I<=o;I++){const O=I/o*Math.PI*2,b=Math.sin(O),N=-Math.cos(O);h.x=N*P.x+b*z.x,h.y=N*P.y+b*z.y,h.z=N*P.z+b*z.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let P=1;P<=o;P++){const z=(o+1)*(R-1)+(P-1),I=(o+1)*R+(P-1),O=(o+1)*R+P,b=(o+1)*(R-1)+P;C.push(z,I,b),C.push(I,O,b)}}function L(){for(let R=0;R<=t;R++)for(let P=0;P<=o;P++)p.x=R/t,p.y=P/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zf(new O_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Wm(o))o.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Wm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function k_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:en.workingColorSpace}const B_={clone:_a,merge:ei};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class H_ extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G_ extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fl=new ne,Ol=new ya,Ji=new ne;let ag=class extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wn,this.projectionMatrix=new wn,this.projectionMatrixInverse=new wn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Ol,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fl,Ol,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Kr=new ne,Xm=new It,Ym=new It;class Pi extends ag{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class og extends ag{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,ua=1;class W_ extends vi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Pi(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Pi(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Pi(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new Pi(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new Pi(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class X_ extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wf=class Wf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Wf.prototype.isMatrix2=!0;let $m=Wf;function qm(s,e,t,r){const o=Y_(r);switch(t){case W0:return s*e;case Y0:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case As:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case X0:return s*e*3/o.components*o.byteLength;case Xi:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case jl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Wd:case Yd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Kl:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y_(s){switch(s){case Ii:case V0:return{byteLength:1,components:1};case ho:case H0:case Tr:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case ar:case Tf:case tr:return{byteLength:4,components:1};case G0:case j0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function $_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<S.length;M++){const C=S[x],D=S[M];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,C=S.length;M<C;M++){const D=S[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
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
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,cy=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vy=`#define PI 3.141592653589793
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
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yy=`vec3 transformedNormal = objectNormal;
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
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,Yy=`uniform sampler2D dfgLUT;
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
}`,$y=`
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sS=`#if defined( USE_POINTS_UV )
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
#endif`,aS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`#ifdef USE_MORPHTARGETS
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
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,_S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ES=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LS=`float getShadowMask() {
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
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,BS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KS=`uniform sampler2D t2D;
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,g1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,_1=`#define STANDARD
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
}`,y1=`#define STANDARD
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
}`,S1=`#define TOON
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
}`,M1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,w1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,T1=`uniform vec3 color;
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
}`,A1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:q_,alphahash_pars_fragment:K_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:Q_,alphatest_pars_fragment:ey,aomap_fragment:ty,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:ry,begin_vertex:sy,beginnormal_vertex:ay,bsdfs:oy,iridescence_fragment:ly,bumpmap_pars_fragment:cy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:hy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:xy,common:vy,cube_uv_reflection_fragment:_y,defaultnormal_vertex:yy,displacementmap_pars_vertex:Sy,displacementmap_vertex:My,emissivemap_fragment:Ey,emissivemap_pars_fragment:wy,colorspace_fragment:by,colorspace_pars_fragment:Ty,envmap_fragment:Ay,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Ry,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:Vy,envmap_vertex:Py,fog_vertex:Iy,fog_pars_vertex:Dy,fog_fragment:Ly,fog_pars_fragment:Uy,gradientmap_pars_fragment:Fy,lightmap_pars_fragment:Oy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:By,lights_pars_begin:zy,lights_toon_fragment:Hy,lights_toon_pars_fragment:Gy,lights_phong_fragment:jy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:Yy,lights_fragment_begin:$y,lights_fragment_maps:qy,lights_fragment_end:Ky,lightprobes_pars_fragment:Zy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:eS,logdepthbuf_vertex:tS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:rS,map_particle_pars_fragment:sS,metalnessmap_fragment:aS,metalnessmap_pars_fragment:oS,morphinstance_vertex:lS,morphcolor_vertex:cS,morphnormal_vertex:uS,morphtarget_pars_vertex:dS,morphtarget_vertex:fS,normal_fragment_begin:hS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:gS,normal_vertex:xS,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:_S,clearcoat_normal_fragment_maps:yS,clearcoat_pars_fragment:SS,iridescence_pars_fragment:MS,opaque_fragment:ES,packing:wS,premultiplied_alpha_fragment:bS,project_vertex:TS,dithering_fragment:AS,dithering_pars_fragment:CS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:PS,shadowmap_pars_vertex:IS,shadowmap_vertex:DS,shadowmask_pars_fragment:LS,skinbase_vertex:US,skinning_pars_vertex:FS,skinning_vertex:OS,skinnormal_vertex:kS,specularmap_fragment:BS,specularmap_pars_fragment:zS,tonemapping_fragment:VS,tonemapping_pars_fragment:HS,transmission_fragment:GS,transmission_pars_fragment:jS,uv_pars_fragment:WS,uv_pars_vertex:XS,uv_vertex:YS,worldpos_vertex:$S,background_vert:qS,background_frag:KS,backgroundCube_vert:ZS,backgroundCube_frag:JS,cube_vert:QS,cube_frag:e1,depth_vert:t1,depth_frag:n1,distance_vert:i1,distance_frag:r1,equirect_vert:s1,equirect_frag:a1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:x1,meshphong_frag:v1,meshphysical_vert:_1,meshphysical_frag:y1,meshtoon_vert:S1,meshtoon_frag:M1,points_vert:E1,points_frag:w1,shadow_vert:b1,shadow_frag:T1,sprite_vert:A1,sprite_frag:C1},rt={common:{diffuse:{value:new ln(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ln(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new ln(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ln(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},er={basic:{uniforms:ei([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ei([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ln(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ei([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ln(0)},specular:{value:new ln(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ei([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new ln(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ei([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new ln(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ei([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ei([rt.points,rt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ei([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ei([rt.common,rt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ei([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ei([rt.sprite,rt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:ei([rt.common,rt.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:ei([rt.lights,rt.fog,{color:{value:new ln(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};er.physical={uniforms:ei([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ln(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ln(0)},specularColor:{value:new ln(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const kl={r:0,b:0,g:0},R1=new wn,cg=new Gt;cg.set(-1,0,0,0,1,0,0,0,1);function N1(s,e,t,r,o,l){const u=new ln(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;if(R&&R.isTexture){const P=L.backgroundBlurriness>0;R=e.get(R,P)}return R}function C(L){let R=!1;const P=M(L);P===null?y(u,f):P&&P.isColor&&(y(P,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(L,R){const P=M(R);P&&(P.isCubeTexture||P.mapping===ac)?(p===void 0&&(p=new ni(new xo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:_a(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(cg),p.material.toneMapped=en.getTransfer(P.colorSpace)!==on,(v!==P||S!==P.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ni(new lc(2,2),new or({name:"BackgroundMaterial",uniforms:_a(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=en.getTransfer(P.colorSpace)!==on,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,R){L.getRGB(kl,sg(s)),t.buffers.color.setClear(kl.r,kl.g,kl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:C,addToRenderList:D,dispose:_}}function P1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(H,Z,te,me,Y){let oe=!1;const K=S(H,me,te,Z);l!==K&&(l=K,p(l.object)),oe=M(H,me,te,Y),oe&&C(H,me,te,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,P(H,Z,te,me),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,Z,te,me){const Y=me.wireframe===!0;let oe=r[Z.id];oe===void 0&&(oe={},r[Z.id]=oe);const K=H.isInstancedMesh===!0?H.id:0;let J=oe[K];J===void 0&&(J={},oe[K]=J);let pe=J[te.id];pe===void 0&&(pe={},J[te.id]=pe);let le=pe[Y];return le===void 0&&(le=x(h()),pe[Y]=le),le}function x(H){const Z=[],te=[],me=[];for(let Y=0;Y<t;Y++)Z[Y]=0,te[Y]=0,me[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:me,object:H,attributes:{},index:null}}function M(H,Z,te,me){const Y=l.attributes,oe=Z.attributes;let K=0;const J=te.getAttributes();for(const pe in J)if(J[pe].location>=0){const V=Y[pe];let ue=oe[pe];if(ue===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),V===void 0||V.attribute!==ue||ue&&V.data!==ue.data)return!0;K++}return l.attributesNum!==K||l.index!==me}function C(H,Z,te,me){const Y={},oe=Z.attributes;let K=0;const J=te.getAttributes();for(const pe in J)if(J[pe].location>=0){let V=oe[pe];V===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(V=H.instanceColor));const ue={};ue.attribute=V,V&&V.data&&(ue.data=V.data),Y[pe]=ue,K++}l.attributes=Y,l.attributesNum=K,l.index=me}function D(){const H=l.newAttributes;for(let Z=0,te=H.length;Z<te;Z++)H[Z]=0}function y(H){_(H,0)}function _(H,Z){const te=l.newAttributes,me=l.enabledAttributes,Y=l.attributeDivisors;te[H]=1,me[H]===0&&(s.enableVertexAttribArray(H),me[H]=1),Y[H]!==Z&&(s.vertexAttribDivisor(H,Z),Y[H]=Z)}function L(){const H=l.newAttributes,Z=l.enabledAttributes;for(let te=0,me=Z.length;te<me;te++)Z[te]!==H[te]&&(s.disableVertexAttribArray(te),Z[te]=0)}function R(H,Z,te,me,Y,oe,K){K===!0?s.vertexAttribIPointer(H,Z,te,Y,oe):s.vertexAttribPointer(H,Z,te,me,Y,oe)}function P(H,Z,te,me){D();const Y=me.attributes,oe=te.getAttributes(),K=Z.defaultAttributeValues;for(const J in oe){const pe=oe[J];if(pe.location>=0){let le=Y[J];if(le===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),le!==void 0){const V=le.normalized,ue=le.itemSize,et=e.get(le);if(et===void 0)continue;const tt=et.buffer,Pe=et.type,fe=et.bytesPerElement,be=Pe===s.INT||Pe===s.UNSIGNED_INT||le.gpuType===Tf;if(le.isInterleavedBufferAttribute){const ye=le.data,Be=ye.stride,it=le.offset;if(ye.isInstancedInterleavedBuffer){for(let ut=0;ut<pe.locationSize;ut++)_(pe.location+ut,ye.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ut=0;ut<pe.locationSize;ut++)y(pe.location+ut);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ut=0;ut<pe.locationSize;ut++)R(pe.location+ut,ue/pe.locationSize,Pe,V,Be*fe,(it+ue/pe.locationSize*ut)*fe,be)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<pe.locationSize;ye++)_(pe.location+ye,le.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<pe.locationSize;ye++)y(pe.location+ye);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ye=0;ye<pe.locationSize;ye++)R(pe.location+ye,ue/pe.locationSize,Pe,V,ue*fe,ue/pe.locationSize*ye*fe,be)}}else if(K!==void 0){const V=K[J];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(pe.location,V);break;case 3:s.vertexAttrib3fv(pe.location,V);break;case 4:s.vertexAttrib4fv(pe.location,V);break;default:s.vertexAttrib1fv(pe.location,V)}}}}L()}function z(){N();for(const H in r){const Z=r[H];for(const te in Z){const me=Z[te];for(const Y in me){const oe=me[Y];for(const K in oe)v(oe[K].object),delete oe[K];delete me[Y]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const Z=r[H.id];for(const te in Z){const me=Z[te];for(const Y in me){const oe=me[Y];for(const K in oe)v(oe[K].object),delete oe[K];delete me[Y]}}delete r[H.id]}function O(H){for(const Z in r){const te=r[Z];for(const me in te){const Y=te[me];if(Y[H.id]===void 0)continue;const oe=Y[H.id];for(const K in oe)v(oe[K].object),delete oe[K];delete Y[H.id]}}}function b(H){for(const Z in r){const te=r[Z],me=H.isInstancedMesh===!0?H.id:0,Y=te[me];if(Y!==void 0){for(const oe in Y){const K=Y[oe];for(const J in K)v(K[J].object),delete K[J];delete Y[oe]}delete te[me],Object.keys(te).length===0&&delete r[Z]}}}function N(){W(),u=!0,l!==o&&(l=o,p(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:y,disableUnusedAttributes:L}}function I1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function D1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Xi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const b=O===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==tr&&!b)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(Pt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:P,maxSamples:z,samples:I}}function L1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ys,f=new Gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const C=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||C===null||C.length===0||l&&!y)l?v(null):p();else{const L=l?0:r,R=L*4;let P=_.clippingState||null;h.value=P,P=v(C,x,R,M);for(let z=0;z!==R;++z)P[z]=t[z];_.clippingState=P,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,C){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=h.value,C!==!0||y===null){const _=M+D*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,P=M;R!==D;++R,P+=4)u.copy(S[R]).applyMatrix4(L,f),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const Qr=4,Km=[.125,.215,.35,.446,.526,.582],Ms=20,U1=256,io=new og,Zm=new ln;let yd=null,Sd=0,Md=0,Ed=!1;const F1=new ne;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=F1}=l;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Tr,format:Xi,colorSpace:Jl,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O1(l)),this._blurMaterial=B1(l,e,t),this._ggxMaterial=k1(l,e,t)}return o}_compileMaterial(e){const t=new ni(new _i,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new Pi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Zm),S.toneMapping=ir,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new xo,new es({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let _=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,_=!0):(y.color.copy(Zm),_=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):P===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const z=this._cubeSize;da(o,P*z,R>2?z:0,z,z),S.setRenderTarget(o),_&&S.render(D,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ts||e.mapping===xa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:C}=this,D=this._sizeLods[r],y=3*D*(r>C-Qr?r-C+Qr:0),_=4*(this._cubeSize-D);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=C-t,da(l,y,_,3*D,2*D),o.setRenderTarget(l),o.render(f,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=C-r,da(e,y,_,3*D,2*D),o.setRenderTarget(e),o.render(f,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),D=l/C,y=isFinite(l)?1+Math.floor(v*D):Ms;y>Ms&&Pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const _=[];let L=0;for(let O=0;O<Ms;++O){const b=O/D,N=Math.exp(-b*b/2);_.push(N),O===0?L+=N:O<y&&(L+=2*N)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=C,x.mipInt.value=R-r;const P=this._sizeLods[o],z=3*P*(o>R-Qr?o-R+Qr:0),I=4*(this._cubeSize-P);da(t,z,I,3*P,2*P),h.setRenderTarget(t),h.render(S,io)}}function O1(s){const e=[],t=[],r=[];let o=s;const l=s-Qr+1+Km.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Qr?h=Km[u-s+Qr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,C=6,D=3,y=2,_=1,L=new Float32Array(D*C*M),R=new Float32Array(y*C*M),P=new Float32Array(_*C*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,b=I>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];L.set(N,D*C*I),R.set(x,y*C*I);const W=[I,I,I,I,I,I];P.set(W,_*C*I)}const z=new _i;z.setAttribute("position",new sr(L,D)),z.setAttribute("uv",new sr(R,y)),z.setAttribute("faceIndex",new sr(P,_)),r.push(new ni(z,null)),o>Qr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new rr(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function k1(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function B1(s,e,t){const r=new Float32Array(Ms),o=new ne(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function e0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function t0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

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
	`}class ug extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xo(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:di,blending:wr});l.uniforms.tEquirect.value=t;const u=new ni(o,l),f=t.minFilter;return t.minFilter===Es&&(t.minFilter=Zn),new W_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function z1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===ju||M===Wu)if(e.has(x)){const C=e.get(x).texture;return f(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const D=new ug(C.height);return D.fromEquirectangularTexture(s,x),e.set(x,D),x.addEventListener("dispose",p),f(D.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,C=M===ju||M===Wu,D=M===Ts||M===xa;if(C||D){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Jm(s)),y=C?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const L=x.image;return C&&L&&L.height>0||D&&L&&h(L)?(r===null&&(r=new Jm(s)),y=C?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===ju?x.mapping=Ts:M===Wu&&(x.mapping=xa),x}function h(x){let M=0;const C=6;for(let D=0;D<C;D++)x[D]!==void 0&&M++;return M===C}function p(x){const M=x.target;M.removeEventListener("dispose",p);const C=e.get(M);C!==void 0&&(e.delete(M),C.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const C=t.get(M);C!==void 0&&(t.delete(M),C.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function V1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&xf("WebGLRenderer: "+r+" extension not supported."),o}}}function H1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,C=S.attributes.position;let D=0;if(C===void 0)return;if(M!==null){const L=M.array;D=M.version;for(let R=0,P=L.length;R<P;R+=3){const z=L[R+0],I=L[R+1],O=L[R+2];x.push(z,I,I,O,O,z)}}else{const L=C.array;D=C.version;for(let R=0,P=L.length/3-1;R<P;R+=3){const z=R+0,I=R+1,O=R+2;x.push(z,I,I,O,O,z)}}const y=new(C.count>=65535?Q0:J0)(x,1);y.version=D;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function G1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];t.update(D,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function j1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:nn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function W1(s,e,t){const r=new WeakMap,o=new yn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let W=function(){b.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var M=W;x!==void 0&&x.texture.dispose();const C=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let P=0;C===!0&&(P=1),D===!0&&(P=2),y===!0&&(P=3);let z=f.attributes.position.count*P,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*I*4*S),b=new q0(O,z,I,S);b.type=tr,b.needsUpdate=!0;const N=P*4;for(let H=0;H<S;H++){const Z=_[H],te=L[H],me=R[H],Y=z*I*4*H;for(let oe=0;oe<Z.count;oe++){const K=oe*N;C===!0&&(o.fromBufferAttribute(Z,oe),O[Y+K+0]=o.x,O[Y+K+1]=o.y,O[Y+K+2]=o.z,O[Y+K+3]=0),D===!0&&(o.fromBufferAttribute(te,oe),O[Y+K+4]=o.x,O[Y+K+5]=o.y,O[Y+K+6]=o.z,O[Y+K+7]=0),y===!0&&(o.fromBufferAttribute(me,oe),O[Y+K+8]=o.x,O[Y+K+9]=o.y,O[Y+K+10]=o.z,O[Y+K+11]=me.itemSize===4?o.w:1)}}x={count:S,texture:b,size:new It(z,I)},r.set(f,x),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const D=f.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",D),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function X1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const Y1={[D0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[U0]:"CINEON_TONE_MAPPING",[F0]:"ACES_FILMIC_TONE_MAPPING",[k0]:"AGX_TONE_MAPPING",[B0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function $1(s,e,t,r,o){const l=new rr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new va(e,t):void 0}),u=new rr(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),f=new _i;f.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const h=new H_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ni(f,h),v=new og(-1,1,1,-1,0,1);let S=null,x=null,M=!1,C,D=null,y=[],_=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let P=0;P<y.length;P++){const z=y[P];z.setSize&&z.setSize(L,R)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,P=l.height;for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(R,P)}},this.begin=function(L,R){if(M||L.toneMapping===ir&&y.length===0)return!1;if(D=R,R!==null){const P=R.width,z=R.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return _===!1&&L.setRenderTarget(l),C=L.toneMapping,L.toneMapping=ir,!0},this.hasRenderPass=function(){return _},this.end=function(L,R){L.toneMapping=C,M=!0;let P=l,z=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(L,z,P,R),O.needsSwap!==!1)){const b=P;P=z,z=b}}if(S!==L.outputColorSpace||x!==L.toneMapping){S=L.outputColorSpace,x=L.toneMapping,h.defines={},en.getTransfer(S)===on&&(h.defines.SRGB_TRANSFER="");const I=Y1[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(D),L.render(p,v),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const dg=new ti,_f=new va(1,1),fg=new q0,hg=new i_,pg=new tg,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=n0[o];if(l===void 0&&(l=new Float32Array(o),n0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function Q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;a0.set(r),s.uniformMatrix2fv(this.addr,!1,a0),Nn(t,r)}}function eM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;s0.set(r),s.uniformMatrix3fv(this.addr,!1,s0),Nn(t,r)}}function tM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;r0.set(r),s.uniformMatrix4fv(this.addr,!1,r0),Nn(t,r)}}function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function aM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Df:If,l=_f):l=dg,t.setTexture2D(e||l,o)}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||hg,o)}function fM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||pg,o)}function hM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||fg,o)}function pM(s){switch(s){case 5126:return q1;case 35664:return K1;case 35665:return Z1;case 35666:return J1;case 35674:return Q1;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function gM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function xM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function vM(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function _M(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yM(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function SM(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function bM(s,e){s.uniform4iv(this.addr,e)}function TM(s,e){s.uniform1uiv(this.addr,e)}function AM(s,e){s.uniform2uiv(this.addr,e)}function CM(s,e){s.uniform3uiv(this.addr,e)}function RM(s,e){s.uniform4uiv(this.addr,e)}function NM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=dg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function PM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||hg,l[u])}function IM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||pg,l[u])}function DM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||fg,l[u])}function LM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return vM;case 35674:return _M;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return DM}}class UM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class FM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function o0(s,e){s.seq.push(e),s.map[e.id]=e}function kM(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){o0(t,p===void 0?new UM(f,s,e):new FM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new OM(f),o0(t,S)),t=S}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);kM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function l0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BM=37297;let zM=0;function VM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const c0=new Gt;function HM(s){en._getMatrix(c0,en.workingColorSpace,s);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(en.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function u0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+VM(s.getShaderSource(e),f)}else return l}function GM(s,e){const t=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jM={[D0]:"Linear",[L0]:"Reinhard",[U0]:"Cineon",[F0]:"ACESFilmic",[k0]:"AgX",[B0]:"Neutral",[O0]:"Custom"};function WM(s,e){const t=jM[e];return t===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new ne;function XM(){en.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function $M(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function d0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(KM,JM)}const ZM=new Map;function JM(s,e){let t=Yt[e];if(t===void 0){const r=ZM.get(e);if(r!==void 0)t=Yt[r],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(s){return s.replace(QM,eE)}function eE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function p0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const tE={[Gl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function nE(s){return tE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iE={[Ts]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function rE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sE={[xa]:"ENVMAP_MODE_REFRACTION"};function aE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oE={[I0]:"ENVMAP_BLENDING_MULTIPLY",[Fv]:"ENVMAP_BLENDING_MIX",[Ov]:"ENVMAP_BLENDING_ADD"};function lE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oE[s.combine]||"ENVMAP_BLENDING_NONE"}function cE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function uE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=nE(t),p=rE(t),v=aE(t),S=lE(t),x=cE(t),M=YM(t),C=$M(l),D=o.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Yt.tonemapping_pars_fragment:"",t.toneMapping!==ir?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=yf(u),u=d0(u,t),u=f0(u,t),f=yf(f),f=d0(f,t),f=f0(f,t),u=h0(u),f=h0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+y+u,P=L+_+f,z=l0(o,o.VERTEX_SHADER,R),I=l0(o,o.FRAGMENT_SHADER,P);o.attachShader(D,z),o.attachShader(D,I),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function O(H){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(D)||"",te=o.getShaderInfoLog(z)||"",me=o.getShaderInfoLog(I)||"",Y=Z.trim(),oe=te.trim(),K=me.trim();let J=!0,pe=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,z,I);else{const le=u0(o,z,"vertex"),V=u0(o,I,"fragment");nn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+le+`
`+V)}else Y!==""?Pt("WebGLProgram: Program Info Log:",Y):(oe===""||K==="")&&(pe=!1);pe&&(H.diagnostics={runnable:J,programLog:Y,vertexShader:{log:oe,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(z),o.deleteShader(I),b=new $l(o,D),N=qM(o,D)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(D,BM)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=z,this.fragmentShader=I,this}let dE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hE(e),t.set(e,r)),r}}class hE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function pE(s){return s===As||s===Kl||s===Zl}function mE(s,e,t,r,o,l){const u=new K0,f=new fE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(b){return h.add(b),b===0?"uv":`uv${b}`}function D(b,N,W,H,Z,te){const me=H.fog,Y=Z.geometry,oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||oe,K),pe=J&&J.mapping===ac?J.image.height:null,le=M[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&Pt("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const V=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=V!==void 0?V.length:0;let et=0;Y.morphAttributes.position!==void 0&&(et=1),Y.morphAttributes.normal!==void 0&&(et=2),Y.morphAttributes.color!==void 0&&(et=3);let tt,Pe,fe,be;if(le){const bt=er[le];tt=bt.vertexShader,Pe=bt.fragmentShader}else tt=b.vertexShader,Pe=b.fragmentShader,f.update(b),fe=f.getVertexShaderID(b),be=f.getFragmentShaderID(b);const ye=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),it=Z.isInstancedMesh===!0,ut=Z.isBatchedMesh===!0,St=!!b.map,Mt=!!b.matcap,Ft=!!J,qt=!!b.aoMap,yt=!!b.lightMap,Ot=!!b.bumpMap,jt=!!b.normalMap,Xt=!!b.displacementMap,$=!!b.emissiveMap,kt=!!b.metalnessMap,wt=!!b.roughnessMap,Tt=b.anisotropy>0,Ke=b.clearcoat>0,Bt=b.dispersion>0,U=b.iridescence>0,w=b.sheen>0,se=b.transmission>0,Se=Tt&&!!b.anisotropyMap,Re=Ke&&!!b.clearcoatMap,He=Ke&&!!b.clearcoatNormalMap,Ge=Ke&&!!b.clearcoatRoughnessMap,xe=U&&!!b.iridescenceMap,Te=U&&!!b.iridescenceThicknessMap,Me=w&&!!b.sheenColorMap,Xe=w&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Ce=!!b.specularColorMap,Ve=!!b.specularIntensityMap,mt=se&&!!b.transmissionMap,Dt=se&&!!b.thicknessMap,X=!!b.gradientMap,Ee=!!b.alphaMap,ve=b.alphaTest>0,Ye=!!b.alphaHash,je=!!b.extensions;let Ne=ir;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const dt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:Pe,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:ut,batchingColor:ut&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:en.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:St,matcap:Mt,envMap:Ft,envMapMode:Ft&&J.mapping,envMapCubeUVHeight:pe,aoMap:qt,lightMap:yt,bumpMap:Ot,normalMap:jt,displacementMap:Xt,emissiveMap:$,normalMapObjectSpace:jt&&b.normalMapType===zv,normalMapTangentSpace:jt&&b.normalMapType===Mm,packedNormalMap:jt&&b.normalMapType===Mm&&pE(b.normalMap.format),metalnessMap:kt,roughnessMap:wt,anisotropy:Tt,anisotropyMap:Se,clearcoat:Ke,clearcoatMap:Re,clearcoatNormalMap:He,clearcoatRoughnessMap:Ge,dispersion:Bt,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Te,sheen:w,sheenColorMap:Me,sheenRoughnessMap:Xe,specularMap:qe,specularColorMap:Ce,specularIntensityMap:Ve,transmission:se,transmissionMap:mt,thicknessMap:Dt,gradientMap:X,opaque:b.transparent===!1&&b.blending===pa&&b.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ve,alphaHash:Ye,combine:b.combine,mapUv:St&&C(b.map.channel),aoMapUv:qt&&C(b.aoMap.channel),lightMapUv:yt&&C(b.lightMap.channel),bumpMapUv:Ot&&C(b.bumpMap.channel),normalMapUv:jt&&C(b.normalMap.channel),displacementMapUv:Xt&&C(b.displacementMap.channel),emissiveMapUv:$&&C(b.emissiveMap.channel),metalnessMapUv:kt&&C(b.metalnessMap.channel),roughnessMapUv:wt&&C(b.roughnessMap.channel),anisotropyMapUv:Se&&C(b.anisotropyMap.channel),clearcoatMapUv:Re&&C(b.clearcoatMap.channel),clearcoatNormalMapUv:He&&C(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&C(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&C(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&C(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&C(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&C(b.sheenRoughnessMap.channel),specularMapUv:qe&&C(b.specularMap.channel),specularColorMapUv:Ce&&C(b.specularColorMap.channel),specularIntensityMapUv:Ve&&C(b.specularIntensityMap.channel),transmissionMapUv:mt&&C(b.transmissionMap.channel),thicknessMapUv:Dt&&C(b.thicknessMap.channel),alphaMapUv:Ee&&C(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(jt||Tt),vertexNormals:!!Y.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(St||Ee),fog:!!me,useFog:b.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Y.attributes.normal===void 0&&jt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Be,skinning:Z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:St&&b.map.isVideoTexture===!0&&en.getTransfer(b.map.colorSpace)===on,decodeVideoTextureEmissive:$&&b.emissiveMap.isVideoTexture===!0&&en.getTransfer(b.emissiveMap.colorSpace)===on,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mr,flipSided:b.side===di,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:je&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&b.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=h.has(1),dt.vertexUv2s=h.has(2),dt.vertexUv3s=h.has(3),h.clear(),dt}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)N.push(W),N.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(_(N,b),L(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function _(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function L(b,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),b.push(u.mask)}function R(b){const N=M[b.type];let W;if(N){const H=er[N];W=B_.clone(H.uniforms)}else W=b.uniforms;return W}function P(b,N){let W=v.get(N);return W!==void 0?++W.usedTimes:(W=new uE(s,N,b,o),p.push(W),v.set(N,W)),W}function z(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),v.delete(b.cacheKey),b.destroy()}}function I(b){f.remove(b)}function O(){f.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:z,releaseShaderCache:I,programs:p,dispose:O}}function gE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function xE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,C,D,y,_){let L=s[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:C,materialVariant:u(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:_},s[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=C,L.materialVariant=u(x),L.groupOrder=D,L.renderOrder=x.renderOrder,L.z=y,L.group=_),e++,L}function h(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.push(L):C.transparent===!0?o.push(L):t.push(L)}function p(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.unshift(L):C.transparent===!0?o.unshift(L):t.unshift(L)}function v(x,M){t.length>1&&t.sort(x||xE),r.length>1&&r.sort(M||m0),o.length>1&&o.sort(M||m0)}function S(){for(let x=e,M=s.length;x<M;x++){const C=s[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function vE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new g0,s.set(r,[u])):o>=l.length?(u=new g0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new ln};break;case"SpotLight":t={position:new ne,direction:new ne,color:new ln,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new ln,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new ln,groundColor:new ln};break;case"RectAreaLight":t={color:new ln,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let SE=0;function ME(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new _E,t=yE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,l=new wn,u=new wn;function f(p){let v=0,S=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,C=0,D=0,y=0,_=0,L=0,R=0,P=0,z=0,I=0,O=0;p.sort(ME);for(let N=0,W=p.length;N<W;N++){const H=p[N],Z=H.color,te=H.intensity,me=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===As?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Z.r*te,S+=Z.g*te,x+=Z.b*te;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],te);O++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.directionalShadow[M]=J,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=oe,M++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(Z).multiplyScalar(te),oe.distance=me,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[D]=oe;const K=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,K.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[D]=K.matrix,H.castShadow){const J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.spotShadow[D]=J,r.spotShadowMap[D]=Y,P++}D++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(Z).multiplyScalar(te),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const K=H.shadow,J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,r.pointShadow[C]=J,r.pointShadowMap[C]=Y,r.pointShadowMatrix[C]=H.shadow.matrix,R++}r.point[C]=oe,C++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(te),oe.groundColor.copy(H.groundColor).multiplyScalar(te),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const b=r.hash;(b.directionalLength!==M||b.pointLength!==C||b.spotLength!==D||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==L||b.numPointShadows!==R||b.numSpotShadows!==P||b.numSpotMaps!==z||b.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+z-I,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,b.directionalLength=M,b.pointLength=C,b.spotLength=D,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=L,b.numPointShadows=R,b.numSpotShadows=P,b.numSpotMaps=z,b.numLightProbes=O,r.version=SE++)}function h(p,v){let S=0,x=0,M=0,C=0,D=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const R=p[_];if(R.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(R.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const P=r.rectArea[C];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const P=r.hemi[D];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),D++}}}return{setup:f,setupView:h,state:r}}function x0(s){const e=new EE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function wE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new x0(s),e.set(o,[f])):l>=u.length?(f=new x0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`,AE=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],CE=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],v0=new wn,ro=new ne,bd=new ne;function RE(s,e,t){let r=new eg;const o=new It,l=new It,u=new yn,f=new G_,h=new j_,p={},v=t.maxTextureSize,S={[ts]:di,[di]:ts,[Mr]:Mr},x=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:bE,fragmentShader:TE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new _i;C.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ni(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let _=this.type;this.render=function(I,O,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===xv&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gl);const N=s.getRenderTarget(),W=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(wr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=_!==this.type;te&&O.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(Y=>Y.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,Y=I.length;me<Y;me++){const oe=I[me],K=oe.shadow;if(K===void 0){Pt("WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const J=K.getFrameExtents();o.multiply(J),l.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,K.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,K.mapSize.y=l.y));const pe=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=pe,K.map===null||te===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===so){if(oe.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new rr(o.x,o.y,{format:As,type:Tr,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),K.map.texture.name=oe.name+".shadowMap",K.map.depthTexture=new va(o.x,o.y,tr),K.map.depthTexture.name=oe.name+".shadowMapDepth",K.map.depthTexture.format=Ar,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vn,K.map.depthTexture.magFilter=Vn}else oe.isPointLight?(K.map=new ug(o.x),K.map.depthTexture=new M_(o.x,ar)):(K.map=new rr(o.x,o.y),K.map.depthTexture=new va(o.x,o.y,ar)),K.map.depthTexture.name=oe.name+".shadowMap",K.map.depthTexture.format=Ar,this.type===Gl?(K.map.depthTexture.compareFunction=pe?Df:If,K.map.depthTexture.minFilter=Zn,K.map.depthTexture.magFilter=Zn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vn,K.map.depthTexture.magFilter=Vn);K.camera.updateProjectionMatrix()}const le=K.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<le;V++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,V),s.clear();else{V===0&&(s.setRenderTarget(K.map),s.clear());const ue=K.getViewport(V);u.set(l.x*ue.x,l.y*ue.y,l.x*ue.z,l.y*ue.w),Z.viewport(u)}if(oe.isPointLight){const ue=K.camera,et=K.matrix,tt=oe.distance||ue.far;tt!==ue.far&&(ue.far=tt,ue.updateProjectionMatrix()),ro.setFromMatrixPosition(oe.matrixWorld),ue.position.copy(ro),bd.copy(ue.position),bd.add(AE[V]),ue.up.copy(CE[V]),ue.lookAt(bd),ue.updateMatrixWorld(),et.makeTranslation(-ro.x,-ro.y,-ro.z),v0.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),K._frustum.setFromProjectionMatrix(v0,ue.coordinateSystem,ue.reversedDepth)}else K.updateMatrices(oe);r=K.getFrustum(),P(O,b,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===so&&L(K,b),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(N,W,H)};function L(I,O){const b=e.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new rr(o.x,o.y,{format:As,type:Tr})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,b,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,b,M,D,null)}function R(I,O,b,N){let W=null;const H=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)W=H;else if(W=b.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=W.uuid,te=O.uuid;let me=p[Z];me===void 0&&(me={},p[Z]=me);let Y=me[te];Y===void 0&&(Y=W.clone(),me[te]=Y,O.addEventListener("dispose",z)),W=Y}if(W.visible=O.visible,W.wireframe=O.wireframe,N===so?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:S[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=s.properties.get(W);Z.light=b}return W}function P(I,O,b,N,W){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&W===so)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const te=e.update(I),me=I.material;if(Array.isArray(me)){const Y=te.groups;for(let oe=0,K=Y.length;oe<K;oe++){const J=Y[oe],pe=me[J.materialIndex];if(pe&&pe.visible){const le=R(I,pe,N,W);I.onBeforeShadow(s,I,O,b,te,le,J),s.renderBufferDirect(b,null,te,le,I,J),I.onAfterShadow(s,I,O,b,te,le,J)}}}else if(me.visible){const Y=R(I,me,N,W);I.onBeforeShadow(s,I,O,b,te,Y,null),s.renderBufferDirect(b,null,te,Y,I,null),I.onAfterShadow(s,I,O,b,te,Y,null)}}const Z=I.children;for(let te=0,me=Z.length;te<me;te++)P(Z[te],O,b,N,W)}function z(I){I.target.removeEventListener("dispose",z);for(const b in p){const N=p[b],W=I.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}function NE(s,e){function t(){let X=!1;const Ee=new yn;let ve=null;const Ye=new yn(0,0,0,0);return{setMask:function(je){ve!==je&&!X&&(s.colorMask(je,je,je,je),ve=je)},setLocked:function(je){X=je},setClear:function(je,Ne,dt,bt,sn){sn===!0&&(je*=bt,Ne*=bt,dt*=bt),Ee.set(je,Ne,dt,bt),Ye.equals(Ee)===!1&&(s.clearColor(je,Ne,dt,bt),Ye.copy(Ee))},reset:function(){X=!1,ve=null,Ye.set(-1,0,0,0)}}}function r(){let X=!1,Ee=!1,ve=null,Ye=null,je=null;return{setReversed:function(Ne){if(Ee!==Ne){const dt=e.get("EXT_clip_control");Ne?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Ee=Ne;const bt=je;je=null,this.setClear(bt)}},getReversed:function(){return Ee},setTest:function(Ne){Ne?ye(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ne){ve!==Ne&&!X&&(s.depthMask(Ne),ve=Ne)},setFunc:function(Ne){if(Ee&&(Ne=Kv[Ne]),Ye!==Ne){switch(Ne){case Pd:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ye=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){je!==Ne&&(je=Ne,Ee&&(Ne=1-Ne),s.clearDepth(Ne))},reset:function(){X=!1,ve=null,Ye=null,je=null,Ee=!1}}}function o(){let X=!1,Ee=null,ve=null,Ye=null,je=null,Ne=null,dt=null,bt=null,sn=null;return{setTest:function(Qt){X||(Qt?ye(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Qt){Ee!==Qt&&!X&&(s.stencilMask(Qt),Ee=Qt)},setFunc:function(Qt,bn,gn){(ve!==Qt||Ye!==bn||je!==gn)&&(s.stencilFunc(Qt,bn,gn),ve=Qt,Ye=bn,je=gn)},setOp:function(Qt,bn,gn){(Ne!==Qt||dt!==bn||bt!==gn)&&(s.stencilOp(Qt,bn,gn),Ne=Qt,dt=bn,bt=gn)},setLocked:function(Qt){X=Qt},setClear:function(Qt){sn!==Qt&&(s.clearStencil(Qt),sn=Qt)},reset:function(){X=!1,Ee=null,ve=null,Ye=null,je=null,Ne=null,dt=null,bt=null,sn=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,z=null,I=null,O=null,b=new ln(0,0,0),N=0,W=!1,H=null,Z=null,te=null,me=null,Y=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(pe)[1]),K=J>=1):pe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),K=J>=2);let le=null,V={};const ue=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),tt=new yn().fromArray(ue),Pe=new yn().fromArray(et);function fe(X,Ee,ve,Ye){const je=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(X,Ne),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ve;dt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,je):s.texImage2D(Ee+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,je);return Ne}const be={};be[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),u.setFunc(ga),Ot(!1),jt(vm),ye(s.CULL_FACE),qt(wr);function ye(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Be(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function it(X,Ee){return x[X]!==Ee?(s.bindFramebuffer(X,Ee),x[X]=Ee,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ee),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ut(X,Ee){let ve=C,Ye=!1;if(X){ve=M.get(Ee),ve===void 0&&(ve=[],M.set(Ee,ve));const je=X.textures;if(ve.length!==je.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,dt=je.length;Ne<dt;Ne++)ve[Ne]=s.COLOR_ATTACHMENT0+Ne;ve.length=je.length,Ye=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ye=!0);Ye&&s.drawBuffers(ve)}function St(X){return D!==X?(s.useProgram(X),D=X,!0):!1}const Mt={[Ss]:s.FUNC_ADD,[_v]:s.FUNC_SUBTRACT,[yv]:s.FUNC_REVERSE_SUBTRACT};Mt[Sv]=s.MIN,Mt[Mv]=s.MAX;const Ft={[Ev]:s.ZERO,[wv]:s.ONE,[bv]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[Pv]:s.SRC_ALPHA_SATURATE,[Rv]:s.DST_COLOR,[Av]:s.DST_ALPHA,[Tv]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[Nv]:s.ONE_MINUS_DST_COLOR,[Cv]:s.ONE_MINUS_DST_ALPHA,[Iv]:s.CONSTANT_COLOR,[Dv]:s.ONE_MINUS_CONSTANT_COLOR,[Lv]:s.CONSTANT_ALPHA,[Uv]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(X,Ee,ve,Ye,je,Ne,dt,bt,sn,Qt){if(X===wr){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(ye(s.BLEND),y=!0),X!==vv){if(X!==_||Qt!==W){if((L!==Ss||z!==Ss)&&(s.blendEquation(s.FUNC_ADD),L=Ss,z=Ss),Qt)switch(X){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFunc(s.ONE,s.ONE);break;case ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nn("WebGLState: Invalid blending: ",X);break}else switch(X){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ym:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",X);break}R=null,P=null,I=null,O=null,b.set(0,0,0),N=0,_=X,W=Qt}return}je=je||Ee,Ne=Ne||ve,dt=dt||Ye,(Ee!==L||je!==z)&&(s.blendEquationSeparate(Mt[Ee],Mt[je]),L=Ee,z=je),(ve!==R||Ye!==P||Ne!==I||dt!==O)&&(s.blendFuncSeparate(Ft[ve],Ft[Ye],Ft[Ne],Ft[dt]),R=ve,P=Ye,I=Ne,O=dt),(bt.equals(b)===!1||sn!==N)&&(s.blendColor(bt.r,bt.g,bt.b,sn),b.copy(bt),N=sn),_=X,W=!1}function yt(X,Ee){X.side===Mr?Be(s.CULL_FACE):ye(s.CULL_FACE);let ve=X.side===di;Ee&&(ve=!ve),Ot(ve),X.blending===pa&&X.transparent===!1?qt(wr):qt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ye=X.stencilWrite;f.setTest(Ye),Ye&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(X){H!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),H=X)}function jt(X){X!==mv?(ye(s.CULL_FACE),X!==Z&&(X===vm?s.cullFace(s.BACK):X===gv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),Z=X}function Xt(X){X!==te&&(K&&s.lineWidth(X),te=X)}function $(X,Ee,ve){X?(ye(s.POLYGON_OFFSET_FILL),(me!==Ee||Y!==ve)&&(me=Ee,Y=ve,u.getReversed()&&(Ee=-Ee),s.polygonOffset(Ee,ve))):Be(s.POLYGON_OFFSET_FILL)}function kt(X){X?ye(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function wt(X){X===void 0&&(X=s.TEXTURE0+oe-1),le!==X&&(s.activeTexture(X),le=X)}function Tt(X,Ee,ve){ve===void 0&&(le===null?ve=s.TEXTURE0+oe-1:ve=le);let Ye=V[ve];Ye===void 0&&(Ye={type:void 0,texture:void 0},V[ve]=Ye),(Ye.type!==X||Ye.texture!==Ee)&&(le!==ve&&(s.activeTexture(ve),le=ve),s.bindTexture(X,Ee||be[X]),Ye.type=X,Ye.texture=Ee)}function Ke(){const X=V[le];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Bt(){try{s.compressedTexImage2D(...arguments)}catch(X){nn("WebGLState:",X)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(X){nn("WebGLState:",X)}}function w(){try{s.texSubImage2D(...arguments)}catch(X){nn("WebGLState:",X)}}function se(){try{s.texSubImage3D(...arguments)}catch(X){nn("WebGLState:",X)}}function Se(){try{s.compressedTexSubImage2D(...arguments)}catch(X){nn("WebGLState:",X)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(X){nn("WebGLState:",X)}}function He(){try{s.texStorage2D(...arguments)}catch(X){nn("WebGLState:",X)}}function Ge(){try{s.texStorage3D(...arguments)}catch(X){nn("WebGLState:",X)}}function xe(){try{s.texImage2D(...arguments)}catch(X){nn("WebGLState:",X)}}function Te(){try{s.texImage3D(...arguments)}catch(X){nn("WebGLState:",X)}}function Me(X){return S[X]!==void 0?S[X]:s.getParameter(X)}function Xe(X,Ee){S[X]!==Ee&&(s.pixelStorei(X,Ee),S[X]=Ee)}function qe(X){tt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),tt.copy(X))}function Ce(X){Pe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Pe.copy(X))}function Ve(X,Ee){let ve=p.get(Ee);ve===void 0&&(ve=new WeakMap,p.set(Ee,ve));let Ye=ve.get(X);Ye===void 0&&(Ye=s.getUniformBlockIndex(Ee,X.name),ve.set(X,Ye))}function mt(X,Ee){const Ye=p.get(Ee).get(X);h.get(Ee)!==Ye&&(s.uniformBlockBinding(Ee,Ye,X.__bindingPointIndex),h.set(Ee,Ye))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},le=null,V={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,z=null,I=null,O=null,b=new ln(0,0,0),N=0,W=!1,H=null,Z=null,te=null,me=null,Y=null,tt.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ye,disable:Be,bindFramebuffer:it,drawBuffers:ut,useProgram:St,setBlending:qt,setMaterial:yt,setFlipSided:Ot,setCullFace:jt,setLineWidth:Xt,setPolygonOffset:$,setScissorTest:kt,activeTexture:wt,bindTexture:Tt,unbindTexture:Ke,compressedTexImage2D:Bt,compressedTexImage3D:U,texImage2D:xe,texImage3D:Te,pixelStorei:Xe,getParameter:Me,updateUBOMapping:Ve,uniformBlockBinding:mt,texStorage2D:He,texStorage3D:Ge,texSubImage2D:w,texSubImage3D:se,compressedTexSubImage2D:Se,compressedTexSubImage3D:Re,scissor:qe,viewport:Ce,reset:Dt}}function PE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,w){return C?new OffscreenCanvas(U,w):tc("canvas")}function y(U,w,se){let Se=1;const Re=Bt(U);if((Re.width>se||Re.height>se)&&(Se=se/Math.max(Re.width,Re.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const He=Math.floor(Se*Re.width),Ge=Math.floor(Se*Re.height);x===void 0&&(x=D(He,Ge));const xe=w?D(He,Ge):x;return xe.width=He,xe.height=Ge,xe.getContext("2d").drawImage(U,0,0,He,Ge),Pt("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+He+"x"+Ge+")."),xe}else return"data"in U&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),U;return U}function _(U){return U.generateMipmaps}function L(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(U,w,se,Se,Re,He=!1){if(U!==null){if(s[U]!==void 0)return s[U];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ge;Se&&(Ge=e.get("EXT_texture_norm16"),Ge||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=w;if(w===s.RED&&(se===s.FLOAT&&(xe=s.R32F),se===s.HALF_FLOAT&&(xe=s.R16F),se===s.UNSIGNED_BYTE&&(xe=s.R8),se===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.R16_EXT),se===s.SHORT&&Ge&&(xe=Ge.R16_SNORM_EXT)),w===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.R8UI),se===s.UNSIGNED_SHORT&&(xe=s.R16UI),se===s.UNSIGNED_INT&&(xe=s.R32UI),se===s.BYTE&&(xe=s.R8I),se===s.SHORT&&(xe=s.R16I),se===s.INT&&(xe=s.R32I)),w===s.RG&&(se===s.FLOAT&&(xe=s.RG32F),se===s.HALF_FLOAT&&(xe=s.RG16F),se===s.UNSIGNED_BYTE&&(xe=s.RG8),se===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RG16_EXT),se===s.SHORT&&Ge&&(xe=Ge.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RG8UI),se===s.UNSIGNED_SHORT&&(xe=s.RG16UI),se===s.UNSIGNED_INT&&(xe=s.RG32UI),se===s.BYTE&&(xe=s.RG8I),se===s.SHORT&&(xe=s.RG16I),se===s.INT&&(xe=s.RG32I)),w===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),se===s.UNSIGNED_INT&&(xe=s.RGB32UI),se===s.BYTE&&(xe=s.RGB8I),se===s.SHORT&&(xe=s.RGB16I),se===s.INT&&(xe=s.RGB32I)),w===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),se===s.UNSIGNED_INT&&(xe=s.RGBA32UI),se===s.BYTE&&(xe=s.RGBA8I),se===s.SHORT&&(xe=s.RGBA16I),se===s.INT&&(xe=s.RGBA32I)),w===s.RGB&&(se===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGB16_EXT),se===s.SHORT&&Ge&&(xe=Ge.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),w===s.RGBA){const Te=He?Ql:en.getTransfer(Re);se===s.FLOAT&&(xe=s.RGBA32F),se===s.HALF_FLOAT&&(xe=s.RGBA16F),se===s.UNSIGNED_BYTE&&(xe=Te===on?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGBA16_EXT),se===s.SHORT&&Ge&&(xe=Ge.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function z(U,w){let se;return U?w===null||w===ar||w===po?se=s.DEPTH24_STENCIL8:w===tr?se=s.DEPTH32F_STENCIL8:w===ho&&(se=s.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ar||w===po?se=s.DEPTH_COMPONENT24:w===tr?se=s.DEPTH_COMPONENT32F:w===ho&&(se=s.DEPTH_COMPONENT16),se}function I(U,w){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Vn&&U.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function O(U){const w=U.target;w.removeEventListener("dispose",O),N(w),w.isVideoTexture&&v.delete(w),w.isHTMLTexture&&S.delete(w)}function b(U){const w=U.target;w.removeEventListener("dispose",b),H(w)}function N(U){const w=r.get(U);if(w.__webglInit===void 0)return;const se=U.source,Se=M.get(se);if(Se){const Re=Se[w.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&W(U),Object.keys(Se).length===0&&M.delete(se)}r.remove(U)}function W(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const se=U.source,Se=M.get(se);delete Se[w.__cacheKey],u.memory.textures--}function H(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(w.__webglFramebuffer[Se]))for(let Re=0;Re<w.__webglFramebuffer[Se].length;Re++)s.deleteFramebuffer(w.__webglFramebuffer[Se][Re]);else s.deleteFramebuffer(w.__webglFramebuffer[Se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Se])}else{if(Array.isArray(w.__webglFramebuffer))for(let Se=0;Se<w.__webglFramebuffer.length;Se++)s.deleteFramebuffer(w.__webglFramebuffer[Se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Se=0;Se<w.__webglColorRenderbuffer.length;Se++)w.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const se=U.textures;for(let Se=0,Re=se.length;Se<Re;Se++){const He=r.get(se[Se]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),u.memory.textures--),r.remove(se[Se])}r.remove(U)}let Z=0;function te(){Z=0}function me(){return Z}function Y(U){Z=U}function oe(){const U=Z;return U>=o.maxTextures&&Pt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function K(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function J(U,w){const se=r.get(U);if(U.isVideoTexture&&Tt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&se.__version!==U.version){const Se=U.image;if(Se===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(se,U,w);return}}else U.isExternalTexture&&(se.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+w)}function pe(U,w){const se=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){Be(se,U,w);return}else U.isExternalTexture&&(se.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+w)}function le(U,w){const se=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){Be(se,U,w);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+w)}function V(U,w){const se=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&se.__version!==U.version){it(se,U,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+w)}const ue={[kd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},et={[Vn]:s.NEAREST,[kv]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},tt={[Vv]:s.NEVER,[Xv]:s.ALWAYS,[Hv]:s.LESS,[If]:s.LEQUAL,[Gv]:s.EQUAL,[Df]:s.GEQUAL,[jv]:s.GREATER,[Wv]:s.NOTEQUAL};function Pe(U,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===Xu||w.magFilter===vl||w.magFilter===Es||w.minFilter===Zn||w.minFilter===Xu||w.minFilter===vl||w.minFilter===Es)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ue[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ue[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ue[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,et[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vn||w.minFilter!==vl&&w.minFilter!==Es||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function fe(U,w){let se=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",O));const Se=w.source;let Re=M.get(Se);Re===void 0&&(Re={},M.set(Se,Re));const He=K(w);if(He!==U.__cacheKey){Re[He]===void 0&&(Re[He]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),Re[He].usedTimes++;const Ge=Re[U.__cacheKey];Ge!==void 0&&(Re[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&W(w)),U.__cacheKey=He,U.__webglTexture=Re[He].texture}return se}function be(U,w,se){return Math.floor(Math.floor(U/se)/w)}function ye(U,w,se,Se){const He=U.updateRanges;if(He.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,se,Se,w.data);else{He.sort((Xe,qe)=>Xe.start-qe.start);let Ge=0;for(let Xe=1;Xe<He.length;Xe++){const qe=He[Ge],Ce=He[Xe],Ve=qe.start+qe.count,mt=be(Ce.start,w.width,4),Dt=be(qe.start,w.width,4);Ce.start<=Ve+1&&mt===Dt&&be(Ce.start+Ce.count-1,w.width,4)===mt?qe.count=Math.max(qe.count,Ce.start+Ce.count-qe.start):(++Ge,He[Ge]=Ce)}He.length=Ge+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Te=t.getParameter(s.UNPACK_SKIP_PIXELS),Me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Xe=0,qe=He.length;Xe<qe;Xe++){const Ce=He[Xe],Ve=Math.floor(Ce.start/4),mt=Math.ceil(Ce.count/4),Dt=Ve%w.width,X=Math.floor(Ve/w.width),Ee=mt,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,Dt,X,Ee,ve,se,Se,w.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Me)}}function Be(U,w,se){let Se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=s.TEXTURE_3D);const Re=fe(U,w),He=w.source;t.bindTexture(Se,U.__webglTexture,s.TEXTURE0+se);const Ge=r.get(He);if(He.version!==Ge.__version||Re===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ve=en.getPrimaries(en.workingColorSpace),Ye=w.colorSpace===Jr?null:en.getPrimaries(w.colorSpace),je=w.colorSpace===Jr||ve===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let Te=y(w.image,!1,o.maxTextureSize);Te=Ke(w,Te);const Me=l.convert(w.format,w.colorSpace),Xe=l.convert(w.type);let qe=P(w.internalFormat,Me,Xe,w.normalized,w.colorSpace,w.isVideoTexture);Pe(Se,w);let Ce;const Ve=w.mipmaps,mt=w.isVideoTexture!==!0,Dt=Ge.__version===void 0||Re===!0,X=He.dataReady,Ee=I(w,Te);if(w.isDepthTexture)qe=z(w.format===ws,w.type),Dt&&(mt?t.texStorage2D(s.TEXTURE_2D,1,qe,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,qe,Te.width,Te.height,0,Me,Xe,null));else if(w.isDataTexture)if(Ve.length>0){mt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Ee,qe,Ve[0].width,Ve[0].height);for(let ve=0,Ye=Ve.length;ve<Ye;ve++)Ce=Ve[ve],mt?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Me,Xe,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Me,Xe,Ce.data);w.generateMipmaps=!1}else mt?(Dt&&t.texStorage2D(s.TEXTURE_2D,Ee,qe,Te.width,Te.height),X&&ye(w,Te,Me,Xe)):t.texImage2D(s.TEXTURE_2D,0,qe,Te.width,Te.height,0,Me,Xe,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Ve[0].width,Ve[0].height,Te.depth);for(let ve=0,Ye=Ve.length;ve<Ye;ve++)if(Ce=Ve[ve],w.format!==Xi)if(Me!==null)if(mt){if(X)if(w.layerUpdates.size>0){const je=qm(Ce.width,Ce.height,w.format,w.type);for(const Ne of w.layerUpdates){const dt=Ce.data.subarray(Ne*je/Ce.data.BYTES_PER_ELEMENT,(Ne+1)*je/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Ne,Ce.width,Ce.height,1,Me,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Te.depth,Me,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Te.depth,0,Ce.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Te.depth,Me,Xe,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Te.depth,0,Me,Xe,Ce.data)}else{mt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Ee,qe,Ve[0].width,Ve[0].height);for(let ve=0,Ye=Ve.length;ve<Ye;ve++)Ce=Ve[ve],w.format!==Xi?Me!==null?mt?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Me,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Ce.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Me,Xe,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Me,Xe,Ce.data)}else if(w.isDataArrayTexture)if(mt){if(Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Te.width,Te.height,Te.depth),X)if(w.layerUpdates.size>0){const ve=qm(Te.width,Te.height,w.format,w.type);for(const Ye of w.layerUpdates){const je=Te.data.subarray(Ye*ve/Te.data.BYTES_PER_ELEMENT,(Ye+1)*ve/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ye,Te.width,Te.height,1,Me,Xe,je)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Me,Xe,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Te.width,Te.height,Te.depth,0,Me,Xe,Te.data);else if(w.isData3DTexture)mt?(Dt&&t.texStorage3D(s.TEXTURE_3D,Ee,qe,Te.width,Te.height,Te.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Me,Xe,Te.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Te.width,Te.height,Te.depth,0,Me,Xe,Te.data);else if(w.isFramebufferTexture){if(Dt)if(mt)t.texStorage2D(s.TEXTURE_2D,Ee,qe,Te.width,Te.height);else{let ve=Te.width,Ye=Te.height;for(let je=0;je<Ee;je++)t.texImage2D(s.TEXTURE_2D,je,qe,ve,Ye,0,Me,Xe,null),ve>>=1,Ye>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),Te.parentNode!==ve){ve.appendChild(Te),S.add(w),ve.onpaint=bt=>{const sn=bt.changedElements;for(const Qt of S)sn.includes(Qt.image)&&(Qt.needsUpdate=!0)},ve.requestPaint();return}const Ye=0,je=s.RGBA,Ne=s.RGBA,dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ye,je,Ne,dt,Te),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(mt&&Dt){const ve=Bt(Ve[0]);t.texStorage2D(s.TEXTURE_2D,Ee,qe,ve.width,ve.height)}for(let ve=0,Ye=Ve.length;ve<Ye;ve++)Ce=Ve[ve],mt?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Me,Xe,Ce):t.texImage2D(s.TEXTURE_2D,ve,qe,Me,Xe,Ce);w.generateMipmaps=!1}else if(mt){if(Dt){const ve=Bt(Te);t.texStorage2D(s.TEXTURE_2D,Ee,qe,ve.width,ve.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Xe,Te)}else t.texImage2D(s.TEXTURE_2D,0,qe,Me,Xe,Te);_(w)&&L(Se),Ge.__version=He.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function it(U,w,se){if(w.image.length!==6)return;const Se=fe(U,w),Re=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+se);const He=r.get(Re);if(Re.version!==He.__version||Se===!0){t.activeTexture(s.TEXTURE0+se);const Ge=en.getPrimaries(en.workingColorSpace),xe=w.colorSpace===Jr?null:en.getPrimaries(w.colorSpace),Te=w.colorSpace===Jr||Ge===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,qe=[];for(let Ne=0;Ne<6;Ne++)!Me&&!Xe?qe[Ne]=y(w.image[Ne],!0,o.maxCubemapSize):qe[Ne]=Xe?w.image[Ne].image:w.image[Ne],qe[Ne]=Ke(w,qe[Ne]);const Ce=qe[0],Ve=l.convert(w.format,w.colorSpace),mt=l.convert(w.type),Dt=P(w.internalFormat,Ve,mt,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Ee=He.__version===void 0||Se===!0,ve=Re.dataReady;let Ye=I(w,Ce);Pe(s.TEXTURE_CUBE_MAP,w);let je;if(Me){X&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Dt,Ce.width,Ce.height);for(let Ne=0;Ne<6;Ne++){je=qe[Ne].mipmaps;for(let dt=0;dt<je.length;dt++){const bt=je[dt];w.format!==Xi?Ve!==null?X?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt,0,0,bt.width,bt.height,Ve,bt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt,Dt,bt.width,bt.height,0,bt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt,0,0,bt.width,bt.height,Ve,mt,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt,Dt,bt.width,bt.height,0,Ve,mt,bt.data)}}}else{if(je=w.mipmaps,X&&Ee){je.length>0&&Ye++;const Ne=Bt(qe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Dt,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(Xe){X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,qe[Ne].width,qe[Ne].height,Ve,mt,qe[Ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Dt,qe[Ne].width,qe[Ne].height,0,Ve,mt,qe[Ne].data);for(let dt=0;dt<je.length;dt++){const sn=je[dt].image[Ne].image;X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt+1,0,0,sn.width,sn.height,Ve,mt,sn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt+1,Dt,sn.width,sn.height,0,Ve,mt,sn.data)}}else{X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ve,mt,qe[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Dt,Ve,mt,qe[Ne]);for(let dt=0;dt<je.length;dt++){const bt=je[dt];X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt+1,0,0,Ve,mt,bt.image[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,dt+1,Dt,Ve,mt,bt.image[Ne])}}}_(w)&&L(s.TEXTURE_CUBE_MAP),He.__version=Re.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ut(U,w,se,Se,Re,He){const Ge=l.convert(se.format,se.colorSpace),xe=l.convert(se.type),Te=P(se.internalFormat,Ge,xe,se.normalized,se.colorSpace),Me=r.get(w),Xe=r.get(se);if(Xe.__renderTarget=w,!Me.__hasExternalTextures){const qe=Math.max(1,w.width>>He),Ce=Math.max(1,w.height>>He);Re===s.TEXTURE_3D||Re===s.TEXTURE_2D_ARRAY?t.texImage3D(Re,He,Te,qe,Ce,w.depth,0,Ge,xe,null):t.texImage2D(Re,He,Te,qe,Ce,0,Ge,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),wt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Re,Xe.__webglTexture,0,kt(w)):(Re===s.TEXTURE_2D||Re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Re,Xe.__webglTexture,He),t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,w,se){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const Se=w.depthTexture,Re=Se&&Se.isDepthTexture?Se.type:null,He=z(w.stencilBuffer,Re),Ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(w),He,w.width,w.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(w),He,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,He,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,U)}else{const Se=w.textures;for(let Re=0;Re<Se.length;Re++){const He=Se[Re],Ge=l.convert(He.format,He.colorSpace),xe=l.convert(He.type),Te=P(He.internalFormat,Ge,xe,He.normalized,He.colorSpace);wt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(w),Te,w.width,w.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(w),Te,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Te,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(U,w,se){const Se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=r.get(w.depthTexture);if(Re.__renderTarget=w,(!Re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Se){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),Re.__webglTexture===void 0){Re.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,w.depthTexture);const Me=l.convert(w.depthTexture.format),Xe=l.convert(w.depthTexture.type);let qe;w.depthTexture.format===Ar?qe=s.DEPTH_COMPONENT24:w.depthTexture.format===ws&&(qe=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,qe,w.width,w.height,0,Me,Xe,null)}}else J(w.depthTexture,0);const He=Re.__webglTexture,Ge=kt(w),xe=Se?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,Te=w.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ar)wt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,xe,He,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,Te,xe,He,0);else if(w.depthTexture.format===ws)wt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,xe,He,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,Te,xe,He,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const w=r.get(U),se=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const Se=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){const Re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",Re)};Se.addEventListener("dispose",Re),w.__depthDisposeCallback=Re}w.__boundDepthTexture=Se}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(se)for(let Se=0;Se<6;Se++)Mt(w.__webglFramebuffer[Se],U,Se);else{const Se=U.texture.mipmaps;Se&&Se.length>0?Mt(w.__webglFramebuffer[0],U,0):Mt(w.__webglFramebuffer,U,0)}else if(se){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=s.createRenderbuffer(),St(w.__webglDepthbuffer[Se],U,!1);else{const Re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=w.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,He),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,He)}}else{const Se=U.texture.mipmaps;if(Se&&Se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),St(w.__webglDepthbuffer,U,!1);else{const Re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,He),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,He)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(U,w,se){const Se=r.get(U);w!==void 0&&ut(Se.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Ft(U)}function yt(U){const w=U.texture,se=r.get(U),Se=r.get(w);U.addEventListener("dispose",b);const Re=U.textures,He=U.isWebGLCubeRenderTarget===!0,Ge=Re.length>1;if(Ge||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=w.version,u.memory.textures++),He){se.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){se.__webglFramebuffer[xe]=[];for(let Te=0;Te<w.mipmaps.length;Te++)se.__webglFramebuffer[xe][Te]=s.createFramebuffer()}else se.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){se.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)se.__webglFramebuffer[xe]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let xe=0,Te=Re.length;xe<Te;xe++){const Me=r.get(Re[xe]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&wt(U)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let xe=0;xe<Re.length;xe++){const Te=Re[xe];se.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Me=l.convert(Te.format,Te.colorSpace),Xe=l.convert(Te.type),qe=P(Te.internalFormat,Me,Xe,Te.normalized,Te.colorSpace,U.isXRRenderTarget===!0),Ce=kt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,qe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,se.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),St(se.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(He){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ut(se.__webglFramebuffer[xe][Te],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else ut(se.__webglFramebuffer[xe],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(w)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let xe=0,Te=Re.length;xe<Te;xe++){const Me=Re[xe],Xe=r.get(Me);let qe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(qe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(qe,Xe.__webglTexture),Pe(qe,Me),ut(se.__webglFramebuffer,U,Me,s.COLOR_ATTACHMENT0+xe,qe,0),_(Me)&&L(qe)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Se.__webglTexture),Pe(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ut(se.__webglFramebuffer[Te],U,w,s.COLOR_ATTACHMENT0,xe,Te);else ut(se.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,xe,0);_(w)&&L(xe),t.unbindTexture()}U.depthBuffer&&Ft(U)}function Ot(U){const w=U.textures;for(let se=0,Se=w.length;se<Se;se++){const Re=w[se];if(_(Re)){const He=R(U),Ge=r.get(Re).__webglTexture;t.bindTexture(He,Ge),L(He),t.unbindTexture()}}}const jt=[],Xt=[];function $(U){if(U.samples>0){if(wt(U)===!1){const w=U.textures,se=U.width,Se=U.height;let Re=s.COLOR_BUFFER_BIT;const He=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(U),xe=w.length>1;if(xe)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Te=U.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Re|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Re|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Me]);const Xe=r.get(w[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,se,Se,0,0,se,Se,Re,s.NEAREST),h===!0&&(jt.length=0,Xt.length=0,jt.push(s.COLOR_ATTACHMENT0+Me),U.depthBuffer&&U.resolveDepthBuffer===!1&&(jt.push(He),Xt.push(He),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Me]);const Xe=r.get(w[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function kt(U){return Math.min(o.maxSamples,U.samples)}function wt(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(U){const w=u.render.frame;v.get(U)!==w&&(v.set(U,w),U.update())}function Ke(U,w){const se=U.colorSpace,Se=U.format,Re=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||se!==Jl&&se!==Jr&&(en.getTransfer(se)===on?(Se!==Xi||Re!==Ii)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",se)),w}function Bt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=te,this.getTextureUnits=me,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=qt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IE(s,e){function t(r,o=Jr){let l;const u=en.getTransfer(o);if(r===Ii)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===G0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===j0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===V0)return s.BYTE;if(r===H0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===ar)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===Tr)return s.HALF_FLOAT;if(r===W0)return s.ALPHA;if(r===X0)return s.RGB;if(r===Xi)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===ws)return s.DEPTH_STENCIL;if(r===Y0)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===As)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===jl||r===Wl||r===Xl||r===Yl)if(u===on)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Vd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Wd||r===Xd||r===Yd||r===$d||r===Kl||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Wd)return u===on?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return l.COMPRESSED_R11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===on?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===Zl||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:DE,fragmentShader:LE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Rs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,C=null;const D=typeof XRWebGLBinding<"u",y=new UE,_={},L=t.getContextAttributes();let R=null,P=null;const z=[],I=[],O=new It;let b=null;const N=new Pi;N.viewport=new yn;const W=new Pi;W.viewport=new yn;const H=[N,W],Z=new X_;let te=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let be=z[fe];return be===void 0&&(be=new ed,z[fe]=be),be.getTargetRaySpace()},this.getControllerGrip=function(fe){let be=z[fe];return be===void 0&&(be=new ed,z[fe]=be),be.getGripSpace()},this.getHand=function(fe){let be=z[fe];return be===void 0&&(be=new ed,z[fe]=be),be.getHandSpace()};function Y(fe){const be=I.indexOf(fe.inputSource);if(be===-1)return;const ye=z[be];ye!==void 0&&(ye.update(fe.inputSource,fe.frame,p||u),ye.dispatchEvent({type:fe.type,data:fe.inputSource}))}function oe(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",K);for(let fe=0;fe<z.length;fe++){const be=I[fe];be!==null&&(I[fe]=null,z[fe].disconnect(be))}te=null,me=null,y.reset();for(const fe in _)delete _[fe];e.setRenderTarget(R),M=null,x=null,S=null,o=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){l=fe,r.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){f=fe,r.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(fe){p=fe},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(fe){if(o=fe,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,it=null;L.depth&&(it=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=L.stencil?ws:Ar,Be=L.stencil?po:ar);const ut={colorFormat:t.RGBA8,depthFormat:it,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ut),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new rr(x.textureWidth,x.textureHeight,{format:Xi,type:Ii,depthTexture:new va(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new rr(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(fe){for(let be=0;be<fe.removed.length;be++){const ye=fe.removed[be],Be=I.indexOf(ye);Be>=0&&(I[Be]=null,z[Be].disconnect(ye))}for(let be=0;be<fe.added.length;be++){const ye=fe.added[be];let Be=I.indexOf(ye);if(Be===-1){for(let ut=0;ut<z.length;ut++)if(ut>=I.length){I.push(ye),Be=ut;break}else if(I[ut]===null){I[ut]=ye,Be=ut;break}if(Be===-1)break}const it=z[Be];it&&it.connect(ye)}}const J=new ne,pe=new ne;function le(fe,be,ye){J.setFromMatrixPosition(be.matrixWorld),pe.setFromMatrixPosition(ye.matrixWorld);const Be=J.distanceTo(pe),it=be.projectionMatrix.elements,ut=ye.projectionMatrix.elements,St=it[14]/(it[10]-1),Mt=it[14]/(it[10]+1),Ft=(it[9]+1)/it[5],qt=(it[9]-1)/it[5],yt=(it[8]-1)/it[0],Ot=(ut[8]+1)/ut[0],jt=St*yt,Xt=St*Ot,$=Be/(-yt+Ot),kt=$*-yt;if(be.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(kt),fe.translateZ($),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),it[10]===-1)fe.projectionMatrix.copy(be.projectionMatrix),fe.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const wt=St+$,Tt=Mt+$,Ke=jt-kt,Bt=Xt+(Be-kt),U=Ft*Mt/Tt*wt,w=qt*Mt/Tt*wt;fe.projectionMatrix.makePerspective(Ke,Bt,U,w,wt,Tt),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function V(fe,be){be===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(be.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(o===null)return;let be=fe.near,ye=fe.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),Z.near=W.near=N.near=be,Z.far=W.far=N.far=ye,(te!==Z.near||me!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),te=Z.near,me=Z.far),Z.layers.mask=fe.layers.mask|6,N.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Be=fe.parent,it=Z.cameras;V(Z,Be);for(let ut=0;ut<it.length;ut++)V(it[ut],Be);it.length===2?le(Z,N,W):Z.projectionMatrix.copy(N.projectionMatrix),ue(fe,Z,Be)};function ue(fe,be,ye){ye===null?fe.matrix.copy(be.matrixWorld):(fe.matrix.copy(ye.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(be.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(be.projectionMatrix),fe.projectionMatrixInverse.copy(be.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=vf*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(fe){h=fe,x!==null&&(x.fixedFoveation=fe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=fe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(fe){return _[fe]};let et=null;function tt(fe,be){if(v=be.getViewerPose(p||u),C=be,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Be=!1;ye.length!==Z.cameras.length&&(Z.cameras.length=0,Be=!0);for(let Mt=0;Mt<ye.length;Mt++){const Ft=ye[Mt];let qt=null;if(M!==null)qt=M.getViewport(Ft);else{const Ot=S.getViewSubImage(x,Ft);qt=Ot.viewport,Mt===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let yt=H[Mt];yt===void 0&&(yt=new Pi,yt.layers.enable(Mt),yt.viewport=new yn,H[Mt]=yt),yt.matrix.fromArray(Ft.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ft.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(qt.x,qt.y,qt.width,qt.height),Mt===0&&(Z.matrix.copy(yt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Be===!0&&Z.cameras.push(yt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const Mt=S.getDepthInformation(ye[0]);Mt&&Mt.isValid&&Mt.texture&&y.init(Mt,o.renderState)}if(it&&it.includes("camera-access")&&D){e.state.unbindTexture(),S=r.getBinding();for(let Mt=0;Mt<ye.length;Mt++){const Ft=ye[Mt].camera;if(Ft){let qt=_[Ft];qt||(qt=new ng,_[Ft]=qt);const yt=S.getCameraImage(Ft);qt.sourceTexture=yt}}}}for(let ye=0;ye<z.length;ye++){const Be=I[ye],it=z[ye];Be!==null&&it!==void 0&&it.update(Be,be,p||u)}et&&et(fe,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),C=null}const Pe=new lg;Pe.setAnimationLoop(tt),this.setAnimationLoop=function(fe){et=fe},this.dispose=function(){}}}const OE=new wn,mg=new Gt;mg.set(-1,0,0,0,1,0,0,0,1);function kE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,sg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,L,R,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),C(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),D(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===di&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===di&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,P=L.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(mg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===di&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function BE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const P=R.program;r.uniformBlockBinding(L,P)}function p(L,R){let P=o[L.id];P===void 0&&(C(L),P=v(L),o[L.id]=P,L.addEventListener("dispose",y));const z=R.program;r.updateUBOMapping(L,z);const I=e.render.frame;l[L.id]!==I&&(x(L),l[L.id]=I)}function v(L){const R=S();L.__bindingPointIndex=R;const P=s.createBuffer(),z=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const R=o[L.id],P=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,O=P.length;I<O;I++){const b=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,W=b.length;N<W;N++){const H=b[N];if(M(H,I,N,z)===!0){const Z=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let me=0;for(let Y=0;Y<te.length;Y++){const oe=te[Y],K=D(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Z+me,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):ArrayBuffer.isView(oe)?H.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,H.__data.length)):(oe.toArray(H.__data,me),me+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,P,z){const I=L.value,O=R+"_"+P;if(z[O]===void 0)return typeof I=="number"||typeof I=="boolean"?z[O]=I:ArrayBuffer.isView(I)?z[O]=I.slice():z[O]=I.clone(),!0;{const b=z[O];if(typeof I=="number"||typeof I=="boolean"){if(b!==I)return z[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(b.equals(I)===!1)return b.copy(I),!0}}return!1}function C(L){const R=L.uniforms;let P=0;const z=16;for(let O=0,b=R.length;O<b;O++){const N=Array.isArray(R[O])?R[O]:[R[O]];for(let W=0,H=N.length;W<H;W++){const Z=N[W],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let me=0,Y=te.length;me<Y;me++){const oe=te[me],K=D(oe),J=P%z,pe=J%K.boundary,le=J+pe;P+=pe,le!==0&&z-le<K.storage&&(P+=z-le),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=K.storage}}}const I=P%z;return I>0&&(P+=z-I),L.__size=P,L.__cache={},this}function D(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(R.boundary=16,R.storage=L.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",L),R}function y(L){const R=L.target;R.removeEventListener("dispose",y);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const zE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function VE(){return Qi===null&&(Qi=new v_(zE,16,16,As,Tr),Qi.name="DFG_LUT",Qi.minFilter=Zn,Qi.magFilter=Zn,Qi.wrapS=Er,Qi.wrapT=Er,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class HE{constructor(e={}){const{canvas:t=$v(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ii}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const D=M,y=new Set([Pf,Nf,Rf]),_=new Set([Ii,ar,ho,po,Af,Cf]),L=new Uint32Array(4),R=new Int32Array(4),P=new ne;let z=null,I=null;const O=[],b=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let H=!1,Z=null;this._outputColorSpace=Ni;let te=0,me=0,Y=null,oe=-1,K=null;const J=new yn,pe=new yn;let le=null;const V=new ln(0);let ue=0,et=t.width,tt=t.height,Pe=1,fe=null,be=null;const ye=new yn(0,0,et,tt),Be=new yn(0,0,et,tt);let it=!1;const ut=new eg;let St=!1,Mt=!1;const Ft=new wn,qt=new ne,yt=new yn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Xt(){return Y===null?Pe:1}let $=r;function kt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),$===null){const j="webgl2";if($=kt(j,A),$===null)throw kt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw nn("WebGLRenderer: "+A.message),A}let wt,Tt,Ke,Bt,U,w,se,Se,Re,He,Ge,xe,Te,Me,Xe,qe,Ce,Ve,mt,Dt,X,Ee,ve;function Ye(){wt=new V1($),wt.init(),X=new IE($,wt),Tt=new D1($,wt,e,X),Ke=new NE($,wt),Tt.reversedDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Bt=new j1($),U=new gE,w=new PE($,wt,Ke,U,Tt,X,Bt),se=new z1(W),Se=new $_($),Ee=new P1($,Se),Re=new H1($,Se,Bt,Ee),He=new X1($,Re,Se,Ee,Bt),Ve=new W1($,Tt,w),Xe=new L1(U),Ge=new mE(W,se,wt,Tt,Ee,Xe),xe=new kE(W,U),Te=new vE,Me=new wE(wt),Ce=new N1(W,se,Ke,He,C,h),qe=new RE(W,He,Tt),ve=new BE($,Bt,Tt,Ke),mt=new I1($,wt,Bt),Dt=new G1($,wt,Bt),Bt.programs=Ge.programs,W.capabilities=Tt,W.extensions=wt,W.properties=U,W.renderLists=Te,W.shadowMap=qe,W.state=Ke,W.info=Bt}Ye(),D!==Ii&&(N=new $1(D,t.width,t.height,o,l));const je=new FE(W,$);this.xr=je,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(et,tt,!1))},this.getSize=function(A){return A.set(et,tt)},this.setSize=function(A,j,ae=!0){if(je.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=A,tt=j,t.width=Math.floor(A*Pe),t.height=Math.floor(j*Pe),ae===!0&&(t.style.width=A+"px",t.style.height=j+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(et*Pe,tt*Pe).floor()},this.setDrawingBufferSize=function(A,j,ae){et=A,tt=j,Pe=ae,t.width=Math.floor(A*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(D===Ii){nn("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){Pt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,j,ae,Q){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,j,ae,Q),Ke.viewport(J.copy(ye).multiplyScalar(Pe).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,j,ae,Q){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,j,ae,Q),Ke.scissor(pe.copy(Be).multiplyScalar(Pe).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){Ke.setScissorTest(it=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ae=!0){let Q=0;if(A){let ie=!1;if(Y!==null){const De=Y.texture.format;ie=y.has(De)}if(ie){const De=Y.texture.type,_e=_.has(De),Ae=Ce.getClearColor(),Qe=Ce.getClearAlpha(),nt=Ae.r,gt=Ae.g,_t=Ae.b;_e?(L[0]=nt,L[1]=gt,L[2]=_t,L[3]=Qe,$.clearBufferuiv($.COLOR,0,L)):(R[0]=nt,R[1]=gt,R[2]=_t,R[3]=Qe,$.clearBufferiv($.COLOR,0,R))}else Q|=$.COLOR_BUFFER_BIT}j&&(Q|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(Q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&$.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Ce.dispose(),Te.dispose(),Me.dispose(),U.dispose(),se.dispose(),He.dispose(),Ee.dispose(),ve.dispose(),Ge.dispose(),je.dispose(),je.removeEventListener("sessionstart",Fn),je.removeEventListener("sessionend",On),Hn.stop()};function Ne(A){A.preventDefault(),Am("WebGLRenderer: Context Lost."),H=!0}function dt(){Am("WebGLRenderer: Context Restored."),H=!1;const A=Bt.autoReset,j=qe.enabled,ae=qe.autoUpdate,Q=qe.needsUpdate,ie=qe.type;Ye(),Bt.autoReset=A,qe.enabled=j,qe.autoUpdate=ae,qe.needsUpdate=Q,qe.type=ie}function bt(A){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function sn(A){const j=A.target;j.removeEventListener("dispose",sn),Qt(j)}function Qt(A){bn(A),U.remove(A)}function bn(A){const j=U.get(A).programs;j!==void 0&&(j.forEach(function(ae){Ge.releaseProgram(ae)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ae,Q,ie,De){j===null&&(j=Ot);const _e=ie.isMesh&&ie.matrixWorld.determinant()<0,Ae=$e(A,j,ae,Q,ie);Ke.setMaterial(Q,_e);let Qe=ae.index,nt=1;if(Q.wireframe===!0){if(Qe=Re.getWireframeAttribute(ae),Qe===void 0)return;nt=2}const gt=ae.drawRange,_t=ae.attributes.position;let st=gt.start*nt,E=(gt.start+gt.count)*nt;De!==null&&(st=Math.max(st,De.start*nt),E=Math.min(E,(De.start+De.count)*nt)),Qe!==null?(st=Math.max(st,0),E=Math.min(E,Qe.count)):_t!=null&&(st=Math.max(st,0),E=Math.min(E,_t.count));const k=E-st;if(k<0||k===1/0)return;Ee.setup(ie,Q,Ae,ae,Qe);let F,re=mt;if(Qe!==null&&(F=Se.get(Qe),re=Dt,re.setIndex(F)),ie.isMesh)Q.wireframe===!0?(Ke.setLineWidth(Q.wireframeLinewidth*Xt()),re.setMode($.LINES)):re.setMode($.TRIANGLES);else if(ie.isLine){let we=Q.linewidth;we===void 0&&(we=1),Ke.setLineWidth(we*Xt()),ie.isLineSegments?re.setMode($.LINES):ie.isLineLoop?re.setMode($.LINE_LOOP):re.setMode($.LINE_STRIP)}else ie.isPoints?re.setMode($.POINTS):ie.isSprite&&re.setMode($.TRIANGLES);if(ie.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))re.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const we=ie._multiDrawStarts,ce=ie._multiDrawCounts,Fe=ie._multiDrawCount,Oe=Qe?Se.get(Qe).bytesPerElement:1,Wt=U.get(Q).currentProgram.getUniforms();for(let Et=0;Et<Fe;Et++)Wt.setValue($,"_gl_DrawID",Et),re.render(we[Et]/Oe,ce[Et])}else if(ie.isInstancedMesh)re.renderInstances(st,k,ie.count);else if(ae.isInstancedBufferGeometry){const we=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ce=Math.min(ae.instanceCount,we);re.renderInstances(st,k,ce)}else re.render(st,k)};function gn(A,j,ae){A.transparent===!0&&A.side===Mr&&A.forceSinglePass===!1?(A.side=di,A.needsUpdate=!0,Li(A,j,ae),A.side=ts,A.needsUpdate=!0,Li(A,j,ae),A.side=Mr):Li(A,j,ae)}this.compile=function(A,j,ae=null){ae===null&&(ae=A),I=Me.get(ae),I.init(j),b.push(I),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),A!==ae&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights();const Q=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const De=ie.material;if(De)if(Array.isArray(De))for(let _e=0;_e<De.length;_e++){const Ae=De[_e];gn(Ae,ae,ie),Q.add(Ae)}else gn(De,ae,ie),Q.add(De)}),I=b.pop(),Q},this.compileAsync=function(A,j,ae=null){const Q=this.compile(A,j,ae);return new Promise(ie=>{function De(){if(Q.forEach(function(_e){U.get(_e).currentProgram.isReady()&&Q.delete(_e)}),Q.size===0){ie(A);return}setTimeout(De,10)}wt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Un=null;function yi(A){Un&&Un(A)}function Fn(){Hn.stop()}function On(){Hn.start()}const Hn=new lg;Hn.setAnimationLoop(yi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){Un=A,je.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},je.addEventListener("sessionstart",Fn),je.addEventListener("sessionend",On),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(A,j);const ae=je.enabled===!0&&je.isPresenting===!0,Q=N!==null&&(Y===null||ae)&&N.begin(W,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(j),j=je.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,j,Y),I=Me.get(A,b.length),I.init(j),I.state.textureUnits=w.getTextureUnits(),b.push(I),Ft.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ut.setFromProjectionMatrix(Ft,nr,j.reversedDepth),Mt=this.localClippingEnabled,St=Xe.init(this.clippingPlanes,Mt),z=Te.get(A,O.length),z.init(),O.push(z),je.enabled===!0&&je.isPresenting===!0){const _e=W.xr.getDepthSensingMesh();_e!==null&&Si(_e,j,-1/0,W.sortObjects)}Si(A,j,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(fe,be),jt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,jt&&Ce.addToRenderList(z,A),this.info.render.frame++,St===!0&&Xe.beginShadows();const ie=I.state.shadowsArray;if(qe.render(ie,A,j),St===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&N.hasRenderPass())===!1){const _e=z.opaque,Ae=z.transmissive;if(I.setupLights(),j.isArrayCamera){const Qe=j.cameras;if(Ae.length>0)for(let nt=0,gt=Qe.length;nt<gt;nt++){const _t=Qe[nt];kn(_e,Ae,A,_t)}jt&&Ce.render(A);for(let nt=0,gt=Qe.length;nt<gt;nt++){const _t=Qe[nt];lr(z,A,_t,_t.viewport)}}else Ae.length>0&&kn(_e,Ae,A,j),jt&&Ce.render(A),lr(z,A,j)}Y!==null&&me===0&&(w.updateMultisampleRenderTarget(Y),w.updateRenderTargetMipmap(Y)),Q&&N.end(W),A.isScene===!0&&A.onAfterRender(W,A,j),Ee.resetDefaultState(),oe=-1,K=null,b.pop(),b.length>0?(I=b[b.length-1],w.setTextureUnits(I.state.textureUnits),St===!0&&Xe.setGlobalState(W.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?z=O[O.length-1]:z=null,Z!==null&&Z.renderEnd()};function Si(A,j,ae,Q){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ut.intersectsSprite(A)){Q&&yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ft);const _e=He.update(A),Ae=A.material;Ae.visible&&z.push(A,_e,Ae,ae,yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ut.intersectsObject(A))){const _e=He.update(A),Ae=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),yt.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),yt.copy(_e.boundingSphere.center)),yt.applyMatrix4(A.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ae)){const Qe=_e.groups;for(let nt=0,gt=Qe.length;nt<gt;nt++){const _t=Qe[nt],st=Ae[_t.materialIndex];st&&st.visible&&z.push(A,_e,st,ae,yt.z,_t)}}else Ae.visible&&z.push(A,_e,Ae,ae,yt.z,null)}}const De=A.children;for(let _e=0,Ae=De.length;_e<Ae;_e++)Si(De[_e],j,ae,Q)}function lr(A,j,ae,Q){const{opaque:ie,transmissive:De,transparent:_e}=A;I.setupLightsView(ae),St===!0&&Xe.setGlobalState(W.clippingPlanes,ae),Q&&Ke.viewport(J.copy(Q)),ie.length>0&&Gn(ie,j,ae),De.length>0&&Gn(De,j,ae),_e.length>0&&Gn(_e,j,ae),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function kn(A,j,ae,Q){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Q.id]===void 0){const st=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Q.id]=new rr(1,1,{generateMipmaps:!0,type:st?Tr:Ii,minFilter:Es,samples:Math.max(4,Tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:en.workingColorSpace})}const De=I.state.transmissionRenderTarget[Q.id],_e=Q.viewport||J;De.setSize(_e.z*W.transmissionResolutionScale,_e.w*W.transmissionResolutionScale);const Ae=W.getRenderTarget(),Qe=W.getActiveCubeFace(),nt=W.getActiveMipmapLevel();W.setRenderTarget(De),W.getClearColor(V),ue=W.getClearAlpha(),ue<1&&W.setClearColor(16777215,.5),W.clear(),jt&&Ce.render(ae);const gt=W.toneMapping;W.toneMapping=ir;const _t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),I.setupLightsView(Q),St===!0&&Xe.setGlobalState(W.clippingPlanes,Q),Gn(A,ae,Q),w.updateMultisampleRenderTarget(De),w.updateRenderTargetMipmap(De),wt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let E=0,k=j.length;E<k;E++){const F=j[E],{object:re,geometry:we,material:ce,group:Fe}=F;if(ce.side===Mr&&re.layers.test(Q.layers)){const Oe=ce.side;ce.side=di,ce.needsUpdate=!0,Di(re,ae,Q,we,ce,Fe),ce.side=Oe,ce.needsUpdate=!0,st=!0}}st===!0&&(w.updateMultisampleRenderTarget(De),w.updateRenderTargetMipmap(De))}W.setRenderTarget(Ae,Qe,nt),W.setClearColor(V,ue),_t!==void 0&&(Q.viewport=_t),W.toneMapping=gt}function Gn(A,j,ae){const Q=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,De=A.length;ie<De;ie++){const _e=A[ie],{object:Ae,geometry:Qe,group:nt}=_e;let gt=_e.material;gt.allowOverride===!0&&Q!==null&&(gt=Q),Ae.layers.test(ae.layers)&&Di(Ae,j,ae,Qe,gt,nt)}}function Di(A,j,ae,Q,ie,De){A.onBeforeRender(W,j,ae,Q,ie,De),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(W,j,ae,Q,A,De),ie.transparent===!0&&ie.side===Mr&&ie.forceSinglePass===!1?(ie.side=di,ie.needsUpdate=!0,W.renderBufferDirect(ae,j,Q,ie,A,De),ie.side=ts,ie.needsUpdate=!0,W.renderBufferDirect(ae,j,Q,ie,A,De),ie.side=Mr):W.renderBufferDirect(ae,j,Q,ie,A,De),A.onAfterRender(W,j,ae,Q,ie,De)}function Li(A,j,ae){j.isScene!==!0&&(j=Ot);const Q=U.get(A),ie=I.state.lights,De=I.state.shadowsArray,_e=ie.state.version,Ae=Ge.getParameters(A,ie.state,De,j,ae,I.state.lightProbeGridArray),Qe=Ge.getProgramCacheKey(Ae);let nt=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,Q.fog=j.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=se.get(A.envMap||Q.environment,gt),Q.envMapRotation=Q.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",sn),nt=new Map,Q.programs=nt);let _t=nt.get(Qe);if(_t!==void 0){if(Q.currentProgram===_t&&Q.lightsStateVersion===_e)return Le(A,Ae),_t}else Ae.uniforms=Ge.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ae,Ae),A.onBeforeCompile(Ae,W),_t=Ge.acquireProgram(Ae,Qe),nt.set(Qe,_t),Q.uniforms=Ae.uniforms;const st=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Xe.uniform),Le(A,Ae),Q.needsLights=at(A),Q.lightsStateVersion=_e,Q.needsLights&&(st.ambientLightColor.value=ie.state.ambient,st.lightProbe.value=ie.state.probe,st.directionalLights.value=ie.state.directional,st.directionalLightShadows.value=ie.state.directionalShadow,st.spotLights.value=ie.state.spot,st.spotLightShadows.value=ie.state.spotShadow,st.rectAreaLights.value=ie.state.rectArea,st.ltc_1.value=ie.state.rectAreaLTC1,st.ltc_2.value=ie.state.rectAreaLTC2,st.pointLights.value=ie.state.point,st.pointLightShadows.value=ie.state.pointShadow,st.hemisphereLights.value=ie.state.hemi,st.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,st.spotLightMatrix.value=ie.state.spotLightMatrix,st.spotLightMap.value=ie.state.spotLightMap,st.pointShadowMatrix.value=ie.state.pointShadowMatrix),Q.lightProbeGrid=I.state.lightProbeGridArray.length>0,Q.currentProgram=_t,Q.uniformsList=null,_t}function G(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=$l.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Le(A,j){const ae=U.get(A);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Ue(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let ae=0,Q=A.length;ae<Q;ae++){const ie=A[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(P))return ie}return null}function $e(A,j,ae,Q,ie){j.isScene!==!0&&(j=Ot),w.resetTextureUnits();const De=j.fog,_e=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?j.environment:null,Ae=Y===null?W.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:en.workingColorSpace,Qe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,nt=se.get(Q.envMap||_e,Qe),gt=Q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,_t=!!ae.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),st=!!ae.morphAttributes.position,E=!!ae.morphAttributes.normal,k=!!ae.morphAttributes.color;let F=ir;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(F=W.toneMapping);const re=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=re!==void 0?re.length:0,ce=U.get(Q),Fe=I.state.lights;if(St===!0&&(Mt===!0||A!==K)){const Nt=A===K&&Q.id===oe;Xe.setState(Q,A,Nt)}let Oe=!1;Q.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Fe.state.version||ce.outputColorSpace!==Ae||ie.isBatchedMesh&&ce.batching===!1||!ie.isBatchedMesh&&ce.batching===!0||ie.isBatchedMesh&&ce.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ce.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ce.instancing===!1||!ie.isInstancedMesh&&ce.instancing===!0||ie.isSkinnedMesh&&ce.skinning===!1||!ie.isSkinnedMesh&&ce.skinning===!0||ie.isInstancedMesh&&ce.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ce.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ce.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ce.instancingMorph===!1&&ie.morphTexture!==null||ce.envMap!==nt||Q.fog===!0&&ce.fog!==De||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Xe.numPlanes||ce.numIntersection!==Xe.numIntersection)||ce.vertexAlphas!==gt||ce.vertexTangents!==_t||ce.morphTargets!==st||ce.morphNormals!==E||ce.morphColors!==k||ce.toneMapping!==F||ce.morphTargetsCount!==we||!!ce.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,ce.__version=Q.version);let Wt=ce.currentProgram;Oe===!0&&(Wt=Li(Q,j,ie),Z&&Q.isNodeMaterial&&Z.onUpdateProgram(Q,Wt,ce));let Et=!1,ht=!1,zt=!1;const At=Wt.getUniforms(),Vt=ce.uniforms;if(Ke.useProgram(Wt.program)&&(Et=!0,ht=!0,zt=!0),Q.id!==oe&&(oe=Q.id,ht=!0),ce.needsLights){const Nt=Ue(I.state.lightProbeGridArray,ie);ce.lightProbeGrid!==Nt&&(ce.lightProbeGrid=Nt,ht=!0)}if(Et||K!==A){Ke.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue($,"projectionMatrix",A.projectionMatrix),At.setValue($,"viewMatrix",A.matrixWorldInverse);const Tn=At.map.cameraPosition;Tn!==void 0&&Tn.setValue($,qt.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&At.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue($,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,ht=!0,zt=!0)}if(ce.needsLights&&(Fe.state.directionalShadowMap.length>0&&At.setValue($,"directionalShadowMap",Fe.state.directionalShadowMap,w),Fe.state.spotShadowMap.length>0&&At.setValue($,"spotShadowMap",Fe.state.spotShadowMap,w),Fe.state.pointShadowMap.length>0&&At.setValue($,"pointShadowMap",Fe.state.pointShadowMap,w)),ie.isSkinnedMesh){At.setOptional($,ie,"bindMatrix"),At.setOptional($,ie,"bindMatrixInverse");const Nt=ie.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue($,"boneTexture",Nt.boneTexture,w))}ie.isBatchedMesh&&(At.setOptional($,ie,"batchingTexture"),At.setValue($,"batchingTexture",ie._matricesTexture,w),At.setOptional($,ie,"batchingIdTexture"),At.setValue($,"batchingIdTexture",ie._indirectTexture,w),At.setOptional($,ie,"batchingColorTexture"),ie._colorsTexture!==null&&At.setValue($,"batchingColorTexture",ie._colorsTexture,w));const fn=ae.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ve.update(ie,ae,Wt),(ht||ce.receiveShadow!==ie.receiveShadow)&&(ce.receiveShadow=ie.receiveShadow,At.setValue($,"receiveShadow",ie.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&j.environment!==null&&(Vt.envMapIntensity.value=j.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=VE()),ht){if(At.setValue($,"toneMappingExposure",W.toneMappingExposure),ce.needsLights&&ot(Vt,zt),De&&Q.fog===!0&&xe.refreshFogUniforms(Vt,De),xe.refreshMaterialUniforms(Vt,Q,Pe,tt,I.state.transmissionRenderTarget[A.id]),ce.needsLights&&ce.lightProbeGrid){const Nt=ce.lightProbeGrid;Vt.probesSH.value=Nt.texture,Vt.probesMin.value.copy(Nt.boundingBox.min),Vt.probesMax.value.copy(Nt.boundingBox.max),Vt.probesResolution.value.copy(Nt.resolution)}$l.upload($,G(ce),Vt,w)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($l.upload($,G(ce),Vt,w),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue($,"center",ie.center),At.setValue($,"modelViewMatrix",ie.modelViewMatrix),At.setValue($,"normalMatrix",ie.normalMatrix),At.setValue($,"modelMatrix",ie.matrixWorld),Q.uniformsGroups!==void 0){const Nt=Q.uniformsGroups;for(let Tn=0,lt=Nt.length;Tn<lt;Tn++){const Ht=Nt[Tn];ve.update(Ht,Wt),ve.bind(Ht,Wt)}}return Wt}function ot(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function at(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,j,ae){const Q=U.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),U.get(A.texture).__webglTexture=j,U.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ae,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ae=U.get(A);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const Je=$.createFramebuffer();this.setRenderTarget=function(A,j=0,ae=0){Y=A,te=j,me=ae;let Q=null,ie=!1,De=!1;if(A){const Ae=U.get(A);if(Ae.__useDefaultFramebuffer!==void 0){Ke.bindFramebuffer($.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(A.viewport),pe.copy(A.scissor),le=A.scissorTest,Ke.viewport(J),Ke.scissor(pe),Ke.setScissorTest(le),oe=-1;return}else if(Ae.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ae.__hasExternalTextures)w.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Ae.__boundDepthTexture!==gt){if(gt!==null&&U.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const nt=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?Q=nt[j][ae]:Q=nt[j],ie=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?Q=U.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?Q=nt[ae]:Q=nt,J.copy(A.viewport),pe.copy(A.scissor),le=A.scissorTest}else J.copy(ye).multiplyScalar(Pe).floor(),pe.copy(Be).multiplyScalar(Pe).floor(),le=it;if(ae!==0&&(Q=Je),Ke.bindFramebuffer($.FRAMEBUFFER,Q)&&Ke.drawBuffers(A,Q),Ke.viewport(J),Ke.scissor(pe),Ke.setScissorTest(le),ie){const Ae=U.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae.__webglTexture,ae)}else if(De){const Ae=j;for(let Qe=0;Qe<A.textures.length;Qe++){const nt=U.get(A.textures[Qe]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,ae,Ae)}}else if(A!==null&&ae!==0){const Ae=U.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ae.__webglTexture,ae)}oe=-1},this.readRenderTargetPixels=function(A,j,ae,Q,ie,De,_e,Ae=0){if(!(A&&A.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Qe=Qe[_e]),Qe){Ke.bindFramebuffer($.FRAMEBUFFER,Qe);try{const nt=A.textures[Ae],gt=nt.format,_t=nt.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ae),!Tt.textureFormatReadable(gt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(_t)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Q&&ae>=0&&ae<=A.height-ie&&$.readPixels(j,ae,Q,ie,X.convert(gt),X.convert(_t),De)}finally{const nt=Y!==null?U.get(Y).__webglFramebuffer:null;Ke.bindFramebuffer($.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,j,ae,Q,ie,De,_e,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Qe=Qe[_e]),Qe)if(j>=0&&j<=A.width-Q&&ae>=0&&ae<=A.height-ie){Ke.bindFramebuffer($.FRAMEBUFFER,Qe);const nt=A.textures[Ae],gt=nt.format,_t=nt.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ae),!Tt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,st),$.bufferData($.PIXEL_PACK_BUFFER,De.byteLength,$.STREAM_READ),$.readPixels(j,ae,Q,ie,X.convert(gt),X.convert(_t),0);const E=Y!==null?U.get(Y).__webglFramebuffer:null;Ke.bindFramebuffer($.FRAMEBUFFER,E);const k=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await qv($,k,4),$.bindBuffer($.PIXEL_PACK_BUFFER,st),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,De),$.deleteBuffer(st),$.deleteSync(k),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ae=0){const Q=Math.pow(2,-ae),ie=Math.floor(A.image.width*Q),De=Math.floor(A.image.height*Q),_e=j!==null?j.x:0,Ae=j!==null?j.y:0;w.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,ae,0,0,_e,Ae,ie,De),Ke.unbindTexture()};const Kt=$.createFramebuffer(),Lt=$.createFramebuffer();this.copyTextureToTexture=function(A,j,ae=null,Q=null,ie=0,De=0){let _e,Ae,Qe,nt,gt,_t,st,E,k;const F=A.isCompressedTexture?A.mipmaps[De]:A.image;if(ae!==null)_e=ae.max.x-ae.min.x,Ae=ae.max.y-ae.min.y,Qe=ae.isBox3?ae.max.z-ae.min.z:1,nt=ae.min.x,gt=ae.min.y,_t=ae.isBox3?ae.min.z:0;else{const Vt=Math.pow(2,-ie);_e=Math.floor(F.width*Vt),Ae=Math.floor(F.height*Vt),A.isDataArrayTexture?Qe=F.depth:A.isData3DTexture?Qe=Math.floor(F.depth*Vt):Qe=1,nt=0,gt=0,_t=0}Q!==null?(st=Q.x,E=Q.y,k=Q.z):(st=0,E=0,k=0);const re=X.convert(j.format),we=X.convert(j.type);let ce;j.isData3DTexture?(w.setTexture3D(j,0),ce=$.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(w.setTexture2DArray(j,0),ce=$.TEXTURE_2D_ARRAY):(w.setTexture2D(j,0),ce=$.TEXTURE_2D),Ke.activeTexture($.TEXTURE0),Ke.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),Ke.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ke.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment);const Fe=Ke.getParameter($.UNPACK_ROW_LENGTH),Oe=Ke.getParameter($.UNPACK_IMAGE_HEIGHT),Wt=Ke.getParameter($.UNPACK_SKIP_PIXELS),Et=Ke.getParameter($.UNPACK_SKIP_ROWS),ht=Ke.getParameter($.UNPACK_SKIP_IMAGES);Ke.pixelStorei($.UNPACK_ROW_LENGTH,F.width),Ke.pixelStorei($.UNPACK_IMAGE_HEIGHT,F.height),Ke.pixelStorei($.UNPACK_SKIP_PIXELS,nt),Ke.pixelStorei($.UNPACK_SKIP_ROWS,gt),Ke.pixelStorei($.UNPACK_SKIP_IMAGES,_t);const zt=A.isDataArrayTexture||A.isData3DTexture,At=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Vt=U.get(A),fn=U.get(j),Nt=U.get(Vt.__renderTarget),Tn=U.get(fn.__renderTarget);Ke.bindFramebuffer($.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ke.bindFramebuffer($.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let lt=0;lt<Qe;lt++)zt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(A).__webglTexture,ie,_t+lt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(j).__webglTexture,De,k+lt)),$.blitFramebuffer(nt,gt,_e,Ae,st,E,_e,Ae,$.DEPTH_BUFFER_BIT,$.NEAREST);Ke.bindFramebuffer($.READ_FRAMEBUFFER,null),Ke.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||U.has(A)){const Vt=U.get(A),fn=U.get(j);Ke.bindFramebuffer($.READ_FRAMEBUFFER,Kt),Ke.bindFramebuffer($.DRAW_FRAMEBUFFER,Lt);for(let Nt=0;Nt<Qe;Nt++)zt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Vt.__webglTexture,ie,_t+Nt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Vt.__webglTexture,ie),At?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,fn.__webglTexture,De,k+Nt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,fn.__webglTexture,De),ie!==0?$.blitFramebuffer(nt,gt,_e,Ae,st,E,_e,Ae,$.COLOR_BUFFER_BIT,$.NEAREST):At?$.copyTexSubImage3D(ce,De,st,E,k+Nt,nt,gt,_e,Ae):$.copyTexSubImage2D(ce,De,st,E,nt,gt,_e,Ae);Ke.bindFramebuffer($.READ_FRAMEBUFFER,null),Ke.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(ce,De,st,E,k,_e,Ae,Qe,re,we,F.data):j.isCompressedArrayTexture?$.compressedTexSubImage3D(ce,De,st,E,k,_e,Ae,Qe,re,F.data):$.texSubImage3D(ce,De,st,E,k,_e,Ae,Qe,re,we,F):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,De,st,E,_e,Ae,re,we,F.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,De,st,E,F.width,F.height,re,F.data):$.texSubImage2D($.TEXTURE_2D,De,st,E,_e,Ae,re,we,F);Ke.pixelStorei($.UNPACK_ROW_LENGTH,Fe),Ke.pixelStorei($.UNPACK_IMAGE_HEIGHT,Oe),Ke.pixelStorei($.UNPACK_SKIP_PIXELS,Wt),Ke.pixelStorei($.UNPACK_SKIP_ROWS,Et),Ke.pixelStorei($.UNPACK_SKIP_IMAGES,ht),De===0&&j.generateMipmaps&&$.generateMipmap(ce),Ke.unbindTexture()},this.initRenderTarget=function(A){U.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){te=0,me=0,Y=null,Ke.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=en._getDrawingBufferColorSpace(e),t.unpackColorSpace=en._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Ie.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Ie.createElement("svg",{ref:h,...jE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:gg("lucide",o),...f},[...u.map(([p,v])=>Ie.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(s,e)=>{const t=Ie.forwardRef(({className:r,...o},l)=>Ie.createElement(WE,{ref:l,iconNode:e,className:gg(`lucide-${GE(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=$t("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=$t("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=$t("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=$t("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=$t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=$t("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=$t("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=$t("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=$t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=$t("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=$t("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=$t("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=$t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=$t("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=$t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=$t("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=$t("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=$t("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=$t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=$t("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=$t("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=$t("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=$t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=$t("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=$t("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=$t("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=$t("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=$t("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=$t("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=$t("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=$t("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=$t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=$t("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=$t("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=$t("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=$t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=$t("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=$t("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=$t("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),b0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},lw=({direction:s,className:e})=>{const r={none:E0,up:yg,down:xg,left:vg,right:_g,"up-left":$E,"up-right":qE,"down-left":XE,"down-right":YE}[s]||E0;return g.jsx(r,{className:e})},Kn=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Zr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ri=s=>JSON.parse(JSON.stringify(s)),T0=(s,e)=>(s-e+540)%360-180,wg=s=>s==null||Number.isNaN(s)?null:(s%360+360)%360,cw=(s,e)=>s==null||e==null?null:wg(s-e),uw=(s,e)=>{if(!s||!e)return null;const t=s.physX??s.x,r=s.physY??s.y,o=e.physX??e.x,l=e.physY??e.y;return[t,r,o,l].some(u=>typeof u!="number")?null:wg(Math.atan2(o-t,r-l)*180/Math.PI)},A0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new kf(s),l=new zf(o,Math.max(8,s.length*12),e,12,!1),u=new es({color:t,transparent:r<1,opacity:r});return new ni(l,u)},C0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},R0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),dw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),fw=s=>{if(!s||s.length<2)return null;const e=new kf(s),t=Math.max(dw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new bs;for(let u=0;u<r;u++){const f=new bs,h=new ni(new nc(.14,.34,24),new es({color:16777215,transparent:!0,opacity:.22})),p=new ni(new nc(.09,.28,24),new es({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},hw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ne(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},ha=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],pw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:ha(s),buildings:co()}),Vl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...ha(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function mw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var nt,gt,_t,st;const[r,o]=Ie.useState(e),[l,u]=Ie.useState(!1),[f,h]=Ie.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Ie.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Ie.useState({isOpen:!1,message:""}),[M,C]=Ie.useState(!1),[D,y]=Ie.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Ie.useRef(!1),[L,R]=Ie.useState(()=>{if(t)return[Vl({})];try{const F=localStorage.getItem("arManager_projects");if(F){const re=JSON.parse(F);if(Array.isArray(re)&&re.length>0)return re}}catch(F){console.error("Project load error:",F)}let E=ha("預設導引專案"),k=co();try{const F=localStorage.getItem("arManager_config");F&&(E={...E,...JSON.parse(F)});const re=localStorage.getItem("arManager_buildings");re&&(k=JSON.parse(re))}catch(F){console.error("Legacy AR data migration error:",F)}return[{id:`project_${Date.now()}`,name:E.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:E,buildings:k}]}),[P,z]=Ie.useState((nt=L[0])==null?void 0:nt.id),I=L.find(E=>E.id===P)||L[0],[O,b]=Ie.useState(()=>Ri((I==null?void 0:I.systemConfig)||ha())),[N,W]=Ie.useState(()=>Ri((I==null?void 0:I.buildings)||co())),[H,Z]=Ie.useState((gt=N[0])==null?void 0:gt.id),[te,me]=Ie.useState((st=(_t=N[0])==null?void 0:_t.floors[0])==null?void 0:st.id),[Y,oe]=Ie.useState(""),[K,J]=Ie.useState(null),[pe,le]=Ie.useState(null),[V,ue]=Ie.useState(null),[et,tt]=Ie.useState(!1),[Pe,fe]=Ie.useState(!1),[be,ye]=Ie.useState(!1),[Be,it]=Ie.useState(null),[ut,St]=Ie.useState(null),[Mt,Ft]=Ie.useState(!1),[qt,yt]=Ie.useState({x:0,y:0}),[Ot,jt]=Ie.useState({x:0,y:0}),[Xt,$]=Ie.useState(!1),[kt,wt]=Ie.useState(!1),[Tt,Ke]=Ie.useState([]),[Bt,U]=Ie.useState(!1),[w,se]=Ie.useState([]),[Se,Re]=Ie.useState([]),He=Ie.useRef(null),Ge=Ie.useRef(null),xe=Ie.useRef(null),Te=Ie.useRef(null),[Me,Xe]=Ie.useState({x:0,y:0,scale:1});Ie.useEffect(()=>{const E=k=>{var re;const F=(re=k==null?void 0:k.detail)==null?void 0:re.tab;["map","list","settings","export"].includes(F)&&ot(F)};return window.addEventListener("ar-manager:set-tab",E),()=>window.removeEventListener("ar-manager:set-tab",E)},[]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(L))}catch(E){E.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[L,t]),Ie.useEffect(()=>{if(!t)return;let E=!1;return(async()=>{const F=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(F.ok)return F.json();const re=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!re.ok)throw new Error(`Unable to load AR data: ${re.status}`);return re.json()})().then(F=>{var we,ce,Fe;if(E)return;const re=Vl(F);R([re]),z(re.id),b(Ri(re.systemConfig)),W(Ri(re.buildings)),Z((we=re.buildings[0])==null?void 0:we.id),me((Fe=(ce=re.buildings[0])==null?void 0:ce.floors[0])==null?void 0:Fe.id)}).catch(F=>{console.warn("Published AR data unavailable",F),E||(R([Vl({})]),b(ha("AR導覽")),W([]))}),()=>{E=!0}},[t]),Ie.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let E=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(k=>{if(!k.ok)throw new Error(`Unable to load AR data: ${k.status}`);return k.json()}).then(k=>{var re,we,ce;if(E||!Array.isArray(k==null?void 0:k.buildings)||k.buildings.length===0)return;const F=Vl(k);R([F]),z(F.id),b(Ri(F.systemConfig)),W(Ri(F.buildings)),Z((re=F.buildings[0])==null?void 0:re.id),me((ce=(we=F.buildings[0])==null?void 0:we.floors[0])==null?void 0:ce.id)}).catch(k=>console.warn("Published AR admin seed unavailable",k)),()=>{E=!0}},[t]),Ie.useEffect(()=>{var k,F,re;if(t||!I)return;_.current=!0;const E=Ri(I.buildings||co());b(Ri(I.systemConfig||ha(I.name))),W(E),Z((k=E[0])==null?void 0:k.id),me((re=(F=E[0])==null?void 0:F.floors[0])==null?void 0:re.id),J(null),le(null),oe(""),Xe({x:0,y:0,scale:1})},[P,t]),Ie.useEffect(()=>{if(!t&&P){if(_.current){_.current=!1;return}R(E=>E.map(k=>k.id===P?{...k,name:O.projectName||k.name,systemConfig:Ri(O),buildings:Ri(N),updatedAt:new Date().toISOString()}:k))}},[P,N,O,t]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(N))}catch(E){E.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[N,t]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(O))}catch(E){console.error("Config save error:",E)}},[O,t]),Ie.useEffect(()=>{var k;const E=N.find(F=>F.id===H);E?E.floors.find(F=>F.id===te)||E.floors.length>0&&me(E.floors[0].id):N.length>0&&(Z(N[0].id),me((k=N[0].floors[0])==null?void 0:k.id))},[N,H,te]),Ie.useEffect(()=>{Y===te&&oe("")},[te,Y]),Ie.useEffect(()=>{tt(!1)},[K,pe]),Ie.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||C(!0)},[]);const qe=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(k=>k.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),C(!1)},Ce=N.find(E=>E.id===H)||N[0],Ve=Ce==null?void 0:Ce.floors.find(E=>E.id===te),mt=(Ve==null?void 0:Ve.markers)||[],Dt=(Ve==null?void 0:Ve.waypoints)||[],X=(Ve==null?void 0:Ve.edges)||[],Ee=Zr(Ve),ve=(E,k,F=!0)=>{W(re=>{let we=null,ce=null,Fe=null;if(re.forEach(zt=>zt.floors.forEach(At=>{const Vt=F?At.markers:At.waypoints,fn=Vt==null?void 0:Vt.find(Nt=>Nt.id===E);fn&&(we=fn,ce=zt.id,Fe=At)})),!we)return re;const Oe=k.shaftId!==void 0?k.shaftId:we.shaftId,Et=(k.isVerticalShaft!==void 0?k.isVerticalShaft:we.isVerticalShaft)&&Oe,ht=Zr(Fe);return re.map(zt=>zt.id!==ce&&!Et?zt:{...zt,floors:zt.floors.map(At=>{let Vt=F?[...At.markers||[]]:[...At.waypoints||[]];const fn=Nt=>{const Tn={...Nt,...k};if((k.x!==void 0||k.y!==void 0)&&At.id!==Fe.id){const lt=Zr(At);if(k.x!==void 0){const Ht=ht.blX+k.x*(ht.trX-ht.blX);Tn.x=lt.trX!==lt.blX?(Ht-lt.blX)/(lt.trX-lt.blX):.5}if(k.y!==void 0){const Ht=ht.trY-k.y*(ht.trY-ht.blY);Tn.y=lt.trY!==lt.blY?(lt.trY-Ht)/(lt.trY-lt.blY):.5}}return Tn};return Et?Vt=Vt.map(Nt=>Nt.shaftId===Oe||Nt.id===E?fn(Nt):Nt):Vt=Vt.map(Nt=>Nt.id===E?fn(Nt):Nt),F?{...At,markers:Vt}:{...At,waypoints:Vt}})})})},Ye=(E,k,F)=>ve(E,{[k]:F},!0),je=(E,k,F)=>ve(E,{[k]:F},!1),Ne=(E,k,F=!0)=>{if(k){const re=F?"shaft_m_":"shaft_wp_",ce={isVerticalShaft:!0,shaftId:E.shaftId||`${re}${Date.now()}`,linkedFloorIds:[te]};F||(ce.sourceFloorId=te),ve(E.id,ce,F)}else{const re=E.shaftId;W(we=>we.map(ce=>ce.id!==H?ce:{...ce,floors:ce.floors.map(Fe=>{const Oe=Wt=>(Wt||[]).filter(Et=>!(Fe.id!==te&&Et.shaftId===re)).map(Et=>Et.id===E.id?{...Et,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:Et);return F?{...Fe,markers:Oe(Fe.markers)}:{...Fe,waypoints:Oe(Fe.waypoints)}})}))}},dt=(E,k,F,re=!0)=>{const we=E.shaftId,ce=E.linkedFloorIds||[te],Fe=F?[...ce,k]:ce.filter(Oe=>Oe!==k);W(Oe=>Oe.map(Wt=>Wt.id!==H?Wt:{...Wt,floors:Wt.floors.map(Et=>{let ht=re?[...Et.markers||[]]:[...Et.waypoints||[]];if(F&&Et.id===k){const zt=Zr(Et),At=Zr(Ve),Vt=At.blX+E.x*(At.trX-At.blX),fn=At.trY-E.y*(At.trY-At.blY),Nt=zt.trX!==zt.blX?(Vt-zt.blX)/(zt.trX-zt.blX):.5,Tn=zt.trY!==zt.blY?(zt.trY-fn)/(zt.trY-zt.blY):.5,lt=re?"marker_":"wp_";ht.push({...E,id:`${lt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${Et.id}`,x:Nt,y:Tn,linkedFloorIds:Fe})}else!F&&Et.id===k?ht=ht.filter(zt=>zt.shaftId!==we):ht=ht.map(zt=>zt.shaftId===we?{...zt,linkedFloorIds:Fe}:zt);return re?{...Et,markers:ht}:{...Et,waypoints:ht}})}))},bt=E=>{let k=null,F=new Set([E]);N.forEach(re=>re.floors.forEach(we=>{var ce;we.markers.forEach(Fe=>{Fe.id===E&&Fe.isVerticalShaft&&(k=Fe.shaftId)}),(ce=we.waypoints)==null||ce.forEach(Fe=>{Fe.id===E&&Fe.isVerticalShaft&&(k=Fe.shaftId)})})),k&&N.forEach(re=>re.floors.forEach(we=>{var ce;we.markers.forEach(Fe=>{Fe.shaftId===k&&F.add(Fe.id)}),(ce=we.waypoints)==null||ce.forEach(Fe=>{Fe.shaftId===k&&F.add(Fe.id)})})),W(re=>re.map(we=>({...we,floors:we.floors.map(ce=>({...ce,markers:(ce.markers||[]).filter(Fe=>!F.has(Fe.id)),waypoints:(ce.waypoints||[]).filter(Fe=>!F.has(Fe.id)),edges:(ce.edges||[]).filter(Fe=>!F.has(Fe.start)&&!F.has(Fe.end))}))}))),F.has(K)&&J(null),F.has(pe)&&le(null),F.has(Be)&&(it(null),St(null)),tt(!1)},sn=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:E=>{if(!E)return;const k=`b_${Date.now()}`,F=`f_${Date.now()}`;W(re=>[...re,{id:k,name:E,floors:[{id:F,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),Z(k),me(F)}})},Qt=()=>{Ce&&h({isOpen:!0,title:`新增 ${Ce.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:E=>{if(!E)return;const k=`f_${Date.now()}`,F=Ve?{...Zr(Ve)}:{blX:0,blY:0,trX:100,trY:100};W(re=>re.map(we=>we.id===H?{...we,floors:[...we.floors,{id:k,name:E,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:F}]}:we)),me(k)}})},bn=E=>{const k=E.target.files[0],F=E.target;if(k&&H&&te){const re=H,we=te,ce=new FileReader;ce.onload=Fe=>{b0(Fe.target.result,1600,Oe=>{W(Wt=>Wt.map(Et=>Et.id===re?{...Et,floors:Et.floors.map(ht=>ht.id===we?{...ht,imageUrl:Oe}:ht)}:Et)),$(!1)})},ce.readAsDataURL(k)}F.value=""},gn=(E,k)=>{const F=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,re={id:F,x:E,y:k,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:te};W(we=>we.map(ce=>ce.id===H?{...ce,floors:ce.floors.map(Fe=>{if(Fe.id!==te)return Fe;const Oe=Be?[...Fe.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:F}]:Fe.edges||[];return{...Fe,waypoints:[...Fe.waypoints||[],re],edges:Oe}})}:ce)),it(F)},Un=E=>{if(Be===E){it(null),St(null);return}Be&&Be!==E&&(X.some(F=>F.start===Be&&F.end===E||F.end===Be&&F.start===E)||W(F=>F.map(re=>re.id===H?{...re,floors:re.floors.map(we=>we.id===te?{...we,edges:[...we.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:E}]}:we)}:re))),it(E)},yi=(E,k)=>{for(let re of mt)if(Math.hypot(re.x-E,re.y-k)<.03)return re.id;for(let re of Dt)if(Math.hypot(re.x-E,re.y-k)<.03)return re.id;return null};Ie.useEffect(()=>{const E=k=>{k.key==="Escape"&&Pe&&(it(null),St(null))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[Pe]);const Fn=(E,k)=>{const F={},re=[],we={};N.forEach(lt=>{lt.floors.forEach(Ht=>{var Ui,Rr;const xn=Ht.bounds||{blX:0,blY:0,trX:100,trY:100},ii=(an,Yi)=>({physX:xn.blX+an*(xn.trX-xn.blX),physY:xn.trY-Yi*(xn.trY-xn.blY)});Ht.markers.forEach(an=>{F[an.id]={...an,...ii(an.x,an.y),fId:Ht.id,fName:Ht.name},an.isVerticalShaft&&an.shaftId&&(we[an.shaftId]||(we[an.shaftId]=[]),we[an.shaftId].push(an.id))}),(Ui=Ht.waypoints)==null||Ui.forEach(an=>{F[an.id]={...an,...ii(an.x,an.y),fId:Ht.id,fName:Ht.name},an.isVerticalShaft&&an.shaftId&&(we[an.shaftId]||(we[an.shaftId]=[]),we[an.shaftId].push(an.id))}),(Rr=Ht.edges)==null||Rr.forEach(an=>re.push(an))})});const ce={};Object.keys(F).forEach(lt=>{ce[lt]={}}),re.forEach(lt=>{if(F[lt.start]&&F[lt.end]){const Ht=Math.hypot(F[lt.start].physX-F[lt.end].physX,F[lt.start].physY-F[lt.end].physY);ce[lt.start][lt.end]=Ht,ce[lt.end][lt.start]=Ht}}),Object.values(we).forEach(lt=>{for(let Ht=0;Ht<lt.length;Ht++)for(let xn=Ht+1;xn<lt.length;xn++)ce[lt[Ht]][lt[xn]]=5,ce[lt[xn]][lt[Ht]]=5});const Fe=lt=>Object.keys(ce[lt]).length>0;let Oe=null,Wt=1/0,Et=null,ht=1/0;if(Object.values(F).forEach(lt=>{if(Fe(lt.id)){if(lt.fId===E.fId){const Ht=Math.hypot(lt.x-E.x,lt.y-E.y);Ht<Wt&&(Wt=Ht,Oe=lt.id)}if(lt.fId===k.fId){const Ht=Math.hypot(lt.x-k.x,lt.y-k.y);Ht<ht&&(ht=Ht,Et=lt.id)}}}),!Oe||!Et){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),se([]),Re([]);return}const zt={},At={},Vt=new Set(Object.keys(F));for(Object.keys(F).forEach(lt=>{zt[lt]=1/0,At[lt]=null}),zt[Oe]=0;Vt.size>0;){let lt=null;if(Vt.forEach(Ht=>{(lt===null||zt[Ht]<zt[lt])&&(lt=Ht)}),zt[lt]===1/0||lt===Et)break;Vt.delete(lt),Object.entries(ce[lt]).forEach(([Ht,xn])=>{if(Vt.has(Ht)){const ii=zt[lt]+xn;ii<zt[Ht]&&(zt[Ht]=ii,At[Ht]=lt)}})}const fn=[];let Nt=Et;for(;Nt;)fn.unshift(Nt),Nt=At[Nt];if(fn.length===0||fn[0]!==Oe){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),se([]),Re([]);return}const Tn=[{x:E.x,y:E.y,fId:E.fId,fName:E.fName,isVirtual:!0},...fn.map(lt=>F[lt]),{x:k.x,y:k.y,fId:k.fId,fName:k.fName,isVirtual:!0}];Re(Tn)};Ie.useEffect(()=>{const E=He.current;if(!E||r!=="map")return;const k=F=>{F.preventDefault();const re=E.getBoundingClientRect(),we=F.clientX-re.left,ce=F.clientY-re.top,Fe=F.deltaY<0?1.1:.9;Xe(Oe=>{const Wt=Math.max(.1,Math.min(10,Oe.scale*Fe)),Et=Wt/Oe.scale;return{x:we-(we-Oe.x)*Et,y:ce-(ce-Oe.y)*Et,scale:Wt}})};return E.addEventListener("wheel",k,{passive:!1}),()=>E.removeEventListener("wheel",k)},[r]);const On=E=>{E.button!==void 0&&E.button!==0||E.target.closest(".marker-pin")||E.target.closest(".waypoint-pin")||(Ft(!0),yt({x:E.clientX-Me.x,y:E.clientY-Me.y}),jt({x:E.clientX,y:E.clientY}),E.target.setPointerCapture(E.pointerId))},Hn=E=>{if(Mt)Xe(k=>({...k,x:E.clientX-qt.x,y:E.clientY-qt.y}));else if(Pe&&Be&&Ge.current){const k=Ge.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(E.clientX-k.left)/k.width)),re=Math.max(0,Math.min(1,(E.clientY-k.top)/k.height));St({x:F,y:re})}else if(V&&Ge.current){const k=Ge.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(E.clientX-k.left)/k.width)),re=Math.max(0,Math.min(1,(E.clientY-k.top)/k.height));V.startsWith("marker_")?(Ye(V,"x",F),Ye(V,"y",re)):V.startsWith("wp_")&&(je(V,"x",F),je(V,"y",re))}},Si=E=>{if(Mt&&(Ft(!1),E.target.releasePointerCapture(E.pointerId),Math.hypot(E.clientX-Ot.x,E.clientY-Ot.y)<5)){if(!(Ve!=null&&Ve.imageUrl)||!Ge.current)return;const F=Ge.current.getBoundingClientRect();let re=Math.max(0,Math.min(1,(E.clientX-F.left)/F.width)),we=Math.max(0,Math.min(1,(E.clientY-F.top)/F.height));if(Bt){const ce={x:re,y:we,fId:te,fName:Ve==null?void 0:Ve.name},Fe=w.length>=2?[ce]:[...w,ce];se(Fe),Fe.length===1&&Re([]),Fe.length===2&&Fn(Fe[0],Fe[1])}else if(Pe){const ce=yi(re,we);ce?Un(ce):gn(re,we)}else if(Xt){const ce=N.reduce((Oe,Wt)=>Oe+Wt.floors.reduce((Et,ht)=>Et+ht.markers.length,0),0),Fe={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${ce+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:re,y:we,imageUrl:null,enabled:!0,recognitionStatus:"untested"};W(Oe=>Oe.map(Wt=>Wt.id===H?{...Wt,floors:Wt.floors.map(Et=>Et.id===te?{...Et,markers:[...Et.markers,Fe]}:Et)}:Wt)),J(Fe.id),le(null),$(!1)}else kt?Ke(ce=>ce.length>=2?[{x:re,y:we}]:[...ce,{x:re,y:we}]):(J(null),le(null))}},lr=E=>{const k=E.target.files[0],F=E.target;if(k&&K){const re=K,we=new FileReader;we.onload=ce=>{b0(ce.target.result,800,Fe=>{Ye(re,"imageUrl",Fe),Ye(re,"recognitionStatus","untested")})},we.readAsDataURL(k)}F.value=""},kn=(E,k,F)=>{Z(E),me(k),J(F),le(null),o("map")},Gn=async()=>{const E={version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name)||"AR導覽",description:(I==null?void 0:I.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ri(O),buildings:Ri(N)};R(k=>k.map(F=>F.id===P?{...F,name:E.project.name,systemConfig:E.systemConfig,buildings:E.buildings,updatedAt:E.project.updatedAt}:F));try{const k=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}),F=await k.json().catch(()=>({}));if(!k.ok)throw new Error(F.error||`Save failed: ${k.status}`);x({isOpen:!0,message:`「${E.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(k){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${k.message}`})}},Di=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${L.length+1}`,onSubmit:E=>{if(!E)return;const k=pw(E);R(F=>[...F,k]),z(k.id),o("map")}})},Li=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(I==null?void 0:I.name)||O.projectName||"",onSubmit:E=>{E&&(b(k=>({...k,projectName:E})),R(k=>k.map(F=>F.id===P?{...F,name:E,systemConfig:{...F.systemConfig,projectName:E},updatedAt:new Date().toISOString()}:F)))}})},G=()=>{if(L.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(I==null?void 0:I.name)||O.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(E=>{var F;const k=E.filter(re=>re.id!==P);return z((F=k[0])==null?void 0:F.id),k})}})},Le=()=>{W(co()),J(null),le(null),Xe({x:0,y:0,scale:1}),$(!1),fe(!1),ye(!1),it(null),St(null),U(!1),se([]),Re([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Ue=()=>{const E=(O.projectName||(I==null?void 0:I.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),k="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name),description:(I==null?void 0:I.description)||"",updatedAt:I==null?void 0:I.updatedAt},systemConfig:O,buildings:N},null,2)),F=document.createElement("a");F.setAttribute("href",k),F.setAttribute("download",`${E}_ar_config_v7.json`),document.body.appendChild(F),F.click(),F.remove()},$e=()=>{if(!(Ve!=null&&Ve.imageUrl)||!He.current||!Ge.current){Xe({x:0,y:0,scale:1});return}const E=He.current,k=Ge.current.querySelector("img");if(!k||k.naturalWidth===0)return;const{width:F,height:re}=E.getBoundingClientRect(),we=Math.min(F/k.naturalWidth,re/k.naturalHeight,1)*.9;Xe({x:(F-k.naturalWidth*we)/2,y:(re-k.naturalHeight*we)/2,scale:we})},ot=E=>{o(E),u(!1),$(!1),wt(!1),fe(!1),ye(!1),it(null),St(null),U(!1),se([]),Re([])};let at=null,Je=null;N.forEach(E=>E.floors.forEach(k=>{var F;k.markers.forEach(re=>{re.id===K&&(at=re,E.name,k.name)}),(F=k.waypoints)==null||F.forEach(re=>{re.id===pe&&(Je=re,E.name,k.name)})}));let Kt=0,Lt=0;const A=document.getElementById("current-map-image"),j=Ee.trX-Ee.blX,ae=Ee.trY-Ee.blY;if(A&&j>0){const E=A.offsetWidth*Me.scale;if(E>0){const k=j/E,F=100*k;Kt=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(we=>we<=F)||.5,Lt=Kt/k}}const Q=N.reduce((E,k)=>E+k.floors.reduce((F,re)=>F+(re.markers||[]).length,0),0),ie=N.reduce((E,k)=>E+k.floors.length,0),De=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:P,onChange:E=>z(E.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:L.map(E=>g.jsx("option",{value:E.id,className:"bg-slate-950",children:E.name},E.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",L.length," 個專案 · ",N.length," 棟建築 · ",ie," 個樓層 · ",Q," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Di,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(zl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:Li,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:Gn,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ql,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:G,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Cd,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),_e=()=>{const E=new Set,k=N.flatMap(F=>F.floors.flatMap(re=>(re.markers||[]).reduce((we,ce)=>{if(ce.isVerticalShaft&&ce.shaftId){if(E.has(ce.shaftId))return we;E.add(ce.shaftId)}return we.push({...ce,bId:F.id,fId:re.id,buildingName:F.name,floorName:re.name}),we},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[De(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",k.length," 組節點"]})]}),k.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>ot("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:k.map(F=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(S0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:F.code}),g.jsx(Mf,{status:F.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:F.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[F.buildingName," · ",F.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${F.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:F.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>kn(F.bId,F.fId,F.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]})]})]},F.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:k.map(F=>{var we;const re=F.isVerticalShaft?(we=N.find(ce=>ce.id===F.bId))==null?void 0:we.floors.filter(ce=>{var Fe;return(Fe=F.linkedFloorIds)==null?void 0:Fe.includes(ce.id)}).sort((ce,Fe)=>Kn(Fe.name)-Kn(ce.name)).map(ce=>ce.name).join(", "):F.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${F.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:F.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${F.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:re})]}),g.jsx("td",{className:"px-4 py-4",children:F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(S0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:F.code}),F.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(vs,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):F.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(lw,{direction:F.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:F.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:F.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:F.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Mf,{status:F.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>kn(F.bId,F.fId,F.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Ad,{className:"w-4 h-4"})})})]},F.id)})})]})})})]})]})})},Ae=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[De(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(w0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(JE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:O.projectName,onChange:E=>b({...O,projectName:E.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:O.lerpFactor,onChange:E=>b({...O,lerpFactor:parseInt(E.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Le()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),Qe=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[De(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(Td,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((E,k)=>E+k.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((E,k)=>E+k.floors.reduce((F,re)=>F+(re.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:Ue,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(Td,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(N0,{buildings:N,systemConfig:O,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(_s,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Hl,{icon:g.jsx(M0,{}),label:"平面圖管理",active:r==="map",onClick:()=>ot("map")}),g.jsx(Hl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>ot("list")}),g.jsx(Hl,{icon:g.jsx(w0,{}),label:"系統設定",active:r==="settings",onClick:()=>ot("settings")}),g.jsx(Hl,{icon:g.jsx(Td,{}),label:"匯出JSON",active:r==="export",onClick:()=>ot("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(N0,{buildings:N,systemConfig:O,onMenuClick:()=>u(!0)}),r==="list"&&_e(),r==="settings"&&Ae(),r==="export"&&Qe(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:P,onChange:E=>z(E.target.value),children:L.map(E=>g.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),g.jsx("button",{onClick:Di,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(zl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:Gn,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ql,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(KE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:H,onChange:E=>Z(E.target.value),children:N.map(E=>g.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),g.jsx("button",{onClick:sn,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),Ce&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(QE,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:te,onChange:E=>me(E.target.value),children:Ce.floors.slice().sort((E,k)=>Kn(k.name)-Kn(E.name)).map(E=>g.jsx("option",{value:E.id,className:"bg-slate-900",children:E.name},E.id))}),g.jsx("button",{onClick:Qt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx(ZE,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:Y,onChange:E=>oe(E.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),N.flatMap(E=>E.floors.filter(k=>k.id!==te).sort((k,F)=>Kn(F.name)-Kn(k.name)).map(k=>g.jsxs("option",{value:k.id,className:"bg-slate-900",children:[E.name,"-",k.name]},k.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{Ve!=null&&Ve.imageUrl&&(U(!Bt),fe(!1),ye(!1),$(!1),wt(!1),it(null),J(null),le(null),St(null),se([]),Re([]))},disabled:!(Ve!=null&&Ve.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Bt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Bt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(_0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(Ve==null?void 0:Ve.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{ye(!be),fe(!1),U(!1),$(!1),wt(!1),it(null),J(null),le(null),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${be?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:be?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(vs,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{fe(!Pe),ye(!1),U(!1),$(!1),wt(!1),it(null),J(null),le(null),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Pe?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Pe?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(iw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{wt(!kt),ye(!1),U(!1),$(!1),fe(!1),Ke([]),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${kt?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:kt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(rw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{$(!Xt),ye(!1),U(!1),wt(!1),fe(!1),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Xt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Xt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:Ee.blX,blY:Ee.blY,trX:Ee.trX,trY:Ee.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(fa,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:xe,onChange:bn,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>xe.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(ow,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:He,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Pe?"cursor-crosshair":be?"cursor-pointer":Xt||kt||Bt?"cursor-crosshair":Mt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:On,onPointerMove:Hn,onPointerUp:Si,onPointerCancel:Si,children:[Ve&&g.jsxs("div",{className:"absolute left-4 top-4 z-[80] rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(Ce==null?void 0:Ce.name)||"目前場域"," / ",Ve.name||"未命名樓層"]}),g.jsxs("div",{ref:Ge,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Me.x}px, ${Me.y}px) scale(${Me.scale})`},children:[Y&&(()=>{let E=null;if(N.forEach(Fe=>Fe.floors.forEach(Oe=>{Oe.id===Y&&(E=Oe)})),!E)return null;const k=Zr(E),F=j!==0?(k.trX-k.blX)/j:1,re=ae!==0?(k.trY-k.blY)/ae:1,we=j!==0?(k.blX-Ee.blX)/j:0,ce=ae!==0?(Ee.trY-k.trY)/ae:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${we*100}%`,top:`${ce*100}%`,width:`${F*100}%`,height:`${re*100}%`,opacity:.4},children:[E.imageUrl&&g.jsx("img",{src:E.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),E.markers.map(Fe=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Fe.x*100}%`,top:`${Fe.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Me.scale)})`},children:Fe.code})})},Fe.id))]})})(),(Ve==null?void 0:Ve.imageUrl)&&g.jsx("img",{id:"current-map-image",src:Ve.imageUrl,alt:"Floor Plan",onLoad:$e,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${Y?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),X.map(E=>{const k=mt.find(re=>re.id===E.start)||Dt.find(re=>re.id===E.start),F=mt.find(re=>re.id===E.end)||Dt.find(re=>re.id===E.end);return k&&F?g.jsx("line",{x1:`${k.x*100}%`,y1:`${k.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Me.scale),strokeOpacity:"0.7"},E.id):null}),Pe&&Be&&ut&&(()=>{const E=mt.find(k=>k.id===Be)||Dt.find(k=>k.id===Be);return E?g.jsx("line",{x1:`${E.x*100}%`,y1:`${E.y*100}%`,x2:`${ut.x*100}%`,y2:`${ut.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Me.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Bt&&Se.length>0&&Se.map((E,k)=>{if(k===Se.length-1)return null;const F=Se[k+1],re=[];return E.fId===te&&F.fId===te?re.push(g.jsx("line",{x1:`${E.x*100}%`,y1:`${E.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Me.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${k}`)):E.fId===te&&F.fId!==te?re.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:12/Math.max(.5,Me.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Me.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Me.scale),to:35/Math.max(.5,Me.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:6/Math.max(.5,Me.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${E.x*100}%`,y:`${E.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Me.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",F.fName]})]},`leave_${k}`)):E.fId!==te&&F.fId===te&&re.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:12/Math.max(.5,Me.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Me.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Me.scale),to:35/Math.max(.5,Me.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:6/Math.max(.5,Me.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${F.x*100}%`,y:`${F.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Me.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",E.fName]})]},`enter_${k}`)),g.jsx(wf.Fragment,{children:re},`testfrag_${k}`)})]}),Dt.map(E=>{const k=pe===E.id,F=Be===E.id,re=E.isVerticalShaft&&E.sourceFloorId&&E.sourceFloorId!==te;let we="bg-orange-500",ce="border-white",Fe="";return E.isVerticalShaft&&(we="bg-green-500"),F?(we="bg-white",ce=re?"border-green-500":"border-orange-500",Fe=re?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):k&&(ce="border-cyan-400 border-2",Fe="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${k?"z-40":""}`,style:{left:`${E.x*100}%`,top:`${E.y*100}%`},onPointerDown:Oe=>{Oe.stopPropagation(),Oe.button===0&&(Pe?Un(E.id):be?(E.isVerticalShaft||Ne(E,!0,!1),J(null),le(E.id)):!Bt&&!kt&&!Mt&&!Xt&&(J(null),le(E.id),ue(E.id),Oe.target.setPointerCapture(Oe.pointerId)))},onPointerUp:Oe=>{Oe.stopPropagation(),Oe.target.releasePointerCapture(Oe.pointerId)},onContextMenu:Oe=>{Oe.preventDefault(),Pe?bt(E.id):be?E.isVerticalShaft&&Ne(E,!1,!1):!Bt&&!kt&&!Xt&&(J(null),le(E.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${we} ${ce} ${Fe}`,style:{width:`${(F?14:10)/Math.max(.5,Me.scale)}px`,height:`${(F?14:10)/Math.max(.5,Me.scale)}px`,borderWidth:k?"2px":"1px"},children:E.isVerticalShaft&&g.jsx(vs,{className:F?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Me.scale)}px`,height:`${6/Math.max(.5,Me.scale)}px`}})})},E.id)}),Bt&&w.map((E,k)=>E.fId!==te?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${E.x*100}%`,top:`${E.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Me.scale)}px`,height:`${16/Math.max(.5,Me.scale)}px`},children:k===0?"起":"終"})},`testpt_${k}`)),kt&&Tt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[Tt.length===2&&g.jsx("line",{x1:`${Tt[0].x*100}%`,y1:`${Tt[0].y*100}%`,x2:`${Tt[1].x*100}%`,y2:`${Tt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Me.scale),strokeDasharray:"5,5"}),Tt.map((E,k)=>g.jsx("circle",{cx:`${E.x*100}%`,cy:`${E.y*100}%`,r:6/Math.max(.1,Me.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Me.scale)},k))]}),Tt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(Tt[0].x+Tt[1].x)*50}%`,top:`${(Tt[0].y+Tt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Me.scale)})`},children:[Math.hypot((Tt[1].x-Tt[0].x)*j,(Tt[1].y-Tt[0].y)*ae).toFixed(1)," m"]})]}),mt.map(E=>{const k=E.isVerticalShaft?Ce==null?void 0:Ce.floors.filter(F=>{var re;return(re=E.linkedFloorIds)==null?void 0:re.includes(F.id)}).sort((F,re)=>Kn(re.name)-Kn(F.name)).map(F=>F.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${K===E.id?"z-[60]":""} ${Be===E.id?"scale-125":""}`,style:{left:`${E.x*100}%`,top:`${E.y*100}%`},onPointerDown:F=>{F.stopPropagation(),F.button===0&&(Pe?Un(E.id):be?(E.isVerticalShaft||Ne(E,!0,!0),le(null),J(E.id)):!Bt&&!Xt&&!kt&&!Mt&&(le(null),ue(E.id),J(E.id),F.target.setPointerCapture(F.pointerId)))},onPointerUp:F=>{F.stopPropagation(),F.target.releasePointerCapture(F.pointerId)},onContextMenu:F=>{F.preventDefault(),Pe?bt(E.id):be?E.isVerticalShaft&&Ne(E,!1,!0):!Bt&&!kt&&!Xt&&(le(null),J(E.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${K===E.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":E.enabled?E.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Be===E.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:E.isVerticalShaft?g.jsx(vs,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Me.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Me.scale)})`},children:E.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${K===E.id?"border-t-white":E.enabled?E.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Be===E.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${K===E.id?"opacity-100 border-cyan-500 text-cyan-400":E.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Me.scale)})`,transformOrigin:"top center"},children:[E.title||"未命名"," ",E.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",k,")"]})]})]},E.id)})]}),be&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(vs,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Pe&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(tw,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Bt&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(_0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(Ve!=null&&Ve.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(M0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",Ce==null?void 0:Ce.name," - ",Ve==null?void 0:Ve.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(Ve==null?void 0:Ve.imageUrl)&&Lt>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:Ee.blX,blY:Ee.blY,trX:Ee.trX,trY:Ee.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(fa,{className:"w-3 h-3 mr-1"})," 比例尺: ",Kt," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${Lt}px`}})]}),(Ve==null?void 0:Ve.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>Xe(E=>({...E,scale:Math.min(10,E.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(Mg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Xe(E=>({...E,scale:Math.max(.1,E.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(Eg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:$e,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(ew,{className:"w-5 h-5"})})]})]})]}),D.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(fa,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.blX,onChange:E=>y({...D,blX:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.blY,onChange:E=>y({...D,blY:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.trX,onChange:E=>y({...D,trX:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.trY,onChange:E=>y({...D,trY:parseFloat(E.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{W(E=>E.map(k=>k.id===H?{...k,floors:k.floors.map(F=>F.id===te?{...F,bounds:{blX:D.blX,blY:D.blY,trX:D.trX,trY:D.trY}}:F)}:k)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:E=>{E.key==="Enter"&&(f.onSubmit(E.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:E=>{f.onSubmit(E.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(Sg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(Sf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(aw,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:qe,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ql,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(K||pe)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:K?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{J(null),le(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(_s,{})})]}),at&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:at.code,onChange:E=>Ye(at.id,"code",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:at.title,onChange:E=>Ye(at.id,"title",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:at.description||"",onChange:E=>Ye(at.id,"description",E.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(at.x*100).toFixed(1),onChange:E=>Ye(at.id,"x",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(at.y*100).toFixed(1),onChange:E=>Ye(at.id,"y",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:at.isVerticalShaft||!1,onChange:E=>Ne(at,E.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),at.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ce==null?void 0:Ce.floors.slice().sort((E,k)=>Kn(k.name)-Kn(E.name)).map(E=>{var re;const k=(re=at.linkedFloorIds)==null?void 0:re.includes(E.id),F=E.id===te;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:F,checked:k||F,onChange:we=>dt(at,E.id,we.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[E.name," ",F&&"(目前)"]})]},E.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:at.arrowDirection||"none",onChange:E=>Ye(at.id,"arrowDirection",E.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:at.enabled,onChange:E=>Ye(at.id,"enabled",E.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:Te,onChange:lr,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>Te.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:at.imageUrl?g.jsx("img",{src:at.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(gw,{marker:at,onUpdateStatus:E=>Ye(at.id,"recognitionStatus",E),showAlert:E=>x({isOpen:!0,message:E})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>tt(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>bt(at.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>tt(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>J(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),Je&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Je.x*100).toFixed(1),onChange:E=>je(Je.id,"x",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Je.y*100).toFixed(1),onChange:E=>je(Je.id,"y",Math.max(0,Math.min(100,parseFloat(E.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:Je.isVerticalShaft||!1,onChange:E=>Ne(Je,E.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),Je.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Ce==null?void 0:Ce.floors.slice().sort((E,k)=>Kn(k.name)-Kn(E.name)).map(E=>{var re;const k=(re=Je.linkedFloorIds)==null?void 0:re.includes(E.id),F=E.id===te;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:F,checked:k||F,onChange:we=>dt(Je,E.id,we.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[E.name," ",F&&"(目前)"]})]},E.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>tt(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>bt(Je.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>tt(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>le(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Hl({icon:s,label:e,active:t,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Mf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ql,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(Sg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function gw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Ie.useState("idle"),[l,u]=Ie.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Ie.useRef(null),h=Ie.useRef(null),p=Ie.useRef(null),v=Ie.useRef(null),S=Ie.useRef(null),x=Ie.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Ie.useRef({frames:0,lockedFrames:0});Ie.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const C=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,P=x.current;P.refGray&&P.refGray.delete(),P.refKeypoints&&P.refKeypoints.delete(),P.refDescriptors&&P.refDescriptors.delete(),P.orbDetector&&P.orbDetector.delete(),P.matcher&&P.matcher.delete();const z=document.createElement("canvas"),I=z.getContext("2d"),O=p.current,b=320;let N=O.naturalWidth||O.width,W=O.naturalHeight||O.height;(N>b||W>b)&&(N>W?(W=Math.round(W*b/N),N=b):(N=Math.round(N*b/W),W=b)),z.width=N,z.height=W,I.drawImage(O,0,0,N,W);const H=R.imread(z),Z=new R.Mat;R.cvtColor(H,Z,R.COLOR_RGBA2GRAY);const te=new R.ORB,me=new R.KeyPointVector,Y=new R.Mat;te.detectAndCompute(Z,new R.Mat,me,Y);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:Z,refKeypoints:me,refDescriptors:Y,orbDetector:te,matcher:oe},H.delete(),!0}catch{return!1}},D=R=>{if(R.length<4)return!1;let P=[];for(let z=0;z<4;z++){let I=R[(z+1)%4].x-R[z].x,O=R[(z+1)%4].y-R[z].y,b=R[(z+2)%4].x-R[(z+1)%4].x,N=R[(z+2)%4].y-R[(z+1)%4].y;P.push(I*N-O*b>0)}return P.every(z=>z===P[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!C()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(P){console.warn("Device orientation permission was not granted.",P)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,L()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Ie.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const L=()=>{const R=window.cv,P=x.current,z=f.current,I=h.current,O=I.getContext("2d");let b=performance.now(),N=null;const W=.15;let H=0;const Z=3;let te=0;const me=10;let Y=null;const oe=()=>{if(!z||!z.srcObject||!P.refDescriptors)return;const K=performance.now(),J=Math.round(1e3/(K-b));b=K,O.drawImage(z,0,0,I.width,I.height);let pe=0,le=0,V=!1,ue=null,et=H%Z===0;if(H++,et){try{const Pe=R.imread(I),fe=new R.Mat;R.cvtColor(Pe,fe,R.COLOR_RGBA2GRAY);const be=new R.KeyPointVector,ye=new R.Mat;if(P.orbDetector.detectAndCompute(fe,new R.Mat,be,ye),!ye.empty()&&ye.rows>0){const Be=new R.DMatchVector;P.matcher.match(P.refDescriptors,ye,Be);let it=[];for(let St=0;St<Be.size();St++)it.push(Be.get(St));it.sort((St,Mt)=>St.distance-Mt.distance);let ut=it.filter(St=>St.distance<=50).slice(0,60);if(pe=ut.length,ut.length>=12){const St=[],Mt=[];for(let jt=0;jt<ut.length;jt++){let Xt=ut[jt];St.push(P.refKeypoints.get(Xt.queryIdx).pt.x,P.refKeypoints.get(Xt.queryIdx).pt.y),Mt.push(be.get(Xt.trainIdx).pt.x,be.get(Xt.trainIdx).pt.y)}const Ft=R.matFromArray(St.length/2,1,R.CV_32FC2,St),qt=R.matFromArray(Mt.length/2,1,R.CV_32FC2,Mt),yt=new R.Mat,Ot=R.findHomography(Ft,qt,R.RANSAC,4,yt);for(let jt=0;jt<yt.rows;jt++)yt.data[jt]===1&&le++;if(!Ot.empty()&&le>=10&&le/ut.length>=.35){const jt=P.refGray.cols,Xt=P.refGray.rows,$=[0,0,1,jt,0,1,jt,Xt,1,0,Xt,1];let kt=[];for(let wt=0;wt<4;wt++){let Tt=$[wt*3],Ke=$[wt*3+1],Bt=Ot.data64F[0]*Tt+Ot.data64F[1]*Ke+Ot.data64F[2],U=Ot.data64F[3]*Tt+Ot.data64F[4]*Ke+Ot.data64F[5],w=Ot.data64F[6]*Tt+Ot.data64F[7]*Ke+Ot.data64F[8];kt.push({x:Bt/w,y:U/w})}D(kt)&&(ue=kt,V=!0)}Ft.delete(),qt.delete(),yt.delete(),Ot.delete()}Be.delete()}Pe.delete(),fe.delete(),be.delete(),ye.delete()}catch{}V?(Y=ue,te=me):te>0?te--:Y=null}const tt=Y!==null;if(tt){if(!N)N=JSON.parse(JSON.stringify(Y));else for(let Pe=0;Pe<4;Pe++)N[Pe].x=N[Pe].x*(1-W)+Y[Pe].x*W,N[Pe].y=N[Pe].y*(1-W)+Y[Pe].y*W;O.strokeStyle="#00ffcc",O.lineWidth=3,O.shadowBlur=10,O.shadowColor="#00ffcc",O.beginPath(),O.moveTo(N[0].x,N[0].y),O.lineTo(N[1].x,N[1].y),O.lineTo(N[2].x,N[2].y),O.lineTo(N[3].x,N[3].y),O.closePath(),O.stroke(),O.shadowBlur=0}else{N=null;const Pe=Math.min(I.width,I.height)*.5,fe=(I.width-Pe)/2,be=(I.height-Pe)/2;O.strokeStyle="rgba(255, 70, 70, 0.5)",O.lineWidth=2,O.strokeRect(fe,be,Pe,Pe)}u(Pe=>({fps:J,matches:et?pe:Pe.matches,inliers:et?le:Pe.inliers,status:tt?"LOCKED":"SEARCHING"})),M.current.frames++,tt&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Mf,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(nw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function N0({buildings:s,systemConfig:e,onMenuClick:t}){var Di,Li;const[r,o]=Ie.useState("idle"),[l,u]=Ie.useState(null),[f,h]=Ie.useState(null),[p,v]=Ie.useState([]),[S,x]=Ie.useState(!1),[M,C]=Ie.useState(0),[D,y]=Ie.useState("idle"),[_,L]=Ie.useState("checking"),[R,P]=Ie.useState("idle"),[z,I]=Ie.useState(0),[O,b]=Ie.useState(0),[N,W]=Ie.useState({}),[H,Z]=Ie.useState(!1),te=Ie.useRef(null),me=Ie.useRef(null),Y=Ie.useRef(null),oe=Ie.useRef(null),K=Ie.useRef(null),J=Ie.useRef(null),pe=Ie.useRef(null),le=Ie.useRef(null),V=Ie.useRef(null),ue=Ie.useRef(null),et=Ie.useRef(!1),tt=Ie.useRef([]),Pe=Ie.useRef({matcher:null}),fe=Ie.useRef(null),be=Ie.useRef(null),ye=Ie.useRef(!1),Be=Ie.useRef({}),it=Ie.useRef([]),ut=Ie.useRef({nodes:{},edges:[]}),St=Ie.useRef(null),Mt=Ie.useRef("idle"),Ft=Ie.useRef({heading:null,pitch:0,roll:0}),qt=Ie.useRef(null),yt=wf.useMemo(()=>{const G={},Le=[];return s.forEach(Ue=>Ue.floors.forEach($e=>{var Je,Kt;const ot=$e.bounds||{blX:0,blY:0,trX:100,trY:100},at=(Lt,A)=>({physX:ot.blX+Lt*(ot.trX-ot.blX),physY:ot.trY-A*(ot.trY-ot.blY)});$e.markers.forEach(Lt=>{Lt.enabled&&(G[Lt.id]={...Lt,...at(Lt.x,Lt.y),isMarker:!0,bId:Ue.id,fId:$e.id,bName:Ue.name,fName:$e.name,bounds:ot})}),(Je=$e.waypoints)==null||Je.forEach(Lt=>{G[Lt.id]={...Lt,...at(Lt.x,Lt.y),isMarker:!1,bId:Ue.id,fId:$e.id,bName:Ue.name,fName:$e.name,bounds:ot}}),(Kt=$e.edges)==null||Kt.forEach(Lt=>{Le.push({...Lt,fId:$e.id})})})),{nodes:G,edges:Le}},[s]);Ie.useEffect(()=>{ut.current=yt},[yt]),Ie.useEffect(()=>{it.current=p},[p]),Ie.useEffect(()=>{b(0)},[l,p]),Ie.useEffect(()=>{if(!l||p.length<2){I(0);return}const G=performance.now(),Le=Ue=>{I((Ue-G)/5200%1),qt.current=requestAnimationFrame(Le)};return qt.current=requestAnimationFrame(Le),()=>{qt.current&&cancelAnimationFrame(qt.current)}},[l,p]),Ie.useEffect(()=>{St.current=null,be.current=null,Ot("idle")},[l]);const Ot=G=>{Mt.current!==G&&(Mt.current=G,y(G))},jt=()=>new URLSearchParams(window.location.search).get("debugAR")==="1"||localStorage.getItem("debugAR")==="1",Xt=G=>{jt()&&(Be.current={...Be.current,...G,isSecureContext:window.isSecureContext,lastUpdateTime:new Date().toLocaleTimeString()},W(Be.current))};Ie.useEffect(()=>{let G=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){G&&L("unsupported");return}try{const Ue=await navigator.xr.isSessionSupported("immersive-ar");G&&L(Ue?"supported":"unsupported")}catch{G&&L("unsupported")}})(),()=>{G=!1}},[]);const $=(G,Le)=>{const{nodes:Ue,edges:$e}=yt,ot={};Object.keys(Ue).forEach(_e=>{ot[_e]={}}),$e.forEach(_e=>{if(Ue[_e.start]&&Ue[_e.end]){const Ae=Math.hypot(Ue[_e.start].physX-Ue[_e.end].physX,Ue[_e.start].physY-Ue[_e.end].physY);ot[_e.start][_e.end]=Ae,ot[_e.end][_e.start]=Ae}});const at={};Object.values(Ue).forEach(_e=>{_e.isVerticalShaft&&_e.shaftId&&(at[_e.shaftId]||(at[_e.shaftId]=[]),at[_e.shaftId].push(_e.id))}),Object.values(at).forEach(_e=>{for(let Ae=0;Ae<_e.length;Ae++)for(let Qe=Ae+1;Qe<_e.length;Qe++)ot[_e[Ae]][_e[Qe]]=5,ot[_e[Qe]][_e[Ae]]=5});const Je=_e=>Object.keys(ot[_e]).length>0,Kt=_e=>{if(Je(_e))return _e;const Ae=Ue[_e];let Qe=1/0,nt=_e;return Object.keys(Ue).forEach(gt=>{if(Ue[gt].fId===Ae.fId&&Je(gt)){const _t=Math.hypot(Ue[gt].physX-Ae.physX,Ue[gt].physY-Ae.physY);_t<Qe&&(Qe=_t,nt=gt)}}),nt},Lt=Kt(G),A=Kt(Le),j={},ae={},Q=new Set(Object.keys(Ue));for(Object.keys(Ue).forEach(_e=>{j[_e]=1/0,ae[_e]=null}),j[Lt]=0;Q.size>0;){let _e=null;if(Q.forEach(Ae=>{(_e===null||j[Ae]<j[_e])&&(_e=Ae)}),j[_e]===1/0||_e===A)break;Q.delete(_e),Object.entries(ot[_e]).forEach(([Ae,Qe])=>{if(Q.has(Ae)){const nt=j[_e]+Qe;nt<j[Ae]&&(j[Ae]=nt,ae[Ae]=_e)}})}const ie=[];let De=A;for(;De;)ie.unshift(De),De=ae[De];return ie.length===0||ie[0]!==Lt?[]:(Lt!==G&&ie.unshift(G),A!==Le&&ie.push(Le),ie)};Ie.useEffect(()=>{v(f&&l&&f!==l?$(f,l):[])},[f,l,yt]),Ie.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const $e=document.createElement("script");$e.id="opencv-script",$e.src="https://docs.opencv.org/3.4.16/opencv.js",$e.async=!0,document.body.appendChild($e)}}else o("idle");let G=0;const Le=$e=>{let ot=null;$e.webkitCompassHeading!==void 0&&$e.webkitCompassHeading!==null?ot=$e.webkitCompassHeading:$e.alpha!==null&&$e.alpha!==void 0&&(ot=360-$e.alpha),ot!==null&&(Ft.current={heading:ot,pitch:$e.beta||0,roll:$e.gamma||0},fe.current=ot,ye.current||(ye.current=!0,Z(!0)))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Le,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",Le,!0));const Ue=setInterval(()=>{if(!ye.current)return;let $e=fe.current;if($e==null)return;let ot=$e-(G%360+360)%360;ot>180&&(ot-=360),ot<-180&&(ot+=360),G+=ot,C(G)},200);return()=>{Ke(),clearInterval(Ue),window.removeEventListener("deviceorientation",Le,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",Le,!0)}},[]);const kt=async()=>{const G=window.cv;if(!G)return!1;tt.current=[],Pe.current.matcher=new G.BFMatcher(G.NORM_HAMMING,!0);const Ue=Object.values(yt.nodes).filter($e=>$e.isMarker&&$e.imageUrl).map($e=>new Promise(ot=>{const at=new Image;at.onload=()=>{try{const Je=document.createElement("canvas"),Kt=Je.getContext("2d");Je.width=320,Je.height=Math.round(320*(at.height/at.width)),Kt.drawImage(at,0,0,Je.width,Je.height);const Lt=G.imread(Je),A=new G.Mat;G.cvtColor(Lt,A,G.COLOR_RGBA2GRAY);const j=new G.ORB,ae=new G.KeyPointVector,Q=new G.Mat;j.detectAndCompute(A,new G.Mat,ae,Q),tt.current.push({markerId:$e.id,gray:A,kp:ae,des:Q,orb:j,width:A.cols,height:A.rows}),Lt.delete(),ot(!0)}catch{ot(!1)}},at.onerror=()=>ot(!1),at.src=$e.imageUrl}));return await Promise.all(Ue),tt.current.length>0},wt=async()=>{const G={orientationPermission:"not-required",motionPermission:"not-required",granted:!0,reason:null};if(!window.isSecureContext&&location.hostname!=="localhost")return G.granted=!1,G.reason="AR 方向感測需要 HTTPS 或 localhost。",Xt(G),G;try{window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&(G.orientationPermission=await window.DeviceOrientationEvent.requestPermission(),G.orientationPermission!=="granted"&&(G.granted=!1)),window.DeviceMotionEvent&&typeof window.DeviceMotionEvent.requestPermission=="function"&&(G.motionPermission=await window.DeviceMotionEvent.requestPermission(),G.motionPermission!=="granted"&&(G.granted=!1))}catch(Le){G.granted=!1,G.reason=(Le==null?void 0:Le.message)||"方向感測授權失敗。"}return Xt(G),G},Tt=async()=>{if(r!=="idle")return;if(o("loading"),!await kt()){o("idle"),alert("無法提取特徵");return}try{await wt();const Le=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});Y.current=Le,te.current.srcObject=Le,te.current.play(),te.current.onloadedmetadata=()=>{me.current.width=te.current.videoWidth,me.current.height=te.current.videoHeight,o("scanning"),Te()}}catch{alert("無相機權限"),o("idle")}},Ke=()=>{oe.current&&cancelAnimationFrame(oe.current),Y.current&&Y.current.getTracks().forEach(G=>G.stop()),St.current=null,be.current=null,Ot("idle"),o("idle")},Bt=(G,Le,Ue=!1)=>{if(!Le||Le.length<2)return!1;const $e=R0(Le);if(G.save(),G.beginPath(),Le.forEach((ot,at)=>{at===0?G.moveTo(ot.x,ot.y):G.lineTo(ot.x,ot.y)}),G.strokeStyle=Ue?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",G.lineWidth=Ue?8:10,G.lineCap="round",G.lineJoin="round",G.shadowBlur=Ue?8:12,G.shadowColor="#ffffff",G.stroke(),$e>8){const ot=Ue?74:62,at=Ue?28:32,Je=Date.now()/10%ot;G.shadowBlur=Ue?10:16,G.shadowColor="#ffffff",G.fillStyle="rgba(255,255,255,0.98)",G.strokeStyle="rgba(0,0,0,0.34)",G.lineWidth=2.5;for(let Kt=Je;Kt<$e;Kt+=ot){const Lt=C0(Le,Kt);Lt&&(G.save(),G.translate(Lt.x,Lt.y),G.rotate(Lt.angle),G.beginPath(),G.moveTo(at*.55,0),G.lineTo(-at*.35,-at*.32),G.lineTo(-at*.15,0),G.lineTo(-at*.35,at*.32),G.closePath(),G.stroke(),G.fill(),G.restore())}}return G.restore(),!0},U=(G,Le=[])=>{Le.forEach(Ue=>{if(!Ue||typeof Ue.x!="number"||typeof Ue.y!="number")return;const $e=Ue.type==="destination",ot=$e?"#ef4444":"#a855f7",at=Ue.label||($e?"目的地":"路段末端");G.save(),G.translate(Ue.x,Ue.y),G.shadowBlur=16,G.shadowColor=ot,G.fillStyle=ot,G.strokeStyle="#ffffff",G.lineWidth=3,G.beginPath(),G.arc(0,-18,$e?15:13,0,Math.PI*2),G.fill(),G.stroke(),G.beginPath(),G.moveTo(-8,-6),G.lineTo(0,12),G.lineTo(8,-6),G.closePath(),G.fill(),G.stroke(),G.fillStyle="#ffffff",G.shadowBlur=0,G.font="bold 18px sans-serif",G.textAlign="center",G.textBaseline="middle",G.fillText($e?"!":"↑",0,-18),G.font="bold 13px sans-serif";const Je=G.measureText(at).width+18;G.fillStyle="rgba(15, 23, 42, 0.86)",G.strokeStyle="rgba(255, 255, 255, 0.35)",G.lineWidth=1,G.beginPath(),G.roundRect(-Je/2,20,Je,26,13),G.fill(),G.stroke(),G.fillStyle="#ffffff",G.fillText(at,0,33),G.restore()})},w=(G,Le)=>{!Le||typeof Le.x!="number"||typeof Le.y!="number"||(G.save(),G.translate(Le.x,Le.y),G.shadowBlur=14,G.shadowColor="#22d3ee",G.strokeStyle="rgba(255,255,255,0.95)",G.fillStyle="rgba(34,211,238,0.95)",G.lineWidth=3,G.beginPath(),G.arc(0,0,10,0,Math.PI*2),G.fill(),G.stroke(),G.beginPath(),G.arc(0,0,20,0,Math.PI*2),G.strokeStyle="rgba(34,211,238,0.55)",G.stroke(),G.restore())},se=G=>{const Le=St.current;if(!Le||!Le.points||Le.points.length<2)return!1;const Ue=Ft.current,$e=ye.current&&Ue.heading!=null&&Le.orientation.heading!=null,ot=$e?T0(Ue.heading,Le.orientation.heading):0,at=$e?Ue.pitch-Le.orientation.pitch:0,Je=$e?Ue.roll-Le.orientation.roll:0,Kt=(Je-ot)*Math.PI/180,Lt=Math.cos(Kt),A=Math.sin(Kt),j=Le.anchor||Le.points[0],ae=j.x*G.canvas.width,Q=j.y*G.canvas.height,ie=Math.max(G.canvas.width,G.canvas.height)*.95,De=G.canvas.width*1.8,_e=G.canvas.height*1.2,Ae=Math.max(-De,Math.min(De,Math.tan(ot*Math.PI/180)*ie)),Qe=Math.max(-_e,Math.min(_e,Math.tan(at*Math.PI/180)*ie*.75)),nt=F=>{const re=F.x*G.canvas.width,we=F.y*G.canvas.height,ce=re-ae,Fe=we-Q,Oe=Math.abs(ce)<.001&&Math.abs(Fe)<.001;return{x:ae+ce*Lt-Fe*A-(Oe?0:Ae),y:Q+ce*A+Fe*Lt+(Oe?0:Qe)}},gt=Le.points.map(nt),_t=(Le.pins||[]).map(nt).map((F,re)=>{var we,ce;return{...F,type:(we=Le.pins[re])==null?void 0:we.type,label:(ce=Le.pins[re])==null?void 0:ce.label}}),st=cw(Ue.heading,Le.baseHeading),E=Le.targetBearing!=null&&st!=null?T0(Le.targetBearing,st):null;Xt({currentHeading:Ue.heading,baseHeading:Le.baseHeading,relativeHeading:st,targetBearing:Le.targetBearing,headingDelta:ot,arrowRotation:E,finalArrowRotation:E==null?null:E+Je,currentARMode:"camera-overlay"});const k=Bt(G,gt,!0);return k&&(w(G,nt(j)),U(G,_t)),k},Se=()=>{if(it.current.length>1)return it.current;const G=Object.values(ut.current.nodes).filter(Ue=>Ue.isMarker&&Ue.id!==l).map(Ue=>Ue.id),Le=f||G[0];return!Le||!l||Le===l?[]:$(Le,l)},Re=()=>{const G=Se(),Le=ut.current.nodes,Ue=G.map(Q=>Le[Q]).filter(Boolean);if(Ue.length<2)return null;const $e=Ue[0],ot=.08,at=Ue.map(Q=>new ne((Q.physX-$e.physX)*ot,.03,-(Q.physY-$e.physY)*ot)),Je=new bs,Kt=A0(at,.045,16777215,.18),Lt=A0(at,.016,16777215,.36);Kt&&Je.add(Kt),Lt&&Je.add(Lt);const A=fw(at);A&&Je.add(A);const j=new ni(new ic(.1,24,24),new es({color:2282478}));j.position.copy(at[0]),j.position.y+=.08,Je.add(j);const ae=new ni(new ic(.12,24,24),new es({color:16731471}));return ae.position.copy(at[at.length-1]),ae.position.y+=.1,Je.add(ae),Je},He=async()=>{const G=J.current;if(G)try{await G.end()}catch{}else Ge()},Ge=()=>{le.current&&le.current.traverse(G=>{G.geometry&&G.geometry.dispose(),G.material&&G.material.dispose()}),pe.current&&(pe.current.setAnimationLoop(null),pe.current.dispose(),pe.current.domElement.remove()),J.current=null,pe.current=null,le.current=null,V.current=null,ue.current=null,et.current=!1,P("idle")},xe=async()=>{var G;if(!(_!=="supported"||!navigator.xr||J.current)){P("starting"),Ke();try{const Le={requiredFeatures:["hit-test"],optionalFeatures:K.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};K.current&&(Le.domOverlay={root:K.current});const Ue=await navigator.xr.requestSession("immersive-ar",Le),$e=new HE({alpha:!0,antialias:!0});$e.xr.enabled=!0,$e.setPixelRatio(window.devicePixelRatio||1),$e.setSize(window.innerWidth,window.innerHeight),$e.domElement.className="absolute inset-0 h-full w-full",(G=K.current)==null||G.appendChild($e.domElement),await $e.xr.setSession(Ue);const ot=new d_,at=new Pi,Je=new ni(new Bf(.18,.22,32).rotateX(-Math.PI/2),new es({color:65484,transparent:!0,opacity:.85}));Je.matrixAutoUpdate=!1,Je.visible=!1,ot.add(Je);const Kt=await Ue.requestReferenceSpace("local-floor").catch(()=>Ue.requestReferenceSpace("local")),Lt=await Ue.requestReferenceSpace("viewer"),A=await Ue.requestHitTestSource({space:Lt});J.current=Ue,pe.current=$e,V.current=A,ue.current=Kt,P("placing");const j=ae=>{if(et.current)return;const Q=Re();if(!Q){P("no-route");return}Q.matrix.fromArray(ae),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),ot.add(Q),le.current=Q,et.current=!0,P("anchored")};Ue.addEventListener("select",()=>{Je.visible&&j(Je.matrix.elements)}),Ue.addEventListener("end",Ge),$e.setAnimationLoop((ae,Q)=>{if(le.current&&le.current.traverse(ie=>hw(ie,ae)),Q&&!et.current){const ie=Q.getHitTestResults(A);if(ie.length){const De=ie[0].getPose(Kt);De&&(Je.visible=!0,Je.matrix.fromArray(De.transform.matrix))}else Je.visible=!1}else Je.visible=!1;$e.render(ot,at)})}catch(Le){console.warn("Unable to start WebXR AR mode.",Le),Ge(),P("failed")}}},Te=()=>{const G=window.cv,Le=te.current,Ue=me.current,$e=Ue.getContext("2d"),ot=Pe.current.matcher;let at=0,Je=null,Kt=null,Lt=0,A=0;const j=()=>{if(!Le||!Le.srcObject)return;$e.drawImage(Le,0,0,Ue.width,Ue.height);let ae=!1;if(at%4===0){try{const De=G.imread(Ue),_e=new G.Mat;G.cvtColor(De,_e,G.COLOR_RGBA2GRAY);const Ae=new G.KeyPointVector,Qe=new G.Mat;if(tt.current[0].orb.detectAndCompute(_e,new G.Mat,Ae,Qe),!Qe.empty())for(let nt of tt.current){const gt=new G.DMatchVector;ot.match(nt.des,Qe,gt);let _t=[];for(let E=0;E<gt.size();E++)_t.push(gt.get(E));_t.sort((E,k)=>E.distance-k.distance);const st=_t.filter(E=>E.distance<=50).slice(0,60);if(st.length>=12){const E=[],k=[];for(let Oe of st)E.push(nt.kp.get(Oe.queryIdx).pt.x,nt.kp.get(Oe.queryIdx).pt.y),k.push(Ae.get(Oe.trainIdx).pt.x,Ae.get(Oe.trainIdx).pt.y);const F=G.matFromArray(E.length/2,1,G.CV_32FC2,E),re=G.matFromArray(k.length/2,1,G.CV_32FC2,k),we=new G.Mat,ce=G.findHomography(F,re,G.RANSAC,4,we);let Fe=0;for(let Oe=0;Oe<we.rows;Oe++)we.data[Oe]===1&&Fe++;!ce.empty()&&Fe>=10&&(Je&&Je.delete(),Je=ce.clone(),Kt=nt.markerId,h(Kt),ae=!0),F.delete(),re.delete(),we.delete(),ce.delete()}if(gt.delete(),ae)break}De.delete(),_e.delete(),Ae.delete(),Qe.delete()}catch{}ae?(A=8,Lt=Date.now()):A>0?A--:(Je&&(Je.delete(),Je=null),Kt=null)}at++,!Lt&&!St.current&&(Je&&(Je.delete(),Je=null),Kt=null);const Q=ut.current,ie=it.current;if(Je&&Kt&&ie.length>1){const De=Q.nodes[Kt],_e=tt.current.find(Ae=>Ae.markerId===Kt);if(De&&_e){const Ae=_e.width/.3,Qe=[],nt=[],gt=ie.indexOf(Kt),_t=gt>=0?gt:0,st=uw(Q.nodes[ie[_t]],Q.nodes[ie[_t+1]]);for(let E=0;E<ie.length;E++){const k=ie[E],F=Q.nodes[k];if(!F||F.fId!==De.fId)break;const re=F.physX-De.physX,we=-(F.physY-De.physY),ce=_e.width/2+re*Ae,Fe=_e.height/2+we*Ae,Oe=Je.data64F,Wt=Oe[6]*ce+Oe[7]*Fe+Oe[8];if(Wt>0){const Et=(Oe[0]*ce+Oe[1]*Fe+Oe[2])/Wt,ht=(Oe[3]*ce+Oe[4]*Fe+Oe[5])/Wt;Qe.push({x:Et,y:ht}),nt.push({x:Et,y:ht,nodeId:k})}}if(Bt($e,Qe,!1)){const E=Qe[0],k=nt[nt.length-1],F=nt.find(we=>we.nodeId===l),re=[];k&&re.push({x:k.x,y:k.y,type:F?"destination":"endpoint",label:F?"目的地":"路段末端"}),F&&F!==k&&re.push({x:F.x,y:F.y,type:"destination",label:"目的地"}),U($e,re),be.current==null&&Ft.current.heading!=null&&(be.current=Ft.current.heading),St.current={markerId:Kt,orientation:{...Ft.current},baseHeading:be.current,targetBearing:st,updatedAt:Date.now(),anchor:E?{x:E.x/Ue.width,y:E.y/Ue.height}:null,points:Qe.map(we=>({x:we.x/Ue.width,y:we.y/Ue.height})),pins:re.map(we=>({x:we.x/Ue.width,y:we.y/Ue.height,type:we.type,label:we.label}))},Xt({arrowElementFound:!0,targetBearing:st,baseHeading:be.current,currentARMode:"camera-overlay"}),Ot("locked")}}}else{const De=ie.length>1&&se($e);if(Ot(De?"holding":"searching"),!De){const _e=Math.min(Ue.width,Ue.height)*.6;$e.strokeStyle="rgba(0, 255, 204, 0.4)",$e.lineWidth=2,$e.strokeRect((Ue.width-_e)/2,(Ue.height-_e)/2,_e,_e)}}oe.current=requestAnimationFrame(j)};j()};if(!l){const G=Object.values(yt.nodes).filter(Le=>Le.isMarker).reduce((Le,Ue)=>{const $e=`${Ue.bName} - ${Ue.fName}`;return Le[$e]||(Le[$e]=[]),Le[$e].push(Ue),Le},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(G).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(fa,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(G).map(([Le,Ue])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:Le}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Ue.map($e=>g.jsxs("button",{onClick:()=>u($e.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:$e.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:$e.title})})]},$e.id))})]},Le))]})]})}const Me=yt.nodes[l],Xe=f?yt.nodes[f]:null,qe=p.length>1?p[1]:null;qe&&yt.nodes[qe];const Ce=G=>{if(!G)return"";if(G.fName)return G.fName;for(const Le of s){const Ue=Le.floors.find($e=>$e.id===G.fId);if(Ue!=null&&Ue.name)return Ue.name}return G.fId||""},Ve=p.map(G=>yt.nodes[G]).filter(Boolean),mt=[];Ve.forEach(G=>{const Le=mt[mt.length-1];!Le||Le.floorId!==G.fId?mt.push({floorId:G.fId,floorName:Ce(G),nodes:[G]}):Le.nodes.push(G)});const Dt=Xe||Me?{floorId:(Xe||Me).fId,floorName:Ce(Xe||Me),nodes:[Xe||Me]}:null,X=mt.length?Math.min(O,mt.length-1):0,Ee=mt[X]||Dt,ve=mt[X-1]||null,Ye=mt[X+1]||null,je=(Di=Ee==null?void 0:Ee.nodes)==null?void 0:Di[Ee.nodes.length-1];(Li=Ee==null?void 0:Ee.nodes)==null||Li[0];const Ne=Ye?Kn(Ye.floorName)-Kn(Ee.floorName):0,dt=Ne>0?"上樓":Ne<0?"下樓":"前往",bt=ve?Kn(Ee.floorName)-Kn(ve.floorName):0,sn=bt>0?"上樓":bt<0?"下樓":"前往",Qt=f===l?"已抵達目的地":Ye?`請依照 ${Ee.floorName} 平面圖前往轉乘點，接著${dt}至 ${Ye.floorName}`:Ee?`請依照 ${Ee.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",bn=!!(Ye||ve);let gn=Ee?Ee.floorId:Xe?Xe.fId:Me.fId,Un=null,yi=Ee?Ee.floorName:Xe?Xe.fName:Me.fName,Fn={blX:0,blY:0,trX:100,trY:100};s.forEach(G=>G.floors.forEach(Le=>{Le.id===gn&&(Un=Le.imageUrl,Fn=Zr(Le),yi=Le.name)}));const On=(G,Le)=>{const Ue=Fn.trX-Fn.blX,$e=Fn.trY-Fn.blY,ot=Ue!==0?(G-Fn.blX)/Ue*100:50,at=$e!==0?(Fn.trY-Le)/$e*100:50;return{x:ot,y:at}},Hn=(Ee==null?void 0:Ee.nodes)||[],Si=Hn.filter(G=>G&&G.fId===gn).map(G=>On(G.physX,G.physY)),lr=R0(Si),kn=Xe&&Xe.fId===gn?Xe:Si.length?null:Me,Gn=lr>0?C0(Si,z*lr):kn?On(kn.physX,kn.physY):null;return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{Ke(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:K,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:te,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:me,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[D==="locked"&&"AR 路徑已鎖定",D==="holding"&&"陀螺儀空間錨點",D==="searching"&&"請重新對準導引圖",D==="idle"&&"準備定位"]}),r==="scanning"&&jt()&&g.jsxs("div",{className:"absolute right-4 top-16 z-40 max-w-[260px] rounded-xl border border-slate-600 bg-slate-950/85 p-3 text-[10px] leading-relaxed text-slate-200 shadow-xl backdrop-blur-md",children:[g.jsx("div",{className:"mb-1 font-bold text-cyan-300",children:"AR Debug"}),[["secure",String(N.isSecureContext)],["permission",`${N.orientationPermission||"-"} / ${N.motionPermission||"-"}`],["alpha",N.alpha==null?"-":Math.round(N.alpha)],["webkit",N.webkitCompassHeading==null?"-":Math.round(N.webkitCompassHeading)],["heading",N.currentHeading==null?"-":Math.round(N.currentHeading)],["base",N.baseHeading==null?"-":Math.round(N.baseHeading)],["relative",N.relativeHeading==null?"-":Math.round(N.relativeHeading)],["target",N.targetBearing==null?"-":Math.round(N.targetBearing)],["rotate",N.arrowRotation==null?"-":Math.round(N.arrowRotation)],["mode",N.currentARMode||"-"],["updated",N.lastUpdateTime||"-"]].map(([G,Le])=>g.jsxs("div",{className:"flex justify-between gap-3 border-t border-white/5 py-0.5",children:[g.jsx("span",{className:"text-slate-400",children:G}),g.jsx("span",{className:"font-mono text-white",children:Le})]},G))]}),r==="scanning"&&Un&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:Un,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:bn?`自動切換至 ${yi}`:`目前平面圖 ${yi}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),Hn.map((G,Le)=>{if(Le===Hn.length-1)return null;const Ue=Hn[Le+1];if(G.fId===gn&&Ue.fId===gn){const $e=On(G.physX,G.physY),ot=On(Ue.physX,Ue.physY);return g.jsx("line",{x1:`${$e.x}%`,y1:`${$e.y}%`,x2:`${ot.x}%`,y2:`${ot.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},Le)}return null})]}),Gn&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${Gn.x}%`,top:`${Gn.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${Gn.angle||0}rad)`,willChange:"transform"},children:g.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[g.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),g.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(Gn.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),Ye&&je&&je.fId===gn&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${On(je.physX,je.physY).x}%`,top:`${On(je.physX,je.physY).y}%`,transform:"translate(-50%, -140%)"},children:g.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:Ne>=0?g.jsx(yg,{className:"h-8 w-8 stroke-[3.5]"}):g.jsx(xg,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,Me&&Me.fId===gn&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${On(Me.physX,Me.physY).x}%`,top:`${On(Me.physX,Me.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(Eg,{className:"w-4 h-4"}):g.jsx(Mg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",Xe?Xe.fName:Me.fName," ",H?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(sw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{onClick:xe,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:Tt,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:He,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${Xe?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[g.jsx("button",{onClick:()=>b(G=>Math.max(0,G-1)),disabled:!ve,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:g.jsx(vg,{className:"h-5 w-5"})}),g.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[g.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[g.jsxs("span",{children:[(Ee==null?void 0:Ee.floorName)||Ce(Xe||Me)," ","平面圖"]}),mt.length>1&&g.jsxs("span",{children:[X+1," / ",mt.length]})]}),g.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":Ye?"text-purple-300":"text-yellow-300"}`,children:Qt}),ve&&g.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",ve.floorName,"；本張是",sn,"後的導引段。"]})]}),g.jsx("button",{onClick:()=>b(G=>Math.min(mt.length-1,G+1)),disabled:!Ye,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:g.jsx(_g,{className:"h-5 w-5"})})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const rc=document.getElementById("ar-root");if(!rc)throw new Error("Missing #ar-root element.");const bg=new URLSearchParams(window.location.search),xw=window.location.pathname.endsWith("/admin-ar.html"),Tg=rc.dataset.embedded==="true"||bg.get("embedded")==="1",P0=xw||Tg;pv.createRoot(rc).render(g.jsx(wf.StrictMode,{children:g.jsx(mw,{embedded:Tg,initialTab:P0?rc.dataset.initialTab||bg.get("tab")||"map":"frontend",publicOnly:!P0})}));
