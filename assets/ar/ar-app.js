function Jx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},Za={},zu={exports:{}},Vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Qx(){if(cm)return Vt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,I={};function y(k,le,Xe){this.props=k,this.context=le,this.refs=I,this.updater=Xe||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,le){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,le,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(k,le,Xe){this.props=k,this.context=le,this.refs=I,this.updater=Xe||M}var R=D.prototype=new _;R.constructor=D,A(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(k,le,Xe){var Ye,De={},pe=null,Te=null;if(le!=null)for(Ye in le.ref!==void 0&&(Te=le.ref),le.key!==void 0&&(pe=""+le.key),le)z.call(le,Ye)&&!F.hasOwnProperty(Ye)&&(De[Ye]=le[Ye]);var be=arguments.length-2;if(be===1)De.children=Xe;else if(1<be){for(var Be=Array(be),Qe=0;Qe<be;Qe++)Be[Qe]=arguments[Qe+2];De.children=Be}if(k&&k.defaultProps)for(Ye in be=k.defaultProps,be)De[Ye]===void 0&&(De[Ye]=be[Ye]);return{$$typeof:s,type:k,key:pe,ref:Te,props:De,_owner:P.current}}function L(k,le){return{$$typeof:s,type:k.type,key:le,ref:k.ref,props:k.props,_owner:k._owner}}function W(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function V(k){var le={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Xe){return le[Xe]})}var q=/\/+/g;function te(k,le){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):le.toString(36)}function _e(k,le,Xe,Ye,De){var pe=typeof k;(pe==="undefined"||pe==="boolean")&&(k=null);var Te=!1;if(k===null)Te=!0;else switch(pe){case"string":case"number":Te=!0;break;case"object":switch(k.$$typeof){case s:case e:Te=!0}}if(Te)return Te=k,De=De(Te),k=Ye===""?"."+te(Te,0):Ye,N(De)?(Xe="",k!=null&&(Xe=k.replace(q,"$&/")+"/"),_e(De,le,Xe,"",function(Qe){return Qe})):De!=null&&(W(De)&&(De=L(De,Xe+(!De.key||Te&&Te.key===De.key?"":(""+De.key).replace(q,"$&/")+"/")+k)),le.push(De)),1;if(Te=0,Ye=Ye===""?".":Ye+":",N(k))for(var be=0;be<k.length;be++){pe=k[be];var Be=Ye+te(pe,be);Te+=_e(pe,le,Xe,Be,De)}else if(Be=x(k),typeof Be=="function")for(k=Be.call(k),be=0;!(pe=k.next()).done;)pe=pe.value,Be=Ye+te(pe,be++),Te+=_e(pe,le,Xe,Be,De);else if(pe==="object")throw le=String(k),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return Te}function X(k,le,Xe){if(k==null)return k;var Ye=[],De=0;return _e(k,Ye,"","",function(pe){return le.call(Xe,pe,De++)}),Ye}function oe(k){if(k._status===-1){var le=k._result;le=le(),le.then(function(Xe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Xe)},function(Xe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Xe)}),k._status===-1&&(k._status=0,k._result=le)}if(k._status===1)return k._result.default;throw k._result}var K={current:null},Z={transition:null},Me={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Z,ReactCurrentOwner:P};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Vt.Children={map:X,forEach:function(k,le,Xe){X(k,function(){le.apply(this,arguments)},Xe)},count:function(k){var le=0;return X(k,function(){le++}),le},toArray:function(k){return X(k,function(le){return le})||[]},only:function(k){if(!W(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Vt.Component=y,Vt.Fragment=t,Vt.Profiler=o,Vt.PureComponent=D,Vt.StrictMode=r,Vt.Suspense=h,Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Me,Vt.act=ue,Vt.cloneElement=function(k,le,Xe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ye=A({},k.props),De=k.key,pe=k.ref,Te=k._owner;if(le!=null){if(le.ref!==void 0&&(pe=le.ref,Te=P.current),le.key!==void 0&&(De=""+le.key),k.type&&k.type.defaultProps)var be=k.type.defaultProps;for(Be in le)z.call(le,Be)&&!F.hasOwnProperty(Be)&&(Ye[Be]=le[Be]===void 0&&be!==void 0?be[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)Ye.children=Xe;else if(1<Be){be=Array(Be);for(var Qe=0;Qe<Be;Qe++)be[Qe]=arguments[Qe+2];Ye.children=be}return{$$typeof:s,type:k.type,key:De,ref:pe,props:Ye,_owner:Te}},Vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Vt.createElement=w,Vt.createFactory=function(k){var le=w.bind(null,k);return le.type=k,le},Vt.createRef=function(){return{current:null}},Vt.forwardRef=function(k){return{$$typeof:f,render:k}},Vt.isValidElement=W,Vt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:oe}},Vt.memo=function(k,le){return{$$typeof:p,type:k,compare:le===void 0?null:le}},Vt.startTransition=function(k){var le=Z.transition;Z.transition={};try{k()}finally{Z.transition=le}},Vt.unstable_act=ue,Vt.useCallback=function(k,le){return K.current.useCallback(k,le)},Vt.useContext=function(k){return K.current.useContext(k)},Vt.useDebugValue=function(){},Vt.useDeferredValue=function(k){return K.current.useDeferredValue(k)},Vt.useEffect=function(k,le){return K.current.useEffect(k,le)},Vt.useId=function(){return K.current.useId()},Vt.useImperativeHandle=function(k,le,Xe){return K.current.useImperativeHandle(k,le,Xe)},Vt.useInsertionEffect=function(k,le){return K.current.useInsertionEffect(k,le)},Vt.useLayoutEffect=function(k,le){return K.current.useLayoutEffect(k,le)},Vt.useMemo=function(k,le){return K.current.useMemo(k,le)},Vt.useReducer=function(k,le,Xe){return K.current.useReducer(k,le,Xe)},Vt.useRef=function(k){return K.current.useRef(k)},Vt.useState=function(k){return K.current.useState(k)},Vt.useSyncExternalStore=function(k,le,Xe){return K.current.useSyncExternalStore(k,le,Xe)},Vt.useTransition=function(){return K.current.useTransition()},Vt.version="18.3.1",Vt}var um;function Ef(){return um||(um=1,zu.exports=Qx()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function ev(){if(dm)return Za;dm=1;var s=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},x=null,M=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var fm;function tv(){return fm||(fm=1,Bu.exports=ev()),Bu.exports}var g=tv(),Fe=Ef();const wf=Jx(Fe);var vl={},Vu={exports:{}},Qn={},Hu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function nv(){return hm||(hm=1,(function(s){function e(Z,Me){var ue=Z.length;Z.push(Me);e:for(;0<ue;){var k=ue-1>>>1,le=Z[k];if(0<o(le,Me))Z[k]=Me,Z[ue]=le,ue=k;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var Me=Z[0],ue=Z.pop();if(ue!==Me){Z[0]=ue;e:for(var k=0,le=Z.length,Xe=le>>>1;k<Xe;){var Ye=2*(k+1)-1,De=Z[Ye],pe=Ye+1,Te=Z[pe];if(0>o(De,ue))pe<le&&0>o(Te,De)?(Z[k]=Te,Z[pe]=ue,k=pe):(Z[k]=De,Z[Ye]=ue,k=Ye);else if(pe<le&&0>o(Te,ue))Z[k]=Te,Z[pe]=ue,k=pe;else break e}}return Me}function o(Z,Me){var ue=Z.sortIndex-Me.sortIndex;return ue!==0?ue:Z.id-Me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,x=3,M=!1,A=!1,I=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Z){for(var Me=t(p);Me!==null;){if(Me.callback===null)r(p);else if(Me.startTime<=Z)r(p),Me.sortIndex=Me.expirationTime,e(h,Me);else break;Me=t(p)}}function N(Z){if(I=!1,R(Z),!A)if(t(h)!==null)A=!0,oe(z);else{var Me=t(p);Me!==null&&K(N,Me.startTime-Z)}}function z(Z,Me){A=!1,I&&(I=!1,_(w),w=-1),M=!0;var ue=x;try{for(R(Me),S=t(h);S!==null&&(!(S.expirationTime>Me)||Z&&!V());){var k=S.callback;if(typeof k=="function"){S.callback=null,x=S.priorityLevel;var le=k(S.expirationTime<=Me);Me=s.unstable_now(),typeof le=="function"?S.callback=le:S===t(h)&&r(h),R(Me)}else r(h);S=t(h)}if(S!==null)var Xe=!0;else{var Ye=t(p);Ye!==null&&K(N,Ye.startTime-Me),Xe=!1}return Xe}finally{S=null,x=ue,M=!1}}var P=!1,F=null,w=-1,L=5,W=-1;function V(){return!(s.unstable_now()-W<L)}function q(){if(F!==null){var Z=s.unstable_now();W=Z;var Me=!0;try{Me=F(!0,Z)}finally{Me?te():(P=!1,F=null)}}else P=!1}var te;if(typeof D=="function")te=function(){D(q)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,X=_e.port2;_e.port1.onmessage=q,te=function(){X.postMessage(null)}}else te=function(){y(q,0)};function oe(Z){F=Z,P||(P=!0,te())}function K(Z,Me){w=y(function(){Z(s.unstable_now())},Me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,oe(z))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var Me=3;break;default:Me=x}var ue=x;x=Me;try{return Z()}finally{x=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,Me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ue=x;x=Z;try{return Me()}finally{x=ue}},s.unstable_scheduleCallback=function(Z,Me,ue){var k=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,Z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ue+le,Z={id:v++,callback:Me,priorityLevel:Z,startTime:ue,expirationTime:le,sortIndex:-1},ue>k?(Z.sortIndex=ue,e(p,Z),t(h)===null&&Z===t(p)&&(I?(_(w),w=-1):I=!0,K(N,ue-k))):(Z.sortIndex=le,e(h,Z),A||M||(A=!0,oe(z))),Z},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Z){var Me=x;return function(){var ue=x;x=Me;try{return Z.apply(this,arguments)}finally{x=ue}}}})(Gu)),Gu}var pm;function iv(){return pm||(pm=1,Hu.exports=nv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function rv(){if(mm)return Qn;mm=1;var s=Ef(),e=iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function I(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new I(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new I(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new I(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new I(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new I(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new I(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new I(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new I(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new I(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new I(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new I(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);y[i]=new I(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new I(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new I(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Z=Symbol.iterator;function Me(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function le(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Xe=!1;function Ye(n,i){if(!n||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Ee){var c=Ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(Ee){c=Ee}n.call(i.prototype)}else{try{throw Error()}catch(Ee){c=Ee}n()}}catch(Ee){if(Ee&&c&&typeof Ee.stack=="string"){for(var d=Ee.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,B=m.length-1;1<=T&&0<=B&&d[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(d[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||d[T]!==m[B]){var Y=`
`+d[T].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=T&&0<=B);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function De(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case L:return"Profiler";case w:return"StrictMode";case te:return"Suspense";case _e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function Te(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function st(n){n._valueTracker||(n._valueTracker=Qe(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function kt(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Wt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Bt(n,i){Mt(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ht(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ht(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $=Array.isArray;function St(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ze(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function He(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Rt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,H=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function se(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},de=["Webkit","ms","Moz","O"];Object.keys(ae).forEach(function(n){de.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ae[i]=ae[n]})});function ee(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ae.hasOwnProperty(n)&&ae[n]?(""+i).trim():i+"px"}function he(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ee(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ve=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(n,i){if(i){if(ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function Ne(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,Ke=null,j=null;function Ce(n){if(n=Fa(n)){if(typeof et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Do(i),et(n.stateNode,n.type,i))}}function ne(n){Ke?j?j.push(n):j=[n]:Ke=n}function Pe(){if(Ke){var n=Ke,i=j;if(j=Ke=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Ie(n,i){return n(i)}function Re(){}var $e=!1;function ft(n,i,a){if($e)return n(i,a);$e=!0;try{return Ie(n,i,a)}finally{$e=!1,(Ke!==null||j!==null)&&(Re(),Pe())}}function Nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Pt=!1}function tn(n,i,a,c,d,m,T,B,Y){var Ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,Ee)}catch(ke){this.onError(ke)}}var dn=!1,Wn=null,Xn=!1,Rn=null,Ei={onError:function(n){dn=!0,Wn=n}};function yr(n,i,a,c,d,m,T,B,Y){dn=!1,Wn=null,tn.apply(Ei,arguments)}function Cs(n,i,a,c,d,m,T,B,Y){if(yr.apply(this,arguments),dn){if(dn){var Ee=Wn;dn=!1,Wn=null}else throw Error(t(198));Xn||(Xn=!0,Rn=Ee)}}function ni(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Sr(n){if(ni(n)!==n)throw Error(t(188))}function Mr(n){var i=n.alternate;if(!i){if(i=ni(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Sr(d),n;if(m===c)return Sr(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,B=d.child;B;){if(B===a){T=!0,a=d,c=m;break}if(B===c){T=!0,c=d,a=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===a){T=!0,a=m,c=d;break}if(B===c){T=!0,c=m,a=d;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Zr(n){return n=Mr(n),n!==null?Jr(n):null}function Jr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Jr(n);if(i!==null)return i;n=n.sibling}return null}var Rs=e.unstable_scheduleCallback,Qr=e.unstable_cancelCallback,Oi=e.unstable_shouldYield,Jt=e.unstable_requestPaint,Xt=e.unstable_now,es=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,ye=e.unstable_LowPriority,ge=e.unstable_IdlePriority,me=null,je=null;function nt(n){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Tt,at=Math.log,ct=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(at(n)/ct|0)|0}var At=64,ot=4194304;function b(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function G(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~d;B!==0?c=b(B):(m&=T,m!==0&&(c=b(m)))}else T=a&~d,T!==0?c=b(T):m!==0&&(c=b(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-We(i),d=1<<a,c|=n[a],i&=~d;return c}function O(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ce(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-We(m),B=1<<T,Y=d[T];Y===-1?((B&a)===0||(B&c)!==0)&&(d[T]=O(B,i)):Y<=i&&(n.expiredLanes|=B),m&=~B}}function Ue(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Se(){var n=At;return At<<=1,(At&4194240)===0&&(At=64),n}function Ve(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qe(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-We(i),n[i]=a}function Gt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-We(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function xt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-We(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ut=0;function Dt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vt,Lt,on,Et,yn,tt=!1,Ut=[],fn=null,Yn=null,wi=null,Er=new Map,Zt=new Map,ki=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Er.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zt.delete(i.pointerId)}}function Ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&Lt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Sg(n,i,a,c,d){switch(i){case"focusin":return fn=Ma(fn,n,i,a,c,d),!0;case"dragenter":return Yn=Ma(Yn,n,i,a,c,d),!0;case"mouseover":return wi=Ma(wi,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Er.set(m,Ma(Er.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zt.set(m,Ma(Zt.get(m)||null,n,i,a,c,d)),!0}return!1}function Yf(n){var i=ts(n.target);if(i!==null){var a=ni(i);if(a!==null){if(i=a.tag,i===13){if(i=Fi(a),i!==null){n.blockedOn=i,yn(n.priority,function(){on(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);we=c,a.target.dispatchEvent(c),we=null}else return i=Fa(a),i!==null&&Lt(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){_o(n)&&a.delete(i)}function Mg(){tt=!1,fn!==null&&_o(fn)&&(fn=null),Yn!==null&&_o(Yn)&&(Yn=null),wi!==null&&_o(wi)&&(wi=null),Er.forEach($f),Zt.forEach($f)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,tt||(tt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mg)))}function wa(n){function i(d){return Ea(d,n)}if(0<Ut.length){Ea(Ut[0],n);for(var a=1;a<Ut.length;a++){var c=Ut[a];c.blockedOn===n&&(c.blockedOn=null)}}for(fn!==null&&Ea(fn,n),Yn!==null&&Ea(Yn,n),wi!==null&&Ea(wi,n),Er.forEach(i),Zt.forEach(i),a=0;a<ki.length;a++)c=ki[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ki.length&&(a=ki[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&ki.shift()}var Ns=N.ReactCurrentBatchConfig,yo=!0;function Eg(n,i,a,c){var d=ut,m=Ns.transition;Ns.transition=null;try{ut=1,dc(n,i,a,c)}finally{ut=d,Ns.transition=m}}function wg(n,i,a,c){var d=ut,m=Ns.transition;Ns.transition=null;try{ut=4,dc(n,i,a,c)}finally{ut=d,Ns.transition=m}}function dc(n,i,a,c){if(yo){var d=fc(n,i,a,c);if(d===null)Rc(n,i,c,So,a),Xf(n,c);else if(Sg(d,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<yg.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&vt(m),m=fc(n,i,a,c),m===null&&Rc(n,i,c,So,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var So=null;function fc(n,i,a,c){if(So=null,n=Ne(c),n=ts(n),n!==null)if(i=ni(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(es()){case Qi:return 1;case C:return 4;case J:case ye:return 16;case ge:return 536870912;default:return 16}default:return 16}}var wr=null,hc=null,Mo=null;function Kf(){if(Mo)return Mo;var n,i=hc,a=i.length,c,d="value"in wr?wr.value:wr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return Mo=d.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Zf(){return!1}function ii(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wo:Zf,this.isPropagationStopped=Zf,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=ii(Ps),ba=ue({},Ps,{view:0,detail:0}),bg=ii(ba),mc,gc,Ta,bo=ue({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(mc=n.screenX-Ta.screenX,gc=n.screenY-Ta.screenY):gc=mc=0,Ta=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Jf=ii(bo),Tg=ue({},bo,{dataTransfer:0}),Ag=ii(Tg),Cg=ue({},ba,{relatedTarget:0}),xc=ii(Cg),Rg=ue({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=ii(Rg),Pg=ue({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ig=ii(Pg),Dg=ue({},Ps,{data:0}),Qf=ii(Dg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fg[n])?!!i[n]:!1}function vc(){return Og}var kg=ue({},ba,{key:function(n){if(n.key){var i=Lg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ug[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Bg=ii(kg),zg=ue({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=ii(zg),Vg=ue({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Hg=ii(Vg),Gg=ue({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=ii(Gg),Wg=ue({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=ii(Wg),Yg=[9,13,27,32],_c=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var $g=f&&"TextEvent"in window&&!Aa,th=f&&(!_c||Aa&&8<Aa&&11>=Aa),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return Yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function qg(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function Kg(n,i){if(Is)return n==="compositionend"||!_c&&rh(n,i)?(n=Kf(),Mo=hc=wr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Zg[n.type]:i==="textarea"}function oh(n,i,a,c){ne(c),i=No(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Ra=null;function Jg(n){bh(n,0)}function To(n){var i=Os(n);if(mt(i))return n}function Qg(n,i){if(n==="change")return i}var lh=!1;if(f){var yc;if(f){var Sc="oninput"in document;if(!Sc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Sc=typeof ch.oninput=="function"}yc=Sc}else yc=!1;lh=yc&&(!document.documentMode||9<document.documentMode)}function uh(){Ca&&(Ca.detachEvent("onpropertychange",dh),Ra=Ca=null)}function dh(n){if(n.propertyName==="value"&&To(Ra)){var i=[];oh(i,Ra,n,Ne(n)),ft(Jg,i)}}function ex(n,i,a){n==="focusin"?(uh(),Ca=i,Ra=a,Ca.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function tx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Ra)}function nx(n,i){if(n==="click")return To(i)}function ix(n,i){if(n==="input"||n==="change")return To(i)}function rx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bi=typeof Object.is=="function"?Object.is:rx;function Na(n,i){if(bi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!bi(n[d],i[d]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function sx(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=hh(a,m);var T=hh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ax=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ec=null,Pa=null,wc=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Ds==null||Ds!==pt(c)||(c=Ds,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=No(Ec,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Co(n){if(bc[n])return bc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return bc[n]=i[a];return n}var vh=Co("animationend"),_h=Co("animationiteration"),yh=Co("animationstart"),Sh=Co("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(n,i){Mh.set(n,i),l(i,[n])}for(var Tc=0;Tc<Eh.length;Tc++){var Ac=Eh[Tc],ox=Ac.toLowerCase(),lx=Ac[0].toUpperCase()+Ac.slice(1);br(ox,"on"+lx)}br(vh,"onAnimationEnd"),br(_h,"onAnimationIteration"),br(yh,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function wh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Cs(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Y=B.instance,Ee=B.currentTarget;if(B=B.listener,Y!==m&&d.isPropagationStopped())break e;wh(d,B,Ee),m=Y}else for(T=0;T<c.length;T++){if(B=c[T],Y=B.instance,Ee=B.currentTarget,B=B.listener,Y!==m&&d.isPropagationStopped())break e;wh(d,B,Ee),m=Y}}}if(Xn)throw n=Rn,Xn=!1,Rn=null,n}function rn(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Ro]){n[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Cc("selectionchange",!1,i))}}function Th(n,i,a,c){switch(qf(i)){case 1:var d=Eg;break;case 4:d=wg;break;default:d=dc}a=d.bind(null,i,a,n),d=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var Y=T.tag;if((Y===3||Y===4)&&(Y=T.stateNode.containerInfo,Y===d||Y.nodeType===8&&Y.parentNode===d))return;T=T.return}for(;B!==null;){if(T=ts(B),T===null)return;if(Y=T.tag,Y===5||Y===6){c=m=T;continue e}B=B.parentNode}}c=c.return}ft(function(){var Ee=m,ke=Ne(a),ze=[];e:{var Oe=Mh.get(n);if(Oe!==void 0){var it=pc,lt=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":it=Bg;break;case"focusin":lt="focus",it=xc;break;case"focusout":lt="blur",it=xc;break;case"beforeblur":case"afterblur":it=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Hg;break;case vh:case _h:case yh:it=Ng;break;case Sh:it=jg;break;case"scroll":it=bg;break;case"wheel":it=Xg;break;case"copy":case"cut":case"paste":it=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=eh}var dt=(i&4)!==0,pn=!dt&&n==="scroll",fe=dt?Oe!==null?Oe+"Capture":null:Oe;dt=[];for(var Q=Ee,xe;Q!==null;){xe=Q;var Ge=xe.stateNode;if(xe.tag===5&&Ge!==null&&(xe=Ge,fe!==null&&(Ge=Nt(Q,fe),Ge!=null&&dt.push(La(Q,Ge,xe)))),pn)break;Q=Q.return}0<dt.length&&(Oe=new it(Oe,lt,null,a,ke),ze.push({event:Oe,listeners:dt}))}}if((i&7)===0){e:{if(Oe=n==="mouseover"||n==="pointerover",it=n==="mouseout"||n==="pointerout",Oe&&a!==we&&(lt=a.relatedTarget||a.fromElement)&&(ts(lt)||lt[er]))break e;if((it||Oe)&&(Oe=ke.window===ke?ke:(Oe=ke.ownerDocument)?Oe.defaultView||Oe.parentWindow:window,it?(lt=a.relatedTarget||a.toElement,it=Ee,lt=lt?ts(lt):null,lt!==null&&(pn=ni(lt),lt!==pn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(it=null,lt=Ee),it!==lt)){if(dt=Jf,Ge="onMouseLeave",fe="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(dt=eh,Ge="onPointerLeave",fe="onPointerEnter",Q="pointer"),pn=it==null?Oe:Os(it),xe=lt==null?Oe:Os(lt),Oe=new dt(Ge,Q+"leave",it,a,ke),Oe.target=pn,Oe.relatedTarget=xe,Ge=null,ts(ke)===Ee&&(dt=new dt(fe,Q+"enter",lt,a,ke),dt.target=xe,dt.relatedTarget=pn,Ge=dt),pn=Ge,it&&lt)t:{for(dt=it,fe=lt,Q=0,xe=dt;xe;xe=Us(xe))Q++;for(xe=0,Ge=fe;Ge;Ge=Us(Ge))xe++;for(;0<Q-xe;)dt=Us(dt),Q--;for(;0<xe-Q;)fe=Us(fe),xe--;for(;Q--;){if(dt===fe||fe!==null&&dt===fe.alternate)break t;dt=Us(dt),fe=Us(fe)}dt=null}else dt=null;it!==null&&Ah(ze,Oe,it,dt,!1),lt!==null&&pn!==null&&Ah(ze,pn,lt,dt,!0)}}e:{if(Oe=Ee?Os(Ee):window,it=Oe.nodeName&&Oe.nodeName.toLowerCase(),it==="select"||it==="input"&&Oe.type==="file")var ht=Qg;else if(ah(Oe))if(lh)ht=ix;else{ht=tx;var _t=ex}else(it=Oe.nodeName)&&it.toLowerCase()==="input"&&(Oe.type==="checkbox"||Oe.type==="radio")&&(ht=nx);if(ht&&(ht=ht(n,Ee))){oh(ze,ht,a,ke);break e}_t&&_t(n,Oe,Ee),n==="focusout"&&(_t=Oe._wrapperState)&&_t.controlled&&Oe.type==="number"&&Ht(Oe,"number",Oe.value)}switch(_t=Ee?Os(Ee):window,n){case"focusin":(ah(_t)||_t.contentEditable==="true")&&(Ds=_t,Ec=Ee,Pa=null);break;case"focusout":Pa=Ec=Ds=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,gh(ze,a,ke);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":gh(ze,a,ke)}var yt;if(_c)e:{switch(n){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Is?rh(n,a)&&(Ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(th&&a.locale!=="ko"&&(Is||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Is&&(yt=Kf()):(wr=ke,hc="value"in wr?wr.value:wr.textContent,Is=!0)),_t=No(Ee,Ct),0<_t.length&&(Ct=new Qf(Ct,n,null,a,ke),ze.push({event:Ct,listeners:_t}),yt?Ct.data=yt:(yt=sh(a),yt!==null&&(Ct.data=yt)))),(yt=$g?qg(n,a):Kg(n,a))&&(Ee=No(Ee,"onBeforeInput"),0<Ee.length&&(ke=new Qf("onBeforeInput","beforeinput",null,a,ke),ze.push({event:ke,listeners:Ee}),ke.data=yt))}bh(ze,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Nt(n,a),m!=null&&c.unshift(La(n,m,d)),m=Nt(n,i),m!=null&&c.push(La(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var B=a,Y=B.alternate,Ee=B.stateNode;if(Y!==null&&Y===c)break;B.tag===5&&Ee!==null&&(B=Ee,d?(Y=Nt(a,m),Y!=null&&T.unshift(La(a,Y,B))):d||(Y=Nt(a,m),Y!=null&&T.push(La(a,Y,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(ux,`
`).replace(dx,"")}function Po(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Io(){}var Nc=null,Pc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(px)}:Dc;function px(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Fs,Ua="__reactProps$"+Fs,er="__reactContainer$"+Fs,Uc="__reactEvents$"+Fs,mx="__reactListeners$"+Fs,gx="__reactHandles$"+Fs;function ts(n){var i=n[Bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[er]||a[Bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Bi])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Bi]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Do(n){return n[Ua]||null}var Fc=[],ks=-1;function Ar(n){return{current:n}}function sn(n){0>ks||(n.current=Fc[ks],Fc[ks]=null,ks--)}function nn(n,i){ks++,Fc[ks]=n.current,n.current=i}var Cr={},Dn=Ar(Cr),$n=Ar(!1),ns=Cr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qn(n){return n=n.childContextTypes,n!=null}function Lo(){sn($n),sn(Dn)}function Ph(n,i,a){if(Dn.current!==Cr)throw Error(t(168));nn(Dn,i),nn($n,a)}function Ih(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Te(n)||"Unknown",d));return ue({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,ns=Dn.current,nn(Dn,n),nn($n,$n.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ih(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,sn($n),sn(Dn),nn(Dn,n)):sn($n),nn($n,a)}var tr=null,Fo=!1,Oc=!1;function Lh(n){tr===null?tr=[n]:tr.push(n)}function xx(n){Fo=!0,Lh(n)}function Rr(){if(!Oc&&tr!==null){Oc=!0;var n=0,i=ut;try{var a=tr;for(ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}tr=null,Fo=!1}catch(d){throw tr!==null&&(tr=tr.slice(n+1)),Rs(Qi,Rr),d}finally{ut=i,Oc=!1}}return null}var zs=[],Vs=0,Oo=null,ko=0,di=[],fi=0,is=null,nr=1,ir="";function rs(n,i){zs[Vs++]=ko,zs[Vs++]=Oo,Oo=n,ko=i}function Uh(n,i,a){di[fi++]=nr,di[fi++]=ir,di[fi++]=is,is=n;var c=nr;n=ir;var d=32-We(c)-1;c&=~(1<<d),a+=1;var m=32-We(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,nr=1<<32-We(i)+d|a<<d|c,ir=m+n}else nr=1<<m|a<<d|c,ir=n}function kc(n){n.return!==null&&(rs(n,1),Uh(n,1,0))}function Bc(n){for(;n===Oo;)Oo=zs[--Vs],zs[Vs]=null,ko=zs[--Vs],zs[Vs]=null;for(;n===is;)is=di[--fi],di[fi]=null,ir=di[--fi],di[fi]=null,nr=di[--fi],di[fi]=null}var ri=null,si=null,ln=!1,Ti=null;function Fh(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Oh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=Tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ri=n,si=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(ln){var i=si;if(i){var a=i;if(!Oh(n,i)){if(zc(n))throw Error(t(418));i=Tr(a.nextSibling);var c=ri;i&&Oh(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,ln=!1,ri=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,ln=!1,ri=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function Bo(n){if(n!==ri)return!1;if(!ln)return kh(n),ln=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=si)){if(zc(n))throw Bh(),Error(t(418));for(;i;)Fh(n,i),i=Tr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){si=Tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?Tr(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=si;n;)n=Tr(n.nextSibling)}function Hs(){si=ri=null,ln=!1}function Hc(n){Ti===null?Ti=[n]:Ti.push(n)}var vx=N.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=d.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(fe,Q){if(n){var xe=fe.deletions;xe===null?(fe.deletions=[Q],fe.flags|=16):xe.push(Q)}}function a(fe,Q){if(!n)return null;for(;Q!==null;)i(fe,Q),Q=Q.sibling;return null}function c(fe,Q){for(fe=new Map;Q!==null;)Q.key!==null?fe.set(Q.key,Q):fe.set(Q.index,Q),Q=Q.sibling;return fe}function d(fe,Q){return fe=Or(fe,Q),fe.index=0,fe.sibling=null,fe}function m(fe,Q,xe){return fe.index=xe,n?(xe=fe.alternate,xe!==null?(xe=xe.index,xe<Q?(fe.flags|=2,Q):xe):(fe.flags|=2,Q)):(fe.flags|=1048576,Q)}function T(fe){return n&&fe.alternate===null&&(fe.flags|=2),fe}function B(fe,Q,xe,Ge){return Q===null||Q.tag!==6?(Q=Du(xe,fe.mode,Ge),Q.return=fe,Q):(Q=d(Q,xe),Q.return=fe,Q)}function Y(fe,Q,xe,Ge){var ht=xe.type;return ht===F?ke(fe,Q,xe.props.children,Ge,xe.key):Q!==null&&(Q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===oe&&zh(ht)===Q.type)?(Ge=d(Q,xe.props),Ge.ref=Oa(fe,Q,xe),Ge.return=fe,Ge):(Ge=ul(xe.type,xe.key,xe.props,null,fe.mode,Ge),Ge.ref=Oa(fe,Q,xe),Ge.return=fe,Ge)}function Ee(fe,Q,xe,Ge){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==xe.containerInfo||Q.stateNode.implementation!==xe.implementation?(Q=Lu(xe,fe.mode,Ge),Q.return=fe,Q):(Q=d(Q,xe.children||[]),Q.return=fe,Q)}function ke(fe,Q,xe,Ge,ht){return Q===null||Q.tag!==7?(Q=fs(xe,fe.mode,Ge,ht),Q.return=fe,Q):(Q=d(Q,xe),Q.return=fe,Q)}function ze(fe,Q,xe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Du(""+Q,fe.mode,xe),Q.return=fe,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return xe=ul(Q.type,Q.key,Q.props,null,fe.mode,xe),xe.ref=Oa(fe,null,Q),xe.return=fe,xe;case P:return Q=Lu(Q,fe.mode,xe),Q.return=fe,Q;case oe:var Ge=Q._init;return ze(fe,Ge(Q._payload),xe)}if($(Q)||Me(Q))return Q=fs(Q,fe.mode,xe,null),Q.return=fe,Q;zo(fe,Q)}return null}function Oe(fe,Q,xe,Ge){var ht=Q!==null?Q.key:null;if(typeof xe=="string"&&xe!==""||typeof xe=="number")return ht!==null?null:B(fe,Q,""+xe,Ge);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case z:return xe.key===ht?Y(fe,Q,xe,Ge):null;case P:return xe.key===ht?Ee(fe,Q,xe,Ge):null;case oe:return ht=xe._init,Oe(fe,Q,ht(xe._payload),Ge)}if($(xe)||Me(xe))return ht!==null?null:ke(fe,Q,xe,Ge,null);zo(fe,xe)}return null}function it(fe,Q,xe,Ge,ht){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return fe=fe.get(xe)||null,B(Q,fe,""+Ge,ht);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case z:return fe=fe.get(Ge.key===null?xe:Ge.key)||null,Y(Q,fe,Ge,ht);case P:return fe=fe.get(Ge.key===null?xe:Ge.key)||null,Ee(Q,fe,Ge,ht);case oe:var _t=Ge._init;return it(fe,Q,xe,_t(Ge._payload),ht)}if($(Ge)||Me(Ge))return fe=fe.get(xe)||null,ke(Q,fe,Ge,ht,null);zo(Q,Ge)}return null}function lt(fe,Q,xe,Ge){for(var ht=null,_t=null,yt=Q,Ct=Q=0,An=null;yt!==null&&Ct<xe.length;Ct++){yt.index>Ct?(An=yt,yt=null):An=yt.sibling;var Kt=Oe(fe,yt,xe[Ct],Ge);if(Kt===null){yt===null&&(yt=An);break}n&&yt&&Kt.alternate===null&&i(fe,yt),Q=m(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt,yt=An}if(Ct===xe.length)return a(fe,yt),ln&&rs(fe,Ct),ht;if(yt===null){for(;Ct<xe.length;Ct++)yt=ze(fe,xe[Ct],Ge),yt!==null&&(Q=m(yt,Q,Ct),_t===null?ht=yt:_t.sibling=yt,_t=yt);return ln&&rs(fe,Ct),ht}for(yt=c(fe,yt);Ct<xe.length;Ct++)An=it(yt,fe,Ct,xe[Ct],Ge),An!==null&&(n&&An.alternate!==null&&yt.delete(An.key===null?Ct:An.key),Q=m(An,Q,Ct),_t===null?ht=An:_t.sibling=An,_t=An);return n&&yt.forEach(function(kr){return i(fe,kr)}),ln&&rs(fe,Ct),ht}function dt(fe,Q,xe,Ge){var ht=Me(xe);if(typeof ht!="function")throw Error(t(150));if(xe=ht.call(xe),xe==null)throw Error(t(151));for(var _t=ht=null,yt=Q,Ct=Q=0,An=null,Kt=xe.next();yt!==null&&!Kt.done;Ct++,Kt=xe.next()){yt.index>Ct?(An=yt,yt=null):An=yt.sibling;var kr=Oe(fe,yt,Kt.value,Ge);if(kr===null){yt===null&&(yt=An);break}n&&yt&&kr.alternate===null&&i(fe,yt),Q=m(kr,Q,Ct),_t===null?ht=kr:_t.sibling=kr,_t=kr,yt=An}if(Kt.done)return a(fe,yt),ln&&rs(fe,Ct),ht;if(yt===null){for(;!Kt.done;Ct++,Kt=xe.next())Kt=ze(fe,Kt.value,Ge),Kt!==null&&(Q=m(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt);return ln&&rs(fe,Ct),ht}for(yt=c(fe,yt);!Kt.done;Ct++,Kt=xe.next())Kt=it(yt,fe,Ct,Kt.value,Ge),Kt!==null&&(n&&Kt.alternate!==null&&yt.delete(Kt.key===null?Ct:Kt.key),Q=m(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt);return n&&yt.forEach(function(Zx){return i(fe,Zx)}),ln&&rs(fe,Ct),ht}function pn(fe,Q,xe,Ge){if(typeof xe=="object"&&xe!==null&&xe.type===F&&xe.key===null&&(xe=xe.props.children),typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case z:e:{for(var ht=xe.key,_t=Q;_t!==null;){if(_t.key===ht){if(ht=xe.type,ht===F){if(_t.tag===7){a(fe,_t.sibling),Q=d(_t,xe.props.children),Q.return=fe,fe=Q;break e}}else if(_t.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===oe&&zh(ht)===_t.type){a(fe,_t.sibling),Q=d(_t,xe.props),Q.ref=Oa(fe,_t,xe),Q.return=fe,fe=Q;break e}a(fe,_t);break}else i(fe,_t);_t=_t.sibling}xe.type===F?(Q=fs(xe.props.children,fe.mode,Ge,xe.key),Q.return=fe,fe=Q):(Ge=ul(xe.type,xe.key,xe.props,null,fe.mode,Ge),Ge.ref=Oa(fe,Q,xe),Ge.return=fe,fe=Ge)}return T(fe);case P:e:{for(_t=xe.key;Q!==null;){if(Q.key===_t)if(Q.tag===4&&Q.stateNode.containerInfo===xe.containerInfo&&Q.stateNode.implementation===xe.implementation){a(fe,Q.sibling),Q=d(Q,xe.children||[]),Q.return=fe,fe=Q;break e}else{a(fe,Q);break}else i(fe,Q);Q=Q.sibling}Q=Lu(xe,fe.mode,Ge),Q.return=fe,fe=Q}return T(fe);case oe:return _t=xe._init,pn(fe,Q,_t(xe._payload),Ge)}if($(xe))return lt(fe,Q,xe,Ge);if(Me(xe))return dt(fe,Q,xe,Ge);zo(fe,xe)}return typeof xe=="string"&&xe!==""||typeof xe=="number"?(xe=""+xe,Q!==null&&Q.tag===6?(a(fe,Q.sibling),Q=d(Q,xe),Q.return=fe,fe=Q):(a(fe,Q),Q=Du(xe,fe.mode,Ge),Q.return=fe,fe=Q),T(fe)):a(fe,Q)}return pn}var Gs=Vh(!0),Hh=Vh(!1),Vo=Ar(null),Ho=null,js=null,Gc=null;function jc(){Gc=js=Ho=null}function Wc(n){var i=Vo.current;sn(Vo),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Ho=n,Gc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kn=!0),n.firstContext=null)}function hi(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Ho===null)throw Error(t(308));js=n,Ho.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var ss=null;function Yc(n){ss===null?ss=[n]:ss.push(n)}function Gh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,rr(n,c)}function rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Nr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,($t&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,rr(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,rr(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,xt(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var d=n.updateQueue;Nr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var Y=B,Ee=Y.next;Y.next=null,T===null?m=Ee:T.next=Ee,T=Y;var ke=n.alternate;ke!==null&&(ke=ke.updateQueue,B=ke.lastBaseUpdate,B!==T&&(B===null?ke.firstBaseUpdate=Ee:B.next=Ee,ke.lastBaseUpdate=Y))}if(m!==null){var ze=d.baseState;T=0,ke=Ee=Y=null,B=m;do{var Oe=B.lane,it=B.eventTime;if((c&Oe)===Oe){ke!==null&&(ke=ke.next={eventTime:it,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var lt=n,dt=B;switch(Oe=i,it=a,dt.tag){case 1:if(lt=dt.payload,typeof lt=="function"){ze=lt.call(it,ze,Oe);break e}ze=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=dt.payload,Oe=typeof lt=="function"?lt.call(it,ze,Oe):lt,Oe==null)break e;ze=ue({},ze,Oe);break e;case 2:Nr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Oe=d.effects,Oe===null?d.effects=[B]:Oe.push(B))}else it={eventTime:it,lane:Oe,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ke===null?(Ee=ke=it,Y=ze):ke=ke.next=it,T|=Oe;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Oe=B,B=Oe.next,Oe.next=null,d.lastBaseUpdate=Oe,d.shared.pending=null}}while(!0);if(ke===null&&(Y=ze),d.baseState=Y,d.firstBaseUpdate=Ee,d.lastBaseUpdate=ke,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ls|=T,n.lanes=T,n.memoizedState=ze}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ka={},zi=Ar(ka),Ba=Ar(ka),za=Ar(ka);function as(n){if(n===ka)throw Error(t(174));return n}function qc(n,i){switch(nn(za,i),nn(Ba,n),nn(zi,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}sn(zi),nn(zi,i)}function Xs(){sn(zi),sn(Ba),sn(za)}function Yh(n){as(za.current);var i=as(zi.current),a=E(i,n.type);i!==a&&(nn(Ba,n),nn(zi,a))}function Kc(n){Ba.current===n&&(sn(zi),sn(Ba))}var cn=Ar(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Jc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Xo=N.ReactCurrentDispatcher,Qc=N.ReactCurrentBatchConfig,os=0,un=null,Sn=null,bn=null,Yo=!1,Va=!1,Ha=0,_x=0;function Ln(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bi(n[a],i[a]))return!1;return!0}function tu(n,i,a,c,d,m){if(os=m,un=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Ex:wx,n=a(c,d),Va){m=0;do{if(Va=!1,Ha=0,25<=m)throw Error(t(301));m+=1,bn=Sn=null,i.updateQueue=null,Xo.current=bx,n=a(c,d)}while(Va)}if(Xo.current=Ko,i=Sn!==null&&Sn.next!==null,os=0,bn=Sn=un=null,Yo=!1,i)throw Error(t(300));return n}function nu(){var n=Ha!==0;return Ha=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?un.memoizedState=bn=n:bn=bn.next=n,bn}function pi(){if(Sn===null){var n=un.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var i=bn===null?un.memoizedState:bn.next;if(i!==null)bn=i,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?un.memoizedState=bn=n:bn=bn.next=n}return bn}function Ga(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Sn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var B=T=null,Y=null,Ee=m;do{var ke=Ee.lane;if((os&ke)===ke)Y!==null&&(Y=Y.next={lane:0,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null}),c=Ee.hasEagerState?Ee.eagerState:n(c,Ee.action);else{var ze={lane:ke,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null};Y===null?(B=Y=ze,T=c):Y=Y.next=ze,un.lanes|=ke,ls|=ke}Ee=Ee.next}while(Ee!==null&&Ee!==m);Y===null?T=c:Y.next=B,bi(c,i.memoizedState)||(Kn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Y,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,un.lanes|=m,ls|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ru(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);bi(m,i.memoizedState)||(Kn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $h(){}function qh(n,i){var a=un,c=pi(),d=i(),m=!bi(c.memoizedState,d);if(m&&(c.memoizedState=d,Kn=!0),c=c.queue,su(Jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,ja(9,Zh.bind(null,a,c,d,i),void 0,null),Tn===null)throw Error(t(349));(os&30)!==0||Kh(a,i,d)}return d}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Qh(i)&&ep(n)}function Jh(n,i,a){return a(function(){Qh(i)&&ep(n)})}function Qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bi(n,a)}catch{return!0}}function ep(n){var i=rr(n,1);i!==null&&Ni(i,n,1,-1)}function tp(n){var i=Vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Mx.bind(null,un,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return pi().memoizedState}function $o(n,i,a,c){var d=Vi();un.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function qo(n,i,a,c){var d=pi();c=c===void 0?null:c;var m=void 0;if(Sn!==null){var T=Sn.memoizedState;if(m=T.destroy,c!==null&&eu(c,T.deps)){d.memoizedState=ja(i,a,m,c);return}}un.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function ip(n,i){return $o(8390656,8,n,i)}function su(n,i){return qo(2048,8,n,i)}function rp(n,i){return qo(4,2,n,i)}function sp(n,i){return qo(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,ap.bind(null,i,n),a)}function au(){}function lp(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=a):(bi(a,i)||(a=Se(),un.lanes|=a,ls|=a,n.baseState=!0),i)}function yx(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{ut=a,Qc.transition=c}}function dp(){return pi().memoizedState}function Sx(n,i,a){var c=Ur(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var d=Vn();Ni(a,n,c,d),pp(a,i,c)}}function Mx(n,i,a){var c=Ur(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,a);if(d.hasEagerState=!0,d.eagerState=B,bi(B,T)){var Y=i.interleaved;Y===null?(d.next=d,Yc(i)):(d.next=Y.next,Y.next=d),i.interleaved=d;return}}catch{}finally{}a=Gh(n,i,d,c),a!==null&&(d=Vn(),Ni(a,n,c,d),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===un||i!==null&&i===un}function hp(n,i){Va=Yo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,xt(n,a)}}var Ko={readContext:hi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},Ex={readContext:hi,useCallback:function(n,i){return Vi().memoizedState=[n,i===void 0?null:i],n},useContext:hi,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Sx.bind(null,un,n),[c.memoizedState,n]},useRef:function(n){var i=Vi();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:au,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=yx.bind(null,n[1]),Vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=un,d=Vi();if(ln){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tn===null)throw Error(t(349));(os&30)!==0||Kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ip(Jh.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Vi(),i=Tn.identifierPrefix;if(ln){var a=ir,c=nr;a=(c&~(1<<32-We(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_x++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},wx={readContext:hi,useCallback:lp,useContext:hi,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=pi();return up(i,Sn.memoizedState,n)},useTransition:function(){var n=iu(Ga)[0],i=pi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1},bx={readContext:hi,useCallback:lp,useContext:hi,useEffect:su,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ru,useRef:np,useState:function(){return ru(Ga)},useDebugValue:au,useDeferredValue:function(n){var i=pi();return Sn===null?i.memoizedState=n:up(i,Sn.memoizedState,n)},useTransition:function(){var n=ru(Ga)[0],i=pi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:qh,useId:dp,unstable_isNewReconciler:!1};function Ai(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ou(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?ni(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Vn(),d=Ur(n),m=sr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Pr(n,m,d),i!==null&&(Ni(i,n,d,c),Go(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Vn(),d=Ur(n),m=sr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Pr(n,m,d),i!==null&&(Ni(i,n,d,c),Go(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Vn(),c=Ur(n),d=sr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Pr(n,d,c),i!==null&&(Ni(i,n,c,a),Go(i,n,c))}};function mp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function gp(n,i,a){var c=!1,d=Cr,m=i.contextType;return typeof m=="object"&&m!==null?m=hi(m):(d=qn(i)?ns:Dn.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Cr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function lu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=hi(m):(m=qn(i)?ns:Dn.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ou(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Zo.enqueueReplaceState(d,d.state,null),jo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=sr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,bu=c),uu(n,i)},a}function _p(n,i,a){a=sr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){uu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uu(n,i),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Tx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=zx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=sr(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ax=N.ReactCurrentOwner,Kn=!1;function zn(n,i,a,c){i.child=n===null?Hh(i,null,a,c):Gs(i,n.child,a,c)}function Ep(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=tu(n,i,a,c,m,d),a=nu(),n!==null&&!Kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ar(n,i,d)):(ln&&a&&kc(i),i.flags|=1,zn(n,i,c,d),i.child)}function wp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Iu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bp(n,i,m,c,d)):(n=ul(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(T,c)&&n.ref===i.ref)return ar(n,i,d)}return i.flags|=1,n=Or(m,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(Kn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kn=!0);else return i.lanes=n.lanes,ar(n,i,d)}return du(n,i,a,c,d)}function Tp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(qs,ai),ai|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,nn(qs,ai),ai|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,nn(qs,ai),ai|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,nn(qs,ai),ai|=c;return zn(n,i,d,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,a,c,d){var m=qn(a)?ns:Dn.current;return m=Bs(i,m),Ws(i,d),a=tu(n,i,a,c,m,d),c=nu(),n!==null&&!Kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ar(n,i,d)):(ln&&c&&kc(i),i.flags|=1,zn(n,i,a,d),i.child)}function Cp(n,i,a,c,d){if(qn(a)){var m=!0;Uo(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Qo(n,i),gp(i,a,c),lu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Y=T.context,Ee=a.contextType;typeof Ee=="object"&&Ee!==null?Ee=hi(Ee):(Ee=qn(a)?ns:Dn.current,Ee=Bs(i,Ee));var ke=a.getDerivedStateFromProps,ze=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function";ze||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Y!==Ee)&&xp(i,T,c,Ee),Nr=!1;var Oe=i.memoizedState;T.state=Oe,jo(i,c,T,d),Y=i.memoizedState,B!==c||Oe!==Y||$n.current||Nr?(typeof ke=="function"&&(ou(i,a,ke,c),Y=i.memoizedState),(B=Nr||mp(i,a,B,c,Oe,Y,Ee))?(ze||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),T.props=c,T.state=Y,T.context=Ee,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,jh(n,i),B=i.memoizedProps,Ee=i.type===i.elementType?B:Ai(i.type,B),T.props=Ee,ze=i.pendingProps,Oe=T.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=hi(Y):(Y=qn(a)?ns:Dn.current,Y=Bs(i,Y));var it=a.getDerivedStateFromProps;(ke=typeof it=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==ze||Oe!==Y)&&xp(i,T,c,Y),Nr=!1,Oe=i.memoizedState,T.state=Oe,jo(i,c,T,d);var lt=i.memoizedState;B!==ze||Oe!==lt||$n.current||Nr?(typeof it=="function"&&(ou(i,a,it,c),lt=i.memoizedState),(Ee=Nr||mp(i,a,Ee,c,Oe,lt,Y)||!1)?(ke||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,lt,Y),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,lt,Y)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Oe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Oe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),T.props=c,T.state=lt,T.context=Y,c=Ee):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Oe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Oe===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,a,c,m,d)}function fu(n,i,a,c,d,m){Ap(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Dh(i,a,!1),ar(n,i,m);c=i.stateNode,Ax.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,B,m)):zn(n,i,B,m),i.memoizedState=c.state,d&&Dh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),qc(n,i.containerInfo)}function Np(n,i,a,c,d){return Hs(),Hc(d),i.flags|=256,zn(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,d=cn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),nn(cn,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=dl(T,c,0,null),n=fs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pu(a),i.memoizedState=hu,n):mu(i,T));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return Cx(n,i,T,c,B,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,B=d.sibling;var Y={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=Or(d,Y),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=Or(B,m):(m=fs(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?pu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return m=n.child,n=m.sibling,c=Or(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Hc(c),Gs(i,n.child,null,a),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Cx(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Jo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=dl({mode:"visible",children:c.children},d,0,null),m=fs(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,T),i.child.memoizedState=pu(T),i.memoizedState=hu,m);if((i.mode&1)===0)return Jo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=cu(m,c,void 0),Jo(n,i,T,c)}if(B=(T&n.childLanes)!==0,Kn||B){if(c=Tn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,rr(n,d),Ni(c,n,d,-1))}return Pu(),c=cu(Error(t(421))),Jo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Vx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,si=Tr(d.nextSibling),ri=i,ln=!0,Ti=null,n!==null&&(di[fi++]=nr,di[fi++]=ir,di[fi++]=is,nr=n.id,ir=n.overflow,is=i),i=mu(i,c.children),i.flags|=4096,i)}function Ip(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function gu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Dp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(zn(n,i,c.children,a),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,a,i);else if(n.tag===19)Ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(nn(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gu(i,!0,a,null,m);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Or(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Or(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Rx(n,i,a){switch(i.tag){case 3:Rp(i),Hs();break;case 5:Yh(i);break;case 1:qn(i.type)&&Uo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;nn(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(cn,cn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(nn(cn,cn.current&1),n=ar(n,i,a),n!==null?n.sibling:null);nn(cn,cn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),nn(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return ar(n,i,a)}var Lp,xu,Up,Fp;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Up=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,as(zi.current);var m=null;switch(a){case"input":d=kt(n,d),c=kt(n,c),m=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":d=Ze(n,d),c=Ze(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Io)}Le(a,c);var T;a=null;for(Ee in d)if(!c.hasOwnProperty(Ee)&&d.hasOwnProperty(Ee)&&d[Ee]!=null)if(Ee==="style"){var B=d[Ee];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Ee!=="dangerouslySetInnerHTML"&&Ee!=="children"&&Ee!=="suppressContentEditableWarning"&&Ee!=="suppressHydrationWarning"&&Ee!=="autoFocus"&&(o.hasOwnProperty(Ee)?m||(m=[]):(m=m||[]).push(Ee,null));for(Ee in c){var Y=c[Ee];if(B=d!=null?d[Ee]:void 0,c.hasOwnProperty(Ee)&&Y!==B&&(Y!=null||B!=null))if(Ee==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Y&&Y.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Y)Y.hasOwnProperty(T)&&B[T]!==Y[T]&&(a||(a={}),a[T]=Y[T])}else a||(m||(m=[]),m.push(Ee,a)),a=Y;else Ee==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(m=m||[]).push(Ee,Y)):Ee==="children"?typeof Y!="string"&&typeof Y!="number"||(m=m||[]).push(Ee,""+Y):Ee!=="suppressContentEditableWarning"&&Ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(Ee)?(Y!=null&&Ee==="onScroll"&&rn("scroll",n),m||B===Y||(m=[])):(m=m||[]).push(Ee,Y))}a&&(m=m||[]).push("style",a);var Ee=m;(i.updateQueue=Ee)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!ln)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Un(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Nx(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(i),null;case 1:return qn(i.type)&&Lo(),Un(i),null;case 3:return c=i.stateNode,Xs(),sn($n),sn(Dn),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ti!==null&&(Cu(Ti),Ti=null))),xu(n,i),Un(i),null;case 5:Kc(i);var d=as(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Un(i),null}if(n=as(zi.current),Bo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Bi]=i,c[Ua]=m,n=(i.mode&1)!==0,a){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)rn(Ia[d],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":Wt(c,m),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},rn("invalid",c);break;case"textarea":gt(c,m),rn("invalid",c)}Le(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),d=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&rn("scroll",c)}switch(a){case"input":st(c),It(c,m,!0);break;case"textarea":st(c),Rt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Io)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Bi]=i,n[Ua]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ae(a,c),a){case"dialog":rn("cancel",n),rn("close",n),d=c;break;case"iframe":case"object":case"embed":rn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)rn(Ia[d],n);d=c;break;case"source":rn("error",n),d=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),d=c;break;case"details":rn("toggle",n),d=c;break;case"input":Wt(n,c),d=kt(n,c),rn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),rn("invalid",n);break;case"textarea":gt(n,c),d=Ze(n,c),rn("invalid",n);break;default:d=c}Le(a,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var Y=B[m];m==="style"?he(n,Y):m==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&H(n,Y)):m==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&se(n,Y):typeof Y=="number"&&se(n,""+Y):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?Y!=null&&m==="onScroll"&&rn("scroll",n):Y!=null&&R(n,m,Y,T))}switch(a){case"input":st(n),It(n,c,!1);break;case"textarea":st(n),Rt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?St(n,!!c.multiple,m,!1):c.defaultValue!=null&&St(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Io)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Un(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(za.current),as(zi.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Bi]=i,(m=c.nodeValue!==a)&&(n=ri,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bi]=i,i.stateNode=c}return Un(i),null;case 13:if(sn(cn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ln&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),Hs(),i.flags|=98560,m=!1;else if(m=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Bi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Un(i),m=!1}else Ti!==null&&(Cu(Ti),Ti=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(cn.current&1)!==0?Mn===0&&(Mn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),Un(i),null);case 4:return Xs(),xu(n,i),n===null&&Da(i.stateNode.containerInfo),Un(i),null;case 10:return Wc(i.type._context),Un(i),null;case 17:return qn(i.type)&&Lo(),Un(i),null;case 19:if(sn(cn),m=i.memoizedState,m===null)return Un(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Wa(m,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wo(n),T!==null){for(i.flags|=128,Wa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return nn(cn,cn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Ks&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!ln)return Un(i),null}else 2*Xt()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,a=cn.current,nn(cn,c?a&1|2:a&1),i):(Un(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ai&1073741824)!==0&&(Un(i),i.subtreeFlags&6&&(i.flags|=8192)):Un(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Px(n,i){switch(Bc(i),i.tag){case 1:return qn(i.type)&&Lo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),sn($n),sn(Dn),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(sn(cn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return sn(cn),null;case 4:return Xs(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var el=!1,Fn=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,rt=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){hn(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){hn(n,i,c)}}var Op=!1;function Dx(n,i){if(Nc=yo,n=mh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,B=-1,Y=-1,Ee=0,ke=0,ze=n,Oe=null;t:for(;;){for(var it;ze!==a||d!==0&&ze.nodeType!==3||(B=T+d),ze!==m||c!==0&&ze.nodeType!==3||(Y=T+c),ze.nodeType===3&&(T+=ze.nodeValue.length),(it=ze.firstChild)!==null;)Oe=ze,ze=it;for(;;){if(ze===n)break t;if(Oe===a&&++Ee===d&&(B=T),Oe===m&&++ke===c&&(Y=T),(it=ze.nextSibling)!==null)break;ze=Oe,Oe=ze.parentNode}ze=it}a=B===-1||Y===-1?null:{start:B,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},yo=!1,rt=i;rt!==null;)if(i=rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,rt=n;else for(;rt!==null;){i=rt;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var dt=lt.memoizedProps,pn=lt.memoizedState,fe=i.stateNode,Q=fe.getSnapshotBeforeUpdate(i.elementType===i.type?dt:Ai(i.type,dt),pn);fe.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var xe=i.stateNode.containerInfo;xe.nodeType===1?xe.textContent="":xe.nodeType===9&&xe.documentElement&&xe.removeChild(xe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ge){hn(i,i.return,Ge)}if(n=i.sibling,n!==null){n.return=i.return,rt=n;break}rt=i.return}return lt=Op,Op=!1,lt}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vu(i,a,m)}d=d.next}while(d!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _u(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Bi],delete i[Ua],delete i[Uc],delete i[mx],delete i[gx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Io));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}var Nn=null,Ci=!1;function Ir(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 5:Fn||$s(a,i);case 6:var c=Nn,d=Ci;Nn=null,Ir(n,i,a),Nn=c,Ci=d,Nn!==null&&(Ci?(n=Nn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Nn.removeChild(a.stateNode));break;case 18:Nn!==null&&(Ci?(n=Nn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),wa(n)):Lc(Nn,a.stateNode));break;case 4:c=Nn,d=Ci,Nn=a.stateNode.containerInfo,Ci=!0,Ir(n,i,a),Nn=c,Ci=d;break;case 0:case 11:case 14:case 15:if(!Fn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&vu(a,i,T),d=d.next}while(d!==c)}Ir(n,i,a);break;case 1:if(!Fn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){hn(a,i,B)}Ir(n,i,a);break;case 21:Ir(n,i,a);break;case 22:a.mode&1?(Fn=(c=Fn)||a.memoizedState!==null,Ir(n,i,a),Fn=c):Ir(n,i,a);break;default:Ir(n,i,a)}}function Hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ix),i.forEach(function(c){var d=Hx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ri(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Nn=B.stateNode,Ci=!1;break e;case 3:Nn=B.stateNode.containerInfo,Ci=!0;break e;case 4:Nn=B.stateNode.containerInfo,Ci=!0;break e}B=B.return}if(Nn===null)throw Error(t(160));Vp(m,T,d),Nn=null,Ci=!1;var Y=d.alternate;Y!==null&&(Y.return=null),d.return=null}catch(Ee){hn(d,i,Ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Hi(n),c&4){try{Xa(3,n,n.return),tl(3,n)}catch(dt){hn(n,n.return,dt)}try{Xa(5,n,n.return)}catch(dt){hn(n,n.return,dt)}}break;case 1:Ri(i,n),Hi(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Ri(i,n),Hi(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{se(d,"")}catch(dt){hn(n,n.return,dt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,B=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&Mt(d,m),Ae(B,T);var Ee=Ae(B,m);for(T=0;T<Y.length;T+=2){var ke=Y[T],ze=Y[T+1];ke==="style"?he(d,ze):ke==="dangerouslySetInnerHTML"?H(d,ze):ke==="children"?se(d,ze):R(d,ke,ze,Ee)}switch(B){case"input":Bt(d,m);break;case"textarea":He(d,m);break;case"select":var Oe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var it=m.value;it!=null?St(d,!!m.multiple,it,!1):Oe!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ua]=m}catch(dt){hn(n,n.return,dt)}}break;case 6:if(Ri(i,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(dt){hn(n,n.return,dt)}}break;case 3:if(Ri(i,n),Hi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(dt){hn(n,n.return,dt)}break;case 4:Ri(i,n),Hi(n);break;case 13:Ri(i,n),Hi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(wu=Xt())),c&4&&Hp(n);break;case 22:if(ke=a!==null&&a.memoizedState!==null,n.mode&1?(Fn=(Ee=Fn)||ke,Ri(i,n),Fn=Ee):Ri(i,n),Hi(n),c&8192){if(Ee=n.memoizedState!==null,(n.stateNode.isHidden=Ee)&&!ke&&(n.mode&1)!==0)for(rt=n,ke=n.child;ke!==null;){for(ze=rt=ke;rt!==null;){switch(Oe=rt,it=Oe.child,Oe.tag){case 0:case 11:case 14:case 15:Xa(4,Oe,Oe.return);break;case 1:$s(Oe,Oe.return);var lt=Oe.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Oe,a=Oe.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(dt){hn(c,a,dt)}}break;case 5:$s(Oe,Oe.return);break;case 22:if(Oe.memoizedState!==null){Xp(ze);continue}}it!==null?(it.return=Oe,rt=it):Xp(ze)}ke=ke.sibling}e:for(ke=null,ze=n;;){if(ze.tag===5){if(ke===null){ke=ze;try{d=ze.stateNode,Ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=ze.stateNode,Y=ze.memoizedProps.style,T=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=ee("display",T))}catch(dt){hn(n,n.return,dt)}}}else if(ze.tag===6){if(ke===null)try{ze.stateNode.nodeValue=Ee?"":ze.memoizedProps}catch(dt){hn(n,n.return,dt)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===n)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===n)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===n)break e;ke===ze&&(ke=null),ze=ze.return}ke===ze&&(ke=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:Ri(i,n),Hi(n),c&4&&Hp(n);break;case 21:break;default:Ri(i,n),Hi(n)}}function Hi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(se(d,""),c.flags&=-33);var m=zp(n);Su(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,B=zp(n);yu(n,B,T);break;default:throw Error(t(161))}}catch(Y){hn(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lx(n,i,a){rt=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;rt!==null;){var d=rt,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||el;if(!T){var B=d.alternate,Y=B!==null&&B.memoizedState!==null||Fn;B=el;var Ee=Fn;if(el=T,(Fn=Y)&&!Ee)for(rt=d;rt!==null;)T=rt,Y=T.child,T.tag===22&&T.memoizedState!==null?Yp(d):Y!==null?(Y.return=T,rt=Y):Yp(d);for(;m!==null;)rt=m,jp(m),m=m.sibling;rt=d,el=B,Fn=Ee}Wp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,rt=m):Wp(n)}}function Wp(n){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Fn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Fn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ai(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Ee=i.alternate;if(Ee!==null){var ke=Ee.memoizedState;if(ke!==null){var ze=ke.dehydrated;ze!==null&&wa(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Fn||i.flags&512&&_u(i)}catch(Oe){hn(i,i.return,Oe)}}if(i===n){rt=null;break}if(a=i.sibling,a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Xp(n){for(;rt!==null;){var i=rt;if(i===n){rt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Yp(n){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(Y){hn(i,a,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(Y){hn(i,d,Y)}}var m=i.return;try{_u(i)}catch(Y){hn(i,m,Y)}break;case 5:var T=i.return;try{_u(i)}catch(Y){hn(i,T,Y)}}}catch(Y){hn(i,i.return,Y)}if(i===n){rt=null;break}var B=i.sibling;if(B!==null){B.return=i.return,rt=B;break}rt=i.return}}var Ux=Math.ceil,nl=N.ReactCurrentDispatcher,Mu=N.ReactCurrentOwner,mi=N.ReactCurrentBatchConfig,$t=0,Tn=null,xn=null,Pn=0,ai=0,qs=Ar(0),Mn=0,Ya=null,ls=0,il=0,Eu=0,$a=null,Zn=null,wu=0,Ks=1/0,or=null,rl=!1,bu=null,Dr=null,sl=!1,Lr=null,al=0,qa=0,Tu=null,ol=-1,ll=0;function Vn(){return($t&6)!==0?Xt():ol!==-1?ol:ol=Xt()}function Ur(n){return(n.mode&1)===0?1:($t&2)!==0&&Pn!==0?Pn&-Pn:vx.transition!==null?(ll===0&&(ll=Se()),ll):(n=ut,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function Ni(n,i,a,c){if(50<qa)throw qa=0,Tu=null,Error(t(185));qe(n,a,c),(($t&2)===0||n!==Tn)&&(n===Tn&&(($t&2)===0&&(il|=a),Mn===4&&Fr(n,Pn)),Jn(n,c),a===1&&$t===0&&(i.mode&1)===0&&(Ks=Xt()+500,Fo&&Rr()))}function Jn(n,i){var a=n.callbackNode;ce(n,i);var c=G(n,n===Tn?Pn:0);if(c===0)a!==null&&Qr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qr(a),i===1)n.tag===0?xx(qp.bind(null,n)):Lh(qp.bind(null,n)),hx(function(){($t&6)===0&&Rr()}),a=null;else{switch(Dt(c)){case 1:a=Qi;break;case 4:a=C;break;case 16:a=J;break;case 536870912:a=ge;break;default:a=J}a=im(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(ol=-1,ll=0,($t&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=G(n,n===Tn?Pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var d=$t;$t|=2;var m=Zp();(Tn!==n||Pn!==i)&&(or=null,Ks=Xt()+500,us(n,i));do try{kx();break}catch(B){Kp(n,B)}while(!0);jc(),nl.current=m,$t=d,xn!==null?i=0:(Tn=null,Pn=0,i=Mn)}if(i!==0){if(i===2&&(d=Ue(n),d!==0&&(c=d,i=Au(n,d))),i===1)throw a=Ya,us(n,0),Fr(n,c),Jn(n,Xt()),a;if(i===6)Fr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Fx(d)&&(i=cl(n,c),i===2&&(m=Ue(n),m!==0&&(c=m,i=Au(n,m))),i===1))throw a=Ya,us(n,0),Fr(n,c),Jn(n,Xt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,Zn,or);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=wu+500-Xt(),10<i)){if(G(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Vn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc(ds.bind(null,n,Zn,or),i);break}ds(n,Zn,or);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-We(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ux(c/1960))-c,10<c){n.timeoutHandle=Dc(ds.bind(null,n,Zn,or),c);break}ds(n,Zn,or);break;case 5:ds(n,Zn,or);break;default:throw Error(t(329))}}}return Jn(n,Xt()),n.callbackNode===a?$p.bind(null,n):null}function Au(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Zn,Zn=a,i!==null&&Cu(i)),n}function Cu(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function Fx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Eu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-We(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if(($t&6)!==0)throw Error(t(327));Zs();var i=G(n,0);if((i&1)===0)return Jn(n,Xt()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=Ue(n);c!==0&&(i=c,a=Au(n,c))}if(a===1)throw a=Ya,us(n,0),Fr(n,i),Jn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,Zn,or),Jn(n,Xt()),null}function Ru(n,i){var a=$t;$t|=1;try{return n(i)}finally{$t=a,$t===0&&(Ks=Xt()+500,Fo&&Rr())}}function cs(n){Lr!==null&&Lr.tag===0&&($t&6)===0&&Zs();var i=$t;$t|=1;var a=mi.transition,c=ut;try{if(mi.transition=null,ut=1,n)return n()}finally{ut=c,mi.transition=a,$t=i,($t&6)===0&&Rr()}}function Nu(){ai=qs.current,sn(qs)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,fx(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Lo();break;case 3:Xs(),sn($n),sn(Dn),Jc();break;case 5:Kc(c);break;case 4:Xs();break;case 13:sn(cn);break;case 19:sn(cn);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(Tn=n,xn=n=Or(n.current,null),Pn=ai=i,Mn=0,Ya=null,Eu=il=ls=0,Zn=$a=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}ss=null}return n}function Kp(n,i){do{var a=xn;try{if(jc(),Xo.current=Ko,Yo){for(var c=un.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yo=!1}if(os=0,bn=Sn=un=null,Va=!1,Ha=0,Mu.current=null,a===null||a.return===null){Mn=1,Ya=i,xn=null;break}e:{var m=n,T=a.return,B=a,Y=i;if(i=Pn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Ee=Y,ke=B,ze=ke.tag;if((ke.mode&1)===0&&(ze===0||ze===11||ze===15)){var Oe=ke.alternate;Oe?(ke.updateQueue=Oe.updateQueue,ke.memoizedState=Oe.memoizedState,ke.lanes=Oe.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var it=Sp(T);if(it!==null){it.flags&=-257,Mp(it,T,B,m,i),it.mode&1&&yp(m,Ee,i),i=it,Y=Ee;var lt=i.updateQueue;if(lt===null){var dt=new Set;dt.add(Y),i.updateQueue=dt}else lt.add(Y);break e}else{if((i&1)===0){yp(m,Ee,i),Pu();break e}Y=Error(t(426))}}else if(ln&&B.mode&1){var pn=Sp(T);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Mp(pn,T,B,m,i),Hc(Ys(Y,B));break e}}m=Y=Ys(Y,B),Mn!==4&&(Mn=2),$a===null?$a=[m]:$a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var fe=vp(m,Y,i);Wh(m,fe);break e;case 1:B=Y;var Q=m.type,xe=m.stateNode;if((m.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||xe!==null&&typeof xe.componentDidCatch=="function"&&(Dr===null||!Dr.has(xe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ge=_p(m,B,i);Wh(m,Ge);break e}}m=m.return}while(m!==null)}Qp(a)}catch(ht){i=ht,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function Zp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function Pu(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Tn===null||(ls&268435455)===0&&(il&268435455)===0||Fr(Tn,Pn)}function cl(n,i){var a=$t;$t|=2;var c=Zp();(Tn!==n||Pn!==i)&&(or=null,us(n,i));do try{Ox();break}catch(d){Kp(n,d)}while(!0);if(jc(),$t=a,nl.current=c,xn!==null)throw Error(t(261));return Tn=null,Pn=0,Mn}function Ox(){for(;xn!==null;)Jp(xn)}function kx(){for(;xn!==null&&!Oi();)Jp(xn)}function Jp(n){var i=nm(n.alternate,n,ai);n.memoizedProps=n.pendingProps,i===null?Qp(n):xn=i,Mu.current=null}function Qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Nx(a,i,ai),a!==null){xn=a;return}}else{if(a=Px(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);Mn===0&&(Mn=5)}function ds(n,i,a){var c=ut,d=mi.transition;try{mi.transition=null,ut=1,Bx(n,i,a,c)}finally{mi.transition=d,ut=c}return null}function Bx(n,i,a,c){do Zs();while(Lr!==null);if(($t&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Gt(n,m),n===Tn&&(xn=Tn=null,Pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,im(J,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=mi.transition,mi.transition=null;var T=ut;ut=1;var B=$t;$t|=4,Mu.current=null,Dx(n,a),Gp(a,n),sx(Pc),yo=!!Nc,Pc=Nc=null,n.current=a,Lx(a),Jt(),$t=B,ut=T,mi.transition=m}else n.current=a;if(sl&&(sl=!1,Lr=n,al=d),m=n.pendingLanes,m===0&&(Dr=null),nt(a.stateNode),Jn(n,Xt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(rl)throw rl=!1,n=bu,bu=null,n;return(al&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Tu?qa++:(qa=0,Tu=n):qa=0,Rr(),null}function Zs(){if(Lr!==null){var n=Dt(al),i=mi.transition,a=ut;try{if(mi.transition=null,ut=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,al=0,($t&6)!==0)throw Error(t(331));var d=$t;for($t|=4,rt=n.current;rt!==null;){var m=rt,T=m.child;if((rt.flags&16)!==0){var B=m.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var Ee=B[Y];for(rt=Ee;rt!==null;){var ke=rt;switch(ke.tag){case 0:case 11:case 15:Xa(8,ke,m)}var ze=ke.child;if(ze!==null)ze.return=ke,rt=ze;else for(;rt!==null;){ke=rt;var Oe=ke.sibling,it=ke.return;if(kp(ke),ke===Ee){rt=null;break}if(Oe!==null){Oe.return=it,rt=Oe;break}rt=it}}}var lt=m.alternate;if(lt!==null){var dt=lt.child;if(dt!==null){lt.child=null;do{var pn=dt.sibling;dt.sibling=null,dt=pn}while(dt!==null)}}rt=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,rt=T;else e:for(;rt!==null;){if(m=rt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xa(9,m,m.return)}var fe=m.sibling;if(fe!==null){fe.return=m.return,rt=fe;break e}rt=m.return}}var Q=n.current;for(rt=Q;rt!==null;){T=rt;var xe=T.child;if((T.subtreeFlags&2064)!==0&&xe!==null)xe.return=T,rt=xe;else e:for(T=Q;rt!==null;){if(B=rt,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:tl(9,B)}}catch(ht){hn(B,B.return,ht)}if(B===T){rt=null;break e}var Ge=B.sibling;if(Ge!==null){Ge.return=B.return,rt=Ge;break e}rt=B.return}}if($t=d,Rr(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(me,n)}catch{}c=!0}return c}finally{ut=a,mi.transition=i}}return!1}function em(n,i,a){i=Ys(a,i),i=vp(n,i,1),n=Pr(n,i,1),i=Vn(),n!==null&&(qe(n,1,i),Jn(n,i))}function hn(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){n=Ys(a,n),n=_p(i,n,1),i=Pr(i,n,1),n=Vn(),i!==null&&(qe(i,1,n),Jn(i,n));break}}i=i.return}}function zx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Vn(),n.pingedLanes|=n.suspendedLanes&a,Tn===n&&(Pn&a)===a&&(Mn===4||Mn===3&&(Pn&130023424)===Pn&&500>Xt()-wu?us(n,0):Eu|=a),Jn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var a=Vn();n=rr(n,i),n!==null&&(qe(n,i,a),Jn(n,a))}function Vx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function Hx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)Kn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kn=!1,Rx(n,i,a);Kn=(n.flags&131072)!==0}else Kn=!1,ln&&(i.flags&1048576)!==0&&Uh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var d=Bs(i,Dn.current);Ws(i,a),d=tu(null,i,c,n,d,a);var m=nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(c)?(m=!0,Uo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=Zo,i.stateNode=d,d._reactInternals=i,lu(i,c,n,a),i=fu(null,i,c,!0,m,a)):(i.tag=0,ln&&m&&kc(i),zn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=jx(c),n=Ai(c,n),d){case 0:i=du(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=wp(null,i,c,Ai(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),du(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Cp(n,i,c,d,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,jh(n,i),jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ys(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(si=Tr(i.stateNode.containerInfo.firstChild),ri=i,ln=!0,Ti=null,a=Hh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=ar(n,i,a);break e}zn(n,i,c,a)}i=i.child}return i;case 5:return Yh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ic(c,d)?T=null:m!==null&&Ic(c,m)&&(i.flags|=32),Ap(n,i),zn(n,i,T,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return Pp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):zn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Ep(n,i,c,d,a);case 7:return zn(n,i,i.pendingProps,a),i.child;case 8:return zn(n,i,i.pendingProps.children,a),i.child;case 12:return zn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,nn(Vo,c._currentValue),c._currentValue=T,m!==null)if(bi(m.value,T)){if(m.children===d.children&&!$n.current){i=ar(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===c){if(m.tag===1){Y=sr(-1,a&-a),Y.tag=2;var Ee=m.updateQueue;if(Ee!==null){Ee=Ee.shared;var ke=Ee.pending;ke===null?Y.next=Y:(Y.next=ke.next,ke.next=Y),Ee.pending=Y}}m.lanes|=a,Y=m.alternate,Y!==null&&(Y.lanes|=a),Xc(m.return,a,i),B.lanes|=a;break}Y=Y.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Xc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}zn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=hi(d),c=c(d),i.flags|=1,zn(n,i,c,a),i.child;case 14:return c=i.type,d=Ai(c,i.pendingProps),d=Ai(c.type,d),wp(n,i,c,d,a);case 15:return bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Qo(n,i),i.tag=1,qn(c)?(n=!0,Uo(i)):n=!1,Ws(i,a),gp(i,c,d),lu(i,c,d,a),fu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Rs(n,i)}function Gx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,c){return new Gx(n,i,a,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jx(n){if(typeof n=="function")return Iu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===X)return 14}return 2}function Or(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Iu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return fs(a.children,d,m,i);case w:T=8,d|=8;break;case L:return n=gi(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case te:return n=gi(13,a,i,d),n.elementType=te,n.lanes=m,n;case _e:return n=gi(19,a,i,d),n.elementType=_e,n.lanes=m,n;case K:return dl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:T=10;break e;case V:T=9;break e;case q:T=11;break e;case X:T=14;break e;case oe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function fs(n,i,a,c){return n=gi(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=gi(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Wx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,d,m,T,B,Y){return n=new Wx(n,i,a,B,Y),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function Xx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Cr;n=n._reactInternals;e:{if(ni(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Ih(n,a,i)}return i}function sm(n,i,a,c,d,m,T,B,Y){return n=Uu(a,c,!0,n,d,m,T,B,Y),n.context=rm(null),a=n.current,c=Vn(),d=Ur(a),m=sr(c,d),m.callback=i??null,Pr(a,m,d),n.current.lanes=d,qe(n,d,c),Jn(n,c),n}function fl(n,i,a,c){var d=i.current,m=Vn(),T=Ur(d);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=sr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Pr(d,i,T),n!==null&&(Ni(n,d,T,m),Go(n,d,T)),T}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function Yx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}pl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){fl(null,n,null,null)}),i[er]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Et();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ki.length&&i!==0&&i<ki[a].priority;a++);ki.splice(a,0,n),a===0&&Yf(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function $x(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var Ee=hl(T);m.call(Ee)}}var T=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=T,n[er]=T.current,Da(n.nodeType===8?n.parentNode:n),cs(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var Ee=hl(Y);B.call(Ee)}}var Y=Uu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=Y,n[er]=Y.current,Da(n.nodeType===8?n.parentNode:n),cs(function(){fl(i,Y,a,c)}),Y}function gl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var B=d;d=function(){var Y=hl(T);B.call(Y)}}fl(i,T,n,d)}else T=$x(a,i,n,d,c);return hl(T)}vt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=b(i.pendingLanes);a!==0&&(xt(i,a|1),Jn(i,Xt()),($t&6)===0&&(Ks=Xt()+500,Rr()))}break;case 13:cs(function(){var c=rr(n,1);if(c!==null){var d=Vn();Ni(c,n,1,d)}}),Fu(n,1)}},Lt=function(n){if(n.tag===13){var i=rr(n,134217728);if(i!==null){var a=Vn();Ni(i,n,134217728,a)}Fu(n,134217728)}},on=function(n){if(n.tag===13){var i=Ur(n),a=rr(n,i);if(a!==null){var c=Vn();Ni(a,n,i,c)}Fu(n,i)}},Et=function(){return ut},yn=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},et=function(n,i,a){switch(i){case"input":if(Bt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Do(c);if(!d)throw Error(t(90));mt(c),Bt(c,d)}}}break;case"textarea":He(n,a);break;case"select":i=a.value,i!=null&&St(n,!!a.multiple,i,!1)}},Ie=Ru,Re=cs;var qx={usingClientEntryPoint:!1,Events:[Fa,Os,Do,ne,Pe,Ru]},Ka={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{me=xl.inject(Kx),je=xl}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx,Qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(t(200));return Xx(n,i,null,a)},Qn.createRoot=function(n,i){if(!ku(n))throw Error(t(299));var a=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,d),n[er]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ou(i)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Zr(i),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return cs(n)},Qn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Qn.hydrateRoot=function(n,i,a){if(!ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=sm(i,null,n,1,a??null,d,!1,m,T),n[er]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pl(i)},Qn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Qn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1},Qn.unstable_batchedUpdates=Ru,Qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var gm;function sv(){if(gm)return Vu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=rv(),Vu.exports}var xm;function av(){if(xm)return vl;xm=1;var s=sv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var ov=av();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="184",lv=0,vm=1,cv=2,jl=1,uv=2,so=3,Kr=0,ti=1,hr=2,mr=0,pa=1,_m=2,ym=3,Sm=4,dv=5,_s=100,fv=101,hv=102,pv=103,mv=104,gv=200,xv=201,vv=202,_v=203,Rd=204,Nd=205,yv=206,Sv=207,Mv=208,Ev=209,wv=210,bv=211,Tv=212,Av=213,Cv=214,Pd=0,Id=1,Dd=2,ga=3,Ld=4,Ud=5,Fd=6,Od=7,R0=0,Rv=1,Nv=2,$i=0,N0=1,P0=2,I0=3,D0=4,L0=5,U0=6,F0=7,O0=300,ws=301,xa=302,ju=303,Wu=304,ac=306,kd=1e3,pr=1001,Bd=1002,In=1003,Pv=1004,_l=1005,Bn=1006,Xu=1007,Ss=1008,Mi=1009,k0=1010,B0=1011,po=1012,Tf=1013,Zi=1014,Xi=1015,xr=1016,Af=1017,Cf=1018,mo=1020,z0=35902,V0=35899,H0=1021,G0=1022,Ui=1023,vr=1026,Ms=1027,j0=1028,Rf=1029,bs=1030,Nf=1031,Pf=1033,Wl=33776,Xl=33777,Yl=33778,$l=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,jd=36196,Wd=37492,Xd=37496,Yd=37488,$d=37489,Kl=37490,qd=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Zl=36285,gf=36286,Iv=3200,Mm=0,Dv=1,Yr="",yi="srgb",Jl="srgb-linear",Ql="linear",Qt="srgb",Js=7680,Em=519,Lv=512,Uv=513,Fv=514,If=515,Ov=516,kv=517,Df=518,Bv=519,wm=35044,bm="300 es",Yi=2e3,ec=2001;function zv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vv(){const s=tc("canvas");return s.style.display="block",s}const Tm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function W0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function wt(...s){s=W0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qt(...s){s=W0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xf(...s){const e=s.join(" ");e in Tm||(Tm[e]=!0,wt(...s))}function Hv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Gv={[Pd]:Id,[Dd]:Fd,[Ld]:Od,[ga]:Ud,[Id]:Pd,[Fd]:Dd,[Od]:Ld,[Ud]:ga};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,vf=180/Math.PI;function go(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function jt(s,e,t){return Math.max(e,Math.min(t,s))}function jv(s,e){return(s%e+e)%e}function $u(s,e,t){return(1-t)*s+t*e}function Ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let bt=Vf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],A=l[u+2],I=l[u+3];if(S!==I||h!==x||p!==M||v!==A){let y=h*x+p*M+v*A+S*I;y<0&&(x=-x,M=-M,A=-A,I=-I,y=-y);let _=1-f;if(y<.9995){const D=Math.acos(y),R=Math.sin(D);_=Math.sin(_*D)/R,f=Math.sin(f*D)/R,h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+I*f}else{h=h*_+x*f,p=p*_+M*f,v=v*_+A*f,S=S*_+I*f;const D=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=D,p*=D,v*=D,S*=D}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],A=l[u+3];return e[t]=f*A+v*S+h*M-p*x,e[t+1]=h*A+v*x+p*S-f*M,e[t+2]=p*A+v*M+f*x-h*S,e[t+3]=v*A-f*S-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),A=h(l/2);switch(u){case"XYZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"YXZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"ZXY":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"ZYX":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"YZX":this._x=x*v*S+p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S-x*M*A;break;case"XZY":this._x=x*v*S-p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S+x*M*A;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hf=class Hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hf.prototype.isVector3=!0;let ie=Hf;const qu=new ie,Cm=new ya,Gf=class Gf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],A=r[8],I=o[0],y=o[3],_=o[6],D=o[1],R=o[4],N=o[7],z=o[2],P=o[5],F=o[8];return l[0]=u*I+f*D+h*z,l[3]=u*y+f*R+h*P,l[6]=u*_+f*N+h*F,l[1]=p*I+v*D+S*z,l[4]=p*y+v*R+S*P,l[7]=p*_+v*N+S*F,l[2]=x*I+M*D+A*z,l[5]=x*y+M*R+A*P,l[8]=x*_+M*N+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,x=f*h-v*l,M=p*l-u*h,A=t*S+r*x+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=S*I,e[1]=(o*p-v*r)*I,e[2]=(f*r-o*u)*I,e[3]=x*I,e[4]=(v*t-o*h)*I,e[5]=(o*l-f*t)*I,e[6]=M*I,e[7]=(r*h-p*t)*I,e[8]=(u*t-r*l)*I,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let Ft=Gf;const Ku=new Ft,Rm=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Qt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:Qt,toXYZ:Rm,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),s}const Yt=Wv();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class Xv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=tc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yv=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let $v=0;const Ju=new ie;class Gn extends As{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=pr,o=pr,l=Bn,u=Ss,f=Ui,h=Mi,p=Gn.DEFAULT_ANISOTROPY,v=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=go(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=O0;Gn.DEFAULT_ANISOTROPY=1;const jf=class jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],x=h[1],M=h[5],A=h[9],I=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-I)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+I)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,N=(M+1)/2,z=(_+1)/2,P=(v+x)/4,F=(S+I)/4,w=(A+y)/4;return R>N&&R>z?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=P/r,l=F/r):N>z?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=P/o,l=w/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=F/l,o=w/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-A)*(y-A)+(S-I)*(S-I)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(y-A)/D,this.y=(S-I)/D,this.z=(x-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this.w=jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this.w=jt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;let mn=jf;class qv extends As{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Gn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends qv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class X0 extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kv extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=class sc{constructor(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y)}set(e,t,r,o,l,u,f,h,p,v,S,x,M,A,I,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=A,_[11]=I,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,A=f*v,I=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+A*p,t[5]=x-I*p,t[9]=-f*h,t[2]=I-x*p,t[6]=A+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,A=p*v,I=p*S;t[0]=x+I*f,t[4]=A*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-A,t[6]=I+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,A=p*v,I=p*S;t[0]=x-I*f,t[4]=-u*S,t[8]=A+M*f,t[1]=M+A*f,t[5]=u*v,t[9]=I-x*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,A=f*v,I=f*S;t[0]=h*v,t[4]=A*p-M,t[8]=x*p+I,t[1]=h*S,t[5]=I*p+x,t[9]=M*p-A,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,A=f*h,I=f*p;t[0]=h*v,t[4]=I-x*S,t[8]=A*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+A,t[10]=x-I*S}else if(e.order==="XZY"){const x=u*h,M=u*p,A=f*h,I=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=x*S+I,t[5]=u*v,t[9]=M*S-A,t[2]=A*S-M,t[6]=f*v,t[10]=I*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Jv)}lookAt(e,t,r){const o=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Br.crossVectors(r,oi),Br.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Br.crossVectors(r,oi)),Br.normalize(),yl.crossVectors(oi,Br),o[0]=Br.x,o[4]=yl.x,o[8]=oi.x,o[1]=Br.y,o[5]=yl.y,o[9]=oi.y,o[2]=Br.z,o[6]=yl.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],A=r[2],I=r[6],y=r[10],_=r[14],D=r[3],R=r[7],N=r[11],z=r[15],P=o[0],F=o[4],w=o[8],L=o[12],W=o[1],V=o[5],q=o[9],te=o[13],_e=o[2],X=o[6],oe=o[10],K=o[14],Z=o[3],Me=o[7],ue=o[11],k=o[15];return l[0]=u*P+f*W+h*_e+p*Z,l[4]=u*F+f*V+h*X+p*Me,l[8]=u*w+f*q+h*oe+p*ue,l[12]=u*L+f*te+h*K+p*k,l[1]=v*P+S*W+x*_e+M*Z,l[5]=v*F+S*V+x*X+M*Me,l[9]=v*w+S*q+x*oe+M*ue,l[13]=v*L+S*te+x*K+M*k,l[2]=A*P+I*W+y*_e+_*Z,l[6]=A*F+I*V+y*X+_*Me,l[10]=A*w+I*q+y*oe+_*ue,l[14]=A*L+I*te+y*K+_*k,l[3]=D*P+R*W+N*_e+z*Z,l[7]=D*F+R*V+N*X+z*Me,l[11]=D*w+R*q+N*oe+z*ue,l[15]=D*L+R*te+N*K+z*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],A=e[3],I=e[7],y=e[11],_=e[15],D=h*M-p*x,R=f*M-p*S,N=f*x-h*S,z=u*M-p*v,P=u*x-h*v,F=u*S-f*v;return t*(I*D-y*R+_*N)-r*(A*D-y*z+_*P)+o*(A*R-I*z+_*F)-l*(A*N-I*P+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],A=e[12],I=e[13],y=e[14],_=e[15],D=t*f-r*u,R=t*h-o*u,N=t*p-l*u,z=r*h-o*f,P=r*p-l*f,F=o*p-l*h,w=v*I-S*A,L=v*y-x*A,W=v*_-M*A,V=S*y-x*I,q=S*_-M*I,te=x*_-M*y,_e=D*te-R*q+N*V+z*W-P*L+F*w;if(_e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/_e;return e[0]=(f*te-h*q+p*V)*X,e[1]=(o*q-r*te-l*V)*X,e[2]=(I*F-y*P+_*z)*X,e[3]=(x*P-S*F-M*z)*X,e[4]=(h*W-u*te-p*L)*X,e[5]=(t*te-o*W+l*L)*X,e[6]=(y*N-A*F-_*R)*X,e[7]=(v*F-x*N+M*R)*X,e[8]=(u*q-f*W+p*w)*X,e[9]=(r*W-t*q-l*w)*X,e[10]=(A*P-I*N+_*D)*X,e[11]=(S*N-v*P-M*D)*X,e[12]=(f*L-u*V-h*w)*X,e[13]=(t*V-r*L+o*w)*X,e[14]=(I*R-A*z-y*D)*X,e[15]=(v*z-S*R+x*D)*X,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,x=l*p,M=l*v,A=l*S,I=u*v,y=u*S,_=f*S,D=h*p,R=h*v,N=h*S,z=r.x,P=r.y,F=r.z;return o[0]=(1-(I+_))*z,o[1]=(M+N)*z,o[2]=(A-R)*z,o[3]=0,o[4]=(M-N)*P,o[5]=(1-(x+_))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(A+R)*F,o[9]=(y-D)*F,o[10]=(1-(x+I))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Pi.copy(this);const p=1/u,v=1/f,S=1/h;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=S,Pi.elements[9]*=S,Pi.elements[10]*=S,t.setFromRotationMatrix(Pi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Yi,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let A,I;if(h)A=l/(u-l),I=u*l/(u-l);else if(f===Yi)A=-(u+l)/(u-l),I=-2*u*l/(u-l);else if(f===ec)A=-u/(u-l),I=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=I,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Yi,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let A,I;if(h)A=1/(u-l),I=u/(u-l);else if(f===Yi)A=-2/(u-l),I=-(u+l)/(u-l);else if(f===ec)A=-1/(u-l),I=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=I,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let _n=sc;const ea=new ie,Pi=new _n,Zv=new ie(0,0,0),Jv=new ie(1,1,1),Br=new ie,yl=new ie,oi=new ie,Pm=new _n,Im=new ya;class Ts{constructor(e=0,t=0,r=0,o=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-jt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";let Y0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qv=0;const Dm=new ie,ta=new ya,lr=new _n,Sl=new ie,Qa=new ie,e_=new ie,t_=new ya,Lm=new ie(1,0,0),Um=new ie(0,1,0),Fm=new ie(0,0,1),Om={type:"added"},n_={type:"removed"},na={type:"childadded",child:null},Qu={type:"childremoved",child:null};class ci extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new ie,t=new Ts,r=new ya,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new Ft}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Qa,Sl,this.up):lr.lookAt(Sl,Qa,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(lr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ci.DEFAULT_UP=new ie(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Es extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i_={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const I of e.hand.values()){const y=t.getJointPose(I,r),_=this._getHandJoint(p,I);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Es;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class en{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Yt.workingColorSpace){if(e=jv(e,1),t=jt(t,0,1),r=jt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=td(u,l,e+1/3),this.g=td(u,l,e),this.b=td(u,l,e-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(e,t=yi){function r(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const r=$0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Yt.workingToColorSpace(kn.copy(this),e),Math.round(jt(kn.r*255,0,255))*65536+Math.round(jt(kn.g*255,0,255))*256+Math.round(jt(kn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(kn.copy(this),t);const r=kn.r,o=kn.g,l=kn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=yi){Yt.workingToColorSpace(kn.copy(this),e);const t=kn.r,r=kn.g,o=kn.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Ml);const r=$u(zr.h,Ml.h,t),o=$u(zr.s,Ml.s,t),l=$u(zr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new en;en.NAMES=$0;class r_ extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ii=new ie,cr=new ie,nd=new ie,ur=new ie,ia=new ie,ra=new ie,km=new ie,id=new ie,rd=new ie,sd=new ie,ad=new mn,od=new mn,ld=new mn;class Li{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ii.subVectors(e,t),o.cross(Ii);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ii.subVectors(o,t),cr.subVectors(r,t),nd.subVectors(e,t);const u=Ii.dot(Ii),f=Ii.dot(cr),h=Ii.dot(nd),p=cr.dot(cr),v=cr.dot(nd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(p*h-f*v)*x,A=(u*v-f*h)*x;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,ur)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ur.x),h.addScaledVector(u,ur.y),h.addScaledVector(f,ur.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ad,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ld,l.z),u}static isFrontFacing(e,t,r,o){return Ii.subVectors(r,t),cr.subVectors(e,t),Ii.cross(cr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ii.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Li.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),id.subVectors(e,r);const h=ia.dot(id),p=ra.dot(id);if(h<=0&&p<=0)return t.copy(r);rd.subVectors(e,o);const v=ia.dot(rd),S=ra.dot(rd);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);sd.subVectors(e,l);const M=ia.dot(sd),A=ra.dot(sd);if(A>=0&&M<=A)return t.copy(l);const I=M*p-h*A;if(I<=0&&p>=0&&A<=0)return f=p/(p-A),t.copy(r).addScaledVector(ra,f);const y=v*A-M*S;if(y<=0&&S-v>=0&&M-A>=0)return km.subVectors(l,o),f=(S-v)/(S-v+(M-A)),t.copy(o).addScaledVector(km,f);const _=1/(y+I+x);return u=I*_,f=x*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(l,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),wl.subVectors(this.max,eo),sa.subVectors(e.a,eo),aa.subVectors(e.b,eo),oa.subVectors(e.c,eo),Vr.subVectors(aa,sa),Hr.subVectors(oa,aa),hs.subVectors(sa,oa);let t=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-hs.z,hs.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,hs.z,0,-hs.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-hs.y,hs.x,0];return!cd(t,sa,aa,oa,wl)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,sa,aa,oa,wl))?!1:(bl.crossVectors(Vr,Hr),t=[bl.x,bl.y,bl.z],cd(t,sa,aa,oa,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Di=new ie,El=new xo,sa=new ie,aa=new ie,oa=new ie,Vr=new ie,Hr=new ie,hs=new ie,eo=new ie,wl=new ie,bl=new ie,ps=new ie;function cd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ps.fromArray(s,l);const f=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),h=e.dot(ps),p=t.dot(ps),v=r.dot(ps);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const vn=new ie,Tl=new bt;let s_=0;class Ki extends As{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array),o=ei(o,this.array),l=ei(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class q0 extends Ki{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class K0 extends Ki{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gn extends Ki{constructor(e,t,r){super(new Float32Array(e),t,r)}}const a_=new xo,to=new ie,ud=new ie;class Uf{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):a_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(ud)),this.expandByPoint(to.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o_=0;const xi=new _n,dd=new ci,la=new ie,li=new xo,no=new xo,Cn=new ie;class ui extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?K0:q0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,r){return xi.makeTranslation(e,t,r),this.applyMatrix4(xi),this}scale(e,t,r){return xi.makeScale(e,t,r),this.applyMatrix4(xi),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];li.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(li.min,no.min),li.expandByPoint(Cn),Cn.addVectors(li.max,no.max),li.expandByPoint(Cn)):(li.expandByPoint(no.min),li.expandByPoint(no.max))}li.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Cn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Cn.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Cn.add(la)),o=Math.max(o,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new ie,h[w]=new ie;const p=new ie,v=new ie,S=new ie,x=new bt,M=new bt,A=new bt,I=new ie,y=new ie;function _(w,L,W){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),S.fromBufferAttribute(r,W),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,L),A.fromBufferAttribute(l,W),v.sub(p),S.sub(p),M.sub(x),A.sub(x);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(I.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(V),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(V),f[w].add(I),f[L].add(I),f[W].add(I),h[w].add(y),h[L].add(y),h[W].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,L=D.length;w<L;++w){const W=D[w],V=W.start,q=W.count;for(let te=V,_e=V+q;te<_e;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const R=new ie,N=new ie,z=new ie,P=new ie;function F(w){z.fromBufferAttribute(o,w),P.copy(z);const L=f[w];R.copy(L),R.sub(z.multiplyScalar(z.dot(L))).normalize(),N.crossVectors(P,L);const V=N.dot(h[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,V)}for(let w=0,L=D.length;w<L;++w){const W=D[w],V=W.start,q=W.count;for(let te=V,_e=V+q;te<_e;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,p=new ie,v=new ie,S=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),I=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,I),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,I),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(I,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,x=new p.constructor(h.length*v);let M=0,A=0;for(let I=0,y=h.length;I<y;I++){f.isInterleavedBufferAttribute?M=h[I]*f.data.stride+f.offset:M=h[I]*v;for(let _=0;_<v;_++)x[A++]=p[M++]}return new Ki(x,v,S)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let l_=0;class oc extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=go(),this.name="",this.type="Material",this.blending=pa,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Nd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new en(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new ie,fd=new ie,Al=new ie,Gr=new ie,hd=new ie,Cl=new ie,pd=new ie;class c_{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Al),f=Gr.dot(this.direction),h=-Gr.dot(Al),p=Gr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,A;if(v>0)if(S=u*h-f,x=u*f-h,A=l*v,S>=0)if(x>=-A)if(x<=A){const I=1/v;S*=I,x*=I,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+p}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;else x<=-A?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p):x<=A?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+p):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+p);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(fd).addScaledVector(Al,x),M}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const r=fr.dot(this.direction),o=fr.dot(fr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),Cl.subVectors(r,e),pd.crossVectors(hd,Cl);let u=this.direction.dot(pd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Gr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Gr,Cl));if(h<0)return null;const p=f*this.direction.dot(hd.cross(Gr));if(p<0||h+p>u)return null;const v=-f*Gr.dot(pd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qr extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new en(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bm=new _n,ms=new c_,Rl=new Uf,zm=new ie,Nl=new ie,Pl=new ie,Il=new ie,md=new ie,Dl=new ie,Vm=new ie,Ll=new ie;class jn extends ci{constructor(e=new ui,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(md.fromBufferAttribute(S,e),u?Dl.addScaledVector(md,v):Dl.addScaledVector(md.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Rl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Rl,zm)===null||ms.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,z=R;N<z;N+=3){const P=f.getX(N),F=f.getX(N+1),w=f.getX(N+2);o=Ul(this,_,e,r,p,v,S,P,F,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(f.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const D=f.getX(y),R=f.getX(y+1),N=f.getX(y+2);o=Ul(this,u,e,r,p,v,S,D,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,z=R;N<z;N+=3){const P=N,F=N+1,w=N+2;o=Ul(this,_,e,r,p,v,S,P,F,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(h.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const D=y,R=y+1,N=y+2;o=Ul(this,u,e,r,p,v,S,D,R,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function u_(s,e,t,r,o,l,u,f){let h;if(e.side===ti?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Kr,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Ul(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Nl),s.getVertexPosition(h,Pl),s.getVertexPosition(p,Il);const v=u_(s,e,t,r,Nl,Pl,Il,Vm);if(v){const S=new ie;Li.getBarycoord(Vm,Nl,Pl,Il,S),o&&(v.uv=Li.getInterpolatedAttribute(o,f,h,p,S,new bt)),l&&(v.uv1=Li.getInterpolatedAttribute(l,f,h,p,S,new bt)),u&&(v.normal=Li.getInterpolatedAttribute(u,f,h,p,S,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};Li.getNormal(Nl,Pl,Il,x.normal),v.face=x,v.barycoord=S}return v}class d_ extends Gn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=In,v=In,S,x){super(null,u,f,h,p,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new ie,f_=new ie,h_=new Ft;class vs{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||h_.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Uf,p_=new bt(.5,.5),Fl=new ie;class Z0{constructor(e=new vs,t=new vs,r=new vs,o=new vs,l=new vs,u=new vs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],x=l[6],M=l[7],A=l[8],I=l[9],y=l[10],_=l[11],D=l[12],R=l[13],N=l[14],z=l[15];if(o[0].setComponents(p-u,M-v,_-A,z-D).normalize(),o[1].setComponents(p+u,M+v,_+A,z+D).normalize(),o[2].setComponents(p+f,M+S,_+I,z+R).normalize(),o[3].setComponents(p-f,M-S,_-I,z-R).normalize(),r)o[4].setComponents(h,x,y,N).normalize(),o[5].setComponents(p-h,M-x,_-y,z-N).normalize();else if(o[4].setComponents(p-h,M-x,_-y,z-N).normalize(),t===Yi)o[5].setComponents(p+h,M+x,_+y,z+N).normalize();else if(t===ec)o[5].setComponents(h,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=p_.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class J0 extends Gn{constructor(e=[],t=ws,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends Gn{constructor(e,t,r=Zi,o,l,u,f=In,h=In,p,v=vr,S=1){if(v!==vr&&v!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class m_ extends va{constructor(e,t=Zi,r=ws,o,l,u=In,f=In,h,p=vr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Q0 extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends ui{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let x=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(S,2));function A(I,y,_,D,R,N,z,P,F,w,L){const W=N/F,V=z/w,q=N/2,te=z/2,_e=P/2,X=F+1,oe=w+1;let K=0,Z=0;const Me=new ie;for(let ue=0;ue<oe;ue++){const k=ue*V-te;for(let le=0;le<X;le++){const Xe=le*W-q;Me[I]=Xe*D,Me[y]=k*R,Me[_]=_e,p.push(Me.x,Me.y,Me.z),Me[I]=0,Me[y]=0,Me[_]=P>0?1:-1,v.push(Me.x,Me.y,Me.z),S.push(le/F),S.push(1-ue/w),K+=1}}for(let ue=0;ue<w;ue++)for(let k=0;k<F;k++){const le=x+k+X*ue,Xe=x+k+X*(ue+1),Ye=x+(k+1)+X*(ue+1),De=x+(k+1)+X*ue;h.push(le,Xe,De),h.push(Xe,Ye,De),Z+=6}f.addGroup(M,Z,L),M+=Z,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ff extends ui{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let A=0;const I=[],y=r/2;let _=0;D(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(M,2));function D(){const N=new ie,z=new ie;let P=0;const F=(t-e)/r;for(let w=0;w<=l;w++){const L=[],W=w/l,V=W*(t-e)+e;for(let q=0;q<=o;q++){const te=q/o,_e=te*h+f,X=Math.sin(_e),oe=Math.cos(_e);z.x=V*X,z.y=-W*r+y,z.z=V*oe,S.push(z.x,z.y,z.z),N.set(X,F,oe).normalize(),x.push(N.x,N.y,N.z),M.push(te,1-W),L.push(A++)}I.push(L)}for(let w=0;w<o;w++)for(let L=0;L<l;L++){const W=I[L][w],V=I[L+1][w],q=I[L+1][w+1],te=I[L][w+1];(e>0||L!==0)&&(v.push(W,V,te),P+=3),(t>0||L!==l-1)&&(v.push(V,q,te),P+=3)}p.addGroup(_,P,0),_+=P}function R(N){const z=A,P=new bt,F=new ie;let w=0;const L=N===!0?e:t,W=N===!0?1:-1;for(let q=1;q<=o;q++)S.push(0,y*W,0),x.push(0,W,0),M.push(.5,.5),A++;const V=A;for(let q=0;q<=o;q++){const _e=q/o*h+f,X=Math.cos(_e),oe=Math.sin(_e);F.x=L*oe,F.y=y*W,F.z=L*X,S.push(F.x,F.y,F.z),x.push(0,W,0),P.x=X*.5+.5,P.y=oe*.5*W+.5,M.push(P.x,P.y),A++}for(let q=0;q<o;q++){const te=z+q,_e=V+q;N===!0?v.push(_e,_e+1,te):v.push(_e+1,_e,te),w+=3}p.addGroup(_,w,N===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Ff{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){wt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new bt:new ie);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ie,o=[],l=[],u=[],f=new ie,h=new _n;for(let M=0;M<=e;M++){const A=M/e;o[M]=this.getTangentAt(A,new ie)}l[0]=new ie,u[0]=new ie;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const A=Math.acos(jt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,A))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(jt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let A=1;A<=e;A++)l[A].applyMatrix4(h.makeRotationAxis(o[A],M*A)),u[A].crossVectors(o[A],l[A])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eg extends _r{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new bt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=p-this.aY;h=x*v-M*S+this.aX,p=x*S+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends eg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,v,S){let x=(u-l)/p-(f-l)/(p+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Hm=new ie,Gm=new ie,xd=new Of,vd=new Of,_d=new Of;class kf extends _r{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ie){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Gm.subVectors(o[0],o[1]).add(o[0]),p=Gm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Hm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Hm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(p.distanceToSquared(S),M),I=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);I<1e-4&&(I=1),A<1e-4&&(A=I),y<1e-4&&(y=I),xd.initNonuniformCatmullRom(p.x,S.x,x.x,v.x,A,I,y),vd.initNonuniformCatmullRom(p.y,S.y,x.y,v.y,A,I,y),_d.initNonuniformCatmullRom(p.z,S.z,x.z,v.z,A,I,y)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,S.x,x.x,v.x,this.tension),vd.initCatmullRom(p.y,S.y,x.y,v.y,this.tension),_d.initCatmullRom(p.z,S.z,x.z,v.z,this.tension));return r.set(xd.calc(h),vd.calc(h),_d.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function x_(s,e){const t=1-s;return t*t*e}function v_(s,e){return 2*(1-s)*s*e}function __(s,e){return s*s*e}function uo(s,e,t,r){return x_(s,e)+v_(s,t)+__(s,r)}function y_(s,e){const t=1-s;return t*t*t*e}function S_(s,e){const t=1-s;return 3*t*t*s*e}function M_(s,e){return 3*(1-s)*s*s*e}function E_(s,e){return s*s*s*e}function fo(s,e,t,r,o){return y_(s,e)+S_(s,t)+M_(s,r)+E_(s,o)}class w_ extends _r{constructor(e=new bt,t=new bt,r=new bt,o=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new bt){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends _r{constructor(e=new ie,t=new ie,r=new ie,o=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T_ extends _r{constructor(e=new bt,t=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new bt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new bt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends _r{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends _r{constructor(e=new bt,t=new bt,r=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new bt){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tg extends _r{constructor(e=new ie,t=new ie,r=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends _r{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new bt){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(jm(f,h.x,p.x,v.x,S.x),jm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new bt().fromArray(o))}return this}}var N_=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:kf,CubicBezierCurve:w_,CubicBezierCurve3:b_,EllipseCurve:eg,LineCurve:T_,LineCurve3:A_,QuadraticBezierCurve:C_,QuadraticBezierCurve3:tg,SplineCurve:R_});class lc extends ui{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,x=t/h,M=[],A=[],I=[],y=[];for(let _=0;_<v;_++){const D=_*x-u;for(let R=0;R<p;R++){const N=R*S-l;A.push(N,-D,0),I.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const R=D+p*_,N=D+p*(_+1),z=D+1+p*(_+1),P=D+1+p*_;M.push(R,N,P),M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new gn(A,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bf extends ui{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],v=[];let S=e;const x=(t-e)/o,M=new ie,A=new bt;for(let I=0;I<=o;I++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),p.push(0,0,1),A.x=(M.x/t+1)/2,A.y=(M.y/t+1)/2,v.push(A.x,A.y)}S+=x}for(let I=0;I<o;I++){const y=I*(r+1);for(let _=0;_<r;_++){const D=_+y,R=D,N=D+r+1,z=D+r+2,P=D+1;f.push(R,N,P),f.push(N,z,P)}}this.setIndex(f),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends ui{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ie,x=new ie,M=[],A=[],I=[],y=[];for(let _=0;_<=r;_++){const D=[],R=_/r;let N=0;_===0&&u===0?N=.5/t:_===r&&h===Math.PI&&(N=-.5/t);for(let z=0;z<=t;z++){const P=z/t;S.x=-e*Math.cos(o+P*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+P*l)*Math.sin(u+R*f),A.push(S.x,S.y,S.z),x.copy(S).normalize(),I.push(x.x,x.y,x.z),y.push(P+N,1-R),D.push(p++)}v.push(D)}for(let _=0;_<r;_++)for(let D=0;D<t;D++){const R=v[_][D+1],N=v[_][D],z=v[_+1][D],P=v[_+1][D+1];(_!==0||u>0)&&M.push(R,N,P),(_!==r-1||h<Math.PI)&&M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new gn(A,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zf extends ui{constructor(e=new tg(new ie(-1,-1,0),new ie(-1,1,0),new ie(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ie,h=new ie,p=new bt;let v=new ie;const S=[],x=[],M=[],A=[];I(),this.setIndex(A),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(M,2));function I(){for(let R=0;R<t;R++)y(R);y(l===!1?t:0),D(),_()}function y(R){v=e.getPointAt(R/t,v);const N=u.normals[R],z=u.binormals[R];for(let P=0;P<=o;P++){const F=P/o*Math.PI*2,w=Math.sin(F),L=-Math.cos(F);h.x=L*N.x+w*z.x,h.y=L*N.y+w*z.y,h.z=L*N.z+w*z.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let N=1;N<=o;N++){const z=(o+1)*(R-1)+(N-1),P=(o+1)*R+(N-1),F=(o+1)*R+N,w=(o+1)*(R-1)+N;A.push(z,P,w),A.push(P,F,w)}}function D(){for(let R=0;R<=t;R++)for(let N=0;N<=o;N++)p.x=R/t,p.y=N/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zf(new N_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Wm(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Wm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function P_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const I_={clone:_a,merge:Hn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=P_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class U_ extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F_ extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O_ extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ol=new ie,kl=new ya,Gi=new ie;let ig=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ol,kl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const jr=new ie,Xm=new bt,Ym=new bt;class Si extends ig{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,Ym),t.subVectors(Ym,Xm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rg extends ig{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,ua=1;class k_ extends ci{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Si(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Si(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Si(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new Si(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new Si(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=I,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class B_ extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wf=class Wf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Wf.prototype.isMatrix2=!0;let $m=Wf;function qm(s,e,t,r){const o=z_(r);switch(t){case H0:return s*e;case j0:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case bs:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case G0:return s*e*3/o.components*o.byteLength;case Ui:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Wd:case Yd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Kl:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z_(s){switch(s){case Mi:case k0:return{byteLength:1,components:1};case po:case B0:case xr:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case Zi:case Tf:case Xi:return{byteLength:4,components:1};case z0:case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function V_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<S.length;M++){const A=S[x],I=S[M];I.start<=A.start+A.count+1?A.count=Math.max(A.count,I.start+I.count-A.start):(++x,S[x]=I)}S.length=x+1;for(let M=0,A=S.length;M<A;M++){const I=S[M];s.bufferSubData(p,I.start*v.BYTES_PER_ELEMENT,v,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var H_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
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
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
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
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hy=`vec3 transformedNormal = objectNormal;
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
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,zy=`uniform sampler2D dfgLUT;
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
}`,Vy=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jy=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,NS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
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
}`,qS=`#if DEPTH_PACKING == 3200
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
}`,KS=`#define DISTANCE
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
}`,ZS=`#define DISTANCE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,d1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,x1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,S1=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:j_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:$_,aomap_pars_fragment:q_,batching_pars_vertex:K_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:sy,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:dy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:hy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:xy,colorspace_fragment:vy,colorspace_pars_fragment:_y,envmap_fragment:yy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Ly,envmap_vertex:wy,fog_vertex:by,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Ny,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Iy,lights_pars_begin:Dy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Oy,lights_phong_pars_fragment:ky,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:Vy,lights_fragment_maps:Hy,lights_fragment_end:Gy,lightprobes_pars_fragment:jy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:$y,map_fragment:qy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:eS,morphinstance_vertex:tS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:xS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:yS,dithering_pars_fragment:SS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:bS,shadowmap_vertex:TS,shadowmask_pars_fragment:AS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:NS,skinnormal_vertex:PS,specularmap_fragment:IS,specularmap_pars_fragment:DS,tonemapping_fragment:LS,tonemapping_pars_fragment:US,transmission_fragment:FS,transmission_pars_fragment:OS,uv_pars_fragment:kS,uv_pars_vertex:BS,uv_vertex:zS,worldpos_vertex:VS,background_vert:HS,background_frag:GS,backgroundCube_vert:jS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:YS,depth_vert:$S,depth_frag:qS,distance_vert:KS,distance_frag:ZS,equirect_vert:JS,equirect_frag:QS,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:d1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:x1,shadow_vert:v1,shadow_frag:_1,sprite_vert:y1,sprite_frag:S1},Je={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Hn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new en(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Hn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Hn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Hn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new en(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Hn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Hn([Je.points,Je.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Hn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Hn([Je.common,Je.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Hn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Hn([Je.sprite,Je.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Hn([Je.common,Je.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Hn([Je.lights,Je.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Bl={r:0,b:0,g:0},M1=new _n,ag=new Ft;ag.set(-1,0,0,0,1,0,0,0,1);function E1(s,e,t,r,o,l){const u=new en(0);let f=o===!0?0:1,h,p,v=null,S=0,x=null;function M(D){let R=D.isScene===!0?D.background:null;if(R&&R.isTexture){const N=D.backgroundBlurriness>0;R=e.get(R,N)}return R}function A(D){let R=!1;const N=M(D);N===null?y(u,f):N&&N.isColor&&(y(N,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function I(D,R){const N=M(R);N&&(N.isCubeTexture||N.mapping===ac)?(p===void 0&&(p=new jn(new vo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:_a(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(R.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ag),p.material.toneMapped=Yt.getTransfer(N.colorSpace)!==Qt,(v!==N||S!==N.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new jn(new lc(2,2),new Ji({name:"BackgroundMaterial",uniforms:_a(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(N.colorSpace)!==Qt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,R){D.getRGB(Bl,ng(s)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,R,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,R=1){u.set(D),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:A,addToRenderList:I,dispose:_}}function w1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(V,q,te,_e,X){let oe=!1;const K=S(V,_e,te,q);l!==K&&(l=K,p(l.object)),oe=M(V,_e,te,X),oe&&A(V,_e,te,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,N(V,q,te,_e),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function S(V,q,te,_e){const X=_e.wireframe===!0;let oe=r[q.id];oe===void 0&&(oe={},r[q.id]=oe);const K=V.isInstancedMesh===!0?V.id:0;let Z=oe[K];Z===void 0&&(Z={},oe[K]=Z);let Me=Z[te.id];Me===void 0&&(Me={},Z[te.id]=Me);let ue=Me[X];return ue===void 0&&(ue=x(h()),Me[X]=ue),ue}function x(V){const q=[],te=[],_e=[];for(let X=0;X<t;X++)q[X]=0,te[X]=0,_e[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:_e,object:V,attributes:{},index:null}}function M(V,q,te,_e){const X=l.attributes,oe=q.attributes;let K=0;const Z=te.getAttributes();for(const Me in Z)if(Z[Me].location>=0){const k=X[Me];let le=oe[Me];if(le===void 0&&(Me==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Me==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),k===void 0||k.attribute!==le||le&&k.data!==le.data)return!0;K++}return l.attributesNum!==K||l.index!==_e}function A(V,q,te,_e){const X={},oe=q.attributes;let K=0;const Z=te.getAttributes();for(const Me in Z)if(Z[Me].location>=0){let k=oe[Me];k===void 0&&(Me==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),Me==="instanceColor"&&V.instanceColor&&(k=V.instanceColor));const le={};le.attribute=k,k&&k.data&&(le.data=k.data),X[Me]=le,K++}l.attributes=X,l.attributesNum=K,l.index=_e}function I(){const V=l.newAttributes;for(let q=0,te=V.length;q<te;q++)V[q]=0}function y(V){_(V,0)}function _(V,q){const te=l.newAttributes,_e=l.enabledAttributes,X=l.attributeDivisors;te[V]=1,_e[V]===0&&(s.enableVertexAttribArray(V),_e[V]=1),X[V]!==q&&(s.vertexAttribDivisor(V,q),X[V]=q)}function D(){const V=l.newAttributes,q=l.enabledAttributes;for(let te=0,_e=q.length;te<_e;te++)q[te]!==V[te]&&(s.disableVertexAttribArray(te),q[te]=0)}function R(V,q,te,_e,X,oe,K){K===!0?s.vertexAttribIPointer(V,q,te,X,oe):s.vertexAttribPointer(V,q,te,_e,X,oe)}function N(V,q,te,_e){I();const X=_e.attributes,oe=te.getAttributes(),K=q.defaultAttributeValues;for(const Z in oe){const Me=oe[Z];if(Me.location>=0){let ue=X[Z];if(ue===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(ue=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(ue=V.instanceColor)),ue!==void 0){const k=ue.normalized,le=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const Ye=Xe.buffer,De=Xe.type,pe=Xe.bytesPerElement,Te=De===s.INT||De===s.UNSIGNED_INT||ue.gpuType===Tf;if(ue.isInterleavedBufferAttribute){const be=ue.data,Be=be.stride,Qe=ue.offset;if(be.isInstancedInterleavedBuffer){for(let st=0;st<Me.locationSize;st++)_(Me.location+st,be.meshPerAttribute);V.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let st=0;st<Me.locationSize;st++)y(Me.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let st=0;st<Me.locationSize;st++)R(Me.location+st,le/Me.locationSize,De,k,Be*pe,(Qe+le/Me.locationSize*st)*pe,Te)}else{if(ue.isInstancedBufferAttribute){for(let be=0;be<Me.locationSize;be++)_(Me.location+be,ue.meshPerAttribute);V.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<Me.locationSize;be++)y(Me.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let be=0;be<Me.locationSize;be++)R(Me.location+be,le/Me.locationSize,De,k,le*pe,le/Me.locationSize*be*pe,Te)}}else if(K!==void 0){const k=K[Z];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(Me.location,k);break;case 3:s.vertexAttrib3fv(Me.location,k);break;case 4:s.vertexAttrib4fv(Me.location,k);break;default:s.vertexAttrib1fv(Me.location,k)}}}}D()}function z(){L();for(const V in r){const q=r[V];for(const te in q){const _e=q[te];for(const X in _e){const oe=_e[X];for(const K in oe)v(oe[K].object),delete oe[K];delete _e[X]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const q=r[V.id];for(const te in q){const _e=q[te];for(const X in _e){const oe=_e[X];for(const K in oe)v(oe[K].object),delete oe[K];delete _e[X]}}delete r[V.id]}function F(V){for(const q in r){const te=r[q];for(const _e in te){const X=te[_e];if(X[V.id]===void 0)continue;const oe=X[V.id];for(const K in oe)v(oe[K].object),delete oe[K];delete X[V.id]}}}function w(V){for(const q in r){const te=r[q],_e=V.isInstancedMesh===!0?V.id:0,X=te[_e];if(X!==void 0){for(const oe in X){const K=X[oe];for(const Z in K)v(K[Z].object),delete K[Z];delete X[oe]}delete te[_e],Object.keys(te).length===0&&delete r[q]}}}function L(){W(),u=!0,l!==o&&(l=o,p(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:I,enableAttribute:y,disableUnusedAttributes:D}}function b1(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let x=0;for(let M=0;M<v;M++)x+=p[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function T1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!w)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(wt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:I,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:N,maxSamples:z,samples:P}}function A1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new vs,f=new Ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const A=S.clippingPlanes,I=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):p();else{const D=l?0:r,R=D*4;let N=_.clippingState||null;h.value=N,N=v(A,x,R,M);for(let z=0;z!==R;++z)N[z]=t[z];_.clippingState=N,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,A){const I=S!==null?S.length:0;let y=null;if(I!==0){if(y=h.value,A!==!0||y===null){const _=M+I*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,N=M;R!==I;++R,N+=4)u.copy(S[R]).applyMatrix4(D,f),u.normal.toArray(y,N),y[N+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,y}}const $r=4,Km=[.125,.215,.35,.446,.526,.582],ys=20,C1=256,io=new rg,Zm=new en;let yd=null,Sd=0,Md=0,Ed=!1;const R1=new ie;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=R1}=l;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:xr,format:Ui,colorSpace:Jl,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N1(l)),this._blurMaterial=I1(l,e,t),this._ggxMaterial=P1(l,e,t)}return o}_compileMaterial(e){const t=new jn(new ui,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new Si(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Zm),S.toneMapping=$i,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new vo,new qr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,y=I.material;let _=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,_=!0):(y.color.copy(Zm),_=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):N===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const z=this._cubeSize;da(o,N*z,R>2?z:0,z,z),S.setRenderTarget(o),_&&S.render(I,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ws||e.mapping===xa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),x=0+p*1.25,M=S*x,{_lodMax:A}=this,I=this._sizeLods[r],y=3*I*(r>A-$r?r-A+$r:0),_=4*(this._cubeSize-I);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=A-t,da(l,y,_,3*I,2*I),o.setRenderTarget(l),o.render(f,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=A-r,da(e,y,_,3*I,2*I),o.setRenderTarget(e),o.render(f,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ys-1),I=l/A,y=isFinite(l)?1+Math.floor(v*I):ys;y>ys&&wt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const _=[];let D=0;for(let F=0;F<ys;++F){const w=F/I,L=Math.exp(-w*w/2);_.push(L),F===0?D+=L:F<y&&(D+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=A,x.mipInt.value=R-r;const N=this._sizeLods[o],z=3*N*(o>R-$r?o-R+$r:0),P=4*(this._cubeSize-N);da(t,z,P,3*N,2*N),h.setRenderTarget(t),h.render(S,io)}}function N1(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+Km.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-$r?h=Km[u-s+$r-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,I=3,y=2,_=1,D=new Float32Array(I*A*M),R=new Float32Array(y*A*M),N=new Float32Array(_*A*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,w=P>2?0:-1,L=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];D.set(L,I*A*P),R.set(x,y*A*P);const W=[P,P,P,P,P,P];N.set(W,_*A*P)}const z=new ui;z.setAttribute("position",new Ki(D,I)),z.setAttribute("uv",new Ki(R,y)),z.setAttribute("faceIndex",new Ki(N,_)),r.push(new jn(z,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new qi(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function P1(s,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function I1(s,e,t){const r=new Float32Array(ys),o=new ie(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function e0(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function t0(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}class og extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new J0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:mr});l.uniforms.tEquirect.value=t;const u=new jn(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Bn),new k_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function D1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===ju||M===Wu)if(e.has(x)){const A=e.get(x).texture;return f(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const I=new og(A.height);return I.fromEquirectangularTexture(s,x),e.set(x,I),x.addEventListener("dispose",p),f(I.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,A=M===ju||M===Wu,I=M===ws||M===xa;if(A||I){let y=t.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),y.texture;if(y!==void 0)return y.texture;{const D=x.image;return A&&D&&D.height>0||I&&D&&h(D)?(r===null&&(r=new Jm(s)),y=A?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,t.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===ju?x.mapping=ws:M===Wu&&(x.mapping=xa),x}function h(x){let M=0;const A=6;for(let I=0;I<A;I++)x[I]!==void 0&&M++;return M===A}function p(x){const M=x.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function L1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&xf("WebGLRenderer: "+r+" extension not supported."),o}}}function U1(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,A=S.attributes.position;let I=0;if(A===void 0)return;if(M!==null){const D=M.array;I=M.version;for(let R=0,N=D.length;R<N;R+=3){const z=D[R+0],P=D[R+1],F=D[R+2];x.push(z,P,P,F,F,z)}}else{const D=A.array;I=A.version;for(let R=0,N=D.length/3-1;R<N;R+=3){const z=R+0,P=R+1,F=R+2;x.push(z,P,P,F,F,z)}}const y=new(A.count>=65535?K0:q0)(x,1);y.version=I;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function F1(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),t.update(x,r,1)}function p(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),t.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let I=0;for(let y=0;y<M;y++)I+=x[y];t.update(I,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function O1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:qt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function k1(s,e,t){const r=new WeakMap,o=new mn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let W=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var M=W;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,I=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let N=0;A===!0&&(N=1),I===!0&&(N=2),y===!0&&(N=3);let z=f.attributes.position.count*N,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*P*4*S),w=new X0(F,z,P,S);w.type=Xi,w.needsUpdate=!0;const L=N*4;for(let V=0;V<S;V++){const q=_[V],te=D[V],_e=R[V],X=z*P*4*V;for(let oe=0;oe<q.count;oe++){const K=oe*L;A===!0&&(o.fromBufferAttribute(q,oe),F[X+K+0]=o.x,F[X+K+1]=o.y,F[X+K+2]=o.z,F[X+K+3]=0),I===!0&&(o.fromBufferAttribute(te,oe),F[X+K+4]=o.x,F[X+K+5]=o.y,F[X+K+6]=o.z,F[X+K+7]=0),y===!0&&(o.fromBufferAttribute(_e,oe),F[X+K+8]=o.x,F[X+K+9]=o.y,F[X+K+10]=o.z,F[X+K+11]=_e.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new bt(z,P)},r.set(f,x),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const I=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",I),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function B1(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,x=e.get(p,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const z1={[N0]:"LINEAR_TONE_MAPPING",[P0]:"REINHARD_TONE_MAPPING",[I0]:"CINEON_TONE_MAPPING",[D0]:"ACES_FILMIC_TONE_MAPPING",[U0]:"AGX_TONE_MAPPING",[F0]:"NEUTRAL_TONE_MAPPING",[L0]:"CUSTOM_TONE_MAPPING"};function V1(s,e,t,r,o){const l=new qi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new va(e,t):void 0}),u=new qi(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),f=new ui;f.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new gn([0,2,0,0,2,0],2));const h=new U_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new jn(f,h),v=new rg(-1,1,1,-1,0,1);let S=null,x=null,M=!1,A,I=null,y=[],_=!1;this.setSize=function(D,R){l.setSize(D,R),u.setSize(D,R);for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(D,R)}},this.setEffects=function(D){y=D,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,N=l.height;for(let z=0;z<y.length;z++){const P=y[z];P.setSize&&P.setSize(R,N)}},this.begin=function(D,R){if(M||D.toneMapping===$i&&y.length===0)return!1;if(I=R,R!==null){const N=R.width,z=R.height;(l.width!==N||l.height!==z)&&this.setSize(N,z)}return _===!1&&D.setRenderTarget(l),A=D.toneMapping,D.toneMapping=$i,!0},this.hasRenderPass=function(){return _},this.end=function(D,R){D.toneMapping=A,M=!0;let N=l,z=u;for(let P=0;P<y.length;P++){const F=y[P];if(F.enabled!==!1&&(F.render(D,z,N,R),F.needsSwap!==!1)){const w=N;N=z,z=w}}if(S!==D.outputColorSpace||x!==D.toneMapping){S=D.outputColorSpace,x=D.toneMapping,h.defines={},Yt.getTransfer(S)===Qt&&(h.defines.SRGB_TRANSFER="");const P=z1[x];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(I),D.render(p,v),I=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const lg=new Gn,_f=new va(1,1),cg=new X0,ug=new Kv,dg=new J0,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=n0[o];if(l===void 0&&(l=new Float32Array(o),n0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function En(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function j1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function X1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;a0.set(r),s.uniformMatrix2fv(this.addr,!1,a0),wn(t,r)}}function Y1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;s0.set(r),s.uniformMatrix3fv(this.addr,!1,s0),wn(t,r)}}function $1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(En(t,r))return;r0.set(r),s.uniformMatrix4fv(this.addr,!1,r0),wn(t,r)}}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function iM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Df:If,l=_f):l=lg,t.setTexture2D(e||l,o)}function rM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||ug,o)}function sM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||dg,o)}function aM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||cg,o)}function oM(s){switch(s){case 5126:return H1;case 35664:return G1;case 35665:return j1;case 35666:return W1;case 35674:return X1;case 35675:return Y1;case 35676:return $1;case 5124:case 35670:return q1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(s,e){s.uniform1fv(this.addr,e)}function cM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function uM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function dM(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function fM(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hM(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pM(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mM(s,e){s.uniform1iv(this.addr,e)}function gM(s,e){s.uniform2iv(this.addr,e)}function xM(s,e){s.uniform3iv(this.addr,e)}function vM(s,e){s.uniform4iv(this.addr,e)}function _M(s,e){s.uniform1uiv(this.addr,e)}function yM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function EM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=lg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function wM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||ug,l[u])}function bM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||dg,l[u])}function TM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||cg,l[u])}function AM(s){switch(s){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}class CM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}}class RM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AM(t.type)}}class NM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function o0(s,e){s.seq.push(e),s.map[e.id]=e}function PM(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){o0(t,p===void 0?new CM(f,s,e):new RM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new NM(f),o0(t,S)),t=S}}}class ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);PM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function l0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const IM=37297;let DM=0;function LM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const c0=new Ft;function UM(s){Yt._getMatrix(c0,Yt.workingColorSpace,s);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function u0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+LM(s.getShaderSource(e),f)}else return l}function FM(s,e){const t=UM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OM={[N0]:"Linear",[P0]:"Reinhard",[I0]:"Cineon",[D0]:"ACESFilmic",[U0]:"AgX",[F0]:"Neutral",[L0]:"Custom"};function kM(s,e){const t=OM[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new ie;function BM(){Yt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function VM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function d0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(GM,WM)}const jM=new Map;function WM(s,e){let t=zt[e];if(t===void 0){const r=jM.get(e);if(r!==void 0)t=zt[r],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(s){return s.replace(XM,YM)}function YM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function p0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const $M={[jl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function qM(s){return $M[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KM={[ws]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function ZM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JM={[xa]:"ENVMAP_MODE_REFRACTION"};function QM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[R0]:"ENVMAP_BLENDING_MULTIPLY",[Rv]:"ENVMAP_BLENDING_MIX",[Nv]:"ENVMAP_BLENDING_ADD"};function tE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eE[s.combine]||"ENVMAP_BLENDING_NONE"}function nE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=qM(t),p=ZM(t),v=QM(t),S=tE(t),x=nE(t),M=zM(t),A=VM(l),I=o.createProgram();let y,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?zt.tonemapping_pars_fragment:"",t.toneMapping!==$i?kM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,FM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=yf(u),u=d0(u,t),u=f0(u,t),f=yf(f),f=d0(f,t),f=f0(f,t),u=h0(u),f=h0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=D+y+u,N=D+_+f,z=l0(o,o.VERTEX_SHADER,R),P=l0(o,o.FRAGMENT_SHADER,N);o.attachShader(I,z),o.attachShader(I,P),t.index0AttributeName!==void 0?o.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(I,0,"position"),o.linkProgram(I);function F(V){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(I)||"",te=o.getShaderInfoLog(z)||"",_e=o.getShaderInfoLog(P)||"",X=q.trim(),oe=te.trim(),K=_e.trim();let Z=!0,Me=!0;if(o.getProgramParameter(I,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,I,z,P);else{const ue=u0(o,z,"vertex"),k=u0(o,P,"fragment");qt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(I,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+ue+`
`+k)}else X!==""?wt("WebGLProgram: Program Info Log:",X):(oe===""||K==="")&&(Me=!1);Me&&(V.diagnostics={runnable:Z,programLog:X,vertexShader:{log:oe,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(z),o.deleteShader(P),w=new ql(o,I),L=HM(o,I)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(I,IM)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=z,this.fragmentShader=P,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aE(e),t.set(e,r)),r}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(s){return s===bs||s===Kl||s===Zl}function lE(s,e,t,r,o,l){const u=new Y0,f=new sE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return h.add(w),w===0?"uv":`uv${w}`}function I(w,L,W,V,q,te){const _e=V.fog,X=q.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||oe,K),Me=Z&&Z.mapping===ac?Z.image.height:null,ue=M[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const k=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=k!==void 0?k.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let Ye,De,pe,Te;if(ue){const ft=Wi[ue];Ye=ft.vertexShader,De=ft.fragmentShader}else Ye=w.vertexShader,De=w.fragmentShader,f.update(w),pe=f.getVertexShaderID(w),Te=f.getFragmentShaderID(w);const be=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),Qe=q.isInstancedMesh===!0,st=q.isBatchedMesh===!0,mt=!!w.map,pt=!!w.matcap,kt=!!Z,Wt=!!w.aoMap,Mt=!!w.lightMap,Bt=!!w.bumpMap,It=!!w.normalMap,Ht=!!w.displacementMap,$=!!w.emissiveMap,St=!!w.metalnessMap,Ze=!!w.roughnessMap,gt=w.anisotropy>0,He=w.clearcoat>0,Rt=w.dispersion>0,U=w.iridescence>0,E=w.sheen>0,re=w.transmission>0,H=gt&&!!w.anisotropyMap,se=He&&!!w.clearcoatMap,ae=He&&!!w.clearcoatNormalMap,de=He&&!!w.clearcoatRoughnessMap,ee=U&&!!w.iridescenceMap,he=U&&!!w.iridescenceThicknessMap,ve=E&&!!w.sheenColorMap,Le=E&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,we=!!w.specularColorMap,Ne=!!w.specularIntensityMap,et=re&&!!w.transmissionMap,Ke=re&&!!w.thicknessMap,j=!!w.gradientMap,Ce=!!w.alphaMap,ne=w.alphaTest>0,Pe=!!w.alphaHash,Ie=!!w.extensions;let Re=$i;w.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Re=s.toneMapping);const $e={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:De,defines:w.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:st,batchingColor:st&&q._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&q.instanceColor!==null,instancingMorph:Qe&&q.morphTexture!==null,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:pt,envMap:kt,envMapMode:kt&&Z.mapping,envMapCubeUVHeight:Me,aoMap:Wt,lightMap:Mt,bumpMap:Bt,normalMap:It,displacementMap:Ht,emissiveMap:$,normalMapObjectSpace:It&&w.normalMapType===Dv,normalMapTangentSpace:It&&w.normalMapType===Mm,packedNormalMap:It&&w.normalMapType===Mm&&oE(w.normalMap.format),metalnessMap:St,roughnessMap:Ze,anisotropy:gt,anisotropyMap:H,clearcoat:He,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:de,dispersion:Rt,iridescence:U,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:E,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:we,specularIntensityMap:Ne,transmission:re,transmissionMap:et,thicknessMap:Ke,gradientMap:j,opaque:w.transparent===!1&&w.blending===pa&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ne,alphaHash:Pe,combine:w.combine,mapUv:mt&&A(w.map.channel),aoMapUv:Wt&&A(w.aoMap.channel),lightMapUv:Mt&&A(w.lightMap.channel),bumpMapUv:Bt&&A(w.bumpMap.channel),normalMapUv:It&&A(w.normalMap.channel),displacementMapUv:Ht&&A(w.displacementMap.channel),emissiveMapUv:$&&A(w.emissiveMap.channel),metalnessMapUv:St&&A(w.metalnessMap.channel),roughnessMapUv:Ze&&A(w.roughnessMap.channel),anisotropyMapUv:H&&A(w.anisotropyMap.channel),clearcoatMapUv:se&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&A(w.sheenRoughnessMap.channel),specularMapUv:Ae&&A(w.specularMap.channel),specularColorMapUv:we&&A(w.specularColorMap.channel),specularIntensityMapUv:Ne&&A(w.specularIntensityMap.channel),transmissionMapUv:et&&A(w.transmissionMap.channel),thicknessMapUv:Ke&&A(w.thicknessMap.channel),alphaMapUv:Ce&&A(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(It||gt),vertexNormals:!!X.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(mt||Ce),fog:!!_e,useFog:w.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||X.attributes.normal===void 0&&It===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Be,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&Yt.getTransfer(w.map.colorSpace)===Qt,decodeVideoTextureEmissive:$&&w.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(w.emissiveMap.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hr,flipSided:w.side===ti,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function y(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)L.push(W),L.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(_(L,w),D(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function D(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const L=M[w.type];let W;if(L){const V=Wi[L];W=I_.clone(V.uniforms)}else W=w.uniforms;return W}function N(w,L){let W=v.get(L);return W!==void 0?++W.usedTimes:(W=new iE(s,L,w,o),p.push(W),v.set(L,W)),W}function z(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function F(){f.dispose()}return{getParameters:I,getProgramCacheKey:y,getUniforms:R,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:p,dispose:F}}function cE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,A,I,y,_){let D=s[e];return D===void 0?(D={id:x.id,object:x,geometry:M,material:A,materialVariant:u(x),groupOrder:I,renderOrder:x.renderOrder,z:y,group:_},s[e]=D):(D.id=x.id,D.object=x,D.geometry=M,D.material=A,D.materialVariant=u(x),D.groupOrder=I,D.renderOrder=x.renderOrder,D.z=y,D.group=_),e++,D}function h(x,M,A,I,y,_){const D=f(x,M,A,I,y,_);A.transmission>0?r.push(D):A.transparent===!0?o.push(D):t.push(D)}function p(x,M,A,I,y,_){const D=f(x,M,A,I,y,_);A.transmission>0?r.unshift(D):A.transparent===!0?o.unshift(D):t.unshift(D)}function v(x,M){t.length>1&&t.sort(x||uE),r.length>1&&r.sort(M||m0),o.length>1&&o.sort(M||m0)}function S(){for(let x=e,M=s.length;x<M;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function dE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new g0,s.set(r,[u])):o>=l.length?(u=new g0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new en};break;case"SpotLight":t={position:new ie,direction:new ie,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new en,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new en,groundColor:new en};break;case"RectAreaLight":t={color:new en,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new fE,t=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new _n,u=new _n;function f(p){let v=0,S=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,A=0,I=0,y=0,_=0,D=0,R=0,N=0,z=0,P=0,F=0;p.sort(mE);for(let L=0,W=p.length;L<W;L++){const V=p[L],q=V.color,te=V.intensity,_e=V.distance;let X=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===bs?X=V.shadow.map.texture:X=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=q.r*te,S+=q.g*te,x+=q.b*te;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],te);F++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Z=t.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=oe,M++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(q).multiplyScalar(te),oe.distance=_e,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[I]=oe;const K=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,K.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[I]=K.matrix,V.castShadow){const Z=t.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[I]=Z,r.spotShadowMap[I]=X,N++}I++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(q).multiplyScalar(te),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=oe,y++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const K=V.shadow,Z=t.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=X,r.pointShadowMatrix[A]=V.shadow.matrix,R++}r.point[A]=oe,A++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(te),oe.groundColor.copy(V.groundColor).multiplyScalar(te),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==M||w.pointLength!==A||w.spotLength!==I||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==D||w.numPointShadows!==R||w.numSpotShadows!==N||w.numSpotMaps!==z||w.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=I,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,w.directionalLength=M,w.pointLength=A,w.spotLength=I,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=D,w.numPointShadows=R,w.numSpotShadows=N,w.numSpotMaps=z,w.numLightProbes=F,r.version=pE++)}function h(p,v){let S=0,x=0,M=0,A=0,I=0;const y=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const R=p[_];if(R.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),S++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const N=r.hemi[I];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(y),I++}}}return{setup:f,setupView:h,state:r}}function x0(s){const e=new gE(s),t=[],r=[],o=[];function l(x){S.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function xE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new x0(s),e.set(o,[f])):l>=u.length?(f=new x0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`,yE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],SE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],v0=new _n,ro=new ie,bd=new ie;function ME(s,e,t){let r=new Z0;const o=new bt,l=new bt,u=new mn,f=new F_,h=new O_,p={},v=t.maxTextureSize,S={[Kr]:ti,[ti]:Kr,[hr]:hr},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:vE,fragmentShader:_E}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ui;A.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new jn(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let _=this.type;this.render=function(P,F,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===uv&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jl);const L=s.getRenderTarget(),W=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(mr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=_!==this.type;te&&F.traverse(function(_e){_e.material&&(Array.isArray(_e.material)?_e.material.forEach(X=>X.needsUpdate=!0):_e.material.needsUpdate=!0)});for(let _e=0,X=P.length;_e<X;_e++){const oe=P[_e],K=oe.shadow;if(K===void 0){wt("WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Z=K.getFrameExtents();o.multiply(Z),l.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Z.x),o.x=l.x*Z.x,K.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Z.y),o.y=l.y*Z.y,K.mapSize.y=l.y));const Me=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Me,K.map===null||te===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===so){if(oe.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new qi(o.x,o.y,{format:bs,type:xr,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),K.map.texture.name=oe.name+".shadowMap",K.map.depthTexture=new va(o.x,o.y,Xi),K.map.depthTexture.name=oe.name+".shadowMapDepth",K.map.depthTexture.format=vr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In}else oe.isPointLight?(K.map=new og(o.x),K.map.depthTexture=new m_(o.x,Zi)):(K.map=new qi(o.x,o.y),K.map.depthTexture=new va(o.x,o.y,Zi)),K.map.depthTexture.name=oe.name+".shadowMap",K.map.depthTexture.format=vr,this.type===jl?(K.map.depthTexture.compareFunction=Me?Df:If,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In);K.camera.updateProjectionMatrix()}const ue=K.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ue;k++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,k),s.clear();else{k===0&&(s.setRenderTarget(K.map),s.clear());const le=K.getViewport(k);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),q.viewport(u)}if(oe.isPointLight){const le=K.camera,Xe=K.matrix,Ye=oe.distance||le.far;Ye!==le.far&&(le.far=Ye,le.updateProjectionMatrix()),ro.setFromMatrixPosition(oe.matrixWorld),le.position.copy(ro),bd.copy(le.position),bd.add(yE[k]),le.up.copy(SE[k]),le.lookAt(bd),le.updateMatrixWorld(),Xe.makeTranslation(-ro.x,-ro.y,-ro.z),v0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),K._frustum.setFromProjectionMatrix(v0,le.coordinateSystem,le.reversedDepth)}else K.updateMatrices(oe);r=K.getFrustum(),N(F,w,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===so&&D(K,w),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(L,W,V)};function D(P,F){const w=e.update(I);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qi(o.x,o.y,{format:bs,type:xr})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,x,I,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,M,I,null)}function R(P,F,w,L){let W=null;const V=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)W=V;else if(W=w.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=W.uuid,te=F.uuid;let _e=p[q];_e===void 0&&(_e={},p[q]=_e);let X=_e[te];X===void 0&&(X=W.clone(),_e[te]=X,F.addEventListener("dispose",z)),W=X}if(W.visible=F.visible,W.wireframe=F.wireframe,L===so?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:S[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,w.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=s.properties.get(W);q.light=w}return W}function N(P,F,w,L,W){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===so)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const te=e.update(P),_e=P.material;if(Array.isArray(_e)){const X=te.groups;for(let oe=0,K=X.length;oe<K;oe++){const Z=X[oe],Me=_e[Z.materialIndex];if(Me&&Me.visible){const ue=R(P,Me,L,W);P.onBeforeShadow(s,P,F,w,te,ue,Z),s.renderBufferDirect(w,null,te,ue,P,Z),P.onAfterShadow(s,P,F,w,te,ue,Z)}}}else if(_e.visible){const X=R(P,_e,L,W);P.onBeforeShadow(s,P,F,w,te,X,null),s.renderBufferDirect(w,null,te,X,P,null),P.onAfterShadow(s,P,F,w,te,X,null)}}const q=P.children;for(let te=0,_e=q.length;te<_e;te++)N(q[te],F,w,L,W)}function z(P){P.target.removeEventListener("dispose",z);for(const w in p){const L=p[w],W=P.target.uuid;W in L&&(L[W].dispose(),delete L[W])}}}function EE(s,e){function t(){let j=!1;const Ce=new mn;let ne=null;const Pe=new mn(0,0,0,0);return{setMask:function(Ie){ne!==Ie&&!j&&(s.colorMask(Ie,Ie,Ie,Ie),ne=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,Re,$e,ft,Nt){Nt===!0&&(Ie*=ft,Re*=ft,$e*=ft),Ce.set(Ie,Re,$e,ft),Pe.equals(Ce)===!1&&(s.clearColor(Ie,Re,$e,ft),Pe.copy(Ce))},reset:function(){j=!1,ne=null,Pe.set(-1,0,0,0)}}}function r(){let j=!1,Ce=!1,ne=null,Pe=null,Ie=null;return{setReversed:function(Re){if(Ce!==Re){const $e=e.get("EXT_clip_control");Re?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ce=Re;const ft=Ie;Ie=null,this.setClear(ft)}},getReversed:function(){return Ce},setTest:function(Re){Re?be(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!j&&(s.depthMask(Re),ne=Re)},setFunc:function(Re){if(Ce&&(Re=Gv[Re]),Pe!==Re){switch(Re){case Pd:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Re}},setLocked:function(Re){j=Re},setClear:function(Re){Ie!==Re&&(Ie=Re,Ce&&(Re=1-Re),s.clearDepth(Re))},reset:function(){j=!1,ne=null,Pe=null,Ie=null,Ce=!1}}}function o(){let j=!1,Ce=null,ne=null,Pe=null,Ie=null,Re=null,$e=null,ft=null,Nt=null;return{setTest:function(Pt){j||(Pt?be(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Pt){Ce!==Pt&&!j&&(s.stencilMask(Pt),Ce=Pt)},setFunc:function(Pt,an,tn){(ne!==Pt||Pe!==an||Ie!==tn)&&(s.stencilFunc(Pt,an,tn),ne=Pt,Pe=an,Ie=tn)},setOp:function(Pt,an,tn){(Re!==Pt||$e!==an||ft!==tn)&&(s.stencilOp(Pt,an,tn),Re=Pt,$e=an,ft=tn)},setLocked:function(Pt){j=Pt},setClear:function(Pt){Nt!==Pt&&(s.clearStencil(Pt),Nt=Pt)},reset:function(){j=!1,Ce=null,ne=null,Pe=null,Ie=null,Re=null,$e=null,ft=null,Nt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,D=null,R=null,N=null,z=null,P=null,F=null,w=new en(0,0,0),L=0,W=!1,V=null,q=null,te=null,_e=null,X=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const Me=s.getParameter(s.VERSION);Me.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Me)[1]),K=Z>=1):Me.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),K=Z>=2);let ue=null,k={};const le=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),Ye=new mn().fromArray(le),De=new mn().fromArray(Xe);function pe(j,Ce,ne,Pe){const Ie=new Uint8Array(4),Re=s.createTexture();s.bindTexture(j,Re),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ne;$e++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ce+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Re}const Te={};Te[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),be(s.DEPTH_TEST),u.setFunc(ga),Bt(!1),It(vm),be(s.CULL_FACE),Wt(mr);function be(j){v[j]!==!0&&(s.enable(j),v[j]=!0)}function Be(j){v[j]!==!1&&(s.disable(j),v[j]=!1)}function Qe(j,Ce){return x[j]!==Ce?(s.bindFramebuffer(j,Ce),x[j]=Ce,j===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),j===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function st(j,Ce){let ne=A,Pe=!1;if(j){ne=M.get(Ce),ne===void 0&&(ne=[],M.set(Ce,ne));const Ie=j.textures;if(ne.length!==Ie.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,$e=Ie.length;Re<$e;Re++)ne[Re]=s.COLOR_ATTACHMENT0+Re;ne.length=Ie.length,Pe=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ne)}function mt(j){return I!==j?(s.useProgram(j),I=j,!0):!1}const pt={[_s]:s.FUNC_ADD,[fv]:s.FUNC_SUBTRACT,[hv]:s.FUNC_REVERSE_SUBTRACT};pt[pv]=s.MIN,pt[mv]=s.MAX;const kt={[gv]:s.ZERO,[xv]:s.ONE,[vv]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[wv]:s.SRC_ALPHA_SATURATE,[Mv]:s.DST_COLOR,[yv]:s.DST_ALPHA,[_v]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[Ev]:s.ONE_MINUS_DST_COLOR,[Sv]:s.ONE_MINUS_DST_ALPHA,[bv]:s.CONSTANT_COLOR,[Tv]:s.ONE_MINUS_CONSTANT_COLOR,[Av]:s.CONSTANT_ALPHA,[Cv]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(j,Ce,ne,Pe,Ie,Re,$e,ft,Nt,Pt){if(j===mr){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(be(s.BLEND),y=!0),j!==dv){if(j!==_||Pt!==W){if((D!==_s||z!==_s)&&(s.blendEquation(s.FUNC_ADD),D=_s,z=_s),Pt)switch(j){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFunc(s.ONE,s.ONE);break;case ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",j);break}else switch(j){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ym:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",j);break}R=null,N=null,P=null,F=null,w.set(0,0,0),L=0,_=j,W=Pt}return}Ie=Ie||Ce,Re=Re||ne,$e=$e||Pe,(Ce!==D||Ie!==z)&&(s.blendEquationSeparate(pt[Ce],pt[Ie]),D=Ce,z=Ie),(ne!==R||Pe!==N||Re!==P||$e!==F)&&(s.blendFuncSeparate(kt[ne],kt[Pe],kt[Re],kt[$e]),R=ne,N=Pe,P=Re,F=$e),(ft.equals(w)===!1||Nt!==L)&&(s.blendColor(ft.r,ft.g,ft.b,Nt),w.copy(ft),L=Nt),_=j,W=!1}function Mt(j,Ce){j.side===hr?Be(s.CULL_FACE):be(s.CULL_FACE);let ne=j.side===ti;Ce&&(ne=!ne),Bt(ne),j.blending===pa&&j.transparent===!1?Wt(mr):Wt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const Pe=j.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),$(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(j){V!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),V=j)}function It(j){j!==lv?(be(s.CULL_FACE),j!==q&&(j===vm?s.cullFace(s.BACK):j===cv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),q=j}function Ht(j){j!==te&&(K&&s.lineWidth(j),te=j)}function $(j,Ce,ne){j?(be(s.POLYGON_OFFSET_FILL),(_e!==Ce||X!==ne)&&(_e=Ce,X=ne,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ne))):Be(s.POLYGON_OFFSET_FILL)}function St(j){j?be(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Ze(j){j===void 0&&(j=s.TEXTURE0+oe-1),ue!==j&&(s.activeTexture(j),ue=j)}function gt(j,Ce,ne){ne===void 0&&(ue===null?ne=s.TEXTURE0+oe-1:ne=ue);let Pe=k[ne];Pe===void 0&&(Pe={type:void 0,texture:void 0},k[ne]=Pe),(Pe.type!==j||Pe.texture!==Ce)&&(ue!==ne&&(s.activeTexture(ne),ue=ne),s.bindTexture(j,Ce||Te[j]),Pe.type=j,Pe.texture=Ce)}function He(){const j=k[ue];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function E(){try{s.texSubImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function re(){try{s.texSubImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function se(){try{s.compressedTexSubImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function ae(){try{s.texStorage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function de(){try{s.texStorage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function ee(){try{s.texImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function he(){try{s.texImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function ve(j){return S[j]!==void 0?S[j]:s.getParameter(j)}function Le(j,Ce){S[j]!==Ce&&(s.pixelStorei(j,Ce),S[j]=Ce)}function Ae(j){Ye.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ye.copy(j))}function we(j){De.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),De.copy(j))}function Ne(j,Ce){let ne=p.get(Ce);ne===void 0&&(ne=new WeakMap,p.set(Ce,ne));let Pe=ne.get(j);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ce,j.name),ne.set(j,Pe))}function et(j,Ce){const Pe=p.get(Ce).get(j);h.get(Ce)!==Pe&&(s.uniformBlockBinding(Ce,Pe,j.__bindingPointIndex),h.set(Ce,Pe))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},ue=null,k={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,D=null,R=null,N=null,z=null,P=null,F=null,w=new en(0,0,0),L=0,W=!1,V=null,q=null,te=null,_e=null,X=null,Ye.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:be,disable:Be,bindFramebuffer:Qe,drawBuffers:st,useProgram:mt,setBlending:Wt,setMaterial:Mt,setFlipSided:Bt,setCullFace:It,setLineWidth:Ht,setPolygonOffset:$,setScissorTest:St,activeTexture:Ze,bindTexture:gt,unbindTexture:He,compressedTexImage2D:Rt,compressedTexImage3D:U,texImage2D:ee,texImage3D:he,pixelStorei:Le,getParameter:ve,updateUBOMapping:Ne,uniformBlockBinding:et,texStorage2D:ae,texStorage3D:de,texSubImage2D:E,texSubImage3D:re,compressedTexSubImage2D:H,compressedTexSubImage3D:se,scissor:Ae,viewport:we,reset:Ke}}function wE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new bt,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,E){return A?new OffscreenCanvas(U,E):tc("canvas")}function y(U,E,re){let H=1;const se=Rt(U);if((se.width>re||se.height>re)&&(H=re/Math.max(se.width,se.height)),H<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(H*se.width),de=Math.floor(H*se.height);x===void 0&&(x=I(ae,de));const ee=E?I(ae,de):x;return ee.width=ae,ee.height=de,ee.getContext("2d").drawImage(U,0,0,ae,de),wt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ae+"x"+de+")."),ee}else return"data"in U&&wt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),U;return U}function _(U){return U.generateMipmaps}function D(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,E,re,H,se,ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de;H&&(de=e.get("EXT_texture_norm16"),de||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=E;if(E===s.RED&&(re===s.FLOAT&&(ee=s.R32F),re===s.HALF_FLOAT&&(ee=s.R16F),re===s.UNSIGNED_BYTE&&(ee=s.R8),re===s.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),re===s.SHORT&&de&&(ee=de.R16_SNORM_EXT)),E===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ee=s.R8UI),re===s.UNSIGNED_SHORT&&(ee=s.R16UI),re===s.UNSIGNED_INT&&(ee=s.R32UI),re===s.BYTE&&(ee=s.R8I),re===s.SHORT&&(ee=s.R16I),re===s.INT&&(ee=s.R32I)),E===s.RG&&(re===s.FLOAT&&(ee=s.RG32F),re===s.HALF_FLOAT&&(ee=s.RG16F),re===s.UNSIGNED_BYTE&&(ee=s.RG8),re===s.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),re===s.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ee=s.RG8UI),re===s.UNSIGNED_SHORT&&(ee=s.RG16UI),re===s.UNSIGNED_INT&&(ee=s.RG32UI),re===s.BYTE&&(ee=s.RG8I),re===s.SHORT&&(ee=s.RG16I),re===s.INT&&(ee=s.RG32I)),E===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),re===s.UNSIGNED_INT&&(ee=s.RGB32UI),re===s.BYTE&&(ee=s.RGB8I),re===s.SHORT&&(ee=s.RGB16I),re===s.INT&&(ee=s.RGB32I)),E===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),re===s.UNSIGNED_INT&&(ee=s.RGBA32UI),re===s.BYTE&&(ee=s.RGBA8I),re===s.SHORT&&(ee=s.RGBA16I),re===s.INT&&(ee=s.RGBA32I)),E===s.RGB&&(re===s.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),re===s.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),E===s.RGBA){const he=ae?Ql:Yt.getTransfer(se);re===s.FLOAT&&(ee=s.RGBA32F),re===s.HALF_FLOAT&&(ee=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ee=he===Qt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),re===s.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function z(U,E){let re;return U?E===null||E===Zi||E===mo?re=s.DEPTH24_STENCIL8:E===Xi?re=s.DEPTH32F_STENCIL8:E===po&&(re=s.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===mo?re=s.DEPTH_COMPONENT24:E===Xi?re=s.DEPTH_COMPONENT32F:E===po&&(re=s.DEPTH_COMPONENT16),re}function P(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==In&&U.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),L(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function w(U){const E=U.target;E.removeEventListener("dispose",w),V(E)}function L(U){const E=r.get(U);if(E.__webglInit===void 0)return;const re=U.source,H=M.get(re);if(H){const se=H[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&W(U),Object.keys(H).length===0&&M.delete(re)}r.remove(U)}function W(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const re=U.source,H=M.get(re);delete H[E.__cacheKey],u.memory.textures--}function V(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let se=0;se<E.__webglFramebuffer[H].length;se++)s.deleteFramebuffer(E.__webglFramebuffer[H][se]);else s.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)s.deleteFramebuffer(E.__webglFramebuffer[H]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=U.textures;for(let H=0,se=re.length;H<se;H++){const ae=r.get(re[H]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),u.memory.textures--),r.remove(re[H])}r.remove(U)}let q=0;function te(){q=0}function _e(){return q}function X(U){q=U}function oe(){const U=q;return U>=o.maxTextures&&wt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),q+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function Z(U,E){const re=r.get(U);if(U.isVideoTexture&&gt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&re.__version!==U.version){const H=U.image;if(H===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(re,U,E);return}}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+E)}function Me(U,E){const re=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){Be(re,U,E);return}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+E)}function ue(U,E){const re=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){Be(re,U,E);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+E)}function k(U,E){const re=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&re.__version!==U.version){Qe(re,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+E)}const le={[kd]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},Xe={[In]:s.NEAREST,[Pv]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},Ye={[Lv]:s.NEVER,[Bv]:s.ALWAYS,[Uv]:s.LESS,[If]:s.LEQUAL,[Fv]:s.EQUAL,[Df]:s.GEQUAL,[Ov]:s.GREATER,[kv]:s.NOTEQUAL};function De(U,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Xu||E.magFilter===_l||E.magFilter===Ss||E.minFilter===Bn||E.minFilter===Xu||E.minFilter===_l||E.minFilter===Ss)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Xe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Xe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==_l&&E.minFilter!==Ss||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function pe(U,E){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const H=E.source;let se=M.get(H);se===void 0&&(se={},M.set(H,se));const ae=K(E);if(ae!==U.__cacheKey){se[ae]===void 0&&(se[ae]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),se[ae].usedTimes++;const de=se[U.__cacheKey];de!==void 0&&(se[U.__cacheKey].usedTimes--,de.usedTimes===0&&W(E)),U.__cacheKey=ae,U.__webglTexture=se[ae].texture}return re}function Te(U,E,re){return Math.floor(Math.floor(U/re)/E)}function be(U,E,re,H){const ae=U.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,re,H,E.data);else{ae.sort((Le,Ae)=>Le.start-Ae.start);let de=0;for(let Le=1;Le<ae.length;Le++){const Ae=ae[de],we=ae[Le],Ne=Ae.start+Ae.count,et=Te(we.start,E.width,4),Ke=Te(Ae.start,E.width,4);we.start<=Ne+1&&et===Ke&&Te(we.start+we.count-1,E.width,4)===et?Ae.count=Math.max(Ae.count,we.start+we.count-Ae.start):(++de,ae[de]=we)}ae.length=de+1;const ee=t.getParameter(s.UNPACK_ROW_LENGTH),he=t.getParameter(s.UNPACK_SKIP_PIXELS),ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Le=0,Ae=ae.length;Le<Ae;Le++){const we=ae[Le],Ne=Math.floor(we.start/4),et=Math.ceil(we.count/4),Ke=Ne%E.width,j=Math.floor(Ne/E.width),Ce=et,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,j),t.texSubImage2D(s.TEXTURE_2D,0,Ke,j,Ce,ne,re,H,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Be(U,E,re){let H=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=s.TEXTURE_3D);const se=pe(U,E),ae=E.source;t.bindTexture(H,U.__webglTexture,s.TEXTURE0+re);const de=r.get(ae);if(ae.version!==de.__version||se===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ne=Yt.getPrimaries(Yt.workingColorSpace),Pe=E.colorSpace===Yr?null:Yt.getPrimaries(E.colorSpace),Ie=E.colorSpace===Yr||ne===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let he=y(E.image,!1,o.maxTextureSize);he=He(E,he);const ve=l.convert(E.format,E.colorSpace),Le=l.convert(E.type);let Ae=N(E.internalFormat,ve,Le,E.normalized,E.colorSpace,E.isVideoTexture);De(H,E);let we;const Ne=E.mipmaps,et=E.isVideoTexture!==!0,Ke=de.__version===void 0||se===!0,j=ae.dataReady,Ce=P(E,he);if(E.isDepthTexture)Ae=z(E.format===Ms,E.type),Ke&&(et?t.texStorage2D(s.TEXTURE_2D,1,Ae,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Ae,he.width,he.height,0,ve,Le,null));else if(E.isDataTexture)if(Ne.length>0){et&&Ke&&t.texStorage2D(s.TEXTURE_2D,Ce,Ae,Ne[0].width,Ne[0].height);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],et?j&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Le,we.data):t.texImage2D(s.TEXTURE_2D,ne,Ae,we.width,we.height,0,ve,Le,we.data);E.generateMipmaps=!1}else et?(Ke&&t.texStorage2D(s.TEXTURE_2D,Ce,Ae,he.width,he.height),j&&be(E,he,ve,Le)):t.texImage2D(s.TEXTURE_2D,0,Ae,he.width,he.height,0,ve,Le,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ae,Ne[0].width,Ne[0].height,he.depth);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)if(we=Ne[ne],E.format!==Ui)if(ve!==null)if(et){if(j)if(E.layerUpdates.size>0){const Ie=qm(we.width,we.height,E.format,E.type);for(const Re of E.layerUpdates){const $e=we.data.subarray(Re*Ie/we.data.BYTES_PER_ELEMENT,(Re+1)*Ie/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Re,we.width,we.height,1,ve,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,he.depth,ve,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ae,we.width,we.height,he.depth,0,we.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,he.depth,ve,Le,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ae,we.width,we.height,he.depth,0,ve,Le,we.data)}else{et&&Ke&&t.texStorage2D(s.TEXTURE_2D,Ce,Ae,Ne[0].width,Ne[0].height);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],E.format!==Ui?ve!==null?et?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ae,we.width,we.height,0,we.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?j&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Le,we.data):t.texImage2D(s.TEXTURE_2D,ne,Ae,we.width,we.height,0,ve,Le,we.data)}else if(E.isDataArrayTexture)if(et){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ae,he.width,he.height,he.depth),j)if(E.layerUpdates.size>0){const ne=qm(he.width,he.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ie=he.data.subarray(Pe*ne/he.data.BYTES_PER_ELEMENT,(Pe+1)*ne/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,he.width,he.height,1,ve,Le,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Le,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,he.width,he.height,he.depth,0,ve,Le,he.data);else if(E.isData3DTexture)et?(Ke&&t.texStorage3D(s.TEXTURE_3D,Ce,Ae,he.width,he.height,he.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Le,he.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,he.width,he.height,he.depth,0,ve,Le,he.data);else if(E.isFramebufferTexture){if(Ke)if(et)t.texStorage2D(s.TEXTURE_2D,Ce,Ae,he.width,he.height);else{let ne=he.width,Pe=he.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,Ae,ne,Pe,0,ve,Le,null),ne>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),he.parentNode!==ne){ne.appendChild(he),S.add(E),ne.onpaint=ft=>{const Nt=ft.changedElements;for(const Pt of S)Nt.includes(Pt.image)&&(Pt.needsUpdate=!0)},ne.requestPaint();return}const Pe=0,Ie=s.RGBA,Re=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Pe,Ie,Re,$e,he),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(et&&Ke){const ne=Rt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Ae,ne.width,ne.height)}for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],et?j&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ve,Le,we):t.texImage2D(s.TEXTURE_2D,ne,Ae,ve,Le,we);E.generateMipmaps=!1}else if(et){if(Ke){const ne=Rt(he);t.texStorage2D(s.TEXTURE_2D,Ce,Ae,ne.width,ne.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Le,he)}else t.texImage2D(s.TEXTURE_2D,0,Ae,ve,Le,he);_(E)&&D(H),de.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Qe(U,E,re){if(E.image.length!==6)return;const H=pe(U,E),se=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+re);const ae=r.get(se);if(se.version!==ae.__version||H===!0){t.activeTexture(s.TEXTURE0+re);const de=Yt.getPrimaries(Yt.workingColorSpace),ee=E.colorSpace===Yr?null:Yt.getPrimaries(E.colorSpace),he=E.colorSpace===Yr||de===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Le=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let Re=0;Re<6;Re++)!ve&&!Le?Ae[Re]=y(E.image[Re],!0,o.maxCubemapSize):Ae[Re]=Le?E.image[Re].image:E.image[Re],Ae[Re]=He(E,Ae[Re]);const we=Ae[0],Ne=l.convert(E.format,E.colorSpace),et=l.convert(E.type),Ke=N(E.internalFormat,Ne,et,E.normalized,E.colorSpace),j=E.isVideoTexture!==!0,Ce=ae.__version===void 0||H===!0,ne=se.dataReady;let Pe=P(E,we);De(s.TEXTURE_CUBE_MAP,E);let Ie;if(ve){j&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ke,we.width,we.height);for(let Re=0;Re<6;Re++){Ie=Ae[Re].mipmaps;for(let $e=0;$e<Ie.length;$e++){const ft=Ie[$e];E.format!==Ui?Ne!==null?j?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,ft.width,ft.height,Ne,ft.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,Ke,ft.width,ft.height,0,ft.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,ft.width,ft.height,Ne,et,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,Ke,ft.width,ft.height,0,Ne,et,ft.data)}}}else{if(Ie=E.mipmaps,j&&Ce){Ie.length>0&&Pe++;const Re=Rt(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ke,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Le){j?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ae[Re].width,Ae[Re].height,Ne,et,Ae[Re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ke,Ae[Re].width,Ae[Re].height,0,Ne,et,Ae[Re].data);for(let $e=0;$e<Ie.length;$e++){const Nt=Ie[$e].image[Re].image;j?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,Nt.width,Nt.height,Ne,et,Nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,Ke,Nt.width,Nt.height,0,Ne,et,Nt.data)}}else{j?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ne,et,Ae[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ke,Ne,et,Ae[Re]);for(let $e=0;$e<Ie.length;$e++){const ft=Ie[$e];j?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,Ne,et,ft.image[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,Ke,Ne,et,ft.image[Re])}}}_(E)&&D(s.TEXTURE_CUBE_MAP),ae.__version=se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function st(U,E,re,H,se,ae){const de=l.convert(re.format,re.colorSpace),ee=l.convert(re.type),he=N(re.internalFormat,de,ee,re.normalized,re.colorSpace),ve=r.get(E),Le=r.get(re);if(Le.__renderTarget=E,!ve.__hasExternalTextures){const Ae=Math.max(1,E.width>>ae),we=Math.max(1,E.height>>ae);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,ae,he,Ae,we,E.depth,0,de,ee,null):t.texImage2D(se,ae,he,Ae,we,0,de,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,se,Le.__webglTexture,0,St(E)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,se,Le.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(U,E,re){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const H=E.depthTexture,se=H&&H.isDepthTexture?H.type:null,ae=z(E.stencilBuffer,se),de=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(E),ae,E.width,E.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(E),ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,U)}else{const H=E.textures;for(let se=0;se<H.length;se++){const ae=H[se],de=l.convert(ae.format,ae.colorSpace),ee=l.convert(ae.type),he=N(ae.internalFormat,de,ee,ae.normalized,ae.colorSpace);Ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(E),he,E.width,E.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(U,E,re){const H=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=r.get(E.depthTexture);if(se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H){if(se.__webglInit===void 0&&(se.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),se.__webglTexture===void 0){se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),De(s.TEXTURE_CUBE_MAP,E.depthTexture);const ve=l.convert(E.depthTexture.format),Le=l.convert(E.depthTexture.type);let Ae;E.depthTexture.format===vr?Ae=s.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Ae=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ae,E.width,E.height,0,ve,Le,null)}}else Z(E.depthTexture,0);const ae=se.__webglTexture,de=St(E),ee=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,he=E.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ee,ae,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,he,ee,ae,0);else if(E.depthTexture.format===Ms)Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ee,ae,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,he,ee,ae,0);else throw new Error("Unknown depthTexture format")}function kt(U){const E=r.get(U),re=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const H=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",se)};H.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=H}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(re)for(let H=0;H<6;H++)pt(E.__webglFramebuffer[H],U,H);else{const H=U.texture.mipmaps;H&&H.length>0?pt(E.__webglFramebuffer[0],U,0):pt(E.__webglFramebuffer,U,0)}else if(re){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=s.createRenderbuffer(),mt(E.__webglDepthbuffer[H],U,!1);else{const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ae)}}else{const H=U.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),mt(E.__webglDepthbuffer,U,!1);else{const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(U,E,re){const H=r.get(U);E!==void 0&&st(H.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&kt(U)}function Mt(U){const E=U.texture,re=r.get(U),H=r.get(E);U.addEventListener("dispose",w);const se=U.textures,ae=U.isWebGLCubeRenderTarget===!0,de=se.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=E.version,u.memory.textures++),ae){re.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[ee]=[];for(let he=0;he<E.mipmaps.length;he++)re.__webglFramebuffer[ee][he]=s.createFramebuffer()}else re.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let ee=0;ee<E.mipmaps.length;ee++)re.__webglFramebuffer[ee]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(de)for(let ee=0,he=se.length;ee<he;ee++){const ve=r.get(se[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Ze(U)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){const he=se[ee];re.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[ee]);const ve=l.convert(he.format,he.colorSpace),Le=l.convert(he.type),Ae=N(he.internalFormat,ve,Le,he.normalized,he.colorSpace,U.isXRRenderTarget===!0),we=St(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ae,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,re.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(re.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let ee=0;ee<6;ee++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)st(re.__webglFramebuffer[ee][he],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else st(re.__webglFramebuffer[ee],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);_(E)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,he=se.length;ee<he;ee++){const ve=se[ee],Le=r.get(ve);let Ae=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Le.__webglTexture),De(Ae,ve),st(re.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+ee,Ae,0),_(ve)&&D(Ae)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ee=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,H.__webglTexture),De(ee,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)st(re.__webglFramebuffer[he],U,E,s.COLOR_ATTACHMENT0,ee,he);else st(re.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ee,0);_(E)&&D(ee),t.unbindTexture()}U.depthBuffer&&kt(U)}function Bt(U){const E=U.textures;for(let re=0,H=E.length;re<H;re++){const se=E[re];if(_(se)){const ae=R(U),de=r.get(se).__webglTexture;t.bindTexture(ae,de),D(ae),t.unbindTexture()}}}const It=[],Ht=[];function $(U){if(U.samples>0){if(Ze(U)===!1){const E=U.textures,re=U.width,H=U.height;let se=s.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=r.get(U),ee=E.length>1;if(ee)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const he=U.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Le=r.get(E[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,re,H,0,0,re,H,se,s.NEAREST),h===!0&&(It.length=0,Ht.length=0,It.push(s.COLOR_ATTACHMENT0+ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(It.push(ae),Ht.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Le=r.get(E[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function St(U){return Math.min(o.maxSamples,U.samples)}function Ze(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function He(U,E){const re=U.colorSpace,H=U.format,se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==Jl&&re!==Yr&&(Yt.getTransfer(re)===Qt?(H!==Ui||se!==Mi)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",re)),E}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=te,this.getTextureUnits=_e,this.setTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=Me,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Wt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bE(s,e){function t(r,o=Yr){let l;const u=Yt.getTransfer(o);if(r===Mi)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===V0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===k0)return s.BYTE;if(r===B0)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===xr)return s.HALF_FLOAT;if(r===H0)return s.ALPHA;if(r===G0)return s.RGB;if(r===Ui)return s.RGBA;if(r===vr)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===j0)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===bs)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===Yl||r===$l)if(u===Qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Vd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Wd||r===Xd||r===Yd||r===$d||r===Kl||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Wd)return u===Qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return l.COMPRESSED_R11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===Qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===Zl||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Q0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ji({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends As{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,x=null,M=null,A=null;const I=typeof XRWebGLBinding<"u",y=new CE,_={},D=t.getContextAttributes();let R=null,N=null;const z=[],P=[],F=new bt;let w=null;const L=new Si;L.viewport=new mn;const W=new Si;W.viewport=new mn;const V=[L,W],q=new B_;let te=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let Te=z[pe];return Te===void 0&&(Te=new ed,z[pe]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(pe){let Te=z[pe];return Te===void 0&&(Te=new ed,z[pe]=Te),Te.getGripSpace()},this.getHand=function(pe){let Te=z[pe];return Te===void 0&&(Te=new ed,z[pe]=Te),Te.getHandSpace()};function X(pe){const Te=P.indexOf(pe.inputSource);if(Te===-1)return;const be=z[Te];be!==void 0&&(be.update(pe.inputSource,pe.frame,p||u),be.dispatchEvent({type:pe.type,data:pe.inputSource}))}function oe(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",K);for(let pe=0;pe<z.length;pe++){const Te=P[pe];Te!==null&&(P[pe]=null,z[pe].disconnect(Te))}te=null,_e=null,y.reset();for(const pe in _)delete _[pe];e.setRenderTarget(R),M=null,x=null,S=null,o=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){l=pe,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){f=pe,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(pe){p=pe},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&I&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(pe){if(o=pe,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",K),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,Qe=null;D.depth&&(Qe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=D.stencil?Ms:vr,Be=D.stencil?mo:Zi);const st={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(st),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new qi(x.textureWidth,x.textureHeight,{format:Ui,type:Mi,depthTexture:new va(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new qi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(pe){for(let Te=0;Te<pe.removed.length;Te++){const be=pe.removed[Te],Be=P.indexOf(be);Be>=0&&(P[Be]=null,z[Be].disconnect(be))}for(let Te=0;Te<pe.added.length;Te++){const be=pe.added[Te];let Be=P.indexOf(be);if(Be===-1){for(let st=0;st<z.length;st++)if(st>=P.length){P.push(be),Be=st;break}else if(P[st]===null){P[st]=be,Be=st;break}if(Be===-1)break}const Qe=z[Be];Qe&&Qe.connect(be)}}const Z=new ie,Me=new ie;function ue(pe,Te,be){Z.setFromMatrixPosition(Te.matrixWorld),Me.setFromMatrixPosition(be.matrixWorld);const Be=Z.distanceTo(Me),Qe=Te.projectionMatrix.elements,st=be.projectionMatrix.elements,mt=Qe[14]/(Qe[10]-1),pt=Qe[14]/(Qe[10]+1),kt=(Qe[9]+1)/Qe[5],Wt=(Qe[9]-1)/Qe[5],Mt=(Qe[8]-1)/Qe[0],Bt=(st[8]+1)/st[0],It=mt*Mt,Ht=mt*Bt,$=Be/(-Mt+Bt),St=$*-Mt;if(Te.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(St),pe.translateZ($),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),Qe[10]===-1)pe.projectionMatrix.copy(Te.projectionMatrix),pe.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Ze=mt+$,gt=pt+$,He=It-St,Rt=Ht+(Be-St),U=kt*pt/gt*Ze,E=Wt*pt/gt*Ze;pe.projectionMatrix.makePerspective(He,Rt,U,E,Ze,gt),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function k(pe,Te){Te===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(Te.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(o===null)return;let Te=pe.near,be=pe.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(be=y.depthFar)),q.near=W.near=L.near=Te,q.far=W.far=L.far=be,(te!==q.near||_e!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),te=q.near,_e=q.far),q.layers.mask=pe.layers.mask|6,L.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const Be=pe.parent,Qe=q.cameras;k(q,Be);for(let st=0;st<Qe.length;st++)k(Qe[st],Be);Qe.length===2?ue(q,L,W):q.projectionMatrix.copy(L.projectionMatrix),le(pe,q,Be)};function le(pe,Te,be){be===null?pe.matrix.copy(Te.matrixWorld):(pe.matrix.copy(be.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(Te.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(Te.projectionMatrix),pe.projectionMatrixInverse.copy(Te.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=vf*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(pe){h=pe,x!==null&&(x.fixedFoveation=pe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=pe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(pe){return _[pe]};let Xe=null;function Ye(pe,Te){if(v=Te.getViewerPose(p||u),A=Te,v!==null){const be=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Be=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let pt=0;pt<be.length;pt++){const kt=be[pt];let Wt=null;if(M!==null)Wt=M.getViewport(kt);else{const Bt=S.getViewSubImage(x,kt);Wt=Bt.viewport,pt===0&&(e.setRenderTargetTextures(N,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(N))}let Mt=V[pt];Mt===void 0&&(Mt=new Si,Mt.layers.enable(pt),Mt.viewport=new mn,V[pt]=Mt),Mt.matrix.fromArray(kt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(kt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),pt===0&&(q.matrix.copy(Mt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(Mt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&I){S=r.getBinding();const pt=S.getDepthInformation(be[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,o.renderState)}if(Qe&&Qe.includes("camera-access")&&I){e.state.unbindTexture(),S=r.getBinding();for(let pt=0;pt<be.length;pt++){const kt=be[pt].camera;if(kt){let Wt=_[kt];Wt||(Wt=new Q0,_[kt]=Wt);const Mt=S.getCameraImage(kt);Wt.sourceTexture=Mt}}}}for(let be=0;be<z.length;be++){const Be=P[be],Qe=z[be];Be!==null&&Qe!==void 0&&Qe.update(Be,Te,p||u)}Xe&&Xe(pe,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),A=null}const De=new sg;De.setAnimationLoop(Ye),this.setAnimationLoop=function(pe){Xe=pe},this.dispose=function(){}}}const NE=new _n,fg=new Ft;fg.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,ng(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,D,R,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,N)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),I(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,D,R):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ti&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ti&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),R=D.envMap,N=D.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(N)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(fg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=R*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function I(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function IE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,R){const N=R.program;r.uniformBlockBinding(D,N)}function p(D,R){let N=o[D.id];N===void 0&&(A(D),N=v(D),o[D.id]=N,D.addEventListener("dispose",y));const z=R.program;r.updateUBOMapping(D,z);const P=e.render.frame;l[D.id]!==P&&(x(D),l[D.id]=P)}function v(D){const R=S();D.__bindingPointIndex=R;const N=s.createBuffer(),z=D.__size,P=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function S(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const R=o[D.id],N=D.uniforms,z=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let P=0,F=N.length;P<F;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let L=0,W=w.length;L<W;L++){const V=w[L];if(M(V,P,L,z)===!0){const q=V.__offset,te=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let X=0;X<te.length;X++){const oe=te[X],K=I(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,q+_e,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):ArrayBuffer.isView(oe)?V.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,V.__data.length)):(oe.toArray(V.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,R,N,z){const P=D.value,F=R+"_"+N;if(z[F]===void 0)return typeof P=="number"||typeof P=="boolean"?z[F]=P:ArrayBuffer.isView(P)?z[F]=P.slice():z[F]=P.clone(),!0;{const w=z[F];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return z[F]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function A(D){const R=D.uniforms;let N=0;const z=16;for(let F=0,w=R.length;F<w;F++){const L=Array.isArray(R[F])?R[F]:[R[F]];for(let W=0,V=L.length;W<V;W++){const q=L[W],te=Array.isArray(q.value)?q.value:[q.value];for(let _e=0,X=te.length;_e<X;_e++){const oe=te[_e],K=I(oe),Z=N%z,Me=Z%K.boundary,ue=Z+Me;N+=Me,ue!==0&&z-ue<K.storage&&(N+=z-ue),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=K.storage}}}const P=N%z;return P>0&&(N+=z-P),D.__size=N,D.__cache={},this}function I(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(R.boundary=16,R.storage=D.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",D),R}function y(D){const R=D.target;R.removeEventListener("dispose",y);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:h,update:p,dispose:_}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function LE(){return ji===null&&(ji=new d_(DE,16,16,bs,xr),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=pr,ji.wrapT=pr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class UE{constructor(e={}){const{canvas:t=Vv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Mi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const I=M,y=new Set([Pf,Nf,Rf]),_=new Set([Mi,Zi,po,mo,Af,Cf]),D=new Uint32Array(4),R=new Int32Array(4),N=new ie;let z=null,P=null;const F=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let V=!1,q=null;this._outputColorSpace=yi;let te=0,_e=0,X=null,oe=-1,K=null;const Z=new mn,Me=new mn;let ue=null;const k=new en(0);let le=0,Xe=t.width,Ye=t.height,De=1,pe=null,Te=null;const be=new mn(0,0,Xe,Ye),Be=new mn(0,0,Xe,Ye);let Qe=!1;const st=new Z0;let mt=!1,pt=!1;const kt=new _n,Wt=new ie,Mt=new mn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Ht(){return X===null?De:1}let $=r;function St(C,J){return t.getContext(C,J)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ft,!1),$===null){const J="webgl2";if($=St(J,C),$===null)throw St(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw qt("WebGLRenderer: "+C.message),C}let Ze,gt,He,Rt,U,E,re,H,se,ae,de,ee,he,ve,Le,Ae,we,Ne,et,Ke,j,Ce,ne;function Pe(){Ze=new L1($),Ze.init(),j=new bE($,Ze),gt=new T1($,Ze,e,j),He=new EE($,Ze),gt.reversedDepthBuffer&&x&&He.buffers.depth.setReversed(!0),Rt=new O1($),U=new cE,E=new wE($,Ze,He,U,gt,j,Rt),re=new D1(W),H=new V_($),Ce=new w1($,H),se=new U1($,H,Rt,Ce),ae=new B1($,se,H,Ce,Rt),Ne=new k1($,gt,E),Le=new A1(U),de=new lE(W,re,Ze,gt,Ce,Le),ee=new PE(W,U),he=new dE,ve=new xE(Ze),we=new E1(W,re,He,ae,A,h),Ae=new ME(W,ae,gt),ne=new IE($,Rt,gt,He),et=new b1($,Ze,Rt),Ke=new F1($,Ze,Rt),Rt.programs=de.programs,W.capabilities=gt,W.extensions=Ze,W.properties=U,W.renderLists=he,W.shadowMap=Ae,W.state=He,W.info=Rt}Pe(),I!==Mi&&(L=new V1(I,t.width,t.height,o,l));const Ie=new RE(W,$);this.xr=Ie,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(C){C!==void 0&&(De=C,this.setSize(Xe,Ye,!1))},this.getSize=function(C){return C.set(Xe,Ye)},this.setSize=function(C,J,ye=!0){if(Ie.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=C,Ye=J,t.width=Math.floor(C*De),t.height=Math.floor(J*De),ye===!0&&(t.style.width=C+"px",t.style.height=J+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(Xe*De,Ye*De).floor()},this.setDrawingBufferSize=function(C,J,ye){Xe=C,Ye=J,De=ye,t.width=Math.floor(C*ye),t.height=Math.floor(J*ye),this.setViewport(0,0,C,J)},this.setEffects=function(C){if(I===Mi){qt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let J=0;J<C.length;J++)if(C[J].isOutputPass===!0){wt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,J,ye,ge){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,J,ye,ge),He.viewport(Z.copy(be).multiplyScalar(De).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,J,ye,ge){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,J,ye,ge),He.scissor(Me.copy(Be).multiplyScalar(De).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){He.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,ye=!0){let ge=0;if(C){let me=!1;if(X!==null){const je=X.texture.format;me=y.has(je)}if(me){const je=X.texture.type,nt=_.has(je),We=we.getClearColor(),at=we.getClearAlpha(),ct=We.r,Tt=We.g,At=We.b;nt?(D[0]=ct,D[1]=Tt,D[2]=At,D[3]=at,$.clearBufferuiv($.COLOR,0,D)):(R[0]=ct,R[1]=Tt,R[2]=At,R[3]=at,$.clearBufferiv($.COLOR,0,R))}else ge|=$.COLOR_BUFFER_BIT}J&&(ge|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ye&&(ge|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ge!==0&&$.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),we.dispose(),he.dispose(),ve.dispose(),U.dispose(),re.dispose(),ae.dispose(),Ce.dispose(),ne.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Xn),Ie.removeEventListener("sessionend",Rn),Ei.stop()};function Re(C){C.preventDefault(),Am("WebGLRenderer: Context Lost."),V=!0}function $e(){Am("WebGLRenderer: Context Restored."),V=!1;const C=Rt.autoReset,J=Ae.enabled,ye=Ae.autoUpdate,ge=Ae.needsUpdate,me=Ae.type;Pe(),Rt.autoReset=C,Ae.enabled=J,Ae.autoUpdate=ye,Ae.needsUpdate=ge,Ae.type=me}function ft(C){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nt(C){const J=C.target;J.removeEventListener("dispose",Nt),Pt(J)}function Pt(C){an(C),U.remove(C)}function an(C){const J=U.get(C).programs;J!==void 0&&(J.forEach(function(ye){de.releaseProgram(ye)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ye,ge,me,je){J===null&&(J=Bt);const nt=me.isMesh&&me.matrixWorld.determinant()<0,We=Qr(C,J,ye,ge,me);He.setMaterial(ge,nt);let at=ye.index,ct=1;if(ge.wireframe===!0){if(at=se.getWireframeAttribute(ye),at===void 0)return;ct=2}const Tt=ye.drawRange,At=ye.attributes.position;let ot=Tt.start*ct,b=(Tt.start+Tt.count)*ct;je!==null&&(ot=Math.max(ot,je.start*ct),b=Math.min(b,(je.start+je.count)*ct)),at!==null?(ot=Math.max(ot,0),b=Math.min(b,at.count)):At!=null&&(ot=Math.max(ot,0),b=Math.min(b,At.count));const G=b-ot;if(G<0||G===1/0)return;Ce.setup(me,ge,We,ye,at);let O,ce=et;if(at!==null&&(O=H.get(at),ce=Ke,ce.setIndex(O)),me.isMesh)ge.wireframe===!0?(He.setLineWidth(ge.wireframeLinewidth*Ht()),ce.setMode($.LINES)):ce.setMode($.TRIANGLES);else if(me.isLine){let Ue=ge.linewidth;Ue===void 0&&(Ue=1),He.setLineWidth(Ue*Ht()),me.isLineSegments?ce.setMode($.LINES):me.isLineLoop?ce.setMode($.LINE_LOOP):ce.setMode($.LINE_STRIP)}else me.isPoints?ce.setMode($.POINTS):me.isSprite&&ce.setMode($.TRIANGLES);if(me.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ce.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else{const Ue=me._multiDrawStarts,Se=me._multiDrawCounts,Ve=me._multiDrawCount,qe=at?H.get(at).bytesPerElement:1,Gt=U.get(ge).currentProgram.getUniforms();for(let xt=0;xt<Ve;xt++)Gt.setValue($,"_gl_DrawID",xt),ce.render(Ue[xt]/qe,Se[xt])}else if(me.isInstancedMesh)ce.renderInstances(ot,G,me.count);else if(ye.isInstancedBufferGeometry){const Ue=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,Se=Math.min(ye.instanceCount,Ue);ce.renderInstances(ot,G,Se)}else ce.render(ot,G)};function tn(C,J,ye){C.transparent===!0&&C.side===hr&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Mr(C,J,ye),C.side=Kr,C.needsUpdate=!0,Mr(C,J,ye),C.side=hr):Mr(C,J,ye)}this.compile=function(C,J,ye=null){ye===null&&(ye=C),P=ve.get(ye),P.init(J),w.push(P),ye.traverseVisible(function(me){me.isLight&&me.layers.test(J.layers)&&(P.pushLight(me),me.castShadow&&P.pushShadow(me))}),C!==ye&&C.traverseVisible(function(me){me.isLight&&me.layers.test(J.layers)&&(P.pushLight(me),me.castShadow&&P.pushShadow(me))}),P.setupLights();const ge=new Set;return C.traverse(function(me){if(!(me.isMesh||me.isPoints||me.isLine||me.isSprite))return;const je=me.material;if(je)if(Array.isArray(je))for(let nt=0;nt<je.length;nt++){const We=je[nt];tn(We,ye,me),ge.add(We)}else tn(je,ye,me),ge.add(je)}),P=w.pop(),ge},this.compileAsync=function(C,J,ye=null){const ge=this.compile(C,J,ye);return new Promise(me=>{function je(){if(ge.forEach(function(nt){U.get(nt).currentProgram.isReady()&&ge.delete(nt)}),ge.size===0){me(C);return}setTimeout(je,10)}Ze.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let dn=null;function Wn(C){dn&&dn(C)}function Xn(){Ei.stop()}function Rn(){Ei.start()}const Ei=new sg;Ei.setAnimationLoop(Wn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){dn=C,Ie.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},Ie.addEventListener("sessionstart",Xn),Ie.addEventListener("sessionend",Rn),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(C,J);const ye=Ie.enabled===!0&&Ie.isPresenting===!0,ge=L!==null&&(X===null||ye)&&L.begin(W,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(J),J=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,J,X),P=ve.get(C,w.length),P.init(J),P.state.textureUnits=E.getTextureUnits(),w.push(P),kt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),st.setFromProjectionMatrix(kt,Yi,J.reversedDepth),pt=this.localClippingEnabled,mt=Le.init(this.clippingPlanes,pt),z=he.get(C,F.length),z.init(),F.push(z),Ie.enabled===!0&&Ie.isPresenting===!0){const nt=W.xr.getDepthSensingMesh();nt!==null&&yr(nt,J,-1/0,W.sortObjects)}yr(C,J,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(pe,Te),It=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,It&&we.addToRenderList(z,C),this.info.render.frame++,mt===!0&&Le.beginShadows();const me=P.state.shadowsArray;if(Ae.render(me,C,J),mt===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge&&L.hasRenderPass())===!1){const nt=z.opaque,We=z.transmissive;if(P.setupLights(),J.isArrayCamera){const at=J.cameras;if(We.length>0)for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct];ni(nt,We,C,At)}It&&we.render(C);for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct];Cs(z,C,At,At.viewport)}}else We.length>0&&ni(nt,We,C,J),It&&we.render(C),Cs(z,C,J)}X!==null&&_e===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),ge&&L.end(W),C.isScene===!0&&C.onAfterRender(W,C,J),Ce.resetDefaultState(),oe=-1,K=null,w.pop(),w.length>0?(P=w[w.length-1],E.setTextureUnits(P.state.textureUnits),mt===!0&&Le.setGlobalState(W.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?z=F[F.length-1]:z=null,q!==null&&q.renderEnd()};function yr(C,J,ye,ge){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ye=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){ge&&Mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(kt);const nt=ae.update(C),We=C.material;We.visible&&z.push(C,nt,We,ye,Mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const nt=ae.update(C),We=C.material;if(ge&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Mt.copy(C.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Mt.copy(nt.boundingSphere.center)),Mt.applyMatrix4(C.matrixWorld).applyMatrix4(kt)),Array.isArray(We)){const at=nt.groups;for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct],ot=We[At.materialIndex];ot&&ot.visible&&z.push(C,nt,ot,ye,Mt.z,At)}}else We.visible&&z.push(C,nt,We,ye,Mt.z,null)}}const je=C.children;for(let nt=0,We=je.length;nt<We;nt++)yr(je[nt],J,ye,ge)}function Cs(C,J,ye,ge){const{opaque:me,transmissive:je,transparent:nt}=C;P.setupLightsView(ye),mt===!0&&Le.setGlobalState(W.clippingPlanes,ye),ge&&He.viewport(Z.copy(ge)),me.length>0&&Fi(me,J,ye),je.length>0&&Fi(je,J,ye),nt.length>0&&Fi(nt,J,ye),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ni(C,J,ye,ge){if((ye.isScene===!0?ye.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ge.id]===void 0){const ot=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ge.id]=new qi(1,1,{generateMipmaps:!0,type:ot?xr:Mi,minFilter:Ss,samples:Math.max(4,gt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const je=P.state.transmissionRenderTarget[ge.id],nt=ge.viewport||Z;je.setSize(nt.z*W.transmissionResolutionScale,nt.w*W.transmissionResolutionScale);const We=W.getRenderTarget(),at=W.getActiveCubeFace(),ct=W.getActiveMipmapLevel();W.setRenderTarget(je),W.getClearColor(k),le=W.getClearAlpha(),le<1&&W.setClearColor(16777215,.5),W.clear(),It&&we.render(ye);const Tt=W.toneMapping;W.toneMapping=$i;const At=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),P.setupLightsView(ge),mt===!0&&Le.setGlobalState(W.clippingPlanes,ge),Fi(C,ye,ge),E.updateMultisampleRenderTarget(je),E.updateRenderTargetMipmap(je),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let b=0,G=J.length;b<G;b++){const O=J[b],{object:ce,geometry:Ue,material:Se,group:Ve}=O;if(Se.side===hr&&ce.layers.test(ge.layers)){const qe=Se.side;Se.side=ti,Se.needsUpdate=!0,Sr(ce,ye,ge,Ue,Se,Ve),Se.side=qe,Se.needsUpdate=!0,ot=!0}}ot===!0&&(E.updateMultisampleRenderTarget(je),E.updateRenderTargetMipmap(je))}W.setRenderTarget(We,at,ct),W.setClearColor(k,le),At!==void 0&&(ge.viewport=At),W.toneMapping=Tt}function Fi(C,J,ye){const ge=J.isScene===!0?J.overrideMaterial:null;for(let me=0,je=C.length;me<je;me++){const nt=C[me],{object:We,geometry:at,group:ct}=nt;let Tt=nt.material;Tt.allowOverride===!0&&ge!==null&&(Tt=ge),We.layers.test(ye.layers)&&Sr(We,J,ye,at,Tt,ct)}}function Sr(C,J,ye,ge,me,je){C.onBeforeRender(W,J,ye,ge,me,je),C.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),me.onBeforeRender(W,J,ye,ge,C,je),me.transparent===!0&&me.side===hr&&me.forceSinglePass===!1?(me.side=ti,me.needsUpdate=!0,W.renderBufferDirect(ye,J,ge,me,C,je),me.side=Kr,me.needsUpdate=!0,W.renderBufferDirect(ye,J,ge,me,C,je),me.side=hr):W.renderBufferDirect(ye,J,ge,me,C,je),C.onAfterRender(W,J,ye,ge,me,je)}function Mr(C,J,ye){J.isScene!==!0&&(J=Bt);const ge=U.get(C),me=P.state.lights,je=P.state.shadowsArray,nt=me.state.version,We=de.getParameters(C,me.state,je,J,ye,P.state.lightProbeGridArray),at=de.getProgramCacheKey(We);let ct=ge.programs;ge.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?J.environment:null,ge.fog=J.fog;const Tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ge.envMap=re.get(C.envMap||ge.environment,Tt),ge.envMapRotation=ge.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",Nt),ct=new Map,ge.programs=ct);let At=ct.get(at);if(At!==void 0){if(ge.currentProgram===At&&ge.lightsStateVersion===nt)return Jr(C,We),At}else We.uniforms=de.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,ye,We),C.onBeforeCompile(We,W),At=de.acquireProgram(We,at),ct.set(at,At),ge.uniforms=We.uniforms;const ot=ge.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ot.clippingPlanes=Le.uniform),Jr(C,We),ge.needsLights=Jt(C),ge.lightsStateVersion=nt,ge.needsLights&&(ot.ambientLightColor.value=me.state.ambient,ot.lightProbe.value=me.state.probe,ot.directionalLights.value=me.state.directional,ot.directionalLightShadows.value=me.state.directionalShadow,ot.spotLights.value=me.state.spot,ot.spotLightShadows.value=me.state.spotShadow,ot.rectAreaLights.value=me.state.rectArea,ot.ltc_1.value=me.state.rectAreaLTC1,ot.ltc_2.value=me.state.rectAreaLTC2,ot.pointLights.value=me.state.point,ot.pointLightShadows.value=me.state.pointShadow,ot.hemisphereLights.value=me.state.hemi,ot.directionalShadowMatrix.value=me.state.directionalShadowMatrix,ot.spotLightMatrix.value=me.state.spotLightMatrix,ot.spotLightMap.value=me.state.spotLightMap,ot.pointShadowMatrix.value=me.state.pointShadowMatrix),ge.lightProbeGrid=P.state.lightProbeGridArray.length>0,ge.currentProgram=At,ge.uniformsList=null,At}function Zr(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=ql.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Jr(C,J){const ye=U.get(C);ye.outputColorSpace=J.outputColorSpace,ye.batching=J.batching,ye.batchingColor=J.batchingColor,ye.instancing=J.instancing,ye.instancingColor=J.instancingColor,ye.instancingMorph=J.instancingMorph,ye.skinning=J.skinning,ye.morphTargets=J.morphTargets,ye.morphNormals=J.morphNormals,ye.morphColors=J.morphColors,ye.morphTargetsCount=J.morphTargetsCount,ye.numClippingPlanes=J.numClippingPlanes,ye.numIntersection=J.numClipIntersection,ye.vertexAlphas=J.vertexAlphas,ye.vertexTangents=J.vertexTangents,ye.toneMapping=J.toneMapping}function Rs(C,J){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(J.matrixWorld);for(let ye=0,ge=C.length;ye<ge;ye++){const me=C[ye];if(me.texture!==null&&me.boundingBox.containsPoint(N))return me}return null}function Qr(C,J,ye,ge,me){J.isScene!==!0&&(J=Bt),E.resetTextureUnits();const je=J.fog,nt=ge.isMeshStandardMaterial||ge.isMeshLambertMaterial||ge.isMeshPhongMaterial?J.environment:null,We=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yt.workingColorSpace,at=ge.isMeshStandardMaterial||ge.isMeshLambertMaterial&&!ge.envMap||ge.isMeshPhongMaterial&&!ge.envMap,ct=re.get(ge.envMap||nt,at),Tt=ge.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,At=!!ye.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),ot=!!ye.morphAttributes.position,b=!!ye.morphAttributes.normal,G=!!ye.morphAttributes.color;let O=$i;ge.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(O=W.toneMapping);const ce=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,Ue=ce!==void 0?ce.length:0,Se=U.get(ge),Ve=P.state.lights;if(mt===!0&&(pt===!0||C!==K)){const Et=C===K&&ge.id===oe;Le.setState(ge,C,Et)}let qe=!1;ge.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ve.state.version||Se.outputColorSpace!==We||me.isBatchedMesh&&Se.batching===!1||!me.isBatchedMesh&&Se.batching===!0||me.isBatchedMesh&&Se.batchingColor===!0&&me.colorTexture===null||me.isBatchedMesh&&Se.batchingColor===!1&&me.colorTexture!==null||me.isInstancedMesh&&Se.instancing===!1||!me.isInstancedMesh&&Se.instancing===!0||me.isSkinnedMesh&&Se.skinning===!1||!me.isSkinnedMesh&&Se.skinning===!0||me.isInstancedMesh&&Se.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&Se.instancingColor===!1&&me.instanceColor!==null||me.isInstancedMesh&&Se.instancingMorph===!0&&me.morphTexture===null||me.isInstancedMesh&&Se.instancingMorph===!1&&me.morphTexture!==null||Se.envMap!==ct||ge.fog===!0&&Se.fog!==je||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==Tt||Se.vertexTangents!==At||Se.morphTargets!==ot||Se.morphNormals!==b||Se.morphColors!==G||Se.toneMapping!==O||Se.morphTargetsCount!==Ue||!!Se.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,Se.__version=ge.version);let Gt=Se.currentProgram;qe===!0&&(Gt=Mr(ge,J,me),q&&ge.isNodeMaterial&&q.onUpdateProgram(ge,Gt,Se));let xt=!1,ut=!1,Dt=!1;const vt=Gt.getUniforms(),Lt=Se.uniforms;if(He.useProgram(Gt.program)&&(xt=!0,ut=!0,Dt=!0),ge.id!==oe&&(oe=ge.id,ut=!0),Se.needsLights){const Et=Rs(P.state.lightProbeGridArray,me);Se.lightProbeGrid!==Et&&(Se.lightProbeGrid=Et,ut=!0)}if(xt||K!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue($,"projectionMatrix",C.projectionMatrix),vt.setValue($,"viewMatrix",C.matrixWorldInverse);const yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue($,Wt.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&vt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&vt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,ut=!0,Dt=!0)}if(Se.needsLights&&(Ve.state.directionalShadowMap.length>0&&vt.setValue($,"directionalShadowMap",Ve.state.directionalShadowMap,E),Ve.state.spotShadowMap.length>0&&vt.setValue($,"spotShadowMap",Ve.state.spotShadowMap,E),Ve.state.pointShadowMap.length>0&&vt.setValue($,"pointShadowMap",Ve.state.pointShadowMap,E)),me.isSkinnedMesh){vt.setOptional($,me,"bindMatrix"),vt.setOptional($,me,"bindMatrixInverse");const Et=me.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),vt.setValue($,"boneTexture",Et.boneTexture,E))}me.isBatchedMesh&&(vt.setOptional($,me,"batchingTexture"),vt.setValue($,"batchingTexture",me._matricesTexture,E),vt.setOptional($,me,"batchingIdTexture"),vt.setValue($,"batchingIdTexture",me._indirectTexture,E),vt.setOptional($,me,"batchingColorTexture"),me._colorsTexture!==null&&vt.setValue($,"batchingColorTexture",me._colorsTexture,E));const on=ye.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ne.update(me,ye,Gt),(ut||Se.receiveShadow!==me.receiveShadow)&&(Se.receiveShadow=me.receiveShadow,vt.setValue($,"receiveShadow",me.receiveShadow)),(ge.isMeshStandardMaterial||ge.isMeshLambertMaterial||ge.isMeshPhongMaterial)&&ge.envMap===null&&J.environment!==null&&(Lt.envMapIntensity.value=J.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=LE()),ut){if(vt.setValue($,"toneMappingExposure",W.toneMappingExposure),Se.needsLights&&Oi(Lt,Dt),je&&ge.fog===!0&&ee.refreshFogUniforms(Lt,je),ee.refreshMaterialUniforms(Lt,ge,De,Ye,P.state.transmissionRenderTarget[C.id]),Se.needsLights&&Se.lightProbeGrid){const Et=Se.lightProbeGrid;Lt.probesSH.value=Et.texture,Lt.probesMin.value.copy(Et.boundingBox.min),Lt.probesMax.value.copy(Et.boundingBox.max),Lt.probesResolution.value.copy(Et.resolution)}ql.upload($,Zr(Se),Lt,E)}if(ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(ql.upload($,Zr(Se),Lt,E),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&vt.setValue($,"center",me.center),vt.setValue($,"modelViewMatrix",me.modelViewMatrix),vt.setValue($,"normalMatrix",me.normalMatrix),vt.setValue($,"modelMatrix",me.matrixWorld),ge.uniformsGroups!==void 0){const Et=ge.uniformsGroups;for(let yn=0,tt=Et.length;yn<tt;yn++){const Ut=Et[yn];ne.update(Ut,Gt),ne.bind(Ut,Gt)}}return Gt}function Oi(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Jt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return _e},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,J,ye){const ge=U.get(C);ge.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),U.get(C.texture).__webglTexture=J,U.get(C.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:ye,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){const ye=U.get(C);ye.__webglFramebuffer=J,ye.__useDefaultFramebuffer=J===void 0};const Xt=$.createFramebuffer();this.setRenderTarget=function(C,J=0,ye=0){X=C,te=J,_e=ye;let ge=null,me=!1,je=!1;if(C){const We=U.get(C);if(We.__useDefaultFramebuffer!==void 0){He.bindFramebuffer($.FRAMEBUFFER,We.__webglFramebuffer),Z.copy(C.viewport),Me.copy(C.scissor),ue=C.scissorTest,He.viewport(Z),He.scissor(Me),He.setScissorTest(ue),oe=-1;return}else if(We.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(We.__hasExternalTextures)E.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Tt=C.depthTexture;if(We.__boundDepthTexture!==Tt){if(Tt!==null&&U.has(Tt)&&(C.width!==Tt.image.width||C.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(je=!0);const ct=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?ge=ct[J][ye]:ge=ct[J],me=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?ge=U.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?ge=ct[ye]:ge=ct,Z.copy(C.viewport),Me.copy(C.scissor),ue=C.scissorTest}else Z.copy(be).multiplyScalar(De).floor(),Me.copy(Be).multiplyScalar(De).floor(),ue=Qe;if(ye!==0&&(ge=Xt),He.bindFramebuffer($.FRAMEBUFFER,ge)&&He.drawBuffers(C,ge),He.viewport(Z),He.scissor(Me),He.setScissorTest(ue),me){const We=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,ye)}else if(je){const We=J;for(let at=0;at<C.textures.length;at++){const ct=U.get(C.textures[at]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+at,ct.__webglTexture,ye,We)}}else if(C!==null&&ye!==0){const We=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,We.__webglTexture,ye)}oe=-1},this.readRenderTargetPixels=function(C,J,ye,ge,me,je,nt,We=0){if(!(C&&C.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){He.bindFramebuffer($.FRAMEBUFFER,at);try{const ct=C.textures[We],Tt=ct.format,At=ct.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+We),!gt.textureFormatReadable(Tt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(At)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ge&&ye>=0&&ye<=C.height-me&&$.readPixels(J,ye,ge,me,j.convert(Tt),j.convert(At),je)}finally{const ct=X!==null?U.get(X).__webglFramebuffer:null;He.bindFramebuffer($.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(C,J,ye,ge,me,je,nt,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at)if(J>=0&&J<=C.width-ge&&ye>=0&&ye<=C.height-me){He.bindFramebuffer($.FRAMEBUFFER,at);const ct=C.textures[We],Tt=ct.format,At=ct.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+We),!gt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ot),$.bufferData($.PIXEL_PACK_BUFFER,je.byteLength,$.STREAM_READ),$.readPixels(J,ye,ge,me,j.convert(Tt),j.convert(At),0);const b=X!==null?U.get(X).__webglFramebuffer:null;He.bindFramebuffer($.FRAMEBUFFER,b);const G=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Hv($,G,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ot),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,je),$.deleteBuffer(ot),$.deleteSync(G),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,ye=0){const ge=Math.pow(2,-ye),me=Math.floor(C.image.width*ge),je=Math.floor(C.image.height*ge),nt=J!==null?J.x:0,We=J!==null?J.y:0;E.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,ye,0,0,nt,We,me,je),He.unbindTexture()};const es=$.createFramebuffer(),Qi=$.createFramebuffer();this.copyTextureToTexture=function(C,J,ye=null,ge=null,me=0,je=0){let nt,We,at,ct,Tt,At,ot,b,G;const O=C.isCompressedTexture?C.mipmaps[je]:C.image;if(ye!==null)nt=ye.max.x-ye.min.x,We=ye.max.y-ye.min.y,at=ye.isBox3?ye.max.z-ye.min.z:1,ct=ye.min.x,Tt=ye.min.y,At=ye.isBox3?ye.min.z:0;else{const Lt=Math.pow(2,-me);nt=Math.floor(O.width*Lt),We=Math.floor(O.height*Lt),C.isDataArrayTexture?at=O.depth:C.isData3DTexture?at=Math.floor(O.depth*Lt):at=1,ct=0,Tt=0,At=0}ge!==null?(ot=ge.x,b=ge.y,G=ge.z):(ot=0,b=0,G=0);const ce=j.convert(J.format),Ue=j.convert(J.type);let Se;J.isData3DTexture?(E.setTexture3D(J,0),Se=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(E.setTexture2DArray(J,0),Se=$.TEXTURE_2D_ARRAY):(E.setTexture2D(J,0),Se=$.TEXTURE_2D),He.activeTexture($.TEXTURE0),He.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),He.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),He.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const Ve=He.getParameter($.UNPACK_ROW_LENGTH),qe=He.getParameter($.UNPACK_IMAGE_HEIGHT),Gt=He.getParameter($.UNPACK_SKIP_PIXELS),xt=He.getParameter($.UNPACK_SKIP_ROWS),ut=He.getParameter($.UNPACK_SKIP_IMAGES);He.pixelStorei($.UNPACK_ROW_LENGTH,O.width),He.pixelStorei($.UNPACK_IMAGE_HEIGHT,O.height),He.pixelStorei($.UNPACK_SKIP_PIXELS,ct),He.pixelStorei($.UNPACK_SKIP_ROWS,Tt),He.pixelStorei($.UNPACK_SKIP_IMAGES,At);const Dt=C.isDataArrayTexture||C.isData3DTexture,vt=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const Lt=U.get(C),on=U.get(J),Et=U.get(Lt.__renderTarget),yn=U.get(on.__renderTarget);He.bindFramebuffer($.READ_FRAMEBUFFER,Et.__webglFramebuffer),He.bindFramebuffer($.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let tt=0;tt<at;tt++)Dt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(C).__webglTexture,me,At+tt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(J).__webglTexture,je,G+tt)),$.blitFramebuffer(ct,Tt,nt,We,ot,b,nt,We,$.DEPTH_BUFFER_BIT,$.NEAREST);He.bindFramebuffer($.READ_FRAMEBUFFER,null),He.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(me!==0||C.isRenderTargetTexture||U.has(C)){const Lt=U.get(C),on=U.get(J);He.bindFramebuffer($.READ_FRAMEBUFFER,es),He.bindFramebuffer($.DRAW_FRAMEBUFFER,Qi);for(let Et=0;Et<at;Et++)Dt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Lt.__webglTexture,me,At+Et):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Lt.__webglTexture,me),vt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,je,G+Et):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,je),me!==0?$.blitFramebuffer(ct,Tt,nt,We,ot,b,nt,We,$.COLOR_BUFFER_BIT,$.NEAREST):vt?$.copyTexSubImage3D(Se,je,ot,b,G+Et,ct,Tt,nt,We):$.copyTexSubImage2D(Se,je,ot,b,ct,Tt,nt,We);He.bindFramebuffer($.READ_FRAMEBUFFER,null),He.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else vt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(Se,je,ot,b,G,nt,We,at,ce,Ue,O.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(Se,je,ot,b,G,nt,We,at,ce,O.data):$.texSubImage3D(Se,je,ot,b,G,nt,We,at,ce,Ue,O):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,je,ot,b,nt,We,ce,Ue,O.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,je,ot,b,O.width,O.height,ce,O.data):$.texSubImage2D($.TEXTURE_2D,je,ot,b,nt,We,ce,Ue,O);He.pixelStorei($.UNPACK_ROW_LENGTH,Ve),He.pixelStorei($.UNPACK_IMAGE_HEIGHT,qe),He.pixelStorei($.UNPACK_SKIP_PIXELS,Gt),He.pixelStorei($.UNPACK_SKIP_ROWS,xt),He.pixelStorei($.UNPACK_SKIP_IMAGES,ut),je===0&&J.generateMipmaps&&$.generateMipmap(Se),He.unbindTexture()},this.initRenderTarget=function(C){U.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){te=0,_e=0,X=null,He.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Fe.createElement("svg",{ref:h,...OE,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:hg("lucide",o),...f},[...u.map(([p,v])=>Fe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(s,e)=>{const t=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(kE,{ref:l,iconNode:e,className:hg(`lucide-${FE(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Ot("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Ot("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Ot("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Ot("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Ot("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Ot("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=Ot("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Ot("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Ot("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Ot("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=Ot("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Ot("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Ot("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Ot("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Ot("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=Ot("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Ot("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Ot("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Ot("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=Ot("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=Ot("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Ot("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=Ot("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=Ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Ot("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=Ot("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=Ot("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Ot("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Ot("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Ot("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Ot("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Ot("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Ot("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Ot("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Ot("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=Ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Ot("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=Ot("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Ot("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=Ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Ot("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Ot("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),b0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},aw=({direction:s,className:e})=>{const r={none:E0,up:XE,down:VE,left:HE,right:GE,"up-left":jE,"up-right":WE,"down-left":BE,"down-right":zE}[s]||E0;return g.jsx(r,{className:e})},vi=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},Xr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},_i=s=>JSON.parse(JSON.stringify(s)),T0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new kf(s),l=new zf(o,Math.max(8,s.length*12),e,12,!1),u=new qr({color:t,transparent:r<1,opacity:r});return new jn(l,u)},ow=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const p=t/h;return{x:u.x+(f.x-u.x)*p,y:u.y+(f.y-u.y)*p,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},lw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),cw=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),uw=s=>{if(!s||s.length<2)return null;const e=new kf(s),t=Math.max(cw(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new Es;for(let u=0;u<r;u++){const f=new Es,h=new jn(new nc(.14,.34,24),new qr({color:16777215,transparent:!0,opacity:.22})),p=new jn(new nc(.09,.28,24),new qr({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(p),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},dw=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ie(0,1,0),f),o.children.forEach((h,p)=>{h.material.opacity=(p===0?.16:.58)+(p===0?.18:.4)*Math.sin(l*Math.PI)})})},ha=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],fw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:ha(s),buildings:co()}),Hl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...ha(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function hw({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var ct,Tt,At,ot;const[r,o]=Fe.useState(e),[l,u]=Fe.useState(!1),[f,h]=Fe.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[p,v]=Fe.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Fe.useState({isOpen:!1,message:""}),[M,A]=Fe.useState(!1),[I,y]=Fe.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Fe.useRef(!1),[D,R]=Fe.useState(()=>{if(t)return[Hl({})];try{const O=localStorage.getItem("arManager_projects");if(O){const ce=JSON.parse(O);if(Array.isArray(ce)&&ce.length>0)return ce}}catch(O){console.error("Project load error:",O)}let b=ha("預設導引專案"),G=co();try{const O=localStorage.getItem("arManager_config");O&&(b={...b,...JSON.parse(O)});const ce=localStorage.getItem("arManager_buildings");ce&&(G=JSON.parse(ce))}catch(O){console.error("Legacy AR data migration error:",O)}return[{id:`project_${Date.now()}`,name:b.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:b,buildings:G}]}),[N,z]=Fe.useState((ct=D[0])==null?void 0:ct.id),P=D.find(b=>b.id===N)||D[0],[F,w]=Fe.useState(()=>_i((P==null?void 0:P.systemConfig)||ha())),[L,W]=Fe.useState(()=>_i((P==null?void 0:P.buildings)||co())),[V,q]=Fe.useState((Tt=L[0])==null?void 0:Tt.id),[te,_e]=Fe.useState((ot=(At=L[0])==null?void 0:At.floors[0])==null?void 0:ot.id),[X,oe]=Fe.useState(""),[K,Z]=Fe.useState(null),[Me,ue]=Fe.useState(null),[k,le]=Fe.useState(null),[Xe,Ye]=Fe.useState(!1),[De,pe]=Fe.useState(!1),[Te,be]=Fe.useState(!1),[Be,Qe]=Fe.useState(null),[st,mt]=Fe.useState(null),[pt,kt]=Fe.useState(!1),[Wt,Mt]=Fe.useState({x:0,y:0}),[Bt,It]=Fe.useState({x:0,y:0}),[Ht,$]=Fe.useState(!1),[St,Ze]=Fe.useState(!1),[gt,He]=Fe.useState([]),[Rt,U]=Fe.useState(!1),[E,re]=Fe.useState([]),[H,se]=Fe.useState([]),ae=Fe.useRef(null),de=Fe.useRef(null),ee=Fe.useRef(null),he=Fe.useRef(null),[ve,Le]=Fe.useState({x:0,y:0,scale:1});Fe.useEffect(()=>{const b=G=>{var ce;const O=(ce=G==null?void 0:G.detail)==null?void 0:ce.tab;["map","list","settings","export"].includes(O)&&Oi(O)};return window.addEventListener("ar-manager:set-tab",b),()=>window.removeEventListener("ar-manager:set-tab",b)},[]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(D))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[D,t]),Fe.useEffect(()=>{if(!t)return;let b=!1;return(async()=>{const O=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(O.ok)return O.json();const ce=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!ce.ok)throw new Error(`Unable to load AR data: ${ce.status}`);return ce.json()})().then(O=>{var Ue,Se,Ve;if(b)return;const ce=Hl(O);R([ce]),z(ce.id),w(_i(ce.systemConfig)),W(_i(ce.buildings)),q((Ue=ce.buildings[0])==null?void 0:Ue.id),_e((Ve=(Se=ce.buildings[0])==null?void 0:Se.floors[0])==null?void 0:Ve.id)}).catch(O=>{console.warn("Published AR data unavailable",O),b||(R([Hl({})]),w(ha("AR導覽")),W([]))}),()=>{b=!0}},[t]),Fe.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let b=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(G=>{if(!G.ok)throw new Error(`Unable to load AR data: ${G.status}`);return G.json()}).then(G=>{var ce,Ue,Se;if(b||!Array.isArray(G==null?void 0:G.buildings)||G.buildings.length===0)return;const O=Hl(G);R([O]),z(O.id),w(_i(O.systemConfig)),W(_i(O.buildings)),q((ce=O.buildings[0])==null?void 0:ce.id),_e((Se=(Ue=O.buildings[0])==null?void 0:Ue.floors[0])==null?void 0:Se.id)}).catch(G=>console.warn("Published AR admin seed unavailable",G)),()=>{b=!0}},[t]),Fe.useEffect(()=>{var G,O,ce;if(t||!P)return;_.current=!0;const b=_i(P.buildings||co());w(_i(P.systemConfig||ha(P.name))),W(b),q((G=b[0])==null?void 0:G.id),_e((ce=(O=b[0])==null?void 0:O.floors[0])==null?void 0:ce.id),Z(null),ue(null),oe(""),Le({x:0,y:0,scale:1})},[N,t]),Fe.useEffect(()=>{if(!t&&N){if(_.current){_.current=!1;return}R(b=>b.map(G=>G.id===N?{...G,name:F.projectName||G.name,systemConfig:_i(F),buildings:_i(L),updatedAt:new Date().toISOString()}:G))}},[N,L,F,t]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(L))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[L,t]),Fe.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(F))}catch(b){console.error("Config save error:",b)}},[F,t]),Fe.useEffect(()=>{var G;const b=L.find(O=>O.id===V);b?b.floors.find(O=>O.id===te)||b.floors.length>0&&_e(b.floors[0].id):L.length>0&&(q(L[0].id),_e((G=L[0].floors[0])==null?void 0:G.id))},[L,V,te]),Fe.useEffect(()=>{X===te&&oe("")},[te,X]),Fe.useEffect(()=>{Ye(!1)},[K,Me]),Fe.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||A(!0)},[]);const Ae=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(G=>G.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),A(!1)},we=L.find(b=>b.id===V)||L[0],Ne=we==null?void 0:we.floors.find(b=>b.id===te),et=(Ne==null?void 0:Ne.markers)||[],Ke=(Ne==null?void 0:Ne.waypoints)||[],j=(Ne==null?void 0:Ne.edges)||[],Ce=Xr(Ne),ne=(b,G,O=!0)=>{W(ce=>{let Ue=null,Se=null,Ve=null;if(ce.forEach(Dt=>Dt.floors.forEach(vt=>{const Lt=O?vt.markers:vt.waypoints,on=Lt==null?void 0:Lt.find(Et=>Et.id===b);on&&(Ue=on,Se=Dt.id,Ve=vt)})),!Ue)return ce;const qe=G.shaftId!==void 0?G.shaftId:Ue.shaftId,xt=(G.isVerticalShaft!==void 0?G.isVerticalShaft:Ue.isVerticalShaft)&&qe,ut=Xr(Ve);return ce.map(Dt=>Dt.id!==Se&&!xt?Dt:{...Dt,floors:Dt.floors.map(vt=>{let Lt=O?[...vt.markers||[]]:[...vt.waypoints||[]];const on=Et=>{const yn={...Et,...G};if((G.x!==void 0||G.y!==void 0)&&vt.id!==Ve.id){const tt=Xr(vt);if(G.x!==void 0){const Ut=ut.blX+G.x*(ut.trX-ut.blX);yn.x=tt.trX!==tt.blX?(Ut-tt.blX)/(tt.trX-tt.blX):.5}if(G.y!==void 0){const Ut=ut.trY-G.y*(ut.trY-ut.blY);yn.y=tt.trY!==tt.blY?(tt.trY-Ut)/(tt.trY-tt.blY):.5}}return yn};return xt?Lt=Lt.map(Et=>Et.shaftId===qe||Et.id===b?on(Et):Et):Lt=Lt.map(Et=>Et.id===b?on(Et):Et),O?{...vt,markers:Lt}:{...vt,waypoints:Lt}})})})},Pe=(b,G,O)=>ne(b,{[G]:O},!0),Ie=(b,G,O)=>ne(b,{[G]:O},!1),Re=(b,G,O=!0)=>{if(G){const ce=O?"shaft_m_":"shaft_wp_",Se={isVerticalShaft:!0,shaftId:b.shaftId||`${ce}${Date.now()}`,linkedFloorIds:[te]};O||(Se.sourceFloorId=te),ne(b.id,Se,O)}else{const ce=b.shaftId;W(Ue=>Ue.map(Se=>Se.id!==V?Se:{...Se,floors:Se.floors.map(Ve=>{const qe=Gt=>(Gt||[]).filter(xt=>!(Ve.id!==te&&xt.shaftId===ce)).map(xt=>xt.id===b.id?{...xt,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:xt);return O?{...Ve,markers:qe(Ve.markers)}:{...Ve,waypoints:qe(Ve.waypoints)}})}))}},$e=(b,G,O,ce=!0)=>{const Ue=b.shaftId,Se=b.linkedFloorIds||[te],Ve=O?[...Se,G]:Se.filter(qe=>qe!==G);W(qe=>qe.map(Gt=>Gt.id!==V?Gt:{...Gt,floors:Gt.floors.map(xt=>{let ut=ce?[...xt.markers||[]]:[...xt.waypoints||[]];if(O&&xt.id===G){const Dt=Xr(xt),vt=Xr(Ne),Lt=vt.blX+b.x*(vt.trX-vt.blX),on=vt.trY-b.y*(vt.trY-vt.blY),Et=Dt.trX!==Dt.blX?(Lt-Dt.blX)/(Dt.trX-Dt.blX):.5,yn=Dt.trY!==Dt.blY?(Dt.trY-on)/(Dt.trY-Dt.blY):.5,tt=ce?"marker_":"wp_";ut.push({...b,id:`${tt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${xt.id}`,x:Et,y:yn,linkedFloorIds:Ve})}else!O&&xt.id===G?ut=ut.filter(Dt=>Dt.shaftId!==Ue):ut=ut.map(Dt=>Dt.shaftId===Ue?{...Dt,linkedFloorIds:Ve}:Dt);return ce?{...xt,markers:ut}:{...xt,waypoints:ut}})}))},ft=b=>{let G=null,O=new Set([b]);L.forEach(ce=>ce.floors.forEach(Ue=>{var Se;Ue.markers.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(G=Ve.shaftId)}),(Se=Ue.waypoints)==null||Se.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(G=Ve.shaftId)})})),G&&L.forEach(ce=>ce.floors.forEach(Ue=>{var Se;Ue.markers.forEach(Ve=>{Ve.shaftId===G&&O.add(Ve.id)}),(Se=Ue.waypoints)==null||Se.forEach(Ve=>{Ve.shaftId===G&&O.add(Ve.id)})})),W(ce=>ce.map(Ue=>({...Ue,floors:Ue.floors.map(Se=>({...Se,markers:(Se.markers||[]).filter(Ve=>!O.has(Ve.id)),waypoints:(Se.waypoints||[]).filter(Ve=>!O.has(Ve.id)),edges:(Se.edges||[]).filter(Ve=>!O.has(Ve.start)&&!O.has(Ve.end))}))}))),O.has(K)&&Z(null),O.has(Me)&&ue(null),O.has(Be)&&(Qe(null),mt(null)),Ye(!1)},Nt=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:b=>{if(!b)return;const G=`b_${Date.now()}`,O=`f_${Date.now()}`;W(ce=>[...ce,{id:G,name:b,floors:[{id:O,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),q(G),_e(O)}})},Pt=()=>{we&&h({isOpen:!0,title:`新增 ${we.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:b=>{if(!b)return;const G=`f_${Date.now()}`,O=Ne?{...Xr(Ne)}:{blX:0,blY:0,trX:100,trY:100};W(ce=>ce.map(Ue=>Ue.id===V?{...Ue,floors:[...Ue.floors,{id:G,name:b,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:O}]}:Ue)),_e(G)}})},an=b=>{const G=b.target.files[0],O=b.target;if(G&&V&&te){const ce=V,Ue=te,Se=new FileReader;Se.onload=Ve=>{b0(Ve.target.result,1600,qe=>{W(Gt=>Gt.map(xt=>xt.id===ce?{...xt,floors:xt.floors.map(ut=>ut.id===Ue?{...ut,imageUrl:qe}:ut)}:xt)),$(!1)})},Se.readAsDataURL(G)}O.value=""},tn=(b,G)=>{const O=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,ce={id:O,x:b,y:G,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:te};W(Ue=>Ue.map(Se=>Se.id===V?{...Se,floors:Se.floors.map(Ve=>{if(Ve.id!==te)return Ve;const qe=Be?[...Ve.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:O}]:Ve.edges||[];return{...Ve,waypoints:[...Ve.waypoints||[],ce],edges:qe}})}:Se)),Qe(O)},dn=b=>{if(Be===b){Qe(null),mt(null);return}Be&&Be!==b&&(j.some(O=>O.start===Be&&O.end===b||O.end===Be&&O.start===b)||W(O=>O.map(ce=>ce.id===V?{...ce,floors:ce.floors.map(Ue=>Ue.id===te?{...Ue,edges:[...Ue.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:b}]}:Ue)}:ce))),Qe(b)},Wn=(b,G)=>{for(let ce of et)if(Math.hypot(ce.x-b,ce.y-G)<.03)return ce.id;for(let ce of Ke)if(Math.hypot(ce.x-b,ce.y-G)<.03)return ce.id;return null};Fe.useEffect(()=>{const b=G=>{G.key==="Escape"&&De&&(Qe(null),mt(null))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[De]);const Xn=(b,G)=>{const O={},ce=[],Ue={};L.forEach(tt=>{tt.floors.forEach(Ut=>{var wi,Er;const fn=Ut.bounds||{blX:0,blY:0,trX:100,trY:100},Yn=(Zt,ki)=>({physX:fn.blX+Zt*(fn.trX-fn.blX),physY:fn.trY-ki*(fn.trY-fn.blY)});Ut.markers.forEach(Zt=>{O[Zt.id]={...Zt,...Yn(Zt.x,Zt.y),fId:Ut.id,fName:Ut.name},Zt.isVerticalShaft&&Zt.shaftId&&(Ue[Zt.shaftId]||(Ue[Zt.shaftId]=[]),Ue[Zt.shaftId].push(Zt.id))}),(wi=Ut.waypoints)==null||wi.forEach(Zt=>{O[Zt.id]={...Zt,...Yn(Zt.x,Zt.y),fId:Ut.id,fName:Ut.name},Zt.isVerticalShaft&&Zt.shaftId&&(Ue[Zt.shaftId]||(Ue[Zt.shaftId]=[]),Ue[Zt.shaftId].push(Zt.id))}),(Er=Ut.edges)==null||Er.forEach(Zt=>ce.push(Zt))})});const Se={};Object.keys(O).forEach(tt=>{Se[tt]={}}),ce.forEach(tt=>{if(O[tt.start]&&O[tt.end]){const Ut=Math.hypot(O[tt.start].physX-O[tt.end].physX,O[tt.start].physY-O[tt.end].physY);Se[tt.start][tt.end]=Ut,Se[tt.end][tt.start]=Ut}}),Object.values(Ue).forEach(tt=>{for(let Ut=0;Ut<tt.length;Ut++)for(let fn=Ut+1;fn<tt.length;fn++)Se[tt[Ut]][tt[fn]]=5,Se[tt[fn]][tt[Ut]]=5});const Ve=tt=>Object.keys(Se[tt]).length>0;let qe=null,Gt=1/0,xt=null,ut=1/0;if(Object.values(O).forEach(tt=>{if(Ve(tt.id)){if(tt.fId===b.fId){const Ut=Math.hypot(tt.x-b.x,tt.y-b.y);Ut<Gt&&(Gt=Ut,qe=tt.id)}if(tt.fId===G.fId){const Ut=Math.hypot(tt.x-G.x,tt.y-G.y);Ut<ut&&(ut=Ut,xt=tt.id)}}}),!qe||!xt){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),re([]),se([]);return}const Dt={},vt={},Lt=new Set(Object.keys(O));for(Object.keys(O).forEach(tt=>{Dt[tt]=1/0,vt[tt]=null}),Dt[qe]=0;Lt.size>0;){let tt=null;if(Lt.forEach(Ut=>{(tt===null||Dt[Ut]<Dt[tt])&&(tt=Ut)}),Dt[tt]===1/0||tt===xt)break;Lt.delete(tt),Object.entries(Se[tt]).forEach(([Ut,fn])=>{if(Lt.has(Ut)){const Yn=Dt[tt]+fn;Yn<Dt[Ut]&&(Dt[Ut]=Yn,vt[Ut]=tt)}})}const on=[];let Et=xt;for(;Et;)on.unshift(Et),Et=vt[Et];if(on.length===0||on[0]!==qe){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),re([]),se([]);return}const yn=[{x:b.x,y:b.y,fId:b.fId,fName:b.fName,isVirtual:!0},...on.map(tt=>O[tt]),{x:G.x,y:G.y,fId:G.fId,fName:G.fName,isVirtual:!0}];se(yn)};Fe.useEffect(()=>{const b=ae.current;if(!b||r!=="map")return;const G=O=>{O.preventDefault();const ce=b.getBoundingClientRect(),Ue=O.clientX-ce.left,Se=O.clientY-ce.top,Ve=O.deltaY<0?1.1:.9;Le(qe=>{const Gt=Math.max(.1,Math.min(10,qe.scale*Ve)),xt=Gt/qe.scale;return{x:Ue-(Ue-qe.x)*xt,y:Se-(Se-qe.y)*xt,scale:Gt}})};return b.addEventListener("wheel",G,{passive:!1}),()=>b.removeEventListener("wheel",G)},[r]);const Rn=b=>{b.button!==void 0&&b.button!==0||b.target.closest(".marker-pin")||b.target.closest(".waypoint-pin")||(kt(!0),Mt({x:b.clientX-ve.x,y:b.clientY-ve.y}),It({x:b.clientX,y:b.clientY}),b.target.setPointerCapture(b.pointerId))},Ei=b=>{if(pt)Le(G=>({...G,x:b.clientX-Wt.x,y:b.clientY-Wt.y}));else if(De&&Be&&de.current){const G=de.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(b.clientX-G.left)/G.width)),ce=Math.max(0,Math.min(1,(b.clientY-G.top)/G.height));mt({x:O,y:ce})}else if(k&&de.current){const G=de.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(b.clientX-G.left)/G.width)),ce=Math.max(0,Math.min(1,(b.clientY-G.top)/G.height));k.startsWith("marker_")?(Pe(k,"x",O),Pe(k,"y",ce)):k.startsWith("wp_")&&(Ie(k,"x",O),Ie(k,"y",ce))}},yr=b=>{if(pt&&(kt(!1),b.target.releasePointerCapture(b.pointerId),Math.hypot(b.clientX-Bt.x,b.clientY-Bt.y)<5)){if(!(Ne!=null&&Ne.imageUrl)||!de.current)return;const O=de.current.getBoundingClientRect();let ce=Math.max(0,Math.min(1,(b.clientX-O.left)/O.width)),Ue=Math.max(0,Math.min(1,(b.clientY-O.top)/O.height));if(Rt){const Se={x:ce,y:Ue,fId:te,fName:Ne==null?void 0:Ne.name},Ve=E.length>=2?[Se]:[...E,Se];re(Ve),Ve.length===1&&se([]),Ve.length===2&&Xn(Ve[0],Ve[1])}else if(De){const Se=Wn(ce,Ue);Se?dn(Se):tn(ce,Ue)}else if(Ht){const Se=L.reduce((qe,Gt)=>qe+Gt.floors.reduce((xt,ut)=>xt+ut.markers.length,0),0),Ve={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${Se+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:ce,y:Ue,imageUrl:null,enabled:!0,recognitionStatus:"untested"};W(qe=>qe.map(Gt=>Gt.id===V?{...Gt,floors:Gt.floors.map(xt=>xt.id===te?{...xt,markers:[...xt.markers,Ve]}:xt)}:Gt)),Z(Ve.id),ue(null),$(!1)}else St?He(Se=>Se.length>=2?[{x:ce,y:Ue}]:[...Se,{x:ce,y:Ue}]):(Z(null),ue(null))}},Cs=b=>{const G=b.target.files[0],O=b.target;if(G&&K){const ce=K,Ue=new FileReader;Ue.onload=Se=>{b0(Se.target.result,800,Ve=>{Pe(ce,"imageUrl",Ve),Pe(ce,"recognitionStatus","untested")})},Ue.readAsDataURL(G)}O.value=""},ni=(b,G,O)=>{q(b),_e(G),Z(O),ue(null),o("map")},Fi=async()=>{const b={version:"7.0",project:{id:N,name:F.projectName||(P==null?void 0:P.name)||"AR導覽",description:(P==null?void 0:P.description)||"",updatedAt:new Date().toISOString()},systemConfig:_i(F),buildings:_i(L)};R(G=>G.map(O=>O.id===N?{...O,name:b.project.name,systemConfig:b.systemConfig,buildings:b.buildings,updatedAt:b.project.updatedAt}:O));try{const G=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),O=await G.json().catch(()=>({}));if(!G.ok)throw new Error(O.error||`Save failed: ${G.status}`);x({isOpen:!0,message:`「${b.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(G){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${G.message}`})}},Sr=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${D.length+1}`,onSubmit:b=>{if(!b)return;const G=fw(b);R(O=>[...O,G]),z(G.id),o("map")}})},Mr=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(P==null?void 0:P.name)||F.projectName||"",onSubmit:b=>{b&&(w(G=>({...G,projectName:b})),R(G=>G.map(O=>O.id===N?{...O,name:b,systemConfig:{...O.systemConfig,projectName:b},updatedAt:new Date().toISOString()}:O)))}})},Zr=()=>{if(D.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(P==null?void 0:P.name)||F.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(b=>{var O;const G=b.filter(ce=>ce.id!==N);return z((O=G[0])==null?void 0:O.id),G})}})},Jr=()=>{W(co()),Z(null),ue(null),Le({x:0,y:0,scale:1}),$(!1),pe(!1),be(!1),Qe(null),mt(null),U(!1),re([]),se([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Rs=()=>{const b=(F.projectName||(P==null?void 0:P.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),G="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:N,name:F.projectName||(P==null?void 0:P.name),description:(P==null?void 0:P.description)||"",updatedAt:P==null?void 0:P.updatedAt},systemConfig:F,buildings:L},null,2)),O=document.createElement("a");O.setAttribute("href",G),O.setAttribute("download",`${b}_ar_config_v7.json`),document.body.appendChild(O),O.click(),O.remove()},Qr=()=>{if(!(Ne!=null&&Ne.imageUrl)||!ae.current||!de.current){Le({x:0,y:0,scale:1});return}const b=ae.current,G=de.current.querySelector("img");if(!G||G.naturalWidth===0)return;const{width:O,height:ce}=b.getBoundingClientRect(),Ue=Math.min(O/G.naturalWidth,ce/G.naturalHeight,1)*.9;Le({x:(O-G.naturalWidth*Ue)/2,y:(ce-G.naturalHeight*Ue)/2,scale:Ue})},Oi=b=>{o(b),u(!1),$(!1),Ze(!1),pe(!1),be(!1),Qe(null),mt(null),U(!1),re([]),se([])};let Jt=null,Xt=null;L.forEach(b=>b.floors.forEach(G=>{var O;G.markers.forEach(ce=>{ce.id===K&&(Jt=ce,b.name,G.name)}),(O=G.waypoints)==null||O.forEach(ce=>{ce.id===Me&&(Xt=ce,b.name,G.name)})}));let es=0,Qi=0;const C=document.getElementById("current-map-image"),J=Ce.trX-Ce.blX,ye=Ce.trY-Ce.blY;if(C&&J>0){const b=C.offsetWidth*ve.scale;if(b>0){const G=J/b,O=100*G;es=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Ue=>Ue<=O)||.5,Qi=es/G}}const ge=L.reduce((b,G)=>b+G.floors.reduce((O,ce)=>O+(ce.markers||[]).length,0),0),me=L.reduce((b,G)=>b+G.floors.length,0),je=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:N,onChange:b=>z(b.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:D.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-950",children:b.name},b.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",D.length," 個專案 · ",L.length," 棟建築 · ",me," 個樓層 · ",ge," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Sr,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Vl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:Mr,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:Fi,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ho,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:Zr,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Cd,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),nt=()=>{const b=new Set,G=L.flatMap(O=>O.floors.flatMap(ce=>(ce.markers||[]).reduce((Ue,Se)=>{if(Se.isVerticalShaft&&Se.shaftId){if(b.has(Se.shaftId))return Ue;b.add(Se.shaftId)}return Ue.push({...Se,bId:O.id,fId:ce.id,buildingName:O.name,floorName:ce.name}),Ue},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[je(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",G.length," 組節點"]})]}),G.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>Oi("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:G.map(O=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[O.imageUrl?g.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(S0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:O.code}),g.jsx(Mf,{status:O.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:O.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[O.buildingName," · ",O.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${O.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:O.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>ni(O.bId,O.fId,O.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Ad,{className:"w-4 h-4"}),"編輯"]})]})]},O.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:G.map(O=>{var Ue;const ce=O.isVerticalShaft?(Ue=L.find(Se=>Se.id===O.bId))==null?void 0:Ue.floors.filter(Se=>{var Ve;return(Ve=O.linkedFloorIds)==null?void 0:Ve.includes(Se.id)}).sort((Se,Ve)=>vi(Ve.name)-vi(Se.name)).map(Se=>Se.name).join(", "):O.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${O.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:O.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${O.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:ce})]}),g.jsx("td",{className:"px-4 py-4",children:O.imageUrl?g.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(S0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:O.code}),O.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(Wr,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):O.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(aw,{direction:O.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:O.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:O.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:O.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Mf,{status:O.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>ni(O.bId,O.fId,O.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Ad,{className:"w-4 h-4"})})})]},O.id)})})]})})})]})]})})},We=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[je(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(w0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(qE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:F.projectName,onChange:b=>w({...F,projectName:b.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:F.lerpFactor,onChange:b=>w({...F,lerpFactor:parseInt(b.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Jr()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),at=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[je(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(Td,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.reduce((b,G)=>b+G.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.reduce((b,G)=>b+G.floors.reduce((O,ce)=>O+(ce.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(y0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:Rs,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(Td,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(A0,{buildings:L,systemConfig:F,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(xs,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Gl,{icon:g.jsx(M0,{}),label:"平面圖管理",active:r==="map",onClick:()=>Oi("map")}),g.jsx(Gl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>Oi("list")}),g.jsx(Gl,{icon:g.jsx(w0,{}),label:"系統設定",active:r==="settings",onClick:()=>Oi("settings")}),g.jsx(Gl,{icon:g.jsx(Td,{}),label:"匯出JSON",active:r==="export",onClick:()=>Oi("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(A0,{buildings:L,systemConfig:F,onMenuClick:()=>u(!0)}),r==="list"&&nt(),r==="settings"&&We(),r==="export"&&at(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(fa,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:N,onChange:b=>z(b.target.value),children:D.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Sr,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(Vl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:Fi,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ho,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(YE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:V,onChange:b=>q(b.target.value),children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Nt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),we&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(ZE,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:te,onChange:b=>_e(b.target.value),children:we.floors.slice().sort((b,G)=>vi(G.name)-vi(b.name)).map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Pt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx($E,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:X,onChange:b=>oe(b.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),L.flatMap(b=>b.floors.filter(G=>G.id!==te).sort((G,O)=>vi(O.name)-vi(G.name)).map(G=>g.jsxs("option",{value:G.id,className:"bg-slate-900",children:[b.name,"-",G.name]},G.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{Ne!=null&&Ne.imageUrl&&(U(!Rt),pe(!1),be(!1),$(!1),Ze(!1),Qe(null),Z(null),ue(null),mt(null),re([]),se([]))},disabled:!(Ne!=null&&Ne.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Rt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Rt?g.jsx(xs,{className:"w-5 h-5"}):g.jsx(_0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(Ne==null?void 0:Ne.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{be(!Te),pe(!1),U(!1),$(!1),Ze(!1),Qe(null),Z(null),ue(null),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Te?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:Te?g.jsx(xs,{className:"w-5 h-5"}):g.jsx(Wr,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{pe(!De),be(!1),U(!1),$(!1),Ze(!1),Qe(null),Z(null),ue(null),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${De?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:De?g.jsx(xs,{className:"w-5 h-5"}):g.jsx(pg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{Ze(!St),be(!1),U(!1),$(!1),pe(!1),He([]),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${St?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:St?g.jsx(xs,{className:"w-5 h-5"}):g.jsx(nw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{$(!Ht),be(!1),U(!1),Ze(!1),pe(!1),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ht?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Ht?g.jsx(xs,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:Ce.blX,blY:Ce.blY,trX:Ce.trX,trY:Ce.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(fa,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:ee,onChange:an,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>ee.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(sw,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:ae,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${De?"cursor-crosshair":Te?"cursor-pointer":Ht||St||Rt?"cursor-crosshair":pt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:Rn,onPointerMove:Ei,onPointerUp:yr,onPointerCancel:yr,children:[g.jsxs("div",{ref:de,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${ve.x}px, ${ve.y}px) scale(${ve.scale})`},children:[X&&(()=>{let b=null;if(L.forEach(Ve=>Ve.floors.forEach(qe=>{qe.id===X&&(b=qe)})),!b)return null;const G=Xr(b),O=J!==0?(G.trX-G.blX)/J:1,ce=ye!==0?(G.trY-G.blY)/ye:1,Ue=J!==0?(G.blX-Ce.blX)/J:0,Se=ye!==0?(Ce.trY-G.trY)/ye:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Ue*100}%`,top:`${Se*100}%`,width:`${O*100}%`,height:`${ce*100}%`,opacity:.4},children:[b.imageUrl&&g.jsx("img",{src:b.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),b.markers.map(Ve=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ve.x*100}%`,top:`${Ve.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`},children:Ve.code})})},Ve.id))]})})(),(Ne==null?void 0:Ne.imageUrl)&&g.jsx("img",{id:"current-map-image",src:Ne.imageUrl,alt:"Floor Plan",onLoad:Qr,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${X?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),j.map(b=>{const G=et.find(ce=>ce.id===b.start)||Ke.find(ce=>ce.id===b.start),O=et.find(ce=>ce.id===b.end)||Ke.find(ce=>ce.id===b.end);return G&&O?g.jsx("line",{x1:`${G.x*100}%`,y1:`${G.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,ve.scale),strokeOpacity:"0.7"},b.id):null}),De&&Be&&st&&(()=>{const b=et.find(G=>G.id===Be)||Ke.find(G=>G.id===Be);return b?g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${st.x*100}%`,y2:`${st.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,ve.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Rt&&H.length>0&&H.map((b,G)=>{if(G===H.length-1)return null;const O=H[G+1],ce=[];return b.fId===te&&O.fId===te?ce.push(g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,ve.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${G}`)):b.fId===te&&O.fId!==te?ce.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:12/Math.max(.5,ve.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,ve.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,ve.scale),to:35/Math.max(.5,ve.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.5,ve.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${b.x*100}%`,y:`${b.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,ve.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",O.fName]})]},`leave_${G}`)):b.fId!==te&&O.fId===te&&ce.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:12/Math.max(.5,ve.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,ve.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,ve.scale),to:35/Math.max(.5,ve.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:6/Math.max(.5,ve.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${O.x*100}%`,y:`${O.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,ve.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",b.fName]})]},`enter_${G}`)),g.jsx(wf.Fragment,{children:ce},`testfrag_${G}`)})]}),Ke.map(b=>{const G=Me===b.id,O=Be===b.id,ce=b.isVerticalShaft&&b.sourceFloorId&&b.sourceFloorId!==te;let Ue="bg-orange-500",Se="border-white",Ve="";return b.isVerticalShaft&&(Ue="bg-green-500"),O?(Ue="bg-white",Se=ce?"border-green-500":"border-orange-500",Ve=ce?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):G&&(Se="border-cyan-400 border-2",Ve="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${G?"z-40":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:qe=>{qe.stopPropagation(),qe.button===0&&(De?dn(b.id):Te?(b.isVerticalShaft||Re(b,!0,!1),Z(null),ue(b.id)):!Rt&&!St&&!pt&&!Ht&&(Z(null),ue(b.id),le(b.id),qe.target.setPointerCapture(qe.pointerId)))},onPointerUp:qe=>{qe.stopPropagation(),qe.target.releasePointerCapture(qe.pointerId)},onContextMenu:qe=>{qe.preventDefault(),De?ft(b.id):Te?b.isVerticalShaft&&Re(b,!1,!1):!Rt&&!St&&!Ht&&(Z(null),ue(b.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Ue} ${Se} ${Ve}`,style:{width:`${(O?14:10)/Math.max(.5,ve.scale)}px`,height:`${(O?14:10)/Math.max(.5,ve.scale)}px`,borderWidth:G?"2px":"1px"},children:b.isVerticalShaft&&g.jsx(Wr,{className:O?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,ve.scale)}px`,height:`${6/Math.max(.5,ve.scale)}px`}})})},b.id)}),Rt&&E.map((b,G)=>b.fId!==te?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${b.x*100}%`,top:`${b.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,ve.scale)}px`,height:`${16/Math.max(.5,ve.scale)}px`},children:G===0?"起":"終"})},`testpt_${G}`)),St&&gt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[gt.length===2&&g.jsx("line",{x1:`${gt[0].x*100}%`,y1:`${gt[0].y*100}%`,x2:`${gt[1].x*100}%`,y2:`${gt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,ve.scale),strokeDasharray:"5,5"}),gt.map((b,G)=>g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.1,ve.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,ve.scale)},G))]}),gt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(gt[0].x+gt[1].x)*50}%`,top:`${(gt[0].y+gt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,ve.scale)})`},children:[Math.hypot((gt[1].x-gt[0].x)*J,(gt[1].y-gt[0].y)*ye).toFixed(1)," m"]})]}),et.map(b=>{const G=b.isVerticalShaft?we==null?void 0:we.floors.filter(O=>{var ce;return(ce=b.linkedFloorIds)==null?void 0:ce.includes(O.id)}).sort((O,ce)=>vi(ce.name)-vi(O.name)).map(O=>O.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${K===b.id?"z-[60]":""} ${Be===b.id?"scale-125":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:O=>{O.stopPropagation(),O.button===0&&(De?dn(b.id):Te?(b.isVerticalShaft||Re(b,!0,!0),ue(null),Z(b.id)):!Rt&&!Ht&&!St&&!pt&&(ue(null),le(b.id),Z(b.id),O.target.setPointerCapture(O.pointerId)))},onPointerUp:O=>{O.stopPropagation(),O.target.releasePointerCapture(O.pointerId)},onContextMenu:O=>{O.preventDefault(),De?ft(b.id):Te?b.isVerticalShaft&&Re(b,!1,!0):!Rt&&!St&&!Ht&&(ue(null),Z(b.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${K===b.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":b.enabled?b.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Be===b.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:b.isVerticalShaft?g.jsx(Wr,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`},children:b.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${K===b.id?"border-t-white":b.enabled?b.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Be===b.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${K===b.id?"opacity-100 border-cyan-500 text-cyan-400":b.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,ve.scale)})`,transformOrigin:"top center"},children:[b.title||"未命名"," ",b.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",G,")"]})]})]},b.id)})]}),Te&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(Wr,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),De&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(QE,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Rt&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(_0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(Ne!=null&&Ne.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(M0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",we==null?void 0:we.name," - ",Ne==null?void 0:Ne.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(Ne==null?void 0:Ne.imageUrl)&&Qi>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:Ce.blX,blY:Ce.blY,trX:Ce.trX,trY:Ce.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(fa,{className:"w-3 h-3 mr-1"})," 比例尺: ",es," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${Qi}px`}})]}),(Ne==null?void 0:Ne.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>Le(b=>({...b,scale:Math.min(10,b.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(gg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Le(b=>({...b,scale:Math.max(.1,b.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(xg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:Qr,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(JE,{className:"w-5 h-5"})})]})]})]}),I.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(fa,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.blX,onChange:b=>y({...I,blX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.blY,onChange:b=>y({...I,blY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.trX,onChange:b=>y({...I,trX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.trY,onChange:b=>y({...I,trY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{W(b=>b.map(G=>G.id===V?{...G,floors:G.floors.map(O=>O.id===te?{...O,bounds:{blX:I.blX,blY:I.blY,trX:I.trX,trY:I.trY}}:O)}:G)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:b=>{b.key==="Enter"&&(f.onSubmit(b.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:b=>{f.onSubmit(b.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),p.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:p.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:p.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{p.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(mg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(Sf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(rw,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:Ae,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ho,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(K||Me)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:K?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{Z(null),ue(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(xs,{})})]}),Jt&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:Jt.code,onChange:b=>Pe(Jt.id,"code",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:Jt.title,onChange:b=>Pe(Jt.id,"title",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:Jt.description||"",onChange:b=>Pe(Jt.id,"description",b.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Jt.x*100).toFixed(1),onChange:b=>Pe(Jt.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Jt.y*100).toFixed(1),onChange:b=>Pe(Jt.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx(Wr,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:Jt.isVerticalShaft||!1,onChange:b=>Re(Jt,b.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),Jt.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:we==null?void 0:we.floors.slice().sort((b,G)=>vi(G.name)-vi(b.name)).map(b=>{var ce;const G=(ce=Jt.linkedFloorIds)==null?void 0:ce.includes(b.id),O=b.id===te;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${G?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:O,checked:G||O,onChange:Ue=>$e(Jt,b.id,Ue.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",O&&"(目前)"]})]},b.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:Jt.arrowDirection||"none",onChange:b=>Pe(Jt.id,"arrowDirection",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:Jt.enabled,onChange:b=>Pe(Jt.id,"enabled",b.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:he,onChange:Cs,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>he.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:Jt.imageUrl?g.jsx("img",{src:Jt.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(pw,{marker:Jt,onUpdateStatus:b=>Pe(Jt.id,"recognitionStatus",b),showAlert:b=>x({isOpen:!0,message:b})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Xe?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ye(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>ft(Jt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ye(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Z(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),Xt&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Xt.x*100).toFixed(1),onChange:b=>Ie(Xt.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Xt.y*100).toFixed(1),onChange:b=>Ie(Xt.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx(Wr,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:Xt.isVerticalShaft||!1,onChange:b=>Re(Xt,b.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),Xt.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:we==null?void 0:we.floors.slice().sort((b,G)=>vi(G.name)-vi(b.name)).map(b=>{var ce;const G=(ce=Xt.linkedFloorIds)==null?void 0:ce.includes(b.id),O=b.id===te;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${G?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:O,checked:G||O,onChange:Ue=>$e(Xt,b.id,Ue.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",O&&"(目前)"]})]},b.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Xe?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ye(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>ft(Xt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ye(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Cd,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>ue(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Gl({icon:s,label:e,active:t,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Mf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ho,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(mg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function pw({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Fe.useRef(null),h=Fe.useRef(null),p=Fe.useRef(null),v=Fe.useRef(null),S=Fe.useRef(null),x=Fe.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Fe.useRef({frames:0,lockedFrames:0});Fe.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const A=()=>{if(!window.cv||!p.current||!s.imageUrl)return!1;try{const R=window.cv,N=x.current;N.refGray&&N.refGray.delete(),N.refKeypoints&&N.refKeypoints.delete(),N.refDescriptors&&N.refDescriptors.delete(),N.orbDetector&&N.orbDetector.delete(),N.matcher&&N.matcher.delete();const z=document.createElement("canvas"),P=z.getContext("2d"),F=p.current,w=320;let L=F.naturalWidth||F.width,W=F.naturalHeight||F.height;(L>w||W>w)&&(L>W?(W=Math.round(W*w/L),L=w):(L=Math.round(L*w/W),W=w)),z.width=L,z.height=W,P.drawImage(F,0,0,L,W);const V=R.imread(z),q=new R.Mat;R.cvtColor(V,q,R.COLOR_RGBA2GRAY);const te=new R.ORB,_e=new R.KeyPointVector,X=new R.Mat;te.detectAndCompute(q,new R.Mat,_e,X);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:q,refKeypoints:_e,refDescriptors:X,orbDetector:te,matcher:oe},V.delete(),!0}catch{return!1}},I=R=>{if(R.length<4)return!1;let N=[];for(let z=0;z<4;z++){let P=R[(z+1)%4].x-R[z].x,F=R[(z+1)%4].y-R[z].y,w=R[(z+2)%4].x-R[(z+1)%4].x,L=R[(z+2)%4].y-R[(z+1)%4].y;N.push(P*L-F*w>0)}return N.every(z=>z===N[0])},y=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!A()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(N){console.warn("Device orientation permission was not granted.",N)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,D()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Fe.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const D=()=>{const R=window.cv,N=x.current,z=f.current,P=h.current,F=P.getContext("2d");let w=performance.now(),L=null;const W=.15;let V=0;const q=3;let te=0;const _e=10;let X=null;const oe=()=>{if(!z||!z.srcObject||!N.refDescriptors)return;const K=performance.now(),Z=Math.round(1e3/(K-w));w=K,F.drawImage(z,0,0,P.width,P.height);let Me=0,ue=0,k=!1,le=null,Xe=V%q===0;if(V++,Xe){try{const De=R.imread(P),pe=new R.Mat;R.cvtColor(De,pe,R.COLOR_RGBA2GRAY);const Te=new R.KeyPointVector,be=new R.Mat;if(N.orbDetector.detectAndCompute(pe,new R.Mat,Te,be),!be.empty()&&be.rows>0){const Be=new R.DMatchVector;N.matcher.match(N.refDescriptors,be,Be);let Qe=[];for(let mt=0;mt<Be.size();mt++)Qe.push(Be.get(mt));Qe.sort((mt,pt)=>mt.distance-pt.distance);let st=Qe.filter(mt=>mt.distance<=50).slice(0,60);if(Me=st.length,st.length>=12){const mt=[],pt=[];for(let It=0;It<st.length;It++){let Ht=st[It];mt.push(N.refKeypoints.get(Ht.queryIdx).pt.x,N.refKeypoints.get(Ht.queryIdx).pt.y),pt.push(Te.get(Ht.trainIdx).pt.x,Te.get(Ht.trainIdx).pt.y)}const kt=R.matFromArray(mt.length/2,1,R.CV_32FC2,mt),Wt=R.matFromArray(pt.length/2,1,R.CV_32FC2,pt),Mt=new R.Mat,Bt=R.findHomography(kt,Wt,R.RANSAC,4,Mt);for(let It=0;It<Mt.rows;It++)Mt.data[It]===1&&ue++;if(!Bt.empty()&&ue>=10&&ue/st.length>=.35){const It=N.refGray.cols,Ht=N.refGray.rows,$=[0,0,1,It,0,1,It,Ht,1,0,Ht,1];let St=[];for(let Ze=0;Ze<4;Ze++){let gt=$[Ze*3],He=$[Ze*3+1],Rt=Bt.data64F[0]*gt+Bt.data64F[1]*He+Bt.data64F[2],U=Bt.data64F[3]*gt+Bt.data64F[4]*He+Bt.data64F[5],E=Bt.data64F[6]*gt+Bt.data64F[7]*He+Bt.data64F[8];St.push({x:Rt/E,y:U/E})}I(St)&&(le=St,k=!0)}kt.delete(),Wt.delete(),Mt.delete(),Bt.delete()}Be.delete()}De.delete(),pe.delete(),Te.delete(),be.delete()}catch{}k?(X=le,te=_e):te>0?te--:X=null}const Ye=X!==null;if(Ye){if(!L)L=JSON.parse(JSON.stringify(X));else for(let De=0;De<4;De++)L[De].x=L[De].x*(1-W)+X[De].x*W,L[De].y=L[De].y*(1-W)+X[De].y*W;F.strokeStyle="#00ffcc",F.lineWidth=3,F.shadowBlur=10,F.shadowColor="#00ffcc",F.beginPath(),F.moveTo(L[0].x,L[0].y),F.lineTo(L[1].x,L[1].y),F.lineTo(L[2].x,L[2].y),F.lineTo(L[3].x,L[3].y),F.closePath(),F.stroke(),F.shadowBlur=0}else{L=null;const De=Math.min(P.width,P.height)*.5,pe=(P.width-De)/2,Te=(P.height-De)/2;F.strokeStyle="rgba(255, 70, 70, 0.5)",F.lineWidth=2,F.strokeRect(pe,Te,De,De)}u(De=>({fps:Z,matches:Xe?Me:De.matches,inliers:Xe?ue:De.inliers,status:Ye?"LOCKED":"SEARCHING"})),M.current.frames++,Ye&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:p,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Mf,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Sf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(tw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function A0({buildings:s,systemConfig:e,onMenuClick:t}){const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState(null),[f,h]=Fe.useState(null),[p,v]=Fe.useState([]),[S,x]=Fe.useState(!1),[M,A]=Fe.useState(0),[I,y]=Fe.useState("idle"),[_,D]=Fe.useState("checking"),[R,N]=Fe.useState("idle"),[z,P]=Fe.useState(!1),F=Fe.useRef(null),w=Fe.useRef(null),L=Fe.useRef(null),W=Fe.useRef(null),V=Fe.useRef(null),q=Fe.useRef(null),te=Fe.useRef(null),_e=Fe.useRef(null),X=Fe.useRef(null),oe=Fe.useRef(null),K=Fe.useRef(!1),Z=Fe.useRef([]),Me=Fe.useRef({matcher:null}),ue=Fe.useRef(0),k=Fe.useRef(!1),le=Fe.useRef([]),Xe=Fe.useRef({nodes:{},edges:[]}),Ye=Fe.useRef(null),De=Fe.useRef("idle"),pe=Fe.useRef({heading:0,pitch:0,roll:0}),Te=wf.useMemo(()=>{const H={},se=[];return s.forEach(ae=>ae.floors.forEach(de=>{var ve,Le;const ee=de.bounds||{blX:0,blY:0,trX:100,trY:100},he=(Ae,we)=>({physX:ee.blX+Ae*(ee.trX-ee.blX),physY:ee.trY-we*(ee.trY-ee.blY)});de.markers.forEach(Ae=>{Ae.enabled&&(H[Ae.id]={...Ae,...he(Ae.x,Ae.y),isMarker:!0,bId:ae.id,fId:de.id,bName:ae.name,fName:de.name,bounds:ee})}),(ve=de.waypoints)==null||ve.forEach(Ae=>{H[Ae.id]={...Ae,...he(Ae.x,Ae.y),isMarker:!1,fId:de.id,bounds:ee}}),(Le=de.edges)==null||Le.forEach(Ae=>{se.push({...Ae,fId:de.id})})})),{nodes:H,edges:se}},[s]);Fe.useEffect(()=>{Xe.current=Te},[Te]),Fe.useEffect(()=>{le.current=p},[p]),Fe.useEffect(()=>{Ye.current=null,be("idle")},[l]);const be=H=>{De.current!==H&&(De.current=H,y(H))};Fe.useEffect(()=>{let H=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){H&&D("unsupported");return}try{const ae=await navigator.xr.isSessionSupported("immersive-ar");H&&D(ae?"supported":"unsupported")}catch{H&&D("unsupported")}})(),()=>{H=!1}},[]);const Be=(H,se)=>{const{nodes:ae,edges:de}=Te,ee={};Object.keys(ae).forEach(ne=>{ee[ne]={}}),de.forEach(ne=>{if(ae[ne.start]&&ae[ne.end]){const Pe=Math.hypot(ae[ne.start].physX-ae[ne.end].physX,ae[ne.start].physY-ae[ne.end].physY);ee[ne.start][ne.end]=Pe,ee[ne.end][ne.start]=Pe}});const he={};Object.values(ae).forEach(ne=>{ne.isVerticalShaft&&ne.shaftId&&(he[ne.shaftId]||(he[ne.shaftId]=[]),he[ne.shaftId].push(ne.id))}),Object.values(he).forEach(ne=>{for(let Pe=0;Pe<ne.length;Pe++)for(let Ie=Pe+1;Ie<ne.length;Ie++)ee[ne[Pe]][ne[Ie]]=5,ee[ne[Ie]][ne[Pe]]=5});const ve=ne=>Object.keys(ee[ne]).length>0,Le=ne=>{if(ve(ne))return ne;const Pe=ae[ne];let Ie=1/0,Re=ne;return Object.keys(ae).forEach($e=>{if(ae[$e].fId===Pe.fId&&ve($e)){const ft=Math.hypot(ae[$e].physX-Pe.physX,ae[$e].physY-Pe.physY);ft<Ie&&(Ie=ft,Re=$e)}}),Re},Ae=Le(H),we=Le(se),Ne={},et={},Ke=new Set(Object.keys(ae));for(Object.keys(ae).forEach(ne=>{Ne[ne]=1/0,et[ne]=null}),Ne[Ae]=0;Ke.size>0;){let ne=null;if(Ke.forEach(Pe=>{(ne===null||Ne[Pe]<Ne[ne])&&(ne=Pe)}),Ne[ne]===1/0||ne===we)break;Ke.delete(ne),Object.entries(ee[ne]).forEach(([Pe,Ie])=>{if(Ke.has(Pe)){const Re=Ne[ne]+Ie;Re<Ne[Pe]&&(Ne[Pe]=Re,et[Pe]=ne)}})}const j=[];let Ce=we;for(;Ce;)j.unshift(Ce),Ce=et[Ce];return j.length===0||j[0]!==Ae?[]:(Ae!==H&&j.unshift(H),we!==se&&j.push(se),j)};Fe.useEffect(()=>{v(f&&l&&f!==l?Be(f,l):[])},[f,l,Te]),Fe.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const de=document.createElement("script");de.id="opencv-script",de.src="https://docs.opencv.org/3.4.16/opencv.js",de.async=!0,document.body.appendChild(de)}}else o("idle");let H=0;const se=de=>{let ee=null;de.webkitCompassHeading!==void 0&&de.webkitCompassHeading!==null?ee=de.webkitCompassHeading:de.alpha!==null&&de.alpha!==void 0&&(ee=360-de.alpha),ee!==null&&(pe.current={heading:ee,pitch:de.beta||0,roll:de.gamma||0},ue.current=ee,k.current||(k.current=!0,P(!0)))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",se,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",se,!0));const ae=setInterval(()=>{if(!k.current)return;let ee=ue.current-(H%360+360)%360;ee>180&&(ee-=360),ee<-180&&(ee+=360),H+=ee,A(H)},200);return()=>{mt(),clearInterval(ae),window.removeEventListener("deviceorientation",se,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",se,!0)}},[]);const Qe=async()=>{const H=window.cv;if(!H)return!1;Z.current=[],Me.current.matcher=new H.BFMatcher(H.NORM_HAMMING,!0);const ae=Object.values(Te.nodes).filter(de=>de.isMarker&&de.imageUrl).map(de=>new Promise(ee=>{const he=new Image;he.onload=()=>{try{const ve=document.createElement("canvas"),Le=ve.getContext("2d");ve.width=320,ve.height=Math.round(320*(he.height/he.width)),Le.drawImage(he,0,0,ve.width,ve.height);const Ae=H.imread(ve),we=new H.Mat;H.cvtColor(Ae,we,H.COLOR_RGBA2GRAY);const Ne=new H.ORB,et=new H.KeyPointVector,Ke=new H.Mat;Ne.detectAndCompute(we,new H.Mat,et,Ke),Z.current.push({markerId:de.id,gray:we,kp:et,des:Ke,orb:Ne,width:we.cols,height:we.rows}),Ae.delete(),ee(!0)}catch{ee(!1)}},he.onerror=()=>ee(!1),he.src=de.imageUrl}));return await Promise.all(ae),Z.current.length>0},st=async()=>{if(r!=="idle")return;if(o("loading"),!await Qe()){o("idle"),alert("無法提取特徵");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(ae){console.warn("Device orientation permission was not granted.",ae)}const se=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});L.current=se,F.current.srcObject=se,F.current.play(),F.current.onloadedmetadata=()=>{w.current.width=F.current.videoWidth,w.current.height=F.current.videoHeight,o("scanning"),$()}}catch{alert("無相機權限"),o("idle")}},mt=()=>{W.current&&cancelAnimationFrame(W.current),L.current&&L.current.getTracks().forEach(H=>H.stop()),Ye.current=null,be("idle"),o("idle")},pt=(H,se,ae=!1)=>{if(!se||se.length<2)return!1;const de=lw(se);if(H.save(),H.beginPath(),se.forEach((ee,he)=>{he===0?H.moveTo(ee.x,ee.y):H.lineTo(ee.x,ee.y)}),H.strokeStyle=ae?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",H.lineWidth=ae?8:10,H.lineCap="round",H.lineJoin="round",H.shadowBlur=ae?8:12,H.shadowColor="#ffffff",H.stroke(),de>8){const ee=ae?74:62,he=ae?28:32,ve=Date.now()/10%ee;H.shadowBlur=ae?10:16,H.shadowColor="#ffffff",H.fillStyle="rgba(255,255,255,0.98)",H.strokeStyle="rgba(0,0,0,0.34)",H.lineWidth=2.5;for(let Le=ve;Le<de;Le+=ee){const Ae=ow(se,Le);Ae&&(H.save(),H.translate(Ae.x,Ae.y),H.rotate(Ae.angle),H.beginPath(),H.moveTo(he*.55,0),H.lineTo(-he*.35,-he*.32),H.lineTo(-he*.15,0),H.lineTo(-he*.35,he*.32),H.closePath(),H.stroke(),H.fill(),H.restore())}}return H.restore(),!0},kt=H=>{const se=Ye.current;if(!se||!se.points||se.points.length<2)return!1;const ae=pe.current,de=k.current?(ae.heading-se.orientation.heading+540)%360-180:0,ee=k.current?ae.pitch-se.orientation.pitch:0,ve=(k.current?ae.roll-se.orientation.roll:0)*Math.PI/180,Le=Math.cos(ve),Ae=Math.sin(ve),we=H.canvas.width/2,Ne=H.canvas.height/2,et=Math.max(H.canvas.width,H.canvas.height)*.95,Ke=H.canvas.width*1.8,j=H.canvas.height*1.2,Ce=Math.max(-Ke,Math.min(Ke,Math.tan(de*Math.PI/180)*et)),ne=Math.max(-j,Math.min(j,Math.tan(ee*Math.PI/180)*et*.75)),Pe=se.points.map(Ie=>{const Re=Ie.x*H.canvas.width,$e=Ie.y*H.canvas.height,ft=Re-we,Nt=$e-Ne;return{x:we+ft*Le-Nt*Ae-Ce,y:Ne+ft*Ae+Nt*Le+ne}});return pt(H,Pe,!0)},Wt=()=>{if(le.current.length>1)return le.current;const H=Object.values(Xe.current.nodes).filter(ae=>ae.isMarker&&ae.id!==l).map(ae=>ae.id),se=f||H[0];return!se||!l||se===l?[]:Be(se,l)},Mt=()=>{const H=Wt(),se=Xe.current.nodes,ae=H.map(Ke=>se[Ke]).filter(Boolean);if(ae.length<2)return null;const de=ae[0],ee=.08,he=ae.map(Ke=>new ie((Ke.physX-de.physX)*ee,.03,-(Ke.physY-de.physY)*ee)),ve=new Es,Le=T0(he,.045,16777215,.18),Ae=T0(he,.016,16777215,.36);Le&&ve.add(Le),Ae&&ve.add(Ae);const we=uw(he);we&&ve.add(we);const Ne=new jn(new ic(.1,24,24),new qr({color:2282478}));Ne.position.copy(he[0]),Ne.position.y+=.08,ve.add(Ne);const et=new jn(new ic(.12,24,24),new qr({color:16731471}));return et.position.copy(he[he.length-1]),et.position.y+=.1,ve.add(et),ve},Bt=async()=>{const H=q.current;if(H)try{await H.end()}catch{}else It()},It=()=>{_e.current&&_e.current.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&H.material.dispose()}),te.current&&(te.current.setAnimationLoop(null),te.current.dispose(),te.current.domElement.remove()),q.current=null,te.current=null,_e.current=null,X.current=null,oe.current=null,K.current=!1,N("idle")},Ht=async()=>{var H;if(!(_!=="supported"||!navigator.xr||q.current)){N("starting"),mt();try{const se={requiredFeatures:["hit-test"],optionalFeatures:V.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};V.current&&(se.domOverlay={root:V.current});const ae=await navigator.xr.requestSession("immersive-ar",se),de=new UE({alpha:!0,antialias:!0});de.xr.enabled=!0,de.setPixelRatio(window.devicePixelRatio||1),de.setSize(window.innerWidth,window.innerHeight),de.domElement.className="absolute inset-0 h-full w-full",(H=V.current)==null||H.appendChild(de.domElement),await de.xr.setSession(ae);const ee=new r_,he=new Si,ve=new jn(new Bf(.18,.22,32).rotateX(-Math.PI/2),new qr({color:65484,transparent:!0,opacity:.85}));ve.matrixAutoUpdate=!1,ve.visible=!1,ee.add(ve);const Le=await ae.requestReferenceSpace("local-floor").catch(()=>ae.requestReferenceSpace("local")),Ae=await ae.requestReferenceSpace("viewer"),we=await ae.requestHitTestSource({space:Ae});q.current=ae,te.current=de,X.current=we,oe.current=Le,N("placing");const Ne=et=>{if(K.current)return;const Ke=Mt();if(!Ke){N("no-route");return}Ke.matrix.fromArray(et),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),ee.add(Ke),_e.current=Ke,K.current=!0,N("anchored")};ae.addEventListener("select",()=>{ve.visible&&Ne(ve.matrix.elements)}),ae.addEventListener("end",It),de.setAnimationLoop((et,Ke)=>{if(_e.current&&_e.current.traverse(j=>dw(j,et)),Ke&&!K.current){const j=Ke.getHitTestResults(we);if(j.length){const Ce=j[0].getPose(Le);Ce&&(ve.visible=!0,ve.matrix.fromArray(Ce.transform.matrix))}else ve.visible=!1}else ve.visible=!1;de.render(ee,he)})}catch(se){console.warn("Unable to start WebXR AR mode.",se),It(),N("failed")}}},$=()=>{const H=window.cv,se=F.current,ae=w.current,de=ae.getContext("2d"),ee=Me.current.matcher;let he=0,ve=null,Le=null,Ae=0;const we=()=>{if(!se||!se.srcObject)return;de.drawImage(se,0,0,ae.width,ae.height);let Ne=!1;if(he%4===0){try{const j=H.imread(ae),Ce=new H.Mat;H.cvtColor(j,Ce,H.COLOR_RGBA2GRAY);const ne=new H.KeyPointVector,Pe=new H.Mat;if(Z.current[0].orb.detectAndCompute(Ce,new H.Mat,ne,Pe),!Pe.empty())for(let Ie of Z.current){const Re=new H.DMatchVector;ee.match(Ie.des,Pe,Re);let $e=[];for(let Nt=0;Nt<Re.size();Nt++)$e.push(Re.get(Nt));$e.sort((Nt,Pt)=>Nt.distance-Pt.distance);const ft=$e.filter(Nt=>Nt.distance<=50).slice(0,60);if(ft.length>=12){const Nt=[],Pt=[];for(let Rn of ft)Nt.push(Ie.kp.get(Rn.queryIdx).pt.x,Ie.kp.get(Rn.queryIdx).pt.y),Pt.push(ne.get(Rn.trainIdx).pt.x,ne.get(Rn.trainIdx).pt.y);const an=H.matFromArray(Nt.length/2,1,H.CV_32FC2,Nt),tn=H.matFromArray(Pt.length/2,1,H.CV_32FC2,Pt),dn=new H.Mat,Wn=H.findHomography(an,tn,H.RANSAC,4,dn);let Xn=0;for(let Rn=0;Rn<dn.rows;Rn++)dn.data[Rn]===1&&Xn++;!Wn.empty()&&Xn>=10&&(ve&&ve.delete(),ve=Wn.clone(),Le=Ie.markerId,h(Le),Ne=!0),an.delete(),tn.delete(),dn.delete(),Wn.delete()}if(Re.delete(),Ne)break}j.delete(),Ce.delete(),ne.delete(),Pe.delete()}catch{}Ne?Ae=8:Ae>0?Ae--:(ve&&(ve.delete(),ve=null),Le=null)}he++;const et=Xe.current,Ke=le.current;if(ve&&Le&&Ke.length>1){const j=et.nodes[Le],Ce=Z.current.find(ne=>ne.markerId===Le);if(j&&Ce){const ne=Ce.width/.3,Pe=[];for(let Ie=0;Ie<Ke.length;Ie++){const Re=Ke[Ie],$e=et.nodes[Re];if(!$e||$e.fId!==j.fId)break;const ft=$e.physX-j.physX,Nt=-($e.physY-j.physY),Pt=Ce.width/2+ft*ne,an=Ce.height/2+Nt*ne,tn=ve.data64F,dn=tn[6]*Pt+tn[7]*an+tn[8];if(dn>0){const Wn=(tn[0]*Pt+tn[1]*an+tn[2])/dn,Xn=(tn[3]*Pt+tn[4]*an+tn[5])/dn;Pe.push({x:Wn,y:Xn})}}pt(de,Pe,!1)&&(Ye.current={markerId:Le,orientation:{...pe.current},updatedAt:Date.now(),points:Pe.map(Ie=>({x:Ie.x/ae.width,y:Ie.y/ae.height}))},be("locked"))}}else{const j=Ke.length>1&&kt(de);if(be(j?"holding":"searching"),!j){const Ce=Math.min(ae.width,ae.height)*.6;de.strokeStyle="rgba(0, 255, 204, 0.4)",de.lineWidth=2,de.strokeRect((ae.width-Ce)/2,(ae.height-Ce)/2,Ce,Ce)}}W.current=requestAnimationFrame(we)};we()};if(!l){const H=Object.values(Te.nodes).filter(se=>se.isMarker).reduce((se,ae)=>{const de=`${ae.bName} - ${ae.fName}`;return se[de]||(se[de]=[]),se[de].push(ae),se},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(H).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(fa,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(H).map(([se,ae])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:se}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:ae.map(de=>g.jsxs("button",{onClick:()=>u(de.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:de.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:de.title})})]},de.id))})]},se))]})]})}const St=Te.nodes[l],Ze=f?Te.nodes[f]:null,gt=p.length>1?p[1]:null,He=gt?Te.nodes[gt]:null;let Rt=Ze?Ze.fId:St.fId,U=null,E={blX:0,blY:0,trX:100,trY:100};s.forEach(H=>H.floors.forEach(se=>{se.id===Rt&&(U=se.imageUrl,E=Xr(se))}));const re=(H,se)=>{const ae=E.trX-E.blX,de=E.trY-E.blY,ee=ae!==0?(H-E.blX)/ae*100:50,he=de!==0?(E.trY-se)/de*100:50;return{x:ee,y:he}};return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{mt(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:V,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:F,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:w,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[I==="locked"&&"AR 路徑已鎖定",I==="holding"&&"陀螺儀空間錨點",I==="searching"&&"搜尋定位標記",I==="idle"&&"準備定位"]}),r==="scanning"&&U&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:U,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),p.map((H,se)=>{if(se===p.length-1)return null;const ae=Te.nodes[H],de=Te.nodes[p[se+1]];if(ae.fId===Rt&&de.fId===Rt){const ee=re(ae.physX,ae.physY),he=re(de.physX,de.physY);return g.jsx("line",{x1:`${ee.x}%`,y1:`${ee.y}%`,x2:`${he.x}%`,y2:`${he.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},se)}return null})]}),Ze&&Ze.fId===Rt&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${re(Ze.physX,Ze.physY).x}%`,top:`${re(Ze.physX,Ze.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-cyan-400 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"absolute w-[60px] h-[60px] origin-center transition-transform duration-200 ease-linear flex items-center justify-center",style:{transform:`rotate(${M}deg)`},children:g.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full opacity-70",children:[g.jsx("path",{d:"M50 50 L20 0 A 50 50 0 0 1 80 0 Z",fill:"url(#viewConeGrad)"}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"viewConeGrad",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[g.jsx("stop",{offset:"0%",stopColor:"#22d3ee",stopOpacity:"0"}),g.jsx("stop",{offset:"100%",stopColor:"#22d3ee",stopOpacity:"0.9"})]})})]})}),g.jsx("div",{className:"absolute w-full h-full origin-center transition-transform duration-200 ease-linear flex items-center justify-center",style:{transform:`rotate(${M}deg)`},children:g.jsx(ew,{className:"w-4 h-4 text-white fill-cyan-400 absolute -top-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.8)]"})}),g.jsx("div",{className:"w-3 h-3 bg-white border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_8px_#22d3ee]"})]})}),St&&St.fId===Rt&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${re(St.physX,St.physY).x}%`,top:`${re(St.physX,St.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(xg,{className:"w-4 h-4"}):g.jsx(gg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",Ze?Ze.fName:St.fName," ",z?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(iw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{onClick:Ht,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:st,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:Bt,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${Ze?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"bg-cyan-500/20 text-cyan-400 p-3 rounded-xl mr-4 shrink-0",children:g.jsx(KE,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 w-full min-w-0",children:[g.jsxs("div",{className:"text-xs font-bold text-slate-400 mb-1",children:["📍 定位成功：",Ze==null?void 0:Ze.bName," ",Ze==null?void 0:Ze.fName," (",Ze==null?void 0:Ze.code,")"]}),f===l?g.jsxs("div",{className:"mt-2 flex items-center bg-green-500/20 p-3 rounded-xl border border-green-500/50 shadow-inner",children:[g.jsx(ho,{className:"w-6 h-6 text-green-400 mr-3 shrink-0"}),g.jsx("span",{className:"text-green-400 font-bold text-sm tracking-wide",children:"🎉 您已抵達目的地！"})]}):He?He.fId!==(Ze==null?void 0:Ze.fId)?g.jsxs("div",{className:"mt-2 flex items-center bg-purple-500/20 p-3 rounded-xl border border-purple-500/50 shadow-inner",children:[g.jsx(Wr,{className:"w-6 h-6 text-purple-400 mr-3 shrink-0 animate-bounce"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-purple-400 font-bold text-sm",children:"請換樓層"}),g.jsxs("span",{className:"text-purple-300/70 text-xs mt-0.5",children:["搭乘至 ",He.fName," 後重新掃描"]})]})]}):g.jsxs("div",{className:"mt-2 flex items-center bg-slate-800/80 p-3 rounded-xl border border-slate-700 shadow-inner",children:[g.jsx("div",{className:"bg-yellow-500/20 text-yellow-400 p-2 rounded-lg mr-3 shadow-[0_0_10px_rgba(234,179,8,0.2)] shrink-0",children:g.jsx(pg,{className:"w-6 h-6"})}),g.jsx("div",{className:"flex flex-col",children:g.jsx("span",{className:"text-yellow-400 font-bold text-sm tracking-wide",children:"請依循 AR 畫面上的發光路徑前往下一站"})})]}):g.jsx("div",{className:"text-red-400 text-sm font-bold mt-2",children:"⚠️ 無法計算路線，請確認點位連線設定。"})]})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const rc=document.getElementById("ar-root");if(!rc)throw new Error("Missing #ar-root element.");const vg=new URLSearchParams(window.location.search),mw=window.location.pathname.endsWith("/admin-ar.html"),_g=rc.dataset.embedded==="true"||vg.get("embedded")==="1",C0=mw||_g;ov.createRoot(rc).render(g.jsx(wf.StrictMode,{children:g.jsx(hw,{embedded:_g,initialTab:C0?rc.dataset.initialTab||vg.get("tab")||"map":"frontend",publicOnly:!C0})}));
