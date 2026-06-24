function av(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Za={},Vu={exports:{}},Yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function ov(){if(um)return Yt;um=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=S&&B[S]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function y(B,le,et){this.props=B,this.context=le,this.refs=D,this.updater=et||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,le){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,le,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(B,le,et){this.props=B,this.context=le,this.refs=D,this.updater=et||M}var R=L.prototype=new _;R.constructor=L,C(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(B,le,et){var rt,Re={},de=null,Ae=null;if(le!=null)for(rt in le.ref!==void 0&&(Ae=le.ref),le.key!==void 0&&(de=""+le.key),le)V.call(le,rt)&&!O.hasOwnProperty(rt)&&(Re[rt]=le[rt]);var _e=arguments.length-2;if(_e===1)Re.children=et;else if(1<_e){for(var Be=Array(_e),st=0;st<_e;st++)Be[st]=arguments[st+2];Re.children=Be}if(B&&B.defaultProps)for(rt in _e=B.defaultProps,_e)Re[rt]===void 0&&(Re[rt]=_e[rt]);return{$$typeof:s,type:B,key:de,ref:Ae,props:Re,_owner:I.current}}function N(B,le){return{$$typeof:s,type:B.type,key:le,ref:B.ref,props:B.props,_owner:B._owner}}function X(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function H(B){var le={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(et){return le[et]})}var Z=/\/+/g;function re(B,le){return typeof B=="object"&&B!==null&&B.key!=null?H(""+B.key):le.toString(36)}function me(B,le,et,rt,Re){var de=typeof B;(de==="undefined"||de==="boolean")&&(B=null);var Ae=!1;if(B===null)Ae=!0;else switch(de){case"string":case"number":Ae=!0;break;case"object":switch(B.$$typeof){case s:case e:Ae=!0}}if(Ae)return Ae=B,Re=Re(Ae),B=rt===""?"."+re(Ae,0):rt,P(Re)?(et="",B!=null&&(et=B.replace(Z,"$&/")+"/"),me(Re,le,et,"",function(st){return st})):Re!=null&&(X(Re)&&(Re=N(Re,et+(!Re.key||Ae&&Ae.key===Re.key?"":(""+Re.key).replace(Z,"$&/")+"/")+B)),le.push(Re)),1;if(Ae=0,rt=rt===""?".":rt+":",P(B))for(var _e=0;_e<B.length;_e++){de=B[_e];var Be=rt+re(de,_e);Ae+=me(de,le,et,Be,Re)}else if(Be=x(B),typeof Be=="function")for(B=Be.call(B),_e=0;!(de=B.next()).done;)de=de.value,Be=rt+re(de,_e++),Ae+=me(de,le,et,Be,Re);else if(de==="object")throw le=String(B),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return Ae}function W(B,le,et){if(B==null)return B;var rt=[],Re=0;return me(B,rt,"","",function(de){return le.call(et,de,Re++)}),rt}function oe(B){if(B._status===-1){var le=B._result;le=le(),le.then(function(et){(B._status===0||B._status===-1)&&(B._status=1,B._result=et)},function(et){(B._status===0||B._status===-1)&&(B._status=2,B._result=et)}),B._status===-1&&(B._status=0,B._result=le)}if(B._status===1)return B._result.default;throw B._result}var K={current:null},J={transition:null},pe={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:J,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Yt.Children={map:W,forEach:function(B,le,et){W(B,function(){le.apply(this,arguments)},et)},count:function(B){var le=0;return W(B,function(){le++}),le},toArray:function(B){return W(B,function(le){return le})||[]},only:function(B){if(!X(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Yt.Component=y,Yt.Fragment=t,Yt.Profiler=o,Yt.PureComponent=L,Yt.StrictMode=r,Yt.Suspense=h,Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Yt.act=ue,Yt.cloneElement=function(B,le,et){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var rt=C({},B.props),Re=B.key,de=B.ref,Ae=B._owner;if(le!=null){if(le.ref!==void 0&&(de=le.ref,Ae=I.current),le.key!==void 0&&(Re=""+le.key),B.type&&B.type.defaultProps)var _e=B.type.defaultProps;for(Be in le)V.call(le,Be)&&!O.hasOwnProperty(Be)&&(rt[Be]=le[Be]===void 0&&_e!==void 0?_e[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)rt.children=et;else if(1<Be){_e=Array(Be);for(var st=0;st<Be;st++)_e[st]=arguments[st+2];rt.children=_e}return{$$typeof:s,type:B.type,key:Re,ref:de,props:rt,_owner:Ae}},Yt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},Yt.createElement=T,Yt.createFactory=function(B){var le=T.bind(null,B);return le.type=B,le},Yt.createRef=function(){return{current:null}},Yt.forwardRef=function(B){return{$$typeof:f,render:B}},Yt.isValidElement=X,Yt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:oe}},Yt.memo=function(B,le){return{$$typeof:p,type:B,compare:le===void 0?null:le}},Yt.startTransition=function(B){var le=J.transition;J.transition={};try{B()}finally{J.transition=le}},Yt.unstable_act=ue,Yt.useCallback=function(B,le){return K.current.useCallback(B,le)},Yt.useContext=function(B){return K.current.useContext(B)},Yt.useDebugValue=function(){},Yt.useDeferredValue=function(B){return K.current.useDeferredValue(B)},Yt.useEffect=function(B,le){return K.current.useEffect(B,le)},Yt.useId=function(){return K.current.useId()},Yt.useImperativeHandle=function(B,le,et){return K.current.useImperativeHandle(B,le,et)},Yt.useInsertionEffect=function(B,le){return K.current.useInsertionEffect(B,le)},Yt.useLayoutEffect=function(B,le){return K.current.useLayoutEffect(B,le)},Yt.useMemo=function(B,le){return K.current.useMemo(B,le)},Yt.useReducer=function(B,le,et){return K.current.useReducer(B,le,et)},Yt.useRef=function(B){return K.current.useRef(B)},Yt.useState=function(B){return K.current.useState(B)},Yt.useSyncExternalStore=function(B,le,et){return K.current.useSyncExternalStore(B,le,et)},Yt.useTransition=function(){return K.current.useTransition()},Yt.version="18.3.1",Yt}var dm;function wf(){return dm||(dm=1,Vu.exports=ov()),Vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function lv(){if(fm)return Za;fm=1;var s=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var hm;function cv(){return hm||(hm=1,zu.exports=lv()),zu.exports}var g=cv(),Fe=wf();const bf=av(Fe);var xl={},Hu={exports:{}},oi={},Gu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function uv(){return pm||(pm=1,(function(s){function e(J,pe){var ue=J.length;J.push(pe);e:for(;0<ue;){var B=ue-1>>>1,le=J[B];if(0<o(le,pe))J[B]=pe,J[ue]=le,ue=B;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var pe=J[0],ue=J.pop();if(ue!==pe){J[0]=ue;e:for(var B=0,le=J.length,et=le>>>1;B<et;){var rt=2*(B+1)-1,Re=J[rt],de=rt+1,Ae=J[de];if(0>o(Re,ue))de<le&&0>o(Ae,Re)?(J[B]=Ae,J[de]=ue,B=de):(J[B]=Re,J[rt]=ue,B=rt);else if(de<le&&0>o(Ae,ue))J[B]=Ae,J[de]=ue,B=de;else break e}}return pe}function o(J,pe){var ue=J.sortIndex-pe.sortIndex;return ue!==0?ue:J.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,C=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(J){for(var pe=t(p);pe!==null;){if(pe.callback===null)r(p);else if(pe.startTime<=J)r(p),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=t(p)}}function P(J){if(D=!1,R(J),!C)if(t(h)!==null)C=!0,oe(V);else{var pe=t(p);pe!==null&&K(P,pe.startTime-J)}}function V(J,pe){C=!1,D&&(D=!1,_(T),T=-1),M=!0;var ue=x;try{for(R(pe),S=t(h);S!==null&&(!(S.expirationTime>pe)||J&&!H());){var B=S.callback;if(typeof B=="function"){S.callback=null,x=S.priorityLevel;var le=B(S.expirationTime<=pe);pe=s.unstable_now(),typeof le=="function"?S.callback=le:S===t(h)&&r(h),R(pe)}else r(h);S=t(h)}if(S!==null)var et=!0;else{var rt=t(p);rt!==null&&K(P,rt.startTime-pe),et=!1}return et}finally{S=null,x=ue,M=!1}}var I=!1,O=null,T=-1,N=5,X=-1;function H(){return!(s.unstable_now()-X<N)}function Z(){if(O!==null){var J=s.unstable_now();X=J;var pe=!0;try{pe=O(!0,J)}finally{pe?re():(I=!1,O=null)}}else I=!1}var re;if(typeof L=="function")re=function(){L(Z)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,W=me.port2;me.port1.onmessage=Z,re=function(){W.postMessage(null)}}else re=function(){y(Z,0)};function oe(J){O=J,I||(I=!0,re())}function K(J,pe){T=y(function(){J(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){C||M||(C=!0,oe(V))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(x){case 1:case 2:case 3:var pe=3;break;default:pe=x}var ue=x;x=pe;try{return J()}finally{x=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,pe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ue=x;x=J;try{return pe()}finally{x=ue}},s.unstable_scheduleCallback=function(J,pe,ue){var B=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?B+ue:B):ue=B,J){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ue+le,J={id:v++,callback:pe,priorityLevel:J,startTime:ue,expirationTime:le,sortIndex:-1},ue>B?(J.sortIndex=ue,e(p,J),t(h)===null&&J===t(p)&&(D?(_(T),T=-1):D=!0,K(P,ue-B))):(J.sortIndex=le,e(h,J),C||M||(C=!0,oe(V))),J},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(J){var pe=x;return function(){var ue=x;x=pe;try{return J.apply(this,arguments)}finally{x=ue}}}})(ju)),ju}var mm;function dv(){return mm||(mm=1,Gu.exports=uv()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function fv(){if(gm)return oi;gm=1;var s=wf(),e=dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function D(n,i,a,c,d,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new D(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new D(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new D(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new D(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new D(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new D(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new D(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new D(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new D(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new D(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new D(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),H=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),J=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,B;function le(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var et=!1;function rt(n,i){if(!n||et)return"";et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var d=ge.stack.split(`
`),m=c.stack.split(`
`),A=d.length-1,z=m.length-1;1<=A&&0<=z&&d[A]!==m[z];)z--;for(;1<=A&&0<=z;A--,z--)if(d[A]!==m[z]){if(A!==1||z!==1)do if(A--,z--,0>z||d[A]!==m[z]){var q=`
`+d[A].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=A&&0<=z);break}}}finally{et=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Re(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=rt(n.type,!1),n;case 11:return n=rt(n.type.render,!1),n;case 1:return n=rt(n.type,!0),n;default:return""}}function de(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case N:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:de(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return de(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function st(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,m.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ft(n){n._valueTracker||(n._valueTracker=st(n))}function St(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Bt(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function $t(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Vt(n,i){bt(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?jt(n,i.type,a):i.hasOwnProperty("defaultValue")&&jt(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Nt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function jt(n,i,a){(i!=="number"||_t(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $=Array.isArray;function Lt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function Je(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ne(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){Ye.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),We[i]=We[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||We.hasOwnProperty(n)&&We[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ie=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $e(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Se=null;function De(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wt=null,Pt=null,Y=null;function Pe(n){if(n=Fa(n)){if(typeof wt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),wt(n.stateNode,n.type,i))}}function ye(n){Pt?Y?Y.push(n):Y=[n]:Pt=n}function qe(){if(Pt){var n=Pt,i=Y;if(Y=Pt=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Le(n,i){return n(i)}function Ce(){}var ot=!1;function yt(n,i,a){if(ot)return n(i,a);ot=!0;try{return Le(n,i,a)}finally{ot=!1,(Pt!==null||Y!==null)&&(Ce(),qe())}}function Jt(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Kt=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Kt=!1}function Fn(n,i,a,c,d,m,A,z,q){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(je){this.onError(je)}}var Xn=!1,Wi=null,In=!1,_i=null,Yn={onError:function(n){Xn=!0,Wi=n}};function On(n,i,a,c,d,m,A,z,q){Xn=!1,Wi=null,Fn.apply(Yn,arguments)}function $n(n,i,a,c,d,m,A,z,q){if(On.apply(this,arguments),Xn){if(Xn){var ge=Wi;Xn=!1,Wi=null}else throw Error(t(198));In||(In=!0,_i=ge)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ei(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ii(n){if(An(n)!==n)throw Error(t(188))}function yi(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Ii(d),n;if(m===c)return Ii(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var A=!1,z=d.child;z;){if(z===a){A=!0,a=d,c=m;break}if(z===c){A=!0,c=d,a=m;break}z=z.sibling}if(!A){for(z=m.child;z;){if(z===a){A=!0,a=m,c=d;break}if(z===c){A=!0,c=m,a=d;break}z=z.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ui(n){return n=yi(n),n!==null?Xi(n):null}function Xi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Xi(n);if(i!==null)return i;n=n.sibling}return null}var lr=e.unstable_scheduleCallback,G=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,ve=e.unstable_requestPaint,be=e.unstable_now,ct=e.unstable_getCurrentPriorityLevel,At=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,Q=e.unstable_LowPriority,ne=e.unstable_IdlePriority,se=null,ke=null;function Ve(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:it,Qe=Math.log,Ee=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Qe(n)/Ee|0)|0}var ut=64,tt=4194304;function w(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function k(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,A=a&268435455;if(A!==0){var z=A&~d;z!==0?c=w(z):(m&=A,m!==0&&(c=w(m)))}else A=a&~d,A!==0?c=w(A):m!==0&&(c=w(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Oe(i),d=1<<a,c|=n[a],i&=~d;return c}function F(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function te(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var A=31-Oe(m),z=1<<A,q=d[A];q===-1?((z&a)===0||(z&c)!==0)&&(d[A]=F(z,i)):q<=i&&(n.expiredLanes|=z),m&=~z}}function Te(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ce(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function ze(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ge(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Oe(i),n[i]=a}function Ut(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Oe(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function ht(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Oe(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ze=0;function Et(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mt,It,cn,Dt,Mn,lt=!1,Ht=[],hn=null,ti=null,Di=null,Rr=new Map,nn=new Map,Yi=[],Cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(n,i){switch(n){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nn.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&It(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Rg(n,i,a,c,d){switch(i){case"focusin":return hn=Ma(hn,n,i,a,c,d),!0;case"dragenter":return ti=Ma(ti,n,i,a,c,d),!0;case"mouseover":return Di=Ma(Di,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Rr.set(m,Ma(Rr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,nn.set(m,Ma(nn.get(m)||null,n,i,a,c,d)),!0}return!1}function $f(n){var i=ns(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=ei(a),i!==null){n.blockedOn=i,Mn(n.priority,function(){cn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Se=c,a.target.dispatchEvent(c),Se=null}else return i=Fa(a),i!==null&&It(i),n.blockedOn=a,!1;i.shift()}return!0}function qf(n,i,a){vo(n)&&a.delete(i)}function Ng(){lt=!1,hn!==null&&vo(hn)&&(hn=null),ti!==null&&vo(ti)&&(ti=null),Di!==null&&vo(Di)&&(Di=null),Rr.forEach(qf),nn.forEach(qf)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,lt||(lt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function wa(n){function i(d){return Ea(d,n)}if(0<Ht.length){Ea(Ht[0],n);for(var a=1;a<Ht.length;a++){var c=Ht[a];c.blockedOn===n&&(c.blockedOn=null)}}for(hn!==null&&Ea(hn,n),ti!==null&&Ea(ti,n),Di!==null&&Ea(Di,n),Rr.forEach(i),nn.forEach(i),a=0;a<Yi.length;a++)c=Yi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&Yi.shift()}var Ns=P.ReactCurrentBatchConfig,_o=!0;function Pg(n,i,a,c){var d=Ze,m=Ns.transition;Ns.transition=null;try{Ze=1,fc(n,i,a,c)}finally{Ze=d,Ns.transition=m}}function Ig(n,i,a,c){var d=Ze,m=Ns.transition;Ns.transition=null;try{Ze=4,fc(n,i,a,c)}finally{Ze=d,Ns.transition=m}}function fc(n,i,a,c){if(_o){var d=hc(n,i,a,c);if(d===null)Nc(n,i,c,yo,a),Yf(n,c);else if(Rg(d,n,i,a,c))c.stopPropagation();else if(Yf(n,c),i&4&&-1<Cg.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&mt(m),m=hc(n,i,a,c),m===null&&Nc(n,i,c,yo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var yo=null;function hc(n,i,a,c){if(yo=null,n=De(c),n=ns(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ei(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function Kf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ct()){case At:return 1;case b:return 4;case j:case Q:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Nr=null,pc=null,So=null;function Zf(){if(So)return So;var n,i=pc,a=i.length,c,d="value"in Nr?Nr.value:Nr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[m-c];c++);return So=d.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Eo(){return!0}function Jf(){return!1}function di(n){function i(a,c,d,m,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(m):m[z]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Eo:Jf,this.isPropagationStopped=Jf,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=di(Ps),ba=ue({},Ps,{view:0,detail:0}),Dg=di(ba),gc,xc,Ta,wo=ue({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(gc=n.screenX-Ta.screenX,xc=n.screenY-Ta.screenY):xc=gc=0,Ta=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),Qf=di(wo),Lg=ue({},wo,{dataTransfer:0}),Ug=di(Lg),Fg=ue({},ba,{relatedTarget:0}),vc=di(Fg),Og=ue({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=di(Og),Bg=ue({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zg=di(Bg),Vg=ue({},Ps,{data:0}),eh=di(Vg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jg[n])?!!i[n]:!1}function _c(){return Wg}var Xg=ue({},ba,{key:function(n){if(n.key){var i=Hg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Gg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yg=di(Xg),$g=ue({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=di($g),qg=ue({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),Kg=di(qg),Zg=ue({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=di(Zg),Qg=ue({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=di(Qg),tx=[9,13,27,32],yc=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var nx=f&&"TextEvent"in window&&!Aa,nh=f&&(!yc||Aa&&8<Aa&&11>=Aa),ih=" ",rh=!1;function sh(n,i){switch(n){case"keyup":return tx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ah(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function ix(n,i){switch(n){case"compositionend":return ah(i);case"keypress":return i.which!==32?null:(rh=!0,ih);case"textInput":return n=i.data,n===ih&&rh?null:n;default:return null}}function rx(n,i){if(Is)return n==="compositionend"||!yc&&sh(n,i)?(n=Zf(),So=pc=Nr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nh&&i.locale!=="ko"?null:i.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sx[n.type]:i==="textarea"}function lh(n,i,a,c){ye(c),i=Ro(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Ra=null;function ax(n){Th(n,0)}function bo(n){var i=Os(n);if(St(i))return n}function ox(n,i){if(n==="change")return i}var ch=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),Mc=typeof uh.oninput=="function"}Sc=Mc}else Sc=!1;ch=Sc&&(!document.documentMode||9<document.documentMode)}function dh(){Ca&&(Ca.detachEvent("onpropertychange",fh),Ra=Ca=null)}function fh(n){if(n.propertyName==="value"&&bo(Ra)){var i=[];lh(i,Ra,n,De(n)),yt(ax,i)}}function lx(n,i,a){n==="focusin"?(dh(),Ca=i,Ra=a,Ca.attachEvent("onpropertychange",fh)):n==="focusout"&&dh()}function cx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ra)}function ux(n,i){if(n==="click")return bo(i)}function dx(n,i){if(n==="input"||n==="change")return bo(i)}function fx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Li=typeof Object.is=="function"?Object.is:fx;function Na(n,i){if(Li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Li(n[d],i[d]))return!1}return!0}function hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ph(n,i){var a=hh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hh(a)}}function mh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?mh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gh(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=_t(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hx(n){var i=gh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&mh(a.ownerDocument.documentElement,a)){if(c!==null&&Ec(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=ph(a,m);var A=ph(a,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var px=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,wc=null,Pa=null,bc=!1;function xh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Ds==null||Ds!==_t(c)||(c=Ds,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=Ro(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Tc={},vh={};f&&(vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ao(n){if(Tc[n])return Tc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in vh)return Tc[n]=i[a];return n}var _h=Ao("animationend"),yh=Ao("animationiteration"),Sh=Ao("animationstart"),Mh=Ao("transitionend"),Eh=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){Eh.set(n,i),l(i,[n])}for(var Ac=0;Ac<wh.length;Ac++){var Cc=wh[Ac],mx=Cc.toLowerCase(),gx=Cc[0].toUpperCase()+Cc.slice(1);Pr(mx,"on"+gx)}Pr(_h,"onAnimationEnd"),Pr(yh,"onAnimationIteration"),Pr(Sh,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Mh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,$n(c,i,void 0,n),n.currentTarget=null}function Th(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var A=c.length-1;0<=A;A--){var z=c[A],q=z.instance,ge=z.currentTarget;if(z=z.listener,q!==m&&d.isPropagationStopped())break e;bh(d,z,ge),m=q}else for(A=0;A<c.length;A++){if(z=c[A],q=z.instance,ge=z.currentTarget,z=z.listener,q!==m&&d.isPropagationStopped())break e;bh(d,z,ge),m=q}}}if(In)throw n=_i,In=!1,_i=null,n}function on(n,i){var a=i[Fc];a===void 0&&(a=i[Fc]=new Set);var c=n+"__bubble";a.has(c)||(Ah(i,n,2,!1),a.add(c))}function Rc(n,i,a){var c=0;i&&(c|=4),Ah(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(xx.has(a)||Rc(a,!1,n),Rc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Rc("selectionchange",!1,i))}}function Ah(n,i,a,c){switch(Kf(i)){case 1:var d=Pg;break;case 4:d=Ig;break;default:d=fc}a=d.bind(null,i,a,n),d=void 0,!Kt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var z=c.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var q=A.tag;if((q===3||q===4)&&(q=A.stateNode.containerInfo,q===d||q.nodeType===8&&q.parentNode===d))return;A=A.return}for(;z!==null;){if(A=ns(z),A===null)return;if(q=A.tag,q===5||q===6){c=m=A;continue e}z=z.parentNode}}c=c.return}yt(function(){var ge=m,je=De(a),Xe=[];e:{var He=Eh.get(n);if(He!==void 0){var dt=mc,gt=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":dt=Yg;break;case"focusin":gt="focus",dt=vc;break;case"focusout":gt="blur",dt=vc;break;case"beforeblur":case"afterblur":dt=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Kg;break;case _h:case yh:case Sh:dt=kg;break;case Mh:dt=Jg;break;case"scroll":dt=Dg;break;case"wheel":dt=ex;break;case"copy":case"cut":case"paste":dt=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=th}var xt=(i&4)!==0,mn=!xt&&n==="scroll",fe=xt?He!==null?He+"Capture":null:He;xt=[];for(var ee=ge,he;ee!==null;){he=ee;var Ke=he.stateNode;if(he.tag===5&&Ke!==null&&(he=Ke,fe!==null&&(Ke=Jt(ee,fe),Ke!=null&&xt.push(La(ee,Ke,he)))),mn)break;ee=ee.return}0<xt.length&&(He=new dt(He,gt,null,a,je),Xe.push({event:He,listeners:xt}))}}if((i&7)===0){e:{if(He=n==="mouseover"||n==="pointerover",dt=n==="mouseout"||n==="pointerout",He&&a!==Se&&(gt=a.relatedTarget||a.fromElement)&&(ns(gt)||gt[cr]))break e;if((dt||He)&&(He=je.window===je?je:(He=je.ownerDocument)?He.defaultView||He.parentWindow:window,dt?(gt=a.relatedTarget||a.toElement,dt=ge,gt=gt?ns(gt):null,gt!==null&&(mn=An(gt),gt!==mn||gt.tag!==5&&gt.tag!==6)&&(gt=null)):(dt=null,gt=ge),dt!==gt)){if(xt=Qf,Ke="onMouseLeave",fe="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(xt=th,Ke="onPointerLeave",fe="onPointerEnter",ee="pointer"),mn=dt==null?He:Os(dt),he=gt==null?He:Os(gt),He=new xt(Ke,ee+"leave",dt,a,je),He.target=mn,He.relatedTarget=he,Ke=null,ns(je)===ge&&(xt=new xt(fe,ee+"enter",gt,a,je),xt.target=he,xt.relatedTarget=mn,Ke=xt),mn=Ke,dt&&gt)t:{for(xt=dt,fe=gt,ee=0,he=xt;he;he=Us(he))ee++;for(he=0,Ke=fe;Ke;Ke=Us(Ke))he++;for(;0<ee-he;)xt=Us(xt),ee--;for(;0<he-ee;)fe=Us(fe),he--;for(;ee--;){if(xt===fe||fe!==null&&xt===fe.alternate)break t;xt=Us(xt),fe=Us(fe)}xt=null}else xt=null;dt!==null&&Ch(Xe,He,dt,xt,!1),gt!==null&&mn!==null&&Ch(Xe,mn,gt,xt,!0)}}e:{if(He=ge?Os(ge):window,dt=He.nodeName&&He.nodeName.toLowerCase(),dt==="select"||dt==="input"&&He.type==="file")var vt=ox;else if(oh(He))if(ch)vt=dx;else{vt=cx;var Ct=lx}else(dt=He.nodeName)&&dt.toLowerCase()==="input"&&(He.type==="checkbox"||He.type==="radio")&&(vt=ux);if(vt&&(vt=vt(n,ge))){lh(Xe,vt,a,je);break e}Ct&&Ct(n,He,ge),n==="focusout"&&(Ct=He._wrapperState)&&Ct.controlled&&He.type==="number"&&jt(He,"number",He.value)}switch(Ct=ge?Os(ge):window,n){case"focusin":(oh(Ct)||Ct.contentEditable==="true")&&(Ds=Ct,wc=ge,Pa=null);break;case"focusout":Pa=wc=Ds=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,xh(Xe,a,je);break;case"selectionchange":if(px)break;case"keydown":case"keyup":xh(Xe,a,je)}var Rt;if(yc)e:{switch(n){case"compositionstart":var kt="onCompositionStart";break e;case"compositionend":kt="onCompositionEnd";break e;case"compositionupdate":kt="onCompositionUpdate";break e}kt=void 0}else Is?sh(n,a)&&(kt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(kt="onCompositionStart");kt&&(nh&&a.locale!=="ko"&&(Is||kt!=="onCompositionStart"?kt==="onCompositionEnd"&&Is&&(Rt=Zf()):(Nr=je,pc="value"in Nr?Nr.value:Nr.textContent,Is=!0)),Ct=Ro(ge,kt),0<Ct.length&&(kt=new eh(kt,n,null,a,je),Xe.push({event:kt,listeners:Ct}),Rt?kt.data=Rt:(Rt=ah(a),Rt!==null&&(kt.data=Rt)))),(Rt=nx?ix(n,a):rx(n,a))&&(ge=Ro(ge,"onBeforeInput"),0<ge.length&&(je=new eh("onBeforeInput","beforeinput",null,a,je),Xe.push({event:je,listeners:ge}),je.data=Rt))}Th(Xe,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Jt(n,a),m!=null&&c.unshift(La(n,m,d)),m=Jt(n,i),m!=null&&c.push(La(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ch(n,i,a,c,d){for(var m=i._reactName,A=[];a!==null&&a!==c;){var z=a,q=z.alternate,ge=z.stateNode;if(q!==null&&q===c)break;z.tag===5&&ge!==null&&(z=ge,d?(q=Jt(a,m),q!=null&&A.unshift(La(a,q,z))):d||(q=Jt(a,m),q!=null&&A.push(La(a,q,z)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var vx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function Rh(n){return(typeof n=="string"?n:""+n).replace(vx,`
`).replace(_x,"")}function No(n,i,a){if(i=Rh(i),Rh(n)!==i&&a)throw Error(t(425))}function Po(){}var Pc=null,Ic=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(n){return Nh.resolve(null).then(n).catch(Mx)}:Lc;function Mx(n){setTimeout(function(){throw n})}function Uc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),$i="__reactFiber$"+Fs,Ua="__reactProps$"+Fs,cr="__reactContainer$"+Fs,Fc="__reactEvents$"+Fs,Ex="__reactListeners$"+Fs,wx="__reactHandles$"+Fs;function ns(n){var i=n[$i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[$i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ph(n);n!==null;){if(a=n[$i])return a;n=Ph(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[$i]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ua]||null}var Oc=[],ks=-1;function Dr(n){return{current:n}}function ln(n){0>ks||(n.current=Oc[ks],Oc[ks]=null,ks--)}function an(n,i){ks++,Oc[ks]=n.current,n.current=i}var Lr={},kn=Dr(Lr),ni=Dr(!1),is=Lr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ii(n){return n=n.childContextTypes,n!=null}function Do(){ln(ni),ln(kn)}function Ih(n,i,a){if(kn.current!==Lr)throw Error(t(168));an(kn,i),an(ni,a)}function Dh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ae(n)||"Unknown",d));return ue({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,is=kn.current,an(kn,n),an(ni,ni.current),!0}function Lh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Dh(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,ln(ni),ln(kn),an(kn,n)):ln(ni),an(ni,a)}var ur=null,Uo=!1,kc=!1;function Uh(n){ur===null?ur=[n]:ur.push(n)}function bx(n){Uo=!0,Uh(n)}function Ur(){if(!kc&&ur!==null){kc=!0;var n=0,i=Ze;try{var a=ur;for(Ze=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,Uo=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),lr(At,Ur),d}finally{Ze=i,kc=!1}}return null}var zs=[],Vs=0,Fo=null,Oo=0,Si=[],Mi=0,rs=null,dr=1,fr="";function ss(n,i){zs[Vs++]=Oo,zs[Vs++]=Fo,Fo=n,Oo=i}function Fh(n,i,a){Si[Mi++]=dr,Si[Mi++]=fr,Si[Mi++]=rs,rs=n;var c=dr;n=fr;var d=32-Oe(c)-1;c&=~(1<<d),a+=1;var m=32-Oe(i)+d;if(30<m){var A=d-d%5;m=(c&(1<<A)-1).toString(32),c>>=A,d-=A,dr=1<<32-Oe(i)+d|a<<d|c,fr=m+n}else dr=1<<m|a<<d|c,fr=n}function Bc(n){n.return!==null&&(ss(n,1),Fh(n,1,0))}function zc(n){for(;n===Fo;)Fo=zs[--Vs],zs[Vs]=null,Oo=zs[--Vs],zs[Vs]=null;for(;n===rs;)rs=Si[--Mi],Si[Mi]=null,fr=Si[--Mi],Si[Mi]=null,dr=Si[--Mi],Si[Mi]=null}var fi=null,hi=null,un=!1,Ui=null;function Oh(n,i){var a=Ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(un){var i=hi;if(i){var a=i;if(!kh(n,i)){if(Vc(n))throw Error(t(418));i=Ir(a.nextSibling);var c=fi;i&&kh(n,i)?Oh(c,a):(n.flags=n.flags&-4097|2,un=!1,fi=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,un=!1,fi=n}}}function Bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function ko(n){if(n!==fi)return!1;if(!un)return Bh(n),un=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=hi)){if(Vc(n))throw zh(),Error(t(418));for(;i;)Oh(n,i),i=Ir(i.nextSibling)}if(Bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Ir(n.stateNode.nextSibling):null;return!0}function zh(){for(var n=hi;n;)n=Ir(n.nextSibling)}function Hs(){hi=fi=null,un=!1}function Gc(n){Ui===null?Ui=[n]:Ui.push(n)}var Tx=P.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var z=d.refs;A===null?delete z[m]:z[m]=A},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Vh(n){var i=n._init;return i(n._payload)}function Hh(n){function i(fe,ee){if(n){var he=fe.deletions;he===null?(fe.deletions=[ee],fe.flags|=16):he.push(ee)}}function a(fe,ee){if(!n)return null;for(;ee!==null;)i(fe,ee),ee=ee.sibling;return null}function c(fe,ee){for(fe=new Map;ee!==null;)ee.key!==null?fe.set(ee.key,ee):fe.set(ee.index,ee),ee=ee.sibling;return fe}function d(fe,ee){return fe=Gr(fe,ee),fe.index=0,fe.sibling=null,fe}function m(fe,ee,he){return fe.index=he,n?(he=fe.alternate,he!==null?(he=he.index,he<ee?(fe.flags|=2,ee):he):(fe.flags|=2,ee)):(fe.flags|=1048576,ee)}function A(fe){return n&&fe.alternate===null&&(fe.flags|=2),fe}function z(fe,ee,he,Ke){return ee===null||ee.tag!==6?(ee=Lu(he,fe.mode,Ke),ee.return=fe,ee):(ee=d(ee,he),ee.return=fe,ee)}function q(fe,ee,he,Ke){var vt=he.type;return vt===O?je(fe,ee,he.props.children,Ke,he.key):ee!==null&&(ee.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===oe&&Vh(vt)===ee.type)?(Ke=d(ee,he.props),Ke.ref=Oa(fe,ee,he),Ke.return=fe,Ke):(Ke=cl(he.type,he.key,he.props,null,fe.mode,Ke),Ke.ref=Oa(fe,ee,he),Ke.return=fe,Ke)}function ge(fe,ee,he,Ke){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=Uu(he,fe.mode,Ke),ee.return=fe,ee):(ee=d(ee,he.children||[]),ee.return=fe,ee)}function je(fe,ee,he,Ke,vt){return ee===null||ee.tag!==7?(ee=hs(he,fe.mode,Ke,vt),ee.return=fe,ee):(ee=d(ee,he),ee.return=fe,ee)}function Xe(fe,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=Lu(""+ee,fe.mode,he),ee.return=fe,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return he=cl(ee.type,ee.key,ee.props,null,fe.mode,he),he.ref=Oa(fe,null,ee),he.return=fe,he;case I:return ee=Uu(ee,fe.mode,he),ee.return=fe,ee;case oe:var Ke=ee._init;return Xe(fe,Ke(ee._payload),he)}if($(ee)||pe(ee))return ee=hs(ee,fe.mode,he,null),ee.return=fe,ee;Bo(fe,ee)}return null}function He(fe,ee,he,Ke){var vt=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return vt!==null?null:z(fe,ee,""+he,Ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case V:return he.key===vt?q(fe,ee,he,Ke):null;case I:return he.key===vt?ge(fe,ee,he,Ke):null;case oe:return vt=he._init,He(fe,ee,vt(he._payload),Ke)}if($(he)||pe(he))return vt!==null?null:je(fe,ee,he,Ke,null);Bo(fe,he)}return null}function dt(fe,ee,he,Ke,vt){if(typeof Ke=="string"&&Ke!==""||typeof Ke=="number")return fe=fe.get(he)||null,z(ee,fe,""+Ke,vt);if(typeof Ke=="object"&&Ke!==null){switch(Ke.$$typeof){case V:return fe=fe.get(Ke.key===null?he:Ke.key)||null,q(ee,fe,Ke,vt);case I:return fe=fe.get(Ke.key===null?he:Ke.key)||null,ge(ee,fe,Ke,vt);case oe:var Ct=Ke._init;return dt(fe,ee,he,Ct(Ke._payload),vt)}if($(Ke)||pe(Ke))return fe=fe.get(he)||null,je(ee,fe,Ke,vt,null);Bo(ee,Ke)}return null}function gt(fe,ee,he,Ke){for(var vt=null,Ct=null,Rt=ee,kt=ee=0,Nn=null;Rt!==null&&kt<he.length;kt++){Rt.index>kt?(Nn=Rt,Rt=null):Nn=Rt.sibling;var tn=He(fe,Rt,he[kt],Ke);if(tn===null){Rt===null&&(Rt=Nn);break}n&&Rt&&tn.alternate===null&&i(fe,Rt),ee=m(tn,ee,kt),Ct===null?vt=tn:Ct.sibling=tn,Ct=tn,Rt=Nn}if(kt===he.length)return a(fe,Rt),un&&ss(fe,kt),vt;if(Rt===null){for(;kt<he.length;kt++)Rt=Xe(fe,he[kt],Ke),Rt!==null&&(ee=m(Rt,ee,kt),Ct===null?vt=Rt:Ct.sibling=Rt,Ct=Rt);return un&&ss(fe,kt),vt}for(Rt=c(fe,Rt);kt<he.length;kt++)Nn=dt(Rt,fe,kt,he[kt],Ke),Nn!==null&&(n&&Nn.alternate!==null&&Rt.delete(Nn.key===null?kt:Nn.key),ee=m(Nn,ee,kt),Ct===null?vt=Nn:Ct.sibling=Nn,Ct=Nn);return n&&Rt.forEach(function(jr){return i(fe,jr)}),un&&ss(fe,kt),vt}function xt(fe,ee,he,Ke){var vt=pe(he);if(typeof vt!="function")throw Error(t(150));if(he=vt.call(he),he==null)throw Error(t(151));for(var Ct=vt=null,Rt=ee,kt=ee=0,Nn=null,tn=he.next();Rt!==null&&!tn.done;kt++,tn=he.next()){Rt.index>kt?(Nn=Rt,Rt=null):Nn=Rt.sibling;var jr=He(fe,Rt,tn.value,Ke);if(jr===null){Rt===null&&(Rt=Nn);break}n&&Rt&&jr.alternate===null&&i(fe,Rt),ee=m(jr,ee,kt),Ct===null?vt=jr:Ct.sibling=jr,Ct=jr,Rt=Nn}if(tn.done)return a(fe,Rt),un&&ss(fe,kt),vt;if(Rt===null){for(;!tn.done;kt++,tn=he.next())tn=Xe(fe,tn.value,Ke),tn!==null&&(ee=m(tn,ee,kt),Ct===null?vt=tn:Ct.sibling=tn,Ct=tn);return un&&ss(fe,kt),vt}for(Rt=c(fe,Rt);!tn.done;kt++,tn=he.next())tn=dt(Rt,fe,kt,tn.value,Ke),tn!==null&&(n&&tn.alternate!==null&&Rt.delete(tn.key===null?kt:tn.key),ee=m(tn,ee,kt),Ct===null?vt=tn:Ct.sibling=tn,Ct=tn);return n&&Rt.forEach(function(sv){return i(fe,sv)}),un&&ss(fe,kt),vt}function mn(fe,ee,he,Ke){if(typeof he=="object"&&he!==null&&he.type===O&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case V:e:{for(var vt=he.key,Ct=ee;Ct!==null;){if(Ct.key===vt){if(vt=he.type,vt===O){if(Ct.tag===7){a(fe,Ct.sibling),ee=d(Ct,he.props.children),ee.return=fe,fe=ee;break e}}else if(Ct.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===oe&&Vh(vt)===Ct.type){a(fe,Ct.sibling),ee=d(Ct,he.props),ee.ref=Oa(fe,Ct,he),ee.return=fe,fe=ee;break e}a(fe,Ct);break}else i(fe,Ct);Ct=Ct.sibling}he.type===O?(ee=hs(he.props.children,fe.mode,Ke,he.key),ee.return=fe,fe=ee):(Ke=cl(he.type,he.key,he.props,null,fe.mode,Ke),Ke.ref=Oa(fe,ee,he),Ke.return=fe,fe=Ke)}return A(fe);case I:e:{for(Ct=he.key;ee!==null;){if(ee.key===Ct)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){a(fe,ee.sibling),ee=d(ee,he.children||[]),ee.return=fe,fe=ee;break e}else{a(fe,ee);break}else i(fe,ee);ee=ee.sibling}ee=Uu(he,fe.mode,Ke),ee.return=fe,fe=ee}return A(fe);case oe:return Ct=he._init,mn(fe,ee,Ct(he._payload),Ke)}if($(he))return gt(fe,ee,he,Ke);if(pe(he))return xt(fe,ee,he,Ke);Bo(fe,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ee!==null&&ee.tag===6?(a(fe,ee.sibling),ee=d(ee,he),ee.return=fe,fe=ee):(a(fe,ee),ee=Lu(he,fe.mode,Ke),ee.return=fe,fe=ee),A(fe)):a(fe,ee)}return mn}var Gs=Hh(!0),Gh=Hh(!1),zo=Dr(null),Vo=null,js=null,jc=null;function Wc(){jc=js=Vo=null}function Xc(n){var i=zo.current;ln(zo),n._currentValue=i}function Yc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Vo=n,jc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function Ei(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Vo===null)throw Error(t(308));js=n,Vo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var as=null;function $c(n){as===null?as=[n]:as.push(n)}function jh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,$c(i)):(a.next=d.next,d.next=a),i.interleaved=a,hr(n,c)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Qt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hr(n,a)}return d=c.interleaved,d===null?(i.next=i,$c(c)):(i.next=d.next,d.next=i),c.interleaved=i,hr(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ht(n,a)}}function Xh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=A:m=m.next=A,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Go(n,i,a,c){var d=n.updateQueue;Fr=!1;var m=d.firstBaseUpdate,A=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var q=z,ge=q.next;q.next=null,A===null?m=ge:A.next=ge,A=q;var je=n.alternate;je!==null&&(je=je.updateQueue,z=je.lastBaseUpdate,z!==A&&(z===null?je.firstBaseUpdate=ge:z.next=ge,je.lastBaseUpdate=q))}if(m!==null){var Xe=d.baseState;A=0,je=ge=q=null,z=m;do{var He=z.lane,dt=z.eventTime;if((c&He)===He){je!==null&&(je=je.next={eventTime:dt,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var gt=n,xt=z;switch(He=i,dt=a,xt.tag){case 1:if(gt=xt.payload,typeof gt=="function"){Xe=gt.call(dt,Xe,He);break e}Xe=gt;break e;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=xt.payload,He=typeof gt=="function"?gt.call(dt,Xe,He):gt,He==null)break e;Xe=ue({},Xe,He);break e;case 2:Fr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,He=d.effects,He===null?d.effects=[z]:He.push(z))}else dt={eventTime:dt,lane:He,tag:z.tag,payload:z.payload,callback:z.callback,next:null},je===null?(ge=je=dt,q=Xe):je=je.next=dt,A|=He;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;He=z,z=He.next,He.next=null,d.lastBaseUpdate=He,d.shared.pending=null}}while(!0);if(je===null&&(q=Xe),d.baseState=q,d.firstBaseUpdate=ge,d.lastBaseUpdate=je,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);cs|=A,n.lanes=A,n.memoizedState=Xe}}function Yh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},qi=Dr(ka),Ba=Dr(ka),za=Dr(ka);function os(n){if(n===ka)throw Error(t(174));return n}function Kc(n,i){switch(an(za,i),an(Ba,n),an(qi,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}ln(qi),an(qi,i)}function Xs(){ln(qi),ln(Ba),ln(za)}function $h(n){os(za.current);var i=os(qi.current),a=E(i,n.type);i!==a&&(an(Ba,n),an(qi,a))}function Zc(n){Ba.current===n&&(ln(qi),ln(Ba))}var dn=Dr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Wo=P.ReactCurrentDispatcher,eu=P.ReactCurrentBatchConfig,ls=0,fn=null,En=null,Cn=null,Xo=!1,Va=!1,Ha=0,Ax=0;function Bn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Li(n[a],i[a]))return!1;return!0}function nu(n,i,a,c,d,m){if(ls=m,fn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?Px:Ix,n=a(c,d),Va){m=0;do{if(Va=!1,Ha=0,25<=m)throw Error(t(301));m+=1,Cn=En=null,i.updateQueue=null,Wo.current=Dx,n=a(c,d)}while(Va)}if(Wo.current=qo,i=En!==null&&En.next!==null,ls=0,Cn=En=fn=null,Xo=!1,i)throw Error(t(300));return n}function iu(){var n=Ha!==0;return Ha=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?fn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function wi(){if(En===null){var n=fn.alternate;n=n!==null?n.memoizedState:null}else n=En.next;var i=Cn===null?fn.memoizedState:Cn.next;if(i!==null)Cn=i,En=n;else{if(n===null)throw Error(t(310));En=n,n={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Cn===null?fn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Ga(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=En,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var A=d.next;d.next=m.next,m.next=A}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var z=A=null,q=null,ge=m;do{var je=ge.lane;if((ls&je)===je)q!==null&&(q=q.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var Xe={lane:je,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};q===null?(z=q=Xe,A=c):q=q.next=Xe,fn.lanes|=je,cs|=je}ge=ge.next}while(ge!==null&&ge!==m);q===null?A=c:q.next=z,Li(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,fn.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function su(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do m=n(m,A.action),A=A.next;while(A!==d);Li(m,i.memoizedState)||(ri=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function qh(){}function Kh(n,i){var a=fn,c=wi(),d=i(),m=!Li(c.memoizedState,d);if(m&&(c.memoizedState=d,ri=!0),c=c.queue,au(Qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,ja(9,Jh.bind(null,a,c,d,i),void 0,null),Rn===null)throw Error(t(349));(ls&30)!==0||Zh(a,i,d)}return d}function Zh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=fn.updateQueue,i===null?(i={lastEffect:null,stores:null},fn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Jh(n,i,a,c){i.value=a,i.getSnapshot=c,ep(i)&&tp(n)}function Qh(n,i,a){return a(function(){ep(i)&&tp(n)})}function ep(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Li(n,a)}catch{return!0}}function tp(n){var i=hr(n,1);i!==null&&Bi(i,n,1,-1)}function np(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Nx.bind(null,fn,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=fn.updateQueue,i===null?(i={lastEffect:null,stores:null},fn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ip(){return wi().memoizedState}function Yo(n,i,a,c){var d=Ki();fn.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var d=wi();c=c===void 0?null:c;var m=void 0;if(En!==null){var A=En.memoizedState;if(m=A.destroy,c!==null&&tu(c,A.deps)){d.memoizedState=ja(i,a,m,c);return}}fn.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function rp(n,i){return Yo(8390656,8,n,i)}function au(n,i){return $o(2048,8,n,i)}function sp(n,i){return $o(4,2,n,i)}function ap(n,i){return $o(4,4,n,i)}function op(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lp(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,op.bind(null,i,n),a)}function ou(){}function cp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function up(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function dp(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(Li(a,i)||(a=ce(),fn.lanes|=a,cs|=a,n.baseState=!0),i)}function Cx(n,i){var a=Ze;Ze=a!==0&&4>a?a:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{Ze=a,eu.transition=c}}function fp(){return wi().memoizedState}function Rx(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},hp(n))pp(i,a);else if(a=jh(n,i,a,c),a!==null){var d=Kn();Bi(a,n,c,d),mp(a,i,c)}}function Nx(n,i,a){var c=Vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(hp(n))pp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,z=m(A,a);if(d.hasEagerState=!0,d.eagerState=z,Li(z,A)){var q=i.interleaved;q===null?(d.next=d,$c(i)):(d.next=q.next,q.next=d),i.interleaved=d;return}}catch{}finally{}a=jh(n,i,d,c),a!==null&&(d=Kn(),Bi(a,n,c,d),mp(a,i,c))}}function hp(n){var i=n.alternate;return n===fn||i!==null&&i===fn}function pp(n,i){Va=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function mp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ht(n,a)}}var qo={readContext:Ei,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Px={readContext:Ei,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Ei,useEffect:rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,op.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Rx.bind(null,fn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:np,useDebugValue:ou,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=np(!1),i=n[0];return n=Cx.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=fn,d=Ki();if(un){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Rn===null)throw Error(t(349));(ls&30)!==0||Zh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,rp(Qh.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,Jh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ki(),i=Rn.identifierPrefix;if(un){var a=fr,c=dr;a=(c&~(1<<32-Oe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ax++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ix={readContext:Ei,useCallback:cp,useContext:Ei,useEffect:au,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:ap,useMemo:up,useReducer:ru,useRef:ip,useState:function(){return ru(Ga)},useDebugValue:ou,useDeferredValue:function(n){var i=wi();return dp(i,En.memoizedState,n)},useTransition:function(){var n=ru(Ga)[0],i=wi().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:Kh,useId:fp,unstable_isNewReconciler:!1},Dx={readContext:Ei,useCallback:cp,useContext:Ei,useEffect:au,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:ap,useMemo:up,useReducer:su,useRef:ip,useState:function(){return su(Ga)},useDebugValue:ou,useDeferredValue:function(n){var i=wi();return En===null?i.memoizedState=n:dp(i,En.memoizedState,n)},useTransition:function(){var n=su(Ga)[0],i=wi().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:Kh,useId:fp,unstable_isNewReconciler:!1};function Fi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=Vr(n),m=pr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Bi(i,n,d,c),Ho(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kn(),d=Vr(n),m=pr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Bi(i,n,d,c),Ho(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kn(),c=Vr(n),d=pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Or(n,d,c),i!==null&&(Bi(i,n,c,a),Ho(i,n,c))}};function gp(n,i,a,c,d,m,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,A):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function xp(n,i,a){var c=!1,d=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=Ei(m):(d=ii(i)?is:kn.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function vp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function cu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},qc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Ei(m):(m=ii(i)?is:kn.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ko.enqueueReplaceState(d,d.state,null),Go(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function _p(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,Tu=c),du(n,i)},a}function yp(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){du(n,i),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Sp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Lx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=$x.bind(null,n,i,a),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ep(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ux=P.ReactCurrentOwner,ri=!1;function qn(n,i,a,c){i.child=n===null?Gh(i,null,a,c):Gs(i,n.child,a,c)}function wp(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=nu(n,i,a,c,m,d),a=iu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(un&&a&&Bc(i),i.flags|=1,qn(n,i,c,d),i.child)}function bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Tp(n,i,m,c,d)):(n=cl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var A=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(A,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Gr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Tp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,mr(n,i,d)}return fu(n,i,a,c,d)}function Ap(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},an(qs,pi),pi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,an(qs,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,an(qs,pi),pi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,an(qs,pi),pi|=c;return qn(n,i,d,a),i.child}function Cp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,a,c,d){var m=ii(a)?is:kn.current;return m=Bs(i,m),Ws(i,d),a=nu(n,i,a,c,m,d),c=iu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(un&&c&&Bc(i),i.flags|=1,qn(n,i,a,d),i.child)}function Rp(n,i,a,c,d){if(ii(a)){var m=!0;Lo(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Jo(n,i),xp(i,a,c),cu(i,a,c,d),c=!0;else if(n===null){var A=i.stateNode,z=i.memoizedProps;A.props=z;var q=A.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=Ei(ge):(ge=ii(a)?is:kn.current,ge=Bs(i,ge));var je=a.getDerivedStateFromProps,Xe=typeof je=="function"||typeof A.getSnapshotBeforeUpdate=="function";Xe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==c||q!==ge)&&vp(i,A,c,ge),Fr=!1;var He=i.memoizedState;A.state=He,Go(i,c,A,d),q=i.memoizedState,z!==c||He!==q||ni.current||Fr?(typeof je=="function"&&(lu(i,a,je,c),q=i.memoizedState),(z=Fr||gp(i,a,z,c,He,q,ge))?(Xe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),A.props=c,A.state=q,A.context=ge,c=z):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Wh(n,i),z=i.memoizedProps,ge=i.type===i.elementType?z:Fi(i.type,z),A.props=ge,Xe=i.pendingProps,He=A.context,q=a.contextType,typeof q=="object"&&q!==null?q=Ei(q):(q=ii(a)?is:kn.current,q=Bs(i,q));var dt=a.getDerivedStateFromProps;(je=typeof dt=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Xe||He!==q)&&vp(i,A,c,q),Fr=!1,He=i.memoizedState,A.state=He,Go(i,c,A,d);var gt=i.memoizedState;z!==Xe||He!==gt||ni.current||Fr?(typeof dt=="function"&&(lu(i,a,dt,c),gt=i.memoizedState),(ge=Fr||gp(i,a,ge,c,He,gt,q)||!1)?(je||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,gt,q),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,gt,q)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&He===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&He===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=gt),A.props=c,A.state=gt,A.context=q,c=ge):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&He===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&He===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,a,c,m,d)}function hu(n,i,a,c,d,m){Cp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&Lh(i,a,!1),mr(n,i,m);c=i.stateNode,Ux.current=i;var z=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,z,m)):qn(n,i,z,m),i.memoizedState=c.state,d&&Lh(i,a,!0),i.child}function Np(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),Kc(n,i.containerInfo)}function Pp(n,i,a,c,d){return Hs(),Gc(d),i.flags|=256,qn(n,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,a){var c=i.pendingProps,d=dn.current,m=!1,A=(i.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(d&2)!==0),z?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),an(dn,d&1),n===null)return Hc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,m?(c=i.mode,m=i.child,A={mode:"hidden",children:A},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=ul(A,c,0,null),n=hs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=mu(a),i.memoizedState=pu,n):gu(i,A));if(d=n.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return Fx(n,i,A,c,z,d,a);if(m){m=c.fallback,A=i.mode,d=n.child,z=d.sibling;var q={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=Gr(d,q),c.subtreeFlags=d.subtreeFlags&14680064),z!==null?m=Gr(z,m):(m=hs(m,A,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,A=n.child.memoizedState,A=A===null?mu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=n.childLanes&~a,i.memoizedState=pu,c}return m=n.child,n=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&Gc(c),Gs(i,n.child,null,a),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fx(n,i,a,c,d,m,A){if(a)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),Zo(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ul({mode:"visible",children:c.children},d,0,null),m=hs(m,d,A,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,A),i.child.memoizedState=mu(A),i.memoizedState=pu,m);if((i.mode&1)===0)return Zo(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;return c=z,m=Error(t(419)),c=uu(m,c,void 0),Zo(n,i,A,c)}if(z=(A&n.childLanes)!==0,ri||z){if(c=Rn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Bi(c,n,d,-1))}return Iu(),c=uu(Error(t(421))),Zo(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=qx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,hi=Ir(d.nextSibling),fi=i,un=!0,Ui=null,n!==null&&(Si[Mi++]=dr,Si[Mi++]=fr,Si[Mi++]=rs,dr=n.id,fr=n.overflow,rs=i),i=gu(i,c.children),i.flags|=4096,i)}function Dp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Yc(n.return,i,a)}function xu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Lp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qn(n,i,c.children,a),c=dn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,i);else if(n.tag===19)Dp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(an(dn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),xu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xu(i,!0,a,null,m);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ox(n,i,a){switch(i.tag){case 3:Np(i),Hs();break;case 5:$h(i);break;case 1:ii(i.type)&&Lo(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;an(zo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(an(dn,dn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ip(n,i,a):(an(dn,dn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);an(dn,dn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),an(dn,dn.current),c)break;return null;case 22:case 23:return i.lanes=0,Ap(n,i,a)}return mr(n,i,a)}var Up,vu,Fp,Op;Up=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},Fp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(qi.current);var m=null;switch(a){case"input":d=Bt(n,d),c=Bt(n,c),m=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":d=Mt(n,d),c=Mt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}nt(a,c);var A;a=null;for(ge in d)if(!c.hasOwnProperty(ge)&&d.hasOwnProperty(ge)&&d[ge]!=null)if(ge==="style"){var z=d[ge];for(A in z)z.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?m||(m=[]):(m=m||[]).push(ge,null));for(ge in c){var q=c[ge];if(z=d!=null?d[ge]:void 0,c.hasOwnProperty(ge)&&q!==z&&(q!=null||z!=null))if(ge==="style")if(z){for(A in z)!z.hasOwnProperty(A)||q&&q.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in q)q.hasOwnProperty(A)&&z[A]!==q[A]&&(a||(a={}),a[A]=q[A])}else a||(m||(m=[]),m.push(ge,a)),a=q;else ge==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,z=z?z.__html:void 0,q!=null&&z!==q&&(m=m||[]).push(ge,q)):ge==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(ge,""+q):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(q!=null&&ge==="onScroll"&&on("scroll",n),m||z===q||(m=[])):(m=m||[]).push(ge,q))}a&&(m=m||[]).push("style",a);var ge=m;(i.updateQueue=ge)&&(i.flags|=4)}},Op=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!un)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function kx(n,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(i),null;case 1:return ii(i.type)&&Do(),zn(i),null;case 3:return c=i.stateNode,Xs(),ln(ni),ln(kn),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ui!==null&&(Ru(Ui),Ui=null))),vu(n,i),zn(i),null;case 5:Zc(i);var d=os(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Fp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return zn(i),null}if(n=os(qi.current),ko(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[$i]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":on("cancel",c),on("close",c);break;case"iframe":case"object":case"embed":on("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)on(Ia[d],c);break;case"source":on("error",c);break;case"img":case"image":case"link":on("error",c),on("load",c);break;case"details":on("toggle",c);break;case"input":$t(c,m),on("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},on("invalid",c);break;case"textarea":Tt(c,m),on("invalid",c)}nt(a,m),d=null;for(var A in m)if(m.hasOwnProperty(A)){var z=m[A];A==="children"?typeof z=="string"?c.textContent!==z&&(m.suppressHydrationWarning!==!0&&No(c.textContent,z,n),d=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(m.suppressHydrationWarning!==!0&&No(c.textContent,z,n),d=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&on("scroll",c)}switch(a){case"input":ft(c),Nt(c,m,!0);break;case"textarea":ft(c),zt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Po)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[$i]=i,n[Ua]=c,Up(n,i,!1,!1),i.stateNode=n;e:{switch(A=$e(a,c),a){case"dialog":on("cancel",n),on("close",n),d=c;break;case"iframe":case"object":case"embed":on("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)on(Ia[d],n);d=c;break;case"source":on("error",n),d=c;break;case"img":case"image":case"link":on("error",n),on("load",n),d=c;break;case"details":on("toggle",n),d=c;break;case"input":$t(n,c),d=Bt(n,c),on("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),on("invalid",n);break;case"textarea":Tt(n,c),d=Mt(n,c),on("invalid",n);break;default:d=c}nt(a,d),z=d;for(m in z)if(z.hasOwnProperty(m)){var q=z[m];m==="style"?we(n,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Me(n,q)):m==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&Ne(n,q):typeof q=="number"&&Ne(n,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?q!=null&&m==="onScroll"&&on("scroll",n):q!=null&&R(n,m,q,A))}switch(a){case"input":ft(n),Nt(n,c,!1);break;case"textarea":ft(n),zt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Lt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Lt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return zn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(za.current),os(qi.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[$i]=i,(m=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$i]=i,i.stateNode=c}return zn(i),null;case 13:if(ln(dn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zh(),Hs(),i.flags|=98560,m=!1;else if(m=ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[$i]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;zn(i),m=!1}else Ui!==null&&(Ru(Ui),Ui=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(dn.current&1)!==0?wn===0&&(wn=3):Iu())),i.updateQueue!==null&&(i.flags|=4),zn(i),null);case 4:return Xs(),vu(n,i),n===null&&Da(i.stateNode.containerInfo),zn(i),null;case 10:return Xc(i.type._context),zn(i),null;case 17:return ii(i.type)&&Do(),zn(i),null;case 19:if(ln(dn),m=i.memoizedState,m===null)return zn(i),null;if(c=(i.flags&128)!==0,A=m.rendering,A===null)if(c)Wa(m,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=jo(n),A!==null){for(i.flags|=128,Wa(m,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,n=A.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return an(dn,dn.current&1|2),i.child}n=n.sibling}m.tail!==null&&be()>Ks&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=jo(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!un)return zn(i),null}else 2*be()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(a=m.last,a!==null?a.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=be(),i.sibling=null,a=dn.current,an(dn,c?a&1|2:a&1),i):(zn(i),null);case 22:case 23:return Pu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(zn(i),i.subtreeFlags&6&&(i.flags|=8192)):zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Bx(n,i){switch(zc(i),i.tag){case 1:return ii(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),ln(ni),ln(kn),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(ln(dn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ln(dn),null;case 4:return Xs(),null;case 10:return Xc(i.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Qo=!1,Vn=!1,zx=typeof WeakSet=="function"?WeakSet:Set,pt=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function _u(n,i,a){try{a()}catch(c){pn(n,i,c)}}var kp=!1;function Vx(n,i){if(Pc=_o,n=gh(),Ec(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var A=0,z=-1,q=-1,ge=0,je=0,Xe=n,He=null;t:for(;;){for(var dt;Xe!==a||d!==0&&Xe.nodeType!==3||(z=A+d),Xe!==m||c!==0&&Xe.nodeType!==3||(q=A+c),Xe.nodeType===3&&(A+=Xe.nodeValue.length),(dt=Xe.firstChild)!==null;)He=Xe,Xe=dt;for(;;){if(Xe===n)break t;if(He===a&&++ge===d&&(z=A),He===m&&++je===c&&(q=A),(dt=Xe.nextSibling)!==null)break;Xe=He,He=Xe.parentNode}Xe=dt}a=z===-1||q===-1?null:{start:z,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},_o=!1,pt=i;pt!==null;)if(i=pt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,pt=n;else for(;pt!==null;){i=pt;try{var gt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(gt!==null){var xt=gt.memoizedProps,mn=gt.memoizedState,fe=i.stateNode,ee=fe.getSnapshotBeforeUpdate(i.elementType===i.type?xt:Fi(i.type,xt),mn);fe.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ke){pn(i,i.return,Ke)}if(n=i.sibling,n!==null){n.return=i.return,pt=n;break}pt=i.return}return gt=kp,kp=!1,gt}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&_u(i,a,m)}d=d.next}while(d!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Bp(n){var i=n.alternate;i!==null&&(n.alternate=null,Bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$i],delete i[Ua],delete i[Fc],delete i[Ex],delete i[wx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function Vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}function Mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,a),n=n.sibling;n!==null;)Mu(n,i,a),n=n.sibling}var Dn=null,Oi=!1;function kr(n,i,a){for(a=a.child;a!==null;)Hp(n,i,a),a=a.sibling}function Hp(n,i,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:Vn||$s(a,i);case 6:var c=Dn,d=Oi;Dn=null,kr(n,i,a),Dn=c,Oi=d,Dn!==null&&(Oi?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(Oi?(n=Dn,a=a.stateNode,n.nodeType===8?Uc(n.parentNode,a):n.nodeType===1&&Uc(n,a),wa(n)):Uc(Dn,a.stateNode));break;case 4:c=Dn,d=Oi,Dn=a.stateNode.containerInfo,Oi=!0,kr(n,i,a),Dn=c,Oi=d;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&_u(a,i,A),d=d.next}while(d!==c)}kr(n,i,a);break;case 1:if(!Vn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){pn(a,i,z)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,kr(n,i,a),Vn=c):kr(n,i,a);break;default:kr(n,i,a)}}function Gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new zx),i.forEach(function(c){var d=Kx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function ki(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,A=i,z=A;e:for(;z!==null;){switch(z.tag){case 5:Dn=z.stateNode,Oi=!1;break e;case 3:Dn=z.stateNode.containerInfo,Oi=!0;break e;case 4:Dn=z.stateNode.containerInfo,Oi=!0;break e}z=z.return}if(Dn===null)throw Error(t(160));Hp(m,A,d),Dn=null,Oi=!1;var q=d.alternate;q!==null&&(q.return=null),d.return=null}catch(ge){pn(d,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,n),i=i.sibling}function jp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ki(i,n),Zi(n),c&4){try{Xa(3,n,n.return),el(3,n)}catch(xt){pn(n,n.return,xt)}try{Xa(5,n,n.return)}catch(xt){pn(n,n.return,xt)}}break;case 1:ki(i,n),Zi(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(ki(i,n),Zi(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Ne(d,"")}catch(xt){pn(n,n.return,xt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,A=a!==null?a.memoizedProps:m,z=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{z==="input"&&m.type==="radio"&&m.name!=null&&bt(d,m),$e(z,A);var ge=$e(z,m);for(A=0;A<q.length;A+=2){var je=q[A],Xe=q[A+1];je==="style"?we(d,Xe):je==="dangerouslySetInnerHTML"?Me(d,Xe):je==="children"?Ne(d,Xe):R(d,je,Xe,ge)}switch(z){case"input":Vt(d,m);break;case"textarea":Je(d,m);break;case"select":var He=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var dt=m.value;dt!=null?Lt(d,!!m.multiple,dt,!1):He!==!!m.multiple&&(m.defaultValue!=null?Lt(d,!!m.multiple,m.defaultValue,!0):Lt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(xt){pn(n,n.return,xt)}}break;case 6:if(ki(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(xt){pn(n,n.return,xt)}}break;case 3:if(ki(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(xt){pn(n,n.return,xt)}break;case 4:ki(i,n),Zi(n);break;case 13:ki(i,n),Zi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(bu=be())),c&4&&Gp(n);break;case 22:if(je=a!==null&&a.memoizedState!==null,n.mode&1?(Vn=(ge=Vn)||je,ki(i,n),Vn=ge):ki(i,n),Zi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!je&&(n.mode&1)!==0)for(pt=n,je=n.child;je!==null;){for(Xe=pt=je;pt!==null;){switch(He=pt,dt=He.child,He.tag){case 0:case 11:case 14:case 15:Xa(4,He,He.return);break;case 1:$s(He,He.return);var gt=He.stateNode;if(typeof gt.componentWillUnmount=="function"){c=He,a=He.return;try{i=c,gt.props=i.memoizedProps,gt.state=i.memoizedState,gt.componentWillUnmount()}catch(xt){pn(c,a,xt)}}break;case 5:$s(He,He.return);break;case 22:if(He.memoizedState!==null){Yp(Xe);continue}}dt!==null?(dt.return=He,pt=dt):Yp(Xe)}je=je.sibling}e:for(je=null,Xe=n;;){if(Xe.tag===5){if(je===null){je=Xe;try{d=Xe.stateNode,ge?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(z=Xe.stateNode,q=Xe.memoizedProps.style,A=q!=null&&q.hasOwnProperty("display")?q.display:null,z.style.display=xe("display",A))}catch(xt){pn(n,n.return,xt)}}}else if(Xe.tag===6){if(je===null)try{Xe.stateNode.nodeValue=ge?"":Xe.memoizedProps}catch(xt){pn(n,n.return,xt)}}else if((Xe.tag!==22&&Xe.tag!==23||Xe.memoizedState===null||Xe===n)&&Xe.child!==null){Xe.child.return=Xe,Xe=Xe.child;continue}if(Xe===n)break e;for(;Xe.sibling===null;){if(Xe.return===null||Xe.return===n)break e;je===Xe&&(je=null),Xe=Xe.return}je===Xe&&(je=null),Xe.sibling.return=Xe.return,Xe=Xe.sibling}}break;case 19:ki(i,n),Zi(n),c&4&&Gp(n);break;case 21:break;default:ki(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(zp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ne(d,""),c.flags&=-33);var m=Vp(n);Mu(n,m,d);break;case 3:case 4:var A=c.stateNode.containerInfo,z=Vp(n);Su(n,z,A);break;default:throw Error(t(161))}}catch(q){pn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Hx(n,i,a){pt=n,Wp(n)}function Wp(n,i,a){for(var c=(n.mode&1)!==0;pt!==null;){var d=pt,m=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||Qo;if(!A){var z=d.alternate,q=z!==null&&z.memoizedState!==null||Vn;z=Qo;var ge=Vn;if(Qo=A,(Vn=q)&&!ge)for(pt=d;pt!==null;)A=pt,q=A.child,A.tag===22&&A.memoizedState!==null?$p(d):q!==null?(q.return=A,pt=q):$p(d);for(;m!==null;)pt=m,Wp(m),m=m.sibling;pt=d,Qo=z,Vn=ge}Xp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,pt=m):Xp(n)}}function Xp(n){for(;pt!==null;){var i=pt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Fi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Yh(i,m,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Yh(i,A,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var je=ge.memoizedState;if(je!==null){var Xe=je.dehydrated;Xe!==null&&wa(Xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&yu(i)}catch(He){pn(i,i.return,He)}}if(i===n){pt=null;break}if(a=i.sibling,a!==null){a.return=i.return,pt=a;break}pt=i.return}}function Yp(n){for(;pt!==null;){var i=pt;if(i===n){pt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,pt=a;break}pt=i.return}}function $p(n){for(;pt!==null;){var i=pt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(q){pn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(q){pn(i,d,q)}}var m=i.return;try{yu(i)}catch(q){pn(i,m,q)}break;case 5:var A=i.return;try{yu(i)}catch(q){pn(i,A,q)}}}catch(q){pn(i,i.return,q)}if(i===n){pt=null;break}var z=i.sibling;if(z!==null){z.return=i.return,pt=z;break}pt=i.return}}var Gx=Math.ceil,tl=P.ReactCurrentDispatcher,Eu=P.ReactCurrentOwner,bi=P.ReactCurrentBatchConfig,Qt=0,Rn=null,_n=null,Ln=0,pi=0,qs=Dr(0),wn=0,Ya=null,cs=0,nl=0,wu=0,$a=null,si=null,bu=0,Ks=1/0,gr=null,il=!1,Tu=null,Br=null,rl=!1,zr=null,sl=0,qa=0,Au=null,al=-1,ol=0;function Kn(){return(Qt&6)!==0?be():al!==-1?al:al=be()}function Vr(n){return(n.mode&1)===0?1:(Qt&2)!==0&&Ln!==0?Ln&-Ln:Tx.transition!==null?(ol===0&&(ol=ce()),ol):(n=Ze,n!==0||(n=window.event,n=n===void 0?16:Kf(n.type)),n)}function Bi(n,i,a,c){if(50<qa)throw qa=0,Au=null,Error(t(185));Ge(n,a,c),((Qt&2)===0||n!==Rn)&&(n===Rn&&((Qt&2)===0&&(nl|=a),wn===4&&Hr(n,Ln)),ai(n,c),a===1&&Qt===0&&(i.mode&1)===0&&(Ks=be()+500,Uo&&Ur()))}function ai(n,i){var a=n.callbackNode;te(n,i);var c=k(n,n===Rn?Ln:0);if(c===0)a!==null&&G(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&G(a),i===1)n.tag===0?bx(Kp.bind(null,n)):Uh(Kp.bind(null,n)),Sx(function(){(Qt&6)===0&&Ur()}),a=null;else{switch(Et(c)){case 1:a=At;break;case 4:a=b;break;case 16:a=j;break;case 536870912:a=ne;break;default:a=j}a=rm(a,qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function qp(n,i){if(al=-1,ol=0,(Qt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=k(n,n===Rn?Ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var d=Qt;Qt|=2;var m=Jp();(Rn!==n||Ln!==i)&&(gr=null,Ks=be()+500,ds(n,i));do try{Xx();break}catch(z){Zp(n,z)}while(!0);Wc(),tl.current=m,Qt=d,_n!==null?i=0:(Rn=null,Ln=0,i=wn)}if(i!==0){if(i===2&&(d=Te(n),d!==0&&(c=d,i=Cu(n,d))),i===1)throw a=Ya,ds(n,0),Hr(n,c),ai(n,be()),a;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!jx(d)&&(i=ll(n,c),i===2&&(m=Te(n),m!==0&&(c=m,i=Cu(n,m))),i===1))throw a=Ya,ds(n,0),Hr(n,c),ai(n,be()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,si,gr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=bu+500-be(),10<i)){if(k(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(fs.bind(null,n,si,gr),i);break}fs(n,si,gr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-Oe(c);m=1<<A,A=i[A],A>d&&(d=A),c&=~m}if(c=d,c=be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Gx(c/1960))-c,10<c){n.timeoutHandle=Lc(fs.bind(null,n,si,gr),c);break}fs(n,si,gr);break;case 5:fs(n,si,gr);break;default:throw Error(t(329))}}}return ai(n,be()),n.callbackNode===a?qp.bind(null,n):null}function Cu(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=ll(n,i),n!==2&&(i=si,si=a,i!==null&&Ru(i)),n}function Ru(n){si===null?si=n:si.push.apply(si,n)}function jx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Li(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~wu,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Oe(i),c=1<<a;n[a]=-1,i&=~c}}function Kp(n){if((Qt&6)!==0)throw Error(t(327));Zs();var i=k(n,0);if((i&1)===0)return ai(n,be()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=Te(n);c!==0&&(i=c,a=Cu(n,c))}if(a===1)throw a=Ya,ds(n,0),Hr(n,i),ai(n,be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,si,gr),ai(n,be()),null}function Nu(n,i){var a=Qt;Qt|=1;try{return n(i)}finally{Qt=a,Qt===0&&(Ks=be()+500,Uo&&Ur())}}function us(n){zr!==null&&zr.tag===0&&(Qt&6)===0&&Zs();var i=Qt;Qt|=1;var a=bi.transition,c=Ze;try{if(bi.transition=null,Ze=1,n)return n()}finally{Ze=c,bi.transition=a,Qt=i,(Qt&6)===0&&Ur()}}function Pu(){pi=qs.current,ln(qs)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,yx(a)),_n!==null)for(a=_n.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Xs(),ln(ni),ln(kn),Qc();break;case 5:Zc(c);break;case 4:Xs();break;case 13:ln(dn);break;case 19:ln(dn);break;case 10:Xc(c.type._context);break;case 22:case 23:Pu()}a=a.return}if(Rn=n,_n=n=Gr(n.current,null),Ln=pi=i,wn=0,Ya=null,wu=nl=cs=0,si=$a=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var A=m.next;m.next=d,c.next=A}a.pending=c}as=null}return n}function Zp(n,i){do{var a=_n;try{if(Wc(),Wo.current=qo,Xo){for(var c=fn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xo=!1}if(ls=0,Cn=En=fn=null,Va=!1,Ha=0,Eu.current=null,a===null||a.return===null){wn=1,Ya=i,_n=null;break}e:{var m=n,A=a.return,z=a,q=i;if(i=Ln,z.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ge=q,je=z,Xe=je.tag;if((je.mode&1)===0&&(Xe===0||Xe===11||Xe===15)){var He=je.alternate;He?(je.updateQueue=He.updateQueue,je.memoizedState=He.memoizedState,je.lanes=He.lanes):(je.updateQueue=null,je.memoizedState=null)}var dt=Mp(A);if(dt!==null){dt.flags&=-257,Ep(dt,A,z,m,i),dt.mode&1&&Sp(m,ge,i),i=dt,q=ge;var gt=i.updateQueue;if(gt===null){var xt=new Set;xt.add(q),i.updateQueue=xt}else gt.add(q);break e}else{if((i&1)===0){Sp(m,ge,i),Iu();break e}q=Error(t(426))}}else if(un&&z.mode&1){var mn=Mp(A);if(mn!==null){(mn.flags&65536)===0&&(mn.flags|=256),Ep(mn,A,z,m,i),Gc(Ys(q,z));break e}}m=q=Ys(q,z),wn!==4&&(wn=2),$a===null?$a=[m]:$a.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var fe=_p(m,q,i);Xh(m,fe);break e;case 1:z=q;var ee=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Br===null||!Br.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ke=yp(m,z,i);Xh(m,Ke);break e}}m=m.return}while(m!==null)}em(a)}catch(vt){i=vt,_n===a&&a!==null&&(_n=a=a.return);continue}break}while(!0)}function Jp(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Iu(){(wn===0||wn===3||wn===2)&&(wn=4),Rn===null||(cs&268435455)===0&&(nl&268435455)===0||Hr(Rn,Ln)}function ll(n,i){var a=Qt;Qt|=2;var c=Jp();(Rn!==n||Ln!==i)&&(gr=null,ds(n,i));do try{Wx();break}catch(d){Zp(n,d)}while(!0);if(Wc(),Qt=a,tl.current=c,_n!==null)throw Error(t(261));return Rn=null,Ln=0,wn}function Wx(){for(;_n!==null;)Qp(_n)}function Xx(){for(;_n!==null&&!Ue();)Qp(_n)}function Qp(n){var i=im(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?em(n):_n=i,Eu.current=null}function em(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kx(a,i,pi),a!==null){_n=a;return}}else{if(a=Bx(a,i),a!==null){a.flags&=32767,_n=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,_n=null;return}}if(i=i.sibling,i!==null){_n=i;return}_n=i=n}while(i!==null);wn===0&&(wn=5)}function fs(n,i,a){var c=Ze,d=bi.transition;try{bi.transition=null,Ze=1,Yx(n,i,a,c)}finally{bi.transition=d,Ze=c}return null}function Yx(n,i,a,c){do Zs();while(zr!==null);if((Qt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ut(n,m),n===Rn&&(_n=Rn=null,Ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,rm(j,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=bi.transition,bi.transition=null;var A=Ze;Ze=1;var z=Qt;Qt|=4,Eu.current=null,Vx(n,a),jp(a,n),hx(Ic),_o=!!Pc,Ic=Pc=null,n.current=a,Hx(a),ve(),Qt=z,Ze=A,bi.transition=m}else n.current=a;if(rl&&(rl=!1,zr=n,sl=d),m=n.pendingLanes,m===0&&(Br=null),Ve(a.stateNode),ai(n,be()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=Tu,Tu=null,n;return(sl&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Au?qa++:(qa=0,Au=n):qa=0,Ur(),null}function Zs(){if(zr!==null){var n=Et(sl),i=bi.transition,a=Ze;try{if(bi.transition=null,Ze=16>n?16:n,zr===null)var c=!1;else{if(n=zr,zr=null,sl=0,(Qt&6)!==0)throw Error(t(331));var d=Qt;for(Qt|=4,pt=n.current;pt!==null;){var m=pt,A=m.child;if((pt.flags&16)!==0){var z=m.deletions;if(z!==null){for(var q=0;q<z.length;q++){var ge=z[q];for(pt=ge;pt!==null;){var je=pt;switch(je.tag){case 0:case 11:case 15:Xa(8,je,m)}var Xe=je.child;if(Xe!==null)Xe.return=je,pt=Xe;else for(;pt!==null;){je=pt;var He=je.sibling,dt=je.return;if(Bp(je),je===ge){pt=null;break}if(He!==null){He.return=dt,pt=He;break}pt=dt}}}var gt=m.alternate;if(gt!==null){var xt=gt.child;if(xt!==null){gt.child=null;do{var mn=xt.sibling;xt.sibling=null,xt=mn}while(xt!==null)}}pt=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,pt=A;else e:for(;pt!==null;){if(m=pt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xa(9,m,m.return)}var fe=m.sibling;if(fe!==null){fe.return=m.return,pt=fe;break e}pt=m.return}}var ee=n.current;for(pt=ee;pt!==null;){A=pt;var he=A.child;if((A.subtreeFlags&2064)!==0&&he!==null)he.return=A,pt=he;else e:for(A=ee;pt!==null;){if(z=pt,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:el(9,z)}}catch(vt){pn(z,z.return,vt)}if(z===A){pt=null;break e}var Ke=z.sibling;if(Ke!==null){Ke.return=z.return,pt=Ke;break e}pt=z.return}}if(Qt=d,Ur(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(se,n)}catch{}c=!0}return c}finally{Ze=a,bi.transition=i}}return!1}function tm(n,i,a){i=Ys(a,i),i=_p(n,i,1),n=Or(n,i,1),i=Kn(),n!==null&&(Ge(n,1,i),ai(n,i))}function pn(n,i,a){if(n.tag===3)tm(n,n,a);else for(;i!==null;){if(i.tag===3){tm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){n=Ys(a,n),n=yp(i,n,1),i=Or(i,n,1),n=Kn(),i!==null&&(Ge(i,1,n),ai(i,n));break}}i=i.return}}function $x(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kn(),n.pingedLanes|=n.suspendedLanes&a,Rn===n&&(Ln&a)===a&&(wn===4||wn===3&&(Ln&130023424)===Ln&&500>be()-bu?ds(n,0):wu|=a),ai(n,i)}function nm(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Kn();n=hr(n,i),n!==null&&(Ge(n,i,a),ai(n,a))}function qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),nm(n,a)}function Kx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),nm(n,a)}var im;im=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,Ox(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,un&&(i.flags&1048576)!==0&&Fh(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var d=Bs(i,kn.current);Ws(i,a),d=nu(null,i,c,n,d,a);var m=iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qc(i),d.updater=Ko,i.stateNode=d,d._reactInternals=i,cu(i,c,n,a),i=hu(null,i,c,!0,m,a)):(i.tag=0,un&&m&&Bc(i),qn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Jx(c),n=Fi(c,n),d){case 0:i=fu(null,i,c,n,a);break e;case 1:i=Rp(null,i,c,n,a);break e;case 11:i=wp(null,i,c,n,a);break e;case 14:i=bp(null,i,c,Fi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fi(c,d),fu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fi(c,d),Rp(n,i,c,d,a);case 3:e:{if(Np(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Wh(n,i),Go(i,c,null,a);var A=i.memoizedState;if(c=A.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ys(Error(t(423)),i),i=Pp(n,i,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),i),i=Pp(n,i,c,a,d);break e}else for(hi=Ir(i.stateNode.containerInfo.firstChild),fi=i,un=!0,Ui=null,a=Gh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=mr(n,i,a);break e}qn(n,i,c,a)}i=i.child}return i;case 5:return $h(i),n===null&&Hc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,A=d.children,Dc(c,d)?A=null:m!==null&&Dc(c,m)&&(i.flags|=32),Cp(n,i),qn(n,i,A,a),i.child;case 6:return n===null&&Hc(i),null;case 13:return Ip(n,i,a);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):qn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fi(c,d),wp(n,i,c,d,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,A=d.value,an(zo,c._currentValue),c._currentValue=A,m!==null)if(Li(m.value,A)){if(m.children===d.children&&!ni.current){i=mr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var z=m.dependencies;if(z!==null){A=m.child;for(var q=z.firstContext;q!==null;){if(q.context===c){if(m.tag===1){q=pr(-1,a&-a),q.tag=2;var ge=m.updateQueue;if(ge!==null){ge=ge.shared;var je=ge.pending;je===null?q.next=q:(q.next=je.next,je.next=q),ge.pending=q}}m.lanes|=a,q=m.alternate,q!==null&&(q.lanes|=a),Yc(m.return,a,i),z.lanes|=a;break}q=q.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(t(341));A.lanes|=a,z=A.alternate,z!==null&&(z.lanes|=a),Yc(A,a,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}qn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=Ei(d),c=c(d),i.flags|=1,qn(n,i,c,a),i.child;case 14:return c=i.type,d=Fi(c,i.pendingProps),d=Fi(c.type,d),bp(n,i,c,d,a);case 15:return Tp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Fi(c,d),Jo(n,i),i.tag=1,ii(c)?(n=!0,Lo(i)):n=!1,Ws(i,a),xp(i,c,d),cu(i,c,d,a),hu(null,i,c,!0,n,a);case 19:return Lp(n,i,a);case 22:return Ap(n,i,a)}throw Error(t(156,i.tag))};function rm(n,i){return lr(n,i)}function Zx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(n,i,a,c){return new Zx(n,i,a,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jx(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===W)return 14}return 2}function Gr(n,i){var a=n.alternate;return a===null?(a=Ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,d,m){var A=2;if(c=n,typeof n=="function")Du(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return hs(a.children,d,m,i);case T:A=8,d|=8;break;case N:return n=Ti(12,a,i,d|2),n.elementType=N,n.lanes=m,n;case re:return n=Ti(13,a,i,d),n.elementType=re,n.lanes=m,n;case me:return n=Ti(19,a,i,d),n.elementType=me,n.lanes=m,n;case K:return ul(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:A=10;break e;case H:A=9;break e;case Z:A=11;break e;case W:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ti(A,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,a,c){return n=Ti(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=Ti(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Lu(n,i,a){return n=Ti(6,n,null,i),n.lanes=a,n}function Uu(n,i,a){return i=Ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Qx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ze(0),this.expirationTimes=ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fu(n,i,a,c,d,m,A,z,q){return n=new Qx(n,i,a,z,q),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(m),n}function ev(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function sm(n){if(!n)return Lr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return Dh(n,a,i)}return i}function am(n,i,a,c,d,m,A,z,q){return n=Fu(a,c,!0,n,d,m,A,z,q),n.context=sm(null),a=n.current,c=Kn(),d=Vr(a),m=pr(c,d),m.callback=i??null,Or(a,m,d),n.current.lanes=d,Ge(n,d,c),ai(n,c),n}function dl(n,i,a,c){var d=i.current,m=Kn(),A=Vr(d);return a=sm(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(m,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Or(d,i,A),n!==null&&(Bi(n,d,A,m),Ho(n,d,A)),A}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function om(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ou(n,i){om(n,i),(n=n.alternate)&&om(n,i)}function tv(){return null}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}hl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){dl(null,n,null,null)}),i[cr]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yi.length&&i!==0&&i<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&$f(n)}};function Bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cm(){}function nv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ge=fl(A);m.call(ge)}}var A=am(i,c,n,0,null,!1,!1,"",cm);return n._reactRootContainer=A,n[cr]=A.current,Da(n.nodeType===8?n.parentNode:n),us(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var z=c;c=function(){var ge=fl(q);z.call(ge)}}var q=Fu(n,0,!1,null,null,!1,!1,"",cm);return n._reactRootContainer=q,n[cr]=q.current,Da(n.nodeType===8?n.parentNode:n),us(function(){dl(i,q,a,c)}),q}function ml(n,i,a,c,d){var m=a._reactRootContainer;if(m){var A=m;if(typeof d=="function"){var z=d;d=function(){var q=fl(A);z.call(q)}}dl(i,A,n,d)}else A=nv(a,i,n,d,c);return fl(A)}mt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=w(i.pendingLanes);a!==0&&(ht(i,a|1),ai(i,be()),(Qt&6)===0&&(Ks=be()+500,Ur()))}break;case 13:us(function(){var c=hr(n,1);if(c!==null){var d=Kn();Bi(c,n,1,d)}}),Ou(n,1)}},It=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=Kn();Bi(i,n,134217728,a)}Ou(n,134217728)}},cn=function(n){if(n.tag===13){var i=Vr(n),a=hr(n,i);if(a!==null){var c=Kn();Bi(a,n,i,c)}Ou(n,i)}},Dt=function(){return Ze},Mn=function(n,i){var a=Ze;try{return Ze=n,i()}finally{Ze=a}},wt=function(n,i,a){switch(i){case"input":if(Vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Io(c);if(!d)throw Error(t(90));St(c),Vt(c,d)}}}break;case"textarea":Je(n,a);break;case"select":i=a.value,i!=null&&Lt(n,!!a.multiple,i,!1)}},Le=Nu,Ce=us;var iv={usingClientEntryPoint:!1,Events:[Fa,Os,Io,ye,qe,Nu]},Ka={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rv={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ui(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{se=gl.inject(rv),ke=gl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(i))throw Error(t(200));return ev(n,i,null,a)},oi.createRoot=function(n,i){if(!Bu(n))throw Error(t(299));var a=!1,c="",d=lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Fu(n,1,!1,null,null,a,!1,c,d),n[cr]=i.current,Da(n.nodeType===8?n.parentNode:n),new ku(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ui(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return us(n)},oi.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!Bu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",A=lm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=am(i,null,n,1,a??null,d,!1,m,A),n[cr]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hl(i)},oi.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(us(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},oi.unstable_batchedUpdates=Nu,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var xm;function hv(){if(xm)return Hu.exports;xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hu.exports=fv(),Hu.exports}var vm;function pv(){if(vm)return xl;vm=1;var s=hv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var mv=pv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="184",gv=0,_m=1,xv=2,Gl=1,vv=2,so=3,ts=0,ci=1,Mr=2,wr=0,pa=1,ym=2,Sm=3,Mm=4,_v=5,Ss=100,yv=101,Sv=102,Mv=103,Ev=104,wv=200,bv=201,Tv=202,Av=203,Nd=204,Pd=205,Cv=206,Rv=207,Nv=208,Pv=209,Iv=210,Dv=211,Lv=212,Uv=213,Fv=214,Id=0,Dd=1,Ld=2,ga=3,Ud=4,Fd=5,Od=6,kd=7,L0=0,Ov=1,kv=2,ir=0,U0=1,F0=2,O0=3,k0=4,B0=5,z0=6,V0=7,H0=300,Ts=301,xa=302,Wu=303,Xu=304,oc=306,Bd=1e3,Er=1001,zd=1002,Un=1003,Bv=1004,vl=1005,Wn=1006,Yu=1007,Es=1008,Pi=1009,G0=1010,j0=1011,ho=1012,Af=1013,ar=1014,tr=1015,Tr=1016,Cf=1017,Rf=1018,po=1020,W0=35902,X0=35899,Y0=1021,$0=1022,ji=1023,Ar=1026,ws=1027,q0=1028,Nf=1029,As=1030,Pf=1031,If=1033,jl=33776,Wl=33777,Xl=33778,Yl=33779,Vd=35840,Hd=35841,Gd=35842,jd=35843,Wd=36196,Xd=37492,Yd=37496,$d=37488,qd=37489,Kl=37490,Kd=37491,Zd=37808,Jd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,af=37816,of=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,Zl=36285,xf=36286,zv=3200,Em=0,Vv=1,Jr="",Ri="srgb",Jl="srgb-linear",Ql="linear",rn="srgb",Js=7680,wm=519,Hv=512,Gv=513,jv=514,Df=515,Wv=516,Xv=517,Lf=518,Yv=519,bm=35044,Tm="300 es",nr=2e3,ec=2001;function $v(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qv(){const s=tc("canvas");return s.style.display="block",s}const Am={};function Cm(...s){const e="THREE."+s.shift();console.log(e,...s)}function K0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ft(...s){s=K0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function en(...s){s=K0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function vf(...s){const e=s.join(" ");e in Am||(Am[e]=!0,Ft(...s))}function Kv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Zv={[Id]:Dd,[Ld]:Od,[Ud]:kd,[ga]:Fd,[Dd]:Id,[Od]:Ld,[kd]:Ud,[Fd]:ga};class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,_f=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function Jv(s,e){return(s%e+e)%e}function qu(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hf=class Hf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hf.prototype.isVector2=!0;let Ot=Hf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],C=l[u+2],D=l[u+3];if(S!==D||h!==x||p!==M||v!==C){let y=h*x+p*M+v*C+S*D;y<0&&(x=-x,M=-M,C=-C,D=-D,y=-y);let _=1-f;if(y<.9995){const L=Math.acos(y),R=Math.sin(L);_=Math.sin(_*L)/R,f=Math.sin(f*L)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+C*f,S=S*_+D*f;const L=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=L,p*=L,v*=L,S*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],C=l[u+3];return e[t]=f*C+v*S+h*M-p*x,e[t+1]=h*C+v*x+p*S-f*M,e[t+2]=p*C+v*M+f*x-h*S,e[t+3]=v*C-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),C=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"YXZ":this._x=x*v*S+p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"ZXY":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S-x*M*C;break;case"ZYX":this._x=x*v*S-p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S+x*M*C;break;case"YZX":this._x=x*v*S+p*M*C,this._y=p*M*S+x*v*C,this._z=p*v*C-x*M*S,this._w=p*v*S-x*M*C;break;case"XZY":this._x=x*v*S-p*M*C,this._y=p*M*S-x*v*C,this._z=p*v*C+x*M*S,this._w=p*v*S+x*M*C;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gf=class Gf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gf.prototype.isVector3=!0;let ie=Gf;const Ku=new ie,Rm=new ya,jf=class jf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],C=r[8],D=o[0],y=o[3],_=o[6],L=o[1],R=o[4],P=o[7],V=o[2],I=o[5],O=o[8];return l[0]=u*D+f*L+h*V,l[3]=u*y+f*R+h*I,l[6]=u*_+f*P+h*O,l[1]=p*D+v*L+S*V,l[4]=p*y+v*R+S*I,l[7]=p*_+v*P+S*O,l[2]=x*D+M*L+C*V,l[5]=x*y+M*R+C*I,l[8]=x*_+M*P+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,C=t*S+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=S*D,e[1]=(o*p-v*r)*D,e[2]=(f*r-o*u)*D,e[3]=x*D,e[4]=(v*t-o*h)*D,e[5]=(o*l-f*t)*D,e[6]=M*D,e[7]=(r*h-p*t)*D,e[8]=(u*t-r*l)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;let Gt=jf;const Zu=new Gt,Nm=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===rn&&(o.r=br(o.r),o.g=br(o.g),o.b=br(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===rn&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return vf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return vf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:rn,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),s}const Zt=Qv();function br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class e_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=tc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=br(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(br(t[r]/255)*255):t[r]=br(t[r]);return{data:t,width:e.width,height:e.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class Uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ju(o[u].image)):l.push(Ju(o[u]))}else l=Ju(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let n_=0;const Qu=new ie;class Jn extends Rs{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,r=Er,o=Er,l=Wn,u=Es,f=ji,h=Pi,p=Jn.DEFAULT_ANISOTROPY,v=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=mo(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=H0;Jn.DEFAULT_ANISOTROPY=1;const Wf=class Wf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],C=h[9],D=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-D)<.01&&Math.abs(C-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+D)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(M+1)/2,V=(_+1)/2,I=(v+x)/4,O=(S+D)/4,T=(C+y)/4;return R>P&&R>V?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=O/r):P>V?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=T/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=O/l,o=T/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-C)*(y-C)+(S-D)*(S-D)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-C)/L,this.y=(S-D)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this.w=qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this.w=qt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wf.prototype.isVector4=!0;let gn=Wf;class i_ extends Rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Jn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Uf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends i_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Z0 extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r_ extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=class ac{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,C,D,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=C,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+C*p,t[5]=x-D*p,t[9]=-f*h,t[2]=D-x*p,t[6]=C+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x+D*f,t[4]=C*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-C,t[6]=D+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,C=p*v,D=p*S;t[0]=x-D*f,t[4]=-u*S,t[8]=C+M*f,t[1]=M+C*f,t[5]=u*v,t[9]=D-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,C=f*v,D=f*S;t[0]=h*v,t[4]=C*p-M,t[8]=x*p+D,t[1]=h*S,t[5]=D*p+x,t[9]=M*p-C,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=D-x*S,t[8]=C*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+C,t[10]=x-D*S}else if(e.order==="XZY"){const x=u*h,M=u*p,C=f*h,D=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+D,t[5]=u*v,t[9]=M*S-C,t[2]=C*S-M,t[6]=f*v,t[10]=D*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,a_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Wr.crossVectors(r,mi),Wr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Wr.crossVectors(r,mi)),Wr.normalize(),_l.crossVectors(mi,Wr),o[0]=Wr.x,o[4]=_l.x,o[8]=mi.x,o[1]=Wr.y,o[5]=_l.y,o[9]=mi.y,o[2]=Wr.z,o[6]=_l.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],C=r[2],D=r[6],y=r[10],_=r[14],L=r[3],R=r[7],P=r[11],V=r[15],I=o[0],O=o[4],T=o[8],N=o[12],X=o[1],H=o[5],Z=o[9],re=o[13],me=o[2],W=o[6],oe=o[10],K=o[14],J=o[3],pe=o[7],ue=o[11],B=o[15];return l[0]=u*I+f*X+h*me+p*J,l[4]=u*O+f*H+h*W+p*pe,l[8]=u*T+f*Z+h*oe+p*ue,l[12]=u*N+f*re+h*K+p*B,l[1]=v*I+S*X+x*me+M*J,l[5]=v*O+S*H+x*W+M*pe,l[9]=v*T+S*Z+x*oe+M*ue,l[13]=v*N+S*re+x*K+M*B,l[2]=C*I+D*X+y*me+_*J,l[6]=C*O+D*H+y*W+_*pe,l[10]=C*T+D*Z+y*oe+_*ue,l[14]=C*N+D*re+y*K+_*B,l[3]=L*I+R*X+P*me+V*J,l[7]=L*O+R*H+P*W+V*pe,l[11]=L*T+R*Z+P*oe+V*ue,l[15]=L*N+R*re+P*K+V*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],C=e[3],D=e[7],y=e[11],_=e[15],L=h*M-p*x,R=f*M-p*S,P=f*x-h*S,V=u*M-p*v,I=u*x-h*v,O=u*S-f*v;return t*(D*L-y*R+_*P)-r*(C*L-y*V+_*I)+o*(C*R-D*V+_*O)-l*(C*P-D*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],C=e[12],D=e[13],y=e[14],_=e[15],L=t*f-r*u,R=t*h-o*u,P=t*p-l*u,V=r*h-o*f,I=r*p-l*f,O=o*p-l*h,T=v*D-S*C,N=v*y-x*C,X=v*_-M*C,H=S*y-x*D,Z=S*_-M*D,re=x*_-M*y,me=L*re-R*Z+P*H+V*X-I*N+O*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/me;return e[0]=(f*re-h*Z+p*H)*W,e[1]=(o*Z-r*re-l*H)*W,e[2]=(D*O-y*I+_*V)*W,e[3]=(x*I-S*O-M*V)*W,e[4]=(h*X-u*re-p*N)*W,e[5]=(t*re-o*X+l*N)*W,e[6]=(y*P-C*O-_*R)*W,e[7]=(v*O-x*P+M*R)*W,e[8]=(u*Z-f*X+p*T)*W,e[9]=(r*X-t*Z-l*T)*W,e[10]=(C*I-D*P+_*L)*W,e[11]=(S*P-v*I-M*L)*W,e[12]=(f*N-u*H-h*T)*W,e[13]=(t*H-r*N+o*T)*W,e[14]=(D*R-C*V-y*L)*W,e[15]=(v*V-S*R+x*L)*W,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,C=l*S,D=u*v,y=u*S,_=f*S,L=h*p,R=h*v,P=h*S,V=r.x,I=r.y,O=r.z;return o[0]=(1-(D+_))*V,o[1]=(M+P)*V,o[2]=(C-R)*V,o[3]=0,o[4]=(M-P)*I,o[5]=(1-(x+_))*I,o[6]=(y+L)*I,o[7]=0,o[8]=(C+R)*O,o[9]=(y-L)*O,o[10]=(1-(x+D))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),zi.copy(this);const p=1/u,v=1/f,S=1/h;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=S,zi.elements[9]*=S,zi.elements[10]*=S,t.setFromRotationMatrix(zi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let C,D;if(h)C=l/(u-l),D=u*l/(u-l);else if(f===nr)C=-(u+l)/(u-l),D=-2*u*l/(u-l);else if(f===ec)C=-u/(u-l),D=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=nr,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let C,D;if(h)C=1/(u-l),D=u/(u-l);else if(f===nr)C=-2/(u-l),D=-(u+l)/(u-l);else if(f===ec)C=-1/(u-l),D=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=C,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};ac.prototype.isMatrix4=!0;let Sn=ac;const ea=new ie,zi=new Sn,s_=new ie(0,0,0),a_=new ie(1,1,1),Wr=new ie,_l=new ie,mi=new ie,Im=new Sn,Dm=new ya;class Cs{constructor(e=0,t=0,r=0,o=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(qt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-qt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";let J0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o_=0;const Lm=new ie,ta=new ya,xr=new Sn,yl=new ie,Qa=new ie,l_=new ie,c_=new ya,Um=new ie(1,0,0),Fm=new ie(0,1,0),Om=new ie(0,0,1),km={type:"added"},u_={type:"removed"},na={type:"childadded",child:null},ed={type:"childremoved",child:null};class xi extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const e=new ie,t=new Cs,r=new ya,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sn},normalMatrix:{value:new Gt}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Qa,yl,this.up):xr.lookAt(yl,Qa,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(xr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),na.child=e,this.dispatchEvent(na),na.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),C=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}xi.DEFAULT_UP=new ie(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const y=t.getJointPose(D,r),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,C=.005;p.inputState.pinching&&x>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function nd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class sn{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Zt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Zt.workingColorSpace){if(e=Jv(e,1),t=qt(t,0,1),r=qt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=nd(u,l,e+1/3),this.g=nd(u,l,e),this.b=nd(u,l,e-1/3)}return Zt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ri){function r(l){l!==void 0&&parseFloat(l)<1&&Ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const r=Q0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Zt.workingToColorSpace(Gn.copy(this),e),Math.round(qt(Gn.r*255,0,255))*65536+Math.round(qt(Gn.g*255,0,255))*256+Math.round(qt(Gn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(Gn.copy(this),t);const r=Gn.r,o=Gn.g,l=Gn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ri){Zt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,r=Gn.g,o=Gn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Sl);const r=qu(Xr.h,Sl.h,t),o=qu(Xr.s,Sl.s,t),l=qu(Xr.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new sn;sn.NAMES=Q0;class f_ extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vi=new ie,vr=new ie,id=new ie,_r=new ie,ia=new ie,ra=new ie,Bm=new ie,rd=new ie,sd=new ie,ad=new ie,od=new gn,ld=new gn,cd=new gn;class Gi{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Vi.subVectors(e,t),o.cross(Vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Vi.subVectors(o,t),vr.subVectors(r,t),id.subVectors(e,t);const u=Vi.dot(Vi),f=Vi.dot(vr),h=Vi.dot(id),p=vr.dot(vr),v=vr.dot(id),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,C=(u*v-f*h)*x;return l.set(1-M-C,C,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,_r.x),h.addScaledVector(u,_r.y),h.addScaledVector(f,_r.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,t),ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(od,l.x),u.addScaledVector(ld,l.y),u.addScaledVector(cd,l.z),u}static isFrontFacing(e,t,r,o){return Vi.subVectors(r,t),vr.subVectors(e,t),Vi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Vi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),rd.subVectors(e,r);const h=ia.dot(rd),p=ra.dot(rd);if(h<=0&&p<=0)return t.copy(r);sd.subVectors(e,o);const v=ia.dot(sd),S=ra.dot(sd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);ad.subVectors(e,l);const M=ia.dot(ad),C=ra.dot(ad);if(C>=0&&M<=C)return t.copy(l);const D=M*p-h*C;if(D<=0&&p>=0&&C<=0)return f=p/(p-C),t.copy(r).addScaledVector(ra,f);const y=v*C-M*S;if(y<=0&&S-v>=0&&M-C>=0)return Bm.subVectors(l,o),f=(S-v)/(S-v+(M-C)),t.copy(o).addScaledVector(Bm,f);const _=1/(y+D+x);return u=D*_,f=x*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(l,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),El.subVectors(this.max,eo),sa.subVectors(e.a,eo),aa.subVectors(e.b,eo),oa.subVectors(e.c,eo),Yr.subVectors(aa,sa),$r.subVectors(oa,aa),ps.subVectors(sa,oa);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-ps.z,ps.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,ps.z,0,-ps.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-ps.y,ps.x,0];return!ud(t,sa,aa,oa,El)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,sa,aa,oa,El))?!1:(wl.crossVectors(Yr,$r),t=[wl.x,wl.y,wl.z],ud(t,sa,aa,oa,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Hi=new ie,Ml=new go,sa=new ie,aa=new ie,oa=new ie,Yr=new ie,$r=new ie,ps=new ie,eo=new ie,El=new ie,wl=new ie,ms=new ie;function ud(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),h=e.dot(ms),p=t.dot(ms),v=r.dot(ms);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const yn=new ie,bl=new Ot;let h_=0;class sr extends Rs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bm,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=li(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array),l=li(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class eg extends sr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class tg extends sr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class xn extends sr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const p_=new go,to=new ie,dd=new ie;class Ff{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):p_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(dd)),this.expandByPoint(to.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m_=0;const Ai=new Sn,fd=new xi,la=new ie,gi=new go,no=new go,Pn=new ie;class vi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,r){return Ai.makeTranslation(e,t,r),this.applyMatrix4(Ai),this}scale(e,t,r){return Ai.makeScale(e,t,r),this.applyMatrix4(Ai),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(gi.min,no.min),gi.expandByPoint(Pn),Pn.addVectors(gi.max,no.max),gi.expandByPoint(Pn)):(gi.expandByPoint(no.min),gi.expandByPoint(no.max))}gi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Pn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Pn.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Pn.add(la)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new ie,h[T]=new ie;const p=new ie,v=new ie,S=new ie,x=new Ot,M=new Ot,C=new Ot,D=new ie,y=new ie;function _(T,N,X){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,X),x.fromBufferAttribute(l,T),M.fromBufferAttribute(l,N),C.fromBufferAttribute(l,X),v.sub(p),S.sub(p),M.sub(x),C.sub(x);const H=1/(M.x*C.y-C.x*M.y);isFinite(H)&&(D.copy(v).multiplyScalar(C.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(H),f[T].add(D),f[N].add(D),f[X].add(D),h[T].add(y),h[N].add(y),h[X].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,N=L.length;T<N;++T){const X=L[T],H=X.start,Z=X.count;for(let re=H,me=H+Z;re<me;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const R=new ie,P=new ie,V=new ie,I=new ie;function O(T){V.fromBufferAttribute(o,T),I.copy(V);const N=f[T];R.copy(N),R.sub(V.multiplyScalar(V.dot(N))).normalize(),P.crossVectors(I,N);const H=P.dot(h[T])<0?-1:1;u.setXYZW(T,R.x,R.y,R.z,H)}for(let T=0,N=L.length;T<N;++T){const X=L[T],H=X.start,Z=X.count;for(let re=H,me=H+Z;re<me;re+=3)O(e.getX(re+0)),O(e.getX(re+1)),O(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,p=new ie,v=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const C=e.getX(x+0),D=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,D),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(D,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,C=0;for(let D=0,y=h.length;D<y;D++){f.isInterleavedBufferAttribute?M=h[D]*f.data.stride+f.offset:M=h[D]*v;for(let _=0;_<v;_++)x[C++]=p[M++]}return new sr(x,v,S)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let g_=0;class lc extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=pa,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Pd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==Ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new ie,hd=new ie,Tl=new ie,qr=new ie,pd=new ie,Al=new ie,md=new ie;class x_{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){hd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(hd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=qr.dot(this.direction),h=-qr.dot(Tl),p=qr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,C;if(v>0)if(S=u*h-f,x=u*f-h,C=l*v,S>=0)if(x>=-C)if(x<=C){const D=1/v;S*=D,x*=D,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-C?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=C?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(hd).addScaledVector(Tl,x),M}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){pd.subVectors(t,e),Al.subVectors(r,e),md.crossVectors(pd,Al);let u=this.direction.dot(md),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;qr.subVectors(this.origin,e);const h=f*this.direction.dot(Al.crossVectors(qr,Al));if(h<0)return null;const p=f*this.direction.dot(pd.cross(qr));if(p<0||h+p>u)return null;const v=-f*qr.dot(md);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class es extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zm=new Sn,gs=new x_,Cl=new Ff,Vm=new ie,Rl=new ie,Nl=new ie,Pl=new ie,gd=new ie,Il=new ie,Hm=new ie,Dl=new ie;class Qn extends xi{constructor(e=new vi,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(gd.fromBufferAttribute(S,e),u?Il.addScaledVector(gd,v):Il.addScaledVector(gd.sub(t),v))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Cl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Cl,Vm)===null||gs.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(zm.copy(l).invert(),gs.copy(e.ray).applyMatrix4(zm),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,V=R;P<V;P+=3){const I=f.getX(P),O=f.getX(P+1),T=f.getX(P+2);o=Ll(this,_,e,r,p,v,S,I,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(f.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);o=Ll(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=u[y.materialIndex],L=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,V=R;P<V;P+=3){const I=P,O=P+1,T=P+2;o=Ll(this,_,e,r,p,v,S,I,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const L=y,R=y+1,P=y+2;o=Ll(this,u,e,r,p,v,S,L,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function v_(s,e,t,r,o,l,u,f){let h;if(e.side===ci?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ts,f),h===null)return null;Dl.copy(f),Dl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Dl);return p<t.near||p>t.far?null:{distance:p,point:Dl.clone(),object:s}}function Ll(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Rl),s.getVertexPosition(h,Nl),s.getVertexPosition(p,Pl);const v=v_(s,e,t,r,Rl,Nl,Pl,Hm);if(v){const S=new ie;Gi.getBarycoord(Hm,Rl,Nl,Pl,S),o&&(v.uv=Gi.getInterpolatedAttribute(o,f,h,p,S,new Ot)),l&&(v.uv1=Gi.getInterpolatedAttribute(l,f,h,p,S,new Ot)),u&&(v.normal=Gi.getInterpolatedAttribute(u,f,h,p,S,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};Gi.getNormal(Rl,Nl,Pl,x.normal),v.face=x,v.barycoord=S}return v}class __ extends Jn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Un,v=Un,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new ie,y_=new ie,S_=new Gt;class ys{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=xd.subVectors(r,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(xd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||S_.getNormalMatrix(e),o=this.coplanarPoint(xd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ff,M_=new Ot(.5,.5),Ul=new ie;class ng{constructor(e=new ys,t=new ys,r=new ys,o=new ys,l=new ys,u=new ys){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],C=l[8],D=l[9],y=l[10],_=l[11],L=l[12],R=l[13],P=l[14],V=l[15];if(o[0].setComponents(p-u,M-v,_-C,V-L).normalize(),o[1].setComponents(p+u,M+v,_+C,V+L).normalize(),o[2].setComponents(p+f,M+S,_+D,V+R).normalize(),o[3].setComponents(p-f,M-S,_-D,V-R).normalize(),r)o[4].setComponents(h,x,y,P).normalize(),o[5].setComponents(p-h,M-x,_-y,V-P).normalize();else if(o[4].setComponents(p-h,M-x,_-y,V-P).normalize(),t===nr)o[5].setComponents(p+h,M+x,_+y,V+P).normalize();else if(t===ec)o[5].setComponents(h,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=M_.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ig extends Jn{constructor(e=[],t=Ts,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends Jn{constructor(e,t,r=ar,o,l,u,f=Un,h=Un,p,v=Ar,S=1){if(v!==Ar&&v!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class E_ extends va{constructor(e,t=ar,r=Ts,o,l,u=Un,f=Un,h,p=Ar){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rg extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends vi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;C("z","y","x",-1,-1,r,t,e,u,l,0),C("z","y","x",1,-1,r,t,-e,u,l,1),C("x","z","y",1,1,e,r,t,o,u,2),C("x","z","y",1,-1,e,r,-t,o,u,3),C("x","y","z",1,-1,e,t,r,o,l,4),C("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(S,2));function C(D,y,_,L,R,P,V,I,O,T,N){const X=P/O,H=V/T,Z=P/2,re=V/2,me=I/2,W=O+1,oe=T+1;let K=0,J=0;const pe=new ie;for(let ue=0;ue<oe;ue++){const B=ue*H-re;for(let le=0;le<W;le++){const et=le*X-Z;pe[D]=et*L,pe[y]=B*R,pe[_]=me,p.push(pe.x,pe.y,pe.z),pe[D]=0,pe[y]=0,pe[_]=I>0?1:-1,v.push(pe.x,pe.y,pe.z),S.push(le/O),S.push(1-ue/T),K+=1}}for(let ue=0;ue<T;ue++)for(let B=0;B<O;B++){const le=x+B+W*ue,et=x+B+W*(ue+1),rt=x+(B+1)+W*(ue+1),Re=x+(B+1)+W*ue;h.push(le,et,Re),h.push(et,rt,Re),J+=6}f.addGroup(M,J,N),M+=J,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Of extends vi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let C=0;const D=[],y=r/2;let _=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new xn(S,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(M,2));function L(){const P=new ie,V=new ie;let I=0;const O=(t-e)/r;for(let T=0;T<=l;T++){const N=[],X=T/l,H=X*(t-e)+e;for(let Z=0;Z<=o;Z++){const re=Z/o,me=re*h+f,W=Math.sin(me),oe=Math.cos(me);V.x=H*W,V.y=-X*r+y,V.z=H*oe,S.push(V.x,V.y,V.z),P.set(W,O,oe).normalize(),x.push(P.x,P.y,P.z),M.push(re,1-X),N.push(C++)}D.push(N)}for(let T=0;T<o;T++)for(let N=0;N<l;N++){const X=D[N][T],H=D[N+1][T],Z=D[N+1][T+1],re=D[N][T+1];(e>0||N!==0)&&(v.push(X,H,re),I+=3),(t>0||N!==l-1)&&(v.push(H,Z,re),I+=3)}p.addGroup(_,I,0),_+=I}function R(P){const V=C,I=new Ot,O=new ie;let T=0;const N=P===!0?e:t,X=P===!0?1:-1;for(let Z=1;Z<=o;Z++)S.push(0,y*X,0),x.push(0,X,0),M.push(.5,.5),C++;const H=C;for(let Z=0;Z<=o;Z++){const me=Z/o*h+f,W=Math.cos(me),oe=Math.sin(me);O.x=N*oe,O.y=y*X,O.z=N*W,S.push(O.x,O.y,O.z),x.push(0,X,0),I.x=W*.5+.5,I.y=oe*.5*X+.5,M.push(I.x,I.y),C++}for(let Z=0;Z<o;Z++){const re=V+Z,me=H+Z;P===!0?v.push(me,me+1,re):v.push(me+1,me,re),T+=3}p.addGroup(_,T,P===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Of(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Of{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Ot:new ie);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ie,o=[],l=[],u=[],f=new ie,h=new Sn;for(let M=0;M<=e;M++){const C=M/e;o[M]=this.getTangentAt(C,new ie)}l[0]=new ie,u[0]=new ie;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const C=Math.acos(qt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,C))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(qt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let C=1;C<=e;C++)l[C].applyMatrix4(h.makeRotationAxis(o[C],M*C)),u[C].crossVectors(o[C],l[C])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sg extends Cr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ot){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class w_ extends sg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function kf(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Gm=new ie,jm=new ie,vd=new kf,_d=new kf,yd=new kf;class Bf extends Cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ie){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(jm.subVectors(o[0],o[1]).add(o[0]),p=jm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Gm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Gm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let C=Math.pow(p.distanceToSquared(S),M),D=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);D<1e-4&&(D=1),C<1e-4&&(C=D),y<1e-4&&(y=D),vd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,C,D,y),_d.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,C,D,y),yd.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,C,D,y)}else this.curveType==="catmullrom"&&(vd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),_d.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),yd.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(vd.calc(h),_d.calc(h),yd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function b_(s,e){const t=1-s;return t*t*e}function T_(s,e){return 2*(1-s)*s*e}function A_(s,e){return s*s*e}function uo(s,e,t,r){return b_(s,e)+T_(s,t)+A_(s,r)}function C_(s,e){const t=1-s;return t*t*t*e}function R_(s,e){const t=1-s;return 3*t*t*s*e}function N_(s,e){return 3*(1-s)*s*s*e}function P_(s,e){return s*s*s*e}function fo(s,e,t,r,o){return C_(s,e)+R_(s,t)+N_(s,r)+P_(s,o)}class I_ extends Cr{constructor(e=new Ot,t=new Ot,r=new Ot,o=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ot){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D_ extends Cr{constructor(e=new ie,t=new ie,r=new ie,o=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends Cr{constructor(e=new Ot,t=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ot){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ot){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends Cr{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends Cr{constructor(e=new Ot,t=new Ot,r=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ot){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ag extends Cr{constructor(e=new ie,t=new ie,r=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O_ extends Cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ot){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(Wm(f,h.x,p.x,v.x,S.x),Wm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ot().fromArray(o))}return this}}var k_=Object.freeze({__proto__:null,ArcCurve:w_,CatmullRomCurve3:Bf,CubicBezierCurve:I_,CubicBezierCurve3:D_,EllipseCurve:sg,LineCurve:L_,LineCurve3:U_,QuadraticBezierCurve:F_,QuadraticBezierCurve3:ag,SplineCurve:O_});class cc extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],C=[],D=[],y=[];for(let _=0;_<v;_++){const L=_*x-u;for(let R=0;R<p;R++){const P=R*S-l;C.push(P,-L,0),D.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const R=L+p*_,P=L+p*(_+1),V=L+1+p*(_+1),I=L+1+p*_;M.push(R,P,I),M.push(P,V,I)}this.setIndex(M),this.setAttribute("position",new xn(C,3)),this.setAttribute("normal",new xn(D,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends vi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new ie,C=new Ot;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),C.x=(M.x/t+1)/2,C.y=(M.y/t+1)/2,v.push(C.x,C.y)}S+=x}for(let D=0;D<o;D++){const y=D*(r+1);for(let _=0;_<r;_++){const L=_+y,R=L,P=L+r+1,V=L+r+2,I=L+1;f.push(R,P,I),f.push(P,V,I)}}this.setIndex(f),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ie,x=new ie,M=[],C=[],D=[],y=[];for(let _=0;_<=r;_++){const L=[],R=_/r;let P=0;_===0&&u===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let V=0;V<=t;V++){const I=V/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+I*l)*Math.sin(u+R*f),C.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+P,1-R),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<t;L++){const R=v[_][L+1],P=v[_][L],V=v[_+1][L],I=v[_+1][L+1];(_!==0||u>0)&&M.push(R,P,I),(_!==r-1||h<Math.PI)&&M.push(P,V,I)}this.setIndex(M),this.setAttribute("position",new xn(C,3)),this.setAttribute("normal",new xn(D,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vf extends vi{constructor(e=new ag(new ie(-1,-1,0),new ie(-1,1,0),new ie(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ie,h=new ie,p=new Ot;let v=new ie;const S=[],x=[],M=[],C=[];D(),this.setIndex(C),this.setAttribute("position",new xn(S,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(M,2));function D(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),L(),_()}function y(R){v=e.getPointAt(R/t,v);const P=u.normals[R],V=u.binormals[R];for(let I=0;I<=o;I++){const O=I/o*Math.PI*2,T=Math.sin(O),N=-Math.cos(O);h.x=N*P.x+T*V.x,h.y=N*P.y+T*V.y,h.z=N*P.z+T*V.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let P=1;P<=o;P++){const V=(o+1)*(R-1)+(P-1),I=(o+1)*R+(P-1),O=(o+1)*R+P,T=(o+1)*(R-1)+P;C.push(V,I,T),C.push(I,O,T)}}function L(){for(let R=0;R<=t;R++)for(let P=0;P<=o;P++)p.x=R/t,p.y=P/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vf(new k_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Xm(o))o.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Xm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Xm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function B_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}const z_={clone:_a,merge:Zn};var V_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=B_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class G_ extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class j_ extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W_ extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fl=new ie,Ol=new ya,Ji=new ie;let lg=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Ol,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fl,Ol,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Kr=new ie,Ym=new Ot,$m=new Ot;class Ni extends lg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,$m),t.subVectors($m,Ym)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cg extends lg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,ua=1;class X_ extends xi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ni(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Ni(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Ni(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Ni(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new Ni(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new Ni(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class Y_ extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xf=class Xf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Xf.prototype.isMatrix2=!0;let qm=Xf;function Km(s,e,t,r){const o=$_(r);switch(t){case Y0:return s*e;case q0:return s*e/o.components*o.byteLength;case Nf:return s*e/o.components*o.byteLength;case As:return s*e*2/o.components*o.byteLength;case Pf:return s*e*2/o.components*o.byteLength;case $0:return s*e*3/o.components*o.byteLength;case ji:return s*e*4/o.components*o.byteLength;case If:return s*e*4/o.components*o.byteLength;case jl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:case jd:return Math.max(s,16)*Math.max(e,8)/4;case Vd:case Gd:return Math.max(s,8)*Math.max(e,8)/2;case Wd:case Xd:case $d:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yd:case Kl:case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $_(s){switch(s){case Pi:case G0:return{byteLength:1,components:1};case ho:case j0:case Tr:return{byteLength:2,components:1};case Cf:case Rf:return{byteLength:2,components:4};case ar:case Af:case tr:return{byteLength:4,components:1};case W0:case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ug(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function q_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<S.length;M++){const C=S[x],D=S[M];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,C=S.length;M<C;M++){const D=S[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yy=`PhysicalMaterial material;
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
#endif`,$y=`uniform sampler2D dfgLUT;
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
}`,qy=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aS=`#if defined( USE_POINTS_UV )
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
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`#ifdef USE_MORPHTARGETS
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
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_S=`#ifdef USE_NORMALMAP
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
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,US=`float getShadowMask() {
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
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,kS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,v1=`#define PHONG
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
}`,_1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,E1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,R1=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:K_,alphahash_pars_fragment:Z_,alphamap_fragment:J_,alphamap_pars_fragment:Q_,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:xy,color_vertex:vy,common:_y,cube_uv_reflection_fragment:yy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:wy,emissivemap_pars_fragment:by,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Ny,envmap_pars_vertex:Py,envmap_physical_pars_fragment:Hy,envmap_vertex:Iy,fog_vertex:Dy,fog_pars_vertex:Ly,fog_fragment:Uy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:ky,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:Vy,lights_toon_fragment:Gy,lights_toon_pars_fragment:jy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:Yy,lights_physical_pars_fragment:$y,lights_fragment_begin:qy,lights_fragment_maps:Ky,lights_fragment_end:Zy,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:eS,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:nS,map_fragment:iS,map_pars_fragment:rS,map_particle_fragment:sS,map_particle_pars_fragment:aS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:lS,morphinstance_vertex:cS,morphcolor_vertex:uS,morphnormal_vertex:dS,morphtarget_pars_vertex:fS,morphtarget_vertex:hS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:xS,normal_vertex:vS,normalmap_pars_fragment:_S,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:MS,iridescence_pars_fragment:ES,opaque_fragment:wS,packing:bS,premultiplied_alpha_fragment:TS,project_vertex:AS,dithering_fragment:CS,dithering_pars_fragment:RS,roughnessmap_fragment:NS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:DS,shadowmap_vertex:LS,shadowmask_pars_fragment:US,skinbase_vertex:FS,skinning_pars_vertex:OS,skinning_vertex:kS,skinnormal_vertex:BS,specularmap_fragment:zS,specularmap_pars_fragment:VS,tonemapping_fragment:HS,tonemapping_pars_fragment:GS,transmission_fragment:jS,transmission_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:YS,uv_vertex:$S,worldpos_vertex:qS,background_vert:KS,background_frag:ZS,backgroundCube_vert:JS,backgroundCube_frag:QS,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:r1,distance_frag:s1,equirect_vert:a1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:d1,meshlambert_vert:f1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:x1,meshphong_vert:v1,meshphong_frag:_1,meshphysical_vert:y1,meshphysical_frag:S1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:w1,points_frag:b1,shadow_vert:T1,shadow_frag:A1,sprite_vert:C1,sprite_frag:R1},at={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},er={basic:{uniforms:Zn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Zn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new sn(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Zn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Zn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Zn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new sn(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Zn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Zn([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Zn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Zn([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Zn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Zn([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Zn([at.common,at.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Zn([at.lights,at.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};er.physical={uniforms:Zn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const kl={r:0,b:0,g:0},N1=new Sn,dg=new Gt;dg.set(-1,0,0,0,1,0,0,0,1);function P1(s,e,t,r,o,l){const u=new sn(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;if(R&&R.isTexture){const P=L.backgroundBlurriness>0;R=e.get(R,P)}return R}function C(L){let R=!1;const P=M(L);P===null?y(u,f):P&&P.isColor&&(y(P,1),R=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(L,R){const P=M(R);P&&(P.isCubeTexture||P.mapping===oc)?(p===void 0&&(p=new Qn(new xo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:_a(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(dg),p.material.toneMapped=Zt.getTransfer(P.colorSpace)!==rn,(v!==P||S!==P.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Qn(new cc(2,2),new or({name:"BackgroundMaterial",uniforms:_a(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(P.colorSpace)!==rn,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,S=P.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,R){L.getRGB(kl,og(s)),t.buffers.color.setClear(kl.r,kl.g,kl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:C,addToRenderList:D,dispose:_}}function I1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(H,Z,re,me,W){let oe=!1;const K=S(H,me,re,Z);l!==K&&(l=K,p(l.object)),oe=M(H,me,re,W),oe&&C(H,me,re,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,P(H,Z,re,me),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,Z,re,me){const W=me.wireframe===!0;let oe=r[Z.id];oe===void 0&&(oe={},r[Z.id]=oe);const K=H.isInstancedMesh===!0?H.id:0;let J=oe[K];J===void 0&&(J={},oe[K]=J);let pe=J[re.id];pe===void 0&&(pe={},J[re.id]=pe);let ue=pe[W];return ue===void 0&&(ue=x(h()),pe[W]=ue),ue}function x(H){const Z=[],re=[],me=[];for(let W=0;W<t;W++)Z[W]=0,re[W]=0,me[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:re,attributeDivisors:me,object:H,attributes:{},index:null}}function M(H,Z,re,me){const W=l.attributes,oe=Z.attributes;let K=0;const J=re.getAttributes();for(const pe in J)if(J[pe].location>=0){const B=W[pe];let le=oe[pe];if(le===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),B===void 0||B.attribute!==le||le&&B.data!==le.data)return!0;K++}return l.attributesNum!==K||l.index!==me}function C(H,Z,re,me){const W={},oe=Z.attributes;let K=0;const J=re.getAttributes();for(const pe in J)if(J[pe].location>=0){let B=oe[pe];B===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const le={};le.attribute=B,B&&B.data&&(le.data=B.data),W[pe]=le,K++}l.attributes=W,l.attributesNum=K,l.index=me}function D(){const H=l.newAttributes;for(let Z=0,re=H.length;Z<re;Z++)H[Z]=0}function y(H){_(H,0)}function _(H,Z){const re=l.newAttributes,me=l.enabledAttributes,W=l.attributeDivisors;re[H]=1,me[H]===0&&(s.enableVertexAttribArray(H),me[H]=1),W[H]!==Z&&(s.vertexAttribDivisor(H,Z),W[H]=Z)}function L(){const H=l.newAttributes,Z=l.enabledAttributes;for(let re=0,me=Z.length;re<me;re++)Z[re]!==H[re]&&(s.disableVertexAttribArray(re),Z[re]=0)}function R(H,Z,re,me,W,oe,K){K===!0?s.vertexAttribIPointer(H,Z,re,W,oe):s.vertexAttribPointer(H,Z,re,me,W,oe)}function P(H,Z,re,me){D();const W=me.attributes,oe=re.getAttributes(),K=Z.defaultAttributeValues;for(const J in oe){const pe=oe[J];if(pe.location>=0){let ue=W[J];if(ue===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),ue!==void 0){const B=ue.normalized,le=ue.itemSize,et=e.get(ue);if(et===void 0)continue;const rt=et.buffer,Re=et.type,de=et.bytesPerElement,Ae=Re===s.INT||Re===s.UNSIGNED_INT||ue.gpuType===Af;if(ue.isInterleavedBufferAttribute){const _e=ue.data,Be=_e.stride,st=ue.offset;if(_e.isInstancedInterleavedBuffer){for(let ft=0;ft<pe.locationSize;ft++)_(pe.location+ft,_e.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ft=0;ft<pe.locationSize;ft++)y(pe.location+ft);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ft=0;ft<pe.locationSize;ft++)R(pe.location+ft,le/pe.locationSize,Re,B,Be*de,(st+le/pe.locationSize*ft)*de,Ae)}else{if(ue.isInstancedBufferAttribute){for(let _e=0;_e<pe.locationSize;_e++)_(pe.location+_e,ue.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<pe.locationSize;_e++)y(pe.location+_e);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let _e=0;_e<pe.locationSize;_e++)R(pe.location+_e,le/pe.locationSize,Re,B,le*de,le/pe.locationSize*_e*de,Ae)}}else if(K!==void 0){const B=K[J];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(pe.location,B);break;case 3:s.vertexAttrib3fv(pe.location,B);break;case 4:s.vertexAttrib4fv(pe.location,B);break;default:s.vertexAttrib1fv(pe.location,B)}}}}L()}function V(){N();for(const H in r){const Z=r[H];for(const re in Z){const me=Z[re];for(const W in me){const oe=me[W];for(const K in oe)v(oe[K].object),delete oe[K];delete me[W]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const Z=r[H.id];for(const re in Z){const me=Z[re];for(const W in me){const oe=me[W];for(const K in oe)v(oe[K].object),delete oe[K];delete me[W]}}delete r[H.id]}function O(H){for(const Z in r){const re=r[Z];for(const me in re){const W=re[me];if(W[H.id]===void 0)continue;const oe=W[H.id];for(const K in oe)v(oe[K].object),delete oe[K];delete W[H.id]}}}function T(H){for(const Z in r){const re=r[Z],me=H.isInstancedMesh===!0?H.id:0,W=re[me];if(W!==void 0){for(const oe in W){const K=W[oe];for(const J in K)v(K[J].object),delete K[J];delete W[oe]}delete re[me],Object.keys(re).length===0&&delete r[Z]}}}function N(){X(),u=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:X,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:y,disableUnusedAttributes:L}}function D1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function L1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==ji&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Pi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==tr&&!T)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(Ft("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:P,maxSamples:V,samples:I}}function U1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ys,f=new Gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const C=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||C===null||C.length===0||l&&!y)l?v(null):p();else{const L=l?0:r,R=L*4;let P=_.clippingState||null;h.value=P,P=v(C,x,R,M);for(let V=0;V!==R;++V)P[V]=t[V];_.clippingState=P,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,C){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=h.value,C!==!0||y===null){const _=M+D*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,P=M;R!==D;++R,P+=4)u.copy(S[R]).applyMatrix4(L,f),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const Qr=4,Zm=[.125,.215,.35,.446,.526,.582],Ms=20,F1=256,io=new cg,Jm=new sn;let Sd=null,Md=0,Ed=0,wd=!1;const O1=new ie;class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=O1}=l;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=wd,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Tr,format:ji,colorSpace:Jl,depthBuffer:!1},o=e0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k1(l)),this._blurMaterial=z1(l,e,t),this._ggxMaterial=B1(l,e,t)}return o}_compileMaterial(e){const t=new Qn(new vi,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new Ni(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Jm),S.toneMapping=ir,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new xo,new es({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let _=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,_=!0):(y.color.copy(Jm),_=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):P===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const V=this._cubeSize;da(o,P*V,R>2?V:0,V,V),S.setRenderTarget(o),_&&S.render(D,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ts||e.mapping===xa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:C}=this,D=this._sizeLods[r],y=3*D*(r>C-Qr?r-C+Qr:0),_=4*(this._cubeSize-D);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=C-t,da(l,y,_,3*D,2*D),o.setRenderTarget(l),o.render(f,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=C-r,da(e,y,_,3*D,2*D),o.setRenderTarget(e),o.render(f,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),D=l/C,y=isFinite(l)?1+Math.floor(v*D):Ms;y>Ms&&Ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const _=[];let L=0;for(let O=0;O<Ms;++O){const T=O/D,N=Math.exp(-T*T/2);_.push(N),O===0?L+=N:O<y&&(L+=2*N)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=C,x.mipInt.value=R-r;const P=this._sizeLods[o],V=3*P*(o>R-Qr?o-R+Qr:0),I=4*(this._cubeSize-P);da(t,V,I,3*P,2*P),h.setRenderTarget(t),h.render(S,io)}}function k1(s){const e=[],t=[],r=[];let o=s;const l=s-Qr+1+Zm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Qr?h=Zm[u-s+Qr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,C=6,D=3,y=2,_=1,L=new Float32Array(D*C*M),R=new Float32Array(y*C*M),P=new Float32Array(_*C*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,T=I>2?0:-1,N=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];L.set(N,D*C*I),R.set(x,y*C*I);const X=[I,I,I,I,I,I];P.set(X,_*C*I)}const V=new vi;V.setAttribute("position",new sr(L,D)),V.setAttribute("uv",new sr(R,y)),V.setAttribute("faceIndex",new sr(P,_)),r.push(new Qn(V,null)),o>Qr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function e0(s,e,t){const r=new rr(s,e,t);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function B1(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function z1(s,e,t){const r=new Float32Array(Ms),o=new ie(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:uc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function t0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function n0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}class fg extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ig(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xo(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ci,blending:wr});l.uniforms.tEquirect.value=t;const u=new Qn(o,l),f=t.minFilter;return t.minFilter===Es&&(t.minFilter=Wn),new X_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function V1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===Wu||M===Xu)if(e.has(x)){const C=e.get(x).texture;return f(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const D=new fg(C.height);return D.fromEquirectangularTexture(s,x),e.set(x,D),x.addEventListener("dispose",p),f(D.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,C=M===Wu||M===Xu,D=M===Ts||M===xa;if(C||D){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Qm(s)),y=C?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const L=x.image;return C&&L&&L.height>0||D&&L&&h(L)?(r===null&&(r=new Qm(s)),y=C?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===Wu?x.mapping=Ts:M===Xu&&(x.mapping=xa),x}function h(x){let M=0;const C=6;for(let D=0;D<C;D++)x[D]!==void 0&&M++;return M===C}function p(x){const M=x.target;M.removeEventListener("dispose",p);const C=e.get(M);C!==void 0&&(e.delete(M),C.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const C=t.get(M);C!==void 0&&(t.delete(M),C.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function H1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&vf("WebGLRenderer: "+r+" extension not supported."),o}}}function G1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,C=S.attributes.position;let D=0;if(C===void 0)return;if(M!==null){const L=M.array;D=M.version;for(let R=0,P=L.length;R<P;R+=3){const V=L[R+0],I=L[R+1],O=L[R+2];x.push(V,I,I,O,O,V)}}else{const L=C.array;D=C.version;for(let R=0,P=L.length/3-1;R<P;R+=3){const V=R+0,I=R+1,O=R+2;x.push(V,I,I,O,O,V)}}const y=new(C.count>=65535?tg:eg)(x,1);y.version=D;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function j1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];t.update(D,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function W1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:en("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function X1(s,e,t){const r=new WeakMap,o=new gn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let X=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",X)};var M=X;x!==void 0&&x.texture.dispose();const C=f.morphAttributes.position!==void 0,D=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let P=0;C===!0&&(P=1),D===!0&&(P=2),y===!0&&(P=3);let V=f.attributes.position.count*P,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*I*4*S),T=new Z0(O,V,I,S);T.type=tr,T.needsUpdate=!0;const N=P*4;for(let H=0;H<S;H++){const Z=_[H],re=L[H],me=R[H],W=V*I*4*H;for(let oe=0;oe<Z.count;oe++){const K=oe*N;C===!0&&(o.fromBufferAttribute(Z,oe),O[W+K+0]=o.x,O[W+K+1]=o.y,O[W+K+2]=o.z,O[W+K+3]=0),D===!0&&(o.fromBufferAttribute(re,oe),O[W+K+4]=o.x,O[W+K+5]=o.y,O[W+K+6]=o.z,O[W+K+7]=0),y===!0&&(o.fromBufferAttribute(me,oe),O[W+K+8]=o.x,O[W+K+9]=o.y,O[W+K+10]=o.z,O[W+K+11]=me.itemSize===4?o.w:1)}}x={count:S,texture:T,size:new Ot(V,I)},r.set(f,x),f.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const D=f.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",D),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function Y1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const $1={[U0]:"LINEAR_TONE_MAPPING",[F0]:"REINHARD_TONE_MAPPING",[O0]:"CINEON_TONE_MAPPING",[k0]:"ACES_FILMIC_TONE_MAPPING",[z0]:"AGX_TONE_MAPPING",[V0]:"NEUTRAL_TONE_MAPPING",[B0]:"CUSTOM_TONE_MAPPING"};function q1(s,e,t,r,o){const l=new rr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new va(e,t):void 0}),u=new rr(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new xn([0,2,0,0,2,0],2));const h=new G_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Qn(f,h),v=new cg(-1,1,1,-1,0,1);let S=null,x=null,M=!1,C,D=null,y=[],_=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let P=0;P<y.length;P++){const V=y[P];V.setSize&&V.setSize(L,R)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,P=l.height;for(let V=0;V<y.length;V++){const I=y[V];I.setSize&&I.setSize(R,P)}},this.begin=function(L,R){if(M||L.toneMapping===ir&&y.length===0)return!1;if(D=R,R!==null){const P=R.width,V=R.height;(l.width!==P||l.height!==V)&&this.setSize(P,V)}return _===!1&&L.setRenderTarget(l),C=L.toneMapping,L.toneMapping=ir,!0},this.hasRenderPass=function(){return _},this.end=function(L,R){L.toneMapping=C,M=!0;let P=l,V=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(L,V,P,R),O.needsSwap!==!1)){const T=P;P=V,V=T}}if(S!==L.outputColorSpace||x!==L.toneMapping){S=L.outputColorSpace,x=L.toneMapping,h.defines={},Zt.getTransfer(S)===rn&&(h.defines.SRGB_TRANSFER="");const I=$1[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(D),L.render(p,v),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const hg=new Jn,yf=new va(1,1),pg=new Z0,mg=new r_,gg=new ig,i0=[],r0=[],s0=new Float32Array(16),a0=new Float32Array(9),o0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=i0[o];if(l===void 0&&(l=new Float32Array(o),i0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function dc(s,e){let t=r0[e];t===void 0&&(t=new Int32Array(e),r0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function K1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function eM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,r))return;o0.set(r),s.uniformMatrix2fv(this.addr,!1,o0),Tn(t,r)}}function tM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,r))return;a0.set(r),s.uniformMatrix3fv(this.addr,!1,a0),Tn(t,r)}}function nM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,r))return;s0.set(r),s.uniformMatrix4fv(this.addr,!1,s0),Tn(t,r)}}function iM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=t.isReversedDepthBuffer()?Lf:Df,l=yf):l=hg,t.setTexture2D(e||l,o)}function fM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||mg,o)}function hM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||gg,o)}function pM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||pg,o)}function mM(s){switch(s){case 5126:return K1;case 35664:return Z1;case 35665:return J1;case 35666:return Q1;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function vM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function _M(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function yM(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function SM(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function MM(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function EM(s,e){s.uniform1iv(this.addr,e)}function wM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function TM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function NM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,t){const r=this.cache,o=e.length,l=dc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=yf:u=hg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function IM(s,e,t){const r=this.cache,o=e.length,l=dc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||mg,l[u])}function DM(s,e,t){const r=this.cache,o=e.length,l=dc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||gg,l[u])}function LM(s,e,t){const r=this.cache,o=e.length,l=dc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||pg,l[u])}function UM(s){switch(s){case 5126:return gM;case 35664:return xM;case 35665:return vM;case 35666:return _M;case 35674:return yM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return wM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}class FM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class OM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function l0(s,e){s.seq.push(e),s.map[e.id]=e}function BM(s,e,t){const r=s.name,o=r.length;for(bd.lastIndex=0;;){const l=bd.exec(r),u=bd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){l0(t,p===void 0?new FM(f,s,e):new OM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new kM(f),l0(t,S)),t=S}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);BM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function c0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const zM=37297;let VM=0;function HM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const u0=new Gt;function GM(s){Zt._getMatrix(u0,Zt.workingColorSpace,s);const e=`mat3( ${u0.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function d0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+HM(s.getShaderSource(e),f)}else return l}function jM(s,e){const t=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const WM={[U0]:"Linear",[F0]:"Reinhard",[O0]:"Cineon",[k0]:"ACESFilmic",[z0]:"AgX",[V0]:"Neutral",[B0]:"Custom"};function XM(s,e){const t=WM[e];return t===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new ie;function YM(){Zt.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function qM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function KM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function f0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(s){return s.replace(ZM,QM)}const JM=new Map;function QM(s,e){let t=Wt[e];if(t===void 0){const r=JM.get(e);if(r!==void 0)t=Wt[r],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(s){return s.replace(eE,tE)}function tE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function m0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const nE={[Gl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function iE(s){return nE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rE={[Ts]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function sE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":rE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const aE={[xa]:"ENVMAP_MODE_REFRACTION"};function oE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lE={[L0]:"ENVMAP_BLENDING_MULTIPLY",[Ov]:"ENVMAP_BLENDING_MIX",[kv]:"ENVMAP_BLENDING_ADD"};function cE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lE[s.combine]||"ENVMAP_BLENDING_NONE"}function uE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=iE(t),p=sE(t),v=oE(t),S=cE(t),x=uE(t),M=$M(t),C=qM(l),D=o.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Wt.tonemapping_pars_fragment:"",t.toneMapping!==ir?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=Sf(u),u=f0(u,t),u=h0(u,t),f=Sf(f),f=f0(f,t),f=h0(f,t),u=p0(u),f=p0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+y+u,P=L+_+f,V=c0(o,o.VERTEX_SHADER,R),I=c0(o,o.FRAGMENT_SHADER,P);o.attachShader(D,V),o.attachShader(D,I),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function O(H){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(D)||"",re=o.getShaderInfoLog(V)||"",me=o.getShaderInfoLog(I)||"",W=Z.trim(),oe=re.trim(),K=me.trim();let J=!0,pe=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,V,I);else{const ue=d0(o,V,"vertex"),B=d0(o,I,"fragment");en("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+ue+`
`+B)}else W!==""?Ft("WebGLProgram: Program Info Log:",W):(oe===""||K==="")&&(pe=!1);pe&&(H.diagnostics={runnable:J,programLog:W,vertexShader:{log:oe,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(V),o.deleteShader(I),T=new $l(o,D),N=KM(o,D)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(D,zM)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=I,this}let fE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pE(e),t.set(e,r)),r}}class pE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function mE(s){return s===As||s===Kl||s===Zl}function gE(s,e,t,r,o,l){const u=new J0,f=new hE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return h.add(T),T===0?"uv":`uv${T}`}function D(T,N,X,H,Z,re){const me=H.fog,W=Z.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||oe,K),pe=J&&J.mapping===oc?J.image.height:null,ue=M[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&Ft("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=B!==void 0?B.length:0;let et=0;W.morphAttributes.position!==void 0&&(et=1),W.morphAttributes.normal!==void 0&&(et=2),W.morphAttributes.color!==void 0&&(et=3);let rt,Re,de,Ae;if(ue){const yt=er[ue];rt=yt.vertexShader,Re=yt.fragmentShader}else rt=T.vertexShader,Re=T.fragmentShader,f.update(T),de=f.getVertexShaderID(T),Ae=f.getFragmentShaderID(T);const _e=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),st=Z.isInstancedMesh===!0,ft=Z.isBatchedMesh===!0,St=!!T.map,_t=!!T.matcap,Bt=!!J,$t=!!T.aoMap,bt=!!T.lightMap,Vt=!!T.bumpMap,Nt=!!T.normalMap,jt=!!T.displacementMap,$=!!T.emissiveMap,Lt=!!T.metalnessMap,Mt=!!T.roughnessMap,Tt=T.anisotropy>0,Je=T.clearcoat>0,zt=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,ae=T.transmission>0,Me=Tt&&!!T.anisotropyMap,Ne=Je&&!!T.clearcoatMap,We=Je&&!!T.clearcoatNormalMap,Ye=Je&&!!T.clearcoatRoughnessMap,xe=U&&!!T.iridescenceMap,we=U&&!!T.iridescenceThicknessMap,Ie=E&&!!T.sheenColorMap,nt=E&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Se=!!T.specularColorMap,De=!!T.specularIntensityMap,wt=ae&&!!T.transmissionMap,Pt=ae&&!!T.thicknessMap,Y=!!T.gradientMap,Pe=!!T.alphaMap,ye=T.alphaTest>0,qe=!!T.alphaHash,Le=!!T.extensions;let Ce=ir;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const ot={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:Re,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:ft,batchingColor:ft&&Z._colorsTexture!==null,instancing:st,instancingColor:st&&Z.instanceColor!==null,instancingMorph:st&&Z.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:St,matcap:_t,envMap:Bt,envMapMode:Bt&&J.mapping,envMapCubeUVHeight:pe,aoMap:$t,lightMap:bt,bumpMap:Vt,normalMap:Nt,displacementMap:jt,emissiveMap:$,normalMapObjectSpace:Nt&&T.normalMapType===Vv,normalMapTangentSpace:Nt&&T.normalMapType===Em,packedNormalMap:Nt&&T.normalMapType===Em&&mE(T.normalMap.format),metalnessMap:Lt,roughnessMap:Mt,anisotropy:Tt,anisotropyMap:Me,clearcoat:Je,clearcoatMap:Ne,clearcoatNormalMap:We,clearcoatRoughnessMap:Ye,dispersion:zt,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:we,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:nt,specularMap:$e,specularColorMap:Se,specularIntensityMap:De,transmission:ae,transmissionMap:wt,thicknessMap:Pt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===pa&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ye,alphaHash:qe,combine:T.combine,mapUv:St&&C(T.map.channel),aoMapUv:$t&&C(T.aoMap.channel),lightMapUv:bt&&C(T.lightMap.channel),bumpMapUv:Vt&&C(T.bumpMap.channel),normalMapUv:Nt&&C(T.normalMap.channel),displacementMapUv:jt&&C(T.displacementMap.channel),emissiveMapUv:$&&C(T.emissiveMap.channel),metalnessMapUv:Lt&&C(T.metalnessMap.channel),roughnessMapUv:Mt&&C(T.roughnessMap.channel),anisotropyMapUv:Me&&C(T.anisotropyMap.channel),clearcoatMapUv:Ne&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:we&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:nt&&C(T.sheenRoughnessMap.channel),specularMapUv:$e&&C(T.specularMap.channel),specularColorMapUv:Se&&C(T.specularColorMap.channel),specularIntensityMapUv:De&&C(T.specularIntensityMap.channel),transmissionMapUv:wt&&C(T.transmissionMap.channel),thicknessMapUv:Pt&&C(T.thicknessMap.channel),alphaMapUv:Pe&&C(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Nt||Tt),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(St||Pe),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Nt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Be,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:St&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:$&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mr,flipSided:T.side===ci,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ot.vertexUv1s=h.has(1),ot.vertexUv2s=h.has(2),ot.vertexUv3s=h.has(3),h.clear(),ot}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)N.push(X),N.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(_(N,T),L(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function L(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function R(T){const N=M[T.type];let X;if(N){const H=er[N];X=z_.clone(H.uniforms)}else X=T.uniforms;return X}function P(T,N){let X=v.get(N);return X!==void 0?++X.usedTimes:(X=new dE(s,N,T,o),p.push(X),v.set(N,X)),X}function V(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){f.remove(T)}function O(){f.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:V,releaseShaderCache:I,programs:p,dispose:O}}function xE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function vE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function g0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function x0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,C,D,y,_){let L=s[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:C,materialVariant:u(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:_},s[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=C,L.materialVariant=u(x),L.groupOrder=D,L.renderOrder=x.renderOrder,L.z=y,L.group=_),e++,L}function h(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.push(L):C.transparent===!0?o.push(L):t.push(L)}function p(x,M,C,D,y,_){const L=f(x,M,C,D,y,_);C.transmission>0?r.unshift(L):C.transparent===!0?o.unshift(L):t.unshift(L)}function v(x,M){t.length>1&&t.sort(x||vE),r.length>1&&r.sort(M||g0),o.length>1&&o.sort(M||g0)}function S(){for(let x=e,M=s.length;x<M;x++){const C=s[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function _E(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new x0,s.set(r,[u])):o>=l.length?(u=new x0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new sn};break;case"SpotLight":t={position:new ie,direction:new ie,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new sn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":t={color:new sn,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ME=0;function EE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wE(s){const e=new yE,t=SE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new Sn,u=new Sn;function f(p){let v=0,S=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,C=0,D=0,y=0,_=0,L=0,R=0,P=0,V=0,I=0,O=0;p.sort(EE);for(let N=0,X=p.length;N<X;N++){const H=p[N],Z=H.color,re=H.intensity,me=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===As?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Z.r*re,S+=Z.g*re,x+=Z.b*re;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],re);O++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.directionalShadow[M]=J,r.directionalShadowMap[M]=W,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=oe,M++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(Z).multiplyScalar(re),oe.distance=me,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[D]=oe;const K=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,K.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[D]=K.matrix,H.castShadow){const J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.spotShadow[D]=J,r.spotShadowMap[D]=W,P++}D++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(Z).multiplyScalar(re),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const K=H.shadow,J=t.get(H);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,r.pointShadow[C]=J,r.pointShadowMap[C]=W,r.pointShadowMatrix[C]=H.shadow.matrix,R++}r.point[C]=oe,C++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(re),oe.groundColor.copy(H.groundColor).multiplyScalar(re),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==M||T.pointLength!==C||T.spotLength!==D||T.rectAreaLength!==y||T.hemiLength!==_||T.numDirectionalShadows!==L||T.numPointShadows!==R||T.numSpotShadows!==P||T.numSpotMaps!==V||T.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,T.directionalLength=M,T.pointLength=C,T.spotLength=D,T.rectAreaLength=y,T.hemiLength=_,T.numDirectionalShadows=L,T.numPointShadows=R,T.numSpotShadows=P,T.numSpotMaps=V,T.numLightProbes=O,r.version=ME++)}function h(p,v){let S=0,x=0,M=0,C=0,D=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const R=p[_];if(R.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(R.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const P=r.rectArea[C];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const P=r.hemi[D];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),D++}}}return{setup:f,setupView:h,state:r}}function v0(s){const e=new wE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function bE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new v0(s),e.set(o,[f])):l>=u.length?(f=new v0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,CE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],RE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],_0=new Sn,ro=new ie,Td=new ie;function NE(s,e,t){let r=new ng;const o=new Ot,l=new Ot,u=new gn,f=new j_,h=new W_,p={},v=t.maxTextureSize,S={[ts]:ci,[ci]:ts,[Mr]:Mr},x=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:TE,fragmentShader:AE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new vi;C.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Qn(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let _=this.type;this.render=function(I,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===vv&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gl);const N=s.getRenderTarget(),X=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(wr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const re=_!==this.type;re&&O.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(W=>W.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,W=I.length;me<W;me++){const oe=I[me],K=oe.shadow;if(K===void 0){Ft("WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const J=K.getFrameExtents();o.multiply(J),l.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,K.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,K.mapSize.y=l.y));const pe=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=pe,K.map===null||re===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===so){if(oe.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new rr(o.x,o.y,{format:As,type:Tr,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),K.map.texture.name=oe.name+".shadowMap",K.map.depthTexture=new va(o.x,o.y,tr),K.map.depthTexture.name=oe.name+".shadowMapDepth",K.map.depthTexture.format=Ar,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Un,K.map.depthTexture.magFilter=Un}else oe.isPointLight?(K.map=new fg(o.x),K.map.depthTexture=new E_(o.x,ar)):(K.map=new rr(o.x,o.y),K.map.depthTexture=new va(o.x,o.y,ar)),K.map.depthTexture.name=oe.name+".shadowMap",K.map.depthTexture.format=Ar,this.type===Gl?(K.map.depthTexture.compareFunction=pe?Lf:Df,K.map.depthTexture.minFilter=Wn,K.map.depthTexture.magFilter=Wn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Un,K.map.depthTexture.magFilter=Un);K.camera.updateProjectionMatrix()}const ue=K.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ue;B++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,B),s.clear();else{B===0&&(s.setRenderTarget(K.map),s.clear());const le=K.getViewport(B);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),Z.viewport(u)}if(oe.isPointLight){const le=K.camera,et=K.matrix,rt=oe.distance||le.far;rt!==le.far&&(le.far=rt,le.updateProjectionMatrix()),ro.setFromMatrixPosition(oe.matrixWorld),le.position.copy(ro),Td.copy(le.position),Td.add(CE[B]),le.up.copy(RE[B]),le.lookAt(Td),le.updateMatrixWorld(),et.makeTranslation(-ro.x,-ro.y,-ro.z),_0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),K._frustum.setFromProjectionMatrix(_0,le.coordinateSystem,le.reversedDepth)}else K.updateMatrices(oe);r=K.getFrustum(),P(O,T,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===so&&L(K,T),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(N,X,H)};function L(I,O){const T=e.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new rr(o.x,o.y,{format:As,type:Tr})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,T,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,T,M,D,null)}function R(I,O,T,N){let X=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)X=H;else if(X=T.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=X.uuid,re=O.uuid;let me=p[Z];me===void 0&&(me={},p[Z]=me);let W=me[re];W===void 0&&(W=X.clone(),me[re]=W,O.addEventListener("dispose",V)),X=W}if(X.visible=O.visible,X.wireframe=O.wireframe,N===so?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:S[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Z=s.properties.get(X);Z.light=T}return X}function P(I,O,T,N,X){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&X===so)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const re=e.update(I),me=I.material;if(Array.isArray(me)){const W=re.groups;for(let oe=0,K=W.length;oe<K;oe++){const J=W[oe],pe=me[J.materialIndex];if(pe&&pe.visible){const ue=R(I,pe,N,X);I.onBeforeShadow(s,I,O,T,re,ue,J),s.renderBufferDirect(T,null,re,ue,I,J),I.onAfterShadow(s,I,O,T,re,ue,J)}}}else if(me.visible){const W=R(I,me,N,X);I.onBeforeShadow(s,I,O,T,re,W,null),s.renderBufferDirect(T,null,re,W,I,null),I.onAfterShadow(s,I,O,T,re,W,null)}}const Z=I.children;for(let re=0,me=Z.length;re<me;re++)P(Z[re],O,T,N,X)}function V(I){I.target.removeEventListener("dispose",V);for(const T in p){const N=p[T],X=I.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function PE(s,e){function t(){let Y=!1;const Pe=new gn;let ye=null;const qe=new gn(0,0,0,0);return{setMask:function(Le){ye!==Le&&!Y&&(s.colorMask(Le,Le,Le,Le),ye=Le)},setLocked:function(Le){Y=Le},setClear:function(Le,Ce,ot,yt,Jt){Jt===!0&&(Le*=yt,Ce*=yt,ot*=yt),Pe.set(Le,Ce,ot,yt),qe.equals(Pe)===!1&&(s.clearColor(Le,Ce,ot,yt),qe.copy(Pe))},reset:function(){Y=!1,ye=null,qe.set(-1,0,0,0)}}}function r(){let Y=!1,Pe=!1,ye=null,qe=null,Le=null;return{setReversed:function(Ce){if(Pe!==Ce){const ot=e.get("EXT_clip_control");Ce?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Pe=Ce;const yt=Le;Le=null,this.setClear(yt)}},getReversed:function(){return Pe},setTest:function(Ce){Ce?_e(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ce){ye!==Ce&&!Y&&(s.depthMask(Ce),ye=Ce)},setFunc:function(Ce){if(Pe&&(Ce=Zv[Ce]),qe!==Ce){switch(Ce){case Id:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ud:s.depthFunc(s.EQUAL);break;case Fd:s.depthFunc(s.GEQUAL);break;case Od:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}qe=Ce}},setLocked:function(Ce){Y=Ce},setClear:function(Ce){Le!==Ce&&(Le=Ce,Pe&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){Y=!1,ye=null,qe=null,Le=null,Pe=!1}}}function o(){let Y=!1,Pe=null,ye=null,qe=null,Le=null,Ce=null,ot=null,yt=null,Jt=null;return{setTest:function(Kt){Y||(Kt?_e(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Kt){Pe!==Kt&&!Y&&(s.stencilMask(Kt),Pe=Kt)},setFunc:function(Kt,vn,Fn){(ye!==Kt||qe!==vn||Le!==Fn)&&(s.stencilFunc(Kt,vn,Fn),ye=Kt,qe=vn,Le=Fn)},setOp:function(Kt,vn,Fn){(Ce!==Kt||ot!==vn||yt!==Fn)&&(s.stencilOp(Kt,vn,Fn),Ce=Kt,ot=vn,yt=Fn)},setLocked:function(Kt){Y=Kt},setClear:function(Kt){Jt!==Kt&&(s.clearStencil(Kt),Jt=Kt)},reset:function(){Y=!1,Pe=null,ye=null,qe=null,Le=null,Ce=null,ot=null,yt=null,Jt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,V=null,I=null,O=null,T=new sn(0,0,0),N=0,X=!1,H=null,Z=null,re=null,me=null,W=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(pe)[1]),K=J>=1):pe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),K=J>=2);let ue=null,B={};const le=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),rt=new gn().fromArray(le),Re=new gn().fromArray(et);function de(Y,Pe,ye,qe){const Le=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(Y,Ce),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<ye;ot++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Pe+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ce}const Ae={};Ae[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),u.setFunc(ga),Vt(!1),Nt(_m),_e(s.CULL_FACE),$t(wr);function _e(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function Be(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function st(Y,Pe){return x[Y]!==Pe?(s.bindFramebuffer(Y,Pe),x[Y]=Pe,Y===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Pe),Y===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ft(Y,Pe){let ye=C,qe=!1;if(Y){ye=M.get(Pe),ye===void 0&&(ye=[],M.set(Pe,ye));const Le=Y.textures;if(ye.length!==Le.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,ot=Le.length;Ce<ot;Ce++)ye[Ce]=s.COLOR_ATTACHMENT0+Ce;ye.length=Le.length,qe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,qe=!0);qe&&s.drawBuffers(ye)}function St(Y){return D!==Y?(s.useProgram(Y),D=Y,!0):!1}const _t={[Ss]:s.FUNC_ADD,[yv]:s.FUNC_SUBTRACT,[Sv]:s.FUNC_REVERSE_SUBTRACT};_t[Mv]=s.MIN,_t[Ev]=s.MAX;const Bt={[wv]:s.ZERO,[bv]:s.ONE,[Tv]:s.SRC_COLOR,[Nd]:s.SRC_ALPHA,[Iv]:s.SRC_ALPHA_SATURATE,[Nv]:s.DST_COLOR,[Cv]:s.DST_ALPHA,[Av]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[Pv]:s.ONE_MINUS_DST_COLOR,[Rv]:s.ONE_MINUS_DST_ALPHA,[Dv]:s.CONSTANT_COLOR,[Lv]:s.ONE_MINUS_CONSTANT_COLOR,[Uv]:s.CONSTANT_ALPHA,[Fv]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(Y,Pe,ye,qe,Le,Ce,ot,yt,Jt,Kt){if(Y===wr){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(_e(s.BLEND),y=!0),Y!==_v){if(Y!==_||Kt!==X){if((L!==Ss||V!==Ss)&&(s.blendEquation(s.FUNC_ADD),L=Ss,V=Ss),Kt)switch(Y){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:en("WebGLState: Invalid blending: ",Y);break}else switch(Y){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sm:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",Y);break}R=null,P=null,I=null,O=null,T.set(0,0,0),N=0,_=Y,X=Kt}return}Le=Le||Pe,Ce=Ce||ye,ot=ot||qe,(Pe!==L||Le!==V)&&(s.blendEquationSeparate(_t[Pe],_t[Le]),L=Pe,V=Le),(ye!==R||qe!==P||Ce!==I||ot!==O)&&(s.blendFuncSeparate(Bt[ye],Bt[qe],Bt[Ce],Bt[ot]),R=ye,P=qe,I=Ce,O=ot),(yt.equals(T)===!1||Jt!==N)&&(s.blendColor(yt.r,yt.g,yt.b,Jt),T.copy(yt),N=Jt),_=Y,X=!1}function bt(Y,Pe){Y.side===Mr?Be(s.CULL_FACE):_e(s.CULL_FACE);let ye=Y.side===ci;Pe&&(ye=!ye),Vt(ye),Y.blending===pa&&Y.transparent===!1?$t(wr):$t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const qe=Y.stencilWrite;f.setTest(qe),qe&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(Y){H!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),H=Y)}function Nt(Y){Y!==gv?(_e(s.CULL_FACE),Y!==Z&&(Y===_m?s.cullFace(s.BACK):Y===xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),Z=Y}function jt(Y){Y!==re&&(K&&s.lineWidth(Y),re=Y)}function $(Y,Pe,ye){Y?(_e(s.POLYGON_OFFSET_FILL),(me!==Pe||W!==ye)&&(me=Pe,W=ye,u.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ye))):Be(s.POLYGON_OFFSET_FILL)}function Lt(Y){Y?_e(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Mt(Y){Y===void 0&&(Y=s.TEXTURE0+oe-1),ue!==Y&&(s.activeTexture(Y),ue=Y)}function Tt(Y,Pe,ye){ye===void 0&&(ue===null?ye=s.TEXTURE0+oe-1:ye=ue);let qe=B[ye];qe===void 0&&(qe={type:void 0,texture:void 0},B[ye]=qe),(qe.type!==Y||qe.texture!==Pe)&&(ue!==ye&&(s.activeTexture(ye),ue=ye),s.bindTexture(Y,Pe||Ae[Y]),qe.type=Y,qe.texture=Pe)}function Je(){const Y=B[ue];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function zt(){try{s.compressedTexImage2D(...arguments)}catch(Y){en("WebGLState:",Y)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(Y){en("WebGLState:",Y)}}function E(){try{s.texSubImage2D(...arguments)}catch(Y){en("WebGLState:",Y)}}function ae(){try{s.texSubImage3D(...arguments)}catch(Y){en("WebGLState:",Y)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){en("WebGLState:",Y)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){en("WebGLState:",Y)}}function We(){try{s.texStorage2D(...arguments)}catch(Y){en("WebGLState:",Y)}}function Ye(){try{s.texStorage3D(...arguments)}catch(Y){en("WebGLState:",Y)}}function xe(){try{s.texImage2D(...arguments)}catch(Y){en("WebGLState:",Y)}}function we(){try{s.texImage3D(...arguments)}catch(Y){en("WebGLState:",Y)}}function Ie(Y){return S[Y]!==void 0?S[Y]:s.getParameter(Y)}function nt(Y,Pe){S[Y]!==Pe&&(s.pixelStorei(Y,Pe),S[Y]=Pe)}function $e(Y){rt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),rt.copy(Y))}function Se(Y){Re.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function De(Y,Pe){let ye=p.get(Pe);ye===void 0&&(ye=new WeakMap,p.set(Pe,ye));let qe=ye.get(Y);qe===void 0&&(qe=s.getUniformBlockIndex(Pe,Y.name),ye.set(Y,qe))}function wt(Y,Pe){const qe=p.get(Pe).get(Y);h.get(Pe)!==qe&&(s.uniformBlockBinding(Pe,qe,Y.__bindingPointIndex),h.set(Pe,qe))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},ue=null,B={},x={},M=new WeakMap,C=[],D=null,y=!1,_=null,L=null,R=null,P=null,V=null,I=null,O=null,T=new sn(0,0,0),N=0,X=!1,H=null,Z=null,re=null,me=null,W=null,rt.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Be,bindFramebuffer:st,drawBuffers:ft,useProgram:St,setBlending:$t,setMaterial:bt,setFlipSided:Vt,setCullFace:Nt,setLineWidth:jt,setPolygonOffset:$,setScissorTest:Lt,activeTexture:Mt,bindTexture:Tt,unbindTexture:Je,compressedTexImage2D:zt,compressedTexImage3D:U,texImage2D:xe,texImage3D:we,pixelStorei:nt,getParameter:Ie,updateUBOMapping:De,uniformBlockBinding:wt,texStorage2D:We,texStorage3D:Ye,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:$e,viewport:Se,reset:Pt}}function IE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,E){return C?new OffscreenCanvas(U,E):tc("canvas")}function y(U,E,ae){let Me=1;const Ne=zt(U);if((Ne.width>ae||Ne.height>ae)&&(Me=ae/Math.max(Ne.width,Ne.height)),Me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const We=Math.floor(Me*Ne.width),Ye=Math.floor(Me*Ne.height);x===void 0&&(x=D(We,Ye));const xe=E?D(We,Ye):x;return xe.width=We,xe.height=Ye,xe.getContext("2d").drawImage(U,0,0,We,Ye),Ft("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+We+"x"+Ye+")."),xe}else return"data"in U&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),U;return U}function _(U){return U.generateMipmaps}function L(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(U,E,ae,Me,Ne,We=!1){if(U!==null){if(s[U]!==void 0)return s[U];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ye;Me&&(Ye=e.get("EXT_texture_norm16"),Ye||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===s.RED&&(ae===s.FLOAT&&(xe=s.R32F),ae===s.HALF_FLOAT&&(xe=s.R16F),ae===s.UNSIGNED_BYTE&&(xe=s.R8),ae===s.UNSIGNED_SHORT&&Ye&&(xe=Ye.R16_EXT),ae===s.SHORT&&Ye&&(xe=Ye.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.R8UI),ae===s.UNSIGNED_SHORT&&(xe=s.R16UI),ae===s.UNSIGNED_INT&&(xe=s.R32UI),ae===s.BYTE&&(xe=s.R8I),ae===s.SHORT&&(xe=s.R16I),ae===s.INT&&(xe=s.R32I)),E===s.RG&&(ae===s.FLOAT&&(xe=s.RG32F),ae===s.HALF_FLOAT&&(xe=s.RG16F),ae===s.UNSIGNED_BYTE&&(xe=s.RG8),ae===s.UNSIGNED_SHORT&&Ye&&(xe=Ye.RG16_EXT),ae===s.SHORT&&Ye&&(xe=Ye.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ae===s.UNSIGNED_INT&&(xe=s.RG32UI),ae===s.BYTE&&(xe=s.RG8I),ae===s.SHORT&&(xe=s.RG16I),ae===s.INT&&(xe=s.RG32I)),E===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ae===s.UNSIGNED_INT&&(xe=s.RGB32UI),ae===s.BYTE&&(xe=s.RGB8I),ae===s.SHORT&&(xe=s.RGB16I),ae===s.INT&&(xe=s.RGB32I)),E===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ae===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ae===s.BYTE&&(xe=s.RGBA8I),ae===s.SHORT&&(xe=s.RGBA16I),ae===s.INT&&(xe=s.RGBA32I)),E===s.RGB&&(ae===s.UNSIGNED_SHORT&&Ye&&(xe=Ye.RGB16_EXT),ae===s.SHORT&&Ye&&(xe=Ye.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),E===s.RGBA){const we=We?Ql:Zt.getTransfer(Ne);ae===s.FLOAT&&(xe=s.RGBA32F),ae===s.HALF_FLOAT&&(xe=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(xe=we===rn?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&Ye&&(xe=Ye.RGBA16_EXT),ae===s.SHORT&&Ye&&(xe=Ye.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function V(U,E){let ae;return U?E===null||E===ar||E===po?ae=s.DEPTH24_STENCIL8:E===tr?ae=s.DEPTH32F_STENCIL8:E===ho&&(ae=s.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ar||E===po?ae=s.DEPTH_COMPONENT24:E===tr?ae=s.DEPTH_COMPONENT32F:E===ho&&(ae=s.DEPTH_COMPONENT16),ae}function I(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function O(U){const E=U.target;E.removeEventListener("dispose",O),N(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),H(E)}function N(U){const E=r.get(U);if(E.__webglInit===void 0)return;const ae=U.source,Me=M.get(ae);if(Me){const Ne=Me[E.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&X(U),Object.keys(Me).length===0&&M.delete(ae)}r.remove(U)}function X(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const ae=U.source,Me=M.get(ae);delete Me[E.__cacheKey],u.memory.textures--}function H(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(E.__webglFramebuffer[Me]))for(let Ne=0;Ne<E.__webglFramebuffer[Me].length;Ne++)s.deleteFramebuffer(E.__webglFramebuffer[Me][Ne]);else s.deleteFramebuffer(E.__webglFramebuffer[Me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Me])}else{if(Array.isArray(E.__webglFramebuffer))for(let Me=0;Me<E.__webglFramebuffer.length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[Me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Me=0;Me<E.__webglColorRenderbuffer.length;Me++)E.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ae=U.textures;for(let Me=0,Ne=ae.length;Me<Ne;Me++){const We=r.get(ae[Me]);We.__webglTexture&&(s.deleteTexture(We.__webglTexture),u.memory.textures--),r.remove(ae[Me])}r.remove(U)}let Z=0;function re(){Z=0}function me(){return Z}function W(U){Z=U}function oe(){const U=Z;return U>=o.maxTextures&&Ft("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function J(U,E){const ae=r.get(U);if(U.isVideoTexture&&Tt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ae.__version!==U.version){const Me=U.image;if(Me===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(ae,U,E);return}}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function pe(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){Be(ae,U,E);return}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function ue(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){Be(ae,U,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function B(U,E){const ae=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ae.__version!==U.version){st(ae,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}const le={[Bd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[zd]:s.MIRRORED_REPEAT},et={[Un]:s.NEAREST,[Bv]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[Yu]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},rt={[Hv]:s.NEVER,[Yv]:s.ALWAYS,[Gv]:s.LESS,[Df]:s.LEQUAL,[jv]:s.EQUAL,[Lf]:s.GEQUAL,[Wv]:s.GREATER,[Xv]:s.NOTEQUAL};function Re(U,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Yu||E.magFilter===vl||E.magFilter===Es||E.minFilter===Wn||E.minFilter===Yu||E.minFilter===vl||E.minFilter===Es)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,et[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==vl&&E.minFilter!==Es||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function de(U,E){let ae=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",O));const Me=E.source;let Ne=M.get(Me);Ne===void 0&&(Ne={},M.set(Me,Ne));const We=K(E);if(We!==U.__cacheKey){Ne[We]===void 0&&(Ne[We]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Ne[We].usedTimes++;const Ye=Ne[U.__cacheKey];Ye!==void 0&&(Ne[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&X(E)),U.__cacheKey=We,U.__webglTexture=Ne[We].texture}return ae}function Ae(U,E,ae){return Math.floor(Math.floor(U/ae)/E)}function _e(U,E,ae,Me){const We=U.updateRanges;if(We.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ae,Me,E.data);else{We.sort((nt,$e)=>nt.start-$e.start);let Ye=0;for(let nt=1;nt<We.length;nt++){const $e=We[Ye],Se=We[nt],De=$e.start+$e.count,wt=Ae(Se.start,E.width,4),Pt=Ae($e.start,E.width,4);Se.start<=De+1&&wt===Pt&&Ae(Se.start+Se.count-1,E.width,4)===wt?$e.count=Math.max($e.count,Se.start+Se.count-$e.start):(++Ye,We[Ye]=Se)}We.length=Ye+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let nt=0,$e=We.length;nt<$e;nt++){const Se=We[nt],De=Math.floor(Se.start/4),wt=Math.ceil(Se.count/4),Pt=De%E.width,Y=Math.floor(De/E.width),Pe=wt,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,Pt,Y,Pe,ye,ae,Me,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Be(U,E,ae){let Me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Me=s.TEXTURE_3D);const Ne=de(U,E),We=E.source;t.bindTexture(Me,U.__webglTexture,s.TEXTURE0+ae);const Ye=r.get(We);if(We.version!==Ye.__version||Ne===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Zt.getPrimaries(Zt.workingColorSpace),qe=E.colorSpace===Jr?null:Zt.getPrimaries(E.colorSpace),Le=E.colorSpace===Jr||ye===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let we=y(E.image,!1,o.maxTextureSize);we=Je(E,we);const Ie=l.convert(E.format,E.colorSpace),nt=l.convert(E.type);let $e=P(E.internalFormat,Ie,nt,E.normalized,E.colorSpace,E.isVideoTexture);Re(Me,E);let Se;const De=E.mipmaps,wt=E.isVideoTexture!==!0,Pt=Ye.__version===void 0||Ne===!0,Y=We.dataReady,Pe=I(E,we);if(E.isDepthTexture)$e=V(E.format===ws,E.type),Pt&&(wt?t.texStorage2D(s.TEXTURE_2D,1,$e,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,$e,we.width,we.height,0,Ie,nt,null));else if(E.isDataTexture)if(De.length>0){wt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,De[0].width,De[0].height);for(let ye=0,qe=De.length;ye<qe;ye++)Se=De[ye],wt?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Se.width,Se.height,Ie,nt,Se.data):t.texImage2D(s.TEXTURE_2D,ye,$e,Se.width,Se.height,0,Ie,nt,Se.data);E.generateMipmaps=!1}else wt?(Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,we.width,we.height),Y&&_e(E,we,Ie,nt)):t.texImage2D(s.TEXTURE_2D,0,$e,we.width,we.height,0,Ie,nt,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,$e,De[0].width,De[0].height,we.depth);for(let ye=0,qe=De.length;ye<qe;ye++)if(Se=De[ye],E.format!==ji)if(Ie!==null)if(wt){if(Y)if(E.layerUpdates.size>0){const Le=Km(Se.width,Se.height,E.format,E.type);for(const Ce of E.layerUpdates){const ot=Se.data.subarray(Ce*Le/Se.data.BYTES_PER_ELEMENT,(Ce+1)*Le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Ce,Se.width,Se.height,1,Ie,ot)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,we.depth,Ie,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,$e,Se.width,Se.height,we.depth,0,Se.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,we.depth,Ie,nt,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,$e,Se.width,Se.height,we.depth,0,Ie,nt,Se.data)}else{wt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Pe,$e,De[0].width,De[0].height);for(let ye=0,qe=De.length;ye<qe;ye++)Se=De[ye],E.format!==ji?Ie!==null?wt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,$e,Se.width,Se.height,0,Se.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Se.width,Se.height,Ie,nt,Se.data):t.texImage2D(s.TEXTURE_2D,ye,$e,Se.width,Se.height,0,Ie,nt,Se.data)}else if(E.isDataArrayTexture)if(wt){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,$e,we.width,we.height,we.depth),Y)if(E.layerUpdates.size>0){const ye=Km(we.width,we.height,E.format,E.type);for(const qe of E.layerUpdates){const Le=we.data.subarray(qe*ye/we.data.BYTES_PER_ELEMENT,(qe+1)*ye/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,we.width,we.height,1,Ie,nt,Le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,nt,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,Ie,nt,we.data);else if(E.isData3DTexture)wt?(Pt&&t.texStorage3D(s.TEXTURE_3D,Pe,$e,we.width,we.height,we.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,nt,we.data)):t.texImage3D(s.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,Ie,nt,we.data);else if(E.isFramebufferTexture){if(Pt)if(wt)t.texStorage2D(s.TEXTURE_2D,Pe,$e,we.width,we.height);else{let ye=we.width,qe=we.height;for(let Le=0;Le<Pe;Le++)t.texImage2D(s.TEXTURE_2D,Le,$e,ye,qe,0,Ie,nt,null),ye>>=1,qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),we.parentNode!==ye){ye.appendChild(we),S.add(E),ye.onpaint=yt=>{const Jt=yt.changedElements;for(const Kt of S)Jt.includes(Kt.image)&&(Kt.needsUpdate=!0)},ye.requestPaint();return}const qe=0,Le=s.RGBA,Ce=s.RGBA,ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,qe,Le,Ce,ot,we),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(De.length>0){if(wt&&Pt){const ye=zt(De[0]);t.texStorage2D(s.TEXTURE_2D,Pe,$e,ye.width,ye.height)}for(let ye=0,qe=De.length;ye<qe;ye++)Se=De[ye],wt?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ie,nt,Se):t.texImage2D(s.TEXTURE_2D,ye,$e,Ie,nt,Se);E.generateMipmaps=!1}else if(wt){if(Pt){const ye=zt(we);t.texStorage2D(s.TEXTURE_2D,Pe,$e,ye.width,ye.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,nt,we)}else t.texImage2D(s.TEXTURE_2D,0,$e,Ie,nt,we);_(E)&&L(Me),Ye.__version=We.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function st(U,E,ae){if(E.image.length!==6)return;const Me=de(U,E),Ne=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ae);const We=r.get(Ne);if(Ne.version!==We.__version||Me===!0){t.activeTexture(s.TEXTURE0+ae);const Ye=Zt.getPrimaries(Zt.workingColorSpace),xe=E.colorSpace===Jr?null:Zt.getPrimaries(E.colorSpace),we=E.colorSpace===Jr||Ye===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,$e=[];for(let Ce=0;Ce<6;Ce++)!Ie&&!nt?$e[Ce]=y(E.image[Ce],!0,o.maxCubemapSize):$e[Ce]=nt?E.image[Ce].image:E.image[Ce],$e[Ce]=Je(E,$e[Ce]);const Se=$e[0],De=l.convert(E.format,E.colorSpace),wt=l.convert(E.type),Pt=P(E.internalFormat,De,wt,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Pe=We.__version===void 0||Me===!0,ye=Ne.dataReady;let qe=I(E,Se);Re(s.TEXTURE_CUBE_MAP,E);let Le;if(Ie){Y&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Pt,Se.width,Se.height);for(let Ce=0;Ce<6;Ce++){Le=$e[Ce].mipmaps;for(let ot=0;ot<Le.length;ot++){const yt=Le[ot];E.format!==ji?De!==null?Y?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot,0,0,yt.width,yt.height,De,yt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot,Pt,yt.width,yt.height,0,yt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot,0,0,yt.width,yt.height,De,wt,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot,Pt,yt.width,yt.height,0,De,wt,yt.data)}}}else{if(Le=E.mipmaps,Y&&Pe){Le.length>0&&qe++;const Ce=zt($e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Pt,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(nt){Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,$e[Ce].width,$e[Ce].height,De,wt,$e[Ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pt,$e[Ce].width,$e[Ce].height,0,De,wt,$e[Ce].data);for(let ot=0;ot<Le.length;ot++){const Jt=Le[ot].image[Ce].image;Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot+1,0,0,Jt.width,Jt.height,De,wt,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot+1,Pt,Jt.width,Jt.height,0,De,wt,Jt.data)}}else{Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,De,wt,$e[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pt,De,wt,$e[Ce]);for(let ot=0;ot<Le.length;ot++){const yt=Le[ot];Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot+1,0,0,De,wt,yt.image[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ot+1,Pt,De,wt,yt.image[Ce])}}}_(E)&&L(s.TEXTURE_CUBE_MAP),We.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ft(U,E,ae,Me,Ne,We){const Ye=l.convert(ae.format,ae.colorSpace),xe=l.convert(ae.type),we=P(ae.internalFormat,Ye,xe,ae.normalized,ae.colorSpace),Ie=r.get(E),nt=r.get(ae);if(nt.__renderTarget=E,!Ie.__hasExternalTextures){const $e=Math.max(1,E.width>>We),Se=Math.max(1,E.height>>We);Ne===s.TEXTURE_3D||Ne===s.TEXTURE_2D_ARRAY?t.texImage3D(Ne,We,we,$e,Se,E.depth,0,Ye,xe,null):t.texImage2D(Ne,We,we,$e,Se,0,Ye,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Mt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Ne,nt.__webglTexture,0,Lt(E)):(Ne===s.TEXTURE_2D||Ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Ne,nt.__webglTexture,We),t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Me=E.depthTexture,Ne=Me&&Me.isDepthTexture?Me.type:null,We=V(E.stencilBuffer,Ne),Ye=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(E),We,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(E),We,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,We,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{const Me=E.textures;for(let Ne=0;Ne<Me.length;Ne++){const We=Me[Ne],Ye=l.convert(We.format,We.colorSpace),xe=l.convert(We.type),we=P(We.internalFormat,Ye,xe,We.normalized,We.colorSpace);Mt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(E),we,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(E),we,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,we,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(U,E,ae){const Me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=r.get(E.depthTexture);if(Ne.__renderTarget=E,(!Ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Me){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Ne.__webglTexture===void 0){Ne.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ne.__webglTexture),Re(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=l.convert(E.depthTexture.format),nt=l.convert(E.depthTexture.type);let $e;E.depthTexture.format===Ar?$e=s.DEPTH_COMPONENT24:E.depthTexture.format===ws&&($e=s.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,$e,E.width,E.height,0,Ie,nt,null)}}else J(E.depthTexture,0);const We=Ne.__webglTexture,Ye=Lt(E),xe=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,we=E.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ar)Mt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,xe,We,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,we,xe,We,0);else if(E.depthTexture.format===ws)Mt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,xe,We,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,we,xe,We,0);else throw new Error("Unknown depthTexture format")}function Bt(U){const E=r.get(U),ae=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Me){const Ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Me.removeEventListener("dispose",Ne)};Me.addEventListener("dispose",Ne),E.__depthDisposeCallback=Ne}E.__boundDepthTexture=Me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let Me=0;Me<6;Me++)_t(E.__webglFramebuffer[Me],U,Me);else{const Me=U.texture.mipmaps;Me&&Me.length>0?_t(E.__webglFramebuffer[0],U,0):_t(E.__webglFramebuffer,U,0)}else if(ae){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]===void 0)E.__webglDepthbuffer[Me]=s.createRenderbuffer(),St(E.__webglDepthbuffer[Me],U,!1);else{const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=E.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,We),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,We)}}else{const Me=U.texture.mipmaps;if(Me&&Me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),St(E.__webglDepthbuffer,U,!1);else{const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,We),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,We)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(U,E,ae){const Me=r.get(U);E!==void 0&&ft(Me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Bt(U)}function bt(U){const E=U.texture,ae=r.get(U),Me=r.get(E);U.addEventListener("dispose",T);const Ne=U.textures,We=U.isWebGLCubeRenderTarget===!0,Ye=Ne.length>1;if(Ye||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=E.version,u.memory.textures++),We){ae.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[xe]=[];for(let we=0;we<E.mipmaps.length;we++)ae.__webglFramebuffer[xe][we]=s.createFramebuffer()}else ae.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)ae.__webglFramebuffer[xe]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let xe=0,we=Ne.length;xe<we;xe++){const Ie=r.get(Ne[xe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Mt(U)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let xe=0;xe<Ne.length;xe++){const we=Ne[xe];ae.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const Ie=l.convert(we.format,we.colorSpace),nt=l.convert(we.type),$e=P(we.internalFormat,Ie,nt,we.normalized,we.colorSpace,U.isXRRenderTarget===!0),Se=Lt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,$e,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),St(ae.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(We){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Re(s.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)ft(ae.__webglFramebuffer[xe][we],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else ft(ae.__webglFramebuffer[xe],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(E)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let xe=0,we=Ne.length;xe<we;xe++){const Ie=Ne[xe],nt=r.get(Ie);let $e=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&($e=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($e,nt.__webglTexture),Re($e,Ie),ft(ae.__webglFramebuffer,U,Ie,s.COLOR_ATTACHMENT0+xe,$e,0),_(Ie)&&L($e)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Me.__webglTexture),Re(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)ft(ae.__webglFramebuffer[we],U,E,s.COLOR_ATTACHMENT0,xe,we);else ft(ae.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,xe,0);_(E)&&L(xe),t.unbindTexture()}U.depthBuffer&&Bt(U)}function Vt(U){const E=U.textures;for(let ae=0,Me=E.length;ae<Me;ae++){const Ne=E[ae];if(_(Ne)){const We=R(U),Ye=r.get(Ne).__webglTexture;t.bindTexture(We,Ye),L(We),t.unbindTexture()}}}const Nt=[],jt=[];function $(U){if(U.samples>0){if(Mt(U)===!1){const E=U.textures,ae=U.width,Me=U.height;let Ne=s.COLOR_BUFFER_BIT;const We=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(U),xe=E.length>1;if(xe)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ne|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ne|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ie]);const nt=r.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,ae,Me,0,0,ae,Me,Ne,s.NEAREST),h===!0&&(Nt.length=0,jt.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Nt.push(We),jt.push(We),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ie]);const nt=r.get(E[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Lt(U){return Math.min(o.maxSamples,U.samples)}function Mt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function Je(U,E){const ae=U.colorSpace,Me=U.format,Ne=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ae!==Jl&&ae!==Jr&&(Zt.getTransfer(ae)===rn?(Me!==ji||Ne!==Pi)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",ae)),E}function zt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=me,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DE(s,e){function t(r,o=Jr){let l;const u=Zt.getTransfer(o);if(r===Pi)return s.UNSIGNED_BYTE;if(r===Cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===W0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===X0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===G0)return s.BYTE;if(r===j0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Af)return s.INT;if(r===ar)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===Tr)return s.HALF_FLOAT;if(r===Y0)return s.ALPHA;if(r===$0)return s.RGB;if(r===ji)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===ws)return s.DEPTH_STENCIL;if(r===q0)return s.RED;if(r===Nf)return s.RED_INTEGER;if(r===As)return s.RG;if(r===Pf)return s.RG_INTEGER;if(r===If)return s.RGBA_INTEGER;if(r===jl||r===Wl||r===Xl||r===Yl)if(u===rn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vd||r===Hd||r===Gd||r===jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===Xd||r===Yd||r===$d||r===qd||r===Kl||r===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wd||r===Xd)return u===rn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$d)return l.COMPRESSED_R11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===Kd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qd)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ef)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===af)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uf)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===df)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ff||r===hf||r===pf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ff)return u===rn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mf||r===gf||r===Zl||r===xf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===mf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class FE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new rg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:LE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OE extends Rs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,C=null;const D=typeof XRWebGLBinding<"u",y=new FE,_={},L=t.getContextAttributes();let R=null,P=null;const V=[],I=[],O=new Ot;let T=null;const N=new Ni;N.viewport=new gn;const X=new Ni;X.viewport=new gn;const H=[N,X],Z=new Y_;let re=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let Ae=V[de];return Ae===void 0&&(Ae=new td,V[de]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(de){let Ae=V[de];return Ae===void 0&&(Ae=new td,V[de]=Ae),Ae.getGripSpace()},this.getHand=function(de){let Ae=V[de];return Ae===void 0&&(Ae=new td,V[de]=Ae),Ae.getHandSpace()};function W(de){const Ae=I.indexOf(de.inputSource);if(Ae===-1)return;const _e=V[Ae];_e!==void 0&&(_e.update(de.inputSource,de.frame,p||u),_e.dispatchEvent({type:de.type,data:de.inputSource}))}function oe(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",K);for(let de=0;de<V.length;de++){const Ae=I[de];Ae!==null&&(I[de]=null,V[de].disconnect(Ae))}re=null,me=null,y.reset();for(const de in _)delete _[de];e.setRenderTarget(R),M=null,x=null,S=null,o=null,P=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){l=de,r.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){f=de,r.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(de){p=de},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(de){if(o=de,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Be=null,st=null;L.depth&&(st=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=L.stencil?ws:Ar,Be=L.stencil?po:ar);const ft={colorFormat:t.RGBA8,depthFormat:st,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ft),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new rr(x.textureWidth,x.textureHeight,{format:ji,type:Pi,depthTexture:new va(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new rr(M.framebufferWidth,M.framebufferHeight,{format:ji,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(de){for(let Ae=0;Ae<de.removed.length;Ae++){const _e=de.removed[Ae],Be=I.indexOf(_e);Be>=0&&(I[Be]=null,V[Be].disconnect(_e))}for(let Ae=0;Ae<de.added.length;Ae++){const _e=de.added[Ae];let Be=I.indexOf(_e);if(Be===-1){for(let ft=0;ft<V.length;ft++)if(ft>=I.length){I.push(_e),Be=ft;break}else if(I[ft]===null){I[ft]=_e,Be=ft;break}if(Be===-1)break}const st=V[Be];st&&st.connect(_e)}}const J=new ie,pe=new ie;function ue(de,Ae,_e){J.setFromMatrixPosition(Ae.matrixWorld),pe.setFromMatrixPosition(_e.matrixWorld);const Be=J.distanceTo(pe),st=Ae.projectionMatrix.elements,ft=_e.projectionMatrix.elements,St=st[14]/(st[10]-1),_t=st[14]/(st[10]+1),Bt=(st[9]+1)/st[5],$t=(st[9]-1)/st[5],bt=(st[8]-1)/st[0],Vt=(ft[8]+1)/ft[0],Nt=St*bt,jt=St*Vt,$=Be/(-bt+Vt),Lt=$*-bt;if(Ae.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Lt),de.translateZ($),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),st[10]===-1)de.projectionMatrix.copy(Ae.projectionMatrix),de.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const Mt=St+$,Tt=_t+$,Je=Nt-Lt,zt=jt+(Be-Lt),U=Bt*_t/Tt*Mt,E=$t*_t/Tt*Mt;de.projectionMatrix.makePerspective(Je,zt,U,E,Mt,Tt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function B(de,Ae){Ae===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(Ae.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(o===null)return;let Ae=de.near,_e=de.far;y.texture!==null&&(y.depthNear>0&&(Ae=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Z.near=X.near=N.near=Ae,Z.far=X.far=N.far=_e,(re!==Z.near||me!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),re=Z.near,me=Z.far),Z.layers.mask=de.layers.mask|6,N.layers.mask=Z.layers.mask&-5,X.layers.mask=Z.layers.mask&-3;const Be=de.parent,st=Z.cameras;B(Z,Be);for(let ft=0;ft<st.length;ft++)B(st[ft],Be);st.length===2?ue(Z,N,X):Z.projectionMatrix.copy(N.projectionMatrix),le(de,Z,Be)};function le(de,Ae,_e){_e===null?de.matrix.copy(Ae.matrixWorld):(de.matrix.copy(_e.matrixWorld),de.matrix.invert(),de.matrix.multiply(Ae.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Ae.projectionMatrix),de.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=_f*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(de){h=de,x!==null&&(x.fixedFoveation=de),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=de)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(de){return _[de]};let et=null;function rt(de,Ae){if(v=Ae.getViewerPose(p||u),C=Ae,v!==null){const _e=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Be=!1;_e.length!==Z.cameras.length&&(Z.cameras.length=0,Be=!0);for(let _t=0;_t<_e.length;_t++){const Bt=_e[_t];let $t=null;if(M!==null)$t=M.getViewport(Bt);else{const Vt=S.getViewSubImage(x,Bt);$t=Vt.viewport,_t===0&&(e.setRenderTargetTextures(P,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(P))}let bt=H[_t];bt===void 0&&(bt=new Ni,bt.layers.enable(_t),bt.viewport=new gn,H[_t]=bt),bt.matrix.fromArray(Bt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Bt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set($t.x,$t.y,$t.width,$t.height),_t===0&&(Z.matrix.copy(bt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Be===!0&&Z.cameras.push(bt)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const _t=S.getDepthInformation(_e[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,o.renderState)}if(st&&st.includes("camera-access")&&D){e.state.unbindTexture(),S=r.getBinding();for(let _t=0;_t<_e.length;_t++){const Bt=_e[_t].camera;if(Bt){let $t=_[Bt];$t||($t=new rg,_[Bt]=$t);const bt=S.getCameraImage(Bt);$t.sourceTexture=bt}}}}for(let _e=0;_e<V.length;_e++){const Be=I[_e],st=V[_e];Be!==null&&st!==void 0&&st.update(Be,Ae,p||u)}et&&et(de,Ae),Ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ae}),C=null}const Re=new ug;Re.setAnimationLoop(rt),this.setAnimationLoop=function(de){et=de},this.dispose=function(){}}}const kE=new Sn,xg=new Gt;xg.set(-1,0,0,0,1,0,0,0,1);function BE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,og(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,L,R,P){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),C(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),D(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ci&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ci&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,P=L.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(xg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ci&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function zE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const P=R.program;r.uniformBlockBinding(L,P)}function p(L,R){let P=o[L.id];P===void 0&&(C(L),P=v(L),o[L.id]=P,L.addEventListener("dispose",y));const V=R.program;r.updateUBOMapping(L,V);const I=e.render.frame;l[L.id]!==I&&(x(L),l[L.id]=I)}function v(L){const R=S();L.__bindingPointIndex=R;const P=s.createBuffer(),V=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const R=o[L.id],P=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,O=P.length;I<O;I++){const T=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,X=T.length;N<X;N++){const H=T[N];if(M(H,I,N,V)===!0){const Z=H.__offset,re=Array.isArray(H.value)?H.value:[H.value];let me=0;for(let W=0;W<re.length;W++){const oe=re[W],K=D(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Z+me,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):ArrayBuffer.isView(oe)?H.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,H.__data.length)):(oe.toArray(H.__data,me),me+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,P,V){const I=L.value,O=R+"_"+P;if(V[O]===void 0)return typeof I=="number"||typeof I=="boolean"?V[O]=I:ArrayBuffer.isView(I)?V[O]=I.slice():V[O]=I.clone(),!0;{const T=V[O];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return V[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(T.equals(I)===!1)return T.copy(I),!0}}return!1}function C(L){const R=L.uniforms;let P=0;const V=16;for(let O=0,T=R.length;O<T;O++){const N=Array.isArray(R[O])?R[O]:[R[O]];for(let X=0,H=N.length;X<H;X++){const Z=N[X],re=Array.isArray(Z.value)?Z.value:[Z.value];for(let me=0,W=re.length;me<W;me++){const oe=re[me],K=D(oe),J=P%V,pe=J%K.boundary,ue=J+pe;P+=pe,ue!==0&&V-ue<K.storage&&(P+=V-ue),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=K.storage}}}const I=P%V;return I>0&&(P+=V-I),L.__size=P,L.__cache={},this}function D(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(R.boundary=16,R.storage=L.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",L),R}function y(L){const R=L.target;R.removeEventListener("dispose",y);const P=u.indexOf(R.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const VE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function HE(){return Qi===null&&(Qi=new __(VE,16,16,As,Tr),Qi.name="DFG_LUT",Qi.minFilter=Wn,Qi.magFilter=Wn,Qi.wrapS=Er,Qi.wrapT=Er,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class GE{constructor(e={}){const{canvas:t=qv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Pi}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const D=M,y=new Set([If,Pf,Nf]),_=new Set([Pi,ar,ho,po,Cf,Rf]),L=new Uint32Array(4),R=new Int32Array(4),P=new ie;let V=null,I=null;const O=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let H=!1,Z=null;this._outputColorSpace=Ri;let re=0,me=0,W=null,oe=-1,K=null;const J=new gn,pe=new gn;let ue=null;const B=new sn(0);let le=0,et=t.width,rt=t.height,Re=1,de=null,Ae=null;const _e=new gn(0,0,et,rt),Be=new gn(0,0,et,rt);let st=!1;const ft=new ng;let St=!1,_t=!1;const Bt=new Sn,$t=new ie,bt=new gn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function jt(){return W===null?Re:1}let $=r;function Lt(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tf}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",yt,!1),$===null){const j="webgl2";if($=Lt(j,b),$===null)throw Lt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw en("WebGLRenderer: "+b.message),b}let Mt,Tt,Je,zt,U,E,ae,Me,Ne,We,Ye,xe,we,Ie,nt,$e,Se,De,wt,Pt,Y,Pe,ye;function qe(){Mt=new H1($),Mt.init(),Y=new DE($,Mt),Tt=new L1($,Mt,e,Y),Je=new PE($,Mt),Tt.reversedDepthBuffer&&x&&Je.buffers.depth.setReversed(!0),zt=new W1($),U=new xE,E=new IE($,Mt,Je,U,Tt,Y,zt),ae=new V1(X),Me=new q_($),Pe=new I1($,Me),Ne=new G1($,Me,zt,Pe),We=new Y1($,Ne,Me,Pe,zt),De=new X1($,Tt,E),nt=new U1(U),Ye=new gE(X,ae,Mt,Tt,Pe,nt),xe=new BE(X,U),we=new _E,Ie=new bE(Mt),Se=new P1(X,ae,Je,We,C,h),$e=new NE(X,We,Tt),ye=new zE($,zt,Tt,Je),wt=new D1($,Mt,zt),Pt=new j1($,Mt,zt),zt.programs=Ye.programs,X.capabilities=Tt,X.extensions=Mt,X.properties=U,X.renderLists=we,X.shadowMap=$e,X.state=Je,X.info=zt}qe(),D!==Pi&&(N=new q1(D,t.width,t.height,o,l));const Le=new OE(X,$);this.xr=Le,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(b){b!==void 0&&(Re=b,this.setSize(et,rt,!1))},this.getSize=function(b){return b.set(et,rt)},this.setSize=function(b,j,Q=!0){if(Le.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}et=b,rt=j,t.width=Math.floor(b*Re),t.height=Math.floor(j*Re),Q===!0&&(t.style.width=b+"px",t.style.height=j+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(et*Re,rt*Re).floor()},this.setDrawingBufferSize=function(b,j,Q){et=b,rt=j,Re=Q,t.width=Math.floor(b*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,b,j)},this.setEffects=function(b){if(D===Pi){en("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let j=0;j<b.length;j++)if(b[j].isOutputPass===!0){Ft("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(J)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,j,Q,ne){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,j,Q,ne),Je.viewport(J.copy(_e).multiplyScalar(Re).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,j,Q,ne){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,j,Q,ne),Je.scissor(pe.copy(Be).multiplyScalar(Re).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){Je.setScissorTest(st=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){Ae=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,Q=!0){let ne=0;if(b){let se=!1;if(W!==null){const ke=W.texture.format;se=y.has(ke)}if(se){const ke=W.texture.type,Ve=_.has(ke),Oe=Se.getClearColor(),Qe=Se.getClearAlpha(),Ee=Oe.r,it=Oe.g,ut=Oe.b;Ve?(L[0]=Ee,L[1]=it,L[2]=ut,L[3]=Qe,$.clearBufferuiv($.COLOR,0,L)):(R[0]=Ee,R[1]=it,R[2]=ut,R[3]=Qe,$.clearBufferiv($.COLOR,0,R))}else ne|=$.COLOR_BUFFER_BIT}j&&(ne|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Se.dispose(),we.dispose(),Ie.dispose(),U.dispose(),ae.dispose(),We.dispose(),Pe.dispose(),ye.dispose(),Ye.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",In),Le.removeEventListener("sessionend",_i),Yn.stop()};function Ce(b){b.preventDefault(),Cm("WebGLRenderer: Context Lost."),H=!0}function ot(){Cm("WebGLRenderer: Context Restored."),H=!1;const b=zt.autoReset,j=$e.enabled,Q=$e.autoUpdate,ne=$e.needsUpdate,se=$e.type;qe(),zt.autoReset=b,$e.enabled=j,$e.autoUpdate=Q,$e.needsUpdate=ne,$e.type=se}function yt(b){en("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const j=b.target;j.removeEventListener("dispose",Jt),Kt(j)}function Kt(b){vn(b),U.remove(b)}function vn(b){const j=U.get(b).programs;j!==void 0&&(j.forEach(function(Q){Ye.releaseProgram(Q)}),b.isShaderMaterial&&Ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,Q,ne,se,ke){j===null&&(j=Vt);const Ve=se.isMesh&&se.matrixWorld.determinant()<0,Oe=G(b,j,Q,ne,se);Je.setMaterial(ne,Ve);let Qe=Q.index,Ee=1;if(ne.wireframe===!0){if(Qe=Ne.getWireframeAttribute(Q),Qe===void 0)return;Ee=2}const it=Q.drawRange,ut=Q.attributes.position;let tt=it.start*Ee,w=(it.start+it.count)*Ee;ke!==null&&(tt=Math.max(tt,ke.start*Ee),w=Math.min(w,(ke.start+ke.count)*Ee)),Qe!==null?(tt=Math.max(tt,0),w=Math.min(w,Qe.count)):ut!=null&&(tt=Math.max(tt,0),w=Math.min(w,ut.count));const k=w-tt;if(k<0||k===1/0)return;Pe.setup(se,ne,Oe,Q,Qe);let F,te=wt;if(Qe!==null&&(F=Me.get(Qe),te=Pt,te.setIndex(F)),se.isMesh)ne.wireframe===!0?(Je.setLineWidth(ne.wireframeLinewidth*jt()),te.setMode($.LINES)):te.setMode($.TRIANGLES);else if(se.isLine){let Te=ne.linewidth;Te===void 0&&(Te=1),Je.setLineWidth(Te*jt()),se.isLineSegments?te.setMode($.LINES):se.isLineLoop?te.setMode($.LINE_LOOP):te.setMode($.LINE_STRIP)}else se.isPoints?te.setMode($.POINTS):se.isSprite&&te.setMode($.TRIANGLES);if(se.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))te.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Te=se._multiDrawStarts,ce=se._multiDrawCounts,ze=se._multiDrawCount,Ge=Qe?Me.get(Qe).bytesPerElement:1,Ut=U.get(ne).currentProgram.getUniforms();for(let ht=0;ht<ze;ht++)Ut.setValue($,"_gl_DrawID",ht),te.render(Te[ht]/Ge,ce[ht])}else if(se.isInstancedMesh)te.renderInstances(tt,k,se.count);else if(Q.isInstancedBufferGeometry){const Te=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ce=Math.min(Q.instanceCount,Te);te.renderInstances(tt,k,ce)}else te.render(tt,k)};function Fn(b,j,Q){b.transparent===!0&&b.side===Mr&&b.forceSinglePass===!1?(b.side=ci,b.needsUpdate=!0,yi(b,j,Q),b.side=ts,b.needsUpdate=!0,yi(b,j,Q),b.side=Mr):yi(b,j,Q)}this.compile=function(b,j,Q=null){Q===null&&(Q=b),I=Ie.get(Q),I.init(j),T.push(I),Q.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),b!==Q&&b.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),I.setupLights();const ne=new Set;return b.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const ke=se.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){const Oe=ke[Ve];Fn(Oe,Q,se),ne.add(Oe)}else Fn(ke,Q,se),ne.add(ke)}),I=T.pop(),ne},this.compileAsync=function(b,j,Q=null){const ne=this.compile(b,j,Q);return new Promise(se=>{function ke(){if(ne.forEach(function(Ve){U.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){se(b);return}setTimeout(ke,10)}Mt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Xn=null;function Wi(b){Xn&&Xn(b)}function In(){Yn.stop()}function _i(){Yn.start()}const Yn=new ug;Yn.setAnimationLoop(Wi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){Xn=b,Le.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},Le.addEventListener("sessionstart",In),Le.addEventListener("sessionend",_i),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(b,j);const Q=Le.enabled===!0&&Le.isPresenting===!0,ne=N!==null&&(W===null||Q)&&N.begin(X,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(j),j=Le.getCamera()),b.isScene===!0&&b.onBeforeRender(X,b,j,W),I=Ie.get(b,T.length),I.init(j),I.state.textureUnits=E.getTextureUnits(),T.push(I),Bt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ft.setFromProjectionMatrix(Bt,nr,j.reversedDepth),_t=this.localClippingEnabled,St=nt.init(this.clippingPlanes,_t),V=we.get(b,O.length),V.init(),O.push(V),Le.enabled===!0&&Le.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&On(Ve,j,-1/0,X.sortObjects)}On(b,j,0,X.sortObjects),V.finish(),X.sortObjects===!0&&V.sort(de,Ae),Nt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Nt&&Se.addToRenderList(V,b),this.info.render.frame++,St===!0&&nt.beginShadows();const se=I.state.shadowsArray;if($e.render(se,b,j),St===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&N.hasRenderPass())===!1){const Ve=V.opaque,Oe=V.transmissive;if(I.setupLights(),j.isArrayCamera){const Qe=j.cameras;if(Oe.length>0)for(let Ee=0,it=Qe.length;Ee<it;Ee++){const ut=Qe[Ee];An(Ve,Oe,b,ut)}Nt&&Se.render(b);for(let Ee=0,it=Qe.length;Ee<it;Ee++){const ut=Qe[Ee];$n(V,b,ut,ut.viewport)}}else Oe.length>0&&An(Ve,Oe,b,j),Nt&&Se.render(b),$n(V,b,j)}W!==null&&me===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),ne&&N.end(X),b.isScene===!0&&b.onAfterRender(X,b,j),Pe.resetDefaultState(),oe=-1,K=null,T.pop(),T.length>0?(I=T[T.length-1],E.setTextureUnits(I.state.textureUnits),St===!0&&nt.setGlobalState(X.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?V=O[O.length-1]:V=null,Z!==null&&Z.renderEnd()};function On(b,j,Q,ne){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLightProbeGrid)I.pushLightProbeGrid(b);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ft.intersectsSprite(b)){ne&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Bt);const Ve=We.update(b),Oe=b.material;Oe.visible&&V.push(b,Ve,Oe,Q,bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ft.intersectsObject(b))){const Ve=We.update(b),Oe=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),bt.copy(Ve.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(Bt)),Array.isArray(Oe)){const Qe=Ve.groups;for(let Ee=0,it=Qe.length;Ee<it;Ee++){const ut=Qe[Ee],tt=Oe[ut.materialIndex];tt&&tt.visible&&V.push(b,Ve,tt,Q,bt.z,ut)}}else Oe.visible&&V.push(b,Ve,Oe,Q,bt.z,null)}}const ke=b.children;for(let Ve=0,Oe=ke.length;Ve<Oe;Ve++)On(ke[Ve],j,Q,ne)}function $n(b,j,Q,ne){const{opaque:se,transmissive:ke,transparent:Ve}=b;I.setupLightsView(Q),St===!0&&nt.setGlobalState(X.clippingPlanes,Q),ne&&Je.viewport(J.copy(ne)),se.length>0&&ei(se,j,Q),ke.length>0&&ei(ke,j,Q),Ve.length>0&&ei(Ve,j,Q),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function An(b,j,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const tt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new rr(1,1,{generateMipmaps:!0,type:tt?Tr:Pi,minFilter:Es,samples:Math.max(4,Tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const ke=I.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||J;ke.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Oe=X.getRenderTarget(),Qe=X.getActiveCubeFace(),Ee=X.getActiveMipmapLevel();X.setRenderTarget(ke),X.getClearColor(B),le=X.getClearAlpha(),le<1&&X.setClearColor(16777215,.5),X.clear(),Nt&&Se.render(Q);const it=X.toneMapping;X.toneMapping=ir;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),St===!0&&nt.setGlobalState(X.clippingPlanes,ne),ei(b,Q,ne),E.updateMultisampleRenderTarget(ke),E.updateRenderTargetMipmap(ke),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let w=0,k=j.length;w<k;w++){const F=j[w],{object:te,geometry:Te,material:ce,group:ze}=F;if(ce.side===Mr&&te.layers.test(ne.layers)){const Ge=ce.side;ce.side=ci,ce.needsUpdate=!0,Ii(te,Q,ne,Te,ce,ze),ce.side=Ge,ce.needsUpdate=!0,tt=!0}}tt===!0&&(E.updateMultisampleRenderTarget(ke),E.updateRenderTargetMipmap(ke))}X.setRenderTarget(Oe,Qe,Ee),X.setClearColor(B,le),ut!==void 0&&(ne.viewport=ut),X.toneMapping=it}function ei(b,j,Q){const ne=j.isScene===!0?j.overrideMaterial:null;for(let se=0,ke=b.length;se<ke;se++){const Ve=b[se],{object:Oe,geometry:Qe,group:Ee}=Ve;let it=Ve.material;it.allowOverride===!0&&ne!==null&&(it=ne),Oe.layers.test(Q.layers)&&Ii(Oe,j,Q,Qe,it,Ee)}}function Ii(b,j,Q,ne,se,ke){b.onBeforeRender(X,j,Q,ne,se,ke),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),se.onBeforeRender(X,j,Q,ne,b,ke),se.transparent===!0&&se.side===Mr&&se.forceSinglePass===!1?(se.side=ci,se.needsUpdate=!0,X.renderBufferDirect(Q,j,ne,se,b,ke),se.side=ts,se.needsUpdate=!0,X.renderBufferDirect(Q,j,ne,se,b,ke),se.side=Mr):X.renderBufferDirect(Q,j,ne,se,b,ke),b.onAfterRender(X,j,Q,ne,se,ke)}function yi(b,j,Q){j.isScene!==!0&&(j=Vt);const ne=U.get(b),se=I.state.lights,ke=I.state.shadowsArray,Ve=se.state.version,Oe=Ye.getParameters(b,se.state,ke,j,Q,I.state.lightProbeGridArray),Qe=Ye.getProgramCacheKey(Oe);let Ee=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const it=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=ae.get(b.envMap||ne.environment,it),ne.envMapRotation=ne.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",Jt),Ee=new Map,ne.programs=Ee);let ut=Ee.get(Qe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Ve)return Xi(b,Oe),ut}else Oe.uniforms=Ye.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,Q,Oe),b.onBeforeCompile(Oe,X),ut=Ye.acquireProgram(Oe,Qe),Ee.set(Qe,ut),ne.uniforms=Oe.uniforms;const tt=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(tt.clippingPlanes=nt.uniform),Xi(b,Oe),ne.needsLights=ve(b),ne.lightsStateVersion=Ve,ne.needsLights&&(tt.ambientLightColor.value=se.state.ambient,tt.lightProbe.value=se.state.probe,tt.directionalLights.value=se.state.directional,tt.directionalLightShadows.value=se.state.directionalShadow,tt.spotLights.value=se.state.spot,tt.spotLightShadows.value=se.state.spotShadow,tt.rectAreaLights.value=se.state.rectArea,tt.ltc_1.value=se.state.rectAreaLTC1,tt.ltc_2.value=se.state.rectAreaLTC2,tt.pointLights.value=se.state.point,tt.pointLightShadows.value=se.state.pointShadow,tt.hemisphereLights.value=se.state.hemi,tt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,tt.spotLightMatrix.value=se.state.spotLightMatrix,tt.spotLightMap.value=se.state.spotLightMap,tt.pointShadowMatrix.value=se.state.pointShadowMatrix),ne.lightProbeGrid=I.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ui(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=$l.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Xi(b,j){const Q=U.get(b);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function lr(b,j){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let Q=0,ne=b.length;Q<ne;Q++){const se=b[Q];if(se.texture!==null&&se.boundingBox.containsPoint(P))return se}return null}function G(b,j,Q,ne,se){j.isScene!==!0&&(j=Vt),E.resetTextureUnits();const ke=j.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,Oe=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Zt.workingColorSpace,Qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ee=ae.get(ne.envMap||Ve,Qe),it=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ut=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!Q.morphAttributes.position,w=!!Q.morphAttributes.normal,k=!!Q.morphAttributes.color;let F=ir;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(F=X.toneMapping);const te=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Te=te!==void 0?te.length:0,ce=U.get(ne),ze=I.state.lights;if(St===!0&&(_t===!0||b!==K)){const Dt=b===K&&ne.id===oe;nt.setState(ne,b,Dt)}let Ge=!1;ne.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ze.state.version||ce.outputColorSpace!==Oe||se.isBatchedMesh&&ce.batching===!1||!se.isBatchedMesh&&ce.batching===!0||se.isBatchedMesh&&ce.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&ce.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&ce.instancing===!1||!se.isInstancedMesh&&ce.instancing===!0||se.isSkinnedMesh&&ce.skinning===!1||!se.isSkinnedMesh&&ce.skinning===!0||se.isInstancedMesh&&ce.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ce.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ce.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ce.instancingMorph===!1&&se.morphTexture!==null||ce.envMap!==Ee||ne.fog===!0&&ce.fog!==ke||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==nt.numPlanes||ce.numIntersection!==nt.numIntersection)||ce.vertexAlphas!==it||ce.vertexTangents!==ut||ce.morphTargets!==tt||ce.morphNormals!==w||ce.morphColors!==k||ce.toneMapping!==F||ce.morphTargetsCount!==Te||!!ce.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ge=!0):(Ge=!0,ce.__version=ne.version);let Ut=ce.currentProgram;Ge===!0&&(Ut=yi(ne,j,se),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,Ut,ce));let ht=!1,Ze=!1,Et=!1;const mt=Ut.getUniforms(),It=ce.uniforms;if(Je.useProgram(Ut.program)&&(ht=!0,Ze=!0,Et=!0),ne.id!==oe&&(oe=ne.id,Ze=!0),ce.needsLights){const Dt=lr(I.state.lightProbeGridArray,se);ce.lightProbeGrid!==Dt&&(ce.lightProbeGrid=Dt,Ze=!0)}if(ht||K!==b){Je.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue($,"projectionMatrix",b.projectionMatrix),mt.setValue($,"viewMatrix",b.matrixWorldInverse);const Mn=mt.map.cameraPosition;Mn!==void 0&&Mn.setValue($,$t.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&mt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&mt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Ze=!0,Et=!0)}if(ce.needsLights&&(ze.state.directionalShadowMap.length>0&&mt.setValue($,"directionalShadowMap",ze.state.directionalShadowMap,E),ze.state.spotShadowMap.length>0&&mt.setValue($,"spotShadowMap",ze.state.spotShadowMap,E),ze.state.pointShadowMap.length>0&&mt.setValue($,"pointShadowMap",ze.state.pointShadowMap,E)),se.isSkinnedMesh){mt.setOptional($,se,"bindMatrix"),mt.setOptional($,se,"bindMatrixInverse");const Dt=se.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),mt.setValue($,"boneTexture",Dt.boneTexture,E))}se.isBatchedMesh&&(mt.setOptional($,se,"batchingTexture"),mt.setValue($,"batchingTexture",se._matricesTexture,E),mt.setOptional($,se,"batchingIdTexture"),mt.setValue($,"batchingIdTexture",se._indirectTexture,E),mt.setOptional($,se,"batchingColorTexture"),se._colorsTexture!==null&&mt.setValue($,"batchingColorTexture",se._colorsTexture,E));const cn=Q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&De.update(se,Q,Ut),(Ze||ce.receiveShadow!==se.receiveShadow)&&(ce.receiveShadow=se.receiveShadow,mt.setValue($,"receiveShadow",se.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(It.envMapIntensity.value=j.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=HE()),Ze){if(mt.setValue($,"toneMappingExposure",X.toneMappingExposure),ce.needsLights&&Ue(It,Et),ke&&ne.fog===!0&&xe.refreshFogUniforms(It,ke),xe.refreshMaterialUniforms(It,ne,Re,rt,I.state.transmissionRenderTarget[b.id]),ce.needsLights&&ce.lightProbeGrid){const Dt=ce.lightProbeGrid;It.probesSH.value=Dt.texture,It.probesMin.value.copy(Dt.boundingBox.min),It.probesMax.value.copy(Dt.boundingBox.max),It.probesResolution.value.copy(Dt.resolution)}$l.upload($,ui(ce),It,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($l.upload($,ui(ce),It,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&mt.setValue($,"center",se.center),mt.setValue($,"modelViewMatrix",se.modelViewMatrix),mt.setValue($,"normalMatrix",se.normalMatrix),mt.setValue($,"modelMatrix",se.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let Mn=0,lt=Dt.length;Mn<lt;Mn++){const Ht=Dt[Mn];ye.update(Ht,Ut),ye.bind(Ht,Ut)}}return Ut}function Ue(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function ve(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,j,Q){const ne=U.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),U.get(b.texture).__webglTexture=j,U.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Q,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const Q=U.get(b);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const be=$.createFramebuffer();this.setRenderTarget=function(b,j=0,Q=0){W=b,re=j,me=Q;let ne=null,se=!1,ke=!1;if(b){const Oe=U.get(b);if(Oe.__useDefaultFramebuffer!==void 0){Je.bindFramebuffer($.FRAMEBUFFER,Oe.__webglFramebuffer),J.copy(b.viewport),pe.copy(b.scissor),ue=b.scissorTest,Je.viewport(J),Je.scissor(pe),Je.setScissorTest(ue),oe=-1;return}else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Oe.__hasExternalTextures)E.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const it=b.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&U.has(it)&&(b.width!==it.image.width||b.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const Ee=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[j])?ne=Ee[j][Q]:ne=Ee[j],se=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?ne=U.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?ne=Ee[Q]:ne=Ee,J.copy(b.viewport),pe.copy(b.scissor),ue=b.scissorTest}else J.copy(_e).multiplyScalar(Re).floor(),pe.copy(Be).multiplyScalar(Re).floor(),ue=st;if(Q!==0&&(ne=be),Je.bindFramebuffer($.FRAMEBUFFER,ne)&&Je.drawBuffers(b,ne),Je.viewport(J),Je.scissor(pe),Je.setScissorTest(ue),se){const Oe=U.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,Q)}else if(ke){const Oe=j;for(let Qe=0;Qe<b.textures.length;Qe++){const Ee=U.get(b.textures[Qe]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Qe,Ee.__webglTexture,Q,Oe)}}else if(b!==null&&Q!==0){const Oe=U.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Oe.__webglTexture,Q)}oe=-1},this.readRenderTargetPixels=function(b,j,Q,ne,se,ke,Ve,Oe=0){if(!(b&&b.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe){Je.bindFramebuffer($.FRAMEBUFFER,Qe);try{const Ee=b.textures[Oe],it=Ee.format,ut=Ee.type;if(b.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Oe),!Tt.textureFormatReadable(it)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(ut)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ne&&Q>=0&&Q<=b.height-se&&$.readPixels(j,Q,ne,se,Y.convert(it),Y.convert(ut),ke)}finally{const Ee=W!==null?U.get(W).__webglFramebuffer:null;Je.bindFramebuffer($.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,j,Q,ne,se,ke,Ve,Oe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe)if(j>=0&&j<=b.width-ne&&Q>=0&&Q<=b.height-se){Je.bindFramebuffer($.FRAMEBUFFER,Qe);const Ee=b.textures[Oe],it=Ee.format,ut=Ee.type;if(b.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Oe),!Tt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.bufferData($.PIXEL_PACK_BUFFER,ke.byteLength,$.STREAM_READ),$.readPixels(j,Q,ne,se,Y.convert(it),Y.convert(ut),0);const w=W!==null?U.get(W).__webglFramebuffer:null;Je.bindFramebuffer($.FRAMEBUFFER,w);const k=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Kv($,k,4),$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ke),$.deleteBuffer(tt),$.deleteSync(k),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,Q=0){const ne=Math.pow(2,-Q),se=Math.floor(b.image.width*ne),ke=Math.floor(b.image.height*ne),Ve=j!==null?j.x:0,Oe=j!==null?j.y:0;E.setTexture2D(b,0),$.copyTexSubImage2D($.TEXTURE_2D,Q,0,0,Ve,Oe,se,ke),Je.unbindTexture()};const ct=$.createFramebuffer(),At=$.createFramebuffer();this.copyTextureToTexture=function(b,j,Q=null,ne=null,se=0,ke=0){let Ve,Oe,Qe,Ee,it,ut,tt,w,k;const F=b.isCompressedTexture?b.mipmaps[ke]:b.image;if(Q!==null)Ve=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,Qe=Q.isBox3?Q.max.z-Q.min.z:1,Ee=Q.min.x,it=Q.min.y,ut=Q.isBox3?Q.min.z:0;else{const It=Math.pow(2,-se);Ve=Math.floor(F.width*It),Oe=Math.floor(F.height*It),b.isDataArrayTexture?Qe=F.depth:b.isData3DTexture?Qe=Math.floor(F.depth*It):Qe=1,Ee=0,it=0,ut=0}ne!==null?(tt=ne.x,w=ne.y,k=ne.z):(tt=0,w=0,k=0);const te=Y.convert(j.format),Te=Y.convert(j.type);let ce;j.isData3DTexture?(E.setTexture3D(j,0),ce=$.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),ce=$.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),ce=$.TEXTURE_2D),Je.activeTexture($.TEXTURE0),Je.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),Je.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Je.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment);const ze=Je.getParameter($.UNPACK_ROW_LENGTH),Ge=Je.getParameter($.UNPACK_IMAGE_HEIGHT),Ut=Je.getParameter($.UNPACK_SKIP_PIXELS),ht=Je.getParameter($.UNPACK_SKIP_ROWS),Ze=Je.getParameter($.UNPACK_SKIP_IMAGES);Je.pixelStorei($.UNPACK_ROW_LENGTH,F.width),Je.pixelStorei($.UNPACK_IMAGE_HEIGHT,F.height),Je.pixelStorei($.UNPACK_SKIP_PIXELS,Ee),Je.pixelStorei($.UNPACK_SKIP_ROWS,it),Je.pixelStorei($.UNPACK_SKIP_IMAGES,ut);const Et=b.isDataArrayTexture||b.isData3DTexture,mt=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const It=U.get(b),cn=U.get(j),Dt=U.get(It.__renderTarget),Mn=U.get(cn.__renderTarget);Je.bindFramebuffer($.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Je.bindFramebuffer($.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let lt=0;lt<Qe;lt++)Et&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(b).__webglTexture,se,ut+lt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(j).__webglTexture,ke,k+lt)),$.blitFramebuffer(Ee,it,Ve,Oe,tt,w,Ve,Oe,$.DEPTH_BUFFER_BIT,$.NEAREST);Je.bindFramebuffer($.READ_FRAMEBUFFER,null),Je.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(se!==0||b.isRenderTargetTexture||U.has(b)){const It=U.get(b),cn=U.get(j);Je.bindFramebuffer($.READ_FRAMEBUFFER,ct),Je.bindFramebuffer($.DRAW_FRAMEBUFFER,At);for(let Dt=0;Dt<Qe;Dt++)Et?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,It.__webglTexture,se,ut+Dt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,It.__webglTexture,se),mt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,cn.__webglTexture,ke,k+Dt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,cn.__webglTexture,ke),se!==0?$.blitFramebuffer(Ee,it,Ve,Oe,tt,w,Ve,Oe,$.COLOR_BUFFER_BIT,$.NEAREST):mt?$.copyTexSubImage3D(ce,ke,tt,w,k+Dt,Ee,it,Ve,Oe):$.copyTexSubImage2D(ce,ke,tt,w,Ee,it,Ve,Oe);Je.bindFramebuffer($.READ_FRAMEBUFFER,null),Je.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?$.texSubImage3D(ce,ke,tt,w,k,Ve,Oe,Qe,te,Te,F.data):j.isCompressedArrayTexture?$.compressedTexSubImage3D(ce,ke,tt,w,k,Ve,Oe,Qe,te,F.data):$.texSubImage3D(ce,ke,tt,w,k,Ve,Oe,Qe,te,Te,F):b.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ke,tt,w,Ve,Oe,te,Te,F.data):b.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ke,tt,w,F.width,F.height,te,F.data):$.texSubImage2D($.TEXTURE_2D,ke,tt,w,Ve,Oe,te,Te,F);Je.pixelStorei($.UNPACK_ROW_LENGTH,ze),Je.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ge),Je.pixelStorei($.UNPACK_SKIP_PIXELS,Ut),Je.pixelStorei($.UNPACK_SKIP_ROWS,ht),Je.pixelStorei($.UNPACK_SKIP_IMAGES,Ze),ke===0&&j.generateMipmaps&&$.generateMipmap(ce),Je.unbindTexture()},this.initRenderTarget=function(b){U.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Je.unbindTexture()},this.resetState=function(){re=0,me=0,W=null,Je.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Fe.createElement("svg",{ref:h,...WE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:vg("lucide",o),...f},[...u.map(([p,v])=>Fe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(s,e)=>{const t=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(XE,{ref:l,iconNode:e,className:vg(`lucide-${jE(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Xt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=Xt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=Xt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=Xt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=Xt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=Xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=Xt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Xt("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Xt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Xt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=Xt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Xt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Xt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Xt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Xt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=Xt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=Xt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Xt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=Xt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=Xt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Xt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Xt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=Xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Xt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Xt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Xt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=Xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Xt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Xt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Xt("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=Xt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Xt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Xt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=Xt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Xt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Xt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Xt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=Xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Xt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Xt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),T0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},cw=({direction:s,className:e})=>{const r={none:w0,up:Mg,down:_g,left:yg,right:Sg,"up-left":qE,"up-right":KE,"down-left":YE,"down-right":$E}[s]||w0;return g.jsx(r,{className:e})},jn=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Zr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Ci=s=>JSON.parse(JSON.stringify(s)),A0=(s,e)=>(s-e+540)%360-180,rc=s=>s==null||Number.isNaN(s)?null:(s%360+360)%360,C0=(s,e)=>s==null||e==null?null:rc(s-e),uw=s=>s&&typeof s.webkitCompassHeading=="number"?rc(s.webkitCompassHeading):s&&typeof s.alpha=="number"?rc(360-s.alpha):null,dw=(s,e)=>{if(!s||!e)return null;const t=s.physX??s.x,r=s.physY??s.y,o=e.physX??e.x,l=e.physY??e.y;return[t,r,o,l].some(u=>typeof u!="number")?null:rc(Math.atan2(o-t,r-l)*180/Math.PI)},R0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new Bf(s),l=new Vf(o,Math.max(8,s.length*12),e,12,!1),u=new es({color:t,transparent:r<1,opacity:r});return new Qn(l,u)},N0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},P0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),fw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),hw=s=>{if(!s||s.length<2)return null;const e=new Bf(s),t=Math.max(fw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new bs;for(let u=0;u<r;u++){const f=new bs,h=new Qn(new nc(.14,.34,24),new es({color:16777215,transparent:!0,opacity:.22})),p=new Qn(new nc(.09,.28,24),new es({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},pw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ie(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},ha=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],mw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:ha(s),buildings:co()}),Vl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...ha(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function gw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var Ee,it,ut,tt;const[r,o]=Fe.useState(e),[l,u]=Fe.useState(!1),[f,h]=Fe.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Fe.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Fe.useState({isOpen:!1,message:""}),[M,C]=Fe.useState(!1),[D,y]=Fe.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Fe.useRef(!1),[L,R]=Fe.useState(()=>{if(t)return[Vl({})];try{const F=localStorage.getItem("arManager_projects");if(F){const te=JSON.parse(F);if(Array.isArray(te)&&te.length>0)return te}}catch(F){console.error("Project load error:",F)}let w=ha("預設導引專案"),k=co();try{const F=localStorage.getItem("arManager_config");F&&(w={...w,...JSON.parse(F)});const te=localStorage.getItem("arManager_buildings");te&&(k=JSON.parse(te))}catch(F){console.error("Legacy AR data migration error:",F)}return[{id:`project_${Date.now()}`,name:w.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:w,buildings:k}]}),[P,V]=Fe.useState((Ee=L[0])==null?void 0:Ee.id),I=L.find(w=>w.id===P)||L[0],[O,T]=Fe.useState(()=>Ci((I==null?void 0:I.systemConfig)||ha())),[N,X]=Fe.useState(()=>Ci((I==null?void 0:I.buildings)||co())),[H,Z]=Fe.useState((it=N[0])==null?void 0:it.id),[re,me]=Fe.useState((tt=(ut=N[0])==null?void 0:ut.floors[0])==null?void 0:tt.id),[W,oe]=Fe.useState(""),[K,J]=Fe.useState(null),[pe,ue]=Fe.useState(null),[B,le]=Fe.useState(null),[et,rt]=Fe.useState(!1),[Re,de]=Fe.useState(!1),[Ae,_e]=Fe.useState(!1),[Be,st]=Fe.useState(null),[ft,St]=Fe.useState(null),[_t,Bt]=Fe.useState(!1),[$t,bt]=Fe.useState({x:0,y:0}),[Vt,Nt]=Fe.useState({x:0,y:0}),[jt,$]=Fe.useState(!1),[Lt,Mt]=Fe.useState(!1),[Tt,Je]=Fe.useState([]),[zt,U]=Fe.useState(!1),[E,ae]=Fe.useState([]),[Me,Ne]=Fe.useState([]),We=Fe.useRef(null),Ye=Fe.useRef(null),xe=Fe.useRef(null),we=Fe.useRef(null),[Ie,nt]=Fe.useState({x:0,y:0,scale:1});Fe.useEffect(()=>{const w=k=>{var te;const F=(te=k==null?void 0:k.detail)==null?void 0:te.tab;["map","list","settings","export"].includes(F)&&Ue(F)};return window.addEventListener("ar-manager:set-tab",w),()=>window.removeEventListener("ar-manager:set-tab",w)},[]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(L))}catch(w){w.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[L,t]),Fe.useEffect(()=>{if(!t)return;let w=!1;return(async()=>{const F=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(F.ok)return F.json();const te=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!te.ok)throw new Error(`Unable to load AR data: ${te.status}`);return te.json()})().then(F=>{var Te,ce,ze;if(w)return;const te=Vl(F);R([te]),V(te.id),T(Ci(te.systemConfig)),X(Ci(te.buildings)),Z((Te=te.buildings[0])==null?void 0:Te.id),me((ze=(ce=te.buildings[0])==null?void 0:ce.floors[0])==null?void 0:ze.id)}).catch(F=>{console.warn("Published AR data unavailable",F),w||(R([Vl({})]),T(ha("AR導覽")),X([]))}),()=>{w=!0}},[t]),Fe.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let w=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(k=>{if(!k.ok)throw new Error(`Unable to load AR data: ${k.status}`);return k.json()}).then(k=>{var te,Te,ce;if(w||!Array.isArray(k==null?void 0:k.buildings)||k.buildings.length===0)return;const F=Vl(k);R([F]),V(F.id),T(Ci(F.systemConfig)),X(Ci(F.buildings)),Z((te=F.buildings[0])==null?void 0:te.id),me((ce=(Te=F.buildings[0])==null?void 0:Te.floors[0])==null?void 0:ce.id)}).catch(k=>console.warn("Published AR admin seed unavailable",k)),()=>{w=!0}},[t]),Fe.useEffect(()=>{var k,F,te;if(t||!I)return;_.current=!0;const w=Ci(I.buildings||co());T(Ci(I.systemConfig||ha(I.name))),X(w),Z((k=w[0])==null?void 0:k.id),me((te=(F=w[0])==null?void 0:F.floors[0])==null?void 0:te.id),J(null),ue(null),oe(""),nt({x:0,y:0,scale:1})},[P,t]),Fe.useEffect(()=>{if(!t&&P){if(_.current){_.current=!1;return}R(w=>w.map(k=>k.id===P?{...k,name:O.projectName||k.name,systemConfig:Ci(O),buildings:Ci(N),updatedAt:new Date().toISOString()}:k))}},[P,N,O,t]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(N))}catch(w){w.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[N,t]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(O))}catch(w){console.error("Config save error:",w)}},[O,t]),Fe.useEffect(()=>{var k;const w=N.find(F=>F.id===H);w?w.floors.find(F=>F.id===re)||w.floors.length>0&&me(w.floors[0].id):N.length>0&&(Z(N[0].id),me((k=N[0].floors[0])==null?void 0:k.id))},[N,H,re]),Fe.useEffect(()=>{W===re&&oe("")},[re,W]),Fe.useEffect(()=>{rt(!1)},[K,pe]),Fe.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||C(!0)},[]);const $e=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(k=>k.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),C(!1)},Se=N.find(w=>w.id===H)||N[0],De=Se==null?void 0:Se.floors.find(w=>w.id===re),wt=(De==null?void 0:De.markers)||[],Pt=(De==null?void 0:De.waypoints)||[],Y=(De==null?void 0:De.edges)||[],Pe=Zr(De),ye=(w,k,F=!0)=>{X(te=>{let Te=null,ce=null,ze=null;if(te.forEach(Et=>Et.floors.forEach(mt=>{const It=F?mt.markers:mt.waypoints,cn=It==null?void 0:It.find(Dt=>Dt.id===w);cn&&(Te=cn,ce=Et.id,ze=mt)})),!Te)return te;const Ge=k.shaftId!==void 0?k.shaftId:Te.shaftId,ht=(k.isVerticalShaft!==void 0?k.isVerticalShaft:Te.isVerticalShaft)&&Ge,Ze=Zr(ze);return te.map(Et=>Et.id!==ce&&!ht?Et:{...Et,floors:Et.floors.map(mt=>{let It=F?[...mt.markers||[]]:[...mt.waypoints||[]];const cn=Dt=>{const Mn={...Dt,...k};if((k.x!==void 0||k.y!==void 0)&&mt.id!==ze.id){const lt=Zr(mt);if(k.x!==void 0){const Ht=Ze.blX+k.x*(Ze.trX-Ze.blX);Mn.x=lt.trX!==lt.blX?(Ht-lt.blX)/(lt.trX-lt.blX):.5}if(k.y!==void 0){const Ht=Ze.trY-k.y*(Ze.trY-Ze.blY);Mn.y=lt.trY!==lt.blY?(lt.trY-Ht)/(lt.trY-lt.blY):.5}}return Mn};return ht?It=It.map(Dt=>Dt.shaftId===Ge||Dt.id===w?cn(Dt):Dt):It=It.map(Dt=>Dt.id===w?cn(Dt):Dt),F?{...mt,markers:It}:{...mt,waypoints:It}})})})},qe=(w,k,F)=>ye(w,{[k]:F},!0),Le=(w,k,F)=>ye(w,{[k]:F},!1),Ce=(w,k,F=!0)=>{if(k){const te=F?"shaft_m_":"shaft_wp_",ce={isVerticalShaft:!0,shaftId:w.shaftId||`${te}${Date.now()}`,linkedFloorIds:[re]};F||(ce.sourceFloorId=re),ye(w.id,ce,F)}else{const te=w.shaftId;X(Te=>Te.map(ce=>ce.id!==H?ce:{...ce,floors:ce.floors.map(ze=>{const Ge=Ut=>(Ut||[]).filter(ht=>!(ze.id!==re&&ht.shaftId===te)).map(ht=>ht.id===w.id?{...ht,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:ht);return F?{...ze,markers:Ge(ze.markers)}:{...ze,waypoints:Ge(ze.waypoints)}})}))}},ot=(w,k,F,te=!0)=>{const Te=w.shaftId,ce=w.linkedFloorIds||[re],ze=F?[...ce,k]:ce.filter(Ge=>Ge!==k);X(Ge=>Ge.map(Ut=>Ut.id!==H?Ut:{...Ut,floors:Ut.floors.map(ht=>{let Ze=te?[...ht.markers||[]]:[...ht.waypoints||[]];if(F&&ht.id===k){const Et=Zr(ht),mt=Zr(De),It=mt.blX+w.x*(mt.trX-mt.blX),cn=mt.trY-w.y*(mt.trY-mt.blY),Dt=Et.trX!==Et.blX?(It-Et.blX)/(Et.trX-Et.blX):.5,Mn=Et.trY!==Et.blY?(Et.trY-cn)/(Et.trY-Et.blY):.5,lt=te?"marker_":"wp_";Ze.push({...w,id:`${lt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${ht.id}`,x:Dt,y:Mn,linkedFloorIds:ze})}else!F&&ht.id===k?Ze=Ze.filter(Et=>Et.shaftId!==Te):Ze=Ze.map(Et=>Et.shaftId===Te?{...Et,linkedFloorIds:ze}:Et);return te?{...ht,markers:Ze}:{...ht,waypoints:Ze}})}))},yt=w=>{let k=null,F=new Set([w]);N.forEach(te=>te.floors.forEach(Te=>{var ce;Te.markers.forEach(ze=>{ze.id===w&&ze.isVerticalShaft&&(k=ze.shaftId)}),(ce=Te.waypoints)==null||ce.forEach(ze=>{ze.id===w&&ze.isVerticalShaft&&(k=ze.shaftId)})})),k&&N.forEach(te=>te.floors.forEach(Te=>{var ce;Te.markers.forEach(ze=>{ze.shaftId===k&&F.add(ze.id)}),(ce=Te.waypoints)==null||ce.forEach(ze=>{ze.shaftId===k&&F.add(ze.id)})})),X(te=>te.map(Te=>({...Te,floors:Te.floors.map(ce=>({...ce,markers:(ce.markers||[]).filter(ze=>!F.has(ze.id)),waypoints:(ce.waypoints||[]).filter(ze=>!F.has(ze.id)),edges:(ce.edges||[]).filter(ze=>!F.has(ze.start)&&!F.has(ze.end))}))}))),F.has(K)&&J(null),F.has(pe)&&ue(null),F.has(Be)&&(st(null),St(null)),rt(!1)},Jt=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:w=>{if(!w)return;const k=`b_${Date.now()}`,F=`f_${Date.now()}`;X(te=>[...te,{id:k,name:w,floors:[{id:F,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),Z(k),me(F)}})},Kt=()=>{Se&&h({isOpen:!0,title:`新增 ${Se.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:w=>{if(!w)return;const k=`f_${Date.now()}`,F=De?{...Zr(De)}:{blX:0,blY:0,trX:100,trY:100};X(te=>te.map(Te=>Te.id===H?{...Te,floors:[...Te.floors,{id:k,name:w,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:F}]}:Te)),me(k)}})},vn=w=>{const k=w.target.files[0],F=w.target;if(k&&H&&re){const te=H,Te=re,ce=new FileReader;ce.onload=ze=>{T0(ze.target.result,1600,Ge=>{X(Ut=>Ut.map(ht=>ht.id===te?{...ht,floors:ht.floors.map(Ze=>Ze.id===Te?{...Ze,imageUrl:Ge}:Ze)}:ht)),$(!1)})},ce.readAsDataURL(k)}F.value=""},Fn=(w,k)=>{const F=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,te={id:F,x:w,y:k,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:re};X(Te=>Te.map(ce=>ce.id===H?{...ce,floors:ce.floors.map(ze=>{if(ze.id!==re)return ze;const Ge=Be?[...ze.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:F}]:ze.edges||[];return{...ze,waypoints:[...ze.waypoints||[],te],edges:Ge}})}:ce)),st(F)},Xn=w=>{if(Be===w){st(null),St(null);return}Be&&Be!==w&&(Y.some(F=>F.start===Be&&F.end===w||F.end===Be&&F.start===w)||X(F=>F.map(te=>te.id===H?{...te,floors:te.floors.map(Te=>Te.id===re?{...Te,edges:[...Te.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:w}]}:Te)}:te))),st(w)},Wi=(w,k)=>{for(let te of wt)if(Math.hypot(te.x-w,te.y-k)<.03)return te.id;for(let te of Pt)if(Math.hypot(te.x-w,te.y-k)<.03)return te.id;return null};Fe.useEffect(()=>{const w=k=>{k.key==="Escape"&&Re&&(st(null),St(null))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[Re]);const In=(w,k)=>{const F={},te=[],Te={};N.forEach(lt=>{lt.floors.forEach(Ht=>{var Di,Rr;const hn=Ht.bounds||{blX:0,blY:0,trX:100,trY:100},ti=(nn,Yi)=>({physX:hn.blX+nn*(hn.trX-hn.blX),physY:hn.trY-Yi*(hn.trY-hn.blY)});Ht.markers.forEach(nn=>{F[nn.id]={...nn,...ti(nn.x,nn.y),fId:Ht.id,fName:Ht.name},nn.isVerticalShaft&&nn.shaftId&&(Te[nn.shaftId]||(Te[nn.shaftId]=[]),Te[nn.shaftId].push(nn.id))}),(Di=Ht.waypoints)==null||Di.forEach(nn=>{F[nn.id]={...nn,...ti(nn.x,nn.y),fId:Ht.id,fName:Ht.name},nn.isVerticalShaft&&nn.shaftId&&(Te[nn.shaftId]||(Te[nn.shaftId]=[]),Te[nn.shaftId].push(nn.id))}),(Rr=Ht.edges)==null||Rr.forEach(nn=>te.push(nn))})});const ce={};Object.keys(F).forEach(lt=>{ce[lt]={}}),te.forEach(lt=>{if(F[lt.start]&&F[lt.end]){const Ht=Math.hypot(F[lt.start].physX-F[lt.end].physX,F[lt.start].physY-F[lt.end].physY);ce[lt.start][lt.end]=Ht,ce[lt.end][lt.start]=Ht}}),Object.values(Te).forEach(lt=>{for(let Ht=0;Ht<lt.length;Ht++)for(let hn=Ht+1;hn<lt.length;hn++)ce[lt[Ht]][lt[hn]]=5,ce[lt[hn]][lt[Ht]]=5});const ze=lt=>Object.keys(ce[lt]).length>0;let Ge=null,Ut=1/0,ht=null,Ze=1/0;if(Object.values(F).forEach(lt=>{if(ze(lt.id)){if(lt.fId===w.fId){const Ht=Math.hypot(lt.x-w.x,lt.y-w.y);Ht<Ut&&(Ut=Ht,Ge=lt.id)}if(lt.fId===k.fId){const Ht=Math.hypot(lt.x-k.x,lt.y-k.y);Ht<Ze&&(Ze=Ht,ht=lt.id)}}}),!Ge||!ht){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),ae([]),Ne([]);return}const Et={},mt={},It=new Set(Object.keys(F));for(Object.keys(F).forEach(lt=>{Et[lt]=1/0,mt[lt]=null}),Et[Ge]=0;It.size>0;){let lt=null;if(It.forEach(Ht=>{(lt===null||Et[Ht]<Et[lt])&&(lt=Ht)}),Et[lt]===1/0||lt===ht)break;It.delete(lt),Object.entries(ce[lt]).forEach(([Ht,hn])=>{if(It.has(Ht)){const ti=Et[lt]+hn;ti<Et[Ht]&&(Et[Ht]=ti,mt[Ht]=lt)}})}const cn=[];let Dt=ht;for(;Dt;)cn.unshift(Dt),Dt=mt[Dt];if(cn.length===0||cn[0]!==Ge){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),ae([]),Ne([]);return}const Mn=[{x:w.x,y:w.y,fId:w.fId,fName:w.fName,isVirtual:!0},...cn.map(lt=>F[lt]),{x:k.x,y:k.y,fId:k.fId,fName:k.fName,isVirtual:!0}];Ne(Mn)};Fe.useEffect(()=>{const w=We.current;if(!w||r!=="map")return;const k=F=>{F.preventDefault();const te=w.getBoundingClientRect(),Te=F.clientX-te.left,ce=F.clientY-te.top,ze=F.deltaY<0?1.1:.9;nt(Ge=>{const Ut=Math.max(.1,Math.min(10,Ge.scale*ze)),ht=Ut/Ge.scale;return{x:Te-(Te-Ge.x)*ht,y:ce-(ce-Ge.y)*ht,scale:Ut}})};return w.addEventListener("wheel",k,{passive:!1}),()=>w.removeEventListener("wheel",k)},[r]);const _i=w=>{w.button!==void 0&&w.button!==0||w.target.closest(".marker-pin")||w.target.closest(".waypoint-pin")||(Bt(!0),bt({x:w.clientX-Ie.x,y:w.clientY-Ie.y}),Nt({x:w.clientX,y:w.clientY}),w.target.setPointerCapture(w.pointerId))},Yn=w=>{if(_t)nt(k=>({...k,x:w.clientX-$t.x,y:w.clientY-$t.y}));else if(Re&&Be&&Ye.current){const k=Ye.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(w.clientX-k.left)/k.width)),te=Math.max(0,Math.min(1,(w.clientY-k.top)/k.height));St({x:F,y:te})}else if(B&&Ye.current){const k=Ye.current.getBoundingClientRect();let F=Math.max(0,Math.min(1,(w.clientX-k.left)/k.width)),te=Math.max(0,Math.min(1,(w.clientY-k.top)/k.height));B.startsWith("marker_")?(qe(B,"x",F),qe(B,"y",te)):B.startsWith("wp_")&&(Le(B,"x",F),Le(B,"y",te))}},On=w=>{if(_t&&(Bt(!1),w.target.releasePointerCapture(w.pointerId),Math.hypot(w.clientX-Vt.x,w.clientY-Vt.y)<5)){if(!(De!=null&&De.imageUrl)||!Ye.current)return;const F=Ye.current.getBoundingClientRect();let te=Math.max(0,Math.min(1,(w.clientX-F.left)/F.width)),Te=Math.max(0,Math.min(1,(w.clientY-F.top)/F.height));if(zt){const ce={x:te,y:Te,fId:re,fName:De==null?void 0:De.name},ze=E.length>=2?[ce]:[...E,ce];ae(ze),ze.length===1&&Ne([]),ze.length===2&&In(ze[0],ze[1])}else if(Re){const ce=Wi(te,Te);ce?Xn(ce):Fn(te,Te)}else if(jt){const ce=N.reduce((Ge,Ut)=>Ge+Ut.floors.reduce((ht,Ze)=>ht+Ze.markers.length,0),0),ze={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${ce+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:te,y:Te,imageUrl:null,enabled:!0,recognitionStatus:"untested"};X(Ge=>Ge.map(Ut=>Ut.id===H?{...Ut,floors:Ut.floors.map(ht=>ht.id===re?{...ht,markers:[...ht.markers,ze]}:ht)}:Ut)),J(ze.id),ue(null),$(!1)}else Lt?Je(ce=>ce.length>=2?[{x:te,y:Te}]:[...ce,{x:te,y:Te}]):(J(null),ue(null))}},$n=w=>{const k=w.target.files[0],F=w.target;if(k&&K){const te=K,Te=new FileReader;Te.onload=ce=>{T0(ce.target.result,800,ze=>{qe(te,"imageUrl",ze),qe(te,"recognitionStatus","untested")})},Te.readAsDataURL(k)}F.value=""},An=(w,k,F)=>{Z(w),me(k),J(F),ue(null),o("map")},ei=async()=>{const w={version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name)||"AR導覽",description:(I==null?void 0:I.description)||"",updatedAt:new Date().toISOString()},systemConfig:Ci(O),buildings:Ci(N)};R(k=>k.map(F=>F.id===P?{...F,name:w.project.name,systemConfig:w.systemConfig,buildings:w.buildings,updatedAt:w.project.updatedAt}:F));try{const k=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}),F=await k.json().catch(()=>({}));if(!k.ok)throw new Error(F.error||`Save failed: ${k.status}`);x({isOpen:!0,message:`「${w.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(k){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${k.message}`})}},Ii=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${L.length+1}`,onSubmit:w=>{if(!w)return;const k=mw(w);R(F=>[...F,k]),V(k.id),o("map")}})},yi=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(I==null?void 0:I.name)||O.projectName||"",onSubmit:w=>{w&&(T(k=>({...k,projectName:w})),R(k=>k.map(F=>F.id===P?{...F,name:w,systemConfig:{...F.systemConfig,projectName:w},updatedAt:new Date().toISOString()}:F)))}})},ui=()=>{if(L.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(I==null?void 0:I.name)||O.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(w=>{var F;const k=w.filter(te=>te.id!==P);return V((F=k[0])==null?void 0:F.id),k})}})},Xi=()=>{X(co()),J(null),ue(null),nt({x:0,y:0,scale:1}),$(!1),de(!1),_e(!1),st(null),St(null),U(!1),ae([]),Ne([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},lr=()=>{const w=(O.projectName||(I==null?void 0:I.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),k="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:P,name:O.projectName||(I==null?void 0:I.name),description:(I==null?void 0:I.description)||"",updatedAt:I==null?void 0:I.updatedAt},systemConfig:O,buildings:N},null,2)),F=document.createElement("a");F.setAttribute("href",k),F.setAttribute("download",`${w}_ar_config_v7.json`),document.body.appendChild(F),F.click(),F.remove()},G=()=>{if(!(De!=null&&De.imageUrl)||!We.current||!Ye.current){nt({x:0,y:0,scale:1});return}const w=We.current,k=Ye.current.querySelector("img");if(!k||k.naturalWidth===0)return;const{width:F,height:te}=w.getBoundingClientRect(),Te=Math.min(F/k.naturalWidth,te/k.naturalHeight,1)*.9;nt({x:(F-k.naturalWidth*Te)/2,y:(te-k.naturalHeight*Te)/2,scale:Te})},Ue=w=>{o(w),u(!1),$(!1),Mt(!1),de(!1),_e(!1),st(null),St(null),U(!1),ae([]),Ne([])};let ve=null,be=null;N.forEach(w=>w.floors.forEach(k=>{var F;k.markers.forEach(te=>{te.id===K&&(ve=te,w.name,k.name)}),(F=k.waypoints)==null||F.forEach(te=>{te.id===pe&&(be=te,w.name,k.name)})}));let ct=0,At=0;const b=document.getElementById("current-map-image"),j=Pe.trX-Pe.blX,Q=Pe.trY-Pe.blY;if(b&&j>0){const w=b.offsetWidth*Ie.scale;if(w>0){const k=j/w,F=100*k;ct=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Te=>Te<=F)||.5,At=ct/k}}const ne=N.reduce((w,k)=>w+k.floors.reduce((F,te)=>F+(te.markers||[]).length,0),0),se=N.reduce((w,k)=>w+k.floors.length,0),ke=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:P,onChange:w=>V(w.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:L.map(w=>g.jsx("option",{value:w.id,className:"bg-slate-950",children:w.name},w.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",L.length," 個專案 · ",N.length," 棟建築 · ",se," 個樓層 · ",ne," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Ii,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(zl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:yi,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Cd,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:ei,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ql,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:ui,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Rd,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),Ve=()=>{const w=new Set,k=N.flatMap(F=>F.floors.flatMap(te=>(te.markers||[]).reduce((Te,ce)=>{if(ce.isVerticalShaft&&ce.shaftId){if(w.has(ce.shaftId))return Te;w.add(ce.shaftId)}return Te.push({...ce,bId:F.id,fId:te.id,buildingName:F.name,floorName:te.name}),Te},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[ke(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",k.length," 組節點"]})]}),k.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>Ue("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:k.map(F=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(M0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:F.code}),g.jsx(Ef,{status:F.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:F.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[F.buildingName," · ",F.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${F.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:F.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>An(F.bId,F.fId,F.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Cd,{className:"w-4 h-4"}),"編輯"]})]})]},F.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:k.map(F=>{var Te;const te=F.isVerticalShaft?(Te=N.find(ce=>ce.id===F.bId))==null?void 0:Te.floors.filter(ce=>{var ze;return(ze=F.linkedFloorIds)==null?void 0:ze.includes(ce.id)}).sort((ce,ze)=>jn(ze.name)-jn(ce.name)).map(ce=>ce.name).join(", "):F.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${F.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:F.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${F.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:te})]}),g.jsx("td",{className:"px-4 py-4",children:F.imageUrl?g.jsx("img",{src:F.imageUrl,alt:F.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(M0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:F.code}),F.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(vs,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):F.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(cw,{direction:F.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:F.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:F.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:F.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Ef,{status:F.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>An(F.bId,F.fId,F.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Cd,{className:"w-4 h-4"})})})]},F.id)})})]})})})]})]})})},Oe=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[ke(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(b0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(QE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:O.projectName,onChange:w=>T({...O,projectName:w.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:O.lerpFactor,onChange:w=>T({...O,lerpFactor:parseInt(w.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(S0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Xi()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),Qe=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[ke(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(Ad,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((w,k)=>w+k.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:N.reduce((w,k)=>w+k.floors.reduce((F,te)=>F+(te.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(S0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:lr,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(Ad,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(I0,{buildings:N,systemConfig:O,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(_s,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Hl,{icon:g.jsx(E0,{}),label:"平面圖管理",active:r==="map",onClick:()=>Ue("map")}),g.jsx(Hl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>Ue("list")}),g.jsx(Hl,{icon:g.jsx(b0,{}),label:"系統設定",active:r==="settings",onClick:()=>Ue("settings")}),g.jsx(Hl,{icon:g.jsx(Ad,{}),label:"匯出JSON",active:r==="export",onClick:()=>Ue("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(I0,{buildings:N,systemConfig:O,onMenuClick:()=>u(!0)}),r==="list"&&Ve(),r==="settings"&&Oe(),r==="export"&&Qe(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:P,onChange:w=>V(w.target.value),children:L.map(w=>g.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),g.jsx("button",{onClick:Ii,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(zl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:ei,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ql,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(ZE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:H,onChange:w=>Z(w.target.value),children:N.map(w=>g.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),g.jsx("button",{onClick:Jt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),Se&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(ew,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:re,onChange:w=>me(w.target.value),children:Se.floors.slice().sort((w,k)=>jn(k.name)-jn(w.name)).map(w=>g.jsx("option",{value:w.id,className:"bg-slate-900",children:w.name},w.id))}),g.jsx("button",{onClick:Kt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(zl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx(JE,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:W,onChange:w=>oe(w.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),N.flatMap(w=>w.floors.filter(k=>k.id!==re).sort((k,F)=>jn(F.name)-jn(k.name)).map(k=>g.jsxs("option",{value:k.id,className:"bg-slate-900",children:[w.name,"-",k.name]},k.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{De!=null&&De.imageUrl&&(U(!zt),de(!1),_e(!1),$(!1),Mt(!1),st(null),J(null),ue(null),St(null),ae([]),Ne([]))},disabled:!(De!=null&&De.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${zt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[zt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(y0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(De==null?void 0:De.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{_e(!Ae),de(!1),U(!1),$(!1),Mt(!1),st(null),J(null),ue(null),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ae?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:Ae?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(vs,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{de(!Re),_e(!1),U(!1),$(!1),Mt(!1),st(null),J(null),ue(null),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Re?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:Re?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(rw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{Mt(!Lt),_e(!1),U(!1),$(!1),de(!1),Je([]),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Lt?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:Lt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(sw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{$(!jt),_e(!1),U(!1),Mt(!1),de(!1),St(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${jt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:jt?g.jsx(_s,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:Pe.blX,blY:Pe.blY,trX:Pe.trX,trY:Pe.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(fa,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:xe,onChange:vn,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>xe.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(lw,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:We,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${Re?"cursor-crosshair":Ae?"cursor-pointer":jt||Lt||zt?"cursor-crosshair":_t?"cursor-grabbing":"cursor-grab"}`,onPointerDown:_i,onPointerMove:Yn,onPointerUp:On,onPointerCancel:On,children:[De&&g.jsxs("div",{className:"absolute left-4 top-4 z-[80] rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(Se==null?void 0:Se.name)||"目前場域"," / ",De.name||"未命名樓層"]}),g.jsxs("div",{ref:Ye,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Ie.x}px, ${Ie.y}px) scale(${Ie.scale})`},children:[W&&(()=>{let w=null;if(N.forEach(ze=>ze.floors.forEach(Ge=>{Ge.id===W&&(w=Ge)})),!w)return null;const k=Zr(w),F=j!==0?(k.trX-k.blX)/j:1,te=Q!==0?(k.trY-k.blY)/Q:1,Te=j!==0?(k.blX-Pe.blX)/j:0,ce=Q!==0?(Pe.trY-k.trY)/Q:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Te*100}%`,top:`${ce*100}%`,width:`${F*100}%`,height:`${te*100}%`,opacity:.4},children:[w.imageUrl&&g.jsx("img",{src:w.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),w.markers.map(ze=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${ze.x*100}%`,top:`${ze.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`},children:ze.code})})},ze.id))]})})(),(De==null?void 0:De.imageUrl)&&g.jsx("img",{id:"current-map-image",src:De.imageUrl,alt:"Floor Plan",onLoad:G,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${W?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),Y.map(w=>{const k=wt.find(te=>te.id===w.start)||Pt.find(te=>te.id===w.start),F=wt.find(te=>te.id===w.end)||Pt.find(te=>te.id===w.end);return k&&F?g.jsx("line",{x1:`${k.x*100}%`,y1:`${k.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ie.scale),strokeOpacity:"0.7"},w.id):null}),Re&&Be&&ft&&(()=>{const w=wt.find(k=>k.id===Be)||Pt.find(k=>k.id===Be);return w?g.jsx("line",{x1:`${w.x*100}%`,y1:`${w.y*100}%`,x2:`${ft.x*100}%`,y2:`${ft.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Ie.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),zt&&Me.length>0&&Me.map((w,k)=>{if(k===Me.length-1)return null;const F=Me[k+1],te=[];return w.fId===re&&F.fId===re?te.push(g.jsx("line",{x1:`${w.x*100}%`,y1:`${w.y*100}%`,x2:`${F.x*100}%`,y2:`${F.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Ie.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${k}`)):w.fId===re&&F.fId!==re?te.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:12/Math.max(.5,Ie.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Ie.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ie.scale),to:35/Math.max(.5,Ie.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:6/Math.max(.5,Ie.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${w.x*100}%`,y:`${w.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Ie.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",F.fName]})]},`leave_${k}`)):w.fId!==re&&F.fId===re&&te.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:12/Math.max(.5,Ie.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Ie.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Ie.scale),to:35/Math.max(.5,Ie.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${F.x*100}%`,cy:`${F.y*100}%`,r:6/Math.max(.5,Ie.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${F.x*100}%`,y:`${F.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Ie.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",w.fName]})]},`enter_${k}`)),g.jsx(bf.Fragment,{children:te},`testfrag_${k}`)})]}),Pt.map(w=>{const k=pe===w.id,F=Be===w.id,te=w.isVerticalShaft&&w.sourceFloorId&&w.sourceFloorId!==re;let Te="bg-orange-500",ce="border-white",ze="";return w.isVerticalShaft&&(Te="bg-green-500"),F?(Te="bg-white",ce=te?"border-green-500":"border-orange-500",ze=te?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):k&&(ce="border-cyan-400 border-2",ze="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${k?"z-40":""}`,style:{left:`${w.x*100}%`,top:`${w.y*100}%`},onPointerDown:Ge=>{Ge.stopPropagation(),Ge.button===0&&(Re?Xn(w.id):Ae?(w.isVerticalShaft||Ce(w,!0,!1),J(null),ue(w.id)):!zt&&!Lt&&!_t&&!jt&&(J(null),ue(w.id),le(w.id),Ge.target.setPointerCapture(Ge.pointerId)))},onPointerUp:Ge=>{Ge.stopPropagation(),Ge.target.releasePointerCapture(Ge.pointerId)},onContextMenu:Ge=>{Ge.preventDefault(),Re?yt(w.id):Ae?w.isVerticalShaft&&Ce(w,!1,!1):!zt&&!Lt&&!jt&&(J(null),ue(w.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Te} ${ce} ${ze}`,style:{width:`${(F?14:10)/Math.max(.5,Ie.scale)}px`,height:`${(F?14:10)/Math.max(.5,Ie.scale)}px`,borderWidth:k?"2px":"1px"},children:w.isVerticalShaft&&g.jsx(vs,{className:F?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Ie.scale)}px`,height:`${6/Math.max(.5,Ie.scale)}px`}})})},w.id)}),zt&&E.map((w,k)=>w.fId!==re?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${w.x*100}%`,top:`${w.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Ie.scale)}px`,height:`${16/Math.max(.5,Ie.scale)}px`},children:k===0?"起":"終"})},`testpt_${k}`)),Lt&&Tt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[Tt.length===2&&g.jsx("line",{x1:`${Tt[0].x*100}%`,y1:`${Tt[0].y*100}%`,x2:`${Tt[1].x*100}%`,y2:`${Tt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Ie.scale),strokeDasharray:"5,5"}),Tt.map((w,k)=>g.jsx("circle",{cx:`${w.x*100}%`,cy:`${w.y*100}%`,r:6/Math.max(.1,Ie.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Ie.scale)},k))]}),Tt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(Tt[0].x+Tt[1].x)*50}%`,top:`${(Tt[0].y+Tt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Ie.scale)})`},children:[Math.hypot((Tt[1].x-Tt[0].x)*j,(Tt[1].y-Tt[0].y)*Q).toFixed(1)," m"]})]}),wt.map(w=>{const k=w.isVerticalShaft?Se==null?void 0:Se.floors.filter(F=>{var te;return(te=w.linkedFloorIds)==null?void 0:te.includes(F.id)}).sort((F,te)=>jn(te.name)-jn(F.name)).map(F=>F.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${K===w.id?"z-[60]":""} ${Be===w.id?"scale-125":""}`,style:{left:`${w.x*100}%`,top:`${w.y*100}%`},onPointerDown:F=>{F.stopPropagation(),F.button===0&&(Re?Xn(w.id):Ae?(w.isVerticalShaft||Ce(w,!0,!0),ue(null),J(w.id)):!zt&&!jt&&!Lt&&!_t&&(ue(null),le(w.id),J(w.id),F.target.setPointerCapture(F.pointerId)))},onPointerUp:F=>{F.stopPropagation(),F.target.releasePointerCapture(F.pointerId)},onContextMenu:F=>{F.preventDefault(),Re?yt(w.id):Ae?w.isVerticalShaft&&Ce(w,!1,!0):!zt&&!Lt&&!jt&&(ue(null),J(w.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${K===w.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":w.enabled?w.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Be===w.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:w.isVerticalShaft?g.jsx(vs,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`},children:w.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${K===w.id?"border-t-white":w.enabled?w.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Be===w.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${K===w.id?"opacity-100 border-cyan-500 text-cyan-400":w.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Ie.scale)})`,transformOrigin:"top center"},children:[w.title||"未命名"," ",w.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",k,")"]})]})]},w.id)})]}),Ae&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(vs,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),Re&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(nw,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),zt&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(y0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(De!=null&&De.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(E0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",Se==null?void 0:Se.name," - ",De==null?void 0:De.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(De==null?void 0:De.imageUrl)&&At>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:Pe.blX,blY:Pe.blY,trX:Pe.trX,trY:Pe.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(fa,{className:"w-3 h-3 mr-1"})," 比例尺: ",ct," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${At}px`}})]}),(De==null?void 0:De.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>nt(w=>({...w,scale:Math.min(10,w.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(wg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>nt(w=>({...w,scale:Math.max(.1,w.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(bg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:G,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(tw,{className:"w-5 h-5"})})]})]})]}),D.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(fa,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.blX,onChange:w=>y({...D,blX:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.blY,onChange:w=>y({...D,blY:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:D.trX,onChange:w=>y({...D,trX:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:D.trY,onChange:w=>y({...D,trY:parseFloat(w.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{X(w=>w.map(k=>k.id===H?{...k,floors:k.floors.map(F=>F.id===re?{...F,bounds:{blX:D.blX,blY:D.blY,trX:D.trX,trY:D.trY}}:F)}:k)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:w=>{w.key==="Enter"&&(f.onSubmit(w.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:w=>{f.onSubmit(w.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(Eg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(Mf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(ow,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:$e,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ql,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(K||pe)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:K?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{J(null),ue(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(_s,{})})]}),ve&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:ve.code,onChange:w=>qe(ve.id,"code",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:ve.title,onChange:w=>qe(ve.id,"title",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:ve.description||"",onChange:w=>qe(ve.id,"description",w.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(ve.x*100).toFixed(1),onChange:w=>qe(ve.id,"x",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(ve.y*100).toFixed(1),onChange:w=>qe(ve.id,"y",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:ve.isVerticalShaft||!1,onChange:w=>Ce(ve,w.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),ve.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Se==null?void 0:Se.floors.slice().sort((w,k)=>jn(k.name)-jn(w.name)).map(w=>{var te;const k=(te=ve.linkedFloorIds)==null?void 0:te.includes(w.id),F=w.id===re;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:F,checked:k||F,onChange:Te=>ot(ve,w.id,Te.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[w.name," ",F&&"(目前)"]})]},w.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:ve.arrowDirection||"none",onChange:w=>qe(ve.id,"arrowDirection",w.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:ve.enabled,onChange:w=>qe(ve.id,"enabled",w.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:we,onChange:$n,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>we.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:ve.imageUrl?g.jsx("img",{src:ve.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(Mf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(xw,{marker:ve,onUpdateStatus:w=>qe(ve.id,"recognitionStatus",w),showAlert:w=>x({isOpen:!0,message:w})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>rt(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>yt(ve.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>rt(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Rd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>J(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),be&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(be.x*100).toFixed(1),onChange:w=>Le(be.id,"x",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(be.y*100).toFixed(1),onChange:w=>Le(be.id,"y",Math.max(0,Math.min(100,parseFloat(w.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx(vs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:be.isVerticalShaft||!1,onChange:w=>Ce(be,w.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),be.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:Se==null?void 0:Se.floors.slice().sort((w,k)=>jn(k.name)-jn(w.name)).map(w=>{var te;const k=(te=be.linkedFloorIds)==null?void 0:te.includes(w.id),F=w.id===re;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${k?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:F,checked:k||F,onChange:Te=>ot(be,w.id,Te.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[w.name," ",F&&"(目前)"]})]},w.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:et?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>rt(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>yt(be.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>rt(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Rd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>ue(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Hl({icon:s,label:e,active:t,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Ef({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ql,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(Eg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function xw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Fe.useRef(null),h=Fe.useRef(null),p=Fe.useRef(null),v=Fe.useRef(null),S=Fe.useRef(null),x=Fe.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Fe.useRef({frames:0,lockedFrames:0});Fe.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const C=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,P=x.current;P.refGray&&P.refGray.delete(),P.refKeypoints&&P.refKeypoints.delete(),P.refDescriptors&&P.refDescriptors.delete(),P.orbDetector&&P.orbDetector.delete(),P.matcher&&P.matcher.delete();const V=document.createElement("canvas"),I=V.getContext("2d"),O=p.current,T=320;let N=O.naturalWidth||O.width,X=O.naturalHeight||O.height;(N>T||X>T)&&(N>X?(X=Math.round(X*T/N),N=T):(N=Math.round(N*T/X),X=T)),V.width=N,V.height=X,I.drawImage(O,0,0,N,X);const H=R.imread(V),Z=new R.Mat;R.cvtColor(H,Z,R.COLOR_RGBA2GRAY);const re=new R.ORB,me=new R.KeyPointVector,W=new R.Mat;re.detectAndCompute(Z,new R.Mat,me,W);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:Z,refKeypoints:me,refDescriptors:W,orbDetector:re,matcher:oe},H.delete(),!0}catch{return!1}},D=R=>{if(R.length<4)return!1;let P=[];for(let V=0;V<4;V++){let I=R[(V+1)%4].x-R[V].x,O=R[(V+1)%4].y-R[V].y,T=R[(V+2)%4].x-R[(V+1)%4].x,N=R[(V+2)%4].y-R[(V+1)%4].y;P.push(I*N-O*T>0)}return P.every(V=>V===P[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!C()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(P){console.warn("Device orientation permission was not granted.",P)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,L()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Fe.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const L=()=>{const R=window.cv,P=x.current,V=f.current,I=h.current,O=I.getContext("2d");let T=performance.now(),N=null;const X=.15;let H=0;const Z=3;let re=0;const me=10;let W=null;const oe=()=>{if(!V||!V.srcObject||!P.refDescriptors)return;const K=performance.now(),J=Math.round(1e3/(K-T));T=K,O.drawImage(V,0,0,I.width,I.height);let pe=0,ue=0,B=!1,le=null,et=H%Z===0;if(H++,et){try{const Re=R.imread(I),de=new R.Mat;R.cvtColor(Re,de,R.COLOR_RGBA2GRAY);const Ae=new R.KeyPointVector,_e=new R.Mat;if(P.orbDetector.detectAndCompute(de,new R.Mat,Ae,_e),!_e.empty()&&_e.rows>0){const Be=new R.DMatchVector;P.matcher.match(P.refDescriptors,_e,Be);let st=[];for(let St=0;St<Be.size();St++)st.push(Be.get(St));st.sort((St,_t)=>St.distance-_t.distance);let ft=st.filter(St=>St.distance<=50).slice(0,60);if(pe=ft.length,ft.length>=12){const St=[],_t=[];for(let Nt=0;Nt<ft.length;Nt++){let jt=ft[Nt];St.push(P.refKeypoints.get(jt.queryIdx).pt.x,P.refKeypoints.get(jt.queryIdx).pt.y),_t.push(Ae.get(jt.trainIdx).pt.x,Ae.get(jt.trainIdx).pt.y)}const Bt=R.matFromArray(St.length/2,1,R.CV_32FC2,St),$t=R.matFromArray(_t.length/2,1,R.CV_32FC2,_t),bt=new R.Mat,Vt=R.findHomography(Bt,$t,R.RANSAC,4,bt);for(let Nt=0;Nt<bt.rows;Nt++)bt.data[Nt]===1&&ue++;if(!Vt.empty()&&ue>=10&&ue/ft.length>=.35){const Nt=P.refGray.cols,jt=P.refGray.rows,$=[0,0,1,Nt,0,1,Nt,jt,1,0,jt,1];let Lt=[];for(let Mt=0;Mt<4;Mt++){let Tt=$[Mt*3],Je=$[Mt*3+1],zt=Vt.data64F[0]*Tt+Vt.data64F[1]*Je+Vt.data64F[2],U=Vt.data64F[3]*Tt+Vt.data64F[4]*Je+Vt.data64F[5],E=Vt.data64F[6]*Tt+Vt.data64F[7]*Je+Vt.data64F[8];Lt.push({x:zt/E,y:U/E})}D(Lt)&&(le=Lt,B=!0)}Bt.delete(),$t.delete(),bt.delete(),Vt.delete()}Be.delete()}Re.delete(),de.delete(),Ae.delete(),_e.delete()}catch{}B?(W=le,re=me):re>0?re--:W=null}const rt=W!==null;if(rt){if(!N)N=JSON.parse(JSON.stringify(W));else for(let Re=0;Re<4;Re++)N[Re].x=N[Re].x*(1-X)+W[Re].x*X,N[Re].y=N[Re].y*(1-X)+W[Re].y*X;O.strokeStyle="#00ffcc",O.lineWidth=3,O.shadowBlur=10,O.shadowColor="#00ffcc",O.beginPath(),O.moveTo(N[0].x,N[0].y),O.lineTo(N[1].x,N[1].y),O.lineTo(N[2].x,N[2].y),O.lineTo(N[3].x,N[3].y),O.closePath(),O.stroke(),O.shadowBlur=0}else{N=null;const Re=Math.min(I.width,I.height)*.5,de=(I.width-Re)/2,Ae=(I.height-Re)/2;O.strokeStyle="rgba(255, 70, 70, 0.5)",O.lineWidth=2,O.strokeRect(de,Ae,Re,Re)}u(Re=>({fps:J,matches:et?pe:Re.matches,inliers:et?ue:Re.inliers,status:rt?"LOCKED":"SEARCHING"})),M.current.frames++,rt&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Ef,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Mf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(iw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function I0({buildings:s,systemConfig:e,onMenuClick:t}){var Xi,lr;const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState(null),[f,h]=Fe.useState(null),[p,v]=Fe.useState([]),[S,x]=Fe.useState(!1),[M,C]=Fe.useState(0),[D,y]=Fe.useState("idle"),[_,L]=Fe.useState("checking"),[R,P]=Fe.useState("idle"),[V,I]=Fe.useState(0),[O,T]=Fe.useState(0),[N,X]=Fe.useState({}),[H,Z]=Fe.useState(!1),[re,me]=Fe.useState(""),W=Fe.useRef(null),oe=Fe.useRef(null),K=Fe.useRef(null),J=Fe.useRef(null),pe=Fe.useRef(null),ue=Fe.useRef(null),B=Fe.useRef(null),le=Fe.useRef(null),et=Fe.useRef(null),rt=Fe.useRef(null),Re=Fe.useRef(!1),de=Fe.useRef([]),Ae=Fe.useRef({matcher:null}),_e=Fe.useRef(null),Be=Fe.useRef(null),st=Fe.useRef(!1),ft=Fe.useRef({}),St=Fe.useRef([]),_t=Fe.useRef({nodes:{},edges:[]}),Bt=Fe.useRef(null),$t=Fe.useRef("idle"),bt=Fe.useRef({heading:null,pitch:0,roll:0}),Vt=Fe.useRef(null),Nt=bf.useMemo(()=>{const G={},Ue=[];return s.forEach(ve=>ve.floors.forEach(be=>{var b,j;const ct=be.bounds||{blX:0,blY:0,trX:100,trY:100},At=(Q,ne)=>({physX:ct.blX+Q*(ct.trX-ct.blX),physY:ct.trY-ne*(ct.trY-ct.blY)});be.markers.forEach(Q=>{Q.enabled&&(G[Q.id]={...Q,...At(Q.x,Q.y),isMarker:!0,bId:ve.id,fId:be.id,bName:ve.name,fName:be.name,bounds:ct})}),(b=be.waypoints)==null||b.forEach(Q=>{G[Q.id]={...Q,...At(Q.x,Q.y),isMarker:!1,bId:ve.id,fId:be.id,bName:ve.name,fName:be.name,bounds:ct}}),(j=be.edges)==null||j.forEach(Q=>{Ue.push({...Q,fId:be.id})})})),{nodes:G,edges:Ue}},[s]);Fe.useEffect(()=>{_t.current=Nt},[Nt]),Fe.useEffect(()=>{St.current=p},[p]),Fe.useEffect(()=>{T(0)},[l,p]),Fe.useEffect(()=>{if(!l||p.length<2){I(0);return}const G=performance.now(),Ue=ve=>{I((ve-G)/5200%1),Vt.current=requestAnimationFrame(Ue)};return Vt.current=requestAnimationFrame(Ue),()=>{Vt.current&&cancelAnimationFrame(Vt.current)}},[l,p]),Fe.useEffect(()=>{Bt.current=null,Be.current=null,jt("idle")},[l]);const jt=G=>{$t.current!==G&&($t.current=G,y(G))},$=()=>new URLSearchParams(window.location.search).get("debugAR")==="1"||localStorage.getItem("debugAR")==="1",Lt=G=>{$()&&(ft.current={...ft.current,...G,isSecureContext:window.isSecureContext,lastUpdateTime:new Date().toLocaleTimeString()},X(ft.current))};Fe.useEffect(()=>{let G=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){G&&L("unsupported");return}try{const ve=await navigator.xr.isSessionSupported("immersive-ar");G&&L(ve?"supported":"unsupported")}catch{G&&L("unsupported")}})(),()=>{G=!1}},[]);const Mt=(G,Ue)=>{const{nodes:ve,edges:be}=Nt,ct={};Object.keys(ve).forEach(Ee=>{ct[Ee]={}}),be.forEach(Ee=>{if(ve[Ee.start]&&ve[Ee.end]){const it=Math.hypot(ve[Ee.start].physX-ve[Ee.end].physX,ve[Ee.start].physY-ve[Ee.end].physY);ct[Ee.start][Ee.end]=it,ct[Ee.end][Ee.start]=it}});const At={};Object.values(ve).forEach(Ee=>{Ee.isVerticalShaft&&Ee.shaftId&&(At[Ee.shaftId]||(At[Ee.shaftId]=[]),At[Ee.shaftId].push(Ee.id))}),Object.values(At).forEach(Ee=>{for(let it=0;it<Ee.length;it++)for(let ut=it+1;ut<Ee.length;ut++)ct[Ee[it]][Ee[ut]]=5,ct[Ee[ut]][Ee[it]]=5});const b=Ee=>Object.keys(ct[Ee]).length>0,j=Ee=>{if(b(Ee))return Ee;const it=ve[Ee];let ut=1/0,tt=Ee;return Object.keys(ve).forEach(w=>{if(ve[w].fId===it.fId&&b(w)){const k=Math.hypot(ve[w].physX-it.physX,ve[w].physY-it.physY);k<ut&&(ut=k,tt=w)}}),tt},Q=j(G),ne=j(Ue),se={},ke={},Ve=new Set(Object.keys(ve));for(Object.keys(ve).forEach(Ee=>{se[Ee]=1/0,ke[Ee]=null}),se[Q]=0;Ve.size>0;){let Ee=null;if(Ve.forEach(it=>{(Ee===null||se[it]<se[Ee])&&(Ee=it)}),se[Ee]===1/0||Ee===ne)break;Ve.delete(Ee),Object.entries(ct[Ee]).forEach(([it,ut])=>{if(Ve.has(it)){const tt=se[Ee]+ut;tt<se[it]&&(se[it]=tt,ke[it]=Ee)}})}const Oe=[];let Qe=ne;for(;Qe;)Oe.unshift(Qe),Qe=ke[Qe];return Oe.length===0||Oe[0]!==Q?[]:(Q!==G&&Oe.unshift(G),ne!==Ue&&Oe.push(Ue),Oe)};Fe.useEffect(()=>{v(f&&l&&f!==l?Mt(f,l):[])},[f,l,Nt]),Fe.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const be=document.createElement("script");be.id="opencv-script",be.src="https://docs.opencv.org/3.4.16/opencv.js",be.async=!0,document.body.appendChild(be)}}else o("idle");let G=0;const Ue=be=>{const ct=uw(be);Lt({alpha:be.alpha,beta:be.beta,gamma:be.gamma,webkitCompassHeading:be.webkitCompassHeading,currentHeading:ct}),ct!=null&&(Be.current==null&&(Be.current=ct),bt.current={heading:ct,pitch:be.beta||0,roll:be.gamma||0},_e.current=ct,st.current||(st.current=!0,Z(!0)),Lt({baseHeading:Be.current,relativeHeading:C0(ct,Be.current),orientationEventActive:!0}))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Ue,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",Ue,!0));const ve=setInterval(()=>{if(!st.current)return;let be=_e.current;if(be==null)return;let ct=be-(G%360+360)%360;ct>180&&(ct-=360),ct<-180&&(ct+=360),G+=ct,C(G)},200);return()=>{E(),clearInterval(ve),window.removeEventListener("deviceorientation",Ue,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",Ue,!0)}},[]);const Tt=async()=>{const G=window.cv;if(!G)return!1;de.current=[],Ae.current.matcher=new G.BFMatcher(G.NORM_HAMMING,!0);const ve=Object.values(Nt.nodes).filter(be=>be.isMarker&&be.imageUrl).map(be=>new Promise(ct=>{const At=new Image;At.onload=()=>{try{const b=document.createElement("canvas"),j=b.getContext("2d");b.width=320,b.height=Math.round(320*(At.height/At.width)),j.drawImage(At,0,0,b.width,b.height);const Q=G.imread(b),ne=new G.Mat;G.cvtColor(Q,ne,G.COLOR_RGBA2GRAY);const se=new G.ORB,ke=new G.KeyPointVector,Ve=new G.Mat;se.detectAndCompute(ne,new G.Mat,ke,Ve),de.current.push({markerId:be.id,gray:ne,kp:ke,des:Ve,orb:se,width:ne.cols,height:ne.rows}),Q.delete(),ct(!0)}catch{ct(!1)}},At.onerror=()=>ct(!1),At.src=be.imageUrl}));return await Promise.all(ve),de.current.length>0},Je=async()=>{const G={orientationPermission:"not-required",motionPermission:"not-required",granted:!0,reason:null};if(!window.isSecureContext&&location.hostname!=="localhost")return G.granted=!1,G.reason="AR 方向感測需要 HTTPS 或 localhost。",Lt(G),G;try{window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&(G.orientationPermission=await window.DeviceOrientationEvent.requestPermission(),G.orientationPermission!=="granted"&&(G.granted=!1)),window.DeviceMotionEvent&&typeof window.DeviceMotionEvent.requestPermission=="function"&&(G.motionPermission=await window.DeviceMotionEvent.requestPermission(),G.motionPermission!=="granted"&&(G.granted=!1))}catch(Ue){G.granted=!1,G.reason=(Ue==null?void 0:Ue.message)||"方向感測授權失敗。"}return Lt(G),G},zt=async()=>{const G=await Je();return G.granted?me("已送出動作與方向啟用請求，請轉動手機確認羅盤資料是否開始變化。"):me(G.reason||"瀏覽器未允許動作與方向存取，請在 Safari 設定中開啟「動作與方向存取」。"),G},U=async()=>{if(r!=="idle")return;if(o("loading"),!await Tt()){o("idle"),alert("無法提取特徵");return}try{await zt();const Ue=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});K.current=Ue,W.current.srcObject=Ue,W.current.play(),W.current.onloadedmetadata=()=>{oe.current.width=W.current.videoWidth,oe.current.height=W.current.videoHeight,o("scanning"),$e()}}catch{alert("無相機權限"),o("idle")}},E=()=>{J.current&&cancelAnimationFrame(J.current),K.current&&K.current.getTracks().forEach(G=>G.stop()),Bt.current=null,Be.current=null,jt("idle"),o("idle")},ae=(G,Ue,ve=!1)=>{if(!Ue||Ue.length<2)return!1;const be=P0(Ue);if(G.save(),G.beginPath(),Ue.forEach((ct,At)=>{At===0?G.moveTo(ct.x,ct.y):G.lineTo(ct.x,ct.y)}),G.strokeStyle=ve?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",G.lineWidth=ve?8:10,G.lineCap="round",G.lineJoin="round",G.shadowBlur=ve?8:12,G.shadowColor="#ffffff",G.stroke(),be>8){const ct=ve?74:62,At=ve?28:32,b=Date.now()/10%ct;G.shadowBlur=ve?10:16,G.shadowColor="#ffffff",G.fillStyle="rgba(255,255,255,0.98)",G.strokeStyle="rgba(0,0,0,0.34)",G.lineWidth=2.5;for(let j=b;j<be;j+=ct){const Q=N0(Ue,j);Q&&(G.save(),G.translate(Q.x,Q.y),G.rotate(Q.angle),G.beginPath(),G.moveTo(At*.55,0),G.lineTo(-At*.35,-At*.32),G.lineTo(-At*.15,0),G.lineTo(-At*.35,At*.32),G.closePath(),G.stroke(),G.fill(),G.restore())}}return G.restore(),!0},Me=(G,Ue=[])=>{Ue.forEach(ve=>{if(!ve||typeof ve.x!="number"||typeof ve.y!="number")return;const be=ve.type==="destination",ct=be?"#ef4444":"#a855f7",At=ve.label||(be?"目的地":"路段末端");G.save(),G.translate(ve.x,ve.y),G.shadowBlur=16,G.shadowColor=ct,G.fillStyle=ct,G.strokeStyle="#ffffff",G.lineWidth=3,G.beginPath(),G.arc(0,-18,be?15:13,0,Math.PI*2),G.fill(),G.stroke(),G.beginPath(),G.moveTo(-8,-6),G.lineTo(0,12),G.lineTo(8,-6),G.closePath(),G.fill(),G.stroke(),G.fillStyle="#ffffff",G.shadowBlur=0,G.font="bold 18px sans-serif",G.textAlign="center",G.textBaseline="middle",G.fillText(be?"!":"↑",0,-18),G.font="bold 13px sans-serif";const b=G.measureText(At).width+18;G.fillStyle="rgba(15, 23, 42, 0.86)",G.strokeStyle="rgba(255, 255, 255, 0.35)",G.lineWidth=1,G.beginPath(),G.roundRect(-b/2,20,b,26,13),G.fill(),G.stroke(),G.fillStyle="#ffffff",G.fillText(At,0,33),G.restore()})},Ne=(G,Ue)=>{!Ue||typeof Ue.x!="number"||typeof Ue.y!="number"||(G.save(),G.translate(Ue.x,Ue.y),G.shadowBlur=14,G.shadowColor="#22d3ee",G.strokeStyle="rgba(255,255,255,0.95)",G.fillStyle="rgba(34,211,238,0.95)",G.lineWidth=3,G.beginPath(),G.arc(0,0,10,0,Math.PI*2),G.fill(),G.stroke(),G.beginPath(),G.arc(0,0,20,0,Math.PI*2),G.strokeStyle="rgba(34,211,238,0.55)",G.stroke(),G.restore())},We=G=>{const Ue=Bt.current;if(!Ue||!Ue.points||Ue.points.length<2)return!1;const ve=bt.current,be=st.current&&ve.heading!=null&&Ue.orientation.heading!=null,ct=be?A0(ve.heading,Ue.orientation.heading):0,At=be?ve.pitch-Ue.orientation.pitch:0,b=be?ve.roll-Ue.orientation.roll:0,j=(b-ct)*Math.PI/180,Q=Math.cos(j),ne=Math.sin(j),se=Ue.anchor||Ue.points[0],ke=G.canvas.width/2,Ve=G.canvas.height/2,Oe=se.x*G.canvas.width,Qe=se.y*G.canvas.height,Ee=Math.max(G.canvas.width,G.canvas.height)*.95,it=G.canvas.width*1.8,ut=G.canvas.height*1.2,tt=Math.max(-it,Math.min(it,Math.tan(ct*Math.PI/180)*Ee)),w=Math.max(-ut,Math.min(ut,Math.tan(At*Math.PI/180)*Ee*.75)),F=((ht,Ze)=>{const Et=ht-ke,mt=Ze-Ve;return{x:ke+Et*Q-mt*ne-tt,y:Ve+Et*ne+mt*Q+w}})(Oe,Qe),te=ht=>{const Ze=ht.x*G.canvas.width,Et=ht.y*G.canvas.height,mt=Ze-Oe,It=Et-Qe;return{x:F.x+mt*Q-It*ne,y:F.y+mt*ne+It*Q}},Te=Ue.points.map(te),ce=(Ue.pins||[]).map(te).map((ht,Ze)=>{var Et,mt;return{...ht,type:(Et=Ue.pins[Ze])==null?void 0:Et.type,label:(mt=Ue.pins[Ze])==null?void 0:mt.label}}),ze=C0(ve.heading,Ue.baseHeading),Ge=Ue.targetBearing!=null&&ze!=null?A0(Ue.targetBearing,ze):null;Lt({currentHeading:ve.heading,baseHeading:Ue.baseHeading,relativeHeading:ze,targetBearing:Ue.targetBearing,headingDelta:ct,arrowRotation:Ge,finalArrowRotation:Ge==null?null:Ge+b,currentARMode:"camera-overlay"});const Ut=ae(G,Te,!0);return Ut&&(Ne(G,F),Me(G,ce)),Ut},Ye=()=>{if(St.current.length>1)return St.current;const G=Object.values(_t.current.nodes).filter(ve=>ve.isMarker&&ve.id!==l).map(ve=>ve.id),Ue=f||G[0];return!Ue||!l||Ue===l?[]:Mt(Ue,l)},xe=()=>{const G=Ye(),Ue=_t.current.nodes,ve=G.map(Ve=>Ue[Ve]).filter(Boolean);if(ve.length<2)return null;const be=ve[0],ct=.08,At=ve.map(Ve=>new ie((Ve.physX-be.physX)*ct,.03,-(Ve.physY-be.physY)*ct)),b=new bs,j=R0(At,.045,16777215,.18),Q=R0(At,.016,16777215,.36);j&&b.add(j),Q&&b.add(Q);const ne=hw(At);ne&&b.add(ne);const se=new Qn(new ic(.1,24,24),new es({color:2282478}));se.position.copy(At[0]),se.position.y+=.08,b.add(se);const ke=new Qn(new ic(.12,24,24),new es({color:16731471}));return ke.position.copy(At[At.length-1]),ke.position.y+=.1,b.add(ke),b},we=async()=>{const G=ue.current;if(G)try{await G.end()}catch{}else Ie()},Ie=()=>{le.current&&le.current.traverse(G=>{G.geometry&&G.geometry.dispose(),G.material&&G.material.dispose()}),B.current&&(B.current.setAnimationLoop(null),B.current.dispose(),B.current.domElement.remove()),ue.current=null,B.current=null,le.current=null,et.current=null,rt.current=null,Re.current=!1,P("idle")},nt=async()=>{var G;if(!(_!=="supported"||!navigator.xr||ue.current)){P("starting"),E();try{const Ue={requiredFeatures:["hit-test"],optionalFeatures:pe.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};pe.current&&(Ue.domOverlay={root:pe.current});const ve=await navigator.xr.requestSession("immersive-ar",Ue),be=new GE({alpha:!0,antialias:!0});be.xr.enabled=!0,be.setPixelRatio(window.devicePixelRatio||1),be.setSize(window.innerWidth,window.innerHeight),be.domElement.className="absolute inset-0 h-full w-full",(G=pe.current)==null||G.appendChild(be.domElement),await be.xr.setSession(ve);const ct=new f_,At=new Ni,b=new Qn(new zf(.18,.22,32).rotateX(-Math.PI/2),new es({color:65484,transparent:!0,opacity:.85}));b.matrixAutoUpdate=!1,b.visible=!1,ct.add(b);const j=await ve.requestReferenceSpace("local-floor").catch(()=>ve.requestReferenceSpace("local")),Q=await ve.requestReferenceSpace("viewer"),ne=await ve.requestHitTestSource({space:Q});ue.current=ve,B.current=be,et.current=ne,rt.current=j,P("placing");const se=ke=>{if(Re.current)return;const Ve=xe();if(!Ve){P("no-route");return}Ve.matrix.fromArray(ke),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),ct.add(Ve),le.current=Ve,Re.current=!0,P("anchored")};ve.addEventListener("select",()=>{b.visible&&se(b.matrix.elements)}),ve.addEventListener("end",Ie),be.setAnimationLoop((ke,Ve)=>{if(le.current&&le.current.traverse(Oe=>pw(Oe,ke)),Ve&&!Re.current){const Oe=Ve.getHitTestResults(ne);if(Oe.length){const Qe=Oe[0].getPose(j);Qe&&(b.visible=!0,b.matrix.fromArray(Qe.transform.matrix))}else b.visible=!1}else b.visible=!1;be.render(ct,At)})}catch(Ue){console.warn("Unable to start WebXR AR mode.",Ue),Ie(),P("failed")}}},$e=()=>{const G=window.cv,Ue=W.current,ve=oe.current,be=ve.getContext("2d"),ct=Ae.current.matcher;let At=0,b=null,j=null,Q=0,ne=0;const se=()=>{if(!Ue||!Ue.srcObject)return;be.drawImage(Ue,0,0,ve.width,ve.height);let ke=!1;if(At%4===0){try{const Qe=G.imread(ve),Ee=new G.Mat;G.cvtColor(Qe,Ee,G.COLOR_RGBA2GRAY);const it=new G.KeyPointVector,ut=new G.Mat;if(de.current[0].orb.detectAndCompute(Ee,new G.Mat,it,ut),!ut.empty())for(let tt of de.current){const w=new G.DMatchVector;ct.match(tt.des,ut,w);let k=[];for(let te=0;te<w.size();te++)k.push(w.get(te));k.sort((te,Te)=>te.distance-Te.distance);const F=k.filter(te=>te.distance<=50).slice(0,60);if(F.length>=12){const te=[],Te=[];for(let Ze of F)te.push(tt.kp.get(Ze.queryIdx).pt.x,tt.kp.get(Ze.queryIdx).pt.y),Te.push(it.get(Ze.trainIdx).pt.x,it.get(Ze.trainIdx).pt.y);const ce=G.matFromArray(te.length/2,1,G.CV_32FC2,te),ze=G.matFromArray(Te.length/2,1,G.CV_32FC2,Te),Ge=new G.Mat,Ut=G.findHomography(ce,ze,G.RANSAC,4,Ge);let ht=0;for(let Ze=0;Ze<Ge.rows;Ze++)Ge.data[Ze]===1&&ht++;!Ut.empty()&&ht>=10&&(b&&b.delete(),b=Ut.clone(),j=tt.markerId,h(j),ke=!0),ce.delete(),ze.delete(),Ge.delete(),Ut.delete()}if(w.delete(),ke)break}Qe.delete(),Ee.delete(),it.delete(),ut.delete()}catch{}ke?(ne=8,Q=Date.now()):ne>0?ne--:(b&&(b.delete(),b=null),j=null)}At++,!Q&&!Bt.current&&(b&&(b.delete(),b=null),j=null);const Ve=_t.current,Oe=St.current;if(b&&j&&Oe.length>1){const Qe=Ve.nodes[j],Ee=de.current.find(it=>it.markerId===j);if(Qe&&Ee){const it=Ee.width/.3,ut=[],tt=[],w=Oe.indexOf(j),k=w>=0?w:0,F=dw(Ve.nodes[Oe[k]],Ve.nodes[Oe[k+1]]);for(let te=0;te<Oe.length;te++){const Te=Oe[te],ce=Ve.nodes[Te];if(!ce||ce.fId!==Qe.fId)break;const ze=ce.physX-Qe.physX,Ge=-(ce.physY-Qe.physY),Ut=Ee.width/2+ze*it,ht=Ee.height/2+Ge*it,Ze=b.data64F,Et=Ze[6]*Ut+Ze[7]*ht+Ze[8];if(Et>0){const mt=(Ze[0]*Ut+Ze[1]*ht+Ze[2])/Et,It=(Ze[3]*Ut+Ze[4]*ht+Ze[5])/Et;ut.push({x:mt,y:It}),tt.push({x:mt,y:It,nodeId:Te})}}if(ae(be,ut,!1)){const te=ut[0],Te=tt[tt.length-1],ce=tt.find(Ge=>Ge.nodeId===l),ze=[];Te&&ze.push({x:Te.x,y:Te.y,type:ce?"destination":"endpoint",label:ce?"目的地":"路段末端"}),ce&&ce!==Te&&ze.push({x:ce.x,y:ce.y,type:"destination",label:"目的地"}),Me(be,ze),Be.current==null&&bt.current.heading!=null&&(Be.current=bt.current.heading),Bt.current={markerId:j,orientation:{...bt.current},baseHeading:Be.current,targetBearing:F,updatedAt:Date.now(),anchor:te?{x:te.x/ve.width,y:te.y/ve.height}:null,points:ut.map(Ge=>({x:Ge.x/ve.width,y:Ge.y/ve.height})),pins:ze.map(Ge=>({x:Ge.x/ve.width,y:Ge.y/ve.height,type:Ge.type,label:Ge.label}))},Lt({arrowElementFound:!0,targetBearing:F,baseHeading:Be.current,currentARMode:"camera-overlay"}),jt("locked")}}}else{const Qe=Oe.length>1&&We(be);if(jt(Qe?"holding":"searching"),!Qe){const Ee=Math.min(ve.width,ve.height)*.6;be.strokeStyle="rgba(0, 255, 204, 0.4)",be.lineWidth=2,be.strokeRect((ve.width-Ee)/2,(ve.height-Ee)/2,Ee,Ee)}}J.current=requestAnimationFrame(se)};se()};if(!l){const G=Object.values(Nt.nodes).filter(Ue=>Ue.isMarker).reduce((Ue,ve)=>{const be=`${ve.bName} - ${ve.fName}`;return Ue[be]||(Ue[be]=[]),Ue[be].push(ve),Ue},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(G).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(fa,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(G).map(([Ue,ve])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:Ue}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:ve.map(be=>g.jsxs("button",{onClick:()=>u(be.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:be.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:be.title})})]},be.id))})]},Ue))]})]})}const Se=Nt.nodes[l],De=f?Nt.nodes[f]:null,wt=p.length>1?p[1]:null;wt&&Nt.nodes[wt];const Pt=G=>{if(!G)return"";if(G.fName)return G.fName;for(const Ue of s){const ve=Ue.floors.find(be=>be.id===G.fId);if(ve!=null&&ve.name)return ve.name}return G.fId||""},Y=p.map(G=>Nt.nodes[G]).filter(Boolean),Pe=[];Y.forEach(G=>{const Ue=Pe[Pe.length-1];!Ue||Ue.floorId!==G.fId?Pe.push({floorId:G.fId,floorName:Pt(G),nodes:[G]}):Ue.nodes.push(G)});const ye=De||Se?{floorId:(De||Se).fId,floorName:Pt(De||Se),nodes:[De||Se]}:null,qe=Pe.length?Math.min(O,Pe.length-1):0,Le=Pe[qe]||ye,Ce=Pe[qe-1]||null,ot=Pe[qe+1]||null,yt=(Xi=Le==null?void 0:Le.nodes)==null?void 0:Xi[Le.nodes.length-1];(lr=Le==null?void 0:Le.nodes)==null||lr[0];const Jt=ot?jn(ot.floorName)-jn(Le.floorName):0,Kt=Jt>0?"上樓":Jt<0?"下樓":"前往",vn=Ce?jn(Le.floorName)-jn(Ce.floorName):0,Fn=vn>0?"上樓":vn<0?"下樓":"前往",Xn=f===l?"已抵達目的地":ot?`請依照 ${Le.floorName} 平面圖前往轉乘點，接著${Kt}至 ${ot.floorName}`:Le?`請依照 ${Le.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",Wi=!!(ot||Ce);let In=Le?Le.floorId:De?De.fId:Se.fId,_i=null,Yn=Le?Le.floorName:De?De.fName:Se.fName,On={blX:0,blY:0,trX:100,trY:100};s.forEach(G=>G.floors.forEach(Ue=>{Ue.id===In&&(_i=Ue.imageUrl,On=Zr(Ue),Yn=Ue.name)}));const $n=(G,Ue)=>{const ve=On.trX-On.blX,be=On.trY-On.blY,ct=ve!==0?(G-On.blX)/ve*100:50,At=be!==0?(On.trY-Ue)/be*100:50;return{x:ct,y:At}},An=(Le==null?void 0:Le.nodes)||[],ei=An.filter(G=>G&&G.fId===In).map(G=>$n(G.physX,G.physY)),Ii=P0(ei),yi=De&&De.fId===In?De:ei.length?null:Se,ui=Ii>0?N0(ei,V*Ii):yi?$n(yi.physX,yi.physY):null;return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{E(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:pe,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:W,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:oe,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[D==="locked"&&"AR 路徑已鎖定",D==="holding"&&"陀螺儀空間錨點",D==="searching"&&"請重新對準導引圖",D==="idle"&&"準備定位"]}),r==="scanning"&&!H&&g.jsxs("div",{className:"absolute left-4 right-4 top-16 z-40 rounded-2xl border border-yellow-400/40 bg-slate-950/88 p-4 text-sm leading-relaxed text-yellow-50 shadow-xl backdrop-blur-md md:left-auto md:max-w-sm",children:[g.jsx("div",{className:"mb-1 font-bold text-yellow-200",children:"需要開啟動作與方向"}),g.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"若沒有啟用，AR 箭頭無法隨手機轉向套疊在實景中。"}),g.jsx("button",{onClick:zt,className:"w-full rounded-full bg-yellow-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-200",children:"開啟動作與方向"}),re&&g.jsx("div",{className:"mt-2 text-xs text-yellow-100/90",children:re})]}),r==="scanning"&&$()&&g.jsxs("div",{className:"absolute right-4 top-16 z-40 max-w-[260px] rounded-xl border border-slate-600 bg-slate-950/85 p-3 text-[10px] leading-relaxed text-slate-200 shadow-xl backdrop-blur-md",children:[g.jsx("div",{className:"mb-1 font-bold text-cyan-300",children:"AR Debug"}),[["secure",String(N.isSecureContext)],["permission",`${N.orientationPermission||"-"} / ${N.motionPermission||"-"}`],["alpha",N.alpha==null?"-":Math.round(N.alpha)],["webkit",N.webkitCompassHeading==null?"-":Math.round(N.webkitCompassHeading)],["heading",N.currentHeading==null?"-":Math.round(N.currentHeading)],["base",N.baseHeading==null?"-":Math.round(N.baseHeading)],["relative",N.relativeHeading==null?"-":Math.round(N.relativeHeading)],["target",N.targetBearing==null?"-":Math.round(N.targetBearing)],["rotate",N.arrowRotation==null?"-":Math.round(N.arrowRotation)],["mode",N.currentARMode||"-"],["updated",N.lastUpdateTime||"-"]].map(([G,Ue])=>g.jsxs("div",{className:"flex justify-between gap-3 border-t border-white/5 py-0.5",children:[g.jsx("span",{className:"text-slate-400",children:G}),g.jsx("span",{className:"font-mono text-white",children:Ue})]},G))]}),r==="scanning"&&_i&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:_i,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:Wi?`自動切換至 ${Yn}`:`目前平面圖 ${Yn}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),An.map((G,Ue)=>{if(Ue===An.length-1)return null;const ve=An[Ue+1];if(G.fId===In&&ve.fId===In){const be=$n(G.physX,G.physY),ct=$n(ve.physX,ve.physY);return g.jsx("line",{x1:`${be.x}%`,y1:`${be.y}%`,x2:`${ct.x}%`,y2:`${ct.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},Ue)}return null})]}),ui&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${ui.x}%`,top:`${ui.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${ui.angle||0}rad)`,willChange:"transform"},children:g.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[g.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),g.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(ui.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),ot&&yt&&yt.fId===In&&g.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${$n(yt.physX,yt.physY).x}%`,top:`${$n(yt.physX,yt.physY).y}%`,transform:"translate(-50%, -140%)"},children:g.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:Jt>=0?g.jsx(Mg,{className:"h-8 w-8 stroke-[3.5]"}):g.jsx(_g,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,Se&&Se.fId===In&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${$n(Se.physX,Se.physY).x}%`,top:`${$n(Se.physX,Se.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(bg,{className:"w-4 h-4"}):g.jsx(wg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",De?De.fName:Se.fName," ",H?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(aw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[!H&&g.jsxs("div",{className:"rounded-2xl border border-yellow-400/35 bg-yellow-400/10 p-4 text-left text-sm leading-relaxed text-yellow-50",children:[g.jsx("div",{className:"mb-2 font-bold text-yellow-200",children:"請開啟「動作與方向」權限"}),g.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"AR 箭頭需要手機羅盤資料才能隨轉向正確套疊。iPhone 請用 Safari 開啟，並允許動作與方向存取。"}),g.jsx("button",{onClick:zt,className:"w-full rounded-full bg-yellow-300 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-200",children:"開啟動作與方向權限"}),re&&g.jsx("div",{className:"mt-3 text-xs text-yellow-100/90",children:re})]}),g.jsx("button",{onClick:nt,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:U,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:we,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${De?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[g.jsx("button",{onClick:()=>T(G=>Math.max(0,G-1)),disabled:!Ce,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:g.jsx(yg,{className:"h-5 w-5"})}),g.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[g.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[g.jsxs("span",{children:[(Le==null?void 0:Le.floorName)||Pt(De||Se)," ","平面圖"]}),Pe.length>1&&g.jsxs("span",{children:[qe+1," / ",Pe.length]})]}),g.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":ot?"text-purple-300":"text-yellow-300"}`,children:Xn}),Ce&&g.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",Ce.floorName,"；本張是",Fn,"後的導引段。"]})]}),g.jsx("button",{onClick:()=>T(G=>Math.min(Pe.length-1,G+1)),disabled:!ot,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:g.jsx(Sg,{className:"h-5 w-5"})})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const sc=document.getElementById("ar-root");if(!sc)throw new Error("Missing #ar-root element.");const Tg=new URLSearchParams(window.location.search),vw=window.location.pathname.endsWith("/admin-ar.html"),Ag=sc.dataset.embedded==="true"||Tg.get("embedded")==="1",D0=vw||Ag;mv.createRoot(sc).render(g.jsx(bf.StrictMode,{children:g.jsx(gw,{embedded:Ag,initialTab:D0?sc.dataset.initialTab||Tg.get("tab")||"map":"frontend",publicOnly:!D0})}));
