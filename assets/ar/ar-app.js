function Jx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Ka={},Bu={exports:{}},Vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Qx(){if(lm)return Vt;lm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,I={};function y(k,le,Xe){this.props=k,this.context=le,this.refs=I,this.updater=Xe||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,le){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,le,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(k,le,Xe){this.props=k,this.context=le,this.refs=I,this.updater=Xe||M}var R=D.prototype=new _;R.constructor=D,A(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(k,le,Xe){var Ye,De={},he=null,Te=null;if(le!=null)for(Ye in le.ref!==void 0&&(Te=le.ref),le.key!==void 0&&(he=""+le.key),le)z.call(le,Ye)&&!F.hasOwnProperty(Ye)&&(De[Ye]=le[Ye]);var be=arguments.length-2;if(be===1)De.children=Xe;else if(1<be){for(var Be=Array(be),et=0;et<be;et++)Be[et]=arguments[et+2];De.children=Be}if(k&&k.defaultProps)for(Ye in be=k.defaultProps,be)De[Ye]===void 0&&(De[Ye]=be[Ye]);return{$$typeof:s,type:k,key:he,ref:Te,props:De,_owner:P.current}}function L(k,le){return{$$typeof:s,type:k.type,key:le,ref:k.ref,props:k.props,_owner:k._owner}}function W(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function V(k){var le={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Xe){return le[Xe]})}var q=/\/+/g;function ee(k,le){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):le.toString(36)}function Se(k,le,Xe,Ye,De){var he=typeof k;(he==="undefined"||he==="boolean")&&(k=null);var Te=!1;if(k===null)Te=!0;else switch(he){case"string":case"number":Te=!0;break;case"object":switch(k.$$typeof){case s:case e:Te=!0}}if(Te)return Te=k,De=De(Te),k=Ye===""?"."+ee(Te,0):Ye,N(De)?(Xe="",k!=null&&(Xe=k.replace(q,"$&/")+"/"),Se(De,le,Xe,"",function(et){return et})):De!=null&&(W(De)&&(De=L(De,Xe+(!De.key||Te&&Te.key===De.key?"":(""+De.key).replace(q,"$&/")+"/")+k)),le.push(De)),1;if(Te=0,Ye=Ye===""?".":Ye+":",N(k))for(var be=0;be<k.length;be++){he=k[be];var Be=Ye+ee(he,be);Te+=Se(he,le,Xe,Be,De)}else if(Be=x(k),typeof Be=="function")for(k=Be.call(k),be=0;!(he=k.next()).done;)he=he.value,Be=Ye+ee(he,be++),Te+=Se(he,le,Xe,Be,De);else if(he==="object")throw le=String(k),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return Te}function X(k,le,Xe){if(k==null)return k;var Ye=[],De=0;return Se(k,Ye,"","",function(he){return le.call(Xe,he,De++)}),Ye}function oe(k){if(k._status===-1){var le=k._result;le=le(),le.then(function(Xe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Xe)},function(Xe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Xe)}),k._status===-1&&(k._status=0,k._result=le)}if(k._status===1)return k._result.default;throw k._result}var K={current:null},Z={transition:null},Me={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Z,ReactCurrentOwner:P};function de(){throw Error("act(...) is not supported in production builds of React.")}return Vt.Children={map:X,forEach:function(k,le,Xe){X(k,function(){le.apply(this,arguments)},Xe)},count:function(k){var le=0;return X(k,function(){le++}),le},toArray:function(k){return X(k,function(le){return le})||[]},only:function(k){if(!W(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Vt.Component=y,Vt.Fragment=n,Vt.Profiler=o,Vt.PureComponent=D,Vt.StrictMode=r,Vt.Suspense=h,Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Me,Vt.act=de,Vt.cloneElement=function(k,le,Xe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ye=A({},k.props),De=k.key,he=k.ref,Te=k._owner;if(le!=null){if(le.ref!==void 0&&(he=le.ref,Te=P.current),le.key!==void 0&&(De=""+le.key),k.type&&k.type.defaultProps)var be=k.type.defaultProps;for(Be in le)z.call(le,Be)&&!F.hasOwnProperty(Be)&&(Ye[Be]=le[Be]===void 0&&be!==void 0?be[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)Ye.children=Xe;else if(1<Be){be=Array(Be);for(var et=0;et<Be;et++)be[et]=arguments[et+2];Ye.children=be}return{$$typeof:s,type:k.type,key:De,ref:he,props:Ye,_owner:Te}},Vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Vt.createElement=w,Vt.createFactory=function(k){var le=w.bind(null,k);return le.type=k,le},Vt.createRef=function(){return{current:null}},Vt.forwardRef=function(k){return{$$typeof:f,render:k}},Vt.isValidElement=W,Vt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:oe}},Vt.memo=function(k,le){return{$$typeof:m,type:k,compare:le===void 0?null:le}},Vt.startTransition=function(k){var le=Z.transition;Z.transition={};try{k()}finally{Z.transition=le}},Vt.unstable_act=de,Vt.useCallback=function(k,le){return K.current.useCallback(k,le)},Vt.useContext=function(k){return K.current.useContext(k)},Vt.useDebugValue=function(){},Vt.useDeferredValue=function(k){return K.current.useDeferredValue(k)},Vt.useEffect=function(k,le){return K.current.useEffect(k,le)},Vt.useId=function(){return K.current.useId()},Vt.useImperativeHandle=function(k,le,Xe){return K.current.useImperativeHandle(k,le,Xe)},Vt.useInsertionEffect=function(k,le){return K.current.useInsertionEffect(k,le)},Vt.useLayoutEffect=function(k,le){return K.current.useLayoutEffect(k,le)},Vt.useMemo=function(k,le){return K.current.useMemo(k,le)},Vt.useReducer=function(k,le,Xe){return K.current.useReducer(k,le,Xe)},Vt.useRef=function(k){return K.current.useRef(k)},Vt.useState=function(k){return K.current.useState(k)},Vt.useSyncExternalStore=function(k,le,Xe){return K.current.useSyncExternalStore(k,le,Xe)},Vt.useTransition=function(){return K.current.useTransition()},Vt.version="18.3.1",Vt}var cm;function Mf(){return cm||(cm=1,Bu.exports=Qx()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function ev(){if(um)return Ka;um=1;var s=Mf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var v,S={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Ka.Fragment=n,Ka.jsx=u,Ka.jsxs=u,Ka}var dm;function tv(){return dm||(dm=1,ku.exports=ev()),ku.exports}var g=tv(),Fe=Mf();const Ef=Jx(Fe);var vl={},zu={exports:{}},Jn={},Vu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function nv(){return fm||(fm=1,(function(s){function e(Z,Me){var de=Z.length;Z.push(Me);e:for(;0<de;){var k=de-1>>>1,le=Z[k];if(0<o(le,Me))Z[k]=Me,Z[de]=le,de=k;else break e}}function n(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var Me=Z[0],de=Z.pop();if(de!==Me){Z[0]=de;e:for(var k=0,le=Z.length,Xe=le>>>1;k<Xe;){var Ye=2*(k+1)-1,De=Z[Ye],he=Ye+1,Te=Z[he];if(0>o(De,de))he<le&&0>o(Te,De)?(Z[k]=Te,Z[he]=de,k=he):(Z[k]=De,Z[Ye]=de,k=Ye);else if(he<le&&0>o(Te,de))Z[k]=Te,Z[he]=de,k=he;else break e}}return Me}function o(Z,Me){var de=Z.sortIndex-Me.sortIndex;return de!==0?de:Z.id-Me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],v=1,S=null,x=3,M=!1,A=!1,I=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Z){for(var Me=n(m);Me!==null;){if(Me.callback===null)r(m);else if(Me.startTime<=Z)r(m),Me.sortIndex=Me.expirationTime,e(h,Me);else break;Me=n(m)}}function N(Z){if(I=!1,R(Z),!A)if(n(h)!==null)A=!0,oe(z);else{var Me=n(m);Me!==null&&K(N,Me.startTime-Z)}}function z(Z,Me){A=!1,I&&(I=!1,_(w),w=-1),M=!0;var de=x;try{for(R(Me),S=n(h);S!==null&&(!(S.expirationTime>Me)||Z&&!V());){var k=S.callback;if(typeof k=="function"){S.callback=null,x=S.priorityLevel;var le=k(S.expirationTime<=Me);Me=s.unstable_now(),typeof le=="function"?S.callback=le:S===n(h)&&r(h),R(Me)}else r(h);S=n(h)}if(S!==null)var Xe=!0;else{var Ye=n(m);Ye!==null&&K(N,Ye.startTime-Me),Xe=!1}return Xe}finally{S=null,x=de,M=!1}}var P=!1,F=null,w=-1,L=5,W=-1;function V(){return!(s.unstable_now()-W<L)}function q(){if(F!==null){var Z=s.unstable_now();W=Z;var Me=!0;try{Me=F(!0,Z)}finally{Me?ee():(P=!1,F=null)}}else P=!1}var ee;if(typeof D=="function")ee=function(){D(q)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,X=Se.port2;Se.port1.onmessage=q,ee=function(){X.postMessage(null)}}else ee=function(){y(q,0)};function oe(Z){F=Z,P||(P=!0,ee())}function K(Z,Me){w=y(function(){Z(s.unstable_now())},Me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,oe(z))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var Me=3;break;default:Me=x}var de=x;x=Me;try{return Z()}finally{x=de}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,Me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var de=x;x=Z;try{return Me()}finally{x=de}},s.unstable_scheduleCallback=function(Z,Me,de){var k=s.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?k+de:k):de=k,Z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=de+le,Z={id:v++,callback:Me,priorityLevel:Z,startTime:de,expirationTime:le,sortIndex:-1},de>k?(Z.sortIndex=de,e(m,Z),n(h)===null&&Z===n(m)&&(I?(_(w),w=-1):I=!0,K(N,de-k))):(Z.sortIndex=le,e(h,Z),A||M||(A=!0,oe(z))),Z},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Z){var Me=x;return function(){var de=x;x=Me;try{return Z.apply(this,arguments)}finally{x=de}}}})(Hu)),Hu}var hm;function iv(){return hm||(hm=1,Vu.exports=nv()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function rv(){if(pm)return Jn;pm=1;var s=Mf(),e=iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(t){return h.call(S,t)?!0:h.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function M(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,c){if(i===null||typeof i>"u"||M(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function I(t,i,a,c,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new I(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new I(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new I(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new I(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new I(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new I(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new I(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new I(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new I(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,D);y[i]=new I(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,D);y[i]=new I(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,D);y[i]=new I(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new I(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new I(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Z=Symbol.iterator;function Me(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,k;function le(t){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Xe=!1;function Ye(t,i){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Ee){var c=Ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(Ee){c=Ee}t.call(i.prototype)}else{try{throw Error()}catch(Ee){c=Ee}t()}}catch(Ee){if(Ee&&c&&typeof Ee.stack=="string"){for(var d=Ee.stack.split(`
`),p=c.stack.split(`
`),T=d.length-1,B=p.length-1;1<=T&&0<=B&&d[T]!==p[B];)B--;for(;1<=T&&0<=B;T--,B--)if(d[T]!==p[B]){if(T!==1||B!==1)do if(T--,B--,0>B||d[T]!==p[B]){var Y=`
`+d[T].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=T&&0<=B);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?le(t):""}function De(t){switch(t.tag){case 5:return le(t.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return t=Ye(t.type,!1),t;case 11:return t=Ye(t.type.render,!1),t;case 1:return t=Ye(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case P:return"Portal";case L:return"Profiler";case w:return"StrictMode";case ee:return"Suspense";case Se:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function Te(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function st(t){t._valueTracker||(t._valueTracker=et(t))}function mt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Be(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kt(t,i){var a=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Wt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function Bt(t,i){Mt(t,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ht(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function It(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ht(t,i,a){(i!=="number"||pt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $=Array.isArray;function St(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Ze(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gt(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if($(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function He(t,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Rt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function U(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?U(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var re,j=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function se(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ce=["Webkit","ms","Moz","O"];Object.keys(ae).forEach(function(t){ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ae[i]=ae[t]})});function ie(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ae.hasOwnProperty(t)&&ae[t]?(""+i).trim():i+"px"}function xe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ie(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var ve=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(t,i){if(i){if(ve[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function Ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ke=null,Je=null,G=null;function Ae(t){if(t=Ua(t)){if(typeof Ke!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Do(i),Ke(t.stateNode,t.type,i))}}function ne(t){Je?G?G.push(t):G=[t]:Je=t}function Pe(){if(Je){var t=Je,i=G;if(G=Je=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function Ie(t,i){return t(i)}function Ce(){}var $e=!1;function ft(t,i,a){if($e)return t(i,a);$e=!0;try{return Ie(t,i,a)}finally{$e=!1,(Je!==null||G!==null)&&(Ce(),Pe())}}function Nt(t,i){var a=t.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Pt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Pt=!1}function tn(t,i,a,c,d,p,T,B,Y){var Ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,Ee)}catch(ke){this.onError(ke)}}var dn=!1,jn=null,Wn=!1,Rn=null,Ei={onError:function(t){dn=!0,jn=t}};function yr(t,i,a,c,d,p,T,B,Y){dn=!1,jn=null,tn.apply(Ei,arguments)}function As(t,i,a,c,d,p,T,B,Y){if(yr.apply(this,arguments),dn){if(dn){var Ee=jn;dn=!1,jn=null}else throw Error(n(198));Wn||(Wn=!0,Rn=Ee)}}function ni(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Fi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Sr(t){if(ni(t)!==t)throw Error(n(188))}function Mr(t){var i=t.alternate;if(!i){if(i=ni(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sr(d),t;if(p===c)return Sr(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=p;else{for(var T=!1,B=d.child;B;){if(B===a){T=!0,a=d,c=p;break}if(B===c){T=!0,c=d,a=p;break}B=B.sibling}if(!T){for(B=p.child;B;){if(B===a){T=!0,a=p,c=d;break}if(B===c){T=!0,c=p,a=d;break}B=B.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Kr(t){return t=Mr(t),t!==null?Zr(t):null}function Zr(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Zr(t);if(i!==null)return i;t=t.sibling}return null}var Cs=e.unstable_scheduleCallback,Jr=e.unstable_cancelCallback,Oi=e.unstable_shouldYield,Jt=e.unstable_requestPaint,Xt=e.unstable_now,Qr=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,_e=e.unstable_LowPriority,me=e.unstable_IdlePriority,pe=null,je=null;function nt(t){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(pe,t,void 0,(t.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Tt,at=Math.log,ct=Math.LN2;function Tt(t){return t>>>=0,t===0?32:31-(at(t)/ct|0)|0}var At=64,ot=4194304;function b(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function H(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,T=a&268435455;if(T!==0){var B=T&~d;B!==0?c=b(B):(p&=T,p!==0&&(c=b(p)))}else T=a&~d,T!==0?c=b(T):p!==0&&(c=b(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-We(i),d=1<<a,c|=t[a],i&=~d;return c}function O(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ue(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-We(p),B=1<<T,Y=d[T];Y===-1?((B&a)===0||(B&c)!==0)&&(d[T]=O(B,i)):Y<=i&&(t.expiredLanes|=B),p&=~B}}function Ue(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ye(){var t=At;return At<<=1,(At&4194240)===0&&(At=64),t}function Ve(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function qe(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-We(i),t[i]=a}function Gt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-We(a),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~p}}function xt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-We(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ut=0;function Dt(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var vt,Lt,on,Et,yn,tt=!1,Ut=[],fn=null,Xn=null,wi=null,Er=new Map,Zt=new Map,ki=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(t,i){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Er.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zt.delete(i.pointerId)}}function Sa(t,i,a,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ua(i),i!==null&&Lt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Sg(t,i,a,c,d){switch(i){case"focusin":return fn=Sa(fn,t,i,a,c,d),!0;case"dragenter":return Xn=Sa(Xn,t,i,a,c,d),!0;case"mouseover":return wi=Sa(wi,t,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Er.set(p,Sa(Er.get(p)||null,t,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Zt.set(p,Sa(Zt.get(p)||null,t,i,a,c,d)),!0}return!1}function Xf(t){var i=es(t.target);if(i!==null){var a=ni(i);if(a!==null){if(i=a.tag,i===13){if(i=Fi(a),i!==null){t.blockedOn=i,yn(t.priority,function(){on(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=dc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);we=c,a.target.dispatchEvent(c),we=null}else return i=Ua(a),i!==null&&Lt(i),t.blockedOn=a,!1;i.shift()}return!0}function Yf(t,i,a){_o(t)&&a.delete(i)}function Mg(){tt=!1,fn!==null&&_o(fn)&&(fn=null),Xn!==null&&_o(Xn)&&(Xn=null),wi!==null&&_o(wi)&&(wi=null),Er.forEach(Yf),Zt.forEach(Yf)}function Ma(t,i){t.blockedOn===i&&(t.blockedOn=null,tt||(tt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mg)))}function Ea(t){function i(d){return Ma(d,t)}if(0<Ut.length){Ma(Ut[0],t);for(var a=1;a<Ut.length;a++){var c=Ut[a];c.blockedOn===t&&(c.blockedOn=null)}}for(fn!==null&&Ma(fn,t),Xn!==null&&Ma(Xn,t),wi!==null&&Ma(wi,t),Er.forEach(i),Zt.forEach(i),a=0;a<ki.length;a++)c=ki[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<ki.length&&(a=ki[0],a.blockedOn===null);)Xf(a),a.blockedOn===null&&ki.shift()}var Rs=N.ReactCurrentBatchConfig,yo=!0;function Eg(t,i,a,c){var d=ut,p=Rs.transition;Rs.transition=null;try{ut=1,uc(t,i,a,c)}finally{ut=d,Rs.transition=p}}function wg(t,i,a,c){var d=ut,p=Rs.transition;Rs.transition=null;try{ut=4,uc(t,i,a,c)}finally{ut=d,Rs.transition=p}}function uc(t,i,a,c){if(yo){var d=dc(t,i,a,c);if(d===null)Cc(t,i,c,So,a),Wf(t,c);else if(Sg(d,t,i,a,c))c.stopPropagation();else if(Wf(t,c),i&4&&-1<yg.indexOf(t)){for(;d!==null;){var p=Ua(d);if(p!==null&&vt(p),p=dc(t,i,a,c),p===null&&Cc(t,i,c,So,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Cc(t,i,c,null,a)}}var So=null;function dc(t,i,a,c){if(So=null,t=Ne(c),t=es(t),t!==null)if(i=ni(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Fi(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return So=t,null}function $f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qr()){case Qi:return 1;case C:return 4;case J:case _e:return 16;case me:return 536870912;default:return 16}default:return 16}}var wr=null,fc=null,Mo=null;function qf(){if(Mo)return Mo;var t,i=fc,a=i.length,c,d="value"in wr?wr.value:wr.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===d[p-c];c++);return Mo=d.slice(t,1<c?1-c:void 0)}function Eo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function wo(){return!0}function Kf(){return!1}function ii(t){function i(a,c,d,p,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var B in t)t.hasOwnProperty(B)&&(a=t[B],this[B]=a?a(p):p[B]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?wo:Kf,this.isPropagationStopped=Kf,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=ii(Ns),wa=de({},Ns,{view:0,detail:0}),bg=ii(wa),pc,mc,ba,bo=de({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(pc=t.screenX-ba.screenX,mc=t.screenY-ba.screenY):mc=pc=0,ba=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Zf=ii(bo),Tg=de({},bo,{dataTransfer:0}),Ag=ii(Tg),Cg=de({},wa,{relatedTarget:0}),gc=ii(Cg),Rg=de({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=ii(Rg),Pg=de({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ig=ii(Pg),Dg=de({},Ns,{data:0}),Jf=ii(Dg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fg[t])?!!i[t]:!1}function xc(){return Og}var kg=de({},wa,{key:function(t){if(t.key){var i=Lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bg=ii(kg),zg=de({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=ii(zg),Vg=de({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Hg=ii(Vg),Gg=de({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=ii(Gg),Wg=de({},bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=ii(Wg),Yg=[9,13,27,32],vc=f&&"CompositionEvent"in window,Ta=null;f&&"documentMode"in document&&(Ta=document.documentMode);var $g=f&&"TextEvent"in window&&!Ta,eh=f&&(!vc||Ta&&8<Ta&&11>=Ta),th=" ",nh=!1;function ih(t,i){switch(t){case"keyup":return Yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function qg(t,i){switch(t){case"compositionend":return rh(i);case"keypress":return i.which!==32?null:(nh=!0,th);case"textInput":return t=i.data,t===th&&nh?null:t;default:return null}}function Kg(t,i){if(Ps)return t==="compositionend"||!vc&&ih(t,i)?(t=qf(),Mo=fc=wr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return eh&&i.locale!=="ko"?null:i.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Zg[t.type]:i==="textarea"}function ah(t,i,a,c){ne(c),i=No(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var Aa=null,Ca=null;function Jg(t){wh(t,0)}function To(t){var i=Fs(t);if(mt(i))return t}function Qg(t,i){if(t==="change")return i}var oh=!1;if(f){var _c;if(f){var yc="oninput"in document;if(!yc){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),yc=typeof lh.oninput=="function"}_c=yc}else _c=!1;oh=_c&&(!document.documentMode||9<document.documentMode)}function ch(){Aa&&(Aa.detachEvent("onpropertychange",uh),Ca=Aa=null)}function uh(t){if(t.propertyName==="value"&&To(Ca)){var i=[];ah(i,Ca,t,Ne(t)),ft(Jg,i)}}function ex(t,i,a){t==="focusin"?(ch(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",uh)):t==="focusout"&&ch()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return To(Ca)}function nx(t,i){if(t==="click")return To(i)}function ix(t,i){if(t==="input"||t==="change")return To(i)}function rx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:rx;function Ra(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!bi(t[d],i[d]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fh(t,i){var a=dh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dh(a)}}function hh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ph(){for(var t=window,i=pt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=pt(t.document)}return i}function Sc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function sx(t){var i=ph(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&hh(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=fh(a,p);var T=fh(a,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=f&&"documentMode"in document&&11>=document.documentMode,Is=null,Mc=null,Na=null,Ec=!1;function mh(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Is==null||Is!==pt(c)||(c=Is,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&Ra(Na,c)||(Na=c,c=No(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=Is)))}function Ao(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ds={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},wc={},gh={};f&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Co(t){if(wc[t])return wc[t];if(!Ds[t])return t;var i=Ds[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in gh)return wc[t]=i[a];return t}var xh=Co("animationend"),vh=Co("animationiteration"),_h=Co("animationstart"),yh=Co("transitionend"),Sh=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,i){Sh.set(t,i),l(i,[t])}for(var bc=0;bc<Mh.length;bc++){var Tc=Mh[bc],ox=Tc.toLowerCase(),lx=Tc[0].toUpperCase()+Tc.slice(1);br(ox,"on"+lx)}br(xh,"onAnimationEnd"),br(vh,"onAnimationIteration"),br(_h,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(yh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Eh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,As(c,i,void 0,t),t.currentTarget=null}function wh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Y=B.instance,Ee=B.currentTarget;if(B=B.listener,Y!==p&&d.isPropagationStopped())break e;Eh(d,B,Ee),p=Y}else for(T=0;T<c.length;T++){if(B=c[T],Y=B.instance,Ee=B.currentTarget,B=B.listener,Y!==p&&d.isPropagationStopped())break e;Eh(d,B,Ee),p=Y}}}if(Wn)throw t=Rn,Wn=!1,Rn=null,t}function rn(t,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=t+"__bubble";a.has(c)||(bh(i,t,2,!1),a.add(c))}function Ac(t,i,a){var c=0;i&&(c|=4),bh(a,t,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Ro]){t[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||Ac(a,!1,t),Ac(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Ac("selectionchange",!1,i))}}function bh(t,i,a,c){switch($f(i)){case 1:var d=Eg;break;case 4:d=wg;break;default:d=uc}a=d.bind(null,i,a,t),d=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function Cc(t,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var Y=T.tag;if((Y===3||Y===4)&&(Y=T.stateNode.containerInfo,Y===d||Y.nodeType===8&&Y.parentNode===d))return;T=T.return}for(;B!==null;){if(T=es(B),T===null)return;if(Y=T.tag,Y===5||Y===6){c=p=T;continue e}B=B.parentNode}}c=c.return}ft(function(){var Ee=p,ke=Ne(a),ze=[];e:{var Oe=Sh.get(t);if(Oe!==void 0){var it=hc,lt=t;switch(t){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":it=Bg;break;case"focusin":lt="focus",it=gc;break;case"focusout":lt="blur",it=gc;break;case"beforeblur":case"afterblur":it=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Hg;break;case xh:case vh:case _h:it=Ng;break;case yh:it=jg;break;case"scroll":it=bg;break;case"wheel":it=Xg;break;case"copy":case"cut":case"paste":it=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Qf}var dt=(i&4)!==0,pn=!dt&&t==="scroll",fe=dt?Oe!==null?Oe+"Capture":null:Oe;dt=[];for(var Q=Ee,ge;Q!==null;){ge=Q;var Ge=ge.stateNode;if(ge.tag===5&&Ge!==null&&(ge=Ge,fe!==null&&(Ge=Nt(Q,fe),Ge!=null&&dt.push(Da(Q,Ge,ge)))),pn)break;Q=Q.return}0<dt.length&&(Oe=new it(Oe,lt,null,a,ke),ze.push({event:Oe,listeners:dt}))}}if((i&7)===0){e:{if(Oe=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",Oe&&a!==we&&(lt=a.relatedTarget||a.fromElement)&&(es(lt)||lt[er]))break e;if((it||Oe)&&(Oe=ke.window===ke?ke:(Oe=ke.ownerDocument)?Oe.defaultView||Oe.parentWindow:window,it?(lt=a.relatedTarget||a.toElement,it=Ee,lt=lt?es(lt):null,lt!==null&&(pn=ni(lt),lt!==pn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(it=null,lt=Ee),it!==lt)){if(dt=Zf,Ge="onMouseLeave",fe="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(dt=Qf,Ge="onPointerLeave",fe="onPointerEnter",Q="pointer"),pn=it==null?Oe:Fs(it),ge=lt==null?Oe:Fs(lt),Oe=new dt(Ge,Q+"leave",it,a,ke),Oe.target=pn,Oe.relatedTarget=ge,Ge=null,es(ke)===Ee&&(dt=new dt(fe,Q+"enter",lt,a,ke),dt.target=ge,dt.relatedTarget=pn,Ge=dt),pn=Ge,it&&lt)t:{for(dt=it,fe=lt,Q=0,ge=dt;ge;ge=Ls(ge))Q++;for(ge=0,Ge=fe;Ge;Ge=Ls(Ge))ge++;for(;0<Q-ge;)dt=Ls(dt),Q--;for(;0<ge-Q;)fe=Ls(fe),ge--;for(;Q--;){if(dt===fe||fe!==null&&dt===fe.alternate)break t;dt=Ls(dt),fe=Ls(fe)}dt=null}else dt=null;it!==null&&Th(ze,Oe,it,dt,!1),lt!==null&&pn!==null&&Th(ze,pn,lt,dt,!0)}}e:{if(Oe=Ee?Fs(Ee):window,it=Oe.nodeName&&Oe.nodeName.toLowerCase(),it==="select"||it==="input"&&Oe.type==="file")var ht=Qg;else if(sh(Oe))if(oh)ht=ix;else{ht=tx;var _t=ex}else(it=Oe.nodeName)&&it.toLowerCase()==="input"&&(Oe.type==="checkbox"||Oe.type==="radio")&&(ht=nx);if(ht&&(ht=ht(t,Ee))){ah(ze,ht,a,ke);break e}_t&&_t(t,Oe,Ee),t==="focusout"&&(_t=Oe._wrapperState)&&_t.controlled&&Oe.type==="number"&&Ht(Oe,"number",Oe.value)}switch(_t=Ee?Fs(Ee):window,t){case"focusin":(sh(_t)||_t.contentEditable==="true")&&(Is=_t,Mc=Ee,Na=null);break;case"focusout":Na=Mc=Is=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,mh(ze,a,ke);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":mh(ze,a,ke)}var yt;if(vc)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ps?ih(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(eh&&a.locale!=="ko"&&(Ps||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ps&&(yt=qf()):(wr=ke,fc="value"in wr?wr.value:wr.textContent,Ps=!0)),_t=No(Ee,Ct),0<_t.length&&(Ct=new Jf(Ct,t,null,a,ke),ze.push({event:Ct,listeners:_t}),yt?Ct.data=yt:(yt=rh(a),yt!==null&&(Ct.data=yt)))),(yt=$g?qg(t,a):Kg(t,a))&&(Ee=No(Ee,"onBeforeInput"),0<Ee.length&&(ke=new Jf("onBeforeInput","beforeinput",null,a,ke),ze.push({event:ke,listeners:Ee}),ke.data=yt))}wh(ze,i)})}function Da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function No(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Nt(t,a),p!=null&&c.unshift(Da(t,p,d)),p=Nt(t,i),p!=null&&c.push(Da(t,p,d))),t=t.return}return c}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,i,a,c,d){for(var p=i._reactName,T=[];a!==null&&a!==c;){var B=a,Y=B.alternate,Ee=B.stateNode;if(Y!==null&&Y===c)break;B.tag===5&&Ee!==null&&(B=Ee,d?(Y=Nt(a,p),Y!=null&&T.unshift(Da(a,Y,B))):d||(Y=Nt(a,p),Y!=null&&T.push(Da(a,Y,B)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(dx,"")}function Po(t,i,a){if(i=Ah(i),Ah(t)!==i&&a)throw Error(n(425))}function Io(){}var Rc=null,Nc=null;function Pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(t){return Ch.resolve(null).then(t).catch(px)}:Ic;function px(t){setTimeout(function(){throw t})}function Dc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),Ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ea(i)}function Tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Us,La="__reactProps$"+Us,er="__reactContainer$"+Us,Lc="__reactEvents$"+Us,mx="__reactListeners$"+Us,gx="__reactHandles$"+Us;function es(t){var i=t[Bi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[er]||a[Bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Rh(t);t!==null;){if(a=t[Bi])return a;t=Rh(t)}return i}t=a,a=t.parentNode}return null}function Ua(t){return t=t[Bi]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Do(t){return t[La]||null}var Uc=[],Os=-1;function Ar(t){return{current:t}}function sn(t){0>Os||(t.current=Uc[Os],Uc[Os]=null,Os--)}function nn(t,i){Os++,Uc[Os]=t.current,t.current=i}var Cr={},Dn=Ar(Cr),Yn=Ar(!1),ts=Cr;function ks(t,i){var a=t.type.contextTypes;if(!a)return Cr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function $n(t){return t=t.childContextTypes,t!=null}function Lo(){sn(Yn),sn(Dn)}function Nh(t,i,a){if(Dn.current!==Cr)throw Error(n(168));nn(Dn,i),nn(Yn,a)}function Ph(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Te(t)||"Unknown",d));return de({},a,c)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ts=Dn.current,nn(Dn,t),nn(Yn,Yn.current),!0}function Ih(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Ph(t,i,ts),c.__reactInternalMemoizedMergedChildContext=t,sn(Yn),sn(Dn),nn(Dn,t)):sn(Yn),nn(Yn,a)}var tr=null,Fo=!1,Fc=!1;function Dh(t){tr===null?tr=[t]:tr.push(t)}function xx(t){Fo=!0,Dh(t)}function Rr(){if(!Fc&&tr!==null){Fc=!0;var t=0,i=ut;try{var a=tr;for(ut=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}tr=null,Fo=!1}catch(d){throw tr!==null&&(tr=tr.slice(t+1)),Cs(Qi,Rr),d}finally{ut=i,Fc=!1}}return null}var Bs=[],zs=0,Oo=null,ko=0,di=[],fi=0,ns=null,nr=1,ir="";function is(t,i){Bs[zs++]=ko,Bs[zs++]=Oo,Oo=t,ko=i}function Lh(t,i,a){di[fi++]=nr,di[fi++]=ir,di[fi++]=ns,ns=t;var c=nr;t=ir;var d=32-We(c)-1;c&=~(1<<d),a+=1;var p=32-We(i)+d;if(30<p){var T=d-d%5;p=(c&(1<<T)-1).toString(32),c>>=T,d-=T,nr=1<<32-We(i)+d|a<<d|c,ir=p+t}else nr=1<<p|a<<d|c,ir=t}function Oc(t){t.return!==null&&(is(t,1),Lh(t,1,0))}function kc(t){for(;t===Oo;)Oo=Bs[--zs],Bs[zs]=null,ko=Bs[--zs],Bs[zs]=null;for(;t===ns;)ns=di[--fi],di[fi]=null,ir=di[--fi],di[fi]=null,nr=di[--fi],di[fi]=null}var ri=null,si=null,ln=!1,Ti=null;function Uh(t,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Fh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,ri=t,si=Tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,ri=t,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:nr,overflow:ir}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,ri=t,si=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(ln){var i=si;if(i){var a=i;if(!Fh(t,i)){if(Bc(t))throw Error(n(418));i=Tr(a.nextSibling);var c=ri;i&&Fh(t,i)?Uh(c,a):(t.flags=t.flags&-4097|2,ln=!1,ri=t)}}else{if(Bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,ln=!1,ri=t}}}function Oh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ri=t}function Bo(t){if(t!==ri)return!1;if(!ln)return Oh(t),ln=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Pc(t.type,t.memoizedProps)),i&&(i=si)){if(Bc(t))throw kh(),Error(n(418));for(;i;)Uh(t,i),i=Tr(i.nextSibling)}if(Oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){si=Tr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}si=null}}else si=ri?Tr(t.stateNode.nextSibling):null;return!0}function kh(){for(var t=si;t;)t=Tr(t.nextSibling)}function Vs(){si=ri=null,ln=!1}function Vc(t){Ti===null?Ti=[t]:Ti.push(t)}var vx=N.ReactCurrentBatchConfig;function Fa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var B=d.refs;T===null?delete B[p]:B[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function zo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Bh(t){var i=t._init;return i(t._payload)}function zh(t){function i(fe,Q){if(t){var ge=fe.deletions;ge===null?(fe.deletions=[Q],fe.flags|=16):ge.push(Q)}}function a(fe,Q){if(!t)return null;for(;Q!==null;)i(fe,Q),Q=Q.sibling;return null}function c(fe,Q){for(fe=new Map;Q!==null;)Q.key!==null?fe.set(Q.key,Q):fe.set(Q.index,Q),Q=Q.sibling;return fe}function d(fe,Q){return fe=Or(fe,Q),fe.index=0,fe.sibling=null,fe}function p(fe,Q,ge){return fe.index=ge,t?(ge=fe.alternate,ge!==null?(ge=ge.index,ge<Q?(fe.flags|=2,Q):ge):(fe.flags|=2,Q)):(fe.flags|=1048576,Q)}function T(fe){return t&&fe.alternate===null&&(fe.flags|=2),fe}function B(fe,Q,ge,Ge){return Q===null||Q.tag!==6?(Q=Iu(ge,fe.mode,Ge),Q.return=fe,Q):(Q=d(Q,ge),Q.return=fe,Q)}function Y(fe,Q,ge,Ge){var ht=ge.type;return ht===F?ke(fe,Q,ge.props.children,Ge,ge.key):Q!==null&&(Q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===oe&&Bh(ht)===Q.type)?(Ge=d(Q,ge.props),Ge.ref=Fa(fe,Q,ge),Ge.return=fe,Ge):(Ge=ul(ge.type,ge.key,ge.props,null,fe.mode,Ge),Ge.ref=Fa(fe,Q,ge),Ge.return=fe,Ge)}function Ee(fe,Q,ge,Ge){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ge.containerInfo||Q.stateNode.implementation!==ge.implementation?(Q=Du(ge,fe.mode,Ge),Q.return=fe,Q):(Q=d(Q,ge.children||[]),Q.return=fe,Q)}function ke(fe,Q,ge,Ge,ht){return Q===null||Q.tag!==7?(Q=ds(ge,fe.mode,Ge,ht),Q.return=fe,Q):(Q=d(Q,ge),Q.return=fe,Q)}function ze(fe,Q,ge){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Iu(""+Q,fe.mode,ge),Q.return=fe,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return ge=ul(Q.type,Q.key,Q.props,null,fe.mode,ge),ge.ref=Fa(fe,null,Q),ge.return=fe,ge;case P:return Q=Du(Q,fe.mode,ge),Q.return=fe,Q;case oe:var Ge=Q._init;return ze(fe,Ge(Q._payload),ge)}if($(Q)||Me(Q))return Q=ds(Q,fe.mode,ge,null),Q.return=fe,Q;zo(fe,Q)}return null}function Oe(fe,Q,ge,Ge){var ht=Q!==null?Q.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number")return ht!==null?null:B(fe,Q,""+ge,Ge);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case z:return ge.key===ht?Y(fe,Q,ge,Ge):null;case P:return ge.key===ht?Ee(fe,Q,ge,Ge):null;case oe:return ht=ge._init,Oe(fe,Q,ht(ge._payload),Ge)}if($(ge)||Me(ge))return ht!==null?null:ke(fe,Q,ge,Ge,null);zo(fe,ge)}return null}function it(fe,Q,ge,Ge,ht){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return fe=fe.get(ge)||null,B(Q,fe,""+Ge,ht);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case z:return fe=fe.get(Ge.key===null?ge:Ge.key)||null,Y(Q,fe,Ge,ht);case P:return fe=fe.get(Ge.key===null?ge:Ge.key)||null,Ee(Q,fe,Ge,ht);case oe:var _t=Ge._init;return it(fe,Q,ge,_t(Ge._payload),ht)}if($(Ge)||Me(Ge))return fe=fe.get(ge)||null,ke(Q,fe,Ge,ht,null);zo(Q,Ge)}return null}function lt(fe,Q,ge,Ge){for(var ht=null,_t=null,yt=Q,Ct=Q=0,An=null;yt!==null&&Ct<ge.length;Ct++){yt.index>Ct?(An=yt,yt=null):An=yt.sibling;var Kt=Oe(fe,yt,ge[Ct],Ge);if(Kt===null){yt===null&&(yt=An);break}t&&yt&&Kt.alternate===null&&i(fe,yt),Q=p(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt,yt=An}if(Ct===ge.length)return a(fe,yt),ln&&is(fe,Ct),ht;if(yt===null){for(;Ct<ge.length;Ct++)yt=ze(fe,ge[Ct],Ge),yt!==null&&(Q=p(yt,Q,Ct),_t===null?ht=yt:_t.sibling=yt,_t=yt);return ln&&is(fe,Ct),ht}for(yt=c(fe,yt);Ct<ge.length;Ct++)An=it(yt,fe,Ct,ge[Ct],Ge),An!==null&&(t&&An.alternate!==null&&yt.delete(An.key===null?Ct:An.key),Q=p(An,Q,Ct),_t===null?ht=An:_t.sibling=An,_t=An);return t&&yt.forEach(function(kr){return i(fe,kr)}),ln&&is(fe,Ct),ht}function dt(fe,Q,ge,Ge){var ht=Me(ge);if(typeof ht!="function")throw Error(n(150));if(ge=ht.call(ge),ge==null)throw Error(n(151));for(var _t=ht=null,yt=Q,Ct=Q=0,An=null,Kt=ge.next();yt!==null&&!Kt.done;Ct++,Kt=ge.next()){yt.index>Ct?(An=yt,yt=null):An=yt.sibling;var kr=Oe(fe,yt,Kt.value,Ge);if(kr===null){yt===null&&(yt=An);break}t&&yt&&kr.alternate===null&&i(fe,yt),Q=p(kr,Q,Ct),_t===null?ht=kr:_t.sibling=kr,_t=kr,yt=An}if(Kt.done)return a(fe,yt),ln&&is(fe,Ct),ht;if(yt===null){for(;!Kt.done;Ct++,Kt=ge.next())Kt=ze(fe,Kt.value,Ge),Kt!==null&&(Q=p(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt);return ln&&is(fe,Ct),ht}for(yt=c(fe,yt);!Kt.done;Ct++,Kt=ge.next())Kt=it(yt,fe,Ct,Kt.value,Ge),Kt!==null&&(t&&Kt.alternate!==null&&yt.delete(Kt.key===null?Ct:Kt.key),Q=p(Kt,Q,Ct),_t===null?ht=Kt:_t.sibling=Kt,_t=Kt);return t&&yt.forEach(function(Zx){return i(fe,Zx)}),ln&&is(fe,Ct),ht}function pn(fe,Q,ge,Ge){if(typeof ge=="object"&&ge!==null&&ge.type===F&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case z:e:{for(var ht=ge.key,_t=Q;_t!==null;){if(_t.key===ht){if(ht=ge.type,ht===F){if(_t.tag===7){a(fe,_t.sibling),Q=d(_t,ge.props.children),Q.return=fe,fe=Q;break e}}else if(_t.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===oe&&Bh(ht)===_t.type){a(fe,_t.sibling),Q=d(_t,ge.props),Q.ref=Fa(fe,_t,ge),Q.return=fe,fe=Q;break e}a(fe,_t);break}else i(fe,_t);_t=_t.sibling}ge.type===F?(Q=ds(ge.props.children,fe.mode,Ge,ge.key),Q.return=fe,fe=Q):(Ge=ul(ge.type,ge.key,ge.props,null,fe.mode,Ge),Ge.ref=Fa(fe,Q,ge),Ge.return=fe,fe=Ge)}return T(fe);case P:e:{for(_t=ge.key;Q!==null;){if(Q.key===_t)if(Q.tag===4&&Q.stateNode.containerInfo===ge.containerInfo&&Q.stateNode.implementation===ge.implementation){a(fe,Q.sibling),Q=d(Q,ge.children||[]),Q.return=fe,fe=Q;break e}else{a(fe,Q);break}else i(fe,Q);Q=Q.sibling}Q=Du(ge,fe.mode,Ge),Q.return=fe,fe=Q}return T(fe);case oe:return _t=ge._init,pn(fe,Q,_t(ge._payload),Ge)}if($(ge))return lt(fe,Q,ge,Ge);if(Me(ge))return dt(fe,Q,ge,Ge);zo(fe,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"?(ge=""+ge,Q!==null&&Q.tag===6?(a(fe,Q.sibling),Q=d(Q,ge),Q.return=fe,fe=Q):(a(fe,Q),Q=Iu(ge,fe.mode,Ge),Q.return=fe,fe=Q),T(fe)):a(fe,Q)}return pn}var Hs=zh(!0),Vh=zh(!1),Vo=Ar(null),Ho=null,Gs=null,Hc=null;function Gc(){Hc=Gs=Ho=null}function jc(t){var i=Vo.current;sn(Vo),t._currentValue=i}function Wc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function js(t,i){Ho=t,Hc=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(qn=!0),t.firstContext=null)}function hi(t){var i=t._currentValue;if(Hc!==t)if(t={context:t,memoizedValue:i,next:null},Gs===null){if(Ho===null)throw Error(n(308));Gs=t,Ho.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return i}var rs=null;function Xc(t){rs===null?rs=[t]:rs.push(t)}function Hh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Xc(i)):(a.next=d.next,d.next=a),i.interleaved=a,rr(t,c)}function rr(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Nr=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,($t&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,rr(t,a)}return d=c.interleaved,d===null?(i.next=i,Xc(c)):(i.next=d.next,d.next=i),c.interleaved=i,rr(t,a)}function Go(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,xt(t,a)}}function jh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function jo(t,i,a,c){var d=t.updateQueue;Nr=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var Y=B,Ee=Y.next;Y.next=null,T===null?p=Ee:T.next=Ee,T=Y;var ke=t.alternate;ke!==null&&(ke=ke.updateQueue,B=ke.lastBaseUpdate,B!==T&&(B===null?ke.firstBaseUpdate=Ee:B.next=Ee,ke.lastBaseUpdate=Y))}if(p!==null){var ze=d.baseState;T=0,ke=Ee=Y=null,B=p;do{var Oe=B.lane,it=B.eventTime;if((c&Oe)===Oe){ke!==null&&(ke=ke.next={eventTime:it,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var lt=t,dt=B;switch(Oe=i,it=a,dt.tag){case 1:if(lt=dt.payload,typeof lt=="function"){ze=lt.call(it,ze,Oe);break e}ze=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=dt.payload,Oe=typeof lt=="function"?lt.call(it,ze,Oe):lt,Oe==null)break e;ze=de({},ze,Oe);break e;case 2:Nr=!0}}B.callback!==null&&B.lane!==0&&(t.flags|=64,Oe=d.effects,Oe===null?d.effects=[B]:Oe.push(B))}else it={eventTime:it,lane:Oe,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ke===null?(Ee=ke=it,Y=ze):ke=ke.next=it,T|=Oe;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Oe=B,B=Oe.next,Oe.next=null,d.lastBaseUpdate=Oe,d.shared.pending=null}}while(!0);if(ke===null&&(Y=ze),d.baseState=Y,d.firstBaseUpdate=Ee,d.lastBaseUpdate=ke,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);os|=T,t.lanes=T,t.memoizedState=ze}}function Wh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Oa={},zi=Ar(Oa),ka=Ar(Oa),Ba=Ar(Oa);function ss(t){if(t===Oa)throw Error(n(174));return t}function $c(t,i){switch(nn(Ba,i),nn(ka,t),nn(zi,Oa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=E(i,t)}sn(zi),nn(zi,i)}function Ws(){sn(zi),sn(ka),sn(Ba)}function Xh(t){ss(Ba.current);var i=ss(zi.current),a=E(i,t.type);i!==a&&(nn(ka,t),nn(zi,a))}function qc(t){ka.current===t&&(sn(zi),sn(ka))}var cn=Ar(0);function Wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var Xo=N.ReactCurrentDispatcher,Jc=N.ReactCurrentBatchConfig,as=0,un=null,Sn=null,bn=null,Yo=!1,za=!1,Va=0,_x=0;function Ln(){throw Error(n(321))}function Qc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!bi(t[a],i[a]))return!1;return!0}function eu(t,i,a,c,d,p){if(as=p,un=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=t===null||t.memoizedState===null?Ex:wx,t=a(c,d),za){p=0;do{if(za=!1,Va=0,25<=p)throw Error(n(301));p+=1,bn=Sn=null,i.updateQueue=null,Xo.current=bx,t=a(c,d)}while(za)}if(Xo.current=Ko,i=Sn!==null&&Sn.next!==null,as=0,bn=Sn=un=null,Yo=!1,i)throw Error(n(300));return t}function tu(){var t=Va!==0;return Va=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?un.memoizedState=bn=t:bn=bn.next=t,bn}function pi(){if(Sn===null){var t=un.alternate;t=t!==null?t.memoizedState:null}else t=Sn.next;var i=bn===null?un.memoizedState:bn.next;if(i!==null)bn=i,Sn=t;else{if(t===null)throw Error(n(310));Sn=t,t={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?un.memoizedState=bn=t:bn=bn.next=t}return bn}function Ha(t,i){return typeof i=="function"?i(t):i}function nu(t){var i=pi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=Sn,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var B=T=null,Y=null,Ee=p;do{var ke=Ee.lane;if((as&ke)===ke)Y!==null&&(Y=Y.next={lane:0,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null}),c=Ee.hasEagerState?Ee.eagerState:t(c,Ee.action);else{var ze={lane:ke,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null};Y===null?(B=Y=ze,T=c):Y=Y.next=ze,un.lanes|=ke,os|=ke}Ee=Ee.next}while(Ee!==null&&Ee!==p);Y===null?T=c:Y.next=B,bi(c,i.memoizedState)||(qn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Y,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do p=d.lane,un.lanes|=p,os|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(t){var i=pi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do p=t(p,T.action),T=T.next;while(T!==d);bi(p,i.memoizedState)||(qn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Yh(){}function $h(t,i){var a=un,c=pi(),d=i(),p=!bi(c.memoizedState,d);if(p&&(c.memoizedState=d,qn=!0),c=c.queue,ru(Zh.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,Ga(9,Kh.bind(null,a,c,d,i),void 0,null),Tn===null)throw Error(n(349));(as&30)!==0||qh(a,i,d)}return d}function qh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Kh(t,i,a,c){i.value=a,i.getSnapshot=c,Jh(i)&&Qh(t)}function Zh(t,i,a){return a(function(){Jh(i)&&Qh(t)})}function Jh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!bi(t,a)}catch{return!0}}function Qh(t){var i=rr(t,1);i!==null&&Ni(i,t,1,-1)}function ep(t){var i=Vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},i.queue=t,t=t.dispatch=Mx.bind(null,un,t),[i.memoizedState,t]}function Ga(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function tp(){return pi().memoizedState}function $o(t,i,a,c){var d=Vi();un.flags|=t,d.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function qo(t,i,a,c){var d=pi();c=c===void 0?null:c;var p=void 0;if(Sn!==null){var T=Sn.memoizedState;if(p=T.destroy,c!==null&&Qc(c,T.deps)){d.memoizedState=Ga(i,a,p,c);return}}un.flags|=t,d.memoizedState=Ga(1|i,a,p,c)}function np(t,i){return $o(8390656,8,t,i)}function ru(t,i){return qo(2048,8,t,i)}function ip(t,i){return qo(4,2,t,i)}function rp(t,i){return qo(4,4,t,i)}function sp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ap(t,i,a){return a=a!=null?a.concat([t]):null,qo(4,4,sp.bind(null,i,t),a)}function su(){}function op(t,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function lp(t,i){var a=pi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function cp(t,i,a){return(as&21)===0?(t.baseState&&(t.baseState=!1,qn=!0),t.memoizedState=a):(bi(a,i)||(a=ye(),un.lanes|=a,os|=a,t.baseState=!0),i)}function yx(t,i){var a=ut;ut=a!==0&&4>a?a:4,t(!0);var c=Jc.transition;Jc.transition={};try{t(!1),i()}finally{ut=a,Jc.transition=c}}function up(){return pi().memoizedState}function Sx(t,i,a){var c=Ur(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dp(t))fp(i,a);else if(a=Hh(t,i,a,c),a!==null){var d=Vn();Ni(a,t,c,d),hp(a,i,c)}}function Mx(t,i,a){var c=Ur(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dp(t))fp(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,B=p(T,a);if(d.hasEagerState=!0,d.eagerState=B,bi(B,T)){var Y=i.interleaved;Y===null?(d.next=d,Xc(i)):(d.next=Y.next,Y.next=d),i.interleaved=d;return}}catch{}finally{}a=Hh(t,i,d,c),a!==null&&(d=Vn(),Ni(a,t,c,d),hp(a,i,c))}}function dp(t){var i=t.alternate;return t===un||i!==null&&i===un}function fp(t,i){za=Yo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function hp(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,xt(t,a)}}var Ko={readContext:hi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},Ex={readContext:hi,useCallback:function(t,i){return Vi().memoizedState=[t,i===void 0?null:i],t},useContext:hi,useEffect:np,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,$o(4194308,4,sp.bind(null,i,t),a)},useLayoutEffect:function(t,i){return $o(4194308,4,t,i)},useInsertionEffect:function(t,i){return $o(4,2,t,i)},useMemo:function(t,i){var a=Vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Sx.bind(null,un,t),[c.memoizedState,t]},useRef:function(t){var i=Vi();return t={current:t},i.memoizedState=t},useState:ep,useDebugValue:su,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=ep(!1),i=t[0];return t=yx.bind(null,t[1]),Vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=un,d=Vi();if(ln){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Tn===null)throw Error(n(349));(as&30)!==0||qh(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,np(Zh.bind(null,c,p,t),[t]),c.flags|=2048,Ga(9,Kh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=Vi(),i=Tn.identifierPrefix;if(ln){var a=ir,c=nr;a=(c&~(1<<32-We(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_x++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},wx={readContext:hi,useCallback:op,useContext:hi,useEffect:ru,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:nu,useRef:tp,useState:function(){return nu(Ha)},useDebugValue:su,useDeferredValue:function(t){var i=pi();return cp(i,Sn.memoizedState,t)},useTransition:function(){var t=nu(Ha)[0],i=pi().memoizedState;return[t,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1},bx={readContext:hi,useCallback:op,useContext:hi,useEffect:ru,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:iu,useRef:tp,useState:function(){return iu(Ha)},useDebugValue:su,useDeferredValue:function(t){var i=pi();return Sn===null?i.memoizedState=t:cp(i,Sn.memoizedState,t)},useTransition:function(){var t=iu(Ha)[0],i=pi().memoizedState;return[t,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1};function Ai(t,i){if(t&&t.defaultProps){i=de({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function au(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:de({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zo={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Vn(),d=Ur(t),p=sr(c,d);p.payload=i,a!=null&&(p.callback=a),i=Pr(t,p,d),i!==null&&(Ni(i,t,d,c),Go(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Vn(),d=Ur(t),p=sr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Pr(t,p,d),i!==null&&(Ni(i,t,d,c),Go(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Vn(),c=Ur(t),d=sr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Pr(t,d,c),i!==null&&(Ni(i,t,c,a),Go(i,t,c))}};function pp(t,i,a,c,d,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(d,p):!0}function mp(t,i,a){var c=!1,d=Cr,p=i.contextType;return typeof p=="object"&&p!==null?p=hi(p):(d=$n(i)?ts:Dn.current,c=i.contextTypes,p=(c=c!=null)?ks(t,d):Cr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function gp(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Zo.enqueueReplaceState(i,i.state,null)}function ou(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Yc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=hi(p):(p=$n(i)?ts:Dn.current,d.context=ks(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(au(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Zo.enqueueReplaceState(d,d.state,null),jo(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function lu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function cu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function xp(t,i,a){a=sr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,wu=c),cu(t,i)},a}function vp(t,i,a){a=sr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){cu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){cu(t,i),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function _p(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Tx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=zx.bind(null,t,i,a),i.then(t,t))}function yp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Sp(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=sr(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Ax=N.ReactCurrentOwner,qn=!1;function zn(t,i,a,c){i.child=t===null?Vh(i,null,a,c):Hs(i,t.child,a,c)}function Mp(t,i,a,c,d){a=a.render;var p=i.ref;return js(i,d),c=eu(t,i,a,c,p,d),a=tu(),t!==null&&!qn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ar(t,i,d)):(ln&&a&&Oc(i),i.flags|=1,zn(t,i,c,d),i.child)}function Ep(t,i,a,c,d){if(t===null){var p=a.type;return typeof p=="function"&&!Pu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,wp(t,i,p,c,d)):(t=ul(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(T,c)&&t.ref===i.ref)return ar(t,i,d)}return i.flags|=1,t=Or(p,c),t.ref=i.ref,t.return=i,i.child=t}function wp(t,i,a,c,d){if(t!==null){var p=t.memoizedProps;if(Ra(p,c)&&t.ref===i.ref)if(qn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(qn=!0);else return i.lanes=t.lanes,ar(t,i,d)}return uu(t,i,a,c,d)}function bp(t,i,a){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn($s,ai),ai|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,nn($s,ai),ai|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,nn($s,ai),ai|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,nn($s,ai),ai|=c;return zn(t,i,d,a),i.child}function Tp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(t,i,a,c,d){var p=$n(a)?ts:Dn.current;return p=ks(i,p),js(i,d),a=eu(t,i,a,c,p,d),c=tu(),t!==null&&!qn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ar(t,i,d)):(ln&&c&&Oc(i),i.flags|=1,zn(t,i,a,d),i.child)}function Ap(t,i,a,c,d){if($n(a)){var p=!0;Uo(i)}else p=!1;if(js(i,d),i.stateNode===null)Qo(t,i),mp(i,a,c),ou(i,a,c,d),c=!0;else if(t===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Y=T.context,Ee=a.contextType;typeof Ee=="object"&&Ee!==null?Ee=hi(Ee):(Ee=$n(a)?ts:Dn.current,Ee=ks(i,Ee));var ke=a.getDerivedStateFromProps,ze=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function";ze||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Y!==Ee)&&gp(i,T,c,Ee),Nr=!1;var Oe=i.memoizedState;T.state=Oe,jo(i,c,T,d),Y=i.memoizedState,B!==c||Oe!==Y||Yn.current||Nr?(typeof ke=="function"&&(au(i,a,ke,c),Y=i.memoizedState),(B=Nr||pp(i,a,B,c,Oe,Y,Ee))?(ze||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),T.props=c,T.state=Y,T.context=Ee,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Gh(t,i),B=i.memoizedProps,Ee=i.type===i.elementType?B:Ai(i.type,B),T.props=Ee,ze=i.pendingProps,Oe=T.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=hi(Y):(Y=$n(a)?ts:Dn.current,Y=ks(i,Y));var it=a.getDerivedStateFromProps;(ke=typeof it=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==ze||Oe!==Y)&&gp(i,T,c,Y),Nr=!1,Oe=i.memoizedState,T.state=Oe,jo(i,c,T,d);var lt=i.memoizedState;B!==ze||Oe!==lt||Yn.current||Nr?(typeof it=="function"&&(au(i,a,it,c),lt=i.memoizedState),(Ee=Nr||pp(i,a,Ee,c,Oe,lt,Y)||!1)?(ke||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,lt,Y),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,lt,Y)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===t.memoizedProps&&Oe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===t.memoizedProps&&Oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),T.props=c,T.state=lt,T.context=Y,c=Ee):(typeof T.componentDidUpdate!="function"||B===t.memoizedProps&&Oe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===t.memoizedProps&&Oe===t.memoizedState||(i.flags|=1024),c=!1)}return du(t,i,a,c,p,d)}function du(t,i,a,c,d,p){Tp(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Ih(i,a,!1),ar(t,i,p);c=i.stateNode,Ax.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=Hs(i,t.child,null,p),i.child=Hs(i,null,B,p)):zn(t,i,B,p),i.memoizedState=c.state,d&&Ih(i,a,!0),i.child}function Cp(t){var i=t.stateNode;i.pendingContext?Nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Nh(t,i.context,!1),$c(t,i.containerInfo)}function Rp(t,i,a,c,d){return Vs(),Vc(d),i.flags|=256,zn(t,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Np(t,i,a){var c=i.pendingProps,d=cn.current,p=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=t!==null&&t.memoizedState===null?!1:(d&2)!==0),B?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),nn(cn,d&1),t===null)return zc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=dl(T,c,0,null),t=ds(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=hu(a),i.memoizedState=fu,t):pu(i,T));if(d=t.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return Cx(t,i,T,c,B,d,a);if(p){p=c.fallback,T=i.mode,d=t.child,B=d.sibling;var Y={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=Or(d,Y),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?p=Or(B,p):(p=ds(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=t.child.memoizedState,T=T===null?hu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~a,i.memoizedState=fu,c}return p=t.child,t=p.sibling,c=Or(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function pu(t,i){return i=dl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Jo(t,i,a,c){return c!==null&&Vc(c),Hs(i,t.child,null,a),t=pu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Cx(t,i,a,c,d,p,T){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(n(422))),Jo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=dl({mode:"visible",children:c.children},d,0,null),p=ds(p,d,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Hs(i,t.child,null,T),i.child.memoizedState=hu(T),i.memoizedState=fu,p);if((i.mode&1)===0)return Jo(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,p=Error(n(419)),c=lu(p,c,void 0),Jo(t,i,T,c)}if(B=(T&t.childLanes)!==0,qn||B){if(c=Tn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,rr(t,d),Ni(c,t,d,-1))}return Nu(),c=lu(Error(n(421))),Jo(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Vx.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,si=Tr(d.nextSibling),ri=i,ln=!0,Ti=null,t!==null&&(di[fi++]=nr,di[fi++]=ir,di[fi++]=ns,nr=t.id,ir=t.overflow,ns=i),i=pu(i,c.children),i.flags|=4096,i)}function Pp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Wc(t.return,i,a)}function mu(t,i,a,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Ip(t,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(zn(t,i,c.children,a),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,a,i);else if(t.tag===19)Pp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(nn(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Wo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Wo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}mu(i,!0,a,null,p);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ar(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),os|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Or(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Or(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Rx(t,i,a){switch(i.tag){case 3:Cp(i),Vs();break;case 5:Xh(i);break;case 1:$n(i.type)&&Uo(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;nn(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(cn,cn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Np(t,i,a):(nn(cn,cn.current&1),t=ar(t,i,a),t!==null?t.sibling:null);nn(cn,cn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Ip(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),nn(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,bp(t,i,a)}return ar(t,i,a)}var Dp,gu,Lp,Up;Dp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Lp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,ss(zi.current);var p=null;switch(a){case"input":d=kt(t,d),c=kt(t,c),p=[];break;case"select":d=de({},d,{value:void 0}),c=de({},c,{value:void 0}),p=[];break;case"textarea":d=Ze(t,d),c=Ze(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Io)}Le(a,c);var T;a=null;for(Ee in d)if(!c.hasOwnProperty(Ee)&&d.hasOwnProperty(Ee)&&d[Ee]!=null)if(Ee==="style"){var B=d[Ee];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Ee!=="dangerouslySetInnerHTML"&&Ee!=="children"&&Ee!=="suppressContentEditableWarning"&&Ee!=="suppressHydrationWarning"&&Ee!=="autoFocus"&&(o.hasOwnProperty(Ee)?p||(p=[]):(p=p||[]).push(Ee,null));for(Ee in c){var Y=c[Ee];if(B=d!=null?d[Ee]:void 0,c.hasOwnProperty(Ee)&&Y!==B&&(Y!=null||B!=null))if(Ee==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Y&&Y.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Y)Y.hasOwnProperty(T)&&B[T]!==Y[T]&&(a||(a={}),a[T]=Y[T])}else a||(p||(p=[]),p.push(Ee,a)),a=Y;else Ee==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(p=p||[]).push(Ee,Y)):Ee==="children"?typeof Y!="string"&&typeof Y!="number"||(p=p||[]).push(Ee,""+Y):Ee!=="suppressContentEditableWarning"&&Ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(Ee)?(Y!=null&&Ee==="onScroll"&&rn("scroll",t),p||B===Y||(p=[])):(p=p||[]).push(Ee,Y))}a&&(p=p||[]).push("style",a);var Ee=p;(i.updateQueue=Ee)&&(i.flags|=4)}},Up=function(t,i,a,c){a!==c&&(i.flags|=4)};function ja(t,i){if(!ln)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function Nx(t,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(i),null;case 1:return $n(i.type)&&Lo(),Un(i),null;case 3:return c=i.stateNode,Ws(),sn(Yn),sn(Dn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ti!==null&&(Au(Ti),Ti=null))),gu(t,i),Un(i),null;case 5:qc(i);var d=ss(Ba.current);if(a=i.type,t!==null&&i.stateNode!=null)Lp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Un(i),null}if(t=ss(zi.current),Bo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Bi]=i,c[La]=p,t=(i.mode&1)!==0,a){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(d=0;d<Pa.length;d++)rn(Pa[d],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":Wt(c,p),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},rn("invalid",c);break;case"textarea":gt(c,p),rn("invalid",c)}Le(a,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var B=p[T];T==="children"?typeof B=="string"?c.textContent!==B&&(p.suppressHydrationWarning!==!0&&Po(c.textContent,B,t),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(p.suppressHydrationWarning!==!0&&Po(c.textContent,B,t),d=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&rn("scroll",c)}switch(a){case"input":st(c),It(c,p,!0);break;case"textarea":st(c),Rt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Io)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(a,{is:c.is}):(t=T.createElement(a),a==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,a),t[Bi]=i,t[La]=c,Dp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Re(a,c),a){case"dialog":rn("cancel",t),rn("close",t),d=c;break;case"iframe":case"object":case"embed":rn("load",t),d=c;break;case"video":case"audio":for(d=0;d<Pa.length;d++)rn(Pa[d],t);d=c;break;case"source":rn("error",t),d=c;break;case"img":case"image":case"link":rn("error",t),rn("load",t),d=c;break;case"details":rn("toggle",t),d=c;break;case"input":Wt(t,c),d=kt(t,c),rn("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=de({},c,{value:void 0}),rn("invalid",t);break;case"textarea":gt(t,c),d=Ze(t,c),rn("invalid",t);break;default:d=c}Le(a,d),B=d;for(p in B)if(B.hasOwnProperty(p)){var Y=B[p];p==="style"?xe(t,Y):p==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&j(t,Y)):p==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&se(t,Y):typeof Y=="number"&&se(t,""+Y):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?Y!=null&&p==="onScroll"&&rn("scroll",t):Y!=null&&R(t,p,Y,T))}switch(a){case"input":st(t),It(t,c,!1);break;case"textarea":st(t),Rt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+be(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?St(t,!!c.multiple,p,!1):c.defaultValue!=null&&St(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Io)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Un(i),null;case 6:if(t&&i.stateNode!=null)Up(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=ss(Ba.current),ss(zi.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Bi]=i,(p=c.nodeValue!==a)&&(t=ri,t!==null))switch(t.tag){case 3:Po(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bi]=i,i.stateNode=c}return Un(i),null;case 13:if(sn(cn),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ln&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kh(),Vs(),i.flags|=98560,p=!1;else if(p=Bo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Bi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Un(i),p=!1}else Ti!==null&&(Au(Ti),Ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(cn.current&1)!==0?Mn===0&&(Mn=3):Nu())),i.updateQueue!==null&&(i.flags|=4),Un(i),null);case 4:return Ws(),gu(t,i),t===null&&Ia(i.stateNode.containerInfo),Un(i),null;case 10:return jc(i.type._context),Un(i),null;case 17:return $n(i.type)&&Lo(),Un(i),null;case 19:if(sn(cn),p=i.memoizedState,p===null)return Un(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)ja(p,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Wo(t),T!==null){for(i.flags|=128,ja(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return nn(cn,cn.current&1|2),i.child}t=t.sibling}p.tail!==null&&Xt()>qs&&(i.flags|=128,c=!0,ja(p,!1),i.lanes=4194304)}else{if(!c)if(t=Wo(T),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!ln)return Un(i),null}else 2*Xt()-p.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,ja(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xt(),i.sibling=null,a=cn.current,nn(cn,c?a&1|2:a&1),i):(Un(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ai&1073741824)!==0&&(Un(i),i.subtreeFlags&6&&(i.flags|=8192)):Un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Px(t,i){switch(kc(i),i.tag){case 1:return $n(i.type)&&Lo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ws(),sn(Yn),sn(Dn),Zc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return qc(i),null;case 13:if(sn(cn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return sn(cn),null;case 4:return Ws(),null;case 10:return jc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var el=!1,Fn=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Ys(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){hn(t,i,c)}else a.current=null}function xu(t,i,a){try{a()}catch(c){hn(t,i,c)}}var Fp=!1;function Dx(t,i){if(Rc=yo,t=ph(),Sc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,B=-1,Y=-1,Ee=0,ke=0,ze=t,Oe=null;t:for(;;){for(var it;ze!==a||d!==0&&ze.nodeType!==3||(B=T+d),ze!==p||c!==0&&ze.nodeType!==3||(Y=T+c),ze.nodeType===3&&(T+=ze.nodeValue.length),(it=ze.firstChild)!==null;)Oe=ze,ze=it;for(;;){if(ze===t)break t;if(Oe===a&&++Ee===d&&(B=T),Oe===p&&++ke===c&&(Y=T),(it=ze.nextSibling)!==null)break;ze=Oe,Oe=ze.parentNode}ze=it}a=B===-1||Y===-1?null:{start:B,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:t,selectionRange:a},yo=!1,rt=i;rt!==null;)if(i=rt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,rt=t;else for(;rt!==null;){i=rt;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var dt=lt.memoizedProps,pn=lt.memoizedState,fe=i.stateNode,Q=fe.getSnapshotBeforeUpdate(i.elementType===i.type?dt:Ai(i.type,dt),pn);fe.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var ge=i.stateNode.containerInfo;ge.nodeType===1?ge.textContent="":ge.nodeType===9&&ge.documentElement&&ge.removeChild(ge.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ge){hn(i,i.return,Ge)}if(t=i.sibling,t!==null){t.return=i.return,rt=t;break}rt=i.return}return lt=Fp,Fp=!1,lt}function Wa(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&xu(i,a,p)}d=d.next}while(d!==c)}}function tl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Op(t){var i=t.alternate;i!==null&&(t.alternate=null,Op(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Bi],delete i[La],delete i[Lc],delete i[mx],delete i[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kp(t){return t.tag===5||t.tag===3||t.tag===4}function Bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Io));else if(c!==4&&(t=t.child,t!==null))for(_u(t,i,a),t=t.sibling;t!==null;)_u(t,i,a),t=t.sibling}function yu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(yu(t,i,a),t=t.sibling;t!==null;)yu(t,i,a),t=t.sibling}var Nn=null,Ci=!1;function Ir(t,i,a){for(a=a.child;a!==null;)zp(t,i,a),a=a.sibling}function zp(t,i,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 5:Fn||Ys(a,i);case 6:var c=Nn,d=Ci;Nn=null,Ir(t,i,a),Nn=c,Ci=d,Nn!==null&&(Ci?(t=Nn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Nn.removeChild(a.stateNode));break;case 18:Nn!==null&&(Ci?(t=Nn,a=a.stateNode,t.nodeType===8?Dc(t.parentNode,a):t.nodeType===1&&Dc(t,a),Ea(t)):Dc(Nn,a.stateNode));break;case 4:c=Nn,d=Ci,Nn=a.stateNode.containerInfo,Ci=!0,Ir(t,i,a),Nn=c,Ci=d;break;case 0:case 11:case 14:case 15:if(!Fn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&xu(a,i,T),d=d.next}while(d!==c)}Ir(t,i,a);break;case 1:if(!Fn&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){hn(a,i,B)}Ir(t,i,a);break;case 21:Ir(t,i,a);break;case 22:a.mode&1?(Fn=(c=Fn)||a.memoizedState!==null,Ir(t,i,a),Fn=c):Ir(t,i,a);break;default:Ir(t,i,a)}}function Vp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Ix),i.forEach(function(c){var d=Hx.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ri(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=t,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Nn=B.stateNode,Ci=!1;break e;case 3:Nn=B.stateNode.containerInfo,Ci=!0;break e;case 4:Nn=B.stateNode.containerInfo,Ci=!0;break e}B=B.return}if(Nn===null)throw Error(n(160));zp(p,T,d),Nn=null,Ci=!1;var Y=d.alternate;Y!==null&&(Y.return=null),d.return=null}catch(Ee){hn(d,i,Ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,t),i=i.sibling}function Hp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ri(i,t),Hi(t),c&4){try{Wa(3,t,t.return),tl(3,t)}catch(dt){hn(t,t.return,dt)}try{Wa(5,t,t.return)}catch(dt){hn(t,t.return,dt)}}break;case 1:Ri(i,t),Hi(t),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(Ri(i,t),Hi(t),c&512&&a!==null&&Ys(a,a.return),t.flags&32){var d=t.stateNode;try{se(d,"")}catch(dt){hn(t,t.return,dt)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,T=a!==null?a.memoizedProps:p,B=t.type,Y=t.updateQueue;if(t.updateQueue=null,Y!==null)try{B==="input"&&p.type==="radio"&&p.name!=null&&Mt(d,p),Re(B,T);var Ee=Re(B,p);for(T=0;T<Y.length;T+=2){var ke=Y[T],ze=Y[T+1];ke==="style"?xe(d,ze):ke==="dangerouslySetInnerHTML"?j(d,ze):ke==="children"?se(d,ze):R(d,ke,ze,Ee)}switch(B){case"input":Bt(d,p);break;case"textarea":He(d,p);break;case"select":var Oe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var it=p.value;it!=null?St(d,!!p.multiple,it,!1):Oe!==!!p.multiple&&(p.defaultValue!=null?St(d,!!p.multiple,p.defaultValue,!0):St(d,!!p.multiple,p.multiple?[]:"",!1))}d[La]=p}catch(dt){hn(t,t.return,dt)}}break;case 6:if(Ri(i,t),Hi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(dt){hn(t,t.return,dt)}}break;case 3:if(Ri(i,t),Hi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(i.containerInfo)}catch(dt){hn(t,t.return,dt)}break;case 4:Ri(i,t),Hi(t);break;case 13:Ri(i,t),Hi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Eu=Xt())),c&4&&Vp(t);break;case 22:if(ke=a!==null&&a.memoizedState!==null,t.mode&1?(Fn=(Ee=Fn)||ke,Ri(i,t),Fn=Ee):Ri(i,t),Hi(t),c&8192){if(Ee=t.memoizedState!==null,(t.stateNode.isHidden=Ee)&&!ke&&(t.mode&1)!==0)for(rt=t,ke=t.child;ke!==null;){for(ze=rt=ke;rt!==null;){switch(Oe=rt,it=Oe.child,Oe.tag){case 0:case 11:case 14:case 15:Wa(4,Oe,Oe.return);break;case 1:Ys(Oe,Oe.return);var lt=Oe.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Oe,a=Oe.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(dt){hn(c,a,dt)}}break;case 5:Ys(Oe,Oe.return);break;case 22:if(Oe.memoizedState!==null){Wp(ze);continue}}it!==null?(it.return=Oe,rt=it):Wp(ze)}ke=ke.sibling}e:for(ke=null,ze=t;;){if(ze.tag===5){if(ke===null){ke=ze;try{d=ze.stateNode,Ee?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(B=ze.stateNode,Y=ze.memoizedProps.style,T=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=ie("display",T))}catch(dt){hn(t,t.return,dt)}}}else if(ze.tag===6){if(ke===null)try{ze.stateNode.nodeValue=Ee?"":ze.memoizedProps}catch(dt){hn(t,t.return,dt)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===t)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===t)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===t)break e;ke===ze&&(ke=null),ze=ze.return}ke===ze&&(ke=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:Ri(i,t),Hi(t),c&4&&Vp(t);break;case 21:break;default:Ri(i,t),Hi(t)}}function Hi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(kp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(se(d,""),c.flags&=-33);var p=Bp(t);yu(t,p,d);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Bp(t);_u(t,B,T);break;default:throw Error(n(161))}}catch(Y){hn(t,t.return,Y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Lx(t,i,a){rt=t,Gp(t)}function Gp(t,i,a){for(var c=(t.mode&1)!==0;rt!==null;){var d=rt,p=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||el;if(!T){var B=d.alternate,Y=B!==null&&B.memoizedState!==null||Fn;B=el;var Ee=Fn;if(el=T,(Fn=Y)&&!Ee)for(rt=d;rt!==null;)T=rt,Y=T.child,T.tag===22&&T.memoizedState!==null?Xp(d):Y!==null?(Y.return=T,rt=Y):Xp(d);for(;p!==null;)rt=p,Gp(p),p=p.sibling;rt=d,el=B,Fn=Ee}jp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,rt=p):jp(t)}}function jp(t){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Fn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Fn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ai(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Wh(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Ee=i.alternate;if(Ee!==null){var ke=Ee.memoizedState;if(ke!==null){var ze=ke.dehydrated;ze!==null&&Ea(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Fn||i.flags&512&&vu(i)}catch(Oe){hn(i,i.return,Oe)}}if(i===t){rt=null;break}if(a=i.sibling,a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Wp(t){for(;rt!==null;){var i=rt;if(i===t){rt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Xp(t){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(Y){hn(i,a,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(Y){hn(i,d,Y)}}var p=i.return;try{vu(i)}catch(Y){hn(i,p,Y)}break;case 5:var T=i.return;try{vu(i)}catch(Y){hn(i,T,Y)}}}catch(Y){hn(i,i.return,Y)}if(i===t){rt=null;break}var B=i.sibling;if(B!==null){B.return=i.return,rt=B;break}rt=i.return}}var Ux=Math.ceil,nl=N.ReactCurrentDispatcher,Su=N.ReactCurrentOwner,mi=N.ReactCurrentBatchConfig,$t=0,Tn=null,xn=null,Pn=0,ai=0,$s=Ar(0),Mn=0,Xa=null,os=0,il=0,Mu=0,Ya=null,Kn=null,Eu=0,qs=1/0,or=null,rl=!1,wu=null,Dr=null,sl=!1,Lr=null,al=0,$a=0,bu=null,ol=-1,ll=0;function Vn(){return($t&6)!==0?Xt():ol!==-1?ol:ol=Xt()}function Ur(t){return(t.mode&1)===0?1:($t&2)!==0&&Pn!==0?Pn&-Pn:vx.transition!==null?(ll===0&&(ll=ye()),ll):(t=ut,t!==0||(t=window.event,t=t===void 0?16:$f(t.type)),t)}function Ni(t,i,a,c){if(50<$a)throw $a=0,bu=null,Error(n(185));qe(t,a,c),(($t&2)===0||t!==Tn)&&(t===Tn&&(($t&2)===0&&(il|=a),Mn===4&&Fr(t,Pn)),Zn(t,c),a===1&&$t===0&&(i.mode&1)===0&&(qs=Xt()+500,Fo&&Rr()))}function Zn(t,i){var a=t.callbackNode;ue(t,i);var c=H(t,t===Tn?Pn:0);if(c===0)a!==null&&Jr(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&Jr(a),i===1)t.tag===0?xx($p.bind(null,t)):Dh($p.bind(null,t)),hx(function(){($t&6)===0&&Rr()}),a=null;else{switch(Dt(c)){case 1:a=Qi;break;case 4:a=C;break;case 16:a=J;break;case 536870912:a=me;break;default:a=J}a=nm(a,Yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Yp(t,i){if(ol=-1,ll=0,($t&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ks()&&t.callbackNode!==a)return null;var c=H(t,t===Tn?Pn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=cl(t,c);else{i=c;var d=$t;$t|=2;var p=Kp();(Tn!==t||Pn!==i)&&(or=null,qs=Xt()+500,cs(t,i));do try{kx();break}catch(B){qp(t,B)}while(!0);Gc(),nl.current=p,$t=d,xn!==null?i=0:(Tn=null,Pn=0,i=Mn)}if(i!==0){if(i===2&&(d=Ue(t),d!==0&&(c=d,i=Tu(t,d))),i===1)throw a=Xa,cs(t,0),Fr(t,c),Zn(t,Xt()),a;if(i===6)Fr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!Fx(d)&&(i=cl(t,c),i===2&&(p=Ue(t),p!==0&&(c=p,i=Tu(t,p))),i===1))throw a=Xa,cs(t,0),Fr(t,c),Zn(t,Xt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:us(t,Kn,or);break;case 3:if(Fr(t,c),(c&130023424)===c&&(i=Eu+500-Xt(),10<i)){if(H(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ic(us.bind(null,t,Kn,or),i);break}us(t,Kn,or);break;case 4:if(Fr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-We(c);p=1<<T,T=i[T],T>d&&(d=T),c&=~p}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ux(c/1960))-c,10<c){t.timeoutHandle=Ic(us.bind(null,t,Kn,or),c);break}us(t,Kn,or);break;case 5:us(t,Kn,or);break;default:throw Error(n(329))}}}return Zn(t,Xt()),t.callbackNode===a?Yp.bind(null,t):null}function Tu(t,i){var a=Ya;return t.current.memoizedState.isDehydrated&&(cs(t,i).flags|=256),t=cl(t,i),t!==2&&(i=Kn,Kn=a,i!==null&&Au(i)),t}function Au(t){Kn===null?Kn=t:Kn.push.apply(Kn,t)}function Fx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!bi(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(t,i){for(i&=~Mu,i&=~il,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-We(i),c=1<<a;t[a]=-1,i&=~c}}function $p(t){if(($t&6)!==0)throw Error(n(327));Ks();var i=H(t,0);if((i&1)===0)return Zn(t,Xt()),null;var a=cl(t,i);if(t.tag!==0&&a===2){var c=Ue(t);c!==0&&(i=c,a=Tu(t,c))}if(a===1)throw a=Xa,cs(t,0),Fr(t,i),Zn(t,Xt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,us(t,Kn,or),Zn(t,Xt()),null}function Cu(t,i){var a=$t;$t|=1;try{return t(i)}finally{$t=a,$t===0&&(qs=Xt()+500,Fo&&Rr())}}function ls(t){Lr!==null&&Lr.tag===0&&($t&6)===0&&Ks();var i=$t;$t|=1;var a=mi.transition,c=ut;try{if(mi.transition=null,ut=1,t)return t()}finally{ut=c,mi.transition=a,$t=i,($t&6)===0&&Rr()}}function Ru(){ai=$s.current,sn($s)}function cs(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,fx(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Lo();break;case 3:Ws(),sn(Yn),sn(Dn),Zc();break;case 5:qc(c);break;case 4:Ws();break;case 13:sn(cn);break;case 19:sn(cn);break;case 10:jc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(Tn=t,xn=t=Or(t.current,null),Pn=ai=i,Mn=0,Xa=null,Mu=il=os=0,Kn=Ya=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=d,c.next=T}a.pending=c}rs=null}return t}function qp(t,i){do{var a=xn;try{if(Gc(),Xo.current=Ko,Yo){for(var c=un.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yo=!1}if(as=0,bn=Sn=un=null,za=!1,Va=0,Su.current=null,a===null||a.return===null){Mn=1,Xa=i,xn=null;break}e:{var p=t,T=a.return,B=a,Y=i;if(i=Pn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Ee=Y,ke=B,ze=ke.tag;if((ke.mode&1)===0&&(ze===0||ze===11||ze===15)){var Oe=ke.alternate;Oe?(ke.updateQueue=Oe.updateQueue,ke.memoizedState=Oe.memoizedState,ke.lanes=Oe.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var it=yp(T);if(it!==null){it.flags&=-257,Sp(it,T,B,p,i),it.mode&1&&_p(p,Ee,i),i=it,Y=Ee;var lt=i.updateQueue;if(lt===null){var dt=new Set;dt.add(Y),i.updateQueue=dt}else lt.add(Y);break e}else{if((i&1)===0){_p(p,Ee,i),Nu();break e}Y=Error(n(426))}}else if(ln&&B.mode&1){var pn=yp(T);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Sp(pn,T,B,p,i),Vc(Xs(Y,B));break e}}p=Y=Xs(Y,B),Mn!==4&&(Mn=2),Ya===null?Ya=[p]:Ya.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var fe=xp(p,Y,i);jh(p,fe);break e;case 1:B=Y;var Q=p.type,ge=p.stateNode;if((p.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||ge!==null&&typeof ge.componentDidCatch=="function"&&(Dr===null||!Dr.has(ge)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ge=vp(p,B,i);jh(p,Ge);break e}}p=p.return}while(p!==null)}Jp(a)}catch(ht){i=ht,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function Kp(){var t=nl.current;return nl.current=Ko,t===null?Ko:t}function Nu(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Tn===null||(os&268435455)===0&&(il&268435455)===0||Fr(Tn,Pn)}function cl(t,i){var a=$t;$t|=2;var c=Kp();(Tn!==t||Pn!==i)&&(or=null,cs(t,i));do try{Ox();break}catch(d){qp(t,d)}while(!0);if(Gc(),$t=a,nl.current=c,xn!==null)throw Error(n(261));return Tn=null,Pn=0,Mn}function Ox(){for(;xn!==null;)Zp(xn)}function kx(){for(;xn!==null&&!Oi();)Zp(xn)}function Zp(t){var i=tm(t.alternate,t,ai);t.memoizedProps=t.pendingProps,i===null?Jp(t):xn=i,Su.current=null}function Jp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Nx(a,i,ai),a!==null){xn=a;return}}else{if(a=Px(a,i),a!==null){a.flags&=32767,xn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mn=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=t}while(i!==null);Mn===0&&(Mn=5)}function us(t,i,a){var c=ut,d=mi.transition;try{mi.transition=null,ut=1,Bx(t,i,a,c)}finally{mi.transition=d,ut=c}return null}function Bx(t,i,a,c){do Ks();while(Lr!==null);if(($t&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Gt(t,p),t===Tn&&(xn=Tn=null,Pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,nm(J,function(){return Ks(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=mi.transition,mi.transition=null;var T=ut;ut=1;var B=$t;$t|=4,Su.current=null,Dx(t,a),Hp(a,t),sx(Nc),yo=!!Rc,Nc=Rc=null,t.current=a,Lx(a),Jt(),$t=B,ut=T,mi.transition=p}else t.current=a;if(sl&&(sl=!1,Lr=t,al=d),p=t.pendingLanes,p===0&&(Dr=null),nt(a.stateNode),Zn(t,Xt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(rl)throw rl=!1,t=wu,wu=null,t;return(al&1)!==0&&t.tag!==0&&Ks(),p=t.pendingLanes,(p&1)!==0?t===bu?$a++:($a=0,bu=t):$a=0,Rr(),null}function Ks(){if(Lr!==null){var t=Dt(al),i=mi.transition,a=ut;try{if(mi.transition=null,ut=16>t?16:t,Lr===null)var c=!1;else{if(t=Lr,Lr=null,al=0,($t&6)!==0)throw Error(n(331));var d=$t;for($t|=4,rt=t.current;rt!==null;){var p=rt,T=p.child;if((rt.flags&16)!==0){var B=p.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var Ee=B[Y];for(rt=Ee;rt!==null;){var ke=rt;switch(ke.tag){case 0:case 11:case 15:Wa(8,ke,p)}var ze=ke.child;if(ze!==null)ze.return=ke,rt=ze;else for(;rt!==null;){ke=rt;var Oe=ke.sibling,it=ke.return;if(Op(ke),ke===Ee){rt=null;break}if(Oe!==null){Oe.return=it,rt=Oe;break}rt=it}}}var lt=p.alternate;if(lt!==null){var dt=lt.child;if(dt!==null){lt.child=null;do{var pn=dt.sibling;dt.sibling=null,dt=pn}while(dt!==null)}}rt=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,rt=T;else e:for(;rt!==null;){if(p=rt,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Wa(9,p,p.return)}var fe=p.sibling;if(fe!==null){fe.return=p.return,rt=fe;break e}rt=p.return}}var Q=t.current;for(rt=Q;rt!==null;){T=rt;var ge=T.child;if((T.subtreeFlags&2064)!==0&&ge!==null)ge.return=T,rt=ge;else e:for(T=Q;rt!==null;){if(B=rt,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:tl(9,B)}}catch(ht){hn(B,B.return,ht)}if(B===T){rt=null;break e}var Ge=B.sibling;if(Ge!==null){Ge.return=B.return,rt=Ge;break e}rt=B.return}}if($t=d,Rr(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(pe,t)}catch{}c=!0}return c}finally{ut=a,mi.transition=i}}return!1}function Qp(t,i,a){i=Xs(a,i),i=xp(t,i,1),t=Pr(t,i,1),i=Vn(),t!==null&&(qe(t,1,i),Zn(t,i))}function hn(t,i,a){if(t.tag===3)Qp(t,t,a);else for(;i!==null;){if(i.tag===3){Qp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){t=Xs(a,t),t=vp(i,t,1),i=Pr(i,t,1),t=Vn(),i!==null&&(qe(i,1,t),Zn(i,t));break}}i=i.return}}function zx(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Vn(),t.pingedLanes|=t.suspendedLanes&a,Tn===t&&(Pn&a)===a&&(Mn===4||Mn===3&&(Pn&130023424)===Pn&&500>Xt()-Eu?cs(t,0):Mu|=a),Zn(t,i)}function em(t,i){i===0&&((t.mode&1)===0?i=1:(i=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var a=Vn();t=rr(t,i),t!==null&&(qe(t,i,a),Zn(t,a))}function Vx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),em(t,a)}function Hx(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),em(t,a)}var tm;tm=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Yn.current)qn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return qn=!1,Rx(t,i,a);qn=(t.flags&131072)!==0}else qn=!1,ln&&(i.flags&1048576)!==0&&Lh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(t,i),t=i.pendingProps;var d=ks(i,Dn.current);js(i,a),d=eu(null,i,c,t,d,a);var p=tu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$n(c)?(p=!0,Uo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Zo,i.stateNode=d,d._reactInternals=i,ou(i,c,t,a),i=du(null,i,c,!0,p,a)):(i.tag=0,ln&&p&&Oc(i),zn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=jx(c),t=Ai(c,t),d){case 0:i=uu(null,i,c,t,a);break e;case 1:i=Ap(null,i,c,t,a);break e;case 11:i=Mp(null,i,c,t,a);break e;case 14:i=Ep(null,i,c,Ai(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),uu(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Ap(t,i,c,d,a);case 3:e:{if(Cp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Gh(t,i),jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Xs(Error(n(423)),i),i=Rp(t,i,c,a,d);break e}else if(c!==d){d=Xs(Error(n(424)),i),i=Rp(t,i,c,a,d);break e}else for(si=Tr(i.stateNode.containerInfo.firstChild),ri=i,ln=!0,Ti=null,a=Vh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),c===d){i=ar(t,i,a);break e}zn(t,i,c,a)}i=i.child}return i;case 5:return Xh(i),t===null&&zc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,T=d.children,Pc(c,d)?T=null:p!==null&&Pc(c,p)&&(i.flags|=32),Tp(t,i),zn(t,i,T,a),i.child;case 6:return t===null&&zc(i),null;case 13:return Np(t,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Hs(i,null,c,a):zn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Mp(t,i,c,d,a);case 7:return zn(t,i,i.pendingProps,a),i.child;case 8:return zn(t,i,i.pendingProps.children,a),i.child;case 12:return zn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,nn(Vo,c._currentValue),c._currentValue=T,p!==null)if(bi(p.value,T)){if(p.children===d.children&&!Yn.current){i=ar(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var B=p.dependencies;if(B!==null){T=p.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===c){if(p.tag===1){Y=sr(-1,a&-a),Y.tag=2;var Ee=p.updateQueue;if(Ee!==null){Ee=Ee.shared;var ke=Ee.pending;ke===null?Y.next=Y:(Y.next=ke.next,ke.next=Y),Ee.pending=Y}}p.lanes|=a,Y=p.alternate,Y!==null&&(Y.lanes|=a),Wc(p.return,a,i),B.lanes|=a;break}Y=Y.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Wc(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}zn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,js(i,a),d=hi(d),c=c(d),i.flags|=1,zn(t,i,c,a),i.child;case 14:return c=i.type,d=Ai(c,i.pendingProps),d=Ai(c.type,d),Ep(t,i,c,d,a);case 15:return wp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Qo(t,i),i.tag=1,$n(c)?(t=!0,Uo(i)):t=!1,js(i,a),mp(i,c,d),ou(i,c,d,a),du(null,i,c,!0,t,a);case 19:return Ip(t,i,a);case 22:return bp(t,i,a)}throw Error(n(156,i.tag))};function nm(t,i){return Cs(t,i)}function Gx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,i,a,c){return new Gx(t,i,a,c)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return Pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===X)return 14}return 2}function Or(t,i){var a=t.alternate;return a===null?(a=gi(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ul(t,i,a,c,d,p){var T=2;if(c=t,typeof t=="function")Pu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case F:return ds(a.children,d,p,i);case w:T=8,d|=8;break;case L:return t=gi(12,a,i,d|2),t.elementType=L,t.lanes=p,t;case ee:return t=gi(13,a,i,d),t.elementType=ee,t.lanes=p,t;case Se:return t=gi(19,a,i,d),t.elementType=Se,t.lanes=p,t;case K:return dl(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:T=10;break e;case V:T=9;break e;case q:T=11;break e;case X:T=14;break e;case oe:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=gi(T,a,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function ds(t,i,a,c){return t=gi(7,t,c,i),t.lanes=a,t}function dl(t,i,a,c){return t=gi(22,t,c,i),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function Iu(t,i,a){return t=gi(6,t,null,i),t.lanes=a,t}function Du(t,i,a){return i=gi(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Wx(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lu(t,i,a,c,d,p,T,B,Y){return t=new Wx(t,i,a,B,Y),i===1?(i=1,p===!0&&(i|=8)):i=0,p=gi(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),t}function Xx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function im(t){if(!t)return Cr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if($n(a))return Ph(t,a,i)}return i}function rm(t,i,a,c,d,p,T,B,Y){return t=Lu(a,c,!0,t,d,p,T,B,Y),t.context=im(null),a=t.current,c=Vn(),d=Ur(a),p=sr(c,d),p.callback=i??null,Pr(a,p,d),t.current.lanes=d,qe(t,d,c),Zn(t,c),t}function fl(t,i,a,c){var d=i.current,p=Vn(),T=Ur(d);return a=im(a),i.context===null?i.context=a:i.pendingContext=a,i=sr(p,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Pr(d,i,T),t!==null&&(Ni(t,d,T,p),Go(t,d,T)),T}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Uu(t,i){sm(t,i),(t=t.alternate)&&sm(t,i)}function Yx(){return null}var am=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fu(t){this._internalRoot=t}pl.prototype.render=Fu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));fl(t,i,null,null)},pl.prototype.unmount=Fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ls(function(){fl(null,t,null,null)}),i[er]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Et();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ki.length&&i!==0&&i<ki[a].priority;a++);ki.splice(a,0,t),a===0&&Xf(t)}};function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function om(){}function $x(t,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var Ee=hl(T);p.call(Ee)}}var T=rm(i,c,t,0,null,!1,!1,"",om);return t._reactRootContainer=T,t[er]=T.current,Ia(t.nodeType===8?t.parentNode:t),ls(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var Ee=hl(Y);B.call(Ee)}}var Y=Lu(t,0,!1,null,null,!1,!1,"",om);return t._reactRootContainer=Y,t[er]=Y.current,Ia(t.nodeType===8?t.parentNode:t),ls(function(){fl(i,Y,a,c)}),Y}function gl(t,i,a,c,d){var p=a._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var B=d;d=function(){var Y=hl(T);B.call(Y)}}fl(i,T,t,d)}else T=$x(a,i,t,d,c);return hl(T)}vt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=b(i.pendingLanes);a!==0&&(xt(i,a|1),Zn(i,Xt()),($t&6)===0&&(qs=Xt()+500,Rr()))}break;case 13:ls(function(){var c=rr(t,1);if(c!==null){var d=Vn();Ni(c,t,1,d)}}),Uu(t,1)}},Lt=function(t){if(t.tag===13){var i=rr(t,134217728);if(i!==null){var a=Vn();Ni(i,t,134217728,a)}Uu(t,134217728)}},on=function(t){if(t.tag===13){var i=Ur(t),a=rr(t,i);if(a!==null){var c=Vn();Ni(a,t,i,c)}Uu(t,i)}},Et=function(){return ut},yn=function(t,i){var a=ut;try{return ut=t,i()}finally{ut=a}},Ke=function(t,i,a){switch(i){case"input":if(Bt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=Do(c);if(!d)throw Error(n(90));mt(c),Bt(c,d)}}}break;case"textarea":He(t,a);break;case"select":i=a.value,i!=null&&St(t,!!a.multiple,i,!1)}},Ie=Cu,Ce=ls;var qx={usingClientEntryPoint:!1,Events:[Ua,Fs,Do,ne,Pe,Cu]},qa={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kr(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{pe=xl.inject(Kx),je=xl}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx,Jn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(n(200));return Xx(t,i,null,a)},Jn.createRoot=function(t,i){if(!Ou(t))throw Error(n(299));var a=!1,c="",d=am;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lu(t,1,!1,null,null,a,!1,c,d),t[er]=i.current,Ia(t.nodeType===8?t.parentNode:t),new Fu(i)},Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Kr(i),t=t===null?null:t.stateNode,t},Jn.flushSync=function(t){return ls(t)},Jn.hydrate=function(t,i,a){if(!ml(i))throw Error(n(200));return gl(null,t,i,!0,a)},Jn.hydrateRoot=function(t,i,a){if(!Ou(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",T=am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=rm(i,null,t,1,a??null,d,!1,p,T),t[er]=i.current,Ia(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pl(i)},Jn.render=function(t,i,a){if(!ml(i))throw Error(n(200));return gl(null,t,i,!1,a)},Jn.unmountComponentAtNode=function(t){if(!ml(t))throw Error(n(40));return t._reactRootContainer?(ls(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1},Jn.unstable_batchedUpdates=Cu,Jn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!ml(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return gl(t,i,a,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var mm;function sv(){if(mm)return zu.exports;mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=rv(),zu.exports}var gm;function av(){if(gm)return vl;gm=1;var s=sv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var ov=av();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="184",lv=0,xm=1,cv=2,jl=1,uv=2,ro=3,qr=0,ei=1,hr=2,mr=0,ha=1,vm=2,_m=3,ym=4,dv=5,vs=100,fv=101,hv=102,pv=103,mv=104,gv=200,xv=201,vv=202,_v=203,Cd=204,Rd=205,yv=206,Sv=207,Mv=208,Ev=209,wv=210,bv=211,Tv=212,Av=213,Cv=214,Nd=0,Pd=1,Id=2,ma=3,Dd=4,Ld=5,Ud=6,Fd=7,C0=0,Rv=1,Nv=2,$i=0,R0=1,N0=2,P0=3,I0=4,D0=5,L0=6,U0=7,F0=300,Es=301,ga=302,Gu=303,ju=304,sc=306,Od=1e3,pr=1001,kd=1002,In=1003,Pv=1004,_l=1005,Bn=1006,Wu=1007,ys=1008,Mi=1009,O0=1010,k0=1011,po=1012,bf=1013,Zi=1014,Xi=1015,xr=1016,Tf=1017,Af=1018,mo=1020,B0=35902,z0=35899,V0=1021,H0=1022,Ui=1023,vr=1026,Ss=1027,G0=1028,Cf=1029,ws=1030,Rf=1031,Nf=1033,Wl=33776,Xl=33777,Yl=33778,$l=33779,Bd=35840,zd=35841,Vd=35842,Hd=35843,Gd=36196,jd=37492,Wd=37496,Xd=37488,Yd=37489,Kl=37490,$d=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,Zl=36285,mf=36286,Iv=3200,Sm=0,Dv=1,Yr="",yi="srgb",Jl="srgb-linear",Ql="linear",Qt="srgb",Zs=7680,Mm=519,Lv=512,Uv=513,Fv=514,Pf=515,Ov=516,kv=517,If=518,Bv=519,Em=35044,wm="300 es",Yi=2e3,ec=2001;function zv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vv(){const s=tc("canvas");return s.style.display="block",s}const bm={};function Tm(...s){const e="THREE."+s.shift();console.log(e,...s)}function j0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function wt(...s){s=j0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function qt(...s){s=j0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function gf(...s){const e=s.join(" ");e in bm||(bm[e]=!0,wt(...s))}function Hv(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const Gv={[Nd]:Pd,[Id]:Ud,[Dd]:Fd,[ma]:Ld,[Pd]:Nd,[Ud]:Id,[Fd]:Dd,[Ld]:ma};class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=Math.PI/180,xf=180/Math.PI;function go(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function jt(s,e,n){return Math.max(e,Math.min(n,s))}function jv(s,e){return(s%e+e)%e}function Yu(s,e,n){return(1-n)*s+n*e}function Za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zf=class zf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zf.prototype.isVector2=!0;let bt=zf;class _a{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let h=r[o+0],m=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],A=l[u+2],I=l[u+3];if(S!==I||h!==x||m!==M||v!==A){let y=h*x+m*M+v*A+S*I;y<0&&(x=-x,M=-M,A=-A,I=-I,y=-y);let _=1-f;if(y<.9995){const D=Math.acos(y),R=Math.sin(D);_=Math.sin(_*D)/R,f=Math.sin(f*D)/R,h=h*_+x*f,m=m*_+M*f,v=v*_+A*f,S=S*_+I*f}else{h=h*_+x*f,m=m*_+M*f,v=v*_+A*f,S=S*_+I*f;const D=1/Math.sqrt(h*h+m*m+v*v+S*S);h*=D,m*=D,v*=D,S*=D}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],h=r[o+1],m=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],A=l[u+3];return e[n]=f*A+v*S+h*M-m*x,e[n+1]=h*A+v*x+m*S-f*M,e[n+2]=m*A+v*M+f*x-h*S,e[n+3]=v*A-f*S-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),v=f(o/2),S=f(l/2),x=h(r/2),M=h(o/2),A=h(l/2);switch(u){case"XYZ":this._x=x*v*S+m*M*A,this._y=m*M*S-x*v*A,this._z=m*v*A+x*M*S,this._w=m*v*S-x*M*A;break;case"YXZ":this._x=x*v*S+m*M*A,this._y=m*M*S-x*v*A,this._z=m*v*A-x*M*S,this._w=m*v*S+x*M*A;break;case"ZXY":this._x=x*v*S-m*M*A,this._y=m*M*S+x*v*A,this._z=m*v*A+x*M*S,this._w=m*v*S-x*M*A;break;case"ZYX":this._x=x*v*S-m*M*A,this._y=m*M*S+x*v*A,this._z=m*v*A-x*M*S,this._w=m*v*S+x*M*A;break;case"YZX":this._x=x*v*S+m*M*A,this._y=m*M*S+x*v*A,this._z=m*v*A-x*M*S,this._w=m*v*S-x*M*A;break;case"XZY":this._x=x*v*S-m*M*A,this._y=m*M*S-x*v*A,this._z=m*v*A+x*M*S,this._w=m*v*S+x*M*A;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],v=n[6],S=n[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-l*h,this._y=o*v+u*h+l*f-r*m,this._z=l*v+u*m+r*h-o*f,this._w=u*v-r*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-n;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);h=Math.sin(h*m)/v,n=Math.sin(n*m)/v,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vf=class Vf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),v=2*(f*n-l*o),S=2*(l*r-u*n);return this.x=n+h*m+u*S-f*v,this.y=r+h*v+f*m-l*S,this.z=o+h*S+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this.z=jt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this.z=jt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(jt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vf.prototype.isVector3=!0;let te=Vf;const $u=new te,Am=new _a,Hf=class Hf{constructor(e,n,r,o,l,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m)}set(e,n,r,o,l,u,f,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],v=r[4],S=r[7],x=r[2],M=r[5],A=r[8],I=o[0],y=o[3],_=o[6],D=o[1],R=o[4],N=o[7],z=o[2],P=o[5],F=o[8];return l[0]=u*I+f*D+h*z,l[3]=u*y+f*R+h*P,l[6]=u*_+f*N+h*F,l[1]=m*I+v*D+S*z,l[4]=m*y+v*R+S*P,l[7]=m*_+v*N+S*F,l[2]=x*I+M*D+A*z,l[5]=x*y+M*R+A*P,l[8]=x*_+M*N+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*l*v+r*f*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],S=v*u-f*m,x=f*h-v*l,M=m*l-u*h,A=n*S+r*x+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=S*I,e[1]=(o*m-v*r)*I,e[2]=(f*r-o*u)*I,e[3]=x*I,e[4]=(v*n-o*h)*I,e[5]=(o*l-f*n)*I,e[6]=M*I,e[7]=(r*h-m*n)*I,e[8]=(u*n-r*l)*I,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hf.prototype.isMatrix3=!0;let Ft=Hf;const qu=new Ft,Cm=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rm=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wv(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Qt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(o.r=pa(o.r),o.g=pa(o.g),o.b=pa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return gf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return gf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:Qt,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),s}const Yt=Wv();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class Xv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Js===void 0&&(Js=tc("canvas")),Js.width=e.width,Js.height=e.height;const o=Js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Js}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(gr(n[r]/255)*255):n[r]=gr(n[r]);return{data:n,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yv=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ku(o[u].image)):l.push(Ku(o[u]))}else l=Ku(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let $v=0;const Zu=new te;class Gn extends Ts{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=pr,o=pr,l=Bn,u=ys,f=Ui,h=Mi,m=Gn.DEFAULT_ANISOTROPY,v=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=go(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){wt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){wt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=F0;Gn.DEFAULT_ANISOTROPY=1;const Gf=class Gf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],v=h[4],S=h[8],x=h[1],M=h[5],A=h[9],I=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-I)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+I)<.1&&Math.abs(A+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,N=(M+1)/2,z=(_+1)/2,P=(v+x)/4,F=(S+I)/4,w=(A+y)/4;return R>N&&R>z?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=P/r,l=F/r):N>z?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=P/o,l=w/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=F/l,o=w/l),this.set(r,o,l,n),this}let D=Math.sqrt((y-A)*(y-A)+(S-I)*(S-I)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(y-A)/D,this.y=(S-I)/D,this.z=(x-v)/D,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=jt(this.x,e.x,n.x),this.y=jt(this.y,e.y,n.y),this.z=jt(this.z,e.z,n.z),this.w=jt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=jt(this.x,e,n),this.y=jt(this.y,e,n),this.z=jt(this.z,e,n),this.w=jt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(jt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gf.prototype.isVector4=!0;let mn=Gf;class qv extends Ts{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new mn(0,0,e,n),this.scissorTest=!1,this.viewport=new mn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Gn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Df(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends qv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class W0 extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kv extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=class rc{constructor(e,n,r,o,l,u,f,h,m,v,S,x,M,A,I,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m,v,S,x,M,A,I,y)}set(e,n,r,o,l,u,f,h,m,v,S,x,M,A,I,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=m,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=A,_[11]=I,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),u=1/Qs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,A=f*v,I=f*S;n[0]=h*v,n[4]=-h*S,n[8]=m,n[1]=M+A*m,n[5]=x-I*m,n[9]=-f*h,n[2]=I-x*m,n[6]=A+M*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,A=m*v,I=m*S;n[0]=x+I*f,n[4]=A*f-M,n[8]=u*m,n[1]=u*S,n[5]=u*v,n[9]=-f,n[2]=M*f-A,n[6]=I+x*f,n[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,A=m*v,I=m*S;n[0]=x-I*f,n[4]=-u*S,n[8]=A+M*f,n[1]=M+A*f,n[5]=u*v,n[9]=I-x*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,A=f*v,I=f*S;n[0]=h*v,n[4]=A*m-M,n[8]=x*m+I,n[1]=h*S,n[5]=I*m+x,n[9]=M*m-A,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*m,A=f*h,I=f*m;n[0]=h*v,n[4]=I-x*S,n[8]=A*S+M,n[1]=S,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=M*S+A,n[10]=x-I*S}else if(e.order==="XZY"){const x=u*h,M=u*m,A=f*h,I=f*m;n[0]=h*v,n[4]=-S,n[8]=m*v,n[1]=x*S+I,n[5]=u*v,n[9]=M*S-A,n[2]=A*S-M,n[6]=f*v,n[10]=I*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Jv)}lookAt(e,n,r){const o=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Br.crossVectors(r,oi),Br.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Br.crossVectors(r,oi)),Br.normalize(),yl.crossVectors(oi,Br),o[0]=Br.x,o[4]=yl.x,o[8]=oi.x,o[1]=Br.y,o[5]=yl.y,o[9]=oi.y,o[2]=Br.z,o[6]=yl.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],v=r[1],S=r[5],x=r[9],M=r[13],A=r[2],I=r[6],y=r[10],_=r[14],D=r[3],R=r[7],N=r[11],z=r[15],P=o[0],F=o[4],w=o[8],L=o[12],W=o[1],V=o[5],q=o[9],ee=o[13],Se=o[2],X=o[6],oe=o[10],K=o[14],Z=o[3],Me=o[7],de=o[11],k=o[15];return l[0]=u*P+f*W+h*Se+m*Z,l[4]=u*F+f*V+h*X+m*Me,l[8]=u*w+f*q+h*oe+m*de,l[12]=u*L+f*ee+h*K+m*k,l[1]=v*P+S*W+x*Se+M*Z,l[5]=v*F+S*V+x*X+M*Me,l[9]=v*w+S*q+x*oe+M*de,l[13]=v*L+S*ee+x*K+M*k,l[2]=A*P+I*W+y*Se+_*Z,l[6]=A*F+I*V+y*X+_*Me,l[10]=A*w+I*q+y*oe+_*de,l[14]=A*L+I*ee+y*K+_*k,l[3]=D*P+R*W+N*Se+z*Z,l[7]=D*F+R*V+N*X+z*Me,l[11]=D*w+R*q+N*oe+z*de,l[15]=D*L+R*ee+N*K+z*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],v=e[2],S=e[6],x=e[10],M=e[14],A=e[3],I=e[7],y=e[11],_=e[15],D=h*M-m*x,R=f*M-m*S,N=f*x-h*S,z=u*M-m*v,P=u*x-h*v,F=u*S-f*v;return n*(I*D-y*R+_*N)-r*(A*D-y*z+_*P)+o*(A*R-I*z+_*F)-l*(A*N-I*P+y*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],S=e[9],x=e[10],M=e[11],A=e[12],I=e[13],y=e[14],_=e[15],D=n*f-r*u,R=n*h-o*u,N=n*m-l*u,z=r*h-o*f,P=r*m-l*f,F=o*m-l*h,w=v*I-S*A,L=v*y-x*A,W=v*_-M*A,V=S*y-x*I,q=S*_-M*I,ee=x*_-M*y,Se=D*ee-R*q+N*V+z*W-P*L+F*w;if(Se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Se;return e[0]=(f*ee-h*q+m*V)*X,e[1]=(o*q-r*ee-l*V)*X,e[2]=(I*F-y*P+_*z)*X,e[3]=(x*P-S*F-M*z)*X,e[4]=(h*W-u*ee-m*L)*X,e[5]=(n*ee-o*W+l*L)*X,e[6]=(y*N-A*F-_*R)*X,e[7]=(v*F-x*N+M*R)*X,e[8]=(u*q-f*W+m*w)*X,e[9]=(r*W-n*q-l*w)*X,e[10]=(A*P-I*N+_*D)*X,e[11]=(S*N-v*P-M*D)*X,e[12]=(f*L-u*V-h*w)*X,e[13]=(n*V-r*L+o*w)*X,e[14]=(I*R-A*z-y*D)*X,e[15]=(v*z-S*R+x*D)*X,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,v=l*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,v*f+r,v*h-o*u,0,m*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,v=u+u,S=f+f,x=l*m,M=l*v,A=l*S,I=u*v,y=u*S,_=f*S,D=h*m,R=h*v,N=h*S,z=r.x,P=r.y,F=r.z;return o[0]=(1-(I+_))*z,o[1]=(M+N)*z,o[2]=(A-R)*z,o[3]=0,o[4]=(M-N)*P,o[5]=(1-(x+_))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(A+R)*F,o[9]=(y-D)*F,o[10]=(1-(x+I))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Qs.set(o[0],o[1],o[2]).length();const f=Qs.set(o[4],o[5],o[6]).length(),h=Qs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Pi.copy(this);const m=1/u,v=1/f,S=1/h;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=S,Pi.elements[9]*=S,Pi.elements[10]*=S,n.setFromRotationMatrix(Pi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,o,l,u,f=Yi,h=!1){const m=this.elements,v=2*l/(n-e),S=2*l/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let A,I;if(h)A=l/(u-l),I=u*l/(u-l);else if(f===Yi)A=-(u+l)/(u-l),I=-2*u*l/(u-l);else if(f===ec)A=-u/(u-l),I=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=I,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Yi,h=!1){const m=this.elements,v=2/(n-e),S=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,I;if(h)A=1/(u-l),I=u/(u-l);else if(f===Yi)A=-2/(u-l),I=-(u+l)/(u-l);else if(f===ec)A=-1/(u-l),I=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=I,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};rc.prototype.isMatrix4=!0;let _n=rc;const Qs=new te,Pi=new _n,Zv=new te(0,0,0),Jv=new te(1,1,1),Br=new te,yl=new te,oi=new te,Nm=new _n,Pm=new _a;class bs{constructor(e=0,n=0,r=0,o=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(jt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-jt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";let X0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qv=0;const Im=new te,ea=new _a,lr=new _n,Sl=new te,Ja=new te,e_=new te,t_=new _a,Dm=new te(1,0,0),Lm=new te(0,1,0),Um=new te(0,0,1),Fm={type:"added"},n_={type:"removed"},ta={type:"childadded",child:null},Ju={type:"childremoved",child:null};class ci extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new te,n=new bs,r=new _a,o=new te(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new Ft}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ea.setFromAxisAngle(e,n),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,n){return ea.setFromAxisAngle(e,n),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Um,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Sl.copy(e):Sl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Ja,Sl,this.up):lr.lookAt(Sl,Ja,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),ea.setFromRotationMatrix(lr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fm),ta.child=e,this.dispatchEvent(ta),ta.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fm),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const h=[];for(const m in f){const v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ci.DEFAULT_UP=new te(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i_={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const I of e.hand.values()){const y=n.getJointPose(I,r),_=this._getHandJoint(m,I);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,A=.005;m.inputState.pinching&&x>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ed(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class en{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Yt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Yt.workingColorSpace){if(e=jv(e,1),n=jt(n,0,1),r=jt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(e,n=yi){function r(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yi){const r=Y0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Yt.workingToColorSpace(kn.copy(this),e),Math.round(jt(kn.r*255,0,255))*65536+Math.round(jt(kn.g*255,0,255))*256+Math.round(jt(kn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Yt.workingColorSpace){Yt.workingToColorSpace(kn.copy(this),n);const r=kn.r,o=kn.g,l=kn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,m;const v=(f+u)/2;if(f===u)h=0,m=0;else{const S=u-f;switch(m=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=Yt.workingColorSpace){return Yt.workingToColorSpace(kn.copy(this),n),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=yi){Yt.workingToColorSpace(kn.copy(this),e);const n=kn.r,r=kn.g,o=kn.b;return e!==yi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(Ml);const r=Yu(zr.h,Ml.h,n),o=Yu(zr.s,Ml.s,n),l=Yu(zr.l,Ml.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new en;en.NAMES=Y0;class r_ extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bs,this.environmentIntensity=1,this.environmentRotation=new bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ii=new te,cr=new te,td=new te,ur=new te,na=new te,ia=new te,Om=new te,nd=new te,id=new te,rd=new te,sd=new mn,ad=new mn,od=new mn;class Li{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ii.subVectors(e,n),o.cross(Ii);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Ii.subVectors(o,n),cr.subVectors(r,n),td.subVectors(e,n);const u=Ii.dot(Ii),f=Ii.dot(cr),h=Ii.dot(td),m=cr.dot(cr),v=cr.dot(td),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(m*h-f*v)*x,A=(u*v-f*h)*x;return l.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,n,r,o,l,u,f,h){return this.getBarycoord(e,n,r,o,ur)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ur.x),h.addScaledVector(u,ur.y),h.addScaledVector(f,ur.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,n,r,o){return Ii.subVectors(r,n),cr.subVectors(e,n),Ii.cross(cr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ii.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Li.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;na.subVectors(o,r),ia.subVectors(l,r),nd.subVectors(e,r);const h=na.dot(nd),m=ia.dot(nd);if(h<=0&&m<=0)return n.copy(r);id.subVectors(e,o);const v=na.dot(id),S=ia.dot(id);if(v>=0&&S<=v)return n.copy(o);const x=h*S-v*m;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),n.copy(r).addScaledVector(na,u);rd.subVectors(e,l);const M=na.dot(rd),A=ia.dot(rd);if(A>=0&&M<=A)return n.copy(l);const I=M*m-h*A;if(I<=0&&m>=0&&A<=0)return f=m/(m-A),n.copy(r).addScaledVector(ia,f);const y=v*A-M*S;if(y<=0&&S-v>=0&&M-A>=0)return Om.subVectors(l,o),f=(S-v)/(S-v+(M-A)),n.copy(o).addScaledVector(Om,f);const _=1/(y+I+x);return u=I*_,f=x*_,n.copy(r).addScaledVector(na,u).addScaledVector(ia,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(l,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),wl.subVectors(this.max,Qa),ra.subVectors(e.a,Qa),sa.subVectors(e.b,Qa),aa.subVectors(e.c,Qa),Vr.subVectors(sa,ra),Hr.subVectors(aa,sa),fs.subVectors(ra,aa);let n=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-fs.z,fs.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,fs.z,0,-fs.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-fs.y,fs.x,0];return!ld(n,ra,sa,aa,wl)||(n=[1,0,0,0,1,0,0,0,1],!ld(n,ra,sa,aa,wl))?!1:(bl.crossVectors(Vr,Hr),n=[bl.x,bl.y,bl.z],ld(n,ra,sa,aa,wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new te,new te,new te,new te,new te,new te,new te,new te],Di=new te,El=new xo,ra=new te,sa=new te,aa=new te,Vr=new te,Hr=new te,fs=new te,Qa=new te,wl=new te,bl=new te,hs=new te;function ld(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){hs.fromArray(s,l);const f=o.x*Math.abs(hs.x)+o.y*Math.abs(hs.y)+o.z*Math.abs(hs.z),h=e.dot(hs),m=n.dot(hs),v=r.dot(hs);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}const vn=new te,Tl=new bt;let s_=0;class Ki extends Ts{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Em,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Za(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Za(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Za(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Za(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Qn(n,this.array),r=Qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Qn(n,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Qn(n,this.array),r=Qn(r,this.array),o=Qn(o,this.array),l=Qn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $0 extends Ki{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class q0 extends Ki{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class gn extends Ki{constructor(e,n,r){super(new Float32Array(e),n,r)}}const a_=new xo,eo=new te,cd=new te;class Lf{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):a_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(cd)),this.expandByPoint(eo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o_=0;const xi=new _n,ud=new ci,oa=new te,li=new xo,to=new xo,Cn=new te;class ui extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?q0:$0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,r){return xi.makeTranslation(e,n,r),this.applyMatrix4(xi),this}scale(e,n,r){return xi.makeScale(e,n,r),this.applyMatrix4(xi),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];li.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];to.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(li.min,to.min),li.expandByPoint(Cn),Cn.addVectors(li.max,to.max),li.expandByPoint(Cn)):(li.expandByPoint(to.min),li.expandByPoint(to.max))}li.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Cn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)Cn.fromBufferAttribute(f,m),h&&(oa.fromBufferAttribute(e,m),Cn.add(oa)),o=Math.max(o,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new te,h[w]=new te;const m=new te,v=new te,S=new te,x=new bt,M=new bt,A=new bt,I=new te,y=new te;function _(w,L,W){m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),S.fromBufferAttribute(r,W),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,L),A.fromBufferAttribute(l,W),v.sub(m),S.sub(m),M.sub(x),A.sub(x);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(I.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(V),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(V),f[w].add(I),f[L].add(I),f[W].add(I),h[w].add(y),h[L].add(y),h[W].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,L=D.length;w<L;++w){const W=D[w],V=W.start,q=W.count;for(let ee=V,Se=V+q;ee<Se;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new te,N=new te,z=new te,P=new te;function F(w){z.fromBufferAttribute(o,w),P.copy(z);const L=f[w];R.copy(L),R.sub(z.multiplyScalar(z.dot(L))).normalize(),N.crossVectors(P,L);const V=N.dot(h[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,V)}for(let w=0,L=D.length;w<L;++w){const W=D[w],V=W.start,q=W.count;for(let ee=V,Se=V+q;ee<Se;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new te,l=new te,u=new te,f=new te,h=new te,m=new te,v=new te,S=new te;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),I=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),f.add(v),h.add(v),m.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(I,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Cn.fromBufferAttribute(e,n),Cn.normalize(),e.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(f,h){const m=f.array,v=f.itemSize,S=f.normalized,x=new m.constructor(h.length*v);let M=0,A=0;for(let I=0,y=h.length;I<y;I++){f.isInterleavedBufferAttribute?M=h[I]*f.data.stride+f.offset:M=h[I]*v;for(let _=0;_<v;_++)x[A++]=m[M++]}return new Ki(x,v,S)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let v=0,S=m.length;v<S;v++){const x=m[v],M=e(x,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let S=0,x=m.length;S<x;S++){const M=m[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],S=l[m];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let l_=0;class ac extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=go(),this.name="",this.type="Material",this.blending=ha,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new en(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){wt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){wt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(r.blending=this.blending),this.side!==qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Rd&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new te,dd=new te,Al=new te,Gr=new te,fd=new te,Cl=new te,hd=new te;class c_{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,n),fr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){dd.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),Gr.copy(this.origin).sub(dd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Al),f=Gr.dot(this.direction),h=-Gr.dot(Al),m=Gr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,A;if(v>0)if(S=u*h-f,x=u*f-h,A=l*v,S>=0)if(x>=-A)if(x<=A){const I=1/v;S*=I,x*=I,M=S*(S+u*x+2*f)+x*(u*S+x+2*h)+m}else x=l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+m;else x=-l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+m;else x<=-A?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+m):x<=A?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+m);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),M=-S*S+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(dd).addScaledVector(Al,x),M}intersectSphere(e,n){fr.subVectors(e.center,this.origin);const r=fr.dot(this.direction),o=fr.dot(fr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,h;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,n,r,o,l){fd.subVectors(n,e),Cl.subVectors(r,e),hd.crossVectors(fd,Cl);let u=this.direction.dot(hd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Gr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Gr,Cl));if(h<0)return null;const m=f*this.direction.dot(fd.cross(Gr));if(m<0||h+m>u)return null;const v=-f*Gr.dot(hd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ms extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new en(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const km=new _n,ps=new c_,Rl=new Lf,Bm=new te,Nl=new te,Pl=new te,Il=new te,pd=new te,Dl=new te,zm=new te,Ll=new te;class ti extends ci{constructor(e=new ui,n=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=f[h],S=l[h];v!==0&&(pd.fromBufferAttribute(S,e),u?Dl.addScaledVector(pd,v):Dl.addScaledVector(pd.sub(n),v))}n.add(Dl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(Rl.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Rl,Bm)===null||ps.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(km.copy(l).invert(),ps.copy(e.ray).applyMatrix4(km),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,z=R;N<z;N+=3){const P=f.getX(N),F=f.getX(N+1),w=f.getX(N+2);o=Ul(this,_,e,r,m,v,S,P,F,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(f.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const D=f.getX(y),R=f.getX(y+1),N=f.getX(y+2);o=Ul(this,u,e,r,m,v,S,D,R,N),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,I=x.length;A<I;A++){const y=x[A],_=u[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,z=R;N<z;N+=3){const P=N,F=N+1,w=N+2;o=Ul(this,_,e,r,m,v,S,P,F,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),I=Math.min(h.count,M.start+M.count);for(let y=A,_=I;y<_;y+=3){const D=y,R=y+1,N=y+2;o=Ul(this,u,e,r,m,v,S,D,R,N),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function u_(s,e,n,r,o,l,u,f){let h;if(e.side===ei?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===qr,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ll);return m<n.near||m>n.far?null:{distance:m,point:Ll.clone(),object:s}}function Ul(s,e,n,r,o,l,u,f,h,m){s.getVertexPosition(f,Nl),s.getVertexPosition(h,Pl),s.getVertexPosition(m,Il);const v=u_(s,e,n,r,Nl,Pl,Il,zm);if(v){const S=new te;Li.getBarycoord(zm,Nl,Pl,Il,S),o&&(v.uv=Li.getInterpolatedAttribute(o,f,h,m,S,new bt)),l&&(v.uv1=Li.getInterpolatedAttribute(l,f,h,m,S,new bt)),u&&(v.normal=Li.getInterpolatedAttribute(u,f,h,m,S,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new te,materialIndex:0};Li.getNormal(Nl,Pl,Il,x.normal),v.face=x,v.barycoord=S}return v}class d_ extends Gn{constructor(e=null,n=1,r=1,o,l,u,f,h,m=In,v=In,S,x){super(null,u,f,h,m,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new te,f_=new te,h_=new Ft;class xs{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=md.subVectors(r,n).cross(f_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(md),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||h_.getNormalMatrix(e),o=this.coplanarPoint(md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Lf,p_=new bt(.5,.5),Fl=new te;class K0{constructor(e=new xs,n=new xs,r=new xs,o=new xs,l=new xs,u=new xs){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Yi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],v=l[4],S=l[5],x=l[6],M=l[7],A=l[8],I=l[9],y=l[10],_=l[11],D=l[12],R=l[13],N=l[14],z=l[15];if(o[0].setComponents(m-u,M-v,_-A,z-D).normalize(),o[1].setComponents(m+u,M+v,_+A,z+D).normalize(),o[2].setComponents(m+f,M+S,_+I,z+R).normalize(),o[3].setComponents(m-f,M-S,_-I,z-R).normalize(),r)o[4].setComponents(h,x,y,N).normalize(),o[5].setComponents(m-h,M-x,_-y,z-N).normalize();else if(o[4].setComponents(m-h,M-x,_-y,z-N).normalize(),n===Yi)o[5].setComponents(m+h,M+x,_+y,z+N).normalize();else if(n===ec)o[5].setComponents(h,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const n=p_.distanceTo(e.center);return ms.radius=.7071067811865476+n,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z0 extends Gn{constructor(e=[],n=Es,r,o,l,u,f,h,m,v){super(e,n,r,o,l,u,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xa extends Gn{constructor(e,n,r=Zi,o,l,u,f=In,h=In,m,v=vr,S=1){if(v!==vr&&v!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:S};super(x,o,l,u,f,h,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class m_ extends xa{constructor(e,n=Zi,r=Es,o,l,u=In,f=In,h,m=vr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,n,r,o,l,u,f,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends ui{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],v=[],S=[];let x=0,M=0;A("z","y","x",-1,-1,r,n,e,u,l,0),A("z","y","x",1,-1,r,n,-e,u,l,1),A("x","z","y",1,1,e,r,n,o,u,2),A("x","z","y",1,-1,e,r,-n,o,u,3),A("x","y","z",1,-1,e,n,r,o,l,4),A("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(S,2));function A(I,y,_,D,R,N,z,P,F,w,L){const W=N/F,V=z/w,q=N/2,ee=z/2,Se=P/2,X=F+1,oe=w+1;let K=0,Z=0;const Me=new te;for(let de=0;de<oe;de++){const k=de*V-ee;for(let le=0;le<X;le++){const Xe=le*W-q;Me[I]=Xe*D,Me[y]=k*R,Me[_]=Se,m.push(Me.x,Me.y,Me.z),Me[I]=0,Me[y]=0,Me[_]=P>0?1:-1,v.push(Me.x,Me.y,Me.z),S.push(le/F),S.push(1-de/w),K+=1}}for(let de=0;de<w;de++)for(let k=0;k<F;k++){const le=x+k+X*de,Xe=x+k+X*(de+1),Ye=x+(k+1)+X*(de+1),De=x+(k+1)+X*de;h.push(le,Xe,De),h.push(Xe,Ye,De),Z+=6}f.addGroup(M,Z,L),M+=Z,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uf extends ui{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],x=[],M=[];let A=0;const I=[],y=r/2;let _=0;D(),u===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(M,2));function D(){const N=new te,z=new te;let P=0;const F=(n-e)/r;for(let w=0;w<=l;w++){const L=[],W=w/l,V=W*(n-e)+e;for(let q=0;q<=o;q++){const ee=q/o,Se=ee*h+f,X=Math.sin(Se),oe=Math.cos(Se);z.x=V*X,z.y=-W*r+y,z.z=V*oe,S.push(z.x,z.y,z.z),N.set(X,F,oe).normalize(),x.push(N.x,N.y,N.z),M.push(ee,1-W),L.push(A++)}I.push(L)}for(let w=0;w<o;w++)for(let L=0;L<l;L++){const W=I[L][w],V=I[L+1][w],q=I[L+1][w+1],ee=I[L][w+1];(e>0||L!==0)&&(v.push(W,V,ee),P+=3),(n>0||L!==l-1)&&(v.push(V,q,ee),P+=3)}m.addGroup(_,P,0),_+=P}function R(N){const z=A,P=new bt,F=new te;let w=0;const L=N===!0?e:n,W=N===!0?1:-1;for(let q=1;q<=o;q++)S.push(0,y*W,0),x.push(0,W,0),M.push(.5,.5),A++;const V=A;for(let q=0;q<=o;q++){const Se=q/o*h+f,X=Math.cos(Se),oe=Math.sin(Se);F.x=L*oe,F.y=y*W,F.z=L*X,S.push(F.x,F.y,F.z),x.push(0,W,0),P.x=X*.5+.5,P.y=oe*.5*W+.5,M.push(P.x,P.y),A++}for(let q=0;q<o;q++){const ee=z+q,Se=V+q;N===!0?v.push(Se,Se+1,ee):v.push(Se+1,Se,ee),w+=3}m.addGroup(_,w,N===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ff extends Uf{constructor(e=1,n=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Ff(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){wt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),n.push(l),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const l=r.length;let u;n?u=n:u=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),m=r[o]-u,m<0)f=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,n){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=n||(u.isVector2?new bt:new te);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new te,o=[],l=[],u=[],f=new te,h=new _n;for(let M=0;M<=e;M++){const A=M/e;o[M]=this.getTangentAt(A,new te)}l[0]=new te,u[0]=new te;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),S=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),S<=m&&(m=S,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const A=Math.acos(jt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,A))}u[M].crossVectors(o[M],l[M])}if(n===!0){let M=Math.acos(jt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let A=1;A<=e;A++)l[A].applyMatrix4(h.makeRotationAxis(o[A],M*A)),u[A].crossVectors(o[A],l[A])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Q0 extends _r{constructor(e=0,n=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,n=new bt){const r=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),x=h-this.aX,M=m-this.aY;h=x*v-M*S+this.aX,m=x*S+M*v+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends Q0{constructor(e,n,r,o,l,u){super(e,n,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,n=0,r=0;function o(l,u,f,h){s=l,e=f,n=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,m){o(u,f,m*(f-l),m*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,m,v,S){let x=(u-l)/m-(f-l)/(m+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+S)+(h-f)/S;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+n*u+r*f}}}const Vm=new te,Hm=new te,gd=new Of,xd=new Of,vd=new Of;class eg extends _r{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new te){const r=n,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,v;this.closed||f>0?m=o[(f-1)%l]:(Hm.subVectors(o[0],o[1]).add(o[0]),m=Hm);const S=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Vm.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Vm),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(m.distanceToSquared(S),M),I=Math.pow(S.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(v),M);I<1e-4&&(I=1),A<1e-4&&(A=I),y<1e-4&&(y=I),gd.initNonuniformCatmullRom(m.x,S.x,x.x,v.x,A,I,y),xd.initNonuniformCatmullRom(m.y,S.y,x.y,v.y,A,I,y),vd.initNonuniformCatmullRom(m.z,S.z,x.z,v.z,A,I,y)}else this.curveType==="catmullrom"&&(gd.initCatmullRom(m.x,S.x,x.x,v.x,this.tension),xd.initCatmullRom(m.y,S.y,x.y,v.y,this.tension),vd.initCatmullRom(m.z,S.z,x.z,v.z,this.tension));return r.set(gd.calc(h),xd.calc(h),vd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gm(s,e,n,r,o){const l=(r-e)*.5,u=(o-n)*.5,f=s*s,h=s*f;return(2*n-2*r+l+u)*h+(-3*n+3*r-2*l-u)*f+l*s+n}function x_(s,e){const n=1-s;return n*n*e}function v_(s,e){return 2*(1-s)*s*e}function __(s,e){return s*s*e}function uo(s,e,n,r){return x_(s,e)+v_(s,n)+__(s,r)}function y_(s,e){const n=1-s;return n*n*n*e}function S_(s,e){const n=1-s;return 3*n*n*s*e}function M_(s,e){return 3*(1-s)*s*s*e}function E_(s,e){return s*s*s*e}function fo(s,e,n,r,o){return y_(s,e)+S_(s,n)+M_(s,r)+E_(s,o)}class w_ extends _r{constructor(e=new bt,n=new bt,r=new bt,o=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new bt){const r=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends _r{constructor(e=new te,n=new te,r=new te,o=new te){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new te){const r=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(fo(e,o.x,l.x,u.x,f.x),fo(e,o.y,l.y,u.y,f.y),fo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T_ extends _r{constructor(e=new bt,n=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new bt){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new bt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends _r{constructor(e=new te,n=new te){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new te){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new te){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends _r{constructor(e=new bt,n=new bt,r=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new bt){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tg extends _r{constructor(e=new te,n=new te,r=new te){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new te){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(uo(e,o.x,l.x,u.x),uo(e,o.y,l.y,u.y),uo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends _r{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new bt){const r=n,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(Gm(f,h.x,m.x,v.x,S.x),Gm(f,h.y,m.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new bt().fromArray(o))}return this}}var N_=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:eg,CubicBezierCurve:w_,CubicBezierCurve3:b_,EllipseCurve:Q0,LineCurve:T_,LineCurve3:A_,QuadraticBezierCurve:C_,QuadraticBezierCurve3:tg,SplineCurve:R_});class oc extends ui{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,v=h+1,S=e/f,x=n/h,M=[],A=[],I=[],y=[];for(let _=0;_<v;_++){const D=_*x-u;for(let R=0;R<m;R++){const N=R*S-l;A.push(N,-D,0),I.push(0,0,1),y.push(R/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const R=D+m*_,N=D+m*(_+1),z=D+1+m*(_+1),P=D+1+m*_;M.push(R,N,P),M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new gn(A,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class kf extends ui{constructor(e=.5,n=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],m=[],v=[];let S=e;const x=(n-e)/o,M=new te,A=new bt;for(let I=0;I<=o;I++){for(let y=0;y<=r;y++){const _=l+y/r*u;M.x=S*Math.cos(_),M.y=S*Math.sin(_),h.push(M.x,M.y,M.z),m.push(0,0,1),A.x=(M.x/n+1)/2,A.y=(M.y/n+1)/2,v.push(A.x,A.y)}S+=x}for(let I=0;I<o;I++){const y=I*(r+1);for(let _=0;_<r;_++){const D=_+y,R=D,N=D+r+1,z=D+r+2,P=D+1;f.push(R,N,P),f.push(N,z,P)}}this.setIndex(f),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(m,3)),this.setAttribute("uv",new gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nc extends ui{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const v=[],S=new te,x=new te,M=[],A=[],I=[],y=[];for(let _=0;_<=r;_++){const D=[],R=_/r;let N=0;_===0&&u===0?N=.5/n:_===r&&h===Math.PI&&(N=-.5/n);for(let z=0;z<=n;z++){const P=z/n;S.x=-e*Math.cos(o+P*l)*Math.sin(u+R*f),S.y=e*Math.cos(u+R*f),S.z=e*Math.sin(o+P*l)*Math.sin(u+R*f),A.push(S.x,S.y,S.z),x.copy(S).normalize(),I.push(x.x,x.y,x.z),y.push(P+N,1-R),D.push(m++)}v.push(D)}for(let _=0;_<r;_++)for(let D=0;D<n;D++){const R=v[_][D+1],N=v[_][D],z=v[_+1][D],P=v[_+1][D+1];(_!==0||u>0)&&M.push(R,N,P),(_!==r-1||h<Math.PI)&&M.push(N,z,P)}this.setIndex(M),this.setAttribute("position",new gn(A,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bf extends ui{constructor(e=new tg(new te(-1,-1,0),new te(-1,1,0),new te(1,1,0)),n=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(n,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new te,h=new te,m=new bt;let v=new te;const S=[],x=[],M=[],A=[];I(),this.setIndex(A),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(M,2));function I(){for(let R=0;R<n;R++)y(R);y(l===!1?n:0),D(),_()}function y(R){v=e.getPointAt(R/n,v);const N=u.normals[R],z=u.binormals[R];for(let P=0;P<=o;P++){const F=P/o*Math.PI*2,w=Math.sin(F),L=-Math.cos(F);h.x=L*N.x+w*z.x,h.y=L*N.y+w*z.y,h.z=L*N.z+w*z.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,S.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=n;R++)for(let N=1;N<=o;N++){const z=(o+1)*(R-1)+(N-1),P=(o+1)*R+(N-1),F=(o+1)*R+N,w=(o+1)*(R-1)+N;A.push(z,P,w),A.push(P,F,w)}}function D(){for(let R=0;R<=n;R++)for(let N=0;N<=o;N++)m.x=R/n,m.y=N/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bf(new N_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function va(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(jm(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(jm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Hn(s){const e={};for(let n=0;n<s.length;n++){const r=va(s[n]);for(const o in r)e[o]=r[o]}return e}function jm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function P_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const I_={clone:va,merge:Hn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=P_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class U_ extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F_ extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O_ extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ol=new te,kl=new _a,Gi=new te;let ig=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ol,kl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const jr=new te,Wm=new bt,Xm=new bt;class Si extends ig{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,n){return this.getViewBounds(e,Wm,Xm),n.subVectors(Xm,Wm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rg extends ig{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const la=-90,ca=1;class k_ extends ci{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(la,ca,e,n);o.layers=this.layers,this.add(o);const l=new Si(la,ca,e,n);l.layers=this.layers,this.add(l);const u=new Si(la,ca,e,n);u.layers=this.layers,this.add(u);const f=new Si(la,ca,e,n);f.layers=this.layers,this.add(f);const h=new Si(la,ca,e,n);h.layers=this.layers,this.add(h);const m=new Si(la,ca,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=I,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(S,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class B_ extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jf=class jf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};jf.prototype.isMatrix2=!0;let Ym=jf;function $m(s,e,n,r){const o=z_(r);switch(n){case V0:return s*e;case G0:return s*e/o.components*o.byteLength;case Cf:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case Rf:return s*e*2/o.components*o.byteLength;case H0:return s*e*3/o.components*o.byteLength;case Ui:return s*e*4/o.components*o.byteLength;case Nf:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(s,16)*Math.max(e,8)/4;case Bd:case Vd:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case jd:case Xd:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:case Kl:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function z_(s){switch(s){case Mi:case O0:return{byteLength:1,components:1};case po:case k0:case xr:return{byteLength:2,components:1};case Tf:case Af:return{byteLength:2,components:4};case Zi:case bf:case Xi:return{byteLength:4,components:1};case B0:case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sg(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function V_(s){const e=new WeakMap;function n(f,h){const m=f.array,v=f.usage,S=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,m){const v=h.array,S=h.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,v);else{S.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<S.length;M++){const A=S[x],I=S[M];I.start<=A.start+A.count+1?A.count=Math.max(A.count,I.start+I.count-A.start):(++x,S[x]=I)}S.length=x+1;for(let M=0,A=S.length;M<A;M++){const I=S[M];s.bufferSubData(m,I.start*v.BYTES_PER_ELEMENT,v,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:u}}var H_=`#ifdef USE_ALPHAHASH
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
}`,zt={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:j_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:$_,aomap_pars_fragment:q_,batching_pars_vertex:K_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:sy,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:dy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:hy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:xy,colorspace_fragment:vy,colorspace_pars_fragment:_y,envmap_fragment:yy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Ly,envmap_vertex:wy,fog_vertex:by,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Ny,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Iy,lights_pars_begin:Dy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Oy,lights_phong_pars_fragment:ky,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:Vy,lights_fragment_maps:Hy,lights_fragment_end:Gy,lightprobes_pars_fragment:jy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:$y,map_fragment:qy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:eS,morphinstance_vertex:tS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:xS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:yS,dithering_pars_fragment:SS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:bS,shadowmap_vertex:TS,shadowmask_pars_fragment:AS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:NS,skinnormal_vertex:PS,specularmap_fragment:IS,specularmap_pars_fragment:DS,tonemapping_fragment:LS,tonemapping_pars_fragment:US,transmission_fragment:FS,transmission_pars_fragment:OS,uv_pars_fragment:kS,uv_pars_vertex:BS,uv_vertex:zS,worldpos_vertex:VS,background_vert:HS,background_frag:GS,backgroundCube_vert:jS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:YS,depth_vert:$S,depth_frag:qS,distance_vert:KS,distance_frag:ZS,equirect_vert:JS,equirect_frag:QS,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:d1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:x1,shadow_vert:v1,shadow_frag:_1,sprite_vert:y1,sprite_frag:S1},Qe={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Hn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new en(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Hn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Hn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Hn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new en(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Hn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Hn([Qe.points,Qe.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Hn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Hn([Qe.common,Qe.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Hn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Hn([Qe.sprite,Qe.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Hn([Qe.common,Qe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Hn([Qe.lights,Qe.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Bl={r:0,b:0,g:0},M1=new _n,ag=new Ft;ag.set(-1,0,0,0,1,0,0,0,1);function E1(s,e,n,r,o,l){const u=new en(0);let f=o===!0?0:1,h,m,v=null,S=0,x=null;function M(D){let R=D.isScene===!0?D.background:null;if(R&&R.isTexture){const N=D.backgroundBlurriness>0;R=e.get(R,N)}return R}function A(D){let R=!1;const N=M(D);N===null?y(u,f):N&&N.isColor&&(y(N,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function I(D,R){const N=M(R);N&&(N.isCubeTexture||N.mapping===sc)?(m===void 0&&(m=new ti(new vo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:va(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(R.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ag),m.material.toneMapped=Yt.getTransfer(N.colorSpace)!==Qt,(v!==N||S!==N.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new ti(new oc(2,2),new Ji({name:"BackgroundMaterial",uniforms:va(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(N.colorSpace)!==Qt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,S=N.version,x=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,R){D.getRGB(Bl,ng(s)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,R,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,R=1){u.set(D),f=R,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:A,addToRenderList:I,dispose:_}}function w1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(V,q,ee,Se,X){let oe=!1;const K=S(V,Se,ee,q);l!==K&&(l=K,m(l.object)),oe=M(V,Se,ee,X),oe&&A(V,Se,ee,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,N(V,q,ee,Se),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function S(V,q,ee,Se){const X=Se.wireframe===!0;let oe=r[q.id];oe===void 0&&(oe={},r[q.id]=oe);const K=V.isInstancedMesh===!0?V.id:0;let Z=oe[K];Z===void 0&&(Z={},oe[K]=Z);let Me=Z[ee.id];Me===void 0&&(Me={},Z[ee.id]=Me);let de=Me[X];return de===void 0&&(de=x(h()),Me[X]=de),de}function x(V){const q=[],ee=[],Se=[];for(let X=0;X<n;X++)q[X]=0,ee[X]=0,Se[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:Se,object:V,attributes:{},index:null}}function M(V,q,ee,Se){const X=l.attributes,oe=q.attributes;let K=0;const Z=ee.getAttributes();for(const Me in Z)if(Z[Me].location>=0){const k=X[Me];let le=oe[Me];if(le===void 0&&(Me==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Me==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),k===void 0||k.attribute!==le||le&&k.data!==le.data)return!0;K++}return l.attributesNum!==K||l.index!==Se}function A(V,q,ee,Se){const X={},oe=q.attributes;let K=0;const Z=ee.getAttributes();for(const Me in Z)if(Z[Me].location>=0){let k=oe[Me];k===void 0&&(Me==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),Me==="instanceColor"&&V.instanceColor&&(k=V.instanceColor));const le={};le.attribute=k,k&&k.data&&(le.data=k.data),X[Me]=le,K++}l.attributes=X,l.attributesNum=K,l.index=Se}function I(){const V=l.newAttributes;for(let q=0,ee=V.length;q<ee;q++)V[q]=0}function y(V){_(V,0)}function _(V,q){const ee=l.newAttributes,Se=l.enabledAttributes,X=l.attributeDivisors;ee[V]=1,Se[V]===0&&(s.enableVertexAttribArray(V),Se[V]=1),X[V]!==q&&(s.vertexAttribDivisor(V,q),X[V]=q)}function D(){const V=l.newAttributes,q=l.enabledAttributes;for(let ee=0,Se=q.length;ee<Se;ee++)q[ee]!==V[ee]&&(s.disableVertexAttribArray(ee),q[ee]=0)}function R(V,q,ee,Se,X,oe,K){K===!0?s.vertexAttribIPointer(V,q,ee,X,oe):s.vertexAttribPointer(V,q,ee,Se,X,oe)}function N(V,q,ee,Se){I();const X=Se.attributes,oe=ee.getAttributes(),K=q.defaultAttributeValues;for(const Z in oe){const Me=oe[Z];if(Me.location>=0){let de=X[Z];if(de===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),de!==void 0){const k=de.normalized,le=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const Ye=Xe.buffer,De=Xe.type,he=Xe.bytesPerElement,Te=De===s.INT||De===s.UNSIGNED_INT||de.gpuType===bf;if(de.isInterleavedBufferAttribute){const be=de.data,Be=be.stride,et=de.offset;if(be.isInstancedInterleavedBuffer){for(let st=0;st<Me.locationSize;st++)_(Me.location+st,be.meshPerAttribute);V.isInstancedMesh!==!0&&Se._maxInstanceCount===void 0&&(Se._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let st=0;st<Me.locationSize;st++)y(Me.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let st=0;st<Me.locationSize;st++)R(Me.location+st,le/Me.locationSize,De,k,Be*he,(et+le/Me.locationSize*st)*he,Te)}else{if(de.isInstancedBufferAttribute){for(let be=0;be<Me.locationSize;be++)_(Me.location+be,de.meshPerAttribute);V.isInstancedMesh!==!0&&Se._maxInstanceCount===void 0&&(Se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<Me.locationSize;be++)y(Me.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let be=0;be<Me.locationSize;be++)R(Me.location+be,le/Me.locationSize,De,k,le*he,le/Me.locationSize*be*he,Te)}}else if(K!==void 0){const k=K[Z];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(Me.location,k);break;case 3:s.vertexAttrib3fv(Me.location,k);break;case 4:s.vertexAttrib4fv(Me.location,k);break;default:s.vertexAttrib1fv(Me.location,k)}}}}D()}function z(){L();for(const V in r){const q=r[V];for(const ee in q){const Se=q[ee];for(const X in Se){const oe=Se[X];for(const K in oe)v(oe[K].object),delete oe[K];delete Se[X]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const q=r[V.id];for(const ee in q){const Se=q[ee];for(const X in Se){const oe=Se[X];for(const K in oe)v(oe[K].object),delete oe[K];delete Se[X]}}delete r[V.id]}function F(V){for(const q in r){const ee=r[q];for(const Se in ee){const X=ee[Se];if(X[V.id]===void 0)continue;const oe=X[V.id];for(const K in oe)v(oe[K].object),delete oe[K];delete X[V.id]}}}function w(V){for(const q in r){const ee=r[q],Se=V.isInstancedMesh===!0?V.id:0,X=ee[Se];if(X!==void 0){for(const oe in X){const K=X[oe];for(const Z in K)v(K[Z].object),delete K[Z];delete X[oe]}delete ee[Se],Object.keys(ee).length===0&&delete r[q]}}}function L(){W(),u=!0,l!==o&&(l=o,m(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:I,enableAttribute:y,disableUnusedAttributes:D}}function b1(s,e,n){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),n.update(m,r,1)}function u(h,m,v){v!==0&&(s.drawArraysInstanced(r,h,m,v),n.update(m,r,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,v);let x=0;for(let M=0;M<v;M++)x+=m[M];n.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function T1(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!w)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(wt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:I,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:N,maxSamples:z,samples:P}}function A1(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new xs,f=new Ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){n=v(S,x,0)},this.setState=function(S,x,M){const A=S.clippingPlanes,I=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):m();else{const D=l?0:r,R=D*4;let N=_.clippingState||null;h.value=N,N=v(A,x,R,M);for(let z=0;z!==R;++z)N[z]=n[z];_.clippingState=N,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,A){const I=S!==null?S.length:0;let y=null;if(I!==0){if(y=h.value,A!==!0||y===null){const _=M+I*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,N=M;R!==I;++R,N+=4)u.copy(S[R]).applyMatrix4(D,f),u.normal.toArray(y,N),y[N+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,y}}const $r=4,qm=[.125,.215,.35,.446,.526,.582],_s=20,C1=256,no=new rg,Km=new en;let _d=null,yd=0,Sd=0,Md=!1;const R1=new te;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=R1}=l;_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,Sd),this._renderer.xr.enabled=Md,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:xr,format:Ui,colorSpace:Jl,depthBuffer:!1},o=Jm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N1(l)),this._blurMaterial=I1(l,e,n),this._ggxMaterial=P1(l,e,n)}return o}_compileMaterial(e){const n=new ti(new ui,e);this._renderer.compile(n,no)}_sceneToCubeUV(e,n,r,o,l){const h=new Si(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Km),S.toneMapping=$i,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new vo,new Ms({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,y=I.material;let _=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,_=!0):(y.color.copy(Km),_=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(h.up.set(0,m[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):N===1?(h.up.set(0,0,m[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,m[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const z=this._cubeSize;ua(o,N*z,R>2?z:0,z,z),S.setRenderTarget(o),_&&S.render(I,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=D}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Es||e.mapping===ga;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;ua(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,no)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-v*v),x=0+m*1.25,M=S*x,{_lodMax:A}=this,I=this._sizeLods[r],y=3*I*(r>A-$r?r-A+$r:0),_=4*(this._cubeSize-I);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=A-n,ua(l,y,_,3*I,2*I),o.setRenderTarget(l),o.render(f,no),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=A-r,ua(e,y,_,3*I,2*I),o.setRenderTarget(e),o.render(f,no)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*_s-1),I=l/A,y=isFinite(l)?1+Math.floor(v*I):_s;y>_s&&wt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_s}`);const _=[];let D=0;for(let F=0;F<_s;++F){const w=F/I,L=Math.exp(-w*w/2);_.push(L),F===0?D+=L:F<y&&(D+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=A,x.mipInt.value=R-r;const N=this._sizeLods[o],z=3*N*(o>R-$r?o-R+$r:0),P=4*(this._cubeSize-N);ua(n,z,P,3*N,2*N),h.setRenderTarget(n),h.render(S,no)}}function N1(s){const e=[],n=[],r=[];let o=s;const l=s-$r+1+qm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-$r?h=qm[u-s+$r-1]:u===0&&(h=0),n.push(h);const m=1/(f-2),v=-m,S=1+m,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,I=3,y=2,_=1,D=new Float32Array(I*A*M),R=new Float32Array(y*A*M),N=new Float32Array(_*A*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,w=P>2?0:-1,L=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];D.set(L,I*A*P),R.set(x,y*A*P);const W=[P,P,P,P,P,P];N.set(W,_*A*P)}const z=new ui;z.setAttribute("position",new Ki(D,I)),z.setAttribute("uv",new Ki(R,y)),z.setAttribute("faceIndex",new Ki(N,_)),r.push(new ti(z,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Jm(s,e,n){const r=new qi(s,e,n);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ua(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function P1(s,e,n){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function I1(s,e,n){const r=new Float32Array(_s),o=new te(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Qm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function e0(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}class og extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Z0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:va(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:mr});l.uniforms.tEquirect.value=n;const u=new ti(o,l),f=n.minFilter;return n.minFilter===ys&&(n.minFilter=Bn),new k_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function D1(s){let e=new WeakMap,n=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===Gu||M===ju)if(e.has(x)){const A=e.get(x).texture;return f(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const I=new og(A.height);return I.fromEquirectangularTexture(s,x),e.set(x,I),x.addEventListener("dispose",m),f(I.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,A=M===Gu||M===ju,I=M===Es||M===ga;if(A||I){let y=n.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Zm(s)),y=A?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),y.texture;if(y!==void 0)return y.texture;{const D=x.image;return A&&D&&D.height>0||I&&D&&h(D)?(r===null&&(r=new Zm(s)),y=A?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,M){return M===Gu?x.mapping=Es:M===ju&&(x.mapping=ga),x}function h(x){let M=0;const A=6;for(let I=0;I<A;I++)x[I]!==void 0&&M++;return M===A}function m(x){const M=x.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function L1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&gf("WebGLRenderer: "+r+" extension not supported."),o}}}function U1(s,e,n,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(S){const x=[],M=S.index,A=S.attributes.position;let I=0;if(A===void 0)return;if(M!==null){const D=M.array;I=M.version;for(let R=0,N=D.length;R<N;R+=3){const z=D[R+0],P=D[R+1],F=D[R+2];x.push(z,P,P,F,F,z)}}else{const D=A.array;I=A.version;for(let R=0,N=D.length/3-1;R<N;R+=3){const z=R+0,P=R+1,F=R+2;x.push(z,P,P,F,F,z)}}const y=new(A.count>=65535?q0:$0)(x,1);y.version=I;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&m(S)}else m(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function F1(s,e,n){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),n.update(x,r,1)}function m(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,S*u,M),n.update(x,r,M))}function v(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,M);let I=0;for(let y=0;y<M;y++)I+=x[y];n.update(I,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v}function O1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:qt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function k1(s,e,n){const r=new WeakMap,o=new mn;function l(u,f,h){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let W=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var M=W;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,I=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let N=0;A===!0&&(N=1),I===!0&&(N=2),y===!0&&(N=3);let z=f.attributes.position.count*N,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*P*4*S),w=new W0(F,z,P,S);w.type=Xi,w.needsUpdate=!0;const L=N*4;for(let V=0;V<S;V++){const q=_[V],ee=D[V],Se=R[V],X=z*P*4*V;for(let oe=0;oe<q.count;oe++){const K=oe*L;A===!0&&(o.fromBufferAttribute(q,oe),F[X+K+0]=o.x,F[X+K+1]=o.y,F[X+K+2]=o.z,F[X+K+3]=0),I===!0&&(o.fromBufferAttribute(ee,oe),F[X+K+4]=o.x,F[X+K+5]=o.y,F[X+K+6]=o.z,F[X+K+7]=0),y===!0&&(o.fromBufferAttribute(Se,oe),F[X+K+8]=o.x,F[X+K+9]=o.y,F[X+K+10]=o.z,F[X+K+11]=Se.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new bt(z,P)},r.set(f,x),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const I=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",I),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function B1(s,e,n,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,S=m.geometry,x=e.get(m,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(m){const v=m.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:f}}const z1={[R0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[I0]:"ACES_FILMIC_TONE_MAPPING",[L0]:"AGX_TONE_MAPPING",[U0]:"NEUTRAL_TONE_MAPPING",[D0]:"CUSTOM_TONE_MAPPING"};function V1(s,e,n,r,o){const l=new qi(e,n,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new xa(e,n):void 0}),u=new qi(e,n,{type:xr,depthBuffer:!1,stencilBuffer:!1}),f=new ui;f.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new gn([0,2,0,0,2,0],2));const h=new U_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ti(f,h),v=new rg(-1,1,1,-1,0,1);let S=null,x=null,M=!1,A,I=null,y=[],_=!1;this.setSize=function(D,R){l.setSize(D,R),u.setSize(D,R);for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(D,R)}},this.setEffects=function(D){y=D,_=y.length>0&&y[0].isRenderPass===!0;const R=l.width,N=l.height;for(let z=0;z<y.length;z++){const P=y[z];P.setSize&&P.setSize(R,N)}},this.begin=function(D,R){if(M||D.toneMapping===$i&&y.length===0)return!1;if(I=R,R!==null){const N=R.width,z=R.height;(l.width!==N||l.height!==z)&&this.setSize(N,z)}return _===!1&&D.setRenderTarget(l),A=D.toneMapping,D.toneMapping=$i,!0},this.hasRenderPass=function(){return _},this.end=function(D,R){D.toneMapping=A,M=!0;let N=l,z=u;for(let P=0;P<y.length;P++){const F=y[P];if(F.enabled!==!1&&(F.render(D,z,N,R),F.needsSwap!==!1)){const w=N;N=z,z=w}}if(S!==D.outputColorSpace||x!==D.toneMapping){S=D.outputColorSpace,x=D.toneMapping,h.defines={},Yt.getTransfer(S)===Qt&&(h.defines.SRGB_TRANSFER="");const P=z1[x];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(I),D.render(m,v),I=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const lg=new Gn,vf=new xa(1,1),cg=new W0,ug=new Kv,dg=new Z0,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function ya(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=t0[o];if(l===void 0&&(l=new Float32Array(o),t0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function En(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function wn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function cc(s,e){let n=n0[e];n===void 0&&(n=new Int32Array(e),n0[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function H1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function G1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;s.uniform2fv(this.addr,e),wn(n,e)}}function j1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;s.uniform3fv(this.addr,e),wn(n,e)}}function W1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;s.uniform4fv(this.addr,e),wn(n,e)}}function X1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(En(n,r))return;s0.set(r),s.uniformMatrix2fv(this.addr,!1,s0),wn(n,r)}}function Y1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(En(n,r))return;r0.set(r),s.uniformMatrix3fv(this.addr,!1,r0),wn(n,r)}}function $1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(En(n,r))return;i0.set(r),s.uniformMatrix4fv(this.addr,!1,i0),wn(n,r)}}function q1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function K1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;s.uniform2iv(this.addr,e),wn(n,e)}}function Z1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;s.uniform3iv(this.addr,e),wn(n,e)}}function J1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;s.uniform4iv(this.addr,e),wn(n,e)}}function Q1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;s.uniform2uiv(this.addr,e),wn(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;s.uniform3uiv(this.addr,e),wn(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;s.uniform4uiv(this.addr,e),wn(n,e)}}function iM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(vf.compareFunction=n.isReversedDepthBuffer()?If:Pf,l=vf):l=lg,n.setTexture2D(e||l,o)}function rM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||ug,o)}function sM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||dg,o)}function aM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||cg,o)}function oM(s){switch(s){case 5126:return H1;case 35664:return G1;case 35665:return j1;case 35666:return W1;case 35674:return X1;case 35675:return Y1;case 35676:return $1;case 5124:case 35670:return q1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(s,e){s.uniform1fv(this.addr,e)}function cM(s,e){const n=ya(e,this.size,2);s.uniform2fv(this.addr,n)}function uM(s,e){const n=ya(e,this.size,3);s.uniform3fv(this.addr,n)}function dM(s,e){const n=ya(e,this.size,4);s.uniform4fv(this.addr,n)}function fM(s,e){const n=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function hM(s,e){const n=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function pM(s,e){const n=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function mM(s,e){s.uniform1iv(this.addr,e)}function gM(s,e){s.uniform2iv(this.addr,e)}function xM(s,e){s.uniform3iv(this.addr,e)}function vM(s,e){s.uniform4iv(this.addr,e)}function _M(s,e){s.uniform1uiv(this.addr,e)}function yM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function EM(s,e,n){const r=this.cache,o=e.length,l=cc(n,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=vf:u=lg;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function wM(s,e,n){const r=this.cache,o=e.length,l=cc(n,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||ug,l[u])}function bM(s,e,n){const r=this.cache,o=e.length,l=cc(n,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||dg,l[u])}function TM(s,e,n){const r=this.cache,o=e.length,l=cc(n,o);En(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||cg,l[u])}function AM(s){switch(s){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}class CM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oM(n.type)}}class RM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AM(n.type)}}class NM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function a0(s,e){s.seq.push(e),s.map[e.id]=e}function PM(s,e,n){const r=s.name,o=r.length;for(Ed.lastIndex=0;;){const l=Ed.exec(r),u=Ed.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){a0(n,m===void 0?new CM(f,s,e):new RM(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new NM(f),a0(n,S)),n=S}}}class ql{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);PM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function o0(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const IM=37297;let DM=0;function LM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const l0=new Ft;function UM(s){Yt._getMatrix(l0,Yt.workingColorSpace,s);const e=`mat3( ${l0.elements.map(n=>n.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function c0(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+LM(s.getShaderSource(e),f)}else return l}function FM(s,e){const n=UM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OM={[R0]:"Linear",[N0]:"Reinhard",[P0]:"Cineon",[I0]:"ACESFilmic",[L0]:"AgX",[U0]:"Neutral",[D0]:"Custom"};function kM(s,e){const n=OM[e];return n===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new te;function BM(){Yt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function VM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function ao(s){return s!==""}function u0(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(GM,WM)}const jM=new Map;function WM(s,e){let n=zt[e];if(n===void 0){const r=jM.get(e);if(r!==void 0)n=zt[r],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return _f(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(s){return s.replace(XM,YM)}function YM(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function h0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const $M={[jl]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function qM(s){return $M[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KM={[Es]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function ZM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JM={[ga]:"ENVMAP_MODE_REFRACTION"};function QM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[C0]:"ENVMAP_BLENDING_MULTIPLY",[Rv]:"ENVMAP_BLENDING_MIX",[Nv]:"ENVMAP_BLENDING_ADD"};function tE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eE[s.combine]||"ENVMAP_BLENDING_NONE"}function nE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function iE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=qM(n),m=ZM(n),v=QM(n),S=tE(n),x=nE(n),M=zM(n),A=VM(l),I=o.createProgram();let y,_,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?zt.tonemapping_pars_fragment:"",n.toneMapping!==$i?kM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,FM("linearToOutputTexel",n.outputColorSpace),BM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),u=_f(u),u=u0(u,n),u=d0(u,n),f=_f(f),f=u0(f,n),f=d0(f,n),u=f0(u),f=f0(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=D+y+u,N=D+_+f,z=o0(o,o.VERTEX_SHADER,R),P=o0(o,o.FRAGMENT_SHADER,N);o.attachShader(I,z),o.attachShader(I,P),n.index0AttributeName!==void 0?o.bindAttribLocation(I,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(I,0,"position"),o.linkProgram(I);function F(V){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(I)||"",ee=o.getShaderInfoLog(z)||"",Se=o.getShaderInfoLog(P)||"",X=q.trim(),oe=ee.trim(),K=Se.trim();let Z=!0,Me=!0;if(o.getProgramParameter(I,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,I,z,P);else{const de=c0(o,z,"vertex"),k=c0(o,P,"fragment");qt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(I,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+de+`
`+k)}else X!==""?wt("WebGLProgram: Program Info Log:",X):(oe===""||K==="")&&(Me=!1);Me&&(V.diagnostics={runnable:Z,programLog:X,vertexShader:{log:oe,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(z),o.deleteShader(P),w=new ql(o,I),L=HM(o,I)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(I,IM)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(I),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=z,this.fragmentShader=P,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new aE(e),n.set(e,r)),r}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(s){return s===ws||s===Kl||s===Zl}function lE(s,e,n,r,o,l){const u=new X0,f=new sE,h=new Set,m=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return h.add(w),w===0?"uv":`uv${w}`}function I(w,L,W,V,q,ee){const Se=V.fog,X=q.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||oe,K),Me=Z&&Z.mapping===sc?Z.image.height:null,de=M[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const k=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=k!==void 0?k.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let Ye,De,he,Te;if(de){const ft=Wi[de];Ye=ft.vertexShader,De=ft.fragmentShader}else Ye=w.vertexShader,De=w.fragmentShader,f.update(w),he=f.getVertexShaderID(w),Te=f.getFragmentShaderID(w);const be=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),et=q.isInstancedMesh===!0,st=q.isBatchedMesh===!0,mt=!!w.map,pt=!!w.matcap,kt=!!Z,Wt=!!w.aoMap,Mt=!!w.lightMap,Bt=!!w.bumpMap,It=!!w.normalMap,Ht=!!w.displacementMap,$=!!w.emissiveMap,St=!!w.metalnessMap,Ze=!!w.roughnessMap,gt=w.anisotropy>0,He=w.clearcoat>0,Rt=w.dispersion>0,U=w.iridescence>0,E=w.sheen>0,re=w.transmission>0,j=gt&&!!w.anisotropyMap,se=He&&!!w.clearcoatMap,ae=He&&!!w.clearcoatNormalMap,ce=He&&!!w.clearcoatRoughnessMap,ie=U&&!!w.iridescenceMap,xe=U&&!!w.iridescenceThicknessMap,ve=E&&!!w.sheenColorMap,Le=E&&!!w.sheenRoughnessMap,Re=!!w.specularMap,we=!!w.specularColorMap,Ne=!!w.specularIntensityMap,Ke=re&&!!w.transmissionMap,Je=re&&!!w.thicknessMap,G=!!w.gradientMap,Ae=!!w.alphaMap,ne=w.alphaTest>0,Pe=!!w.alphaHash,Ie=!!w.extensions;let Ce=$i;w.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const $e={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:De,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:st,batchingColor:st&&q._colorsTexture!==null,instancing:et,instancingColor:et&&q.instanceColor!==null,instancingMorph:et&&q.morphTexture!==null,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:pt,envMap:kt,envMapMode:kt&&Z.mapping,envMapCubeUVHeight:Me,aoMap:Wt,lightMap:Mt,bumpMap:Bt,normalMap:It,displacementMap:Ht,emissiveMap:$,normalMapObjectSpace:It&&w.normalMapType===Dv,normalMapTangentSpace:It&&w.normalMapType===Sm,packedNormalMap:It&&w.normalMapType===Sm&&oE(w.normalMap.format),metalnessMap:St,roughnessMap:Ze,anisotropy:gt,anisotropyMap:j,clearcoat:He,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:ce,dispersion:Rt,iridescence:U,iridescenceMap:ie,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:we,specularIntensityMap:Ne,transmission:re,transmissionMap:Ke,thicknessMap:Je,gradientMap:G,opaque:w.transparent===!1&&w.blending===ha&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ne,alphaHash:Pe,combine:w.combine,mapUv:mt&&A(w.map.channel),aoMapUv:Wt&&A(w.aoMap.channel),lightMapUv:Mt&&A(w.lightMap.channel),bumpMapUv:Bt&&A(w.bumpMap.channel),normalMapUv:It&&A(w.normalMap.channel),displacementMapUv:Ht&&A(w.displacementMap.channel),emissiveMapUv:$&&A(w.emissiveMap.channel),metalnessMapUv:St&&A(w.metalnessMap.channel),roughnessMapUv:Ze&&A(w.roughnessMap.channel),anisotropyMapUv:j&&A(w.anisotropyMap.channel),clearcoatMapUv:se&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&A(w.sheenRoughnessMap.channel),specularMapUv:Re&&A(w.specularMap.channel),specularColorMapUv:we&&A(w.specularColorMap.channel),specularIntensityMapUv:Ne&&A(w.specularIntensityMap.channel),transmissionMapUv:Ke&&A(w.transmissionMap.channel),thicknessMapUv:Je&&A(w.thicknessMap.channel),alphaMapUv:Ae&&A(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(It||gt),vertexNormals:!!X.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(mt||Ae),fog:!!Se,useFog:w.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||X.attributes.normal===void 0&&It===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Be,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&Yt.getTransfer(w.map.colorSpace)===Qt,decodeVideoTextureEmissive:$&&w.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(w.emissiveMap.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hr,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function y(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)L.push(W),L.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(_(L,w),D(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function D(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const L=M[w.type];let W;if(L){const V=Wi[L];W=I_.clone(V.uniforms)}else W=w.uniforms;return W}function N(w,L){let W=v.get(L);return W!==void 0?++W.usedTimes:(W=new iE(s,L,w,o),m.push(W),v.set(L,W)),W}function z(w){if(--w.usedTimes===0){const L=m.indexOf(w);m[L]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function F(){f.dispose()}return{getParameters:I,getProgramCacheKey:y,getUniforms:R,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:m,dispose:F}}function cE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function p0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function m0(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,A,I,y,_){let D=s[e];return D===void 0?(D={id:x.id,object:x,geometry:M,material:A,materialVariant:u(x),groupOrder:I,renderOrder:x.renderOrder,z:y,group:_},s[e]=D):(D.id=x.id,D.object=x,D.geometry=M,D.material=A,D.materialVariant=u(x),D.groupOrder=I,D.renderOrder=x.renderOrder,D.z=y,D.group=_),e++,D}function h(x,M,A,I,y,_){const D=f(x,M,A,I,y,_);A.transmission>0?r.push(D):A.transparent===!0?o.push(D):n.push(D)}function m(x,M,A,I,y,_){const D=f(x,M,A,I,y,_);A.transmission>0?r.unshift(D):A.transparent===!0?o.unshift(D):n.unshift(D)}function v(x,M){n.length>1&&n.sort(x||uE),r.length>1&&r.sort(M||p0),o.length>1&&o.sort(M||p0)}function S(){for(let x=e,M=s.length;x<M;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:v}}function dE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new m0,s.set(r,[u])):o>=l.length?(u=new m0,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new en};break;case"SpotLight":n={position:new te,direction:new te,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new en,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new en,groundColor:new en};break;case"RectAreaLight":n={color:new en,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let pE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new fE,n=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const o=new te,l=new _n,u=new _n;function f(m){let v=0,S=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,A=0,I=0,y=0,_=0,D=0,R=0,N=0,z=0,P=0,F=0;m.sort(mE);for(let L=0,W=m.length;L<W;L++){const V=m[L],q=V.color,ee=V.intensity,Se=V.distance;let X=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ws?X=V.shadow.map.texture:X=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=q.r*ee,S+=q.g*ee,x+=q.b*ee;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],ee);F++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Z=n.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=oe,M++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(q).multiplyScalar(ee),oe.distance=Se,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[I]=oe;const K=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,K.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[I]=K.matrix,V.castShadow){const Z=n.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[I]=Z,r.spotShadowMap[I]=X,N++}I++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(q).multiplyScalar(ee),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=oe,y++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const K=V.shadow,Z=n.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=X,r.pointShadowMatrix[A]=V.shadow.matrix,R++}r.point[A]=oe,A++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(ee),oe.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Qe.LTC_FLOAT_1,r.rectAreaLTC2=Qe.LTC_FLOAT_2):(r.rectAreaLTC1=Qe.LTC_HALF_1,r.rectAreaLTC2=Qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==M||w.pointLength!==A||w.spotLength!==I||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==D||w.numPointShadows!==R||w.numSpotShadows!==N||w.numSpotMaps!==z||w.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=I,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,w.directionalLength=M,w.pointLength=A,w.spotLength=I,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=D,w.numPointShadows=R,w.numSpotShadows=N,w.numSpotMaps=z,w.numLightProbes=F,r.version=pE++)}function h(m,v){let S=0,x=0,M=0,A=0,I=0;const y=v.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const R=m[_];if(R.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),S++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const N=r.hemi[I];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(y),I++}}}return{setup:f,setupView:h,state:r}}function g0(s){const e=new gE(s),n=[],r=[],o=[];function l(x){S.camera=x,n.length=0,r.length=0,o.length=0}function u(x){n.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function m(){e.setup(n)}function v(x){e.setupView(n,x)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function xE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new g0(s),e.set(o,[f])):l>=u.length?(f=new g0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const vE=`void main() {
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
}`,yE=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],SE=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],x0=new _n,io=new te,wd=new te;function ME(s,e,n){let r=new K0;const o=new bt,l=new bt,u=new mn,f=new F_,h=new O_,m={},v=n.maxTextureSize,S={[qr]:ei,[ei]:qr,[hr]:hr},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:vE,fragmentShader:_E}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ui;A.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new ti(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let _=this.type;this.render=function(P,F,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===uv&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jl);const L=s.getRenderTarget(),W=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(mr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=_!==this.type;ee&&F.traverse(function(Se){Se.material&&(Array.isArray(Se.material)?Se.material.forEach(X=>X.needsUpdate=!0):Se.material.needsUpdate=!0)});for(let Se=0,X=P.length;Se<X;Se++){const oe=P[Se],K=oe.shadow;if(K===void 0){wt("WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Z=K.getFrameExtents();o.multiply(Z),l.copy(K.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Z.x),o.x=l.x*Z.x,K.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Z.y),o.y=l.y*Z.y,K.mapSize.y=l.y));const Me=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Me,K.map===null||ee===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ro){if(oe.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new qi(o.x,o.y,{format:ws,type:xr,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),K.map.texture.name=oe.name+".shadowMap",K.map.depthTexture=new xa(o.x,o.y,Xi),K.map.depthTexture.name=oe.name+".shadowMapDepth",K.map.depthTexture.format=vr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In}else oe.isPointLight?(K.map=new og(o.x),K.map.depthTexture=new m_(o.x,Zi)):(K.map=new qi(o.x,o.y),K.map.depthTexture=new xa(o.x,o.y,Zi)),K.map.depthTexture.name=oe.name+".shadowMap",K.map.depthTexture.format=vr,this.type===jl?(K.map.depthTexture.compareFunction=Me?If:Pf,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In);K.camera.updateProjectionMatrix()}const de=K.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<de;k++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,k),s.clear();else{k===0&&(s.setRenderTarget(K.map),s.clear());const le=K.getViewport(k);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),q.viewport(u)}if(oe.isPointLight){const le=K.camera,Xe=K.matrix,Ye=oe.distance||le.far;Ye!==le.far&&(le.far=Ye,le.updateProjectionMatrix()),io.setFromMatrixPosition(oe.matrixWorld),le.position.copy(io),wd.copy(le.position),wd.add(yE[k]),le.up.copy(SE[k]),le.lookAt(wd),le.updateMatrixWorld(),Xe.makeTranslation(-io.x,-io.y,-io.z),x0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),K._frustum.setFromProjectionMatrix(x0,le.coordinateSystem,le.reversedDepth)}else K.updateMatrices(oe);r=K.getFrustum(),N(F,w,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===ro&&D(K,w),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(L,W,V)};function D(P,F){const w=e.update(I);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qi(o.x,o.y,{format:ws,type:xr})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,x,I,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,M,I,null)}function R(P,F,w,L){let W=null;const V=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)W=V;else if(W=w.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=W.uuid,ee=F.uuid;let Se=m[q];Se===void 0&&(Se={},m[q]=Se);let X=Se[ee];X===void 0&&(X=W.clone(),Se[ee]=X,F.addEventListener("dispose",z)),W=X}if(W.visible=F.visible,W.wireframe=F.wireframe,L===ro?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:S[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,w.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=s.properties.get(W);q.light=w}return W}function N(P,F,w,L,W){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===ro)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ee=e.update(P),Se=P.material;if(Array.isArray(Se)){const X=ee.groups;for(let oe=0,K=X.length;oe<K;oe++){const Z=X[oe],Me=Se[Z.materialIndex];if(Me&&Me.visible){const de=R(P,Me,L,W);P.onBeforeShadow(s,P,F,w,ee,de,Z),s.renderBufferDirect(w,null,ee,de,P,Z),P.onAfterShadow(s,P,F,w,ee,de,Z)}}}else if(Se.visible){const X=R(P,Se,L,W);P.onBeforeShadow(s,P,F,w,ee,X,null),s.renderBufferDirect(w,null,ee,X,P,null),P.onAfterShadow(s,P,F,w,ee,X,null)}}const q=P.children;for(let ee=0,Se=q.length;ee<Se;ee++)N(q[ee],F,w,L,W)}function z(P){P.target.removeEventListener("dispose",z);for(const w in m){const L=m[w],W=P.target.uuid;W in L&&(L[W].dispose(),delete L[W])}}}function EE(s,e){function n(){let G=!1;const Ae=new mn;let ne=null;const Pe=new mn(0,0,0,0);return{setMask:function(Ie){ne!==Ie&&!G&&(s.colorMask(Ie,Ie,Ie,Ie),ne=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,Ce,$e,ft,Nt){Nt===!0&&(Ie*=ft,Ce*=ft,$e*=ft),Ae.set(Ie,Ce,$e,ft),Pe.equals(Ae)===!1&&(s.clearColor(Ie,Ce,$e,ft),Pe.copy(Ae))},reset:function(){G=!1,ne=null,Pe.set(-1,0,0,0)}}}function r(){let G=!1,Ae=!1,ne=null,Pe=null,Ie=null;return{setReversed:function(Ce){if(Ae!==Ce){const $e=e.get("EXT_clip_control");Ce?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ae=Ce;const ft=Ie;Ie=null,this.setClear(ft)}},getReversed:function(){return Ae},setTest:function(Ce){Ce?be(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ce){ne!==Ce&&!G&&(s.depthMask(Ce),ne=Ce)},setFunc:function(Ce){if(Ae&&(Ce=Gv[Ce]),Pe!==Ce){switch(Ce){case Nd:s.depthFunc(s.NEVER);break;case Pd:s.depthFunc(s.ALWAYS);break;case Id:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Ld:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ce}},setLocked:function(Ce){G=Ce},setClear:function(Ce){Ie!==Ce&&(Ie=Ce,Ae&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){G=!1,ne=null,Pe=null,Ie=null,Ae=!1}}}function o(){let G=!1,Ae=null,ne=null,Pe=null,Ie=null,Ce=null,$e=null,ft=null,Nt=null;return{setTest:function(Pt){G||(Pt?be(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Pt){Ae!==Pt&&!G&&(s.stencilMask(Pt),Ae=Pt)},setFunc:function(Pt,an,tn){(ne!==Pt||Pe!==an||Ie!==tn)&&(s.stencilFunc(Pt,an,tn),ne=Pt,Pe=an,Ie=tn)},setOp:function(Pt,an,tn){(Ce!==Pt||$e!==an||ft!==tn)&&(s.stencilOp(Pt,an,tn),Ce=Pt,$e=an,ft=tn)},setLocked:function(Pt){G=Pt},setClear:function(Pt){Nt!==Pt&&(s.clearStencil(Pt),Nt=Pt)},reset:function(){G=!1,Ae=null,ne=null,Pe=null,Ie=null,Ce=null,$e=null,ft=null,Nt=null}}}const l=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let v={},S={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,D=null,R=null,N=null,z=null,P=null,F=null,w=new en(0,0,0),L=0,W=!1,V=null,q=null,ee=null,Se=null,X=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const Me=s.getParameter(s.VERSION);Me.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Me)[1]),K=Z>=1):Me.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),K=Z>=2);let de=null,k={};const le=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),Ye=new mn().fromArray(le),De=new mn().fromArray(Xe);function he(G,Ae,ne,Pe){const Ie=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(G,Ce),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ne;$e++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ce}const Te={};Te[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),be(s.DEPTH_TEST),u.setFunc(ma),Bt(!1),It(xm),be(s.CULL_FACE),Wt(mr);function be(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function Be(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function et(G,Ae){return x[G]!==Ae?(s.bindFramebuffer(G,Ae),x[G]=Ae,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ae),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function st(G,Ae){let ne=A,Pe=!1;if(G){ne=M.get(Ae),ne===void 0&&(ne=[],M.set(Ae,ne));const Ie=G.textures;if(ne.length!==Ie.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,$e=Ie.length;Ce<$e;Ce++)ne[Ce]=s.COLOR_ATTACHMENT0+Ce;ne.length=Ie.length,Pe=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ne)}function mt(G){return I!==G?(s.useProgram(G),I=G,!0):!1}const pt={[vs]:s.FUNC_ADD,[fv]:s.FUNC_SUBTRACT,[hv]:s.FUNC_REVERSE_SUBTRACT};pt[pv]=s.MIN,pt[mv]=s.MAX;const kt={[gv]:s.ZERO,[xv]:s.ONE,[vv]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[wv]:s.SRC_ALPHA_SATURATE,[Mv]:s.DST_COLOR,[yv]:s.DST_ALPHA,[_v]:s.ONE_MINUS_SRC_COLOR,[Rd]:s.ONE_MINUS_SRC_ALPHA,[Ev]:s.ONE_MINUS_DST_COLOR,[Sv]:s.ONE_MINUS_DST_ALPHA,[bv]:s.CONSTANT_COLOR,[Tv]:s.ONE_MINUS_CONSTANT_COLOR,[Av]:s.CONSTANT_ALPHA,[Cv]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(G,Ae,ne,Pe,Ie,Ce,$e,ft,Nt,Pt){if(G===mr){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(be(s.BLEND),y=!0),G!==dv){if(G!==_||Pt!==W){if((D!==vs||z!==vs)&&(s.blendEquation(s.FUNC_ADD),D=vs,z=vs),Pt)switch(G){case ha:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFunc(s.ONE,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",G);break}else switch(G){case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _m:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",G);break}R=null,N=null,P=null,F=null,w.set(0,0,0),L=0,_=G,W=Pt}return}Ie=Ie||Ae,Ce=Ce||ne,$e=$e||Pe,(Ae!==D||Ie!==z)&&(s.blendEquationSeparate(pt[Ae],pt[Ie]),D=Ae,z=Ie),(ne!==R||Pe!==N||Ce!==P||$e!==F)&&(s.blendFuncSeparate(kt[ne],kt[Pe],kt[Ce],kt[$e]),R=ne,N=Pe,P=Ce,F=$e),(ft.equals(w)===!1||Nt!==L)&&(s.blendColor(ft.r,ft.g,ft.b,Nt),w.copy(ft),L=Nt),_=G,W=!1}function Mt(G,Ae){G.side===hr?Be(s.CULL_FACE):be(s.CULL_FACE);let ne=G.side===ei;Ae&&(ne=!ne),Bt(ne),G.blending===ha&&G.transparent===!1?Wt(mr):Wt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Pe=G.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(G){V!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),V=G)}function It(G){G!==lv?(be(s.CULL_FACE),G!==q&&(G===xm?s.cullFace(s.BACK):G===cv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),q=G}function Ht(G){G!==ee&&(K&&s.lineWidth(G),ee=G)}function $(G,Ae,ne){G?(be(s.POLYGON_OFFSET_FILL),(Se!==Ae||X!==ne)&&(Se=Ae,X=ne,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,ne))):Be(s.POLYGON_OFFSET_FILL)}function St(G){G?be(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Ze(G){G===void 0&&(G=s.TEXTURE0+oe-1),de!==G&&(s.activeTexture(G),de=G)}function gt(G,Ae,ne){ne===void 0&&(de===null?ne=s.TEXTURE0+oe-1:ne=de);let Pe=k[ne];Pe===void 0&&(Pe={type:void 0,texture:void 0},k[ne]=Pe),(Pe.type!==G||Pe.texture!==Ae)&&(de!==ne&&(s.activeTexture(ne),de=ne),s.bindTexture(G,Ae||Te[G]),Pe.type=G,Pe.texture=Ae)}function He(){const G=k[de];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function E(){try{s.texSubImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function re(){try{s.texSubImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function se(){try{s.compressedTexSubImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function ae(){try{s.texStorage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function ce(){try{s.texStorage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function ie(){try{s.texImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function xe(){try{s.texImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function ve(G){return S[G]!==void 0?S[G]:s.getParameter(G)}function Le(G,Ae){S[G]!==Ae&&(s.pixelStorei(G,Ae),S[G]=Ae)}function Re(G){Ye.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ye.copy(G))}function we(G){De.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function Ne(G,Ae){let ne=m.get(Ae);ne===void 0&&(ne=new WeakMap,m.set(Ae,ne));let Pe=ne.get(G);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ae,G.name),ne.set(G,Pe))}function Ke(G,Ae){const Pe=m.get(Ae).get(G);h.get(Ae)!==Pe&&(s.uniformBlockBinding(Ae,Pe,G.__bindingPointIndex),h.set(Ae,Pe))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},de=null,k={},x={},M=new WeakMap,A=[],I=null,y=!1,_=null,D=null,R=null,N=null,z=null,P=null,F=null,w=new en(0,0,0),L=0,W=!1,V=null,q=null,ee=null,Se=null,X=null,Ye.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:be,disable:Be,bindFramebuffer:et,drawBuffers:st,useProgram:mt,setBlending:Wt,setMaterial:Mt,setFlipSided:Bt,setCullFace:It,setLineWidth:Ht,setPolygonOffset:$,setScissorTest:St,activeTexture:Ze,bindTexture:gt,unbindTexture:He,compressedTexImage2D:Rt,compressedTexImage3D:U,texImage2D:ie,texImage3D:xe,pixelStorei:Le,getParameter:ve,updateUBOMapping:Ne,uniformBlockBinding:Ke,texStorage2D:ae,texStorage3D:ce,texSubImage2D:E,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:se,scissor:Re,viewport:we,reset:Je}}function wE(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new bt,v=new WeakMap,S=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(U,E){return A?new OffscreenCanvas(U,E):tc("canvas")}function y(U,E,re){let j=1;const se=Rt(U);if((se.width>re||se.height>re)&&(j=re/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(j*se.width),ce=Math.floor(j*se.height);x===void 0&&(x=I(ae,ce));const ie=E?I(ae,ce):x;return ie.width=ae,ie.height=ce,ie.getContext("2d").drawImage(U,0,0,ae,ce),wt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ae+"x"+ce+")."),ie}else return"data"in U&&wt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),U;return U}function _(U){return U.generateMipmaps}function D(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,E,re,j,se,ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce;j&&(ce=e.get("EXT_texture_norm16"),ce||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===s.RED&&(re===s.FLOAT&&(ie=s.R32F),re===s.HALF_FLOAT&&(ie=s.R16F),re===s.UNSIGNED_BYTE&&(ie=s.R8),re===s.UNSIGNED_SHORT&&ce&&(ie=ce.R16_EXT),re===s.SHORT&&ce&&(ie=ce.R16_SNORM_EXT)),E===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ie=s.R8UI),re===s.UNSIGNED_SHORT&&(ie=s.R16UI),re===s.UNSIGNED_INT&&(ie=s.R32UI),re===s.BYTE&&(ie=s.R8I),re===s.SHORT&&(ie=s.R16I),re===s.INT&&(ie=s.R32I)),E===s.RG&&(re===s.FLOAT&&(ie=s.RG32F),re===s.HALF_FLOAT&&(ie=s.RG16F),re===s.UNSIGNED_BYTE&&(ie=s.RG8),re===s.UNSIGNED_SHORT&&ce&&(ie=ce.RG16_EXT),re===s.SHORT&&ce&&(ie=ce.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ie=s.RG8UI),re===s.UNSIGNED_SHORT&&(ie=s.RG16UI),re===s.UNSIGNED_INT&&(ie=s.RG32UI),re===s.BYTE&&(ie=s.RG8I),re===s.SHORT&&(ie=s.RG16I),re===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),re===s.UNSIGNED_INT&&(ie=s.RGB32UI),re===s.BYTE&&(ie=s.RGB8I),re===s.SHORT&&(ie=s.RGB16I),re===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),re===s.UNSIGNED_INT&&(ie=s.RGBA32UI),re===s.BYTE&&(ie=s.RGBA8I),re===s.SHORT&&(ie=s.RGBA16I),re===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&(re===s.UNSIGNED_SHORT&&ce&&(ie=ce.RGB16_EXT),re===s.SHORT&&ce&&(ie=ce.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),E===s.RGBA){const xe=ae?Ql:Yt.getTransfer(se);re===s.FLOAT&&(ie=s.RGBA32F),re===s.HALF_FLOAT&&(ie=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ie=xe===Qt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&ce&&(ie=ce.RGBA16_EXT),re===s.SHORT&&ce&&(ie=ce.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function z(U,E){let re;return U?E===null||E===Zi||E===mo?re=s.DEPTH24_STENCIL8:E===Xi?re=s.DEPTH32F_STENCIL8:E===po&&(re=s.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===mo?re=s.DEPTH_COMPONENT24:E===Xi?re=s.DEPTH_COMPONENT32F:E===po&&(re=s.DEPTH_COMPONENT16),re}function P(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==In&&U.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),L(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function w(U){const E=U.target;E.removeEventListener("dispose",w),V(E)}function L(U){const E=r.get(U);if(E.__webglInit===void 0)return;const re=U.source,j=M.get(re);if(j){const se=j[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&W(U),Object.keys(j).length===0&&M.delete(re)}r.remove(U)}function W(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const re=U.source,j=M.get(re);delete j[E.__cacheKey],u.memory.textures--}function V(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let se=0;se<E.__webglFramebuffer[j].length;se++)s.deleteFramebuffer(E.__webglFramebuffer[j][se]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=U.textures;for(let j=0,se=re.length;j<se;j++){const ae=r.get(re[j]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),u.memory.textures--),r.remove(re[j])}r.remove(U)}let q=0;function ee(){q=0}function Se(){return q}function X(U){q=U}function oe(){const U=q;return U>=o.maxTextures&&wt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),q+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function Z(U,E){const re=r.get(U);if(U.isVideoTexture&&gt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&re.__version!==U.version){const j=U.image;if(j===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(re,U,E);return}}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+E)}function Me(U,E){const re=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){Be(re,U,E);return}else U.isExternalTexture&&(re.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+E)}function de(U,E){const re=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){Be(re,U,E);return}n.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+E)}function k(U,E){const re=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&re.__version!==U.version){et(re,U,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+E)}const le={[Od]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[kd]:s.MIRRORED_REPEAT},Xe={[In]:s.NEAREST,[Pv]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Wu]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},Ye={[Lv]:s.NEVER,[Bv]:s.ALWAYS,[Uv]:s.LESS,[Pf]:s.LEQUAL,[Fv]:s.EQUAL,[If]:s.GEQUAL,[Ov]:s.GREATER,[kv]:s.NOTEQUAL};function De(U,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Wu||E.magFilter===_l||E.magFilter===ys||E.minFilter===Bn||E.minFilter===Wu||E.minFilter===_l||E.minFilter===ys)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Xe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Xe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==_l&&E.minFilter!==ys||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function he(U,E){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const j=E.source;let se=M.get(j);se===void 0&&(se={},M.set(j,se));const ae=K(E);if(ae!==U.__cacheKey){se[ae]===void 0&&(se[ae]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),se[ae].usedTimes++;const ce=se[U.__cacheKey];ce!==void 0&&(se[U.__cacheKey].usedTimes--,ce.usedTimes===0&&W(E)),U.__cacheKey=ae,U.__webglTexture=se[ae].texture}return re}function Te(U,E,re){return Math.floor(Math.floor(U/re)/E)}function be(U,E,re,j){const ae=U.updateRanges;if(ae.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,re,j,E.data);else{ae.sort((Le,Re)=>Le.start-Re.start);let ce=0;for(let Le=1;Le<ae.length;Le++){const Re=ae[ce],we=ae[Le],Ne=Re.start+Re.count,Ke=Te(we.start,E.width,4),Je=Te(Re.start,E.width,4);we.start<=Ne+1&&Ke===Je&&Te(we.start+we.count-1,E.width,4)===Ke?Re.count=Math.max(Re.count,we.start+we.count-Re.start):(++ce,ae[ce]=we)}ae.length=ce+1;const ie=n.getParameter(s.UNPACK_ROW_LENGTH),xe=n.getParameter(s.UNPACK_SKIP_PIXELS),ve=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Le=0,Re=ae.length;Le<Re;Le++){const we=ae[Le],Ne=Math.floor(we.start/4),Ke=Math.ceil(we.count/4),Je=Ne%E.width,G=Math.floor(Ne/E.width),Ae=Ke,ne=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,Je,G,Ae,ne,re,j,E.data)}U.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,ie),n.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Be(U,E,re){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);const se=he(U,E),ae=E.source;n.bindTexture(j,U.__webglTexture,s.TEXTURE0+re);const ce=r.get(ae);if(ae.version!==ce.__version||se===!0){if(n.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ne=Yt.getPrimaries(Yt.workingColorSpace),Pe=E.colorSpace===Yr?null:Yt.getPrimaries(E.colorSpace),Ie=E.colorSpace===Yr||ne===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=y(E.image,!1,o.maxTextureSize);xe=He(E,xe);const ve=l.convert(E.format,E.colorSpace),Le=l.convert(E.type);let Re=N(E.internalFormat,ve,Le,E.normalized,E.colorSpace,E.isVideoTexture);De(j,E);let we;const Ne=E.mipmaps,Ke=E.isVideoTexture!==!0,Je=ce.__version===void 0||se===!0,G=ae.dataReady,Ae=P(E,xe);if(E.isDepthTexture)Re=z(E.format===Ss,E.type),Je&&(Ke?n.texStorage2D(s.TEXTURE_2D,1,Re,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Re,xe.width,xe.height,0,ve,Le,null));else if(E.isDataTexture)if(Ne.length>0){Ke&&Je&&n.texStorage2D(s.TEXTURE_2D,Ae,Re,Ne[0].width,Ne[0].height);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],Ke?G&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Le,we.data):n.texImage2D(s.TEXTURE_2D,ne,Re,we.width,we.height,0,ve,Le,we.data);E.generateMipmaps=!1}else Ke?(Je&&n.texStorage2D(s.TEXTURE_2D,Ae,Re,xe.width,xe.height),G&&be(E,xe,ve,Le)):n.texImage2D(s.TEXTURE_2D,0,Re,xe.width,xe.height,0,ve,Le,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&Je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Re,Ne[0].width,Ne[0].height,xe.depth);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)if(we=Ne[ne],E.format!==Ui)if(ve!==null)if(Ke){if(G)if(E.layerUpdates.size>0){const Ie=$m(we.width,we.height,E.format,E.type);for(const Ce of E.layerUpdates){const $e=we.data.subarray(Ce*Ie/we.data.BYTES_PER_ELEMENT,(Ce+1)*Ie/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Ce,we.width,we.height,1,ve,$e)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,xe.depth,ve,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Re,we.width,we.height,xe.depth,0,we.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,xe.depth,ve,Le,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ne,Re,we.width,we.height,xe.depth,0,ve,Le,we.data)}else{Ke&&Je&&n.texStorage2D(s.TEXTURE_2D,Ae,Re,Ne[0].width,Ne[0].height);for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],E.format!==Ui?ve!==null?Ke?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,we.data):n.compressedTexImage2D(s.TEXTURE_2D,ne,Re,we.width,we.height,0,we.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?G&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Le,we.data):n.texImage2D(s.TEXTURE_2D,ne,Re,we.width,we.height,0,ve,Le,we.data)}else if(E.isDataArrayTexture)if(Ke){if(Je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Re,xe.width,xe.height,xe.depth),G)if(E.layerUpdates.size>0){const ne=$m(xe.width,xe.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ie=xe.data.subarray(Pe*ne/xe.data.BYTES_PER_ELEMENT,(Pe+1)*ne/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,xe.width,xe.height,1,ve,Le,Ie)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ve,Le,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,xe.width,xe.height,xe.depth,0,ve,Le,xe.data);else if(E.isData3DTexture)Ke?(Je&&n.texStorage3D(s.TEXTURE_3D,Ae,Re,xe.width,xe.height,xe.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ve,Le,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Re,xe.width,xe.height,xe.depth,0,ve,Le,xe.data);else if(E.isFramebufferTexture){if(Je)if(Ke)n.texStorage2D(s.TEXTURE_2D,Ae,Re,xe.width,xe.height);else{let ne=xe.width,Pe=xe.height;for(let Ie=0;Ie<Ae;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,Re,ne,Pe,0,ve,Le,null),ne>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),xe.parentNode!==ne){ne.appendChild(xe),S.add(E),ne.onpaint=ft=>{const Nt=ft.changedElements;for(const Pt of S)Nt.includes(Pt.image)&&(Pt.needsUpdate=!0)},ne.requestPaint();return}const Pe=0,Ie=s.RGBA,Ce=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Pe,Ie,Ce,$e,xe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ke&&Je){const ne=Rt(Ne[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Re,ne.width,ne.height)}for(let ne=0,Pe=Ne.length;ne<Pe;ne++)we=Ne[ne],Ke?G&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,ve,Le,we):n.texImage2D(s.TEXTURE_2D,ne,Re,ve,Le,we);E.generateMipmaps=!1}else if(Ke){if(Je){const ne=Rt(xe);n.texStorage2D(s.TEXTURE_2D,Ae,Re,ne.width,ne.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Le,xe)}else n.texImage2D(s.TEXTURE_2D,0,Re,ve,Le,xe);_(E)&&D(j),ce.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function et(U,E,re){if(E.image.length!==6)return;const j=he(U,E),se=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+re);const ae=r.get(se);if(se.version!==ae.__version||j===!0){n.activeTexture(s.TEXTURE0+re);const ce=Yt.getPrimaries(Yt.workingColorSpace),ie=E.colorSpace===Yr?null:Yt.getPrimaries(E.colorSpace),xe=E.colorSpace===Yr||ce===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Le=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let Ce=0;Ce<6;Ce++)!ve&&!Le?Re[Ce]=y(E.image[Ce],!0,o.maxCubemapSize):Re[Ce]=Le?E.image[Ce].image:E.image[Ce],Re[Ce]=He(E,Re[Ce]);const we=Re[0],Ne=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type),Je=N(E.internalFormat,Ne,Ke,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Ae=ae.__version===void 0||j===!0,ne=se.dataReady;let Pe=P(E,we);De(s.TEXTURE_CUBE_MAP,E);let Ie;if(ve){G&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Je,we.width,we.height);for(let Ce=0;Ce<6;Ce++){Ie=Re[Ce].mipmaps;for(let $e=0;$e<Ie.length;$e++){const ft=Ie[$e];E.format!==Ui?Ne!==null?G?ne&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,0,0,ft.width,ft.height,Ne,ft.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,Je,ft.width,ft.height,0,ft.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,0,0,ft.width,ft.height,Ne,Ke,ft.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,Je,ft.width,ft.height,0,Ne,Ke,ft.data)}}}else{if(Ie=E.mipmaps,G&&Ae){Ie.length>0&&Pe++;const Ce=Rt(Re[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Je,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(Le){G?ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Re[Ce].width,Re[Ce].height,Ne,Ke,Re[Ce].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Je,Re[Ce].width,Re[Ce].height,0,Ne,Ke,Re[Ce].data);for(let $e=0;$e<Ie.length;$e++){const Nt=Ie[$e].image[Ce].image;G?ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,0,0,Nt.width,Nt.height,Ne,Ke,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,Je,Nt.width,Nt.height,0,Ne,Ke,Nt.data)}}else{G?ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ne,Ke,Re[Ce]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Je,Ne,Ke,Re[Ce]);for(let $e=0;$e<Ie.length;$e++){const ft=Ie[$e];G?ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,0,0,Ne,Ke,ft.image[Ce]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,Je,Ne,Ke,ft.image[Ce])}}}_(E)&&D(s.TEXTURE_CUBE_MAP),ae.__version=se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function st(U,E,re,j,se,ae){const ce=l.convert(re.format,re.colorSpace),ie=l.convert(re.type),xe=N(re.internalFormat,ce,ie,re.normalized,re.colorSpace),ve=r.get(E),Le=r.get(re);if(Le.__renderTarget=E,!ve.__hasExternalTextures){const Re=Math.max(1,E.width>>ae),we=Math.max(1,E.height>>ae);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?n.texImage3D(se,ae,xe,Re,we,E.depth,0,ce,ie,null):n.texImage2D(se,ae,xe,Re,we,0,ce,ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,se,Le.__webglTexture,0,St(E)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,se,Le.__webglTexture,ae),n.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(U,E,re){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const j=E.depthTexture,se=j&&j.isDepthTexture?j.type:null,ae=z(E.stencilBuffer,se),ce=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(E),ae,E.width,E.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(E),ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,U)}else{const j=E.textures;for(let se=0;se<j.length;se++){const ae=j[se],ce=l.convert(ae.format,ae.colorSpace),ie=l.convert(ae.type),xe=N(ae.internalFormat,ce,ie,ae.normalized,ae.colorSpace);Ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(E),xe,E.width,E.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(U,E,re){const j=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=r.get(E.depthTexture);if(se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),se.__webglTexture===void 0){se.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),De(s.TEXTURE_CUBE_MAP,E.depthTexture);const ve=l.convert(E.depthTexture.format),Le=l.convert(E.depthTexture.type);let Re;E.depthTexture.format===vr?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===Ss&&(Re=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Re,E.width,E.height,0,ve,Le,null)}}else Z(E.depthTexture,0);const ae=se.__webglTexture,ce=St(E),ie=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,xe=E.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ie,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ie,ae,0);else if(E.depthTexture.format===Ss)Ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ie,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ie,ae,0);else throw new Error("Unknown depthTexture format")}function kt(U){const E=r.get(U),re=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const j=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=j}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(re)for(let j=0;j<6;j++)pt(E.__webglFramebuffer[j],U,j);else{const j=U.texture.mipmaps;j&&j.length>0?pt(E.__webglFramebuffer[0],U,0):pt(E.__webglFramebuffer,U,0)}else if(re){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=s.createRenderbuffer(),mt(E.__webglDepthbuffer[j],U,!1);else{const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ae)}}else{const j=U.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),mt(E.__webglDepthbuffer,U,!1);else{const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ae)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(U,E,re){const j=r.get(U);E!==void 0&&st(j.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&kt(U)}function Mt(U){const E=U.texture,re=r.get(U),j=r.get(E);U.addEventListener("dispose",w);const se=U.textures,ae=U.isWebGLCubeRenderTarget===!0,ce=se.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,u.memory.textures++),ae){re.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[ie]=[];for(let xe=0;xe<E.mipmaps.length;xe++)re.__webglFramebuffer[ie][xe]=s.createFramebuffer()}else re.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)re.__webglFramebuffer[ie]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(ce)for(let ie=0,xe=se.length;ie<xe;ie++){const ve=r.get(se[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Ze(U)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ie=0;ie<se.length;ie++){const xe=se[ie];re.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[ie]);const ve=l.convert(xe.format,xe.colorSpace),Le=l.convert(xe.type),Re=N(xe.internalFormat,ve,Le,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),we=St(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Re,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,re.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(re.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)st(re.__webglFramebuffer[ie][xe],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else st(re.__webglFramebuffer[ie],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);_(E)&&D(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let ie=0,xe=se.length;ie<xe;ie++){const ve=se[ie],Le=r.get(ve);let Re=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,Le.__webglTexture),De(Re,ve),st(re.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+ie,Re,0),_(ve)&&D(Re)}n.unbindTexture()}else{let ie=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ie=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ie,j.__webglTexture),De(ie,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)st(re.__webglFramebuffer[xe],U,E,s.COLOR_ATTACHMENT0,ie,xe);else st(re.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ie,0);_(E)&&D(ie),n.unbindTexture()}U.depthBuffer&&kt(U)}function Bt(U){const E=U.textures;for(let re=0,j=E.length;re<j;re++){const se=E[re];if(_(se)){const ae=R(U),ce=r.get(se).__webglTexture;n.bindTexture(ae,ce),D(ae),n.unbindTexture()}}}const It=[],Ht=[];function $(U){if(U.samples>0){if(Ze(U)===!1){const E=U.textures,re=U.width,j=U.height;let se=s.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=r.get(U),ie=E.length>1;if(ie)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Le=r.get(E[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,re,j,0,0,re,j,se,s.NEAREST),h===!0&&(It.length=0,Ht.length=0,It.push(s.COLOR_ATTACHMENT0+ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(It.push(ae),Ht.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Le=r.get(E[ve]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Le,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function St(U){return Math.min(o.maxSamples,U.samples)}function Ze(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function He(U,E){const re=U.colorSpace,j=U.format,se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==Jl&&re!==Yr&&(Yt.getTransfer(re)===Qt?(j!==Ui||se!==Mi)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",re)),E}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ee,this.getTextureUnits=Se,this.setTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=Me,this.setTexture3D=de,this.setTextureCube=k,this.rebindTextures=Wt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bE(s,e){function n(r,o=Yr){let l;const u=Yt.getTransfer(o);if(r===Mi)return s.UNSIGNED_BYTE;if(r===Tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===B0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===z0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===O0)return s.BYTE;if(r===k0)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===bf)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===xr)return s.HALF_FLOAT;if(r===V0)return s.ALPHA;if(r===H0)return s.RGB;if(r===Ui)return s.RGBA;if(r===vr)return s.DEPTH_COMPONENT;if(r===Ss)return s.DEPTH_STENCIL;if(r===G0)return s.RED;if(r===Cf)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===Rf)return s.RG_INTEGER;if(r===Nf)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===Yl||r===$l)if(u===Qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===zd||r===Vd||r===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===jd||r===Wd||r===Xd||r===Yd||r===Kl||r===$d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===jd)return u===Qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xd)return l.COMPRESSED_R11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return u===Qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===Zl||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const TE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new J0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ji({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Ts{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,m=null,v=null,S=null,x=null,M=null,A=null;const I=typeof XRWebGLBinding<"u",y=new CE,_={},D=n.getContextAttributes();let R=null,N=null;const z=[],P=[],F=new bt;let w=null;const L=new Si;L.viewport=new mn;const W=new Si;W.viewport=new mn;const V=[L,W],q=new B_;let ee=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Te=z[he];return Te===void 0&&(Te=new Qu,z[he]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(he){let Te=z[he];return Te===void 0&&(Te=new Qu,z[he]=Te),Te.getGripSpace()},this.getHand=function(he){let Te=z[he];return Te===void 0&&(Te=new Qu,z[he]=Te),Te.getHandSpace()};function X(he){const Te=P.indexOf(he.inputSource);if(Te===-1)return;const be=z[Te];be!==void 0&&(be.update(he.inputSource,he.frame,m||u),be.dispatchEvent({type:he.type,data:he.inputSource}))}function oe(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",K);for(let he=0;he<z.length;he++){const Te=P[he];Te!==null&&(P[he]=null,z[he].disconnect(Te))}ee=null,Se=null,y.reset();for(const he in _)delete _[he];e.setRenderTarget(R),M=null,x=null,S=null,o=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){l=he,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){f=he,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(he){m=he},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&I&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(he){if(o=he,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",K),D.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,et=null;D.depth&&(et=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=D.stencil?Ss:vr,Be=D.stencil?mo:Zi);const st={colorFormat:n.RGBA8,depthFormat:et,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(st),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new qi(x.textureWidth,x.textureHeight,{format:Ui,type:Mi,depthTexture:new xa(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new qi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(he){for(let Te=0;Te<he.removed.length;Te++){const be=he.removed[Te],Be=P.indexOf(be);Be>=0&&(P[Be]=null,z[Be].disconnect(be))}for(let Te=0;Te<he.added.length;Te++){const be=he.added[Te];let Be=P.indexOf(be);if(Be===-1){for(let st=0;st<z.length;st++)if(st>=P.length){P.push(be),Be=st;break}else if(P[st]===null){P[st]=be,Be=st;break}if(Be===-1)break}const et=z[Be];et&&et.connect(be)}}const Z=new te,Me=new te;function de(he,Te,be){Z.setFromMatrixPosition(Te.matrixWorld),Me.setFromMatrixPosition(be.matrixWorld);const Be=Z.distanceTo(Me),et=Te.projectionMatrix.elements,st=be.projectionMatrix.elements,mt=et[14]/(et[10]-1),pt=et[14]/(et[10]+1),kt=(et[9]+1)/et[5],Wt=(et[9]-1)/et[5],Mt=(et[8]-1)/et[0],Bt=(st[8]+1)/st[0],It=mt*Mt,Ht=mt*Bt,$=Be/(-Mt+Bt),St=$*-Mt;if(Te.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(St),he.translateZ($),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),et[10]===-1)he.projectionMatrix.copy(Te.projectionMatrix),he.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Ze=mt+$,gt=pt+$,He=It-St,Rt=Ht+(Be-St),U=kt*pt/gt*Ze,E=Wt*pt/gt*Ze;he.projectionMatrix.makePerspective(He,Rt,U,E,Ze,gt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function k(he,Te){Te===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Te.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(o===null)return;let Te=he.near,be=he.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(be=y.depthFar)),q.near=W.near=L.near=Te,q.far=W.far=L.far=be,(ee!==q.near||Se!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ee=q.near,Se=q.far),q.layers.mask=he.layers.mask|6,L.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const Be=he.parent,et=q.cameras;k(q,Be);for(let st=0;st<et.length;st++)k(et[st],Be);et.length===2?de(q,L,W):q.projectionMatrix.copy(L.projectionMatrix),le(he,q,Be)};function le(he,Te,be){be===null?he.matrix.copy(Te.matrixWorld):(he.matrix.copy(be.matrixWorld),he.matrix.invert(),he.matrix.multiply(Te.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Te.projectionMatrix),he.projectionMatrixInverse.copy(Te.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=xf*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(he){h=he,x!==null&&(x.fixedFoveation=he),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=he)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(he){return _[he]};let Xe=null;function Ye(he,Te){if(v=Te.getViewerPose(m||u),A=Te,v!==null){const be=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Be=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let pt=0;pt<be.length;pt++){const kt=be[pt];let Wt=null;if(M!==null)Wt=M.getViewport(kt);else{const Bt=S.getViewSubImage(x,kt);Wt=Bt.viewport,pt===0&&(e.setRenderTargetTextures(N,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(N))}let Mt=V[pt];Mt===void 0&&(Mt=new Si,Mt.layers.enable(pt),Mt.viewport=new mn,V[pt]=Mt),Mt.matrix.fromArray(kt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(kt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),pt===0&&(q.matrix.copy(Mt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(Mt)}const et=o.enabledFeatures;if(et&&et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&I){S=r.getBinding();const pt=S.getDepthInformation(be[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,o.renderState)}if(et&&et.includes("camera-access")&&I){e.state.unbindTexture(),S=r.getBinding();for(let pt=0;pt<be.length;pt++){const kt=be[pt].camera;if(kt){let Wt=_[kt];Wt||(Wt=new J0,_[kt]=Wt);const Mt=S.getCameraImage(kt);Wt.sourceTexture=Mt}}}}for(let be=0;be<z.length;be++){const Be=P[be],et=z[be];Be!==null&&et!==void 0&&et.update(Be,Te,m||u)}Xe&&Xe(he,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),A=null}const De=new sg;De.setAnimationLoop(Ye),this.setAnimationLoop=function(he){Xe=he},this.dispose=function(){}}}const NE=new _n,fg=new Ft;fg.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,ng(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,D,R,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,N)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),I(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,D,R):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ei&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ei&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),R=D.envMap,N=D.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(N)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(fg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=R*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ei&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function I(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function IE(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,R){const N=R.program;r.uniformBlockBinding(D,N)}function m(D,R){let N=o[D.id];N===void 0&&(A(D),N=v(D),o[D.id]=N,D.addEventListener("dispose",y));const z=R.program;r.updateUBOMapping(D,z);const P=e.render.frame;l[D.id]!==P&&(x(D),l[D.id]=P)}function v(D){const R=S();D.__bindingPointIndex=R;const N=s.createBuffer(),z=D.__size,P=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function S(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const R=o[D.id],N=D.uniforms,z=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let P=0,F=N.length;P<F;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let L=0,W=w.length;L<W;L++){const V=w[L];if(M(V,P,L,z)===!0){const q=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let Se=0;for(let X=0;X<ee.length;X++){const oe=ee[X],K=I(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,q+Se,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):ArrayBuffer.isView(oe)?V.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,V.__data.length)):(oe.toArray(V.__data,Se),Se+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,R,N,z){const P=D.value,F=R+"_"+N;if(z[F]===void 0)return typeof P=="number"||typeof P=="boolean"?z[F]=P:ArrayBuffer.isView(P)?z[F]=P.slice():z[F]=P.clone(),!0;{const w=z[F];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return z[F]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function A(D){const R=D.uniforms;let N=0;const z=16;for(let F=0,w=R.length;F<w;F++){const L=Array.isArray(R[F])?R[F]:[R[F]];for(let W=0,V=L.length;W<V;W++){const q=L[W],ee=Array.isArray(q.value)?q.value:[q.value];for(let Se=0,X=ee.length;Se<X;Se++){const oe=ee[Se],K=I(oe),Z=N%z,Me=Z%K.boundary,de=Z+Me;N+=Me,de!==0&&z-de<K.storage&&(N+=z-de),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=K.storage}}}const P=N%z;return P>0&&(N+=z-P),D.__size=N,D.__cache={},this}function I(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(R.boundary=16,R.storage=D.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",D),R}function y(D){const R=D.target;R.removeEventListener("dispose",y);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function LE(){return ji===null&&(ji=new d_(DE,16,16,ws,xr),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=pr,ji.wrapT=pr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class UE{constructor(e={}){const{canvas:n=Vv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Mi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const I=M,y=new Set([Nf,Rf,Cf]),_=new Set([Mi,Zi,po,mo,Tf,Af]),D=new Uint32Array(4),R=new Int32Array(4),N=new te;let z=null,P=null;const F=[],w=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let V=!1,q=null;this._outputColorSpace=yi;let ee=0,Se=0,X=null,oe=-1,K=null;const Z=new mn,Me=new mn;let de=null;const k=new en(0);let le=0,Xe=n.width,Ye=n.height,De=1,he=null,Te=null;const be=new mn(0,0,Xe,Ye),Be=new mn(0,0,Xe,Ye);let et=!1;const st=new K0;let mt=!1,pt=!1;const kt=new _n,Wt=new te,Mt=new mn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Ht(){return X===null?De:1}let $=r;function St(C,J){return n.getContext(C,J)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wf}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",$e,!1),n.addEventListener("webglcontextcreationerror",ft,!1),$===null){const J="webgl2";if($=St(J,C),$===null)throw St(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw qt("WebGLRenderer: "+C.message),C}let Ze,gt,He,Rt,U,E,re,j,se,ae,ce,ie,xe,ve,Le,Re,we,Ne,Ke,Je,G,Ae,ne;function Pe(){Ze=new L1($),Ze.init(),G=new bE($,Ze),gt=new T1($,Ze,e,G),He=new EE($,Ze),gt.reversedDepthBuffer&&x&&He.buffers.depth.setReversed(!0),Rt=new O1($),U=new cE,E=new wE($,Ze,He,U,gt,G,Rt),re=new D1(W),j=new V_($),Ae=new w1($,j),se=new U1($,j,Rt,Ae),ae=new B1($,se,j,Ae,Rt),Ne=new k1($,gt,E),Le=new A1(U),ce=new lE(W,re,Ze,gt,Ae,Le),ie=new PE(W,U),xe=new dE,ve=new xE(Ze),we=new E1(W,re,He,ae,A,h),Re=new ME(W,ae,gt),ne=new IE($,Rt,gt,He),Ke=new b1($,Ze,Rt),Je=new F1($,Ze,Rt),Rt.programs=ce.programs,W.capabilities=gt,W.extensions=Ze,W.properties=U,W.renderLists=xe,W.shadowMap=Re,W.state=He,W.info=Rt}Pe(),I!==Mi&&(L=new V1(I,n.width,n.height,o,l));const Ie=new RE(W,$);this.xr=Ie,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(C){C!==void 0&&(De=C,this.setSize(Xe,Ye,!1))},this.getSize=function(C){return C.set(Xe,Ye)},this.setSize=function(C,J,_e=!0){if(Ie.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=C,Ye=J,n.width=Math.floor(C*De),n.height=Math.floor(J*De),_e===!0&&(n.style.width=C+"px",n.style.height=J+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(Xe*De,Ye*De).floor()},this.setDrawingBufferSize=function(C,J,_e){Xe=C,Ye=J,De=_e,n.width=Math.floor(C*_e),n.height=Math.floor(J*_e),this.setViewport(0,0,C,J)},this.setEffects=function(C){if(I===Mi){qt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let J=0;J<C.length;J++)if(C[J].isOutputPass===!0){wt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,J,_e,me){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,J,_e,me),He.viewport(Z.copy(be).multiplyScalar(De).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,J,_e,me){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,J,_e,me),He.scissor(Me.copy(Be).multiplyScalar(De).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){He.setScissorTest(et=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,_e=!0){let me=0;if(C){let pe=!1;if(X!==null){const je=X.texture.format;pe=y.has(je)}if(pe){const je=X.texture.type,nt=_.has(je),We=we.getClearColor(),at=we.getClearAlpha(),ct=We.r,Tt=We.g,At=We.b;nt?(D[0]=ct,D[1]=Tt,D[2]=At,D[3]=at,$.clearBufferuiv($.COLOR,0,D)):(R[0]=ct,R[1]=Tt,R[2]=At,R[3]=at,$.clearBufferiv($.COLOR,0,R))}else me|=$.COLOR_BUFFER_BIT}J&&(me|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(me|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),me!==0&&$.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),we.dispose(),xe.dispose(),ve.dispose(),U.dispose(),re.dispose(),ae.dispose(),Ae.dispose(),ne.dispose(),ce.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Wn),Ie.removeEventListener("sessionend",Rn),Ei.stop()};function Ce(C){C.preventDefault(),Tm("WebGLRenderer: Context Lost."),V=!0}function $e(){Tm("WebGLRenderer: Context Restored."),V=!1;const C=Rt.autoReset,J=Re.enabled,_e=Re.autoUpdate,me=Re.needsUpdate,pe=Re.type;Pe(),Rt.autoReset=C,Re.enabled=J,Re.autoUpdate=_e,Re.needsUpdate=me,Re.type=pe}function ft(C){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nt(C){const J=C.target;J.removeEventListener("dispose",Nt),Pt(J)}function Pt(C){an(C),U.remove(C)}function an(C){const J=U.get(C).programs;J!==void 0&&(J.forEach(function(_e){ce.releaseProgram(_e)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,_e,me,pe,je){J===null&&(J=Bt);const nt=pe.isMesh&&pe.matrixWorld.determinant()<0,We=Jr(C,J,_e,me,pe);He.setMaterial(me,nt);let at=_e.index,ct=1;if(me.wireframe===!0){if(at=se.getWireframeAttribute(_e),at===void 0)return;ct=2}const Tt=_e.drawRange,At=_e.attributes.position;let ot=Tt.start*ct,b=(Tt.start+Tt.count)*ct;je!==null&&(ot=Math.max(ot,je.start*ct),b=Math.min(b,(je.start+je.count)*ct)),at!==null?(ot=Math.max(ot,0),b=Math.min(b,at.count)):At!=null&&(ot=Math.max(ot,0),b=Math.min(b,At.count));const H=b-ot;if(H<0||H===1/0)return;Ae.setup(pe,me,We,_e,at);let O,ue=Ke;if(at!==null&&(O=j.get(at),ue=Je,ue.setIndex(O)),pe.isMesh)me.wireframe===!0?(He.setLineWidth(me.wireframeLinewidth*Ht()),ue.setMode($.LINES)):ue.setMode($.TRIANGLES);else if(pe.isLine){let Ue=me.linewidth;Ue===void 0&&(Ue=1),He.setLineWidth(Ue*Ht()),pe.isLineSegments?ue.setMode($.LINES):pe.isLineLoop?ue.setMode($.LINE_LOOP):ue.setMode($.LINE_STRIP)}else pe.isPoints?ue.setMode($.POINTS):pe.isSprite&&ue.setMode($.TRIANGLES);if(pe.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ue.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Ue=pe._multiDrawStarts,ye=pe._multiDrawCounts,Ve=pe._multiDrawCount,qe=at?j.get(at).bytesPerElement:1,Gt=U.get(me).currentProgram.getUniforms();for(let xt=0;xt<Ve;xt++)Gt.setValue($,"_gl_DrawID",xt),ue.render(Ue[xt]/qe,ye[xt])}else if(pe.isInstancedMesh)ue.renderInstances(ot,H,pe.count);else if(_e.isInstancedBufferGeometry){const Ue=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,ye=Math.min(_e.instanceCount,Ue);ue.renderInstances(ot,H,ye)}else ue.render(ot,H)};function tn(C,J,_e){C.transparent===!0&&C.side===hr&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,Mr(C,J,_e),C.side=qr,C.needsUpdate=!0,Mr(C,J,_e),C.side=hr):Mr(C,J,_e)}this.compile=function(C,J,_e=null){_e===null&&(_e=C),P=ve.get(_e),P.init(J),w.push(P),_e.traverseVisible(function(pe){pe.isLight&&pe.layers.test(J.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),C!==_e&&C.traverseVisible(function(pe){pe.isLight&&pe.layers.test(J.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),P.setupLights();const me=new Set;return C.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const je=pe.material;if(je)if(Array.isArray(je))for(let nt=0;nt<je.length;nt++){const We=je[nt];tn(We,_e,pe),me.add(We)}else tn(je,_e,pe),me.add(je)}),P=w.pop(),me},this.compileAsync=function(C,J,_e=null){const me=this.compile(C,J,_e);return new Promise(pe=>{function je(){if(me.forEach(function(nt){U.get(nt).currentProgram.isReady()&&me.delete(nt)}),me.size===0){pe(C);return}setTimeout(je,10)}Ze.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let dn=null;function jn(C){dn&&dn(C)}function Wn(){Ei.stop()}function Rn(){Ei.start()}const Ei=new sg;Ei.setAnimationLoop(jn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){dn=C,Ie.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},Ie.addEventListener("sessionstart",Wn),Ie.addEventListener("sessionend",Rn),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(C,J);const _e=Ie.enabled===!0&&Ie.isPresenting===!0,me=L!==null&&(X===null||_e)&&L.begin(W,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(J),J=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,J,X),P=ve.get(C,w.length),P.init(J),P.state.textureUnits=E.getTextureUnits(),w.push(P),kt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),st.setFromProjectionMatrix(kt,Yi,J.reversedDepth),pt=this.localClippingEnabled,mt=Le.init(this.clippingPlanes,pt),z=xe.get(C,F.length),z.init(),F.push(z),Ie.enabled===!0&&Ie.isPresenting===!0){const nt=W.xr.getDepthSensingMesh();nt!==null&&yr(nt,J,-1/0,W.sortObjects)}yr(C,J,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(he,Te),It=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,It&&we.addToRenderList(z,C),this.info.render.frame++,mt===!0&&Le.beginShadows();const pe=P.state.shadowsArray;if(Re.render(pe,C,J),mt===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(me&&L.hasRenderPass())===!1){const nt=z.opaque,We=z.transmissive;if(P.setupLights(),J.isArrayCamera){const at=J.cameras;if(We.length>0)for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct];ni(nt,We,C,At)}It&&we.render(C);for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct];As(z,C,At,At.viewport)}}else We.length>0&&ni(nt,We,C,J),It&&we.render(C),As(z,C,J)}X!==null&&Se===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),me&&L.end(W),C.isScene===!0&&C.onAfterRender(W,C,J),Ae.resetDefaultState(),oe=-1,K=null,w.pop(),w.length>0?(P=w[w.length-1],E.setTextureUnits(P.state.textureUnits),mt===!0&&Le.setGlobalState(W.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?z=F[F.length-1]:z=null,q!==null&&q.renderEnd()};function yr(C,J,_e,me){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)_e=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){me&&Mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(kt);const nt=ae.update(C),We=C.material;We.visible&&z.push(C,nt,We,_e,Mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const nt=ae.update(C),We=C.material;if(me&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Mt.copy(C.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Mt.copy(nt.boundingSphere.center)),Mt.applyMatrix4(C.matrixWorld).applyMatrix4(kt)),Array.isArray(We)){const at=nt.groups;for(let ct=0,Tt=at.length;ct<Tt;ct++){const At=at[ct],ot=We[At.materialIndex];ot&&ot.visible&&z.push(C,nt,ot,_e,Mt.z,At)}}else We.visible&&z.push(C,nt,We,_e,Mt.z,null)}}const je=C.children;for(let nt=0,We=je.length;nt<We;nt++)yr(je[nt],J,_e,me)}function As(C,J,_e,me){const{opaque:pe,transmissive:je,transparent:nt}=C;P.setupLightsView(_e),mt===!0&&Le.setGlobalState(W.clippingPlanes,_e),me&&He.viewport(Z.copy(me)),pe.length>0&&Fi(pe,J,_e),je.length>0&&Fi(je,J,_e),nt.length>0&&Fi(nt,J,_e),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ni(C,J,_e,me){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[me.id]===void 0){const ot=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[me.id]=new qi(1,1,{generateMipmaps:!0,type:ot?xr:Mi,minFilter:ys,samples:Math.max(4,gt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const je=P.state.transmissionRenderTarget[me.id],nt=me.viewport||Z;je.setSize(nt.z*W.transmissionResolutionScale,nt.w*W.transmissionResolutionScale);const We=W.getRenderTarget(),at=W.getActiveCubeFace(),ct=W.getActiveMipmapLevel();W.setRenderTarget(je),W.getClearColor(k),le=W.getClearAlpha(),le<1&&W.setClearColor(16777215,.5),W.clear(),It&&we.render(_e);const Tt=W.toneMapping;W.toneMapping=$i;const At=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),P.setupLightsView(me),mt===!0&&Le.setGlobalState(W.clippingPlanes,me),Fi(C,_e,me),E.updateMultisampleRenderTarget(je),E.updateRenderTargetMipmap(je),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let b=0,H=J.length;b<H;b++){const O=J[b],{object:ue,geometry:Ue,material:ye,group:Ve}=O;if(ye.side===hr&&ue.layers.test(me.layers)){const qe=ye.side;ye.side=ei,ye.needsUpdate=!0,Sr(ue,_e,me,Ue,ye,Ve),ye.side=qe,ye.needsUpdate=!0,ot=!0}}ot===!0&&(E.updateMultisampleRenderTarget(je),E.updateRenderTargetMipmap(je))}W.setRenderTarget(We,at,ct),W.setClearColor(k,le),At!==void 0&&(me.viewport=At),W.toneMapping=Tt}function Fi(C,J,_e){const me=J.isScene===!0?J.overrideMaterial:null;for(let pe=0,je=C.length;pe<je;pe++){const nt=C[pe],{object:We,geometry:at,group:ct}=nt;let Tt=nt.material;Tt.allowOverride===!0&&me!==null&&(Tt=me),We.layers.test(_e.layers)&&Sr(We,J,_e,at,Tt,ct)}}function Sr(C,J,_e,me,pe,je){C.onBeforeRender(W,J,_e,me,pe,je),C.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),pe.onBeforeRender(W,J,_e,me,C,je),pe.transparent===!0&&pe.side===hr&&pe.forceSinglePass===!1?(pe.side=ei,pe.needsUpdate=!0,W.renderBufferDirect(_e,J,me,pe,C,je),pe.side=qr,pe.needsUpdate=!0,W.renderBufferDirect(_e,J,me,pe,C,je),pe.side=hr):W.renderBufferDirect(_e,J,me,pe,C,je),C.onAfterRender(W,J,_e,me,pe,je)}function Mr(C,J,_e){J.isScene!==!0&&(J=Bt);const me=U.get(C),pe=P.state.lights,je=P.state.shadowsArray,nt=pe.state.version,We=ce.getParameters(C,pe.state,je,J,_e,P.state.lightProbeGridArray),at=ce.getProgramCacheKey(We);let ct=me.programs;me.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?J.environment:null,me.fog=J.fog;const Tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;me.envMap=re.get(C.envMap||me.environment,Tt),me.envMapRotation=me.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",Nt),ct=new Map,me.programs=ct);let At=ct.get(at);if(At!==void 0){if(me.currentProgram===At&&me.lightsStateVersion===nt)return Zr(C,We),At}else We.uniforms=ce.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,_e,We),C.onBeforeCompile(We,W),At=ce.acquireProgram(We,at),ct.set(at,At),me.uniforms=We.uniforms;const ot=me.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ot.clippingPlanes=Le.uniform),Zr(C,We),me.needsLights=Jt(C),me.lightsStateVersion=nt,me.needsLights&&(ot.ambientLightColor.value=pe.state.ambient,ot.lightProbe.value=pe.state.probe,ot.directionalLights.value=pe.state.directional,ot.directionalLightShadows.value=pe.state.directionalShadow,ot.spotLights.value=pe.state.spot,ot.spotLightShadows.value=pe.state.spotShadow,ot.rectAreaLights.value=pe.state.rectArea,ot.ltc_1.value=pe.state.rectAreaLTC1,ot.ltc_2.value=pe.state.rectAreaLTC2,ot.pointLights.value=pe.state.point,ot.pointLightShadows.value=pe.state.pointShadow,ot.hemisphereLights.value=pe.state.hemi,ot.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ot.spotLightMatrix.value=pe.state.spotLightMatrix,ot.spotLightMap.value=pe.state.spotLightMap,ot.pointShadowMatrix.value=pe.state.pointShadowMatrix),me.lightProbeGrid=P.state.lightProbeGridArray.length>0,me.currentProgram=At,me.uniformsList=null,At}function Kr(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=ql.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Zr(C,J){const _e=U.get(C);_e.outputColorSpace=J.outputColorSpace,_e.batching=J.batching,_e.batchingColor=J.batchingColor,_e.instancing=J.instancing,_e.instancingColor=J.instancingColor,_e.instancingMorph=J.instancingMorph,_e.skinning=J.skinning,_e.morphTargets=J.morphTargets,_e.morphNormals=J.morphNormals,_e.morphColors=J.morphColors,_e.morphTargetsCount=J.morphTargetsCount,_e.numClippingPlanes=J.numClippingPlanes,_e.numIntersection=J.numClipIntersection,_e.vertexAlphas=J.vertexAlphas,_e.vertexTangents=J.vertexTangents,_e.toneMapping=J.toneMapping}function Cs(C,J){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(J.matrixWorld);for(let _e=0,me=C.length;_e<me;_e++){const pe=C[_e];if(pe.texture!==null&&pe.boundingBox.containsPoint(N))return pe}return null}function Jr(C,J,_e,me,pe){J.isScene!==!0&&(J=Bt),E.resetTextureUnits();const je=J.fog,nt=me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial?J.environment:null,We=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yt.workingColorSpace,at=me.isMeshStandardMaterial||me.isMeshLambertMaterial&&!me.envMap||me.isMeshPhongMaterial&&!me.envMap,ct=re.get(me.envMap||nt,at),Tt=me.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,At=!!_e.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),ot=!!_e.morphAttributes.position,b=!!_e.morphAttributes.normal,H=!!_e.morphAttributes.color;let O=$i;me.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(O=W.toneMapping);const ue=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Ue=ue!==void 0?ue.length:0,ye=U.get(me),Ve=P.state.lights;if(mt===!0&&(pt===!0||C!==K)){const Et=C===K&&me.id===oe;Le.setState(me,C,Et)}let qe=!1;me.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ve.state.version||ye.outputColorSpace!==We||pe.isBatchedMesh&&ye.batching===!1||!pe.isBatchedMesh&&ye.batching===!0||pe.isBatchedMesh&&ye.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&ye.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&ye.instancing===!1||!pe.isInstancedMesh&&ye.instancing===!0||pe.isSkinnedMesh&&ye.skinning===!1||!pe.isSkinnedMesh&&ye.skinning===!0||pe.isInstancedMesh&&ye.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&ye.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&ye.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&ye.instancingMorph===!1&&pe.morphTexture!==null||ye.envMap!==ct||me.fog===!0&&ye.fog!==je||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Le.numPlanes||ye.numIntersection!==Le.numIntersection)||ye.vertexAlphas!==Tt||ye.vertexTangents!==At||ye.morphTargets!==ot||ye.morphNormals!==b||ye.morphColors!==H||ye.toneMapping!==O||ye.morphTargetsCount!==Ue||!!ye.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ye.__version=me.version);let Gt=ye.currentProgram;qe===!0&&(Gt=Mr(me,J,pe),q&&me.isNodeMaterial&&q.onUpdateProgram(me,Gt,ye));let xt=!1,ut=!1,Dt=!1;const vt=Gt.getUniforms(),Lt=ye.uniforms;if(He.useProgram(Gt.program)&&(xt=!0,ut=!0,Dt=!0),me.id!==oe&&(oe=me.id,ut=!0),ye.needsLights){const Et=Cs(P.state.lightProbeGridArray,pe);ye.lightProbeGrid!==Et&&(ye.lightProbeGrid=Et,ut=!0)}if(xt||K!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue($,"projectionMatrix",C.projectionMatrix),vt.setValue($,"viewMatrix",C.matrixWorldInverse);const yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue($,Wt.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&vt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&vt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,ut=!0,Dt=!0)}if(ye.needsLights&&(Ve.state.directionalShadowMap.length>0&&vt.setValue($,"directionalShadowMap",Ve.state.directionalShadowMap,E),Ve.state.spotShadowMap.length>0&&vt.setValue($,"spotShadowMap",Ve.state.spotShadowMap,E),Ve.state.pointShadowMap.length>0&&vt.setValue($,"pointShadowMap",Ve.state.pointShadowMap,E)),pe.isSkinnedMesh){vt.setOptional($,pe,"bindMatrix"),vt.setOptional($,pe,"bindMatrixInverse");const Et=pe.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),vt.setValue($,"boneTexture",Et.boneTexture,E))}pe.isBatchedMesh&&(vt.setOptional($,pe,"batchingTexture"),vt.setValue($,"batchingTexture",pe._matricesTexture,E),vt.setOptional($,pe,"batchingIdTexture"),vt.setValue($,"batchingIdTexture",pe._indirectTexture,E),vt.setOptional($,pe,"batchingColorTexture"),pe._colorsTexture!==null&&vt.setValue($,"batchingColorTexture",pe._colorsTexture,E));const on=_e.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ne.update(pe,_e,Gt),(ut||ye.receiveShadow!==pe.receiveShadow)&&(ye.receiveShadow=pe.receiveShadow,vt.setValue($,"receiveShadow",pe.receiveShadow)),(me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial)&&me.envMap===null&&J.environment!==null&&(Lt.envMapIntensity.value=J.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=LE()),ut){if(vt.setValue($,"toneMappingExposure",W.toneMappingExposure),ye.needsLights&&Oi(Lt,Dt),je&&me.fog===!0&&ie.refreshFogUniforms(Lt,je),ie.refreshMaterialUniforms(Lt,me,De,Ye,P.state.transmissionRenderTarget[C.id]),ye.needsLights&&ye.lightProbeGrid){const Et=ye.lightProbeGrid;Lt.probesSH.value=Et.texture,Lt.probesMin.value.copy(Et.boundingBox.min),Lt.probesMax.value.copy(Et.boundingBox.max),Lt.probesResolution.value.copy(Et.resolution)}ql.upload($,Kr(ye),Lt,E)}if(me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(ql.upload($,Kr(ye),Lt,E),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&vt.setValue($,"center",pe.center),vt.setValue($,"modelViewMatrix",pe.modelViewMatrix),vt.setValue($,"normalMatrix",pe.normalMatrix),vt.setValue($,"modelMatrix",pe.matrixWorld),me.uniformsGroups!==void 0){const Et=me.uniformsGroups;for(let yn=0,tt=Et.length;yn<tt;yn++){const Ut=Et[yn];ne.update(Ut,Gt),ne.bind(Ut,Gt)}}return Gt}function Oi(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Jt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return Se},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,J,_e){const me=U.get(C);me.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),U.get(C.texture).__webglTexture=J,U.get(C.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:_e,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){const _e=U.get(C);_e.__webglFramebuffer=J,_e.__useDefaultFramebuffer=J===void 0};const Xt=$.createFramebuffer();this.setRenderTarget=function(C,J=0,_e=0){X=C,ee=J,Se=_e;let me=null,pe=!1,je=!1;if(C){const We=U.get(C);if(We.__useDefaultFramebuffer!==void 0){He.bindFramebuffer($.FRAMEBUFFER,We.__webglFramebuffer),Z.copy(C.viewport),Me.copy(C.scissor),de=C.scissorTest,He.viewport(Z),He.scissor(Me),He.setScissorTest(de),oe=-1;return}else if(We.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(We.__hasExternalTextures)E.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Tt=C.depthTexture;if(We.__boundDepthTexture!==Tt){if(Tt!==null&&U.has(Tt)&&(C.width!==Tt.image.width||C.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(je=!0);const ct=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?me=ct[J][_e]:me=ct[J],pe=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?me=U.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?me=ct[_e]:me=ct,Z.copy(C.viewport),Me.copy(C.scissor),de=C.scissorTest}else Z.copy(be).multiplyScalar(De).floor(),Me.copy(Be).multiplyScalar(De).floor(),de=et;if(_e!==0&&(me=Xt),He.bindFramebuffer($.FRAMEBUFFER,me)&&He.drawBuffers(C,me),He.viewport(Z),He.scissor(Me),He.setScissorTest(de),pe){const We=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,_e)}else if(je){const We=J;for(let at=0;at<C.textures.length;at++){const ct=U.get(C.textures[at]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+at,ct.__webglTexture,_e,We)}}else if(C!==null&&_e!==0){const We=U.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,We.__webglTexture,_e)}oe=-1},this.readRenderTargetPixels=function(C,J,_e,me,pe,je,nt,We=0){if(!(C&&C.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){He.bindFramebuffer($.FRAMEBUFFER,at);try{const ct=C.textures[We],Tt=ct.format,At=ct.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+We),!gt.textureFormatReadable(Tt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(At)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-me&&_e>=0&&_e<=C.height-pe&&$.readPixels(J,_e,me,pe,G.convert(Tt),G.convert(At),je)}finally{const ct=X!==null?U.get(X).__webglFramebuffer:null;He.bindFramebuffer($.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(C,J,_e,me,pe,je,nt,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at)if(J>=0&&J<=C.width-me&&_e>=0&&_e<=C.height-pe){He.bindFramebuffer($.FRAMEBUFFER,at);const ct=C.textures[We],Tt=ct.format,At=ct.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+We),!gt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ot),$.bufferData($.PIXEL_PACK_BUFFER,je.byteLength,$.STREAM_READ),$.readPixels(J,_e,me,pe,G.convert(Tt),G.convert(At),0);const b=X!==null?U.get(X).__webglFramebuffer:null;He.bindFramebuffer($.FRAMEBUFFER,b);const H=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Hv($,H,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ot),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,je),$.deleteBuffer(ot),$.deleteSync(H),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,_e=0){const me=Math.pow(2,-_e),pe=Math.floor(C.image.width*me),je=Math.floor(C.image.height*me),nt=J!==null?J.x:0,We=J!==null?J.y:0;E.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,_e,0,0,nt,We,pe,je),He.unbindTexture()};const Qr=$.createFramebuffer(),Qi=$.createFramebuffer();this.copyTextureToTexture=function(C,J,_e=null,me=null,pe=0,je=0){let nt,We,at,ct,Tt,At,ot,b,H;const O=C.isCompressedTexture?C.mipmaps[je]:C.image;if(_e!==null)nt=_e.max.x-_e.min.x,We=_e.max.y-_e.min.y,at=_e.isBox3?_e.max.z-_e.min.z:1,ct=_e.min.x,Tt=_e.min.y,At=_e.isBox3?_e.min.z:0;else{const Lt=Math.pow(2,-pe);nt=Math.floor(O.width*Lt),We=Math.floor(O.height*Lt),C.isDataArrayTexture?at=O.depth:C.isData3DTexture?at=Math.floor(O.depth*Lt):at=1,ct=0,Tt=0,At=0}me!==null?(ot=me.x,b=me.y,H=me.z):(ot=0,b=0,H=0);const ue=G.convert(J.format),Ue=G.convert(J.type);let ye;J.isData3DTexture?(E.setTexture3D(J,0),ye=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(E.setTexture2DArray(J,0),ye=$.TEXTURE_2D_ARRAY):(E.setTexture2D(J,0),ye=$.TEXTURE_2D),He.activeTexture($.TEXTURE0),He.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),He.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),He.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const Ve=He.getParameter($.UNPACK_ROW_LENGTH),qe=He.getParameter($.UNPACK_IMAGE_HEIGHT),Gt=He.getParameter($.UNPACK_SKIP_PIXELS),xt=He.getParameter($.UNPACK_SKIP_ROWS),ut=He.getParameter($.UNPACK_SKIP_IMAGES);He.pixelStorei($.UNPACK_ROW_LENGTH,O.width),He.pixelStorei($.UNPACK_IMAGE_HEIGHT,O.height),He.pixelStorei($.UNPACK_SKIP_PIXELS,ct),He.pixelStorei($.UNPACK_SKIP_ROWS,Tt),He.pixelStorei($.UNPACK_SKIP_IMAGES,At);const Dt=C.isDataArrayTexture||C.isData3DTexture,vt=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const Lt=U.get(C),on=U.get(J),Et=U.get(Lt.__renderTarget),yn=U.get(on.__renderTarget);He.bindFramebuffer($.READ_FRAMEBUFFER,Et.__webglFramebuffer),He.bindFramebuffer($.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let tt=0;tt<at;tt++)Dt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(C).__webglTexture,pe,At+tt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,U.get(J).__webglTexture,je,H+tt)),$.blitFramebuffer(ct,Tt,nt,We,ot,b,nt,We,$.DEPTH_BUFFER_BIT,$.NEAREST);He.bindFramebuffer($.READ_FRAMEBUFFER,null),He.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(pe!==0||C.isRenderTargetTexture||U.has(C)){const Lt=U.get(C),on=U.get(J);He.bindFramebuffer($.READ_FRAMEBUFFER,Qr),He.bindFramebuffer($.DRAW_FRAMEBUFFER,Qi);for(let Et=0;Et<at;Et++)Dt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Lt.__webglTexture,pe,At+Et):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Lt.__webglTexture,pe),vt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,je,H+Et):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,je),pe!==0?$.blitFramebuffer(ct,Tt,nt,We,ot,b,nt,We,$.COLOR_BUFFER_BIT,$.NEAREST):vt?$.copyTexSubImage3D(ye,je,ot,b,H+Et,ct,Tt,nt,We):$.copyTexSubImage2D(ye,je,ot,b,ct,Tt,nt,We);He.bindFramebuffer($.READ_FRAMEBUFFER,null),He.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else vt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(ye,je,ot,b,H,nt,We,at,ue,Ue,O.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(ye,je,ot,b,H,nt,We,at,ue,O.data):$.texSubImage3D(ye,je,ot,b,H,nt,We,at,ue,Ue,O):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,je,ot,b,nt,We,ue,Ue,O.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,je,ot,b,O.width,O.height,ue,O.data):$.texSubImage2D($.TEXTURE_2D,je,ot,b,nt,We,ue,Ue,O);He.pixelStorei($.UNPACK_ROW_LENGTH,Ve),He.pixelStorei($.UNPACK_IMAGE_HEIGHT,qe),He.pixelStorei($.UNPACK_SKIP_PIXELS,Gt),He.pixelStorei($.UNPACK_SKIP_ROWS,xt),He.pixelStorei($.UNPACK_SKIP_IMAGES,ut),je===0&&J.generateMipmaps&&$.generateMipmap(ye),He.unbindTexture()},this.initRenderTarget=function(C){U.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){ee=0,Se=0,X=null,He.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Yt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Fe.createElement("svg",{ref:h,...OE,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:hg("lucide",o),...f},[...u.map(([m,v])=>Fe.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(s,e)=>{const n=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(kE,{ref:l,iconNode:e,className:hg(`lucide-${FE(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Ot("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
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
 */const yf=Ot("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Ot("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Ot("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Ot("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
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
 */const y0=Ot("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
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
 */const S0=Ot("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
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
 */const M0=Ot("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
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
 */const E0=Ot("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Ot("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Ot("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=Ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Ot("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
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
 */const gs=Ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Ot("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Ot("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),w0=(s,e,n)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),n(u.toDataURL("image/jpeg",.7))},r.onerror=()=>n(s),r.src=s},aw=({direction:s,className:e})=>{const r={none:M0,up:XE,down:VE,left:HE,right:GE,"up-left":jE,"up-right":WE,"down-left":BE,"down-right":zE}[s]||M0;return g.jsx(r,{className:e})},vi=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const n=parseInt(e);return isNaN(n)?0:n},Xr=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},_i=s=>JSON.parse(JSON.stringify(s)),b0=(s,e,n,r=1)=>{if(!s||s.length<2)return null;const o=new eg(s),l=new Bf(o,Math.max(8,s.length*12),e,12,!1),u=new Ms({color:n,transparent:r<1,opacity:r});return new ti(l,u)},ow=(s,e)=>{const n=new te().subVectors(e,s);if(n.length()<.001)return null;const r=new ti(new Ff(.09,.24,24),new Ms({color:16777215}));return r.position.copy(e),r.position.y+=.02,r.quaternion.setFromUnitVectors(new te(0,1,0),n.normalize()),r},fa=(s="新導引專案")=>({projectName:s,lerpFactor:15}),co=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],lw=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:fa(s),buildings:co()}),Hl=s=>{var e,n,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((n=s==null?void 0:s.project)==null?void 0:n.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{...fa(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}};function cw({embedded:s=!1,initialTab:e="map",publicOnly:n=!1}){var ct,Tt,At,ot;const[r,o]=Fe.useState(e),[l,u]=Fe.useState(!1),[f,h]=Fe.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[m,v]=Fe.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[S,x]=Fe.useState({isOpen:!1,message:""}),[M,A]=Fe.useState(!1),[I,y]=Fe.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),_=Fe.useRef(!1),[D,R]=Fe.useState(()=>{if(n)return[Hl({})];try{const O=localStorage.getItem("arManager_projects");if(O){const ue=JSON.parse(O);if(Array.isArray(ue)&&ue.length>0)return ue}}catch(O){console.error("Project load error:",O)}let b=fa("預設導引專案"),H=co();try{const O=localStorage.getItem("arManager_config");O&&(b={...b,...JSON.parse(O)});const ue=localStorage.getItem("arManager_buildings");ue&&(H=JSON.parse(ue))}catch(O){console.error("Legacy AR data migration error:",O)}return[{id:`project_${Date.now()}`,name:b.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:b,buildings:H}]}),[N,z]=Fe.useState((ct=D[0])==null?void 0:ct.id),P=D.find(b=>b.id===N)||D[0],[F,w]=Fe.useState(()=>_i((P==null?void 0:P.systemConfig)||fa())),[L,W]=Fe.useState(()=>_i((P==null?void 0:P.buildings)||co())),[V,q]=Fe.useState((Tt=L[0])==null?void 0:Tt.id),[ee,Se]=Fe.useState((ot=(At=L[0])==null?void 0:At.floors[0])==null?void 0:ot.id),[X,oe]=Fe.useState(""),[K,Z]=Fe.useState(null),[Me,de]=Fe.useState(null),[k,le]=Fe.useState(null),[Xe,Ye]=Fe.useState(!1),[De,he]=Fe.useState(!1),[Te,be]=Fe.useState(!1),[Be,et]=Fe.useState(null),[st,mt]=Fe.useState(null),[pt,kt]=Fe.useState(!1),[Wt,Mt]=Fe.useState({x:0,y:0}),[Bt,It]=Fe.useState({x:0,y:0}),[Ht,$]=Fe.useState(!1),[St,Ze]=Fe.useState(!1),[gt,He]=Fe.useState([]),[Rt,U]=Fe.useState(!1),[E,re]=Fe.useState([]),[j,se]=Fe.useState([]),ae=Fe.useRef(null),ce=Fe.useRef(null),ie=Fe.useRef(null),xe=Fe.useRef(null),[ve,Le]=Fe.useState({x:0,y:0,scale:1});Fe.useEffect(()=>{const b=H=>{var ue;const O=(ue=H==null?void 0:H.detail)==null?void 0:ue.tab;["map","list","settings","export"].includes(O)&&Oi(O)};return window.addEventListener("ar-manager:set-tab",b),()=>window.removeEventListener("ar-manager:set-tab",b)},[]),Fe.useEffect(()=>{if(!n)try{localStorage.setItem("arManager_projects",JSON.stringify(D))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[D,n]),Fe.useEffect(()=>{if(!n)return;let b=!1;return(async()=>{const O=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(O.ok)return O.json();const ue=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!ue.ok)throw new Error(`Unable to load AR data: ${ue.status}`);return ue.json()})().then(O=>{var Ue,ye,Ve;if(b)return;const ue=Hl(O);R([ue]),z(ue.id),w(_i(ue.systemConfig)),W(_i(ue.buildings)),q((Ue=ue.buildings[0])==null?void 0:Ue.id),Se((Ve=(ye=ue.buildings[0])==null?void 0:ye.floors[0])==null?void 0:Ve.id)}).catch(O=>{console.warn("Published AR data unavailable",O),b||(R([Hl({})]),w(fa("AR導覽")),W([]))}),()=>{b=!0}},[n]),Fe.useEffect(()=>{if(n||localStorage.getItem("arManager_projects"))return;let b=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(H=>{if(!H.ok)throw new Error(`Unable to load AR data: ${H.status}`);return H.json()}).then(H=>{var ue,Ue,ye;if(b||!Array.isArray(H==null?void 0:H.buildings)||H.buildings.length===0)return;const O=Hl(H);R([O]),z(O.id),w(_i(O.systemConfig)),W(_i(O.buildings)),q((ue=O.buildings[0])==null?void 0:ue.id),Se((ye=(Ue=O.buildings[0])==null?void 0:Ue.floors[0])==null?void 0:ye.id)}).catch(H=>console.warn("Published AR admin seed unavailable",H)),()=>{b=!0}},[n]),Fe.useEffect(()=>{var H,O,ue;if(n||!P)return;_.current=!0;const b=_i(P.buildings||co());w(_i(P.systemConfig||fa(P.name))),W(b),q((H=b[0])==null?void 0:H.id),Se((ue=(O=b[0])==null?void 0:O.floors[0])==null?void 0:ue.id),Z(null),de(null),oe(""),Le({x:0,y:0,scale:1})},[N,n]),Fe.useEffect(()=>{if(!n&&N){if(_.current){_.current=!1;return}R(b=>b.map(H=>H.id===N?{...H,name:F.projectName||H.name,systemConfig:_i(F),buildings:_i(L),updatedAt:new Date().toISOString()}:H))}},[N,L,F,n]),Fe.useEffect(()=>{if(!n)try{localStorage.setItem("arManager_buildings",JSON.stringify(L))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[L,n]),Fe.useEffect(()=>{if(!n)try{localStorage.setItem("arManager_config",JSON.stringify(F))}catch(b){console.error("Config save error:",b)}},[F,n]),Fe.useEffect(()=>{var H;const b=L.find(O=>O.id===V);b?b.floors.find(O=>O.id===ee)||b.floors.length>0&&Se(b.floors[0].id):L.length>0&&(q(L[0].id),Se((H=L[0].floors[0])==null?void 0:H.id))},[L,V,ee]),Fe.useEffect(()=>{X===ee&&oe("")},[ee,X]),Fe.useEffect(()=>{Ye(!1)},[K,Me]),Fe.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||A(!0)},[]);const Re=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(H=>H.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),A(!1)},we=L.find(b=>b.id===V)||L[0],Ne=we==null?void 0:we.floors.find(b=>b.id===ee),Ke=(Ne==null?void 0:Ne.markers)||[],Je=(Ne==null?void 0:Ne.waypoints)||[],G=(Ne==null?void 0:Ne.edges)||[],Ae=Xr(Ne),ne=(b,H,O=!0)=>{W(ue=>{let Ue=null,ye=null,Ve=null;if(ue.forEach(Dt=>Dt.floors.forEach(vt=>{const Lt=O?vt.markers:vt.waypoints,on=Lt==null?void 0:Lt.find(Et=>Et.id===b);on&&(Ue=on,ye=Dt.id,Ve=vt)})),!Ue)return ue;const qe=H.shaftId!==void 0?H.shaftId:Ue.shaftId,xt=(H.isVerticalShaft!==void 0?H.isVerticalShaft:Ue.isVerticalShaft)&&qe,ut=Xr(Ve);return ue.map(Dt=>Dt.id!==ye&&!xt?Dt:{...Dt,floors:Dt.floors.map(vt=>{let Lt=O?[...vt.markers||[]]:[...vt.waypoints||[]];const on=Et=>{const yn={...Et,...H};if((H.x!==void 0||H.y!==void 0)&&vt.id!==Ve.id){const tt=Xr(vt);if(H.x!==void 0){const Ut=ut.blX+H.x*(ut.trX-ut.blX);yn.x=tt.trX!==tt.blX?(Ut-tt.blX)/(tt.trX-tt.blX):.5}if(H.y!==void 0){const Ut=ut.trY-H.y*(ut.trY-ut.blY);yn.y=tt.trY!==tt.blY?(tt.trY-Ut)/(tt.trY-tt.blY):.5}}return yn};return xt?Lt=Lt.map(Et=>Et.shaftId===qe||Et.id===b?on(Et):Et):Lt=Lt.map(Et=>Et.id===b?on(Et):Et),O?{...vt,markers:Lt}:{...vt,waypoints:Lt}})})})},Pe=(b,H,O)=>ne(b,{[H]:O},!0),Ie=(b,H,O)=>ne(b,{[H]:O},!1),Ce=(b,H,O=!0)=>{if(H){const ue=O?"shaft_m_":"shaft_wp_",ye={isVerticalShaft:!0,shaftId:b.shaftId||`${ue}${Date.now()}`,linkedFloorIds:[ee]};O||(ye.sourceFloorId=ee),ne(b.id,ye,O)}else{const ue=b.shaftId;W(Ue=>Ue.map(ye=>ye.id!==V?ye:{...ye,floors:ye.floors.map(Ve=>{const qe=Gt=>(Gt||[]).filter(xt=>!(Ve.id!==ee&&xt.shaftId===ue)).map(xt=>xt.id===b.id?{...xt,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:xt);return O?{...Ve,markers:qe(Ve.markers)}:{...Ve,waypoints:qe(Ve.waypoints)}})}))}},$e=(b,H,O,ue=!0)=>{const Ue=b.shaftId,ye=b.linkedFloorIds||[ee],Ve=O?[...ye,H]:ye.filter(qe=>qe!==H);W(qe=>qe.map(Gt=>Gt.id!==V?Gt:{...Gt,floors:Gt.floors.map(xt=>{let ut=ue?[...xt.markers||[]]:[...xt.waypoints||[]];if(O&&xt.id===H){const Dt=Xr(xt),vt=Xr(Ne),Lt=vt.blX+b.x*(vt.trX-vt.blX),on=vt.trY-b.y*(vt.trY-vt.blY),Et=Dt.trX!==Dt.blX?(Lt-Dt.blX)/(Dt.trX-Dt.blX):.5,yn=Dt.trY!==Dt.blY?(Dt.trY-on)/(Dt.trY-Dt.blY):.5,tt=ue?"marker_":"wp_";ut.push({...b,id:`${tt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${xt.id}`,x:Et,y:yn,linkedFloorIds:Ve})}else!O&&xt.id===H?ut=ut.filter(Dt=>Dt.shaftId!==Ue):ut=ut.map(Dt=>Dt.shaftId===Ue?{...Dt,linkedFloorIds:Ve}:Dt);return ue?{...xt,markers:ut}:{...xt,waypoints:ut}})}))},ft=b=>{let H=null,O=new Set([b]);L.forEach(ue=>ue.floors.forEach(Ue=>{var ye;Ue.markers.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(H=Ve.shaftId)}),(ye=Ue.waypoints)==null||ye.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(H=Ve.shaftId)})})),H&&L.forEach(ue=>ue.floors.forEach(Ue=>{var ye;Ue.markers.forEach(Ve=>{Ve.shaftId===H&&O.add(Ve.id)}),(ye=Ue.waypoints)==null||ye.forEach(Ve=>{Ve.shaftId===H&&O.add(Ve.id)})})),W(ue=>ue.map(Ue=>({...Ue,floors:Ue.floors.map(ye=>({...ye,markers:(ye.markers||[]).filter(Ve=>!O.has(Ve.id)),waypoints:(ye.waypoints||[]).filter(Ve=>!O.has(Ve.id)),edges:(ye.edges||[]).filter(Ve=>!O.has(Ve.start)&&!O.has(Ve.end))}))}))),O.has(K)&&Z(null),O.has(Me)&&de(null),O.has(Be)&&(et(null),mt(null)),Ye(!1)},Nt=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:b=>{if(!b)return;const H=`b_${Date.now()}`,O=`f_${Date.now()}`;W(ue=>[...ue,{id:H,name:b,floors:[{id:O,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),q(H),Se(O)}})},Pt=()=>{we&&h({isOpen:!0,title:`新增 ${we.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:b=>{if(!b)return;const H=`f_${Date.now()}`,O=Ne?{...Xr(Ne)}:{blX:0,blY:0,trX:100,trY:100};W(ue=>ue.map(Ue=>Ue.id===V?{...Ue,floors:[...Ue.floors,{id:H,name:b,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:O}]}:Ue)),Se(H)}})},an=b=>{const H=b.target.files[0],O=b.target;if(H&&V&&ee){const ue=V,Ue=ee,ye=new FileReader;ye.onload=Ve=>{w0(Ve.target.result,1600,qe=>{W(Gt=>Gt.map(xt=>xt.id===ue?{...xt,floors:xt.floors.map(ut=>ut.id===Ue?{...ut,imageUrl:qe}:ut)}:xt)),$(!1)})},ye.readAsDataURL(H)}O.value=""},tn=(b,H)=>{const O=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,ue={id:O,x:b,y:H,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:ee};W(Ue=>Ue.map(ye=>ye.id===V?{...ye,floors:ye.floors.map(Ve=>{if(Ve.id!==ee)return Ve;const qe=Be?[...Ve.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:O}]:Ve.edges||[];return{...Ve,waypoints:[...Ve.waypoints||[],ue],edges:qe}})}:ye)),et(O)},dn=b=>{if(Be===b){et(null),mt(null);return}Be&&Be!==b&&(G.some(O=>O.start===Be&&O.end===b||O.end===Be&&O.start===b)||W(O=>O.map(ue=>ue.id===V?{...ue,floors:ue.floors.map(Ue=>Ue.id===ee?{...Ue,edges:[...Ue.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:Be,end:b}]}:Ue)}:ue))),et(b)},jn=(b,H)=>{for(let ue of Ke)if(Math.hypot(ue.x-b,ue.y-H)<.03)return ue.id;for(let ue of Je)if(Math.hypot(ue.x-b,ue.y-H)<.03)return ue.id;return null};Fe.useEffect(()=>{const b=H=>{H.key==="Escape"&&De&&(et(null),mt(null))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[De]);const Wn=(b,H)=>{const O={},ue=[],Ue={};L.forEach(tt=>{tt.floors.forEach(Ut=>{var wi,Er;const fn=Ut.bounds||{blX:0,blY:0,trX:100,trY:100},Xn=(Zt,ki)=>({physX:fn.blX+Zt*(fn.trX-fn.blX),physY:fn.trY-ki*(fn.trY-fn.blY)});Ut.markers.forEach(Zt=>{O[Zt.id]={...Zt,...Xn(Zt.x,Zt.y),fId:Ut.id,fName:Ut.name},Zt.isVerticalShaft&&Zt.shaftId&&(Ue[Zt.shaftId]||(Ue[Zt.shaftId]=[]),Ue[Zt.shaftId].push(Zt.id))}),(wi=Ut.waypoints)==null||wi.forEach(Zt=>{O[Zt.id]={...Zt,...Xn(Zt.x,Zt.y),fId:Ut.id,fName:Ut.name},Zt.isVerticalShaft&&Zt.shaftId&&(Ue[Zt.shaftId]||(Ue[Zt.shaftId]=[]),Ue[Zt.shaftId].push(Zt.id))}),(Er=Ut.edges)==null||Er.forEach(Zt=>ue.push(Zt))})});const ye={};Object.keys(O).forEach(tt=>{ye[tt]={}}),ue.forEach(tt=>{if(O[tt.start]&&O[tt.end]){const Ut=Math.hypot(O[tt.start].physX-O[tt.end].physX,O[tt.start].physY-O[tt.end].physY);ye[tt.start][tt.end]=Ut,ye[tt.end][tt.start]=Ut}}),Object.values(Ue).forEach(tt=>{for(let Ut=0;Ut<tt.length;Ut++)for(let fn=Ut+1;fn<tt.length;fn++)ye[tt[Ut]][tt[fn]]=5,ye[tt[fn]][tt[Ut]]=5});const Ve=tt=>Object.keys(ye[tt]).length>0;let qe=null,Gt=1/0,xt=null,ut=1/0;if(Object.values(O).forEach(tt=>{if(Ve(tt.id)){if(tt.fId===b.fId){const Ut=Math.hypot(tt.x-b.x,tt.y-b.y);Ut<Gt&&(Gt=Ut,qe=tt.id)}if(tt.fId===H.fId){const Ut=Math.hypot(tt.x-H.x,tt.y-H.y);Ut<ut&&(ut=Ut,xt=tt.id)}}}),!qe||!xt){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),re([]),se([]);return}const Dt={},vt={},Lt=new Set(Object.keys(O));for(Object.keys(O).forEach(tt=>{Dt[tt]=1/0,vt[tt]=null}),Dt[qe]=0;Lt.size>0;){let tt=null;if(Lt.forEach(Ut=>{(tt===null||Dt[Ut]<Dt[tt])&&(tt=Ut)}),Dt[tt]===1/0||tt===xt)break;Lt.delete(tt),Object.entries(ye[tt]).forEach(([Ut,fn])=>{if(Lt.has(Ut)){const Xn=Dt[tt]+fn;Xn<Dt[Ut]&&(Dt[Ut]=Xn,vt[Ut]=tt)}})}const on=[];let Et=xt;for(;Et;)on.unshift(Et),Et=vt[Et];if(on.length===0||on[0]!==qe){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),re([]),se([]);return}const yn=[{x:b.x,y:b.y,fId:b.fId,fName:b.fName,isVirtual:!0},...on.map(tt=>O[tt]),{x:H.x,y:H.y,fId:H.fId,fName:H.fName,isVirtual:!0}];se(yn)};Fe.useEffect(()=>{const b=ae.current;if(!b||r!=="map")return;const H=O=>{O.preventDefault();const ue=b.getBoundingClientRect(),Ue=O.clientX-ue.left,ye=O.clientY-ue.top,Ve=O.deltaY<0?1.1:.9;Le(qe=>{const Gt=Math.max(.1,Math.min(10,qe.scale*Ve)),xt=Gt/qe.scale;return{x:Ue-(Ue-qe.x)*xt,y:ye-(ye-qe.y)*xt,scale:Gt}})};return b.addEventListener("wheel",H,{passive:!1}),()=>b.removeEventListener("wheel",H)},[r]);const Rn=b=>{b.button!==void 0&&b.button!==0||b.target.closest(".marker-pin")||b.target.closest(".waypoint-pin")||(kt(!0),Mt({x:b.clientX-ve.x,y:b.clientY-ve.y}),It({x:b.clientX,y:b.clientY}),b.target.setPointerCapture(b.pointerId))},Ei=b=>{if(pt)Le(H=>({...H,x:b.clientX-Wt.x,y:b.clientY-Wt.y}));else if(De&&Be&&ce.current){const H=ce.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(b.clientX-H.left)/H.width)),ue=Math.max(0,Math.min(1,(b.clientY-H.top)/H.height));mt({x:O,y:ue})}else if(k&&ce.current){const H=ce.current.getBoundingClientRect();let O=Math.max(0,Math.min(1,(b.clientX-H.left)/H.width)),ue=Math.max(0,Math.min(1,(b.clientY-H.top)/H.height));k.startsWith("marker_")?(Pe(k,"x",O),Pe(k,"y",ue)):k.startsWith("wp_")&&(Ie(k,"x",O),Ie(k,"y",ue))}},yr=b=>{if(pt&&(kt(!1),b.target.releasePointerCapture(b.pointerId),Math.hypot(b.clientX-Bt.x,b.clientY-Bt.y)<5)){if(!(Ne!=null&&Ne.imageUrl)||!ce.current)return;const O=ce.current.getBoundingClientRect();let ue=Math.max(0,Math.min(1,(b.clientX-O.left)/O.width)),Ue=Math.max(0,Math.min(1,(b.clientY-O.top)/O.height));if(Rt){const ye={x:ue,y:Ue,fId:ee,fName:Ne==null?void 0:Ne.name},Ve=E.length>=2?[ye]:[...E,ye];re(Ve),Ve.length===1&&se([]),Ve.length===2&&Wn(Ve[0],Ve[1])}else if(De){const ye=jn(ue,Ue);ye?dn(ye):tn(ue,Ue)}else if(Ht){const ye=L.reduce((qe,Gt)=>qe+Gt.floors.reduce((xt,ut)=>xt+ut.markers.length,0),0),Ve={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${ye+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:ue,y:Ue,imageUrl:null,enabled:!0,recognitionStatus:"untested"};W(qe=>qe.map(Gt=>Gt.id===V?{...Gt,floors:Gt.floors.map(xt=>xt.id===ee?{...xt,markers:[...xt.markers,Ve]}:xt)}:Gt)),Z(Ve.id),de(null),$(!1)}else St?He(ye=>ye.length>=2?[{x:ue,y:Ue}]:[...ye,{x:ue,y:Ue}]):(Z(null),de(null))}},As=b=>{const H=b.target.files[0],O=b.target;if(H&&K){const ue=K,Ue=new FileReader;Ue.onload=ye=>{w0(ye.target.result,800,Ve=>{Pe(ue,"imageUrl",Ve),Pe(ue,"recognitionStatus","untested")})},Ue.readAsDataURL(H)}O.value=""},ni=(b,H,O)=>{q(b),Se(H),Z(O),de(null),o("map")},Fi=async()=>{const b={version:"7.0",project:{id:N,name:F.projectName||(P==null?void 0:P.name)||"AR導覽",description:(P==null?void 0:P.description)||"",updatedAt:new Date().toISOString()},systemConfig:_i(F),buildings:_i(L)};R(H=>H.map(O=>O.id===N?{...O,name:b.project.name,systemConfig:b.systemConfig,buildings:b.buildings,updatedAt:b.project.updatedAt}:O));try{const H=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),O=await H.json().catch(()=>({}));if(!H.ok)throw new Error(O.error||`Save failed: ${H.status}`);x({isOpen:!0,message:`「${b.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(H){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${H.message}`})}},Sr=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${D.length+1}`,onSubmit:b=>{if(!b)return;const H=lw(b);R(O=>[...O,H]),z(H.id),o("map")}})},Mr=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(P==null?void 0:P.name)||F.projectName||"",onSubmit:b=>{b&&(w(H=>({...H,projectName:b})),R(H=>H.map(O=>O.id===N?{...O,name:b,systemConfig:{...O.systemConfig,projectName:b},updatedAt:new Date().toISOString()}:O)))}})},Kr=()=>{if(D.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(P==null?void 0:P.name)||F.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{R(b=>{var O;const H=b.filter(ue=>ue.id!==N);return z((O=H[0])==null?void 0:O.id),H})}})},Zr=()=>{W(co()),Z(null),de(null),Le({x:0,y:0,scale:1}),$(!1),he(!1),be(!1),et(null),mt(null),U(!1),re([]),se([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},Cs=()=>{const b=(F.projectName||(P==null?void 0:P.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),H="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:N,name:F.projectName||(P==null?void 0:P.name),description:(P==null?void 0:P.description)||"",updatedAt:P==null?void 0:P.updatedAt},systemConfig:F,buildings:L},null,2)),O=document.createElement("a");O.setAttribute("href",H),O.setAttribute("download",`${b}_ar_config_v7.json`),document.body.appendChild(O),O.click(),O.remove()},Jr=()=>{if(!(Ne!=null&&Ne.imageUrl)||!ae.current||!ce.current){Le({x:0,y:0,scale:1});return}const b=ae.current,H=ce.current.querySelector("img");if(!H||H.naturalWidth===0)return;const{width:O,height:ue}=b.getBoundingClientRect(),Ue=Math.min(O/H.naturalWidth,ue/H.naturalHeight,1)*.9;Le({x:(O-H.naturalWidth*Ue)/2,y:(ue-H.naturalHeight*Ue)/2,scale:Ue})},Oi=b=>{o(b),u(!1),$(!1),Ze(!1),he(!1),be(!1),et(null),mt(null),U(!1),re([]),se([])};let Jt=null,Xt=null;L.forEach(b=>b.floors.forEach(H=>{var O;H.markers.forEach(ue=>{ue.id===K&&(Jt=ue,b.name,H.name)}),(O=H.waypoints)==null||O.forEach(ue=>{ue.id===Me&&(Xt=ue,b.name,H.name)})}));let Qr=0,Qi=0;const C=document.getElementById("current-map-image"),J=Ae.trX-Ae.blX,_e=Ae.trY-Ae.blY;if(C&&J>0){const b=C.offsetWidth*ve.scale;if(b>0){const H=J/b,O=100*H;Qr=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(Ue=>Ue<=O)||.5,Qi=Qr/H}}const me=L.reduce((b,H)=>b+H.floors.reduce((O,ue)=>O+(ue.markers||[]).length,0),0),pe=L.reduce((b,H)=>b+H.floors.length,0),je=()=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[g.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[g.jsx("select",{value:N,onChange:b=>z(b.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:D.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-950",children:b.name},b.id))}),g.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",D.length," 個專案 · ",L.length," 棟建築 · ",pe," 個樓層 · ",me," 個 AR 點位"]})]})]}),g.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[g.jsxs("button",{onClick:Sr,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Vl,{className:"w-4 h-4"}),"新增專案"]}),g.jsxs("button",{onClick:Mr,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Td,{className:"w-4 h-4"}),"編輯"]}),g.jsxs("button",{onClick:Fi,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(ho,{className:"w-4 h-4"}),"儲存"]}),g.jsxs("button",{onClick:Kr,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[g.jsx(Ad,{className:"w-4 h-4"}),"刪除"]})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),nt=()=>{const b=new Set,H=L.flatMap(O=>O.floors.flatMap(ue=>(ue.markers||[]).reduce((Ue,ye)=>{if(ye.isVerticalShaft&&ye.shaftId){if(b.has(ye.shaftId))return Ue;b.add(ye.shaftId)}return Ue.push({...ye,bId:O.id,fId:ue.id,buildingName:O.name,floorName:ue.name}),Ue},[])));return g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[je(),g.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(oo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),g.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",H.length," 組節點"]})]}),H.length===0?g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[g.jsx(oo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),g.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),g.jsx("button",{onClick:()=>Oi("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"md:hidden space-y-3",children:H.map(O=>g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[O.imageUrl?g.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):g.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:g.jsx(y0,{className:"w-5 h-5"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:O.code}),g.jsx(Sf,{status:O.recognitionStatus})]}),g.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:O.title||"未命名點位"}),g.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[O.buildingName," · ",O.floorName]})]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[g.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${O.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:O.enabled?"已啟用":"未啟用"}),g.jsxs("button",{onClick:()=>ni(O.bId,O.fId,O.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[g.jsx(Td,{className:"w-4 h-4"}),"編輯"]})]})]},O.id))}),g.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[g.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),g.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),g.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-800",children:H.map(O=>{var Ue;const ue=O.isVerticalShaft?(Ue=L.find(ye=>ye.id===O.bId))==null?void 0:Ue.floors.filter(ye=>{var Ve;return(Ve=O.linkedFloorIds)==null?void 0:Ve.includes(ye.id)}).sort((ye,Ve)=>vi(Ve.name)-vi(ye.name)).map(ye=>ye.name).join(", "):O.floorName;return g.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${O.isVerticalShaft?"bg-purple-900/5":""}`,children:[g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"text-xs font-bold text-slate-300",children:O.buildingName}),g.jsx("div",{className:`text-[10px] mt-0.5 ${O.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:ue})]}),g.jsx("td",{className:"px-4 py-4",children:O.imageUrl?g.jsx("img",{src:O.imageUrl,alt:O.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):g.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:g.jsx(y0,{className:"w-4 h-4"})})}),g.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[g.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:O.code}),O.isVerticalShaft?g.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(Wr,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):O.arrowDirection!=="none"&&g.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[g.jsx(aw,{direction:O.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),g.jsxs("td",{className:"px-4 py-4",children:[g.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:O.title||"未命名"}),g.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:O.description||"無描述"})]}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:O.enabled?g.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):g.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),g.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:g.jsx(Sf,{status:O.recognitionStatus})}),g.jsx("td",{className:"px-4 py-4 text-right",children:g.jsx("button",{onClick:()=>ni(O.bId,O.fId,O.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:g.jsx(Td,{className:"w-4 h-4"})})})]},O.id)})})]})})})]})]})})},We=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[je(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(E0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[g.jsx(qE,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),g.jsxs("div",{className:"space-y-4 md:space-y-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),g.jsx("input",{type:"text",value:F.projectName,onChange:b=>w({...F,projectName:b.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[g.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),g.jsx("input",{type:"range",min:"5",max:"50",value:F.lerpFactor,onChange:b=>w({...F,lerpFactor:parseInt(b.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[g.jsx(_0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),g.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),g.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),g.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>Zr()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),at=()=>g.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:g.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[je(),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-6 h-6"})}),g.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[g.jsx(bd,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),g.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.length}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.reduce((b,H)=>b+H.floors.length,0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[g.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:L.reduce((b,H)=>b+H.floors.reduce((O,ue)=>O+(ue.markers||[]).length,0),0)}),g.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),g.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[g.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[g.jsx(_0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),g.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",g.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),g.jsxs("button",{onClick:Cs,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[g.jsx(bd,{className:"w-5 h-5"}),g.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return n?g.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:g.jsx(T0,{buildings:L,systemConfig:F,onMenuClick:()=>{}})}):g.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&g.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(da,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),g.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:g.jsx(gs,{className:"w-6 h-6"})})]}),g.jsxs("nav",{className:"p-4 space-y-2",children:[g.jsx(Gl,{icon:g.jsx(S0,{}),label:"平面圖管理",active:r==="map",onClick:()=>Oi("map")}),g.jsx(Gl,{icon:g.jsx(oo,{}),label:"點位列表",active:r==="list",onClick:()=>Oi("list")}),g.jsx(Gl,{icon:g.jsx(E0,{}),label:"系統設定",active:r==="settings",onClick:()=>Oi("settings")}),g.jsx(Gl,{icon:g.jsx(bd,{}),label:"匯出JSON",active:r==="export",onClick:()=>Oi("export")})]})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:g.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&g.jsx(T0,{buildings:L,systemConfig:F,onMenuClick:()=>u(!0)}),r==="list"&&nt(),r==="settings"&&We(),r==="export"&&at(),r==="map"&&g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[g.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-auto z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-x-auto md:overflow-visible whitespace-nowrap",children:[!s&&g.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:g.jsx(lo,{className:"w-5 h-5"})}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(da,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:N,onChange:b=>z(b.target.value),children:D.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Sr,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:g.jsx(Vl,{className:"w-4 h-4"})}),g.jsx("button",{onClick:Fi,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:g.jsx(ho,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(YE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),g.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:V,onChange:b=>q(b.target.value),children:L.map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Nt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),we&&g.jsxs("div",{className:"flex items-center",children:[g.jsx(ZE,{className:"w-4 h-4 text-slate-500 mr-2"}),g.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:ee,onChange:b=>Se(b.target.value),children:we.floors.slice().sort((b,H)=>vi(H.name)-vi(b.name)).map(b=>g.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),g.jsx("button",{onClick:Pt,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:g.jsx(Vl,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),g.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[g.jsx($E,{className:"w-4 h-4 text-slate-500 mr-1"}),g.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:X,onChange:b=>oe(b.target.value),children:[g.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),L.flatMap(b=>b.floors.filter(H=>H.id!==ee).sort((H,O)=>vi(O.name)-vi(H.name)).map(H=>g.jsxs("option",{value:H.id,className:"bg-slate-900",children:[b.name,"-",H.name]},H.id)))]})]})]}),g.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[g.jsxs("button",{onClick:()=>{Ne!=null&&Ne.imageUrl&&(U(!Rt),he(!1),be(!1),$(!1),Ze(!1),et(null),Z(null),de(null),mt(null),re([]),se([]))},disabled:!(Ne!=null&&Ne.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${Rt?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[Rt?g.jsx(gs,{className:"w-5 h-5"}):g.jsx(v0,{className:"w-5 h-5"}),g.jsx("span",{children:"路網測試"})]}),(Ne==null?void 0:Ne.imageUrl)&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),g.jsx("button",{onClick:()=>{be(!Te),he(!1),U(!1),$(!1),Ze(!1),et(null),Z(null),de(null),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Te?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:Te?g.jsx(gs,{className:"w-5 h-5"}):g.jsx(Wr,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{he(!De),be(!1),U(!1),$(!1),Ze(!1),et(null),Z(null),de(null),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${De?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:De?g.jsx(gs,{className:"w-5 h-5"}):g.jsx(pg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{Ze(!St),be(!1),U(!1),$(!1),he(!1),He([]),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${St?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:St?g.jsx(gs,{className:"w-5 h-5"}):g.jsx(nw,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>{$(!Ht),be(!1),U(!1),Ze(!1),he(!1),mt(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ht?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Ht?g.jsx(gs,{className:"w-5 h-5"}):g.jsx(oo,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>y({isOpen:!0,blX:Ae.blX,blY:Ae.blY,trX:Ae.trX,trY:Ae.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:g.jsx(da,{className:"w-5 h-5"})})]}),g.jsx("input",{type:"file",ref:ie,onChange:an,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>ie.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:g.jsx(sw,{className:"w-5 h-5"})})]}),g.jsxs("div",{ref:ae,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${De?"cursor-crosshair":Te?"cursor-pointer":Ht||St||Rt?"cursor-crosshair":pt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:Rn,onPointerMove:Ei,onPointerUp:yr,onPointerCancel:yr,children:[g.jsxs("div",{ref:ce,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${ve.x}px, ${ve.y}px) scale(${ve.scale})`},children:[X&&(()=>{let b=null;if(L.forEach(Ve=>Ve.floors.forEach(qe=>{qe.id===X&&(b=qe)})),!b)return null;const H=Xr(b),O=J!==0?(H.trX-H.blX)/J:1,ue=_e!==0?(H.trY-H.blY)/_e:1,Ue=J!==0?(H.blX-Ae.blX)/J:0,ye=_e!==0?(Ae.trY-H.trY)/_e:0;return g.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${Ue*100}%`,top:`${ye*100}%`,width:`${O*100}%`,height:`${ue*100}%`,opacity:.4},children:[b.imageUrl&&g.jsx("img",{src:b.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),b.markers.map(Ve=>g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ve.x*100}%`,top:`${Ve.y*100}%`},children:g.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:g.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`},children:Ve.code})})},Ve.id))]})})(),(Ne==null?void 0:Ne.imageUrl)&&g.jsx("img",{id:"current-map-image",src:Ne.imageUrl,alt:"Floor Plan",onLoad:Jr,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${X?"opacity-70 mix-blend-screen":"opacity-100"}`}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),G.map(b=>{const H=Ke.find(ue=>ue.id===b.start)||Je.find(ue=>ue.id===b.start),O=Ke.find(ue=>ue.id===b.end)||Je.find(ue=>ue.id===b.end);return H&&O?g.jsx("line",{x1:`${H.x*100}%`,y1:`${H.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,ve.scale),strokeOpacity:"0.7"},b.id):null}),De&&Be&&st&&(()=>{const b=Ke.find(H=>H.id===Be)||Je.find(H=>H.id===Be);return b?g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${st.x*100}%`,y2:`${st.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,ve.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),Rt&&j.length>0&&j.map((b,H)=>{if(H===j.length-1)return null;const O=j[H+1],ue=[];return b.fId===ee&&O.fId===ee?ue.push(g.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${O.x*100}%`,y2:`${O.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,ve.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${H}`)):b.fId===ee&&O.fId!==ee?ue.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:12/Math.max(.5,ve.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,ve.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,ve.scale),to:35/Math.max(.5,ve.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.5,ve.scale),fill:"#ef4444"}),g.jsxs("text",{x:`${b.x*100}%`,y:`${b.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,ve.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",O.fName]})]},`leave_${H}`)):b.fId!==ee&&O.fId===ee&&ue.push(g.jsxs("g",{children:[g.jsxs("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:12/Math.max(.5,ve.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,ve.scale),children:[g.jsx("animate",{attributeName:"r",from:12/Math.max(.5,ve.scale),to:35/Math.max(.5,ve.scale),dur:"1.5s",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),g.jsx("circle",{cx:`${O.x*100}%`,cy:`${O.y*100}%`,r:6/Math.max(.5,ve.scale),fill:"#22c55e"}),g.jsxs("text",{x:`${O.x*100}%`,y:`${O.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,ve.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",b.fName]})]},`enter_${H}`)),g.jsx(Ef.Fragment,{children:ue},`testfrag_${H}`)})]}),Je.map(b=>{const H=Me===b.id,O=Be===b.id,ue=b.isVerticalShaft&&b.sourceFloorId&&b.sourceFloorId!==ee;let Ue="bg-orange-500",ye="border-white",Ve="";return b.isVerticalShaft&&(Ue="bg-green-500"),O?(Ue="bg-white",ye=ue?"border-green-500":"border-orange-500",Ve=ue?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):H&&(ye="border-cyan-400 border-2",Ve="shadow-[0_0_10px_cyan]"),g.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${H?"z-40":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:qe=>{qe.stopPropagation(),qe.button===0&&(De?dn(b.id):Te?(b.isVerticalShaft||Ce(b,!0,!1),Z(null),de(b.id)):!Rt&&!St&&!pt&&!Ht&&(Z(null),de(b.id),le(b.id),qe.target.setPointerCapture(qe.pointerId)))},onPointerUp:qe=>{qe.stopPropagation(),qe.target.releasePointerCapture(qe.pointerId)},onContextMenu:qe=>{qe.preventDefault(),De?ft(b.id):Te?b.isVerticalShaft&&Ce(b,!1,!1):!Rt&&!St&&!Ht&&(Z(null),de(b.id))},children:g.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${Ue} ${ye} ${Ve}`,style:{width:`${(O?14:10)/Math.max(.5,ve.scale)}px`,height:`${(O?14:10)/Math.max(.5,ve.scale)}px`,borderWidth:H?"2px":"1px"},children:b.isVerticalShaft&&g.jsx(Wr,{className:O?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,ve.scale)}px`,height:`${6/Math.max(.5,ve.scale)}px`}})})},b.id)}),Rt&&E.map((b,H)=>b.fId!==ee?null:g.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${b.x*100}%`,top:`${b.y*100}%`},children:g.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,ve.scale)}px`,height:`${16/Math.max(.5,ve.scale)}px`},children:H===0?"起":"終"})},`testpt_${H}`)),St&&gt.length>0&&g.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[g.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[gt.length===2&&g.jsx("line",{x1:`${gt[0].x*100}%`,y1:`${gt[0].y*100}%`,x2:`${gt[1].x*100}%`,y2:`${gt[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,ve.scale),strokeDasharray:"5,5"}),gt.map((b,H)=>g.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.1,ve.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,ve.scale)},H))]}),gt.length===2&&g.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(gt[0].x+gt[1].x)*50}%`,top:`${(gt[0].y+gt[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,ve.scale)})`},children:[Math.hypot((gt[1].x-gt[0].x)*J,(gt[1].y-gt[0].y)*_e).toFixed(1)," m"]})]}),Ke.map(b=>{const H=b.isVerticalShaft?we==null?void 0:we.floors.filter(O=>{var ue;return(ue=b.linkedFloorIds)==null?void 0:ue.includes(O.id)}).sort((O,ue)=>vi(ue.name)-vi(O.name)).map(O=>O.name).join(", "):"";return g.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${K===b.id?"z-[60]":""} ${Be===b.id?"scale-125":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:O=>{O.stopPropagation(),O.button===0&&(De?dn(b.id):Te?(b.isVerticalShaft||Ce(b,!0,!0),de(null),Z(b.id)):!Rt&&!Ht&&!St&&!pt&&(de(null),le(b.id),Z(b.id),O.target.setPointerCapture(O.pointerId)))},onPointerUp:O=>{O.stopPropagation(),O.target.releasePointerCapture(O.pointerId)},onContextMenu:O=>{O.preventDefault(),De?ft(b.id):Te?b.isVerticalShaft&&Ce(b,!1,!0):!Rt&&!St&&!Ht&&(de(null),Z(b.id))},children:[g.jsxs("div",{className:"relative pointer-events-none",children:[g.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${K===b.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":b.enabled?b.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${Be===b.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:b.isVerticalShaft?g.jsx(Wr,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`}}):g.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,ve.scale)})`},children:b.code})}),g.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${K===b.id?"border-t-white":b.enabled?b.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${Be===b.id?"border-t-orange-500":""}`})]}),g.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${K===b.id?"opacity-100 border-cyan-500 text-cyan-400":b.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,ve.scale)})`,transformOrigin:"top center"},children:[b.title||"未命名"," ",b.isVerticalShaft&&g.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",H,")"]})]})]},b.id)})]}),Te&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(Wr,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),g.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),De&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(QE,{className:"w-5 h-5 mr-3 shrink-0"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),g.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),Rt&&g.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[g.jsx(v0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),g.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(Ne!=null&&Ne.imageUrl)&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[g.jsx(S0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),g.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",we==null?void 0:we.name," - ",Ne==null?void 0:Ne.name," 的平面圖"]}),g.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(Ne==null?void 0:Ne.imageUrl)&&Qi>0&&g.jsxs("div",{onClick:()=>y({isOpen:!0,blX:Ae.blX,blY:Ae.blY,trX:Ae.trX,trY:Ae.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[g.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[g.jsx(da,{className:"w-3 h-3 mr-1"})," 比例尺: ",Qr," m"]}),g.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${Qi}px`}})]}),(Ne==null?void 0:Ne.imageUrl)&&g.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[g.jsx("button",{onClick:()=>Le(b=>({...b,scale:Math.min(10,b.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(gg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Le(b=>({...b,scale:Math.max(.1,b.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:g.jsx(xg,{className:"w-5 h-5"})}),g.jsx("button",{onClick:Jr,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:g.jsx(JE,{className:"w-5 h-5"})})]})]})]}),I.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[g.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[g.jsx(da,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),g.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",g.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.blX,onChange:b=>y({...I,blX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.blY,onChange:b=>y({...I,blY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),g.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[g.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),g.jsx("input",{type:"number",value:I.trX,onChange:b=>y({...I,trX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),g.jsx("input",{type:"number",value:I.trY,onChange:b=>y({...I,trY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),g.jsx("button",{onClick:()=>{W(b=>b.map(H=>H.id===V?{...H,floors:H.floors.map(O=>O.id===ee?{...O,bounds:{blX:I.blX,blY:I.blY,trX:I.trX,trY:I.trY}}:O)}:H)),y({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),f.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),g.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:b=>{b.key==="Enter"&&(f.onSubmit(b.target.value),h({isOpen:!1}))}}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:b=>{f.onSubmit(b.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),m.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[g.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:m.title}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:m.message}),g.jsxs("div",{className:"flex space-x-3 justify-end",children:[g.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),g.jsx("button",{onClick:()=>{m.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),S.isOpen&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[g.jsx(mg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),g.jsx("p",{className:"text-slate-300 text-sm mb-6",children:S.message}),g.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),M&&g.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[g.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[g.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:g.jsx(yf,{className:"w-10 h-10 text-cyan-400"})}),g.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:g.jsx(rw,{className:"w-10 h-10 text-purple-400"})})]}),g.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),g.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",g.jsx("b",{children:"「相機」"}),"進行掃描，以及",g.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),g.jsxs("button",{onClick:Re,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[g.jsx(ho,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(K||Me)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[g.jsx("h2",{className:"font-bold text-slate-200",children:K?"AR 點位設定":"轉折點 (Waypoint) 設定"}),g.jsx("button",{onClick:()=>{Z(null),de(null)},className:"text-slate-400 hover:text-white p-2",children:g.jsx(gs,{})})]}),Jt&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),g.jsx("input",{type:"text",value:Jt.code,onChange:b=>Pe(Jt.id,"code",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-[2]",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),g.jsx("input",{type:"text",value:Jt.title,onChange:b=>Pe(Jt.id,"title",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),g.jsx("textarea",{value:Jt.description||"",onChange:b=>Pe(Jt.id,"description",b.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Jt.x*100).toFixed(1),onChange:b=>Pe(Jt.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Jt.y*100).toFixed(1),onChange:b=>Pe(Jt.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[g.jsx(Wr,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:Jt.isVerticalShaft||!1,onChange:b=>Ce(Jt,b.target.checked,!0),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),Jt.isVerticalShaft?g.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:we==null?void 0:we.floors.slice().sort((b,H)=>vi(H.name)-vi(b.name)).map(b=>{var ue;const H=(ue=Jt.linkedFloorIds)==null?void 0:ue.includes(b.id),O=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${H?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:O,checked:H||O,onChange:Ue=>$e(Jt,b.id,Ue.target.checked,!0)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",O&&"(目前)"]})]},b.id)})})}):g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),g.jsxs("select",{value:Jt.arrowDirection||"none",onChange:b=>Pe(Jt.id,"arrowDirection",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[g.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),g.jsx("option",{value:"up",children:"上 (Up)"}),g.jsx("option",{value:"down",children:"下 (Down)"}),g.jsx("option",{value:"left",children:"左 (Left)"}),g.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:Jt.enabled,onChange:b=>Pe(Jt.id,"enabled",b.target.checked),className:"sr-only peer"}),g.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),g.jsx("hr",{className:"border-slate-800"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),g.jsx("input",{type:"file",ref:xe,onChange:As,className:"hidden",accept:"image/*"}),g.jsx("button",{onClick:()=>xe.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),g.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:Jt.imageUrl?g.jsx("img",{src:Jt.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):g.jsxs("div",{className:"text-center text-slate-600",children:[g.jsx(yf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),g.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),g.jsx(uw,{marker:Jt,onUpdateStatus:b=>Pe(Jt.id,"recognitionStatus",b),showAlert:b=>x({isOpen:!0,message:b})})]}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Xe?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ye(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>ft(Jt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ye(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Ad,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>Z(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),Xt&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex space-x-3",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Xt.x*100).toFixed(1),onChange:b=>Ie(Xt.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),g.jsx("input",{type:"number",step:"0.1",value:+(Xt.y*100).toFixed(1),onChange:b=>Ie(Xt.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[g.jsx(Wr,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),g.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[g.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:Xt.isVerticalShaft||!1,onChange:b=>Ce(Xt,b.target.checked,!1),className:"sr-only peer"}),g.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),Xt.isVerticalShaft&&g.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[g.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),g.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:we==null?void 0:we.floors.slice().sort((b,H)=>vi(H.name)-vi(b.name)).map(b=>{var ue;const H=(ue=Xt.linkedFloorIds)==null?void 0:ue.includes(b.id),O=b.id===ee;return g.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${H?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[g.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:O,checked:H||O,onChange:Ue=>$e(Xt,b.id,Ue.target.checked,!1)}),g.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",O&&"(目前)"]})]},b.id)})})]})]})]})}),g.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Xe?g.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[g.jsx("button",{onClick:()=>Ye(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),g.jsx("button",{onClick:()=>ft(Xt.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{onClick:()=>Ye(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:g.jsx(Ad,{className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>de(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function Gl({icon:s,label:e,active:n,onClick:r}){return g.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${n?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[g.jsx("div",{className:`w-5 h-5 shrink-0 ${n?"scale-110":""}`,children:s}),g.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Sf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:g.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:g.jsx(ho,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:g.jsx(mg,{className:"w-3 h-3 mr-1 inline"})}},n=e[s]||e.untested;return g.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${n.bg} ${n.border} ${n.color}`,children:[n.icon," ",n.text]})}function uw({marker:s,onUpdateStatus:e,showAlert:n}){const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Fe.useRef(null),h=Fe.useRef(null),m=Fe.useRef(null),v=Fe.useRef(null),S=Fe.useRef(null),x=Fe.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Fe.useRef({frames:0,lockedFrames:0});Fe.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const A=()=>{if(!window.cv||!m.current||!s.imageUrl)return!1;try{const R=window.cv,N=x.current;N.refGray&&N.refGray.delete(),N.refKeypoints&&N.refKeypoints.delete(),N.refDescriptors&&N.refDescriptors.delete(),N.orbDetector&&N.orbDetector.delete(),N.matcher&&N.matcher.delete();const z=document.createElement("canvas"),P=z.getContext("2d"),F=m.current,w=320;let L=F.naturalWidth||F.width,W=F.naturalHeight||F.height;(L>w||W>w)&&(L>W?(W=Math.round(W*w/L),L=w):(L=Math.round(L*w/W),W=w)),z.width=L,z.height=W,P.drawImage(F,0,0,L,W);const V=R.imread(z),q=new R.Mat;R.cvtColor(V,q,R.COLOR_RGBA2GRAY);const ee=new R.ORB,Se=new R.KeyPointVector,X=new R.Mat;ee.detectAndCompute(q,new R.Mat,Se,X);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:q,refKeypoints:Se,refDescriptors:X,orbDetector:ee,matcher:oe},V.delete(),!0}catch{return!1}},I=R=>{if(R.length<4)return!1;let N=[];for(let z=0;z<4;z++){let P=R[(z+1)%4].x-R[z].x,F=R[(z+1)%4].y-R[z].y,w=R[(z+2)%4].x-R[(z+1)%4].x,L=R[(z+2)%4].y-R[(z+1)%4].y;N.push(P*L-F*w>0)}return N.every(z=>z===N[0])},y=async()=>{if(!s.imageUrl){n("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!A()){n("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){n("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(N){console.warn("Device orientation permission was not granted.",N)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,D()}}catch{n("無法存取相機。"),o("ready")}}},_=()=>{S.current&&(cancelAnimationFrame(S.current),S.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Fe.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const D=()=>{const R=window.cv,N=x.current,z=f.current,P=h.current,F=P.getContext("2d");let w=performance.now(),L=null;const W=.15;let V=0;const q=3;let ee=0;const Se=10;let X=null;const oe=()=>{if(!z||!z.srcObject||!N.refDescriptors)return;const K=performance.now(),Z=Math.round(1e3/(K-w));w=K,F.drawImage(z,0,0,P.width,P.height);let Me=0,de=0,k=!1,le=null,Xe=V%q===0;if(V++,Xe){try{const De=R.imread(P),he=new R.Mat;R.cvtColor(De,he,R.COLOR_RGBA2GRAY);const Te=new R.KeyPointVector,be=new R.Mat;if(N.orbDetector.detectAndCompute(he,new R.Mat,Te,be),!be.empty()&&be.rows>0){const Be=new R.DMatchVector;N.matcher.match(N.refDescriptors,be,Be);let et=[];for(let mt=0;mt<Be.size();mt++)et.push(Be.get(mt));et.sort((mt,pt)=>mt.distance-pt.distance);let st=et.filter(mt=>mt.distance<=50).slice(0,60);if(Me=st.length,st.length>=12){const mt=[],pt=[];for(let It=0;It<st.length;It++){let Ht=st[It];mt.push(N.refKeypoints.get(Ht.queryIdx).pt.x,N.refKeypoints.get(Ht.queryIdx).pt.y),pt.push(Te.get(Ht.trainIdx).pt.x,Te.get(Ht.trainIdx).pt.y)}const kt=R.matFromArray(mt.length/2,1,R.CV_32FC2,mt),Wt=R.matFromArray(pt.length/2,1,R.CV_32FC2,pt),Mt=new R.Mat,Bt=R.findHomography(kt,Wt,R.RANSAC,4,Mt);for(let It=0;It<Mt.rows;It++)Mt.data[It]===1&&de++;if(!Bt.empty()&&de>=10&&de/st.length>=.35){const It=N.refGray.cols,Ht=N.refGray.rows,$=[0,0,1,It,0,1,It,Ht,1,0,Ht,1];let St=[];for(let Ze=0;Ze<4;Ze++){let gt=$[Ze*3],He=$[Ze*3+1],Rt=Bt.data64F[0]*gt+Bt.data64F[1]*He+Bt.data64F[2],U=Bt.data64F[3]*gt+Bt.data64F[4]*He+Bt.data64F[5],E=Bt.data64F[6]*gt+Bt.data64F[7]*He+Bt.data64F[8];St.push({x:Rt/E,y:U/E})}I(St)&&(le=St,k=!0)}kt.delete(),Wt.delete(),Mt.delete(),Bt.delete()}Be.delete()}De.delete(),he.delete(),Te.delete(),be.delete()}catch{}k?(X=le,ee=Se):ee>0?ee--:X=null}const Ye=X!==null;if(Ye){if(!L)L=JSON.parse(JSON.stringify(X));else for(let De=0;De<4;De++)L[De].x=L[De].x*(1-W)+X[De].x*W,L[De].y=L[De].y*(1-W)+X[De].y*W;F.strokeStyle="#00ffcc",F.lineWidth=3,F.shadowBlur=10,F.shadowColor="#00ffcc",F.beginPath(),F.moveTo(L[0].x,L[0].y),F.lineTo(L[1].x,L[1].y),F.lineTo(L[2].x,L[2].y),F.lineTo(L[3].x,L[3].y),F.closePath(),F.stroke(),F.shadowBlur=0}else{L=null;const De=Math.min(P.width,P.height)*.5,he=(P.width-De)/2,Te=(P.height-De)/2;F.strokeStyle="rgba(255, 70, 70, 0.5)",F.lineWidth=2,F.strokeRect(he,Te,De,De)}u(De=>({fps:Z,matches:Xe?Me:De.matches,inliers:Xe?de:De.inliers,status:Ye?"LOCKED":"SEARCHING"})),M.current.frames++,Ye&&M.current.lockedFrames++,S.current=requestAnimationFrame(oe)};oe()};return g.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&g.jsx("img",{ref:m,src:s.imageUrl,alt:"ref",className:"hidden"}),g.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[g.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),g.jsx(Sf,{status:s.recognitionStatus})]}),g.jsxs("div",{className:"p-3 space-y-3",children:[g.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[g.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&g.jsx("div",{className:"text-center z-20",children:r==="loading"?g.jsxs("div",{className:"animate-pulse text-yellow-500",children:[g.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):g.jsxs(g.Fragment,{children:[g.jsx(yf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),g.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&g.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[g.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),g.jsxs("span",{children:["INLIERS: ",l.inliers]}),g.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?g.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):g.jsxs("button",{onClick:y,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[g.jsx(tw,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function T0({buildings:s,systemConfig:e,onMenuClick:n}){const[r,o]=Fe.useState("idle"),[l,u]=Fe.useState(null),[f,h]=Fe.useState(null),[m,v]=Fe.useState([]),[S,x]=Fe.useState(!1),[M,A]=Fe.useState(0),[I,y]=Fe.useState("idle"),[_,D]=Fe.useState("checking"),[R,N]=Fe.useState("idle"),[z,P]=Fe.useState(!1),F=Fe.useRef(null),w=Fe.useRef(null),L=Fe.useRef(null),W=Fe.useRef(null),V=Fe.useRef(null),q=Fe.useRef(null),ee=Fe.useRef(null),Se=Fe.useRef(null),X=Fe.useRef(null),oe=Fe.useRef(null),K=Fe.useRef(!1),Z=Fe.useRef([]),Me=Fe.useRef({matcher:null}),de=Fe.useRef(0),k=Fe.useRef(!1),le=Fe.useRef([]),Xe=Fe.useRef({nodes:{},edges:[]}),Ye=Fe.useRef(null),De=Fe.useRef("idle"),he=Fe.useRef({heading:0,pitch:0,roll:0}),Te=Ef.useMemo(()=>{const j={},se=[];return s.forEach(ae=>ae.floors.forEach(ce=>{var ve,Le;const ie=ce.bounds||{blX:0,blY:0,trX:100,trY:100},xe=(Re,we)=>({physX:ie.blX+Re*(ie.trX-ie.blX),physY:ie.trY-we*(ie.trY-ie.blY)});ce.markers.forEach(Re=>{Re.enabled&&(j[Re.id]={...Re,...xe(Re.x,Re.y),isMarker:!0,bId:ae.id,fId:ce.id,bName:ae.name,fName:ce.name,bounds:ie})}),(ve=ce.waypoints)==null||ve.forEach(Re=>{j[Re.id]={...Re,...xe(Re.x,Re.y),isMarker:!1,fId:ce.id,bounds:ie}}),(Le=ce.edges)==null||Le.forEach(Re=>{se.push({...Re,fId:ce.id})})})),{nodes:j,edges:se}},[s]);Fe.useEffect(()=>{Xe.current=Te},[Te]),Fe.useEffect(()=>{le.current=m},[m]),Fe.useEffect(()=>{Ye.current=null,be("idle")},[l]);const be=j=>{De.current!==j&&(De.current=j,y(j))};Fe.useEffect(()=>{let j=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){j&&D("unsupported");return}try{const ae=await navigator.xr.isSessionSupported("immersive-ar");j&&D(ae?"supported":"unsupported")}catch{j&&D("unsupported")}})(),()=>{j=!1}},[]);const Be=(j,se)=>{const{nodes:ae,edges:ce}=Te,ie={};Object.keys(ae).forEach(ne=>{ie[ne]={}}),ce.forEach(ne=>{if(ae[ne.start]&&ae[ne.end]){const Pe=Math.hypot(ae[ne.start].physX-ae[ne.end].physX,ae[ne.start].physY-ae[ne.end].physY);ie[ne.start][ne.end]=Pe,ie[ne.end][ne.start]=Pe}});const xe={};Object.values(ae).forEach(ne=>{ne.isVerticalShaft&&ne.shaftId&&(xe[ne.shaftId]||(xe[ne.shaftId]=[]),xe[ne.shaftId].push(ne.id))}),Object.values(xe).forEach(ne=>{for(let Pe=0;Pe<ne.length;Pe++)for(let Ie=Pe+1;Ie<ne.length;Ie++)ie[ne[Pe]][ne[Ie]]=5,ie[ne[Ie]][ne[Pe]]=5});const ve=ne=>Object.keys(ie[ne]).length>0,Le=ne=>{if(ve(ne))return ne;const Pe=ae[ne];let Ie=1/0,Ce=ne;return Object.keys(ae).forEach($e=>{if(ae[$e].fId===Pe.fId&&ve($e)){const ft=Math.hypot(ae[$e].physX-Pe.physX,ae[$e].physY-Pe.physY);ft<Ie&&(Ie=ft,Ce=$e)}}),Ce},Re=Le(j),we=Le(se),Ne={},Ke={},Je=new Set(Object.keys(ae));for(Object.keys(ae).forEach(ne=>{Ne[ne]=1/0,Ke[ne]=null}),Ne[Re]=0;Je.size>0;){let ne=null;if(Je.forEach(Pe=>{(ne===null||Ne[Pe]<Ne[ne])&&(ne=Pe)}),Ne[ne]===1/0||ne===we)break;Je.delete(ne),Object.entries(ie[ne]).forEach(([Pe,Ie])=>{if(Je.has(Pe)){const Ce=Ne[ne]+Ie;Ce<Ne[Pe]&&(Ne[Pe]=Ce,Ke[Pe]=ne)}})}const G=[];let Ae=we;for(;Ae;)G.unshift(Ae),Ae=Ke[Ae];return G.length===0||G[0]!==Re?[]:(Re!==j&&G.unshift(j),we!==se&&G.push(se),G)};Fe.useEffect(()=>{v(f&&l&&f!==l?Be(f,l):[])},[f,l,Te]),Fe.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const ce=document.createElement("script");ce.id="opencv-script",ce.src="https://docs.opencv.org/3.4.16/opencv.js",ce.async=!0,document.body.appendChild(ce)}}else o("idle");let j=0;const se=ce=>{let ie=null;ce.webkitCompassHeading!==void 0&&ce.webkitCompassHeading!==null?ie=ce.webkitCompassHeading:ce.alpha!==null&&ce.alpha!==void 0&&(ie=360-ce.alpha),ie!==null&&(he.current={heading:ie,pitch:ce.beta||0,roll:ce.gamma||0},de.current=ie,k.current||(k.current=!0,P(!0)))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",se,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",se,!0));const ae=setInterval(()=>{if(!k.current)return;let ie=de.current-(j%360+360)%360;ie>180&&(ie-=360),ie<-180&&(ie+=360),j+=ie,A(j)},200);return()=>{mt(),clearInterval(ae),window.removeEventListener("deviceorientation",se,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",se,!0)}},[]);const et=async()=>{const j=window.cv;if(!j)return!1;Z.current=[],Me.current.matcher=new j.BFMatcher(j.NORM_HAMMING,!0);const ae=Object.values(Te.nodes).filter(ce=>ce.isMarker&&ce.imageUrl).map(ce=>new Promise(ie=>{const xe=new Image;xe.onload=()=>{try{const ve=document.createElement("canvas"),Le=ve.getContext("2d");ve.width=320,ve.height=Math.round(320*(xe.height/xe.width)),Le.drawImage(xe,0,0,ve.width,ve.height);const Re=j.imread(ve),we=new j.Mat;j.cvtColor(Re,we,j.COLOR_RGBA2GRAY);const Ne=new j.ORB,Ke=new j.KeyPointVector,Je=new j.Mat;Ne.detectAndCompute(we,new j.Mat,Ke,Je),Z.current.push({markerId:ce.id,gray:we,kp:Ke,des:Je,orb:Ne,width:we.cols,height:we.rows}),Re.delete(),ie(!0)}catch{ie(!1)}},xe.onerror=()=>ie(!1),xe.src=ce.imageUrl}));return await Promise.all(ae),Z.current.length>0},st=async()=>{if(r!=="idle")return;if(o("loading"),!await et()){o("idle"),alert("無法提取特徵");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(ae){console.warn("Device orientation permission was not granted.",ae)}const se=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});L.current=se,F.current.srcObject=se,F.current.play(),F.current.onloadedmetadata=()=>{w.current.width=F.current.videoWidth,w.current.height=F.current.videoHeight,o("scanning"),$()}}catch{alert("無相機權限"),o("idle")}},mt=()=>{W.current&&cancelAnimationFrame(W.current),L.current&&L.current.getTracks().forEach(j=>j.stop()),Ye.current=null,be("idle"),o("idle")},pt=(j,se,ae=!1)=>!se||se.length<2?!1:(j.save(),j.beginPath(),se.forEach((ce,ie)=>{ie===0?j.moveTo(ce.x,ce.y):j.lineTo(ce.x,ce.y)}),j.strokeStyle=ae?"rgba(34, 211, 238, 0.68)":"rgba(0, 255, 204, 0.86)",j.lineWidth=ae?12:15,j.lineCap="round",j.lineJoin="round",j.shadowBlur=ae?14:20,j.shadowColor="#00ffcc",j.stroke(),j.setLineDash([20,40]),j.lineDashOffset=-(Date.now()%1e3)/10,j.strokeStyle="white",j.lineWidth=ae?6:8,j.stroke(),j.restore(),!0),kt=j=>{const se=Ye.current;if(!se||!se.points||se.points.length<2)return!1;const ae=he.current,ce=k.current?(ae.heading-se.orientation.heading+540)%360-180:0,ie=k.current?ae.pitch-se.orientation.pitch:0,ve=(k.current?ae.roll-se.orientation.roll:0)*Math.PI/180,Le=Math.cos(ve),Re=Math.sin(ve),we=j.canvas.width/2,Ne=j.canvas.height/2,Ke=Math.max(j.canvas.width,j.canvas.height)*.95,Je=j.canvas.width*1.8,G=j.canvas.height*1.2,Ae=Math.max(-Je,Math.min(Je,Math.tan(ce*Math.PI/180)*Ke)),ne=Math.max(-G,Math.min(G,Math.tan(ie*Math.PI/180)*Ke*.75)),Pe=se.points.map(Ie=>{const Ce=Ie.x*j.canvas.width,$e=Ie.y*j.canvas.height,ft=Ce-we,Nt=$e-Ne;return{x:we+ft*Le-Nt*Re-Ae,y:Ne+ft*Re+Nt*Le+ne}});return pt(j,Pe,!0)},Wt=()=>{if(le.current.length>1)return le.current;const j=Object.values(Xe.current.nodes).filter(ae=>ae.isMarker&&ae.id!==l).map(ae=>ae.id),se=f||j[0];return!se||!l||se===l?[]:Be(se,l)},Mt=()=>{const j=Wt(),se=Xe.current.nodes,ae=j.map(Ke=>se[Ke]).filter(Boolean);if(ae.length<2)return null;const ce=ae[0],ie=.08,xe=ae.map(Ke=>new te((Ke.physX-ce.physX)*ie,.03,-(Ke.physY-ce.physY)*ie)),ve=new so,Le=b0(xe,.06,65484,.42),Re=b0(xe,.025,16777215,.95);Le&&ve.add(Le),Re&&ve.add(Re);for(let Ke=1;Ke<xe.length;Ke+=2){const Je=ow(xe[Ke-1],xe[Ke]);Je&&ve.add(Je)}const we=new ti(new nc(.1,24,24),new Ms({color:2282478}));we.position.copy(xe[0]),we.position.y+=.08,ve.add(we);const Ne=new ti(new nc(.12,24,24),new Ms({color:16731471}));return Ne.position.copy(xe[xe.length-1]),Ne.position.y+=.1,ve.add(Ne),ve},Bt=async()=>{const j=q.current;if(j)try{await j.end()}catch{}else It()},It=()=>{Se.current&&Se.current.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&j.material.dispose()}),ee.current&&(ee.current.setAnimationLoop(null),ee.current.dispose(),ee.current.domElement.remove()),q.current=null,ee.current=null,Se.current=null,X.current=null,oe.current=null,K.current=!1,N("idle")},Ht=async()=>{var j;if(!(_!=="supported"||!navigator.xr||q.current)){N("starting"),mt();try{const se={requiredFeatures:["hit-test"],optionalFeatures:V.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};V.current&&(se.domOverlay={root:V.current});const ae=await navigator.xr.requestSession("immersive-ar",se),ce=new UE({alpha:!0,antialias:!0});ce.xr.enabled=!0,ce.setPixelRatio(window.devicePixelRatio||1),ce.setSize(window.innerWidth,window.innerHeight),ce.domElement.className="absolute inset-0 h-full w-full",(j=V.current)==null||j.appendChild(ce.domElement),await ce.xr.setSession(ae);const ie=new r_,xe=new Si,ve=new ti(new kf(.18,.22,32).rotateX(-Math.PI/2),new Ms({color:65484,transparent:!0,opacity:.85}));ve.matrixAutoUpdate=!1,ve.visible=!1,ie.add(ve);const Le=await ae.requestReferenceSpace("local-floor").catch(()=>ae.requestReferenceSpace("local")),Re=await ae.requestReferenceSpace("viewer"),we=await ae.requestHitTestSource({space:Re});q.current=ae,ee.current=ce,X.current=we,oe.current=Le,N("placing");const Ne=Ke=>{if(K.current)return;const Je=Mt();if(!Je){N("no-route");return}Je.matrix.fromArray(Ke),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),ie.add(Je),Se.current=Je,K.current=!0,N("anchored")};ae.addEventListener("select",()=>{ve.visible&&Ne(ve.matrix.elements)}),ae.addEventListener("end",It),ce.setAnimationLoop((Ke,Je)=>{if(Je&&!K.current){const G=Je.getHitTestResults(we);if(G.length){const Ae=G[0].getPose(Le);Ae&&(ve.visible=!0,ve.matrix.fromArray(Ae.transform.matrix))}else ve.visible=!1}else ve.visible=!1;ce.render(ie,xe)})}catch(se){console.warn("Unable to start WebXR AR mode.",se),It(),N("failed")}}},$=()=>{const j=window.cv,se=F.current,ae=w.current,ce=ae.getContext("2d"),ie=Me.current.matcher;let xe=0,ve=null,Le=null,Re=0;const we=()=>{if(!se||!se.srcObject)return;ce.drawImage(se,0,0,ae.width,ae.height);let Ne=!1;if(xe%4===0){try{const G=j.imread(ae),Ae=new j.Mat;j.cvtColor(G,Ae,j.COLOR_RGBA2GRAY);const ne=new j.KeyPointVector,Pe=new j.Mat;if(Z.current[0].orb.detectAndCompute(Ae,new j.Mat,ne,Pe),!Pe.empty())for(let Ie of Z.current){const Ce=new j.DMatchVector;ie.match(Ie.des,Pe,Ce);let $e=[];for(let Nt=0;Nt<Ce.size();Nt++)$e.push(Ce.get(Nt));$e.sort((Nt,Pt)=>Nt.distance-Pt.distance);const ft=$e.filter(Nt=>Nt.distance<=50).slice(0,60);if(ft.length>=12){const Nt=[],Pt=[];for(let Rn of ft)Nt.push(Ie.kp.get(Rn.queryIdx).pt.x,Ie.kp.get(Rn.queryIdx).pt.y),Pt.push(ne.get(Rn.trainIdx).pt.x,ne.get(Rn.trainIdx).pt.y);const an=j.matFromArray(Nt.length/2,1,j.CV_32FC2,Nt),tn=j.matFromArray(Pt.length/2,1,j.CV_32FC2,Pt),dn=new j.Mat,jn=j.findHomography(an,tn,j.RANSAC,4,dn);let Wn=0;for(let Rn=0;Rn<dn.rows;Rn++)dn.data[Rn]===1&&Wn++;!jn.empty()&&Wn>=10&&(ve&&ve.delete(),ve=jn.clone(),Le=Ie.markerId,h(Le),Ne=!0),an.delete(),tn.delete(),dn.delete(),jn.delete()}if(Ce.delete(),Ne)break}G.delete(),Ae.delete(),ne.delete(),Pe.delete()}catch{}Ne?Re=8:Re>0?Re--:(ve&&(ve.delete(),ve=null),Le=null)}xe++;const Ke=Xe.current,Je=le.current;if(ve&&Le&&Je.length>1){const G=Ke.nodes[Le],Ae=Z.current.find(ne=>ne.markerId===Le);if(G&&Ae){const ne=Ae.width/.3,Pe=[];for(let Ie=0;Ie<Je.length;Ie++){const Ce=Je[Ie],$e=Ke.nodes[Ce];if(!$e||$e.fId!==G.fId)break;const ft=$e.physX-G.physX,Nt=-($e.physY-G.physY),Pt=Ae.width/2+ft*ne,an=Ae.height/2+Nt*ne,tn=ve.data64F,dn=tn[6]*Pt+tn[7]*an+tn[8];if(dn>0){const jn=(tn[0]*Pt+tn[1]*an+tn[2])/dn,Wn=(tn[3]*Pt+tn[4]*an+tn[5])/dn;Pe.push({x:jn,y:Wn})}}pt(ce,Pe,!1)&&(Ye.current={markerId:Le,orientation:{...he.current},updatedAt:Date.now(),points:Pe.map(Ie=>({x:Ie.x/ae.width,y:Ie.y/ae.height}))},be("locked"))}}else{const G=Je.length>1&&kt(ce);if(be(G?"holding":"searching"),!G){const Ae=Math.min(ae.width,ae.height)*.6;ce.strokeStyle="rgba(0, 255, 204, 0.4)",ce.lineWidth=2,ce.strokeRect((ae.width-Ae)/2,(ae.height-Ae)/2,Ae,Ae)}}W.current=requestAnimationFrame(we)};we()};if(!l){const j=Object.values(Te.nodes).filter(se=>se.isMarker).reduce((se,ae)=>{const ce=`${ae.bName} - ${ae.fName}`;return se[ce]||(se[ce]=[]),se[ce].push(ae),se},{});return g.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:g.jsx("button",{onClick:n,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:g.jsx(lo,{className:"w-5 h-5"})})}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[g.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[g.jsx(oo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(j).length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[g.jsx(da,{className:"w-16 h-16 text-slate-700 mb-4"}),g.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),g.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",g.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(j).map(([se,ae])=>g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:se}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:ae.map(ce=>g.jsxs("button",{onClick:()=>u(ce.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[g.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:ce.code}),g.jsx("div",{className:"flex-1",children:g.jsx("div",{className:"text-white font-bold",children:ce.title})})]},ce.id))})]},se))]})]})}const St=Te.nodes[l],Ze=f?Te.nodes[f]:null,gt=m.length>1?m[1]:null,He=gt?Te.nodes[gt]:null;let Rt=Ze?Ze.fId:St.fId,U=null,E={blX:0,blY:0,trX:100,trY:100};s.forEach(j=>j.floors.forEach(se=>{se.id===Rt&&(U=se.imageUrl,E=Xr(se))}));const re=(j,se)=>{const ae=E.trX-E.blX,ce=E.trY-E.blY,ie=ae!==0?(j-E.blX)/ae*100:50,xe=ce!==0?(E.trY-se)/ce*100:50;return{x:ie,y:xe}};return g.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-4 left-4 z-40",children:g.jsx("button",{onClick:()=>{mt(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),g.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[g.jsx("div",{ref:V,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),g.jsx("video",{ref:F,playsInline:!0,muted:!0,className:"hidden"}),g.jsx("canvas",{ref:w,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&g.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[I==="locked"&&"AR 路徑已鎖定",I==="holding"&&"陀螺儀空間錨點",I==="searching"&&"搜尋定位標記",I==="idle"&&"準備定位"]}),r==="scanning"&&U&&g.jsxs("div",{onClick:()=>x(!S),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${S?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[g.jsxs("div",{className:"relative w-full h-full",children:[g.jsx("img",{src:U,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[g.jsx("defs",{children:g.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:g.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),m.map((j,se)=>{if(se===m.length-1)return null;const ae=Te.nodes[j],ce=Te.nodes[m[se+1]];if(ae.fId===Rt&&ce.fId===Rt){const ie=re(ae.physX,ae.physY),xe=re(ce.physX,ce.physY);return g.jsx("line",{x1:`${ie.x}%`,y1:`${ie.y}%`,x2:`${xe.x}%`,y2:`${xe.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},se)}return null})]}),Ze&&Ze.fId===Rt&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${re(Ze.physX,Ze.physY).x}%`,top:`${re(Ze.physX,Ze.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-cyan-400 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"absolute w-[60px] h-[60px] origin-center transition-transform duration-200 ease-linear flex items-center justify-center",style:{transform:`rotate(${M}deg)`},children:g.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full opacity-70",children:[g.jsx("path",{d:"M50 50 L20 0 A 50 50 0 0 1 80 0 Z",fill:"url(#viewConeGrad)"}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"viewConeGrad",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[g.jsx("stop",{offset:"0%",stopColor:"#22d3ee",stopOpacity:"0"}),g.jsx("stop",{offset:"100%",stopColor:"#22d3ee",stopOpacity:"0.9"})]})})]})}),g.jsx("div",{className:"absolute w-full h-full origin-center transition-transform duration-200 ease-linear flex items-center justify-center",style:{transform:`rotate(${M}deg)`},children:g.jsx(ew,{className:"w-4 h-4 text-white fill-cyan-400 absolute -top-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.8)]"})}),g.jsx("div",{className:"w-3 h-3 bg-white border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_8px_#22d3ee]"})]})}),St&&St.fId===Rt&&g.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${re(St.physX,St.physY).x}%`,top:`${re(St.physX,St.physY).y}%`,transform:"translate(-50%, -50%)"},children:g.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),g.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),g.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:S?g.jsx(xg,{className:"w-4 h-4"}):g.jsx(gg,{className:"w-4 h-4"})}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[S?"縮小":"放大"," - ",Ze?Ze.fName:St.fName," ",z?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&g.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[g.jsx(iw,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),g.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),g.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("button",{onClick:Ht,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),g.jsx("button",{onClick:st,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"使用相機疊圖備援"})]}),_==="unsupported"&&g.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&g.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",g.jsx("button",{onClick:Bt,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),g.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${Ze?"translate-y-0":"translate-y-full"}`,children:g.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"bg-cyan-500/20 text-cyan-400 p-3 rounded-xl mr-4 shrink-0",children:g.jsx(KE,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 w-full min-w-0",children:[g.jsxs("div",{className:"text-xs font-bold text-slate-400 mb-1",children:["📍 定位成功：",Ze==null?void 0:Ze.bName," ",Ze==null?void 0:Ze.fName," (",Ze==null?void 0:Ze.code,")"]}),f===l?g.jsxs("div",{className:"mt-2 flex items-center bg-green-500/20 p-3 rounded-xl border border-green-500/50 shadow-inner",children:[g.jsx(ho,{className:"w-6 h-6 text-green-400 mr-3 shrink-0"}),g.jsx("span",{className:"text-green-400 font-bold text-sm tracking-wide",children:"🎉 您已抵達目的地！"})]}):He?He.fId!==(Ze==null?void 0:Ze.fId)?g.jsxs("div",{className:"mt-2 flex items-center bg-purple-500/20 p-3 rounded-xl border border-purple-500/50 shadow-inner",children:[g.jsx(Wr,{className:"w-6 h-6 text-purple-400 mr-3 shrink-0 animate-bounce"}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"text-purple-400 font-bold text-sm",children:"請換樓層"}),g.jsxs("span",{className:"text-purple-300/70 text-xs mt-0.5",children:["搭乘至 ",He.fName," 後重新掃描"]})]})]}):g.jsxs("div",{className:"mt-2 flex items-center bg-slate-800/80 p-3 rounded-xl border border-slate-700 shadow-inner",children:[g.jsx("div",{className:"bg-yellow-500/20 text-yellow-400 p-2 rounded-lg mr-3 shadow-[0_0_10px_rgba(234,179,8,0.2)] shrink-0",children:g.jsx(pg,{className:"w-6 h-6"})}),g.jsx("div",{className:"flex flex-col",children:g.jsx("span",{className:"text-yellow-400 font-bold text-sm tracking-wide",children:"請依循 AR 畫面上的發光路徑前往下一站"})})]}):g.jsx("div",{className:"text-red-400 text-sm font-bold mt-2",children:"⚠️ 無法計算路線，請確認點位連線設定。"})]})]})]})}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const ic=document.getElementById("ar-root");if(!ic)throw new Error("Missing #ar-root element.");const vg=new URLSearchParams(window.location.search),dw=window.location.pathname.endsWith("/admin-ar.html"),_g=ic.dataset.embedded==="true"||vg.get("embedded")==="1",A0=dw||_g;ov.createRoot(ic).render(g.jsx(Ef.StrictMode,{children:g.jsx(cw,{embedded:_g,initialTab:A0?ic.dataset.initialTab||vg.get("tab")||"map":"frontend",publicOnly:!A0})}));
